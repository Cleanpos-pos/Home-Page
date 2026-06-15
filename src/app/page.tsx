import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { TableMaestroShowcase } from '@/components/sections/table-maestro';
import { GloriaFoodSwitchBanner } from '@/components/sections/gloriafood-switch-banner';
import { WhyPosso } from '@/components/sections/why-posso';
import { IndustryServed } from '@/components/sections/industry-served';
import { EducationCashless } from '@/components/sections/education-cashless';
import { Metadata } from 'next';
import Script from 'next/script';
import { FAQSection } from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Restaurant ePOS Systems & Self-Order Kiosks UK | Posso',
  description: 'ePOS systems, self-order kiosks & online ordering for UK restaurants and takeaways. Free setup & training. Call 0808 175 3956.',
  keywords: [
    'ePOS system',
    'restaurant POS system UK',
    'self-order kiosk',
    'self-service kiosk UK',
    'takeaway POS system',
    'hospitality ePOS',
    'restaurant technology',
    'fast food POS',
    'digital signage restaurant',
    'online ordering system',
    'card machine restaurant',
    'table booking system',
    'kitchen display system',
    'franchise POS system',
    'venue management software',
  ],
  openGraph: {
    title: 'Restaurant ePOS Systems & Self-Order Kiosks | Posso UK',
    description: 'All-in-one ePOS, self-order kiosks, online ordering, and venue management for UK restaurants and hospitality. Trusted by 1,000+ businesses.',
    url: 'https://posso.co.uk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso restaurant ePOS systems and self-order kiosks for UK hospitality' }],
  },
}

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Posso",
    "url": "https://posso.co.uk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://posso.co.uk/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://posso.co.uk/#localbusiness",
    "name": "Posso Ltd",
    "description": "UK provider of ePOS systems, self-order kiosks, ticketing, and digital signage for restaurants, takeaways, and entertainment venues.",
    "url": "https://posso.co.uk",
    "telephone": "+44-808-175-3956",
    "email": "info@posso.co.uk",
    "logo": "https://posso.co.uk/icon-512x512.png",
    "image": "https://posso.co.uk/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:30"
    },
    "sameAs": [
      "https://x.com/posso_uk",
      "https://www.linkedin.com/company/posso-uk"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Posso Products & Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Restaurant ePOS Systems",
        "url": "https://posso.co.uk/pos"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Self-Order Kiosks",
        "url": "https://posso.co.uk/kiosks"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ticketing & Venue Management",
        "url": "https://posso.co.uk/ticketing"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Digital Signage",
        "url": "https://posso.co.uk/digital-signage"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Card Payment Machines",
        "url": "https://posso.co.uk/credit-card-machines"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Online Ordering & Apps",
        "url": "https://posso.co.uk/online-ordering"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://posso.co.uk"
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <GloriaFoodSwitchBanner />
        <TableMaestroShowcase />
        <Services />
        <WhyPosso />
        <EducationCashless />
        <IndustryServed />
        <About />
        <Testimonials />
        <FAQSection faqs={[
          { question: 'How much does a restaurant POS system cost?', answer: 'Our POS systems start from £499 + VAT for a complete touchscreen till with integrated payments, receipt printing, and stock management. Self-order kiosks start from £699 + VAT. Finance options are available from £24.92/week.' },
          { question: 'Do you offer self-order kiosks for restaurants?', answer: 'Yes — our 21" touchscreen self-order kiosks come with integrated Teya card payment, customisable branding, multi-language support (5 languages), and automatic upselling prompts that increase average order value by 20–30%.' },
          { question: 'Can I integrate Just Eat, Uber Eats, and Deliveroo with my POS?', answer: 'Absolutely. Posso integrates with Just Eat, Uber Eats, and Deliveroo so all delivery orders appear directly on your POS and kitchen display. No extra tablets, no re-keying — everything in one place.' },
          { question: 'Does the POS work offline?', answer: 'Yes. Posso One is built offline-first using PowerSync technology. You can take orders, process cash payments, and print receipts even without internet. Everything syncs automatically when connectivity returns.' },
          { question: 'How long does setup take?', answer: 'We go from first install to first order in under 24 hours. We handle hardware setup, menu import, staff training, and ongoing support. Setup and training are included free.' },
          { question: 'Do you provide support?', answer: 'Yes — we offer UK-based support via phone (0808 175 3956, free call) and remote assistance. Our team is available Monday to Friday, 9am–5:30pm, with average response times under 15 minutes for critical issues.' },
        ]} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
