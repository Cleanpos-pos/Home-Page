import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, AlertTriangle, Scale, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Software Free',
  description:
    'Restaurant Software Free — what free restaurant POS software really offers, the limitations you need to know, hidden costs, and when to upgrade to a full system. POS from £499 + VAT.',
  keywords: [
    'restaurant software free',
    'free restaurant pos',
    'free restaurant software',
    'free epos restaurant',
    'restaurant pos free trial',
    'free till software restaurant',
    'open source restaurant pos',
    'free pos system restaurant',
    'cheap restaurant software',
    'restaurant software free uk',
  ],
  alternates: {
    canonical: '/restaurant-software-free',
  },
  openGraph: {
    title: 'Restaurant Software Free | Posso UK',
    description:
      'Restaurant Software Free — what free POS really offers, limitations, hidden costs, and the clear upgrade path to a full system.',
    url: 'https://posso.co.uk/restaurant-software-free',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Restaurant software with free trial and affordable upgrade path — table management, kitchen display, online ordering, inventory control, and full reporting for restaurants of all sizes.',
    url: 'https://posso.co.uk/restaurant-software-free',
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
      reviewCount: '231',
      bestRating: '5',
    },
    featureList: [
      'Free demo and trial period available',
      'Table management and floor plan editor',
      'Kitchen display system with course firing',
      'Online ordering at low commission',
      'Full inventory and recipe costing',
      'Affordable upgrade from £499 + VAT',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant Software Free', item: 'https://posso.co.uk/restaurant-software-free' },
    ],
  },
];

const features = [
  { icon: AlertTriangle, title: 'What Free Software Includes', description: 'Most free restaurant POS systems offer basic order entry, a simple product list, and rudimentary sales reports. They handle the minimum: take an order, calculate a total, process a payment. For a brand-new restaurant testing the waters, this covers day one. But free software is designed to get you started, not to run a growing business long term.' },
  { icon: Scale, title: 'The Limitations You Hit', description: 'Free tiers typically cap the number of products, users, or transactions. Kitchen display systems, table management, online ordering, and detailed analytics are locked behind paid plans. Support is community forums, not a phone line. When service breaks down on a Saturday night, there is no one to call. The "free" label hides the cost of lost revenue from missing features.' },
  { icon: DollarSign, title: 'Hidden Costs of Free', description: 'Free POS software often monetises through payment processing fees that are 0.5-1% higher than standard rates. On £500,000 annual card turnover, that is £2,500-£5,000 extra per year in processing fees alone. Add the cost of workarounds for missing features — spreadsheets for stock, paper for kitchen orders — and free becomes expensive quickly.' },
  { icon: TrendingUp, title: 'When to Upgrade', description: 'The moment you need kitchen printing, table management, online ordering, staff permissions, or detailed reporting, free software runs out. If you are processing more than 50 orders per day, the limitations will cost you more in inefficiency than a proper system costs in monthly fees. The right time to upgrade is before the limitations start losing you money.' },
  { icon: Zap, title: 'The Posso Upgrade Path', description: 'Posso offers a full restaurant POS from £499 + VAT with everything free software lacks — KDS, table management, online ordering at low commission, inventory control, and UK phone support. Finance from £24.92 per week. Free setup and training included. You get a system built for restaurants, not a generic tool with restaurant features bolted on.' },
  { icon: Shield, title: 'UK Support and Compliance', description: 'A proper restaurant POS comes with UK-based phone support, HMRC-compliant reporting, GDPR data handling, and a 2-year hardware warranty. Free software offers none of these. When HMRC requires Making Tax Digital compliance or a card terminal stops working during service, you need a provider who answers the phone — not a community forum.' },
];

