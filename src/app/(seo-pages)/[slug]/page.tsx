import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Zap, HelpCircle, Globe, ShieldCheck, BarChart3, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { allSeoPages, getPageBySlug, getAllSlugs, type SeoPageData } from '@/lib/seo-pages-data';

const featureIcons = [Zap, Smartphone, Globe, ShieldCheck, BarChart3, ArrowRight];

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    keywords: page.targetKeyword,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://posso.uk/${page.slug}`,
    },
  };
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": page.h1,
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": page.category,
    "description": page.description,
    "author": { "@type": "Organization", "name": "Posso Ltd" },
    "offers": { "@type": "Offer", "priceCurrency": "GBP", "availability": "https://schema.org/InStock" },
    "url": `https://posso.uk/${page.slug}`
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://posso.uk/" },
      { "@type": "ListItem", "position": 2, "name": page.h1, "item": `https://posso.uk/${page.slug}` }
    ]
  };

  const relatedPages = page.relatedSlugs
    .map(s => allSeoPages.find(p => p.slug === s))
    .filter(Boolean) as SeoPageData[];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-primary/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="pt-20 bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-500 py-3">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              {' / '}
              <span className="text-primary">{page.h1}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative pt-12 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 py-1 px-4">
                <Zap className="w-3 h-3 mr-2" />
                {page.category.toUpperCase()}
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent !leading-[1.1]">
                {page.h1}
              </h1>

              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                {page.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <SolutionEnquiryModal
                  defaultSolutionId="epos"
                  trigger={
                    <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                      Book Your Free Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  }
                />
                <Link href="/contact-posso-ltd">
                  <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 hover:bg-slate-800 transition-all">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Content */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400 leading-relaxed">{page.heroContent}</p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {page.sections.map((section, i) => (
          <section key={i} className={`py-24 ${i % 2 === 0 ? '' : 'bg-slate-900/50'}`}>
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                  {section.heading}
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">{section.content}</p>
              </div>
            </div>
          </section>
        ))}

        {/* Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to run a modern, efficient operation.
            </p>
          </div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {page.features.map((f, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <div key={i} className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by UK Businesses</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-slate-500 text-sm">UK Businesses</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <p className="text-3xl font-bold text-accent mb-2">0%</p>
                <p className="text-slate-500 text-sm">Commission on Orders</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <p className="text-3xl font-bold text-emerald-400 mb-2">24/7</p>
                <p className="text-slate-500 text-sm">UK-Based Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {page.faqs.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="flex items-center justify-center gap-3 mb-8">
                <HelpCircle className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {page.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-slate-800">
                    <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 leading-relaxed text-lg pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <section className="py-16 bg-slate-900/30">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8 text-center">Related Solutions</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {relatedPages.map((rp) => (
                  <Link key={rp.slug} href={`/${rp.slug}`} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/30 transition-colors block group">
                    <h3 className="font-bold text-white group-hover:text-primary mb-2">{rp.h1}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{rp.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">
                {page.ctaHeading}
              </h2>
              <p className="text-xl text-slate-400">{page.ctaText}</p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <SolutionEnquiryModal
                  defaultSolutionId="epos"
                  trigger={
                    <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 rounded-full transition-all hover:scale-105 active:scale-95">
                      Get a Free Quote
                    </Button>
                  }
                />
                <Link href="tel:08081753956">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-slate-700 hover:bg-slate-800 text-white">
                    Call 0808 175 3956
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
