import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Zap, Monitor, ListOrdered, Timer, UtensilsCrossed, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Counter POS System',
  description:
    'Order Counter POS System for counter-service restaurants, fast food, queue management, kitchen display, and speed ordering. Built for high-volume counter service. From £499 + VAT.',
  keywords: [
    'order counter pos system',
    'counter pos system',
    'counter service pos',
    'fast food pos system',
    'quick service pos',
    'counter ordering system',
    'queue management pos',
    'kitchen display system',
    'counter service till',
    'fast food till system',
  ],
  alternates: {
    canonical: '/order-counter-pos',
  },
  openGraph: {
    title: 'Order Counter POS System | Posso UK',
    description:
      'Order Counter POS System with queue management, kitchen display, and speed ordering for counter-service restaurants.',
    url: 'https://www.posso.co.uk/order-counter-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Order Counter POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Order counter POS system for counter-service restaurants with queue management, kitchen display, speed ordering, and fast card payment processing.',
    url: 'https://www.posso.co.uk/order-counter-pos',
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
      reviewCount: '221',
      bestRating: '5',
    },
    featureList: [
      'Speed ordering with one-tap menu items',
      'Kitchen display system with order queue',
      'Queue management with order numbers',
      'Customer-facing order confirmation screen',
      'Integrated card and contactless payments',
      'Real-time order tracking and analytics',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Order Counter POS System', item: 'https://www.posso.co.uk/order-counter-pos' },
    ],
  },
];

const features = [
  { icon: Zap, title: 'Speed Ordering', description: 'Large, colour-coded buttons for your most popular items. One tap for a chicken burger, one tap for chips, one tap for a drink. Combos and meal deals are pre-configured as single buttons. A trained cashier processes an order in under 15 seconds. During the lunch rush, speed ordering is the difference between clearing the queue and losing customers.' },
  { icon: Monitor, title: 'Kitchen Display System', description: 'Orders appear on the kitchen screen the moment they are placed. Each order shows the items, modifications, and order number. The kitchen works through the queue in order, marking items as complete. No paper tickets getting lost, no shouting across the counter. The kitchen always knows what to cook next.' },
  { icon: ListOrdered, title: 'Queue Management', description: 'Every order receives a number. The customer-facing display shows which orders are being prepared and which are ready for collection. Customers watch for their number instead of crowding the counter. The result: an organised collection area, less confusion, and a professional customer experience even during peak hours.' },
  { icon: Timer, title: 'Order Timing & Alerts', description: 'The system tracks how long each order takes from placement to completion. If an order exceeds the target time — say 5 minutes for a burger — it turns red on the kitchen display. Managers see average order times and can identify bottlenecks. Consistent speed keeps customers happy and coming back.' },
  { icon: UtensilsCrossed, title: 'Combo & Meal Deal Builder', description: 'Configure meal deals, combos, and upsell prompts. When a customer orders a main, the POS suggests adding a drink and side at a discounted price. Combos are one-tap selections. Upselling is built into the flow — not an afterthought. Average order value increases because every transaction has an opportunity to add more.' },
  { icon: Users, title: 'Customer-Facing Display', description: 'A screen facing the customer shows each item as it is added, the running total, and any offers applied. The customer confirms their order before payment. Errors are caught at the counter, not in the kitchen. After payment, the screen shows the order number and estimated wait time. Transparency builds trust and reduces disputes.' },
];

const benefits = [
  { title: 'Clear Queues Faster', description: 'Speed ordering, one-tap combos, and contactless payment mean each transaction completes in seconds. A counter processing 3 to 4 orders per minute clears a lunchtime queue of 30 people in under 10 minutes. Faster service means more customers served, more revenue, and shorter wait times.' },
  { title: 'Reduce Kitchen Errors', description: 'Digital order tickets on the kitchen display eliminate misread handwriting and lost paper dockets. The kitchen sees exactly what was ordered — including modifications like "no onions" or "extra sauce." Fewer mistakes mean less food waste, fewer remakes, and happier customers.' },
  { title: 'Increase Average Order Value', description: 'Combo builders and upsell prompts encourage customers to add sides, drinks, and extras. A "Would you like to make it a meal deal?" prompt on screen converts a £5 order into an £8 order. Over hundreds of transactions per day, those incremental additions add up to significant extra revenue.' },
  { title: 'Professional Queue Experience', description: 'Order numbers, customer-facing displays, and a clear collection area replace the chaos of a crowded counter. Customers know when their food is ready without asking. Staff focus on making food instead of managing the crowd. A professional queuing system sets you apart from competitors.' },
];

