import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, UtensilsCrossed, QrCode, Truck, Palette, ShieldCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Ordering App',
  description:
    'Restaurant Ordering App for dine-in QR ordering, takeaway, and delivery — branded, POS-integrated, low commission, with customer data ownership. From £499 + VAT.',
  keywords: [
    'restaurant ordering app',
    'restaurant ordering system',
    'restaurant app uk',
    'dine in ordering app',
    'restaurant takeaway app',
    'restaurant delivery app',
    'branded restaurant app',
    'restaurant qr ordering',
    'restaurant online ordering app',
    'restaurant ordering platform',
  ],
  alternates: {
    canonical: '/restaurant-ordering-app',
  },
  openGraph: {
    title: 'Restaurant Ordering App | Posso UK',
    description:
      'Restaurant Ordering App — dine-in QR, takeaway, delivery, branded, POS-integrated. Low commission ordering for restaurants.',
    url: 'https://www.posso.co.uk/restaurant-ordering-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant Ordering App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Restaurant ordering app for dine-in QR ordering, takeaway, and delivery with full POS integration, branded experience, customer data ownership, and low commission.',
    url: 'https://www.posso.co.uk/restaurant-ordering-app',
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
      reviewCount: '264',
      bestRating: '5',
    },
    featureList: [
      'Dine-in QR code ordering',
      'Takeaway and collection ordering',
      'Delivery with zone management',
      'Branded app and web ordering',
      'POS and kitchen display integration',
      'Customer data and loyalty',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Online Ordering', item: 'https://www.posso.co.uk/online-ordering' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant Ordering App', item: 'https://www.posso.co.uk/restaurant-ordering-app' },
    ],
  },
];

const features = [
  { icon: QrCode, title: 'Dine-In QR Ordering', description: 'Each table has a unique QR code. Customers scan, browse the full menu with photos and allergen information, customise their order, and pay — all from their phone. The order goes to the kitchen display with the table number. No app download required. Customers order at their pace, add desserts and drinks without flagging down a server, and pay when they are ready.' },
  { icon: Truck, title: 'Takeaway & Delivery', description: 'Customers order for collection or delivery through your branded app or website. Collection orders include an estimated ready time. Delivery orders are managed with configurable zones, minimum order values, and delivery charges. Customers track their order status in real time — "Preparing," "Ready for Collection," or "Out for Delivery." All orders arrive on the same POS and kitchen display as dine-in.' },
  { icon: Palette, title: 'Fully Branded Experience', description: 'Your restaurant name, logo, colour scheme, and photography throughout the ordering experience. The app looks like your restaurant, not a generic ordering platform. Customers associate the quality of the ordering experience with your brand. A well-designed app reinforces your restaurant\'s identity and builds customer trust from the first tap to the last bite.' },
  { icon: ShieldCheck, title: 'POS & Kitchen Integration', description: 'Every order — dine-in, takeaway, or delivery — arrives on your POS and kitchen display system through the same channel. The kitchen team does not need to monitor a separate tablet. Orders are queued by time and sorted by type. Special instructions, modifications, and allergen notes are displayed clearly. One system handles all order sources with zero manual re-keying.' },
  { icon: TrendingUp, title: 'Customer Data Ownership', description: 'Every customer who orders through your app belongs to you — name, email, phone, order history, preferences. Build a marketing database of customers who have already spent money with you. Send targeted promotions based on order history: "We noticed you love our lamb shank — it is back on the menu this weekend." This is impossible with marketplace ordering where the platform owns your customer.' },
  { icon: UtensilsCrossed, title: 'Loyalty & Repeat Orders', description: 'Reward customers for ordering direct. Points per pound spent, free items after a set number of orders, exclusive app-only deals. The reorder function lets regulars repeat their last order with one tap. Push notifications drive repeat business: "Friday night sorted — order your usual with one tap." Loyalty through your own app costs a fraction of re-acquiring customers through paid advertising.' },
];

const benefits = [
  { title: 'Three Revenue Channels, One System', description: 'Dine-in QR ordering, takeaway collection, and delivery — all managed through one app and one POS. Each channel has its own menu configuration, pricing, and availability settings. A Friday evening service can handle 60 dine-in covers, 25 takeaway orders, and 15 deliveries simultaneously without any system juggling. One kitchen display, one workflow.' },
  { title: 'Higher Margins Than Marketplace Ordering', description: 'Marketplace apps charge 25-35% commission. Your branded restaurant ordering app operates at low commission. On a £30 dinner order, that is the difference between keeping £20 and keeping £28. Over 300 orders per month, the savings run into thousands of pounds. The app pays for itself before the end of the first month.' },
  { title: 'Faster Table Turns With QR Ordering', description: 'Dine-in QR ordering reduces the time a table is occupied by 15-20 minutes on average. Customers order when they sit down — no waiting for a server. They pay when they are finished — no waiting for the bill. On a Friday night with 20 table turns, reclaiming 15 minutes per table means fitting in 4-5 extra covers across the evening.' },
  { title: 'Market Directly to Your Customers', description: 'Push notifications, email campaigns, and in-app promotions reach customers who have already eaten your food and enjoyed it. A "quiet Tuesday" push notification to 500 customers costs nothing and can generate 20-30 orders. Compare that to a Facebook ad campaign targeting strangers. Direct marketing to existing customers is the most cost-effective way to grow restaurant revenue.' },
];

