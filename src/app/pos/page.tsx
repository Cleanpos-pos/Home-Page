import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PosHero } from '@/components/sections/pos-hero';
import { Contact } from '@/components/sections/contact';
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
  "url": "https://posso.uk/pos",
  "image": "https://www.posso.uk/wp-content/uploads/2021/12/pc.jpeg"
};

export const metadata: Metadata = {
  title: 'Powerful ePOS Systems for Restaurants | Posso',
  description: 'Streamline your restaurant operations with our state-of-the-art ePOS systems. Increase efficiency and provide a seamless experience for staff and customers.',
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
