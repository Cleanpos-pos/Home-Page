import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, CreditCard, BarChart3, Phone, ArrowRight, Coffee, Heart, Users, Settings } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cafe ePOS System | Coffee Shop POS with Loyalty & Modifiers',
  description:
    'Posso cafe ePOS system for coffee shops and cafes. Fast counter service, loyalty programmes, barista KDS, milk and size modifiers, takeaway cups, and morning rush speed. From £499 + VAT.',
  keywords: [
    'cafe epos system',
    'cafe pos system',
    'coffee shop epos',
    'coffee shop pos system',
    'epos for cafe',
    'cafe till system',
    'coffee shop till',
    'best pos for cafe',
    'cafe point of sale',
    'cafe epos uk',
  ],
  alternates: {
    canonical: '/cafe-epos-system',
  },
  openGraph: {
    title: 'Cafe ePOS System | Posso UK',
    description:
      'Fast cafe ePOS with loyalty programmes, barista KDS, modifier management, and quick counter service for coffee shops.',
    url: 'https://posso.co.uk/cafe-epos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Cafe ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Cafe ePOS system with fast counter service, loyalty programmes, barista kitchen display, modifier management for milk types and sizes, and morning rush optimisation.',
    url: 'https://posso.co.uk/cafe-epos-system',
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
      reviewCount: '127',
      bestRating: '5',
    },
    featureList: [
      'Fast counter service ordering',
      'Digital loyalty programmes',
      'Barista kitchen display system',
      'Modifier management (milk, size, extras)',
      'Eat-in and takeaway toggle',
      'Contactless and mobile payments',
      'Morning rush speed optimisation',
      'Sales analytics and reporting',
      'Works offline',
      'Online ordering for collection',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Cafe ePOS', item: 'https://posso.co.uk/cafe-epos-system' },
    ],
  },
];

const cafeFeatures = [
  { icon: Zap, title: 'Lightning-Fast Counter Service', description: 'One-tap ordering for your best sellers. A flat white with oat milk takes two taps — one for the drink, one for the modifier. Process the morning queue in seconds, not minutes.' },
  { icon: Heart, title: 'Digital Loyalty Programme', description: 'Built-in loyalty that customers actually use. "Buy 9 coffees, get the 10th free" runs automatically. No paper stamp cards to lose — loyalty is linked to their phone number.' },
  { icon: Monitor, title: 'Barista Kitchen Display', description: 'Drink orders appear on a screen behind the bar the moment they are placed. Your barista sees the queue, the modifiers, and the customer name. No shouted orders.' },
  { icon: Settings, title: 'Modifier Management', description: 'Milk types (oat, soy, almond, coconut), sizes (small, regular, large), extras (extra shot, syrup, cream). Modifiers have their own pricing and print clearly on the barista ticket.' },
  { icon: Coffee, title: 'Eat-In & Takeaway Toggle', description: 'One tap to switch between eat-in and takeaway. VAT adjusts automatically for hot food. Takeaway cups are tracked separately for stock management.' },
  { icon: CreditCard, title: 'Contactless & Mobile Payments', description: 'Tap to pay with contactless, Apple Pay, or Google Pay via integrated Teya terminal. Average transaction time under 5 seconds — essential for the morning rush.' },
];

const rushBenefits = [
  { icon: Clock, title: 'Handle the Morning Rush', description: 'The 7:30-9:00am queue is make-or-break for cafes. Posso\'s one-tap ordering and instant barista display mean you serve more customers per hour without adding staff.' },
  { icon: BarChart3, title: 'Know What Sells', description: 'See your top drinks, peak hours, average spend, and which modifiers are most popular. Use the data to optimise your menu and staffing levels.' },
  { icon: Smartphone, title: 'Online Ordering for Collection', description: 'Customers order and pay on their phone before arriving. Their coffee is ready when they walk in. No queue, no waiting — just collect and go.' },
  { icon: Users, title: 'Loyalty That Drives Repeat Visits', description: 'Cafes using Posso loyalty see a 20-30% increase in repeat visits within the first three months. Customers come back because their progress is tracked automatically.' },
];

export default function CafeEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Cafe ePOS System' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                  <Coffee className="w-3 h-3 mr-2" />
                  CAFE ePOS SYSTEM
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Cafe{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ePOS System
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Built for the speed cafes need. One-tap ordering for your regulars, digital loyalty that brings them back, barista display that keeps drinks flowing, and modifiers that handle every milk type and size without slowing down service.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> 2-tap ordering for coffee with modifiers</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Built-in digital loyalty programme</li>
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
              <div className="relative">
                <img
                  src="/images/posso_epos_integration.png"
                  alt="Posso cafe ePOS system with coffee modifiers, loyalty programme, and barista display for UK coffee shops"
                  width={1200}
                  height={630}
                  loading="eager"
                  className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Every Feature a Cafe Needs, Nothing It Doesn&apos;t
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                No table plans. No waiter pads. Just fast counter service, drink modifiers, loyalty, and a barista screen. Exactly what a busy cafe needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {cafeFeatures.map((f) => (
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

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Why Cafes and Coffee Shops Choose Posso
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {rushBenefits.map((b) => (
                <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">More Posso Solutions for Cafes</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Full ePOS Features</p>
                  <p className="text-slate-400 text-sm mt-1">30+ features overview</p>
                </Link>
                <Link href="/kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Skip the counter queue</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Order ahead for collection</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Cafe ePOS — Frequently Asked Questions" faqs={[
          { question: 'What is the best ePOS system for a cafe or coffee shop?', answer: 'The best cafe ePOS is built for speed at the counter, not table service. Posso offers one-tap ordering, drink modifiers (milk type, size, extras), a barista display screen, and built-in digital loyalty — exactly what a busy cafe needs. Systems start from £499 + VAT.' },
          { question: 'Does the cafe ePOS handle milk types and size modifiers?', answer: 'Yes. Set up modifiers for milk (whole, semi-skimmed, oat, soy, almond, coconut), size (small, regular, large), and extras (extra shot, flavour syrup, whipped cream). Each modifier can have its own price. They print clearly on the barista ticket.' },
          { question: 'How does the loyalty programme work for cafes?', answer: 'The built-in loyalty tracks customer purchases by phone number. Set up rewards like "Buy 9 coffees, get the 10th free." Loyalty is applied automatically at checkout — no paper stamp cards, no separate apps.' },
          { question: 'Can the cafe ePOS handle the morning rush?', answer: 'Yes. One-tap ordering and instant barista display mean each customer is served in under 30 seconds. Contactless payment via Apple Pay and Google Pay keeps the queue moving. Many cafes report serving 20-30% more customers per hour with Posso.' },
          { question: 'Does it support eat-in and takeaway with different VAT rates?', answer: 'Yes. A single toggle switches between eat-in and takeaway. VAT adjusts automatically based on HMRC rules for hot food and drink. Takeaway cup usage is tracked separately.' },
          { question: 'Can customers order ahead for collection?', answer: 'Yes. Your Posso online ordering site lets customers order and pay on their phone. The order appears on your barista display immediately. Their drink is ready when they arrive — no queue.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
