import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  Zap,
  Phone,
  ArrowRight,
  Monitor,
  Smartphone,
  Globe,
  CreditCard,
  Truck,
  BarChart3,
  Clock,
  Users,
  Utensils,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Dark Kitchen Software UK (2026) — ePOS, Online Ordering & KDS',
  description:
    'The best dark kitchen software for UK ghost kitchens in 2026. Posso One combines ePOS, online ordering, kitchen display, delivery integration, and multi-brand support in one system. From £499 + VAT.',
  keywords: [
    'best dark kitchen software',
    'dark kitchen software UK',
    'ghost kitchen POS system',
    'cloud kitchen software',
    'dark kitchen ePOS',
    'virtual restaurant software',
    'delivery-only kitchen POS',
    'dark kitchen management software',
    'ghost kitchen technology',
    'best POS for dark kitchen',
  ],
  alternates: { canonical: '/best-dark-kitchen-software-by-posso-ltd-uk' },
  openGraph: {
    title: 'Best Dark Kitchen Software UK (2026) — Posso One',
    description:
      'Complete dark kitchen software: ePOS, online ordering, KDS, delivery integration, and multi-brand support. One system, every order.',
    url: 'https://www.posso.co.uk/best-dark-kitchen-software-by-posso-ltd-uk',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso One — Dark Kitchen Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'All-in-one dark kitchen software for UK ghost kitchens. ePOS, kitchen display, online ordering, delivery platform integration, and multi-brand support.',
    url: 'https://www.posso.co.uk/best-dark-kitchen-software-by-posso-ltd-uk',
    image: 'https://www.posso.co.uk/images/posso_epos_integration.png',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
    },
    featureList: [
      'Multi-brand menu management from one kitchen',
      'Just Eat, Uber Eats, and Deliveroo integration',
      'Commission-saving own online ordering website',
      'Kitchen display system with bump-bar workflow',
      'Delivery zone management with custom fees',
      'Driver app integration via Shipday',
      'Caller ID for phone orders',
      'Offline-first operation',
      'Real-time analytics and reporting',
      'Setup in under 24 hours',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Dark Kitchen Software UK (2026)',
    description: 'In-depth guide to choosing the best dark kitchen software in the UK. Features, pricing, and why Posso One is the top choice for ghost kitchens.',
    author: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
    publisher: { '@type': 'Organization', name: 'Posso Ltd', logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' } },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    url: 'https://www.posso.co.uk/best-dark-kitchen-software-by-posso-ltd-uk',
    image: 'https://www.posso.co.uk/images/posso_epos_integration.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Best Dark Kitchen Software', item: 'https://www.posso.co.uk/best-dark-kitchen-software-by-posso-ltd-uk' },
    ],
  },
];

const essentialFeatures = [
  { icon: Globe, title: 'Own Online Ordering Website', description: 'Your branded ordering page with delivery and collection. Low commission — a fraction of marketplace fees. Customers order directly from you.' },
  { icon: Truck, title: 'Delivery Platform Integration', description: 'Just Eat, Uber Eats, and Deliveroo orders flow directly into your POS. No extra tablets, no re-keying, no missed orders.' },
  { icon: Monitor, title: 'Kitchen Display System', description: 'Orders appear instantly on your KDS — colour-coded by platform and order type. Bump-bar workflow with countdown timers.' },
  { icon: Utensils, title: 'Multi-Brand Menu Management', description: 'Run multiple virtual brands from one kitchen. Each brand has its own menu, branding, and ordering website — all managed from one system.' },
  { icon: Smartphone, title: 'Caller ID & Phone Orders', description: 'When a customer calls, their details and order history pop up instantly. Speed up phone orders and reduce errors.' },
  { icon: BarChart3, title: 'Real-Time Analytics', description: 'Live dashboard: revenue by brand, revenue by channel, best sellers, peak hours, and payment breakdowns. X and Z reports included.' },
  { icon: Clock, title: 'Time Slot Management', description: 'Control capacity with configurable time slots. ASAP and scheduled orders. Set orders-per-slot limits to prevent kitchen overload.' },
  { icon: CreditCard, title: 'Integrated Card Payments', description: 'Teya terminal integration. Contactless, chip & PIN, Apple Pay, Google Pay. Payments fire directly from POS.' },
  { icon: ShieldCheck, title: 'Offline-First Operation', description: 'POS works without internet. Take orders, process cash payments, print receipts. Syncs automatically when connectivity returns.' },
];

