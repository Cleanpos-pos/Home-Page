import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, QrCode, Smartphone, CreditCard, UtensilsCrossed, Timer, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self Order App',
  description:
    'Self Order App — customers order from their phone via QR code, no app download required. Table ordering and collection, mobile payments, and direct kitchen integration. From £499 + VAT.',
  keywords: [
    'self order app',
    'self ordering app',
    'qr code ordering app',
    'order from phone app',
    'self service ordering app',
    'table ordering app',
    'scan to order app',
    'self order app uk',
    'restaurant self order app',
    'cafe self ordering',
  ],
  alternates: {
    canonical: '/self-order-app',
  },
  openGraph: {
    title: 'Self Order App | Posso UK',
    description:
      'Self Order App — QR-based ordering from phone, no download, table + collection, mobile payments, kitchen integration.',
    url: 'https://www.posso.co.uk/self-order-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Self Order App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Self-ordering app where customers order from their phone via QR code with no app download required. Supports table ordering, collection, mobile payments, and kitchen display integration.',
    url: 'https://www.posso.co.uk/self-order-app',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'QR code ordering — no app download',
      'Table ordering with table number detection',
      'Collection ordering with ready notifications',
      'Mobile payment processing',
      'Kitchen display integration',
      'Menu customisation and modifiers',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Online Ordering', item: 'https://www.posso.co.uk/online-ordering' },
      { '@type': 'ListItem', position: 3, name: 'Self Order App', item: 'https://www.posso.co.uk/self-order-app' },
    ],
  },
];

const features = [
  { icon: QrCode, title: 'QR Code — No Download Needed', description: 'Customers scan a QR code with their phone camera. The menu opens instantly in their browser — no app store, no download, no account creation. They are browsing your menu within 2 seconds of scanning. This zero-friction approach means every customer can use it, regardless of phone storage, technical ability, or patience. The QR code works on any smartphone with a camera.' },
  { icon: UtensilsCrossed, title: 'Table Ordering', description: 'Each table has its own QR code with the table number embedded. When a customer scans and orders, the kitchen knows exactly which table the food goes to. Customers order starters, then add mains later, then desserts — all from their phone. No waiting for a server between courses. The table number links all orders together for accurate billing and service.' },
  { icon: ShoppingBag, title: 'Collection Ordering', description: 'Customers scan a QR code on a counter sign, wall poster, or printed flyer. They order and pay from their phone. The order goes to the kitchen with a collection number. When the food is ready, the customer is notified on their phone or their number is called. Perfect for fast-casual restaurants, food halls, and cafes where customers order at the counter and collect when ready.' },
  { icon: CreditCard, title: 'Mobile Payments', description: 'Apple Pay, Google Pay, and card payments are handled within the browser — no separate app required. The customer adds items, reviews their order, and pays in one seamless flow. Payment is processed before the order reaches the kitchen, so there is no risk of walkouts. Tips can be added at checkout with preset percentages. Split payments are available for groups.' },
  { icon: Timer, title: 'Kitchen Display Integration', description: 'Every self-order goes directly to the kitchen display system. The kitchen team sees the order within seconds — table number or collection number, all items, modifications, allergen flags, and special instructions. No printed tickets, no re-keying from a tablet. The order is accurate because the customer entered it themselves. The kitchen makes exactly what was ordered.' },
  { icon: Smartphone, title: 'Customisable Menu', description: 'Build your menu with categories, items, descriptions, photos, prices, and modifiers. Mark items as containing specific allergens. Set items as available or unavailable in real time. Schedule menu changes — lunch menu at 11am, dinner at 5pm. The menu looks professional on every phone screen size. Customers see exactly what they are ordering with photos and clear descriptions.' },
];

const benefits = [
  { title: 'Zero Friction Self-Ordering', description: 'The biggest barrier to self-ordering adoption is friction. If customers need to download an app, create an account, or verify their email, half of them give up. QR code browser ordering removes every barrier. Scan, browse, order, pay — in the same time it takes to read a printed menu. Adoption rates of 60-80% within the first month because there is nothing to learn and nothing to install.' },
  { title: 'Reduce Staffing Pressure', description: 'Self-ordering does not replace your team — it frees them from order-taking to focus on hospitality. A 40-seat cafe that previously needed 3 floor staff can operate comfortably with 1-2 when most orders come through the self-order app. The staff you keep deliver better service because they are not rushing between tables taking orders.' },
  { title: 'Higher Average Order Value', description: 'Customers spend 18-25% more when ordering from their phone compared to ordering at the counter. They browse the full menu at their own pace, see photos of dishes they might not have considered, and add extras without feeling rushed. The upsell prompts at checkout — "Add a side?", "Make it a meal deal?" — convert at higher rates than verbal suggestions.' },
  { title: 'Eliminate Order Errors', description: 'The customer types their own order. They select their modifications, add allergy notes, and review everything before paying. The order reaches the kitchen exactly as submitted — no interpretation, no abbreviation, no mishearing. The result: fewer remakes, fewer complaints, less food waste, and customers who get exactly what they wanted every time.' },
];

