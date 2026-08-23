import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Phone, ArrowRight, Pizza, Monitor, Smartphone, Truck, Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Does Domino\'s Use a POS System? (Pulse Explained)',
  description:
    'Yes, Domino\'s uses a proprietary POS system called Pulse. Learn what it does, how it works, and how independent pizza shops can get similar features with Posso from £499 + VAT.',
  keywords: [
    'does Dominos use a POS system',
    'Dominos POS system',
    'Dominos Pulse POS',
    'pizza chain POS system',
    'Dominos ordering system',
    'POS system like Dominos',
    'pizza POS system UK',
    'independent pizza shop POS',
  ],
  alternates: { canonical: '/does-dominos-use-a-pos-system' },
  openGraph: {
    title: 'Does Domino\'s Use a POS System? (Pulse Explained)',
    description: 'Domino\'s uses a proprietary POS called Pulse. Learn how independent pizza shops can access similar pizza-specific POS features from £499 + VAT.',
    url: 'https://www.posso.co.uk/does-dominos-use-a-pos-system',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Does Domino\'s Use a POS System?',
    description: 'Exploring Domino\'s proprietary Pulse POS system and how independent pizza shops can access similar pizza-specific POS features.',
    author: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
    publisher: { '@type': 'Organization', name: 'Posso Ltd', logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' } },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    url: 'https://www.posso.co.uk/does-dominos-use-a-pos-system',
    image: 'https://www.posso.co.uk/og-image.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Does Domino\'s Use a POS System?', item: 'https://www.posso.co.uk/does-dominos-use-a-pos-system' },
    ],
  },
];

const pulseFeatures = [
  { title: 'Order Management', description: 'Pulse handles in-store, phone, online, and app orders through a single unified interface. Every order — regardless of channel — flows into the same system.' },
  { title: 'Delivery Tracking', description: 'Real-time GPS tracking for every delivery driver. Customers can see their order progress from oven to door, and store managers can monitor driver efficiency.' },
  { title: 'Inventory Management', description: 'Automatic stock tracking for dough, cheese, toppings, and packaging. Pulse can predict ingredient needs based on sales patterns and flag low-stock items.' },
  { title: 'Customer Data & Loyalty', description: 'Full customer order history, preferences, and contact details. This powers repeat ordering ("order your usual") and targeted promotions.' },
  { title: 'Makeline Display', description: 'Kitchen screens show each pizza build in sequence — the pizza maker sees exactly what to make, in what order, with full topping specs per pizza.' },
  { title: 'Franchise Reporting', description: 'Sales data, labour costs, food costs, and performance metrics roll up to regional and national dashboards for franchise oversight.' },
];

const possoComparison = [
  { icon: Pizza, title: 'Visual Pizza Builder', description: 'Like Pulse, Posso has a dedicated pizza builder — staff and customers tap to build pizzas visually with split-sided toppings, size selection, and real-time pricing.' },
  { icon: Truck, title: 'Delivery Management', description: 'Delivery zones, custom fees, minimum order values, and driver tracking. Not as vast as Domino\'s global logistics, but everything an independent shop needs.' },
  { icon: Monitor, title: 'Kitchen Display System', description: 'Full pizza specs on the KDS — size, base, sauce, every topping by position. Your pizza makers get the same clarity Domino\'s staff enjoy.' },
  { icon: Smartphone, title: 'Online Ordering', description: 'Your own branded ordering website with the pizza builder built in. Customers build pizzas online just like on the Domino\'s app — orders go straight to your kitchen.' },
  { icon: Globe, title: 'Multi-Channel Orders', description: 'In-store, kiosk, online, and phone orders all flow into one system. No juggling separate tablets for different order sources.' },
  { icon: ShieldCheck, title: 'Low Commission', description: 'Unlike marketplace platforms that charge 25–35% per order, Posso charges low commission on online orders — you keep the vast majority of your revenue.' },
];

