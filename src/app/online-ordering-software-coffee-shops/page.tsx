import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Coffee, Award, Calendar, Smartphone, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Ordering Software for Coffee Shops',
  description:
    'Online Ordering Software for Coffee Shops with loyalty programmes, scheduled ordering, drink customisation, and POS integration. Grow direct orders and build customer loyalty. Low commission.',
  keywords: [
    'online ordering software coffee shops',
    'coffee shop ordering software',
    'coffee shop online ordering software',
    'ordering software for coffee shops',
    'coffee shop order management software',
    'online ordering app coffee shop',
    'coffee shop loyalty ordering',
    'coffee ordering software uk',
    'best coffee shop ordering software',
    'coffee shop digital ordering software',
  ],
  alternates: {
    canonical: '/online-ordering-software-coffee-shops',
  },
  openGraph: {
    title: 'Online Ordering Software for Coffee Shops | Posso UK',
    description:
      'Online Ordering Software for Coffee Shops — loyalty programmes, scheduled ordering, drink customisation, and POS integration.',
    url: 'https://www.posso.co.uk/online-ordering-software-coffee-shops',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Online Ordering Software for Coffee Shops',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Online ordering software purpose-built for coffee shops featuring loyalty rewards programmes, advance scheduled ordering, full drink customisation, and seamless POS integration.',
    url: 'https://www.posso.co.uk/online-ordering-software-coffee-shops',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Built-in loyalty rewards programme',
      'Advance and scheduled ordering',
      'Full drink customisation with pricing',
      'POS and barista workflow integration',
      'Customer analytics and segmentation',
      'Promotional campaign management',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Coffee POS', item: 'https://www.posso.co.uk/coffee-pos-system' },
      { '@type': 'ListItem', position: 3, name: 'Online Ordering Software for Coffee Shops', item: 'https://www.posso.co.uk/online-ordering-software-coffee-shops' },
    ],
  },
];

const features = [
  { icon: Award, title: 'Built-In Loyalty Programme', description: 'Digital stamp cards tracked automatically across online and in-store purchases. Buy 9 coffees, get the 10th free — no physical cards to lose. Customers see their loyalty progress when they order online. Milestone rewards (e.g. free pastry at 20 purchases) encourage long-term retention. The programme runs itself without staff involvement.' },
  { icon: Calendar, title: 'Advance Scheduled Ordering', description: 'Customers order their morning coffee the night before, scheduled for 7:45am pickup. The order enters the barista queue at the right time for fresh preparation. Regular customers set recurring orders — same coffee, same time, every weekday. Scheduled ordering spreads demand predictably and builds habitual purchasing behaviour.' },
  { icon: Coffee, title: 'Full Drink Customisation', description: 'Every option your baristas offer is available online: milk type (whole, semi-skimmed, oat, soy, almond, coconut), size, extra shots, syrup flavours, decaf, hot or iced, whipped cream, and special instructions. Customisations adjust pricing automatically. The barista display shows the exact specification — no interpretation needed.' },
  { icon: Smartphone, title: 'POS & Barista Integration', description: 'Online orders merge into the same barista display queue as counter orders. No separate tablet on the counter. The barista works one queue regardless of order source. Menu updates on the POS reflect online instantly — new seasonal drinks appear immediately, sold-out items disappear. One system, one menu, one workflow.' },
  { icon: Users, title: 'Customer Segmentation', description: 'Identify your best customers, dormant customers, and new customers automatically. See who orders daily, who has not visited in 3 weeks, and who spends the most. Segment by drink preference, visit frequency, or average spend. Use these segments for targeted promotions that actually resonate instead of generic blasts to everyone.' },
  { icon: TrendingUp, title: 'Promotional Campaigns', description: 'Create time-limited offers — happy hour 20% off between 2-4pm, free syrup shot on Mondays, double loyalty points this week. Schedule campaigns in advance and they activate automatically. Track redemption rates and revenue impact in real time. Test different offers to find what drives the most incremental revenue for your coffee shop.' },
];

const benefits = [
  { title: 'Turn One-Time Visitors Into Regulars', description: 'The loyalty programme gives every customer a reason to come back. A free coffee after 9 purchases is a tangible incentive. Combine with scheduled ordering — a customer who sets up a daily recurring order becomes a guaranteed sale every morning. The software creates habits that keep customers returning to your coffee shop, not the competition.' },
  { title: 'Protect Your Margins From Aggregators', description: 'Coffee margins are tight. A 35% aggregator commission on a £3.80 latte means you earn barely more than the cost of ingredients. Your own online ordering software charges low commission. Over 100 online orders per week, the annual saving versus aggregator platforms is substantial — money that stays in your coffee shop.' },
  { title: 'Spread Demand Across the Day', description: 'Morning rush is intense, but afternoons are quiet. Use promotional campaigns to drive off-peak orders — 20% off between 2-4pm, bonus loyalty points on afternoon orders. Scheduled ordering shows you future demand so you can staff accordingly. The software helps you fill quiet periods instead of just coping with busy ones.' },
  { title: 'Market Directly to Your Customers', description: 'Every online order gives you a customer email and order history. Send a new seasonal menu announcement to your top 100 customers. Re-engage dormant customers with a comeback offer. Thank your most loyal customers with a surprise reward. Direct marketing to known customers converts far better than generic social media posts.' },
];

