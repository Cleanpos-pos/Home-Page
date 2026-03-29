import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PosSystemsLanding } from './pos-systems-landing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS Systems for Restaurants & Takeaways UK | From £499 + VAT | Posso',
  description:
    'POS systems for UK restaurants & takeaways from £499 + VAT. Self-order kiosks, online ordering & card machines. Free setup & training. Call 0808 175 3956.',
  keywords: [
    'POS system restaurant UK',
    'EPOS system takeaway',
    'restaurant POS system',
    'self-order kiosk UK',
    'takeaway POS system',
    'fast food POS',
    'hospitality EPOS',
    'card machine restaurant',
    'online ordering system',
    'kitchen display system',
  ],
  alternates: {
    canonical: '/pos-systems',
  },
  openGraph: {
    title: 'POS Systems for Restaurants & Takeaways UK | From £499 + VAT',
    description:
      'Complete POS, self-order kiosks & online ordering for UK restaurants. Free setup & training included. Trusted by 1,000+ businesses.',
    url: 'https://posso.uk/pos-systems',
    type: 'website',
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Posso POS System for Restaurants',
    description:
      'Complete ePOS system for UK restaurants and takeaways. Includes touchscreen till, integrated payments, stock management, and reporting.',
    brand: {
      '@type': 'Brand',
      name: 'Posso',
    },
    url: 'https://posso.uk/pos-systems',
    image: 'https://posso.uk/images/posso_epos_integration.png',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      highPrice: '699',
      priceCurrency: 'GBP',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://posso.uk/#organization',
    name: 'Posso Ltd',
    url: 'https://posso.uk',
    telephone: '+44-808-175-3956',
    email: 'info@posso.uk',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    priceRange: '$$',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://posso.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'POS Systems',
        item: 'https://posso.uk/pos-systems',
      },
    ],
  },
];

export default function PosSystemsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <PosSystemsLanding />
      </main>
      <Footer />
    </div>
  );
}
