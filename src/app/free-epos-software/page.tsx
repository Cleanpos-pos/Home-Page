import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, AlertTriangle, Scale, ShieldCheck, Zap, CreditCard, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free ePOS Software',
  description:
    'Free ePOS Software — what is really free vs hidden costs. Compare free POS options against Posso and find the best value ePOS for your restaurant. POS from £499 + VAT with no hidden fees.',
  keywords: [
    'free epos software',
    'free pos software',
    'free epos system',
    'free pos system',
    'free till software',
    'free epos software uk',
    'free restaurant pos',
    'best value epos',
    'cheap epos system',
    'affordable pos system uk',
  ],
  alternates: {
    canonical: '/free-epos-software',
  },
  openGraph: {
    title: 'Free ePOS Software | Posso UK',
    description:
      'Free ePOS Software — what is really free vs hidden costs. Compare options and find the best value POS. From £499 + VAT.',
    url: 'https://www.posso.co.uk/free-epos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Posso ePOS software — best value alternative to free POS systems. Full features including online ordering, kitchen display, delivery integration, and kiosk support with transparent pricing from £499 + VAT.',
    url: 'https://www.posso.co.uk/free-epos-software',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '210',
      bestRating: '5',
    },
    featureList: [
      'Transparent pricing — no hidden fees or forced upgrades',
      'Full POS features included from day one',
      'Online ordering with low commission',
      'Kitchen display system included',
      'Delivery platform integration included',
      'Free setup and training with 2-year warranty',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Free ePOS Software', item: 'https://www.posso.co.uk/free-epos-software' },
    ],
  },
];

const features = [
  { icon: ShieldCheck, title: 'Transparent Pricing', description: 'No free tier with forced upgrades. No features locked behind paywalls. No surprise charges after the trial ends. The Posso POS from £499 + VAT includes everything — POS, kitchen display, online ordering, and delivery integration. One price, all features.' },
  { icon: Zap, title: 'Full Features From Day One', description: 'Free POS systems restrict features to push you to paid plans. Posso includes table management, waiter pad, course firing, modifier workflows, split bills, and allergen tracking from day one. No feature gates, no premium tier, no "upgrade to unlock."' },
  { icon: CreditCard, title: 'Low Commission Online Orders', description: 'Some "free" POS systems make their money through high commission on online orders — 5-10% per transaction adds up fast. Posso charges low commission on online orders, so you keep more of every sale. Transparent pricing you can plan around.' },
  { icon: BarChart3, title: 'No Data Ransom', description: 'Free POS systems hold your data hostage. Want to export your sales history? Upgrade. Want detailed reports? Upgrade. Posso gives you full access to all your data, all reports, and full export capability included in the base price.' },
  { icon: AlertTriangle, title: 'Real Support, Not Forums', description: 'Free POS providers offer community forums for support. When your POS goes down on a Friday night, a forum post does not help. Posso includes real support — phone, email, and remote assistance from people who understand hospitality POS.' },
  { icon: Scale, title: 'Best Value, Not Just Cheapest', description: 'Free is not cheap when you add up hidden costs — high commission, paid features, premium support, hardware markup. Posso is the best value: one transparent price that includes everything a hospitality business needs. No surprises, no escalating costs.' },
];

const benefits = [
  { title: 'The Real Cost of "Free"', description: 'Free POS software has to make money somewhere. Common hidden costs include: 3-10% commission on online orders, paid premium features (table management, reporting, loyalty), forced hardware purchases at marked-up prices, and premium support charges. Add these up and "free" often costs more than a paid system.' },
  { title: 'Why Restaurants Switch From Free POS', description: 'Restaurants outgrow free POS quickly. The first time they need a feature that is locked behind a paywall, the first time support cannot help on a busy night, the first time they realise they are paying 8% commission on every online order — that is when they look for a better option.' },
  { title: 'One Price, Everything Included', description: 'Posso POS from £499 + VAT includes the full feature set: POS, kitchen display, online ordering, delivery integration, table management, reporting, and support. No paid tiers, no feature unlocks, no premium plans. The price you see is the price you pay.' },
  { title: 'Finance Makes It Affordable', description: 'If £499 upfront is too much, finance from £24.92 per week spreads the cost. You get the full system from day one and pay over time. Compare that to a "free" POS charging 8% commission on £3,000 per month in online orders — that is £240 per month in hidden costs.' },
];

export default function FreeEposSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Free ePOS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Scale className="w-3 h-3 mr-2" />
                BEST VALUE, NOT JUST CHEAPEST
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Free ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Looking for free ePOS software? Understand the hidden costs before you commit. Then compare against Posso — the best value POS for hospitality with transparent pricing and no surprises.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> All features included — no paid upgrades</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission on online orders</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete ePOS from £499 + VAT — no hidden fees</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Why "Free" Costs More Than You Think</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Free ePOS software has hidden costs that add up fast. Here is what to watch for — and why Posso is the better value.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">The Value Comparison</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">Free vs Posso: A 12-Month Comparison</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Scenario: a restaurant doing £5,000 per month in online orders and needing table management, kitchen display, and reporting.
                </p>
                <p>
                  <strong className="text-white">Free POS option:</strong> £0 software + 8% online order commission (£400/month) + premium features £49/month + premium support £29/month = <strong className="text-white">£5,736 per year</strong> in ongoing costs alone.
                </p>
                <p>
                  <strong className="text-white">Posso:</strong> £499 + VAT one-off + low commission on online orders = <strong className="text-white">significantly less per year</strong>. All features included. Real support included. No premium tier. The maths speaks for itself.
                </p>
                <p>
                  The free POS costs more in 2 months of commission than the entire Posso system. After 12 months, the gap is thousands of pounds. "Free" is the most expensive option.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">See What You Get With Posso</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full feature list</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Low commission</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Included free</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Free ePOS Software — Frequently Asked Questions" faqs={[
          { question: 'Is there really free ePOS software?', answer: 'Yes, some providers offer free plans — but they restrict features and charge commission on transactions. Table management, advanced reporting, kitchen display, and online ordering are typically locked behind paid plans. The "free" plan covers basic counter sales only. For a restaurant that needs hospitality features, the free plan is rarely sufficient.' },
          { question: 'What are the hidden costs of free POS software?', answer: 'Common hidden costs include: high commission on online orders (5-10%), paid premium features (table management, reporting, loyalty programmes), hardware markup (forced to buy from the provider at inflated prices), premium support charges (phone support costs extra), and data export fees. These add up to thousands per year.' },
          { question: 'How does Posso compare to free POS software?', answer: 'Posso costs £499 + VAT with all features included — POS, kitchen display, online ordering, delivery integration, table management, and reporting. No feature gates, no premium tiers, no high commission. For most restaurants, Posso costs less in the first year than a "free" POS system.' },
          { question: 'Does Posso charge commission on orders?', answer: 'Posso charges low commission on online orders through your branded website. This is significantly less than the 5-10% charged by free POS providers and the 15-35% charged by delivery platforms. The exact rate depends on your plan. There is no commission on in-store POS transactions.' },
          { question: 'Is there a free trial of Posso?', answer: 'We offer a free demo so you can see the full system in action before committing. The demo covers POS, kitchen display, online ordering, and all features. This lets you evaluate the system properly rather than committing to a free plan that limits what you can test.' },
          { question: 'Can I switch from a free POS to Posso?', answer: 'Yes. We import your menu, configure your settings, and set up the system. If your current POS allows data export, we can import your historical data too. Free setup and training are included — most restaurants are fully switched over within 48 hours.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
