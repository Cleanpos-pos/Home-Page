import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Park POS & RFID Wristband Ticketing UK | Posso',
  description: 'The waterproof solution for ticketing and storage. No keys, no coins, just seamless RFID convenience.',
  keywords: [
    'water park POS system',
    'water park ticketing software',
    'water park epos UK',
    'RFID wristband water park',
    'cashless wristband system',
    'water park locker system',
    'waterproof ticketing system',
    'aqua park POS UK',
    'water park access control',
    'water park management software',
  ],
  alternates: {
    canonical: '/solutions/water-parks',
  },
  openGraph: {
    title: 'Water Park POS & RFID Wristband Ticketing UK | Posso',
    description: 'Waterproof RFID wristbands for cashless spend, keyless lockers, online ticketing and capacity management for UK water parks.',
    url: 'https://www.posso.co.uk/solutions/water-parks',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso water park POS and RFID wristband ticketing software for UK water parks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Park POS & RFID Wristband Ticketing UK | Posso',
    description: 'Waterproof RFID wristbands for cashless spend, keyless lockers, online ticketing and capacity management for UK water parks.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Make a Splash, Keep Valuables Dry.",
  subheadline: "The waterproof solution for ticketing and storage. No keys, no coins, just seamless RFID convenience.",
  benefits: [
    "Waterproof Credentials: Guests use waterproof RFID wristbands for park entry, cashless food purchases, and locker access.",
    "Keyless Lockers: Eliminate the hassle of lost physical keys in pools. Guests unlock storage with a tap of their wrist.",
    "Dynamic Pricing: Adjust ticket and locker rental prices based on weather or peak demand."
  ],
  ctaText: "Upgrade Your Water Park"
};

export default function WaterParksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/water-parks"
      breadcrumbLabel="Water Parks"
      schemaName="Water Park POS & RFID Wristband Ticketing Software"
      schemaDescription="Posso provides waterproof RFID wristbands, cashless spend, keyless lockers, online ticketing and capacity management for UK water parks and aqua parks."
      intro={{
        title: "Water Park POS & Cashless Wristband System for UK Operators",
        paragraphs: [
          "Posso is a purpose-built <strong>water park POS system</strong> and <strong>water park ticketing software</strong> platform designed for the realities of a wet, no-pockets environment. With waterproof <strong>RFID wristbands</strong>, guests carry nothing but their wrist — yet still enjoy fast entry, cashless spend and keyless lockers across the whole site.",
          "Sell tickets online with timed entry to smooth out arrival peaks, then let guests tap a single wristband for park entry, food and drink, retail and locker access. Because there are no coins, keys or cards to lose by the pool, queues move faster, spend goes up and your team spends less time dealing with lost property and refunds.",
          "Built for UK water parks and aqua parks, Posso unifies <strong>water park EPOS</strong>, access control, capacity management, season passes and reporting in one connected system. Dynamic pricing lets you adjust ticket and locker rates by weather or demand, while live dashboards show exactly how every wristband, outlet and locker bank is performing in real time.",
        ],
      }}
      featuresTitle="Everything Your Water Park Needs in One Platform"
      features={[
        { title: "Waterproof RFID Wristbands", description: "One waterproof wristband for entry, cashless spend, ride access and lockers — no pockets, no cash, no cards to lose in the water." },
        { title: "Keyless Smart Lockers", description: "Guests unlock secure storage with a tap of their wrist, eliminating lost keys and coin slots while keeping valuables dry." },
        { title: "Cashless On-Site Spend", description: "Top-up balances or link cards to wristbands so guests pay for food, drink and retail with a single tap anywhere in the park." },
        { title: "Online Ticketing & Timed Entry", description: "Sell dated tickets online with timed-entry slots to manage capacity, reduce gate queues and capture guest data in advance." },
        { title: "Dynamic Pricing", description: "Automatically adjust ticket and locker rental prices based on weather, day of week or peak demand to maximise revenue." },
        { title: "Capacity & Access Control", description: "Monitor live attendance against safe capacity limits and control access to slides, zones and premium areas from one system." },
      ]}
      howItWorks={[
        { title: "Book Online", desc: "Guests buy tickets and timed-entry slots on your website before they arrive." },
        { title: "Collect Wristband", desc: "Each guest gets a waterproof RFID wristband linked to their ticket and balance." },
        { title: "Tap Everywhere", desc: "Entry, food, retail and keyless lockers all work with a single tap of the wrist." },
        { title: "Track & Report", desc: "Live dashboards show attendance, cashless spend and locker usage in real time." },
      ]}
      faqTitle="Water Parks — Frequently Asked Questions"
      faqs={[
        { question: "What is a water park POS system?", answer: "A water park POS system handles ticketing, cashless payments, locker access and reporting across your site. Posso combines waterproof RFID wristbands, online ticketing, keyless lockers and multi-outlet EPOS in one platform built for wet, no-pockets environments." },
        { question: "How do waterproof RFID wristbands work?", answer: "Each guest wears a waterproof RFID wristband linked to their ticket and a cashless balance. They tap to enter the park, pay for food and retail, and unlock smart lockers — all without carrying cash, coins or keys that could be lost in the water." },
        { question: "Do guests still need coins or keys for lockers?", answer: "No. Posso lockers are keyless and coinless. Guests open and close their locker with a tap of their RFID wristband, which removes lost-key hassle and the cost of coin mechanisms while keeping dry clothes and valuables secure." },
        { question: "Can I change ticket and locker prices by weather or demand?", answer: "Yes. Posso supports dynamic pricing, so you can automatically adjust ticket and locker rental prices based on the weather forecast, day of week or peak demand to protect margins and maximise revenue on busy days." },
        { question: "Does Posso support online ticketing and capacity limits?", answer: "Absolutely. You can sell dated, timed-entry tickets online to spread out arrivals, set safe capacity limits per slot, and let guests scan straight through at the gate, reducing queues and improving the guest experience." },
        { question: "Is Posso suitable for UK water parks and aqua parks?", answer: "Posso is built for UK operators and scales from single-pool sites to large aqua parks with multiple outlets and locker banks. The platform grows with you and unifies ticketing, EPOS, lockers and access control under one system." },
      ]}
    />
  );
}
