import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Globe, Smartphone, MapPin, Clock, CreditCard, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Food Ordering Software',
  description:
    'Online Food Ordering Software with branded website, mobile-first design, delivery zones, time slot management, and POS integration. Take direct orders with low commission. POS from £499 + VAT.',
  keywords: [
    'online food ordering software',
    'online ordering software',
    'food ordering website',
    'online ordering system for restaurants',
    'restaurant online ordering software',
    'takeaway ordering software',
    'online food ordering platform',
    'branded ordering website',
    'direct ordering software',
    'food ordering software uk',
  ],
  alternates: {
    canonical: '/online-food-ordering-software',
  },
  openGraph: {
    title: 'Online Food Ordering Software | Posso UK',
    description:
      'Online Food Ordering Software with branded website, delivery zones, time slots, and POS integration. Low commission direct orders.',
    url: 'https://www.posso.co.uk/online-food-ordering-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Online Food Ordering Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Online food ordering software providing a branded ordering website with mobile-first design, configurable delivery zones, time slot management, and direct POS and kitchen display integration.',
    url: 'https://www.posso.co.uk/online-food-ordering-software',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Branded ordering website with your domain',
      'Mobile-first responsive design',
      'Configurable delivery zones with distance-based pricing',
      'Time slot management for collection and delivery',
      'Direct POS and kitchen display integration',
      'Low commission — keep more of every order',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Online Ordering', item: 'https://www.posso.co.uk/online-ordering' },
      { '@type': 'ListItem', position: 3, name: 'Online Food Ordering Software', item: 'https://www.posso.co.uk/online-food-ordering-software' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Branded Ordering Website', description: 'Your own ordering website on your domain — yourbusiness.co.uk/order. Your logo, your colours, your images. Customers order directly from you, not through a marketplace. You own the customer relationship and the data.' },
  { icon: Smartphone, title: 'Mobile-First Design', description: 'Over 80% of online food orders come from mobile devices. The Posso ordering website is built mobile-first with large touch targets, fast loading, and a checkout flow designed for one-handed phone use. No pinching, no zooming, no frustration.' },
  { icon: MapPin, title: 'Delivery Zone Configuration', description: 'Draw delivery zones on a map and set minimum order values and delivery fees by zone. Charge £1 delivery within 2 miles, £2.50 within 4 miles, and decline orders beyond your delivery range. Customers see their delivery fee before they start ordering.' },
  { icon: Clock, title: 'Time Slot Management', description: 'Control when you accept orders and how many per slot. Set available collection times in 15-minute intervals. Limit delivery slots during peak hours so you never promise more than the kitchen can handle. Disable ordering entirely during closed hours.' },
  { icon: CreditCard, title: 'Online Payment Processing', description: 'Secure online payments via card, Apple Pay, and Google Pay. Payments settle directly to your bank account. Customers can also choose to pay on collection. Refunds process in one click from the dashboard if needed.' },
  { icon: BarChart3, title: 'Order Analytics', description: 'Track online ordering performance: orders per day, average order value, popular items, peak ordering times, and customer repeat rate. Compare online sales against in-store sales. Use the data to optimise your menu, pricing, and promotions.' },
];

const benefits = [
  { title: 'Keep More Revenue Per Order', description: 'Delivery platforms charge 15-35% commission per order. On a £20 order, that is £3-7 going to the platform. With Posso online ordering, you pay low commission — keeping significantly more of every sale. Over a year, the savings on 100 orders per week add up to thousands.' },
  { title: 'Own Your Customer Data', description: 'On Just Eat and Uber Eats, the customer belongs to the platform. You cannot email them, you cannot see their order history, and you cannot build a relationship. With your own ordering website, you collect customer data and can market directly to them with offers and promotions.' },
  { title: 'No Re-Keying Orders', description: 'Online orders arrive directly on your POS and kitchen display. Staff do not need to re-type orders from a separate tablet. This eliminates transcription errors, saves time, and means online orders are treated exactly the same as counter orders in the kitchen.' },
  { title: 'Professional Brand Presence', description: 'A branded ordering website on your own domain builds trust and professionalism. Customers see your brand, your images, and your menu — not a marketplace listing surrounded by competitors. You control the experience from browsing to checkout.' },
];

export default function OnlineFoodOrderingSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Online Ordering', href: '/online-ordering' },
          { label: 'Online Food Ordering Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Globe className="w-3 h-3 mr-2" />
                YOUR BRAND, YOUR ORDERS, YOUR DATA
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Online Food Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Your own branded ordering website with delivery zones, time slots, and direct POS integration. Take orders with low commission instead of giving 35% to delivery platforms.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Branded website on your domain</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission — keep more per order</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete POS with online ordering from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Online Ordering Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything you need to take orders online — without the 35% commission hit.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Switch to Direct Online Ordering</h2>
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
                Works Alongside Delivery Platforms
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  You do not have to choose between your own website and delivery platforms. Most Posso customers <strong className="text-white">run both</strong> — using Just Eat and Uber Eats for discovery while directing repeat customers to their branded website for lower-commission orders.
                </p>
                <p>
                  All orders — whether from your website, Just Eat, Uber Eats, or Deliveroo — arrive on the <strong className="text-white">same POS and kitchen display</strong>. The kitchen does not need to know which channel the order came from. One workflow, multiple revenue streams.
                </p>
                <p>
                  Over time, as more customers order directly through your website, your dependency on high-commission platforms reduces. Include flyers with delivery orders directing customers to your website for their next order. A simple <strong className="text-white">"Order direct and save"</strong> message shifts behaviour gradually.
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
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Full online ordering</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">In-store ordering</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Online Food Ordering Software — Frequently Asked Questions" faqs={[
          { question: 'Do I get my own branded ordering website?', answer: 'Yes. You get a fully branded ordering website on your own domain or subdomain. Your logo, colours, images, and menu are displayed throughout the ordering journey. Customers see your brand, not a marketplace. The website is mobile-first, fast-loading, and optimised for conversion.' },
          { question: 'How do delivery zones work?', answer: 'You draw delivery zones on a map and set minimum order values and delivery fees for each zone. For example, free delivery within 1 mile, £2 delivery within 3 miles, £4 within 5 miles. Customers enter their postcode and see whether delivery is available and what it costs before they start ordering.' },
          { question: 'What commission does Posso charge on online orders?', answer: 'Posso charges low commission on online orders through your branded website. This is significantly less than the 15-35% charged by Just Eat, Uber Eats, and Deliveroo. The exact rate depends on your plan — contact us for a quote tailored to your order volume.' },
          { question: 'Do online orders appear on my POS and kitchen display?', answer: 'Yes. Online orders arrive directly on your POS and kitchen display in the same format as counter orders. Staff do not need to re-type anything. The kitchen sees the full order with items, modifiers, and collection or delivery time — all automated.' },
          { question: 'Can customers pay online?', answer: 'Yes. Secure online payments via card, Apple Pay, and Google Pay are supported. Payments settle directly to your bank account. Customers can also choose pay-on-collection if you enable that option. Refunds can be processed in one click from the Posso dashboard.' },
          { question: 'How much does the online food ordering software cost?', answer: 'Online ordering is included with the Posso POS system from £499 + VAT. There is no separate monthly fee for the ordering website. You get POS, online ordering, kitchen display, and delivery integration all in one system. Low commission on orders, not high platform fees.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
