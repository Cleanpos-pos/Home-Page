import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Smartphone, Wifi, Battery, CreditCard, ShoppingBag, MapPin } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portable ePOS System',
  description:
    'Portable ePOS System for events, pop-ups, market stalls, and mobile trading. WiFi and 4G operation, battery-powered, wireless payments, and offline mode. POS from £499 + VAT.',
  keywords: [
    'portable epos system',
    'portable pos system',
    'mobile pos system',
    'portable epos',
    'event pos system',
    'pop up pos system',
    'market stall pos',
    'mobile epos system',
    'portable till system',
    'wireless pos system uk',
  ],
  alternates: {
    canonical: '/portable-epos-system',
  },
  openGraph: {
    title: 'Portable ePOS System | Posso UK',
    description:
      'Portable ePOS System for events, pop-ups, and markets. WiFi/4G, battery-powered, wireless payments, and offline mode.',
    url: 'https://posso.co.uk/portable-epos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Portable ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Portable ePOS system for events, pop-ups, market stalls, and mobile trading with WiFi and 4G connectivity, battery-powered operation, wireless card payments, and offline-first mode.',
    url: 'https://posso.co.uk/portable-epos-system',
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
      reviewCount: '119',
      bestRating: '5',
    },
    featureList: [
      'WiFi and 4G connectivity — works anywhere',
      'Battery-powered for all-day operation',
      'Wireless Bluetooth card payments',
      'Offline-first — sells without internet',
      'Lightweight tablet-based hardware',
      'Full POS features in a portable form factor',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Portable ePOS System', item: 'https://posso.co.uk/portable-epos-system' },
    ],
  },
];

const features = [
  { icon: Wifi, title: 'WiFi & 4G Connectivity', description: 'Connect via WiFi at venues that provide it, or use your phone\'s 4G hotspot when there is no WiFi. The Posso portable ePOS works on any internet connection. At outdoor events and markets where connectivity is unpredictable, the system switches seamlessly between connections.' },
  { icon: Battery, title: 'All-Day Battery Life', description: 'A tablet with a full charge lasts a full trading day — 10+ hours of continuous use. The Bluetooth card reader runs all day on its own battery. No power cables, no extension leads, no hunting for a plug socket at a market stall. Pack up and go.' },
  { icon: CreditCard, title: 'Wireless Card Payments', description: 'Bluetooth card reader pairs with the tablet for contactless, chip and PIN, Apple Pay, and Google Pay. Process payments anywhere — in a field at a food festival, at a market stall, or tableside at a restaurant terrace. No wired connection required.' },
  { icon: Smartphone, title: 'Offline-First Mode', description: 'When connectivity drops — and at outdoor events, it will — the POS keeps working. Take orders, process sales, and print receipts offline. Everything syncs to the cloud when you reconnect. You never turn away a customer because of a signal issue.' },
  { icon: ShoppingBag, title: 'Quick Setup & Teardown', description: 'Arrive at a market or event, take out the tablet, switch it on, and you are trading in under 2 minutes. No till to wire up, no network cables to connect, no thermal printer to align. At the end of the day, tablet in the bag and you are done.' },
  { icon: MapPin, title: 'Multi-Location Reporting', description: 'Trade at different locations throughout the week — Saturday market, Sunday food festival, Wednesday pop-up. All sales data syncs to the cloud regardless of location. See revenue by location, compare events, and identify your most profitable trading spots.' },
];

