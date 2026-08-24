import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, CreditCard, Monitor, Smartphone, Radio, RefreshCw, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDQ Systems',
  description:
    'PDQ Systems for payment processing hardware, card readers, mobile terminals, and POS integration. Complete payment solutions for businesses of all sizes. Low commission.',
  keywords: [
    'pdq systems',
    'pdq system',
    'pdq payment system',
    'pdq terminal',
    'pdq card machine',
    'pdq payment processing',
    'pdq hardware',
    'pdq card reader',
    'pdq system uk',
    'pdq terminal uk',
  ],
  alternates: {
    canonical: '/pdq-systems',
  },
  openGraph: {
    title: 'PDQ Systems | Posso UK',
    description:
      'PDQ Systems with payment processing hardware, card readers, mobile terminals, and full POS integration.',
    url: 'https://www.posso.co.uk/pdq-systems',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso PDQ Systems',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'PDQ systems for payment processing hardware, card readers, mobile terminals, and POS integration for businesses of all sizes.',
    url: 'https://www.posso.co.uk/pdq-systems',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Countertop card payment terminals',
      'Portable wireless terminals',
      'Mobile card readers for on-the-go',
      'Full POS integration',
      'Multi-terminal management',
      'Real-time transaction reporting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'PDQ Systems', item: 'https://www.posso.co.uk/pdq-systems' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Countertop Terminals', description: 'Fixed terminals for the counter that connect via Ethernet or WiFi. Reliable, fast, and always ready. The terminal sits next to your till and processes chip and PIN, contactless, Apple Pay, and Google Pay. Ideal for shops, restaurants, and any business with a fixed payment point. Transactions complete in seconds.' },
  { icon: Radio, title: 'Portable Wireless Terminals', description: 'Take the terminal to the customer. Wireless PDQ machines connect via WiFi or Bluetooth and work anywhere in your premises. Bring the payment to the table in a restaurant, to the customer in a showroom, or to the queue during a busy period. Range covers your full premises without signal drops.' },
  { icon: Smartphone, title: 'Mobile Card Readers', description: 'Compact card readers that pair with a smartphone or tablet via Bluetooth. Accept card payments at markets, events, pop-ups, or on delivery rounds. The reader fits in a pocket. Process contactless and chip and PIN payments anywhere with a mobile signal. Ideal for businesses that operate outside a fixed location.' },
  { icon: CreditCard, title: 'Full POS Integration', description: 'When integrated with a Posso POS, the sale amount transfers automatically from the till to the terminal. No re-keying amounts, no discrepancies. Every transaction is recorded with item-level detail, payment method, and settlement status. End-of-day reconciliation takes minutes. Integration is included at no extra cost.' },
  { icon: RefreshCw, title: 'Multi-Terminal Management', description: 'Run multiple terminals across one or more locations from a single dashboard. Monitor transaction volumes, settlement status, and terminal health. If a terminal goes offline, you see it immediately. Add new terminals as you grow without reconfiguring your existing setup. Scale from one terminal to fifty.' },
  { icon: BarChart3, title: 'Transaction Reporting', description: 'Real-time reporting shows every transaction across all terminals. Filter by date, location, terminal, payment method, or amount. See daily totals, average transaction values, and peak trading times. Export data for your accountant or integrate directly with accounting software. Full visibility over your payment data.' },
];

const benefits = [
  { title: 'Accept Every Payment Method', description: 'Chip and PIN, contactless, Apple Pay, Google Pay, Amex — your PDQ system handles them all. Customers pay the way they want without friction. A business that accepts every payment method never loses a sale because a customer does not have the right card or enough cash.' },
  { title: 'Reduce Errors with POS Integration', description: 'Integrated PDQ means the sale amount transfers automatically to the terminal. No manual keying means no errors. A restaurant processing 200 transactions per day eliminates manual entry mistakes entirely. End-of-day cashing up matches perfectly because every payment is recorded against the corresponding sale.' },
  { title: 'Competitive Rates, No Lock-In', description: 'Low commission on every transaction through our Teya partnership. No long-term contracts, no hidden fees, no monthly minimums. You stay because the service is excellent, not because of a contract. If your volume grows, your rates can improve.' },
  { title: 'Hardware for Every Situation', description: 'Countertop for the till, portable for table service, mobile for events and deliveries. Choose the terminal type that fits how you operate. Mix and match across locations. A restaurant might use countertop at the bar and portable for table payments — all managed from one system.' },
];

