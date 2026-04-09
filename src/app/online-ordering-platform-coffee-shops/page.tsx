import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Coffee, Globe, Users, Zap, BarChart3, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Ordering Platform for Coffee Shops',
  description:
    'Online Ordering Platform for Coffee Shops with multi-location management, branded storefront, loyalty integration, and real-time order routing to barista displays. From £499 + VAT.',
  keywords: [
    'online ordering platform coffee shops',
    'coffee shop online ordering',
    'coffee shop ordering system',
    'online ordering for coffee shops',
    'coffee shop order platform',
    'multi location coffee ordering',
    'coffee shop digital ordering',
    'coffee chain ordering platform',
    'coffee shop ecommerce',
    'coffee shop online orders uk',
  ],
  alternates: {
    canonical: '/online-ordering-platform-coffee-shops',
  },
  openGraph: {
    title: 'Online Ordering Platform for Coffee Shops',
    description:
      'Online Ordering Platform for Coffee Shops with multi-location management, branded storefront, loyalty integration, and real-time barista routing.',
    url: 'https://posso.co.uk/online-ordering-platform-coffee-shops',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Online Ordering Platform for Coffee Shops',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Online ordering platform for coffee shops with multi-location management, branded digital storefront, loyalty programme integration, real-time order routing, and analytics dashboard.',
    url: 'https://posso.co.uk/online-ordering-platform-coffee-shops',
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
      reviewCount: '198',
      bestRating: '5',
    },
    featureList: [
      'Branded online storefront for coffee shops',
      'Multi-location order management',
      'Real-time order routing to barista display',
      'Built-in loyalty programme',
      'Customer analytics and reporting',
      'Menu scheduling and daypart control',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Online Ordering Platform for Coffee Shops', item: 'https://posso.co.uk/online-ordering-platform-coffee-shops' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Branded Online Storefront', description: 'Your coffee shop gets its own branded ordering page — your logo, your colours, your domain. Customers browse the menu, customise drinks with modifiers, and pay online. The storefront works on any device and loads in under two seconds. No third-party marketplace branding competing for attention.' },
  { icon: Coffee, title: 'Full Drink Customisation', description: 'Every drink on your online menu supports the same modifiers as your till: milk alternatives, extra shots, syrups, sizes, and temperature preferences. Prices update automatically as customers add options. A large oat milk latte with vanilla and an extra shot calculates its own price — no confusion at collection.' },
  { icon: Users, title: 'Multi-Location Management', description: 'Run ordering across two shops or twenty from one dashboard. Each location has its own menu, opening hours, and prep time estimate. Customers select their nearest branch and order from that location\'s live menu. Sales data rolls up to a central view so you compare performance across the estate.' },
  { icon: Zap, title: 'Real-Time Barista Routing', description: 'Online orders arrive on the barista display screen within seconds of payment. They sit alongside walk-in orders in a single queue. The barista sees the full drink spec, the customer name, and the estimated collection time. No separate tablet, no manual entry — orders flow straight from the customer\'s phone to the barista\'s screen.' },
  { icon: ShieldCheck, title: 'Integrated Loyalty Programme', description: 'Customers earn loyalty stamps or points with every online order. Progress is visible on their order confirmation and in their account. Rewards apply automatically at checkout. The loyalty programme works across all channels — online, in-store, and mobile app — so customers earn and redeem wherever they buy.' },
  { icon: BarChart3, title: 'Order Analytics Dashboard', description: 'Track online order volume, average basket value, peak ordering times, and popular items across every location. See which drinks sell best online versus in-store. Identify trends — if iced drinks spike on Wednesdays, schedule a promotion. Data updates in real time so you react to what is happening today, not last week.' },
];

