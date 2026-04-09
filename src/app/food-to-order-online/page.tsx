import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, UtensilsCrossed, Globe, Truck, CreditCard, Bell, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food to Order Online',
  description:
    'Food to Order Online — branded online ordering for restaurants and takeaways. Delivery, collection, and table ordering through your own website. Low commission. POS from £499 + VAT.',
  keywords: [
    'food to order online',
    'online food ordering system',
    'restaurant online ordering',
    'food ordering website',
    'online ordering for restaurants',
    'takeaway ordering system',
    'food delivery ordering system',
    'online food order system uk',
    'restaurant ordering platform',
    'food ordering app uk',
  ],
  alternates: {
    canonical: '/food-to-order-online',
  },
  openGraph: {
    title: 'Food to Order Online | Posso UK',
    description:
      'Food to Order Online — branded online ordering for restaurants and takeaways. Delivery and collection through your own website.',
    url: 'https://posso.co.uk/food-to-order-online',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Online Food Ordering',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Online food ordering system for restaurants and takeaways with branded website, delivery and collection management, kitchen display integration, and low commission payment processing.',
    url: 'https://posso.co.uk/food-to-order-online',
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
      reviewCount: '278',
      bestRating: '5',
    },
    featureList: [
      'Branded online ordering website',
      'Delivery and collection management',
      'Kitchen display integration',
      'Real-time order notifications',
      'Low commission payment processing',
      'Customer account and reorder history',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Food to Order Online', item: 'https://posso.co.uk/food-to-order-online' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Your Own Branded Website', description: 'Customers order through your branded website — your logo, your colours, your domain name. No third-party marketplace branding competing for your customer\'s attention. The ordering site is mobile-optimised and loads in under 2 seconds. Customers see your brand, order your food, and come back to you.' },
  { icon: Truck, title: 'Delivery & Collection Management', description: 'Customers choose delivery or collection at checkout. Delivery orders show the address, distance, and estimated prep time. Collection orders show the pickup time. Your kitchen sees delivery and collection orders on separate tabs. Drivers receive dispatch notifications. The entire fulfilment flow is managed from one screen.' },
  { icon: UtensilsCrossed, title: 'Kitchen Display Integration', description: 'Online orders fire directly to the kitchen display alongside walk-in and phone orders. Each order shows the full item list, modifiers, allergen flags, and fulfilment type (delivery or collection). The kitchen works one unified queue — no separate tablet for online orders, no manual re-entry, no missed tickets.' },
  { icon: Bell, title: 'Real-Time Order Notifications', description: 'When an order comes in, your POS sounds an alert and the order appears on the kitchen display. The customer receives an order confirmation email with an estimated ready time. When the order is marked as ready, the customer gets a notification. For delivery, the driver is alerted simultaneously.' },
  { icon: CreditCard, title: 'Low Commission Payments', description: 'Third-party marketplaces charge 15–35% commission on every order. Posso online ordering charges low commission — typically saving restaurants thousands of pounds per month. Payments settle directly into your bank account. You keep the revenue that marketplaces normally take.' },
  { icon: BarChart3, title: 'Customer Accounts & Reordering', description: 'Returning customers log in, see their order history, and reorder their favourites in one tap. The system tracks customer preferences, order frequency, and lifetime spend. Use this data to send targeted offers to lapsed customers or reward your most loyal regulars with exclusive deals.' },
];

const benefits = [
  { title: 'Stop Paying 30% to Marketplaces', description: 'Deliveroo, Just Eat, and Uber Eats charge 15–35% commission on every order. On a £20 meal, that is £3–£7 going to the marketplace. With Posso online ordering, you pay low commission. On 100 orders per week, that difference adds up to hundreds of pounds in recovered profit every single month.' },
  { title: 'Own Your Customer Relationships', description: 'On third-party marketplaces, the customer belongs to the marketplace — not to you. You cannot email them, you do not get their phone number, and they see competitor restaurants on the same page. With your own branded ordering site, the customer is yours. You build a direct relationship and a reusable customer list.' },
  { title: 'Increase Order Frequency', description: 'Customer accounts with saved favourites and one-tap reordering remove friction. A customer who previously ordered once a month orders weekly when reordering is effortless. Push notifications for new menu items and seasonal specials bring customers back without spending on advertising.' },
  { title: 'Unified Operations', description: 'Online, phone, walk-in, and kiosk orders all appear on one kitchen display. Your staff work one queue, not four separate systems. Reporting combines all channels into one dashboard. You see total revenue, channel breakdown, peak ordering times, and best-selling items across every order source.' },
];

