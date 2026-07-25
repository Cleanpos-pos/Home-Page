import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Truck, MapPin, Clock, Plug, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delivery POS Software',
  description:
    'Delivery POS Software with delivery zone management, driver tracking, estimated delivery times, and aggregator integration. Built for delivery businesses. POS from £499 + VAT.',
  keywords: [
    'delivery pos software',
    'delivery pos system',
    'delivery management pos',
    'pos for delivery',
    'delivery tracking pos',
    'driver management pos',
    'delivery zone pos',
    'delivery pos uk',
    'food delivery pos',
    'takeaway delivery software',
  ],
  alternates: {
    canonical: '/delivery-pos-software',
  },
  openGraph: {
    title: 'Delivery POS Software | Posso UK',
    description:
      'Delivery POS Software with zones, driver tracking, estimated times, and aggregator integration. Built for delivery businesses.',
    url: 'https://www.posso.co.uk/delivery-pos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Delivery POS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Delivery-focused POS software with delivery zone configuration, driver assignment and tracking, estimated delivery times, and integration with third-party delivery aggregators.',
    url: 'https://www.posso.co.uk/delivery-pos-software',
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
      reviewCount: '221',
      bestRating: '5',
    },
    featureList: [
      'Delivery zone configuration by postcode',
      'Driver assignment and live tracking',
      'Estimated delivery time calculation',
      'Aggregator integration (Deliveroo, Uber Eats, Just Eat)',
      'Delivery charge and minimum order management',
      'Driver performance and delivery analytics',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Delivery POS Software', item: 'https://www.posso.co.uk/delivery-pos-software' },
    ],
  },
];

const features = [
  { icon: MapPin, title: 'Delivery Zone Management', description: 'Define delivery zones by postcode, radius, or custom polygon on a map. Each zone has its own delivery charge, minimum order value, and estimated delivery time. A 1-mile zone might be free delivery with no minimum, while a 5-mile zone charges £3.50 with a £15 minimum. Zones are managed from the dashboard and update in real time.' },
  { icon: Users, title: 'Driver Assignment & Tracking', description: 'Assign drivers to orders manually or let the system auto-assign based on availability and location. Each driver has a profile showing active deliveries, completed drops, and average delivery time. Track driver status: available, en route, delivering, returning. Know exactly where every order is at every moment.' },
  { icon: Clock, title: 'Estimated Delivery Times', description: 'The system calculates estimated delivery times based on zone distance, current kitchen preparation time, and driver availability. Customers see a realistic estimate at checkout — not an optimistic guess. If the kitchen is running behind, the estimate adjusts automatically. Accurate times mean fewer complaints and better reviews.' },
  { icon: Plug, title: 'Aggregator Integration', description: 'Orders from Deliveroo, Uber Eats, Just Eat, and other aggregators arrive directly on your POS. No separate tablets, no manual re-entry, no missed orders. Each aggregator order is labelled with its source and follows the same kitchen workflow as direct orders. Manage all delivery channels from one screen.' },
  { icon: Truck, title: 'Delivery Charge Automation', description: 'Delivery charges apply automatically based on the customer address and your zone configuration. Offer free delivery above a threshold — £25 spend gets free delivery, for example. Run delivery promotions: free delivery on Tuesdays, 50% off delivery for first-time customers. All configured in the dashboard, all applied automatically at checkout.' },
  { icon: BarChart3, title: 'Delivery Analytics Dashboard', description: 'Track every delivery metric: average delivery time by zone, driver performance, orders per hour, failed deliveries, and customer ratings. Identify which zones are profitable and which cost more to serve than they earn. See which drivers are fastest and most reliable. Make data-driven decisions about your delivery operation.' },
];

