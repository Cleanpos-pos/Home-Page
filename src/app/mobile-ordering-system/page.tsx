import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Smartphone, Clock, CreditCard, BarChart3, Phone, ArrowRight, QrCode, Globe, ShieldCheck, Tablet, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Ordering System for Restaurants | QR Code & App Ordering',
  description:
    'Mobile ordering system for restaurants — QR code table ordering, mobile-responsive online ordering, waiter pad app, and mobile POS for events. Over 70% of orders come from mobile. From £499 + VAT.',
  keywords: [
    'mobile ordering system',
    'mobile ordering system for restaurants',
    'qr code ordering',
    'mobile restaurant ordering',
    'phone ordering system',
    'mobile order and pay',
    'qr table ordering',
    'mobile pos system',
    'waiter pad app',
    'mobile ordering uk',
  ],
  alternates: {
    canonical: '/mobile-ordering-system',
  },
  openGraph: {
    title: 'Mobile Ordering System for Restaurants | Posso UK',
    description:
      'QR code table ordering, mobile-responsive online ordering, waiter pad app, and mobile POS for pop-ups. Over 70% of orders come from mobile devices.',
    url: 'https://www.posso.co.uk/mobile-ordering-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Mobile Ordering System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Mobile ordering system for restaurants with QR code table ordering, mobile-responsive online ordering website, waiter pad app, order tracking, and mobile POS for pop-ups and events.',
    url: 'https://www.posso.co.uk/mobile-ordering-system',
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
      'QR code table ordering',
      'Mobile-responsive online ordering website',
      'Waiter pad app on tablets',
      'Real-time order tracking on mobile',
      'Mobile POS for pop-ups and events',
      'Apple Pay and Google Pay support',
      'Low commission online ordering',
      'Push notifications for order status',
      'Multi-language menu support',
      'Works on any smartphone browser',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Mobile Ordering System', item: 'https://www.posso.co.uk/mobile-ordering-system' },
    ],
  },
];

const mobileFeatures = [
  { icon: QrCode, title: 'QR Code Table Ordering', description: 'Customers scan a QR code at their table, browse the menu, and order from their phone. No app download required — it works in any mobile browser.' },
  { icon: Globe, title: 'Mobile-Responsive Online Ordering', description: 'Your own ordering website automatically adapts to any screen size. Over 70% of online orders come from mobile — your site needs to look perfect on a 6-inch screen.' },
  { icon: Tablet, title: 'Waiter Pad App', description: 'Staff take orders on tablets and send them straight to the kitchen display. No walking back to the till, no paper pads, no transcription errors.' },
  { icon: Smartphone, title: 'Mobile POS for Events', description: 'Take your POS on the road. The Posso mobile app turns any tablet into a fully functional POS for pop-ups, festivals, markets, and outdoor events.' },
  { icon: CreditCard, title: 'Mobile Payments', description: 'Accept Apple Pay, Google Pay, and contactless payments from customers ordering on their phone. Payment completes in under 3 seconds.' },
  { icon: Clock, title: 'Real-Time Order Tracking', description: 'Customers see their order status update in real-time on their phone — received, preparing, ready. No flagging down a waiter to ask where their food is.' },
];

const mobileStats = [
  { stat: '70%+', label: 'Of restaurant orders now come from mobile devices' },
  { stat: '35%', label: 'Average increase in order value with mobile ordering' },
  { stat: '3 sec', label: 'Average mobile payment completion time' },
  { stat: '0', label: 'App downloads required — works in the browser' },
];

