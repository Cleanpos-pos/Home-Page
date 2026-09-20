import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { Badge } from '@/components/ui/badge';
import { PoundSterling } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const PAGE_URL = 'https://www.posso.co.uk/self-order-kiosk-cost';

export const metadata: Metadata = {
  title: 'How Much Does a Self-Order Kiosk Cost in the UK?',
  description:
    'Self-order kiosk cost, itemised: hardware from £699 + VAT, software from £25 + VAT a month, card processing from 1% + 10p. Worked configurations for one to four kiosks.',
  keywords: [
    'self order kiosk cost',
    'self order kiosk price uk',
    'how much does a self order kiosk cost',
    'kiosk price uk',
    'ordering kiosk cost',
    'self service kiosk price',
  ],
  alternates: {
    canonical: '/self-order-kiosk-cost',
  },
  openGraph: {
    title: 'How Much Does a Self-Order Kiosk Cost in the UK? | Posso',
    description:
      'Itemised self-order kiosk pricing: hardware, software, card processing, printers and installation, with worked configurations for one to four kiosks.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

// Product + Offer for the kiosk itself. No priceValidUntil (nothing maintains it)
// and no hand-written FAQPage — FAQSection emits that from the visible answers.
const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Posso Self-Order Kiosk',
    description:
      'Touchscreen self-order kiosk for UK restaurants and takeaways, with integrated card payments, menu build and configuration included, and a 2-year hardware warranty.',
    brand: { '@type': 'Brand', name: 'Posso' },
    url: PAGE_URL,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: '699.00',
      valueAddedTaxIncluded: false,
      availability: 'https://schema.org/InStock',
      url: PAGE_URL,
      seller: { '@id': 'https://www.posso.co.uk/#organization' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'How Much Does a Self-Order Kiosk Cost?',
    description:
      'What a self-order kiosk costs in the UK: hardware, ordering software, card payments and installation, and how to work out payback on gross margin.',
    thumbnailUrl: 'https://www.posso.co.uk/videos/thumbs/self-order-kiosk-cost.png',
    contentUrl: 'https://www.posso.co.uk/videos/self-order-kiosk-cost.mp4',
    uploadDate: '2026-07-14',
    duration: 'PT39S',
    url: PAGE_URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Self-Order Kiosks', item: 'https://www.posso.co.uk/self-order-kiosks' },
      { '@type': 'ListItem', position: 3, name: 'Self-Order Kiosk Cost', item: PAGE_URL },
    ],
  },
];

const upfrontPrices: [string, string][] = [
  ['Self-order kiosk (standard indoor)', '£699 + VAT per kiosk, floor-standing or wall-mounted'],
  ['Complete EPOS system behind it', '£499 + VAT — touchscreen till, kitchen printer, cash drawer, receipt printer'],
  ['Menu build, configuration and staff training', 'Included'],
  ['Extra kitchen or prep printer', '£99 each'],
  ['21-inch kitchen display screen', '£399 + VAT'],
  ['Twin-screen upgrade', '+£150'],
  ['On-site installation', 'Quoted separately — depends on site, cabling and access'],
  ['Hardware warranty', '2 years, included'],
];

const ongoingPrices: [string, string][] = [
  ['Software and support', 'From £25 + VAT a month, covering the core system, updates and cloud features'],
  ['Card processing — Posso Pay', 'From 1% + 10p, quoted on your card turnover — same rate at the kiosk and the counter'],
  ['Just Eat / Uber Eats / Deliveroo integration', '£45/month, unlimited orders'],
  ['Finance, if you spread the hardware', 'From £24.92 per week over 12, 24 or 36 months, subject to status'],
];

const configurations: { kiosks: string; detail: string; total: string }[] = [
  { kiosks: 'One kiosk', detail: '£499 + VAT system, plus 1 × £699 + VAT kiosk', total: '£1,198 + VAT' },
  { kiosks: 'Two kiosks', detail: '£499 + VAT system, plus 2 × £699 + VAT kiosks', total: '£1,897 + VAT' },
  { kiosks: 'Three kiosks', detail: '£499 + VAT system, plus 3 × £699 + VAT kiosks', total: '£2,596 + VAT' },
  { kiosks: 'Four kiosks', detail: '£499 + VAT system, plus 4 × £699 + VAT kiosks', total: '£3,295 + VAT' },
];

