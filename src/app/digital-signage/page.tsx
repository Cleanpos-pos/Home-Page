import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DigitalSignageHero } from '@/components/sections/digital-signage-hero';
import { DigitalSignageFeatures } from '@/components/sections/digital-signage-features';
import { DigitalSignageBrochure } from '@/components/sections/digital-signage-brochure';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { QuickAnswer } from '@/components/quick-answer';
import type { Metadata } from 'next';
import { PageBreadcrumb } from '@/components/page-breadcrumb';

export const metadata: Metadata = {
  title: 'Digital Signage & Menu Boards for Hospitality UK',
  description:
    'Digital signage for UK restaurants, cafés and bars: cloud-managed menu boards and promotional screens, scheduled by time of day and synced to your Posso POS so prices and sold-out items update on screen.',
  alternates: {
    canonical: '/digital-signage',
  },
};

// Answers mirror claims already made on /digital-signage-systems, /pos-signage and
// /food-and-drink-digital-signage — keep them in step if those change.
const faqs = [
  {
    question: 'What is digital signage for restaurants and cafés?',
    answer:
      'Commercial-grade screens driven by cloud software, used as digital menu boards, promotional displays and queue screens. Instead of reprinting menus or rewriting chalkboards, you update the content from a web dashboard and it appears on screen within seconds.',
  },
  {
    question: 'What screens do I need for digital signage?',
    answer:
      'Commercial-grade displays rated for all-day use with an HDMI input — domestic TVs are not designed to run 12 or more hours a day. Sizes from 32 to 55 inches are the most common behind a counter. We can supply complete packages with screen, media player, bracket and cabling, or set the software up on commercial displays you already own.',
  },
  {
    question: 'Can menu boards switch automatically between breakfast, lunch and dinner?',
    answer:
      'Yes. You set time-based rules — for example breakfast until 11am, lunch until 5pm and dinner after that — and the screens switch at those times with no one touching them. Weekend, seasonal and promotional schedules can be set in advance with their own start and end dates.',
  },
  {
    question: 'Does digital signage connect to my POS?',
    answer:
      'With Posso, yes. Signage connected to the Posso POS shares the same menu, so a price change on the till updates on screen and an item marked as sold out is removed or greyed out automatically. Customers only see what they can actually order, at the price they will pay.',
  },
  {
    question: 'Can I manage screens across several sites?',
    answer:
      'Yes. One cloud dashboard controls every screen at every location. Push a group-wide promotion to all sites at once, or give each site its own local specials, while each location still reflects its own menu and stock.',
  },
  {
    question: 'How much does digital signage cost?',
    answer:
      'The Posso POS that drives it starts from £499 + VAT. Screen packages are quoted on the number of screens and sites you need, and you can use commercial displays you already own. Book a free demo for a quote based on your layout.',
  },
];

export default function DigitalSignagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBreadcrumb path="/digital-signage" items={[{"label":"Digital Signage"}]} />

        <DigitalSignageHero />
        <QuickAnswer>
          Digital signage for hospitality means commercial-grade screens run by cloud software — digital menu
          boards, promotions and queue screens you update from any device instead of reprinting. The features to
          look for are time-of-day scheduling (breakfast, lunch and dinner menus switching automatically),
          multi-screen and multi-site control, and a link to your till, so price changes and sold-out items update
          on screen by themselves. Posso signage connects to the Posso POS (from £499 + VAT), and we can supply
          the screens or set it up on commercial displays you already own.
        </QuickAnswer>
        <DigitalSignageFeatures />
        <DigitalSignageBrochure />
        <FAQSection
          title="Digital signage — frequently asked questions"
          faqs={faqs}
          schemaId="https://www.posso.co.uk/digital-signage#faq"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
