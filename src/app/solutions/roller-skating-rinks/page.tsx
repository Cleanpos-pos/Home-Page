import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roller Rink Booking & POS System UK | Roller Skating Rink Software',
  description: 'Manage skate rentals, session times, and personal belongings in one smooth system. Posso roller rink software handles online session booking, RFID wristbands, lockers, and café EPOS for UK roller skating rinks.',
  keywords: [
    'roller rink POS',
    'roller rink booking system',
    'roller skating ticketing software',
    'roller rink management software',
    'roller skating rink POS UK',
    'skate hire management software',
    'roller disco booking system',
    'roller rink session booking',
    'roller rink RFID wristbands',
    'roller skating rink software UK',
  ],
  alternates: {
    canonical: '/solutions/roller-skating-rinks',
  },
  openGraph: {
    title: 'Roller Rink Booking & POS System UK | Posso',
    description: 'Online session booking, skate hire management, RFID wristbands, secure lockers, and café EPOS — one system to run your UK roller skating rink.',
    url: 'https://posso.co.uk/solutions/roller-skating-rinks',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso roller rink booking and POS system for UK roller skating rinks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roller Rink Booking & POS System UK | Posso',
    description: 'Online session booking, skate hire management, RFID wristbands, lockers, and café EPOS for UK roller skating rinks.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Just Roll With It.",
  subheadline: "An all-in-one roller rink booking and POS system that manages skate rentals, session times, RFID wristbands, and personal belongings in one smooth system.",
  benefits: [
    "Skate Hire Management: Track inventory of rental skates linked to the customer's admission.",
    "Session Timers: Tickets valid for specific skating sessions (e.g., 'Friday Night Disco') with auto-expiration.",
    "Shoe Exchange: Secure lockers for street shoes while guests are on the rink."
  ],
  ctaText: "Get Your Rink Moving"
};

const intro = {
  title: "Roller Rink Management Software Built for UK Operators",
  paragraphs: [
    "Posso is a complete <strong>roller rink booking system</strong> that brings sessions, skate hire, payments, and food &amp; beverage together in one platform. Instead of running a separate ticketing tool, a hire log, and a till, your team manages the whole rink from a single dashboard — from the first online booking to the last skater off the floor.",
    "Our <strong>roller skating ticketing software</strong> sells timed session slots online and at the door, so popular sessions like the Friday Night Disco never get oversold. Tickets are valid for specific sessions with automatic expiration, capacity is controlled by the slot, and guests book and pay in advance. RFID wristbands tie each skater to their admission, skate hire, locker, and any cashless spend on site.",
    "From a single venue to a multi-session leisure operation, Posso scales as you grow. Add <strong>roller disco and party bookings</strong>, memberships, learn-to-skate style courses, self-service kiosks, and a café or bar EPOS — all feeding one set of analytics so you always know how your <strong>roller skating rink</strong> is performing.",
  ],
};

const features = [
  { title: "Online Session Booking", description: "Sell timed session slots online with real-time capacity control. Roller discos, family skates, and beginner sessions are booked and paid for before guests arrive." },
  { title: "Skate Hire Management", description: "Track your rental skate inventory by size, link each pair to the customer's admission, and process hire right at the ticketing point — no separate log needed." },
  { title: "Session Timers & Auto-Expiry", description: "Tickets are valid for specific sessions, such as the Friday Night Disco, with automatic expiration so access control stays accurate all night." },
  { title: "RFID Wristbands", description: "One wristband for rink access, locker entry, and cashless spend at the café or bar. Faster entry, fewer queues, and a smoother experience on busy sessions." },
  { title: "Shoe-Exchange Lockers", description: "Secure smart lockers for street shoes and bags while guests are on the floor. Skaters open lockers with their wristband and collect on the way out." },
  { title: "Café & Bar EPOS", description: "A fully integrated EPOS for your concessions, café, and bar, with cashless wristband payments and reporting that ties spend back to each session." },
];

const howItWorks = [
  { title: "Book a Session", desc: "Skaters choose a timed session and pay online or at a self-service kiosk." },
  { title: "Collect Skates", desc: "Hire skates are issued and linked to the booking with sizes tracked." },
  { title: "Tap to Access", desc: "An RFID wristband opens the rink, shoe lockers, and cashless café spend." },
  { title: "Review & Repeat", desc: "Analytics show your busiest sessions so you can plan capacity and offers." },
];

const faqs = [
  { question: "What is a roller rink booking system?", answer: "A roller rink booking system lets customers reserve and pay for timed skating sessions online and at the door, while you keep real-time control of capacity. Posso combines booking with skate hire, RFID wristbands, lockers, and café EPOS so the whole rink runs from one platform." },
  { question: "Can guests book roller skating sessions online?", answer: "Yes. Posso's roller skating ticketing software sells timed session slots on your website and at self-service kiosks. Capacity is controlled per slot, so roller discos and family skates are never oversold, and guests pay in advance to speed up entry." },
  { question: "How do session timers and auto-expiry work?", answer: "Each ticket is valid for a specific session — for example the Friday Night Disco — and automatically expires when that session ends. This keeps access control accurate and makes it easy to run back-to-back sessions throughout the day." },
  { question: "How does skate hire management work?", answer: "You manage your full rental skate inventory by size within Posso. When a guest books or arrives, their skate hire is issued and linked to their admission, so you always know which skates are out, who has them, and what's available." },
  { question: "Do RFID wristbands work for lockers and cashless payments?", answer: "Yes. A single RFID wristband handles rink access, opens shoe-exchange lockers for street shoes and bags, and works as a cashless payment method at your café and bar — keeping queues short on busy nights." },
  { question: "Is Posso suitable for roller discos and party bookings?", answer: "Absolutely. Posso handles roller disco sessions, group bookings, and private parties alongside memberships and courses, with online sign-up and automated management so you can build repeat custom around your rink." },
];

export default function RollerSkatingRinksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/roller-skating-rinks"
      breadcrumbLabel="Roller Skating Rinks"
      schemaName="Roller Rink Booking & POS Software"
      schemaDescription="Roller rink management software for UK roller skating rinks: online session booking, skate hire management, session timers, RFID wristbands, lockers, and café EPOS in one platform."
      intro={intro}
      featuresTitle="Everything You Need to Run a Roller Rink"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Roller Skating Rinks — Frequently Asked Questions"
    />
  );
}
