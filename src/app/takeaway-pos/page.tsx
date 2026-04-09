import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, UtensilsCrossed, PhoneCall, Truck, Printer, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Takeaway POS',
  description:
    'Takeaway POS system with caller ID, fast ordering, delivery management, kitchen printing, online ordering integration, and driver tracking. Built for takeaways. From £499 + VAT.',
  keywords: [
    'takeaway pos',
    'takeaway pos system',
    'takeaway epos',
    'takeaway till system',
    'pos for takeaway',
    'takeaway ordering system',
    'takeaway pos uk',
    'chinese takeaway pos',
    'indian takeaway pos',
    'fish and chip pos',
  ],
  alternates: {
    canonical: '/takeaway-pos',
  },
  openGraph: {
    title: 'Takeaway POS | Posso UK',
    description:
      'Takeaway POS with caller ID, delivery management, kitchen printing, and online ordering integration. Built for takeaways.',
    url: 'https://posso.co.uk/takeaway-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Takeaway POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Takeaway POS system with caller ID customer recognition, fast repeat ordering, delivery zone management, kitchen printer routing, online ordering integration, and driver dispatch tracking.',
    url: 'https://posso.co.uk/takeaway-pos',
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
      reviewCount: '267',
      bestRating: '5',
    },
    featureList: [
      'Caller ID with customer history and address',
      'One-tap repeat ordering for regular customers',
      'Delivery zone management with minimum order values',
      'Kitchen printer routing by station',
      'Online ordering integration at low commission',
      'Driver dispatch and delivery tracking',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Takeaway POS', item: 'https://posso.co.uk/takeaway-pos' },
    ],
  },
];

const features = [
  { icon: PhoneCall, title: 'Caller ID Recognition', description: 'When a customer phones in, their number is matched instantly. Name, address, order history, and delivery notes appear on screen before you even say hello. A regular customer rings, you see their last three orders, and one tap repeats the usual. Call handling drops from 90 seconds to 20 seconds per order.' },
  { icon: Clock, title: 'Fast Repeat Ordering', description: 'Regular customers order the same meal every Friday. Caller ID pulls up their history. One tap re-orders their usual — chicken tikka masala, pilau rice, garlic naan, two poppadoms. No re-entering each item. No spelling mistakes. The order hits the kitchen printer in seconds. Faster ordering means more orders per hour during peak.' },
  { icon: Truck, title: 'Delivery Management', description: 'Define delivery zones on a map with minimum order values and delivery charges for each zone. Assign orders to drivers and track estimated delivery times. The system calculates optimal dispatch times so food arrives hot. Drivers see their queue on a mobile screen. Customers can track their order if you enable the branded tracking page.' },
  { icon: Printer, title: 'Kitchen Printer Routing', description: 'Orders route automatically to the correct kitchen station. Starters to the starter printer, mains to the main printer, drinks to the bar. Each printer shows only the items for that station. During a busy Friday night with 40 orders in the queue, every station works independently without confusion. Split printing eliminates bottlenecks.' },
  { icon: MapPin, title: 'Online Ordering Integration', description: 'Accept orders from your own branded website and app at low commission — no 30% fees to third-party platforms. Online orders arrive on the POS automatically alongside phone orders. One screen, one kitchen workflow, one set of reports. Customers order and pay online, reducing phone call volume and freeing staff for food preparation.' },
  { icon: UtensilsCrossed, title: 'Collection Time Management', description: 'Set estimated preparation times by order size. A small collection order quotes 15 minutes. A large delivery order quotes 40 minutes. The POS displays countdown timers for every active order. Staff see at a glance which orders are on time and which are running late. Customers receive accurate time estimates that build trust and reduce chase calls.' },
];

