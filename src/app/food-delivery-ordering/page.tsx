import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Truck, MapPin, Smartphone, Globe, LayoutGrid, Timer } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Delivery Ordering',
  description:
    'Food Delivery Ordering system with zone management, driver app, Just Eat/Uber Eats/Deliveroo integration, and branded online ordering. From £499 + VAT with low commission.',
  keywords: [
    'food delivery ordering',
    'food delivery ordering system',
    'food delivery software',
    'delivery ordering system',
    'restaurant delivery ordering',
    'food delivery management',
    'delivery zone management',
    'food delivery app',
    'delivery ordering uk',
    'food delivery integration',
  ],
  alternates: {
    canonical: '/food-delivery-ordering',
  },
  openGraph: {
    title: 'Food Delivery Ordering | Posso UK',
    description:
      'Food Delivery Ordering with zone management, driver app, Just Eat/Uber Eats/Deliveroo integration, and branded ordering. From £499 + VAT.',
    url: 'https://www.posso.co.uk/food-delivery-ordering',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Food Delivery Ordering',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Food delivery ordering system with delivery zone management, driver tracking app, Just Eat, Uber Eats, and Deliveroo integration, and branded online ordering at low commission.',
    url: 'https://www.posso.co.uk/food-delivery-ordering',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Delivery zone management with custom fees',
      'Driver tracking app with route navigation',
      'Just Eat, Uber Eats, Deliveroo integration',
      'Branded online ordering at low commission',
      'Order dispatch and status management',
      'Delivery time estimation and tracking',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Food Delivery Ordering', item: 'https://www.posso.co.uk/food-delivery-ordering' },
    ],
  },
];

const features = [
  { icon: MapPin, title: 'Delivery Zone Management', description: 'Define your delivery coverage on a map. Draw custom zones by radius or postcode area. Set delivery fees per zone — free within 1 mile, £2 within 3 miles, £4 within 5 miles. Set minimum order values to ensure deliveries are profitable. Reduce your delivery radius during peak hours to maintain speed. Expand during quiet periods to reach more customers.' },
  { icon: Smartphone, title: 'Driver Tracking App', description: 'Drivers use a mobile app that shows their assigned deliveries with addresses, order details, and navigation. Assign orders to drivers from the POS with one tap based on who is available. Drivers mark deliveries as complete and return to the available pool automatically. Track average delivery times and identify which drivers are most efficient.' },
  { icon: Globe, title: 'Just Eat / Uber Eats / Deliveroo Integration', description: 'Orders from all three major delivery platforms arrive directly on your POS and kitchen display. No separate tablets for each platform. No manual re-typing. The kitchen sees one unified queue: phone orders, website orders, and platform orders all in one workflow. Accept marketplace orders automatically or manually — your choice.' },
  { icon: LayoutGrid, title: 'Branded Online Ordering', description: 'Your own ordering website and app at low commission — a fraction of what delivery platforms charge. Customers browse your full menu, customise their order, choose delivery or collection, and pay online. Orders flow to the POS and kitchen instantly. Every direct order saves you 25–30% compared to a third-party platform order.' },
  { icon: Timer, title: 'Delivery Time Estimation', description: 'The system estimates delivery times based on kitchen prep time, current order volume, and driver availability. Customers see a realistic estimated delivery time at checkout — not a generic "30–45 minutes" that leads to complaints. If the kitchen is backed up, the estimate adjusts automatically. Accurate expectations lead to satisfied customers.' },
  { icon: Truck, title: 'Order Dispatch Management', description: 'See all active orders on one dispatch screen: in kitchen, ready for collection, assigned to driver, out for delivery, delivered. Assign multiple orders to one driver for efficient multi-drop routes. Know exactly where every order is at every moment. When a customer calls to ask about their delivery, you have an immediate answer.' },
];

const benefits = [
  { title: 'One System for All Delivery Channels', description: 'Phone orders, website orders, app orders, and marketplace orders all arrive in one place. The kitchen works one queue. Drivers are assigned from one dashboard. Reports cover all channels in one view. No juggling separate systems, no checking multiple tablets, no orders falling through the cracks between platforms.' },
  { title: 'Cut Delivery Platform Commission', description: 'Every order you shift from Just Eat or Uber Eats to your branded website saves 25–30% in commission. On 300 delivery orders a month at £20 average, that is £1,500–£1,800 saved per month by moving just those orders direct. Include flyers with every delivery promoting your website. The shift happens faster than you think.' },
  { title: 'Scale Delivery Operations Smoothly', description: 'Zone management, driver tracking, and dispatch tools keep delivery organised as volume grows. Going from 30 deliveries a night to 100 does not mean chaos — it means more drivers on the dispatch screen and the same systematic workflow. The system scales with you without requiring a completely different operational approach.' },
  { title: 'Keep Customers Informed Automatically', description: 'Real-time order tracking means customers know exactly where their food is. Received, preparing, ready, out for delivery — each status update happens automatically. No "where is my food?" phone calls tying up your staff. Accurate delivery time estimates set the right expectation from the start. Informed customers are patient customers.' },
];

