import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Fingerprint, Shield, Zap, Grid3X3, CreditCard } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Touchscreen POS System',
  description:
    'Touchscreen POS System with 15-inch capacitive display, IP54 rating, fanless design, visual product grid, and one-tap ordering. Built for restaurant and hospitality environments. POS from £499 + VAT.',
  keywords: [
    'touchscreen pos system',
    'touchscreen epos',
    'touchscreen till',
    'touchscreen pos system uk',
    'touch screen pos',
    'touchscreen epos system',
    'capacitive touchscreen pos',
    'restaurant touchscreen pos',
    'touchscreen till system',
    'touch pos system',
  ],
  alternates: {
    canonical: '/touchscreen-pos-system',
  },
  openGraph: {
    title: 'Touchscreen POS System | Posso UK',
    description:
      'Touchscreen POS System with 15" capacitive display, IP54 rating, fanless design, and one-tap ordering. POS from £499 + VAT.',
    url: 'https://posso.co.uk/touchscreen-pos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Touchscreen POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Touchscreen POS system with 15-inch capacitive display, IP54 splash-proof rating, fanless silent design, visual product grid, and one-tap ordering for restaurant and hospitality environments.',
    url: 'https://posso.co.uk/touchscreen-pos-system',
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
      reviewCount: '175',
      bestRating: '5',
    },
    featureList: [
      '15-inch capacitive touchscreen display',
      'IP54 splash-proof rating for hospitality',
      'Fanless silent design — no moving parts',
      'Visual product grid with images and colours',
      'One-tap ordering for speed of service',
      'Integrated customer-facing display option',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Touchscreen POS System', item: 'https://posso.co.uk/touchscreen-pos-system' },
    ],
  },
];

const features = [
  { icon: Monitor, title: '15" Capacitive Touchscreen', description: 'A 15-inch capacitive touchscreen that responds to the lightest touch — no jabbing required. The screen is bright enough for well-lit environments and has wide viewing angles so staff can see it from any position behind the counter. Multi-touch enabled for smooth scrolling and gestures.' },
  { icon: Shield, title: 'IP54 Splash-Proof Rating', description: 'Hospitality environments are messy. Drinks spill, sauces splash, and steam rises from the kitchen. The IP54-rated enclosure protects against splashes from any direction. No fan vents to let liquids in. The sealed design means the touchscreen keeps working even when the counter gets chaotic.' },
  { icon: Fingerprint, title: 'Fanless Silent Design', description: 'No fans means no noise, no dust buildup, and no moving parts to fail. The fanless design runs silently — important in front-of-house environments where a whirring computer undermines the ambiance. No fan also means no air intake, which is why the unit can be splash-proof.' },
  { icon: Grid3X3, title: 'Visual Product Grid', description: 'Products display as colourful tiles with images, names, and prices. Staff find items visually rather than scrolling through text lists. Categories are colour-coded. Popular items can be pinned to the home screen. New staff learn the layout in minutes because they can see the products.' },
  { icon: Zap, title: 'One-Tap Ordering', description: 'Tap a product and it is added to the order. Tap a modifier. Tap send. A standard order takes 3-5 taps and under 10 seconds. During the lunch rush, that speed means shorter queues, more customers served, and less frustration for staff working at pace.' },
  { icon: CreditCard, title: 'Integrated Payments', description: 'Connect a card terminal directly to the touchscreen POS. The order total transfers automatically — no re-keying the amount. Contactless, chip and PIN, Apple Pay, and Google Pay all supported. Payment reconciliation is automatic because every transaction links to the order.' },
];

