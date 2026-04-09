import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Coffee, Clock, Heart, Bell, CreditCard, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coffee Shop Ordering App',
  description:
    'Coffee Shop Ordering App with skip-the-queue mobile ordering, loyalty stamp cards, pickup notifications, drink customisation, and barista display integration. From £499 + VAT.',
  keywords: [
    'coffee shop ordering app',
    'coffee ordering app',
    'coffee shop app',
    'skip the queue coffee',
    'coffee loyalty app',
    'mobile coffee ordering',
    'coffee shop mobile ordering',
    'coffee order ahead app',
    'coffee click and collect',
    'coffee shop ordering system',
  ],
  alternates: {
    canonical: '/coffee-shop-ordering-app',
  },
  openGraph: {
    title: 'Coffee Shop Ordering App | Posso UK',
    description:
      'Coffee Shop Ordering App — skip-the-queue ordering, loyalty stamps, pickup notifications, and barista display integration.',
    url: 'https://posso.co.uk/coffee-shop-ordering-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Coffee Shop Ordering App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Coffee shop ordering app with skip-the-queue mobile ordering, loyalty stamp cards, pickup notifications, drink customisation, and barista kitchen display integration.',
    url: 'https://posso.co.uk/coffee-shop-ordering-app',
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
      reviewCount: '198',
      bestRating: '5',
    },
    featureList: [
      'Skip-the-queue mobile ordering',
      'Digital loyalty stamp cards',
      'Pickup ready notifications',
      'Full drink customisation',
      'Barista display integration',
      'Order history and favourites',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Online Ordering', item: 'https://posso.co.uk/online-ordering' },
      { '@type': 'ListItem', position: 3, name: 'Coffee Shop Ordering App', item: 'https://posso.co.uk/coffee-shop-ordering-app' },
    ],
  },
];

const features = [
  { icon: Clock, title: 'Skip the Queue', description: 'Customers order and pay from their phone before they arrive. The order reaches the barista display immediately. By the time they walk in, their coffee is being made — or already waiting. During the 8am rush, skip-the-queue customers bypass the counter entirely. No standing in line, no waiting, no friction. Just walk in, grab, and go.' },
  { icon: Heart, title: 'Digital Loyalty Stamps', description: 'Replace paper stamp cards with a digital version built into the app. Every qualifying purchase adds a stamp automatically. After 9 coffees, the 10th is free — or set your own reward threshold. Customers check their stamp count in the app. No lost cards, no forgotten stamps. The programme runs itself and gives customers a genuine reason to order through your app instead of a competitor.' },
  { icon: Bell, title: 'Pickup Notifications', description: 'When the barista marks a drink as ready, the customer receives a push notification on their phone: "Your oat milk latte is ready for collection." No shouting names across a busy shop, no customers hovering at the counter asking if their order is done. The notification includes their order details so they can verify it at a glance before collecting.' },
  { icon: Coffee, title: 'Full Drink Customisation', description: 'Customers build their perfect drink in the app: size, milk type, number of shots, syrup flavour, temperature preference, and any extras. The pricing updates in real time as they add modifications. A large oat milk latte with an extra shot and vanilla syrup shows the correct total before checkout. The barista sees the complete specification on their display.' },
  { icon: CreditCard, title: 'In-App Payment', description: 'Apple Pay, Google Pay, and saved card payments make checkout instant. Customers pay in the app before arriving — no fumbling for a card at the counter. The transaction is complete before the drink is made. For regular customers, their payment method is saved and checkout is a single tap. Faster payment means faster throughput during peak periods.' },
  { icon: Users, title: 'Order History & Favourites', description: 'The app remembers every order. Customers can reorder their usual with one tap — "Reorder: Large oat flat white, extra shot." Favourite drinks are saved for even faster access. For a regular who orders the same thing every morning, the entire process — open app, tap favourite, confirm payment — takes under 10 seconds.' },
];

const benefits = [
  { title: 'Reduce Queue Congestion', description: 'The morning rush creates a queue that puts off passing trade. When 40% of orders come through the app, the counter queue halves. Walk-in customers are served faster too, because the counter is handling fewer orders. The result: more customers served per hour, less congestion, and fewer people walking past because the queue looks too long.' },
  { title: 'Build Daily Ordering Habits', description: 'Loyalty stamps and one-tap reordering create habitual behaviour. A customer who orders through the app on Monday is 3x more likely to order again on Tuesday. The combination of convenience, rewards, and saved favourites makes your shop the default morning stop. After two weeks of app usage, 70% of customers become daily regulars.' },
  { title: 'Capture Revenue You Currently Lose', description: 'Every customer who sees a long queue and walks past is lost revenue. Skip-the-queue ordering captures those customers. Office workers who cannot afford a 10-minute wait order ahead and collect in 30 seconds. Your coffee shop serves the time-poor commuter market that was previously going to the competitor with the shorter line.' },
  { title: 'Low Commission Direct Orders', description: 'Orders through your branded app come at low commission — a fraction of what marketplace aggregators charge. On 200 app orders per week at £4 average, the savings compared to a 30% marketplace commission are substantial. The app pays for itself within the first week and continues generating savings every day after that.' },
];

