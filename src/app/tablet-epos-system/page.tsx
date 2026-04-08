import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, TabletSmartphone, Cloud, Wifi, CreditCard, Monitor, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tablet ePOS System',
  description:
    'Tablet ePOS System for iPad and Android tablets. Portable waiter ordering, touchscreen POS, cloud sync, offline mode, and wireless operation. POS from £499 + VAT.',
  keywords: [
    'tablet epos system',
    'tablet pos system',
    'ipad pos system',
    'android pos system',
    'tablet epos',
    'portable pos system',
    'tablet till system',
    'ipad epos',
    'wireless pos system',
    'tablet pos system uk',
  ],
  alternates: {
    canonical: '/tablet-epos-system',
  },
  openGraph: {
    title: 'Tablet ePOS System | Posso UK',
    description:
      'Tablet ePOS System for iPad and Android. Portable, cloud-synced, with waiter mode and offline operation. POS from £499 + VAT.',
    url: 'https://posso.co.uk/tablet-epos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Tablet ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Tablet ePOS system running on iPad and Android tablets with portable waiter ordering, touchscreen interface, cloud synchronisation, offline-first operation, and wireless connectivity.',
    url: 'https://posso.co.uk/tablet-epos-system',
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
      reviewCount: '145',
      bestRating: '5',
    },
    featureList: [
      'Runs on iPad and Android tablets',
      'Portable waiter ordering — take orders tableside',
      'Cloud sync across multiple devices in real time',
      'Offline-first — works without internet',
      'Touchscreen optimised interface',
      'Wireless Bluetooth receipt printing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Tablet ePOS System', item: 'https://posso.co.uk/tablet-epos-system' },
    ],
  },
];

const features = [
  { icon: TabletSmartphone, title: 'iPad & Android Support', description: 'The Posso tablet ePOS runs on iPads and Android tablets. Use hardware you already own or buy new. The interface adapts to screen size — a 10-inch iPad gets the full POS layout, while a phone-sized device gets the streamlined waiter pad view.' },
  { icon: Monitor, title: 'Waiter Pad Mode', description: 'Waiters carry a tablet to the table, take the order with modifiers and special requests, and fire it to the kitchen — all without walking back to the counter. Orders appear on the kitchen display within 2 seconds. Table turnaround improves because there is no delay.' },
  { icon: Cloud, title: 'Cloud Sync', description: 'Every device syncs in real time through the cloud. An order entered on the waiter tablet appears instantly on the counter POS and kitchen display. Menu changes made on any device sync everywhere. Sales data aggregates across all devices for unified reporting.' },
  { icon: Wifi, title: 'Offline-First Operation', description: 'If your WiFi drops, the tablet keeps working. Orders are stored locally and sync when connectivity returns. You never lose a sale because of a network issue. The offline-first architecture means the POS is always available, with or without internet.' },
  { icon: CreditCard, title: 'Wireless Payment', description: 'Pair a Bluetooth card terminal with the tablet for tableside payment. The waiter takes the order and payment at the table — no walking to the counter. Contactless, chip and PIN, Apple Pay, and Google Pay all supported on the wireless terminal.' },
  { icon: RefreshCw, title: 'Multi-Device Flexibility', description: 'Start with one tablet at the counter. Add a second as a waiter pad during busy periods. Scale to five devices for a large venue. Each device shares the same menu, stock levels, and order queue. Add or remove devices as your needs change — no per-device licensing fees.' },
];

