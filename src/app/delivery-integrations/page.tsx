import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { DeliveryIntegrationsLanding } from './delivery-integrations-landing';
import Link from 'next/link';
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
    url: 'https://www.posso.co.uk/delivery-integrations',
    type: 'website',
    images: [{ url: '/images/posso_takeaway_delivery_dashboard.png', width: 1200, height: 630, alt: 'Posso ePOS showing Just Eat, Uber Eats and Deliveroo delivery orders managed in one dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Eat, Uber Eats & Deliveroo POS Integration | Posso',
    description: 'Manage all delivery orders from Just Eat, Uber Eats & Deliveroo in one POS system.',
    images: ['/images/posso_takeaway_delivery_dashboard.png'],
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
    url: 'https://www.posso.co.uk/delivery-integrations',
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Delivery Integrations', item: 'https://www.posso.co.uk/delivery-integrations' },
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

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8 text-center">
              <p className="text-lg text-slate-300 leading-relaxed">
                Marketplace integration matters differently depending on what you sell. Our buyer&apos;s guides walk through it for{' '}
                <Link href="/pos-for-fish-and-chip-shop" className="text-primary hover:underline">fish and chip shops</Link>,{' '}
                <Link href="/pos-for-kebab-shop" className="text-primary hover:underline">kebab shops</Link>,{' '}
                <Link href="/pos-for-pizza-shop" className="text-primary hover:underline">pizza shops</Link>,{' '}
                <Link href="/pos-for-chinese-takeaway" className="text-primary hover:underline">Chinese takeaways</Link>{' '}
                and <Link href="/pos-for-indian-takeaway" className="text-primary hover:underline">Indian takeaways</Link>. Marketplace orders land on the same{' '}
                <Link href="/kitchen-display-system" className="text-primary hover:underline">kitchen display</Link> as everything else.
              </p>
            </div>
          </div>
        </section>

        <FAQSection title="Delivery Integrations — Frequently Asked Questions" faqs={[
          { question: 'Which delivery platforms does Posso integrate with?', answer: 'Posso integrates directly with Just Eat, Uber Eats, and Deliveroo. Orders from all three platforms flow straight into your POS and kitchen display alongside your dine-in and takeaway sales — so you manage every channel from one screen instead of separate tablets.' },
          { question: 'How do Just Eat, Uber Eats and Deliveroo orders reach my kitchen?', answer: 'Once integrated, incoming delivery orders are injected automatically into your Posso till and printed to your kitchen display (KDS) or kitchen printer in real time. There is no re-keying — the order, items, modifiers, and customer notes appear exactly as the customer placed them, ready for your team to prep.' },
          { question: 'Will this stop the tablet chaos of multiple delivery apps?', answer: 'Yes. Instead of a separate tablet for Just Eat, Uber Eats, and Deliveroo, every order lands in one place — your Posso POS. That means fewer devices on the counter, no app-switching, fewer missed or expired orders, and less pressure on staff during busy service.' },
          { question: 'Does my menu stay in sync across all delivery platforms?', answer: 'Menu sync keeps your items, prices, and availability aligned between your Posso POS and your delivery platforms. Update a price or mark an item as sold out once, and the change reflects across your connected channels — no need to log into each platform separately.' },
          { question: 'Can I see delivery sales and commission in my reporting?', answer: 'All Just Eat, Uber Eats, and Deliveroo orders are recorded in Posso alongside your in-store sales, giving you unified reporting across every channel. You can see revenue by platform in one dashboard, making it easy to track delivery turnover and understand the impact of platform commission on your margins.' },
          { question: 'Do I also get cloud phone and delivery driver app integration?', answer: 'Yes. Beyond marketplace integration, Posso offers cloud phone integration — caller ID with customer lookup and previous order history on screen — plus a dedicated delivery driver app (via Shipday) for driver assignment, GPS tracking, route optimisation, and proof of delivery, all connected to your POS in real time.' },
        ]} />
      </main>
      <Footer />
    </div>
  );
}
