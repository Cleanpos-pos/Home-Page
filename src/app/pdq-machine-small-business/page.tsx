import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, CreditCard, Wifi, Percent, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDQ Machine for Small Business',
  description:
    'PDQ Machine for Small Business with card payment terminals, Teya integration, contactless payments, and competitive rates. Accept cards from day one. Low commission.',
  keywords: [
    'pdq machine small business',
    'pdq machine for small business',
    'card machine small business',
    'card payment terminal small business',
    'pdq terminal small business',
    'contactless card machine',
    'cheap pdq machine',
    'small business card reader',
    'pdq machine uk',
    'card terminal for small business',
  ],
  alternates: {
    canonical: '/pdq-machine-small-business',
  },
  openGraph: {
    title: 'PDQ Machine for Small Business | Posso UK',
    description:
      'PDQ Machine for Small Business with Teya integration, contactless payments, and competitive transaction rates.',
    url: 'https://posso.co.uk/pdq-machine-small-business',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso PDQ Machine for Small Business',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'PDQ machine for small business with card payment terminals, Teya integration, contactless payments, and competitive transaction rates.',
    url: 'https://posso.co.uk/pdq-machine-small-business',
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
      'Contactless card payment terminals',
      'Teya payment integration',
      'Competitive transaction rates',
      'Chip and PIN plus Apple Pay and Google Pay',
      'Next-day settlement available',
      'POS-integrated or standalone operation',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'PDQ Machine for Small Business', item: 'https://posso.co.uk/pdq-machine-small-business' },
    ],
  },
];

const features = [
  { icon: CreditCard, title: 'Card Payment Terminals', description: 'Accept Visa, Mastercard, American Express, and all major card brands. Chip and PIN for inserted cards, contactless for tap payments. The terminal processes transactions in seconds and prints or emails a receipt. A small business that accepts cards from day one captures sales that would otherwise walk out the door.' },
  { icon: Wifi, title: 'Teya Integration', description: 'Posso partners with Teya for payment processing. Teya provides competitive rates, fast settlement, and a transparent fee structure. No hidden charges, no long-term lock-in contracts. The integration means the POS and card terminal communicate automatically — the payment amount transfers to the terminal without manual entry.' },
  { icon: Smartphone, title: 'Contactless & Mobile Payments', description: 'Accept Apple Pay, Google Pay, Samsung Pay, and contactless cards. Over 80% of in-store transactions in the UK are now contactless. A tap takes under 2 seconds. For amounts over £100, the customer enters their PIN. Your business accepts every way a customer wants to pay — fast, secure, and without friction.' },
  { icon: Percent, title: 'Competitive Transaction Rates', description: 'Low commission on every transaction. No monthly minimums, no hidden fees, no penalties for low volume. The rate you are quoted is the rate you pay. For a small business processing £5,000 per month, competitive rates mean hundreds of pounds saved annually compared to high-street bank terminal deals.' },
  { icon: Zap, title: 'Fast Settlement', description: 'Funds settle into your bank account quickly. Next-day settlement is available so your cash flow stays healthy. No waiting 3 to 5 working days for your money. For a small business where every pound matters, fast settlement means you can pay suppliers, cover rent, and reinvest without delays.' },
  { icon: ShieldCheck, title: 'PCI Compliant & Secure', description: 'Every terminal is PCI DSS compliant. Card data is encrypted end-to-end — it never touches your POS system. Customers can pay with confidence knowing their payment details are protected. Compliance is handled for you — no annual audits, no security questionnaires, no IT overhead.' },
];

