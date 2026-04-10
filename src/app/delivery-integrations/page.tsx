import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { DeliveryIntegrationsLanding } from './delivery-integrations-landing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '🚀 Just Eat, Uber Eats & Deliveroo POS Integration',
  description:
    'Integrate Just Eat, Uber Eats, and Deliveroo directly into your Posso ePOS. Cloud phone integration, delivery driver app, and kitchen display — all in one system.',
  keywords: [
    'Just Eat POS integration',
    'Uber Eats POS integration',
    'Deliveroo POS integration',
    'delivery app POS system',
    'restaurant delivery integration UK',
    'cloud phone restaurant',
    'delivery driver app',
    'food delivery POS',
  ],
  alternates: {
    canonical: '/delivery-integrations',
  },
  openGraph: {
    title: 'Just Eat, Uber Eats & Deliveroo POS Integration | Posso',
    description:
      'Manage all delivery orders from Just Eat, Uber Eats & Deliveroo in one POS system. Plus cloud phone and driver app integration.',
    url: 'https://posso.co.uk/delivery-integrations',
    type: 'website',
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Delivery Integration',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'POS integration for Just Eat, Uber Eats, and Deliveroo with cloud phone and delivery driver app.',
    url: 'https://posso.co.uk/delivery-integrations',
    brand: {
      '@type': 'Brand',
      name: 'Posso',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Delivery Integrations', item: 'https://posso.co.uk/delivery-integrations' },
    ],
  },
];

export default function DeliveryIntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Delivery Integrations' }]} />
        <DeliveryIntegrationsLanding />
      </main>
      <Footer />
    </div>
  );
}