export default function DominosPosSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Does Domino\'s Use a POS System?' }]} />

        {/* Hero — Featured Snippet Target */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Zap className="w-3 h-3 mr-2" />
              PIZZA POS EXPLAINED
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Does Domino&apos;s Use a POS System?
            </h1>

            {/* Featured Snippet Answer */}
            <div className="mt-8 glass-card rounded-2xl border border-primary/30 p-8">
              <p className="text-xl text-white font-semibold mb-4">
                Yes — Domino&apos;s uses a proprietary POS system called <span className="text-primary">Pulse</span>.
              </p>
              <p className="text-lg text-slate-300 mb-4">
                Pulse was custom-built by Domino&apos;s for their franchise operations and is used in thousands of stores worldwide. It is not available for purchase by other businesses — it is an internal, proprietary system developed specifically for the Domino&apos;s workflow.
              </p>
              <p className="text-lg text-slate-300">
                Pulse handles order management across all channels (in-store, phone, online, app), delivery driver tracking, kitchen makeline displays, inventory management, customer data, and franchise-level reporting. It is one of the reasons Domino&apos;s describes itself as a &ldquo;technology company that happens to sell pizza.&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                Get Pizza POS Features <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
              </a>
            </div>
          </div>
        </section>

        {/* What Pulse Does */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-4">
              What Does Domino&apos;s Pulse POS System Do?
            </h2>
            <p className="text-slate-400 text-lg text-center mb-10 max-w-2xl mx-auto">
              Pulse is far more than a cash register. It is the central nervous system of every Domino&apos;s store, managing everything from the first click to the last delivery.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {pulseFeatures.map((feature) => (
                <div key={feature.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Pulse Matters */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Why Domino&apos;s Invested in a Custom POS
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Domino&apos;s recognised early that pizza ordering is fundamentally different from standard restaurant ordering. A single pizza can have dozens of topping combinations, split sides, multiple sizes, and different bases. Generic POS systems could not handle this complexity efficiently at scale.
              </p>
              <p>
                By building Pulse in-house, Domino&apos;s created a system that understands pizza as a product category — not just a line item. The makeline display tells each team member exactly what to put on each pizza. The delivery module tracks every driver in real time. The online ordering system lets customers build pizzas visually, which dramatically reduces phone orders and the errors that come with them.
              </p>
              <p>
                The investment paid off. Domino&apos;s processes over 1 million online orders per day globally, and Pulse is the backbone that makes it possible. But here is the key insight: <strong className="text-white">you do not need to be a global franchise to get pizza-specific POS features.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Posso Alternative */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-4">
              Pizza POS Features for Independent Shops
            </h2>
            <p className="text-slate-400 text-lg text-center mb-10 max-w-2xl mx-auto">
              You do not need Domino&apos;s budget to get a pizza-specific POS.{' '}
              <Link href="/pizza-epos" className="text-primary hover:underline font-semibold">Posso&apos;s Pizza POS</Link>{' '}
              gives independent pizza shops many of the same core capabilities — at a fraction of the cost.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {possoComparison.map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="h-6 w-6 text-primary shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="glass-card rounded-2xl border border-primary/20 p-8 mt-10">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">£499</p>
                  <p className="text-slate-400 text-sm mt-1">POS from (+ VAT)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">£699</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from (+ VAT)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">Free</p>
                  <p className="text-slate-400 text-sm mt-1">Setup &amp; training</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Bigger Picture */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              What Independent Pizza Shops Can Learn from Domino&apos;s
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Domino&apos;s success is not just about pizza — it is about systems. They invested heavily in technology that reduces errors, speeds up service, and makes ordering easy for customers. Independent pizza shops can apply the same principles on a smaller scale.
              </p>
              <div className="glass-card rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Three lessons from Domino&apos;s tech strategy:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 mt-1 shrink-0" />
                    <span><strong className="text-white">Make ordering visual.</strong> Domino&apos;s lets customers see their pizza as they build it. A visual pizza builder on your POS, kiosk, and website does the same thing — reducing errors and increasing average order value.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 mt-1 shrink-0" />
                    <span><strong className="text-white">Own your ordering channel.</strong> Domino&apos;s pushes customers to order direct via their app and website. With your own online ordering system, you avoid 25&ndash;35% marketplace commissions and build a direct relationship with customers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 mt-1 shrink-0" />
                    <span><strong className="text-white">Unify your channels.</strong> Every Domino&apos;s order — whether from the counter, phone, app, or website — goes through one system. A unified POS eliminates the chaos of juggling multiple tablets and order sources.</span>
                  </li>
                </ul>
              </div>
              <p>
                Ready to bring pizza-specific POS technology to your shop?{' '}
                <Link href="/pizza-epos" className="text-primary hover:underline font-semibold">Explore Posso&apos;s Pizza POS system</Link>{' '}
                or call <a href="tel:+448081753956" className="text-primary hover:underline">0808 175 3956</a> for a free demo.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Pizza POS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pizza-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Visual pizza builder</p>
                </Link>
                <Link href="/best-pos-system-for-pizzeria" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Best Pizza POS</p>
                  <p className="text-slate-400 text-sm mt-1">Comparison guide</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Low commission platform</p>
                </Link>
                <Link href="/self-order-kiosks-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Domino's POS System — FAQs" faqs={[
          { question: 'What POS system does Domino\'s use?', answer: 'Domino\'s uses a proprietary POS system called Pulse. It was custom-built for Domino\'s franchise operations and handles order management, delivery tracking, kitchen display, inventory, and customer data. Pulse is not available for purchase — it is an internal system used exclusively by Domino\'s stores.' },
          { question: 'Can I buy the Domino\'s Pulse POS system?', answer: 'No. Pulse is a proprietary system developed by and for Domino\'s. It is not sold or licensed to other businesses. However, you can get similar pizza-specific POS features from providers like Posso, whose pizza builder offers visual pizza building, split-sided ordering, and delivery management from £499 + VAT.' },
          { question: 'What makes a pizza POS different from a regular POS?', answer: 'A pizza POS understands pizza as a product — it handles size-based pricing, split-sided toppings (half-and-half), visual pizza building, per-topping pricing by size, and kitchen tickets with full pizza specs. A regular POS treats pizza as a simple menu item with text-based modifiers.' },
          { question: 'How can an independent pizza shop compete with Domino\'s technology?', answer: 'By investing in a pizza-specific POS system. Posso offers a visual pizza builder, online ordering with the builder built in, self-order kiosks, delivery management, and kitchen displays — the same core capabilities Domino\'s built into Pulse, but at a price point independent shops can afford (from £499 + VAT).' },
          { question: 'Is it worth getting a pizza-specific POS for a small pizza shop?', answer: 'Absolutely. Even a single-location pizza shop benefits from faster ordering (10 seconds vs 30–60 with a generic POS), fewer errors from visual building, higher online order value from the pizza builder, and proper delivery management. The time saved per order adds up to hours every week.' },
          { question: 'How much does a pizza POS cost compared to Domino\'s Pulse?', answer: 'Domino\'s invested tens of millions developing Pulse. An independent pizza shop can get a pizza-specific POS from Posso starting at £499 + VAT for the till hardware with pizza builder software, or £699 + VAT for a self-order kiosk. Free setup and training are included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
