import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Tablet, ClipboardList, Utensils, Timer, Split, Wifi } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tablet Food Ordering System',
  description:
    'Tablet Food Ordering System for restaurants with waiter pad ordering, customer table tablets, kitchen integration, and real-time menu sync. Runs on iPad and Android. From £499 + VAT.',
  keywords: [
    'tablet food ordering system',
    'tablet ordering system restaurant',
    'tablet ordering for restaurants',
    'restaurant tablet ordering',
    'waiter tablet ordering',
    'tablet pos food ordering',
    'ipad food ordering system',
    'tablet menu ordering system',
    'tablet ordering system uk',
    'restaurant table tablet ordering',
  ],
  alternates: {
    canonical: '/tablet-food-ordering-system',
  },
  openGraph: {
    title: 'Tablet Food Ordering System | Posso UK',
    description:
      'Tablet Food Ordering System for restaurants — waiter pads, customer tablets, kitchen integration, and real-time menu sync.',
    url: 'https://www.posso.co.uk/tablet-food-ordering-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Tablet Food Ordering System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Tablet-based food ordering system for restaurants featuring waiter pad ordering, customer table tablets, direct kitchen integration, and real-time menu synchronisation across all devices.',
    url: 'https://www.posso.co.uk/tablet-food-ordering-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Waiter pad tablet ordering',
      'Customer-facing table tablets',
      'Direct kitchen display integration',
      'Real-time menu and price sync',
      'Bill splitting on tablet',
      'Works on iPad and Android tablets',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Restaurant Systems', item: 'https://www.posso.co.uk/restaurant-epos' },
      { '@type': 'ListItem', position: 3, name: 'Tablet Food Ordering System', item: 'https://www.posso.co.uk/tablet-food-ordering-system' },
    ],
  },
];

const features = [
  { icon: Tablet, title: 'Waiter Pad Ordering', description: 'Servers carry lightweight tablets to take orders tableside. Tap the table number, browse the menu, select items with modifiers, and fire to the kitchen — all without walking back to a fixed terminal. Orders arrive in the kitchen within 2 seconds of submission. Servers cover more tables with less walking.' },
  { icon: Utensils, title: 'Customer Table Tablets', description: 'Place tablets on tables for customers to browse the menu, view food photography, read descriptions, and place orders themselves. Customers order at their own pace without waiting for a server. Additional orders (another round of drinks, dessert) are one tap away. The server is notified of each new order.' },
  { icon: ClipboardList, title: 'Kitchen Display Integration', description: 'Every tablet order — whether from a waiter pad or customer table tablet — fires directly to the kitchen display. Items are grouped by course (starters, mains, desserts) and colour-coded by table. The kitchen works through orders systematically without handwritten tickets or verbal communication.' },
  { icon: Wifi, title: 'Real-Time Menu Sync', description: 'Change a price, add a dish, or mark an item as sold out on the main POS — every tablet in the restaurant updates within seconds. No need to visit each device individually. Daily specials appear on all tablets simultaneously. Sold-out items grey out in real time so customers and servers never order unavailable dishes.' },
  { icon: Split, title: 'Tableside Bill Splitting', description: 'Split the bill by item, by seat, or by equal shares directly on the tablet at the table. Customers see exactly what they owe. Payment can be taken tableside with a portable card reader. No more queueing at the counter to pay. The entire dining experience — from ordering to payment — happens at the table.' },
  { icon: Timer, title: 'Course Timing Control', description: 'Servers control when each course fires to the kitchen from their tablet. Take starters and mains together but hold mains until the table is ready. One tap fires the next course. The kitchen receives a clear "fire" signal rather than guessing when to start preparing. Course pacing improves without verbal coordination.' },
];

const benefits = [
  { title: 'Serve More Tables Per Server', description: 'Without walking back and forth to a terminal, servers save 30-40% of their time per table. That translates directly into covering more tables per shift. A server handling 6 tables with a fixed terminal can handle 8-10 with a tablet. During busy service, this means serving more covers without hiring more staff.' },
  { title: 'Reduce Order Errors to Near Zero', description: 'Handwritten orders get misread. Verbal orders get misheard. Tablet orders are explicit — item names, modifiers, special requests, and allergen notes are captured in text and sent directly to the kitchen. No interpretation. No illegible handwriting. The kitchen makes exactly what was ordered.' },
  { title: 'Speed Up Table Turns', description: 'Orders reach the kitchen faster (no walking to a terminal). Customers at table tablets can order additional items without flagging a server. Bill splitting and payment happen at the table. Every step of the dining experience is faster, which means more covers per service and higher revenue per seat.' },
  { title: 'Boost Revenue With Customer Tablets', description: 'When customers browse a visual menu on a tablet, they discover dishes they would not have noticed on a paper menu. Food photography drives impulse orders. Dessert and drinks suggestions appear at the right moment. Data shows customer-placed orders from tablets average 12-18% higher than server-taken orders.' },
];

