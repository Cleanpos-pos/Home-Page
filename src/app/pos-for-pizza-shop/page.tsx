import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Pizza, Search, Scale, Star, Shield, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS for Pizza Shop',
  description:
    'POS for Pizza Shop — buyer\'s guide covering what to look for when choosing a POS system for your pizza shop. Feature comparison, pricing, and recommendations.',
  keywords: [
    'pos for pizza shop',
    'best pos for pizza shop',
    'pizza shop pos system',
    'pizza pos comparison',
    'choosing pizza pos',
    'pizza shop till system',
    'pizza epos buying guide',
    'pos system pizza shop uk',
    'pizza pos features',
    'pizza shop pos review',
  ],
  alternates: {
    canonical: '/pos-for-pizza-shop',
  },
  openGraph: {
    title: 'POS for Pizza Shop | Posso UK',
    description:
      'POS for Pizza Shop buyer\'s guide — what to look for, must-have features, pricing, and how to choose the right system.',
    url: 'https://posso.co.uk/pos-for-pizza-shop',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS for Pizza Shop',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Comprehensive guide to choosing a POS system for a pizza shop, covering pizza builder functionality, delivery management, online ordering, caller ID, and pricing considerations.',
    url: 'https://posso.co.uk/pos-for-pizza-shop',
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
      reviewCount: '156',
      bestRating: '5',
    },
    featureList: [
      'Pizza builder with size and topping customisation',
      'Delivery zone and driver management',
      'Caller ID for phone order speed',
      'Online ordering with low commission',
      'Kitchen display system',
      'Multi-platform delivery integration',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS for Pizza Shop', item: 'https://posso.co.uk/pos-for-pizza-shop' },
    ],
  },
];

const features = [
  { icon: Pizza, title: 'Pizza Builder is Non-Negotiable', description: 'A generic POS treats a pizza as a single item. A pizza-specific POS has a builder: choose size, select crust, pick sauce, add toppings with half-and-half support. If the system cannot handle "14-inch, stuffed crust, BBQ sauce, pepperoni left, chicken right" — it is not designed for pizza shops.' },
  { icon: Search, title: 'Caller ID Saves Real Time', description: 'If your shop takes phone orders, caller ID integration is worth its weight in gold. When a regular calls, their name, address, and last order appear before you answer. Reorder in two taps. On a busy Friday night with 80+ phone orders, the time savings are enormous. Ask if the POS supports caller ID before signing anything.' },
  { icon: Scale, title: 'Delivery Management Matters', description: 'If you deliver, the POS needs zone management, driver tracking, and delivery assignment — not as an add-on, but built into the core workflow. Draw zones on a map, set fees per zone, assign orders to drivers, and track delivery times. A POS without delivery management means you are running two separate systems.' },
  { icon: Star, title: 'Online Ordering Commission', description: 'Most pizza POS providers offer online ordering, but commission rates vary wildly. Some charge 0% but have higher monthly fees. Others charge 2–5% per order. Compare the total cost based on your order volume. A system with "free" online ordering but £200/month fees may cost more than one charging 2% on 500 orders.' },
  { icon: Shield, title: 'Kitchen Display Integration', description: 'Paper tickets get lost, smudged, and misread. A kitchen display system shows every order digitally with the full specification. For pizza shops, this means size, crust, sauce, and every topping — including split sides. Orders are queued by priority with prep timers. If the POS does not include a KDS, budget for one separately.' },
  { icon: Lightbulb, title: 'Third-Party Delivery Integration', description: 'If you use Just Eat, Uber Eats, or Deliveroo, the POS should pull those orders directly onto your screen. Without integration, you are re-typing orders from separate tablets — slow, error-prone, and frustrating. Ask specifically: does the integration include automatic order acceptance, or does someone still need to confirm each one manually?' },
];

const benefits = [
  { title: 'Avoid Paying for Features You Do Not Need', description: 'Some POS providers bundle hotel management, spa booking, and retail features into a hospitality package. You are paying for complexity your pizza shop will never use. Choose a system built for food service with pizza-specific features. A simpler, focused system is faster to learn, easier to use, and costs less.' },
  { title: 'Test Before You Commit', description: 'Any reputable POS provider will offer a demo or trial. Run through your actual workflow: take a phone order with caller ID, build a custom pizza with split toppings, assign a delivery, process an online order. If any step feels clunky or requires workarounds, it will be worse under Friday night pressure.' },
  { title: 'Factor in Total Cost of Ownership', description: 'The upfront hardware cost is only part of the picture. Monthly software fees, online ordering commission, payment processing rates, and support costs all add up. A system that costs £499 upfront with low ongoing fees may be significantly cheaper over 3 years than a "free" system with higher monthly charges and commission.' },
  { title: 'Ensure Proper Support is Included', description: 'When your POS goes down on a Saturday night, response time matters. Ask about support hours — is it 24/7 or business hours only? Is support by phone or just email? What is the average response time? A POS is only as good as the support behind it. Posso includes free phone support and a 2-year warranty as standard.' },
];

