import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Coffee, Globe, Clock, ShoppingBag, Palette, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Based Ordering System for Coffee Shops',
  description:
    'Web Based Ordering System for Coffee Shops with click-and-collect, drink customisation, loyalty rewards, and POS integration. Branded online ordering for your coffee shop. Low commission.',
  keywords: [
    'web based ordering system coffee shops',
    'coffee shop online ordering',
    'coffee shop web ordering',
    'online ordering for coffee shops',
    'coffee shop click and collect',
    'coffee shop ordering system',
    'web ordering coffee shop',
    'coffee shop online ordering system uk',
    'online ordering platform coffee shop',
    'coffee shop digital ordering',
  ],
  alternates: {
    canonical: '/web-based-ordering-system-coffee-shops',
  },
  openGraph: {
    title: 'Web Based Ordering System for Coffee Shops | Posso UK',
    description:
      'Web Based Ordering System for Coffee Shops — click-and-collect, drink customisation, loyalty rewards, and POS integration.',
    url: 'https://www.posso.co.uk/web-based-ordering-system-coffee-shops',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Web Based Ordering System for Coffee Shops',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Web-based ordering system designed for coffee shops with click-and-collect, drink customisation options, loyalty rewards integration, and direct POS connection for seamless barista workflow.',
    url: 'https://www.posso.co.uk/web-based-ordering-system-coffee-shops',
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
      reviewCount: '178',
      bestRating: '5',
    },
    featureList: [
      'Click-and-collect ordering',
      'Drink customisation (milk, size, extras)',
      'Loyalty rewards integration',
      'Real-time POS and barista display sync',
      'Branded web ordering portal',
      'Peak hour time slot management',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Coffee POS', item: 'https://www.posso.co.uk/coffee-pos-system' },
      { '@type': 'ListItem', position: 3, name: 'Web Based Ordering System for Coffee Shops', item: 'https://www.posso.co.uk/web-based-ordering-system-coffee-shops' },
    ],
  },
];

const features = [
  { icon: ShoppingBag, title: 'Click-and-Collect Ordering', description: 'Customers order from their phone or laptop, select a collection time, and walk in to pick up their drink — no queuing. The barista display shows the order with the customer name and collection time. Drinks are prepared just before the pickup slot so they are fresh. The morning rush queue shrinks while order volume grows.' },
  { icon: Coffee, title: 'Full Drink Customisation', description: 'Oat milk flat white with an extra shot and vanilla syrup? The web ordering system supports every customisation your coffee shop offers — milk alternatives (oat, soy, almond, coconut), sizes (regular, large), extra shots, flavour syrups, decaf options, and temperature preferences. Each modifier adjusts the price automatically.' },
  { icon: Palette, title: 'Branded to Your Coffee Shop', description: 'The ordering page carries your coffee shop name, logo, colours, and imagery. It is your brand, not a generic platform. Customers access it via your website URL or a QR code on your counter or window. No app download required — it works in any mobile browser. First-time visitors see your brand, not a middleman.' },
  { icon: Clock, title: 'Time Slot Management', description: 'Limit the number of orders per 15-minute slot to prevent the barista station from being overwhelmed. If the 8:15-8:30 slot is full, customers are offered the next available slot. This ensures every order is prepared fresh and on time. No more 20 online orders arriving simultaneously during peak morning rush.' },
  { icon: Globe, title: 'POS & Barista Display Sync', description: 'Web orders appear on the barista display alongside counter orders in one unified queue. No separate tablet. No manual order re-entry. The barista sees the drink specification, customer name, and collection time. When the drink is ready, a tap marks it as complete and notifies the customer.' },
  { icon: BarChart3, title: 'Customer Insights & Loyalty', description: 'Track which drinks are ordered online most, which customisations are popular, and who your most frequent online customers are. Integrate with loyalty rewards — buy 9 coffees, get the 10th free — tracked across in-store and online purchases. Send targeted offers to customers who have not ordered in 2 weeks.' },
];

