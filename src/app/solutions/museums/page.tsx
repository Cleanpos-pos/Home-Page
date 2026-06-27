import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Museum Ticketing System & Admission Software UK | Posso',
  description: 'Elegant ticketing and cloakroom management that respects the art of hospitality. Posso powers museum admissions, timed entry, memberships, donations and gift shop EPOS for UK museums and galleries.',
  keywords: [
    'museum ticketing system',
    'museum admission software',
    'museum ticketing system UK',
    'museum EPOS system',
    'museum membership software',
    'timed entry ticketing',
    'museum donation software',
    'gallery ticketing system',
    'museum gift shop EPOS',
    'museum point of sale UK',
  ],
  alternates: {
    canonical: '/solutions/museums',
  },
  openGraph: {
    title: 'Museum Ticketing System & Admission Software UK | Posso',
    description: 'Online and on-site museum ticketing, timed entry, memberships, donations and gift shop EPOS — one platform built for UK museums and galleries.',
    url: 'https://posso.co.uk/solutions/museums',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso museum ticketing system and admission software for UK museums and galleries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Museum Ticketing System & Admission Software UK | Posso',
    description: 'Online and on-site museum ticketing, timed entry, memberships, donations and gift shop EPOS — built for UK museums and galleries.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Curating a Better Visitor Experience.",
  subheadline: "A complete museum ticketing system for online and on-site admissions, timed entry, memberships, donations and gift shop EPOS — all from one platform built for UK museums and galleries.",
  benefits: [
    "Timed Entry: Manage crowd flow and capacity limits effortlessly with slotted ticketing.",
    "Smart Cloakroom: replace traditional coat check with automated lockers for backpacks and coats, freeing up staff.",
    "Member Management: seamless recognition of donors and members at the point of entry."
  ],
  ctaText: "Modernize Your Museum Entry"
};

const intro = {
  title: 'Museum Ticketing System & Admission Software for UK Museums',
  paragraphs: [
    "Posso is a complete <strong>museum ticketing system</strong> built for UK museums, galleries, historic houses and heritage attractions. Sell admissions <strong>online and on-site</strong> from a single platform, set <strong>timed-entry slots</strong> to manage capacity, and give visitors a fast, frictionless arrival — whether they pre-book on your website or buy at the door.",
    "Our <strong>museum admission software</strong> goes far beyond the till. Manage <strong>memberships and donations</strong>, recognise members instantly at the gate, capture Gift Aid, and run your <strong>gift shop and café EPOS</strong> on the same system so every transaction flows into one set of reports.",
    "From self-service kiosks and group or school bookings to season passes, access control and real-time analytics, Posso gives UK museum operators everything needed to grow visitor numbers, increase secondary spend and understand exactly how the day is performing — all from one connected <strong>museum point of sale</strong>.",
  ],
};

const features = [
  { title: 'Online & On-Site Ticketing', description: 'Sell museum admissions through your own branded website and at the door from the same system, with live availability and instant confirmation.' },
  { title: 'Timed Entry & Capacity', description: 'Create timed-entry slots and capacity caps to manage crowd flow, protect exhibitions and deliver a calmer visitor experience.' },
  { title: 'Memberships & Donations', description: 'Sell and renew memberships, recognise members at entry, and collect donations with Gift Aid capture built in.' },
  { title: 'Gift Shop & Café EPOS', description: 'Run your gift shop and café on the same platform so admissions and retail sales report together in one place.' },
  { title: 'Self-Service Kiosks', description: 'Reduce queues at the entrance with self-service kiosks for ticket collection, walk-up purchases and membership sign-ups.' },
  { title: 'Group & School Bookings', description: 'Take group, tour and school bookings with deposits, invoicing and dedicated arrival slots to keep entry smooth.' },
];

const howItWorks = [
  { title: 'Visitors Book', desc: 'Guests buy admissions online or at the door and choose a timed-entry slot.' },
  { title: 'Fast Arrival', desc: 'Scan tickets, RFID passes or member cards at the gate for quick, validated entry.' },
  { title: 'Spend On-Site', desc: 'Gift shop, café and donations all run through the same connected EPOS.' },
  { title: 'See Insights', desc: 'Live analytics show admissions, membership and secondary spend in one dashboard.' },
];

const faqs = [
  { question: 'What is a museum ticketing system?', answer: 'A museum ticketing system lets you sell and manage admissions both online and on-site, control capacity with timed-entry slots, and validate tickets at the gate. Posso combines ticketing with memberships, donations and gift shop EPOS so everything runs from one platform.' },
  { question: 'Can Posso handle timed entry and capacity limits?', answer: 'Yes. You can create timed-entry slots with capacity caps for the whole museum or for individual exhibitions, helping you manage crowd flow, protect collections and smooth out busy periods across the day.' },
  { question: 'Does the system support memberships and donations?', answer: 'Absolutely. Posso lets you sell and renew memberships, recognise members instantly at entry, and collect donations with Gift Aid capture — all linked to the same visitor and sales records as your admissions.' },
  { question: 'Can I sell museum tickets online as well as at the door?', answer: 'Yes. Posso provides online ticketing through your own branded pages alongside on-site sales at the till or self-service kiosks, with shared live availability so you never oversell a slot.' },
  { question: 'Does Posso include gift shop and café EPOS?', answer: 'It does. Your gift shop and café run on the same Posso EPOS as admissions, so retail, food and beverage and ticketing all report together, giving you a complete picture of revenue per visitor.' },
  { question: 'Is Posso suitable for UK museums and galleries of all sizes?', answer: 'Yes. Posso scales from independent local museums to large galleries and multi-site heritage organisations, with group and school bookings, season passes, access control and analytics available across every venue.' },
];

export default function MuseumsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/museums"
      breadcrumbLabel="Museums"
      schemaName="Museum Ticketing System & Admission Software"
      schemaDescription="Posso museum ticketing system for UK museums and galleries: online and on-site admissions, timed entry, memberships, donations and gift shop EPOS from one platform."
      intro={intro}
      featuresTitle="Everything You Need to Run Museum Admissions"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Museums — Frequently Asked Questions"
    />
  );
}
