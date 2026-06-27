import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wake Park Booking & POS Software UK | Posso',
  description: 'Specialized management for rental gear, liability waivers, and personal storage in wet environments.',
  keywords: [
    'wake park booking software',
    'wake park POS system',
    'cable park booking software',
    'aqua park POS UK',
    'session booking software',
    'equipment hire management software',
    'digital waiver software UK',
    'wake park ticketing system',
    'watersports booking system',
    'wake park management software',
  ],
  alternates: {
    canonical: '/solutions/wake-parks',
  },
  openGraph: {
    title: 'Wake Park Booking & POS Software UK | Posso',
    description: 'Session and slot booking, equipment hire tracking, digital waivers, RFID wristbands and secure lockers for UK wake and aqua parks.',
    url: 'https://posso.co.uk/solutions/wake-parks',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso wake park booking and POS software for UK wake and aqua parks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wake Park Booking & POS Software UK | Posso',
    description: 'Session and slot booking, equipment hire tracking, digital waivers, RFID wristbands and secure lockers for UK wake and aqua parks.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Gear Up and Get on the Water.",
  subheadline: "Specialized management for session bookings, rental gear, liability waivers, and personal storage in wet environments.",
  benefits: [
    "Rental Tracking: Link helmet and vest rentals to the user's ticket to prevent loss.",
    "Waiver Management: Ensure every rider has signed a digital waiver before the turnstile unlocks.",
    "Secure Storage: robust lockers for guests to store dry clothes and car keys while they ride."
  ],
  ctaText: "Streamline Your Wake Park"
};

export default function WakeParksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/wake-parks"
      breadcrumbLabel="Wake & Aqua Parks"
      schemaName="Wake Park Booking & POS Software"
      schemaDescription="Posso provides session and slot booking, equipment hire tracking, digital waivers, RFID wristbands and secure lockers for UK wake parks, cable parks and aqua parks."
      intro={{
        title: "Wake Park Booking & POS Software for UK Cable and Aqua Parks",
        paragraphs: [
          "Posso is a complete <strong>wake park booking software</strong> and <strong>wake park POS system</strong> built for cable parks, wake parks and aqua parks that run on timed sessions. Guests book a slot online, sign their <strong>digital waiver</strong> in advance and turn up ready to ride — while your team manages every session, rider and piece of kit from one connected platform.",
          "Session and slot booking keeps your cable and obstacle park running at the right capacity all day, and built-in <strong>equipment hire management</strong> links each helmet, vest and board to the rider's ticket so nothing goes missing. RFID wristbands handle entry, cashless spend at the café and shop, and access to secure lockers for dry clothes and car keys, so riders carry nothing onto the water.",
          "Designed for UK operators, Posso brings session booking, waivers, equipment hire, <strong>aqua park POS</strong>, memberships, group bookings and reporting together in one system. The result is fewer no-shows, faster check-in, safer compliance and a clear, real-time view of bookings, gear and revenue across every session.",
        ],
      }}
      featuresTitle="Everything Your Wake Park Needs in One Platform"
      features={[
        { title: "Session & Slot Booking", description: "Sell timed cable, obstacle and lesson sessions online with capacity limits per slot, keeping the park running smoothly all day." },
        { title: "Equipment Hire Tracking", description: "Link helmets, vests, wetsuits and boards to each rider's ticket so gear is checked out, returned and accounted for every session." },
        { title: "Digital Waivers", description: "Riders sign liability waivers online before they arrive, and the turnstile only unlocks once a valid waiver is on file." },
        { title: "RFID Wristbands & Cashless Spend", description: "One wristband for session access, café and shop purchases and lockers, so riders carry nothing onto the water." },
        { title: "Secure Lockers", description: "Robust, keyless lockers let guests store dry clothes, car keys and valuables securely while they ride, unlocked with a tap." },
        { title: "Memberships & Group Bookings", description: "Sell season passes, memberships, lessons and group or stag/hen bookings, with member pricing and instant recognition on arrival." },
      ]}
      howItWorks={[
        { title: "Book a Session", desc: "Riders choose a timed slot or lesson and book online before they arrive." },
        { title: "Sign the Waiver", desc: "Digital waivers are signed in advance — no paperwork queues at reception." },
        { title: "Collect Gear", desc: "Helmets, vests and boards are checked out and linked to each rider's ticket." },
        { title: "Ride & Tap", desc: "RFID wristbands handle session access, cashless spend and secure lockers." },
      ]}
      faqTitle="Wake & Aqua Parks — Frequently Asked Questions"
      faqs={[
        { question: "What is wake park booking software?", answer: "Wake park booking software lets riders book timed sessions or lessons online and manages capacity, waivers, equipment hire and payments in one place. Posso combines session booking, digital waivers, RFID wristbands, equipment tracking and POS so your whole cable or aqua park runs on a single platform." },
        { question: "Can guests book timed sessions and lessons online?", answer: "Yes. Posso supports session and slot booking, so riders can reserve cable sessions, obstacle time or lessons online with capacity limits per slot. This reduces no-shows, smooths out busy periods and keeps the park running at the right capacity." },
        { question: "How does digital waiver management work?", answer: "Riders sign their liability waiver online before arriving, and the system stores it against their booking. The turnstile only unlocks once a valid waiver is on file, so you stay compliant without paperwork queues at reception." },
        { question: "Can I track rental gear like helmets and vests?", answer: "Absolutely. Posso links each piece of equipment — helmets, vests, wetsuits and boards — to the rider's ticket when it's checked out, so gear is tracked, returned and accounted for every session, reducing loss and replacement costs." },
        { question: "Do you offer secure storage for riders' belongings?", answer: "Yes. Keyless smart lockers let riders store dry clothes, car keys and valuables securely while they're on the water, unlocked with a tap of their RFID wristband rather than coins or keys." },
        { question: "Is Posso suitable for UK wake parks and aqua parks?", answer: "Posso is built for UK operators and scales from single cable runs to multi-feature aqua parks. It unifies session booking, waivers, equipment hire, POS, memberships and reporting, growing with your park as you add sessions, gear and outlets." },
      ]}
    />
  );
}
