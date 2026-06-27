import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { PosSystemsLanding } from './pos-systems-landing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '⭐ POS Systems for Restaurants & Takeaways UK | From £499 + VAT',
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
    url: 'https://posso.co.uk/pos-systems',
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
    url: 'https://posso.co.uk/pos-systems',
    image: 'https://posso.co.uk/images/posso_epos_integration.png',
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
    '@id': 'https://posso.co.uk/#organization',
    name: 'Posso Ltd',
    url: 'https://posso.co.uk',
    telephone: '+44-808-175-3956',
    email: 'info@posso.co.uk',
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
        item: 'https://posso.co.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'ePOS Systems',
        item: 'https://posso.co.uk/pos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'POS Systems',
        item: 'https://posso.co.uk/pos-systems',
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
        <BreadcrumbNav
          items={[
            { label: 'ePOS Systems', href: '/pos' },
            { label: 'POS Systems' },
          ]}
        />
        <PosSystemsLanding />
        <FAQSection
          title="POS Systems UK — Frequently Asked Questions"
          faqs={[
            {
              question: 'What is a POS / EPOS system and do I need one for my UK business?',
              answer:
                'A POS (point of sale) or EPOS (electronic point of sale) system is the till, software, and hardware you use to take orders, process payments, and track sales. For UK restaurants, takeaways, cafés, and retail, a modern EPOS system speeds up service, reduces order errors, gives you live sales reporting, and connects payments, online ordering, and stock in one place. Posso systems are built specifically for UK hospitality and retail.',
            },
            {
              question: 'What hardware is included with a Posso POS system?',
              answer:
                'A standard Posso POS system includes a touchscreen till, integrated card payments, a receipt printer, and a cash drawer, with stock management and reporting built into the software. You can add self-order kiosks, kitchen display screens, additional terminals, and customer-facing displays as your business grows.',
            },
            {
              question: 'How much does a POS system cost and can I spread the payments?',
              answer:
                'Posso POS systems start from £499 + VAT for a complete touchscreen till with integrated payments, reporting, and stock management. Self-order kiosks start from £699 + VAT and online ordering from £350 (or free with Teya). Finance options let you spread the cost into affordable weekly or monthly payments — call 0808 175 3956 for a tailored quote.',
            },
            {
              question: 'Does the POS system work offline if my internet goes down?',
              answer:
                'Yes. Posso EPOS is built offline-first, so you can keep taking orders and processing cash payments even if your internet drops. Sales sync automatically once your connection is restored, so you never lose data or miss a transaction during a busy service.',
            },
            {
              question: 'Does it integrate with online ordering and delivery apps?',
              answer:
                'Yes. Posso integrates with your own branded online ordering website and app, and with major delivery platforms including Just Eat, Uber Eats, and Deliveroo. Online and delivery orders flow straight into your POS and kitchen, so your staff manage every channel from one screen at low commission.',
            },
            {
              question: 'How long does setup take and what support do I get?',
              answer:
                'We handle professional on-site installation anywhere in the UK, configure your full menu and pricing, and provide staff training — most businesses go live the same day, often in under 24 hours. Every system includes free setup and training, plus ongoing UK-based support from our team.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