const benefits = [
  { title: 'Deliver Faster Than Competitors', description: 'Accurate zone-based timing, auto-driver assignment, and kitchen-to-door tracking mean your deliveries are consistently fast. When a customer compares a 25-minute estimate from you versus a 45-minute estimate from a competitor, they choose you. Speed wins in the delivery business — and the data helps you keep getting faster.' },
  { title: 'Consolidate All Delivery Channels', description: 'Deliveroo, Uber Eats, Just Eat, your website, and phone orders all appear on one POS. The kitchen works from one queue. Drivers are assigned from one pool. Reports show all channels in one view. No more juggling four tablets, missing orders, or manually re-entering aggregator orders into your till.' },
  { title: 'Control Delivery Costs', description: 'Zone-based delivery charges ensure you are not losing money on distant deliveries. Set minimum order values per zone to make every delivery profitable. Track delivery cost per order and adjust your zones and charges based on real data. The analytics dashboard shows exactly where your delivery margins are healthy and where they need attention.' },
  { title: 'Keep Drivers Accountable', description: 'Every delivery is tracked from assignment to completion. You see which drivers are fast, which are reliable, and which consistently take longer than expected. Driver performance reports help you reward your best drivers and address issues before they affect customer satisfaction. The data removes guesswork from driver management.' },
];

export default function DeliveryPosSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Delivery POS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Truck className="w-3 h-3 mr-2" />
                DELIVERY-FOCUSED POS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Delivery POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                POS software built for delivery operations — zones, driver tracking, estimated times, and aggregator integration. Manage every delivery from one screen.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Delivery zones with automated charging</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Deliveroo, Uber Eats, Just Eat integration</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Delivery POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Delivery POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every tool you need to run a delivery operation — from zone management to driver analytics.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Delivery Businesses Choose Posso</h2>
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
                Built for the Delivery-First Business
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A delivery business lives and dies by <strong className="text-white">speed, accuracy, and cost control</strong>. The Posso delivery POS is built around these three pillars. Zone management controls your costs. Driver tracking controls your speed. Kitchen integration controls your accuracy.
                </p>
                <p>
                  For businesses using <strong className="text-white">third-party aggregators</strong>, the POS consolidates Deliveroo, Uber Eats, Just Eat, and direct orders into one queue. Your kitchen sees one screen. Your drivers work from one pool. No more juggling tablets and missing orders during the Friday night rush.
                </p>
                <p>
                  The <strong className="text-white">analytics dashboard</strong> shows you which zones are profitable, which drivers are fastest, and which times of day generate the most delivery revenue. Use the data to optimise your zones, schedule your drivers, and grow your delivery business with confidence.
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
                <Link href="/food-delivery-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Delivery Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery platform</p>
                </Link>
                <Link href="/takeaway-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway App</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering app</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Delivery POS Software — Frequently Asked Questions" faqs={[
          { question: 'How do delivery zones work?', answer: 'You define zones by postcode prefix, radius from your location, or custom map boundaries. Each zone has its own delivery charge, minimum order value, and estimated delivery time. When a customer enters their address, the system identifies the zone and applies the correct charge automatically. Addresses outside all zones are offered collection instead.' },
          { question: 'Does it integrate with Deliveroo, Uber Eats, and Just Eat?', answer: 'Yes. Orders from all major aggregators arrive directly on your POS and kitchen display. No separate tablets, no manual re-entry. Each order is labelled with its source so you know where it came from. You manage all channels from one screen and one reporting dashboard.' },
          { question: 'How does driver tracking work?', answer: 'Drivers are assigned to orders from the POS. Each driver has a status: available, en route, delivering, or returning. You see all active deliveries on a dashboard with estimated times. Driver performance is tracked over time — average delivery time, deliveries per shift, and on-time percentage.' },
          { question: 'Can I set different delivery charges per zone?', answer: 'Yes. Each zone has its own delivery charge and minimum order value. You can also set free delivery thresholds — for example, free delivery on orders over £25. Promotional delivery offers like free delivery Tuesdays are configured in the dashboard and apply automatically during the set period.' },
          { question: 'How are estimated delivery times calculated?', answer: 'The system considers three factors: kitchen preparation time based on current order volume, travel time based on the delivery zone, and driver availability. If the kitchen is busy, the estimate extends. If all drivers are out, the estimate reflects the wait time. Customers see a realistic time, not an optimistic promise.' },
          { question: 'How much does delivery POS software cost?', answer: 'The delivery POS starts from £499 + VAT including touchscreen terminal, delivery management software, and aggregator integration. Online orders processed at low commission. Free setup, zone configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
