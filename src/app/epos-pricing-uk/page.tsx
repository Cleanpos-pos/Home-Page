import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, PoundSterling } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPOS Pricing UK',
  description:
    'Published EPOS pricing for UK hospitality. Complete systems £499 + VAT, kiosks from £699, kitchen display £399, delivery integration £45/month. No quote-form games.',
  keywords: [
    'epos pricing uk',
    'epos system price',
    'pos system cost uk',
    'epos system cost',
    'how much does an epos system cost',
    'till system price uk',
    'restaurant pos pricing',
    'takeaway epos price',
    'self order kiosk price',
    'kitchen display system price',
  ],
  alternates: {
    canonical: '/epos-pricing-uk',
  },
  openGraph: {
    title: 'EPOS Pricing UK | Posso UK',
    description:
      'Published EPOS pricing for UK hospitality — complete systems £499 + VAT, kiosks from £699 + VAT, kitchen display £399 + VAT, and every ongoing cost listed.',
    url: 'https://www.posso.co.uk/epos-pricing-uk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Published Posso EPOS pricing for UK hospitality businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPOS Pricing UK | Posso UK',
    description:
      'Published EPOS pricing for UK hospitality — complete systems £499 + VAT, kiosks from £699 + VAT, and every ongoing cost listed.',
    site: '@posso_uk',
    creator: '@posso_uk',
    images: ['/og-image.png'],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso EPOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Complete EPOS system for UK hospitality with published pricing: touchscreen till, kitchen printing, online ordering, kiosks, kitchen display, delivery management and card payments.',
    url: 'https://www.posso.co.uk/epos-pricing-uk',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'EPOS Pricing UK', item: 'https://www.posso.co.uk/epos-pricing-uk' },
    ],
  },
];

const oneOffPrices = [
  ['Complete EPOS system — touchscreen till, kitchen printer, cash drawer, receipt printer, software', 'From £499 + VAT'],
  ['Twin-screen upgrade (customer-facing display)', '+£150'],
  ['Extra kitchen printer', '£99 each'],
  ['21-inch kitchen display screen', '£399 + VAT'],
  ['Self-order kiosk', 'From £699 + VAT'],
  ['Handheld order device', '£259'],
  ['Branded website with online ordering', '£450 (hosting free with Posso ordering)'],
  ['Menu build, configuration and staff training', 'Included'],
  ['Hardware warranty', '2 years, included'],
];

const ongoingPrices = [
  ['Software licence', 'From £25 + VAT a month, covering the core system, updates and cloud features — your exact figure is confirmed on your quote'],
  ['Online ordering on your own site', 'Included — the customer pays a 60p service fee per order; your business pays only card processing'],
  ['Just Eat / Uber Eats / Deliveroo integration', '£45/month, unlimited orders'],
  ['Own delivery drivers — driver app and dispatch', '30p per delivery, no per-driver licence fee'],
  ['AI phone ordering', '£1 per order, free dedicated number, free setup'],
  ['Card processing — Posso Pay', 'Rate quoted on your card turnover — same rate in store and online'],
  ['Finance', 'From £24.92 per week over 12, 24 or 36 months, subject to status'],
];

