import fs from 'node:fs';
import path from 'node:path';

const ROOT = '.next/server/app';
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(ROOT);

const rows = [];
for (const f of files) {
  const h = fs.readFileSync(f, 'utf8');
  const slug = '/' + path.relative(ROOT, f).split(path.sep).join('/').replace(/\.html$/, '');
  // Nodes may be a bare object, an array, or wrapped in an @graph — flatten all three.
  const flatten = (j) => {
    if (Array.isArray(j)) return j.flatMap(flatten);
    if (j && typeof j === 'object') return j['@graph'] ? [j, ...flatten(j['@graph'])] : [j];
    return [];
  };
  const schemas = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap((m) => { try { return flatten(JSON.parse(m[1])); } catch { return []; } });
  const types = new Set(schemas.map((s) => s['@type']).filter(Boolean));
  const text = h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ');
  rows.push({
    slug,
    h1: (h.match(/<h1[\s>]/g) || []).length,
    h2: (h.match(/<h2[\s>]/g) || []).length,
    h3: (h.match(/<h3[\s>]/g) || []).length,
    words: text.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length,
    canonical: (h.match(/rel="canonical" href="([^"]+)"/) || [])[1] || '',
    title: (h.match(/<title>(.*?)<\/title>/) || [])[1] || '',
    desc: (h.match(/name="description" content="([^"]*)"/) || [])[1] || '',
    ogimg: /property="og:image"/.test(h),
    keywords: /name="keywords"/.test(h),
    faq: types.has('FAQPage'),
    crumb: types.has('BreadcrumbList'),
    rating: /"aggregateRating"/.test(h),
    calendly: /calendly/.test(h),
    details: (h.match(/<details/g) || []).length,
  });
}

const n = rows.length;
const pct = (x) => `${String(x).padStart(3)} / ${n} (${String(Math.round((x / n) * 100)).padStart(3)}%)`;
console.log('PAGES AUDITED:', n, '\n');
console.log('--- COMPLIANCE vs the /pos-for-pizza-shop standard ---');
console.log('self canonical present        :', pct(rows.filter((r) => r.canonical).length));
console.log('exactly one <h1>              :', pct(rows.filter((r) => r.h1 === 1).length));
console.log('BreadcrumbList schema         :', pct(rows.filter((r) => r.crumb).length));
console.log('FAQPage schema                :', pct(rows.filter((r) => r.faq).length));
console.log('FAQ server-rendered <details> :', pct(rows.filter((r) => r.details > 0).length));
console.log('meta description present      :', pct(rows.filter((r) => r.desc).length));
console.log('og:image present              :', pct(rows.filter((r) => r.ogimg).length));
console.log('word count >= 1000            :', pct(rows.filter((r) => r.words >= 1000).length));
console.log('\n--- RISKS / LEGACY ---');
console.log('carries aggregateRating       :', pct(rows.filter((r) => r.rating).length));
console.log('carries meta-keywords         :', pct(rows.filter((r) => r.keywords).length));
console.log('embeds Calendly popup         :', pct(rows.filter((r) => r.calendly).length));
console.log('title > 60 chars              :', pct(rows.filter((r) => r.title.length > 60).length));
console.log('meta desc > 160 chars         :', pct(rows.filter((r) => r.desc.length > 160).length));
console.log('meta desc missing             :', pct(rows.filter((r) => !r.desc).length));

fs.writeFileSync('tools/seo-audit/seo-audit.json', JSON.stringify(rows, null, 1));

const list = (label, sel, limit = 30) => {
  const s = rows.filter(sel);
  console.log(`\n${label} (${s.length}):`);
  s.slice(0, limit).forEach((r) => console.log('   ', r.slug));
  if (s.length > limit) console.log(`    ... and ${s.length - limit} more`);
};
list('No canonical', (r) => !r.canonical);
list('H1 count != 1', (r) => r.h1 !== 1);
list('No BreadcrumbList', (r) => !r.crumb);
list('No FAQPage', (r) => !r.faq);
