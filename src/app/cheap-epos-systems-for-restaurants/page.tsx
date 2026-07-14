import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, CreditCard, BarChart3, Phone, ArrowRight, ShieldCheck, Users, Utensils, Globe, PoundSterling } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affordable ePOS Systems for Restaurants | From £499 + VAT',
  description:
    'Cheap ePOS systems for restaurants from £499 + VAT — no hidden fees. Touchscreen till, card payments, kitchen display, and online ordering included. Finance from £24.92/week. 2-year warranty.',
  keywords: [
    'cheap epos systems for restaurants',
    'affordable restaurant epos',
    'cheap restaurant pos system',
    'budget restaurant epos',
    'low cost epos system',
    'cheap pos system uk',
    'restaurant epos system price',
    'epos system under 500',
    'affordable pos uk',
    'cheap till system for restaurants',
  ],
  alternates: {
    canonical: '/cheap-epos-systems-for-restaurants',
  },
  openGraph: {
    title: 'Affordable ePOS Systems for Restaurants | Posso UK',
    description:
      'Restaurant ePOS from £499 + VAT with touchscreen till, KDS, online ordering, and card payments. No hidden fees. Finance from £24.92/week.',
    url: 'https://posso.co.uk/cheap-epos-systems-for-restaurants',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Affordable Restaurant ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Affordable ePOS system for restaurants from £499 + VAT. Includes touchscreen till, kitchen display, card payments, online ordering, and table management with no hidden fees.',
    url: 'https://posso.co.uk/cheap-epos-systems-for-restaurants',
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
      'Touchscreen till from £499 + VAT',
      'Kitchen display system included',
      'Integrated card payments',
      'Online ordering website',
      'Table management and floor plan',
      'Free setup and staff training',
      '2-year hardware warranty',
      'Finance from £24.92/week',
      'Sales analytics and reporting',
      'Works offline',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Affordable ePOS for Restaurants', item: 'https://posso.co.uk/cheap-epos-systems-for-restaurants' },
    ],
  },
];

const includedFeatures = [
  { icon: Monitor, title: 'Touchscreen Till', description: 'Commercial-grade 15.6-inch touchscreen terminal with restaurant POS software pre-installed. Not a consumer tablet — a proper till built for hospitality.' },
  { icon: Utensils, title: 'Kitchen Display System', description: 'Orders appear on the kitchen screen the moment they are placed. Colour-coded by course, timed for preparation, and cleared with a tap.' },
  { icon: CreditCard, title: 'Card Payments', description: 'Integrated Teya card terminal — contactless, chip & PIN, Apple Pay, Google Pay. Payment amount sent from the POS, no re-keying.' },
  { icon: Globe, title: 'Online Ordering Website', description: 'Your own branded ordering website for collection and delivery. Low commission rates compared to third-party delivery apps.' },
  { icon: Users, title: 'Table Management', description: 'Visual floor plan with table status, covers tracking, course firing, and split bills. Designed for dine-in service.' },
  { icon: BarChart3, title: 'Sales Reports', description: 'Real-time dashboards showing covers, revenue, average spend, best sellers, and staff performance — accessible from any device.' },
];

const priceComparison = [
  { label: 'Touchscreen POS hardware', posso: 'Included', others: '£300–£800' },
  { label: 'POS software licence', posso: 'Included', others: '£30–£100/month' },
  { label: 'Kitchen display system', posso: 'Included', others: '£20–£50/month' },
  { label: 'Online ordering website', posso: 'Included', others: '£50–£150/month' },
  { label: 'Setup and training', posso: 'Free', others: '£200–£500' },
  { label: 'Hardware warranty', posso: '2 years', others: '1 year or none' },
];

