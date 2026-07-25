import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zoo Ticketing System & Aquarium Admission Software UK | Posso',
  description: 'Advanced ticketing and secure entry systems for zoos and aquariums. From daily passes to annual memberships, Posso handles timed entry, access control and multi-outlet F&B EPOS for UK attractions.',
  keywords: [
    'zoo ticketing system',
    'zoo ticketing system UK',
    'aquarium ticketing system',
    'aquarium admission software',
    'zoo admission software',
    'annual pass management',
    'timed entry ticketing',
    'attraction ticketing system UK',
    'zoo EPOS system',
    'zoo membership software',
  ],
  alternates: {
    canonical: '/solutions/zoos-aquariums',
  },
  openGraph: {
    title: 'Zoo Ticketing System & Aquarium Admission Software UK | Posso',
    description: 'Online and on-site ticketing, timed entry, annual passes, access control and multi-outlet F&B EPOS for UK zoos and aquariums — all on one platform.',
    url: 'https://www.posso.co.uk/solutions/zoos-aquariums',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso zoo and aquarium ticketing system and admission software for UK attractions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoo Ticketing System & Aquarium Admission Software UK | Posso',
    description: 'Online and on-site ticketing, timed entry, annual passes, access control and multi-outlet F&B EPOS for UK zoos and aquariums.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Secure Entry Systems & Access Control for Zoos.",
  subheadline: "A complete zoo and aquarium ticketing system for online and on-site admissions, timed entry, annual passes and multi-outlet food & beverage — so your guests can focus on the animals.",
  benefits: [
    "Family & Group Passes: Flexible ticketing options for families, schools, and large tour groups.",
    "Secure Entry Systems: High-throughput gates and turnstiles that validate tickets and prevent unauthorized re-entry.",
    "Stroller & Gear Storage: Large-format locker solutions for families needing to store strollers, bags, and supplies.",
    "Membership Management: Secure digital RFID bands and app-based entry for season pass holders."
  ],
  ctaText: "Learn More"
};

const intro = {
  title: 'Zoo & Aquarium Ticketing System for UK Attractions',
  paragraphs: [
    "Posso is a complete <strong>zoo ticketing system</strong> and <strong>aquarium admission software</strong> built for UK attractions. Sell tickets <strong>online and on-site</strong>, set <strong>timed-entry slots</strong> to manage capacity on busy days, and move large family crowds through high-throughput gates with fast, validated entry.",
    "Manage <strong>annual passes and memberships</strong> with secure RFID bands and app-based entry, recognise season-pass holders instantly, and prevent unauthorised re-entry with built-in <strong>access control</strong>. Flexible family, group and school bookings make it easy to fill quieter periods and handle big tour groups without queues.",
    "Because zoos and aquariums run cafés, kiosks and gift shops across the site, Posso unifies <strong>multi-outlet food & beverage and retail EPOS</strong> with ticketing in one platform. Self-service kiosks, stroller and gear lockers, and real-time analytics give UK operators the tools to lift secondary spend and understand every visit — from one connected <strong>attraction ticketing system</strong>.",
  ],
};

const features = [
  { title: 'Online & On-Site Ticketing', description: 'Sell daily admissions through your branded website and at the gate from one system, with shared live availability.' },
  { title: 'Timed Entry & Capacity', description: 'Use timed-entry slots and capacity caps to spread arrivals across the day and keep gates flowing smoothly.' },
  { title: 'Annual Passes & Memberships', description: 'Sell, renew and validate annual passes with RFID bands and app-based entry, with instant recognition at the gate.' },
  { title: 'Multi-Outlet F&B EPOS', description: 'Run every café, kiosk and gift shop on the same EPOS so site-wide retail and food sales report together.' },
  { title: 'Secure Access Control', description: 'High-throughput turnstiles and gates validate tickets and passes and prevent unauthorised re-entry.' },
  { title: 'Group & School Bookings', description: 'Take family, group, tour and school bookings with deposits, invoicing and dedicated arrival slots.' },
];

const howItWorks = [
  { title: 'Guests Book', desc: 'Visitors buy tickets or annual passes online or at the gate and pick an entry slot.' },
  { title: 'Fast Entry', desc: 'Scan tickets, RFID bands or passes at turnstiles for quick, secure access.' },
  { title: 'Spend Site-Wide', desc: 'Cafés, kiosks and gift shops all run on the same connected EPOS.' },
  { title: 'See Insights', desc: 'Live analytics reveal admissions, pass renewals and secondary spend at a glance.' },
];

const faqs = [
  { question: 'What is a zoo ticketing system?', answer: 'A zoo ticketing system lets you sell and manage admissions online and on-site, control capacity with timed-entry slots, and validate tickets and passes at the gate. Posso combines this with annual passes, access control and multi-outlet F&B EPOS in one platform.' },
  { question: 'Can Posso manage annual passes and memberships?', answer: 'Yes. Posso lets you sell, renew and validate annual passes and memberships using secure RFID bands or app-based entry, with instant recognition of pass holders at high-throughput gates.' },
  { question: 'Does the system support timed entry for busy days?', answer: 'It does. You can create timed-entry slots with capacity limits so arrivals are spread across the day, keeping queues short and improving the experience on peak dates and school holidays.' },
  { question: 'Can I run cafés and gift shops on the same system?', answer: 'Yes. Posso unifies ticketing with multi-outlet food & beverage and retail EPOS, so every café, kiosk and gift shop across your site reports together alongside admissions for a complete view of revenue.' },
  { question: 'How does Posso handle secure entry and access control?', answer: 'Posso works with high-throughput turnstiles and gates that validate tickets, RFID bands and passes, and prevents unauthorised re-entry — giving you secure, reliable access control even at peak times.' },
  { question: 'Is Posso suitable for UK zoos and aquariums of all sizes?', answer: 'Yes. From independent aquariums to large multi-zone zoos and wildlife parks, Posso scales with group and school bookings, season passes, access control and analytics across every outlet and gate.' },
];

export default function ZoosAquariumsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/zoos-aquariums"
      breadcrumbLabel="Zoos & Aquariums"
      schemaName="Zoo & Aquarium Ticketing System & Admission Software"
      schemaDescription="Posso zoo and aquarium ticketing system for UK attractions: online and on-site admissions, timed entry, annual passes, access control and multi-outlet F&B EPOS."
      intro={intro}
      featuresTitle="Everything You Need to Run Zoo & Aquarium Admissions"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Zoos & Aquariums — Frequently Asked Questions"
    />
  );
}
