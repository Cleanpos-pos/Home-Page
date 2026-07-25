import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, CreditCard, Zap, ShieldCheck, Link2, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS Credit Card Application',
  description:
    'ePOS Credit Card Application — apply for a card machine integrated with your ePOS system. Teya partnership, quick approval, low transaction fees, next-day settlement. From £499 + VAT.',
  keywords: [
    'epos credit card application',
    'epos card machine application',
    'apply for card machine epos',
    'epos payment terminal',
    'card machine for epos',
    'teya card machine epos',
    'epos card reader application',
    'epos credit card terminal',
    'epos payment processing',
    'epos card machine uk',
  ],
  alternates: {
    canonical: '/epos-credit-card-application',
  },
  openGraph: {
    title: 'ePOS Credit Card Application',
    description:
      'ePOS Credit Card Application with Teya integration, quick approval, low transaction fees, and next-day settlement.',
    url: 'https://www.posso.co.uk/epos-credit-card-application',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS Credit Card Application',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'ePOS credit card application with integrated Teya card machine, quick approval process, low transaction fees, next-day settlement, contactless and chip-and-pin support, and unified sales reporting.',
    url: 'https://www.posso.co.uk/epos-credit-card-application',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '189',
      bestRating: '5',
    },
    featureList: [
      'Teya integrated card machine',
      'Quick application and approval',
      'Low transaction fees',
      'Next-day settlement',
      'Contactless, chip-and-pin, and mobile wallet',
      'Unified POS and payment reporting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'ePOS Credit Card Application', item: 'https://www.posso.co.uk/epos-credit-card-application' },
    ],
  },
];

const features = [
  { icon: CreditCard, title: 'Teya Integrated Card Machine', description: 'The Teya card terminal connects directly to your Posso ePOS. When a sale is rung up on the till, the amount is sent to the card machine automatically — no manual entry, no keying errors. The payment confirms on the POS, the receipt prints, and the sale is recorded. One seamless flow from order to payment.' },
  { icon: Zap, title: 'Quick Application & Approval', description: 'Apply online in under 10 minutes. Provide basic business details, bank information, and identification. Most applications are approved within 24–48 hours. Once approved, the card terminal is shipped to you pre-configured and paired with your ePOS. Plug it in, run a test transaction, and you are live.' },
  { icon: ShieldCheck, title: 'Low Transaction Fees', description: 'Competitive rates on every transaction — debit, credit, contactless, and mobile wallet. No hidden charges, no monthly minimums that penalise quiet months, no surprise fee increases. The rate you are quoted is the rate you pay. Your monthly statement breaks down every transaction so you see exactly where your money goes.' },
  { icon: Clock, title: 'Next-Day Settlement', description: 'Card payments taken today are in your bank account tomorrow. Consistent cash flow means you can pay suppliers, cover wages, and manage stock without waiting days for funds to clear. Next-day settlement is standard — not a premium add-on. You know exactly when the money arrives.' },
  { icon: Link2, title: 'Unified POS & Payment Reporting', description: 'Because the card machine is integrated with the ePOS, your sales reports include payment method breakdowns automatically. See how much revenue came through card, cash, contactless, or mobile wallet. Reconciliation happens automatically — no matching card terminal reports to POS reports manually at the end of the day.' },
  { icon: BarChart3, title: 'All Payment Methods Supported', description: 'Accept Visa, Mastercard, American Express, Apple Pay, Google Pay, Samsung Pay, and contactless payments up to and above the standard limit with PIN verification. Chip-and-pin for customers who prefer it. The terminal handles every payment method your customers use, so you never turn away a sale.' },
];

