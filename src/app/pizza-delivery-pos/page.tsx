import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Pizza, Truck, MapPin, Globe, PhoneCall, Timer } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pizza Delivery POS',
  description:
    'Pizza Delivery POS with pizza builder, delivery zone management, driver tracking app, caller ID, and online ordering integration. Built for pizza delivery operations. POS from £499 + VAT.',
  keywords: [
    'pizza delivery pos',
    'pizza pos system',
    'pizza delivery pos system',
    'pizza shop pos',
    'pizza epos system',
    'pizza delivery software',
    'pizza ordering system',
    'pizza pos system uk',
    'pizza shop till system',
    'delivery pos system',
  ],
  alternates: {
    canonical: '/pizza-delivery-pos',
  },
  openGraph: {
    title: 'Pizza Delivery POS | Posso UK',
    description:
      'Pizza Delivery POS with pizza builder, delivery zones, driver app, caller ID, and online ordering. Built for pizza shops.',
    url: 'https://www.posso.co.uk/pizza-delivery-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Pizza Delivery POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Pizza delivery POS with visual pizza builder, delivery zone management, driver tracking app, caller ID for phone orders, and online ordering integration for pizza shops.',
    url: 'https://www.posso.co.uk/pizza-delivery-pos',
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
      reviewCount: '178',
      bestRating: '5',
    },
    featureList: [
      'Visual pizza builder with half-and-half topping support',
      'Delivery zone management with distance-based pricing',
      'Driver tracking app with route optimisation',
      'Caller ID — phone rings and customer details appear',
      'Online ordering with pizza customisation',
      'Kitchen display with prep time tracking',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Pizza Delivery POS', item: 'https://www.posso.co.uk/pizza-delivery-pos' },
    ],
  },
];

const features = [
  { icon: Pizza, title: 'Visual Pizza Builder', description: 'Customers build their perfect pizza — choose a base size, select sauce, add toppings with half-and-half support. The price updates live as toppings are added. Staff use the same builder on the POS for phone orders, so the workflow is consistent across channels.' },
  { icon: MapPin, title: 'Delivery Zone Management', description: 'Draw delivery zones on a map. Set delivery fees by zone — free within 1 mile, £2 within 3 miles, £3.50 within 5 miles. Set minimum order values per zone. Orders outside your delivery area are automatically declined with a clear message to the customer.' },
  { icon: Truck, title: 'Driver Tracking App', description: 'Assign deliveries to drivers from the POS. Drivers see their delivery queue on a mobile app with address, order details, and navigation. Mark deliveries as complete when done. You see which drivers are out, which are available, and average delivery times.' },
  { icon: PhoneCall, title: 'Caller ID Integration', description: 'When a customer calls, their number is matched against your database. Their name, address, and last order appear on screen before you answer. Reorder their usual in two taps. New callers get their details saved automatically for next time.' },
  { icon: Globe, title: 'Online Pizza Ordering', description: 'Your branded website lets customers build and order pizzas online with the same customisation options as phone ordering. Collection or delivery, scheduled or ASAP. Orders arrive on the POS and kitchen display instantly — no manual re-entry.' },
  { icon: Timer, title: 'Kitchen Prep Tracking', description: 'The kitchen display shows each order with a prep timer. Orders turn amber when approaching target time and red when overdue. Track average prep times by order type. Identify bottlenecks — if Friday night prep times spike, you know you need more kitchen staff.' },
];

