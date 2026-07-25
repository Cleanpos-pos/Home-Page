import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Smartphone, QrCode, Users, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Self Ordering System',
  description:
    'Restaurant Self Ordering System with kiosks, QR table ordering, and digital menus. Reduce staff dependency and speed up service. POS from £499 + VAT, kiosks from £699 + VAT.',
  keywords: [
    'restaurant self ordering system',
    'self ordering kiosk restaurant',
    'restaurant self service ordering',
    'qr code ordering restaurant',
    'self order restaurant system',
    'restaurant ordering kiosk',
    'self service restaurant pos',
    'restaurant digital ordering',
    'table ordering system restaurant',
    'self ordering system uk',
  ],
  alternates: {
    canonical: '/restaurant-self-ordering-system',
  },
  openGraph: {
    title: 'Restaurant Self Ordering System | Posso UK',
    description:
      'Restaurant Self Ordering System with kiosks, QR table ordering, and digital menus. Reduce staff dependency and speed up service.',
    url: 'https://www.posso.co.uk/restaurant-self-ordering-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant Self Ordering System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Restaurant self ordering system with self-service kiosks, QR code table ordering, digital menu boards, and kitchen integration for faster service with fewer staff.',
    url: 'https://www.posso.co.uk/restaurant-self-ordering-system',
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
      'Self-service ordering kiosks',
      'QR code table ordering',
      'Digital menu with live pricing',
      'Kitchen display integration',
      'Multi-language support',
      'Contactless payment processing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant Self Ordering System', item: 'https://www.posso.co.uk/restaurant-self-ordering-system' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Self-Service Kiosks', description: 'Freestanding touchscreen kiosks let customers browse your full menu, customise dishes, and pay without waiting for staff. Upsell prompts increase average order value by 15–20%. Kiosks handle the queue while your team focuses on food preparation and table service.' },
  { icon: QrCode, title: 'QR Code Table Ordering', description: 'Each table has a unique QR code. Customers scan with their phone, view the menu, order, and pay from their seat. Orders fire directly to the kitchen display. No waiting for a server to take the order — food preparation starts the moment the customer confirms.' },
  { icon: Smartphone, title: 'Digital Menu Management', description: 'Update your menu in real time from the cloud dashboard. Add seasonal specials, remove sold-out items, change prices — updates appear instantly on kiosks, QR menus, and your website. No reprinting, no crossed-out items. One menu source controls every customer-facing channel.' },
  { icon: Users, title: 'Reduced Staff Dependency', description: 'Self ordering handles the entire order-taking process. A restaurant that previously needed four front-of-house staff during peak service can operate with two. Staff are redeployed to food running, table clearing, and customer experience — tasks that directly improve satisfaction.' },
  { icon: Clock, title: 'Faster Table Turnover', description: 'Customers order when they are ready, not when a server is available. Average time from sitting down to placing an order drops from 8 minutes to under 2 minutes. Faster ordering means faster kitchen throughput, faster eating, faster table clearing. More covers per service, more revenue per shift.' },
  { icon: ShieldCheck, title: 'Kitchen Display Integration', description: 'Every self-service order — whether from a kiosk, QR code, or online — arrives on the kitchen display with full item detail, modifiers, and allergen flags. The kitchen works one unified queue. No handwritten tickets, no misread orders. Food comes out accurate and on time.' },
];

