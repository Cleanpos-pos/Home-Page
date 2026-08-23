import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Truck, MapPin, Clock, Globe, BarChart3, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Delivery System',
  description:
    'Restaurant Delivery System with delivery zones, driver app, Just Eat, Uber Eats and Deliveroo integration, order tracking, and route management. POS from £499 + VAT.',
  keywords: [
    'restaurant delivery system',
    'restaurant delivery software',
    'delivery management system',
    'restaurant delivery pos',
    'food delivery system',
    'delivery zone management',
    'driver tracking system',
    'restaurant delivery integration',
    'delivery order management',
    'delivery system uk',
  ],
  alternates: {
    canonical: '/restaurant-delivery-system',
  },
  openGraph: {
    title: 'Restaurant Delivery System | Posso UK',
    description:
      'Restaurant Delivery System with delivery zones, driver app, Just Eat/Uber Eats/Deliveroo integration, and order tracking.',
    url: 'https://www.posso.co.uk/restaurant-delivery-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant Delivery System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Restaurant delivery system with configurable delivery zones, driver tracking app, Just Eat/Uber Eats/Deliveroo integration, real-time order tracking, and delivery performance analytics.',
    url: 'https://www.posso.co.uk/restaurant-delivery-system',
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
      reviewCount: '162',
      bestRating: '5',
    },
    featureList: [
      'Configurable delivery zones with distance-based pricing',
      'Driver tracking app with delivery queue and navigation',
      'Just Eat, Uber Eats, and Deliveroo integration',
      'Real-time order status tracking',
      'Delivery performance analytics',
      'Branded online ordering with delivery options',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant Delivery System', item: 'https://www.posso.co.uk/restaurant-delivery-system' },
    ],
  },
];

const features = [
  { icon: MapPin, title: 'Delivery Zone Management', description: 'Draw zones on a map and configure delivery fees, minimum order values, and estimated delivery times per zone. Tight control over your delivery radius means you only accept orders you can fulfil within your promised timeframe. Expand or contract zones based on driver availability.' },
  { icon: Truck, title: 'Driver App & Tracking', description: 'Drivers see their delivery queue on a mobile app with customer address, order details, and one-tap navigation. Mark deliveries as collected and delivered. Managers see which drivers are out, which are available, and average delivery times — all in real time.' },
  { icon: Globe, title: 'Delivery Platform Integration', description: 'Just Eat, Uber Eats, and Deliveroo orders arrive directly on your POS and kitchen display. No separate tablets on the counter. Accept orders automatically or manually. The kitchen sees all delivery orders in one queue regardless of which platform they came from.' },
  { icon: Clock, title: 'Order Status Tracking', description: 'Track every order through its lifecycle: received, preparing, ready for collection, out for delivery, delivered. Customers can check their order status online. Staff see a real-time dashboard showing all active orders by status — nothing gets forgotten.' },
  { icon: Users, title: 'Driver Management', description: 'Assign drivers to shifts, track deliveries per driver, and monitor performance. See which drivers are fastest, which have the most successful deliveries, and who is available for the next dispatch. Manage your own drivers or use third-party delivery services.' },
  { icon: BarChart3, title: 'Delivery Analytics', description: 'Track delivery performance: average delivery time, orders per hour, revenue by zone, driver efficiency, and late delivery rate. Identify peak delivery times to staff accordingly. Compare delivery revenue against dine-in and collection to optimise your channel mix.' },
];

