#!/usr/bin/env node
/**
 * find-gloriafood.mjs
 * ------------------------------------------------------------------
 * Detects which restaurant websites use the GloriaFood / FoodBooking
 * online-ordering widget, and extracts each restaurant's unique IDs
 * (data-glf-cuid / data-glf-ruid) so you can de-dupe and key your CRM.
 *
 * GloriaFood (owned by Oracle) retires on 30 April 2027. Every live
 * install loads ONE loader script — ewm2.js — and every GloriaFood
 * element carries the attribute data-glf-cuid. Those two markers are
 * the fingerprint this tool keys on.
 *
 * USAGE
 *   node find-gloriafood.mjs <input.csv> [options]
 *
 * INPUT
 *   A CSV/TXT with one domain per line (header row optional). Domains
 *   may be bare (joes-pizza.co.uk), with protocol, or with a path —
 *   they're normalised automatically.
 *
 * OPTIONS
 *   --out <file>        Output CSV path (default: <input>.gloriafood-results.csv)
 *   --concurrency <n>   Parallel requests (default: 8)
 *   --timeout <ms>      Per-request timeout (default: 15000)
 *   --paths <a,b,c>     Extra paths to probe if homepage has no match
 *                       (default: /menu,/order,/order-online,/online-ordering)
 *   --browser           Second pass with Playwright on UNCONFIRMED domains,
 *                       to catch widgets injected by a tag manager / page builder.
 *                       Requires: npm install   (in this folder)
 *   --only-hits         Only write rows where GloriaFood was detected
 *   --quiet             Less console output
 *
 * EXAMPLES
 *   node find-gloriafood.mjs uk-domains.csv
 *   node find-gloriafood.mjs uk-domains.csv --browser --concurrency 12
 *   node find-gloriafood.mjs leads.csv --out confirmed.csv --only-hits
 *
 * NB legal: this only reads publicly served pages. Before you CONTACT
 * anyone, read ../LEGAL-OUTREACH.md — UK PECR/GDPR rules differ for
 * limited companies vs sole traders, and phone numbers must be screened
 * against TPS + CTPS.
 * ------------------------------------------------------------------
 */

import { readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/124.0 Safari/537.36';

// --- GloriaFood fingerprints (verified against the live ewm2.js) -----------
const RE = {
  // Strongest single signal: the loader script filename / CDN hosts.
  loader: /(?:fbgcdn\.com|foodbooking\.com)\/[\w/.-]*ewm2\.js/i,
  ewm2: /\bewm2\.js\b/i,
  host: /(?:^|\/\/|\.)(?:fbgcdn\.com|foodbooking\.com)\b/i,
  // Unique per-restaurant IDs (UUIDs). Present on every GloriaFood element.
  cuid: /data-glf-cuid=["']([0-9a-f-]{36})["']/i,
  ruid: /data-glf-ruid=["']([0-9a-f-]{36})["']/i,
  // Any data-glf-* attribute (ordering OR reservation buttons).
  glfAttr: /data-glf-(?:cuid|ruid|reservation|host|force-mode)=/i,
  // CSS class — present on ordering buttons (NOT reservation buttons).
  glfClass: /class=["'][^"']*\bglf-button\b/i,
  // Hosted "smart link" sometimes embedded directly.
  ordering: /foodbooking\.com\/ordering/i,
};

const WP_PLUGIN_PATH = '/wp-content/plugins/menu-ordering-reservations/readme.txt';

// --- CLI parsing -----------------------------------------------------------
function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--browser') args.browser = true;
    else if (a === '--only-hits') args.onlyHits = true;
    else if (a === '--quiet') args.quiet = true;
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--concurrency') args.concurrency = parseInt(argv[++i], 10);
    else if (a === '--timeout') args.timeout = parseInt(argv[++i], 10);
    else if (a === '--paths') args.paths = argv[++i];
    else if (a.startsWith('--')) { console.error(`Unknown option: ${a}`); process.exit(1); }
    else args._.push(a);
  }
  return args;
}

// --- Domain normalisation --------------------------------------------------
function normaliseDomain(raw) {
  if (!raw) return null;
  let s = raw.trim().replace(/^["']|["']$/g, '').trim();
  if (!s) return null;
  s = s.replace(/^https?:\/\//i, '').replace(/^www\./i, '');
  s = s.split('/')[0].split('?')[0].split('#')[0].trim().toLowerCase();
  // Looks like a header / junk row, skip it.
  if (!s.includes('.') || /\s/.test(s)) return null;
  if (/^(domain|website|url|site|host)$/i.test(s)) return null;
  return s;
}

function parseCsvDomains(text) {
  const out = [];
  const seen = new Set();
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const firstField = line.split(',')[0];
    const d = normaliseDomain(firstField);
    if (d && !seen.has(d)) { seen.add(d); out.push(d); }
  }
  return out;
}

// --- HTTP fetch with timeout + one retry -----------------------------------
async function fetchText(url, timeout) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'User-Agent': UA, Accept: 'text/html,*/*' },
    });
    const body = await res.text();
    return { status: res.status, finalUrl: res.url, body };
  } finally {
    clearTimeout(t);
  }
}