const benefits = [
  { title: 'Cut Labour Costs Without Cutting Service', description: 'Self ordering replaces the most repetitive front-of-house task: taking orders. You redeploy staff to higher-value activities — greeting customers, running food, clearing tables. The result is lower wage costs and better customer experience simultaneously.' },
  { title: 'Increase Average Order Value', description: 'Kiosks and QR menus present upsell prompts that staff often forget. "Add a side?", "Make it a meal deal?", "Upgrade to large?" — these prompts are consistent on every order. Restaurants using Posso self ordering report 15–20% higher average spend per customer.' },
  { title: 'Eliminate Order Errors', description: 'When customers enter their own order, there is no miscommunication between diner and server. Allergen information is displayed on screen. Modifiers are selected explicitly. The kitchen receives exactly what the customer chose. Fewer remakes, less waste, fewer complaints.' },
  { title: 'Serve More Customers Per Hour', description: 'A kiosk processes orders continuously without breaks, shift changes, or fatigue. QR ordering removes the bottleneck of waiting for a server. During a Friday evening rush, self ordering lets you serve 30% more covers without adding a single member of staff.' },
];

export default function RestaurantSelfOrderingSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Restaurant Self Ordering System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                SELF-SERVICE ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Restaurant Self Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Kiosks, QR table ordering, and digital menus that let your customers order and pay without waiting for staff. Faster service, higher spend, lower labour costs.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Self-service kiosks from £699 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> QR code table ordering included</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Self Ordering Features for Restaurants</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every ordering channel — kiosk, QR, online — feeds into one kitchen queue with full modifier and allergen detail.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Self Ordering</h2>
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
                From Quick Service to Fine Dining
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Quick-service restaurants benefit most from <strong className="text-white">kiosk ordering</strong>. Customers queue at the kiosk instead of the counter, browse the menu at their own pace, and pay by card or phone. The kitchen receives a steady stream of orders without front-of-house bottlenecks.
                </p>
                <p>
                  Casual dining restaurants use <strong className="text-white">QR table ordering</strong> to let guests order rounds of drinks and additional courses without flagging down a server. The experience feels seamless — scan, browse, order, pay. Staff spend more time delivering food and less time writing down orders.
                </p>
                <p>
                  Even fine dining venues use <strong className="text-white">digital pre-ordering</strong> for set menus, tasting events, and group bookings. Guests select their courses in advance, allergen data is captured automatically, and the kitchen receives the full service plan before guests arrive.
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
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/restaurant-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant system</p>
                </Link>
                <Link href="/hospitality-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Hospitality Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks for all venues</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant Self Ordering System — Frequently Asked Questions" faqs={[
          { question: 'How do self-ordering kiosks work in a restaurant?', answer: 'Customers walk up to a freestanding touchscreen kiosk, browse your full menu with images and descriptions, customise their order with modifiers and extras, and pay by card or contactless. The order fires directly to the kitchen display. No staff interaction is needed for the ordering process. Kiosks start from £699 + VAT.' },
          { question: 'What is QR code table ordering?', answer: 'Each table has a printed QR code. Customers scan it with their phone camera, which opens your digital menu in their browser — no app download required. They browse, select items, add modifiers, and pay online. The order appears on the kitchen display tagged with the table number. Staff deliver the food.' },
          { question: 'Will self ordering replace my waiting staff?', answer: 'Self ordering replaces the order-taking task, not the staff. Most restaurants redeploy front-of-house team members to food running, table management, customer greeting, and upselling. The result is fewer staff needed during peak service, but better customer experience from the staff who remain.' },
          { question: 'Does it integrate with my existing POS?', answer: 'The Posso self ordering system integrates directly with the Posso POS and kitchen display. All orders — whether from kiosks, QR codes, online, or the till — appear in one unified queue. Stock levels, pricing, and menu changes sync automatically across every channel.' },
          { question: 'Can customers pay at the kiosk?', answer: 'Yes. Kiosks accept contactless card payments, Apple Pay, Google Pay, and chip-and-PIN. Payment is processed before the order reaches the kitchen, so there is no risk of walkouts or payment disputes. Receipts are sent by email or printed at the kiosk.' },
          { question: 'How much does a restaurant self ordering system cost?', answer: 'The POS system starts from £499 + VAT. Self-ordering kiosks start from £699 + VAT per unit. QR table ordering is included with the POS at low commission. Finance options available from £24.92 per week. Free installation, menu setup, and staff training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
