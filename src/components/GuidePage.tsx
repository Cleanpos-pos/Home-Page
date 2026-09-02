import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Check, Phone } from 'lucide-react';
import {
  PHONE,
  PHONE_HREF,
  articleSchema,
  breadcrumbSchema,
  type Guide,
  type Section,
} from '@/lib/guides';

/**
 * Renderer for the typed guide pages under src/content/guides/.
 *
 * Follows the house template (docs/seo.md §2): BreadcrumbNav, hero with badge
 * + split-gradient H1 + Check bullets, alternating section backgrounds,
 * <FAQSection> (which emits the FAQPage schema itself) and <DemoEnquiry /> on
 * the #contact anchor. BreadcrumbList + Article schema go out in a single
 * pageSchema script, referencing the sitewide Organization by @id.
 */

function SectionBlock({ section, shaded }: { section: Section; shaded: boolean }) {
  const bg = shaded ? ' bg-slate-900/30' : '';

  switch (section.kind) {
    case 'features': {
      const cols =
        section.items.length >= 6
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 sm:grid-cols-2';
      return (
        <section className={`py-20${bg}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              {section.kicker && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                  {section.kicker}
                </p>
              )}
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">{section.heading}</h2>
              {section.intro && (
                <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">{section.intro}</p>
              )}
            </div>
            <div className={`grid ${cols} gap-8 max-w-5xl mx-auto`}>
              {section.items.map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    case 'prose':
      return (
        <section className={`py-20${bg}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                {section.kicker && (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                    {section.kicker}
                  </p>
                )}
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">{section.heading}</h2>
              </div>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case 'table':
      return (
        <section className={`py-20${bg}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">{section.heading}</h2>
                {section.intro && (
                  <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">{section.intro}</p>
                )}
              </div>
              <div className="glass-card rounded-2xl border border-slate-700/50 p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        {section.columns.map((c, i) => (
                          <th
                            key={i}
                            scope="col"
                            className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400"
                          >
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, i) => (
                        <tr key={i} className="border-b border-slate-800 align-top last:border-b-0">
                          {row.map((cell, j) =>
                            j === 0 && section.firstColIsHeader ? (
                              <th key={j} scope="row" className="py-3 pr-4 font-medium text-white">
                                {cell}
                              </th>
                            ) : (
                              <td key={j} className="py-3 pr-4 text-slate-300">
                                {cell}
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {section.caption && (
                <p className="mt-4 text-sm text-slate-500 text-center">{section.caption}</p>
              )}
            </div>
          </div>
        </section>
      );

    case 'callout':
      return (
        <section className="py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div
              className={`max-w-3xl mx-auto glass-card rounded-xl border-l-4 p-6 ${
                section.variant === 'warning'
                  ? 'border-l-primary border border-slate-700/50'
                  : 'border-l-slate-600 border border-slate-700/50'
              }`}
            >
              {section.title && <p className="mb-2 font-semibold text-white">{section.title}</p>}
              <p className="text-slate-300 leading-relaxed">{section.body}</p>
            </div>
          </div>
        </section>
      );

    case 'links':
      return (
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">{section.heading}</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {section.items.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-primary/50 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
  }
}

export default function GuidePage({
  guide,
  updated,
  enquiryHeading,
  enquiryIntro,
}: {
  guide: Guide;
  /** ISO date, e.g. "2026-08-23" — drives Article.dateModified */
  updated: string;
  /** Optional override for the closing enquiry form's heading/intro */
  enquiryHeading?: string;
  enquiryIntro?: string;
}) {
  const pageSchema = [breadcrumbSchema(guide), articleSchema(guide, updated)];

  // Alternate section backgrounds on the substantial blocks only, so a
  // callout or link cluster does not break the light/dark rhythm.
  let majorIndex = -1;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav
          items={[{ label: 'ePOS Systems', href: '/pos' }, { label: guide.breadcrumb }]}
        />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <BookOpen className="w-3 h-3 mr-2" />
                {guide.eyebrow.toUpperCase()}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                {guide.h1Split ? (
                  <>
                    <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                      {guide.h1Split[0]}{' '}
                    </span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {guide.h1Split[1]}
                    </span>
                  </>
                ) : (
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    {guide.h1}
                  </span>
                )}
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">{guide.standfirst}</p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                {guide.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400 shrink-0" /> {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium"
                >
                  Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" /> {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick answer — a clearly delimited direct answer for AI extraction */}
        {guide.quickAnswer && (
          <section className="pb-4">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto glass-card rounded-xl border border-primary/30 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Short answer
                </p>
                <p className="text-lg leading-relaxed text-slate-200">{guide.quickAnswer}</p>
              </div>
            </div>
          </section>
        )}

        {guide.sections.map((section, i) => {
          if (section.kind === 'features' || section.kind === 'prose' || section.kind === 'table') {
            majorIndex += 1;
          }
          return (
            <SectionBlock
              key={i}
              section={section}
              shaded={
                (section.kind === 'features' || section.kind === 'prose' || section.kind === 'table') &&
                majorIndex % 2 === 0
              }
            />
          );
        })}

        <FAQSection
          title={guide.faqHeading}
          faqs={guide.faqs.map((f) => ({ question: f.q, answer: f.a }))}
        />

        <DemoEnquiry
          {...(enquiryHeading ? { heading: enquiryHeading } : {})}
          {...(enquiryIntro ? { intro: enquiryIntro } : {})}
        />
      </main>
      <Footer />
    </div>
  );
}
