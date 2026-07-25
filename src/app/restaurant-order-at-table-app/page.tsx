import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Clock, CreditCard, BarChart3, Phone, ArrowRight, QrCode, Utensils, Smartphone, MapPin, ChefHat, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Order at Table App',
  description:
    'Restaurant Order at Table App with QR code ordering, waiter pad mode, pay-at-table, floor plan management, and course firing. Let diners order and pay from their phone. POS from £499 + VAT.',
  keywords: [
    'restaurant order at table app',
    'order at table app',
    'qr code table ordering',
    'table ordering system',
    'order and pay at table',
    'restaurant table ordering app',
    'pay at table app',
    'qr ordering system uk',
    'waiter pad app',
    'table ordering app uk',
  ],
  alternates: {
    canonical: '/restaurant-order-at-table-app',
  },
  openGraph: {
    title: 'Restaurant Order at Table App | Posso UK',
    description:
      'Restaurant Order at Table App with QR ordering, waiter pad, pay-at-table, and course firing. Let guests order from their phone.',
    url: 'https://www.posso.co.uk/restaurant-order-at-table-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant Order at Table App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Restaurant Order at Table App with QR code ordering, waiter pad mode, pay-at-table functionality, interactive floor plan management, and course firing for multi-course meals.',
    url: 'https://www.posso.co.uk/restaurant-order-at-table-app',
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
      reviewCount: '142',
      bestRating: '5',
    },
    featureList: [
      'QR code table ordering — guests scan and order from their phone',
      'Waiter pad mode for staff-assisted ordering',
      'Pay-at-table with card, Apple Pay, Google Pay',
      'Interactive floor plan with table status',
      'Course firing for multi-course meals',
      'Real-time order sync to kitchen display',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant Order at Table App', item: 'https://www.posso.co.uk/restaurant-order-at-table-app' },
    ],
  },
];

const features = [
  { icon: QrCode, title: 'QR Code Table Ordering', description: 'Guests scan a QR code on their table, browse your full menu with photos and descriptions, customise their order with modifiers, and submit directly to the kitchen. No app download required — it works in any mobile browser.' },
  { icon: Smartphone, title: 'Waiter Pad Mode', description: 'Staff carry a phone or tablet as a wireless order pad. Tap items, add modifiers, assign to a table, and fire to the kitchen — all without walking back to the till. Orders appear on the KDS in under 2 seconds.' },
  { icon: CreditCard, title: 'Pay-at-Table', description: 'Guests pay from their phone when they are ready. Card, Apple Pay, Google Pay — no waiting for the bill. Tips can be added on screen. The table status updates to "paid" automatically on the floor plan.' },
  { icon: MapPin, title: 'Interactive Floor Plan', description: 'Drag and drop tables onto your floor plan. See at a glance which tables are occupied, which have ordered, which are waiting for food, and which are ready to be cleared. Colour-coded status keeps front of house in control.' },
  { icon: ChefHat, title: 'Course Firing', description: 'For multi-course meals, starters fire immediately while mains are held. When the table is ready for the next course, staff tap to fire — or set automatic timers. The kitchen gets courses in the right order, every time.' },
  { icon: Users, title: 'Group Ordering', description: 'Multiple guests at the same table can scan the same QR code and add items to a shared order. Each person orders what they want, and the kitchen receives one consolidated ticket per table with all items grouped.' },
];

const benefits = [
  { title: 'Reduce Wait Times by 60%', description: 'When guests order from their phone the moment they sit down, you eliminate the wait for a waiter to take the order. Food reaches the table faster, tables turn quicker, and guests spend less time waiting and more time enjoying their meal.' },
  { title: 'Increase Average Order Value', description: 'Digital menus with photos and upsell prompts consistently increase spend. Guests add extras, upgrade sides, and order desserts they would have skipped if they had to flag down a waiter. Restaurants using Posso table ordering see 15-22% higher average tickets.' },
  { title: 'Free Up Your Staff', description: 'With guests ordering and paying from their phone, your waiters spend their time on hospitality — checking on tables, recommending dishes, and making guests feel welcome — instead of running back and forth to the till.' },
  { title: 'Fewer Order Errors', description: 'When guests enter their own order with modifiers and special requests typed out, there is no room for miscommunication. Allergies, dietary requirements, and customisations go straight to the kitchen exactly as the guest specified.' },
];

export default function RestaurantOrderAtTableAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Restaurant Order at Table App' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <QrCode className="w-3 h-3 mr-2" />
                SCAN, ORDER & PAY FROM THE TABLE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Restaurant Order at Table{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  App
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Let your guests scan a QR code, browse your menu, order, and pay — all from their phone. Orders fire straight to the kitchen display. No app download, no waiting for the bill.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> QR ordering with no app download needed</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pay-at-table with card, Apple Pay, Google Pay</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete POS with table ordering from £499 + VAT</li>
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

        {/* Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                How Table Ordering Works
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From QR scan to kitchen ticket in under 30 seconds. No app downloads, no complicated setup — just faster service and happier guests.
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

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">From Scan to Kitchen in Seconds</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Scan QR Code', desc: 'Guest scans the QR code on the table using their phone camera' },
                { step: '2', title: 'Browse & Order', desc: 'Full menu with photos, descriptions, modifiers, and allergen info' },
                { step: '3', title: 'Kitchen Receives', desc: 'Order appears on the kitchen display within 2 seconds of submission' },
                { step: '4', title: 'Pay & Go', desc: 'Guest pays from their phone when ready — no waiting for the bill' },
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
                Why Restaurants Choose Table Ordering
              </h2>
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

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Table Ordering That Works With Your Existing POS
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The Posso restaurant order at table app is not a separate system bolted onto your POS. It is <strong className="text-white">built into the same platform</strong> that runs your till, kitchen display, and delivery integrations. When a guest orders from their table, it appears on the same KDS screen as waiter-entered orders and online orders.
                </p>
                <p>
                  Your menu updates in one place and syncs everywhere — the POS, the QR ordering menu, and your online ordering website. Change a price, add a dish, or mark something as out of stock, and it updates across all channels instantly.
                </p>
                <p>
                  For restaurants that want both QR self-ordering and traditional waiter service, the Posso system supports both simultaneously. Some tables can order via QR while others are served by staff using the waiter pad app — all feeding into the same kitchen workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Restaurant Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering website</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">In-store kiosk ordering</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats & more</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant Order at Table App — Frequently Asked Questions" faqs={[
          { question: 'Do guests need to download an app to order at the table?', answer: 'No. The Posso order at table system works through the mobile browser. Guests scan the QR code with their phone camera and the menu opens instantly — no app store, no download, no sign-up. It works on any smartphone with a camera.' },
          { question: 'Can I use table ordering alongside traditional waiter service?', answer: 'Yes. You can run both simultaneously. Some tables order via QR while others are served by staff using the waiter pad app. Both order types appear on the same kitchen display in the same format, so the kitchen workflow stays consistent.' },
          { question: 'How does pay-at-table work?', answer: 'When guests are ready to pay, they tap the payment button on their phone. They can pay by card, Apple Pay, or Google Pay. Tips can be added on screen before payment. The table status updates automatically on the floor plan, so staff know the table is ready to be cleared.' },
          { question: 'Does the QR ordering menu show allergen information?', answer: 'Yes. Every menu item can include allergen tags (gluten, dairy, nuts, etc.) and dietary labels (vegan, vegetarian, halal). Guests can filter the menu by dietary requirement to see only suitable items. This information syncs from the same menu data used on your POS.' },
          { question: 'How much does the restaurant order at table app cost?', answer: 'Table ordering is included with the Posso POS system from £499 + VAT. There is no separate monthly fee for the QR ordering feature. You get the POS, kitchen display, table ordering, and online ordering all in one system with low commission on orders.' },
          { question: 'Can multiple people at the same table order separately?', answer: 'Yes. Group ordering allows multiple guests to scan the same QR code and add items to a shared order. Each person selects what they want, and the kitchen receives one consolidated ticket. At payment time, guests can split the bill by item or pay equal shares.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
