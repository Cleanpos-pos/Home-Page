import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Globe, CreditCard, FileText, PieChart, Link2, Layers } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website POS Finance Software',
  description:
    'Website POS Finance Software — POS with integrated website and finance/payment management. One platform for in-store sales, online orders, and financial reporting. POS from £499 + VAT.',
  keywords: [
    'website pos finance software',
    'pos with website integration',
    'pos and finance software',
    'all in one pos system',
    'pos with online payments',
    'integrated pos website',
    'pos finance management',
    'business pos with website',
    'pos with accounting integration',
    'pos website finance uk',
  ],
  alternates: {
    canonical: '/website-pos-finance-software',
  },
  openGraph: {
    title: 'Website POS Finance Software | Posso UK',
    description:
      'Website POS Finance Software — one platform for in-store POS, online website, and financial reporting. All-in-one business management.',
    url: 'https://posso.co.uk/website-pos-finance-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Website POS Finance Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'All-in-one platform combining POS, website/webshop, and financial management. In-store sales, online orders, payment processing, and business reporting from a single system.',
    url: 'https://posso.co.uk/website-pos-finance-software',
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
      reviewCount: '231',
      bestRating: '5',
    },
    featureList: [
      'POS with integrated website/webshop',
      'Payment processing and reconciliation',
      'Financial reporting and VAT summaries',
      'Multi-channel sales tracking',
      'Accounting software integration',
      'Staff payroll cost reporting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Website POS Finance Software', item: 'https://posso.co.uk/website-pos-finance-software' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Integrated Website & Webshop', description: 'Your business website and online shop are built into the POS platform. Products, menus, and pricing sync between in-store and online automatically. Customers browse your website, place orders, and pay — the order arrives in your POS like any other sale. One system runs both channels with zero manual sync.' },
  { icon: CreditCard, title: 'Unified Payment Processing', description: 'In-store card payments, online transactions, and mobile payments are all processed through one system. Low commission on every transaction. Daily settlement reports show every payment, broken down by method and channel. No chasing separate merchant accounts or reconciling payments from multiple providers.' },
  { icon: FileText, title: 'Financial Reporting & VAT', description: 'The system generates daily, weekly, and monthly financial reports automatically. Revenue by channel, payment method breakdown, VAT summary, cost of goods, gross margin, and net profit — all available from the dashboard. Export reports to CSV for your accountant. VAT figures are calculated and ready for your return.' },
  { icon: PieChart, title: 'Business Performance Dashboard', description: 'See your entire business on one screen: today\'s sales, online orders, payment settlements, top-selling products, staff performance, and stock alerts. Compare this week to last week, this month to last month. Identify trends before they become problems. Data-driven decisions replace guesswork.' },
  { icon: Link2, title: 'Accounting Software Integration', description: 'Connect the POS to Xero, QuickBooks, or Sage. Sales data, payment records, and expense summaries sync automatically. Your accountant sees up-to-date figures without waiting for you to send spreadsheets. Month-end reconciliation that used to take hours now takes minutes.' },
  { icon: Layers, title: 'All-in-One Business Management', description: 'Instead of a POS from one provider, a website from another, a payment gateway from a third, and accounting software from a fourth — Posso combines them into one platform. One login, one support team, one monthly statement. Simplicity reduces errors, saves time, and cuts the total cost of running your business technology.' },
];

const benefits = [
  { title: 'Replace Three Systems with One', description: 'Most businesses run separate systems for POS, website, and finance. Each has its own subscription, login, support team, and learning curve. Data lives in silos. Reconciliation is manual. Posso combines all three into one platform. One product catalogue, one payment system, one set of reports, one support number.' },
  { title: 'See the Full Financial Picture', description: 'When POS, online sales, and payment data live in one system, financial reporting is automatic and accurate. You see total revenue across all channels, payment settlement timelines, VAT liability, and profit margins — all in real time. No waiting for month-end, no manual data entry, no spreadsheet errors.' },
  { title: 'Save on Multiple Subscriptions', description: 'A separate website (£20–£50/month), payment gateway (£20–£30/month plus transaction fees), accounting sync plugin (£10–£30/month), and POS subscription (£30–£60/month) totals £80–£170/month in subscriptions alone. Posso replaces all of these with one integrated system from £499 + VAT upfront.' },
  { title: 'Simplify Your Technology Stack', description: 'Every separate system is another thing to learn, another login to manage, another support team to call when it breaks, and another integration point that can fail. Reducing from four systems to one cuts complexity dramatically. Staff learn one interface. You manage one platform. Problems have one support number.' },
];

