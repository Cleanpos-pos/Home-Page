import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Trophy, Quote, CalendarCheck, X, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

const PAGE_URL = 'https://www.posso.co.uk/best-restaurant-epos-system-uk';
const LAST_UPDATED_ISO = '2026-07-25';
const LAST_UPDATED_LABEL = 'July 2026';

export const metadata: Metadata = {
  title: 'Best Restaurant EPOS Systems UK (2026): Guide + Comparison',
  description:
    'Compare the best restaurant EPOS systems in the UK for 2026. What to look for, honest pricing, and why 500+ UK restaurants and takeaways run on Posso. Free demo.',
  keywords: [
    'best restaurant EPOS UK',
    'best restaurant EPOS system',
    'restaurant EPOS comparison',
    'restaurant EPOS system UK',
    'restaurant POS system UK',
    'compare restaurant EPOS systems',
  ],
  alternates: {
    canonical: '/best-restaurant-epos-system-uk',
  },
  openGraph: {
    title: 'Best Restaurant EPOS Systems UK (2026) | Posso',
    description:
      'A practical 2026 buyer’s guide to UK restaurant EPOS: what to look for, comparison table, honest pricing, and why 500+ UK venues run on Posso.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: '/images/posso_epos_integration.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Restaurant EPOS Systems UK (2026) | Posso',
    description:
      'What to look for in a UK restaurant EPOS, honest pricing, and a straight comparison of the leading systems.',
    images: ['/images/posso_epos_integration.png'],
  },
};

// Visible FAQ copy and FAQPage schema are generated from this single list — keep 1:1
const faqs = [
  {
    q: 'How much does a restaurant EPOS system cost in the UK?',
    a: 'Across the UK market, expect £25–£80 per month per till for software, plus hardware from around £300–£1,500 per station and card processing fees. Posso works differently: complete touchscreen EPOS terminals from £499 + VAT with setup, menu build and staff training included, or spread the cost on finance from £29.95 per week — with no lengthy auto-renewing leases.',
  },
  {
    q: 'What is the difference between EPOS and POS?',
    a: 'Nothing meaningful in the UK — EPOS (electronic point of sale) is simply the British term for a modern POS system. Both refer to the till software and hardware that take orders, process payments and report on sales.',
  },
  {
    q: 'Do I need separate systems for online ordering and delivery apps?',
    a: 'Not with Posso. Online orders from your own website and from Uber Eats, Deliveroo and Just Eat print or display in the kitchen automatically alongside in-house orders, so you don’t rekey anything or manage a shelf of tablets.',
  },
  {
    q: 'Can Posso replace my current till without downtime?',
    a: 'Yes. We build your menu in advance, install outside service hours where needed, and train your team on the day. Most single-site restaurants switch within one day.',
  },
  {
    q: 'Does Posso work for takeaways as well as dine-in restaurants?',
    a: 'Yes — Posso supports table service, counter service, collection, delivery and self-order kiosks from the same system, so it fits restaurants, takeaways, QSRs and cafés.',
  },
  {
    q: 'Is there a long contract?',
    a: 'No. Posso doesn’t lock you into long-term contracts with punitive exit fees — terms are clear and flexible, and hardware comes with a 2-year warranty. That’s a deliberate contrast with the 3–5 year auto-renewing hardware leases common among the biggest UK providers.',
  },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': PAGE_URL,
      url: PAGE_URL,
      name: 'Best Restaurant EPOS Systems UK (2026): Guide + Comparison',
      dateModified: LAST_UPDATED_ISO,
      lastReviewed: LAST_UPDATED_ISO,
      reviewedBy: {
        '@type': 'Person',
        '@id': 'https://www.posso.co.uk/about/paul-robinson#person',
        name: 'Paul Robinson',
        jobTitle: 'Managing Director',
        worksFor: { '@id': 'https://www.posso.co.uk/#organization' },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Best Restaurant EPOS Systems UK', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'Product',
      name: 'Posso Restaurant EPOS System',
      brand: { '@type': 'Brand', name: 'Posso' },
      description:
        'All-in-one restaurant EPOS for UK hospitality: till, kitchen display, self-order kiosks, online ordering and integrated card payments with UK-based support.',
      url: PAGE_URL,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GBP',
        lowPrice: '499',
        offerCount: '3',
        availability: 'https://schema.org/InStock',
      },
    },
  ],
};