async function tryFetch(domain, path, timeout) {
  const candidates = [`https://${domain}${path}`, `https://www.${domain}${path}`];
  let best = null;   // remember a 4xx/5xx response that still has a body (bot-blocked sites often serve real HTML)
  let lastErr = null;
  for (const url of candidates) {
    try {
      const r = await fetchText(url, timeout);
      if (r.body) {
        if (r.status < 400) return r;      // clean response — use it
        if (!best) best = r;               // keep as fallback; markers may still be in the body
      } else {
        lastErr = `HTTP ${r.status}`;
      }
    } catch (e) {
      lastErr = e.name === 'AbortError' ? 'timeout' : (e.cause?.code || e.message || 'fetch error');
    }
  }
  return best || { error: lastErr };
}

// --- Detection on raw HTML -------------------------------------------------
function detect(html) {
  const methods = [];
  let strong = false;
  if (RE.loader.test(html) || RE.ewm2.test(html)) { methods.push('ewm2.js loader'); strong = true; }
  if (RE.glfAttr.test(html)) { methods.push('data-glf-* attribute'); strong = true; }
  if (RE.host.test(html)) { methods.push('fbgcdn/foodbooking host'); strong = true; }
  if (RE.glfClass.test(html)) methods.push('glf-button class');
  if (RE.ordering.test(html)) methods.push('foodbooking.com/ordering link');
  const cuid = html.match(RE.cuid)?.[1] || '';
  const ruid = html.match(RE.ruid)?.[1] || '';
  return { detected: strong || methods.length > 0, strong, methods, cuid, ruid };
}

