/**
 * Compare every new guide page against /pos-for-pizza-shop, element by element,
 * using the built HTML (what a crawler actually receives).
 */
import fs from 'node:fs';
import path from 'node:path';

const BUILT = '.next/server/app';
const REF = 'pos-for-pizza-shop';
const PAGES = [
  'pos-for-pizza-shop',
  'pos-for-fish-and-chip-shop',
  'pos-for-kebab-shop',
  'pos-for-chinese-takeaway',
  'pos-for-indian-takeaway',
  'kitchen-display-system',
];

const decode = (s) =>
  s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')
   .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/')
   .replace(/&nbsp;/g, ' ');

const flatten = (j) => {
  if (Array.isArray(j)) return j.flatMap(flatten);
  if (j && typeof j === 'object') return j['@graph'] ? [j, ...flatten(j['@graph'])] : [j];
  return [];
};

function read(slug) {
  const h = fs.readFileSync(path.join(BUILT, `${slug}.html`), 'utf8');
  const head = h.split('</head>')[0];
  const body = h.split('</head>')[1] || '';
  const schemas = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap((m) => { try { return flatten(JSON.parse(m[1])); } catch { return []; } });
  const types = schemas.map((s) => s['@type']).filter(Boolean);

  // Where does the word "Posso" first appear, as a % through the visible body text?
  const visible = decode(body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ').trim();
  // Measure from the start of the first H2 (i.e. after hero/nav chrome) to the FAQ.
  const startIdx = visible.indexOf('What to Look For') >= 0
    ? visible.indexOf('What to Look For')
    : visible.indexOf('What the Posso');
  const article = startIdx >= 0 ? visible.slice(startIdx) : visible;
  const possoAt = article.indexOf('Posso');
  const possoPct = possoAt < 0 ? null : Math.round((possoAt / article.length) * 100);

  const faqBlock = schemas.find((s) => s['@type'] === 'FAQPage');
  let faqMismatch = 0;
  if (faqBlock) {
    for (const q of faqBlock.mainEntity) {
      const a = q.acceptedAnswer.text.replace(/\s+/g, ' ');
      if (!visible.includes(a)) faqMismatch++;
      if (!visible.includes(q.name.replace(/\s+/g, ' '))) faqMismatch++;
    }
  }

  return {
    slug,
    title: decode((h.match(/<title>(.*?)<\/title>/) || [])[1] || ''),
    desc: decode((head.match(/name="description" content="([^"]*)"/) || [])[1] || ''),
    canonical: (head.match(/rel="canonical" href="([^"]+)"/) || [])[1] || '',
    robots: (head.match(/name="googlebot" content="([^"]+)"/) || [])[1] || '',
    ogTitle: decode((head.match(/property="og:title" content="([^"]*)"/) || [])[1] || ''),
    ogImg: (head.match(/property="og:image" content="([^"]+)"/) || [])[1] || '',
    keywords: /name="keywords"/.test(head),
    h1: decode(((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim(),
    h1n: (h.match(/<h1[\s>]/g) || []).length,
    h2n: (h.match(/<h2[\s>]/g) || []).length,
    h3n: (h.match(/<h3[\s>]/g) || []).length,
    words: visible.split(/\s+/).filter(Boolean).length,
    types,
    rating: /"aggregateRating"/.test(h),
    orgRef: h.includes('posso.co.uk/#organization'),
    crumbNav: /aria-label="Breadcrumb"/.test(h),
    faqCount: faqBlock ? faqBlock.mainEntity.length : 0,
    faqDetails: (h.match(/<details/g) || []).length,
    faqMismatch,
    outLinks: new Set([...body.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1])).size,
    calendly: /calendly/.test(h),
    form: body.includes('Enquiry Form'),
    possoPct,
  };
}

const data = PAGES.map(read);
const ref = data[0];

const col = (s, w) => String(s).padEnd(w);
console.log('REFERENCE: /' + REF + '\n');
console.log(col('page', 30), col('H1', 4), col('H2', 4), col('H3', 4), col('words', 7),
            col('crumb', 6), col('FAQ', 5), col('det', 5), col('mism', 5), col('links', 6),
            col('rating', 7), col('kw', 4), col('cal', 4), col('form', 5));
console.log('-'.repeat(120));
for (const d of data) {
  console.log(col('/' + d.slug, 30), col(d.h1n, 4), col(d.h2n, 4), col(d.h3n, 4), col(d.words, 7),
              col(d.crumbNav ? 'Y' : 'N', 6), col(d.faqCount, 5), col(d.faqDetails, 5),
              col(d.faqMismatch, 5), col(d.outLinks, 6),
              col(d.rating ? 'YES' : 'no', 7), col(d.keywords ? 'YES' : 'no', 4),
              col(d.calendly ? 'YES' : 'no', 4), col(d.form ? 'Y' : 'N', 5));
}

console.log('\n\nPER-PAGE DETAIL');
for (const d of data) {
  console.log('\n/' + d.slug);
  console.log('  title      ', `(${d.title.length}) ${d.title}`);
  console.log('  meta desc  ', `(${d.desc.length}) ${d.desc.slice(0, 90)}...`);
  console.log('  canonical  ', d.canonical, d.canonical === `https://www.posso.co.uk/${d.slug}` ? 'OK self/www/https' : '<-- CHECK');
  console.log('  googlebot  ', d.robots);
  console.log('  og:image   ', d.ogImg);
  console.log('  H1         ', d.h1);
  console.log('  schema     ', d.types.join(', '));
  console.log('  org by @id ', d.orgRef ? 'yes' : 'NO');
}

console.log('\n\nDELTAS vs /' + REF);
for (const d of data.slice(1)) {
  const diffs = [];
  if (d.rating !== ref.rating) diffs.push(`aggregateRating: ${ref.rating ? 'pizza has it' : 'n/a'} -> ${d.rating ? 'has it' : 'omitted'}`);
  if (d.keywords !== ref.keywords) diffs.push(`meta-keywords: ${ref.keywords ? 'pizza has it' : 'n/a'} -> ${d.keywords ? 'has it' : 'dropped'}`);
  if (d.calendly !== ref.calendly) diffs.push(`CTA: ${ref.calendly ? 'pizza=Calendly popup' : ''} -> ${d.calendly ? 'Calendly' : 'inline enquiry form'}`);
  if (d.h3n !== ref.h3n) diffs.push(`H3 count ${ref.h3n} -> ${d.h3n}`);
  const missing = ref.types.filter((t) => !d.types.includes(t));
  const extra = d.types.filter((t) => !ref.types.includes(t));
  if (missing.length) diffs.push(`schema missing vs pizza: ${missing.join(', ')}`);
  if (extra.length) diffs.push(`schema extra: ${extra.join(', ')}`);
  console.log('\n/' + d.slug);
  diffs.length ? diffs.forEach((x) => console.log('   - ' + x)) : console.log('   (identical on all checked axes)');
}

console.log('\n\nVENDOR-NEUTRAL RUN-UP  (how far into the article body "Posso" first appears)');
for (const d of data) {
  console.log('  ' + col('/' + d.slug, 30), d.possoPct === null ? 'n/a' : d.possoPct + '%');
}
