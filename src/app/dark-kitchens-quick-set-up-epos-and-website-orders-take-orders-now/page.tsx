import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Globe, Monitor, Smartphone, Clock, Truck, CreditCard, BarChart3, Utensils, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '🚀 Dark Kitchen ePOS & Online Ordering | Quick Setup',
  description:
    'Launch your dark kitchen fast with Posso ePOS and low-commission online ordering. Take delivery, collection, and marketplace orders from one system. Setup in under 24 hours.',
  keywords: [
    'dark kitchen POS',
    'ghost kitchen EPOS',
    'dark kitchen online ordering',
    'cloud kitchen POS system',
    'virtual restaurant POS',
    'dark kitchen setup UK',
    'delivery-only kitchen POS',
    'dark kitchen website orders',
  ],
  alternates: {
    canonical: '/dark-kitchens-quick-set-up-epos-and-website-orders-take-orders-now',
  },
  openGraph: {
    title: 'Dark Kitchen ePOS & Online Ordering — Take Orders Now',
    description:
      'Complete ePOS, online ordering website, and delivery integration for dark kitchens. Low commission — a fraction of marketplace fees. Setup in under 24 hours.',
    url: 'https://www.posso.co.uk/dark-kitchens-quick-set-up-epos-and-website-orders-take-orders-now',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Posso Dark Kitchen ePOS & Online Ordering',
    description: 'Complete ePOS system and low-commission online ordering for dark kitchens, ghost kitchens, and delivery-only restaurants in the UK.',
    brand: { '@type': 'Brand', name: 'Posso' },
    url: 'https://www.posso.co.uk/dark-kitchens-quick-set-up-epos-and-website-orders-take-orders-now',
    image: 'https://www.posso.co.uk/images/posso_epos_integration.png',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '350',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Dark Kitchens', item: 'https://www.posso.co.uk/dark-kitchens-quick-set-up-epos-and-website-orders-take-orders-now' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Your Own Ordering Website', description: 'Low-commission branded ordering page — around 1/10th the cost of Just Eat or Deliveroo. Accept delivery and collection orders 24/7.' },
  { icon: Monitor, title: 'Full ePOS Till System', description: 'Touchscreen ordering with category tabs, modifiers, and one-tap payments. Built for speed in high-volume delivery kitchens.' },
  { icon: Smartphone, title: 'Kitchen Display System', description: 'Orders appear instantly on your KDS — colour-coded by type with countdown timers. No paper tickets, no missed orders.' },
  { icon: Truck, title: 'Just Eat, Uber Eats & Deliveroo', description: 'All marketplace orders flow into one POS. No extra tablets, no re-keying. Auto-accept and auto-print to kitchen.' },
  { icon: CreditCard, title: 'Integrated Card Payments', description: 'Teya card terminal integration. Contactless, chip & PIN, Apple Pay, Google Pay. Card payments fire directly from POS.' },
  { icon: Clock, title: 'Time Slot Management', description: 'Control capacity with configurable time slots. ASAP and scheduled orders. Set orders-per-slot limits to avoid kitchen overload.' },
  { icon: Truck, title: 'Delivery Zone Management', description: 'Define delivery postcodes with custom fees per zone. Minimum order values per area. Customers see delivery fees upfront.' },
  { icon: BarChart3, title: 'Real-Time Analytics', description: 'Live dashboard with revenue, order count, average order value, and payment breakdowns. X and Z reports for end-of-day.' },
  { icon: Utensils, title: 'Visual Menu Builder', description: 'Drag-and-drop menu management. Categories, modifiers, images, allergens, and availability controls. GloriaFood sync included.' },
];

const steps = [
  { number: '1', title: 'Sign Up & Configure', description: 'We set up your ePOS, create your online ordering website, and configure your menu — all remotely.' },
  { number: '2', title: 'Connect Your Kitchen', description: 'Install the KDS on any screen. Connect your receipt and kitchen printers. Pair your Teya card machine.' },
  { number: '3', title: 'Go Live & Take Orders', description: 'Start accepting orders from your website, Just Eat, Uber Eats, and Deliveroo — all on one screen.' },
];