const whyPosso = [
  'Setup in under 24 hours — we handle everything',
  'All delivery platforms on one screen — no tablet juggling',
  'Low commission on your own ordering website — a fraction of marketplace fees',
  'Multi-brand support — run 2, 3, or 10 brands from one kitchen',
  'Driver app integration via Shipday for your own deliveries',
  'Delivery zone management with custom fees per zone',
  'Free setup, menu import, and staff training',
  '2-year warranty and UK-based support',
  'Finance available from £24.92/week',
  'Works offline — no internet outage stops your service',
];

type ComparisonRow = {
  feature: string;
  posso: boolean;
  generic: boolean;
  aggregator: boolean;
};

const comparison: ComparisonRow[] = [
  { feature: 'Multi-brand menu management', posso: true, generic: false, aggregator: false },
  { feature: 'Just Eat / Uber Eats / Deliveroo integration', posso: true, generic: false, aggregator: true },
  { feature: 'Own branded ordering website', posso: true, generic: false, aggregator: false },
  { feature: 'Kitchen display system (KDS)', posso: true, generic: true, aggregator: false },
  { feature: 'Delivery zone management', posso: true, generic: false, aggregator: true },
  { feature: 'Driver app integration', posso: true, generic: false, aggregator: false },
  { feature: 'Caller ID for phone orders', posso: true, generic: false, aggregator: false },
  { feature: 'Offline operation', posso: true, generic: false, aggregator: false },
  { feature: 'Time slot capacity control', posso: true, generic: false, aggregator: true },
  { feature: 'Real-time multi-channel analytics', posso: true, generic: false, aggregator: false },
  { feature: 'Free setup & training', posso: true, generic: false, aggregator: false },
  { feature: 'UK-based support', posso: true, generic: true, aggregator: false },
];

function FeatureIcon({ available }: { available: boolean }) {
  return available ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-slate-600 mx-auto" />;
}

