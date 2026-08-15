import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Crumb = { label: string; href?: string };

/**
 * Breadcrumb for a standard page: renders the visible trail and the matching
 * BreadcrumbList JSON-LD together, so the two can never drift apart.
 *
 * `path` is the current page's path (leading slash). Pages that already build
 * their own BreadcrumbList inside a pageSchema array keep doing that — this is
 * for pages that had neither.
 */
export function PageBreadcrumb({ items, path }: { items: Crumb[]; path: string }) {
  const base = 'https://www.posso.co.uk';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      ...items.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.label,
        item: `${base}${i === items.length - 1 ? path : c.href}`,
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbNav items={items} />
    </>
  );
}