export default function MobileOrderingSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Mobile Ordering System' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Zap className="w-3 h-3 mr-2" />
                OVER 70% OF ORDERS ARE MOBILE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Mobile Ordering System for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Restaurants
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                QR code table ordering, mobile-responsive online ordering, waiter pad app, and mobile POS for events — all connected to one system. Your customers already have the hardware in their pocket.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> QR code order & pay — no app download needed</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> 35% higher average order value vs counter ordering</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Works with your existing Posso POS from £499 + VAT</li>
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

        {/* Stats */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {mobileStats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{s.stat}</p>
                  <p className="text-slate-400 text-sm mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Every Way Your Customers Order on Mobile
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Mobile ordering is not one feature — it is six. Each one connects to your kitchen and POS automatically.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {mobileFeatures.map((f) => (
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

        {/* Why Mobile Ordering Matters */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Why Mobile Ordering Changes Everything
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  When customers order from their phone, they browse the full menu at their own pace. They see photos, read descriptions, and add extras without feeling rushed. That is why <strong className="text-white">mobile ordering increases average order value by 35%</strong> compared to counter ordering.
                </p>
                <p>
                  For your staff, it means fewer trips between tables and the till, fewer order mistakes from mishearing in a noisy room, and more time to focus on hospitality instead of logistics.
                </p>
                <p>
                  For online ordering, a <strong className="text-white">mobile-responsive website</strong> is not optional — it is where most of your customers are. If your ordering page does not work perfectly on a phone screen, you are losing orders to competitors who have already figured this out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How QR Code Ordering Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How QR Code Table Ordering Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Scan', desc: 'Customer scans the QR code on their table with their phone camera' },
                { step: '2', title: 'Browse & Order', desc: 'Full menu loads in their browser — no app download, no signup' },
                { step: '3', title: 'Pay', desc: 'Apple Pay, Google Pay, or card — payment completes in seconds' },
                { step: '4', title: 'Kitchen Receives', desc: 'Order appears on your KDS with the table number automatically' },
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

        {/* Benefits */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Benefits for Your Restaurant
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: BarChart3, title: 'Higher Average Spend', desc: 'Customers browsing a visual menu on their phone order more sides, drinks, and desserts than they would at the counter.' },
                  { icon: Users, title: 'Serve More Covers', desc: 'Tables order and pay without waiting for a waiter. Faster table turns mean more covers per service.' },
                  { icon: ShieldCheck, title: 'Fewer Order Errors', desc: 'Customers select exactly what they want — no miscommunication between diner and staff in a loud restaurant.' },
                  { icon: MapPin, title: 'Works Anywhere', desc: 'Pop-ups, festivals, outdoor terraces, food halls — anywhere you have a mobile signal, you have a full POS.' },
                ].map((b) => (
                  <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50 flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <b.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{b.title}</h3>
                      <p className="text-slate-400">{b.desc}</p>
                    </div>
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Ordering Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/table-ordering-app-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Table Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">QR code order & pay</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own ordering website</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
                <Link href="/restaurant-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS system</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Mobile Ordering — Frequently Asked Questions" faqs={[
          { question: 'Do customers need to download an app to order?', answer: 'No. The Posso mobile ordering system works entirely in the customer\'s web browser. They scan a QR code or visit your ordering URL, and the menu loads instantly. No app store, no signup, no friction.' },
          { question: 'How does QR code table ordering work with my existing POS?', answer: 'QR code orders go directly to your Posso POS and kitchen display system. The order includes the table number automatically, so your kitchen knows exactly where to send the food. It works alongside counter orders and online orders on the same system.' },
          { question: 'Can I use the waiter pad app on any tablet?', answer: 'The Posso waiter pad app works on Android tablets and iPads. Staff browse the menu, take orders, apply modifiers, and send to the kitchen — all from the tablet. It connects to your main POS over Wi-Fi.' },
          { question: 'Is mobile ordering suitable for pop-ups and events?', answer: 'Yes. The Posso mobile POS works on any tablet with a mobile data connection. Pair it with a portable card terminal and you have a full POS for markets, festivals, food trucks, and outdoor events. No fixed broadband needed.' },
          { question: 'How much does the mobile ordering system cost?', answer: 'Mobile ordering is included with your Posso POS system from £499 + VAT. QR code table ordering, the waiter pad app, and your online ordering website are all part of the platform. Online ordering runs on a low commission model.' },
          { question: 'Does mobile ordering really increase average order value?', answer: 'Yes. Restaurants using Posso mobile ordering see an average 35% increase in order value compared to counter ordering. Customers browsing a visual menu with photos and descriptions tend to add more items, extras, and drinks.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