const benefits = [
  { title: 'Accept Cards from Day One', description: 'Get set up with a card terminal quickly and start accepting payments immediately. No lengthy application processes, no waiting weeks for approval. A small business that opens with card payments captures every sale from the first customer. Cash-only businesses lose an estimated 20% of potential transactions.' },
  { title: 'Save Money on Transaction Fees', description: 'Competitive rates through Teya mean you keep more of every sale. Compare your current rates — many small businesses are paying more than they need to. Switching to a lower rate on £5,000 monthly turnover can save £300 to £600 per year. That saving goes straight to your bottom line.' },
  { title: 'Improve Cash Flow with Fast Settlement', description: 'Next-day settlement means the money from today\'s sales is in your account tomorrow. No more waiting days for funds to clear. Pay suppliers on time, cover weekly costs, and invest in stock without cash flow gaps. Fast settlement is especially valuable for businesses with tight working capital.' },
  { title: 'Integrate with Your POS', description: 'When the PDQ machine is integrated with your Posso POS, the sale amount transfers automatically to the terminal. No re-keying, no errors, no discrepancies between POS and payment records. End-of-day reconciliation takes minutes instead of hours. Integration is included at no extra cost.' },
];

export default function PdqMachineSmallBusinessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'PDQ Machine for Small Business' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <CreditCard className="w-3 h-3 mr-2" />
                CARD PAYMENTS FOR SMALL BUSINESS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  PDQ Machine for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Small Business
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Card payment terminals with Teya integration, contactless payments, competitive rates, and fast settlement — accept every payment from day one.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Contactless, chip and PIN, Apple Pay, Google Pay</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission with transparent pricing</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">PDQ Machine Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything a small business needs to accept card payments securely, quickly, and at competitive rates.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Small Businesses Choose Posso PDQ</h2>
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
                Standalone Terminal or Full POS Integration
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  If you just need a <strong className="text-white">card terminal</strong>, the PDQ machine works as a standalone device. Key in the amount and the customer taps or inserts their card. Simple, fast, and effective for market stalls, pop-up shops, and businesses that do not need a full POS.
                </p>
                <p>
                  For businesses that want the full picture, <strong className="text-white">integrate the PDQ machine with a Posso POS</strong>. The sale amount transfers automatically from the till to the terminal. No re-keying, no errors. Every transaction is recorded with the items sold, the payment method, and the settlement status.
                </p>
                <p>
                  Either way, you get <strong className="text-white">competitive rates, fast settlement, and low commission</strong> through our Teya partnership. No long-term contracts. No hidden fees. If you find a better rate, we will review it.
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
                <Link href="/pdq-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full payment hardware</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS</p>
                  <p className="text-slate-400 text-sm mt-1">Portable card acceptance</p>
                </Link>
                <Link href="/homeware-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Homeware POS</p>
                  <p className="text-slate-400 text-sm mt-1">Retail POS for shops</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="PDQ Machine for Small Business — Frequently Asked Questions" faqs={[
          { question: 'What payment methods does the PDQ machine accept?', answer: 'The terminal accepts all major card brands: Visa, Mastercard, American Express, and Diners Club. It supports chip and PIN, contactless tap, Apple Pay, Google Pay, and Samsung Pay. Contactless transactions process in under 2 seconds. Your customers can pay however they prefer.' },
          { question: 'What are the transaction rates?', answer: 'We offer competitive rates through our Teya partnership. Rates are transparent with no hidden fees, no monthly minimums, and no penalties for low volume. The exact rate depends on your business type and expected transaction volume. Contact us for a personalised quote — we are confident our rates will be competitive.' },
          { question: 'How fast is settlement?', answer: 'Next-day settlement is available. The money from today\'s card transactions can be in your bank account tomorrow. Standard settlement is 1 to 2 working days. Fast settlement keeps your cash flow healthy and means you can pay suppliers and cover costs without waiting.' },
          { question: 'Do I need a POS system to use the PDQ machine?', answer: 'No. The PDQ machine works as a standalone terminal. Simply key in the amount and the customer pays. However, integrating with a Posso POS gives you automatic amount transfer, itemised transaction records, and simplified end-of-day reconciliation. The integration is included at no extra cost.' },
          { question: 'Is there a long-term contract?', answer: 'No long-term lock-in contracts. We believe in keeping your business because you are happy, not because you are contractually obligated. Terms are straightforward and transparent. If your circumstances change, you can adjust your arrangement without penalty.' },
          { question: 'How quickly can I start accepting card payments?', answer: 'Setup is fast. Once approved, your terminal is configured and delivered within days. Plug it in, connect to WiFi or 4G, and start accepting payments. If you are combining it with a Posso POS system from £499 + VAT, we configure the integration during installation.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
