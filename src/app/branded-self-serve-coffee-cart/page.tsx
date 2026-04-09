import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, ShoppingCart, Palette, MapPin, Zap, CreditCard, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branded Self Serve Coffee Cart',
  description:
    'Branded Self Serve Coffee Cart with mobile POS, branded kiosk interface, event-ready setup, pop-up deployment, and contactless payment for mobile coffee businesses. Kiosks from £699 + VAT.',
  keywords: [
    'branded self serve coffee cart',
    'mobile coffee cart pos',
    'branded coffee kiosk',
    'coffee cart pos system',
    'event coffee cart',
    'pop up coffee cart',
    'mobile coffee business pos',
    'branded coffee cart uk',
    'coffee cart kiosk',
    'self serve coffee cart system',
  ],
  alternates: {
    canonical: '/branded-self-serve-coffee-cart',
  },
  openGraph: {
    title: 'Branded Self Serve Coffee Cart | Posso UK',
    description:
      'Branded Self Serve Coffee Cart — mobile POS, branded kiosk, event-ready setup, and contactless payment for mobile coffee businesses.',
    url: 'https://posso.co.uk/branded-self-serve-coffee-cart',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Branded Self Serve Coffee Cart',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Mobile coffee cart POS with branded self-serve kiosk interface, event-ready portable setup, pop-up deployment, contactless payment, 4G connectivity, and remote sales monitoring.',
    url: 'https://posso.co.uk/branded-self-serve-coffee-cart',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '699',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '118',
      bestRating: '5',
    },
    featureList: [
      'Branded kiosk interface with custom logo and colours',
      'Portable setup with 4G and battery backup',
      'Contactless card and mobile wallet payments',
      'Event and pop-up deployment in minutes',
      'Remote sales monitoring via cloud dashboard',
      'Multi-location tracking for touring carts',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Branded Self Serve Coffee Cart', item: 'https://posso.co.uk/branded-self-serve-coffee-cart' },
    ],
  },
];

const features = [
  { icon: Palette, title: 'Branded Kiosk Interface', description: 'The kiosk screen displays your brand — logo, colours, fonts, and custom menu layout. Whether your cart is stationed at a corporate event, a music festival, or an office lobby, the screen reflects your brand identity. Customers interact with a professional, custom-branded ordering experience. White-label means no Posso branding visible to the customer.' },
  { icon: ShoppingCart, title: 'Portable Cart-Ready Setup', description: 'The entire kiosk system is designed for mobility. A compact touchscreen, battery-backed payment terminal, and 4G data connection mean the cart operates anywhere without fixed power or Wi-Fi. Set up in 5 minutes: unfold the cart, power on the kiosk, connect the coffee machine, and you are serving. Pack down is equally fast at the end of the event.' },
  { icon: MapPin, title: 'Event and Pop-Up Deployment', description: 'Take your branded coffee cart to festivals, markets, sports events, corporate functions, and pop-up locations. The POS works on 4G cellular data — no reliance on venue Wi-Fi that inevitably fails at the busiest moment. Pre-load the menu for each event with custom pricing. A weekday office price and a weekend festival price can be switched with one tap.' },
  { icon: CreditCard, title: 'Contactless Payment', description: 'At events and pop-ups, cash is slow and customers rarely carry it. The contactless payment terminal processes tap-to-pay cards, Apple Pay, and Google Pay in under 2 seconds. No cash handling means faster service, no float to manage, and no end-of-day cash count. Battery-powered terminals last a full day of trading on a single charge.' },
  { icon: Zap, title: '4G Connectivity', description: 'The kiosk connects via 4G SIM card, independent of venue Wi-Fi. Process payments, sync sales data, and receive remote updates over cellular data. At a festival with 10,000 attendees overwhelming the local Wi-Fi, your cart continues processing payments without interruption. A secondary SIM provides failover if the primary network drops.' },
  { icon: TrendingUp, title: 'Remote Sales Monitoring', description: 'Track sales from every event and location in real time via the cloud dashboard. See how many coffees your cart sold at the Saturday market versus the Sunday festival. Compare revenue per hour across different events. Identify which events are worth returning to and which are not. If you run multiple carts, see all of them on one screen.' },
];