export default function SelfOrderKioskCostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-primary/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Self-Order Kiosks', href: '/self-order-kiosks' },
          { label: 'Self-Order Kiosk Cost' },
        ]} />

        {/* Hero + direct answer, above the video */}
        <section className="pt-8 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
                <PoundSterling className="w-3 h-3 mr-2" />
                PUBLISHED PRICING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight mb-8">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  How much does a self-order kiosk cost in the UK?
                </span>
              </h1>
              <div className="glass-card rounded-2xl border border-primary/30 p-6 md:p-8">
                <p className="text-slate-200 text-lg leading-relaxed">
                  A standard indoor self-order kiosk costs <strong className="text-white">£699 + VAT</strong> outright, on top of a
                  complete EPOS system from <strong className="text-white">£499 + VAT</strong>. Software and support run from
                  <strong className="text-white"> £25 + VAT a month</strong>, and card processing starts at
                  <strong className="text-white"> 1% + 10p</strong>. Menu build, configuration and staff training are included;
                  on-site installation is quoted separately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-primary/10 bg-black aspect-video">
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video className="w-full h-full" controls preload="none" poster="/videos/thumbs/self-order-kiosk-cost.png">
                  <source src="/videos/self-order-kiosk-cost.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Itemised tables */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">What you pay upfront</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {upfrontPrices.map((row) => (
                        <tr key={row[0]} className="border-b border-slate-800 align-top last:border-b-0">
                          <th scope="row" className="py-3 pr-4 font-medium text-white">{row[0]}</th>
                          <td className="py-3 pr-4 text-slate-300">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">What you pay monthly</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {ongoingPrices.map((row) => (
                        <tr key={row[0]} className="border-b border-slate-800 align-top last:border-b-0">
                          <th scope="row" className="py-3 pr-4 font-medium text-white">{row[0]}</th>
                          <td className="py-3 pr-4 text-slate-300">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-400 mt-4">
                  The same figures sit on the <Link href="/epos-pricing-uk" className="text-primary hover:underline">full EPOS pricing page</Link>,
                  alongside the rest of the range.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost components */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-10">Every cost component, with its figure</h2>
              <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Kiosk hardware — £699 + VAT per unit</h3>
                  <p>
                    That is the standard indoor kiosk, floor-standing or wall-mounted, with the touchscreen, the card reader
                    and the enclosure. It is a one-off purchase, not a rental, and it carries a 2-year hardware warranty. If you
                    trade outdoors, that is a different specification — see the IP65 note below, because an indoor unit will not
                    survive weather and you should not budget as though it will.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Software, menu build and configuration — from £25 + VAT a month</h3>
                  <p>
                    The monthly fee covers the ordering software, updates and the cloud back office. Building your menu — the
                    categories, images, modifiers and upsell prompts — plus configuration and staff training is included in the
                    price rather than charged as a setup fee. That matters when you compare quotes: a lower headline hardware
                    price with a separate menu-build charge often lands higher.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Card payments — from 1% + 10p</h3>
                  <p>
                    Card processing through Posso Pay is quoted on your card turnover and runs at the same rate whether the order
                    is taken at the kiosk or at the counter. A kiosk shifts transactions from cash to card, so this line grows as
                    kiosk volume grows. Model it on your own mix rather than assuming it is unchanged.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Printers — £99 per extra printer</h3>
                  <p>
                    The complete system includes a kitchen printer and a receipt printer. Kiosks often need one more, because a
                    second prep station or a collection point wants its own ticket. Each additional printer is £99. If you would
                    rather move the kitchen off paper altogether, a 21-inch kitchen display screen is £399 + VAT, with a
                    twin-screen upgrade at +£150.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Setup is included; installation is not</h3>
                  <p>
                    This is the distinction most quotes blur. Setup — the menu build, the configuration, the training — is
                    included. Physical on-site installation is quoted separately, because it depends on your site: where the
                    kiosk stands, how far the network and power runs have to go, and whether the floor or wall needs work. Ask
                    for that number before you commit, not after.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Support and warranty — included</h3>
                  <p>
                    UK-based support and a 2-year hardware warranty come with the system rather than as a paid tier. A kiosk is a
                    customer-facing device; when it stops taking orders, it stops taking money, so check what any provider means
                    by support hours before you compare their monthly fee with this one.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Outdoor IP65 kiosks — a separate specification</h3>
                  <p>
                    An IP65 outdoor kiosk is dust-tight, water-resistant and built with a sunlight-readable screen. It is not the
                    £699 + VAT indoor unit with a cover on it, and it is not priced from this page. If you are trading at a
                    market, a food truck pitch or a beer garden, start at the{' '}
                    <Link href="/outdoor-self-order-kiosks-ip65" className="text-primary hover:underline">outdoor IP65 kiosk page</Link>{' '}
                    and get that specification quoted on its own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Worked configurations */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Four worked configurations</h2>
              <p className="text-slate-400 mb-8 text-lg">
                These are worked examples built from the list prices above — arithmetic, not customer case studies. Every one
                assumes a single complete EPOS system behind the kiosks, and none of them includes installation, which is
                quoted per site.
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
                      <tr key={c.kiosks} className="border-b border-slate-800 align-top last:border-b-0">
                        <th scope="row" className="py-3 pr-4 font-medium text-white whitespace-nowrap">{c.kiosks}</th>
                        <td className="py-3 pr-4 text-slate-300">{c.detail}</td>
                        <td className="py-3 pr-4 text-slate-200 font-semibold whitespace-nowrap">{c.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 mt-6">
                Add £25 + VAT a month for software on top of any of these, plus card processing on what you take.
              </p>
            </div>
          </div>
        </section>

        {/* Outright vs monthly */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">Buying outright versus paying monthly</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The hardware is bought, not rented. Once you have paid the £699 + VAT, the kiosk is yours, and if you would
                  rather not pay it in one go, finance is available from £24.92 per week over 12, 24 or 36 months, subject to
                  status. The software is the part you pay monthly.
                </p>
                <p>
                  So what happens if you stop paying the monthly fee? You keep the kiosk — it is your property — but the
                  ordering software, the cloud back office and support stop with the subscription, which in practice means the
                  unit stops being useful as a kiosk. That is worth saying plainly, because it is the question people ask last
                  and should ask first. There is no long-term lock-in and no punitive exit fee; the trade is simply that the
                  software is a service, and the hardware is an asset.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payback methodology */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">How to work out payback honestly</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most kiosk payback sums divide the hardware cost by extra <em>revenue</em>, which flatters the answer badly.
                  Extra sales are not extra profit — you still buy the food. Use gross margin instead. The formula is:
                </p>
                <div className="glass-card rounded-xl border border-primary/30 p-6">
                  <p className="text-white font-medium">
                    Payback in days = total cost ÷ (kiosk orders per day × uplift per order × gross margin)
                  </p>
                </div>
                <p>
                  Take your own average order value and gross margin from your accounts. Measure the uplift by running one kiosk
                  for a few weeks and comparing the average kiosk order with the average counter order over the same period.
                  Those are your numbers; nobody else&apos;s will do.
                </p>
                <div className="glass-card rounded-xl border border-slate-700/50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Worked illustration — assumed inputs, not measured results</p>
                  <p>Every figure here is an assumption chosen to show the method. Replace each with your own.</p>
                  <ul className="mt-4 space-y-2 text-base">
                    <li>Assume 80 orders a day go through the kiosk.</li>
                    <li>Assume the average kiosk order runs 80p above the average counter order.</li>
                    <li>Assume a gross margin of 65%.</li>
                  </ul>
                  <p className="mt-4">
                    Extra gross profit per day = 80 × £0.80 × 0.65 = <strong className="text-white">£41.60</strong>. Against a
                    £699 + VAT kiosk, that is roughly 17 trading days to cover the hardware. The £25 + VAT monthly software fee
                    is an ongoing cost rather than part of the payback, but it does mean the kiosk has to clear about £1.35 a
                    day before it contributes anything at all.
                  </p>
                  <p className="mt-4 text-slate-400 text-base">
                    Change one assumption and the answer moves a long way. A thinner margin, a smaller uplift or fewer kiosk
                    orders turns weeks into months. Posso does not promise a payback period — the point of the method is that
                    you can work out your own, and challenge anyone who hands you theirs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant and takeaway examples */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">What this looks like in a restaurant and in a takeaway</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">A casual-dining restaurant</strong> usually puts one or two kiosks by the door
                  to absorb the walk-in queue while table service carries on behind them. On the numbers above that is
                  £1,198 + VAT or £1,897 + VAT upfront, and the kitchen is normally the constraint rather than the till — which
                  is why a{' '}
                  <Link href="/kitchen-display-system" className="text-primary hover:underline">kitchen display system</Link>{' '}
                  tends to matter more here than a third kiosk.
                </p>
                <p>
                  <strong className="text-white">A takeaway</strong> is a different shape. Collection peaks are short and sharp,
                  the menu is deeper in modifiers, and a lot of the volume already arrives through the marketplaces. One kiosk
                  at £1,198 + VAT often covers the counter, and the £45/month delivery-app integration usually does more for the
                  operation than a second screen. If that is you, start with{' '}
                  <Link href="/self-order-kiosks-for-takeaways" className="text-primary hover:underline">kiosks for takeaways</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          title="Self-Order Kiosk Cost — Frequently Asked Questions"
          schemaId={`${PAGE_URL}#faq`}
          faqs={[
            {
              question: 'How much does a self-order kiosk cost in the UK?',
              answer:
                'A standard indoor self-order kiosk is £699 + VAT per unit, bought outright. Behind it you need a complete EPOS system from £499 + VAT, so a single-kiosk setup starts at £1,198 + VAT. Software and support are from £25 + VAT a month, and card processing starts at 1% + 10p on your turnover.',
            },
            {
              question: 'Is there a monthly fee for a self-order kiosk?',
              answer:
                'Yes. Software and support run from £25 + VAT a month, covering the ordering software, updates, the cloud back office and UK support. That figure is the same whether the order comes from the kiosk or the counter, so adding a kiosk does not add a second software fee to your bill.',
            },
            {
              question: 'What is included in the kiosk price?',
              answer:
                'The £699 + VAT covers the kiosk hardware itself — touchscreen, card reader and enclosure — with a 2-year hardware warranty. Your menu build, system configuration and staff training are included at no extra charge. On-site physical installation is the one thing quoted separately, because it depends on your site.',
            },
            {
              question: 'Does the kiosk price include installation?',
              answer:
                'No. Setup is included, installation is not, and the two are different things. Setup means building your menu, configuring the system and training your staff. Installation means the physical work on site — positioning, mounting, power and network runs — which is quoted per site because access and cabling vary so much.',
            },
            {
              question: 'Can I pay for a self-order kiosk monthly?',
              answer:
                'The hardware is bought rather than rented, but you can spread it on finance from £24.92 per week over 12, 24 or 36 months, subject to status. The software fee of £25 + VAT a month is separate and ongoing. There is no long-term contract lock-in and no punitive early exit fee.',
            },
            {
              question: 'What happens if I stop paying the monthly fee?',
              answer:
                'You keep the kiosk, because the hardware is yours once paid for. What stops is the service: the ordering software, the cloud back office and support all end with the subscription, which in practice means the unit stops working as a kiosk. It is worth knowing that before you buy rather than after.',
            },
            {
              question: 'How many kiosks do I need?',
              answer:
                'Most single sites start with one and add more once they can see where the queue actually forms. Two kiosks suit a venue with a sustained lunch peak; three or four suit high-volume quick service. Adding kiosks does not add software fees, so the decision is about floor space and peak demand rather than licensing.',
            },
            {
              question: 'How quickly does a self-order kiosk pay for itself?',
              answer:
                'That depends on your order volume, your uplift per order and your gross margin, so no honest answer exists without your numbers. Work it out as total cost divided by kiosk orders per day times uplift per order times gross margin. Use gross margin, not revenue — dividing by revenue overstates payback dramatically.',
            },
            {
              question: 'Do outdoor kiosks cost the same?',
              answer:
                'No. An IP65 outdoor kiosk is a different specification — dust-tight, water-resistant and fitted with a sunlight-readable screen — and it is quoted separately from the £699 + VAT indoor unit. If you are trading at a market, a festival or a food truck pitch, budget for the outdoor spec rather than the indoor price.',
            },
            {
              question: 'Do I need a kitchen display system as well?',
              answer:
                'Not necessarily. The complete system already includes a kitchen printer, and many takeaways run on paper perfectly well. A 21-inch kitchen display screen at £399 + VAT earns its place when ticket volume makes paper hard to track, particularly where kiosk, counter and delivery orders all land in one queue.',
            },
          ]}
        />

        <DemoEnquiry />
      </main>

      <Footer />
    </div>
  );
}
