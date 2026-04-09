import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Pizza, Monitor, PhoneCall, Truck, Users, TabletSmartphone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pizza Shop POS',
  description:
    'Pizza Shop POS with counter and delivery management, caller ID, driver tracking, kiosk ordering, and online integration. Complete pizza shop system from £499 + VAT.',
  keywords: [
    'pizza shop pos',
    'pizza shop pos system',
    'pizza shop till',
    'pizza counter pos',
    'pizza delivery system',
    'pizza shop epos',
    'pizza kiosk ordering',
    'pizza shop software',
    'pizza pos uk',
    'pizza shop till system',
  ],
  alternates: {
    canonical: '/pizza-shop-pos',
  },
  openGraph: {
    title: 'Pizza Shop POS | Posso UK',
    description:
      'Pizza Shop POS with counter + delivery, caller ID, driver management, and kiosk ordering. Complete pizza shop system.',
    url: 'https://posso.co.uk/pizza-shop-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Pizza Shop POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Complete pizza shop POS system with counter service, delivery management, caller ID for phone orders, driver tracking and assignment, and self-service kiosk ordering.',
    url: 'https://posso.co.uk/pizza-shop-pos',
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
      reviewCount: '167',
      bestRating: '5',
    },
    featureList: [
      'Counter and delivery order management',
      'Caller ID with customer history lookup',
      'Driver tracking and delivery assignment',
      'Self-service kiosk ordering for walk-ins',
      'Online ordering integration',
      'Kitchen display with order priority queue',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Pizza Shop POS', item: 'https://posso.co.uk/pizza-shop-pos' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Counter & Delivery Management', description: 'One screen handles walk-in counter orders and delivery orders side by side. Counter orders are marked for collection with a ticket number. Delivery orders include the customer address, delivery zone, and estimated time. The kitchen works one unified queue regardless of how the order arrived.' },
  { icon: PhoneCall, title: 'Caller ID Integration', description: 'The phone rings and the customer details appear on screen before you pick up. Name, address, previous orders — all visible instantly. Returning customers reorder their usual in seconds. New callers have their details saved for next time. During a busy Friday night, caller ID turns a 3-minute phone order into a 45-second reorder.' },
  { icon: Truck, title: 'Driver Management', description: 'See all your drivers on one dashboard — who is available, who is out, and how long they have been gone. Assign deliveries to drivers with one tap. Drivers use a mobile app with the delivery address, order details, and navigation. Mark deliveries as complete and the driver returns to the available pool automatically.' },
  { icon: TabletSmartphone, title: 'Self-Service Kiosk', description: 'Walk-in customers order at a kiosk without queuing at the counter. They browse the full menu, build custom pizzas, select sides and drinks, and pay by card. The order goes directly to the kitchen display. Kiosks reduce counter congestion during peak hours and increase average order value through visual upsells. Kiosks from £699 + VAT.' },
  { icon: Users, title: 'Staff Management', description: 'Each staff member logs in with a PIN or swipe card. Track who processed each order, monitor individual sales performance, and manage shift clock-in and clock-out times. Set permission levels — counter staff can take orders while managers access reports, voids, and discounts. Shift reports show total sales by employee.' },
  { icon: Pizza, title: 'Kitchen Display System', description: 'Orders appear on the kitchen display in priority order. Each order shows the full specification — pizza sizes, toppings, sides, drinks, and special instructions. Collection orders have a ticket number. Delivery orders show the driver assignment and estimated dispatch time. The kitchen works through the queue systematically.' },
];

const benefits = [
  { title: 'Run Counter and Delivery Simultaneously', description: 'Most pizza shops serve walk-in customers while managing a delivery operation. The POS handles both from one interface. Counter orders get a ticket number for collection. Delivery orders flow into the driver management system. The kitchen treats all orders equally — first in, first out — with delivery orders dispatched as drivers become available.' },
  { title: 'Speed Up Phone Orders with Caller ID', description: 'When a regular calls, their name, address, and last three orders appear before you answer. One tap to reorder their usual. For a shop taking 100 phone orders on a Friday night, cutting each call from 3 minutes to 1 minute saves over 3 hours of staff time. That is either fewer staff needed or more orders taken.' },
  { title: 'Reduce Counter Queues with Kiosks', description: 'Self-service kiosks let walk-in customers order without waiting for a staff member. During peak lunch hours, two kiosks can handle the queue while your counter staff focus on phone orders and collections. Kiosk orders also tend to have a higher average value — visual menus with upsell prompts encourage extras.' },
  { title: 'Track Every Delivery in Real Time', description: 'Assign deliveries to drivers, track their status, and see average delivery times on a live dashboard. Know exactly which orders are in the kitchen, which are ready for dispatch, and which are en route. When a customer calls asking where their pizza is, you have an immediate answer.' },
];