const benefits = [
  { title: 'Built for Hospitality, Not an Office', description: 'Generic touchscreens fail in restaurants — fans clog with grease, screens crack from heat, and basic splash resistance is not enough. The Posso touchscreen POS is purpose-built for hospitality with IP54 protection, fanless cooling, and a commercial-grade display designed for 16-hour service days.' },
  { title: 'Staff Learn in Minutes', description: 'The visual product grid with images and colours means staff recognise products instantly. No memorising codes, no searching through menus, no training on a keyboard layout. New starters are productive within their first shift. The touch interface works like a smartphone — familiar to everyone.' },
  { title: 'Speed That Drives Revenue', description: 'One-tap ordering at 10 seconds per transaction means your counter processes 360 transactions per hour at full pace. Compare that to 30-second transactions on a legacy till — that is the difference between serving 120 customers per hour and 360. Speed directly translates to revenue during peak.' },
  { title: 'Reliable 365 Days a Year', description: 'No fans means no fan failures. No moving parts means nothing to wear out. The solid-state design runs for years without hardware maintenance. In a restaurant that operates 365 days a year with no downtime budget, reliability is not a nice-to-have — it is essential.' },
];

export default function TouchscreenPosSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Touchscreen POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                COMMERCIAL-GRADE TOUCHSCREEN POS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Touchscreen POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                15-inch capacitive touchscreen, IP54 splash-proof, fanless silent design, visual product grid, and one-tap ordering. Purpose-built for restaurants and hospitality.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> IP54 splash-proof for hospitality environments</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Fanless — silent and dust-proof</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Touchscreen POS from £499 + VAT</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Hardware Built for Hospitality</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">Not a repurposed office computer. A touchscreen designed to survive restaurants.</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why the Hardware Matters</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">Software Meets Hardware</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The touchscreen is only half the story. The Posso software is designed to <strong className="text-white">exploit the touchscreen interface</strong> — large tap targets, visual product grids, swipe navigation between categories, and a layout that puts the most-used functions within thumb reach.
                </p>
                <p>
                  Unlike POS software designed for mouse and keyboard and then retrofitted for touch, the Posso interface is <strong className="text-white">touch-first from the ground up</strong>. Every button is sized for finger taps. Every workflow flows naturally from left to right. Staff do not fight the interface — they flow through it.
                </p>
                <p>
                  The customer-facing display option turns the rear of the touchscreen into a <strong className="text-white">second screen</strong> showing the order in progress, total, and your branding. Customers see their order building in real time, reducing errors and building trust at the point of sale.
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
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Compare options</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Customer ordering</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Integrated payments</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Touchscreen POS System — Frequently Asked Questions" faqs={[
          { question: 'What size is the touchscreen?', answer: 'The Posso touchscreen POS features a 15-inch capacitive display — the optimal size for counter POS use. It is large enough to show a full product grid with images, but compact enough not to dominate the counter. The screen is commercial-grade with high brightness and wide viewing angles.' },
          { question: 'Is the touchscreen waterproof?', answer: 'The enclosure has an IP54 rating, which means it is protected against splashes from any direction. It is not submersible, but it handles the spills, splashes, and steam that are part of daily restaurant life. The fanless design means there are no air vents for liquids to enter.' },
          { question: 'Why does fanless design matter in a restaurant?', answer: 'Fans pull in air — along with grease, dust, and steam. In a restaurant environment, fan-cooled computers clog quickly and overheat. Fanless design eliminates this problem entirely. No fan also means silent operation and no moving parts to fail.' },
          { question: 'How does the visual product grid work?', answer: 'Products display as colourful tiles with images, names, and prices. Staff find items by sight rather than searching through text lists. Categories are colour-coded — hot drinks in red, cold drinks in blue, starters in green. Popular items can be pinned to the home screen for one-tap access.' },
          { question: 'Can I add a customer-facing display?', answer: 'Yes. The customer-facing display shows the order building in real time, the running total, and your branding. Customers see exactly what is being rung up, reducing errors and disputes. It also serves as a promotional display when not actively showing an order.' },
          { question: 'How much does the touchscreen POS cost?', answer: 'The touchscreen POS system starts from £499 + VAT including the 15-inch capacitive touchscreen, POS software, and 2-year warranty. Card terminals, receipt printers, and kitchen displays are available separately. Free setup and training included. Finance from £24.92 per week.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
