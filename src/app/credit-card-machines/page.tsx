import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { CreditCardMachinesHero } from '@/components/credit-card-machines-hero';
import { CreditCardMachinesContent } from '@/components/sections/credit-card-machines-content';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { CreditCard, Smartphone, Layers, Banknote, ShieldCheck, Wifi } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrated Credit Card Machines | Teya, Dojo, Clover',
  description: 'Supply and integration of industry-leading credit card machines from Teya, Dojo, and Clover. Fast, secure, and fully integrated with your Posso EPOS system.',
  alternates: {
    canonical: '/credit-card-machines',
  },
  openGraph: {
    title: 'Credit Card Machines & Card Readers UK | Teya, Dojo, Clover',
    description:
      'Posso supplies and integrates fast, secure credit card machines and Clover card terminals for UK businesses. Contactless, Apple Pay, Google Pay, and full EPOS integration.',
    url: 'https://www.posso.co.uk/credit-card-machines',
    type: 'website',
    images: [
      {
        url: '/images/posso_clover_flex_hospitality.png',
        width: 1200,
        height: 1200,
        alt: 'Posso Clover Flex card machine taking a contactless payment in a UK hospitality venue, fully integrated with the Posso EPOS system',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Machines & Card Readers UK | Teya, Dojo, Clover',
    description: 'Fast, secure credit card machines and Clover card terminals with full EPOS integration. Contactless, Apple Pay, and Google Pay.',
    images: ['/images/posso_clover_flex_hospitality.png'],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Posso Card Machines & Clover Card Terminals',
    description:
      'Credit card machines and Clover card terminals for UK businesses. Fast, secure card readers supporting contactless, chip & PIN, Apple Pay, and Google Pay, fully integrated with the Posso EPOS system.',
    url: 'https://www.posso.co.uk/credit-card-machines',
    image: 'https://www.posso.co.uk/images/posso_clover_flex_hospitality.png',
    category: 'Payment Terminals',
    brand: {
      '@type': 'Brand',
      name: 'Posso',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Posso Ltd',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: 'https://www.posso.co.uk/images/posso_clover_flex_hospitality.png',
    url: 'https://www.posso.co.uk/credit-card-machines',
    name: 'Posso Clover Flex Card Machine - Integrated Card Reader UK',
    description: 'Posso Clover Flex card machine taking a contactless payment in a UK hospitality venue, fully integrated with the Posso EPOS system for end-to-end payment and sales reporting.',
    width: 1200,
    height: 1200,
    encodingFormat: 'image/png',
    creator: {
      '@type': 'Organization',
      name: 'Posso Ltd',
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Posso Ltd',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Card Machines', item: 'https://www.posso.co.uk/credit-card-machines' },
    ],
  },
];

const cardMachineFeatures = [
  { icon: Smartphone, title: 'Contactless, Apple Pay & Google Pay', description: 'Every contactless card machine we supply accepts tap-to-pay, Apple Pay, Google Pay, chip & PIN, and mobile wallets, so customers pay however they prefer and your queues keep moving.' },
  { icon: CreditCard, title: 'Clover Card Terminal Range', description: 'From the Clover Flex portable card machine to the Clover Mini countertop terminal, we match the right Clover card terminal to how your business actually takes payments.' },
  { icon: Layers, title: 'Card Machine with EPOS Integration', description: 'Connect your card machine with EPOS so the sale total is sent to the terminal automatically — no double-keying, no mismatched takings, and one accurate sales report.' },
  { icon: Banknote, title: 'Competitive Transaction Fees', description: 'We work with Teya, Dojo, and Clover to secure transparent card machine transaction fees, with a clear quote based on your turnover and no hidden costs.' },
  { icon: ShieldCheck, title: 'PCI-Secure Payments', description: 'Every credit card machine is PCI DSS compliant with end-to-end encryption and tokenisation, keeping cardholder data protected on every transaction.' },
  { icon: Wifi, title: '4G + WiFi Connectivity', description: 'Portable card machines run on both WiFi and 4G mobile data, so a card reader for small business works at the table, on the shop floor, at events, and out on deliveries.' },
];

export default function CreditCardMachinesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Card Machines' }]} />
        <CreditCardMachinesHero />
        <CreditCardMachinesContent />

        {/* Why UK Businesses Choose Posso Card Machines */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <figure>
                <img
                  src="/images/posso_clover_integration_epos.png"
                  alt="Posso Clover card terminal integrated with the Posso EPOS till, showing the sale total sent automatically to the card machine for a UK business"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full"
                />
                <figcaption className="text-slate-500 text-sm mt-3 text-center">
                  A Posso Clover card terminal integrated with the till — the sale total flows straight to the card machine, with no re-keying.
                </figcaption>
              </figure>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                  Why UK Businesses Choose Posso Card Machines
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Choosing a <strong className="text-white">credit card machine</strong> is about more than tapping a card. UK businesses pick Posso because we supply <strong className="text-white">Clover card terminals</strong> — including the Clover Flex portable card machine and the Clover Mini countertop terminal — and match the right card reader to how you actually trade, whether that&apos;s tableside, on the counter, or out on deliveries.
                  </p>
                  <p>
                    We are upfront about <strong className="text-white">transaction rates</strong>. Rather than hiding costs in confusing tariffs, we work with Teya, Dojo, and Clover to secure <strong className="text-white">competitive, transparent card machine transaction fees</strong> and give you a clear quote based on your monthly card turnover — so you always know exactly what you pay to accept payments.
                  </p>
                  <p>
                    Best of all, every <strong className="text-white">card machine with EPOS integration</strong> talks directly to your Posso till. The sale total is sent to the terminal automatically, so there&apos;s <strong className="text-white">no double-keying</strong> and no mismatched takings, while <strong className="text-white">fast next-day settlement</strong> keeps your cash flow healthy and your sales reports accurate across every location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Machine Features Grid */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Card Machines Built for UK Hospitality &amp; Retail
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every credit card machine we supply is secure, fully integrated, and ready to take payments from day one — whether you run a busy café, a shop, or a multi-site venue.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {cardMachineFeatures.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get a Posso Card Machine */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How to Get a Posso Card Machine</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Getting set up with a contactless card machine for your business takes days, not weeks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Enquire', desc: 'Tell us about your business and how you take payments — we recommend the right card machine and provider.' },
                { step: '2', title: 'Quick Application', desc: 'Complete a fast, straightforward application with a clear, transparent quote on transaction fees.' },
                { step: '3', title: 'Delivered & Set Up', desc: 'Your card reader arrives pre-configured and we integrate it with your Posso EPOS system.' },
                { step: '4', title: 'Start Taking Payments', desc: 'Accept contactless, Apple Pay, Google Pay, and chip & PIN with fast settlement from day one.' },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <p className="text-slate-400">
              Bundling payments with a new till? Compare the{' '}
              <Link href="/best-restaurant-epos-system-uk" className="text-primary hover:underline">
                best restaurant EPOS systems in the UK
              </Link>{' '}
              to see integrated card machines, kiosks and online ordering as one platform. For the
              community's view — reader recommendations, the warnings, the fund-hold stories — read{' '}
              <Link href="/card-machines-what-owners-say" className="text-primary hover:underline">
                what small business owners actually say about card machines
              </Link>.
              Taking Teya rates? See{' '}
              <Link href="/epos-with-teya" className="text-primary hover:underline">EPOS that works with Teya</Link>.
            </p>
          </div>
        </section>

        <FAQSection title="Card Machines — Frequently Asked Questions" faqs={[
          { question: 'What credit card machines and card readers do you offer in the UK?', answer: 'Posso supplies industry-leading credit card machines and card readers from Teya, Dojo, and Clover. Whether you need a portable card reader for table service, a countertop terminal for retail, or a Clover Flex for hospitality, we match the right card machine to your business and integrate it fully with your Posso EPOS system.' },
          { question: 'How do Clover card terminals work with my Posso EPOS system?', answer: 'Clover card terminals integrate directly with the Posso EPOS system, so the sale total is sent automatically to the card machine — no rekeying, no mistakes. Payments reconcile against your sales reports in real time, giving you one accurate view of takings across every till, terminal, and location.' },
          { question: 'What are the transaction fees and card processing rates?', answer: 'Transaction fees depend on the provider, card type, and your business volume. We work with Teya, Dojo, and Clover to secure competitive processing rates and will give you a clear, transparent quote with no hidden costs. Contact us for a tailored rate based on your monthly card turnover.' },
          { question: 'Are there long contracts or can I get a flexible agreement?', answer: 'Contract terms vary by payment provider. We help you compare options and find an agreement that suits your business, including flexible terms where available. We will always explain the contract length, fees, and exit terms up front so there are no surprises.' },
          { question: 'Do the card machines accept Apple Pay, Google Pay, and contactless?', answer: 'Yes. Every card machine we supply accepts contactless payments, Apple Pay, Google Pay, chip & PIN, and mobile wallets, so your customers can pay however they prefer. Contactless and digital wallet payments are processed quickly and securely to keep queues moving.' },
          { question: 'Can the card machines be used away from the till or for deliveries?', answer: 'Yes. Portable card readers such as the Clover Flex run on Wi-Fi and mobile data, so you can take secure payments at the table, on the shop floor, at events, or out on deliveries — all while staying integrated with your Posso EPOS reporting.' },
        ]} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