export default function SelfOrderAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Online Ordering', href: '/online-ordering' },
          { label: 'Self Order App' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <QrCode className="w-3 h-3 mr-2" />
                SCAN, ORDER, PAY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Self Order{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  App
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Customers order from their phone by scanning a QR code — no app download, no sign-up. Table ordering and collection, mobile payments, straight to the kitchen display.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> QR code ordering — works in the browser</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Table ordering + collection mode</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Self Order App Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                The simplest way for customers to order — scan a code, choose their food, pay, and wait for it to arrive.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Self-Ordering Works</h2>
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
                What Self-Ordering Looks Like in Practice
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A family of four sits down at a casual dining restaurant. They scan the <strong className="text-white">QR code on the table</strong>. The menu loads on each of their phones. They browse independently — Dad looks at burgers, Mum checks the salads, the kids go straight to the pizza section. Within 3 minutes, all four have ordered. No waiting for a server, no negotiating who goes first.
                </p>
                <p>
                  At a busy food hall, a customer scans a QR code on a <strong className="text-white">counter stand</strong> for a Thai street food vendor. They order pad thai with chicken, no peanuts, extra chilli. They pay with Apple Pay. The order goes to the kitchen display with a collection number. Three minutes later, their phone buzzes: "Order #47 ready for collection." They collect and find a seat.
                </p>
                <p>
                  In both scenarios, the customer <strong className="text-white">entered their own order</strong> with their own modifications. The kitchen received it accurately. No staff time was spent taking the order. The payment was processed before the food was made. This is self-ordering — simple for the customer, efficient for the business, and accurate for the kitchen.
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
                <Link href="/mobile-ordering-apps" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile Ordering Apps</p>
                  <p className="text-slate-400 text-sm mt-1">QR and mobile ordering</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/restaurant-ordering-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">Dine-in, takeaway, delivery</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Self Order App — Frequently Asked Questions" faqs={[
          { question: 'Do customers need to download an app?', answer: 'No. The self-order system works entirely in the phone\'s web browser. Customers scan a QR code and the menu opens immediately — no app download, no account creation, no email verification. This zero-friction approach means every customer can use it instantly, regardless of phone storage or technical confidence.' },
          { question: 'How does table ordering work?', answer: 'Each table has a unique QR code with the table number embedded in the URL. When a customer scans and places an order, the kitchen display automatically shows which table the food is for. Customers can place multiple orders from the same table — starters first, then mains, then desserts. All orders are linked to the same table for billing purposes.' },
          { question: 'Can customers pay from their phone?', answer: 'Yes. Apple Pay, Google Pay, and card payments are all supported within the browser. No separate app is needed. The customer reviews their order, selects a payment method, and completes the transaction in seconds. Tips can be added at checkout. For groups, split payment is available so each person can pay for their own items.' },
          { question: 'Does it work for collection ordering too?', answer: 'Yes. For takeaway counters, food halls, and fast-casual restaurants, the QR code can be placed on counter signs or wall posters. Customers scan, order, and pay. They receive a collection number. When the order is ready, they are notified on their phone or called by number. No app download needed — the same browser-based system works for both table and collection ordering.' },
          { question: 'How do orders reach the kitchen?', answer: 'Every order goes directly to the Posso kitchen display system within seconds of the customer paying. The kitchen sees the table number or collection number, all items, modifications, allergen notes, and any special instructions. Orders are queued by time and can be sorted by type. No printed tickets, no re-keying, no errors from manual transcription.' },
          { question: 'How much does the self-order app cost?', answer: 'The self-order app integrates with POS systems from £499 + VAT. Low commission on orders. The QR code ordering system, menu builder, payment processing, and kitchen display integration are all included. Free setup, menu configuration, QR code printing, and staff training. 2-year hardware warranty on all POS equipment.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
