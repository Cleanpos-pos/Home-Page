import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Check,
  Zap,
  Phone,
  ArrowRight,
  Truck,
  Clock,
  Smartphone,
  Globe,
  Users,
  BarChart3,
  ShieldCheck,
  MapPin,
  Bell,
  Calendar,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dry Cleaning Pickup & Delivery App UK',
  description:
    'Dry cleaning pickup and delivery app for UK laundry and dry cleaning businesses. Customer booking, driver management, garment tracking, and automated notifications. Try free at xp-clean.web.app.',
  keywords: [
    'dry cleaning pickup delivery app',
    'dry cleaning delivery app UK',
    'laundry pickup app',
    'dry cleaning collection service app',
    'laundry delivery software',
    'dry cleaning driver app',
    'garment tracking app',
    'dry cleaning booking app',
    'laundry management software',
    'dry cleaning customer app',
  ],
  alternates: { canonical: '/dry-cleaning-pickup-delivery-app' },
  openGraph: {
    title: 'Dry Cleaning Pickup & Delivery App UK | XP Clean by Posso',
    description:
      'Manage pickups, deliveries, and customer orders from one app. Garment tracking, driver management, and automated SMS notifications.',
    url: 'https://posso.co.uk/dry-cleaning-pickup-delivery-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'XP Clean — Dry Cleaning Pickup & Delivery App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Pickup and delivery management app for dry cleaning and laundry businesses. Customer booking portal, driver management, garment tracking, and automated notifications.',
    url: 'https://posso.co.uk/dry-cleaning-pickup-delivery-app',
    image: 'https://posso.co.uk/og-image.png',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Dry Cleaning Pickup & Delivery App', item: 'https://posso.co.uk/dry-cleaning-pickup-delivery-app' },
    ],
  },
];

const features = [
  { icon: Calendar, title: 'Online Booking Portal', description: 'Customers book pickup slots directly from their phone or computer. Choose date, time, and service type — no phone call needed.' },
  { icon: Truck, title: 'Driver Management', description: 'Assign pickups and deliveries to drivers. Real-time route tracking, proof of collection, and delivery confirmation.' },
  { icon: MapPin, title: 'Address & Zone Management', description: 'Define pickup and delivery zones with custom pricing per area. Customers enter their postcode and see availability instantly.' },
  { icon: Bell, title: 'Automated Notifications', description: 'SMS and email alerts at every stage: booking confirmed, driver en route, garments received, ready for collection, out for delivery.' },
  { icon: ShieldCheck, title: 'Garment Tracking', description: 'Track every garment from pickup to return. Barcode/tag scanning, item descriptions, special care instructions, and damage notes.' },
  { icon: BarChart3, title: 'Business Dashboard', description: 'Real-time overview: orders today, revenue, driver status, upcoming pickups, and customer analytics. Export reports for accounting.' },
];

const customerJourney = [
  { step: '1', title: 'Customer Books Online', description: 'Customer visits your branded booking page, selects services, picks a collection time slot, and confirms the order.' },
  { step: '2', title: 'Driver Collects', description: 'Your driver receives the pickup assignment, navigates to the address, scans the garments, and confirms collection.' },
  { step: '3', title: 'You Clean & Process', description: 'Garments are logged in your system with tracking tags. Process as normal — the app tracks status throughout.' },
  { step: '4', title: 'Delivery & Done', description: 'Once ready, assign delivery to a driver. Customer gets an SMS when the driver is en route and a confirmation on delivery.' },
];

const benefits = [
  'No more phone tag — customers book online 24/7',
  'Reduce missed pickups with automated reminders',
  'Track every garment from door to door',
  'Route optimisation saves driver time and fuel',
  'Automated SMS keeps customers informed at every stage',
  'Branded booking page — your logo, your colours',
  'Multi-driver support with real-time tracking',
  'Customer order history and repeat bookings',
  'Works on any device — phone, tablet, or desktop',
  'Integrates with Posso dry cleaning POS',
];

