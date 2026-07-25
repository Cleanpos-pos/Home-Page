import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Globe, UserCircle, History, CreditCard, Bell, Repeat } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Food Ordering Portal',
  description:
    'Online Food Ordering Portal with customer accounts, order history, quick reordering, real-time menu sync, and POS integration. Your branded web ordering platform. Low commission.',
  keywords: [
    'online food ordering portal',
    'online food ordering system',
    'online food ordering website',
    'food ordering portal',
    'web food ordering system',
    'online ordering portal uk',
    'branded food ordering website',
    'online ordering platform food',
    'food ordering web portal',
    'restaurant online ordering portal',
  ],
  alternates: {
    canonical: '/online-food-ordering-portal',
  },
  openGraph: {
    title: 'Online Food Ordering Portal | Posso UK',
    description:
      'Online Food Ordering Portal with customer accounts, order history, reordering, and direct POS integration. Low commission.',
    url: 'https://www.posso.co.uk/online-food-ordering-portal',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Online Food Ordering Portal',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Branded online food ordering portal with customer accounts, order history, one-tap reordering, real-time menu synchronisation, and direct POS integration for restaurants and takeaways.',
    url: 'https://www.posso.co.uk/online-food-ordering-portal',
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
      reviewCount: '209',
      bestRating: '5',
    },
    featureList: [
      'Branded online ordering website',
      'Customer accounts with saved details',
      'Order history and quick reordering',
      'Real-time menu and price sync',
      'Direct POS and kitchen integration',
      'Secure online card payment',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Online Ordering', item: 'https://www.posso.co.uk/online-ordering' },
      { '@type': 'ListItem', position: 3, name: 'Online Food Ordering Portal', item: 'https://www.posso.co.uk/online-food-ordering-portal' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Branded Ordering Website', description: 'Your restaurant name, logo, colours, and imagery — not a generic template. The portal lives at your domain (order.yourrestaurant.co.uk) and feels like part of your brand. Customers associate the ordering experience with you, not a third-party platform. Full SEO control means your portal ranks in local search results.' },
  { icon: UserCircle, title: 'Customer Accounts', description: 'Customers create an account with their name, email, phone, and delivery address. Saved payment methods speed up checkout. Account holders receive order confirmations, delivery updates, and promotional emails. You build a direct customer database you own — no intermediary platform controlling access to your customers.' },
  { icon: History, title: 'Order History & Reordering', description: 'Every past order is saved in the customer\'s account. Reordering a favourite meal takes two taps — view history, tap "Reorder", confirm, and pay. For takeaways and restaurants with regular customers, this drastically reduces friction. A customer who orders the same meal every Friday evening completes the process in under 30 seconds.' },
  { icon: CreditCard, title: 'Secure Online Payment', description: 'Stripe-powered card processing with PCI DSS compliance. Customers pay by debit card, credit card, Apple Pay, or Google Pay. Saved cards enable one-tap checkout for returning customers. Refunds process directly through the portal. All transactions appear in your POS reports alongside in-store sales.' },
  { icon: Bell, title: 'Real-Time Order Notifications', description: 'Customers receive an order confirmation email immediately. When the kitchen marks the order as ready, a notification is sent — email and optional SMS. Delivery customers receive updates when the order is dispatched and estimated arrival time. The portal keeps customers informed without them needing to phone your restaurant.' },
  { icon: Repeat, title: 'Live Menu Sync', description: 'The online portal reflects your POS menu in real time. Change a price at the till — the website updates instantly. Mark a dish as sold out — it disappears from the portal immediately. Add a daily special — it appears online within seconds. No manual website updates, no outdated menus, no disappointed customers ordering unavailable items.' },
];

const benefits = [
  { title: 'Stop Paying 35% to Aggregators', description: 'Every order on Just Eat, Uber Eats, or Deliveroo costs up to 35% in commission. Your branded online ordering portal charges low commission per order. On a £25 average order, the difference is substantial. Over a year, direct online orders through your portal could save thousands compared to aggregator platforms.' },
  { title: 'Own Your Customer Relationships', description: 'When customers order through aggregator apps, the platform owns the data. You cannot email them, you cannot track their ordering patterns, and you cannot build loyalty. Your own portal gives you full access to customer data — names, emails, order history, preferences. You market to them directly and build lasting relationships.' },
  { title: 'Reduce Phone Order Volume', description: 'Phone orders tie up staff, create queues, and risk miscommunication. A well-promoted online portal converts phone customers to digital customers. They order at their convenience — no engaged lines, no hold music, no misheard addresses. Staff time is freed up for preparation and service instead of answering phones.' },
  { title: 'Increase Repeat Business', description: 'Customer accounts with saved details and one-tap reordering remove barriers to repeat purchases. The easier it is to order again, the more often customers do it. Combine with email marketing to regular customers — a Friday lunchtime offer sent to your database of repeat orderers drives measurable additional revenue.' },
];

export default function OnlineFoodOrderingPortalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Online Ordering', href: '/online-ordering' },
          { label: 'Online Food Ordering Portal' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Globe className="w-3 h-3 mr-2" />
                YOUR BRANDED ORDERING PORTAL
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Online Food Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Portal
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A web-based ordering portal branded to your restaurant — customer accounts, order history, one-tap reordering, and direct kitchen integration at low commission.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Customer accounts with saved details</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Order history and one-tap reordering</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Online Ordering Portal Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A complete web ordering platform that integrates directly with your POS and kitchen.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Their Own Portal</h2>
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
                Your Restaurant, Your Portal, Your Customers
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Third-party delivery apps put your restaurant alongside every competitor in your area. Customers choose on price, not loyalty. Your food photos sit next to everyone else is. And you pay up to 35% for the privilege. An online food ordering portal <strong className="text-white">puts your brand front and centre</strong> and keeps the relationship between you and your customer.
                </p>
                <p>
                  The portal syncs with your POS in real time. <strong className="text-white">Menu changes, price updates, and sold-out items</strong> reflect instantly on the website. Orders flow directly to your kitchen display — no separate tablet, no manual acceptance step. The portal is an extension of your POS, not a disconnected add-on.
                </p>
                <p>
                  Customer accounts transform one-time orderers into repeat customers. When someone can <strong className="text-white">log in, tap their last order, and check out in 30 seconds</strong>, they order more often. Combine that with email marketing to your customer database and you have a direct-to-customer channel that aggregator platforms simply cannot replicate.
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
                <Link href="/food-ordering-machine" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Ordering Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Self-service kiosks</p>
                </Link>
                <Link href="/tablet-food-ordering-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Tablet Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Restaurant tablets</p>
                </Link>
                <Link href="/takeaway-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway App</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile ordering app</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Online Food Ordering Portal — Frequently Asked Questions" faqs={[
          { question: 'Is the portal branded to my restaurant?', answer: 'Yes. The portal uses your restaurant name, logo, brand colours, and food photography. It can live on your own domain (e.g. order.yourrestaurant.co.uk) or as a subdomain. Customers see your brand throughout the entire ordering experience — not a generic platform. Google indexes your portal for local search visibility.' },
          { question: 'How do customer accounts work?', answer: 'Customers sign up with their email, name, phone number, and delivery address. They can save payment methods for faster checkout. Past orders are stored in their account for easy reordering. You have full access to the customer database for email marketing, loyalty programmes, and order analysis.' },
          { question: 'Does it sync with my POS?', answer: 'Yes. The portal connects directly to your Posso POS. Menu items, prices, modifiers, and availability sync in real time. Orders placed online appear on your POS and kitchen display instantly — no manual acceptance required. Sales reports combine in-store and online transactions in one dashboard.' },
          { question: 'What commission do you charge?', answer: 'Low commission compared to aggregator platforms that charge up to 35% per order. The exact rate depends on your transaction volume — contact us on 0808 175 3956 for a personalised quote. There are no signup fees, no monthly minimums, and no hidden charges.' },
          { question: 'Can customers reorder previous meals?', answer: 'Yes. Every order is saved in the customer\'s account. They can view their full order history and reorder any previous meal with two taps — select the order and confirm. The reorder includes all original customisations and modifiers. For regular customers, this reduces ordering time from minutes to seconds.' },
          { question: 'How much does the ordering portal cost?', answer: 'The online ordering portal is included with the Posso POS system from £499 + VAT. There is no separate setup fee for the portal. You pay low commission per online order. The portal includes branded design, customer accounts, order history, payment processing, and POS integration. Free setup and menu upload included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
