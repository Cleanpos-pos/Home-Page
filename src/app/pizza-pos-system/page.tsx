import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, Truck, CreditCard, BarChart3, Utensils, Phone, ArrowRight, Pizza } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '🍕 Pizza POS System UK | Pizza Builder Software',
  description:
    'Posso Pizza POS system with built-in pizza builder for UK pizza shops and takeaways. Split-sided pizzas, size pricing, toppings, and one-tap ordering. From £499 + VAT.',
  keywords: [
    'pizza POS system',
    'pizza POS',
    'pizza POS software',
    'pizza builder POS',
    'pizza shop POS system UK',
    'pizza takeaway POS',
    'pizza restaurant POS',
    'pizza ordering system',
    'POS for pizza delivery',
    'best POS for pizza shop',
    'split pizza POS',
    'pizza POS UK',
  ],
  alternates: {
    canonical: '/pizza-pos-system',
  },
  openGraph: {
    title: 'Pizza POS System with Built-In Pizza Builder | Posso UK',
    description:
      'The most intuitive pizza POS interface. Build split-sided pizzas, manage sizes and toppings, and send orders to the kitchen in seconds.',
    url: 'https://www.posso.co.uk/pizza-pos-system',
    type: 'website',
    images: [
      {
        url: '/images/posso-pizza-pos-system-interface-builder.png',
        width: 1200,
        height: 1200,
        alt: 'Posso Pizza POS system software showing the custom pizza builder menu with size selection, toppings, and split-sided pizza options for UK pizza shops and takeaways',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza POS System with Built-In Pizza Builder | Posso UK',
    description: 'Build split-sided pizzas, manage sizes and toppings, and send orders to the kitchen in seconds.',
    images: ['/images/posso-pizza-pos-system-interface-builder.png'],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Pizza POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Pizza POS system with built-in pizza builder for UK pizza shops and takeaways. Visual split-sided pizza creator, size-based pricing, topping management, and integrated kitchen display.',
    url: 'https://www.posso.co.uk/pizza-pos-system',
    image: 'https://www.posso.co.uk/images/posso-pizza-pos-system-interface-builder.png',
    screenshot: 'https://www.posso.co.uk/images/posso-pizza-pos-system-interface-builder.png',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: {
      '@type': 'Brand',
      name: 'Posso',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
    },
    featureList: [
      'Visual pizza builder with split-sided pizzas',
      'Size-based pricing (9", 14", 18")',
      'Topping management with per-topping pricing',
      'Whole, left half, and right half customisation',
      'One-tap ordering to kitchen display',
      'Integrated card payments via Teya',
      'Online ordering integration',
      'Delivery zone management',
      'Kitchen display system',
      'Works offline',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: 'https://www.posso.co.uk/images/posso-pizza-pos-system-interface-builder.avif',
    url: 'https://www.posso.co.uk/pizza-pos-system',
    name: 'Posso Pizza POS System Interface - Pizza Builder Software',
    description: 'Posso Pizza POS system software showing the custom pizza builder menu with size selection (9", 14", 18"), topping pricing, and split-sided pizza options for UK pizza shops and takeaways.',
    width: 1200,
    height: 1200,
    encodingFormat: 'image/avif',
    creator: {
      '@type': 'Organization',
      name: 'Posso Ltd',
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Posso Ltd',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Pizza POS System', item: 'https://www.posso.co.uk/pizza-pos-system' },
    ],
  },
];

const pizzaBuilderFeatures = [
  { title: 'Visual Pizza Builder', description: 'Tap to build pizzas visually with a live preview. Staff see exactly what the customer wants — no guesswork, no errors.' },
  { title: 'Split-Sided Pizzas', description: 'Whole, left half, or right half toppings. Build complex split-sided pizzas in seconds instead of minutes.' },
  { title: 'Size-Based Pricing', description: 'Automatic price adjustment for 9", 14", and 18" pizzas. Add-on pricing per topping updates in real-time.' },
  { title: 'Topping Management', description: 'Tap to add toppings: Regular, Extra, or Remove. Per-topping pricing (e.g. £0.50 each) calculated automatically.' },
  { title: 'One-Tap Kitchen Send', description: 'Hit "Add to Order" and the pizza goes straight to your kitchen display with the full build spec printed on the ticket.' },
  { title: 'Notes & Special Requests', description: 'Add notes per pizza for dietary requirements, cooking preferences, or special instructions.' },
];

const fullPosFeatures = [
  { icon: Monitor, title: 'Kitchen Display System', description: 'Pizza orders appear on your KDS with full build details — size, toppings, split sides, and notes.' },
  { icon: CreditCard, title: 'Integrated Payments', description: 'Teya card terminal integration. Contactless, chip & PIN, Apple Pay, Google Pay — all from the POS.' },
  { icon: Truck, title: 'Delivery Management', description: 'Delivery zones, custom fees, driver app integration, and estimated delivery times built in.' },
  { icon: Smartphone, title: 'Online Ordering', description: 'Your own ordering website with the pizza builder. Customers build their pizza online — order goes straight to your kitchen.' },
  { icon: BarChart3, title: 'Sales Analytics', description: 'See your best-selling pizzas, peak hours, average order value, and revenue by channel.' },
  { icon: Clock, title: 'Works Offline', description: 'Built offline-first. Take orders and process cash payments even when the internet drops. Syncs when reconnected.' },
];

export default function PizzaPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Pizza POS System' },
        ]} />

        {/* Hero with Primary Image */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                  <Zap className="w-3 h-3 mr-2" />
                  PIZZA POS SYSTEM UK
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    The Most Intuitive{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Pizza POS Interface
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Build split-sided pizzas in seconds. Visual pizza builder with size pricing, topping management, and one-tap kitchen ordering — designed for UK pizza shops and takeaways.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Build complex pizzas 3x faster</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Split-sided with left/right half toppings</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full POS from £499 + VAT</li>
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

              {/* PRIMARY IMAGE — Rank #1 target */}
              <div className="relative">
                <figure>
                  <picture>
                    <source srcSet="/images/posso-pizza-pos-system-interface-builder.avif" type="image/avif" />
                    <img
                      src="/images/posso-pizza-pos-system-interface-builder.png"
                      alt="Posso Pizza POS system software showing the custom pizza builder menu with size selection, toppings, and split-sided pizza options for UK pizza shops and takeaways"
                      width={1200}
                      height={1200}
                      loading="eager"
                      className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                    />
                  </picture>
                  <figcaption className="text-slate-500 text-sm mt-3 text-center">
                    The Posso Pizza POS builder simplifies complex orders, ensuring accuracy from the counter to the kitchen.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Pizza Builder Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Pizza Builder — Build Any Pizza in Seconds
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                The Posso pizza builder is designed for speed. Your staff build split-sided pizzas faster than writing them down on paper.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pizzaBuilderFeatures.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Pizza className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECOND IMAGE — Rank #2 target */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <figure>
                <picture>
                  <source srcSet="/images/pizza-pos-terminal-hardware-for-restaurants.avif" type="image/avif" />
                  <img
                    src="/images/posso-pizza-pos-system-interface-builder.png"
                    alt="Touchscreen pizza POS terminal running the Posso pizza builder software on a restaurant counter for UK pizza shops"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="rounded-2xl shadow-xl w-full"
                  />
                </picture>
                <figcaption className="text-slate-500 text-sm mt-3 text-center">
                  The Posso pizza POS running on a touchscreen terminal — ready for counter service and takeaway orders.
                </figcaption>
              </figure>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Pizza Shops Choose Posso POS
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Most POS systems treat pizza like any other menu item. But pizza is different — you need sizes, bases, split sides, and per-topping pricing. Generic systems force your staff to tap through dozens of modifiers, slowing everything down.
                  </p>
                  <p>
                    The <strong className="text-white">Posso Pizza POS</strong> has a dedicated pizza builder built right into the interface. Your staff select the size (9&quot;, 14&quot;, or 18&quot;), choose whole or half, and tap toppings. The price updates in real-time. The full build spec prints on the kitchen ticket. No mistakes, no delays.
                  </p>
                  <p>
                    For busy Friday nights when you&apos;re taking 100+ orders, that speed difference adds up to <strong className="text-white">hours saved per week</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full POS Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Complete Pizza POS System — Not Just a Builder
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                The pizza builder is just one feature. You get a full ePOS system with delivery, online ordering, kitchen display, and payments.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {fullPosFeatures.map((f) => (
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

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How Pizza Ordering Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Select Size', desc: '9", 14", or 18" — price adjusts automatically' },
                { step: '2', title: 'Choose Toppings', desc: 'Whole, left half, or right half with per-topping pricing' },
                { step: '3', title: 'Add to Order', desc: 'One tap sends to kitchen with full build spec' },
                { step: '4', title: 'Kitchen Prints', desc: 'KDS shows size, toppings, and split details' },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Complete Your Pizza Shop Setup</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Full ePOS Features</p>
                  <p className="text-slate-400 text-sm mt-1">30+ features overview</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Customers build their own pizza</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pizza POS — Frequently Asked Questions" faqs={[
          { question: 'What makes the Posso pizza builder different from a standard POS?', answer: 'Most POS systems use generic modifier screens for pizza — you tap through long lists of options one at a time. The Posso pizza builder has a dedicated visual interface with a pizza preview, size buttons (9", 14", 18"), split-side selection (whole, left half, right half), and topping grids. Staff build complex split-sided pizzas in seconds instead of minutes.' },
          { question: 'Can customers build their own pizza on the kiosk or online?', answer: 'Yes. The pizza builder works on the self-order kiosk and your online ordering website. Customers select their size, choose whole or half toppings, and see the price update in real-time. The order goes straight to your kitchen display.' },
          { question: 'How does split-sided pizza ordering work?', answer: 'Tap "Left Half" or "Right Half" before adding toppings. Each side gets its own topping selection. The kitchen ticket prints the full build — e.g. "Left: Extra cheese, Pepperoni / Right: Mushroom, Peppers" — so there is no confusion.' },
          { question: 'Does the pizza POS integrate with delivery apps?', answer: 'Yes. Posso integrates with Just Eat, Uber Eats, and Deliveroo. Delivery orders appear on your POS and kitchen display automatically. You also get your own online ordering website and delivery zone management.' },
          { question: 'How much does the pizza POS system cost?', answer: 'Our POS systems start from £499 + VAT for a complete touchscreen till with integrated payments, receipt printing, and the pizza builder. Self-order kiosks start from £699 + VAT. Finance options available from £24.92/week.' },
          { question: 'Can I try the pizza builder before buying?', answer: 'Yes — book a free demo and we will show you the pizza builder live. We handle setup, menu import, and staff training. You can go live in under 24 hours.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