export default function FoodDeliveryOrderingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Food Delivery Ordering' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Truck className="w-3 h-3 mr-2" />
                DELIVERY ORDERING SYSTEM
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Food Delivery{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ordering
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Zone management, driver app, Just Eat and Uber Eats integration, and your own branded ordering — a complete delivery ordering system that brings all channels together.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Just Eat, Uber Eats, and Deliveroo on one screen</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Branded ordering at low commission</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Delivery Ordering Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every tool you need to take, manage, and deliver orders efficiently — from any channel.
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
                Unify Every Delivery Channel
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A typical food delivery operation takes orders from <strong className="text-white">phone, website, app, Just Eat, Uber Eats, and Deliveroo</strong> — all simultaneously during peak service. Without a unified system, that means separate tablets, manual re-entry, and orders getting lost between platforms.
                </p>
                <p>
                  The Posso delivery ordering system brings <strong className="text-white">every channel onto one screen</strong>. The kitchen sees one order queue. Drivers are managed from one dashboard. Reports show all channels together. Whether an order arrives by phone or Uber Eats, the workflow is identical.
                </p>
                <p>
                  The strategic goal is clear: <strong className="text-white">use marketplace platforms for customer acquisition, then shift repeat orders to your branded website</strong> where commission is low. Include a flyer with every delivery. Offer loyalty rewards for direct orders. Over time, your most profitable channel becomes your biggest channel.
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
                  <p className="text-slate-400 text-sm mt-1">Branded ordering site</p>
                </Link>
                <Link href="/takeaway-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway App</p>
                  <p className="text-slate-400 text-sm mt-1">Branded mobile app</p>
                </Link>
                <Link href="/restaurant-delivery-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Delivery</p>
                  <p className="text-slate-400 text-sm mt-1">Restaurant delivery system</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Food Delivery Ordering — Frequently Asked Questions" faqs={[
          { question: 'How does delivery zone management work?', answer: 'Draw delivery zones on a map using radius circles or custom shapes. Each zone has its own delivery fee and minimum order value. For example: free delivery within 1 mile (minimum £10), £2 delivery within 3 miles (minimum £15), £4 delivery within 5 miles (minimum £20). Postcodes outside your zones are declined automatically with a collection suggestion.' },
          { question: 'Does it integrate with Just Eat, Uber Eats, and Deliveroo?', answer: 'Yes. Orders from all three platforms arrive directly on your POS and kitchen display. No separate tablets, no manual re-entry. The kitchen sees one unified queue regardless of where the order originated. You can set orders to be accepted automatically or require manual confirmation — your choice per platform.' },
          { question: 'How does the driver app work?', answer: 'Drivers download the app on their phone. When you assign a delivery from the POS, it appears on their app with the customer address, order details, and navigation. They tap to start the delivery and tap again to mark it complete. You see all driver statuses in real time: available, assigned, out for delivery. Track average delivery times per driver.' },
          { question: 'What commission do you charge on online orders?', answer: 'Posso charges low commission on orders through your branded website and app — significantly less than the 25–35% charged by Just Eat, Uber Eats, and Deliveroo. The exact rate depends on your plan. On a £20 order, the saving compared to platform commission is typically £5–7. The more orders you shift direct, the more you save.' },
          { question: 'Can customers track their delivery?', answer: 'Yes. Customers see real-time status updates: order received, being prepared, ready for dispatch, out for delivery. The estimated delivery time updates based on kitchen queue and driver progress. This transparency reduces "where is my food?" calls and sets accurate expectations. Customers receive a notification when the driver is en route.' },
          { question: 'How much does the delivery ordering system cost?', answer: 'The complete system starts from £499 + VAT including POS terminal, delivery management software, driver app, and online ordering. Delivery platform integration (Just Eat, Uber Eats, Deliveroo) included. Low commission on direct orders. Finance from £24.92 per week. Free setup, menu configuration, and training with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
