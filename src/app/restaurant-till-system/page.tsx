import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Receipt, DollarSign, Clock, Users, Printer } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Till System',
  description:
    'Restaurant Till System with touchscreen terminal, cash drawer, receipt printing, shift reports, and staff PIN login. Complete restaurant till from £499 + VAT.',
  keywords: [
    'restaurant till system',
    'restaurant till',
    'restaurant till system uk',
    'touchscreen till restaurant',
    'restaurant cash register',
    'restaurant epos till',
    'till system for restaurant',
    'restaurant till software',
    'electronic till restaurant',
    'restaurant point of sale till',
  ],
  alternates: {
    canonical: '/restaurant-till-system',
  },
  openGraph: {
    title: 'Restaurant Till System | Posso UK',
    description:
      'Restaurant Till System with touchscreen terminal, cash drawer, receipt printing, shift reports, and staff login. From £499 + VAT.',
    url: 'https://posso.co.uk/restaurant-till-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant Till System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Restaurant till system with touchscreen terminal, integrated cash drawer, receipt printing, end-of-shift reports, staff PIN login, and table management for restaurants.',
    url: 'https://posso.co.uk/restaurant-till-system',
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
      reviewCount: '274',
      bestRating: '5',
    },
    featureList: [
      'Touchscreen terminal with intuitive layout',
      'Integrated cash drawer with auto-open',
      'Receipt printing with customisable templates',
      'End-of-shift and daily cash-up reports',
      'Staff PIN login with permission levels',
      'Table management and bill splitting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant Till System', item: 'https://posso.co.uk/restaurant-till-system' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Touchscreen Terminal', description: 'A fast, responsive touchscreen designed for restaurant service. Menu items are grouped by category — starters, mains, desserts, drinks — with large buttons that staff can tap accurately during a busy service. Customise the layout to match your menu structure. Add colours and images to make products instantly recognisable.' },
  { icon: DollarSign, title: 'Integrated Cash Drawer', description: 'The cash drawer opens automatically when a cash payment is processed. At the end of the shift, the till report shows expected cash based on transactions. Compare against the actual count for a quick, accurate cash-up. The drawer locks between transactions and requires staff login to open manually — reducing cash handling errors.' },
  { icon: Printer, title: 'Receipt Printing', description: 'Print customer receipts with your restaurant name, address, VAT number, and itemised order details. Customise the receipt layout with your logo and promotional messages. Kitchen receipts print separately to the kitchen printer with table number, items, and special instructions. Bill receipts for table service include the full breakdown.' },
  { icon: Receipt, title: 'Shift Reports & Cash-Up', description: 'End-of-shift reports show total sales, payment method breakdown (cash, card, contactless), voids, discounts, and tips. The cash-up report compares expected cash to actual cash counted. Daily summaries give you the full picture: covers served, average spend, busiest hours, and best-selling items. Export to CSV for your accountant.' },
  { icon: Users, title: 'Staff PIN Login', description: 'Each staff member has a unique PIN or swipe card. The till tracks who processed each transaction, applied each discount, and performed each void. Set permission levels: waitstaff can take orders and process payments, supervisors can apply discounts, and managers can access reports and perform voids. Full accountability on every action.' },
  { icon: Clock, title: 'Table Management', description: 'See all your tables on a visual floor plan. Tap a table to open it, add orders, and track how long each table has been seated. Split bills by item, by cover, or evenly. Transfer items between tables when customers move. The floor plan shows which tables are free, occupied, and waiting for the bill — giving you a live view of the restaurant.' },
];

