import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Phone, ArrowRight, Pizza, Calculator, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is the 3/8 Rule for Pizza? (Sizing & Pricing Guide)',
  description:
    'The 3/8 rule for pizza: increasing a pizza diameter by 3/8 roughly doubles the area and amount of pizza. Learn how this affects pricing and how a POS with size-based pricing protects your margins.',
  keywords: [
    'what is the 3/8 rule for pizza',
    '3/8 rule pizza',
    'pizza size pricing',
    'pizza area calculation',
    'pizza pricing guide',
    'pizza size comparison',
    'how to price pizza by size',
    'pizza POS size pricing',
  ],
  alternates: { canonical: '/what-is-the-3-8-rule-for-pizza' },
  openGraph: {
    title: 'What Is the 3/8 Rule for Pizza? (Sizing & Pricing Guide)',
    description: 'The 3/8 rule explains why a 14" pizza has 2.4x the area of a 9". Learn the maths and how size-based POS pricing protects your margins.',
    url: 'https://www.posso.co.uk/what-is-the-3-8-rule-for-pizza',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is the 3/8 Rule for Pizza?',
    description: 'Explanation of the 3/8 pizza sizing rule, how it affects pricing, and how a POS system with automatic size-based pricing protects pizza shop margins.',
    author: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
    publisher: { '@type': 'Organization', name: 'Posso Ltd', logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' } },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    url: 'https://www.posso.co.uk/what-is-the-3-8-rule-for-pizza',
    image: 'https://www.posso.co.uk/og-image.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'The 3/8 Rule for Pizza', item: 'https://www.posso.co.uk/what-is-the-3-8-rule-for-pizza' },
    ],
  },
];

const sizeComparison = [
  { size: '9" (Small)', diameter: 9, area: 63.6, multiplier: '1x', exampleBase: '£6.99', exampleTopping: '£0.80' },
  { size: '12" (Medium)', diameter: 12, area: 113.1, multiplier: '1.78x', exampleBase: '£9.99', exampleTopping: '£1.20' },
  { size: '14" (Large)', diameter: 14, area: 153.9, multiplier: '2.42x', exampleBase: '£12.99', exampleTopping: '£1.60' },
  { size: '18" (XXL)', diameter: 18, area: 254.5, multiplier: '4x', exampleBase: '£17.99', exampleTopping: '£2.50' },
];

const pricingMistakes = [
  { icon: AlertTriangle, title: 'Flat Topping Prices', description: 'Charging £1 for a topping on every size means you give away 4x the cheese on an 18" pizza for the same price as a 9". Your food cost on large pizzas silently eats your margin.' },
  { icon: AlertTriangle, title: 'Linear Price Scaling', description: 'Doubling the diameter from 9" to 18" quadruples the area. If your 9" is £6.99 and your 18" is only £13.99, you are selling 4x the pizza for just 2x the price.' },
  { icon: AlertTriangle, title: 'No Size-Based POS Logic', description: 'Without automatic size-based pricing in your POS, staff must manually calculate or memorise different topping prices per size. They forget, they round down, and margins leak every shift.' },
];

