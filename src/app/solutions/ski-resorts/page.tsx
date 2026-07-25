import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ski Resort Management Software UK | Lift Pass & Ticketing System',
  description: 'High-value equipment storage for skis and snowboards, lift pass integration, equipment rental, and multi-outlet F&B EPOS. Posso ski resort management software runs your whole resort from one platform.',
  keywords: [
    'ski resort ticketing system',
    'lift pass system UK',
    'ski resort management software',
    'ski rental management software',
    'lift pass and ticketing software',
    'ski resort POS system',
    'snowboard equipment rental software',
    'season pass system UK',
    'ski resort RFID wristbands',
    'ski resort EPOS UK',
  ],
  alternates: {
    canonical: '/solutions/ski-resorts',
  },
  openGraph: {
    title: 'Ski Resort Management Software UK | Lift Pass & Ticketing | Posso',
    description: 'Lift passes, equipment rental, RFID access, secure ski storage, and multi-outlet F&B EPOS — one platform to run your ski resort.',
    url: 'https://www.posso.co.uk/solutions/ski-resorts',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso ski resort management software with lift pass and ticketing system for UK ski resorts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ski Resort Management Software UK | Lift Pass & Ticketing | Posso',
    description: 'Lift passes, equipment rental, RFID access, secure storage, and multi-outlet F&B EPOS for ski resorts.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "From Lift Pass to Locker, Seamlessly.",
  subheadline: "A complete ski resort management platform: lift passes, equipment rental, RFID access, secure high-value storage for skis and snowboards, and multi-outlet F&B EPOS in one system.",
  benefits: [
    "Lift Pass Integration: Guests can use their RFID Lift Pass to open heated lockers for boots, skis, and personal gear.",
    "High-Value Storage: Secure and robust lockers designed for expensive ski and snowboard equipment.",
    "Rental & Retail Sync: Integrate with on-site rental shops and retail stores for a complete resort ecosystem."
  ],
  ctaText: "Explore Resort Solutions"
};

const intro = {
  title: "Ski Resort Management Software Built for UK Operators",
  paragraphs: [
    "Posso is a complete <strong>ski resort management software</strong> platform that unifies lift passes, ticketing, equipment rental, secure storage, and food &amp; beverage across your whole resort. Instead of running disconnected systems for the lift, the rental shop, and each café, your team manages every outlet from one dashboard — with one set of guest data and one set of analytics.",
    "Our <strong>lift pass and ticketing system</strong> sells day passes, multi-day tickets, and season passes online and on site, all carried on a single RFID lift pass. That same pass opens heated lockers, controls access, and works as a cashless payment method across the resort — so guests tap once and ski, while you cut queues at every touchpoint.",
    "From a single slope to a multi-outlet resort, Posso scales with your operation. Manage <strong>ski and snowboard equipment rental</strong> by size and condition, sync your on-site rental and retail shops, run multiple bars and restaurants on one EPOS, and track <strong>season pass</strong> holders — all reporting back to a single platform so you always know how your resort is performing.",
  ],
};

const features = [
  { title: "Lift Pass & Ticketing", description: "Sell day passes, multi-day tickets, and season passes online and on site, all carried on a single RFID lift pass for fast, contactless access control." },
  { title: "Equipment Rental Management", description: "Manage ski and snowboard rental inventory by size and condition, link each set to the guest, and process rental quickly at the shop counter." },
  { title: "High-Value Secure Storage", description: "Robust, heated lockers built for expensive skis, snowboards, and boots. Guests open them with their RFID lift pass and collect at the end of the day." },
  { title: "RFID Access & Cashless Pay", description: "One RFID lift pass for lift access, locker entry, and cashless spend across every bar, café, and restaurant on the mountain." },
  { title: "Multi-Outlet F&B EPOS", description: "Run all your bars and restaurants on a single EPOS with shared menus, stock, and reporting — ideal for busy, multi-venue resorts." },
  { title: "Rental & Retail Sync", description: "Integrate on-site rental shops and retail stores so stock, sales, and customer records stay in sync across the whole resort ecosystem." },
];

const howItWorks = [
  { title: "Buy a Lift Pass", desc: "Guests purchase day, multi-day, or season passes online or on site." },
  { title: "Collect Equipment", desc: "Ski and snowboard rental is issued and linked to the guest's pass." },
  { title: "Tap to Access", desc: "The RFID lift pass opens lifts, heated lockers, and cashless F&B spend." },
  { title: "Review & Optimise", desc: "Resort-wide analytics reveal peak demand across passes, rental, and F&B." },
];

const faqs = [
  { question: "What is a ski resort ticketing system?", answer: "A ski resort ticketing system sells and manages lift passes — day, multi-day, and season passes — online and on site. Posso carries every pass on a single RFID lift pass that also opens lockers, controls access, and pays for food and drink across the resort." },
  { question: "How does the RFID lift pass work?", answer: "Each guest carries one RFID lift pass that handles lift access, opens heated lockers for skis and boots, and acts as a cashless payment method across every bar, café, and restaurant. Guests tap once and ski, and you cut queues at every touchpoint." },
  { question: "Can Posso manage ski and snowboard equipment rental?", answer: "Yes. Posso's ski rental management tracks your full equipment inventory by size and condition, links each set to the guest's pass, and processes rental quickly at the shop counter — so you always know what's out and what's available." },
  { question: "How does high-value equipment storage work?", answer: "Posso integrates with secure, heated lockers designed for expensive skis, snowboards, and boots. Guests open them with their RFID lift pass and collect their gear at the end of the day, keeping valuable equipment safe and the base area clear." },
  { question: "Does Posso support multiple bars and restaurants?", answer: "Yes. Posso runs all your on-mountain bars, cafés, and restaurants on a single multi-outlet F&B EPOS with shared menus, stock, and reporting — and accepts cashless payment via the guest's RFID lift pass." },
  { question: "Can I sell and manage season passes?", answer: "Absolutely. Posso sells and tracks season passes alongside day and multi-day tickets, with online purchase, RFID access control, and analytics on season pass usage so you can plan capacity and loyalty offers across the resort." },
];

export default function SkiResortsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug="solutions/ski-resorts"
      breadcrumbLabel="Ski Resorts"
      schemaName="Ski Resort Management & Lift Pass Software"
      schemaDescription="Ski resort management software for UK resorts: lift pass and ticketing system, ski and snowboard equipment rental, RFID access, secure high-value storage, and multi-outlet F&B EPOS in one platform."
      intro={intro}
      featuresTitle="Everything You Need to Run a Ski Resort"
      features={features}
      howItWorks={howItWorks}
      faqs={faqs}
      faqTitle="Ski Resorts — Frequently Asked Questions"
    />
  );
}
