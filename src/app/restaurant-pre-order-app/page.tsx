import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Clock, CalendarDays, Users, Bell, Gauge, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Pre-Order App',
  description:
    'Restaurant Pre-Order App for advance ordering, scheduled pickup, time slot management, and capacity control. Customers order ahead and collect at their chosen time. From £499 + VAT.',
  keywords: [
    'restaurant pre order app',
    'pre order app',
    'advance ordering app',
    'scheduled pickup app',
    'pre order food app',
    'restaurant pre ordering',
    'order ahead app',
    'pre order restaurant uk',
    'food pre order system',
    'restaurant time slot ordering',
  ],
  alternates: {
    canonical: '/restaurant-pre-order-app',
  },
  openGraph: {
    title: 'Restaurant Pre-Order App | Posso UK',
    description:
      'Restaurant Pre-Order App for advance ordering, time slots, scheduled pickup, and kitchen capacity control.',
    url: 'https://www.posso.co.uk/restaurant-pre-order-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant Pre-Order App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Pre-ordering app for restaurants enabling advance ordering with scheduled pickup times, time slot management, kitchen capacity control, and POS integration.',
    url: 'https://www.posso.co.uk/restaurant-pre-order-app',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Advance ordering hours or days ahead',
      'Scheduled pickup time selection',
      'Time slot capacity management',
      'Kitchen capacity control',
      'POS and kitchen display integration',
      'Customer notification on order ready',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant Pre-Order App', item: 'https://www.posso.co.uk/restaurant-pre-order-app' },
    ],
  },
];

const features = [
  { icon: Clock, title: 'Advance Ordering', description: 'Customers place orders hours or even days in advance. An office worker orders lunch at 9am for 12:30pm pickup. A family pre-orders their Saturday takeaway on Thursday evening. The order is confirmed, paid, and scheduled — no last-minute rush, no queue on arrival. Your kitchen receives the order at the right preparation time.' },
  { icon: CalendarDays, title: 'Scheduled Pickup Times', description: 'Customers select their preferred pickup time from available slots. The app shows available windows — every 15 minutes, for example — and the customer chooses what suits them. When their food is ready, they receive a notification. They walk in, collect, and leave. No waiting, no queuing, no standing around checking their phone.' },
  { icon: Gauge, title: 'Kitchen Capacity Control', description: 'Set maximum orders per time slot based on what your kitchen can handle. If your kitchen can prepare 20 orders per 15-minute slot, the 21st customer sees the next available slot. This prevents the kitchen from being overwhelmed, maintains food quality, and ensures every order is ready on time. Capacity limits adjust by day and time.' },
  { icon: Users, title: 'Time Slot Management', description: 'Configure time slots to match your service patterns. Lunch slots from 11:30 to 14:00, dinner from 17:30 to 21:00. Set different capacities for different times — more slots during peak lunch, fewer during quiet afternoons. Block out slots for private events or maintenance. The app shows customers only what is available and bookable.' },
  { icon: Bell, title: 'Customer Notifications', description: 'Customers receive automatic updates at every stage: order confirmed, order being prepared, order ready for collection. Push notifications and SMS keep them informed without calling the restaurant. The notification includes their order number and collection point. Customers arrive at exactly the right moment — no early arrivals cluttering the counter.' },
  { icon: ShoppingBag, title: 'POS & Kitchen Integration', description: 'Pre-orders appear on your POS and kitchen display at the scheduled preparation time — not when they are placed. A 12:30 pickup order arrives in the kitchen at 12:10, giving exactly the preparation time needed. The kitchen works from one queue that includes walk-ins, phone orders, and pre-orders in the correct sequence.' },
];

const benefits = [
  { title: 'Smooth Out Kitchen Peaks', description: 'Pre-ordering spreads demand across time slots instead of concentrating it in a 30-minute lunch rush. When customers choose their own pickup times, orders distribute more evenly. Your kitchen prepares at a steady pace instead of being slammed with 50 orders at 12:15. Food quality stays consistent, staff stress reduces, and customers get their food on time.' },
  { title: 'Reduce Counter Congestion', description: 'Pre-order customers arrive, collect, and leave — they do not queue at the counter, they do not browse the menu, and they do not wait for their food. This frees the counter for walk-in customers and phone orders. During lunch peak, the collection shelf handles pre-orders while the counter handles everything else. Two flows, no bottleneck.' },
  { title: 'Capture Orders You Would Otherwise Lose', description: 'Office workers who cannot face a 15-minute queue skip your restaurant and go elsewhere. With pre-ordering, they place the order from their desk and collect without waiting. You capture the sale that the queue would have lost. Businesses near offices and campuses see 25-40% more lunchtime revenue after launching pre-ordering.' },
  { title: 'Prepaid Orders Reduce No-Collection', description: 'Customers pay when they order, not when they collect. This means every pre-order is a confirmed sale. No-collection rates for prepaid orders are under 2% — compared to 10-15% for phone orders where payment is on collection. Your kitchen prepares food that will actually be picked up and paid for.' },
];

