import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Gift, CreditCard, ShieldCheck, Zap, Settings, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Card Machine',
  description:
    'Free Card Machine with payment processing agreement. Teya terminal included at no upfront cost, low transaction fees, next-day settlement, contactless payments, and POS integration. From £499 + VAT.',
  keywords: [
    'free card machine',
    'free card machine uk',
    'free card terminal',
    'free pdq machine',
    'free card reader business',
    'free card machine for business',
    'no cost card machine',
    'free payment terminal',
    'free card machine small business',
    'teya free card machine',
  ],
  alternates: {
    canonical: '/free-card-machine',
  },
  openGraph: {
    title: 'Free Card Machine',
    description:
      'Free Card Machine with payment processing agreement. Teya terminal at no upfront cost, low fees, next-day settlement, and POS integration.',
    url: 'https://www.posso.co.uk/free-card-machine',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Free Card Machine',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Free card machine included with payment processing agreement. Teya terminal at no upfront cost with low transaction fees, next-day settlement, contactless and mobile wallet support, and ePOS integration.',
    url: 'https://www.posso.co.uk/free-card-machine',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
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
      'Free Teya card terminal with processing agreement',
      'Low transaction fees',
      'Next-day settlement',
      'Contactless, chip-and-pin, and mobile wallets',
      'ePOS system integration',
      'Replacement terminal if faulty',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Free Card Machine', item: 'https://www.posso.co.uk/free-card-machine' },
    ],
  },
];

const features = [
  { icon: Gift, title: 'Free Terminal with Processing Agreement', description: 'The Teya card terminal is provided at no upfront cost when you sign a payment processing agreement. There is no hidden purchase price, no lease fee, and no hardware deposit. You receive a brand-new, current-generation terminal shipped to your premises pre-configured and ready to take payments on arrival.' },
  { icon: CreditCard, title: 'All Payment Methods Accepted', description: 'Accept Visa, Mastercard, American Express, Apple Pay, Google Pay, Samsung Pay, and contactless. Chip-and-pin for traditional card payments. The terminal handles every payment method your customers carry. You never turn away a sale because of an unsupported card or wallet.' },
  { icon: Zap, title: 'Next-Day Settlement', description: 'Card payments taken today land in your bank account the next working day. This is standard for all merchants — not a premium upgrade. Reliable next-day settlement means predictable cash flow for stock ordering, staff wages, rent, and supplier payments. You always know when the money arrives.' },
  { icon: ShieldCheck, title: 'Low, Transparent Transaction Fees', description: 'A simple, competitive rate on every transaction. No monthly minimums, no statement fees, no PCI compliance charges bundled in. The rate you are quoted is the rate you pay. Your monthly statement lists every transaction with its fee so you can see exactly what you are paying for.' },
  { icon: Settings, title: 'ePOS Integration Included', description: 'The free card machine connects to your Posso ePOS system. Sale amounts transfer from the till to the terminal automatically — no manual keying. Payments confirm on the POS and appear in your sales reports. Reconciliation is automatic. If you already have a Posso POS, the card machine slots in seamlessly.' },
  { icon: BarChart3, title: 'Free Replacement if Faulty', description: 'If your card terminal develops a fault, it is replaced at no charge. No repair bills, no waiting weeks for a fix, no being without card payments during the busiest weekend. Report the issue, receive a replacement terminal, and continue trading. Hardware support is included for the life of your agreement.' },
];

const benefits = [
  { title: 'Zero Upfront Hardware Cost', description: 'Starting a business or switching payment providers should not require a large upfront investment in hardware. The free card machine removes that barrier. Your only cost is the per-transaction fee when you actually take payments. If you are launching a new business, this keeps your startup costs lower.' },
  { title: 'Start Taking Card Payments Immediately', description: 'The terminal arrives pre-configured. Unbox it, connect it to power or charge the battery, and run a test transaction. You are live within minutes. No waiting for engineers, no complex setup process, no technical expertise required. If you pair it with a Posso ePOS, the integration is automatic.' },
  { title: 'Predictable Costs, No Surprises', description: 'The transaction fee is the same every month. There are no annual fees, no PCI compliance surcharges, no hidden costs that appear on your statement six months in. You know your cost per transaction from day one. Budgeting is straightforward because the pricing does not change without notice.' },
  { title: 'Professional Payment Experience', description: 'A current-generation card terminal with contactless, mobile wallets, and printed or digital receipts gives your customers a professional payment experience. Whether you run a cafe, a salon, a market stall, or a trade business, accepting modern payments builds trust and credibility with every customer.' },
];

