import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Briefcase, Wifi, PoundSterling, Battery, Smartphone, FileText } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self Employed Card Machine',
  description:
    'Self Employed Card Machine for sole traders and mobile businesses. No contract, low transaction fees, portable with 4G, next-day settlement, and receipt options. From £499 + VAT.',
  keywords: [
    'self employed card machine',
    'card machine for self employed',
    'sole trader card machine',
    'card reader self employed',
    'mobile card machine self employed',
    'portable card machine',
    'no contract card machine',
    'card machine sole trader uk',
    'self employed card reader uk',
    'card terminal self employed',
  ],
  alternates: {
    canonical: '/self-employed-card-machine',
  },
  openGraph: {
    title: 'Self Employed Card Machine',
    description:
      'Self Employed Card Machine for sole traders and mobile businesses. No contract, low fees, portable 4G, next-day settlement.',
    url: 'https://www.posso.co.uk/self-employed-card-machine',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Self Employed Card Machine',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Self employed card machine for sole traders and mobile businesses with no long-term contract, low transaction fees, portable 4G connectivity, next-day settlement, digital receipts, and sales tracking.',
    url: 'https://www.posso.co.uk/self-employed-card-machine',
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
      reviewCount: '213',
      bestRating: '5',
    },
    featureList: [
      'No long-term contract',
      'Low transaction fees for sole traders',
      'Portable with built-in 4G',
      'Next-day settlement',
      'Digital and printed receipt options',
      'Sales tracking via mobile app',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Self Employed Card Machine', item: 'https://www.posso.co.uk/self-employed-card-machine' },
    ],
  },
];

const features = [
  { icon: Briefcase, title: 'Built for Sole Traders', description: 'Designed specifically for self-employed professionals: plumbers, electricians, personal trainers, market traders, mobile hairdressers, and tradespeople. Apply as an individual or sole trader — no limited company required. The application process is simple and does not require the same documentation as a corporate merchant account.' },
  { icon: Wifi, title: 'Portable with Built-In 4G', description: 'Take payments anywhere with a card machine that has its own 4G SIM. At a customer\'s home, on a market stall, at an event, or in a van — if there is a mobile signal, you can take a card payment. No dependence on the customer\'s Wi-Fi. The built-in SIM is included and works across all UK mobile networks.' },
  { icon: PoundSterling, title: 'Low Transaction Fees, No Contract', description: 'Pay a simple, transparent rate per transaction. No monthly minimums that penalise you during quiet weeks. No long-term contract locking you in for 12 or 24 months. If your workload is seasonal — busy in summer, quiet in January — you only pay when you take payments. The fee structure works for irregular income patterns.' },
  { icon: Battery, title: 'All-Day Battery Life', description: 'The card machine battery lasts a full working day — 8+ hours of regular use or hundreds of transactions. Charge it overnight and it is ready for the next day. No worrying about the battery dying at a customer\'s house or halfway through a market day. A quick charge during lunch adds several hours of use.' },
  { icon: Smartphone, title: 'Sales Tracking via Mobile App', description: 'View your transactions, daily totals, and settlement history from your phone. Check how much you have taken at a glance between jobs. Export transaction data for your accountant or self-assessment tax return. The app provides the financial visibility that self-employed workers need without the complexity of a full POS system.' },
  { icon: FileText, title: 'Digital & Printed Receipts', description: 'Send receipts to customers by email or SMS — no paper roll required. For customers who want a printed receipt, the terminal prints one on the spot. Digital receipts include your business name, the transaction amount, and a unique reference. Professional receipts that make your sole trader business look established and trustworthy.' },
];

