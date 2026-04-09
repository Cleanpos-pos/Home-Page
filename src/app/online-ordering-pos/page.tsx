import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Globe, ShoppingBag, Truck, Bell, CreditCard, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Ordering POS',
  description:
    'Online Ordering POS with built-in website ordering, delivery and collection management, and no third-party commission. Own your customer data. POS from £499 + VAT.',
  keywords: [
    'online ordering pos',
    'pos with online ordering',
    'online ordering system',
    'restaurant online ordering',
    'takeaway online ordering',
    'online ordering pos system',
    'integrated online ordering',
    'online ordering pos uk',
    'pos online orders',
    'built in online ordering',
  ],
  alternates: {
    canonical: '/online-ordering-pos',
  },
  openGraph: {
    title: 'Online Ordering POS | Posso UK',
    description:
      'Online Ordering POS with built-in ordering, no third-party fees, and delivery + collection management. Own your customers.',
    url: 'https://posso.co.uk/online-ordering-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Online Ordering POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'POS system with built-in online ordering for delivery and collection. No third-party marketplace fees, integrated payment processing, and real-time order management for restaurants and takeaways.',
    url: 'https://posso.co.uk/online-ordering-pos',
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
      reviewCount: '267',
      bestRating: '5',
    },
    featureList: [
      'Built-in online ordering website',
      'Delivery and collection management',
      'No third-party marketplace commission',
      'Real-time order sync to kitchen display',
      'Customer database and order history',
      'Integrated payment processing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Online Ordering POS', item: 'https://posso.co.uk/online-ordering-pos' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Built-In Online Ordering', description: 'Your POS includes a branded online ordering website — no separate platform, no third-party marketplace, no 30% commission. Customers visit your website, browse your menu, place an order, and pay. The order appears on your POS and kitchen display instantly. One system handles in-store, online, and phone orders.' },
  { icon: Truck, title: 'Delivery & Collection Management', description: 'Customers choose delivery or collection at checkout. Delivery orders show the address, estimated time, and delivery zone. Collection orders show the pickup time. Your kitchen sees both in one queue with clear labels. Manage delivery zones and set minimum order values per zone — all configured from your dashboard.' },
  { icon: CreditCard, title: 'Integrated Payment Processing', description: 'Online payments process through your POS payment provider at low commission — no separate payment gateway, no additional merchant account. Card payments settle directly to your bank. Refunds process from the POS with one tap. The customer receives automatic email confirmation with their order details and estimated time.' },
  { icon: Bell, title: 'Real-Time Order Notifications', description: 'When a customer places an online order, your POS beeps, your kitchen display updates, and your phone receives a push notification. No order goes unnoticed. The system auto-accepts orders during busy periods or you can manually review and confirm each one. Customers receive live status updates: confirmed, preparing, ready, out for delivery.' },
  { icon: ShoppingBag, title: 'Customer Data Ownership', description: 'Every customer who orders online is your customer — not a marketplace customer. You own the name, email, phone number, address, and complete order history. Send targeted promotions, track repeat ordering rates, and build loyalty programmes. No intermediary standing between you and your customers.' },
  { icon: BarChart3, title: 'Unified Sales Reporting', description: 'Online orders, in-store orders, and phone orders all appear in one reporting dashboard. Compare channels side by side: revenue, average order value, popular items, and peak times. Understand which channel drives the most profit, which items sell best online versus in-store, and where to focus your marketing spend.' },
];