export default function WebsitePosFinanceSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Website POS Finance Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Layers className="w-3 h-3 mr-2" />
                ALL-IN-ONE PLATFORM
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Website POS Finance{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                One platform for your POS, website, and business finances. Sell in-store and online, process payments, and generate financial reports — all from a single system.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS + website + finance from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission on all payments</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Xero, QuickBooks, Sage integration</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">All-in-One Business Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                POS, website, payments, and financial management — integrated into one platform.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Choose an All-in-One Platform</h2>
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
                How Different Businesses Use the Platform
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">retail shop</strong> uses the POS for in-store sales, the webshop for online orders, and the finance module to track revenue, margins, and VAT. Products are entered once and appear on both channels. End-of-day sales reconcile automatically. The accountant receives clean data via Xero sync without manual entry.
                </p>
                <p>
                  A <strong className="text-white">restaurant</strong> takes dine-in orders on the POS, delivery orders through the website, and uses financial reporting to track food cost percentage, staff-to-revenue ratio, and daily cash flow. Payment settlements from card, cash, and online transactions appear in one consolidated report.
                </p>
                <p>
                  A <strong className="text-white">service business</strong> uses the website for booking and payments, the POS for walk-in clients, and the finance tools to manage invoicing, payment tracking, and expense reporting. One platform replaces a booking system, payment processor, and accounting tool — saving time and subscription costs.
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
                <Link href="/pos-webshop" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Webshop</p>
                  <p className="text-slate-400 text-sm mt-1">POS + online store</p>
                </Link>
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Software features</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Card payment terminals</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Website POS Finance Software — Frequently Asked Questions" faqs={[
          { question: 'What does "all-in-one" include?', answer: 'The Posso all-in-one platform includes: POS software for in-store sales, a branded website/webshop for online sales, integrated payment processing for card and online payments, financial reporting with VAT summaries, accounting software integration (Xero, QuickBooks, Sage), and a cloud dashboard for managing everything. One system, one login.' },
          { question: 'Does it integrate with my accounting software?', answer: 'Yes. Posso integrates with Xero, QuickBooks, and Sage. Sales data, payment records, and financial summaries sync automatically. Your accountant sees up-to-date figures without manual data entry. Daily sales, payment settlements, and VAT calculations flow directly into your accounting software.' },
          { question: 'How does payment processing work?', answer: 'In-store payments (card, contactless, Apple Pay, Google Pay) and online payments (card, bank transfer) are all processed through the Posso platform with low commission. Daily settlement reports show every transaction by channel and payment method. Funds settle into your bank account on a regular schedule.' },
          { question: 'Can I see financial reports in real time?', answer: 'Yes. The dashboard shows live sales data, payment settlements, and financial summaries. Revenue by channel, payment method breakdown, VAT liability, product margins, and daily cash flow update in real time. Weekly and monthly reports generate automatically. All reports export to CSV for external analysis.' },
          { question: 'How much does the all-in-one platform cost?', answer: 'The complete platform — POS, website, payments, and financial reporting — starts from £499 + VAT. Low commission on payment processing with no separate gateway fees. Finance available from £24.92 per week. Free installation, setup, and training included. No hidden monthly software fees for the first year.' },
          { question: 'Do I still need separate accounting software?', answer: 'For basic bookkeeping, the built-in financial reporting may be sufficient — it generates VAT summaries, revenue reports, and payment reconciliation. For full accounting (payroll, tax returns, balance sheets), you will still use dedicated accounting software. The Posso integration ensures data flows automatically, eliminating manual data entry.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