const benefits = [
  { title: 'All Delivery Orders in One Place', description: 'Phone orders, website orders, Just Eat, Uber Eats, Deliveroo — every delivery order appears on the same screen. The kitchen works one queue. Drivers see one dispatch list. Managers monitor one dashboard. No more switching between five tablets to see what needs to go out.' },
  { title: 'Faster Average Delivery Times', description: 'Driver tracking and zone management reduce average delivery times. Drivers see their next delivery before finishing the current one. Zone-based dispatch means drivers are assigned to nearby deliveries first. Customers get hotter food and you get better reviews.' },
  { title: 'Reduce Delivery Platform Costs', description: 'Every order you shift from Just Eat (15-35% commission) to your branded website (low commission) saves you money. The Posso restaurant delivery system gives you the same delivery management tools for direct orders as for platform orders — so the customer experience is identical.' },
  { title: 'Scale Your Delivery Operation', description: 'Start with 20 deliveries a night and the system handles it. Grow to 200 and it still works — zone management, driver tracking, and kitchen display all scale with volume. Add drivers as needed. Expand delivery zones when ready. The system grows with your business.' },
];

export default function RestaurantDeliverySystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Restaurant Delivery System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Truck className="w-3 h-3 mr-2" />
                DELIVERY OPERATIONS MADE SIMPLE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Restaurant Delivery{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Delivery zones, driver tracking, Just Eat and Uber Eats integration, and real-time order tracking — manage your entire delivery operation from one platform.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Just Eat, Uber Eats & Deliveroo in one queue</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Driver tracking app with navigation</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete delivery POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Delivery Management Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From order receipt to doorstep delivery — every step managed in one system.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Choose Posso for Delivery</h2>
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
                Delivery for Every Restaurant Type
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Takeaways and fast food</strong> doing 100+ deliveries a night need a system that keeps pace. Zone management, automated dispatch, and driver tracking ensure every order goes out fast. Integration with delivery platforms means no re-keying orders from separate tablets.
                </p>
                <p>
                  <strong className="text-white">Full-service restaurants</strong> adding delivery as a revenue stream need delivery management that does not disrupt dine-in service. The Posso system keeps delivery orders separate on the kitchen display while sharing the same menu and stock levels.
                </p>
                <p>
                  <strong className="text-white">Dark kitchens and delivery-only brands</strong> rely entirely on delivery efficiency. Multiple brand menus on one system, delivery platform integration, and detailed analytics help you optimise every aspect of the operation from prep time to delivery time.
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
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Direct ordering website</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
                <Link href="/pizza-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza POS</p>
                  <p className="text-slate-400 text-sm mt-1">Pizza delivery features</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant Delivery System — Frequently Asked Questions" faqs={[
          { question: 'Does it integrate with Just Eat, Uber Eats, and Deliveroo?', answer: 'Yes. Orders from all three platforms arrive directly on your POS and kitchen display without separate tablets. You can accept orders automatically or manually. The kitchen sees all delivery orders in one queue alongside phone and website orders.' },
          { question: 'How does driver tracking work?', answer: 'Drivers use a mobile app showing their delivery queue with customer addresses, order details, and one-tap navigation. They mark orders as collected and delivered. Managers see a real-time dashboard showing which drivers are out, available, and their average delivery times.' },
          { question: 'Can I set different delivery fees by distance?', answer: 'Yes. Draw delivery zones on a map and set fees per zone — for example, free within 1 mile, £2 within 3 miles, £4 within 5 miles. You can also set minimum order values per zone. Customers see their delivery fee before they start ordering.' },
          { question: 'Does the system handle both delivery and collection orders?', answer: 'Yes. Customers choose delivery or collection when ordering. Collection orders show a pickup time. Delivery orders show the estimated delivery time based on the zone. The kitchen display distinguishes between delivery and collection orders so staff prepare accordingly.' },
          { question: 'Can I use my own drivers and delivery platforms together?', answer: 'Yes. For direct orders through your website and phone, use your own drivers with the Posso driver app. For marketplace orders, the platform handles delivery. Both types appear on the same kitchen display. You choose the best delivery method per channel.' },
          { question: 'How much does the restaurant delivery system cost?', answer: 'The delivery system is included with the Posso POS from £499 + VAT. Delivery zone management, driver tracking, and platform integration are all part of the standard system. Online ordering is included at low commission. Free setup and training with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
