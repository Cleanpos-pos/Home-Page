import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Phone, ArrowRight, Coffee, Smartphone, Heart, Clock, CreditCard, Gift } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coffee Ordering App',
  description:
    'Coffee Ordering App for coffee shops and cafes. Mobile ordering, loyalty stamps, milk and syrup modifiers, pickup scheduling, and QR table ordering. POS from £499 + VAT.',
  keywords: [
    'coffee ordering app',
    'coffee shop ordering app',
    'mobile ordering for coffee shops',
    'coffee shop app uk',
    'cafe ordering app',
    'coffee loyalty app',
    'order ahead coffee app',
    'coffee shop pos system',
    'coffee pickup app',
    'cafe mobile ordering',
  ],
  alternates: {
    canonical: '/coffee-ordering-app',
  },
  openGraph: {
    title: 'Coffee Ordering App | Posso UK',
    description:
      'Coffee Ordering App with mobile ordering, loyalty stamps, milk modifiers, and pickup scheduling for coffee shops.',
    url: 'https://posso.co.uk/coffee-ordering-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Coffee Ordering App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Coffee ordering app with mobile order-ahead, loyalty stamp cards, milk and syrup modifiers, pickup time scheduling, and integrated POS for coffee shops and cafes.',
    url: 'https://posso.co.uk/coffee-ordering-app',
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
      reviewCount: '134',
      bestRating: '5',
    },
    featureList: [
      'Mobile order-ahead — customers order before they arrive',
      'Digital loyalty stamps — buy 9 get 10th free',
      'Milk and syrup modifiers with pricing',
      'Pickup time scheduling — choose a collection slot',
      'QR table ordering for dine-in customers',
      'Integrated POS with kitchen display',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Coffee Ordering App', item: 'https://posso.co.uk/coffee-ordering-app' },
    ],
  },
];

const features = [
  { icon: Smartphone, title: 'Mobile Order-Ahead', description: 'Customers order their coffee before they arrive. They walk in, skip the queue, and pick up their drink. Morning rush customers love it because they save 5-10 minutes. You love it because the queue moves faster for everyone.' },
  { icon: Heart, title: 'Digital Loyalty Stamps', description: 'Replace paper loyalty cards with digital stamps. Buy 9 coffees, get the 10th free — tracked automatically. Customers never lose their card, and you get data on visit frequency and favourite drinks to drive repeat business.' },
  { icon: Coffee, title: 'Milk & Syrup Modifiers', description: 'Oat milk, soy, almond, coconut — each with its own price adjustment. Vanilla syrup, caramel, hazelnut — all configurable. The modifier flow guides staff and customers through options so every drink is made exactly right.' },
  { icon: Clock, title: 'Pickup Time Scheduling', description: 'Customers choose when they want to collect — 8:15, 8:30, 8:45. You control how many orders per time slot to avoid overwhelming the barista. Orders fire to the kitchen display at the right time so drinks are fresh on arrival.' },
  { icon: CreditCard, title: 'Contactless Payment', description: 'Apple Pay, Google Pay, card, and cash — all accepted at the counter and through the ordering app. Payments process in under 2 seconds. For mobile orders, payment is taken at the point of ordering so collection is grab-and-go.' },
  { icon: Gift, title: 'Promotions & Offers', description: 'Send push notifications with offers — 20% off pastries after 2pm, double loyalty points on Mondays, free upgrade to large. Target offers by customer segment: new customers, lapsed customers, or your most loyal regulars.' },
];

