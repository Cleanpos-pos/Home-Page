import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TicketingHero } from '@/components/sections/ticketing-hero';
import { TicketingFeatures } from '@/components/sections/ticketing-features';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { QuickAnswer } from '@/components/quick-answer';
import type { Metadata } from 'next';
import { PageBreadcrumb } from '@/components/page-breadcrumb';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Venue & Attraction Ticketing Software UK',
  description:
    'Ticketing software for UK attractions and venues: sell timed tickets and memberships online, on self-service kiosks and at the door, scan guests in, and run café tills and smart lockers on the same platform.',
  alternates: {
    canonical: '/ticketing',
  },
};

// Answers mirror claims already made in the ticketing sections and the
// /solutions/* attraction pages — keep them in step if those change.
const faqs = [
  {
    question: 'What is venue ticketing software?',
    answer:
      'Software that sells admission, timed sessions, event tickets and memberships across every channel — your website, self-service kiosks and the front desk — and then validates them at entry. A good system shares one set of tickets, capacity limits and reporting across all of those channels, rather than running online and on-site sales separately.',
  },
  {
    question: 'Can guests buy tickets online and on site?',
    answer:
      'Yes. Guests book online for any session or event and pay with Apple Pay, Google Pay or card, and you can sell at the door or on self-service kiosks too. Weatherproof outdoor kiosks let visitors buy tickets, tours and memberships without a staffed booth.',
  },
  {
    question: 'How does Posso handle timed sessions and capacity?',
    answer:
      'You set the capacity and length of each session and Posso enforces it across your website, kiosks and front desk in real time. Once a slot is full it stops selling everywhere, so a peak session never oversells.',
  },
  {
    question: 'Does it handle memberships and passes?',
    answer:
      'Yes. Create monthly passes, family bundles or annual memberships that renew automatically and work directly at entry, so members are scanned in the same way as ticket holders.',
  },
  {
    question: 'How do guests check in?',
    answer:
      'Staff scan tickets on arrival, or guests check themselves in at self-service kiosks. Entry, capacity and live activity show on the same dashboard as your sales.',
  },
  {
    question: 'Can it also run my café, lockers and screens?',
    answer:
      'Yes. The same platform runs café and bar tills, smart lockers integrated with your tickets, and screens showing session times — so every sale and every visit lands in one set of reports.',
  },
  {
    question: 'What kinds of venues is it for?',
    answer:
      'Posso ticketing is built for UK attractions and leisure venues — trampoline parks, soft-play centres, ice and roller rinks, water parks, museums, family entertainment centres, festivals and events — and scales from a single site to a group.',
  },
];

export default function TicketingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBreadcrumb path="/ticketing" items={[{"label":"Ticketing"}]} />

        <TicketingHero />
        <QuickAnswer>
          Venue ticketing software lets attractions and event venues sell tickets, timed sessions and memberships
          online, on self-service kiosks and at the door, then check guests in with a quick scan. What matters is
          one system: capacity enforced across every channel so a session never oversells, memberships that renew
          automatically and work at entry, and café tills, smart lockers and reporting on the same platform.
          Posso&apos;s ticketing platform is built for UK trampoline parks, soft-play centres, ice and roller rinks,
          museums, water parks and festivals, from a single site to a group.
        </QuickAnswer>
        <TicketingFeatures />

        {/* Real Posso ticketing kiosk install */}
        <section className="py-16 bg-slate-900/30">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            contentUrl: 'https://www.posso.co.uk/images/posso-ticketing-kiosk-copenhagen.jpg',
            url: 'https://www.posso.co.uk/images/posso-ticketing-kiosk-copenhagen.jpg',
            caption: 'A Posso self-service ticketing kiosk on the Copenhagen harbourfront selling tours and event tickets.',
            creditText: 'Posso Ltd',
            creator: { '@type': 'Organization', name: 'Posso Ltd' },
            copyrightNotice: '© Posso Ltd',
          }) }} />
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <figure>
                <Image
                  src="/images/posso-ticketing-kiosk-copenhagen.jpg"
                  width={800}
                  height={600}
                  alt="Posso self-service ticketing kiosk on the Copenhagen harbourfront selling tour and event tickets"
                  className="rounded-2xl border border-slate-700/50 shadow-2xl shadow-primary/10 w-full h-auto"
                  loading="lazy"
                />
                <figcaption className="text-sm text-slate-500 mt-3 text-center">A Posso ticketing kiosk in the field — Copenhagen harbourfront.</figcaption>
              </figure>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">Sell tickets where the crowd is</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Weatherproof self-service ticketing kiosks let visitors buy tickets, tours and memberships
                  themselves — day or night, in any weather, with no queue and no staffed booth. The same Posso
                  platform runs your online sales, on-site check-in and reporting, so every channel shares one set
                  of tickets and one set of numbers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          title="Venue ticketing — frequently asked questions"
          faqs={faqs}
          schemaId="https://www.posso.co.uk/ticketing#faq"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
