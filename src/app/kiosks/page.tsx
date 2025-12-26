import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { KiosksHero } from '@/components/sections/kiosks-hero';
import { KioskDemo } from '@/components/sections/kiosk-demo';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "POSSO Self-Order Kiosk",
  "brand": "POSSO Ltd",
  "description": "Self-order kiosk for UK restaurants and takeaways. Helps reduce queues and increase order value with smart upsells.",
  "category": "Self Service Kiosk",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  },
  "url": "https://posso.uk/kiosks",
  "image": "https://www.posso.uk/wp-content/uploads/2022/07/table-kiosk-2.jpg"
};

export const metadata: Metadata = {
  title: 'Self-Order Kiosks for Restaurants | Increase Efficiency',
  description: 'Reduce queues, increase order accuracy, and empower your customers with our intuitive and sleek self-order kiosks. Perfect for fast-paced environments.',
  alternates: {
    canonical: '/kiosks',
  },
};

export default function KiosksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="flex-1">
        <KiosksHero />
        <KioskDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