export default function PosForPizzaShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS for Pizza Shop' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Search className="w-3 h-3 mr-2" />
                BUYER&apos;S GUIDE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pizza Shop
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Choosing the right POS for your pizza shop is a decision that affects every order, every night. Here is what to look for, what to avoid, and what actually matters.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Must-have features for pizza shops</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> What to ask before you buy</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pizza POS systems from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What to Look For in a Pizza Shop POS</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Six features that separate a pizza-ready POS from a generic one that will slow you down.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Smart Buying Advice</h2>
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
                The Posso Approach to Pizza Shop POS
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Posso builds POS systems specifically for <strong className="text-white">food-service businesses</strong>. The pizza builder, delivery management, caller ID, and kitchen display are not afterthoughts — they are core features designed around how pizza shops actually operate.
                </p>
                <p>
                  The system handles <strong className="text-white">counter orders, phone orders, online orders, and delivery app orders</strong> from one interface. The kitchen sees one queue. Drivers are managed on one screen. Reports cover all channels in one dashboard. No juggling separate tools for each part of the business.
                </p>
                <p>
                  Pricing is straightforward: <strong className="text-white">POS from £499 + VAT</strong> with online ordering at low commission. No hidden fees, no surprise charges after 6 months. Free setup, menu import, staff training, and a 2-year warranty. Phone support when you need it — not just email tickets that take 48 hours to answer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Pizza POS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pizza-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Pizza-specific ePOS</p>
                </Link>
                <Link href="/pizza-shop-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza Shop POS</p>
                  <p className="text-slate-400 text-sm mt-1">Complete shop system</p>
                </Link>
                <Link href="/pizza-delivery-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza Delivery POS</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery management</p>
                </Link>
                <Link href="/pizza-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS for Pizza Shop — Frequently Asked Questions" faqs={[
          { question: 'What is the most important feature in a pizza shop POS?', answer: 'The pizza builder. A pizza is a configurable product with sizes, crusts, sauces, and toppings — each affecting the price. A generic POS forces workarounds: separate items for each size, manual notes for toppings, no split-side support. A pizza-specific builder handles all of this natively and sends the full specification to the kitchen display.' },
          { question: 'Do I need caller ID integration?', answer: 'If you take phone orders, yes. Caller ID saves 1–2 minutes per returning customer order. On a busy night with 80+ phone calls, that is over 2 hours of staff time saved. It also improves accuracy — the address is already on file, so there are no postcode errors. The investment pays for itself within weeks.' },
          { question: 'How much should a pizza shop POS cost?', answer: 'A complete pizza shop POS with touchscreen terminal, pizza builder, caller ID, kitchen display, and online ordering typically ranges from £499 to £1,500 upfront depending on hardware choices. Monthly software fees range from £30 to £100. Online ordering commission varies from 0% to 5%. Always calculate the total cost over 2–3 years, not just the upfront price.' },
          { question: 'Should I choose a pizza-specific POS or a general one?', answer: 'Pizza-specific. A general hospitality POS can take orders and process payments, but it lacks the pizza builder, size-based pricing matrix, split-side toppings, and delivery zone management that pizza shops need daily. These features are not nice-to-haves — they are essential for efficient pizza shop operations.' },
          { question: 'How important is delivery platform integration?', answer: 'If you use Just Eat, Uber Eats, or Deliveroo, integration is very important. Without it, you are manually re-typing every marketplace order from a separate tablet — slow, error-prone, and inefficient. With integration, marketplace orders arrive automatically on your POS and kitchen display alongside phone and website orders.' },
          { question: 'What support should I expect?', answer: 'Look for phone support (not just email), clear response time commitments, and coverage during your operating hours. A pizza shop POS issue at 8pm on a Saturday cannot wait until Monday morning for an email response. Posso includes free phone support and a 2-year warranty as standard with every system.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
