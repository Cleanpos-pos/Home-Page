import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ice Rink Booking & Ticketing System UK | Ice Skating Rink Software',
  description: 'Integrated ticketing, skate hire, and secure storage for coats and bags. Posso ice rink management software handles online session booking, RFID wristbands, and café EPOS for UK ice skating rinks.',
  keywords: [
    'ice rink booking system',
    'ice skating ticketing software',
    'ice rink management software',
    'ice skating rink POS',
    'ice rink booking system UK',
    'skate hire management software',
    'ice rink session booking software',
    'learn to skate booking system',
    'ice rink RFID wristbands',
    'ice rink ticketing system UK',
  ],
  alternates: {
    canonical: '/solutions/ice-skating-rinks',
  },
  openGraph: {
    title: 'Ice Rink Booking & Ticketing System UK | Posso',
    description: 'Online session booking, skate hire management, RFID wristbands, secure lockers, and café EPOS — one system to run your UK ice skating rink.',
    url: 'https://www.posso.co.uk/solutions/ice-skating-rinks',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso ice rink booking and ticketing system for UK ice skating rinks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ice Rink Booking & Ticketing System UK | Posso',
    description: 'Online session booking, skate hire management, RFID wristbands, lockers, and café EPOS for UK ice skating rinks.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "The Coolest Way to Run Your Rink.",
  subheadline: "An all-in-one ice rink booking and ticketing system with skate hire, RFID wristbands, secure storage, and café EPOS — built to keep your lobby clear and your skaters happy.",
  benefits: [
    "Skate & Gear Hire: Manage skate and safety gear rentals directly from the ticketing point.",
    "Session Management: Easily control access for public skates, lessons, and private events.",
    "Secure Storage: Keeps the lobby clear of bulky winter coats and bags with convenient smart lockers."
  ],
  ctaText: "Enquire About Rink Solutions"
};

const intro = {
  title: "Ice Rink Management Software Built for UK Operators",
  paragraphs: [
    "Posso is a complete <strong>ice rink booking system</strong> that brings your sessions, skate hire, payments, and food &amp; beverage into one place. Instead of juggling a separate ticketing platform, hire log, and till, your team runs the whole rink from a single dashboard — from the first online booking to the last skater off the ice.",
    "Our <strong>ice skating ticketing software</strong> sells timed session slots online and at the door, so public skates, family sessions, and discos never get oversold. Skaters book and pay in advance, you control capacity by the slot, and staff spend less time on the till and more time on the rink. RFID wristbands tie each guest to their admission, skate hire, locker, and any cashless spend on site.",
    "Whether you run a single seasonal rink or a year-round leisure ice facility, Posso scales with you. Add <strong>learn-to-skate courses</strong>, memberships, group and party bookings, self-service kiosks, and a café or bar EPOS as you grow — all reporting back to one set of analytics so you always know how your <strong>ice skating rink</strong> is performing.",
  ],
};

const features = [
  { title: "Online Session Booking", description: "Sell timed skating slots online with real-time capacity control. Public skates, family sessions, and discos are booked and paid for before guests arrive." },
  { title: "Skate Hire Management", description: "Track your rental skate inventory by size, link each pair to the customer's admission, and process hire right at the ticketing point — no separate log needed." },
  { title: "RFID Wristbands", description: "One wristband for rink access, locker entry, and cashless spend at the café or bar. Faster entry, fewer queues, and a smoother experience on busy sessions." },
  { title: "Secure Smart Lockers", description: "Keep the lobby clear of coats, boots, and bags. Guests open lockers with their wristband and collect belongings on the way out." },
  { title: "Learn-to-Skate & Memberships", description: "Manage lesson courses, recurring memberships, and season passes with automated renewals, attendance tracking, and online sign-up." },
  { title: "Café & Bar EPOS", description: "A fully integrated EPOS for your concessions, café, and bar, with cashless wristband payments and reporting that ties spend back to each session." },
];

const howItWorks = [
  { title: "Book a Session", desc: "Skaters choose a timed slot and pay online or at a self-service kiosk." },
  { title: "Collect Skates", desc: "Hire skates are issued and linked to the booking with sizes tracked." },
  { title: "Tap to Access", desc: "An RFID wristband opens the rink, lockers, and cashless café spend." },
  { title: "Review & Repeat", desc: "Analytics show your busiest sessions so you can plan capacity and offers." },
];

const faqs = [
  { question: "What is an ice rink booking system?", answer: "An ice rink booking system lets customers reserve and pay for timed skating sessions online and at the door, while giving you real-time control over capacity. Posso combines booking with skate hire, RFID wristbands, lockers, and café EPOS so the whole rink runs from one platform." },
  { question: "Can guests book ice skating sessions online?", answer: "Yes. Posso's ice skating ticketing software sells timed session slots on your website and at self-service kiosks. Capacity is controlled per slot, so public skates, family sessions, and discos are never oversold, and guests pay in advance to speed up entry." },
  { question: "How does skate hire management work?", answer: "You manage your full rental skate inventory by size within Posso. When a guest books or arrives, their skate hire is issued and linked to their admission, so you always know which skates are out, who has them, and what's available." },
  { question: "Do RFID wristbands work for lockers and cashless payments?", answer: "Yes. A single RFID wristband handles rink access, opens smart lockers for coats and bags, and works as a cashless payment method at your café and bar. It keeps the lobby clear and reduces queues on busy sessions." },
  { question: "Can I run learn-to-skate courses and memberships?", answer: "Absolutely. Posso manages learn-to-skate course bookings, attendance, recurring memberships, and season passes, with online sign-up and automated renewals so you can build repeat custom around your rink." },
  { question: "Is Posso suitable for UK ice skating rinks of all sizes?", answer: "Yes. Whether you operate a seasonal pop-up rink or a year-round leisure ice facility, Posso scales with you — start with booking and skate hire, then add kiosks, memberships, café EPOS, and party bookings as you grow." },
];

export default function IceSkatingRinksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/ice-skating-rinks"
      breadcrumbLabel="Ice Skating Rinks"
      schemaName="Ice Rink Booking & Ticketing Software"
      schemaDescription="Ice rink management software for UK ice skating rinks: online session booking, skate hire management, RFID wristbands, secure lockers, and café EPOS in one platform."
      intro={intro}
      featuresTitle="Everything You Need to Run an Ice Rink"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Ice Skating Rinks — Frequently Asked Questions"
    />
  );
}