const benefits = [
  { title: 'Eliminate Keying Errors', description: 'Without integration, staff manually type the sale amount into the card machine. Mistakes happen — £12.50 becomes £125.00, or £8.40 becomes £4.80. Integrated payments send the exact amount from the POS to the terminal. Every transaction is accurate, every time. No refunds for overcharges, no losses from undercharges.' },
  { title: 'Speed Up Transaction Times', description: 'Integrated payment removes one step from every transaction. The amount transfers automatically, the customer taps or inserts their card, and the POS records the payment. During a busy lunch service processing 60 transactions an hour, saving 10 seconds per transaction adds up to 10 minutes of serving time recovered.' },
  { title: 'Simplify End-of-Day Reconciliation', description: 'At closing, your POS report shows total card payments and your card terminal agrees — because they share the same data. No discrepancies to investigate, no manual reconciliation. The manager closes the till in two minutes instead of twenty. Over a week, that is hours saved on admin.' },
  { title: 'Improve Cash Flow with Next-Day Settlement', description: 'Waiting 3–5 days for card payments to settle strains cash flow, especially for small businesses. Next-day settlement means Monday\'s takings are in your account on Tuesday. You pay suppliers on time, cover weekly wages, and restock without dipping into reserves.' },
];

export default function EposCreditCardApplicationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'ePOS Credit Card Application' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <CreditCard className="w-3 h-3 mr-2" />
                CARD MACHINE + ePOS INTEGRATION
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  ePOS Credit Card{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Application
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Apply for a card machine that integrates directly with your ePOS. Teya partnership, quick approval, low fees, next-day settlement, and zero keying errors. One application, one system.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Teya card machine integrated with your POS</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Quick approval, next-day settlement</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> ePOS system from £499 + VAT</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Integrated Payment Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A card machine that talks to your ePOS — eliminating errors, speeding up service, and simplifying your finances.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Apply for an Integrated Card Machine</h2>
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
                How the Application Process Works
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The application takes <strong className="text-white">under 10 minutes</strong>. You provide your business name, registration number, trading address, bank details, and a form of identification. There is no lengthy paperwork, no branch visits, and no waiting weeks for a decision.
                </p>
                <p>
                  Most applications are <strong className="text-white">approved within 24–48 hours</strong>. Once approved, your Teya card terminal is shipped pre-configured. It arrives paired with your Posso ePOS — unbox it, plug it in, and run a test transaction. You are taking card payments the same day it arrives.
                </p>
                <p>
                  There are <strong className="text-white">no long-term contracts locking you in</strong>. Transaction fees are transparent and competitive. Next-day settlement is standard. Your monthly statement shows every transaction, every fee, and your net settlement — complete clarity on what you pay and what you receive.
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
                <Link href="/free-card-machine" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Free Card Machine</p>
                  <p className="text-slate-400 text-sm mt-1">Free with processing agreement</p>
                </Link>
                <Link href="/self-employed-card-machine" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Employed Reader</p>
                  <p className="text-slate-400 text-sm mt-1">Card machine for sole traders</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Small business card terminals</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="ePOS Credit Card Application — FAQ" faqs={[
          { question: 'How long does the application take?', answer: 'The online application takes under 10 minutes. You need your business details, bank account information, and a form of identification. Most applications are reviewed and approved within 24–48 hours. Once approved, the card terminal is shipped pre-configured and ready to use.' },
          { question: 'What card types can I accept?', answer: 'The Teya terminal accepts Visa, Mastercard, American Express, Apple Pay, Google Pay, Samsung Pay, and all major contactless payment methods. Chip-and-pin is supported for customers who prefer it. You can accept payments from virtually any customer, regardless of their preferred payment method.' },
          { question: 'What are the transaction fees?', answer: 'Transaction fees are competitive and transparent. The rate depends on your business type and projected volume. There are no hidden charges, no monthly minimums, and no surprise increases. Your monthly statement itemises every transaction and fee. Contact us for a personalised quote.' },
          { question: 'How does next-day settlement work?', answer: 'Card payments processed today are settled into your bank account the next working day. This is standard — not a premium feature. Weekend transactions settle on Monday. You always know when to expect the funds, making cash flow planning straightforward.' },
          { question: 'Do I need a Posso ePOS to apply?', answer: 'The integrated experience works best with a Posso ePOS system — amounts transfer automatically from till to terminal with zero manual entry. If you do not yet have a Posso ePOS, you can apply for the complete package: POS system from £499 + VAT plus the integrated Teya card machine.' },
          { question: 'Is there a long-term contract?', answer: 'No. There are no long-term lock-in contracts. You can review and cancel the payment processing agreement with reasonable notice. We believe you should stay because the service is excellent, not because a contract forces you to. Terms are straightforward and clearly explained before you sign.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