const benefits = [
  { title: 'Eliminate the Morning Queue', description: 'The 8am coffee rush creates a queue that puts off passing trade. With mobile order-ahead, your regular customers order before they leave home. They walk in, grab their coffee, and leave. The queue is shorter for walk-in customers, and you serve more people in the same window.' },
  { title: 'Increase Average Spend', description: 'Mobile ordering with upsell prompts consistently increases spend. A customer ordering a flat white sees a pastry suggestion. Add a muffin for £2.50? The digital prompt converts at 15-25% — far higher than verbal upselling at the counter during a rush.' },
  { title: 'Build a Loyal Customer Base', description: 'Digital loyalty stamps keep customers coming back. When they are 2 stamps away from a free coffee, they choose your shop over the competitor. You see exactly how often each customer visits, what they order, and when they stop coming so you can re-engage them.' },
  { title: 'Reduce Order Errors', description: 'Oat milk flat white with vanilla syrup, extra hot. When customers enter their own order with every modifier selected, there is no room for miscommunication. The barista sees the exact specification on screen. No shouting across the counter, no wrong milk, no complaints.' },
];

export default function CoffeeOrderingAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Coffee Ordering App' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Coffee className="w-3 h-3 mr-2" />
                ORDER AHEAD, SKIP THE QUEUE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Coffee Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  App
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Let your customers order ahead, collect loyalty stamps, and skip the queue. Milk modifiers, syrup options, and pickup scheduling built for coffee shop workflows.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Mobile order-ahead with pickup scheduling</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Digital loyalty stamps — no paper cards</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete coffee shop POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Coffee Shop Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Built specifically for coffee shops — from milk modifiers to loyalty stamps to morning rush management.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Why Coffee Shops Choose Posso
              </h2>
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
                More Than Just a Coffee App
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The Posso coffee ordering app is not a standalone ordering tool — it is part of your <strong className="text-white">complete coffee shop POS system</strong>. Orders placed through the app appear on the same screen as counter orders. Your menu updates in one place and syncs everywhere.
                </p>
                <p>
                  For multi-site coffee chains, manage menus centrally while allowing each location to set its own availability. If your Shoreditch shop runs out of almond milk, mark it unavailable at that location only — all other shops continue offering it.
                </p>
                <p>
                  The loyalty programme works across all your locations. A customer earns stamps at your morning shop near the station and redeems their free coffee at your weekend shop in town. One account, all locations, seamless loyalty.
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
                <Link href="/cafe-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cafe POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full cafe ePOS system</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering site</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">In-store kiosk ordering</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Contactless payments</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Coffee Ordering App — Frequently Asked Questions" faqs={[
          { question: 'Do my customers need to download an app?', answer: 'No. The Posso coffee ordering app works through the mobile browser. Customers scan a QR code or visit your ordering URL and the menu opens instantly. No app store download, no sign-up required. They can save it to their home screen for quick access if they choose.' },
          { question: 'How does the loyalty stamp system work?', answer: 'Digital loyalty stamps replace paper cards. Each qualifying purchase earns a stamp automatically. When the customer reaches the target (e.g., buy 9 get 10th free), the reward applies on their next order. You set the rules — which products qualify, how many stamps needed, and what the reward is.' },
          { question: 'Can I control how many mobile orders come in during the morning rush?', answer: 'Yes. Pickup time scheduling lets you set capacity per time slot. If you can handle 10 mobile orders between 8:00 and 8:15, set that as the limit. When slots fill up, customers see the next available time. This prevents overwhelming your barista during peak periods.' },
          { question: 'How do milk and syrup modifiers work?', answer: 'Each drink can have modifier groups — milk choice (regular, oat, soy, almond, coconut) with optional price adjustments, syrup choice (vanilla, caramel, hazelnut), size (small, regular, large), and extras (extra shot, decaf). Customers select modifiers when ordering, and the barista sees the full specification on the kitchen display.' },
          { question: 'How much does the coffee ordering app cost?', answer: 'The coffee ordering app is included with the Posso POS system from £499 + VAT. There is no separate monthly fee for mobile ordering or loyalty features. You get POS, mobile ordering, loyalty, and kitchen display all in one system with low commission on orders.' },
          { question: 'Can I use it across multiple coffee shop locations?', answer: 'Yes. Manage menus centrally while each location controls its own availability and stock. Loyalty stamps work across all locations — customers earn and redeem at any branch. Reporting shows performance by location and across your entire chain.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
