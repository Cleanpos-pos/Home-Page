import Link from 'next/link';

/**
 * The up-link every vertical POS page carries to the pillar and the price list.
 *
 * /pos is the pillar for "EPOS system" / "POS system"; each vertical page links
 * up to it with that exact anchor, and to /epos-pricing-uk, so the cluster reads
 * as one topic with one hub. Rendered in-prose (a sentence, not a nav row),
 * because contextual links carry more weight than boilerplate (docs/seo.md §5).
 */
export function EposClusterLinks() {
  return (
    <section className="py-8" aria-label="Posso EPOS system and pricing">
      <div className="container mx-auto px-4 md:px-6">
        <p className="max-w-3xl mx-auto text-center text-slate-400 leading-relaxed">
          This is one part of the Posso{' '}
          <Link href="/pos" className="text-primary hover:underline">EPOS system</Link> — the same till, kitchen display,
          ordering and card payments, set up for your type of venue. Every one-off and monthly cost is on the{' '}
          <Link href="/epos-pricing-uk" className="text-primary hover:underline">EPOS pricing page</Link>.
        </p>
      </div>
    </section>
  );
}