// --- Per-domain HTTP check (homepage, then extra paths) --------------------
async function checkDomainHttp(domain, opts) {
  const paths = ['', ...opts.paths];
  let homeStatus = '';
  let lastError = '';
  let gotResponse = false;

  for (const path of paths) {
    const r = await tryFetch(domain, path, opts.timeout);
    if (r.error) {
      lastError = r.error;
      // No HTTP response at all for the homepage = dead/unresolvable domain. Don't
      // hammer it with order-page probes (the www. variant was already tried).
      if (path === '' && !gotResponse) break;
      continue;
    }
    gotResponse = true;
    if (path === '') homeStatus = r.status;   // report the homepage's status, not a probe 404
    // Detect on whatever body came back, even a 4xx — bot-blocked sites still
    // serve the real markup, and the fingerprints are unambiguous.
    const d = detect(r.body);
    if (d.detected) {
      return {
        domain, detected: true, confidence: d.strong ? 'high' : 'medium',
        methods: d.methods.join(' | '), cuid: d.cuid, ruid: d.ruid,
        matchedUrl: r.finalUrl, httpStatus: r.status, error: '',
      };
    }
    // Homepage reachable but no match: the order button usually lives on a
    // dedicated /order page, so keep probing the extra paths.
  }

  // Optional corroboration: WordPress plugin readme (cheap, 1 request).
  let wpHit = '';
  try {
    const wp = await tryFetch(domain, WP_PLUGIN_PATH, opts.timeout);
    if (!wp.error && wp.status === 200 && /menu.?ordering.?reservations|gloriafood/i.test(wp.body)) {
      wpHit = 'WP plugin: menu-ordering-reservations';
    }
  } catch { /* ignore */ }

  if (wpHit) {
    return {
      domain, detected: true, confidence: 'medium', methods: wpHit,
      cuid: '', ruid: '', matchedUrl: `https://${domain}${WP_PLUGIN_PATH}`,
      httpStatus: 200, error: '',
    };
  }

  return {
    domain, detected: false, confidence: gotResponse ? 'none' : 'unreachable',
    methods: '', cuid: '', ruid: '', matchedUrl: '',
    httpStatus: homeStatus, error: gotResponse ? '' : lastError,
  };
}

// --- Simple concurrency pool ----------------------------------------------
async function pool(items, size, worker, onProgress) {
  const results = new Array(items.length);
  let idx = 0;
  let done = 0;
  async function run() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await worker(items[i], i);
      onProgress?.(++done, items.length);
    }
  }
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, run));
  return results;
}

// --- Optional browser pass (Playwright) on unconfirmed domains -------------
async function browserPass(domains, opts) {
  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    console.error(
      '\n--browser requested but Playwright is not installed.\n' +
      'Install it in this folder:\n' +
      '    cd tools/gloriafood-finder\n' +
      '    npm install\n' +
      '    npx playwright install chromium\n'
    );
    return new Map();
  }

  const browser = await chromium.launch({ headless: true });
  const out = new Map();
  let done = 0;

  await pool(domains, Math.min(opts.concurrency, 6), async (domain) => {
    const context = await browser.newContext({ userAgent: UA });
    const page = await context.newPage();
    const netHit = { v: false };
    page.on('request', (req) => {
      if (RE.host.test(req.url())) netHit.v = true;
    });
    let result = { domain, detected: false, confidence: 'none', methods: '', cuid: '', ruid: '', matchedUrl: '', httpStatus: '', error: '' };
    try {
      const resp = await page.goto(`https://${domain}`, { waitUntil: 'domcontentloaded', timeout: opts.timeout });
      await page.waitForTimeout(2500); // let deferred/injected scripts run
      const dom = await page.evaluate(() => {
        const el = document.querySelector('[data-glf-cuid]');
        return {
          hasWidget: typeof window.glfWidget !== 'undefined' || typeof window.glfLoaded !== 'undefined',
          hasButtonId: !!document.querySelector('[id^="glfButton"]'),
          cuid: el?.getAttribute('data-glf-cuid') || '',
          ruid: el?.getAttribute('data-glf-ruid') || '',
        };
      });
      const methods = [];
      if (netHit.v) methods.push('fbgcdn/foodbooking request');
      if (dom.hasWidget) methods.push('window.glfWidget');
      if (dom.hasButtonId) methods.push('glfButton* element');
      if (dom.cuid) methods.push('data-glf-cuid (rendered)');
      if (methods.length) {
        result = {
          domain, detected: true, confidence: 'high', methods: methods.join(' | '),
          cuid: dom.cuid, ruid: dom.ruid, matchedUrl: resp?.url() || `https://${domain}`,
          httpStatus: resp?.status() || '', error: '',
        };
      }
    } catch (e) {
      result.error = e.message?.slice(0, 80) || 'browser error';
    } finally {
      await context.close();
    }
    out.set(domain, result);
    if (!opts.quiet) process.stderr.write(`\r  browser pass: ${++done}/${domains.length}   `);
  });

  await browser.close();
  if (!opts.quiet) process.stderr.write('\n');
  return out;
}

