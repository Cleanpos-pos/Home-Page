import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PosHero } from '@/components/sections/pos-hero';
import { Contact } from '@/components/sections/contact';
import { EposFeatures } from '@/components/sections/epos-features';
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
  title: 'ePOS System Features for Restaurants & Takeaways',
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
      <main className="flex-1">
        <PosHero />
        <EposFeatures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
