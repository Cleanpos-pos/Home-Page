'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Contact } from './sections/contact';
import { SolutionEnquiryModal } from './solution-enquiry-modal';
import { BreadcrumbNav } from './breadcrumb-nav';
import { FAQSection } from './sections/faq-section';

type FAQItem = { question: string; answer: string };
type FeatureItem = { title: string; description: string };
type StepItem = { title: string; desc: string };

type SolutionsLandingPageProps = {
  headline: string;
  subheadline: string;
  benefits: string[];
  ctaText: string;
  // Optional SEO enrichment (backward-compatible — pages without these still render)
  slug?: string;
  breadcrumbLabel?: string;
  intro?: { title: string; paragraphs: string[]; image?: string; imageAlt?: string };
  features?: FeatureItem[];
  featuresTitle?: string;
  howItWorks?: StepItem[];
  faqs?: FAQItem[];
  faqTitle?: string;
  schemaName?: string;
  schemaDescription?: string;
};

export function SolutionsLandingPage({
  headline,
  subheadline,
  benefits,
  ctaText,
  slug,
  breadcrumbLabel,
  intro,
  features,
  featuresTitle,
  howItWorks,
  faqs,
  faqTitle,
  schemaName,
  schemaDescription,
}: SolutionsLandingPageProps) {
  const solutionId = ctaText.toLowerCase().replace(/ /g, '-');
  const pageUrl = slug ? `https://www.posso.co.uk/${slug.replace(/^\//, '')}` : undefined;

  const pageSchema = pageUrl
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: schemaName || `${breadcrumbLabel || headline} POS & Ticketing Software`,
          description:
            schemaDescription || subheadline,
          url: pageUrl,
          areaServed: { '@type': 'Country', name: 'United Kingdom' },
          provider: {
            '@type': 'Organization',
            name: 'Posso Ltd',
            url: 'https://www.posso.co.uk',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
            ...(breadcrumbLabel
              ? [{ '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: pageUrl }]
              : []),
          ],
        },
      ]
    : null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {pageSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      )}
      <Header />
      <main className="flex-1">
        {breadcrumbLabel && (
          <div className="pt-20">
            <BreadcrumbNav items={[{ label: breadcrumbLabel }]} />
          </div>
        )}

        <section className={`relative w-full min-h-[70vh] flex items-center overflow-hidden ${breadcrumbLabel ? '' : 'pt-20'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  {headline}
              </h1>
              <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-300">
                  {subheadline}
              </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20 -mt-24 relative z-10">
            <div className="mx-auto max-w-4xl glass-card p-8 md:p-12 rounded-2xl">
                <h2 className="text-3xl font-bold text-slate-100 mb-6">Why Posso?</h2>
                <div className="grid md:grid-cols-1 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <Check className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-50">{benefit.split(':')[0]}</h3>
                                <p className="text-slate-300">{benefit.split(': ')[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <SolutionEnquiryModal
                        defaultSolutionId={solutionId}
                        trigger={
                            <Button size="lg">
                                {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        }
                    />
                </div>
            </div>
        </section>

        {/* Intro prose — keyword-rich, two-column when an image is supplied */}
        {intro && (
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className={intro.image ? 'grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto' : 'max-w-3xl mx-auto'}>
                {intro.image && (
                  <figure>
                    <img
                      src={intro.image}
                      alt={intro.imageAlt || intro.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="rounded-2xl shadow-xl w-full"
                    />
                  </figure>
                )}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">{intro.title}</h2>
                  <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
                    {intro.paragraphs.map((p, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Feature grid */}
        {features && features.length > 0 && (
          <section className="py-16 md:py-20 bg-slate-900/30">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                  {featuresTitle || 'Everything You Get with Posso'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map((f) => (
                  <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                    <p className="text-slate-400">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How it works */}
        {howItWorks && howItWorks.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How It Works</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {howItWorks.map((s, i) => (
                  <div key={s.title} className="text-center">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-slate-400 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {faqs && faqs.length > 0 && (
          <FAQSection title={faqTitle} faqs={faqs} />
        )}

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
