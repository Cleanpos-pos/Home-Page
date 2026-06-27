import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Family Entertainment Centre EPOS, Ticketing & Booking | Posso',
  description: 'From arcade games to go-karts, manage your entire facility with Posso’s all-in-one access, ticketing and storage solution for UK family entertainment centres.',
  keywords: [
    'family entertainment centre EPOS',
    'FEC management software',
    'family entertainment centre ticketing software',
    'family entertainment centre booking system',
    'FEC POS UK',
    'arcade and go-kart ticketing system',
    'family entertainment centre POS UK',
    'RFID wristbands family entertainment centre',
    'multi-attraction ticketing software',
    'family entertainment centre cashless payments',
  ],
  alternates: {
    canonical: '/solutions/family-entertainment-centers',
  },
  openGraph: {
    title: 'Family Entertainment Centre EPOS, Ticketing & Booking | Posso',
    description: 'Multi-attraction ticketing, RFID wristbands, smart lockers, café EPOS and cashless payments in one platform built for UK family entertainment centres.',
    url: 'https://posso.co.uk/solutions/family-entertainment-centers',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso family entertainment centre EPOS, ticketing and booking system for UK FECs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Entertainment Centre EPOS, Ticketing & Booking | Posso',
    description: 'Multi-attraction ticketing, RFID wristbands, smart lockers, café EPOS and cashless payments in one platform built for UK family entertainment centres.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "One System for Every Attraction.",
  subheadline: "From arcade games to go-karts, manage ticketing, access, cashless payments and storage across your entire facility with Posso’s all-in-one EPOS platform.",
  benefits: [
    "Centralized Command: Manage ticketing for multiple attractions (bowling, laser tag, arcade) in one dashboard.",
    "Cashless Convenience: Allow guests to use their entry ticket or wristband to rent lockers and pay for games.",
    "Group Management: Easily handle birthday parties and corporate events with bulk ticketing and reserved locker banks."
  ],
  ctaText: "Simplify Your FEC Operations"
};

const intro = {
  title: "One Platform to Run Your Whole FEC",
  paragraphs: [
    "Posso is a complete <strong>family entertainment centre EPOS</strong> and ticketing platform for UK operators. Whether you run bowling, laser tag, arcades, go-karts, soft play or a mix of everything, Posso brings every attraction, till and kiosk under one roof — so you stop juggling separate systems and start running the whole venue from a single dashboard.",
    "Multi-attraction venues are hard to manage when each ride or zone has its own booking and payment process. Posso's <strong>FEC management software</strong> ties it all together: sell timed sessions and entry tickets online, issue an <strong>RFID wristband</strong> that works across every attraction, and let guests pay cashless for games, food and lockers without ever queuing twice. Capacity and bookings update live across your website, kiosks and front desk.",
    "Posso also handles the rest of your operation — <strong>café and F&B EPOS</strong>, party and group bookings, memberships, smart lockers, access control and cashless payments — with real-time reporting on revenue and attendance per attraction. It's a true all-in-one <strong>FEC POS for UK</strong> centres, giving you one source of truth for the entire facility.",
  ],
};

const features = [
  { title: "Multi-Attraction Ticketing", description: "Sell and manage tickets for bowling, laser tag, arcade, go-karts and more from one dashboard, with capacity enforced per attraction." },
  { title: "RFID Wristbands & Cashless", description: "Guests use one wristband across every attraction to gain access, play arcade games and pay cashless at the café and shop." },
  { title: "Online Booking & Timed Sessions", description: "Let families book and pay for sessions online in advance, with timed slots and capacity caps to smooth out peak periods." },
  { title: "Party & Group Bookings", description: "Handle birthday parties, school trips and corporate events with bulk ticketing, deposits, reserved locker banks and add-on packages." },
  { title: "Café & F&B EPOS", description: "Run your café, snack bar or restaurant on the same system, with cashless wristband spend and unified reporting." },
  { title: "Smart Lockers & Access Control", description: "Self-service lockers and gate access controlled by the same wristband, keeping guests moving and belongings secure." },
];

const howItWorks = [
  { title: "Book or Walk In", desc: "Guests book attractions online or buy tickets at a self-service kiosk on arrival." },
  { title: "Get a Wristband", desc: "An RFID wristband is issued, linked to their tickets, sessions and cashless wallet." },
  { title: "Play Everywhere", desc: "One tap grants attraction access, unlocks lockers and pays for games and food." },
  { title: "Track & Report", desc: "Revenue, attendance and capacity update live per attraction across the venue." },
];

const faqs = [
  { question: "Can Posso manage ticketing for multiple attractions at once?", answer: "Yes. Posso is built for multi-attraction venues. You can sell and manage entry tickets and timed sessions for bowling, laser tag, arcades, go-karts, soft play and more from a single dashboard, with separate capacity rules for each attraction." },
  { question: "How do RFID wristbands work across the centre?", answer: "Each guest receives one RFID wristband linked to their tickets and a cashless wallet. The same wristband grants access to attractions, unlocks smart lockers, plays arcade games and pays at the café — so guests never queue twice or carry cash around the venue." },
  { question: "Can guests pay cashless for games and food?", answer: "Yes. Posso supports fully cashless operation. Guests top up a wristband or link a payment method, then tap to pay for arcade games, food and retail. All spend feeds into one reporting dashboard alongside ticket and attraction revenue." },
  { question: "Does Posso handle birthday parties and corporate events?", answer: "Absolutely. You can manage party and group bookings with bulk ticketing, deposits, reserved time slots, reserved locker banks and add-on packages such as food and party rooms — all from the same system as your standard bookings." },
  { question: "Is Posso a good fit for a UK family entertainment centre?", answer: "Yes. Posso is FEC management software built for UK operators, combining multi-attraction ticketing, online booking, RFID wristbands, smart lockers, café EPOS, memberships and cashless payments in one platform, with live reporting across every attraction." },
];

export default function FamilyEntertainmentCentersPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/family-entertainment-centers"
      breadcrumbLabel="Family Entertainment Centres"
      schemaName="Family Entertainment Centre EPOS & Ticketing System"
      schemaDescription="Multi-attraction ticketing, online booking, RFID wristbands, smart lockers, café EPOS and cashless payments in one platform for UK family entertainment centres."
      intro={intro}
      featuresTitle="Everything Your Family Entertainment Centre Needs"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Family Entertainment Centres — Frequently Asked Questions"
    />
  );
}
