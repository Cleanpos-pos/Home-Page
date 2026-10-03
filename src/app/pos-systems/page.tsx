import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { QuickAnswer } from '@/components/quick-answer';
import { PosSystemsLanding } from './pos-systems-landing';
import Link from 'next/link';
import { Metadata } from 'next';
import { posso, possoPrices } from '@/lib/possoFacts';
import { EposClusterLinks } from '@/components/epos-cluster-links';

/**
 * /pos-systems — intent: PACKAGES AND QUOTES (transactional).
 *
 * One of three pages that used to chase the same "POS system" head term with
 * near-identical copy. Each now has its own job:
 *   /pos                 the pillar — what an EPOS system is and does
 *   /pos-systems         this page — package prices and getting a quote
 *   /pos-companies-uk    choosing a provider
 *   /buy-epos-system-uk  buying vs leasing
 * It is also the Google Ads landing page, so the lead form stays above the fold.
 */

const PAGE_URL = 'https://www.posso.co.uk/pos-systems';
const TITLE = 'POS System Packages & Prices UK';
const DESCRIPTION = `Posso POS packages from ${posso.posPrice} + VAT, Full Service ${posso.fullServicePrice}, Fast Food Growth ${posso.fastFoodGrowthPrice}. Software from ${posso.softwareMonthly} + VAT/month. Get an itemised quote.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/pos-systems',
  },
  openGraph: {
    title: `${TITLE} | Posso`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso POS system packages and prices' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Posso`,
    description: DESCRIPTION,
    site: '@posso_uk',
    creator: '@posso_uk',
    images: ['/og-image.png'],
  },
};

const addOns: [string, string][] = [
  ['Twin-screen upgrade (customer-facing display)', `${posso.twinScreenPrice}`],
  ['21-inch kitchen display screen', `${posso.kdsPrice} + VAT`],
  ['Extra kitchen or receipt printer', `${posso.printerPrice} each`],
  ['Handheld waiter pad', posso.waiterPadPrice],
  ['Just Eat / Uber Eats / Deliveroo integration', `${posso.deliveryIntegrationMonthly}/month, unlimited orders`],
  ['AI phone ordering', `${posso.aiPhonePerOrder} per order`],
  ['Driver app', `${posso.driverAppPerDelivery} per delivery`],
  ['Card processing (Posso Pay)', `From ${posso.possoPayRate}, quoted on your card turnover`],
  ['Finance', `From ${posso.financeWeekly} a week, subject to status`],
];

const faqs = [
  {
    question: 'How much is a POS system package?',
    answer: `Posso packages start at ${posso.posPrice} + VAT for a single-screen POS system, ${posso.fullServicePrice} + VAT for the Restaurant Full Service package and ${posso.fastFoodGrowthPrice} + VAT for Fast Food Growth. Software is from ${posso.softwareMonthly} + VAT a month on top, and your exact figure is on your quote.`,
  },
  {
    question: 'What is in the base POS system package?',
    answer: `A single-screen touchscreen till with a kitchen printer, receipt printer and cash drawer, plus the software. ${posso.setupStatement}`,
  },
  {
    question: 'How do I get a quote?',
    answer: `Fill in the form on this page or call ${posso.phone}. We ask about your venue, order channels and menu, then send an itemised quote listing every one-off and monthly cost.`,
  },
  {
    question: 'Can I spread the cost?',
    answer: `Yes. Finance is available from ${posso.financeWeekly} a week, subject to status. Software stays at from ${posso.softwareMonthly} + VAT a month whichever way you pay for the hardware.`,
  },
  {
    question: 'Are setup and support included?',
    answer: `Yes. ${posso.setupStatement} UK support runs ${posso.supportHours}, and hardware carries a ${posso.warrantyYearsWord}-year warranty.`,
  },
  {
    question: 'How long until I am up and running?',
    answer: `${posso.goLiveStatement} Your menu is built and the equipment configured before it ships.`,
  },
];

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${PAGE_URL}#product`,
    name: 'Posso POS System Packages',
    description:
      'POS system packages for UK restaurants and takeaways: single-screen POS, Restaurant Full Service and Fast Food Growth packages, plus self-order kiosks.',
    brand: { '@type': 'Brand', name: 'Posso' },
    url: PAGE_URL,
    image: 'https://www.posso.co.uk/images/posso-epos-order-types-till.png',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(possoPrices.pos),
      highPrice: String(possoPrices.fastFoodGrowthPackage),
      priceCurrency: 'GBP',
      offerCount: '4',
      availability: 'https://schema.org/InStock',
      seller: { '@id': 'https://www.posso.co.uk/#organization' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'EPOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS System Packages', item: PAGE_URL },
    ],
  },
];

export default function PosSystemsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav
          items={[
            { label: 'ePOS Systems', href: '/pos' },
            { label: 'POS System Packages' },
          ]}
        />
        <PosSystemsLanding />

        <QuickAnswer>
          A Posso POS system package costs from {posso.posPrice} + VAT for a single-screen till with kitchen printer,
          receipt printer and cash drawer; the Restaurant Full Service package is {posso.fullServicePrice} + VAT and Fast
          Food Growth is {posso.fastFoodGrowthPrice} + VAT. Software is from {posso.softwareMonthly} + VAT a month on
          top, setup (menu build + configuration) is free, and finance is available from {posso.financeWeekly} a week.
        </QuickAnswer>

        {/* Add-ons */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What Can I Add to a Package?</h2>
                <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                  Any package can take extra screens, printers, handhelds and integrations at published prices. These are the
                  add-ons operators ask about most.
                </p>
              </div>
              <div className="glass-card rounded-2xl border border-slate-700/50 p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[26rem] border-collapse text-left text-sm">
                    <caption className="sr-only">Posso package add-ons and prices</caption>
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th scope="col" className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400">Add-on</th>
                        <th scope="col" className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addOns.map((row) => (
                        <tr key={row[0]} className="border-b border-slate-800 align-top last:border-b-0">
                          <th scope="row" className="py-3 pr-4 font-medium text-white">{row[0]}</th>
                          <td className="py-3 pr-4 text-slate-300">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mt-8 text-center">
                Still deciding on a supplier? Read{' '}
                <Link href="/pos-companies-uk" className="text-primary hover:underline">how to choose a POS company</Link>, weigh up{' '}
                <Link href="/buy-epos-system-uk" className="text-primary hover:underline">buying vs leasing</Link>, or see every
                cost on the <Link href="/epos-pricing-uk" className="text-primary hover:underline">EPOS pricing page</Link>.
                New to it all? Start with <Link href="/pos" className="text-primary hover:underline">what an EPOS system does</Link>.
              </p>
            </div>
          </div>
        </section>

        <EposClusterLinks />

        <FAQSection title="POS System Packages — Frequently Asked Questions" faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
}
