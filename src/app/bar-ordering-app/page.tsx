import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Beer, QrCode, CreditCard, ListPlus, Clock, Percent } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bar Ordering App',
  description:
    'Bar Ordering App with QR table ordering, tab management, drink modifiers, happy hour pricing, and mobile payments. Built for bars and pubs. POS from £499 + VAT.',
  keywords: [
    'bar ordering app',
    'bar order app',
    'pub ordering app',
    'qr ordering bar',
    'table ordering app bar',
    'mobile bar ordering',
    'bar tab app',
    'drink ordering app',
    'bar pos app',
    'bar ordering system uk',
  ],
  alternates: {
    canonical: '/bar-ordering-app',
  },
  openGraph: {
    title: 'Bar Ordering App | Posso UK',
    description:
      'Bar Ordering App with QR table ordering, tab management, drink modifiers, and happy hour pricing. Built for bars.',
    url: 'https://posso.co.uk/bar-ordering-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Bar Ordering App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Mobile ordering app for bars with QR code table ordering, tab management, drink modifiers and mixers, happy hour automatic pricing, and contactless payments.',
    url: 'https://posso.co.uk/bar-ordering-app',
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
      reviewCount: '189',
      bestRating: '5',
    },
    featureList: [
      'QR code table ordering — scan and order from your phone',
      'Tab management with running totals',
      'Drink modifiers — mixers, ice, garnishes',
      'Happy hour automatic pricing',
      'Contactless mobile payments',
      'Real-time bar display for incoming orders',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Bar Ordering App', item: 'https://posso.co.uk/bar-ordering-app' },
    ],
  },
];

const features = [
  { icon: QrCode, title: 'QR Table Ordering', description: 'Each table has a QR code. Customers scan it with their phone, see your full drink and food menu, and order directly from their seat. No app download required — it opens in the browser. Orders appear instantly on the bar display with the table number. No queuing, no waiting to catch someone\'s eye.' },
  { icon: CreditCard, title: 'Tab Management', description: 'Customers open a tab by saving their card details when they place their first order. Subsequent orders add to the running total. They can view their tab at any time on their phone and close it when they are ready to leave. Staff can also open and manage tabs from the POS for customers who prefer to order at the bar.' },
  { icon: ListPlus, title: 'Drink Modifiers', description: 'Every drink can be customised: gin and tonic with Fever-Tree, single or double, with lime, with ice. Mixers, measures, garnishes, and ice preferences are all configurable with their own pricing. The bar display shows the full drink specification so it is made correctly every time. No shouting over the music.' },
  { icon: Percent, title: 'Happy Hour Pricing', description: 'Set happy hour schedules and the POS applies discounted prices automatically during those times. Two-for-one cocktails from 5–7pm, half-price pints on Tuesdays, 20% off all drinks before 6pm. Prices switch back automatically when happy hour ends. No manual price changes, no staff forgetting to apply or remove discounts.' },
  { icon: Beer, title: 'Real-Time Bar Display', description: 'Orders from QR ordering, the POS, and tabs all appear on the bar display in real time. Each order shows the table number, drinks ordered, and any modifiers. Bar staff work through the queue and mark orders as complete. Customers see a status update on their phone when their drinks are being prepared.' },
  { icon: Clock, title: 'Speed During Peak Hours', description: 'On a Saturday night, QR ordering eliminates the bar queue. Customers order rounds from their table while bar staff focus on making drinks rather than taking orders. The result: more drinks served per hour, happier customers, and staff who can concentrate on quality instead of struggling to hear orders over the noise.' },
];

const benefits = [
  { title: 'Eliminate Bar Queues', description: 'QR table ordering removes the biggest friction point in any bar — waiting to be served. Customers order from their phone and drinks arrive at their table. No standing three-deep at the bar waving a card. During peak hours, this transforms the customer experience and dramatically increases the number of orders your bar staff can process.' },
  { title: 'Increase Average Spend', description: 'When ordering is effortless, customers order more. No queue means they do not wait until their glass is empty before considering another round. The visual menu with images and descriptions encourages exploration — customers try cocktails they would not have asked for at a crowded bar. Average spend per table typically increases 15–25%.' },
  { title: 'Reduce Staffing Pressure', description: 'QR ordering handles the order-taking so your bar staff focus on making drinks. You need fewer staff behind the bar to serve the same number of customers. On a busy night, the difference between 3 and 4 bar staff is significant. The app effectively adds capacity without adding headcount.' },
  { title: 'Automatic Happy Hour Management', description: 'Happy hour prices activate and deactivate on schedule with zero staff intervention. No forgetting to change prices, no accidentally charging full price during happy hour, no leaving discounts on after happy hour ends. The POS handles it automatically and your reports show the exact revenue impact of each promotion.' },
];