const benefits = [
  { title: 'Capture Sales Outside the Queue', description: 'Office workers, commuters, and parents on the school run order ahead and collect without waiting. You serve customers who would otherwise walk past because the queue is too long. Every online order is incremental revenue that does not add pressure to your counter.' },
  { title: 'Reduce Third-Party Commission', description: 'Orders through your own platform carry low commission compared to 25–35% on third-party marketplaces. On a £4.50 latte ordered 100 times a week, the saving is substantial. Your brand, your customer data, your margin.' },
  { title: 'Build Direct Customer Relationships', description: 'When customers order through your platform, you own the relationship. You see their order history, preferences, and visit frequency. Send targeted promotions to lapsed customers or reward your most loyal regulars — something no third-party marketplace lets you do.' },
  { title: 'Scale Across Locations Effortlessly', description: 'Open a new site and add it to the platform in minutes. The menu templates, loyalty rules, and branding carry over. Customers ordering from the new location get the same experience. Central reporting means you monitor the entire chain without logging into separate systems.' },
];

export default function OnlineOrderingPlatformCoffeeShopsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Online Ordering Platform for Coffee Shops' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Globe className="w-3 h-3 mr-2" />
                ONLINE ORDERING FOR COFFEE SHOPS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Online Ordering Platform for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coffee Shops
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Give your customers a branded ordering experience — browse, customise, pay, and collect. Orders route directly to your barista display. Multi-location ready from day one.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Branded storefront with full drink customisation</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Multi-location management from one dashboard</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS system from £499 + VAT, low commission on orders</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Platform Features for Coffee Shops</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything you need to take orders online, route them to your baristas, and grow your coffee business.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Coffee Shops Choose Our Platform</h2>
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
                From Independent Cafes to National Coffee Chains
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A single-site coffee shop benefits from <strong className="text-white">capturing orders that would otherwise be lost</strong> to long queues. Customers order from their desk, their car, or while walking — and collect a ready-made drink without waiting. That is revenue you were not getting before.
                </p>
                <p>
                  For chains with multiple locations, the platform provides <strong className="text-white">centralised control with local flexibility</strong>. Head office sets the brand standards, core menu, and loyalty rules. Each site manager adjusts opening hours, local specials, and prep times. Reporting rolls up to a single dashboard.
                </p>
                <p>
                  Unlike third-party delivery apps that charge 25–35% commission and own your customer data, <strong className="text-white">your platform charges low commission</strong> and gives you complete access to order history, customer preferences, and marketing tools. Your brand stays front and centre.
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
                  <p className="text-slate-400 text-sm mt-1">Till system for coffee shops</p>
                </Link>
                <Link href="/mobile-ordering-platform-coffee-shops" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile-first coffee ordering</p>
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

        <FAQSection title="Online Ordering Platform for Coffee Shops — FAQ" faqs={[
          { question: 'How quickly can we launch online ordering?', answer: 'Most coffee shops go live within 48 hours. We configure your branded storefront, upload your menu with all modifiers, connect it to your POS, and test the order flow end to end. Your team receives a walkthrough so they know exactly how online orders appear on the barista display.' },
          { question: 'Do customers need to download an app?', answer: 'No. The online ordering platform works through a web browser on any device. Customers tap a link, browse the menu, customise their drink, and pay — all without installing anything. You can optionally offer a branded app for repeat customers who prefer an app experience.' },
          { question: 'How does multi-location ordering work?', answer: 'Customers select their preferred location when they open the platform. Each location has its own menu, opening hours, and estimated prep time. Orders route to the correct barista display at the selected branch. You manage all locations from a single dashboard with consolidated reporting.' },
          { question: 'What commission do you charge on orders?', answer: 'Posso charges low commission on online orders — significantly less than third-party delivery platforms that take 25–35%. The exact rate depends on your volume. Contact us for a quote tailored to your coffee shop or chain.' },
          { question: 'Can customers earn loyalty points on online orders?', answer: 'Yes. The loyalty programme works across all channels. Customers earn stamps or points whether they order online, through the mobile app, or in-store at the till. Rewards apply automatically at checkout. Their loyalty balance is visible on every order confirmation.' },
          { question: 'What reporting is available for online orders?', answer: 'The analytics dashboard shows online order volume, average basket value, peak ordering times, most popular items, and revenue by location. You can compare online versus in-store performance, track customer retention, and identify trends. Reports update in real time and can be exported.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
