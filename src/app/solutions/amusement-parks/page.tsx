import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amusement Park POS & Ticketing Software UK | Posso',
  description: 'Enterprise-grade ticketing and smart locker networks built to handle thousands of guests a day without a hitch.',
  keywords: [
    'amusement park POS system',
    'amusement park ticketing software',
    'theme park ticketing software',
    'amusement park epos UK',
    'theme park POS system UK',
    'attraction ticketing system',
    'RFID wristband park system',
    'theme park access control software',
    'season pass management software',
    'amusement park management software',
  ],
  alternates: {
    canonical: '/solutions/amusement-parks',
  },
  openGraph: {
    title: 'Amusement Park POS & Ticketing Software UK | Posso',
    description: 'Online ticketing, RFID wristbands, cashless spend, self-service kiosks and capacity management for UK amusement and theme parks.',
    url: 'https://www.posso.co.uk/solutions/amusement-parks',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso amusement park POS and ticketing software for UK theme parks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amusement Park POS & Ticketing Software UK | Posso',
    description: 'Online ticketing, RFID wristbands, cashless spend, self-service kiosks and capacity management for UK amusement and theme parks.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Powering High-Volume Thrills.",
  subheadline: "Enterprise-grade ticketing and smart locker networks built to handle thousands of guests a day without a hitch.",
  benefits: [
    "Scalable Entry: High-speed scanning and turnstile integration to eliminate bottlenecks at the gates.",
    "Ride-Side Storage: Deploy short-term smart lockers at ride entrances that sync with the guest’s park ticket.",
    "Season Pass Integration: Recognize members instantly, offering them perks like discounted locker rentals or express entry."
  ],
  ctaText: "See Our Enterprise Solutions"
};

export default function AmusementParksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/amusement-parks"
      breadcrumbLabel="Amusement Parks"
      schemaName="Amusement Park POS & Ticketing Software"
      schemaDescription="Posso provides online ticketing, RFID wristbands, cashless spend, self-service kiosks, capacity management and access control for UK amusement and theme parks."
      intro={{
        title: "Amusement Park POS & Ticketing Software Built for Busy Days",
        paragraphs: [
          "Posso is an all-in-one <strong>amusement park POS system</strong> and <strong>theme park ticketing software</strong> platform built for UK operators who need to move thousands of guests through the gates without queues, errors or lost revenue. From online ticketing and timed entry to RFID wristbands and multi-outlet food &amp; beverage EPOS, every part of your park runs on one connected system.",
          "Guests can book online in advance, scan straight through high-speed turnstiles, and tap a single <strong>RFID wristband</strong> for cashless spend, locker access and ride entry. Behind the scenes, your team gets live capacity and queue management, real-time sales reporting and a complete view of every transaction across the park — whether it happens at the gate, a kiosk or a kiosk-free mobile till.",
          "As a UK-focused provider, Posso brings together season passes, memberships, group and school bookings, gift cards and access control under one <strong>amusement park EPOS</strong> roof. The result is faster entry, higher per-guest spend and far less admin for your operations team — all designed to scale with your busiest peak-season days.",
        ],
      }}
      featuresTitle="Everything Your Amusement Park Needs in One Platform"
      features={[
        { title: "Online Ticketing & Timed Entry", description: "Sell dated and timed-entry tickets online, smooth out arrival peaks and capture guest data before they even arrive at the park." },
        { title: "RFID Wristbands", description: "One waterproof wristband for park entry, cashless spend, ride access and lockers — fewer cards, faster queues and higher on-site spend." },
        { title: "Capacity & Queue Management", description: "Monitor live attendance against capacity limits, manage ride queues and control entry flow to keep every zone safe and comfortable." },
        { title: "Self-Service Kiosks", description: "Let guests buy tickets, top up wristbands and order food at self-service kiosks, cutting counter queues and freeing up your staff." },
        { title: "Multi-Outlet F&B EPOS", description: "Run every food, drink and retail outlet on one EPOS with shared menus, stock control and reporting across the whole park." },
        { title: "Season Passes & Memberships", description: "Sell and manage season passes and memberships with instant recognition at the gate, renewals, perks and member-only pricing." },
      ]}
      howItWorks={[
        { title: "Book Online", desc: "Guests buy tickets, season passes or group bookings on your website before they visit." },
        { title: "Scan & Enter", desc: "High-speed scanning and turnstile integration get guests through the gates fast." },
        { title: "Tap to Spend", desc: "RFID wristbands handle cashless food, retail, lockers and ride access on-site." },
        { title: "Track & Report", desc: "Live dashboards show attendance, revenue and per-guest spend in real time." },
      ]}
      faqTitle="Amusement Parks — Frequently Asked Questions"
      faqs={[
        { question: "What is an amusement park POS system?", answer: "An amusement park POS system is the software and hardware that handles ticket sales, food and retail transactions, access control and reporting across your park. Posso combines online ticketing, RFID wristbands, self-service kiosks and multi-outlet EPOS in one connected platform so every sale and entry is managed in one place." },
        { question: "Can Posso handle online ticketing and timed entry?", answer: "Yes. Posso lets you sell dated and timed-entry tickets directly from your website, spreading out arrivals across the day and capturing guest data in advance. You can set capacity limits per slot and let guests scan straight through at the gate." },
        { question: "How do RFID wristbands work in a theme park?", answer: "Each guest wears a waterproof RFID wristband linked to their ticket and a cashless balance. They tap to enter the park, pay for food and retail, access lockers and use ride entry — all without carrying cash or cards, which speeds up queues and increases on-site spend." },
        { question: "Does Posso support season passes and memberships?", answer: "Absolutely. You can sell and manage season passes and memberships, recognise members instantly at the gate, and offer perks such as express entry, discounted locker rentals and member-only pricing. Renewals and upgrades are handled within the same system." },
        { question: "Can I manage food, retail and tickets on one system?", answer: "Yes. Posso runs your ticketing, multi-outlet food and beverage, retail and access control on a single platform, so you get unified reporting and stock control across the entire park rather than juggling separate systems." },
        { question: "Is Posso suitable for UK amusement parks of all sizes?", answer: "Posso is built for UK operators and scales from single attractions to large multi-zone theme parks handling thousands of guests a day. The platform grows with you, adding kiosks, outlets and access points as your park expands." },
      ]}
    />
  );
}
