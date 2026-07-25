import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Smartphone, Palette, MapPin, Bell, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Ordering Platform for Coffee Shops',
  description:
    'Mobile Ordering Platform for Coffee Shops with branded app experience, push notifications, chain management, loyalty stamps, and real-time barista routing. From £499 + VAT.',
  keywords: [
    'mobile ordering platform coffee shops',
    'coffee shop mobile ordering',
    'coffee shop app ordering',
    'mobile ordering for coffee chains',
    'coffee shop branded app',
    'coffee mobile order and pay',
    'coffee chain mobile ordering',
    'mobile ordering coffee uk',
    'coffee shop order ahead app',
    'mobile coffee ordering system',
  ],
  alternates: {
    canonical: '/mobile-ordering-platform-coffee-shops',
  },
  openGraph: {
    title: 'Mobile Ordering Platform for Coffee Shops',
    description:
      'Mobile Ordering Platform for Coffee Shops with branded app, push notifications, chain management, loyalty, and barista routing.',
    url: 'https://www.posso.co.uk/mobile-ordering-platform-coffee-shops',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Mobile Ordering Platform for Coffee Shops',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Mobile ordering platform for coffee shops with branded app experience, push notifications, multi-site chain management, digital loyalty stamps, and real-time barista display routing.',
    url: 'https://www.posso.co.uk/mobile-ordering-platform-coffee-shops',
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
      reviewCount: '176',
      bestRating: '5',
    },
    featureList: [
      'Branded mobile ordering experience',
      'Push notification order updates',
      'Multi-site chain management',
      'Digital loyalty stamp integration',
      'GPS store locator',
      'Real-time barista display routing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Mobile Ordering Platform for Coffee Shops', item: 'https://www.posso.co.uk/mobile-ordering-platform-coffee-shops' },
    ],
  },
];

const features = [
  { icon: Palette, title: 'Branded Mobile Experience', description: 'Your coffee shop\'s logo, colour scheme, and typography across the entire ordering journey. Customers feel like they are using your app, not a generic ordering platform. The interface is optimised for one-handed phone use — thumb-friendly buttons, swipe navigation, and fast-loading images of every drink.' },
  { icon: Smartphone, title: 'One-Tap Reordering', description: 'Repeat customers see their recent orders and favourites at the top of the screen. One tap reorders their usual — a large oat flat white with an extra shot, for example. No scrolling through the full menu. For a morning commuter ordering the same drink five days a week, this saves time on every visit.' },
  { icon: MapPin, title: 'GPS Store Locator', description: 'Customers open the app and see your nearest locations on a map with live opening hours and estimated prep times. They select a branch and order directly. For chains with 5, 15, or 50 locations, this guides customers to the right site and ensures orders route to the correct barista display.' },
  { icon: Bell, title: 'Push Notification Updates', description: 'Customers receive a push notification when their order is accepted, when it is being prepared, and when it is ready for collection. No guessing, no hovering at the counter. The notification includes the order summary and collection point. Customer satisfaction increases because they know exactly when to walk in.' },
  { icon: Star, title: 'Digital Loyalty Stamps', description: 'Every mobile order earns loyalty stamps automatically. Customers see their stamp card progress in the app — 7 out of 9 stamps, for example. When the reward unlocks, it applies at checkout without any manual input. The programme drives repeat purchases and gives you data on customer frequency and preferences.' },
  { icon: TrendingUp, title: 'Chain Performance Dashboard', description: 'View mobile order volume, conversion rates, average basket size, and peak times across all locations from one dashboard. Compare which branches drive the most app orders, which promotions perform best, and how mobile ordering grows week over week. Data-driven decisions replace guesswork.' },
];

