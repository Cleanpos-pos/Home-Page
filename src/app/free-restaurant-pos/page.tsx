import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, AlertTriangle, Eye, Scale, Shield, PoundSterling, Zap } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Restaurant POS',
  description:
    'Free Restaurant POS — what is actually free, hidden costs exposed, and how to find the best value POS for your restaurant. Honest comparison. POS from £499 + VAT.',
  keywords: [
    'free restaurant pos',
    'free pos system restaurant',
    'free restaurant till',
    'free epos restaurant',
    'cheap restaurant pos',
    'best value restaurant pos',
    'restaurant pos cost',
    'free pos software restaurant',
    'restaurant pos comparison',
    'free restaurant pos uk',
  ],
  alternates: {
    canonical: '/free-restaurant-pos',
  },
  openGraph: {
    title: 'Free Restaurant POS | Posso UK',
    description:
      'Free Restaurant POS — hidden costs exposed, what is actually free, and how to get the best value. Honest comparison guide.',
    url: 'https://www.posso.co.uk/free-restaurant-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Best-value restaurant POS system with transparent pricing, no hidden fees, and full features included. Honest alternative to "free" POS systems that charge hidden commission and transaction fees.',
    url: 'https://www.posso.co.uk/free-restaurant-pos',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Transparent pricing with no hidden fees',
      'All features included from day one',
      'Low commission on card transactions',
      'Free setup and staff training',
      'No long-term contract lock-in',
      '2-year hardware warranty included',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Free Restaurant POS', item: 'https://www.posso.co.uk/free-restaurant-pos' },
    ],
  },
];

const features = [
  { icon: Eye, title: 'Hidden Costs Exposed', description: '"Free" POS systems make money somewhere — and that somewhere is usually transaction fees, premium feature charges, and hardware markups. A system that charges 2.5% per transaction on £30,000 monthly card sales costs you £750 per month. That is £9,000 per year for a "free" system. The true cost is hidden in the small print.' },
  { icon: AlertTriangle, title: 'What "Free" Actually Means', description: 'Most free POS offers fall into three categories: free software with expensive hardware, free basic tier with paid feature unlocks, or free system with high transaction fees. The software might be free, but the card reader costs £299, the receipt printer is £199, and every feature you actually need is behind a paywall. Free rarely means free.' },
  { icon: Scale, title: 'Best Value Comparison', description: 'When you compare total cost of ownership over 2 years — hardware, software, transaction fees, support, and feature access — a transparent POS like Posso typically costs less than a "free" system. You pay a clear upfront price, get all features included, and pay low commission on transactions. No surprises, no escalating costs.' },
  { icon: Shield, title: 'No Feature Paywalls', description: 'With Posso, every feature is included from day one. Table management, kitchen display, online ordering, reporting, staff management, loyalty programmes — all included. There is no basic tier with missing features. No premium upgrade to unlock the one thing you actually need. One price, everything included.' },
  { icon: PoundSterling, title: 'Transparent Transaction Fees', description: 'Low commission on card transactions with no hidden surcharges. The rate is clear and does not change based on card type, transaction volume, or time of year. Compare this to "free" systems where the base rate looks low but interchange fees, scheme fees, and processing fees add up to 2-3% per transaction.' },
  { icon: Zap, title: 'Free Setup & Training Included', description: 'Hardware setup, software configuration, menu building, and staff training are all included at no extra charge. Many "free" POS providers charge separately for installation (£200+), configuration (£150+), and training (£100+ per session). With Posso, these are part of the package — genuinely included, not hidden behind an invoice.' },
];

const benefits = [
  { title: 'Know Your True Cost From Day One', description: 'Posso pricing is transparent. The POS system starts from £499 + VAT with all features included. Transaction fees are low commission — clearly stated before you sign up. There are no escalation clauses, no annual price increases tied to inflation, and no surprise charges six months in. You know exactly what you are paying before you commit.' },
  { title: 'Stop Overpaying on Transactions', description: 'A restaurant processing £40,000 per month in card payments at 2.5% pays £1,000 monthly in transaction fees to a "free" POS provider. At low commission with Posso, the saving is significant — potentially thousands of pounds per year. The POS hardware pays for itself in saved transaction fees within months.' },
  { title: 'Get Every Feature Without Upgrading', description: 'Free POS tiers often lack essential restaurant features: table management might require a £30/month add-on, kitchen display needs a £25/month upgrade, and online ordering costs extra. With Posso, table management, KDS, online ordering, reporting, and loyalty are all included. No nickel-and-diming, no feature fatigue.' },
  { title: 'Support That Does Not Cost Extra', description: 'Many "free" POS providers offer support only on paid plans or charge per support ticket. Posso includes phone and remote support with every system. When something goes wrong during a busy Friday service, you call 0808 175 3956 and speak to someone who can help. No support tier, no ticket queue, no extra charge.' },
];