const benefits = [
  { title: 'Faster Phone Orders', description: 'Caller ID plus one-tap reordering cuts phone order time from 3 minutes to under 60 seconds for returning customers. During peak hours, that efficiency means more calls answered, more orders taken, and fewer customers lost to voicemail or busy lines.' },
  { title: 'Delivery Operations That Scale', description: 'Zone management, driver tracking, and route optimisation keep deliveries fast as order volume grows. When you go from 50 deliveries a night to 150, the system scales with you. Assign drivers, track progress, and monitor delivery times from one screen.' },
  { title: 'Grow Direct Online Orders', description: 'Your branded pizza ordering website lets customers build and customise pizzas exactly how they want. With low commission compared to 35% on Just Eat, every order you move to your direct website means significantly more profit. Include flyers with deliveries to drive the shift.' },
  { title: 'Consistent Pizza Quality', description: 'The pizza builder ensures every order specifies base, sauce, toppings, and size consistently. The kitchen display shows the full specification. No ambiguous handwritten tickets, no missed toppings, no disputes. Every pizza is made to the exact specification the customer chose.' },
];

export default function PizzaDeliveryPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Pizza Delivery POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Pizza className="w-3 h-3 mr-2" />
                BUILT FOR PIZZA DELIVERY OPERATIONS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Pizza Delivery{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Pizza builder, delivery zones, driver tracking, caller ID, and online ordering — everything a pizza shop needs to take more orders and deliver them faster.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Visual pizza builder with half-and-half</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Caller ID pulls up customer details instantly</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete pizza delivery POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Pizza Delivery Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Purpose-built for pizza delivery — from the first phone call to the doorstep handover.
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
                From Independent Shops to Pizza Chains
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  An independent pizza shop needs a system that handles the <strong className="text-white">Friday night rush</strong> — phones ringing, online orders flooding in, drivers coming and going, and the kitchen at full capacity. The Posso pizza delivery POS keeps everything organised on one screen so nothing falls through the cracks.
                </p>
                <p>
                  For pizza chains with multiple locations, the <strong className="text-white">cloud dashboard</strong> provides group-level reporting while each shop operates independently. Standardise menus across locations, compare performance, and manage driver fleets from a central view.
                </p>
                <p>
                  The system integrates with <strong className="text-white">Just Eat, Uber Eats, and Deliveroo</strong> so marketplace orders arrive on the same screen as phone and website orders. One kitchen workflow regardless of where the order originated. No separate tablets cluttering the counter.
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
                  <p className="font-semibold text-white">Pizza POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Full pizza POS features</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering site</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pizza Delivery POS — Frequently Asked Questions" faqs={[
          { question: 'How does the pizza builder work?', answer: 'The visual pizza builder lets customers (online) and staff (POS) build a pizza step by step: choose size, select base type, pick sauce, add toppings. Half-and-half toppings are supported — different toppings on each half. The price updates live as options are selected. The kitchen receives the full specification on the display.' },
          { question: 'Can I manage delivery zones and fees?', answer: 'Yes. Draw delivery zones on a map and set delivery fees and minimum order values per zone. For example, free delivery within 2 miles with a £10 minimum, £2 delivery within 4 miles with a £15 minimum. Orders outside your zones are automatically declined with a message suggesting collection.' },
          { question: 'How does caller ID work for phone orders?', answer: 'When a customer calls, their phone number is matched against your database. Their name, delivery address, and previous orders appear on screen before you answer. Returning customers can reorder their last order in two taps. New callers have their details saved automatically for their next call.' },
          { question: 'Does it integrate with Just Eat and Uber Eats?', answer: 'Yes. Orders from Just Eat, Uber Eats, and Deliveroo arrive directly on your POS and kitchen display. No separate tablets, no manual re-entry. All orders — phone, website, and delivery apps — appear in one queue so the kitchen works one consistent workflow.' },
          { question: 'How does driver tracking work?', answer: 'Assign deliveries to drivers from the POS. Drivers see their delivery queue on a mobile app with the customer address, order details, and navigation. They mark each delivery as complete. You see in real time which drivers are out, which are available, and track average delivery times.' },
          { question: 'How much does the pizza delivery POS cost?', answer: 'The complete pizza delivery POS starts from £499 + VAT including touchscreen terminal, pizza builder software, and delivery management. Online ordering is included at low commission. Finance from £24.92 per week. Free setup, menu import, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
