import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, UtensilsCrossed, Users, Monitor, ShoppingBag, Globe, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pizza Restaurant Software',
  description:
    'Pizza Restaurant Software for dine-in, delivery, self-service kiosks, and online ordering. Manage your entire pizza restaurant from one platform. From £499 + VAT.',
  keywords: [
    'pizza restaurant software',
    'pizza restaurant management software',
    'pizza restaurant pos',
    'pizza restaurant system',
    'pizza shop management software',
    'pizzeria management software',
    'pizza restaurant ordering system',
    'pizza restaurant kiosk',
    'pizza restaurant software uk',
    'best pizza restaurant software',
  ],
  alternates: {
    canonical: '/pizza-restaurant-software',
  },
  openGraph: {
    title: 'Pizza Restaurant Software | Posso UK',
    description:
      'Pizza Restaurant Software for dine-in, delivery, kiosks, and online ordering. Complete pizza restaurant management.',
    url: 'https://www.posso.co.uk/pizza-restaurant-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Pizza Restaurant Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Complete pizza restaurant software covering dine-in table management, delivery operations, self-service kiosks, and branded online ordering — all from a single platform.',
    url: 'https://www.posso.co.uk/pizza-restaurant-software',
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
      reviewCount: '186',
      bestRating: '5',
    },
    featureList: [
      'Dine-in table management with pizza builder',
      'Delivery zone and driver management',
      'Self-service ordering kiosks',
      'Branded online ordering portal',
      'Kitchen display with order prioritisation',
      'Staff scheduling and labour reporting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Restaurant Software', item: 'https://www.posso.co.uk/restaurant-epos' },
      { '@type': 'ListItem', position: 3, name: 'Pizza Restaurant Software', item: 'https://www.posso.co.uk/pizza-restaurant-software' },
    ],
  },
];

const features = [
  { icon: UtensilsCrossed, title: 'Dine-In Table Management', description: 'Assign orders to tables, split bills between diners, and track table status from a visual floor plan. Servers use the pizza builder on handheld tablets to take orders tableside. Orders fire to the kitchen instantly — no walking back to a terminal. Table turn times are tracked automatically for capacity planning.' },
  { icon: ShoppingBag, title: 'Delivery Operations Centre', description: 'Manage delivery zones, fees, drivers, and live order tracking from one dispatch screen. See every active order — in prep, ready, dispatched, delivered. Assign drivers based on zone and workload. Drivers update status from their phones. Minimum order values and delivery fees adjust by zone and time of day.' },
  { icon: Monitor, title: 'Self-Service Kiosks', description: 'Freestanding kiosks let customers build their own pizzas without queuing. The visual pizza builder walks them through size, crust, sauce, and toppings with images and prices. Kiosks from £699 + VAT. They upsell automatically — suggesting larger sizes, extra toppings, and meal deals. Average order values typically increase 15-25%.' },
  { icon: Globe, title: 'Online Ordering Portal', description: 'Your branded website with the full pizza builder for collection and delivery orders. Customers create accounts, save favourites, and reorder in two taps. Orders flow directly to your POS and kitchen. Low commission versus 35% on aggregator apps. You own the customer data and relationship.' },
  { icon: ClipboardList, title: 'Kitchen Display System', description: 'All orders from every channel — dine-in, counter, kiosk, website, delivery apps — appear on one kitchen display. Orders are colour-coded by type and prioritised by promised time. Each pizza shows its full specification. Prep timers track every order. The kitchen works a single, unified queue.' },
  { icon: Users, title: 'Staff & Labour Management', description: 'Clock in/out, rota scheduling, and labour cost reporting built into the software. See labour cost as a percentage of revenue in real time. Set staffing targets by day and hour. The system alerts you when labour costs exceed your threshold. Schedule shifts and notify staff by SMS directly from the platform.' },
];

const benefits = [
  { title: 'Unify Every Ordering Channel', description: 'Dine-in, counter, kiosk, website, Just Eat, Uber Eats, Deliveroo — every order enters the same system and the same kitchen queue. No juggling separate tablets. No manually re-keying phone orders. One inventory, one kitchen workflow, one set of reports. The complexity of multi-channel disappears.' },
  { title: 'Reduce Staffing Pressure', description: 'Self-service kiosks handle counter orders without staff. Online ordering eliminates phone order taking. Tableside tablets let one server cover more tables. The software automates the repetitive tasks so your team focuses on making great pizza and delivering great service — not data entry.' },
  { title: 'Grow Revenue Per Customer', description: 'Kiosks and online ordering consistently produce higher average order values than counter service. Automated upsells, meal deal suggestions, and size upgrade prompts work on every single order without relying on staff to remember. The data shows which promotions actually drive revenue.' },
  { title: 'Control Costs With Real Data', description: 'Food cost reports show actual versus theoretical usage. Labour reports track cost by hour. Delivery reports show cost per order by zone. Waste tracking highlights problems before they become expensive. You manage by numbers instead of guesswork — and the numbers update in real time.' },
];