export default function TabletFoodOrderingSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Restaurant Systems', href: '/restaurant-epos' },
          { label: 'Tablet Food Ordering System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Tablet className="w-3 h-3 mr-2" />
                TABLET-BASED RESTAURANT ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Tablet Food Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Equip servers with waiter pad tablets and tables with customer ordering tablets — orders fire directly to the kitchen, bills split at the table, and every dish is served faster.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Waiter pad and customer table tablets</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Direct kitchen display integration</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Tablet ordering system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Tablet Ordering System Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Ordering, kitchen communication, and payment — all happening on tablets throughout your restaurant.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Tablet Ordering</h2>
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
                Tablets That Transform Restaurant Service
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The traditional restaurant workflow — take order on paper, walk to terminal, enter order, walk back — wastes time on every single table. Tablet ordering eliminates those wasted steps. <strong className="text-white">Orders go from table to kitchen in 2 seconds</strong> instead of 2 minutes. Across a full service with 30 tables, that time adds up dramatically.
                </p>
                <p>
                  Customer-facing table tablets go further. Diners <strong className="text-white">browse the full menu with photographs, place additional orders without waiting for a server</strong>, and pay their split bill at the table. The server is freed to focus on hospitality — greeting, recommending, checking quality — instead of being a data-entry relay between table and terminal.
                </p>
                <p>
                  The system runs on <strong className="text-white">standard iPads or Android tablets</strong> — no proprietary hardware required. Pair with a protective case and table stand for customer tablets, or a light case with hand strap for waiter pads. All tablets connect to your existing Wi-Fi and sync with your POS and kitchen display in real time.
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
                <Link href="/food-ordering-machine" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Ordering Machine</p>
                  <p className="text-slate-400 text-sm mt-1">Self-service kiosks</p>
                </Link>
                <Link href="/restaurant-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Till System</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant POS</p>
                </Link>
                <Link href="/online-food-ordering-portal" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering Portal</p>
                  <p className="text-slate-400 text-sm mt-1">Web ordering</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Portable POS</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Tablet Food Ordering System — Frequently Asked Questions" faqs={[
          { question: 'What tablets does the system work on?', answer: 'The system runs on iPads (iPad 7th generation and newer) and Android tablets (Android 10 and above). Most restaurants use iPads for reliability and consistency. The app is available from the App Store and Google Play. No proprietary hardware is required — use tablets you already own or purchase through us.' },
          { question: 'Can customers order from the table tablet themselves?', answer: 'Yes. Table tablets display your full menu with images, descriptions, allergen information, and prices. Customers browse, select items, add modifiers, and submit orders to the kitchen. A server is notified of each new order. Customers can add to their order throughout the meal without flagging a server.' },
          { question: 'Does it integrate with the kitchen display?', answer: 'Yes. Every order from a waiter pad or customer table tablet fires directly to the kitchen display. Items are grouped by course and colour-coded by table number. The kitchen display is identical to what they see from counter orders — one unified queue regardless of how the order was placed.' },
          { question: 'Can servers control course timing?', answer: 'Yes. Servers can hold courses on their tablet and fire them to the kitchen when the table is ready. Take all courses at once but hold mains until starters are cleared. One tap sends the "fire" signal. The kitchen sees exactly when to start preparing each course — no shouting across the pass.' },
          { question: 'How does bill splitting work on tablets?', answer: 'Split by item (each person pays for what they ordered), by seat (assigned at order time), or by equal shares. The server or customer selects the split method on the tablet, and payment is taken tableside with a portable card reader. Tips can be added on screen before payment.' },
          { question: 'How much does the tablet ordering system cost?', answer: 'The tablet ordering system starts from £499 + VAT including the POS software, waiter pad app licences, and kitchen display. Tablets are available from £349 each or use your own. Customer table tablets include protective cases and stands. Finance from £24.92 per week. Free setup and staff training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
