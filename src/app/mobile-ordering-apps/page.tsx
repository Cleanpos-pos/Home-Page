import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Smartphone, QrCode, Bell, CreditCard, BarChart3, Utensils } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Ordering Apps',
  description:
    'Mobile Ordering Apps for restaurants and cafes — QR code ordering, push notifications, mobile payments, and real-time kitchen integration. Mobile-first ordering from £499 + VAT.',
  keywords: [
    'mobile ordering apps',
    'mobile ordering app uk',
    'mobile ordering system',
    'qr code ordering',
    'mobile food ordering',
    'restaurant mobile ordering',
    'cafe mobile ordering',
    'order from phone',
    'mobile ordering platform',
    'mobile ordering for restaurants',
  ],
  alternates: {
    canonical: '/mobile-ordering-apps',
  },
  openGraph: {
    title: 'Mobile Ordering Apps | Posso UK',
    description:
      'Mobile Ordering Apps with QR ordering, push notifications, mobile payments, and kitchen integration for restaurants and cafes.',
    url: 'https://www.posso.co.uk/mobile-ordering-apps',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Mobile Ordering App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Mobile ordering app for restaurants and cafes with QR code ordering, push notifications, mobile payments, real-time kitchen integration, and customer analytics.',
    url: 'https://www.posso.co.uk/mobile-ordering-apps',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'QR code table ordering',
      'Push notification marketing',
      'Mobile payment processing',
      'Real-time kitchen display integration',
      'Customer analytics and insights',
      'Multi-venue management',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Online Ordering', item: 'https://www.posso.co.uk/online-ordering' },
      { '@type': 'ListItem', position: 3, name: 'Mobile Ordering Apps', item: 'https://www.posso.co.uk/mobile-ordering-apps' },
    ],
  },
];

const features = [
  { icon: QrCode, title: 'QR Code Table Ordering', description: 'Place a QR code on every table. Customers scan with their phone camera, the menu loads instantly in their browser — no app download required. They browse, customise, and pay without waiting for a server. Orders go straight to the kitchen display. Table number is embedded in the QR code so the kitchen knows exactly where the food goes.' },
  { icon: Bell, title: 'Push Notifications', description: 'Send targeted push notifications to customers who have downloaded your app. "Lunch deal: any main + drink for £8.99 today only" — sent at 11:30am when people are deciding where to eat. Segment by order history: send a coffee offer to morning regulars, a dinner deal to evening customers. Average open rates of 65% versus 20% for email.' },
  { icon: CreditCard, title: 'Mobile Payment Processing', description: 'Customers pay on their phone with Apple Pay, Google Pay, or card. Payment is processed before they leave the table — no waiting for a card machine. For takeaway orders, payment is taken at the point of order. Split bills between multiple phones at the same table. Tips can be added digitally with preset percentages or a custom amount.' },
  { icon: Utensils, title: 'Kitchen Display Integration', description: 'Every mobile order appears on the kitchen display system within seconds. The kitchen sees the table number, all items, modifications, and special instructions. Courses can be held and fired when the table is ready. The prep team works through orders in sequence. No printed tickets getting lost, no re-keying from a tablet.' },
  { icon: BarChart3, title: 'Customer Analytics', description: 'Track order patterns, peak times, popular items, and average spend per customer. See which menu items are ordered most through mobile versus at the counter. Identify your top 100 customers by frequency and spend. Understand which push notifications drive the most orders. Data-driven decisions replace guesswork — and the data comes from your own customers, not a marketplace.' },
  { icon: Smartphone, title: 'Multi-Venue Management', description: 'Manage multiple locations from a single dashboard. Each venue has its own menu, pricing, and availability. Push a menu change to all sites simultaneously or customise per location. Compare performance across venues — which site has the highest mobile adoption, the best average order value, the fastest kitchen times. Central control with local flexibility.' },
];

const benefits = [
  { title: 'Serve More Customers With Fewer Staff', description: 'QR code ordering removes the bottleneck of waiting for a server. Customers order when they are ready, not when a server is available. A 60-seat restaurant that previously needed 4 floor staff can operate with 2 when 70% of orders come through mobile. The staff you keep are focused on hospitality, not order-taking.' },
  { title: 'Increase Average Order Value', description: 'Mobile menus with photos, descriptions, and suggested add-ons consistently increase average order value by 15-25%. Customers browse at their own pace and add extras they would not have ordered if a server was standing over them. "Add a side?" prompts at checkout convert at higher rates than verbal upselling.' },
  { title: 'Drive Repeat Business', description: 'Push notifications put your restaurant in customers\' hands at the moment they are deciding where to eat. A well-timed notification to 1,000 previous customers can fill a quiet Tuesday evening. No advertising spend, no marketplace commission — just a direct message to people who already know and like your food.' },
  { title: 'Eliminate Order Errors', description: 'The customer types their own order including modifications and allergy requirements. The order goes directly to the kitchen display exactly as submitted. No interpretation, no abbreviation, no forgotten items. The kitchen makes what the customer ordered, every time. Fewer complaints, fewer remakes, less food waste.' },
];