export default function RestaurantPreOrderAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Restaurant Pre-Order App' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Clock className="w-3 h-3 mr-2" />
                ORDER AHEAD, COLLECT ON TIME
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Restaurant Pre-Order{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  App
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Customers order ahead, choose a pickup time, and collect without waiting. Your kitchen prepares at the right time with capacity control — no rush, no chaos, no wasted food.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Advance ordering with scheduled pickup</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Kitchen capacity limits per time slot</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pre-order app from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Pre-Order App Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Advance ordering with time slots, capacity control, and seamless kitchen integration.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Pre-Ordering</h2>
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
                Predictable Demand, Consistent Quality
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The biggest challenge for any restaurant is <strong className="text-white">unpredictable demand</strong>. Pre-ordering changes this. When customers order hours in advance, you know exactly how many meals to prepare and when. Your kitchen plans ahead, preps ingredients, and works at a steady pace instead of reacting to a sudden rush.
                </p>
                <p>
                  <strong className="text-white">Capacity control</strong> is the key feature that protects food quality. You set how many orders each time slot can accept. When a slot fills up, the next customer sees the next available time. Your kitchen is never overloaded. Every dish is prepared with care, not rushed out under pressure.
                </p>
                <p>
                  For customers, the experience is <strong className="text-white">convenient and reliable</strong>. They order from their phone, choose a time, pay in advance, and collect without waiting. No queuing, no uncertainty, no checking "is my order ready yet?" The notification tells them exactly when to arrive. It is the fastest way to get food — for both the customer and the kitchen.
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
                <Link href="/online-ordering-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering POS</p>
                  <p className="text-slate-400 text-sm mt-1">Built-in online ordering</p>
                </Link>
                <Link href="/epos-booking-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Booking System</p>
                  <p className="text-slate-400 text-sm mt-1">Table reservations</p>
                </Link>
                <Link href="/restaurant-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Till System</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant POS</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant Pre-Order App — Frequently Asked Questions" faqs={[
          { question: 'How far in advance can customers order?', answer: 'You configure the advance ordering window. Customers can order hours ahead for same-day collection, or days ahead for future dates. A common setup allows ordering up to 7 days in advance with same-day orders accepted until 30 minutes before closing. The window is fully configurable from your dashboard.' },
          { question: 'How do time slots work?', answer: 'You define available pickup times in intervals — every 10, 15, or 30 minutes. Each time slot has a maximum order capacity. Customers see only available slots and choose the one that suits them. When a slot reaches capacity, it disappears from the app and the next available slot is offered instead.' },
          { question: 'Does the pre-order appear on the kitchen display?', answer: 'Yes. Pre-orders arrive on the kitchen display at the scheduled preparation time, not when the customer places them. A 12:30 pickup order appears in the kitchen at the right time based on your configured prep time. The kitchen works from one unified queue alongside walk-in and phone orders.' },
          { question: 'Are pre-orders prepaid?', answer: 'Yes. Customers pay by card when they place the order. This confirms the order and eliminates no-collection risk. Refunds are processed from the POS if a customer cancels within your cancellation window. Prepaid orders have a no-collection rate of under 2% — far lower than pay-on-collection orders.' },
          { question: 'Can I limit the number of pre-orders per slot?', answer: 'Yes. Capacity control is a core feature. Set the maximum number of orders per time slot based on your kitchen capacity. If your kitchen handles 15 orders per 15-minute window, the 16th customer is directed to the next available slot. This prevents the kitchen from being overwhelmed and maintains food quality.' },
          { question: 'How much does the pre-order app cost?', answer: 'The restaurant pre-order app is included with the Posso POS from £499 + VAT. It integrates with your existing POS and kitchen display. Low commission on pre-orders. Free setup, time slot configuration, and staff training included with a 2-year warranty. Call 0808 175 3956 for a demo.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
