/**
 * One-off: add <PageBreadcrumb> to the live pages that had no breadcrumb trail
 * and no BreadcrumbList schema. Idempotent — skips anything already carrying one.
 */
import fs from 'node:fs';

/** path -> trail (excluding the implicit "Home" crumb, which the component adds) */
const PAGES = {
  '/agents': [{ label: 'Agents' }],
  '/best-restaurant-epos-system-uk': [{ label: 'ePOS Systems', href: '/pos' }, { label: 'Best Restaurant EPOS UK' }],
  '/blog': [{ label: 'Blog' }],
  '/contact': [{ label: 'Contact' }],
  '/cookie-policy': [{ label: 'Cookie Policy' }],
  '/credit-card-machines-enquiry': [{ label: 'Card Machines', href: '/credit-card-machines' }, { label: 'Enquiry' }],
  '/digital-signage': [{ label: 'Digital Signage' }],
  '/finance': [{ label: 'Finance' }],
  '/privacy-policy': [{ label: 'Privacy Policy' }],
  '/shop-fitting': [{ label: 'Shop Fitting' }],
  '/shop-signage': [{ label: 'Shop Signage' }],
  '/software-terms': [{ label: 'Software Terms' }],
  '/table-ordering-app-uk': [{ label: 'Table Ordering App' }],
  '/teya-card-machine-application-form': [{ label: 'Card Machines', href: '/credit-card-machines' }, { label: 'Teya Application' }],
  '/ticketing': [{ label: 'Ticketing' }],
  '/web-design': [{ label: 'Web Design' }],
};

let changed = 0;
const problems = [];

for (const [path, items] of Object.entries(PAGES)) {
  const file = `src/app${path}/page.tsx`;
  if (!fs.existsSync(file)) {
    problems.push(`${path}: no page.tsx`);
    continue;
  }
  let src = fs.readFileSync(file, 'utf8');
  if (src.includes('BreadcrumbNav') || src.includes('PageBreadcrumb')) {
    problems.push(`${path}: already has a breadcrumb — skipped`);
    continue;
  }

  const imports = [...src.matchAll(/^import .*?;$/gm)];
  const last = imports[imports.length - 1];
  if (!last) {
    problems.push(`${path}: no import block`);
    continue;
  }
  const at = last.index + last[0].length;
  src = src.slice(0, at) + `\nimport { PageBreadcrumb } from '@/components/page-breadcrumb';` + src.slice(at);

  const main = src.match(/<main[^>]*>/);
  if (!main) {
    problems.push(`${path}: no <main> element`);
    continue;
  }
  const mAt = main.index + main[0].length;
  const jsx = `\n        <PageBreadcrumb path="${path}" items={${JSON.stringify(items)}} />\n`;
  src = src.slice(0, mAt) + jsx + src.slice(mAt);

  fs.writeFileSync(file, src);
  console.log(`  + ${path}`);
  changed++;
}

console.log(`\nupdated: ${changed}`);
if (problems.length) {
  console.log('\nNOT changed:');
  problems.forEach((p) => console.log('   ', p));
}
