import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, UtensilsCrossed, Leaf, Clock, ShoppingBag, Settings, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cafe Online Ordering System',
  description:
    'Cafe Online Ordering System with breakfast and lunch menus, dietary filters, allergen labelling, click-and-collect, and kitchen display integration. From £499 + VAT.',
  keywords: [
    'cafe online ordering system',
    'cafe ordering system',
    'online ordering for cafes',
    'cafe click and collect',
    'cafe order online',
    'cafe epos ordering',
    'online cafe menu ordering',
    'cafe takeaway ordering system',
    'cafe ordering platform uk',
    'cafe digital ordering',
  ],
  alternates: {
    canonical: '/cafe-online-ordering-system',
  },
  openGraph: {
    title: 'Cafe Online Ordering System',
    description:
      'Cafe Online Ordering System with breakfast/lunch menus, dietary filters, allergen labelling, click-and-collect, and kitchen display integration.',
    url: 'https://www.posso.co.uk/cafe-online-ordering-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Cafe Online Ordering System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Cafe online ordering system with timed breakfast and lunch menus, dietary and allergen filters, click-and-collect scheduling, kitchen display integration, and order analytics.',
    url: 'https://www.posso.co.uk/cafe-online-ordering-system',
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
      reviewCount: '163',
      bestRating: '5',
    },
    featureList: [
      'Timed breakfast and lunch menu switching',
      'Dietary and allergen filters',
      'Click-and-collect with time slot scheduling',
      'Kitchen display integration',
      'Order analytics and reporting',
      'Customer accounts with order history',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Cafe Online Ordering System', item: 'https://www.posso.co.uk/cafe-online-ordering-system' },
    ],
  },
];

const features = [
  { icon: Clock, title: 'Timed Menu Switching', description: 'Your breakfast menu shows until 11:30am, then automatically switches to lunch. Customers ordering online only see what is currently available. No more phone calls asking if you still serve eggs benedict at 2pm. The schedule is fully configurable — set different switchover times for weekdays and weekends.' },
  { icon: Leaf, title: 'Dietary & Allergen Filters', description: 'Customers filter the menu by dietary requirement: vegan, vegetarian, gluten-free, dairy-free, nut-free. Each item displays its allergen information clearly. A customer with coeliac disease sees only safe options with one tap. This builds trust, reduces risk, and saves your staff from answering the same questions repeatedly.' },
  { icon: ShoppingBag, title: 'Click-and-Collect Scheduling', description: 'Customers choose a collection time when ordering. The system shows available slots based on your kitchen capacity — if you can handle 10 orders per 15-minute window, slot 11 is pushed to the next window. Customers arrive when their food is ready, not before. No crowding at the counter during the lunch rush.' },
  { icon: UtensilsCrossed, title: 'Kitchen Display Integration', description: 'Online orders appear on your kitchen display screen alongside walk-in and table orders. Each order shows the items, modifiers, dietary notes, and collection time. The kitchen works through a unified queue. When the order is ready, the customer receives a notification automatically.' },
  { icon: Settings, title: 'Menu Management Dashboard', description: 'Update prices, add seasonal specials, mark items as sold out, and adjust portion sizes from one screen. Changes go live on the online menu instantly. Running a soup of the day? Add it in the morning and remove it when it sells out. No developer needed, no waiting for updates.' },
  { icon: BarChart3, title: 'Order Analytics', description: 'See which items sell best online, what time slots are most popular, and how your average basket value compares to in-store. Track repeat customer rates and identify which promotions drive orders. Weekly summaries arrive in your inbox so you spot trends without logging into a dashboard.' },
];

