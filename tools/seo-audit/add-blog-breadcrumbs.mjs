/**
 * One-off: insert <BlogBreadcrumb> into every /blog post that lacks a breadcrumb.
 * Title is taken from the post's rendered <h1> so the trail matches the page.
 * Idempotent — skips any post that already has a BreadcrumbNav.
 */
import fs from 'node:fs';
import path from 'node:path';

const BLOG = 'src/app/blog';
const BUILT = '.next/server/app/blog';

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x2F;/g, '/')
    .replace(/\s+/g, ' ')
    .trim();

let changed = 0;
let skipped = 0;
const problems = [];

for (const slug of fs.readdirSync(BLOG)) {
  const file = path.join(BLOG, slug, 'page.tsx');
  if (!fs.existsSync(file)) continue;

  let src = fs.readFileSync(file, 'utf8');
  if (src.includes('BreadcrumbNav') || src.includes('BlogBreadcrumb')) {
    skipped++;
    continue;
  }

  const html = path.join(BUILT, `${slug}.html`);
  if (!fs.existsSync(html)) {
    problems.push(`${slug}: no built HTML`);
    continue;
  }
  const m = fs.readFileSync(html, 'utf8').match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) {
    problems.push(`${slug}: no <h1> found`);
    continue;
  }
  const title = decode(m[1]);
  if (!title) {
    problems.push(`${slug}: empty <h1>`);
    continue;
  }

  // Insert the import after the last existing import line.
  const importLine = `import { BlogBreadcrumb } from '@/components/blog-breadcrumb';`;
  const imports = [...src.matchAll(/^import .*?;$/gm)];
  const last = imports[imports.length - 1];
  if (!last) {
    problems.push(`${slug}: no import block`);
    continue;
  }
  const at = last.index + last[0].length;
  src = src.slice(0, at) + '\n' + importLine + src.slice(at);

  // Insert the component as the first child of <main>.
  const mainMatch = src.match(/<main[^>]*>/);
  if (!mainMatch) {
    problems.push(`${slug}: no <main> element`);
    continue;
  }
  const mAt = mainMatch.index + mainMatch[0].length;
  const jsx = `\n        <BlogBreadcrumb slug="${slug}" title={${JSON.stringify(title)}} />\n`;
  src = src.slice(0, mAt) + jsx + src.slice(mAt);

  fs.writeFileSync(file, src);
  console.log(`  + ${slug} — "${title}"`);
  changed++;
}

console.log(`\nupdated: ${changed}   already had one: ${skipped}`);
if (problems.length) {
  console.log('\nNOT changed (needs a look):');
  problems.forEach((p) => console.log('   ', p));
}
