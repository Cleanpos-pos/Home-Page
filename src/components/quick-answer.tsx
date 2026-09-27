import type { ReactNode } from 'react';

/**
 * The house "Short answer" card — a clearly delimited, self-contained answer
 * for AI Overview / answer-engine extraction (docs/seo.md: the passage that
 * gets cited). Same markup as the GuidePage quickAnswer block, so pillar pages
 * and typed guides present the extraction target identically.
 *
 * Keep it to 2–4 sentences that answer the page's core query on their own,
 * and attribute any statistic to its source rather than asserting it.
 */
export function QuickAnswer({ children, label = 'Short answer' }: { children: ReactNode; label?: string }) {
  return (
    <section className="pb-4" aria-label={label}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto glass-card rounded-xl border border-primary/30 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
          <p className="text-lg leading-relaxed text-slate-200">{children}</p>
        </div>
      </div>
    </section>
  );
}
