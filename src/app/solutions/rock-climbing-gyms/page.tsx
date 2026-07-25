import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climbing Gym Booking & POS System UK | Posso',
  description: 'Fast check-ins and secure storage for climbers, from bouldering beginners to lead-climbing pros. Online booking, digital waivers, memberships, shoe hire and café EPOS in one system.',
  keywords: [
    'climbing gym booking system',
    'bouldering gym POS',
    'climbing wall waiver system',
    'climbing gym management software UK',
    'climbing gym membership software',
    'rock climbing gym POS system',
    'climbing wall booking software',
    'climbing gym check-in system',
    'digital waiver software for gyms',
    'climbing gym day pass booking',
  ],
  alternates: {
    canonical: '/solutions/rock-climbing-gyms',
  },
  openGraph: {
    title: 'Climbing Gym Booking & POS System UK | Posso',
    description: 'Online booking, digital waivers, memberships, shoe hire and café EPOS for UK climbing and bouldering gyms — all in one system.',
    url: 'https://www.posso.co.uk/solutions/rock-climbing-gyms',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso climbing gym booking and POS system for UK rock climbing and bouldering centres',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climbing Gym Booking & POS System UK | Posso',
    description: 'Online booking, digital waivers, memberships, shoe hire and café EPOS for UK climbing and bouldering gyms.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Reach New Heights of Efficiency.",
  subheadline: "Online booking, digital waivers, fast check-ins and secure storage for climbers — from bouldering beginners to lead-climbing pros.",
  benefits: [
    "Check-in Speed: Fast member scanning so climbers can get to the wall quicker.",
    "Gear Hire Integration: Add shoe and harness rentals directly to the entry ticket or locker fee.",
    "Member Lockers: Offer permanent locker rentals for monthly members alongside daily use lockers for drop-ins."
  ],
  ctaText: "Optimize Your Gym",
  slug: "solutions/rock-climbing-gyms",
  breadcrumbLabel: "Rock Climbing Gyms",
  schemaName: "Climbing Gym Booking & POS System",
  schemaDescription: "All-in-one climbing gym management software for UK bouldering and rock climbing centres: online booking, digital waivers, memberships, day passes, equipment hire, access control and café EPOS.",
  intro: {
    title: "Climbing Gym Management Software Built for UK Walls",
    paragraphs: [
      "Running a busy climbing wall means juggling drop-in climbers, members, inductions and gear hire — often all at the front desk during peak hours. Posso is a complete <strong>climbing gym booking system</strong> and POS that brings online booking, timed sessions, digital waivers and memberships into one platform, so your team spends less time on admin and more time on the floor.",
      "Whether you run a high-volume <strong>bouldering gym</strong>, a multi-discipline centre with lead and top-rope walls, or a community wall, Posso handles day passes, peak-time capacity limits and recurring memberships out of the box. Our <strong>climbing wall waiver system</strong> captures signed waivers and induction status before climbers arrive, so check-in is a single scan rather than a queue.",
      "From shoe and harness hire to café and retail sales, every transaction runs through one till and one report. Take deposits to cut no-shows on courses, sell gift vouchers and bundles, and use built-in analytics to see exactly when your walls are busiest. Posso is <strong>climbing gym management software UK</strong> operators can run with confidence — flexible, fast and designed for real-world front desks.",
    ],
  },
  featuresTitle: "Everything Your Climbing Gym Needs",
  features: [
    { title: "Online Booking & Timed Sessions", description: "Let climbers book day passes and timed slots online, with capacity limits that protect your busiest peak-hour sessions and prevent overcrowding on the mats." },
    { title: "Digital Waivers & Inductions", description: "Climbers sign your liability waiver and complete induction questions before they arrive. Waiver and competency status is linked to their account for instant, paperless check-in." },
    { title: "Memberships & Class Booking", description: "Sell recurring monthly memberships, multi-visit punch cards and bookable classes or courses — from beginner inductions to coached sessions and youth clubs." },
    { title: "Shoe & Equipment Hire", description: "Add climbing shoe, harness and chalk hire straight onto the entry ticket. Track stock, sizes and returns so nothing walks out the door unaccounted for." },
    { title: "Access Control & Lockers", description: "RFID and access control move climbers from reception to the wall quickly, with day-use and member lockers managed from the same system." },
    { title: "Café & Retail EPOS", description: "Run your café, vending and retail wall — shoes, chalk, brushes and merch — through the same till, so all revenue and stock sits in one place." },
  ],
  howItWorks: [
    { title: "Book Online", desc: "Climbers reserve a day pass or timed session and complete their digital waiver in advance." },
    { title: "Scan & Check In", desc: "A quick RFID or barcode scan confirms waiver and membership status at reception." },
    { title: "Add Hire & Extras", desc: "Shoe hire, lockers, café and retail are added to the visit in a couple of taps." },
    { title: "Track & Grow", desc: "Live analytics reveal peak times, popular sessions and membership trends to plan staffing." },
  ],
  faqTitle: "Climbing Gyms — Frequently Asked Questions",
  faqs: [
    { question: "Can Posso handle digital waivers for our climbing wall?", answer: "Yes. Posso includes a climbing wall waiver system that lets climbers read and sign your liability waiver online before they visit, and complete induction or competency questions. Signed waivers are stored against each climber's account, so reception can confirm status with a single scan rather than handing out paper forms." },
    { question: "Does the system support day passes and timed bouldering sessions?", answer: "Absolutely. You can sell day passes and timed sessions online and at the desk, with capacity limits per slot. This is ideal for high-volume bouldering gyms that need to manage peak-hour numbers and keep the mats safe and comfortable." },
    { question: "Can we manage memberships and recurring payments?", answer: "Yes. Posso supports recurring monthly memberships, multi-visit punch cards and class booking. Members can renew automatically, book coached sessions and check in instantly with an RFID card or app." },
    { question: "Does it include equipment and shoe hire?", answer: "It does. Climbing shoe, harness and chalk hire can be added directly to the entry ticket or locker fee, with stock and size tracking built in so you always know what is out on hire and what has been returned." },
    { question: "Can climbers book and pay online?", answer: "Yes. Climbers can book day passes, timed sessions, courses and memberships online and pay in advance. You can also take deposits on courses and events to reduce no-shows, with everything synced to your front-desk POS." },
    { question: "Does Posso run our café and retail as well?", answer: "Yes. Posso is a full EPOS, so your café, vending and retail sales — shoes, chalk and merchandise — run through the same till as entries and hire. All revenue, stock and reporting sit together in one system." },
  ],
};

export default function RockClimbingGymsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug={pageData.slug}
      breadcrumbLabel={pageData.breadcrumbLabel}
      schemaName={pageData.schemaName}
      schemaDescription={pageData.schemaDescription}
      intro={pageData.intro}
      featuresTitle={pageData.featuresTitle}
      features={pageData.features}
      howItWorks={pageData.howItWorks}
      faqTitle={pageData.faqTitle}
      faqs={pageData.faqs}
    />
  );
}
