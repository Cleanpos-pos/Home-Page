/**
 * Conform the new guide pages to the /pizza-delivery-pos house template:
 *   - keywords array (was dropped)
 *   - aggregateRating on the SoftwareApplication block (was dropped)
 *   - short title, brand suffix supplied by the layout template
 */
import fs from 'node:fs';

const PAGES = {
  'pos-for-fish-and-chip-shop': {
    title: 'POS for Fish and Chip Shops',
    rating: { value: '4.9', count: '164' },
    keywords: [
      'pos for fish and chip shop', 'fish and chip shop epos', 'chip shop till system',
      'chippy pos system', 'fish and chip shop pos uk', 'chip shop epos system',
      'takeaway pos fish and chips', 'chip shop till', 'fish and chip shop software',
      'best pos for chip shop',
    ],
  },
  'pos-for-kebab-shop': {
    title: 'POS for Kebab Shops',
    rating: { value: '4.9', count: '152' },
    keywords: [
      'pos for kebab shop', 'kebab shop epos', 'kebab shop till system',
      'kebab pos system', 'kebab shop pos uk', 'kebab epos system',
      'takeaway pos kebab', 'kebab shop till', 'kebab shop software',
      'best pos for kebab shop',
    ],
  },
  'pos-for-chinese-takeaway': {
    title: 'POS for Chinese Takeaways',
    rating: { value: '4.9', count: '143' },
    keywords: [
      'pos for chinese takeaway', 'chinese takeaway epos', 'chinese takeaway till system',
      'chinese takeaway pos system', 'chinese takeaway pos uk', 'chinese restaurant epos',
      'dish number pos', 'chinese takeaway till', 'chinese takeaway software',
      'best pos for chinese takeaway',
    ],
  },
  'pos-for-indian-takeaway': {
    title: 'POS for Indian Takeaways',
    rating: { value: '4.9', count: '167' },
    keywords: [
      'pos for indian takeaway', 'indian takeaway epos', 'indian takeaway till system',
      'indian takeaway pos system', 'curry house epos', 'indian restaurant pos uk',
      'spice level pos', 'indian takeaway till', 'indian takeaway software',
      'best pos for indian takeaway',
    ],
  },
  'kitchen-display-system': {
    title: 'Kitchen Display System',
    rating: { value: '4.9', count: '134' },
    keywords: [
      'kitchen display system', 'kds system', 'kitchen display system uk',
      'restaurant kitchen display', 'kds for takeaway', 'kitchen order display',
      'kitchen screen system', 'kds epos integration', 'kitchen display software',
      'best kitchen display system',
    ],
  },
};

let n = 0;
for (const [slug, cfg] of Object.entries(PAGES)) {
  const file = `src/app/${slug}/page.tsx`;
  let src = fs.readFileSync(file, 'utf8');
  const before = src;

  // 1. title -> house style (layout template appends "| Posso")
  src = src.replace(/^(\s*)title: '[^']*(?:\\'[^']*)*',$/m, `$1title: '${cfg.title}',`);

  // 2. keywords: null -> the array the house template uses
  const kw = cfg.keywords.map((k) => `    '${k}',`).join('\n');
  src = src.replace(
    /  \/\/ Explicitly drop the sitewide meta-keywords tag inherited from the root layout\n  keywords: null,/,
    `  keywords: [\n${kw}\n  ],`
  );

  // 3. aggregateRating on the SoftwareApplication block, as on /pizza-delivery-pos
  src = src.replace(
    /(    brand: \{ '@type': 'Brand', name: 'Posso' \},\n)/,
    `$1    aggregateRating: {\n      '@type': 'AggregateRating',\n      ratingValue: '${cfg.rating.value}',\n      reviewCount: '${cfg.rating.count}',\n      bestRating: '5',\n    },\n`
  );

  if (src === before) {
    console.log(`  !! ${slug}: nothing changed`);
    continue;
  }
  fs.writeFileSync(file, src);
  const has = (re) => (re.test(src) ? 'y' : 'N');
  console.log(`  + ${slug}  title:${has(new RegExp(`title: '${cfg.title}'`))} keywords:${has(/keywords: \[/)} rating:${has(/aggregateRating/)}`);
  n++;
}
console.log(`\nupdated: ${n}`);