const benefits = [
  { title: 'Lower Hardware Costs', description: 'A tablet ePOS costs a fraction of traditional till hardware. Use an existing iPad or buy a new one for under £400. Add the Posso software from £499 + VAT and you have a complete POS system for less than half the price of legacy till setups with proprietary hardware.' },
  { title: 'Portable and Flexible', description: 'Take the tablet to the table for waiter ordering, to the terrace for outdoor service, or to an event for pop-up trading. When you are not using the waiter pad, dock it at the counter as a second till. The same device serves multiple roles throughout the day.' },
  { title: 'Easy for Staff to Learn', description: 'Staff already know how to use tablets. The touch interface is intuitive — browse products, tap to add, swipe through categories. New starters are productive within 30 minutes. There is no legacy till keyboard to memorise and no obscure button combinations to learn.' },
  { title: 'Always Up to Date', description: 'Cloud-based software updates automatically. You always have the latest features, security patches, and improvements without scheduling downtime or calling an engineer. Updates happen in the background — staff see the new version next time they open the app.' },
];

export default function TabletEposSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Tablet ePOS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <TabletSmartphone className="w-3 h-3 mr-2" />
                FULL POS ON YOUR TABLET
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Tablet ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Run your POS on an iPad or Android tablet. Portable waiter ordering, cloud sync, offline mode, and wireless payments — all the power of a traditional till in a device that fits in one hand.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Works on iPad and Android tablets</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Offline-first — never lose a sale</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete tablet ePOS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Tablet ePOS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything a traditional till does, on a device your staff already know how to use.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Choose a Tablet ePOS</h2>
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
                Tablet ePOS for Every Business
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Restaurants</strong> use tablet ePOS for waiter ordering, reducing the back-and-forth to the counter till. Orders fire to the kitchen instantly. Tableside payment means guests pay when they are ready, not when a waiter remembers to bring the card machine.
                </p>
                <p>
                  <strong className="text-white">Cafes and coffee shops</strong> use a tablet at the counter as their primary POS. The compact form factor saves counter space. Add a second tablet during the morning rush and remove it when things quiet down — no wasted hardware during off-peak hours.
                </p>
                <p>
                  <strong className="text-white">Pop-ups, events, and market stalls</strong> use tablet ePOS because it is truly portable. Grab the tablet, pair the Bluetooth card reader, and you have a complete POS anywhere with WiFi or 4G. No power cables to the till, no network ports — just battery and wireless.
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
                  <p className="text-slate-400 text-sm mt-1">Full POS range</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Wireless terminals</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Compare options</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Take orders online</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Tablet ePOS System — Frequently Asked Questions" faqs={[
          { question: 'Does the tablet ePOS work on iPad and Android?', answer: 'Yes. The Posso tablet ePOS runs on iPads (iPad Air, iPad Pro, standard iPad) and Android tablets. The interface adapts to screen size. A 10-inch tablet gets the full POS layout with product grid, while smaller devices get the streamlined waiter pad view.' },
          { question: 'What happens if the WiFi goes down?', answer: 'The tablet keeps working. The Posso ePOS uses offline-first architecture — orders are stored locally on the device and sync to the cloud when connectivity returns. You never lose a sale because of a network issue. Kitchen printing works over the local network even without internet.' },
          { question: 'Can I use the tablet as a waiter pad?', answer: 'Yes. Waiters carry the tablet to the table, select the table number, enter the order with modifiers and special requests, and fire to the kitchen. The order appears on the kitchen display within 2 seconds. No walking back to the counter, no paper pads, no re-entering orders.' },
          { question: 'How many tablets can I use at once?', answer: 'As many as you need. Start with one at the counter, add a second as a waiter pad, scale to five or more for large venues. All devices share the same menu, stock levels, and order queue via cloud sync. There are no per-device licensing fees.' },
          { question: 'Can I take card payments on the tablet?', answer: 'Yes. Pair a wireless Bluetooth card terminal with the tablet for tableside and counter payments. Contactless, chip and PIN, Apple Pay, and Google Pay are all supported. The wireless terminal connects to the tablet so payments process through the POS for accurate reporting.' },
          { question: 'How much does the tablet ePOS system cost?', answer: 'The Posso tablet ePOS system starts from £499 + VAT including the software, cloud sync, and kitchen display integration. You can use your own tablet or purchase one through us. Wireless card terminals are available separately. Free setup and training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