const benefits = [
  { title: 'Start Free, Scale Smart', description: 'There is nothing wrong with starting on free software to test your concept. But plan your upgrade path from day one. Choose a provider that offers a free demo or trial of the full system so you can compare what free gives you versus what you actually need. The gap between free and paid is often smaller than the cost of the workarounds.' },
  { title: 'Calculate the True Cost', description: 'Compare the total cost: free software with higher processing fees and missing features versus a paid system at £499 + VAT with standard processing rates. Factor in the staff time spent on manual workarounds, the orders lost to missing online ordering, and the waste from no inventory tracking. In most cases, the paid system is cheaper within three months.' },
  { title: 'Get Proper Kitchen Operations', description: 'Free restaurant software rarely includes a kitchen display system. That means paper tickets, shouted orders, and missed courses. A proper KDS routes orders to the right station, fires courses on time, and tracks preparation speed. The efficiency gain alone — fewer remakes, faster table turns — pays for the upgrade.' },
  { title: 'Own Your Customer Data', description: 'Free POS platforms often retain rights over your customer data or limit your ability to export it. A system you own from £499 + VAT means your customer database, transaction history, and business intelligence belong to you. When you switch providers or scale up, your data comes with you.' },
];

export default function RestaurantSoftwareFreePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Restaurant Software Free' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Scale className="w-3 h-3 mr-2" />
                FREE VS PAID — THE HONEST COMPARISON
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Restaurant Software{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Free
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                What free restaurant software really offers, where the limitations hit, the hidden costs, and a clear upgrade path when you outgrow the free tier.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Honest comparison of free vs paid POS</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full restaurant POS from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Free demo available — no commitment</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Free Restaurant Software — The Full Picture</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                An honest look at what free gives you, what it does not, and when you need more.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Making the Right Choice</h2>
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
                The Real Cost of Free Restaurant Software
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Free restaurant software is a <strong className="text-white">marketing strategy, not a business model</strong>. The provider needs to make money somewhere — usually through higher payment processing fees, premium feature upsells, or advertising. Understanding where the revenue comes from tells you where the hidden costs lie.
                </p>
                <p>
                  A restaurant doing <strong className="text-white">£8,000 per week in card payments</strong> might pay 1.5% on a free POS versus 1.0% on a paid system. That 0.5% difference is £40 per week, or £2,080 per year. The Posso POS costs £499 + VAT. The maths is straightforward — the paid system saves money from month five onwards.
                </p>
                <p>
                  Beyond fees, consider the <strong className="text-white">operational cost of missing features</strong>. No KDS means paper tickets and verbal communication — leading to wrong orders and remakes. No table management means manual floor plans and double-bookings. No online ordering means losing customers to competitors who offer it. Each missing feature has a revenue cost.
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
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Complete POS software</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant Software Free — Frequently Asked Questions" faqs={[
          { question: 'Is free restaurant software really free?', answer: 'The software itself may cost nothing to download, but free POS systems typically generate revenue through higher payment processing fees (0.5-1% above standard rates), premium feature upsells, and limited support. A restaurant processing £400,000 in card payments annually could pay £2,000-£4,000 extra in fees compared to a system with standard rates.' },
          { question: 'What features are missing from free restaurant POS?', answer: 'Free tiers typically exclude kitchen display systems, table management with floor plans, online ordering integration, detailed inventory control, staff management with permissions, advanced reporting, and phone support. These are the features that drive efficiency in a busy restaurant — and they are usually locked behind a paid subscription.' },
          { question: 'When should I upgrade from free to paid?', answer: 'Upgrade when you are processing more than 50 orders per day, need kitchen printing or a KDS, want online ordering, require table management for reservations, or need reliable phone support. If your staff are using spreadsheets or paper to fill gaps in the free software, you have already passed the tipping point.' },
          { question: 'How much does a proper restaurant POS cost?', answer: 'The Posso restaurant POS starts from £499 + VAT for the complete system including touchscreen terminal, kitchen display software, table management, and UK phone support. Finance is available from £24.92 per week. Online ordering is available at low commission. Free setup, menu configuration, and staff training are included.' },
          { question: 'Can I migrate my data from free software to Posso?', answer: 'Yes. The Posso team handles data migration as part of the free setup process. Your product catalogue, customer database, and pricing structure are transferred to the new system. The transition is managed to minimise disruption — typically completed in one day with training for your staff included.' },
          { question: 'Do you offer a free trial?', answer: 'Yes. Posso offers a free demo where we set up the full system with your menu and show you exactly how it works in your environment. You see every feature working with your actual products before making any commitment. There is no obligation and no card details required for the demo.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
