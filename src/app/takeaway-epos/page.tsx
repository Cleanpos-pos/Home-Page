import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, CreditCard, BarChart3, Phone, ArrowRight, Printer, Banknote, Globe } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Takeaway ePOS | Fast Order Processing & Online Ordering',
  description:
    'Posso takeaway ePOS for fast order processing, thermal printing, cash management, shift reports, caller ID, and your own online ordering website. From £499 + VAT.',
  keywords: [
    'takeaway epos',
    'takeaway epos system',
    'epos takeaway',
    'takeaway pos',
    'takeaway till',
    'best takeaway epos',
    'takeaway epos uk',
    'fast takeaway pos',
    'takeaway point of sale',
    'cheap takeaway epos',
  ],
  alternates: {
    canonical: '/takeaway-epos',
  },
  openGraph: {
    title: 'Takeaway ePOS | Posso UK',
    description:
      'Fast takeaway ePOS with quick order processing, thermal printing, cash management, and online ordering website.',
    url: 'https://posso.co.uk/takeaway-epos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Takeaway ePOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Takeaway ePOS system focused on speed and efficiency with fast order processing, thermal printing, cash management, shift reports, caller ID, and integrated online ordering website.',
    url: 'https://posso.co.uk/takeaway-epos',
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
      'Fast order processing under 15 seconds',
      'Thermal receipt and kitchen printing',
      'Cash drawer management',
      'Shift reports (X reads) and day reports (Z reads)',
      'Caller ID for phone order lookup',
      'Online ordering website included',
      'Integrated card payments',
      'Order history and customer database',
      'Works offline',
      'Aggregator integration',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Takeaway ePOS', item: 'https://posso.co.uk/takeaway-epos' },
    ],
  },
];

const speedFeatures = [
  { icon: Zap, title: 'Rapid Order Processing', description: 'Category tabs, favourites bar, and one-tap items mean a typical takeaway order is entered in under 15 seconds. During peak hours, those seconds compound into hundreds of extra orders per week.' },
  { icon: Printer, title: 'Thermal Printing', description: 'Lightning-fast thermal printers for customer receipts and kitchen tickets. Support for multiple printers — one for the customer, one for the kitchen, one for the driver label.' },
  { icon: Banknote, title: 'Cash Management', description: 'Cash drawer opens automatically on cash transactions. Float management, blind cash-ups, and variance tracking keep your takings accurate and your staff accountable.' },
  { icon: BarChart3, title: 'Shift & Day Reports', description: 'X reads for mid-shift cash counts. Z reads for end-of-day totals. See cash vs card split, total sales, refunds, and voids. Print or export for your records.' },
  { icon: Phone, title: 'Caller ID Lookup', description: 'When the phone rings, the customer\'s name, address, and last order appear on screen. One tap to reorder their usual. Repeat customers feel valued and you save time on every call.' },
  { icon: Globe, title: 'Online Ordering Website', description: 'Get your own branded ordering website included with your ePOS. Customers place orders directly with you at low commission — no need to rely solely on Just Eat or Uber Eats.' },
];

const efficiencyGains = [
  { metric: '15 sec', label: 'Average order entry time' },
  { metric: '3 sec', label: 'Thermal receipt print time' },
  { metric: '90 sec', label: 'Phone order with caller ID' },
  { metric: '2 min', label: 'End-of-shift cash-up time' },
];

export default function TakeawayEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Takeaway ePOS' },
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
                  TAKEAWAY ePOS
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Takeaway{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ePOS
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Speed is everything in a takeaway. Posso ePOS is engineered for rapid order entry, instant kitchen printing, and seamless cash management. Process more orders per hour with fewer errors and less stress during the Friday night rush.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Orders entered in under 15 seconds</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Caller ID with order history</li>
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
                  alt="Posso takeaway ePOS system with fast order entry, thermal printing, and cash management"
                  width={1200}
                  height={630}
                  loading="eager"
                  className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Speed Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Built for Speed, Designed for Takeaways
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every feature in the Posso takeaway ePOS is designed to save seconds. In a takeaway doing 200+ orders on a busy night, those seconds translate into real revenue.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {speedFeatures.map((f) => (
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

        {/* Efficiency Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Speed That Matters</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Measured performance from real takeaways running Posso ePOS.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {efficiencyGains.map((e) => (
                <div key={e.label} className="glass-card rounded-xl p-6 border border-slate-700/50 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{e.metric}</p>
                  <p className="text-slate-400 text-sm">{e.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Speed Matters More Than Features in a Takeaway ePOS
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Some POS systems sell themselves on having 200 features. But on a Saturday night when you have 15 people waiting, a queue of phone orders, and three Uber Eats orders printing — the only thing that matters is speed.
                  </p>
                  <p>
                    <strong className="text-white">Posso strips away the complexity.</strong> The order screen shows exactly what your staff need. Category tabs across the top, popular items pinned as favourites, modifiers that appear only when relevant. No scrolling through menus. No hunting for buttons.
                  </p>
                  <p>
                    Combined with caller ID that pulls up previous orders instantly, and thermal printing that fires the moment an order is confirmed, Posso turns your takeaway into a well-oiled machine.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/posso_epos_integration.png"
                  alt="Posso takeaway ePOS order entry screen designed for speed with category tabs and favourites"
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Takeaway Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/epos-system-for-takeaway" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway ePOS System</p>
                  <p className="text-slate-400 text-sm mt-1">Full system overview</p>
                </Link>
                <Link href="/epos-system-for-indian-takeaway" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Indian Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Caller ID & multi-language</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Takeaway ePOS — Frequently Asked Questions" faqs={[
          { question: 'What is a takeaway ePOS system?', answer: 'A takeaway ePOS (electronic point of sale) is a touchscreen till system designed specifically for takeaway businesses. It handles order entry, kitchen printing, cash management, card payments, and often includes online ordering and delivery management. Posso takeaway ePOS starts from £499 + VAT.' },
          { question: 'How fast can I enter orders on the Posso takeaway ePOS?', answer: 'Most staff enter a standard takeaway order in under 15 seconds after a brief training session. The interface uses category tabs, favourites, and quick-add buttons. With caller ID, repeat phone orders take under 90 seconds from ringing to confirmed.' },
          { question: 'Does the takeaway ePOS include cash management?', answer: 'Yes. The cash drawer opens automatically on cash transactions. You can set a starting float, run blind or counted cash-ups, and view variance reports. X reads show mid-shift totals and Z reads provide end-of-day summaries.' },
          { question: 'Can I get an online ordering website with the ePOS?', answer: 'Yes. Your Posso ePOS includes a branded online ordering website where customers order collection or delivery directly from you. Commission is low compared to aggregators like Just Eat (which charge 30%+). Orders flow straight to your POS and kitchen printer.' },
          { question: 'Does the ePOS work if my internet goes down?', answer: 'Yes. Posso is built offline-first. You can continue taking orders, processing cash payments, and printing kitchen tickets without an internet connection. When the connection returns, all data syncs to the cloud automatically.' },
          { question: 'How long does it take to set up a takeaway ePOS?', answer: 'Most takeaways go live within 24 hours. We handle hardware delivery, software installation, menu import, payment terminal setup, and staff training. You can start taking orders the same day your hardware arrives.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
