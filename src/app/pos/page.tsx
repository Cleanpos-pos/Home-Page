import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PosHero } from '@/components/sections/pos-hero';
import { Contact } from '@/components/sections/contact';
import { EposFeatures } from '@/components/sections/epos-features';
import { FAQSection } from '@/components/sections/faq-section';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import Link from 'next/link';
import type { Metadata } from 'next';

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "POSSO POS System",
  "brand": "POSSO Ltd",
  "description": "UK-based EPOS system for restaurants and takeaways with real-time menu control, stock tracking, reporting and integrated payments.",
  "category": "Point of Sale",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  },
  "url": "https://posso.co.uk/pos",
  "image": "https://posso.co.uk/images/posso_epos_integration.png"
};

export const metadata: Metadata = {
  title: '🚀 ePOS System Features for Restaurants & Takeaways',
  description: 'Explore 30+ features of the Posso One ePOS system: touchscreen ordering, KDS, kiosk mode, split bills, offline operation, Teya payments, and multi-language support.',
  alternates: {
    canonical: '/pos',
  },
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

        {/* Contextual internal links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Complete Your Setup</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
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
