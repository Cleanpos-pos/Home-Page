import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PosHero } from '@/components/sections/pos-hero';
import { Contact } from '@/components/sections/contact';
import { EposFeatures } from '@/components/sections/epos-features';
import { FAQSection } from '@/components/sections/faq-section';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "POSSO POS System",
    "brand": "POSSO Ltd",
    "description": "UK-based EPOS system for restaurants and takeaways with real-time menu control, stock tracking, reporting and integrated payments.",
    "category": "Point of Sale",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "499.00",
      "availability": "https://schema.org/InStock",
      "url": "https://www.posso.co.uk/pos"
    },
    "url": "https://www.posso.co.uk/pos",
    "image": "https://www.posso.co.uk/images/posso_epos_integration.png",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "bestRating": "5", "ratingCount": "1" },
    "review": {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sally" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5" },
      "reviewBody": "My Posso POS system is a game changer — my restaurant runs more smoothly now thanks to Posso One and the team. A big thank you."
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.posso.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "ePOS Systems", "item": "https://www.posso.co.uk/pos" }
    ]
  }
];

export const metadata: Metadata = {
  title: '🚀 ePOS System Features for Restaurants & Takeaways',
  description: 'Explore 30+ features of the Posso One ePOS system: touchscreen ordering, KDS, kiosk mode, split bills, offline operation, Teya payments, and multi-language support.',
  alternates: {
    canonical: '/pos',
  },
  openGraph: {
    title: 'ePOS System for Restaurants & Takeaways | Posso UK',
    description:
      'Discover the Posso One ePOS system: touchscreen ordering, kitchen display, kiosk mode, split bills, offline operation, and integrated Teya payments for UK hospitality.',
    url: 'https://www.posso.co.uk/pos',
    type: 'website',
    images: [
      {
        url: '/images/posso_epos_integration.png',
        width: 1200,
        height: 630,
        alt: 'Posso One ePOS system for UK restaurants and takeaways showing touchscreen ordering, integrated payments, and kitchen display integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ePOS System for Restaurants & Takeaways | Posso UK',
    description:
      'Touchscreen ordering, kitchen display, kiosk mode, split bills, offline operation, and integrated Teya payments for UK hospitality.',
    images: ['/images/posso_epos_integration.png'],
  },
};

const posScreenshots = [
  { src: '/images/posso-epos-dashboard.png', w: 1906, h: 914, alt: 'Posso One EPOS back-office dashboard showing live sales, orders, average ticket, terminals and store management for a UK restaurant', cap: 'The Posso One dashboard — live sales, terminals and store management in one place.' },
  { src: '/images/posso-epos-order-types-till.png', w: 1914, h: 912, alt: 'Posso EPOS till order-types screen with Eat In, Takeaway and Delivery plus manager operations', cap: 'Start every order by choosing Eat In, Takeaway or Delivery on the Posso till.' },
  { src: '/images/posso-epos-add-delivery-order.png', w: 1298, h: 677, alt: 'Adding a delivery order with customer address capture in the Posso One EPOS system', cap: 'Take delivery orders with address capture, straight from the POS.' },
  { src: '/images/posso-epos-add-collection-order.png', w: 864, h: 575, alt: 'Adding a collection order in the Posso One EPOS system for a UK takeaway', cap: 'Log a collection order in seconds on Posso One.' },
];

const posImageSchema = posScreenshots.map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  contentUrl: `https://www.posso.co.uk${s.src}`,
  url: `https://www.posso.co.uk${s.src}`,
  name: s.alt,
  caption: s.cap,
  creditText: 'Posso Ltd',
  creator: { '@type': 'Organization', name: 'Posso Ltd' },
  copyrightNotice: '© Posso Ltd',
}));