const benefits = [
  { title: 'Build a Recognisable Brand', description: 'A branded kiosk screen turns a coffee cart into a brand experience. Customers remember the logo, the colours, and the professional interface. At repeat events, they look for your cart by name. Social media photos feature your branding. The kiosk elevates a mobile coffee operation from a stall to a brand that people follow and recommend.' },
  { title: 'Serve Faster at Peak Times', description: 'Events have short, intense peak windows — half-time at a football match, the interval at a concert, the morning rush at a market. Contactless payment and a streamlined kiosk menu mean transactions complete in 15 seconds. A queue of 30 people clears in 8 minutes. Every additional customer served during peak time is pure revenue gained.' },
  { title: 'Operate Anywhere Without Infrastructure', description: 'The 4G connection and battery-powered payment terminal free you from venue infrastructure. A field, a car park, a rooftop — if you can wheel the cart there, you can trade. No negotiations with venue IT departments about Wi-Fi access. No extension cables to a distant power outlet. Complete independence means you can say yes to any location.' },
  { title: 'Track Performance Across Events', description: 'After three months of events, the dashboard shows your most profitable locations, peak trading hours, best-selling drinks, and average transaction value. Use this data to plan your calendar — book more of the events that generate £800+ per day and drop the ones that barely cover costs. Data-driven scheduling maximises revenue per trading day.' },
];

export default function BrandedSelfServeCoffeeCartPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Branded Self Serve Coffee Cart' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <ShoppingCart className="w-3 h-3 mr-2" />
                MOBILE BRANDED COFFEE KIOSK
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Branded Self Serve{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coffee Cart
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A mobile coffee cart with branded kiosk ordering, contactless payment, 4G connectivity, and remote monitoring — built for events, pop-ups, and mobile coffee businesses.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Branded kiosk with your logo and colours</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> 4G connectivity — works anywhere</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Coffee cart kiosks from £699 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Coffee Cart Kiosk Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything a mobile coffee business needs to trade anywhere, look professional, and track every sale.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Mobile Coffee Businesses Choose Posso</h2>
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
                From Market Stall to Mobile Brand
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A coffee cart with a <strong className="text-white">branded kiosk screen</strong> looks fundamentally different from a cart with a handwritten menu board. Customers see a professional, tech-forward operation. They trust the hygiene, the quality, and the pricing. The kiosk does the selling — displaying drinks with images, descriptions, and modifiers — while you focus on making great coffee.
                </p>
                <p>
                  <strong className="text-white">Events and pop-ups</strong> are where mobile coffee businesses make their money. A well-positioned cart at a Saturday farmers market or a Sunday car boot can generate £500-£1,000 in a single day. The Posso kiosk handles peak-time queues with speed — contactless payment, streamlined menu, and instant order confirmation keep the line moving.
                </p>
                <p>
                  When you are ready to <strong className="text-white">scale to multiple carts</strong>, the cloud dashboard tracks each one independently. See which cart is performing at which event. Compare staff efficiency across locations. The same branded experience deploys on every cart — customers recognise your brand whether they find you at a festival, a market, or a corporate event.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/self-serve-coffee-bar" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Serve Coffee Bar</p>
                  <p className="text-slate-400 text-sm mt-1">Unmanned coffee station</p>
                </Link>
                <Link href="/coffee-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Full coffee shop POS</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Portable POS for UK</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Branded Self Serve Coffee Cart — Frequently Asked Questions" faqs={[
          { question: 'How does the branded kiosk work on a mobile cart?', answer: 'A compact touchscreen mounts on the cart and displays your branded ordering interface — logo, colours, menu with images, and pricing. Customers select their drink, customise it, and pay by contactless card or mobile wallet. The kiosk connects via 4G SIM card so it works at any outdoor location. Power comes from the cart battery or a portable generator.' },
          { question: 'Does it work without Wi-Fi?', answer: 'Yes. The kiosk uses a 4G SIM card for all connectivity — payment processing, sales data sync, and remote monitoring. It is completely independent of venue Wi-Fi. At outdoor events, festivals, and markets where Wi-Fi is unreliable or nonexistent, the 4G connection ensures uninterrupted service. A secondary SIM provides automatic failover if the primary network drops.' },
          { question: 'How long does battery last for the payment terminal?', answer: 'The contactless payment terminal runs for a full trading day on a single charge — typically 12+ hours or 300+ transactions, whichever comes first. For multi-day events, recharge overnight from any USB power source. The kiosk screen can run from the cart power supply or a portable battery pack. The entire setup is designed for off-grid operation.' },
          { question: 'Can I use different menus for different events?', answer: 'Yes. Create multiple menu profiles in the cloud dashboard — one for weekday office locations with standard pricing, another for weekend festivals with event pricing, another for corporate functions with a simplified premium menu. Switch between profiles in one tap from the kiosk or remotely from your phone before the event starts.' },
          { question: 'How do I track performance across events?', answer: 'The cloud dashboard records every transaction with location, time, and products sold. After each event, review total revenue, average transaction value, peak hours, and best-selling drinks. Compare events side by side over weeks and months. Identify your most profitable locations and optimise your event calendar based on actual revenue data.' },
          { question: 'How much does a branded coffee cart kiosk cost?', answer: 'The branded self-serve coffee cart kiosk starts from £699 + VAT including the touchscreen, contactless payment terminal, 4G connectivity, branded interface setup, and cloud dashboard. The coffee machine and cart are sourced separately or supplied as a complete package. Finance available. Free branding setup, menu configuration, and training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