export default function OnlineOrderingSoftwareCoffeeShopsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Coffee POS', href: '/coffee-pos-system' },
          { label: 'Online Ordering Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Coffee className="w-3 h-3 mr-2" />
                COFFEE SHOP ORDERING SOFTWARE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Online Ordering Software for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coffee Shops
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Online ordering software with built-in loyalty, scheduled ordering, and drink customisation — designed to help coffee shops grow direct orders and build lasting customer relationships.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Built-in loyalty programme and rewards</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Advance and recurring scheduled orders</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission — POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Coffee Shop Ordering Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Software that understands coffee shop operations — loyalty, scheduling, customisation, and barista workflow.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Coffee Shops Choose Posso Online Ordering</h2>
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
                Software That Grows With Your Coffee Shop
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A coffee shop lives and dies by its regulars. The customers who come every morning, who always order the same drink, who tell their friends about your coffee. Online ordering software should <strong className="text-white">strengthen those relationships, not insert a third party between you and your customers</strong>.
                </p>
                <p>
                  The built-in loyalty programme rewards repeat behaviour automatically. Scheduled ordering turns a habit into a <strong className="text-white">guaranteed daily sale</strong>. Customer segmentation lets you identify and nurture your most valuable customers. Promotional campaigns bring back lapsed visitors. Every feature is designed to increase how often customers order and how long they stay loyal.
                </p>
                <p>
                  As your coffee shop grows — whether you open a second location, extend your menu, or add catering — the software <strong className="text-white">scales without replacement</strong>. Multi-site loyalty tracking, centralised menu management, and consolidated analytics work across any number of locations. Start with one shop and expand without changing platforms.
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
                <Link href="/coffee-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Full coffee shop POS</p>
                </Link>
                <Link href="/web-based-ordering-system-coffee-shops" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Web Based Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Click-and-collect</p>
                </Link>
                <Link href="/mobile-ordering-system-coffee-shops" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile coffee ordering</p>
                </Link>
                <Link href="/online-food-ordering-portal" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Ordering Portal</p>
                  <p className="text-slate-400 text-sm mt-1">General web ordering</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Online Ordering Software for Coffee Shops — Frequently Asked Questions" faqs={[
          { question: 'How does the loyalty programme work?', answer: 'Customers earn a digital stamp with every qualifying purchase — both in-store and online. After 9 stamps, the 10th drink is free. Progress is visible in their online account. You can configure milestone rewards (e.g. free pastry at 20 purchases) and bonus stamp promotions (double stamps on Tuesdays). The programme runs automatically with no staff action needed.' },
          { question: 'Can customers schedule recurring orders?', answer: 'Yes. A customer can set up a recurring order — for example, a large oat milk flat white with an extra shot, every weekday at 7:45am. The order enters the barista queue automatically each morning. The customer\'s card is charged per order. They can pause, modify, or cancel the recurring order at any time from their account.' },
          { question: 'Does it integrate with our existing POS?', answer: 'Yes. Online orders flow directly into your Posso POS and barista display. Menu items, prices, and availability sync in real time. Sales reports combine in-store and online transactions. Loyalty stamps accumulate across both channels. If you are considering switching your POS, the online ordering software is included in the package.' },
          { question: 'Can I run promotional offers?', answer: 'Yes. Create time-limited promotions — happy hour pricing, free syrup shot days, double loyalty points, new customer welcome offers. Schedule them in advance and they activate automatically. Track redemption rates and revenue impact in the analytics dashboard. A/B test different offers to find what works best for your customer base.' },
          { question: 'How does customer segmentation work?', answer: 'The software automatically categorises customers: daily regulars, weekly visitors, monthly visitors, dormant (no order in 30 days), new (first order in last 7 days), high spenders, and low spenders. You can create custom segments based on drink preferences, visit frequency, or average spend. Send targeted communications to each segment.' },
          { question: 'How much does the online ordering software cost?', answer: 'Online ordering software is included with the Posso coffee shop POS from £499 + VAT. Low commission per online order — significantly less than aggregator platforms. Includes loyalty programme, scheduled ordering, customer accounts, analytics, and POS integration. No setup fee. Free configuration and training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