const benefits = [
  { title: 'Handle More Orders Per Hour', description: 'Caller ID, repeat ordering, and kitchen printer routing remove bottlenecks from the ordering process. A phone order that took 90 seconds now takes 20. During a Friday peak of 3 hours, that efficiency gain means 30-40 additional orders processed. At an average order value of £25, that is up to £1,000 extra revenue per night.' },
  { title: 'Cut Delivery Platform Commissions', description: 'Third-party platforms charge 25-35% commission on every order. Your own branded online ordering through the Posso takeaway POS charges low commission. On 100 online orders per week at £25 average, switching from a 30% platform to low commission saves over £500 per week. The POS pays for itself in the first month.' },
  { title: 'Reduce Order Errors', description: 'Phone orders are entered on screen with modifiers and notes — no handwriting to misread. Kitchen printers show exact specifications for each item. Online orders bypass manual entry entirely. The result is fewer wrong meals, fewer refunds, fewer wasted ingredients, and fewer unhappy customers calling to complain.' },
  { title: 'Build a Customer Database', description: 'Every phone call and online order builds your customer database automatically. Names, addresses, phone numbers, order history, and preferences are stored and searchable. After six months, you know who your top 100 customers are, what they order, and how often. That data powers loyalty offers that bring them back more often.' },
];

export default function TakeawayPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Takeaway POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <UtensilsCrossed className="w-3 h-3 mr-2" />
                BUILT FOR TAKEAWAYS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Takeaway{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Caller ID, fast repeat ordering, delivery management, kitchen printer routing, and online ordering — a complete POS system built for the pace of a busy takeaway.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Caller ID pulls up customer history instantly</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Online ordering at low commission</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Takeaway POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Takeaway POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every tool a takeaway needs to take orders faster, deliver on time, and grow revenue.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Takeaways Choose Posso</h2>
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
                From Phone Orders to Online Empire
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A busy takeaway handles <strong className="text-white">100+ orders on a Friday night</strong>. The Posso takeaway POS is built for that pace. Caller ID identifies customers before they speak. Repeat ordering fills the basket in one tap. Kitchen printers route items to the right station automatically. Every second saved adds up.
                </p>
                <p>
                  Add <strong className="text-white">your own branded online ordering</strong> and you capture the customers who prefer to order on their phone. Orders arrive on the same POS screen alongside phone orders — one workflow, one kitchen. Low commission means you keep more of every order compared to third-party delivery platforms.
                </p>
                <p>
                  The <strong className="text-white">delivery management system</strong> tracks every order from kitchen to doorstep. Assign drivers, estimate delivery times, and give customers a tracking page. Drivers see their queue on mobile. You see which deliveries are on time and which are late. Better delivery operations mean better reviews and more repeat customers.
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
                <Link href="/takeaway-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway App</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering app</p>
                </Link>
                <Link href="/food-delivery-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Delivery Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery order management</p>
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

        <FAQSection title="Takeaway POS — Frequently Asked Questions" faqs={[
          { question: 'How does caller ID work with the POS?', answer: 'When a customer calls your takeaway, their phone number is matched against your customer database instantly. Their name, delivery address, order history, and any notes appear on screen before you answer. For a regular customer, you can re-order their last meal in a single tap. New callers are added to the database after their first order with address and preferences saved for next time.' },
          { question: 'Can I set up delivery zones and charges?', answer: 'Yes. Define delivery zones on a map and set minimum order values and delivery charges for each zone. A 1-mile radius might have free delivery on orders over £15. A 3-mile radius might charge £2.50 with a £20 minimum. The POS enforces the rules automatically — no manual checking of postcodes during a busy service.' },
          { question: 'How does online ordering integrate?', answer: 'Online orders from your branded website or app arrive on the POS automatically. They appear alongside phone orders on the same screen. The kitchen prints them through the same printers. There is one workflow for all order sources. Low commission on online orders means you keep significantly more than you would with third-party delivery platforms.' },
          { question: 'Does it work for Chinese, Indian, and fish and chip takeaways?', answer: 'Yes. The menu system is fully customisable for any cuisine. Chinese takeaways use set meal builders with dish selections. Indian takeaways use spice level modifiers and meal deals. Fish and chip shops use portion sizes and extras. The interface adapts to your menu structure, not the other way around.' },
          { question: 'Can I track my delivery drivers?', answer: 'Yes. Assign orders to drivers from the dispatch screen. Each driver sees their delivery queue on a mobile device with addresses and estimated times. The system calculates optimal dispatch timing so food arrives hot. You see which deliveries are in progress, completed, or running late. Customers can receive a tracking link if you enable the feature.' },
          { question: 'How much does a takeaway POS cost?', answer: 'The complete takeaway POS starts from £499 + VAT including touchscreen terminal, caller ID integration, kitchen printers, and delivery management software. Online ordering is available at low commission. Finance from £24.92 per week. Free setup, menu configuration, and staff training are included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
