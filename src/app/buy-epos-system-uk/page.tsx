import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, ShoppingBag, Package, Wrench, PoundSterling, Truck, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy ePOS System UK',
  description:
    'Buy ePOS System UK — complete buyer\'s guide covering what\'s included, pricing, finance options, installation, and support. ePOS systems from £499 + VAT with free setup.',
  keywords: [
    'buy epos system uk',
    'buy pos system uk',
    'epos system for sale uk',
    'purchase epos system',
    'epos system price uk',
    'buy till system uk',
    'epos system cost',
    'epos for sale',
    'buy epos online uk',
    'epos system finance uk',
  ],
  alternates: {
    canonical: '/buy-epos-system-uk',
  },
  openGraph: {
    title: 'Buy ePOS System UK | Posso UK',
    description:
      'Buy ePOS System UK — complete buyer\'s guide covering pricing, finance, installation, and what\'s included. ePOS from £499 + VAT.',
    url: 'https://www.posso.co.uk/buy-epos-system-uk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Complete ePOS system available to buy in the UK with touchscreen hardware, POS software, payment processing, free installation, and staff training. Finance options available.',
    url: 'https://www.posso.co.uk/buy-epos-system-uk',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '356',
      bestRating: '5',
    },
    featureList: [
      'Touchscreen terminal with stand',
      'POS software pre-installed',
      'Integrated payment processing',
      'Free installation and setup',
      'Staff training included',
      'Finance from £24.92 per week',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Buy ePOS System UK', item: 'https://www.posso.co.uk/buy-epos-system-uk' },
    ],
  },
];

const features = [
  { icon: Package, title: 'What\'s in the Box', description: 'Every Posso ePOS system includes a commercial-grade touchscreen terminal, adjustable stand, cash drawer, receipt printer, and all necessary cables. The POS software is pre-installed and pre-configured for your business type. You unbox it, plug it in, and start taking payments on day one.' },
  { icon: PoundSterling, title: 'Clear Pricing from £499 + VAT', description: 'The complete ePOS system starts from £499 + VAT. That price includes hardware, software licence, installation, menu or product setup, and staff training. No monthly software fees for the first year. No hidden charges that appear on your first invoice. The price you are quoted is the price you pay.' },
  { icon: BookOpen, title: 'Finance Options Available', description: 'If upfront payment does not suit your cash flow, finance is available from £24.92 per week. Spread the cost over 12, 24, or 36 months. No large deposit required. The system is delivered and installed immediately — you start trading from day one while paying in manageable instalments.' },
  { icon: Wrench, title: 'Free Installation & Setup', description: 'A Posso engineer installs your system on-site or guides you through remote setup. Your menu, products, prices, and categories are configured before the system arrives. Staff training covers taking orders, processing payments, running reports, and handling refunds. You do not pay extra for any of this.' },
  { icon: Truck, title: 'Fast UK Delivery', description: 'Standard delivery is 5–7 working days. Express delivery is available for urgent requirements. Systems are shipped pre-configured and tested before dispatch. When the box arrives, the software is already installed with your menu loaded. Installation typically takes under two hours.' },
  { icon: ShoppingBag, title: 'Own Your Hardware Outright', description: 'When you buy a Posso ePOS system, you own it. No leasing agreements, no monthly rental charges, no obligation to return equipment. After the purchase, the hardware is yours for the lifetime of the equipment. Typical lifespan is 5–7 years with proper use.' },
];

