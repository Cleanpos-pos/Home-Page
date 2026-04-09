import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Cloud, BarChart3, Package, Wifi, WifiOff } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS Software',
  description:
    'POS Software with cloud-based management, touchscreen interface, real-time reporting, stock control, multi-device sync, and offline-first reliability. From £499 + VAT.',
  keywords: [
    'pos software',
    'pos software uk',
    'point of sale software',
    'cloud pos software',
    'touchscreen pos software',
    'retail pos software',
    'hospitality pos software',
    'epos software',
    'till software',
    'pos system software',
  ],
  alternates: {
    canonical: '/pos-software',
  },
  openGraph: {
    title: 'POS Software | Posso UK',
    description:
      'POS Software with cloud management, touchscreen interface, real-time reporting, stock control, and offline-first reliability.',
    url: 'https://posso.co.uk/pos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Cloud-based POS software with touchscreen interface, real-time reporting, stock management, multi-device sync, and offline-first architecture for retail and hospitality.',
    url: 'https://posso.co.uk/pos-software',
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
      reviewCount: '312',
      bestRating: '5',
    },
    featureList: [
      'Cloud-based management with real-time dashboard',
      'Touchscreen interface designed for speed',
      'Real-time sales and stock reporting',
      'Automatic stock management with low-stock alerts',
      'Multi-device sync across terminals and tablets',
      'Offline-first — keeps working without internet',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS Software', item: 'https://posso.co.uk/pos-software' },
    ],
  },
];

const features = [
  { icon: Cloud, title: 'Cloud-Based Management', description: 'Access your POS data from anywhere with a browser. Sales, stock levels, and staff reports update in real time on a cloud dashboard. Make menu changes from home and they sync to every terminal instantly. No server hardware to maintain — everything runs in the cloud.' },
  { icon: Monitor, title: 'Touchscreen Interface', description: 'A fast, responsive touchscreen layout designed for real-world use. Large buttons, logical product grouping, and quick-search make it easy for staff to ring up sales in seconds. Customise the layout to match how your team actually works — no unnecessary steps in the workflow.' },
  { icon: BarChart3, title: 'Real-Time Reporting', description: 'See exactly what is selling, when, and how much profit each item generates. Daily summaries, hourly breakdowns, product mix reports, and staff performance metrics — all available live. Export to CSV or view on the dashboard. Make decisions based on data, not guesswork.' },
  { icon: Package, title: 'Stock Management', description: 'Track stock levels automatically as items sell. Set reorder points and receive low-stock alerts before you run out. View stock valuations, waste reports, and supplier purchase history. For multi-location businesses, transfer stock between sites and see group-level inventory.' },
  { icon: Wifi, title: 'Multi-Device Sync', description: 'Run multiple terminals, tablets, and handheld devices — all synced in real time. A sale on one device updates stock and reports across every device immediately. Add a second terminal for busy periods or use a tablet for tableside ordering — they all share the same data.' },
  { icon: WifiOff, title: 'Offline-First Architecture', description: 'Internet drops during service? The POS keeps working. Sales, payments, and receipts continue without interruption. When connectivity returns, everything syncs automatically. No lost transactions, no frozen screens, no apologising to customers. Built for the real world where broadband is not always reliable.' },
];

const benefits = [
  { title: 'Faster Service', description: 'The touchscreen interface is optimised for speed. Favourite items, quick-search, and logical grouping mean staff find products in one or two taps. New employees learn the system in under an hour. During busy periods, faster transactions mean shorter queues and more revenue per hour.' },
  { title: 'Complete Business Visibility', description: 'The cloud dashboard gives you a live view of every aspect of your business. Which products sell best, which staff perform strongest, which hours generate the most revenue. Compare days, weeks, and months. Spot trends early and act on them before they become problems.' },
  { title: 'Never Run Out of Stock', description: 'Automatic stock tracking eliminates manual counting. The system deducts stock as items sell and alerts you when levels hit your reorder threshold. No more discovering you have run out of a best-seller at 7pm on a Saturday. Stock management that works without you having to think about it.' },
  { title: 'Works Everywhere You Do', description: 'Multi-device sync means you are not tied to one terminal behind the counter. Take orders at the table with a tablet, check reports on your phone, manage the menu from your laptop at home. The same data, accessible on every device, updating in real time.' },
];

export default function PosSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Cloud className="w-3 h-3 mr-2" />
                CLOUD-BASED POS SOFTWARE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Cloud-based POS software with a touchscreen interface, real-time reporting, stock management, multi-device sync, and offline-first reliability — built for retail and hospitality.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Real-time cloud dashboard from any device</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Keeps working offline — syncs when reconnected</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS software from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">POS Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything you need to run your business — from the till to the back office.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Posso POS Software</h2>
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
                POS Software for Every Business Type
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Whether you run a <strong className="text-white">coffee shop, restaurant, retail store, or takeaway</strong>, the core needs are the same: fast transactions, accurate stock tracking, and clear reporting. Posso POS software handles all of these out of the box, then adapts to the specifics of your business type.
                </p>
                <p>
                  For hospitality, the software includes <strong className="text-white">table management, kitchen displays, and online ordering</strong>. For retail, barcode scanning, stock variants, and purchase orders. The same underlying platform, configured to match how your business actually operates.
                </p>
                <p>
                  Multi-location businesses get a <strong className="text-white">centralised cloud dashboard</strong> with group reporting, standardised menus, and the ability to manage every site from one login. Each location operates independently during service, but data rolls up to a single view for owners and managers.
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
                  <p className="text-slate-400 text-sm mt-1">Complete hardware + software</p>
                </Link>
                <Link href="/cloud-epos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cloud ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Cloud-first POS system</p>
                </Link>
                <Link href="/touchscreen-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Touchscreen POS</p>
                  <p className="text-slate-400 text-sm mt-1">Touchscreen terminals</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering site</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS Software — Frequently Asked Questions" faqs={[
          { question: 'Is the POS software cloud-based?', answer: 'Yes. All data is stored in the cloud and accessible from any device with a browser. Sales, stock, and reports update in real time. You can view your dashboard from home, make menu changes remotely, and manage multiple locations from one login. The software also works offline — transactions continue during internet outages and sync when connectivity returns.' },
          { question: 'What hardware do I need?', answer: 'The software runs on touchscreen terminals, tablets, and laptops. For a full setup, we supply a touchscreen terminal, receipt printer, and cash drawer from £499 + VAT. You can also run it on your existing iPad or Android tablet if you prefer a lower-cost start.' },
          { question: 'Can I use it for both retail and hospitality?', answer: 'Yes. The core POS software handles sales, stock, and reporting for any business type. Hospitality features like table management, kitchen displays, and online ordering can be enabled. Retail features like barcode scanning, stock variants, and purchase orders are also available. One platform, configured to your needs.' },
          { question: 'How does offline mode work?', answer: 'The POS stores transaction data locally on the device. If the internet drops, sales, payments, and receipts continue as normal. When connectivity returns, all data syncs to the cloud automatically. No lost transactions, no interrupted service. Designed for the reality that broadband is not always reliable.' },
          { question: 'Can I manage multiple locations?', answer: 'Yes. The cloud dashboard provides group-level reporting across all locations. Standardise menus, compare performance between sites, and manage everything from one login. Each location operates independently during service, so a network issue at one site does not affect the others.' },
          { question: 'How much does the POS software cost?', answer: 'POS software starts from £499 + VAT including a touchscreen terminal and full software licence. Online ordering is available at low commission. Finance options from £24.92 per week. Free setup, menu configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
