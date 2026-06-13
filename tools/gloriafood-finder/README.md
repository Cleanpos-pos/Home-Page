# GloriaFood Finder

Detects which restaurant websites use the **GloriaFood / FoodBooking** online-ordering
widget, and extracts each restaurant's unique IDs (`data-glf-cuid` / `data-glf-ruid`)
so you can de-dupe chains and key your CRM.

GloriaFood (owned by Oracle) **retires on 30 April 2027**. Every restaurant this tool
finds is a forced-migration prospect for Posso. The fingerprints below stop working once
the widget is switched off — **scan now**, not in mid-2027.

---

## How it works

Every live GloriaFood install loads exactly one loader script — **`ewm2.js`** (from
`fbgcdn.com` / `foodbooking.com`) — and every GloriaFood button carries the attribute
**`data-glf-cuid`**. These two markers are near-unique to GloriaFood. The tool runs:

1. **HTTP pass (zero dependencies).** Fetches each site's homepage (and a few likely
   order pages) and greps the raw HTML for the fingerprints. Fast, catches most installs.
2. **Browser pass (optional, `--browser`).** Renders the *unconfirmed* domains with
   Playwright and checks the live DOM (`window.glfWidget`, `[data-glf-cuid]`) and network
   requests to `fbgcdn.com`. Catches widgets injected by a tag manager or page builder.

It only reads publicly served pages — no scraping of logged-in or rate-limited services.

---

## Quick start

Needs **Node 18+** (for built-in `fetch`). No install required for the HTTP pass.

```bash
# from this folder:
node find-gloriafood.mjs sample-domains.csv
```

Run against your own list (one domain per line, header row optional):

```bash
node find-gloriafood.mjs uk-domains.csv --out confirmed.csv --only-hits
```

Add the browser pass to catch JS-injected widgets:

```bash
npm install                       # installs Playwright (optional dep)
npx playwright install chromium   # one-time browser download
node find-gloriafood.mjs uk-domains.csv --browser
```

---

## Where to get the input list of domains

This tool **verifies and enriches** a list — it doesn't crawl the web to find sites. Seed
the list with one of these, then run every domain through this tool to confirm + extract IDs:

- **PublicWWW** (`publicwww.com`) — search page source for `"ewm2.js"` or `"data-glf-cuid"`,
  add `site:co.uk`. Paid plan exports the full domain list (no contacts).
- **BuiltWith** (`trends.builtwith.com/websitelist/GloriaFood`) — free preview list; paid
  export filtered to country = United Kingdom (some rows include contacts).
- **Google dorks** — `"foodbooking.com/widget/js/ewm2.js" site:.co.uk`, `"glf-button" "Leeds"`.
- **HTTP Archive on BigQuery** (free) — `WHERE t.technology = 'GloriaFood'` (under-represents
  small independents — use to validate counts).

> Purchased/automated lists under-represent the smallest independent takeaways. The browser
> pass + the extra-path probing here recover some of those.

---

## Options

| Option | Default | Purpose |
|---|---|---|
| `--out <file>` | `<input>.gloriafood-results.csv` | Output CSV path |
| `--concurrency <n>` | `8` | Parallel requests |
| `--timeout <ms>` | `15000` | Per-request timeout |
| `--paths <a,b,c>` | `/menu,/order,/order-online,/online-ordering` | Extra pages to probe if the homepage has no match |
| `--browser` | off | Second pass with Playwright on unconfirmed domains |
| `--only-hits` | off | Only write detected rows |
| `--quiet` | off | Less console output |

## Output columns

`domain, detected, confidence, methods, cuid, ruid, matchedUrl, httpStatus, error`

- **confidence** — `high` (loader / data-glf attr / host / rendered widget), `medium`
  (glf-button class or WP plugin only), `none` (reachable, no match), `unreachable`.
- **cuid / ruid** — the restaurant's UUIDs; use `cuid` as your unique CRM key (de-dupes
  multi-page sites and chains).

---

## ⚠️ Before you contact anyone

Detecting a site is fine. **Outreach is regulated.** See [`LEGAL-OUTREACH.md`](./LEGAL-OUTREACH.md):
UK PECR/GDPR rules differ for limited companies vs sole traders, and every phone number must
be screened against **TPS + CTPS** first. Short version: Ltd/LLP → compliant cold email OK;
sole trader → no cold email, use phone (screened) / LinkedIn / post / visit.
