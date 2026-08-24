import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, ShoppingCart, TrendingUp, Receipt, CreditCard, BarChart3, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cash Register for Small Business',
  description:
    'Cash Register for Small Business — modern ePOS vs traditional cash register, why small businesses are upgrading, what you get for £499 + VAT, and how to make the switch painlessly.',
  keywords: [
    'cash register small business',
    'cash register for small business',
    'small business till',
    'small business pos',
    'small shop cash register',
    'epos small business',
    'till system small business',
    'cheap cash register',
    'small business till system uk',
    'modern cash register',
  ],
  alternates: {
    canonical: '/cash-register-small-business',
  },
  openGraph: {
    title: 'Cash Register for Small Business | Posso UK',
    description:
      'Cash Register for Small Business — modern ePOS vs traditional till, upgrade guide, and what you get from £499 + VAT.',
    url: 'https://www.posso.co.uk/cash-register-small-business',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Cash Register for Small Business',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Modern ePOS cash register for small businesses with touchscreen interface, card payments, stock management, sales reporting, and cloud access. Replaces traditional cash registers.',
    url: 'https://www.posso.co.uk/cash-register-small-business',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Touchscreen ePOS interface',
      'Integrated card payment processing',
      'Stock management and alerts',
      'Sales reporting and analytics',
      'Cloud access from anywhere',
      'Multi-user with staff permissions',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Cash Register for Small Business', item: 'https://www.posso.co.uk/cash-register-small-business' },
    ],
  },
];

const features = [
  { icon: ShoppingCart, title: 'Touchscreen ePOS Interface', description: 'A 15-inch touchscreen replaces rows of buttons. Your products are displayed with names, images, and prices — tap to add to the order. Group items by category: drinks, food, retail. Search for any product by name. New staff learn the system in minutes, not days. The interface is designed for speed — during a busy period, a skilled operator processes transactions in under 15 seconds.' },
  { icon: CreditCard, title: 'Integrated Card Payments', description: 'The card terminal is built into the system — no separate machine, no manual amount entry. When a customer pays, the amount transfers to the card reader automatically. Apple Pay, Google Pay, contactless, chip and PIN — all accepted. Card payments reconcile against sales automatically. No end-of-day mismatches between the till and the card machine. One transaction, one record.' },
  { icon: Receipt, title: 'Stock Management', description: 'Every sale deducts from your stock count automatically. Set minimum stock levels and receive alerts when items need reordering. Know exactly what you have, what is selling, and what is gathering dust. A small shop owner who previously counted stock manually on Sunday afternoons now sees live stock levels on their phone. Spend your Sunday doing something better.' },
  { icon: BarChart3, title: 'Sales Reporting', description: 'See your daily, weekly, and monthly sales at a glance. Break down revenue by product, category, time of day, and payment method. Identify your best sellers, your slow movers, and your peak trading hours. Compare this week to last week, this December to last December. A traditional cash register gives you a total at the end of the day. A modern ePOS gives you the insight to grow your business.' },
  { icon: TrendingUp, title: 'Cloud Access Anywhere', description: 'Check your sales from your sofa, your holiday, or your other shop. The cloud dashboard shows real-time sales data, stock levels, and staff activity from any device with a browser. A shop owner with two locations sees both tills on one screen. Spot a problem before it becomes a crisis. Know what is happening in your business without being physically present.' },
  { icon: RefreshCw, title: 'Easy Upgrade From Cash Register', description: 'Switching from a traditional cash register takes one afternoon. We set up the hardware, configure your product list, train your staff, and go live. Your existing product list can be imported from a spreadsheet. Prices, categories, and barcodes are mapped automatically. By the next morning, you are trading on a modern system with zero disruption to your customers.' },
];

const benefits = [
  { title: 'Stop Losing Money to Till Errors', description: 'A traditional cash register relies on the operator keying the correct price. Key in £4.50 instead of £5.40 and you have lost 90p without knowing it. Across 200 transactions per day, keying errors add up. An ePOS shows the correct price for every product — tap to add, no manual entry. Pricing accuracy goes from "mostly right" to "always right."' },
  { title: 'Know What Your Business Is Actually Doing', description: 'A cash register tells you how much money went through the till today. An ePOS tells you which products sold, when they sold, how customers paid, what your margins look like, and which staff member was on the till. The difference between guessing and knowing is the difference between surviving and growing. Data replaces gut feel.' },
  { title: 'Accept Every Payment Method', description: 'Cash-only businesses lose customers. Card-only businesses lose customers. The modern small business needs to accept everything — cash, card, contactless, Apple Pay, Google Pay. Integrated card payments mean no fumbling with a separate terminal. The transaction is smooth and fast. Customers pay the way they want to pay, and you never turn away a sale.' },
  { title: 'Save Hours Every Week', description: 'End-of-day cashing up with a traditional register takes 20-30 minutes of counting cash and reconciling receipts. With an ePOS, the Z-report generates in one tap — cash expected versus cash counted, card transactions reconciled, total sales confirmed. Stock counts that took a full day now update in real time. Over a year, you reclaim hundreds of hours.' },
];

export default function CashRegisterSmallBusinessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Cash Register for Small Business' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <ShoppingCart className="w-3 h-3 mr-2" />
                UPGRADE YOUR TILL
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Cash Register for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Small Business
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                The modern replacement for your cash register — touchscreen ePOS, integrated card payments, stock management, and sales reporting. Everything a small business needs from £499 + VAT.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Touchscreen ePOS replaces button-press tills</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Card payments built in — no separate terminal</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What You Get With a Modern Cash Register</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything a traditional cash register does, plus everything it cannot — in one system built for small businesses.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Small Businesses Are Upgrading</h2>
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
                The Honest Case for Switching From a Cash Register
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A traditional cash register costs £100-200. A Posso ePOS costs <strong className="text-white">from £499 + VAT</strong>. Why would a small business spend more? Because the cash register is costing you more than the purchase price every single month — in keying errors, lost stock, missed insights, and turned-away card customers.
                </p>
                <p>
                  A corner shop doing <strong className="text-white">150 transactions per day</strong> with a 1% keying error rate loses £30-50 per week in pricing mistakes alone. That is £1,500-2,500 per year — enough to pay for the ePOS system three times over. Add the stock that disappears without being tracked, the customers who leave because you cannot take card, and the hours spent on manual cashing up.
                </p>
                <p>
                  The upgrade takes <strong className="text-white">one afternoon</strong>. We bring the hardware, set up your products, train your staff, and you are trading on the new system by the next morning. Your customers see a faster, more professional checkout. Your staff have an easier system to use. You have data you never had before. And it costs less per year than the errors your cash register is silently causing.
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
                <Link href="/touch-screen-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Touch Screen Till</p>
                  <p className="text-slate-400 text-sm mt-1">15" capacitive display</p>
                </Link>
                <Link href="/shop-till-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Shop Till Software</p>
                  <p className="text-slate-400 text-sm mt-1">Retail till software</p>
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

        <FAQSection title="Cash Register for Small Business — Frequently Asked Questions" faqs={[
          { question: 'How much does a modern cash register cost?', answer: 'The Posso ePOS system for small businesses starts from £499 + VAT. This includes the touchscreen terminal, POS software, receipt printer, and cash drawer. Integrated card payment terminal available. Finance from £24.92 per week. Free setup, product configuration, and staff training included with a 2-year hardware warranty.' },
          { question: 'Is it difficult to switch from a cash register to ePOS?', answer: 'No. The switch takes one afternoon. We set up the hardware, import your product list from a spreadsheet or enter it manually, configure categories and prices, and train your staff. Most staff are comfortable with the touchscreen interface within 30 minutes. You are trading on the new system by the next morning with zero disruption.' },
          { question: 'Can I still accept cash?', answer: 'Absolutely. The system comes with a cash drawer and handles cash transactions with automatic change calculation. The ePOS handles cash and card equally well. You get the benefit of tracking all sales — cash and card — in one system with full reporting. Cash management reports show expected cash versus counted cash at the end of every shift.' },
          { question: 'Do I need the internet for it to work?', answer: 'The system works offline for taking orders and processing cash payments. Card payments require an internet connection. Sales data syncs to the cloud when the connection is restored. This means a brief internet outage does not stop you trading. For areas with unreliable broadband, the system is designed to operate normally during connectivity interruptions.' },
          { question: 'Can it handle barcode scanning?', answer: 'Yes. Connect a barcode scanner and scan products to add them to the order — the same way a supermarket checkout works. Each product is linked to its barcode in the system. Stock counts can be done with the scanner too — scan a shelf and the system counts what you have. Faster checkout, fewer errors, easier stock management.' },
          { question: 'What reports can I see?', answer: 'Daily, weekly, and monthly sales totals. Revenue by product, category, and payment method. Peak trading hours and quietest periods. Stock levels and reorder alerts. Staff performance by transactions processed. Profit margins by product. Year-on-year comparisons. All reports are accessible from any device via the cloud dashboard — check your sales from your phone at any time.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
