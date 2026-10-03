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
import { FAQSection } from '@/components/sections/faq-section';
import { posso } from '@/lib/possoFacts';

export const metadata: Metadata = {
  title: 'Restaurant ePOS Systems & Self-Order Kiosks UK | Posso',
  description: `ePOS systems, self-order kiosks & online ordering for UK restaurants and takeaways. Free setup & training. Call ${posso.phone}.`,
  openGraph: {
    title: 'Restaurant ePOS Systems & Self-Order Kiosks | Posso UK',
    description: `All-in-one ePOS, self-order kiosks, online ordering, and venue management for UK restaurants and hospitality. Trusted by ${posso.businessCount} businesses.`,
    url: 'https://www.posso.co.uk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso restaurant ePOS systems and self-order kiosks for UK hospitality' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant ePOS Systems & Self-Order Kiosks | Posso UK',
    description: `All-in-one ePOS, self-order kiosks, online ordering and venue management for UK restaurants. Trusted by ${posso.businessCount} businesses.`,
    site: '@posso_uk',
    creator: '@posso_uk',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
}

/**
 * The site's one Organization node. It used to be emitted by the root layout on
 * every page, and this page also carried a LocalBusiness duplicate with opening
 * hours (09:00–17:30) that contradicted the published support hours. Inner pages
 * reference this node by @id (https://www.posso.co.uk/#organization).
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.posso.co.uk/#organization",
  "name": "Posso Ltd",
  "legalName": "Posso Ltd",
  "url": "https://www.posso.co.uk",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.posso.co.uk/icon-512x512.png",
    "width": 512,
    "height": 512
  },
  "description": "UK provider of ePOS systems, self-order kiosks, ticketing, digital signage, and hospitality technology for restaurants, takeaways, and entertainment venues.",
  "telephone": posso.phoneSchema,
  "email": "info@posso.co.uk",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": posso.phoneSchema,
      "contactType": "Sales",
      "areaServed": "GB",
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "telephone": posso.phoneSchema,
      "contactType": "Customer Support",
      "areaServed": "GB",
      "availableLanguage": "en",
      // Support hours from possoFacts (Mon–Fri 9am–9:30pm)
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "21:30"
      }
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "The Oval, 57 New Walk",
    "addressLocality": "Leicester",
    "postalCode": "LE1 7EA",
    "addressCountry": "GB"
  },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "Companies House Number",
    "value": "11813595"
  },
  "areaServed": [
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "City", "name": "London" },
    { "@type": "City", "name": "Birmingham" },
    { "@type": "City", "name": "Manchester" },
    { "@type": "City", "name": "Leeds" },
    { "@type": "City", "name": "Glasgow" },
    { "@type": "City", "name": "Liverpool" },
    { "@type": "City", "name": "Newcastle" },
    { "@type": "City", "name": "Sheffield" },
    { "@type": "City", "name": "Bristol" },
    { "@type": "City", "name": "Edinburgh" },
    { "@type": "City", "name": "Cardiff" },
    { "@type": "City", "name": "Belfast" },
    { "@type": "City", "name": "Nottingham" },
    { "@type": "City", "name": "Southampton" },
    { "@type": "City", "name": "Leicester" },
    { "@type": "City", "name": "Brighton" },
    { "@type": "City", "name": "Aberdeen" },
    { "@type": "City", "name": "Derby" },
    { "@type": "City", "name": "Plymouth" },
    { "@type": "City", "name": "Wolverhampton" },
    { "@type": "City", "name": "Swansea" },
    { "@type": "City", "name": "Reading" },
    { "@type": "City", "name": "Coventry" },
    { "@type": "City", "name": "Cambridge" },
    { "@type": "City", "name": "Oxford" },
    { "@type": "City", "name": "York" },
    { "@type": "City", "name": "Bath" },
    { "@type": "City", "name": "Exeter" },
    { "@type": "City", "name": "Norwich" },
    { "@type": "City", "name": "Dundee" }
  ],
  "sameAs": [
    "https://x.com/posso_uk",
    "https://www.linkedin.com/company/posso-uk"
  ],
  "knowsAbout": [
    "Restaurant ePOS Systems",
    "Self-Order Kiosks",
    "Hospitality Technology",
    "Digital Signage",
    "Ticketing Systems",
    "Online Ordering",
    "Payment Processing"
  ]
};


const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.posso.co.uk/#website",
    "name": "Posso",
    "publisher": { "@id": "https://www.posso.co.uk/#organization" },
    "url": "https://www.posso.co.uk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.posso.co.uk/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  organizationSchema,
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Posso Products & Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Restaurant ePOS Systems",
        "url": "https://www.posso.co.uk/pos"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Self-Order Kiosks",
        "url": "https://www.posso.co.uk/self-order-kiosks"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ticketing & Venue Management",
        "url": "https://www.posso.co.uk/ticketing"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Digital Signage",
        "url": "https://www.posso.co.uk/digital-signage"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Card Payment Machines",
        "url": "https://www.posso.co.uk/credit-card-machines"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Online Ordering & Apps",
        "url": "https://www.posso.co.uk/online-ordering"
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
        "item": "https://www.posso.co.uk"
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Plain <script>, not next/script: next/script injects after hydration, so
          crawlers reading the server HTML never saw this graph (including the
          site's only Organization node). */}
      <script
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
          { question: 'How much does a restaurant POS system cost?', answer: `Our POS systems start from ${posso.posPrice} + VAT for a complete touchscreen till with integrated payments, receipt printing, and stock management. Self-order kiosks start from ${posso.kioskPrice} + VAT. Finance options are available from ${posso.financeWeekly}/week.` },
          { question: 'Do you offer self-order kiosks for restaurants?', answer: 'Yes — our 21" touchscreen self-order kiosks come with integrated Teya card payment, customisable branding, multi-language support (5 languages), and automatic upselling prompts that increase average order value by 20–30%.' },
          { question: 'Can I integrate Just Eat, Uber Eats, and Deliveroo with my POS?', answer: 'Absolutely. Posso integrates with Just Eat, Uber Eats, and Deliveroo so all delivery orders appear directly on your POS and kitchen display. No extra tablets, no re-keying — everything in one place.' },
          { question: 'Does the POS work offline?', answer: 'Yes. Posso One is built offline-first using PowerSync technology. You can take orders, process cash payments, and print receipts even without internet. Everything syncs automatically when connectivity returns.' },
          { question: 'How long does setup take?', answer: `${posso.goLiveStatement} We handle menu import, staff training and ongoing support. ${posso.setupStatement}` },
          { question: 'Do you provide support?', answer: `Yes — we offer UK-based support via phone (${posso.phone}, free call) and remote assistance. Our team is available Monday to Friday, ${posso.supportTime}, with average response times under 15 minutes for critical issues.` },
        ]} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