export default function PdqSystemsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'PDQ Systems' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <CreditCard className="w-3 h-3 mr-2" />
                COMPLETE PAYMENT SOLUTIONS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  PDQ{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Systems
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Payment processing hardware, card readers, mobile terminals, and full POS integration — a complete PDQ system for businesses of every size and type.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Countertop, portable, and mobile terminals</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission with Teya partnership</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS system from £499 + VAT</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">PDQ System Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From countertop terminals to mobile card readers — payment hardware for every business scenario.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Posso PDQ Systems</h2>
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
                Choose the Right Terminal for Your Business
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">countertop terminal</strong> is the standard choice for any business with a fixed payment point. It sits next to your till, connects via Ethernet or WiFi, and processes every payment type. Reliable and fast — ideal for retail shops, takeaways, and service counters.
                </p>
                <p>
                  A <strong className="text-white">portable terminal</strong> works anywhere in your premises. Restaurants use them for tableside payments. Showrooms take payment on the shop floor. The wireless connection means customers pay where they are, not where the till is. Faster, more convenient, better experience.
                </p>
                <p>
                  A <strong className="text-white">mobile card reader</strong> goes wherever you go. Markets, festivals, home deliveries, trade shows — anywhere with a mobile signal. Pair it with your phone, accept a contactless tap, and the payment is processed. Compact, affordable, and perfect for businesses on the move.
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
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ for Small Business</p>
                  <p className="text-slate-400 text-sm mt-1">Card machines for SMEs</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS</p>
                  <p className="text-slate-400 text-sm mt-1">Handheld POS devices</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="PDQ Systems — Frequently Asked Questions" faqs={[
          { question: 'What is a PDQ system?', answer: 'PDQ stands for "Process Data Quickly." A PDQ system is a card payment terminal that processes credit and debit card transactions. It includes the physical terminal hardware, the connection to payment networks, and the settlement of funds to your bank account. Modern PDQ systems accept contactless, chip and PIN, and mobile wallet payments.' },
          { question: 'Which terminal type should I choose?', answer: 'Countertop terminals are best for fixed payment points like shop tills and service counters. Portable wireless terminals suit businesses where you take payment to the customer — restaurants, showrooms, and queues. Mobile card readers are ideal for businesses on the move — markets, events, and deliveries. You can mix and match across your business.' },
          { question: 'How does POS integration work?', answer: 'When integrated with a Posso POS, the sale amount transfers automatically from the till screen to the card terminal. The customer taps or inserts their card, and the transaction is recorded against the specific items sold. No manual amount entry, no discrepancies. Reconciliation is automatic.' },
          { question: 'What transaction rates do you offer?', answer: 'We offer competitive rates through our Teya partnership. Low commission, no hidden fees, no monthly minimums. Rates depend on your business type and transaction volume. Contact us for a personalised quote. We are confident our rates will be competitive with any provider in the market.' },
          { question: 'Can I manage multiple terminals?', answer: 'Yes. The management dashboard shows all terminals across all locations. Monitor transaction volumes, settlement status, and terminal health in real time. Add new terminals as you expand. A restaurant group with 10 locations and 30 terminals manages everything from one screen.' },
          { question: 'How much does a PDQ system cost?', answer: 'Terminal costs depend on the type — countertop, portable, or mobile. When combined with a Posso POS from £499 + VAT, the integrated payment solution is competitively priced. No long-term contracts. Finance options available. Contact us for a detailed quote based on your requirements.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
