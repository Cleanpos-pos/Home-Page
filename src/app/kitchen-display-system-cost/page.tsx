import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { Badge } from '@/components/ui/badge';
import { PoundSterling } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const PAGE_URL = 'https://www.posso.co.uk/kitchen-display-system-cost';

export const metadata: Metadata = {
  title: 'How Much Does a Kitchen Display System Cost?',
  description:
    'Kitchen display system cost, itemised: 21-inch screen £399 + VAT, EPOS from £499 + VAT, no separate per-screen licence. Worked totals for one, two and three screens.',
  keywords: [
    'kitchen display system cost',
    'kds cost',
    'kitchen display screen price',
    'kitchen display system price uk',
    'how much does a kitchen display system cost',
    'kds price',
  ],
  alternates: {
    canonical: '/kitchen-display-system-cost',
  },
  openGraph: {
    title: 'How Much Does a Kitchen Display System Cost? | Posso',
    description:
      'Itemised kitchen display system pricing: screens, the EPOS behind them, licensing, and an honest comparison against kitchen printers.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

// Product + Offer for the screen. FAQPage comes from FAQSection via schemaId.
const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Posso Kitchen Display System',
    description:
      '21-inch kitchen display screen for UK restaurants and takeaways, running on the Posso EPOS with no separate per-screen licence fee.',
    brand: { '@type': 'Brand', name: 'Posso' },
    url: PAGE_URL,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: '399.00',
      valueAddedTaxIncluded: false,
      availability: 'https://schema.org/InStock',
      url: PAGE_URL,
      seller: { '@id': 'https://www.posso.co.uk/#organization' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Kitchen Display System', item: 'https://www.posso.co.uk/kitchen-display-system' },
      { '@type': 'ListItem', position: 3, name: 'Kitchen Display System Cost', item: PAGE_URL },
    ],
  },
];

const costRows: [string, string][] = [
  ['21-inch kitchen display screen', '£399 + VAT, one-off, per screen'],
  ['Twin-screen upgrade', '+£150'],
  ['Complete EPOS system behind it', '£499 + VAT — touchscreen till, kitchen printer, cash drawer, receipt printer'],
  ['Per-screen software licence', 'None — screens run under the standard software fee'],
  ['Software and support', 'From £35 + VAT a month for the platform, however many screens you run'],
  ['Menu build, configuration and staff training', 'Included'],
  ['Extra kitchen or prep printer, if you keep paper', '£99 each'],
  ['On-site installation', 'Quoted separately — depends on site, cabling and mounting'],
  ['Hardware warranty', '2 years, included'],
];

const configurations: { screens: string; detail: string; total: string }[] = [
  { screens: 'One screen', detail: '£499 + VAT system, plus 1 × £399 + VAT screen', total: '£898 + VAT' },
  { screens: 'Two screens', detail: '£499 + VAT system, plus 2 × £399 + VAT screens', total: '£1,297 + VAT' },
  { screens: 'Three screens', detail: '£499 + VAT system, plus 3 × £399 + VAT screens', total: '£1,696 + VAT' },
];

export default function KitchenDisplaySystemCostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-primary/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Kitchen Display System', href: '/kitchen-display-system' },
          { label: 'Kitchen Display System Cost' },
        ]} />

        <section className="pt-8 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
                <PoundSterling className="w-3 h-3 mr-2" />
                PUBLISHED PRICING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight mb-8">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  How much does a kitchen display system cost?
                </span>
              </h1>
              <div className="glass-card rounded-2xl border border-primary/30 p-6 md:p-8">
                <p className="text-slate-200 text-lg leading-relaxed">
                  A 21-inch kitchen display screen costs <strong className="text-white">£399 + VAT</strong> as a one-off, running
                  on a complete Posso EPOS system from <strong className="text-white">£499 + VAT</strong>. There is
                  <strong className="text-white"> no separate per-screen licence</strong> — screens run under the standard
                  software fee from £35 + VAT a month, however many you add. Installation is quoted separately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Itemised cost table */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">Itemised kitchen display costs</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {costRows.map((row) => (
                      <tr key={row[0]} className="border-b border-slate-800 align-top last:border-b-0">
                        <th scope="row" className="py-3 pr-4 font-medium text-white">{row[0]}</th>
                        <td className="py-3 pr-4 text-slate-300">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 mt-4">
                The rest of the range is on the{' '}
                <Link href="/epos-pricing-uk" className="text-primary hover:underline">EPOS pricing page</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Configurations */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">One, two or three screens</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Worked examples from the list prices above — arithmetic, not customer case studies. Each assumes one complete
                EPOS system behind the screens, and none includes installation.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th scope="col" className="py-3 pr-4 text-white">Configuration</th>
                      <th scope="col" className="py-3 pr-4 text-white">Made up of</th>
                      <th scope="col" className="py-3 pr-4 text-white">Upfront total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {configurations.map((c) => (
                      <tr key={c.screens} className="border-b border-slate-800 align-top last:border-b-0">
                        <th scope="row" className="py-3 pr-4 font-medium text-white whitespace-nowrap">{c.screens}</th>
                        <td className="py-3 pr-4 text-slate-300">{c.detail}</td>
                        <td className="py-3 pr-4 text-slate-200 font-semibold whitespace-nowrap">{c.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 mt-6">
                Note what does <em>not</em> change across those rows: the monthly software fee. Going from one screen to three
                adds hardware only.
              </p>
            </div>
          </div>
        </section>

        {/* The per-screen licensing trap */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">The buying trap: per-screen licensing</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The headline price of a kitchen screen is rarely what decides the cost. The thing to check is whether the
                  provider charges a <strong className="text-white">monthly licence per screen</strong>. Plenty do, and it is
                  easy to miss, because the hardware quote looks competitive and the licence appears further down as a
                  per-device line.
                </p>
                <p>
                  The arithmetic turns quickly. A screen licence at £19 a month is £228 a year; across three screens that is
                  £684 a year, every year, on top of the hardware — and it recurs for as long as you run the kitchen. Over
                  three years that single line can cost more than the screens did.
                </p>
                <p>
                  Posso does not charge per screen. The screens run under the standard platform fee from £35 + VAT a month,
                  which is the same figure whether you run one screen or three. When you compare quotes, the question to ask is
                  not <em>what does a screen cost</em> but <strong className="text-white">what does the third screen cost me
                  every month</strong> — that is where the difference actually lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KDS vs printer, honestly */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">Screens versus kitchen printers: the honest comparison</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Start with the part most vendors skip: <strong className="text-white">the printer is cheaper upfront, and it
                  is not close</strong>. An extra kitchen printer is £99. A 21-inch screen is £399 + VAT. If the only question
                  is what you pay on day one, buy the printer — and plenty of kitchens should.
                </p>
                <p>
                  A screen earns the difference back in other ways, not in purchase price. There is no paper, no ribbons and no
                  roll to run out halfway through a Friday. Tickets cannot be lost, knocked onto the floor or stuck up in the
                  wrong order. Orders from the counter, the kiosk, your own website and the delivery marketplaces land in one
                  queue with times against them, so you can see what is ageing rather than reading along a rail. And when an
                  order changes, the screen updates, where paper has to be reprinted and the old ticket found.
                </p>
                <p>
                  Where the printer keeps winning is a small, simple kitchen with one prep station and steady ticket volume.
                  Paper is robust, everyone already understands it, and there is nothing to boot up. The switch pays when
                  volume makes tickets hard to track — several stations, several order channels, or a rush long enough that
                  the rail becomes a guessing game.
                </p>
                <p>
                  You do not have to choose outright, either. Many sites keep a printer at one station and put a screen where
                  the pressure is, which costs £99 plus £399 + VAT rather than one or the other.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Takeaway vs restaurant */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">Takeaway or restaurant: how many screens?</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">A takeaway</strong> usually needs one screen, at £898 + VAT with the system.
                  The volume arrives in short peaks from several channels at once — counter, phone, your own site and the
                  marketplaces — and the win is seeing all of it in one queue rather than across a printer and two tablets. A
                  second screen rarely earns its place unless there is a genuinely separate prep station.
                </p>
                <p>
                  <strong className="text-white">A restaurant</strong> more often wants two, at £1,297 + VAT, split by section
                  — one on the hot line, one on starters, desserts or the pass. Three makes sense where a kitchen runs distinct
                  sections that each need their own queue. If you would rather add a second display at one station than a
                  second station, the twin-screen upgrade is +£150.
                </p>
                <p>
                  Either way, the screens are the cheap part of the decision. What to check first is how your orders reach the
                  kitchen today and where they currently go missing. The{' '}
                  <Link href="/kitchen-display-system" className="text-primary hover:underline">kitchen display system page</Link>{' '}
                  covers how the queue actually works, and{' '}
                  <Link href="/self-order-kiosk-cost" className="text-primary hover:underline">self-order kiosk costs</Link>{' '}
                  matter here too, since kiosks push more tickets into the same kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          title="Kitchen Display System Cost — Frequently Asked Questions"
          schemaId={`${PAGE_URL}#faq`}
          faqs={[
            {
              question: 'How much does a kitchen display system cost?',
              answer:
                'A 21-inch kitchen display screen is £399 + VAT as a one-off purchase. It runs on a complete Posso EPOS system from £499 + VAT, so a single-screen kitchen starts at £898 + VAT. Software and support are from £35 + VAT a month for the platform, and there is no additional charge per screen.',
            },
            {
              question: 'Is there a monthly fee per kitchen screen?',
              answer:
                'Not with Posso. Screens run under the standard software fee from £35 + VAT a month, whether you run one screen or three. Many providers do charge a monthly licence per device, so when comparing quotes ask specifically what the second and third screens add to the monthly bill, not just the hardware price.',
            },
            {
              question: 'How many kitchen screens does a kitchen need?',
              answer:
                'Most takeaways run well on one screen, because the value is seeing counter, online and marketplace orders in a single queue. Restaurants more often use two, split by section — hot line and pass, or mains and desserts. Three suits kitchens with genuinely separate sections that each need their own ticket queue.',
            },
            {
              question: 'Is a kitchen display cheaper than a kitchen printer?',
              answer:
                'No, not upfront. An extra kitchen printer is £99 against £399 + VAT for a 21-inch screen, so the printer is clearly cheaper on day one. A screen saves on consumables and lost tickets rather than purchase price, and earns the difference back through ticket volume rather than through hardware savings.',
            },
            {
              question: 'Does a kitchen display replace kitchen printers?',
              answer:
                'It can, but it does not have to. A screen removes paper, ribbons and lost tickets, and handles order changes without a reprint. Many sites keep one printer at a station and put a screen where the pressure is, which costs £99 plus £399 + VAT and suits kitchens that are not ready to go fully paperless.',
            },
            {
              question: 'What does the twin-screen upgrade cost?',
              answer:
                'The twin-screen upgrade is +£150. It adds a second display at one station, which is different from buying a second full screen for a separate station. Choose it when one prep area needs more visible tickets at once, rather than when two areas each need their own independent queue.',
            },
            {
              question: 'Is installation included in the screen price?',
              answer:
                'No. Menu build, configuration and staff training are included, but physical on-site installation is quoted separately because it depends on your kitchen — where screens mount, how far power and network runs have to travel, and whether the position survives heat and steam. Ask for that figure before committing.',
            },
            {
              question: 'Do kiosk and delivery orders appear on the kitchen screen?',
              answer:
                'Yes. Orders from the counter, self-order kiosks, your own website and the delivery marketplaces land in one queue on the screen, interleaved by the time they were submitted. That single queue is usually the main reason a kitchen moves off paper, because the alternative is reconciling a printer against several tablets.',
            },
            {
              question: 'What happens to the screens if I stop paying the monthly fee?',
              answer:
                'The hardware is yours — it is bought outright, not rented, and carries a 2-year warranty. What ends with the subscription is the software and support that drive the screens, which means they stop working as a kitchen display. There is no long-term lock-in and no punitive early exit fee.',
            },
          ]}
        />

        <DemoEnquiry />
      </main>

      <Footer />
    </div>
  );
}
