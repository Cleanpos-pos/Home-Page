import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, CreditCard, Phone, ArrowRight, Coffee, Heart, Tablet, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cafe POS System | Quick-Serve Counter POS for Coffee Shops',
  description:
    'Posso cafe POS system for quick-serve coffee shops. Counter ordering, coffee modifiers, bakery items, digital loyalty, mobile payments, and compact hardware. From £499 + VAT.',
  keywords: [
    'cafe pos',
    'cafe pos system',
    'coffee shop pos',
    'pos for cafe',
    'cafe till system',
    'cafe point of sale',
    'coffee shop till',
    'best cafe pos system',
    'small cafe pos',
    'cafe pos uk',
  ],
  alternates: {
    canonical: '/cafe-pos',
  },
  openGraph: {
    title: 'Cafe POS System | Posso UK',
    description:
      'Quick-serve cafe POS with coffee modifiers, digital loyalty, mobile payments, and compact hardware for countertop use.',
    url: 'https://posso.co.uk/cafe-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Cafe POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Cafe POS system for quick-serve counter ordering with coffee modifiers, bakery item management, digital loyalty programme, mobile payments, and compact countertop hardware.',
    url: 'https://posso.co.uk/cafe-pos',
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
      'Quick-serve counter ordering',
      'Coffee modifier management',
      'Bakery and food item categories',
      'Digital loyalty programme',
      'Apple Pay, Google Pay, contactless',
      'Compact countertop hardware',
      'Barista display screen',
      'Online ordering for collection',
      'Sales reporting and analytics',
      'Works offline',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Cafe POS', item: 'https://posso.co.uk/cafe-pos' },
    ],
  },
];

const cafeFeatures = [
  { icon: Zap, title: 'Quick-Serve Counter', description: 'Designed for the pace of a busy cafe counter. Popular drinks are pinned to the home screen. A latte with oat milk is two taps — not five screens of options.' },
  { icon: Coffee, title: 'Coffee Modifiers', description: 'Milk (whole, oat, soy, almond, coconut), size (small, regular, large), decaf, extra shot, flavoured syrups. Each modifier can carry its own price uplift — +£0.40 for oat milk, +£0.60 for an extra shot.' },
  { icon: ShoppingBag, title: 'Bakery & Food Items', description: 'Not just drinks. Manage pastries, sandwiches, salads, and meal deals with their own categories, modifiers (toasted, heated), and allergen tags. Perfect for cafes that serve food alongside coffee.' },
  { icon: Heart, title: 'Digital Loyalty', description: 'Customers earn stamps digitally by phone number. "Buy 9, get 1 free" runs automatically at the till. No paper cards to print, no stamps to manage. Loyalty drives repeat visits without any admin overhead.' },
  { icon: CreditCard, title: 'Mobile Payments', description: 'Contactless, Apple Pay, Google Pay, and chip & PIN through the integrated Teya terminal. Tap-to-pay transactions complete in under 3 seconds — essential when there are 20 people in the morning queue.' },
  { icon: Tablet, title: 'Compact Hardware', description: 'Cafe counters are small. The Posso terminal has a compact footprint that fits next to your grinder and espresso machine without taking over the counter.' },
];

const cafeBenefits = [
  { title: 'Serve More Customers Per Hour', description: 'The average coffee transaction on Posso takes under 20 seconds from first tap to payment complete. During the 8am rush, that speed means shorter queues, happier customers, and more sales.' },
  { title: 'Build a Loyal Customer Base', description: 'Digital loyalty turns one-time visitors into regulars. Cafes using Posso loyalty typically see stamp redemption rates above 60% — meaning customers keep coming back to earn their free coffee.' },
  { title: 'Understand Your Business', description: 'See which drinks sell most, what time your peak is, whether oat milk surcharges are accepted, and how food sales compare to drinks. Data helps you make better decisions about your menu and pricing.' },
  { title: 'Take Orders Before Customers Arrive', description: 'Your online ordering page lets customers order and pay on their phone. Their drink appears on the barista display. They walk in, pick it up, and leave. Zero queue time for them, zero counter time for you.' },
];

export default function CafePosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Cafe POS' },
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
                  CAFE POS SYSTEM
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Cafe{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    POS System
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  A POS system that fits on your cafe counter and keeps up with your morning rush. Quick-serve ordering, coffee modifiers that make sense, digital loyalty that brings customers back, and compact hardware that does not take over your workspace.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> 2-tap ordering for drinks with modifiers</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Digital loyalty — buy 9, get 1 free</li>
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
                  alt="Posso cafe POS system on a compact countertop terminal with coffee ordering, modifiers, and digital loyalty"
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
                Everything Your Cafe Counter Needs
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A cafe POS should be fast at the counter, handle coffee modifiers properly, and fit in a small space. Posso does all three without the bloat of a full restaurant system.
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
                How Posso Helps Your Cafe Grow
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A good cafe POS does more than ring up sales. It helps you serve faster, build loyalty, and understand what works.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {cafeBenefits.map((b) => (
                <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">A Typical Cafe Transaction</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Tap the Drink', desc: 'Flat white, latte, americano — one tap from the home screen' },
                { step: '2', title: 'Add Modifiers', desc: 'Oat milk, large, extra shot — each modifier adds its price' },
                { step: '3', title: 'Customer Pays', desc: 'Contactless tap on the terminal. Under 3 seconds.' },
                { step: '4', title: 'Barista Makes', desc: 'Order appears on the barista display. Drink is ready in minutes.' },
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Posso Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/cafe-epos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cafe ePOS System</p>
                  <p className="text-slate-400 text-sm mt-1">Advanced cafe features</p>
                </Link>
                <Link href="/kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
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

        <FAQSection title="Cafe POS — Frequently Asked Questions" faqs={[
          { question: 'What is the best POS system for a small cafe?', answer: 'The best cafe POS is fast at the counter, handles coffee modifiers without slowing you down, includes digital loyalty, and takes up minimal space. Posso is designed specifically for cafes — compact hardware, quick-serve interface, and built-in loyalty. Systems start from £499 + VAT.' },
          { question: 'How does the cafe POS handle coffee modifiers and sizes?', answer: 'When you tap a drink, the modifier screen appears with milk options (oat, soy, almond, coconut, whole), sizes (small, regular, large), and extras (extra shot, decaf, syrup). Each modifier has its own price. The total updates instantly and the barista ticket shows the full spec.' },
          { question: 'Does the cafe POS include a loyalty programme?', answer: 'Yes. The built-in digital loyalty programme tracks stamps by customer phone number. Set up "Buy 9, get 1 free" or other reward structures. Stamps apply automatically — no paper cards, no separate apps, no admin.' },
          { question: 'Can the cafe POS handle food orders as well as drinks?', answer: 'Yes. Set up separate categories for pastries, sandwiches, salads, and meal deals alongside your drinks menu. Food items can have their own modifiers (toasted, heated, gluten-free option) and allergen tags.' },
          { question: 'Is the hardware compact enough for a small cafe counter?', answer: 'Yes. The Posso terminal is designed for small counters. It fits alongside your coffee machine and grinder without dominating your workspace. The integrated card terminal is also compact.' },
          { question: 'Can customers order ahead on their phone?', answer: 'Yes. Your Posso online ordering page lets customers order and pay on their phone before arriving. Their order goes straight to the barista display. They walk in, collect their drink, and leave without waiting in the queue.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
