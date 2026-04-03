import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Check, Smartphone, Monitor, CreditCard, QrCode, Utensils, Clock, Users, BarChart3, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drink Order App & Table Ordering Waiter Pad | Posso',
  description:
    'Posso drink order app and waiter pad for restaurants, bars, and pubs. Table ordering, QR ordering, floor plan management, split bills, and pay-at-table — all in one system.',
  keywords: [
    'drink order app',
    'table ordering app UK',
    'waiter pad app',
    'restaurant ordering app',
    'QR table ordering',
    'bar ordering app',
    'pub ordering system',
    'pay at table app',
    'split bill app',
    'digital waiter pad',
  ],
  alternates: {
    canonical: '/drink-order-app',
  },
  openGraph: {
    title: 'Drink Order App & Table Ordering Waiter Pad | Posso',
    description:
      'Digital waiter pad and table ordering app for restaurants, bars, and pubs. QR ordering, split bills, and pay-at-table.',
    url: 'https://posso.co.uk/drink-order-app',
    type: 'website',
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Table Ordering & Waiter Pad',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, Windows',
    description: 'Digital waiter pad and table ordering system for restaurants, bars, and pubs with QR ordering, split bills, and pay-at-table.',
    url: 'https://posso.co.uk/drink-order-app',
    brand: { '@type': 'Brand', name: 'Posso' },
    offers: { '@type': 'Offer', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Drink Order App', item: 'https://posso.co.uk/drink-order-app' },
    ],
  },
];

const features = [
  {
    icon: Smartphone,
    title: 'Digital Waiter Pad',
    description: 'Replace paper pads with a sleek touchscreen waiter app. Take orders at the table and send them straight to the kitchen — no walking back and forth.',
  },
  {
    icon: QrCode,
    title: 'QR Code Table Ordering',
    description: 'Customers scan a QR code at their table and order directly from their phone. Food and drink orders go straight to the kitchen and bar.',
  },
  {
    icon: Utensils,
    title: 'Visual Floor Plan',
    description: 'Drag-and-drop floor plan editor. See which tables are occupied, available, or reserved at a glance. Assign orders to tables with a single tap.',
  },
  {
    icon: CreditCard,
    title: 'Pay at Table',
    description: 'Let customers pay at the table via card machine or their phone. Split bills by person, by item, or by custom amount — no fuss.',
  },
  {
    icon: Monitor,
    title: 'Kitchen & Bar Display',
    description: 'Orders appear instantly on your kitchen display system (KDS). Bar orders go to the bar screen. No tickets lost, no orders missed.',
  },
  {
    icon: Clock,
    title: 'Real-Time Order Tracking',
    description: 'Customers see their order status in real-time. Staff can track preparation progress and notify when orders are ready.',
  },
  {
    icon: Users,
    title: 'Staff Management',
    description: 'Assign staff to sections, track performance, and manage shifts. Role-based access means waiters see what they need — nothing more.',
  },
  {
    icon: BarChart3,
    title: 'Sales & Reporting',
    description: 'Track revenue by table, by server, by time period. See which drinks sell best, peak ordering times, and average table spend.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Customer-facing ordering supports English, Spanish, French, Italian, and Chinese. Perfect for tourist areas and diverse communities.',
  },
];

const useCases = [
  { title: 'Restaurants', description: 'Full table service with courses, modifiers, and dietary alerts.' },
  { title: 'Bars & Pubs', description: 'Fast drink ordering with tab management and QR ordering.' },
  { title: 'Hotels', description: 'Room service ordering, restaurant, and bar — all connected.' },
  { title: 'Cafes', description: 'Counter and table ordering with loyalty integration.' },
  { title: 'Event Venues', description: 'High-volume drink ordering with multiple bar points.' },
  { title: 'Food Halls', description: 'Multi-vendor ordering from one QR code per table.' },
];

export default function DrinkOrderAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
                <Smartphone className="w-3 h-3 mr-2" />
                TABLE ORDERING &amp; WAITER PAD
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Drink Order App &amp;{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Digital Waiter Pad
                </span>
              </h1>
              <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
                Take orders at the table, let customers order via QR, and send everything straight to the kitchen and bar. Split bills, pay at table, and manage your floor plan — all from Posso.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50 text-lg px-8 py-3 font-medium">
                  Get a Free Demo
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  Call 0808 175 3956
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent inline-block">
                Everything You Need for Table Service
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From waiter pad to QR ordering, floor plans to split bills — Posso handles it all.
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
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent inline-block">
                How Table Ordering Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Customer Scans QR', desc: 'Or waiter takes the order on their pad' },
                { step: '2', title: 'Order Sent to Kitchen', desc: 'Food to kitchen, drinks to bar — automatically' },
                { step: '3', title: 'Staff Tracks Progress', desc: 'KDS shows prep status in real-time' },
                { step: '4', title: 'Pay at Table', desc: 'Split bill, card, or contactless — done' },
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

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent inline-block">
                Perfect For
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {useCases.map((uc) => (
                <div key={uc.title} className="glass-card rounded-xl p-5 border border-slate-700/50 text-center">
                  <h3 className="font-semibold text-white mb-1">{uc.title}</h3>
                  <p className="text-slate-400 text-sm">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto glass-card rounded-2xl border border-primary/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Posso Table Ordering?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'No app download required for customers',
                  'Orders go straight to kitchen/bar — no re-keying',
                  'Reduce wait times and staff pressure',
                  'Increase average table spend with smart upsells',
                  'Works offline — syncs when reconnected',
                  'Supports 5 languages for diverse venues',
                  'Split bills by person, item, or custom amount',
                  'Full reporting by table, server, and time period',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" /> {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