export default function PizzaRestaurantSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Restaurant Software', href: '/restaurant-epos' },
          { label: 'Pizza Restaurant Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <UtensilsCrossed className="w-3 h-3 mr-2" />
                COMPLETE PIZZA RESTAURANT MANAGEMENT
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Pizza Restaurant{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                One platform to manage dine-in tables, delivery operations, self-service kiosks, and online ordering — everything a pizza restaurant needs under one roof.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Dine-in, delivery, kiosk, and online in one system</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Self-service kiosks from £699 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS terminals from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Pizza Restaurant Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Manage every aspect of your pizza restaurant — from the dining room floor to the delivery route.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Pizza Restaurants Choose Posso</h2>
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
                One Platform for the Entire Pizza Restaurant
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Running a pizza restaurant means managing <strong className="text-white">dine-in service, takeaway counter orders, phone orders, online orders, and delivery</strong> simultaneously. Most software handles one or two of these well and bolts on the rest as afterthoughts. Posso pizza restaurant software was designed from the ground up to handle all five natively.
                </p>
                <p>
                  The kitchen receives a <strong className="text-white">single, unified order queue</strong> regardless of channel. A dine-in table order, a kiosk order, and a website delivery order all appear in the same format with the same pizza specification detail. The kitchen never needs to switch between systems or interpret different ticket formats.
                </p>
                <p>
                  As your restaurant grows, the software scales with you. Add <strong className="text-white">kiosks, additional terminals, online ordering, or delivery zones</strong> without replacing anything. The same platform that runs a single-location pizzeria can manage a multi-site pizza restaurant group with centralised menu control, consolidated reporting, and cross-location analytics.
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
                <Link href="/pizza-pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Pizza-specific POS</p>
                </Link>
                <Link href="/pizza-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Electronic POS for pizza</p>
                </Link>
                <Link href="/restaurant-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Till System</p>
                  <p className="text-slate-400 text-sm mt-1">General restaurant till</p>
                </Link>
                <Link href="/self-service-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosk ordering</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pizza Restaurant Software — Frequently Asked Questions" faqs={[
          { question: 'Can it handle both dine-in and delivery?', answer: 'Yes. The software manages dine-in table service with visual floor plans and bill splitting alongside full delivery operations with zone management, driver tracking, and dispatch. Both channels feed into the same kitchen display. You run one system, not two separate platforms stitched together.' },
          { question: 'How do self-service kiosks work for pizza?', answer: 'Customers use the visual pizza builder on a freestanding touchscreen to select size, crust, sauce, and toppings — including half-and-half. The kiosk shows images and prices at each step, suggests upsells, and takes card payment. Orders fire directly to the kitchen. Kiosks from £699 + VAT with pizza builder software included.' },
          { question: 'Does it include online ordering?', answer: 'Yes. Your branded ordering website features the full pizza builder with collection and delivery options. Customers create accounts, save favourites, and reorder quickly. Orders sync directly to your POS and kitchen display. Low commission compared to 35% on third-party delivery platforms. You keep the customer data.' },
          { question: 'Can I manage multiple pizza restaurant locations?', answer: 'Yes. Centralised menu management pushes updates to all locations simultaneously. Consolidated reporting shows performance across sites. Each location can have location-specific pricing, delivery zones, and staffing. Head office sees the full picture while each site operates independently day-to-day.' },
          { question: 'Does it track food and labour costs?', answer: 'Yes. Ingredient-level stock tracking shows actual versus theoretical food costs. Labour reports track staff hours and cost as a percentage of revenue. Waste logging highlights problem areas. Daily reports combine food cost, labour cost, and revenue so you see true profitability — not just sales.' },
          { question: 'How much does pizza restaurant software cost?', answer: 'POS terminals start from £499 + VAT. Self-service kiosks from £699 + VAT. Online ordering included at low commission. The full package with POS, kitchen display, kiosk, and online ordering is available on finance from £29.95 per week. Free setup, menu import, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