export default function MobileOrderingAppsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Online Ordering', href: '/online-ordering' },
          { label: 'Mobile Ordering Apps' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Smartphone className="w-3 h-3 mr-2" />
                MOBILE-FIRST ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Mobile Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Apps
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                QR code ordering, push notifications, mobile payments, and kitchen integration — let your customers order from their phone, whether they are at the table or on the sofa.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> QR code ordering — no app download needed</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Push notifications with 65% open rates</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS integration from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Mobile Ordering Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Built for the way customers actually want to order — from their phone, on their terms.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Mobile Ordering Works</h2>
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
                Mobile Ordering Is Not the Future — It Is Now
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">72% of UK consumers</strong> have ordered food from their phone in the last month. The behaviour shift that started during the pandemic is now permanent. Customers expect to scan a QR code and order from the table. They expect to order ahead and collect. They expect to pay without waiting.
                </p>
                <p>
                  For restaurants and cafes, mobile ordering is not an optional add-on — it is <strong className="text-white">core infrastructure</strong>. It reduces staffing pressure, increases order accuracy, and drives higher average spend. Venues that adopted mobile ordering report 15-25% higher average order values because customers browse, add extras, and spend more when there is no time pressure.
                </p>
                <p>
                  The Posso mobile ordering platform works <strong className="text-white">without an app download</strong> for the QR code channel and with a branded app for push notifications and loyalty. Both channels feed into the same POS and kitchen display. One system, two ordering channels, seamless operation.
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
                <Link href="/food-ordering-apps" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Ordering Apps</p>
                  <p className="text-slate-400 text-sm mt-1">Branded vs marketplace</p>
                </Link>
                <Link href="/self-order-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Order App</p>
                  <p className="text-slate-400 text-sm mt-1">QR-based self-ordering</p>
                </Link>
                <Link href="/coffee-shop-ordering-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee Shop Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Skip the queue</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Mobile Ordering Apps — Frequently Asked Questions" faqs={[
          { question: 'Do customers need to download an app?', answer: 'No. For QR code table ordering, customers scan the code with their phone camera and the menu opens in their browser. No download, no sign-up, no friction. For push notifications and loyalty features, a branded app is available on the App Store and Google Play. Both channels work together — the web version for casual visitors, the app for loyal regulars.' },
          { question: 'How does QR code ordering work?', answer: 'Each table has a unique QR code with the table number embedded. The customer scans it, browses the full menu with photos and descriptions, selects items, adds modifications, and pays — all from their phone. The order arrives on the kitchen display with the table number. Food is delivered to the correct table without the customer flagging down a server.' },
          { question: 'Can I send push notifications?', answer: 'Yes, to customers who have downloaded your branded app. Segment notifications by order history, last visit date, or preferred items. Send a lunch deal at 11:30am, a coffee offer at 7:30am, or a weekend dinner promotion on Friday afternoon. Push notifications have average open rates of 65%, making them the most effective marketing channel for repeat business.' },
          { question: 'Does mobile ordering integrate with my POS?', answer: 'Yes. All mobile orders — whether from QR code table ordering, the branded app, or web ordering — arrive directly on your Posso POS and kitchen display system. No separate tablets, no re-keying. Sales data from all channels is consolidated in one dashboard for reporting and analysis.' },
          { question: 'Will mobile ordering reduce my staffing costs?', answer: 'Most venues reduce front-of-house staff requirements by 1-2 people per shift when mobile ordering reaches 50-70% adoption. Staff are freed from order-taking to focus on food delivery, hospitality, and upselling. The savings in labour costs typically exceed the cost of the mobile ordering system within the first month.' },
          { question: 'How much does a mobile ordering system cost?', answer: 'The Posso mobile ordering platform integrates with POS systems from £499 + VAT. Mobile ordering operates on low commission per order. QR code table ordering, web ordering, and app ordering are all included. Free setup, menu configuration, QR code printing, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
