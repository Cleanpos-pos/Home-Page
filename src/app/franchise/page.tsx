import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FranchiseHero } from '@/components/sections/franchise-hero';
import { FranchiseCentralCommand } from '@/components/sections/franchise-central-command';
import { FranchiseIntelligence } from '@/components/sections/franchise-intelligence';
import { FranchiseIntegration } from '@/components/sections/franchise-integration';
import { FranchiseSocialProof } from '@/components/sections/franchise-social-proof';
import { Contact } from '@/components/sections/contact';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Franchise ePOS Systems | Multi-Site Management & Kiosks | Posso',
  description: 'Scale your food franchise with Posso. Centralised menu management, real-time multi-site reporting, and unified stock control for growing brands.',
  keywords: [
    'franchise POS system',
    'multi-site EPOS',
    'franchise epos',
    'central management',
  ],
  alternates: {
    canonical: '/franchise',
  },
  openGraph: {
    title: 'Franchise ePOS Systems | Multi-Site Management & Kiosks | Posso',
    description:
      'Scale your food franchise with Posso. Centralised menu management, real-time multi-site reporting, and unified stock control for growing brands.',
    url: 'https://www.posso.co.uk/franchise',
    type: 'website',
    images: [
      {
        url: '/images/posso_dashboard_analytics.png',
        width: 1200,
        height: 1200,
        alt: 'Posso franchise POS dashboard showing real-time multi-site reporting, analytics, and centralised management for multi-location food brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franchise ePOS Systems | Multi-Site Management & Kiosks | Posso',
    description: 'Centralised menu management, real-time multi-site reporting, and unified stock control for growing food franchises.',
    images: ['/images/posso_dashboard_analytics.png'],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Franchise POS / Multi-Site EPOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Franchise POS and multi-site EPOS system for UK food brands. Centralised menu and price control, real-time multi-location reporting, franchisee royalty tracking, unified stock control, and fast onboarding of new sites.',
    url: 'https://www.posso.co.uk/franchise',
    image: 'https://www.posso.co.uk/images/posso_dashboard_analytics.png',
    screenshot: 'https://www.posso.co.uk/images/posso_dashboard_analytics.png',
    brand: {
      '@type': 'Brand',
      name: 'Posso',
    },
    featureList: [
      'Centralised menu and price management across all sites',
      'Real-time multi-location sales reporting',
      'Franchisee royalty and revenue tracking',
      'Unified stock and inventory control',
      'Brand consistency enforcement',
      'Fast onboarding of new franchise locations',
      'Self-order kiosk integration',
      'Integrated card payments',
      'Online ordering integration',
      'Works offline',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: 'https://www.posso.co.uk/images/posso_dashboard_analytics.png',
    url: 'https://www.posso.co.uk/franchise',
    name: 'Posso Franchise POS Dashboard - Multi-Site EPOS Analytics',
    description: 'Posso franchise POS dashboard showing real-time multi-site reporting, analytics, and centralised management for multi-location food brands.',
    width: 1200,
    height: 1200,
    encodingFormat: 'image/png',
    creator: {
      '@type': 'Organization',
      name: 'Posso Ltd',
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Posso Ltd',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Franchise Solutions', item: 'https://www.posso.co.uk/franchise' },
    ],
  },
];

export default function FranchisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1">
        <BreadcrumbNav items={[{ label: 'Franchise Solutions' }]} />
        <FranchiseHero />
        <FranchiseCentralCommand />
        <FranchiseIntelligence />
        <FranchiseIntegration />
        <FranchiseSocialProof />

        <FAQSection title="Franchise POS Systems — Frequently Asked Questions" faqs={[
          { question: 'What is a franchise POS system and how does it differ from a standard EPOS?', answer: 'A franchise POS system is a multi-site EPOS built to run an entire brand from one central account, rather than a single till. With Posso you manage every franchise location from one dashboard — pushing menus, prices, and promotions to all sites at once, while each franchisee still runs their own day-to-day operations. A standard EPOS only handles one shop in isolation.' },
          { question: 'How do I manage menus and prices across multiple locations?', answer: 'Posso gives you centralised menu and price control. You build your master menu once at head office and push it to every site instantly. You can set regional price bands, lock down items so franchisees cannot change core products, and roll out new menus or limited-time offers across all locations in seconds — keeping pricing consistent brand-wide.' },
          { question: 'Can I see real-time reporting and royalties across all my franchise sites?', answer: 'Yes. The Posso franchise dashboard gives you real-time, multi-site reporting — total group sales, performance by location, best-selling products, and peak trading hours. Royalty and franchise-fee tracking is calculated automatically from each franchisee’s turnover, so head office always has an accurate, up-to-date view of what is owed.' },
          { question: 'How does Posso help maintain brand consistency across franchisees?', answer: 'Brand consistency is enforced from head office. You control the menu structure, product names, pricing rules, receipt branding, and kiosk and online ordering layouts centrally. Franchisees work within the template you set, so every customer gets the same experience — whether they visit your flagship site or your newest location.' },
          { question: 'How quickly can I onboard a new franchise location?', answer: 'New sites can go live in under 24 hours. Because your master menu, branding, and settings already exist centrally, onboarding a new franchisee is mostly a case of cloning your template, shipping pre-configured hardware, and running staff training. There is no need to rebuild the menu from scratch for every site.' },
          { question: 'Does the franchise POS handle stock control and integrations across sites?', answer: 'Yes. Posso provides unified stock and inventory control so you can monitor stock levels across locations and standardise suppliers. It also integrates with self-order kiosks, online ordering, delivery apps, and integrated card payments — all reporting back into the same central multi-site account.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