export default function CheapEposSystemsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Affordable ePOS for Restaurants' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Zap className="w-3 h-3 mr-2" />
                FROM £499 + VAT — NO HIDDEN FEES
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Affordable ePOS Systems for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Restaurants
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A full restaurant ePOS system should not cost thousands. Posso gives you a touchscreen till, kitchen display, card payments, online ordering, and table management — all from £499 + VAT.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete POS system from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Finance available from £24.92/week</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Free setup, menu import & staff training</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included for £499 */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                What You Get for £499 + VAT
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Other providers charge this much for software alone. With Posso, you get the hardware, the software, and the support — all in one price.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {includedFeatures.map((f) => (
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

        {/* Price Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">
                How Posso Compares on Price
              </h2>
              <p className="text-slate-400 text-lg text-center mb-10 max-w-2xl mx-auto">
                Most ePOS providers charge separately for hardware, software, KDS, and online ordering. Here is what you would pay elsewhere versus what you get with Posso.
              </p>
              <div className="glass-card rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="grid grid-cols-3 gap-0 text-sm font-semibold text-white bg-slate-800/50 p-4">
                  <span>Feature</span>
                  <span className="text-center text-primary">Posso</span>
                  <span className="text-center">Typical Competitor</span>
                </div>
                {priceComparison.map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-0 p-4 border-t border-slate-700/30 text-sm">
                    <span className="text-slate-300">{row.label}</span>
                    <span className="text-center text-green-400 font-medium">{row.posso}</span>
                    <span className="text-center text-slate-400">{row.others}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-0 p-4 border-t border-slate-700/30 text-sm font-bold bg-slate-800/30">
                  <span className="text-white">Total first-year cost</span>
                  <span className="text-center text-primary">From £499 + VAT</span>
                  <span className="text-center text-slate-400">£1,500–£3,000+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Affordable Doesn't Mean Basic */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Affordable Does Not Mean Basic
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  When people search for a <strong className="text-white">cheap ePOS system for restaurants</strong>, they expect trade-offs. Fewer features, flimsy hardware, or hidden monthly fees that erode the savings.
                </p>
                <p>
                  Posso is different. We keep the price low by selling direct — no reseller markup, no bloated sales team, no office in Mayfair. The savings go straight to you. The hardware is the same commercial-grade equipment used by chains paying three times the price.
                </p>
                <p>
                  Every system includes a <strong className="text-white">2-year warranty</strong>, free setup, free menu import, and free staff training. There are no setup fees, no cancellation penalties, and no feature paywalls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Finance Option */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Finance from £24.92 per Week
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Prefer to spread the cost? Our finance option lets you get the full system today and pay weekly. No large upfront investment, no balloon payments.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, title: 'No Deposit', desc: 'Get started with zero upfront cost on our finance plan.' },
                  { icon: Clock, title: 'Flexible Terms', desc: '12 to 36-month terms to suit your cash flow.' },
                  { icon: CreditCard, title: 'Fixed Payments', desc: 'Same amount every week — no surprises, no rate increases.' },
                ].map((f) => (
                  <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50 text-center">
                    <f.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                    <p className="text-slate-400 text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Restaurant ePOS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/restaurant-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Full feature overview</p>
                </Link>
                <Link href="/table-ordering-app-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Table Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">QR code order & pay</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
                <Link href="/finance" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Finance Options</p>
                  <p className="text-slate-400 text-sm mt-1">From £24.92/week</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Affordable Restaurant ePOS — Frequently Asked Questions" faqs={[
          { question: 'Is a £499 ePOS system good enough for a busy restaurant?', answer: 'Yes. The Posso system handles dine-in table service, takeaway, delivery, and online orders. It includes a kitchen display system, table management, split bills, and integrated card payments. The price is low because we sell direct — not because the system is basic.' },
          { question: 'Are there any monthly fees on top of the £499?', answer: 'The POS software is included. Online ordering runs on a low commission model — you only pay when you receive orders. There are no mandatory monthly software subscriptions, no setup fees, and no cancellation penalties.' },
          { question: 'What finance options are available?', answer: 'We offer finance from £24.92 per week with terms from 12 to 36 months. No large deposit required. You get the full system delivered and installed straight away, and pay a fixed amount weekly or monthly.' },
          { question: 'What is included in the free setup?', answer: 'We pre-configure the hardware, import your full menu with modifiers and pricing, set up your floor plan, configure your kitchen display, and provide remote staff training. The system is ready to go live when it arrives.' },
          { question: 'How does the 2-year warranty work?', answer: 'Every piece of hardware — touchscreen, printer, cash drawer — is covered for two full years. If anything fails, we replace it. Most competitors offer 12 months or charge extra for extended warranties.' },
          { question: 'Can I add more tills or kiosks later?', answer: 'Yes. You can add additional POS terminals, kitchen displays, self-order kiosks, or card machines at any time. Everything connects to the same system, so menus, reports, and orders stay in sync across all devices.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