const lookFor = [
  {
    title: 'Built for hospitality, not adapted retail software.',
    body: 'Course management, table plans, split bills, kitchen printing and delivery integrations should be native — not bolted on.',
  },
  {
    title: 'One platform, not five subscriptions.',
    body: 'If your till, online ordering, kiosk and card machine come from different vendors, you pay four bills and nobody owns the problem when they stop talking to each other.',
  },
  {
    title: 'Transparent payment costs.',
    body: 'Many “free” EPOS systems recover their cost through card processing margins. Always compare the effective card rate, not just the software fee.',
  },
  {
    title: 'UK support with real humans.',
    body: 'Ask any provider: what happens when the till goes down at 7pm Saturday? If the answer is a ticket queue, walk away.',
  },
  {
    title: 'No punitive contracts.',
    body: 'Watch for 3–5 year hardware leases with rolling auto-renewal — the most common complaint against the biggest UK providers.',
  },
];

type ComparisonCell = { label: string; state: 'yes' | 'partial' | 'no' };

const comparisonRows: {
  system: string;
  highlight?: boolean;
  bestFor: string;
  hospitality: ComparisonCell;
  ukSupport: ComparisonCell;
  builtIn: ComparisonCell;
}[] = [
  {
    system: 'Posso',
    highlight: true,
    bestFor: 'UK restaurants, takeaways & QSRs wanting one integrated platform',
    hospitality: { label: 'Yes — hospitality only', state: 'yes' },
    ukSupport: { label: 'Yes — UK phone, Mon–Fri 9am–9:30pm', state: 'yes' },
    builtIn: { label: 'Yes, native', state: 'yes' },
  },
  {
    system: 'Square for Restaurants',
    bestFor: 'New/very small venues wanting a free entry tier',
    hospitality: { label: 'Partly (general POS heritage)', state: 'partial' },
    ukSupport: { label: 'Limited', state: 'partial' },
    builtIn: { label: 'Add-ons', state: 'no' },
  },
  {
    system: 'Epos Now',
    bestFor: 'Mixed retail/hospitality',
    hospitality: { label: 'Partly', state: 'partial' },
    ukSupport: { label: 'Yes', state: 'yes' },
    builtIn: { label: 'Paid add-ons', state: 'no' },
  },
  {
    system: 'Lightspeed Restaurant',
    bestFor: 'Larger multi-site groups',
    hospitality: { label: 'Yes', state: 'yes' },
    ukSupport: { label: 'Yes', state: 'yes' },
    builtIn: { label: 'Add-ons, higher cost', state: 'partial' },
  },
  {
    system: 'Clover',
    bestFor: 'Venues led by their card acquirer',
    hospitality: { label: 'Partly', state: 'partial' },
    ukSupport: { label: 'Via acquirer', state: 'partial' },
    builtIn: { label: 'App marketplace', state: 'partial' },
  },
];

const switchingSteps = [
  { step: '1', title: 'Free demo', body: '20 minutes, online or on-site.' },
  { step: '2', title: 'Menu build', body: 'We configure your full menu, modifiers and pricing.' },
  { step: '3', title: 'Installation & training', body: 'On-site install and staff training, typically same day.' },
  { step: '4', title: 'Go live with support', body: 'UK phone support from day one.' },
];

function CellIcon({ state }: { state: ComparisonCell['state'] }) {
  if (state === 'yes') return <Check className="h-4 w-4 text-green-400 shrink-0" aria-hidden />;
  if (state === 'partial') return <Minus className="h-4 w-4 text-amber-400 shrink-0" aria-hidden />;
  return <X className="h-4 w-4 text-slate-500 shrink-0" aria-hidden />;
}

export default function BestRestaurantEposSystemUkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Best Restaurant EPOS Systems UK' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Trophy className="w-3 h-3 mr-2" />
                2026 BUYER&apos;S GUIDE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  The Best Restaurant EPOS Systems{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  in the UK
                </span>
              </h1>
              <p className="text-lg text-slate-400">
                Last updated: {LAST_UPDATED_LABEL} · Reviewed by{' '}
                <Link href="/about/paul-robinson" className="text-primary hover:underline">
                  Paul Robinson, Managing Director, Posso Ltd
                </Link>
              </p>
              <div className="space-y-4 text-lg text-slate-300 text-left">
                <p>
                  Choosing a restaurant EPOS system is one of the biggest operational decisions you&apos;ll make.
                  The right one speeds up service, cuts order errors and gives you live visibility of sales and
                  stock. The wrong one locks you into contracts, hidden transaction fees and support lines that
                  don&apos;t answer on a Friday night.
                </p>
                <p>
                  This guide covers what actually matters when comparing EPOS systems for UK restaurants,
                  takeaways and cafés — and where Posso fits against the big names.
                </p>
              </div>
              <div className="glass-card rounded-2xl border border-primary/30 p-6 text-left w-full">
                <p className="text-slate-300">
                  <strong className="text-white">In a hurry?</strong> Posso is a UK-based, hospitality-only EPOS
                  platform combining <Link href="/pos" className="text-primary hover:underline">EPOS till</Link>,
                  kitchen display, self-order kiosks, online ordering and card payments in one system, with UK
                  phone support and on-site installation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 px-6 py-3 font-medium">
                    Book a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 px-6 py-3 font-medium transition-colors">
                    <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956 — Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to look for */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-10">
                What to Look for in a Restaurant EPOS System
              </h2>
              <div className="space-y-6">
                {lookFor.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <Check className="h-6 w-6 text-green-400 shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      <strong className="text-white">{item.title}</strong> {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">
                Best Restaurant EPOS Systems UK: Quick Comparison
              </h2>
              <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
                How the leading UK systems stack up on the factors that decide most purchases.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-700/50">
                <table className="w-full min-w-[760px] text-left text-sm md:text-base">
                  <thead>
                    <tr className="bg-slate-900/80 text-slate-300">
                      <th scope="col" className="p-4 font-semibold">System</th>
                      <th scope="col" className="p-4 font-semibold">Best for</th>
                      <th scope="col" className="p-4 font-semibold">Hospitality-specific</th>
                      <th scope="col" className="p-4 font-semibold">UK phone support</th>
                      <th scope="col" className="p-4 font-semibold">Kiosks + online ordering built in</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr
                        key={row.system}
                        className={
                          row.highlight
                            ? 'bg-primary/10 border-t border-slate-700/50'
                            : 'border-t border-slate-700/50'
                        }
                      >
                        <th scope="row" className="p-4 font-bold text-white whitespace-nowrap">
                          {row.system}
                        </th>
                        <td className="p-4 text-slate-300">{row.bestFor}</td>
                        <td className="p-4 text-slate-300">
                          <span className="flex items-center gap-2"><CellIcon state={row.hospitality.state} />{row.hospitality.label}</span>
                        </td>
                        <td className="p-4 text-slate-300">
                          <span className="flex items-center gap-2"><CellIcon state={row.ukSupport.state} />{row.ukSupport.label}</span>
                        </td>
                        <td className="p-4 text-slate-300">
                          <span className="flex items-center gap-2"><CellIcon state={row.builtIn.state} />{row.builtIn.label}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-4 text-center">
                Comparison based on publicly available information, {LAST_UPDATED_LABEL}. Always confirm current
                pricing and terms with each provider.
              </p>
            </div>
          </div>
        </section>

        {/* Why Posso */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center">
                Why UK Restaurants Choose Posso
              </h2>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">One platform for the whole operation</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  EPOS till, kitchen display, self-order kiosks,{' '}
                  <Link href="/online-ordering" className="text-primary hover:underline">online ordering</Link>,{' '}
                  <Link href="/credit-card-machines" className="text-primary hover:underline">card machines</Link>{' '}
                  and reporting in a single system with one login and one support number. No integration fees, no
                  vendor blame games.
                </p>
              </div>

              <figure className="rounded-2xl overflow-hidden border border-slate-700/50">
                <Image
                  src="/images/posso-epos-order-types-till.png"
                  width={1914}
                  height={912}
                  alt="Posso restaurant EPOS till screen showing Eat In, Takeaway and Delivery order types with manager operations"
                  className="w-full h-auto"
                />
                <figcaption className="text-sm text-slate-500 bg-slate-900/60 px-4 py-3">
                  The Posso One till — start every order as Eat In, Takeaway or Delivery from one screen.
                </figcaption>
              </figure>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Keep your delivery revenue</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Marketplace apps take 14–35% of every order. Posso&apos;s branded{' '}
                  <Link href="/online-ordering" className="text-primary hover:underline">online ordering</Link>{' '}
                  runs on your own website at low commission, and{' '}
                  <Link href="/delivery-integrations" className="text-primary hover:underline">delivery integrations</Link>{' '}
                  push Uber Eats, Deliveroo and Just Eat orders straight to the kitchen — no more tablet farm.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Self-order kiosks that pay for themselves</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  <Link href="/self-order-kiosks" className="text-primary hover:underline">Self-order kiosks</Link>{' '}
                  typically lift average order value 20–30% through consistent upselling, and cut queue
                  abandonment at peak. Posso kiosks run on the same menu database as your till — update once,
                  everywhere.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">UK-based support and on-site installation</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Installation, menu build, staff training and ongoing support are handled by Posso&apos;s UK
                  team, not an offshore ticket queue. Most sites go live in under a day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Honest pricing</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Complete touchscreen EPOS terminals from <strong className="text-white">£499 + VAT</strong> and
                  self-order kiosks from <strong className="text-white">£699 + VAT</strong>, with setup, menu
                  build and staff training included and a 2-year warranty. Spread the cost from{' '}
                  <strong className="text-white">£29.95 per week</strong> using the{' '}
                  <Link href="/finance" className="text-primary hover:underline">finance calculator</Link>. No
                  hidden transaction fees on your own online orders.
                </p>
              </div>

              <figure className="rounded-2xl overflow-hidden border border-slate-700/50">
                <Image
                  src="/images/posso-epos-dashboard.png"
                  width={1906}
                  height={914}
                  alt="Posso restaurant EPOS back-office dashboard showing live sales, orders, average ticket and terminal status"
                  className="w-full h-auto"
                />
                <figcaption className="text-sm text-slate-500 bg-slate-900/60 px-4 py-3">
                  Live sales, orders and terminals in the Posso One back office — from any device.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Customer proof */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8 md:p-10 text-center">
              <Quote className="w-10 h-10 text-primary/50 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl italic text-slate-100 font-light leading-relaxed">
                &quot;Implementing the Posso POS and kiosk system was seamless. Our staff love how intuitive it
                is, and our customers appreciate the quicker service. We&apos;ve seen a noticeable increase in
                average order value since installing the self-order kiosks.&quot;
              </blockquote>
              <p className="font-bold text-slate-50 text-lg mt-6">Stonehenge Inn</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">Proprietor, Stonehenge Inn</p>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">Who Posso Is Built For</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Independent restaurants and{' '}
                <Link href="/multi-site-epos-uk" className="text-primary hover:underline">
                  multi-site groups
                </Link>
                , takeaways and QSRs, cafés and dessert bars, plus{' '}
                <Link href="/solutions/franchise-pos-systems" className="text-primary hover:underline">
                  franchise operations
                </Link>{' '}
                needing central menu and reporting control. If you&apos;re{' '}
                <Link href="/replace-old-epos-system" className="text-primary hover:underline">
                  moving off a legacy till
                </Link>{' '}
                or a generic retail POS, we migrate your menu and product data as part of setup.
              </p>
            </div>
          </div>
        </section>

        {/* Switching steps */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-12">
                Switching to Posso: What Happens
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {switchingSteps.map((s) => (
                  <div key={s.step} className="glass-card rounded-xl border border-slate-700/50 p-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold mb-4">
                      {s.step}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm">{s.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-center mt-8">
                Coming from Epos Now specifically? Read the honest{' '}
                <Link href="/posso-vs-epos-now" className="text-primary hover:underline">
                  Posso vs Epos Now comparison
                </Link>{' '}
                and our{' '}
                <Link href="/epos-now-alternative" className="text-primary hover:underline">
                  Epos Now alternative guide
                </Link>{' '}
                — including where they win.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ — visible answers, schema generated from the same list */}
        <section className="py-20 bg-slate-900/30" aria-label="Frequently asked questions">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                    <p className="text-slate-300 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Ready to See the Best Restaurant EPOS in Action?
              </h2>
              <p className="text-xl text-slate-300">
                Book a free, no-obligation demo and see why 500+ UK hospitality businesses run on Posso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  <CalendarCheck className="mr-2 h-5 w-5" /> Book Your Free Demo
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956 — Free
                </a>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
