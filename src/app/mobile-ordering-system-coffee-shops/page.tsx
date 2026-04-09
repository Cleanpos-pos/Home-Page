import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Coffee, Smartphone, BellRing, MapPin, Zap, Heart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Ordering System for Coffee Shops',
  description:
    'Mobile Ordering System for Coffee Shops with skip-the-queue ordering, push notifications, pickup alerts, favourite drinks, and loyalty tracking. Built for mobile-first coffee ordering. Low commission.',
  keywords: [
    'mobile ordering system coffee shops',
    'coffee shop mobile ordering',
    'mobile ordering for coffee shops',
    'mobile order ahead coffee',
    'skip the queue coffee ordering',
    'coffee shop mobile app ordering',
    'mobile coffee ordering system uk',
    'mobile order and pay coffee shop',
    'coffee shop order ahead system',
    'mobile ordering platform coffee',
  ],
  alternates: {
    canonical: '/mobile-ordering-system-coffee-shops',
  },
  openGraph: {
    title: 'Mobile Ordering System for Coffee Shops | Posso UK',
    description:
      'Mobile Ordering System for Coffee Shops — skip-the-queue, push notifications, pickup alerts, favourites, and loyalty.',
    url: 'https://posso.co.uk/mobile-ordering-system-coffee-shops',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Mobile Ordering System for Coffee Shops',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Mobile ordering system for coffee shops with skip-the-queue functionality, push notification alerts, pickup ready notifications, favourite drink saving, and integrated loyalty tracking.',
    url: 'https://posso.co.uk/mobile-ordering-system-coffee-shops',
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
      reviewCount: '189',
      bestRating: '5',
    },
    featureList: [
      'Skip-the-queue mobile ordering',
      'Push notification pickup alerts',
      'Saved favourite drinks for one-tap reorder',
      'Integrated loyalty stamp tracking',
      'Location-aware ordering',
      'Mobile payment with saved cards',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Coffee POS', item: 'https://posso.co.uk/coffee-pos-system' },
      { '@type': 'ListItem', position: 3, name: 'Mobile Ordering System for Coffee Shops', item: 'https://posso.co.uk/mobile-ordering-system-coffee-shops' },
    ],
  },
];

const features = [
  { icon: Zap, title: 'Skip-the-Queue Ordering', description: 'Customers order and pay from their phone before arriving. They walk past the queue, give their name at the pickup point, and collect their drink. The entire transaction happens on the phone — no counter interaction needed. For morning commuters, this saves 5-10 minutes every single day. They arrive, grab, and go.' },
  { icon: BellRing, title: 'Push Notification Alerts', description: 'A push notification hits the customer\'s phone the moment their drink is ready for collection. No staring at a screen. No listening for their name. They continue browsing, working, or sitting outside until the notification arrives. A second notification type — promotional — lets you send daily specials, happy hour alerts, or loyalty milestone celebrations.' },
  { icon: Heart, title: 'Favourite Drinks Saved', description: 'Customers save their go-to drinks — large oat milk flat white with an extra shot and vanilla syrup. Reordering is one tap: open the app, tap the favourite, confirm pickup time, pay. A 30-second process instead of navigating the full menu each time. For daily customers, this convenience locks in habitual ordering.' },
  { icon: MapPin, title: 'Location-Aware Ordering', description: 'When the customer is near your coffee shop, the system can suggest their favourite drink with an estimated prep time. For multi-location coffee shops, the app detects which location is nearest and shows that location\'s menu and availability. The ordering experience adapts to where the customer physically is.' },
  { icon: Smartphone, title: 'Mobile Payment & Saved Cards', description: 'Apple Pay, Google Pay, and saved debit/credit cards for instant checkout. No fumbling for a wallet at the counter. Returning customers pay with a single tap or biometric confirmation. Tips can be added before payment. The transaction is complete before the customer even arrives at the shop.' },
  { icon: Coffee, title: 'Integrated Loyalty Tracking', description: 'Every mobile order earns loyalty stamps automatically. Progress toward the next free drink is visible on the order confirmation screen. When a customer reaches their reward, they are notified and can redeem it on their next mobile order. Loyalty is tracked across mobile and in-store purchases seamlessly — one account, one balance.' },
];