const benefits = [
  'Commission around 1/10th of marketplace fees',
  'All delivery platforms in one POS — no tablet juggling',
  'Setup in under 24 hours — we handle everything',
  'Works offline — no internet? No problem',
  'Delivery driver app integration via Shipday',
  'Caller ID for phone orders with customer history',
  'Multi-brand support — run multiple menus from one kitchen',
  'Free setup, training, and UK-based support',
];

export default function DarkKitchensPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Dark Kitchens' }]} />

        {/* Hero */}
        <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
                <Zap className="w-3 h-3 mr-2" />
                DARK KITCHEN ePOS &amp; ONLINE ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Dark Kitchen ePOS &amp;{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Website Orders
                </span>
              </h1>
              <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
                Launch your dark kitchen in under 24 hours. Low-commission online ordering, delivery platform integration, kitchen display, and full ePOS — everything you need to take orders now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
                </a>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">&lt;24h</p>
                  <p className="text-slate-400 text-sm">Setup Time</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">0%</p>
                  <p className="text-slate-400 text-sm">Commission</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-slate-400 text-sm">UK Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Dark Kitchens Need Posso */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Why Dark Kitchens Choose Posso
              </h2>
              <div className="text-lg text-slate-300 space-y-6 leading-relaxed">
                <p>
                  Dark kitchens — also called ghost kitchens, cloud kitchens, or virtual restaurants — are delivery-only operations that don&apos;t need a shopfront. But they still need a fast, reliable POS system and their own online ordering to avoid paying 30%+ commission to marketplaces on every order.
                </p>
                <p>
                  Posso gives you everything in one system: a <strong className="text-white">low-commission ordering website</strong> (around 1/10th the cost of marketplaces), direct integration with <Link href="/delivery-integrations" className="text-primary hover:underline">Just Eat, Uber Eats, and Deliveroo</Link>, a kitchen display system, and a full ePOS till. All orders — from your website, phone, or delivery apps — appear on one screen and print to your kitchen automatically.
                </p>
                <p>
                  Whether you&apos;re launching a new dark kitchen or converting an existing restaurant to delivery-only, we go from signup to live orders in <strong className="text-white">under 24 hours</strong>. We handle menu setup, printer configuration, and staff training — included free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Everything Your Dark Kitchen Needs
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                One system for POS, online ordering, delivery integration, and kitchen management.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature) => (
                <div key={feature.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Go Live in 3 Steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto glass-card rounded-2xl border border-primary/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Posso for Your Dark Kitchen?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" /> {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full feature overview</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Low-commission website</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={[
          { question: 'What is a dark kitchen?', answer: 'A dark kitchen (also called a ghost kitchen, cloud kitchen, or virtual restaurant) is a food preparation facility that produces meals exclusively for delivery. There\'s no dine-in or walk-in service — all orders come through online ordering, delivery apps, or phone.' },
          { question: 'How quickly can I set up a dark kitchen with Posso?', answer: 'We go from signup to live orders in under 24 hours. We handle your menu setup, printer configuration, online ordering website, and delivery app integration remotely. You just need your kitchen and equipment ready.' },
          { question: 'Do I need a separate tablet for each delivery app?', answer: 'No — Posso integrates Just Eat, Uber Eats, and Deliveroo directly into your POS. All orders from every platform appear on one screen and auto-print to your kitchen. No extra tablets.' },
          { question: 'How much commission do you charge on online orders?', answer: 'Our commission is around 1/10th the cost of marketplaces like Just Eat or Deliveroo, which typically charge 25–35% per order. With Posso, you keep significantly more of every order placed through your own website.' },
          { question: 'Can I run multiple brands from one dark kitchen?', answer: 'Yes — Posso supports multi-brand operation from a single kitchen. Each brand can have its own menu, branding, and ordering website while sharing the same POS and kitchen display.' },
          { question: 'Does it work without internet?', answer: 'The Posso ePOS is built offline-first — you can take orders, process cash payments, and print receipts even when the internet drops. Everything syncs when connectivity returns. However, online ordering and delivery platform integrations (Just Eat, Uber Eats, Deliveroo) require an active internet connection to receive orders.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
