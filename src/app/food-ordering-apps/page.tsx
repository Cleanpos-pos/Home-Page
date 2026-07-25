import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Smartphone, Scale, PoundSterling, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Ordering Apps',
  description:
    'Food Ordering Apps compared — branded apps vs marketplaces, build your own vs off-the-shelf, commission rates, and what actually drives orders. Honest guide for UK restaurants.',
  keywords: [
    'food ordering apps',
    'food ordering app uk',
    'restaurant ordering app',
    'online food ordering system',
    'food delivery app',
    'branded ordering app',
    'food ordering platform',
    'restaurant online ordering',
    'takeaway ordering app',
    'food ordering system uk',
  ],
  alternates: {
    canonical: '/food-ordering-apps',
  },
  openGraph: {
    title: 'Food Ordering Apps | Posso UK',
    description:
      'Food Ordering Apps — branded vs marketplace, build vs buy, commission rates compared. Guide for UK restaurants.',
    url: 'https://www.posso.co.uk/food-ordering-apps',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Food Ordering App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Branded food ordering app for restaurants with direct ordering, low commission, delivery management, and POS integration. Alternative to high-commission marketplaces.',
    url: 'https://www.posso.co.uk/food-ordering-apps',
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
      'Branded food ordering app',
      'Low commission direct ordering',
      'POS integration with kitchen display',
      'Delivery zone and driver management',
      'Customer data ownership',
      'Loyalty and promotional tools',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Online Ordering', item: 'https://www.posso.co.uk/online-ordering' },
      { '@type': 'ListItem', position: 3, name: 'Food Ordering Apps', item: 'https://www.posso.co.uk/food-ordering-apps' },
    ],
  },
];

const features = [
  { icon: Smartphone, title: 'Your Own Branded App', description: 'A food ordering app with your restaurant\'s name, logo, colours, and menu. Customers download it from the App Store or Google Play — or order via a web version without downloading anything. Every order comes directly to you, not through a marketplace. Your brand, your customer relationship, your data.' },
  { icon: PoundSterling, title: 'Low Commission Model', description: 'Marketplace apps charge 25-35% per order. On a £20 order, that is £5-7 gone before you have paid for food, staff, or rent. With a branded ordering app, commission is low — typically a flat monthly fee or a small percentage that leaves your margins intact. The difference on 100 orders per week is thousands of pounds per month.' },
  { icon: Scale, title: 'Branded App vs Marketplace Comparison', description: 'Marketplaces bring discovery — new customers who are browsing. Branded apps bring retention — existing customers who order direct. The smart approach is both: use marketplaces for acquisition, then convert customers to your branded app with incentives. We help you set up both channels and migrate customers over time.' },
  { icon: Zap, title: 'POS & Kitchen Integration', description: 'Orders from your food ordering app arrive directly on your POS and kitchen display. No tablet on the side, no re-keying orders. The kitchen sees the order the moment the customer submits it. Preparation starts immediately. This integration eliminates errors and cuts preparation time — the order is in the kitchen in under 3 seconds.' },
  { icon: ShieldCheck, title: 'Own Your Customer Data', description: 'When a customer orders through a marketplace, the marketplace owns the relationship. You do not get their email, phone number, or order history. With your own app, every customer\'s data belongs to you. Build email lists, send push notifications, run targeted promotions. A database of 2,000 customers who order monthly is worth more than any marketplace listing.' },
  { icon: TrendingUp, title: 'Loyalty & Promotions', description: 'Build repeat orders with app-exclusive deals. Offer a free side dish after 5 orders, or 10% off for first-time app users. Push notifications go directly to customers\' phones — "Your favourite chicken tikka is on offer tonight." The loyalty programme runs automatically, rewarding customers and driving repeat business without manual effort.' },
];

