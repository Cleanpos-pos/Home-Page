import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Phone, ArrowRight, Pizza, Monitor, Smartphone, Truck, CreditCard, BarChart3, X } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best POS System for a Pizzeria (2026 UK Guide)',
  description:
    'What is the best POS system for a pizzeria? A pizza-specific POS with a visual pizza builder, split-sided ordering, size-based pricing, delivery management, and kiosk ordering. From £499 + VAT.',
  keywords: [
    'best POS system for pizzeria',
    'best POS for pizza shop',
    'pizza POS system UK',
    'pizzeria POS system',
    'pizza shop till system',
    'POS system for pizza restaurant',
    'pizza ordering system',
    'pizza delivery POS',
  ],
  alternates: { canonical: '/best-pos-system-for-pizzeria' },
  openGraph: {
    title: 'Best POS System for a Pizzeria (2026 UK Guide)',
    description: 'Find the best POS system for your pizzeria. Pizza builder, split-sided ordering, delivery zones, and kiosk ordering from £499 + VAT.',
    url: 'https://www.posso.co.uk/best-pos-system-for-pizzeria',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is the Best POS System for a Pizzeria?',
    description: 'Comprehensive guide to choosing the best POS system for a pizzeria in the UK. Covers pizza builder features, split-sided ordering, delivery management, and pricing.',
    author: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
    publisher: { '@type': 'Organization', name: 'Posso Ltd', logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' } },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    url: 'https://www.posso.co.uk/best-pos-system-for-pizzeria',
    image: 'https://www.posso.co.uk/og-image.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Best POS System for a Pizzeria', item: 'https://www.posso.co.uk/best-pos-system-for-pizzeria' },
    ],
  },
];

const essentialFeatures = [
  { icon: Pizza, title: 'Visual Pizza Builder', description: 'A tap-to-build interface that shows staff (and customers) exactly what the pizza looks like. No more scribbled notes or misread tickets — the builder renders the pizza visually as toppings are added.' },
  { icon: Monitor, title: 'Split-Sided Ordering', description: 'Customers want half pepperoni, half veggie. A proper pizza POS handles whole, left half, and right half toppings per pizza — with correct pricing for each side.' },
  { icon: CreditCard, title: 'Size-Based Pricing', description: 'Automatic price adjustment for different sizes (9", 14", 18"). Toppings should also re-price per size so your margins stay consistent across the menu.' },
  { icon: Truck, title: 'Delivery Zone Management', description: 'Define delivery zones with custom fees and minimum order values. A great pizza POS tracks drivers, estimates delivery times, and integrates with driver apps.' },
  { icon: Smartphone, title: 'Online Ordering with Pizza Builder', description: 'Your own ordering website where customers can build their pizza online — the same visual builder your staff use. Orders flow straight to the kitchen.' },
  { icon: BarChart3, title: 'KDS with Full Pizza Specs', description: 'Kitchen display tickets should show the complete build: size, base, each topping by side, special requests. No ambiguity for the pizza maker.' },
];

const genericVsPizzaPos = [
  { feature: 'Visual pizza builder', generic: false, pizza: true },
  { feature: 'Split-sided topping selection', generic: false, pizza: true },
  { feature: 'Size-based pricing per topping', generic: false, pizza: true },
  { feature: 'Pizza-specific KDS tickets', generic: false, pizza: true },
  { feature: 'Online pizza builder for customers', generic: false, pizza: true },
  { feature: 'Delivery zone management', generic: false, pizza: true },
  { feature: 'Basic item ordering', generic: true, pizza: true },
  { feature: 'Card payments', generic: true, pizza: true },
  { feature: 'Receipt printing', generic: true, pizza: true },
];

export default function BestPosSystemForPizzeriaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Best POS System for a Pizzeria' }]} />

        {/* Hero — Featured Snippet Target */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Pizza className="w-3 h-3 mr-2" />
              PIZZA POS BUYING GUIDE
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              What Is the Best POS System for a Pizzeria?
            </h1>

            {/* Featured Snippet Answer */}
            <div className="mt-8 glass-card rounded-2xl border border-primary/30 p-8">
              <p className="text-xl text-white font-semibold mb-4">
                The best POS system for a pizzeria is one built specifically for pizza — not a generic till adapted with workarounds.
              </p>
              <p className="text-lg text-slate-300 mb-4">
                A great pizza POS should include a <strong className="text-white">visual pizza builder</strong> for staff and customers, <strong className="text-white">split-sided ordering</strong> (half-and-half pizzas), <strong className="text-white">automatic size-based pricing</strong> across 9&quot;, 14&quot;, and 18&quot; options, <strong className="text-white">delivery zone management</strong>, and a <strong className="text-white">kitchen display system</strong> that shows the full pizza build spec.
              </p>
              <p className="text-lg text-slate-300">
                Most generic POS systems treat a pizza like any other menu item — forcing staff to type toppings into a notes field or add dozens of modifiers manually. A pizza-specific POS like{' '}
                <Link href="/pizza-pos-system" className="text-primary hover:underline font-semibold">Posso&apos;s Pizza POS</Link>{' '}
                handles the complexity natively, reducing order errors and speeding up service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
              </a>
            </div>
          </div>
        </section>

        {/* What Generic POS Systems Get Wrong */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Why Generic POS Systems Fail Pizzerias
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Most POS systems were designed for restaurants that serve plated dishes — a customer picks an item, maybe adds a side, and the order goes to the kitchen. Pizza is fundamentally different. A single pizza order can involve a choice of size, base type, sauce, cheese, and a dozen toppings — each of which may apply to the whole pizza, the left half, or the right half.
              </p>
              <p>
                Generic POS systems handle this through endless modifier lists or free-text notes. The result? Staff spend 30–60 seconds building each pizza order instead of 10 seconds. Kitchen tickets are confusing. Online customers cannot build their own pizzas. And pricing errors creep in because the POS has no concept of size-based topping costs.
              </p>
              <p>
                A purpose-built pizza POS solves all of this with a single visual interface. Staff tap to add toppings to a pizza graphic, choose left/right/whole, select a size, and the price updates in real-time. The same builder works on your customer-facing kiosk and online ordering website.
              </p>
            </div>
          </div>
        </section>

        {/* Features Every Pizza POS Should Have */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-4">
              Features Every Pizza POS Should Have
            </h2>
            <p className="text-slate-400 text-lg text-center mb-10 max-w-2xl mx-auto">
              If a POS system does not offer these six features, it was not designed for pizza — and your team will feel the friction every shift.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {essentialFeatures.map((feature) => (
                <div key={feature.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <feature.icon className="h-6 w-6 text-primary shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Generic POS vs Pizza-Specific POS
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-4 px-4 text-white font-semibold">Feature</th>
                    <th className="py-4 px-4 text-white font-semibold text-center">Generic POS</th>
                    <th className="py-4 px-4 text-white font-semibold text-center">Pizza POS (Posso)</th>
                  </tr>
                </thead>
                <tbody>
                  {genericVsPizzaPos.map((row) => (
                    <tr key={row.feature} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-4 text-slate-200">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {row.generic ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-red-400 mx-auto" />}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.pizza ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-red-400 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Posso */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Why Posso Is Ideal for Pizzerias
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Posso built a dedicated <Link href="/pizza-pos-system" className="text-primary hover:underline font-semibold">pizza builder interface</Link> from the ground up. It is not a bolt-on or a plugin — the pizza builder is a core part of the POS that works on till screens, self-order kiosks, and your online ordering website.
              </p>
              <p>
                Staff tap to add toppings to a visual pizza graphic. They select whole, left half, or right half for each topping. The price updates instantly based on the selected size. The finished order is sent to the kitchen display with a full spec sheet — size, base, sauce, every topping by position, and any special notes.
              </p>
              <p>
                For customers ordering online or via a kiosk, the same pizza builder is presented on screen. They build their pizza exactly as they want it, see the price in real time, and the order flows straight to your kitchen. No phone calls, no misheard toppings, no order errors.
              </p>
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
                  <p className="text-3xl font-bold text-white">Low</p>
                  <p className="text-slate-400 text-sm mt-1">Commission on online orders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kiosk Ordering for Pizzerias */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Self-Order Kiosks: A Game-Changer for Pizza Shops
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Self-order kiosks increase average order value by 20&ndash;30% in pizza shops. When customers build their own pizza on screen, they add more toppings and upgrade to larger sizes because they can see the price difference in real time without feeling rushed.
              </p>
              <p>
                Posso kiosks from £699 + VAT feature the same visual pizza builder as the POS till. Customers tap toppings, choose sides, pick a size, and pay by card — all without queuing at the counter. Orders go straight to the kitchen display.
              </p>
              <p>
                For busy Friday and Saturday nights, kiosks eliminate the order queue bottleneck. Two customers can build complex pizza orders simultaneously on separate kiosks while your staff focus on making pizzas and managing deliveries.
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
                <Link href="/pizza-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Full pizza builder details</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
                <Link href="/self-order-kiosks-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Low commission platform</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pizza POS System — FAQs" faqs={[
          { question: 'What is the best POS system for a pizza shop in the UK?', answer: 'The best POS for a pizza shop is one with a dedicated pizza builder interface — not a generic POS with modifier lists. Posso offers a visual pizza builder with split-sided ordering, size-based pricing (9", 14", 18"), delivery zone management, and integrated online ordering. POS hardware starts from £499 + VAT.' },
          { question: 'Can a pizza POS handle half-and-half pizzas?', answer: 'Yes — a proper pizza POS like Posso supports split-sided pizzas natively. Staff (or customers on a kiosk) select toppings for the whole pizza, left half, or right half. Each side is priced independently, and the kitchen ticket shows the full split build.' },
          { question: 'Do I need a special POS for pizza delivery?', answer: 'A pizza-specific POS with built-in delivery management is strongly recommended. It handles delivery zones, custom delivery fees, minimum order values, estimated delivery times, and driver tracking — features that generic POS systems rarely include out of the box.' },
          { question: 'How much does a pizza POS system cost?', answer: 'A Posso pizza POS starts from £499 + VAT for a touchscreen till with the pizza builder software. Self-order kiosks with the same pizza builder start from £699 + VAT. Finance options are available from under £25/week.' },
          { question: 'Can customers build their own pizza online?', answer: 'Yes. With Posso, your online ordering website includes the same visual pizza builder that your staff use. Customers select a size, choose toppings by side, see the price update in real time, and the order goes directly to your kitchen display.' },
          { question: 'What should I look for when comparing pizza POS systems?', answer: 'Prioritise these six features: (1) visual pizza builder, (2) split-sided topping support, (3) size-based pricing with per-topping adjustment, (4) delivery zone management, (5) online ordering with the pizza builder, and (6) kitchen display tickets showing full pizza specs. If a POS lacks any of these, it was not designed for pizza.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