export default function FoodToOrderOnlinePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Food to Order Online' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <UtensilsCrossed className="w-3 h-3 mr-2" />
                ONLINE FOOD ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Food to Order{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Online
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Your own branded online ordering website for delivery and collection. Customers order directly from you — no marketplace commission, no competing restaurants, no lost customer data.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Branded ordering website included</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission on every order</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Online Food Ordering Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A complete branded ordering platform — from menu to kitchen display to customer doorstep.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Switch to Direct Ordering</h2>
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
                From Takeaways to Restaurant Groups
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">single-site takeaway</strong> uses Posso online ordering to take delivery and collection orders through its own branded website. Customers find the restaurant on Google, land on the ordering page, and place their order directly. No 30% marketplace commission eating into already-tight margins.
                </p>
                <p>
                  A <strong className="text-white">sit-down restaurant</strong> adds online ordering for click-and-collect lunch trade. Office workers order ahead on their phone and collect on their way past. The kitchen prepares the order alongside dine-in covers. A new revenue stream with zero additional front-of-house staffing.
                </p>
                <p>
                  A <strong className="text-white">multi-site restaurant group</strong> rolls out branded ordering across all locations. Each site has its own menu and delivery zone, but the customer sees one brand. Head office monitors order volume, revenue, and customer data across every location from a single dashboard.
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
                <Link href="/food-delivery-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Delivery Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery management</p>
                </Link>
                <Link href="/takeaway-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway App</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile ordering app</p>
                </Link>
                <Link href="/restaurant-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant system</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Food to Order Online — Frequently Asked Questions" faqs={[
          { question: 'How does online food ordering work?', answer: 'Customers visit your branded ordering website on their phone or computer. They browse your menu with images and descriptions, select items and modifiers, choose delivery or collection, enter their details, and pay online. The order fires directly to your kitchen display with full item detail, modifiers, and fulfilment type.' },
          { question: 'How much commission does Posso charge?', answer: 'Posso charges low commission on online orders — significantly less than the 15–35% charged by marketplace platforms like Deliveroo, Just Eat, and Uber Eats. The exact rate depends on your order volume. Contact us for a quote. The POS system itself starts from £499 + VAT.' },
          { question: 'Can I keep using Deliveroo and Just Eat alongside Posso?', answer: 'Yes. Many restaurants run marketplace listings alongside their own branded ordering site. Use marketplaces for discovery and new customers, then convert them to ordering directly through your site with incentives like exclusive deals or loyalty rewards. Over time, shift more volume to your own platform.' },
          { question: 'Do customers need to download an app?', answer: 'No. The ordering website works in any mobile browser — no app download required. Customers simply visit your URL, browse, and order. This removes the friction of asking customers to install yet another app. For repeat customers, they can save the site to their home screen for one-tap access.' },
          { question: 'How do I manage my delivery drivers?', answer: 'The system shows pending delivery orders with address, distance, and prep time. When the order is ready, you dispatch a driver from the screen. The driver receives the delivery details on their phone. If you do not have your own drivers, Posso can integrate with third-party delivery services.' },
          { question: 'Can I set delivery zones and minimum order values?', answer: 'Yes. Define your delivery radius by postcode or distance. Set minimum order values per zone — for example, £10 minimum within 2 miles, £15 minimum for 2–4 miles. Delivery charges can be free, flat-rate, or distance-based. Zones and charges are managed from the cloud dashboard.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