export default function FreeCardMachinePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Free Card Machine' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Gift className="w-3 h-3 mr-2" />
                FREE CARD TERMINAL WITH PROCESSING AGREEMENT
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Free Card{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Machine
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Get a Teya card terminal at no upfront cost with a payment processing agreement. Low transaction fees, next-day settlement, all payment methods accepted, and ePOS integration included.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Free Teya card machine — no upfront cost</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Next-day settlement, low transaction fees</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> ePOS system from £499 + VAT</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get Your Free Machine <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What You Get with the Free Card Machine</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A current-generation Teya terminal with everything you need to accept card payments from day one.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Choose the Free Card Machine</h2>
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
                What &quot;Free Card Machine&quot; Actually Means
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Many providers advertise free card machines but bury the cost in <strong className="text-white">inflated transaction fees, monthly minimums, or long-term contracts</strong>. We are transparent about how this works: the Teya card terminal is provided at no upfront cost as part of a payment processing agreement. You pay a competitive per-transaction fee. That is it.
                </p>
                <p>
                  The terminal you receive is a <strong className="text-white">current-generation device</strong> — not a refurbished or outdated model. It supports contactless, chip-and-pin, Apple Pay, Google Pay, and all major card brands. It connects to your Posso ePOS for automatic amount transfer. It is the same terminal that other providers charge hundreds of pounds for.
                </p>
                <p>
                  If the terminal develops a fault, <strong className="text-white">it is replaced at no charge</strong>. You are never without card payment capability. The agreement includes ongoing hardware support, software updates, and access to the merchant dashboard where you track transactions, view settlements, and download reports.
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
                <Link href="/epos-credit-card-application" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Card Application</p>
                  <p className="text-slate-400 text-sm mt-1">Apply for integrated payments</p>
                </Link>
                <Link href="/self-employed-card-machine" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Employed Reader</p>
                  <p className="text-slate-400 text-sm mt-1">Card machine for sole traders</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Small business terminals</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Free Card Machine — FAQ" faqs={[
          { question: 'Is the card machine really free?', answer: 'Yes. The Teya card terminal is provided at no upfront cost when you sign a payment processing agreement. There is no hidden purchase price, no lease fee, and no hardware deposit. You pay only the per-transaction fee when you process card payments. If you process zero transactions in a month, you pay nothing.' },
          { question: 'What is included with the free card machine?', answer: 'You receive a current-generation Teya card terminal, a charging dock, a power cable, and a quick-start guide. The terminal arrives pre-configured with your merchant details. It supports contactless, chip-and-pin, and mobile wallets out of the box. If you have a Posso ePOS, the integration is pre-configured.' },
          { question: 'What are the transaction fees?', answer: 'Transaction fees are competitive and depend on your business type and projected volume. There are no monthly minimums, no statement fees, and no PCI compliance surcharges. Contact us on 0808 175 3956 for a quote tailored to your business. The rate is transparent and does not increase without notice.' },
          { question: 'What happens if the terminal breaks?', answer: 'If the terminal develops a fault, report it and a replacement is shipped at no charge. You are not responsible for hardware repairs or replacement costs during the agreement. The goal is to keep you trading — a broken card machine means lost sales, so replacements are prioritised.' },
          { question: 'Do I need a Posso ePOS to get the free card machine?', answer: 'No. The free card machine is available as a standalone device. However, pairing it with a Posso ePOS system from £499 + VAT gives you integrated payments — amounts transfer automatically from till to terminal, eliminating manual entry. The standalone terminal works independently if you do not need a full POS.' },
          { question: 'How long does it take to start accepting payments?', answer: 'Apply online in under 10 minutes. Most applications are approved within 24–48 hours. The terminal is shipped pre-configured and typically arrives within 3–5 working days. Unbox it, charge or plug it in, and run a test transaction. You can be accepting card payments the same day it arrives.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