const benefits = [
  { title: 'Never Lose a Sale to "Cash Only"', description: 'Customers increasingly expect to pay by card. A plumber who only accepts cash loses the customer who does not carry it. A market trader without a card machine watches customers walk to the stall that has one. A portable card machine means every customer can pay, regardless of what is in their wallet.' },
  { title: 'Get Paid Faster with Next-Day Settlement', description: 'Card payments taken today are in your bank account tomorrow. No more chasing invoices, waiting for bank transfers, or hoping a cheque clears. A personal trainer takes payment after a session and has the money next morning. Cash flow is immediate and predictable.' },
  { title: 'Simplify Tax Reporting', description: 'Every card transaction is recorded with the date, amount, and time. Export your transaction history at tax return time and hand it to your accountant. No shoebox of paper receipts, no guessing how much you took at that market last April. Digital records make self-assessment straightforward.' },
  { title: 'Look Professional from Day One', description: 'Accepting card payments with branded digital receipts elevates your business. Customers see a professional operation, not someone fumbling for change. For a new self-employed business, a card machine is one of the simplest ways to look established and build trust from the first job.' },
];

export default function SelfEmployedCardMachinePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Self Employed Card Machine' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Briefcase className="w-3 h-3 mr-2" />
                CARD PAYMENTS FOR SOLE TRADERS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Self Employed{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Card Machine
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A portable card machine built for sole traders and mobile businesses. No contract, low fees, built-in 4G, next-day settlement, and digital receipts. Take payments anywhere you work.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> No long-term contract — pay per transaction</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Built-in 4G — works anywhere with a signal</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS system from £499 + VAT, low transaction fees</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Card Machine Features for Sole Traders</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything a self-employed professional needs to accept card payments on the go.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Self-Employed Workers Choose Posso</h2>
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
                Card Payments for Every Type of Self-Employed Business
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">tradesperson</strong> — plumber, electrician, carpenter, locksmith — finishes a job and takes payment on the spot. No invoice, no waiting, no awkward conversation about bank transfers. The customer taps their card and the job is paid for. Next-day settlement means the money is available tomorrow morning.
                </p>
                <p>
                  A <strong className="text-white">market trader or event vendor</strong> needs a card machine that works outdoors with no Wi-Fi. Built-in 4G handles this. Battery life lasts all day. Between serving customers, check your running total on the mobile app. At the end of the day, you know exactly what you took — no counting cash, no discrepancies.
                </p>
                <p>
                  A <strong className="text-white">mobile beauty therapist, personal trainer, or dog walker</strong> operates at different locations every day. The portable card machine fits in a bag and works at every client\'s home, park, or studio. Professional digital receipts are sent automatically. The business looks established even if it launched last month.
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
                <Link href="/epos-credit-card-application" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Card Application</p>
                  <p className="text-slate-400 text-sm mt-1">Apply for integrated payments</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS System</p>
                  <p className="text-slate-400 text-sm mt-1">POS for mobile businesses</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Self Employed Card Machine — FAQ" faqs={[
          { question: 'Can I get a card machine as a sole trader?', answer: 'Yes. You do not need a limited company. The application process is designed for sole traders and self-employed professionals. Provide your name, address, bank details, and a form of ID. Most applications are approved within 24–48 hours. No complex documentation required.' },
          { question: 'Is there a monthly fee or contract?', answer: 'There is no long-term contract. You pay a per-transaction fee when you take a payment. If you have a quiet month, you pay less. There are no monthly minimums or cancellation penalties. The fee structure is designed for the variable income patterns of self-employed work.' },
          { question: 'Does it work without Wi-Fi?', answer: 'Yes. The card machine has a built-in 4G SIM that connects to UK mobile networks. You can take payments anywhere with mobile signal coverage — at a customer\'s home, on a market stall, at an outdoor event, or in a van. The SIM is included at no additional cost.' },
          { question: 'How quickly do I receive the money?', answer: 'Next-day settlement is standard. Payments taken on Monday are in your bank account on Tuesday. Weekend transactions settle on Monday. This gives you predictable cash flow without waiting days for funds to clear.' },
          { question: 'Can I use this for my tax return?', answer: 'Yes. Every card transaction is recorded with the date, time, amount, and a unique reference. You can export your full transaction history from the mobile app or dashboard. Hand this to your accountant or use it for your self-assessment return. Digital records are accepted by HMRC.' },
          { question: 'What does the self employed card machine cost?', answer: 'The full POS system starts from £499 + VAT with low transaction fees per payment. For sole traders who need only a card machine without a full ePOS, standalone options are available. Contact us on 0808 175 3956 for pricing tailored to your expected transaction volume.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