// --- CSV output ------------------------------------------------------------
const CSV_COLS = ['domain', 'detected', 'confidence', 'methods', 'cuid', 'ruid', 'matchedUrl', 'httpStatus', 'error'];
function csvEscape(v) {
  const s = String(v ?? '');
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
function toCsv(rows) {
  const lines = [CSV_COLS.join(',')];
  for (const r of rows) lines.push(CSV_COLS.map((c) => csvEscape(r[c])).join(','));
  return lines.join('\n') + '\n';
}

// --- Main ------------------------------------------------------------------
async function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = args._[0];
  if (!input) {
    console.error('Usage: node find-gloriafood.mjs <input.csv> [--browser] [--out file] [--concurrency n]');
    process.exit(1);
  }

  const opts = {
    concurrency: args.concurrency || 8,
    timeout: args.timeout || 15000,
    paths: (args.paths || '/menu,/order,/order-online,/online-ordering').split(',').map((p) => p.trim()).filter(Boolean),
    quiet: !!args.quiet,
  };

  const text = await readFile(input, 'utf8');
  const domains = parseCsvDomains(text);
  if (!domains.length) { console.error('No valid domains found in input.'); process.exit(1); }

  const log = (...a) => { if (!opts.quiet) console.error(...a); };
  log(`\nLoaded ${domains.length} unique domains from ${basename(input)}`);
  log(`HTTP pass — concurrency ${opts.concurrency}, timeout ${opts.timeout}ms\n`);

  // Pass 1: HTTP
  const results = await pool(domains, opts.concurrency,
    (d) => checkDomainHttp(d, opts),
    (done, total) => { if (!opts.quiet) process.stderr.write(`\r  HTTP pass: ${done}/${total}   `); },
  );
  if (!opts.quiet) process.stderr.write('\n');

  // Pass 2 (optional): browser, only on domains that were reachable but unconfirmed
  if (args.browser) {
    const unconfirmed = results.filter((r) => !r.detected && r.confidence === 'none').map((r) => r.domain);
    log(`\nBrowser pass on ${unconfirmed.length} reachable-but-unconfirmed domains (catches tag-manager injects)...`);
    if (unconfirmed.length) {
      const bmap = await browserPass(unconfirmed, opts);
      for (let i = 0; i < results.length; i++) {
        const b = bmap.get(results[i].domain);
        if (b && b.detected) results[i] = b;
      }
    }
  }

  const hits = results.filter((r) => r.detected);
  const rowsToWrite = args.onlyHits ? hits : results;
  const outPath = args.out || `${input}.gloriafood-results.csv`;
  await writeFile(outPath, toCsv(rowsToWrite), 'utf8');

  // Summary
  const withIds = hits.filter((r) => r.cuid).length;
  const unreachable = results.filter((r) => r.confidence === 'unreachable').length;
  console.error('\n==================== SUMMARY ====================');
  console.error(`  Domains checked:        ${results.length}`);
  console.error(`  GloriaFood detected:    ${hits.length}`);
  console.error(`    with cuid/ruid IDs:   ${withIds}`);
  console.error(`  Not detected:           ${results.length - hits.length - unreachable}`);
  console.error(`  Unreachable/errored:    ${unreachable}`);
  console.error(`  Output written to:      ${outPath}`);
  console.error('================================================\n');
  if (hits.length && !opts.quiet) {
    console.error('Sample hits:');
    for (const h of hits.slice(0, 8)) {
      console.error(`  ✓ ${h.domain.padEnd(34)} ${h.confidence.padEnd(7)} ${h.cuid ? 'cuid=' + h.cuid.slice(0, 8) + '…' : h.methods.slice(0, 40)}`);
    }
    console.error('');
  }
}

main().catch((e) => { console.error('\nFatal:', e); process.exit(1); });