export default function RestaurantOrderingAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Online Ordering', href: '/online-ordering' },
          { label: 'Restaurant Ordering App' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <UtensilsCrossed className="w-3 h-3 mr-2" />
                DINE-IN, TAKEAWAY & DELIVERY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Restaurant Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  App
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A branded ordering app for your restaurant — dine-in QR ordering, takeaway, and delivery in one system that integrates with your POS and kitchen display.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> QR dine-in ordering — no app download needed</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission on every direct order</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS from £499 + VAT with full integration</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Restaurant Ordering App Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                One app that handles every way your customers want to order — at the table, for collection, or delivered to their door.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Build Their Own App</h2>
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
                How a Restaurant Ordering App Transforms Service
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A couple arrives for dinner. They scan the <strong className="text-white">QR code on the table</strong>, browse the full menu with descriptions and photos, and order their starters and drinks. The order appears on the kitchen display before the server has taken a step. While they eat their starters, they browse the mains on their phone and order when they are ready. No waiting, no rushing.
                </p>
                <p>
                  Meanwhile, the kitchen is handling <strong className="text-white">15 takeaway orders</strong> from customers who ordered through the restaurant's branded app. Each order shows estimated prep time and collection slot. The kitchen display interleaves dine-in and takeaway orders by priority. A family at table 12 is ready for mains. Three collection orders are due in 10 minutes. The system manages the workflow.
                </p>
                <p>
                  At the end of the evening, the restaurant has served <strong className="text-white">80 dine-in covers and 40 takeaway orders</strong> — all through one system. The owner opens the analytics dashboard and sees revenue by channel, average spend per cover, most popular dishes, and kitchen preparation times. Tomorrow's staffing and prep is informed by tonight's data.
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
                <Link href="/food-ordering-apps" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Ordering Apps</p>
                  <p className="text-slate-400 text-sm mt-1">Branded vs marketplace</p>
                </Link>
                <Link href="/self-order-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Order App</p>
                  <p className="text-slate-400 text-sm mt-1">QR-based self-ordering</p>
                </Link>
                <Link href="/hospitality-software-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Hospitality Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full UK hospitality tech</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant Ordering App — Frequently Asked Questions" faqs={[
          { question: 'How does dine-in QR ordering work?', answer: 'Each table has a unique QR code. Customers scan it with their phone camera and the menu opens in their browser — no app download. They browse, customise, and pay from their phone. The order goes to the kitchen display with the table number. Customers can order additional rounds of drinks or desserts without waiting for a server.' },
          { question: 'Can the app handle both takeaway and delivery?', answer: 'Yes. The app supports dine-in QR ordering, takeaway collection, and delivery. Each channel has separate menu configuration, pricing, and availability settings. Delivery zones are configurable by postcode or radius with minimum order values and delivery charges. All orders from all channels arrive on the same POS and kitchen display.' },
          { question: 'Is the app branded to my restaurant?', answer: 'Fully. Your restaurant name, logo, colour scheme, and menu photography are used throughout. The app on the App Store and Google Play carries your restaurant name. The web ordering page sits on your domain. Customers interact with your brand at every touchpoint, not a generic ordering platform.' },
          { question: 'How much commission do I pay on orders?', answer: 'Posso operates at low commission — significantly less than the 25-35% charged by marketplace apps. The exact rate depends on your setup. Most restaurants find that switching even 30% of their marketplace orders to their own app generates enough savings to cover the entire system cost within the first month.' },
          { question: 'Does it integrate with my kitchen display?', answer: 'Yes. All orders — dine-in, takeaway, and delivery — appear on the Posso kitchen display system. Orders are queued by time, colour-coded by type, and include all modifications and special instructions. The kitchen team works from one screen regardless of how the customer ordered. POS systems start from £499 + VAT.' },
          { question: 'Can I send promotions through the app?', answer: 'Yes. Send push notifications to app users, run in-app promotions, and offer loyalty rewards. Segment customers by order history, frequency, and spend. A "we miss you" offer to customers who have not ordered in 3 weeks can reactivate lapsed regulars. Push notifications are the most cost-effective marketing channel for repeat restaurant business.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