const benefits = [
  { title: 'Win the Morning Commute', description: 'Commuters order from the train, the car park, or the office lift. Their drink is ready when they arrive. You capture sales that would otherwise go to whichever competitor has the shortest queue. Mobile ordering turns your coffee shop into the fastest option on their route.' },
  { title: 'Increase Average Order Value', description: 'Mobile customers spend more per transaction than walk-in customers. They browse the full menu at their own pace, add pastries and snacks, and upgrade their drink with extras. Suggested add-ons during checkout — "Add a croissant for £2.50?" — lift basket size by 15–25%.' },
  { title: 'Own Your Customer Data', description: 'Every mobile order generates data you own: order history, favourite items, visit frequency, and location preference. Use this to send personalised offers — a free syrup shot for customers who have not ordered in two weeks, or a birthday reward. Third-party platforms never give you this access.' },
  { title: 'Scale Your Chain with Consistency', description: 'Add a new location and it appears in the app immediately. Menu templates, loyalty rules, and brand guidelines apply automatically. Customers get an identical experience whether they order from your Shoreditch or Manchester branch. Growth does not mean inconsistency.' },
];

export default function MobileOrderingPlatformCoffeeShopsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Mobile Ordering Platform for Coffee Shops' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Smartphone className="w-3 h-3 mr-2" />
                MOBILE-FIRST COFFEE ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Mobile Ordering Platform for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coffee Shops
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A branded mobile ordering experience that turns commuters into regulars. One-tap reordering, push notifications, loyalty stamps, and real-time barista routing — built for coffee chains.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Branded mobile experience with your logo and colours</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Push notifications when drinks are ready</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS from £499 + VAT, low commission on mobile orders</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Mobile Ordering Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Designed for the way coffee shop customers actually order — fast, familiar, and on their phone.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Coffee Chains Choose Mobile Ordering</h2>
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
                The Mobile Experience Your Customers Expect
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Starbucks proved that <strong className="text-white">mobile ordering drives loyalty and revenue</strong>. Over 30% of their transactions now come through the app. Your customers expect the same convenience from their favourite independent coffee shop or growing chain.
                </p>
                <p>
                  The Posso mobile ordering platform gives you that capability <strong className="text-white">without the enterprise price tag</strong>. Your brand, your customer data, your loyalty programme — running on a platform designed specifically for coffee shops. One-tap reordering, drink customisation, and push notifications come standard.
                </p>
                <p>
                  For chains expanding across multiple sites, the platform <strong className="text-white">scales with you</strong>. Add locations, adjust menus per site, and track performance centrally. Every new branch is live for mobile ordering within hours of opening, giving you day-one digital revenue.
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
                <Link href="/online-ordering-platform-coffee-shops" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Web-based coffee ordering</p>
                </Link>
                <Link href="/coffee-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Till system for coffee shops</p>
                </Link>
                <Link href="/coffee-ordering-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">Customer-facing app</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Mobile Ordering Platform for Coffee Shops — FAQ" faqs={[
          { question: 'Is this a standalone app or a web-based platform?', answer: 'Both options are available. The web-based version works instantly in any mobile browser — no download required. For chains that want a presence in the App Store and Google Play, we offer a branded native app with your name, icon, and branding. Both versions connect to the same backend and barista display.' },
          { question: 'How do one-tap reorders work?', answer: 'When a customer places an order, it is saved to their profile. The next time they open the app, their recent orders and favourites appear at the top. One tap adds the exact same order — including all modifiers — to the basket. For daily commuters ordering the same drink, the entire process takes under 10 seconds.' },
          { question: 'Can we send push notifications and promotions?', answer: 'Yes. Push notifications update customers on order status — accepted, being prepared, ready for collection. You can also schedule promotional pushes: happy hour alerts, new menu items, loyalty reward reminders, or weather-triggered promotions like iced drink offers on hot days.' },
          { question: 'How does this integrate with our existing POS?', answer: 'Mobile orders arrive on the same barista display as till orders. There is no separate tablet or system to manage. The order queue is unified — walk-in and mobile orders are processed in sequence. Stock levels and menu availability sync in real time between the POS and the mobile platform.' },
          { question: 'What does the loyalty programme look like on mobile?', answer: 'Customers see a visual stamp card in the app showing their progress — for example, 6 out of 9 stamps collected. When the reward triggers, it applies automatically at checkout. Customers can view their reward history and current balance at any time. The programme works across mobile, web, and in-store purchases.' },
          { question: 'How much does the mobile ordering platform cost?', answer: 'The POS system starts from £499 + VAT. Mobile ordering is available at low commission per order — significantly less than third-party delivery platforms. The branded native app is an optional add-on. Contact us for pricing tailored to your number of locations and expected order volume.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