const benefits = [
  { title: 'Fill the Quiet Periods', description: 'Online ordering captures pre-orders for lunch from nearby offices. By 10am you know how many chicken wraps and halloumi salads to prep. The kitchen works more efficiently, food waste drops, and you fill revenue gaps between the morning coffee rush and the lunchtime walk-in trade.' },
  { title: 'Serve Dietary Needs Confidently', description: 'Allergen filters on the online menu mean customers with dietary requirements order with confidence. They see exactly what they can eat, with allergen information displayed before they add to basket. Fewer substitutions, fewer complaints, and a reputation as a cafe that takes dietary needs seriously.' },
  { title: 'Reduce Counter Congestion', description: 'Click-and-collect customers order and pay before they arrive. They collect from a designated point without joining the counter queue. During a busy lunch service, this takes pressure off your front-of-house team and shortens wait times for everyone.' },
  { title: 'Grow Revenue Without Extra Seats', description: 'Your cafe has a fixed number of covers. Online ordering adds a takeaway revenue stream that does not require additional seating. A 40-seat cafe generating 30 online orders per day effectively adds 30 covers worth of revenue without any physical expansion.' },
];

export default function CafeOnlineOrderingSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Cafe Online Ordering System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <UtensilsCrossed className="w-3 h-3 mr-2" />
                ONLINE ORDERING FOR CAFES
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Cafe Online{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ordering System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Breakfast menus that switch to lunch automatically. Dietary filters that build customer trust. Click-and-collect that fills your kitchen without crowding your counter.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Timed breakfast-to-lunch menu switching</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Dietary and allergen filters on every item</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Cafe POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Cafe Ordering System Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Purpose-built for cafes serving breakfast, brunch, and lunch with complex dietary requirements.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Cafes Choose Posso Online Ordering</h2>
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
                Built for Breakfast, Brunch, and Lunch Cafes
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A cafe menu is different from a restaurant or coffee shop. You serve <strong className="text-white">eggs benedict at 9am and a chicken caesar wrap at 1pm</strong> — and your online menu needs to reflect that. Timed menu switching ensures customers always see what is currently available, with no manual intervention.
                </p>
                <p>
                  Dietary requirements matter more in cafes than almost any other hospitality setting. Your customers include <strong className="text-white">vegans, coeliacs, and parents ordering for children with allergies</strong>. Allergen filters on the online menu let them browse safely and order confidently. This is not just a nice feature — it reduces your liability and builds a loyal customer base.
                </p>
                <p>
                  Click-and-collect with <strong className="text-white">time slot scheduling</strong> means your kitchen receives orders in manageable batches. You know at 10am how many lunch orders to prep. The kitchen runs smoother, food is fresher at collection, and customers are not waiting around.
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
                <Link href="/cafe-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cafe POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full cafe till system</p>
                </Link>
                <Link href="/online-ordering-platform-coffee-shops" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee Shop Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Platform for coffee shops</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Cafe Online Ordering System — FAQ" faqs={[
          { question: 'How does the timed menu work?', answer: 'You set the times for each menu period — for example, breakfast from 7am to 11:30am and lunch from 11:30am to 4pm. The online ordering system automatically shows the correct menu for the current time. Weekend brunch can have its own schedule. Changes take effect immediately with no manual switching required.' },
          { question: 'Can customers filter by dietary requirement?', answer: 'Yes. Every menu item is tagged with allergen and dietary information. Customers filter by vegan, vegetarian, gluten-free, dairy-free, or nut-free. The filtered menu shows only items that meet their requirements, with full allergen details visible before they add to basket.' },
          { question: 'How does click-and-collect scheduling work?', answer: 'Customers select a collection time when placing their order. Available slots are calculated based on your kitchen capacity — you set how many orders each 15-minute window can handle. When a slot is full, it becomes unavailable. This prevents the kitchen from being overwhelmed and ensures food is ready on time.' },
          { question: 'Does it integrate with our kitchen display?', answer: 'Yes. Online orders appear on the kitchen display alongside dine-in and counter orders. Each order shows items, modifiers, dietary notes, and the scheduled collection time. The kitchen works through a single unified queue. When the order is marked as ready, the customer receives a notification.' },
          { question: 'Can we mark items as sold out during the day?', answer: 'Yes. Tap an item in the menu management dashboard to mark it as sold out. It disappears from the online menu immediately. When you restock or prepare a new batch, mark it as available again. This prevents customers ordering items you cannot fulfil.' },
          { question: 'What does the cafe online ordering system cost?', answer: 'The complete cafe POS system with online ordering starts from £499 + VAT. Online orders carry low commission — far less than third-party delivery platforms. Setup includes menu configuration, allergen tagging, kitchen display connection, and staff training. Finance options available.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