export default function OrderCounterPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Order Counter POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Zap className="w-3 h-3 mr-2" />
                BUILT FOR COUNTER SERVICE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Order Counter POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Speed ordering, kitchen display, queue management, and combo builders — everything a counter-service restaurant needs to serve fast and sell more.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> One-tap speed ordering clears queues fast</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Kitchen display eliminates lost tickets</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Counter POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Counter POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Designed for the speed and accuracy that counter-service restaurants demand during peak hours.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Counter-Service Restaurants Choose Posso</h2>
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
                From Single Counters to Multi-Site Operations
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A single counter-service restaurant needs a system that <strong className="text-white">handles the lunchtime rush without slowing down</strong>. Speed ordering, kitchen display, and contactless payment keep the queue moving. Every second saved per transaction means more customers served before they give up and walk away.
                </p>
                <p>
                  For multi-site operators, the <strong className="text-white">cloud dashboard</strong> provides real-time visibility across all locations. Compare order volumes, average wait times, and revenue between sites. Standardise menus or run location-specific specials. Each counter operates independently, but data rolls up to a single management view.
                </p>
                <p>
                  Add a <strong className="text-white">self-ordering kiosk</strong> from £699 + VAT and customers place their own orders. The kiosk handles the queue while your staff focus on food preparation. Kiosk orders go straight to the kitchen display alongside counter orders — one unified workflow, two ordering channels.
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
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Card payment terminals</p>
                </Link>
                <Link href="/custom-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Custom POS</p>
                  <p className="text-slate-400 text-sm mt-1">Bespoke for your chain</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Order Counter POS — Frequently Asked Questions" faqs={[
          { question: 'How fast is the speed ordering system?', answer: 'The POS screen shows large, colour-coded buttons for your most popular items. One tap per item, one tap for combos. A trained cashier can process a complete order — items, payment, and receipt — in under 15 seconds. During peak service, this translates to 3 to 4 transactions per minute per till.' },
          { question: 'How does the kitchen display system work?', answer: 'When an order is placed at the counter or kiosk, it appears instantly on the kitchen display screen. Each order shows the items, any modifications, the order number, and a timer. The kitchen works through orders in sequence, tapping to mark items as complete. Completed orders trigger the collection display to show the order number as ready.' },
          { question: 'Can customers see their order status?', answer: 'Yes. A customer-facing display shows order numbers that are being prepared and those that are ready for collection. Customers watch for their number instead of crowding the counter. Some businesses also display estimated wait times. The system reduces counter enquiries and keeps the collection area organised.' },
          { question: 'Does it support meal deals and combos?', answer: 'Yes. Configure unlimited meal deals and combo options. When a customer orders a main item, the POS can prompt the cashier to offer a combo upgrade — for example, add a drink and side for a set price. Combos can also be configured as single buttons for the fastest possible ordering during peak times.' },
          { question: 'Can I add self-ordering kiosks?', answer: 'Yes. Self-ordering kiosks from £699 + VAT integrate directly with the same kitchen display. Kiosk orders appear alongside counter orders in the kitchen queue. This gives you two ordering channels without needing extra counter staff. Kiosks handle the queue while your team focuses on food preparation.' },
          { question: 'How much does a counter POS system cost?', answer: 'The complete order counter POS system starts from £499 + VAT including touchscreen terminal, kitchen display software, and customer-facing order screen. Self-ordering kiosks available from £699 + VAT. Finance from £24.92 per week. Free setup, menu configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
