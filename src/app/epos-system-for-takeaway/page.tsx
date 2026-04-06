import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, Truck, CreditCard, BarChart3, Phone, ArrowRight, Printer, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS System for Takeaway | Fast Order Entry & Delivery Management',
  description:
    'Posso ePOS system for takeaways. Fast order entry, collection and delivery workflow, online ordering, kitchen display, receipt printing, and driver management. From £499 + VAT.',
  keywords: [
    'epos system for takeaway',
    'takeaway epos system',
    'takeaway pos system',
    'epos for takeaway',
    'takeaway till system',
    'takeaway point of sale',
    'best epos system for takeaway',
    'epos system for takeaway uk',
    'takeaway ordering system',
    'takeaway epos uk',
  ],
  alternates: {
    canonical: '/epos-system-for-takeaway',
  },
  openGraph: {
    title: 'ePOS System for Takeaway | Posso UK',
    description:
      'Complete takeaway ePOS with fast order entry, collection/delivery workflow, kitchen display, and driver management.',
    url: 'https://posso.co.uk/epos-system-for-takeaway',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS System for Takeaway',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Complete ePOS system for takeaway businesses with fast order entry, collection and delivery management, online ordering, kitchen display, and driver tracking.',
    url: 'https://posso.co.uk/epos-system-for-takeaway',
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
      'Fast order entry with category shortcuts',
      'Collection and delivery workflow',
      'Online ordering website',
      'Kitchen display system',
      'Thermal receipt printing',
      'Driver management and dispatch',
      'Caller ID for phone orders',
      'Delivery aggregator integration',
      'Cash and card payment processing',
      'Works offline',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Takeaway ePOS', item: 'https://posso.co.uk/epos-system-for-takeaway' },
    ],
  },
];

const coreFeatures = [
  { icon: Zap, title: 'Fast Order Entry', description: 'Category shortcuts and favourites mean your staff enter orders in under 15 seconds. Built for the pace of a busy takeaway counter.' },
  { icon: ShoppingBag, title: 'Collection & Delivery Workflow', description: 'Separate queues for collection and delivery orders. Estimated ready times, order status tracking, and automatic customer notifications.' },
  { icon: Smartphone, title: 'Online Ordering Website', description: 'Your own branded ordering website with low commission. Customers order collection or delivery directly — no 30% aggregator fees.' },
  { icon: Monitor, title: 'Kitchen Display System', description: 'Orders appear on screen in the kitchen the moment they are placed. Colour-coded by channel — walk-in, phone, online, or aggregator.' },
  { icon: Printer, title: 'Thermal Receipt Printing', description: 'Fast thermal printing for customer receipts, kitchen tickets, and delivery address labels. Dual printer support for separate kitchen stations.' },
  { icon: Truck, title: 'Driver Management', description: 'Assign orders to drivers, track dispatch status, and manage delivery zones. Integrates with Shipday for real-time driver GPS tracking.' },
];

const workflowSteps = [
  { step: '1', title: 'Order Comes In', desc: 'Phone, walk-in, online, or aggregator — all orders land on one screen' },
  { step: '2', title: 'Kitchen Receives', desc: 'Kitchen display shows the order with prep time and special instructions' },
  { step: '3', title: 'Food Is Prepared', desc: 'Kitchen marks items as ready. Collection orders trigger a notification' },
  { step: '4', title: 'Collected or Delivered', desc: 'Driver dispatched or customer collects. Order marked complete' },
];

export default function TakeawayEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Takeaway ePOS' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                  <Zap className="w-3 h-3 mr-2" />
                  TAKEAWAY ePOS SYSTEM
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    ePOS System for{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Takeaway
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  One system to handle every takeaway order — phone, walk-in, online, and delivery apps. Fast order entry, kitchen display, driver dispatch, and integrated payments all in one place.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Orders entered in under 15 seconds</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Collection & delivery workflow built in</li>
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
                  alt="Posso ePOS system for takeaway showing order management, kitchen display, and delivery workflow"
                  width={1200}
                  height={630}
                  loading="eager"
                  className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Everything a Takeaway Needs in One System
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                No patchwork of separate apps. Posso gives you order entry, kitchen management, delivery dispatch, and payments from a single touchscreen.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {coreFeatures.map((f) => (
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

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How a Takeaway Order Flows Through Posso</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From order placement to collection or delivery — every step is tracked and visible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {workflowSteps.map((s) => (
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

        {/* Why Choose */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Takeaways Choose Posso Over Other ePOS Systems
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Generic POS systems are built for sit-down restaurants. They have table plans and waiter management but no delivery zones, no driver dispatch, and no way to handle 50 phone orders an hour.
                  </p>
                  <p>
                    <strong className="text-white">Posso is built for takeaways from the ground up.</strong> The order entry screen is optimised for speed. Collection and delivery have separate workflows. And your online ordering website is included — with low commission instead of the 30%+ that aggregators charge.
                  </p>
                  <p>
                    We handle setup, menu import, and staff training. Most takeaways go live within 24 hours.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Average order entry time', value: 'Under 15 seconds' },
                  { label: 'Online ordering commission', value: 'Low commission' },
                  { label: 'Setup time', value: 'Live in 24 hours' },
                  { label: 'Offline capability', value: 'Full offline mode' },
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Takeaway Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/epos-system-for-indian-takeaway" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Indian Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Caller ID & multi-language</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own ordering website</p>
                </Link>
                <Link href="/kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Takeaway ePOS — Frequently Asked Questions" faqs={[
          { question: 'What is the best ePOS system for a takeaway?', answer: 'The best takeaway ePOS handles phone orders, walk-ins, online orders, and delivery app orders from one screen. Posso does all of this with fast order entry, kitchen display, driver management, and integrated payments — starting from £499 + VAT.' },
          { question: 'Can I manage both collection and delivery orders?', answer: 'Yes. Posso has separate workflows for collection and delivery. Collection orders show estimated ready times. Delivery orders include address details, delivery zones, fees, and driver assignment.' },
          { question: 'Does the takeaway ePOS include online ordering?', answer: 'Yes. You get your own branded online ordering website where customers can place collection or delivery orders. Orders go straight to your POS and kitchen display. Commission is low compared to the 30%+ charged by Just Eat and Uber Eats.' },
          { question: 'How fast can I enter orders on the POS?', answer: 'The Posso order entry screen uses category shortcuts, favourites, and quick-add buttons. Most staff enter a standard takeaway order in under 15 seconds after a short training session.' },
          { question: 'Does it work with delivery apps like Just Eat and Uber Eats?', answer: 'Yes. Posso integrates with Just Eat, Uber Eats, and Deliveroo. Orders from all platforms appear on your POS and kitchen display automatically — no separate tablets needed.' },
          { question: 'How quickly can I set up a takeaway ePOS system?', answer: 'Most takeaways go live within 24 hours. We handle hardware setup, menu import, payment terminal configuration, and staff training. You can start taking orders the same day.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