const benefits = [
  { title: 'Capture the Commuter Market', description: 'Morning commuters have a 3-minute window between arriving at the station and catching their train. They cannot afford to queue. Mobile ordering lets them order from the platform, walk to your shop, and grab their drink within that window. Without mobile ordering, these customers go to whichever coffee shop has the shortest queue — or skip coffee entirely.' },
  { title: 'Drive Repeat Orders Through Convenience', description: 'The easier it is to order, the more often customers do it. A favourite drink saved for one-tap reordering reduces the process to seconds. Push notifications remind customers you exist. Loyalty stamps give them a reason to choose you over competitors. Convenience plus incentive equals habitual repeat purchasing.' },
  { title: 'Reduce Counter Congestion', description: 'Every mobile order is one fewer person in the counter queue. During peak morning hours, shifting 30-40% of orders to mobile dramatically reduces wait times for remaining counter customers. Both channels benefit — mobile customers skip the queue, and counter customers face shorter waits. Staff focus on making drinks instead of taking orders.' },
  { title: 'Keep Margins Healthy', description: 'Mobile ordering through your own system charges low commission versus up to 35% on aggregator delivery apps. For a coffee shop doing 50 mobile orders per day at an average of £4.50, the annual saving compared to aggregator commission is thousands of pounds. That money stays in your business where it belongs.' },
];

export default function MobileOrderingCoffeeShopsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Coffee POS', href: '/coffee-pos-system' },
          { label: 'Mobile Ordering System' },
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
                  Mobile Ordering System for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coffee Shops
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Skip-the-queue mobile ordering that lets customers order ahead, get push notification pickup alerts, save favourite drinks, and earn loyalty stamps — all from their phone.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Order ahead and skip the queue</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Push notifications when drink is ready</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Mobile Ordering Features for Coffee Shops</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every feature optimised for the speed and convenience coffee shop customers expect from mobile ordering.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Coffee Shops Choose Mobile Ordering</h2>
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
                Mobile Ordering That Matches Coffee Shop Speed
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Coffee is a speed business. The transaction should be as fast as the espresso machine. Mobile ordering delivers on that promise — <strong className="text-white">customers order in under 30 seconds, pay instantly, and collect without waiting</strong>. The entire experience happens on the device they already have in their hand.
                </p>
                <p>
                  The key difference from generic ordering platforms is <strong className="text-white">coffee-specific optimisation</strong>. Favourite drinks saved for one-tap reorder. Push notifications timed to when the drink is actually ready (not when the order is confirmed). Loyalty tracking that understands daily coffee purchasing patterns. Location awareness for multi-site coffee shops.
                </p>
                <p>
                  For the barista, mobile orders merge into the same preparation queue as counter orders. There is <strong className="text-white">no separate screen, no context switching, no disruption</strong> to the workflow. A mobile order for a flat white appears exactly like a counter order for a flat white. The barista makes drinks. The software handles everything else.
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
                <Link href="/online-ordering-software-coffee-shops" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering Software</p>
                  <p className="text-slate-400 text-sm mt-1">Loyalty and scheduling</p>
                </Link>
                <Link href="/takeaway-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway App</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile ordering app</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Mobile Ordering for Coffee Shops — Frequently Asked Questions" faqs={[
          { question: 'Do customers need to download an app?', answer: 'No app download required. The mobile ordering system works as a progressive web app (PWA) — customers access it through their mobile browser and can add it to their home screen for an app-like experience. No App Store or Google Play download barrier. They can start ordering immediately from a QR code or your website link.' },
          { question: 'How do push notifications work without an app?', answer: 'The PWA supports push notifications on both iOS (Safari 16.4+) and Android. When a customer adds the ordering page to their home screen, they can opt into notifications. They receive alerts when their drink is ready for collection and optional promotional notifications for daily specials or loyalty rewards.' },
          { question: 'Can customers save their favourite drinks?', answer: 'Yes. Customers save any drink with all its customisations (milk type, size, extra shots, syrups) as a favourite. Reordering is one tap — select the favourite, confirm pickup time, pay. For daily customers, this reduces the entire ordering process to under 15 seconds. Multiple favourites can be saved for different occasions.' },
          { question: 'Does it work with my existing POS?', answer: 'Yes. Mobile orders flow directly to your Posso POS and barista display in the same queue as counter orders. The barista works one unified queue. Menu updates on the POS reflect on mobile instantly. If you are not yet using Posso, the mobile ordering system is included when you switch.' },
          { question: 'How does loyalty tracking work on mobile?', answer: 'Every mobile order earns a loyalty stamp automatically. The customer sees their stamp count and progress toward the next reward on their order confirmation and in their account. Stamps earned in-store and on mobile count toward the same total. When they reach the reward threshold, it is redeemable on their next order — mobile or in-store.' },
          { question: 'How much does the mobile ordering system cost?', answer: 'The mobile ordering system is included with the Posso coffee shop POS from £499 + VAT. Low commission per mobile order. Includes push notifications, favourite drinks, loyalty tracking, and POS integration. No separate app development cost. Free setup and configuration included. Call 0808 175 3956 for a personalised quote.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