const eposVerticals = [
  { href: '/best-restaurant-epos-system-uk', name: 'Best Restaurant EPOS UK', desc: '2026 buyer’s guide & comparison' },
  { href: '/restaurant-epos', name: 'Restaurant EPOS', desc: 'Table service, courses & split bills' },
  { href: '/takeaway-epos', name: 'Takeaway EPOS', desc: 'Collection, delivery & online orders' },
  { href: '/cafe-epos-system', name: 'Cafe EPOS', desc: 'Fast counter service & loyalty' },
  { href: '/coffee-pos-system', name: 'Coffee Shop POS', desc: 'Quick drinks ordering & modifiers' },
  { href: '/pizza-pos-system', name: 'Pizza POS', desc: 'Half & half, toppings & delivery' },
  { href: '/pos-for-pizza-shop', name: 'Pizza POS Buyer’s Guide', desc: 'What to look for before you buy' },
  { href: '/pos-for-fish-and-chip-shop', name: 'Fish & Chip Shop POS', desc: 'Portions, prompts & peak-hour speed' },
  { href: '/pos-for-kebab-shop', name: 'Kebab Shop POS', desc: 'Build sequence, extras & late-night trade' },
  { href: '/pos-for-chinese-takeaway', name: 'Chinese Takeaway POS', desc: 'Dish numbers, long menus & set meals' },
  { href: '/pos-for-indian-takeaway', name: 'Indian Takeaway POS', desc: 'Spice levels, banquets & sundries' },
  { href: '/kitchen-display-system', name: 'Kitchen Display System', desc: 'One queue, batching & station routing' },
  { href: '/pub-pos-system', name: 'Pub POS', desc: 'Tabs, rounds & fast bar service' },
  { href: '/bar-epos', name: 'Bar EPOS', desc: 'Rapid rounds & happy-hour pricing' },
  { href: '/hotel-epos-system', name: 'Hotel EPOS', desc: 'Room charging & multi-outlet' },
  { href: '/epos-system-for-indian-takeaway', name: 'Indian Takeaway EPOS', desc: 'Heat levels, menus & delivery' },
  { href: '/salon-pos-software', name: 'Salon POS', desc: 'Appointments, deposits & tips' },
  { href: '/cloud-epos-system', name: 'Cloud EPOS', desc: 'Manage every site from anywhere' },
  { href: '/self-order-kiosks', name: 'Self-Order Kiosks', desc: 'Self-service ordering that upsells' },
];

const eposHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Posso EPOS Systems by Business Type',
  itemListElement: eposVerticals.map((v, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: v.name,
    url: `https://www.posso.co.uk${v.href}`,
  })),
};

export default function PosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'ePOS Systems' }]} />
        <PosHero />
        <EposFeatures />

        {/* Product screenshots */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(posImageSchema) }} />
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">See the Posso One EPOS in Action</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From the back-office dashboard to taking Eat In, Takeaway and Delivery orders on the till — a real look at the Posso One EPOS system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {posScreenshots.map((s) => (
                <figure key={s.src} className="glass-card rounded-2xl border border-slate-700/50 overflow-hidden">
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={s.w}
                    height={s.h}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <figcaption className="text-slate-400 text-sm p-4 text-center">{s.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* EPOS by business type — pillar hub */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eposHubSchema) }} />
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">EPOS Systems for Every Type of Venue</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                One Posso EPOS platform, tailored to how your business actually works — from restaurants and takeaways to cafes, pubs, hotels and salons.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {eposVerticals.map((v) => (
                <Link key={v.href} href={v.href} className="group glass-card rounded-2xl border border-slate-700/50 p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{v.name}</h3>
                  <p className="text-slate-400 text-sm mt-2">{v.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Customer review */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8 text-center">
              <div className="text-amber-400 text-2xl mb-4" aria-label="Rated 4.5 out of 5">★★★★<span className="opacity-40">★</span></div>
              <blockquote className="text-xl md:text-2xl text-slate-100 italic leading-relaxed">
                &ldquo;My Posso POS system is a game changer — my restaurant runs more smoothly now thanks to Posso One and the team. A big thank you.&rdquo;
              </blockquote>
              <p className="text-slate-300 mt-5 font-semibold">Sally <span className="text-slate-500 font-normal">· 4.5/5</span></p>
            </div>
          </div>
        </section>

        {/* Contextual internal links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Complete Your Setup</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/drink-order-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Table Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Waiter pad &amp; QR ordering</p>
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
          { question: 'What order types does the Posso POS support?', answer: 'Counter, takeaway, collection, delivery, and dine-in with table selection. Each type has its own workflow and kitchen routing so orders go to the right place automatically.' },
          { question: 'Can I split bills at the table?', answer: 'Yes — split by number of people, by item, or by custom amount. Each split can be paid independently by card or cash. Perfect for group dining.' },
          { question: 'Does it work with card machines?', answer: 'Posso integrates directly with Teya card terminals via certified POSLink. Card payments fire from the POS or kiosk to the terminal. Contactless, chip & PIN, Apple Pay, and Google Pay all supported.' },
          { question: 'What happens if the internet goes down?', answer: 'Posso One is built offline-first. Local SQLite database stores products, orders, and settings. Take orders, process cash payments, and print receipts without internet. Everything syncs when you reconnect.' },
          { question: 'Can I use it for multiple locations?', answer: 'Yes — every restaurant gets isolated data with multi-tenant support and row-level security. Manage all locations from one dashboard with franchise-level reporting.' },
        ]} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