const benefits = [
  { title: 'Eliminate Morning Queue Walkouts', description: 'Customers who see a 15-person queue at 8am often leave. With click-and-collect, they order from the bus, tube, or car and walk straight to the pickup point. You keep the sale that would have been lost to the queue. Morning revenue increases without adding staff or counter space.' },
  { title: 'Keep Aggregator Commission in Your Pocket', description: 'Delivery app commissions of up to 35% devastate margins on a £3.50 coffee. Your own web ordering system charges low commission. On hundreds of orders per week, the savings add up to thousands per year. Every order through your branded system is significantly more profitable than one through a third-party app.' },
  { title: 'Increase Average Order Value', description: 'Online ordering gives customers time to browse your full menu — pastries, sandwiches, snacks — that they might skip when rushing through a counter queue. Add-on suggestions ("Add a pastry for £1.50?") convert at higher rates online than at the counter. Data consistently shows higher basket values from web orders.' },
  { title: 'Build a Direct Customer Database', description: 'Every web order captures the customer email and order history. Use this data for targeted marketing — a Monday morning offer to regular weekday customers, a new seasonal drink announcement, a loyalty milestone congratulation. You own the relationship. Aggregator platforms keep this data from you.' },
];

export default function WebBasedOrderingCoffeeShopsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Coffee POS', href: '/coffee-pos-system' },
          { label: 'Web Based Ordering' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Coffee className="w-3 h-3 mr-2" />
                COFFEE SHOP WEB ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Web Based Ordering System for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coffee Shops
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Let customers order their coffee online, choose a collection time, and skip the queue. Click-and-collect with full drink customisation, branded to your coffee shop.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Click-and-collect with time slot management</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full drink customisation online</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Web Ordering Features for Coffee Shops</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Built specifically for how coffee shops operate — fast drinks, precise customisations, and morning rush management.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Coffee Shops Choose Web Ordering</h2>
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
                Web Ordering Built for Coffee Shop Pace
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Coffee shops operate differently from restaurants. Orders are fast, customisations are specific, and the morning rush is intense. A web ordering system for coffee shops needs to <strong className="text-white">handle high volume, precise drink specs, and tight collection windows</strong> — not just display a menu and take payment.
                </p>
                <p>
                  The click-and-collect model is perfect for coffee. Customers order from their phone while commuting, <strong className="text-white">select a 5-minute collection window, and walk in to grab their drink</strong> without queuing. The barista prepares the order just before the pickup time so the coffee is fresh. No cold drinks sitting on a counter. No guessing when the customer will arrive.
                </p>
                <p>
                  Time slot management prevents the barista from being overwhelmed. If 8:15am is fully booked, the customer sees <strong className="text-white">8:20am as the next available slot</strong>. This smooths demand across the morning rush instead of creating order pile-ups. Counter customers and web customers are served equally well because capacity is managed intelligently.
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
                <Link href="/online-ordering-software-coffee-shops" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering Software</p>
                  <p className="text-slate-400 text-sm mt-1">Coffee shop ordering</p>
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

        <FAQSection title="Web Based Ordering for Coffee Shops — Frequently Asked Questions" faqs={[
          { question: 'Do customers need to download an app?', answer: 'No. The web ordering system runs in any mobile browser — Safari, Chrome, Firefox. Customers access it via your website URL, a QR code on your counter, or a link in your social media bio. No app store download, no account creation required for the first order. It works immediately on any smartphone.' },
          { question: 'Can customers fully customise their drinks?', answer: 'Yes. The system supports milk alternatives (oat, soy, almond, coconut), size options (regular, large), extra shots, flavour syrups (vanilla, caramel, hazelnut), decaf, and temperature preferences. Each customisation adjusts the price automatically. The barista display shows the complete drink specification.' },
          { question: 'How does click-and-collect work?', answer: 'Customers select their drinks, choose a collection time slot (e.g. 8:20am), and pay online. The order appears on the barista display at the right time for preparation. The drink is ready when the customer arrives. No queuing, no waiting. A notification can alert the customer when their drink is ready for pickup.' },
          { question: 'Can I limit orders during busy periods?', answer: 'Yes. Time slot management lets you cap the number of online orders per slot (e.g. maximum 8 orders per 15-minute window). When a slot is full, customers see the next available time. This prevents the barista station from being overwhelmed and ensures every drink — counter and online — is prepared promptly.' },
          { question: 'Does it integrate with loyalty rewards?', answer: 'Yes. Loyalty stamps are tracked across in-store and online purchases. A customer buying their 9th coffee online gets the 10th free, just like buying at the counter. Points balances appear in the customer\'s online account. Loyalty drives repeat online ordering and increases customer lifetime value.' },
          { question: 'How much does the web ordering system cost?', answer: 'The web ordering system is included with the Posso coffee shop POS from £499 + VAT. Low commission per online order. No separate monthly fee for the ordering platform. Includes branded design, drink customisation, time slot management, and POS integration. Free setup and menu configuration included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
