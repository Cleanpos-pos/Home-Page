import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festival Ticketing & Cashless RFID Payments UK | Posso',
  description: 'Cashless RFID wristbands, fast entry and vendor payments for UK festivals and live events. Posso powers festival ticketing, access control, multi-vendor payments and pop-up locker rentals.',
  keywords: [
    'festival ticketing system',
    'festival cashless payments',
    'event POS system',
    'RFID wristband payments',
    'cashless festival payments UK',
    'festival access control',
    'multi-vendor festival payments',
    'event ticketing system UK',
    'festival vendor payment system',
    'pop-up event locker rentals',
  ],
  alternates: {
    canonical: '/solutions/festivals-events',
  },
  openGraph: {
    title: 'Festival Ticketing & Cashless RFID Payments UK | Posso',
    description: 'Cashless RFID wristbands, fast entry, multi-vendor payments and pop-up locker rentals for UK festivals and live events — all on one platform.',
    url: 'https://www.posso.co.uk/solutions/festivals-events',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso festival ticketing and cashless RFID payment system for UK festivals and live events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Festival Ticketing & Cashless RFID Payments UK | Posso',
    description: 'Cashless RFID wristbands, fast entry, multi-vendor payments and pop-up locker rentals for UK festivals and live events.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Keep the Party Going, Keep Belongings Safe.",
  subheadline: "Cashless RFID wristbands, fast festival entry, multi-vendor payments and pre-bookable pop-up lockers — one platform for ticketing and payments at UK festivals and live events.",
  benefits: [
    "Pre-Bookable Storage: Attendees can pre-book a locker when they buy their concert ticket to store charging packs, merch, and valuables.",
    "Cashless & Keyless: RFID wristbands or app-based access means no lost keys and faster access.",
    "Rapid Deployment: Our pop-up locker banks can be deployed and removed quickly for temporary events."
  ],
  ctaText: "Secure Your Next Event"
};

const intro = {
  title: 'Festival Ticketing & Cashless RFID Payments for UK Events',
  paragraphs: [
    "Posso is a complete <strong>festival ticketing system</strong> and <strong>cashless payments</strong> platform built for UK festivals and live events. Sell tickets online and on-site, then top up <strong>RFID wristbands</strong> for tap-to-pay across the whole site — so attendees move faster, queues shrink and your bars and traders take more.",
    "From the gate inwards, Posso handles <strong>fast entry and access control</strong>: scan tickets or wristbands at high-throughput entrances, validate day or weekend passes, and prevent unauthorised re-entry. Pre-bookable <strong>pop-up locker rentals</strong> sold alongside tickets keep phones, chargers and merch safe without tying up your team.",
    "Behind the scenes, Posso powers <strong>multi-vendor festival payments</strong> with per-trader reporting and fast settlement, self-service kiosks for wristband top-ups, and real-time analytics on spend, footfall and peak times. It's a single <strong>event POS system</strong> that deploys quickly and packs down just as fast for temporary UK events.",
  ],
};

const features = [
  { title: 'Cashless RFID Wristbands', description: 'Load funds onto RFID wristbands for tap-to-pay at every bar and stall, cutting queues and boosting spend per head.' },
  { title: 'Fast Entry & Access Control', description: 'Scan tickets and wristbands at high-throughput gates, validate day or weekend passes and stop unauthorised re-entry.' },
  { title: 'Multi-Vendor Payments', description: 'Run payments across every trader and bar with per-vendor reporting and fast, transparent settlement.' },
  { title: 'Online & On-Site Ticketing', description: 'Sell festival tickets through your branded pages and at the gate, with shared live availability and instant entry.' },
  { title: 'Self-Service Kiosks', description: 'Let attendees top up wristbands and check balances at self-service kiosks to keep cashless flowing all weekend.' },
  { title: 'Pop-Up Locker Rentals', description: 'Sell pre-bookable smart lockers with tickets so guests can store phones, chargers and merch securely on-site.' },
];

const howItWorks = [
  { title: 'Buy & Link', desc: 'Attendees buy tickets online and link funds to an RFID wristband.' },
  { title: 'Fast Entry', desc: 'Scan tickets or wristbands at the gate for quick, validated access.' },
  { title: 'Tap to Pay', desc: 'Cashless taps at every bar, trader and locker across the site.' },
  { title: 'Settle & Report', desc: 'Per-vendor settlement and live analytics on spend and footfall.' },
];

const faqs = [
  { question: 'What is a cashless festival payment system?', answer: 'A cashless festival payment system replaces cash with RFID wristbands or app-based payments. Attendees load funds, then tap to pay at bars, traders and lockers. Posso combines cashless payments with ticketing, access control and per-vendor settlement on one platform.' },
  { question: 'How do RFID wristbands work at a festival?', answer: 'Attendees link funds to an RFID wristband when they buy a ticket or top up at a kiosk. They simply tap the wristband to pay across the site. This speeds up queues, reduces cash handling and increases spend per attendee.' },
  { question: 'Can Posso handle multi-vendor payments for traders and bars?', answer: 'Yes. Posso runs payments across every bar and independent trader with per-vendor reporting and fast settlement, so each vendor can see exactly what they sold while you keep one view of total event revenue.' },
  { question: 'Does Posso provide festival ticketing and access control?', answer: 'It does. You can sell tickets online and on-site, validate day and weekend passes at high-throughput gates, and prevent unauthorised re-entry — all integrated with cashless payments and vendor management.' },
  { question: 'Can Posso be deployed quickly for temporary events?', answer: 'Yes. Posso is designed for rapid deployment at temporary UK events. Cashless terminals, kiosks and pop-up locker banks can be set up and packed down quickly, so you are ready for short-run festivals and one-off live events.' },
  { question: 'Are pop-up lockers available with festival tickets?', answer: 'Yes. Attendees can pre-book pop-up smart lockers alongside their festival tickets to store phones, chargers, merch and valuables. Lockers use keyless RFID or app-based access for fast, secure entry.' },
];

export default function FestivalsEventsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/festivals-events"
      breadcrumbLabel="Festivals & Events"
      schemaName="Festival Ticketing & Cashless RFID Payment System"
      schemaDescription="Posso festival ticketing and cashless RFID payment system for UK festivals and live events: fast entry, access control, multi-vendor payments and pop-up locker rentals."
      intro={intro}
      featuresTitle="Everything You Need to Run a Cashless Festival"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Festivals & Events — Frequently Asked Questions"
    />
  );
}