export default function BestDarkKitchenSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Best Dark Kitchen Software' }]} />

        {/* Hero — Featured Snippet Target */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Star className="w-3 h-3 mr-2 fill-primary" />
              #1 DARK KITCHEN SOFTWARE UK 2026
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
              <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                Best Dark Kitchen Software{' '}
              </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">UK</span>
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-2xl">
              The best dark kitchen software combines ePOS, online ordering, kitchen display, delivery integration, and multi-brand support in one system. Here&apos;s why Posso One is the top choice for UK ghost kitchens in 2026.
            </p>

            {/* Featured Snippet Answer */}
            <div className="mt-8 glass-card rounded-2xl border border-primary/30 p-8">
              <p className="text-lg text-white font-semibold mb-4">
                What is the best software for a dark kitchen?
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                <strong className="text-primary">Posso One</strong> is the best dark kitchen software for UK ghost kitchens. It combines a full ePOS till, kitchen display system, branded online ordering website, and direct integration with Just Eat, Uber Eats, and Deliveroo — all in one platform. It supports multi-brand operation (run multiple virtual restaurants from one kitchen) and includes delivery zone management, driver app integration, and caller ID for phone orders. Setup takes under 24 hours with free training and UK support. Hardware starts from <strong className="text-white">£499 + VAT</strong> with finance from £24.92/week.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
              </a>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-primary">1,000+</p>
                <p className="text-slate-400 text-sm">UK Installs</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-primary">&lt;24h</p>
                <p className="text-slate-400 text-sm">Setup Time</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-slate-400 text-sm">UK Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Great Dark Kitchen Software */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-6">
              What Makes Great Dark Kitchen Software?
            </h2>
            <div className="text-lg text-slate-300 leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                Dark kitchens — also called ghost kitchens, cloud kitchens, or virtual restaurants — operate differently from traditional restaurants. There&apos;s no front-of-house, no walk-in customers, and no table service. Every order comes through a digital channel: your website, a delivery app, or a phone call.
              </p>
              <p>
                This means your software needs to do things that a standard restaurant POS can&apos;t. It needs to <strong className="text-white">consolidate orders from multiple platforms onto one screen</strong>, manage delivery logistics, support multiple brands from a single kitchen, and provide an online ordering website that doesn&apos;t cost 30% per order in marketplace commission.
              </p>
              <p>
                Most POS systems were designed for dine-in restaurants and bolted on delivery features as an afterthought. <strong className="text-white">Posso One was built for delivery-first operations from the ground up.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Essential Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                9 Features Every Dark Kitchen Software Needs
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                And Posso One includes all of them.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {essentialFeatures.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Posso vs Generic POS vs Aggregator-Only
            </h2>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              Most dark kitchens either use a generic restaurant POS (not built for delivery) or rely entirely on aggregator tablets (Just Eat, Uber Eats). Posso combines both.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-3 text-left text-white font-semibold">Feature</th>
                    <th className="py-3 px-3 text-center text-primary font-semibold">Posso One</th>
                    <th className="py-3 px-3 text-center text-slate-400 font-semibold">Generic POS</th>
                    <th className="py-3 px-3 text-center text-slate-400 font-semibold">Aggregator Only</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-3 text-slate-300">{row.feature}</td>
                      <td className="py-3 px-3"><FeatureIcon available={row.posso} /></td>
                      <td className="py-3 px-3"><FeatureIcon available={row.generic} /></td>
                      <td className="py-3 px-3"><FeatureIcon available={row.aggregator} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Posso */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-primary/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Why UK Dark Kitchens Choose Posso</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyPosso.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" /> {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Launch */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold gradient-text">Launch Your Dark Kitchen in 3 Steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { n: '1', t: 'Sign Up & Configure', d: 'We set up your ePOS, create your ordering website, and configure your menu — all remotely.' },
                { n: '2', t: 'Connect Your Kitchen', d: 'Install KDS on any screen. Connect printers. Link Just Eat, Uber Eats, and Deliveroo.' },
                { n: '3', t: 'Go Live & Take Orders', d: 'Start accepting orders from your website and delivery platforms — all on one screen.' },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {s.n}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.t}</h3>
                  <p className="text-slate-400">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/dark-kitchens-quick-set-up-epos-and-website-orders-take-orders-now" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Dark Kitchen Setup</p>
                  <p className="text-slate-400 text-sm mt-1">Full setup guide</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own ordering website</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Dark Kitchen Software — FAQs" faqs={[
          { question: 'What is the best software for running a dark kitchen?', answer: 'The best dark kitchen software combines ePOS, kitchen display, online ordering, and delivery platform integration in one system. Posso One is the top choice for UK ghost kitchens — it includes all of these plus multi-brand support, delivery zone management, and driver app integration. Setup takes under 24 hours.' },
          { question: 'Can I run multiple brands from one dark kitchen?', answer: 'Yes — Posso One supports multi-brand operation. Each brand can have its own menu, branding, and online ordering website while sharing the same POS and kitchen display. Orders from all brands appear on one screen, colour-coded by brand.' },
          { question: 'How does dark kitchen software integrate with Just Eat and Uber Eats?', answer: 'Posso connects directly to Just Eat, Uber Eats, and Deliveroo. Orders from all platforms flow into your POS automatically and print to your kitchen display. No extra tablets on the counter, no manual re-keying.' },
          { question: 'How much does dark kitchen software cost?', answer: 'A complete Posso One dark kitchen setup starts from £499 + VAT for the POS till. Add a kitchen display screen from £199, online ordering from £350 (or free with Teya card machines). Finance available from £24.92/week. Free setup and training included.' },
          { question: 'Do I need a separate tablet for each delivery app?', answer: 'No. With Posso One, all delivery platform orders appear on your POS screen and kitchen display. You can remove the individual aggregator tablets from your counter entirely.' },
          { question: 'Can dark kitchen software work without internet?', answer: 'The Posso ePOS is built offline-first — take orders and process cash payments even when the internet drops. However, online ordering and delivery platform integrations require an active internet connection to receive orders.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