const benefits = [
  { title: 'Trade Anywhere', description: 'Markets, food festivals, sporting events, pop-up shops, outdoor terraces, catering gigs — the portable ePOS works wherever you trade. No power socket needed, no wired internet required. If you can carry a tablet, you can run a professional POS.' },
  { title: 'Accept Every Payment Method', description: 'Customers at events expect to pay by card and contactless. With the wireless card reader, you never lose a sale to "sorry, cash only." Apple Pay and Google Pay are supported too. Every payment method your customers carry is a payment method you accept.' },
  { title: 'Professional Reporting Everywhere', description: 'Just because you trade at a market stall does not mean you should manage your business with a cash box and a notebook. The portable ePOS gives you real-time sales data, product performance, staff tracking, and end-of-day reports — the same as a bricks-and-mortar restaurant.' },
  { title: 'Same System, Fixed and Mobile', description: 'If you also have a permanent shop or restaurant, the Posso portable ePOS uses the same platform. Same menu, same stock, same reports. Take the tablet to a market on Saturday and dock it at the counter on Monday. One system for fixed and mobile trading.' },
];

export default function PortableEposSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Portable ePOS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Smartphone className="w-3 h-3 mr-2" />
                FULL POS — ANYWHERE YOU TRADE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Portable ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Trade at events, pop-ups, markets, and outdoor venues with a battery-powered tablet POS. WiFi or 4G, wireless payments, offline mode — sell anywhere without compromise.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> WiFi and 4G — works without fixed internet</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Offline mode — sells even without signal</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete portable ePOS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Portable ePOS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">Built for mobile trading — no power cables, no wired internet, no compromise.</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Go Portable</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">Where Portable ePOS Shines</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Food festivals and events</strong> — thousands of customers, unpredictable connectivity, no mains power. The portable ePOS handles it all. Battery lasts all day, 4G keeps you connected, and offline mode covers the gaps. You focus on serving food, not troubleshooting technology.
                </p>
                <p>
                  <strong className="text-white">Market stalls and pop-ups</strong> — set up in under 2 minutes. No till, no cables, no printer alignment. Tablet on the counter, card reader ready, and you are trading. At the end of the day, everything fits in a bag.
                </p>
                <p>
                  <strong className="text-white">Restaurant terraces and outdoor areas</strong> — extend your service outdoors without running cables to a second till. Waiters take orders and payments on the portable ePOS. Orders fire to the kitchen display inside. Seamless indoor-outdoor service.
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
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Wireless terminals</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Compare POS options</p>
                </Link>
                <Link href="/kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">In-store kiosk ordering</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Portable ePOS System — Frequently Asked Questions" faqs={[
          { question: 'Does the portable ePOS work without WiFi?', answer: 'Yes. The Posso portable ePOS works on WiFi, 4G mobile hotspot, or completely offline. In offline mode, orders are processed locally and sync to the cloud when connectivity returns. You never lose a sale because of a signal issue. Card payments require a data connection (WiFi or 4G).' },
          { question: 'How long does the battery last?', answer: 'A fully charged tablet runs the POS for 10+ hours of continuous use — a full trading day at a market or event. The Bluetooth card reader has its own battery that lasts all day. If you need longer runtime, a portable power bank extends the tablet battery further.' },
          { question: 'Can I take card payments at outdoor events?', answer: 'Yes. The wireless Bluetooth card reader accepts contactless, chip and PIN, Apple Pay, and Google Pay. It connects to the tablet via Bluetooth and processes payments via the data connection (WiFi or 4G). No wired terminal, no power cable — fully wireless payment processing.' },
          { question: 'Is it the same system as the fixed POS?', answer: 'Yes. The Posso portable ePOS runs the same software as the counter POS. Same menu, same reporting, same features. If you have a permanent location and trade at events, your menu and data are shared across both. Sales from the market appear in the same reports as shop sales.' },
          { question: 'How quickly can I set up at an event?', answer: 'Under 2 minutes. Take out the tablet, switch it on, connect to WiFi or 4G, and you are ready to sell. No cables, no alignment, no configuration. The card reader pairs automatically when switched on. At the end of the day, tablet in the bag and you are done.' },
          { question: 'How much does the portable ePOS cost?', answer: 'The portable ePOS starts from £499 + VAT including the software and cloud sync. You can use your own tablet or purchase one through us. Wireless Bluetooth card readers are available separately. Free setup and training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