const benefits = [
  { title: 'Save Thousands vs Leasing', description: 'A leased POS system at £60/month costs £2,160 over 3 years — and you own nothing. Buy a Posso ePOS system from £499 + VAT and own it outright. Over 3 years, you save over £1,600 compared to a typical lease. Over 5 years, the savings exceed £3,000.' },
  { title: 'Start Trading Immediately', description: 'Your system arrives pre-configured with your menu, products, and prices already loaded. Plug in, connect to Wi-Fi, and start taking orders. New businesses opening next week can have a fully operational ePOS system delivered, installed, and staff-trained within 5 working days.' },
  { title: 'No Ongoing Commitments', description: 'Buying outright means no monthly software fees for the first year, no lease penalties, and no contract lock-ins. After the first year, optional support and updates are available at a transparent annual fee. You are never trapped — if you want to leave, your hardware is yours and your data exports freely.' },
  { title: 'Tax-Efficient Purchase', description: 'Buying an ePOS system is a capital expense that can be claimed against your business profits. The VAT is reclaimable if you are VAT-registered. Finance payments may also be tax-deductible as a business expense. Speak to your accountant about the most tax-efficient option for your business.' },
];

export default function BuyEposSystemUkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Buy ePOS System UK' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <ShoppingBag className="w-3 h-3 mr-2" />
                BUYER&apos;S GUIDE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Buy ePOS System{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  UK
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Everything you need to know before buying an ePOS system in the UK. What is included, how much it costs, finance options, and what to watch out for.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete ePOS systems from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Finance from £24.92 per week</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Free installation and staff training</li>
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

        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What You Get When You Buy</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A complete ePOS system — hardware, software, setup, and training — in one transparent package.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((f) => (
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

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Buy from Posso</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">{b.title}</h3>
                    <p className="text-slate-400">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                The Buying Process — Step by Step
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Step 1: Tell us about your business.</strong> Call 0808 175 3956 or fill in the contact form. We ask about your business type, number of locations, menu or product range, and any specific requirements. This takes 10 minutes and ensures we quote the right system.
                </p>
                <p>
                  <strong className="text-white">Step 2: Receive your quote.</strong> We send a detailed quote within 24 hours. It lists every item included — hardware, software, installation, training — with a single total price. No hidden fees. If you want to adjust the specification, we revise the quote the same day.
                </p>
                <p>
                  <strong className="text-white">Step 3: We build and deliver.</strong> Once you confirm, we configure the system with your menu, products, and categories. The system ships pre-loaded and tested. A Posso engineer installs it on-site or guides you through remote setup. Staff training completes the process. You are live and trading.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos-companies-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Companies UK</p>
                  <p className="text-slate-400 text-sm mt-1">Compare providers</p>
                </Link>
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Software features</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Card payment terminals</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Buy ePOS System UK — Frequently Asked Questions" faqs={[
          { question: 'How much does an ePOS system cost in the UK?', answer: 'A complete Posso ePOS system starts from £499 + VAT. This includes the touchscreen terminal, receipt printer, cash drawer, POS software, installation, menu setup, and staff training. Additional terminals, kiosks (from £699 + VAT), and peripherals are available. Finance from £24.92 per week.' },
          { question: 'Is finance available for ePOS systems?', answer: 'Yes. Finance is available from £24.92 per week with terms of 12, 24, or 36 months. No large deposit is required. The system is delivered and installed immediately — you start trading on day one while spreading the cost into manageable payments. Subject to status.' },
          { question: 'What is included in the price?', answer: 'The base price includes: commercial touchscreen terminal with stand, receipt printer, cash drawer, POS software licence, payment processing setup, free installation (on-site or remote), full menu/product configuration, and staff training. There are no hidden setup fees or surprise charges.' },
          { question: 'How long does delivery take?', answer: 'Standard delivery is 5–7 working days from order confirmation. Express delivery is available for urgent requirements. The system ships pre-configured and tested. Installation takes under two hours. Most businesses go from order to live trading within one week.' },
          { question: 'Can I add more terminals later?', answer: 'Yes. Additional terminals, kiosks, kitchen displays, and peripherals can be added at any time. The cloud system supports unlimited terminals per location. Each new terminal connects to your existing setup and shares your menu, pricing, and stock data automatically.' },
          { question: 'What warranty and support is included?', answer: 'Every system includes a 2-year hardware warranty and UK-based telephone and remote support. If hardware fails within warranty, we repair or replace it at no cost. Software updates are included. After the warranty period, extended support packages are available at transparent annual rates.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