export default function BarOrderingAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Bar Ordering App' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Beer className="w-3 h-3 mr-2" />
                MOBILE ORDERING FOR BARS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Bar Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  App
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                QR table ordering, tab management, drink modifiers, happy hour pricing, and mobile payments — let customers order from their phone and keep the drinks flowing.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> QR ordering — no app download needed</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Happy hour pricing runs automatically</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Bar POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Bar Ordering Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Designed for the pace, noise, and atmosphere of a busy bar environment.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Bars Choose Posso</h2>
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
                How QR Ordering Transforms Your Bar
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The traditional bar model forces customers to <strong className="text-white">queue, wait, order, and pay</strong> — often shouting over loud music. QR table ordering removes every friction point. Customers scan, browse, order, and pay from their phone. Drinks arrive at their table. The experience is fundamentally better.
                </p>
                <p>
                  For your staff, QR ordering means they spend their time <strong className="text-white">making drinks instead of taking orders</strong>. The bar display shows incoming orders in a clear queue. Each drink is specified precisely — no mishearing "gin and tonic" as "gin and Coke" over the noise. Quality goes up, mistakes go down.
                </p>
                <p>
                  The financial impact is significant. Bars using QR ordering typically see a <strong className="text-white">15–25% increase in average spend per table</strong>. When ordering is effortless, customers order more frequently. They try cocktails they would not have queued for. And you serve more drinks with the same number of staff.
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
                <Link href="/bar-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bar ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Full bar POS system</p>
                </Link>
                <Link href="/pub-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pub POS System</p>
                  <p className="text-slate-400 text-sm mt-1">POS for pubs</p>
                </Link>
                <Link href="/table-ordering-app-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Table Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">QR table ordering</p>
                </Link>
                <Link href="/drink-order-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Drink Order App</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile drink ordering</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Bar Ordering App — Frequently Asked Questions" faqs={[
          { question: 'Do customers need to download an app?', answer: 'No. Customers scan the QR code on their table and the menu opens in their phone browser. No download, no account creation, no friction. They browse the menu, add drinks to their order, and pay with Apple Pay, Google Pay, or a saved card. The entire process takes under 30 seconds for a first-time user.' },
          { question: 'How do bar tabs work?', answer: 'When a customer places their first order via QR, they can save their card and open a tab. Subsequent orders add to the running total. They view their tab balance on their phone at any time and close it when ready. Staff can also open tabs from the POS for customers ordering at the bar. Tabs can have a maximum limit if you prefer.' },
          { question: 'Can I set up happy hour automatically?', answer: 'Yes. Define happy hour schedules in the POS — for example, all cocktails two-for-one from 5–7pm on weekdays, 20% off pints on Tuesdays. Prices change automatically when happy hour starts and revert when it ends. No staff intervention needed. Your reports show the exact revenue impact of each promotion.' },
          { question: 'How are drink modifiers handled?', answer: 'Every drink can have modifiers: mixer type and brand, single or double measure, ice preference, garnish. Each modifier can have its own price. A Hendrick\'s gin with Fever-Tree tonic, double, with cucumber — the system prices it correctly and the bar display shows the full specification. No ambiguity, no mistakes.' },
          { question: 'Does it work alongside traditional bar service?', answer: 'Yes. QR ordering runs alongside your normal bar service. Some customers will scan and order from their table. Others will walk up to the bar and order with staff. Both routes feed into the same POS and bar display. You are adding a channel, not replacing one. Over time, more customers gravitate to QR ordering because it is faster.' },
          { question: 'How much does the bar ordering app cost?', answer: 'The bar POS with QR ordering starts from £499 + VAT including touchscreen terminal, bar display, and QR ordering setup. We provide printed QR code table cards. Low commission on mobile orders. Finance from £24.92 per week. Free setup, menu configuration, and staff training with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
