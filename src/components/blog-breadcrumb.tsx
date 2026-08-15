import { BreadcrumbNav } from '@/components/breadcrumb-nav';

/**
 * Breadcrumb for a blog post: renders the visible trail and the matching
 * BreadcrumbList JSON-LD together, so the two can never drift apart.
 *
 * `slug` is the path segment under /blog (no leading slash).
 */
export function BlogBreadcrumb({ slug, title }: { slug: string; title: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.posso.co.uk/blog' },
      { '@type': 'ListItem', position: 3, name: title, item: `https://www.posso.co.uk/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbNav items={[{ label: 'Blog', href: '/blog' }, { label: title }]} />
    </>
  );
}
