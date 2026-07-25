import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, CreditCard, Phone, ArrowRight, Truck, MapPin, Timer, Route, Package, Navigation } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS Software for Takeaway Delivery | Driver App & Zone Management',
  description:
    'Posso ePOS software for takeaway delivery. Delivery zone management, Shipday driver app, Just Eat/Uber Eats/Deliveroo integration, order tracking, estimated delivery times, and delivery fee management. From £499 + VAT.',
  keywords: [
    'epos software for takeaway delivery',
    'takeaway delivery software',
    'delivery management pos',
    'takeaway delivery system',
    'delivery zone management',
    'driver management software',
    'delivery epos',
    'takeaway delivery pos',
    'delivery order tracking',
    'delivery epos software uk',
  ],
  alternates: {
    canonical: '/epos-software-for-takeaway-delivery',
  },
  openGraph: {
    title: 'ePOS Software for Takeaway Delivery | Posso UK',
    description:
      'Delivery-focused takeaway ePOS with zone management, driver app, aggregator integration, and real-time order tracking.',
    url: 'https://www.posso.co.uk/epos-software-for-takeaway-delivery',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS Software for Takeaway Delivery',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Delivery-focused ePOS software for takeaways with delivery zone management, Shipday driver app integration, Just Eat/Uber Eats/Deliveroo integration, estimated delivery times, and delivery fee management.',
    url: 'https://www.posso.co.uk/epos-software-for-takeaway-delivery',
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
      'Delivery zone management by postcode',
      'Shipday driver app integration',
      'Just Eat, Uber Eats, Deliveroo integration',
      'Estimated delivery time calculation',
      'Real-time order tracking',
      'Delivery fee management per zone',
      'Driver dispatch and assignment',
      'Minimum order values per zone',
      'Customer delivery address database',
      'Delivery performance analytics',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Takeaway Delivery Software', item: 'https://www.posso.co.uk/epos-software-for-takeaway-delivery' },
    ],
  },
];

const deliveryFeatures = [
  { icon: MapPin, title: 'Delivery Zone Management', description: 'Define delivery zones by UK postcode prefix. Set custom delivery charges, minimum order values, and estimated delivery times per zone. Orders outside your area are automatically blocked.' },
  { icon: Navigation, title: 'Shipday Driver App', description: 'Your drivers use the Shipday app on their phone. They see assigned orders, delivery addresses, and optimised routes. You see driver locations in real time on a live map.' },
  { icon: Package, title: 'Just Eat, Uber Eats & Deliveroo', description: 'Delivery orders from all three aggregators flow into your POS automatically. No separate tablets cluttering the counter. One screen for every delivery channel.' },
  { icon: Timer, title: 'Estimated Delivery Times', description: 'The system calculates estimated delivery times based on the delivery zone, current order volume, and kitchen prep time. Customers see realistic ETAs, not guesswork.' },
  { icon: Route, title: 'Order Tracking', description: 'Track every delivery order from kitchen to doorstep. See order status: preparing, ready for dispatch, out for delivery, delivered. Customers can track their order too.' },
  { icon: CreditCard, title: 'Delivery Fee Management', description: 'Set delivery fees per zone — £0 for nearby postcodes, £2.50 for further zones. Offer free delivery over a minimum spend. The POS applies fees automatically at checkout.' },
];

const deliveryWorkflow = [
  { step: '1', title: 'Order Placed', desc: 'Online, phone, or aggregator — delivery address is validated against your zones' },
  { step: '2', title: 'Kitchen Prepares', desc: 'Order fires to KDS with delivery address, estimated time, and special notes' },
  { step: '3', title: 'Driver Assigned', desc: 'Assign to your own driver via Shipday or let aggregator handle delivery' },
  { step: '4', title: 'Delivered & Tracked', desc: 'Driver GPS tracked. Customer notified. Order marked as complete on the POS' },
];

