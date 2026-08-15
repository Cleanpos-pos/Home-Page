import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, HelpCircle, Globe, ShieldCheck, BarChart3, Smartphone, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';
import { allSeoPages, getPageBySlug, getAllSlugs, type SeoPageData } from '@/lib/seo-pages-data';

const featureIcons = [Zap, Smartphone, Globe, ShieldCheck, BarChart3, ArrowRight];

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  const mp4 = `https://www.posso.co.uk/videos/${page.slug}.mp4`;
  const thumb = `https://www.posso.co.uk/videos/thumbs/${page.slug}.png`;

  return {
    // Data titles already end in "| Posso" — absolute skips the layout's "%s | Posso"
    // template, which was rendering a double brand suffix ("… | Posso | Posso").
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    keywords: page.targetKeyword,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://www.posso.co.uk/${page.slug}`,
      // A page-level openGraph block replaces the layout's entirely, so without an
      // explicit image these pages shipped with no og:image at all.
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: page.h1 }],
      ...(page.video
        ? {
            type: 'video.other',
            images: [thumb],
            videos: [{ url: mp4, type: 'video/mp4', width: 1920, height: 1080 }],
          }
        : {}),
    },
    ...(page.video
      ? { twitter: { card: 'player', title: page.title, description: page.description, images: [thumb] } }
      : {}),
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
    "url": `https://www.posso.co.uk/${page.slug}`
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.posso.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": page.h1, "item": `https://www.posso.co.uk/${page.slug}` }
    ]
  };

  const faqSchema = page.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  } : null;

  const videoSchema = page.video ? (() => {
    const base = `https://www.posso.co.uk/${page.slug}`;
    const ch = page.video.chapters;
    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": page.h1,
      "description": page.description,
      "thumbnailUrl": [`https://www.posso.co.uk/videos/thumbs/${page.slug}.png`],
      "uploadDate": page.video.uploadDate,
      "duration": page.video.durationISO,
      "contentUrl": `https://www.posso.co.uk/videos/${page.slug}.mp4`,
      "embedUrl": base,
      "publisher": {
        "@type": "Organization",
        "name": "Posso Ltd",
        "logo": { "@type": "ImageObject", "url": "https://www.posso.co.uk/icon-512x512.png" },
      },
      "hasPart": ch.map((c, i) => ({
        "@type": "Clip",
        "name": c.name,
        "startOffset": c.start,
        "endOffset": i + 1 < ch.length ? ch[i + 1].start : page.video!.durationSec,
        "url": `${base}?t=${c.start}`,
      })),
      "potentialAction": {
        "@type": "SeekToAction",
        "target": `${base}?t={seek_to_second_number}`,
        "startOffset-input": "required name=seek_to_second_number",
      },
    };
  })() : null;

  const relatedPages = page.relatedSlugs
    .map(s => allSeoPages.find(p => p.slug === s))
    .filter(Boolean) as SeoPageData[];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-primary/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {videoSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
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

        {/* Video */}
        {page.video && (
          <section className="pb-4">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-primary/10 bg-black aspect-video">
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video className="w-full h-full" controls preload="none" poster={`/videos/thumbs/${page.slug}.png`}>
                    <source src={`/videos/${page.slug}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">In this video</h2>
                    <ul className="space-y-3">
                      {page.video.chapters.map((c, i) => (
                        <li key={i} className="flex items-baseline gap-4 text-slate-300">
                          <span className="text-primary font-mono text-sm shrink-0">{Math.floor(c.start / 60)}:{String(c.start % 60).padStart(2, '0')}</span>
                          <span>{c.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Summary</h2>
                    <p className="text-slate-400 leading-relaxed">{page.video.transcript}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

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
                <p className="text-3xl font-bold text-accent mb-2">Low</p>
                <p className="text-slate-500 text-sm">Commission Rates</p>
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
              {/* Native details/summary so answers are in the server-rendered HTML —
                  the client-only accordion left crawlers seeing questions with no answers. */}
              <div className="w-full">
                {page.faqs.map((faq, i) => (
                  <details key={i} className="group border-b border-slate-800">
                    <summary className="flex items-center justify-between cursor-pointer list-none text-left text-lg font-bold hover:text-primary transition-colors py-6 [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="text-slate-400 leading-relaxed text-lg pb-6">{faq.a}</p>
                  </details>
                ))}
              </div>
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