export default function CoffeeShopOrderingAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Online Ordering', href: '/online-ordering' },
          { label: 'Coffee Shop Ordering App' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Coffee className="w-3 h-3 mr-2" />
                SKIP THE QUEUE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Coffee Shop Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  App
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Mobile ordering for coffee shops — customers order ahead, skip the queue, earn loyalty stamps, and get notified when their drink is ready for pickup.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Order ahead and skip the queue</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Digital loyalty stamps — 10th coffee free</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS from £499 + VAT, low commission</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Coffee Shop App Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Designed around the morning rush — speed, convenience, and the loyalty that brings customers back every day.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Coffee Shops Need an Ordering App</h2>
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
                How a Coffee Shop Ordering App Actually Works
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A commuter walks to work every morning past your coffee shop. The queue is 8 people deep at 8:15am. They keep walking to the chain around the corner because they cannot afford a <strong className="text-white">10-minute wait</strong>. That is one lost sale. Multiply it by 20 commuters per morning, and you are losing £400 per week in revenue that walked past your door.
                </p>
                <p>
                  With the ordering app, that same commuter <strong className="text-white">orders from the train platform</strong>. Their regular oat flat white with an extra shot is saved as a favourite — one tap to reorder. They pay with Apple Pay. The order appears on the barista display. By the time they arrive, the drink is ready. They walk in, collect, and leave in 30 seconds.
                </p>
                <p>
                  After 9 coffees, they get their <strong className="text-white">10th free via digital loyalty stamps</strong>. They have ordered the same drink every morning for two weeks. The app is now part of their routine. They are not comparing coffee shops anymore — they are a locked-in regular. That is the power of convenience combined with loyalty.
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
                <Link href="/mobile-ordering-apps" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile Ordering Apps</p>
                  <p className="text-slate-400 text-sm mt-1">QR and mobile ordering</p>
                </Link>
                <Link href="/self-order-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Order App</p>
                  <p className="text-slate-400 text-sm mt-1">QR-based self-ordering</p>
                </Link>
                <Link href="/cafe-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cafe POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full cafe system</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Coffee Shop Ordering App — Frequently Asked Questions" faqs={[
          { question: 'How does skip-the-queue ordering work?', answer: 'Customers open the app, select their drink with all customisations, and pay from their phone. The order appears on your barista display immediately. The customer walks in when they are ready and collects their drink — no queuing at the counter. During peak periods, app customers bypass the walk-in queue completely.' },
          { question: 'How do digital loyalty stamps work in the app?', answer: 'Every qualifying purchase automatically adds a stamp to the customer\'s digital card in the app. After the set number of stamps (typically 9), the next drink is free. Customers see their stamp progress in the app. No physical cards to lose, no manual stamping. The system tracks everything automatically and applies the free drink when earned.' },
          { question: 'Do customers get notified when their drink is ready?', answer: 'Yes. When the barista taps "ready" on the kitchen display, a push notification is sent to the customer\'s phone with their order details. This eliminates the need to shout names, and customers can continue their commute or conversation until their phone buzzes. The notification includes the drink description so they can verify their order at collection.' },
          { question: 'Can customers customise their drinks in the app?', answer: 'Fully. Size, milk type (oat, soy, almond, coconut, whole, semi-skimmed), number of espresso shots, syrup flavour, temperature, and extras are all available. Prices update in real time. The barista receives the complete specification on their display — exactly as the customer ordered it.' },
          { question: 'Does the app work with my existing POS?', answer: 'The ordering app integrates directly with the Posso POS and barista display system. Orders from the app appear alongside walk-in counter orders on the same display. All sales data — app and counter — is consolidated in one dashboard. POS systems start from £499 + VAT with the ordering app included at low commission.' },
          { question: 'How do I get customers to download the app?', answer: 'Place table cards and counter signs with a QR code linking to the app download. Offer an incentive: "Download our app and get your first coffee half price." Mention the loyalty stamps — 10th coffee free. Print the QR code on takeaway cups. Most coffee shops reach 30-40% app adoption within the first two months with these simple tactics.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