const additionalFeatures = [
  { icon: Users, title: 'Customer Accounts', description: 'Customers create accounts with saved addresses, preferences, and order history. One-tap rebooking for regular customers.' },
  { icon: Smartphone, title: 'Works on Any Device', description: 'Progressive web app — works on iPhone, Android, tablet, and desktop. No app store download required.' },
  { icon: Globe, title: 'Branded Booking Page', description: 'Your business name, logo, and colours on the booking portal. Customers see your brand, not ours.' },
  { icon: Clock, title: 'Time Slot Management', description: 'Set available pickup and delivery windows per day. Control capacity per slot to avoid overloading your drivers.' },
  { icon: Star, title: 'Service Menu', description: 'Configurable service list: dry cleaning, laundry, ironing, alterations, specialist items. Per-item pricing.' },
  { icon: ShieldCheck, title: 'Special Care Instructions', description: 'Customers flag delicate items, stain notes, and special requests during booking. Visible to your team before garments arrive.' },
];

export default function DryCleaningAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Dry Cleaning Pickup & Delivery App' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Truck className="w-3 h-3 mr-2" />
              DRY CLEANING PICKUP &amp; DELIVERY
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
              <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                Dry Cleaning Pickup &amp;{' '}
              </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Delivery App
              </span>
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
              Let your customers book pickups online, track their garments, and get automated delivery notifications. Manage drivers, routes, and orders from one dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8">
                <a href="https://xp-clean.web.app/" target="_blank" rel="noopener noreferrer">
                  Try XP Clean Free <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <a href="tel:+448081753956">
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-slate-400 text-sm">Online Booking</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">Live</p>
                <p className="text-slate-400 text-sm">Driver Tracking</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">Auto</p>
                <p className="text-slate-400 text-sm">SMS Alerts</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How the Pickup &amp; Delivery App Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {customerJourney.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Core Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything your dry cleaning business needs to offer a professional pickup and delivery service.
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

        {/* CTA Banner */}
        <section className="py-10 bg-gradient-to-r from-primary/20 to-accent/20 border-y border-primary/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-white font-semibold text-lg">
                Try XP Clean free — no card required
              </span>
              <Button asChild className="bg-gradient-to-r from-primary to-accent text-white">
                <a href="https://xp-clean.web.app/" target="_blank" rel="noopener noreferrer">
                  Launch XP Clean <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">More Features</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {additionalFeatures.map((f) => (
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

        {/* Why Choose */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-primary/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Add Pickup &amp; Delivery to Your Business?</h2>
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
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Dry Cleaning Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/dry-cleaning-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Dry Cleaning Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full management system</p>
                </Link>
                <Link href="/solutions/dry-cleaning-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Dry Cleaning POS</p>
                  <p className="text-slate-400 text-sm mt-1">Till &amp; garment tracking</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Features</p>
                  <p className="text-slate-400 text-sm mt-1">30+ POS features</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from &pound;499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Dry Cleaning Pickup & Delivery — FAQs" faqs={[
          { question: 'How do customers book a pickup?', answer: 'Customers visit your branded booking page (powered by XP Clean), select their services (dry cleaning, laundry, ironing, etc.), choose a pickup time slot, enter their address, and confirm. They receive an instant booking confirmation by SMS and email.' },
          { question: 'Can I manage my own delivery drivers?', answer: 'Yes. Assign pickups and deliveries to your drivers from the dashboard. Drivers see their route, navigate to each address, and confirm collection/delivery in the app. You get real-time tracking of every driver.' },
          { question: 'Does it track individual garments?', answer: 'Yes. Each garment is logged with a description, tag/barcode, special care instructions, and status (collected, processing, ready, delivered). Customers can check their order status online at any time.' },
          { question: 'Do customers need to download an app?', answer: 'No. XP Clean is a progressive web app — it works in any browser on iPhone, Android, tablet, or desktop. Customers just visit your booking page. No app store download required.' },
          { question: 'Can I set different delivery zones with different pricing?', answer: 'Yes. Define zones by postcode or area with custom delivery fees per zone. Set minimum order values and available time slots per zone. Customers see their delivery fee before booking.' },
          { question: 'Does it integrate with the Posso dry cleaning POS?', answer: 'Yes. XP Clean integrates with the Posso dry cleaning POS system so garments booked online flow into your in-store workflow. One system for walk-in and pickup/delivery customers.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
