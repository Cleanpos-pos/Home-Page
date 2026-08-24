import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Megaphone, Users, Target, BarChart3, Gift, Mail } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS Marketing',
  description:
    'ePOS Marketing tools built into your point of sale — run promotions, loyalty programmes, customer segmentation, and targeted campaigns directly from your till system. From £499 + VAT.',
  keywords: [
    'epos marketing',
    'pos marketing tools',
    'epos promotions',
    'pos loyalty programme',
    'epos customer data',
    'pos targeted campaigns',
    'epos marketing features',
    'till system marketing',
    'pos crm',
    'epos marketing uk',
  ],
  alternates: {
    canonical: '/epos-marketing',
  },
  openGraph: {
    title: 'ePOS Marketing | Posso UK',
    description:
      'ePOS Marketing tools built into your POS — promotions, loyalty, customer segmentation, and targeted campaigns from your till.',
    url: 'https://www.posso.co.uk/epos-marketing',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS Marketing',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'ePOS marketing tools including promotions engine, digital loyalty programmes, customer segmentation, targeted SMS and email campaigns, and real-time marketing analytics built into your point of sale.',
    url: 'https://www.posso.co.uk/epos-marketing',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Built-in promotions engine with scheduling',
      'Digital loyalty programmes with auto-rewards',
      'Customer segmentation by spend and frequency',
      'Targeted SMS and email campaigns',
      'Real-time marketing performance analytics',
      'Automated birthday and anniversary offers',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'ePOS Marketing', item: 'https://www.posso.co.uk/epos-marketing' },
    ],
  },
];

const features = [
  { icon: Gift, title: 'Promotions Engine', description: 'Create buy-one-get-one, percentage discounts, happy hour pricing, and bundle deals directly from the POS. Schedule promotions in advance — a Monday lunchtime offer activates and deactivates automatically. No manual intervention, no forgotten price changes, no margin leakage from expired deals running past their end date.' },
  { icon: Users, title: 'Digital Loyalty Programmes', description: 'Replace paper punch cards with a digital loyalty system that tracks every qualifying purchase. Customers earn points or stamps automatically at the till. Rewards are redeemed in one tap. You see exactly which customers are loyal, how often they visit, and what they spend — data that paper cards never provided.' },
  { icon: Target, title: 'Customer Segmentation', description: 'The POS collects transaction data and builds customer profiles automatically. Segment your database by spend level, visit frequency, favourite products, and last visit date. Identify your top 20% of customers who drive 80% of revenue. Find lapsed customers who have not visited in 30 days. Every segment is actionable.' },
  { icon: Mail, title: 'Targeted Campaigns', description: 'Send SMS or email campaigns to specific customer segments directly from your dashboard. A "We miss you" message to lapsed customers with a 15% discount code. A new menu announcement to your highest spenders. Campaign delivery, open rates, and redemption are tracked so you know exactly what works and what does not.' },
  { icon: BarChart3, title: 'Marketing Analytics', description: 'Every promotion, loyalty reward, and campaign generates data. See redemption rates, incremental revenue, customer acquisition cost, and lifetime value in real-time dashboards. Compare the performance of different offers side by side. Make marketing decisions based on actual transaction data, not guesswork.' },
  { icon: Megaphone, title: 'Automated Triggers', description: 'Set up automated marketing triggers that fire without manual effort. A birthday offer sent 3 days before the date. A re-engagement message after 14 days of inactivity. A thank-you reward after the 10th visit. These automated workflows run continuously in the background, driving repeat visits while you focus on operations.' },
];