export default function TakeawayDeliverySoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Takeaway Delivery Software' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                  <Truck className="w-3 h-3 mr-2" />
                  DELIVERY ePOS SOFTWARE
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    ePOS Software for{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Takeaway Delivery
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Manage every delivery from one screen. Define your delivery zones by postcode, dispatch drivers with the Shipday app, pull in Just Eat and Uber Eats orders automatically, and give customers real delivery times — not hopeful guesses.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Postcode-based delivery zones</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Shipday driver app with GPS tracking</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full POS from £499 + VAT</li>
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
              <div className="relative">
                <img
                  src="/images/posso_epos_integration.png"
                  alt="Posso ePOS delivery software showing delivery zone map, driver tracking, and order management for takeaways"
                  width={1200}
                  height={630}
                  loading="eager"
                  className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Complete Delivery Management Built Into Your ePOS
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Most takeaway POS systems bolt delivery on as an afterthought. With Posso, delivery zone management, driver dispatch, and aggregator integration are core features — not paid add-ons.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {deliveryFeatures.map((f) => (
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

        {/* Delivery Workflow */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How Delivery Orders Flow Through Posso</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {deliveryWorkflow.map((s) => (
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

        {/* Why Choose for Delivery */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Stop Juggling Tablets for Every Delivery App
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    If you are running a busy takeaway with your own delivery drivers plus Just Eat, Uber Eats, and Deliveroo, you know the chaos: four tablets on the counter, orders being missed, and your kitchen printing from three different systems.
                  </p>
                  <p>
                    <strong className="text-white">Posso brings every delivery channel into one screen.</strong> Aggregator orders flow in automatically. Your own online orders come through the same system. Phone orders are entered on the same POS. The kitchen sees one queue, not four.
                  </p>
                  <p>
                    Your drivers use the Shipday app to receive orders, navigate to addresses, and confirm delivery. You see everything on a live map. No phone calls to check where a driver is.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Delivery channels unified', value: 'All on one screen' },
                  { label: 'Driver tracking', value: 'Real-time GPS via Shipday' },
                  { label: 'Zone configuration', value: 'By UK postcode prefix' },
                  { label: 'Aggregator integration', value: 'Just Eat, Uber Eats, Deliveroo' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-5 border border-slate-700/50">
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Delivery & Takeaway Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Aggregator setup guide</p>
                </Link>
                <Link href="/epos-software-for-takeaway" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway Software</p>
                  <p className="text-slate-400 text-sm mt-1">Cloud-based ePOS platform</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own ordering website</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Takeaway Delivery Software — Frequently Asked Questions" faqs={[
          { question: 'How does delivery zone management work in the ePOS?', answer: 'You define zones by UK postcode prefix (e.g. LS1, LS2, LS3 for Leeds city centre). Each zone has its own delivery charge, minimum order value, and estimated delivery time. When a customer enters their postcode, the system validates it against your zones and applies the correct fee automatically.' },
          { question: 'What driver app does Posso use for delivery tracking?', answer: 'Posso integrates with Shipday. Your drivers download the Shipday app on their phone and receive delivery orders with the customer address and optimised route. You see all active drivers on a live GPS map from your POS.' },
          { question: 'Can I use my own drivers and delivery apps at the same time?', answer: 'Yes. Posso handles your own driver fleet through Shipday alongside Just Eat, Uber Eats, and Deliveroo orders. For aggregator orders, the aggregator handles delivery. For your own website orders, you dispatch your own drivers through Shipday.' },
          { question: 'How are estimated delivery times calculated?', answer: 'The system factors in the delivery zone distance, current kitchen order volume, and average prep time for the items ordered. This gives customers a realistic delivery estimate rather than a fixed "30-45 minutes" guess.' },
          { question: 'Can customers track their delivery order?', answer: 'Yes. When you dispatch a driver through Shipday, customers receive a tracking link where they can see the driver\'s real-time location and estimated arrival time.' },
          { question: 'How much does the delivery ePOS software cost?', answer: 'The complete POS system with delivery management starts from £499 + VAT. This includes zone management, driver dispatch, aggregator integration, and all delivery features. The Shipday driver app is included. Finance options are available.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