const benefits = [
  { title: 'Faster End-of-Day Cash-Up', description: 'The shift report calculates expected cash automatically based on every transaction. No more counting backwards through paper receipts. Compare the report to your cash drawer count and you are done in minutes. Discrepancies are flagged immediately so you can investigate while the shift is still fresh in memory.' },
  { title: 'Complete Staff Accountability', description: 'Every transaction, void, discount, and till opening is logged against the staff member who performed it. If a void was processed without a good reason, you know who did it. If a discount was applied incorrectly, you can trace it. PIN login creates accountability without micromanagement — staff know every action is recorded.' },
  { title: 'Professional Customer Receipts', description: 'Branded, itemised receipts make your restaurant look professional. VAT breakdowns are calculated automatically. Promotional messages at the bottom of the receipt encourage return visits. For table service, the bill receipt shows the full order with subtotals, service charge (if applicable), and payment options.' },
  { title: 'Efficient Table Service', description: 'The visual floor plan and table management tools mean waitstaff know exactly which tables are occupied, which are waiting for food, and which are ready for the bill. Bill splitting — by item, per person, or evenly — takes seconds instead of the mental gymnastics that slow down end-of-meal service.' },
];

export default function RestaurantTillSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Restaurant Till System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                TOUCHSCREEN RESTAURANT TILL
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Restaurant Till{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Touchscreen till with cash drawer, receipt printing, shift reports, staff login, and table management — everything a restaurant needs at the point of sale.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Touchscreen terminal with intuitive layout</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> End-of-shift cash-up in minutes</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Restaurant till system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Restaurant Till Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Reliable, fast, and easy to use — the essentials every restaurant till needs to get right.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Posso</h2>
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
                A Till System That Runs Your Restaurant Smoothly
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A restaurant till is the <strong className="text-white">central hub of your operation</strong>. Every order passes through it, every payment is processed on it, and every report comes from it. The Posso restaurant till system is designed to be fast, reliable, and straightforward — because the last thing you need during a Saturday night service is technology getting in the way.
                </p>
                <p>
                  The touchscreen layout is <strong className="text-white">customised to your menu</strong>. Starters, mains, sides, desserts, and drinks are grouped logically with colours and images. Staff learn the system in under an hour. During service, the most common actions — open table, add items, take payment — are all within two taps.
                </p>
                <p>
                  At the end of the night, the <strong className="text-white">shift report</strong> gives you everything: total sales, payment breakdown, covers, average spend, voids, discounts, and expected cash. Cash-up takes minutes instead of the hour it used to take with a traditional till. The data is also available on your phone via the cloud dashboard.
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
                <Link href="/restaurant-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant ePOS</p>
                </Link>
                <Link href="/restaurant-order-at-table-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Order at Table</p>
                  <p className="text-slate-400 text-sm mt-1">QR table ordering</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Payment terminals</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant Till System — Frequently Asked Questions" faqs={[
          { question: 'What is included in the restaurant till system?', answer: 'The complete system includes a touchscreen terminal, cash drawer, receipt printer, and till software from £499 + VAT. The software includes menu management, table layout, staff login, reporting, and payment processing. A kitchen printer can be added for sending orders directly to the kitchen. Free setup, menu configuration, and staff training included.' },
          { question: 'How does the cash-up report work?', answer: 'At the end of a shift, the report shows total sales broken down by payment method: cash, card, contactless. The expected cash figure is calculated from all cash transactions, less any float change. Count your drawer, enter the actual total, and the report shows any variance. The process takes minutes and is accurate to the penny.' },
          { question: 'Can each staff member have their own login?', answer: 'Yes. Every staff member gets a unique PIN or swipe card. The system logs who processed each order, payment, void, and discount. Permission levels control what each role can do: waitstaff take orders, supervisors apply discounts, managers access reports and perform voids. All activity is fully auditable.' },
          { question: 'Does it support bill splitting?', answer: 'Yes. Split a bill by item (each person pays for what they ordered), by number of covers (divide evenly), or by custom amounts. Mixed payments are supported — one person pays by card, another by cash, a third by contactless. The system handles all combinations quickly during the bill-paying process.' },
          { question: 'Can I see reports remotely?', answer: 'Yes. All till data syncs to a cloud dashboard accessible from any device with a browser. Check today\'s sales from your phone, compare this week to last week from your laptop at home, and monitor live service data from anywhere. You do not need to be in the restaurant to see how the business is performing.' },
          { question: 'How much does the restaurant till system cost?', answer: 'The complete restaurant till system starts from £499 + VAT including touchscreen terminal, cash drawer, receipt printer, and software. Kitchen printer and additional terminals available as add-ons. Finance from £24.92 per week. Free setup, menu configuration, and staff training with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