const benefits = [
  { title: 'Turn Transaction Data into Revenue', description: 'Every sale generates marketing intelligence. The POS captures who bought what, when, and how often — then turns that data into targeted offers that drive repeat visits. Businesses using built-in POS marketing see an average 18% increase in repeat customer frequency within the first three months.' },
  { title: 'Reduce Marketing Spend Waste', description: 'Stop sending blanket offers to your entire database. Customer segmentation means you send the right offer to the right person at the right time. A 15% discount to a lapsed customer costs less than a 15% discount to someone who visits daily anyway. Targeted campaigns deliver higher redemption rates at lower total cost.' },
  { title: 'Automate Customer Retention', description: 'Loyalty programmes and automated triggers work around the clock without staff involvement. Birthday offers, re-engagement messages, and milestone rewards fire automatically. Your marketing runs itself while you manage the business. No marketing team required — the POS handles it.' },
  { title: 'Measure Everything', description: 'Every promotion has a clear ROI. See how many customers redeemed an offer, what they spent, and whether they returned again. Compare campaigns against each other. Double down on what works, cut what does not. Marketing accountability built into the till system you already use every day.' },
];

export default function EposMarketingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'ePOS Marketing' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Megaphone className="w-3 h-3 mr-2" />
                MARKETING BUILT INTO YOUR POS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Promotions, loyalty programmes, customer segmentation, and targeted campaigns — all built into your ePOS system. Turn every transaction into a marketing opportunity.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Run promotions and loyalty from the till</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Targeted SMS and email campaigns</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> ePOS marketing system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">ePOS Marketing Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every marketing tool you need, built directly into the point of sale you already use.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose ePOS Marketing</h2>
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
                Marketing That Pays for Itself
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most businesses collect customer data but never use it. The Posso ePOS marketing system <strong className="text-white">activates your transaction data automatically</strong>. Every sale builds a richer customer profile. Every profile enables a more targeted offer. Every targeted offer drives a higher redemption rate than a generic discount.
                </p>
                <p>
                  The <strong className="text-white">promotions engine</strong> handles everything from simple percentage discounts to complex multi-buy offers with time-based scheduling. Set a Friday happy hour that activates at 4pm and expires at 7pm — automatically, every week, without staff remembering to change prices.
                </p>
                <p>
                  For multi-site businesses, marketing campaigns can be <strong className="text-white">rolled out across all locations</strong> from a single dashboard or tailored to individual sites. A promotion that works in one location can be replicated everywhere in minutes.
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
                <Link href="/epos-portal" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Portal</p>
                  <p className="text-slate-400 text-sm mt-1">Cloud management dashboard</p>
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

        <FAQSection title="ePOS Marketing — Frequently Asked Questions" faqs={[
          { question: 'What marketing tools are built into the ePOS?', answer: 'The Posso ePOS includes a promotions engine for discounts, BOGOF, and bundle deals with scheduling. A digital loyalty programme with automatic stamp or point collection. Customer segmentation by spend, frequency, and product preference. Targeted SMS and email campaigns. Automated triggers for birthdays, lapsed customers, and milestones. Real-time marketing analytics with redemption tracking.' },
          { question: 'How does customer segmentation work?', answer: 'Every transaction builds a customer profile automatically. The system segments customers by total spend, visit frequency, favourite products, average basket value, and days since last visit. You can create custom segments — for example, customers who spend over £50 per month but have not visited in 14 days. Each segment can receive targeted offers.' },
          { question: 'Can I send SMS and email campaigns from the POS?', answer: 'Yes. From the cloud dashboard, select a customer segment and compose an SMS or email with a promotion code. The system tracks delivery, opens, and redemptions. You see exactly how many customers received the message, how many used the code, and how much incremental revenue the campaign generated.' },
          { question: 'How do automated marketing triggers work?', answer: 'You set the trigger once and it runs continuously. Examples: send a birthday offer 3 days before the customer birthday. Send a re-engagement message after 14 days of inactivity. Send a thank-you reward after the 10th visit. Each trigger has its own performance metrics so you can see which automations drive the most revenue.' },
          { question: 'Does ePOS marketing work for multi-site businesses?', answer: 'Yes. Marketing campaigns can be deployed across all sites from the central dashboard or customised per location. Loyalty programmes work across all your branches — a customer earns points at one site and redeems at another. Campaign performance is reported by site and as a group.' },
          { question: 'How much does ePOS marketing cost?', answer: 'ePOS marketing tools are included with the Posso POS system from £499 + VAT. Loyalty programmes, promotions engine, customer segmentation, and analytics are all built in. SMS campaigns are charged per message at low rates. No separate marketing software subscription required.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
