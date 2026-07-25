import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soft Play & Play Centre Booking, Ticketing & EPOS | Posso',
  description: 'Safety-first ticketing that pairs children with parents, plus online booking, capacity control and convenient storage for shoes and bags.',
  keywords: [
    'soft play booking system',
    'play centre ticketing software',
    'soft play EPOS',
    'play centre POS UK',
    'soft play management software',
    'soft play capacity management',
    'play centre online booking',
    'soft play party booking system',
    'play centre café EPOS',
    'soft play membership software',
  ],
  alternates: {
    canonical: '/solutions/playcenters-softplay',
  },
  openGraph: {
    title: 'Soft Play & Play Centre Booking, Ticketing & EPOS | Posso',
    description: 'Safety-first ticketing with parent-child pairing, online booking, capacity control, party bookings, café EPOS and shoe storage for UK soft play and play centres.',
    url: 'https://www.posso.co.uk/solutions/playcenters-softplay',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso soft play and play centre booking, ticketing and EPOS system for UK play centres',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soft Play & Play Centre Booking, Ticketing & EPOS | Posso',
    description: 'Safety-first ticketing with parent-child pairing, online booking, capacity control, party bookings, café EPOS and shoe storage for UK soft play and play centres.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Safe Play, Secure Peace of Mind.",
  subheadline: "Safety-first ticketing that pairs children with parents, plus online booking, capacity control and convenient storage for shoes and bags.",
  benefits: [
    "Security Pairing: Link parent and child tickets to ensure safe check-out.",
    "Shoe Storage: Manage 'no shoes' policies effectively with dedicated shoe lockers or cubbies managed by the system.",
    "Capacity Control: Prevent overcrowding in play zones with real-time ticket tracking."
  ],
  ctaText: "Make Playtime Safer"
};

const intro = {
  title: "Booking, Ticketing & Safety in One System",
  paragraphs: [
    "Posso is a complete <strong>soft play booking system</strong> and EPOS platform built for UK play centres. It connects online booking, safety-first ticketing, capacity control, café EPOS and smart storage so your team can focus on keeping children safe and parents happy — not wrestling with paperwork and a separate till.",
    "Safety is the priority in any play centre, and Posso's <strong>play centre ticketing software</strong> is designed around it. Parent and child tickets are paired at check-in so every child leaves with the right adult, capacity in each play zone is tracked in real time to prevent overcrowding, and timed sessions keep the centre flowing smoothly through busy periods.",
    "Posso also runs the rest of your operation as a single <strong>soft play EPOS</strong> — café and F&B sales, party and group bookings, memberships, shoe lockers and cashless payments — with live reporting on attendance and revenue. It's a true all-in-one <strong>play centre POS for the UK</strong>, syncing your website, kiosks and front desk so nothing slips through the cracks.",
  ],
};

const features = [
  { title: "Parent & Child Pairing", description: "Link each child's ticket to a parent or guardian at check-in for safe, verified check-out — peace of mind for every family." },
  { title: "Online Booking & Timed Sessions", description: "Let parents book and pay for play sessions online, with timed slots and capacity caps that smooth out your busiest weekends." },
  { title: "Capacity Control", description: "Track live ticket numbers per play zone to prevent overcrowding and keep your centre within safe occupancy limits." },
  { title: "Shoe & Bag Storage", description: "Manage 'no shoes' policies with system-controlled shoe lockers and cubbies, linked to each booking for easy retrieval." },
  { title: "Party & Group Bookings", description: "Handle birthday parties, toddler groups and school visits with bulk ticketing, deposits, reserved slots and party add-ons." },
  { title: "Café & Membership EPOS", description: "Run your café on the same system and grow loyalty with memberships and season passes, all reported in one dashboard." },
];

const howItWorks = [
  { title: "Book Online", desc: "Parents reserve a timed play session and pay in advance from any device." },
  { title: "Pair at Check-In", desc: "Each child is paired to a parent ticket and shoes go into a managed locker." },
  { title: "Play Safely", desc: "Capacity is tracked live per zone while families enjoy the café cashlessly." },
  { title: "Safe Check-Out", desc: "Paired tickets confirm every child leaves with the correct adult." },
];

const faqs = [
  { question: "How does parent and child pairing keep children safe?", answer: "At check-in, Posso links each child's ticket to a parent or guardian. At check-out, the system verifies that pairing so every child leaves with the right adult. It removes the guesswork and gives both your staff and parents real peace of mind." },
  { question: "Can Posso stop my play zones from overcrowding?", answer: "Yes. Posso tracks live ticket numbers per play zone and across the whole centre. You set safe capacity limits and the system enforces them in real time, stopping bookings once a session is full so you never exceed safe occupancy." },
  { question: "Does Posso help with 'no shoes' policies?", answer: "It does. Posso manages shoe and bag storage with system-controlled lockers and cubbies, linked to each booking so belongings are easy to find at check-out. This keeps your 'no shoes' policy organised and your play areas tidy." },
  { question: "Can parents book play sessions online in advance?", answer: "Yes. Parents can book and pay for timed play sessions online from any device, and walk-ins can buy tickets at a self-service kiosk or the front desk. Capacity and availability stay in sync across your website, kiosks and till." },
  { question: "Does Posso handle parties and a café too?", answer: "Absolutely. Posso manages party and group bookings with bulk ticketing, deposits and add-ons, and runs your café or snack bar on the same EPOS. Memberships, cashless payments and reporting are all included in one platform." },
  { question: "Is Posso suitable for a UK soft play or play centre?", answer: "Yes. Posso is play centre management software built for UK operators, combining safety-first ticketing, online booking, capacity control, shoe storage, party bookings, café EPOS, memberships and cashless payments in one system." },
];

export default function PlaycentersSoftplayPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/playcenters-softplay"
      breadcrumbLabel="Soft Play & Play Centres"
      schemaName="Soft Play & Play Centre Ticketing & EPOS System"
      schemaDescription="Safety-first ticketing with parent-child pairing, online booking, capacity control, shoe storage, party bookings and café EPOS for UK soft play and play centres."
      intro={intro}
      featuresTitle="Everything Your Play Centre Needs"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Soft Play & Play Centres — Frequently Asked Questions"
    />
  );
}