export default function PizzaShopPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Pizza Shop POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Pizza className="w-3 h-3 mr-2" />
                COMPLETE PIZZA SHOP SYSTEM
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Pizza Shop{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Counter service, delivery management, caller ID, driver tracking, and kiosk ordering — a complete POS system designed to run every aspect of a pizza shop.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Counter + delivery on one screen</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Caller ID pulls up customer history instantly</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete pizza shop POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Pizza Shop POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything a pizza shop needs — from taking the order to handing it over at the counter or the doorstep.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Pizza Shops Choose Posso</h2>
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
                Built for the Reality of Running a Pizza Shop
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A pizza shop is not just a restaurant — it is a <strong className="text-white">counter service, phone order centre, delivery operation, and online business</strong> all at once. The Posso pizza shop POS manages every channel from one system so nothing gets lost between them.
                </p>
                <p>
                  On a <strong className="text-white">Friday night</strong>, you might have 10 counter orders, 30 phone orders, 20 online orders, and 5 kiosk orders all within an hour. The POS queues them all into one kitchen workflow with the right priority. Delivery orders are assigned to drivers. Counter orders get ticket numbers. It all flows.
                </p>
                <p>
                  The system integrates with <strong className="text-white">Just Eat, Uber Eats, and Deliveroo</strong> so marketplace orders arrive alongside your direct orders. One kitchen, one queue, one system. No separate tablets for each platform cluttering the counter.
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
                <Link href="/pizza-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Pizza-specific ePOS</p>
                </Link>
                <Link href="/pizza-delivery-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza Delivery POS</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery management</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering site</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pizza Shop POS — Frequently Asked Questions" faqs={[
          { question: 'Can it handle counter and delivery orders together?', answer: 'Yes. The POS manages counter orders and delivery orders from one interface. Counter orders receive a ticket number for collection. Delivery orders include the customer address, zone, and estimated time. The kitchen sees one unified queue. You do not need separate systems for counter service and delivery.' },
          { question: 'How does caller ID work?', answer: 'When a customer calls your shop, their phone number is matched against your customer database. Their name, delivery address, and previous orders appear on screen before you answer. For returning customers, reordering their usual takes two taps. New callers have their details saved automatically for their next order.' },
          { question: 'Can walk-in customers use a kiosk?', answer: 'Yes. Self-service kiosks let walk-in customers browse the menu, build custom pizzas, add sides and drinks, and pay by card — without waiting for counter staff. Orders go directly to the kitchen display. Kiosks reduce queues during busy periods and increase average order value through visual menu presentation. Kiosks from £699 + VAT.' },
          { question: 'How do I manage delivery drivers?', answer: 'The driver dashboard shows all drivers and their status — available, assigned, or out on delivery. Assign orders to drivers with one tap. Drivers use a mobile app with delivery address, order details, and navigation. When they mark a delivery as complete, they return to the available pool. Track average delivery times and driver performance.' },
          { question: 'Does it integrate with delivery platforms?', answer: 'Yes. Orders from Just Eat, Uber Eats, and Deliveroo arrive directly on your POS and kitchen display. No separate tablets for each platform. All orders — phone, counter, kiosk, website, and delivery apps — appear in one queue. The kitchen works one workflow regardless of where the order originated.' },
          { question: 'How much does the pizza shop POS cost?', answer: 'The complete pizza shop POS starts from £499 + VAT including touchscreen terminal, pizza builder, caller ID, and kitchen display software. Self-service kiosks from £699 + VAT. Online ordering at low commission. Finance from £24.92 per week. Free setup, menu import, and staff training with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