export default function EposPricingUkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'EPOS Pricing UK' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <PoundSterling className="w-3 h-3 mr-2" />
                PUBLISHED PRICING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  EPOS Pricing{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  UK
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Most UK EPOS providers make you request a quote to learn a price. Here is ours, published — every one-off cost, every ongoing cost, nothing hidden in the small print.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete EPOS systems from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Software from £25 + VAT a month</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Menu build, setup and training included</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get Your Exact Quote <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick answer — clearly delimited for AI extraction */}
        <section className="pb-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto glass-card rounded-xl border border-primary/30 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Short answer
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                A complete Posso EPOS system costs £499 + VAT up front — touchscreen till, kitchen printer, cash drawer, receipt printer and software, with menu build, staff training and a 2-year warranty included. Ongoing costs are the software fee from £25 + VAT a month, plus optional extras: £45/month for marketplace integration, 30p per delivery for your own drivers, and card processing quoted on your turnover. Finance is available from £24.92 per week.
              </p>
            </div>
          </div>
        </section>

        {/* One-off pricing table */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">One-Off Costs</h2>
                <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                  Hardware and setup. You buy it, you own it — no leases, no rental, no obligation to return equipment.
                </p>
              </div>
              <div className="glass-card rounded-2xl border border-slate-700/50 p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th scope="col" className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400">Item</th>
                        <th scope="col" className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {oneOffPrices.map((row) => (
                        <tr key={row[0]} className="border-b border-slate-800 align-top last:border-b-0">
                          <th scope="row" className="py-3 pr-4 font-medium text-white">{row[0]}</th>
                          <td className="py-3 pr-4 text-slate-300">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing pricing table */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Ongoing &amp; Per-Use Costs</h2>
                <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                  Everything that recurs, and exactly when it applies. Most of these are optional — you pay only for the services you actually use.
                </p>
              </div>
              <div className="glass-card rounded-2xl border border-slate-700/50 p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th scope="col" className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400">Service</th>
                        <th scope="col" className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ongoingPrices.map((row) => (
                        <tr key={row[0]} className="border-b border-slate-800 align-top last:border-b-0">
                          <th scope="row" className="py-3 pr-4 font-medium text-white">{row[0]}</th>
                          <td className="py-3 pr-4 text-slate-300">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to compare */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                How to Compare EPOS Pricing Properly
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The headline price is the least useful number in EPOS. What matters is the{' '}
                  <strong className="text-white">36-month total</strong>: upfront hardware, plus every monthly
                  line you need to open on Monday — software, online ordering, kitchen display, loyalty —
                  plus card processing at your real monthly card takings.
                </p>
                <p>
                  Do that arithmetic and the differences between providers get large quickly. A system with a
                  low headline price but a{' '}
                  <strong className="text-white">ladder of monthly add-ons</strong> — £25/month for ordering,
                  £19/month for the kitchen screen, £15/month for loyalty — often costs more over three years
                  than one with a higher upfront price and those features included. Our{' '}
                  <Link href="/posso-vs-epos-now" className="text-primary hover:underline">Posso vs Epos Now comparison</Link>{' '}
                  works through a real example, and the{' '}
                  <Link href="/epos-now-alternative" className="text-primary hover:underline">Epos Now alternative guide</Link>{' '}
                  lists the questions to put to any provider before you sign.
                </p>
                <p>
                  One honest caveat about our own pricing: card processing through Posso Pay is{' '}
                  <strong className="text-white">quoted on your card turnover</strong> rather than published as
                  one flat figure, because rates depend on your volume. Ask for your quote in writing on your
                  real numbers — from us and from anyone else you are comparing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cluster links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Keep Researching</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/buy-epos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Buy an EPOS System</p>
                  <p className="text-slate-400 text-sm mt-1">What&apos;s included &amp; how to order</p>
                </Link>
                <Link href="/how-much-does-a-pos-system-cost-for-a-restaurant" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant POS Costs</p>
                  <p className="text-slate-400 text-sm mt-1">Full cost breakdown guide</p>
                </Link>
                <Link href="/finance" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Finance Calculator</p>
                  <p className="text-slate-400 text-sm mt-1">From £24.92 per week</p>
                </Link>
                <Link href="/posso-vs-epos-now" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Posso vs Epos Now</p>
                  <p className="text-slate-400 text-sm mt-1">Honest side-by-side</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="EPOS Pricing UK — Frequently Asked Questions" faqs={[
          { question: 'How much does an EPOS system cost in the UK?', answer: 'A complete Posso EPOS system costs £499 + VAT, including the touchscreen till, kitchen printer, cash drawer, receipt printer, software licence, menu build and staff training. Self-order kiosks start at £699 + VAT, a 21-inch kitchen display screen is £399 + VAT, and extra kitchen printers are £99 each. Finance is available from £24.92 per week.' },
          { question: 'Are there monthly software fees?', answer: 'Yes — software is from £25 + VAT a month, covering the core system, software updates and cloud features, with your exact figure confirmed on your quote. The other fixed monthly charge is the £45/month Just Eat, Uber Eats and Deliveroo integration — and only if you use it.' },
          { question: 'What does online ordering cost?', answer: 'Branded online ordering on your own domain is included with the system. A 60p service fee is added to the customer’s order at checkout, so on direct orders the only cost your business pays is card processing. A full branded website with online table booking is £450 if you need one built, with hosting free.' },
          { question: 'How much does the card processing cost?', answer: 'Card processing runs through Posso Pay, Posso’s own merchant service. Rates are quoted on your card turnover rather than published as one flat figure, and the same rate applies to in-store terminals and the online payment gateway. Ask for your quote in writing based on your real monthly takings.' },
          { question: 'What does delivery management cost?', answer: 'Marketplace integration for Just Eat, Uber Eats and Deliveroo is £45/month with unlimited orders. Running your own drivers — driver app, zones, assignment and dispatch — costs 30p per delivery with no per-driver licence fee. AI phone ordering is £1 per order with a free dedicated number.' },
          { question: 'Is installation included in the price?', answer: 'Setup — menu build and equipment configuration — is included at no cost, and systems arrive pre-configured with your menu loaded. Staff training is included too. Larger multi-terminal sites that need an engineer on site are quoted separately.' },
          { question: 'Can I spread the cost?', answer: 'Yes. Finance is available from £24.92 per week over 12, 24 or 36 months, subject to status, with no large deposit. The system is delivered and installed straight away, so you trade from day one while spreading the cost.' },
        ]} />

        <DemoEnquiry
          heading="Get Your Exact Quote"
          intro="Tell us about your business and we'll send a detailed quote within 24 hours — every item listed, one total price, no hidden fees."
        />
      </main>
      <Footer />
    </div>
  );
}
