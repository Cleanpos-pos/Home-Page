import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, CreditCard, BarChart3, Phone, ArrowRight, Utensils, Users, LayoutGrid, Split, Tablet } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant ePOS System | Table Management & Dine-In Features',
  description:
    'Posso restaurant ePOS system with table management, floor plan, course firing, split bills, waiter pad, tab management, and pay-at-table. From £499 + VAT.',
  keywords: [
    'restaurant epos',
    'restaurant epos system',
    'restaurant pos system',
    'epos for restaurants',
    'restaurant till system',
    'restaurant point of sale',
    'table management pos',
    'restaurant epos uk',
    'best restaurant pos system',
    'dine in pos system',
  ],
  alternates: {
    canonical: '/restaurant-epos',
  },
  openGraph: {
    title: 'Restaurant ePOS System | Posso UK',
    description:
      'Full dine-in restaurant ePOS with table management, course firing, split bills, and pay-at-table.',
    url: 'https://www.posso.co.uk/restaurant-epos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Restaurant ePOS system with table management, visual floor plan, course firing, split bills, waiter pad app, tab management, and pay-at-table functionality.',
    url: 'https://www.posso.co.uk/restaurant-epos',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Visual floor plan with table management',
      'Course firing and kitchen coordination',
      'Split bills by item, seat, or percentage',
      'Waiter pad app for tableside ordering',
      'Tab management for bar and restaurant',
      'Pay-at-table with card terminal',
      'Kitchen display system',
      'Integrated card payments',
      'Real-time table status tracking',
      'Sales analytics and reporting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant ePOS', item: 'https://www.posso.co.uk/restaurant-epos' },
    ],
  },
];

const dineInFeatures = [
  { icon: LayoutGrid, title: 'Visual Floor Plan', description: 'Drag-and-drop floor plan builder. See every table\'s status at a glance — available, occupied, ordering, waiting for food, or ready for bill.' },
  { icon: Utensils, title: 'Course Firing', description: 'Fire starters, mains, and desserts to the kitchen at the right time. Your kitchen gets the next course only when the previous one is cleared.' },
  { icon: Split, title: 'Split Bills', description: 'Split by item, by seat, by equal share, or by custom amount. Guests pay their share individually — no calculator needed.' },
  { icon: Tablet, title: 'Waiter Pad App', description: 'Waiters take orders tableside on a tablet or phone. Orders go straight to the kitchen display. No trips back to the terminal.' },
  { icon: Users, title: 'Tab Management', description: 'Open tabs for bar guests and diners. Add items throughout the evening and settle the full tab at the end with card or cash.' },
  { icon: CreditCard, title: 'Pay-at-Table', description: 'Bring the card terminal to the table. Guests tap to pay without leaving their seat. Tips can be added directly on the terminal.' },
];

const whyChoose = [
  { icon: Clock, title: 'Faster Table Turns', description: 'Real-time table tracking and instant order sending mean less waiting. Restaurants using Posso report 15-20% faster table turns during peak service.' },
  { icon: Monitor, title: 'Kitchen Coordination', description: 'Course firing ensures your kitchen never gets overwhelmed. Starters, mains, and desserts arrive in the correct sequence without verbal coordination.' },
  { icon: BarChart3, title: 'Revenue Insights', description: 'Track covers per hour, average spend per head, best-selling dishes, and server performance. Make data-driven decisions about your menu and staffing.' },
  { icon: Smartphone, title: 'Table Ordering App', description: 'Let guests scan a QR code and order from their phone. Orders go to the kitchen automatically — ideal for busy service or staff shortages.' },
];

export default function RestaurantEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Restaurant ePOS' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                  <Zap className="w-3 h-3 mr-2" />
                  RESTAURANT ePOS
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Restaurant{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ePOS System
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Run your restaurant floor with precision. Visual table management, course firing, split bills, waiter pads, and pay-at-table — everything your front-of-house and kitchen need to deliver a seamless dining experience.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Visual floor plan with live table status</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Course firing to the kitchen</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full POS from £499 + VAT</li>
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
              <div className="relative">
                <img
                  src="/images/posso_epos_integration.png"
                  alt="Posso restaurant ePOS system showing table management floor plan with course firing and split bill features"
                  width={1200}
                  height={630}
                  loading="eager"
                  className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dine-In Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Dine-In Features That Keep Service Flowing
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From the moment a guest sits down to the final card tap, every step is managed through one system.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {dineInFeatures.map((f) => (
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

        {/* Why Choose */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Why Restaurants Choose Posso ePOS
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A restaurant ePOS should make service faster and smoother, not slower. Here is what Posso delivers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyChoose.map((b) => (
                <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Flow */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How a Table Service Flows</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Seat Guests', desc: 'Tap a table on the floor plan to open it. Assign a server.' },
                { step: '2', title: 'Take Orders', desc: 'Waiter pad or terminal. Orders fire to the kitchen display.' },
                { step: '3', title: 'Course Firing', desc: 'Fire each course when guests are ready. Kitchen stays in sync.' },
                { step: '4', title: 'Bill & Pay', desc: 'Split bills any way. Pay at the table or at the counter.' },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Posso Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Full ePOS Features</p>
                  <p className="text-slate-400 text-sm mt-1">30+ features overview</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Guests order at the table</p>
                </Link>
                <Link href="/table-ordering-app-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Table Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">QR code ordering</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
                <Link href="/best-restaurant-epos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Best Restaurant EPOS Systems UK</p>
                  <p className="text-slate-400 text-sm mt-1">2026 buyer&apos;s guide &amp; comparison</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant ePOS — Frequently Asked Questions" faqs={[
          { question: 'What features does a restaurant ePOS need for dine-in service?', answer: 'A proper restaurant ePOS needs table management with a visual floor plan, course firing to coordinate kitchen timing, split bill functionality, waiter pad support for tableside ordering, tab management, and pay-at-table. Posso includes all of these from £499 + VAT.' },
          { question: 'How does course firing work on the Posso restaurant ePOS?', answer: 'When a waiter takes an order, courses are grouped as starters, mains, and desserts. Starters fire to the kitchen immediately. When the waiter marks starters as cleared, mains fire automatically — or the waiter can fire manually. This keeps the kitchen paced correctly.' },
          { question: 'Can guests split the bill on the restaurant ePOS?', answer: 'Yes. Bills can be split by item (each guest picks what they ordered), by seat, by equal shares, or by custom amounts. Each split can be paid separately by card or cash.' },
          { question: 'Does the ePOS support waiter pad ordering?', answer: 'Yes. Waiters use a tablet or phone app to take orders tableside. The order fires directly to the kitchen display and the table\'s bill updates in real time. No need to walk back to the main terminal.' },
          { question: 'Can I see which tables are occupied and which are free?', answer: 'Yes. The visual floor plan shows every table colour-coded by status — green for available, amber for occupied and ordering, red for waiting for food, and blue for ready for bill. You can see your entire restaurant at a glance.' },
          { question: 'How much does a restaurant ePOS system cost?', answer: 'Posso restaurant ePOS starts from £499 + VAT for a complete touchscreen terminal with table management, course firing, split bills, and integrated card payments. Additional waiter pad devices and kitchen displays can be added. Finance options are available.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