export default function FreeRestaurantPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Free Restaurant POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <PoundSterling className="w-3 h-3 mr-2" />
                HONEST POS PRICING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Free Restaurant{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                What is actually free, what costs are hidden, and how to find the best value restaurant POS. We expose the real price of "free" so you can make an informed decision.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> All features included — no paywalls</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission on card transactions</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete restaurant POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">The Truth About Free Restaurant POS</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Before you sign up for a free POS, understand where the real costs are hiding.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Best Value Beats Free</h2>
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
                The Real Cost of Free
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Search for "free restaurant POS" and you will find dozens of options. But <strong className="text-white">free software with 2.5% transaction fees costs more than paid software with low commission</strong>. A restaurant doing £30,000 in card sales per month pays £9,000 per year in hidden transaction costs. That is not free.
                </p>
                <p>
                  Then there are the <strong className="text-white">feature paywalls</strong>. The free tier gives you basic ordering. Want table management? That is £30/month. Kitchen display? Another £25/month. Online ordering? £50/month. Loyalty programme? £20/month. By the time you have the features you need, you are paying more than a system that includes everything.
                </p>
                <p>
                  Posso takes a different approach: <strong className="text-white">transparent pricing with everything included</strong>. From £499 + VAT, you get the hardware, the software, every feature, setup, training, and a 2-year warranty. Low commission on transactions. No hidden costs. No feature upgrades to buy. The total cost of ownership is lower than most "free" alternatives.
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
                <Link href="/restaurant-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Till System</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant POS</p>
                </Link>
                <Link href="/epos-booking-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Booking System</p>
                  <p className="text-slate-400 text-sm mt-1">Table reservations</p>
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

        <FAQSection title="Free Restaurant POS — Frequently Asked Questions" faqs={[
          { question: 'Is there a genuinely free restaurant POS?', answer: 'Some providers offer free software, but the total cost includes hardware, transaction fees, and premium feature charges. A system advertised as free that charges 2.5% per transaction costs a busy restaurant thousands per year. Truly free POS systems with no catches are extremely rare — the cost is always recovered somewhere.' },
          { question: 'What hidden costs should I look for?', answer: 'Check transaction fee percentages (especially on card payments), hardware costs, monthly software fees for essential features, support charges, contract termination fees, and price escalation clauses. Add these up over 2 years and compare against the total cost of a transparent system like Posso.' },
          { question: 'How does Posso compare to free POS options?', answer: 'Posso charges a clear upfront price from £499 + VAT with all features included and low commission on transactions. Over 2 years, the total cost is typically lower than "free" systems that charge higher transaction fees and monthly add-on charges for essential features like KDS, table management, and online ordering.' },
          { question: 'Are there any long-term contracts?', answer: 'Posso does not lock you into long-term contracts with punitive exit fees. The terms are clear and straightforward. Many "free" POS providers require 2-3 year commitments with early termination fees of £1,000+. Always read the contract terms before signing up for any POS system, free or paid.' },
          { question: 'What features are included in the Posso restaurant POS?', answer: 'Everything: table management, kitchen display, online ordering, delivery management, staff login and permissions, reporting and analytics, loyalty programmes, booking management, card payment processing, and multi-site dashboard. There are no premium tiers and no feature unlocks to purchase.' },
          { question: 'How much does Posso restaurant POS cost?', answer: 'From £499 + VAT for the complete system including hardware, software, all features, setup, training, and a 2-year warranty. Card transactions at low commission. No hidden fees, no monthly add-ons, no escalating costs. Call 0808 175 3956 for a personalised quote.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
