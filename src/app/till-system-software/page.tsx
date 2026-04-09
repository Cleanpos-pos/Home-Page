import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Cloud, BarChart3, Coins, Users, Fingerprint } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Till System Software',
  description:
    'Till System Software with cloud-based management, touchscreen interface, real-time reporting, cash management, and staff login. Modern till software for UK businesses. From £499 + VAT.',
  keywords: [
    'till system software',
    'till software',
    'cloud till system',
    'touchscreen till software',
    'modern till system',
    'till system uk',
    'electronic till software',
    'shop till software',
    'till system for business',
    'pos till software',
  ],
  alternates: {
    canonical: '/till-system-software',
  },
  openGraph: {
    title: 'Till System Software | Posso UK',
    description:
      'Till System Software with cloud management, touchscreen interface, real-time reporting, and cash management. Modern till software for UK businesses.',
    url: 'https://posso.co.uk/till-system-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Till System Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Modern till system software with cloud-based management, touchscreen interface, real-time sales reporting, cash management, and secure staff login for UK retail and hospitality businesses.',
    url: 'https://posso.co.uk/till-system-software',
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
      reviewCount: '312',
      bestRating: '5',
    },
    featureList: [
      'Cloud-based till management dashboard',
      'Touchscreen optimised interface',
      'Real-time sales and tax reporting',
      'Cash drawer management and reconciliation',
      'Staff login with role-based permissions',
      'Multi-site till synchronisation',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Till System Software', item: 'https://posso.co.uk/till-system-software' },
    ],
  },
];

const features = [
  { icon: Cloud, title: 'Cloud-Based Management', description: 'Access your till data from anywhere with a cloud dashboard. Sales figures, stock levels, and staff performance update in real time across every device. Whether you are at home, on the train, or in a second location, you see live data without needing to be on site. No local server required — everything syncs automatically.' },
  { icon: Monitor, title: 'Touchscreen Interface', description: 'The till interface is designed for speed on touchscreens. Large product buttons, swipe navigation, and colour-coded categories mean staff find items in one or two taps. New employees learn the system in under 15 minutes. The layout adapts to your screen size — works on 10-inch tablets up to 21-inch countertop displays.' },
  { icon: BarChart3, title: 'Real-Time Reporting', description: 'Every transaction generates live data. See hourly sales, best-selling products, average transaction value, and VAT summaries as they happen. End-of-day reports generate automatically at close. Weekly and monthly comparisons help you spot trends, plan promotions, and identify slow-moving stock before it becomes a problem.' },
  { icon: Coins, title: 'Cash Management', description: 'Open and close cash drawers with full accountability. Staff declare their float at the start of a shift and cash up at the end. The system calculates expected cash based on transactions and flags discrepancies. Every drawer open is logged with a timestamp and staff ID. No more guessing where the shortage came from.' },
  { icon: Users, title: 'Staff Login & Permissions', description: 'Each team member logs in with their own PIN or swipe card. Permissions control who can process refunds, apply discounts, open the cash drawer, or access reports. Managers see a full audit trail of every action. During busy shifts, staff switch between the till in seconds without logging each other out.' },
  { icon: Fingerprint, title: 'Multi-Site Synchronisation', description: 'Run multiple tills across multiple locations from one account. Product changes, price updates, and promotions push to every till simultaneously. Sales data from all sites rolls up into a single dashboard. Compare location performance side by side. Add a new till to the network in minutes — no engineer visit required.' },
];