export default function ThreeEighthsRulePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'The 3/8 Rule for Pizza' }]} />

        {/* Hero — Featured Snippet Target */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Calculator className="w-3 h-3 mr-2" />
              PIZZA SIZING &amp; PRICING
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              What Is the 3/8 Rule for Pizza?
            </h1>

            {/* Featured Snippet Answer */}
            <div className="mt-8 glass-card rounded-2xl border border-primary/30 p-8">
              <p className="text-xl text-white font-semibold mb-4">
                The 3/8 rule states that when you increase a pizza&apos;s diameter by <span className="text-primary">3/8 (37.5%)</span>, the total area of the pizza roughly <span className="text-primary">doubles</span>.
              </p>
              <p className="text-lg text-slate-300 mb-4">
                For example, increasing an 8&quot; pizza by 3/8 gives you an 11&quot; pizza — which has approximately twice the surface area (and therefore twice the amount of pizza). This happens because pizza area is calculated using <strong className="text-white">&pi;r&sup2;</strong> — area scales with the square of the radius, not linearly with diameter.
              </p>
              <p className="text-lg text-slate-300">
                This rule is critical for pizza shop owners because it means <strong className="text-white">your larger pizzas contain far more food than customers (and many owners) realise</strong>. A 14&quot; pizza is not 56% bigger than a 9&quot; pizza — it is <strong className="text-white">142% bigger</strong> (2.42x the area). If your pricing does not reflect this, you are losing money on every large pizza you sell.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                Get Size-Based Pricing POS <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
              </a>
            </div>
          </div>
        </section>

        {/* The Maths Explained */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              The Maths Behind the 3/8 Rule
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Pizza is a circle, and the area of a circle is calculated as <strong className="text-white">&pi; &times; r&sup2;</strong> (pi times the radius squared). The key word is &ldquo;squared&rdquo; — this means area grows much faster than diameter.
              </p>
              <div className="glass-card rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Worked example: 8&quot; vs 11&quot; pizza</h3>
                <ul className="space-y-2 text-slate-300">
                  <li><strong className="text-white">8&quot; pizza:</strong> Area = &pi; &times; 4&sup2; = <strong className="text-primary">50.3 sq inches</strong></li>
                  <li><strong className="text-white">11&quot; pizza:</strong> Area = &pi; &times; 5.5&sup2; = <strong className="text-primary">95.0 sq inches</strong></li>
                  <li><strong className="text-white">Increase:</strong> 11 is 37.5% (3/8) larger than 8, but the area is <strong className="text-primary">89% larger</strong> — nearly double.</li>
                </ul>
              </div>
              <p>
                The rule is an approximation — the exact doubling factor is closer to 1.89x rather than a perfect 2x. But for practical pricing purposes, the 3/8 rule is a reliable mental shortcut: <strong className="text-white">increase the diameter by about a third, and you are giving the customer roughly twice as much pizza.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Size Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-4">
              Pizza Size, Area &amp; Pricing Comparison
            </h2>
            <p className="text-slate-400 text-lg text-center mb-10 max-w-2xl mx-auto">
              This table shows how dramatically area (and food cost) increases with size — and what your pricing should look like to maintain margins.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-4 px-4 text-white font-semibold">Size</th>
                    <th className="py-4 px-4 text-white font-semibold">Area (sq in)</th>
                    <th className="py-4 px-4 text-white font-semibold">vs 9&quot;</th>
                    <th className="py-4 px-4 text-white font-semibold">Base Price</th>
                    <th className="py-4 px-4 text-white font-semibold hidden sm:table-cell">Per Topping</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeComparison.map((row) => (
                    <tr key={row.size} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-4 text-slate-200 font-medium">{row.size}</td>
                      <td className="py-4 px-4 text-slate-300">{row.area}</td>
                      <td className="py-4 px-4 text-primary font-bold">{row.multiplier}</td>
                      <td className="py-4 px-4 text-white font-semibold">{row.exampleBase}</td>
                      <td className="py-4 px-4 text-slate-300 hidden sm:table-cell">{row.exampleTopping}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mt-4 text-center">
              Example prices shown. Actual pricing depends on your food costs, market, and location.
            </p>
          </div>
        </section>

        {/* Why Most Shops Under-Price */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-4">
              Why Most Pizza Shops Under-Price Large Pizzas
            </h2>
            <p className="text-slate-400 text-lg text-center mb-10 max-w-2xl mx-auto">
              These three common mistakes silently destroy margins on your most popular sizes.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {pricingMistakes.map((mistake) => (
                <div key={mistake.title} className="glass-card rounded-xl p-6 border border-red-500/20">
                  <mistake.icon className="h-6 w-6 text-red-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{mistake.title}</h3>
                  <p className="text-slate-400">{mistake.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How a POS Helps */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              How a Pizza POS Fixes Your Pricing
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                A pizza-specific POS with <strong className="text-white">automatic size-based pricing</strong> applies the 3/8 rule for you. When you set up your menu, you define base prices and topping prices per size. The POS then calculates the correct total automatically — staff never need to think about it.
              </p>
              <div className="glass-card rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-semibold text-white mb-4">Example: Pepperoni Pizza</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="glass-card rounded-lg p-4 border border-slate-700/50 text-center">
                    <p className="text-sm text-slate-400">9&quot; Small</p>
                    <p className="text-2xl font-bold text-white mt-1">£6.99</p>
                    <p className="text-xs text-slate-500 mt-1">Base £5.99 + pepperoni £1.00</p>
                  </div>
                  <div className="glass-card rounded-lg p-4 border border-primary/30 text-center">
                    <p className="text-sm text-slate-400">14&quot; Large</p>
                    <p className="text-2xl font-bold text-primary mt-1">£14.49</p>
                    <p className="text-xs text-slate-500 mt-1">Base £12.49 + pepperoni £2.00</p>
                  </div>
                  <div className="glass-card rounded-lg p-4 border border-slate-700/50 text-center">
                    <p className="text-sm text-slate-400">18&quot; XXL</p>
                    <p className="text-2xl font-bold text-white mt-1">£19.99</p>
                    <p className="text-xs text-slate-500 mt-1">Base £17.49 + pepperoni £2.50</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mt-4 text-center">
                  With Posso, these prices are calculated automatically when staff or customers select a size. No manual maths, no errors.
                </p>
              </div>
              <p>
                <Link href="/pizza-pos-system" className="text-primary hover:underline font-semibold">Posso&apos;s pizza builder</Link>{' '}
                goes further: when a customer selects a 14&quot; pizza and adds extra mozzarella, the topping price adjusts to the 14&quot; rate automatically. Split-sided pizzas are priced correctly too — half toppings are charged at half the topping rate for that size.
              </p>
              <p>
                The result? Your margins stay consistent whether a customer orders a 9&quot; Margherita or an 18&quot; fully loaded with extra toppings on each half. The 3/8 rule is baked into your pricing — automatically, on every order.
              </p>
            </div>
          </div>
        </section>

        {/* Margin Impact */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              The Margin Impact of Getting This Right
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Consider a pizza shop selling 200 large pizzas per week. If each large pizza is under-priced by just £1.50 (because toppings are not scaled by size), that is <strong className="text-white">£300 per week in lost margin</strong> — or <strong className="text-white">£15,600 per year</strong>.
              </p>
              <div className="glass-card rounded-xl p-6 border border-green-500/20">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-slate-400">Lost per pizza</p>
                    <p className="text-2xl font-bold text-red-400">-£1.50</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Lost per week (200 pizzas)</p>
                    <p className="text-2xl font-bold text-red-400">-£300</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Lost per year</p>
                    <p className="text-2xl font-bold text-red-400">-£15,600</p>
                  </div>
                </div>
              </div>
              <p>
                A Posso POS starts from <strong className="text-white">£499 + VAT</strong>. The size-based pricing feature alone can pay for the entire system within the first month. Self-order kiosks from <strong className="text-white">£699 + VAT</strong> add further revenue by increasing average order value by 20&ndash;30%.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Get Size-Based Pricing for Your Pizza Shop</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pizza-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Visual builder + size pricing</p>
                </Link>
                <Link href="/best-pos-system-for-pizzeria" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Best Pizza POS</p>
                  <p className="text-slate-400 text-sm mt-1">Feature comparison</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
                <Link href="/self-order-kiosks-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pizza Sizing & Pricing — FAQs" faqs={[
          { question: 'What is the 3/8 rule for pizza?', answer: 'The 3/8 rule states that increasing a pizza\'s diameter by 3/8 (37.5%) roughly doubles the surface area. For example, going from an 8" to an 11" pizza nearly doubles the amount of pizza. This is because area scales with the square of the radius (πr²), so small diameter increases result in much larger area increases.' },
          { question: 'How much bigger is a 14" pizza than a 9"?', answer: 'A 14" pizza has an area of about 153.9 square inches, while a 9" pizza has about 63.6 square inches. That makes the 14" pizza approximately 2.42 times larger — not 1.56 times as the diameter ratio would suggest. You get nearly 2.5 times more pizza.' },
          { question: 'Why do pizza shops lose money on large pizzas?', answer: 'Most pizza shops price larger sizes too cheaply because they scale prices linearly with diameter rather than with area. If a 9" costs £6.99, the 18" (which is 4x the area) should cost around £27.96 to maintain the same margin per square inch — but many shops charge only £13–15. The food cost quadruples while revenue only doubles.' },
          { question: 'How should I price pizza toppings by size?', answer: 'Topping prices should scale roughly with the area multiplier. If a topping costs £0.80 on a 9" pizza, it should cost approximately £1.20 on a 12" (1.78x area), £1.60 on a 14" (2.42x area), and £2.50 on an 18" (4x area). A POS with size-based pricing handles this automatically.' },
          { question: 'Does Posso POS support size-based pricing?', answer: 'Yes. Posso\'s pizza builder has automatic size-based pricing built in. You set base prices and topping prices per size (e.g. 9", 14", 18"), and the POS calculates the correct total when staff or customers select a size. Split-sided toppings are also priced correctly at half the topping rate per side. POS from £499 + VAT.' },
          { question: 'Is a larger pizza always better value for customers?', answer: 'In most pizza shops, yes — because larger sizes are typically under-priced relative to their area. A 14" pizza often costs only 60–70% more than a 9" but contains 142% more pizza. However, if a shop prices correctly using the 3/8 rule, the value per square inch should be similar across sizes, with perhaps a small volume discount on larger pizzas.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