const benefits = [
  { title: 'Keep More of Every Order', description: 'A £20 takeaway order through a marketplace leaves you with £13-15 after commission. The same order through your branded app leaves you with £18-19. Over 500 orders per month, that is £2,000-3,000 difference. Low commission means your food ordering app pays for itself within the first week of operation.' },
  { title: 'Build a Direct Customer Base', description: 'Every order through your app gives you the customer\'s name, email, phone number, and order history. After six months, you have a database of loyal customers you can reach directly. Run a "20% off this Friday" push notification and watch orders spike. Marketplaces will never give you this capability.' },
  { title: 'Reduce Kitchen Errors', description: 'Orders flow directly from the app to the kitchen display. No re-keying from a separate tablet, no misreading handwriting, no missed modifications. The kitchen sees exactly what the customer ordered — including special instructions, allergy notes, and modification requests. Fewer errors mean fewer complaints and less food waste.' },
  { title: 'Scale Without Increasing Costs', description: 'Your 100th order through the app costs the same as your first. There is no per-order commission eating into margins as you grow. Whether you do 50 orders per week or 500, the economics work in your favour. This is how restaurants scale their delivery and takeaway revenue profitably.' },
];

export default function FoodOrderingAppsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Online Ordering', href: '/online-ordering' },
          { label: 'Food Ordering Apps' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Smartphone className="w-3 h-3 mr-2" />
                BRANDED ORDERING FOR RESTAURANTS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Food Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Apps
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Branded apps vs marketplaces, build your own vs off-the-shelf, commission rates compared — everything you need to choose the right food ordering app for your restaurant.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission on every direct order</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Own your customer data and relationships</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS systems from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Food Ordering App Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything your restaurant needs to take orders online — directly, profitably, and on your terms.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Their Own App</h2>
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
                The Real Cost of Marketplace Commission
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A restaurant doing <strong className="text-white">200 orders per week at £25 average</strong> through a marketplace at 30% commission pays £1,500 per week — £78,000 per year — in commission alone. That is the salary of two full-time staff members handed to a platform that also promotes your competitors on the same page.
                </p>
                <p>
                  With a <strong className="text-white">branded food ordering app</strong>, the same 200 orders generate significantly more profit. Low commission means you keep the margin you need to invest in your food, your team, and your premises. The app pays for itself before the end of the first month.
                </p>
                <p>
                  The transition does not have to be overnight. Start by <strong className="text-white">running both channels</strong> — marketplace for new customer discovery, branded app for retention. Include a flyer with every marketplace order: "Order direct next time and get 15% off." Within three months, most restaurants shift 40-60% of orders to their own app.
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
                <Link href="/restaurant-ordering-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">Dine-in, takeaway, delivery</p>
                </Link>
                <Link href="/mobile-ordering-apps" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile Ordering Apps</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile-first ordering</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Full ordering platform</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Food Ordering Apps — Frequently Asked Questions" faqs={[
          { question: 'Should I use a marketplace or a branded food ordering app?', answer: 'Use both strategically. Marketplaces like Deliveroo and Just Eat bring discovery — new customers who are browsing. Your branded app brings retention — existing customers who order directly at low commission. The goal is to acquire customers through marketplaces and migrate them to your app where margins are higher.' },
          { question: 'How much commission does a branded app charge?', answer: 'Posso operates on a low commission model that is significantly less than marketplace rates of 25-35%. You keep more of every order. The exact rate depends on your setup — contact us for a quote. Most restaurants find the app pays for itself within the first month compared to marketplace-only ordering.' },
          { question: 'Do customers have to download an app?', answer: 'No. While a native app is available on the App Store and Google Play, customers can also order through a web-based version that works in any browser. No download required. They simply visit your ordering page, browse the menu, and place their order. Both versions offer the same features and ordering experience.' },
          { question: 'How do orders reach the kitchen?', answer: 'Orders placed through the app arrive directly on your POS and kitchen display system. No separate tablet, no re-keying. The kitchen team sees the order within seconds of submission, with all items, modifications, and special instructions clearly displayed. This integration eliminates errors and speeds up preparation.' },
          { question: 'Can I run promotions through the app?', answer: 'Yes. Offer first-order discounts, loyalty rewards, free items after a set number of orders, time-limited deals, and push notifications for special offers. Push notifications go directly to customers\' phones. A well-timed "Friday night special" notification can drive a 30% increase in orders for that evening.' },
          { question: 'What about delivery management?', answer: 'The app supports both collection and delivery. Set delivery zones by postcode or radius, configure minimum order values and delivery charges per zone. Track delivery driver status and estimated delivery times. Customers receive real-time updates on their order from preparation through to delivery.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