const benefits = [
  { title: 'Replace Outdated Tills Without Disruption', description: 'Moving from an old till to modern software sounds disruptive, but Posso installs alongside your existing setup. We migrate your product catalogue, configure your categories, and train your staff before you switch. On go-live day, the transition takes less than an hour. Your customers notice nothing except faster service.' },
  { title: 'Know Exactly What Is Selling', description: 'Real-time reporting means you never wait until month-end to understand your business. At 2pm on a Tuesday, you know exactly what sold that morning, which staff member processed the most transactions, and whether you are ahead or behind last week. Decisions are based on data, not gut feeling.' },
  { title: 'Eliminate Cash Discrepancies', description: 'Cash management with shift declarations and automatic reconciliation means every penny is tracked. When a drawer is short by £4.50, the system shows exactly which shift, which till, and which staff member was responsible. The accountability alone reduces shrinkage — most businesses see a 60% reduction in unexplained cash differences within the first month.' },
  { title: 'Scale Without Starting Over', description: 'When you open a second location or add another till, the software scales with you. New tills connect to your existing account and inherit your product catalogue, pricing, and settings. There is no re-setup, no data migration, no starting from scratch. One business, one dashboard, as many tills as you need.' },
];

export default function TillSystemSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Till System Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                MODERN TILL SOFTWARE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Till System{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Cloud-based till software with touchscreen interface, real-time reporting, cash management, and secure staff login — everything your business needs in one modern till system.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Cloud dashboard with live sales data</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Cash reconciliation and shift management</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Till system software from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Till System Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Modern till software built for speed, accuracy, and complete business visibility.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Posso Till Software</h2>
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
                From Corner Shops to Multi-Site Chains
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A single-site shop needs a till that is <strong className="text-white">fast, reliable, and easy to use</strong>. Posso till software runs on standard touchscreen hardware, processes sales in under three seconds, and gives you end-of-day reports without any manual counting.
                </p>
                <p>
                  For growing businesses, the <strong className="text-white">cloud dashboard</strong> connects every till across every location. Push menu changes to all sites at once, compare performance between branches, and manage stock centrally. Each location operates independently during service, but your data is always unified.
                </p>
                <p>
                  Whether you run a <strong className="text-white">retail shop, cafe, takeaway, or restaurant</strong>, the till software adapts to your workflow. Configure product categories, set up modifiers, enable table management, or switch to quick-sale mode — one platform that flexes to your business type.
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
                <Link href="/shop-till-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Shop Till Software</p>
                  <p className="text-slate-400 text-sm mt-1">Retail till solutions</p>
                </Link>
                <Link href="/restaurant-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Till System</p>
                  <p className="text-slate-400 text-sm mt-1">Hospitality till software</p>
                </Link>
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS platform</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Till System Software — Frequently Asked Questions" faqs={[
          { question: 'What hardware do I need for the till software?', answer: 'Posso till software runs on any touchscreen device — tablets, laptops, or dedicated POS terminals. Most businesses use a 15-inch touchscreen with a cash drawer and receipt printer. We supply complete hardware bundles from £499 + VAT, or you can use your existing compatible equipment.' },
          { question: 'Is the till software cloud-based?', answer: 'Yes. All data syncs to the cloud in real time. You access reports, manage products, and monitor sales from any web browser. The till also works offline if your internet drops — transactions queue locally and sync automatically when the connection returns.' },
          { question: 'How does cash management work?', answer: 'Staff declare their float at the start of each shift. Every cash transaction is logged with a timestamp and staff ID. At the end of the shift, the system calculates expected cash and the staff member declares the actual amount. Any discrepancy is flagged and recorded for review.' },
          { question: 'Can different staff have different permissions?', answer: 'Yes. Each staff member has their own login PIN. Roles control access — a cashier can process sales but cannot issue refunds or access reports. A supervisor can override prices and process returns. A manager has full access to everything including settings and financial data.' },
          { question: 'How long does it take to set up?', answer: 'Most businesses are up and running within 24 hours. We configure your product catalogue, set up categories, and train your staff remotely or on site. The touchscreen interface is intuitive enough that new staff learn the basics in under 15 minutes.' },
          { question: 'How much does till system software cost?', answer: 'The complete till system starts from £499 + VAT including touchscreen terminal, cloud software, and cash management tools. Multi-site licences and additional tills are available at discounted rates. Free setup, product configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
