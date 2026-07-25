import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trampoline Park Booking, Ticketing & Waiver System | Posso',
  description: 'Integrated ticketing, digital waivers, and smart locker solutions designed to keep your jumpers on the trampolines, not at the front desk.',
  keywords: [
    'trampoline park booking system',
    'trampoline park ticketing software',
    'trampoline park EPOS',
    'trampoline park POS UK',
    'trampoline park waiver system',
    'trampoline park online booking',
    'trampoline park management software',
    'RFID wristbands trampoline park',
    'trampoline park self-service kiosk',
    'trampoline park capacity management',
  ],
  alternates: {
    canonical: '/solutions/trampoline-parks',
  },
  openGraph: {
    title: 'Trampoline Park Booking, Ticketing & Waiver System | Posso',
    description: 'Online booking, digital waivers, RFID wristbands, smart lockers and timed-session control in one EPOS platform built for UK trampoline parks.',
    url: 'https://www.posso.co.uk/solutions/trampoline-parks',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso trampoline park ticketing, waiver and POS system for UK trampoline parks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trampoline Park Booking, Ticketing & Waiver System | Posso',
    description: 'Online booking, digital waivers, RFID wristbands, smart lockers and timed-session control in one EPOS platform built for UK trampoline parks.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Bounce Past the Queue.",
  subheadline: "Integrated online booking, digital waivers, RFID wristbands and smart lockers designed to keep your jumpers on the trampolines, not stuck at the front desk.",
  benefits: [
    "Digital Waivers & Ticketing: Seamless online booking linked directly to digital waivers. Check-in takes seconds.",
    "Wristband Integration: Use a single RFID wristband for entry access and to unlock secure lockers for shoes and phones.",
    "Timed Sessions: Automatically manage jump-time limits and locker rental duration in sync."
  ],
  ctaText: "Book a Demo for Your Park"
};

const intro = {
  title: "Run a Faster, Safer Trampoline Park",
  paragraphs: [
    "Posso is a complete <strong>trampoline park booking system</strong> and EPOS platform built for UK operators. From the moment a customer lands on your website to the second they tap out of a jump session, every step is connected — <strong>online booking, digital waivers, timed sessions and RFID wristbands</strong> all talk to one another, so your team spends less time at the desk and more time keeping the park running safely.",
    "Generic tills can't cope with the way a trampoline park actually works. You need timed slots, capacity caps per session, waivers signed before entry, and a way to stop overselling a peak Saturday. Posso's <strong>trampoline park ticketing software</strong> handles all of it in real time, syncing your website, self-service kiosks and front desk so you never double-book a slot or let an unsigned jumper onto the court.",
    "Beyond the trampolines, Posso runs your whole site — <strong>café and F&B EPOS</strong>, party and group bookings, memberships, smart lockers and cashless payments — from a single dashboard. It's a genuine all-in-one <strong>trampoline park POS</strong> for the UK, giving you live reporting on revenue, attendance and capacity wherever you are.",
  ],
};

const features = [
  { title: "Online Booking & Timed Sessions", description: "Let customers book and pay for jump slots online. Capacity per session is enforced automatically, so peak times never get oversold." },
  { title: "Digital Waivers", description: "Waivers are signed online at booking or on a kiosk before entry, linked to each jumper's ticket and stored securely for instant retrieval." },
  { title: "RFID Wristbands", description: "One wristband handles entry access, timed-session tracking, locker unlocking and cashless spend at the café — no paper tickets to lose." },
  { title: "Smart Lockers", description: "Self-service lockers for shoes, phones and bags, unlocked by the same wristband and synced to each jumper's session length." },
  { title: "Self-Service Kiosks", description: "Walk-in customers buy tickets, sign waivers and grab a wristband at a kiosk, cutting front-desk queues on your busiest days." },
  { title: "Party & Group Bookings", description: "Manage birthday parties, school trips and corporate groups with bulk ticketing, deposits, reserved slots and add-on packages." },
];

const howItWorks = [
  { title: "Book Online", desc: "Customers choose a timed session, pay and sign their waiver before they arrive." },
  { title: "Tap In", desc: "A quick scan at the desk or kiosk issues an RFID wristband linked to their session." },
  { title: "Jump & Spend", desc: "The wristband unlocks lockers and pays cashless at the café throughout the visit." },
  { title: "Track & Report", desc: "Capacity, attendance and revenue update live across every device and your dashboard." },
];

const faqs = [
  { question: "Can customers sign waivers online before they arrive?", answer: "Yes. Posso links a digital waiver to every online booking, so jumpers and parents sign in advance from any device. Walk-ins can sign on a self-service kiosk in seconds. Every signed waiver is stored securely and tied to the customer's ticket for instant retrieval." },
  { question: "How does Posso manage timed jump sessions and capacity?", answer: "You set the capacity and length of each session, and Posso enforces it across your website, kiosks and front desk in real time. Once a slot is full it stops selling automatically, so you never oversell a peak period or let too many jumpers onto the court at once." },
  { question: "Do the RFID wristbands work with lockers and the café?", answer: "Yes. A single RFID wristband handles entry, timed-session tracking, smart locker access and cashless spend at your café or F&B counter — so customers don't carry cash, cards or paper tickets while they jump." },
  { question: "Can I take birthday party and group bookings?", answer: "Absolutely. Posso handles party and group bookings with bulk ticketing, deposits, reserved time slots and add-on packages such as food, socks and party rooms — all managed from the same dashboard as your standard bookings." },
  { question: "Is Posso suitable for a UK trampoline park EPOS setup?", answer: "Yes. Posso is built for UK operators, combining trampoline park ticketing, digital waivers, RFID wristbands, smart lockers, memberships, cashless payments and café EPOS in one system, with live reporting on revenue, attendance and capacity." },
];

export default function TrampolineParksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/trampoline-parks"
      breadcrumbLabel="Trampoline Parks"
      schemaName="Trampoline Park Ticketing & POS System"
      schemaDescription="Online booking, digital waivers, RFID wristbands, smart lockers and timed-session management in one EPOS platform for UK trampoline parks."
      intro={intro}
      featuresTitle="Everything Your Trampoline Park Needs"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Trampoline Parks — Frequently Asked Questions"
    />
  );
}