const benefits = [
  { title: 'Stop Paying 30% to Marketplaces', description: 'Third-party delivery apps charge up to 30% commission on every order. On a £20 order, that is £6 gone before you factor in food cost, labour, and packaging. Posso online ordering charges low commission — you keep the margin. For a business doing £5,000 per month in online orders, the saving is substantial.' },
  { title: 'Own Your Customer Relationships', description: 'When a customer orders through a marketplace, the marketplace owns that customer. They control the communication, the data, and the re-engagement. With your own online ordering, every customer belongs to you. Their email, their phone number, their order history — all in your CRM. Send a promotion on a quiet Tuesday and bring them back.' },
  { title: 'One System for Every Order Channel', description: 'Walk-in, phone, kiosk, and online orders all funnel into the same POS. The kitchen sees one queue. Reports show all channels. Staff do not toggle between different tablets and platforms. When a customer calls to check their online order, your staff see it on the same screen as every other order.' },
  { title: 'Go Live in Days, Not Weeks', description: 'Your online ordering website is generated from your existing POS menu. Product names, descriptions, modifiers, prices, and images transfer automatically. We configure your delivery zones, set your opening hours, and publish the site. Most businesses are taking online orders within 48 hours of signing up.' },
];

export default function OnlineOrderingPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Online Ordering POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Globe className="w-3 h-3 mr-2" />
                BUILT-IN ONLINE ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Online Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                POS with built-in online ordering — customers order from your branded website, the order appears on your kitchen display, and you keep the profit. No third-party commission.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Branded ordering website included</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Delivery and collection with live tracking</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Online ordering POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Online Ordering POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything you need to take orders online, manage delivery and collection, and keep your profits.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Posso Online Ordering</h2>
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
                Your Orders, Your Customers, Your Profit
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Every order through a third-party marketplace costs you <strong className="text-white">up to 30% in commission</strong>. That eats into your margins on every delivery. Posso gives you your own branded ordering platform at low commission — the difference goes straight to your bottom line.
                </p>
                <p>
                  The online ordering is <strong className="text-white">built into the POS</strong>, not bolted on as a separate system. Your menu syncs automatically. Orders appear on the same kitchen display as walk-in and phone orders. There is no second tablet, no manual order entry, no risk of missed orders.
                </p>
                <p>
                  For customers, the experience is seamless: <strong className="text-white">browse, order, pay, track</strong>. They receive confirmation, status updates, and delivery notifications. For you, it means more orders, better margins, and a direct relationship with every customer who orders online.
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
                <Link href="/delivery-pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery POS</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery-focused POS</p>
                </Link>
                <Link href="/food-delivery-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Delivery Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery management</p>
                </Link>
                <Link href="/takeaway-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway App</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering app</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Online Ordering POS — Frequently Asked Questions" faqs={[
          { question: 'Do I need a separate website for online ordering?', answer: 'No. The Posso POS includes a branded online ordering website that is generated from your existing menu. Customers access it via your domain or a Posso subdomain. The website is mobile-optimised, fast, and designed to convert browsers into buyers. No web developer needed.' },
          { question: 'How much commission do you charge on online orders?', answer: 'Posso charges low commission on online orders — significantly less than the 25-35% charged by third-party marketplaces. The exact rate depends on your plan. There are no hidden fees, no per-order surcharges, and no monthly minimums. You keep the vast majority of your revenue.' },
          { question: 'Can I manage delivery zones and minimum orders?', answer: 'Yes. Set up delivery zones by postcode or radius. Each zone can have its own delivery charge and minimum order value. If a customer enters an address outside your delivery area, the system offers collection instead. You control the zones from your dashboard and can adjust them at any time.' },
          { question: 'Do online orders appear on my kitchen display?', answer: 'Yes. Online orders sync to your kitchen display in real time alongside walk-in, phone, and kiosk orders. Each order is labelled with its source and type — delivery or collection. The kitchen works from one queue, regardless of how the order was placed.' },
          { question: 'Can customers track their delivery?', answer: 'Yes. After placing an order, customers receive live status updates: order confirmed, preparing, ready, out for delivery. If you use your own drivers, the system provides estimated delivery times based on your zone configuration. Customers stay informed without needing to call your restaurant.' },
          { question: 'How much does an online ordering POS cost?', answer: 'The complete POS with built-in online ordering starts from £499 + VAT including touchscreen terminal, cloud software, and branded ordering website. Online orders are processed at low commission. Free setup, menu configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
