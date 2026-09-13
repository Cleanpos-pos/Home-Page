import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Phone,
  Fish,
  Percent,
  Users,
  Timer,
  Smartphone,
  Star,
  ClipboardList,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const SLUG = 'how-independent-chippies-compete-with-chains';
const URL = `https://www.posso.co.uk/blog/${SLUG}`;
const PUBLISHED = '2026-09-13';

export const metadata: Metadata = {
  title: 'How Independent Chippies Compete With the Chains',
  description:
    'A chain opened in Middleton with 45p fish and chips. The independent across the road sold out by 2.30pm. What that tells UK chip shops about competing on something other than price.',
  keywords: [
    'independent fish and chip shop vs chain',
    'how to compete with chain takeaways',
    'fish and chip shop EPOS',
    'chip shop POS system',
    'commission free online ordering takeaway',
    'delivery app commission UK',
    'fish and chip shop margins',
    'Mother Hubbard Middleton',
    'chippy competition UK',
    'takeaway loyalty scheme',
  ],
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: 'How Independent Chippies Compete With the Chains | Posso UK',
    description:
      'A national chain opened in Middleton selling fish and chips at 45p. The independent across the road had its best day in 28 years. Here is what independents can actually win on.',
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['https://www.posso.co.uk/about/paul-robinson'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How independent fish and chip shops compete with national chains in the UK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Independent Chippies Compete With the Chains',
    description:
      'A chain opened with 45p fish and chips. The independent across the road sold out early. What independents can actually win on.',
    images: ['/og-image.png'],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${URL}#article`,
  headline: 'A Chain Opened With 45p Fish and Chips. The Chippy Across the Road Sold Out by 2.30pm.',
  description:
    'Mother Hubbard’s opened in Middleton Shopping Centre with a 45p launch offer, yards from an independent whose owners had petitioned against it. Both had a record day. What UK independents can realistically compete on when a chain arrives, and the operational levers that close the gap.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.posso.co.uk/about/paul-robinson#person',
    name: 'Paul Robinson',
    jobTitle: 'Managing Director',
    url: 'https://www.posso.co.uk/about/paul-robinson',
    worksFor: { '@id': 'https://www.posso.co.uk/#organization' },
  },
  publisher: { '@id': 'https://www.posso.co.uk/#organization' },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  image: 'https://www.posso.co.uk/og-image.png',
  inLanguage: 'en-GB',
  articleSection: 'Independent Operators',
  keywords:
    'independent fish and chip shop, chain competition, chip shop EPOS, commission free online ordering, takeaway margins, loyalty',
  citation: [
    {
      '@type': 'NewsArticle',
      headline: 'Chippy chain to open in Middleton with 45p fish and chips despite petition to block it',
      publisher: { '@type': 'Organization', name: 'Manchester Evening News' },
      datePublished: '2026-09-12',
    },
    {
      '@type': 'NewsArticle',
      headline: "Why petition has been launched to stop Mother Hubbard's opening a chippy in Middleton",
      publisher: { '@type': 'Organization', name: 'Rochdale Times' },
      url: 'https://www.rochdaletimes.co.uk/why-petition-has-been-launched-to-stop-mother-hubbards-opening-a-chippy-in-middleton/',
      datePublished: '2025-08-08',
    },
    {
      '@type': 'NewsArticle',
      headline: "Double treat for town's fish and chip lovers",
      publisher: { '@type': 'Organization', name: 'Rochdale Times' },
      url: 'https://www.rochdaletimes.co.uk/double-treat-for-towns-fish-and-chip-lovers/',
      datePublished: '2026-09-13',
    },
  ],
  about: [
    { '@type': 'Thing', name: 'Fish and chip shop' },
    { '@type': 'Thing', name: 'Independent retail competition' },
  ],
};

const cannotWin = [
  { area: 'Unit cost of fish, potatoes and oil', why: 'Group buying power across dozens of sites.' },
  { area: 'Loss-leading launch offers', why: 'Head office absorbs a 45p day as a marketing line.' },
  { area: 'Paid advertising budget', why: 'National spend, professional creative, agency media buying.' },
  { area: 'Shopfit and signage', why: 'Capital budget and a standard format rolled out at scale.' },
];

const canWin = [
  {
    icon: Timer,
    title: 'Speed at the counter on a Friday',
    description:
      'Queue length decides who walks. Fewer taps per order, saved customer details and pre-orders collected at a set time keep the line moving when it matters.',
  },
  {
    icon: Percent,
    title: 'The commission you stop paying',
    description:
      'Aggregator commission of up to 35% per order is the single biggest margin leak on most takeaway P&Ls. Every order moved to your own site keeps that money in the business.',
  },
  {
    icon: Users,
    title: 'Knowing who your customers are',
    description:
      'A chain gets a transaction. You can get a name, an order history and a reason to message them. Independents rarely use this, and it is the one asset head office cannot copy.',
  },
  {
    icon: Star,
    title: 'Local reputation and reviews',
    description:
      '28 years of goodwill filled a shop and sold it out by 2.30pm. Reviews and Google Business Profile are where that goodwill turns into new customers.',
  },
  {
    icon: Smartphone,
    title: 'Your own ordering channel',
    description:
      'Branded online ordering and click-and-collect under your own name, with your prices, your offers and your customer data.',
  },
  {
    icon: ClipboardList,
    title: 'Order accuracy at peak',
    description:
      'A missed portion on a busy teatime costs a remake, a refund and often the customer. Kitchen screens beat handwritten tickets when the shop is three-deep.',
  },
];

const firstNinetyDays = [
  {
    step: 'Capture the surge',
    detail:
      'When a chain opens, locals rally. That spike is worthless unless you capture it. Get names and mobile numbers on every order that week, via loyalty sign-up at the till or your online ordering site.',
  },
  {
    step: 'Move delivery customers to direct',
    detail:
      'Put a card in every aggregator bag offering a better deal for ordering direct next time. You are paying up to 35% for that order; paying 10% to keep the customer is a bargain.',
  },
  {
    step: 'Fix the queue, not the price',
    detail:
      'Time an average order end to end. If it is over 60 seconds at the counter, the till is costing you covers at peak, and cutting prices will not fix it.',
  },
  {
    step: 'Publish your collection times',
    detail:
      'Pre-order and timed collection is the feature chains push hardest and independents use least. It smooths the peak and stops walkaways.',
  },
  {
    step: 'Ask every happy customer for a review',
    detail:
      'The week a chain opens is the week your regulars are most motivated to defend you. A receipt prompt or an SMS after collection is enough.',
  },
  {
    step: 'Watch item-level margin, not takings',
    detail:
      'Fish price moves constantly. Know your gross margin per portion by size, and reprice before a bad quarter, not after it.',
  },
];

export default function IndependentChippiesVsChainsBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BlogBreadcrumb slug={SLUG} title="How Independent Chippies Compete With the Chains" />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Fish className="w-3 h-3 mr-2" />
              INDEPENDENT OPERATORS
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              A Chain Opened With 45p Fish and Chips. The Chippy Across the Road Sold Out by 2.30pm.
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl">
              A national chain moved into Middleton Shopping Centre with a launch offer no independent could match. The
              independent yards away, whose owners had petitioned to stop it, had one of the best days in its history.
              Both things are true, and both are worth understanding if a chain is heading for your high street.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-sm text-slate-500">
              <span>
                By{' '}
                <Link href="/about/paul-robinson" className="text-slate-300 hover:text-primary transition-colors">
                  Paul Robinson
                </Link>
                , Managing Director, Posso Ltd
              </span>
              <span className="hidden sm:inline">|</span>
              <time dateTime={PUBLISHED}>13 September 2026</time>
              <span className="hidden sm:inline">|</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* Short answer card for AI extraction */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-primary/30 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">In short</p>
              <p className="text-slate-200 text-lg leading-relaxed">
                Mother Hubbard&apos;s, a fish and chip chain founded in Bradford in 1972 with around 47 company stores and
                over 150 franchise sites, opened in Middleton Shopping Centre with fish and chips at 45p for the first
                1,000 customers. The owners of nearby independent Middleton Fish Bar had petitioned against the opening,
                citing bulk-buying power, advertising budgets and delivery commission of up to 35% per order. On opening
                day the independent was so busy it sold out and closed at 2.30pm. The lesson for UK chip shops is that a
                chain cannot be beaten on unit cost or launch offers, but can be beaten on speed of service, order
                accuracy, direct customer relationships and commission-free online ordering.
              </p>
              <p className="text-slate-500 text-sm mt-4">
                Reported by the Manchester Evening News (&quot;Chippy chain to open in Middleton with 45p fish and chips
                despite petition to block it&quot;) and by Mike Crutchley for the Rochdale Times:{' '}
                <a
                  href="https://www.rochdaletimes.co.uk/why-petition-has-been-launched-to-stop-mother-hubbards-opening-a-chippy-in-middleton/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline hover:text-primary transition-colors"
                >
                  the petition
                </a>{' '}
                and{' '}
                <a
                  href="https://www.rochdaletimes.co.uk/double-treat-for-towns-fish-and-chip-lovers/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline hover:text-primary transition-colors"
                >
                  opening day
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white !mt-0">What happened in Middleton?</h2>
              <p>
                Mother Hubbard&apos;s opened a branch in Middleton Shopping Centre with a launch promotion of fish and
                chips at 45p for the first 1,000 customers. Queues reportedly ran back towards the bus station.
              </p>
              <p>
                A short walk away sits Middleton Fish Bar, run by Paul and Caroline High. Last summer the couple launched
                a petition against the chain opening so close. Caroline said they were &quot;facing a very real and
                painful threat&quot;, and that independents do not have &quot;the power of bulk buying, slick
                advertising, or the ability to sell food for next to nothing&quot;. She pointed to rising gas and
                electricity costs that had the shop operating at a loss, and to delivery platform commission of up to 35%
                per order.
              </p>
              <p>
                Then opening day came, and the town turned out for the independent. Middleton Fish Bar sold out and shut
                at 2.30pm. &quot;Middleton showed up,&quot; the owners said afterwards, describing the day as
                &quot;busy, chaotic, emotional. And it was absolutely brilliant.&quot;
              </p>
              <p>
                Both stories are real, and neither is the whole picture. A rally day is not a trading year. The question
                for every independent watching this is what happens in month three, when the 45p offer is a memory and
                the chain is simply another option on the same street.
              </p>

              <h2 className="text-3xl font-bold text-white">Why can a chain sell fish and chips at 45p?</h2>
              <p>
                Because it is not selling fish and chips. It is buying a queue, a local news story and a database of
                first-time customers, and booking the cost to marketing. A single site absorbing that loss is gambling
                with its own working capital; a group with 150+ locations is running a line item.
              </p>
              <p>
                That is worth saying plainly because it defines the boundary. There is a list of things an independent
                will not win, and pretending otherwise burns cash:
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-700/50 mt-8">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-900/60 text-white text-sm uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Where the chain wins</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {cannotWin.map((row) => (
                    <tr key={row.area}>
                      <td className="px-5 py-4 font-medium text-white align-top">{row.area}</td>
                      <td className="px-5 py-4 align-top">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300 leading-relaxed mt-10">
              <p>
                Discounting into that is a losing trade. The ground worth fighting on is somewhere else entirely.
              </p>
            </div>
          </div>
        </article>

        {/* What independents can win on */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-4">
              What an independent chippy can actually win on
            </h2>
            <p className="text-slate-400 text-center mb-10 text-lg max-w-2xl mx-auto">
              Six areas where a single site can out-operate a national chain — most of them running through the till.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {canWin.map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission maths */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white !mt-0">The 35% problem</h2>
              <p>
                Caroline High named the number most operators avoid saying out loud: commission of up to 35% per order on
                delivery platforms. On a £20 order that is up to £7 gone before a single potato is peeled. Run a
                meaningful share of turnover through those channels and it is entirely possible to be busy, exhausted and
                losing money.
              </p>
              <p>
                The aggregators are not worthless — they deliver reach, and for a new customer that first order has real
                value. The mistake is leaving the customer there. The job is to convert them into a direct customer on
                the second order:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  A card in every delivery bag with a better offer for ordering direct next time. Cheap, and the highest
                  converting marketing most takeaways ever run.
                </li>
                <li>
                  Your own{' '}
                  <Link href="/online-ordering" className="text-primary hover:underline">
                    online ordering site
                  </Link>{' '}
                  with no per-order commission, so the saving is yours to split between margin and a better price than
                  the platform.
                </li>
                <li>
                  A loyalty scheme that only works direct, so there is a running reason not to reopen the app.
                </li>
              </ul>
              <p>
                None of this is glamorous, and all of it compounds. Ten direct orders a day at £20, at 30% commission
                saved, is roughly £21,000 a year that stays in the business.
              </p>

              <h2 className="text-3xl font-bold text-white">Speed is the other price</h2>
              <p>
                On a Friday at 7pm, a customer choosing between two chippies is not comparing menus. They are looking at
                two queues. Every order you can take, pay for and fire to the range faster is a cover you keep.
              </p>
              <p>
                That is a till problem more often than a staffing one. Saved customers and repeat orders recalled in two
                taps, card payment on the same screen, and{' '}
                <Link href="/kitchen-display-system" className="text-primary hover:underline">
                  kitchen display screens
                </Link>{' '}
                instead of handwritten tickets — those are the seconds that add up across a two-hour peak. Add pre-order
                and timed collection and part of the peak is smoothed out before it arrives.
              </p>

              <h2 className="text-3xl font-bold text-white">Know the numbers before the chain does</h2>
              <p>
                Fish prices move. Energy prices move. The chain across the road knows its gross margin per portion to the
                penny and reprices accordingly. Most independents know their weekly takings and little else.
              </p>
              <p>
                At a minimum, an operator should be able to pull, without a spreadsheet evening: gross margin by portion
                size, sales by channel, sales by hour, and the top ten items by profit rather than by volume. If your
                current system cannot produce those, the reporting gap is a competitive gap. Our{' '}
                <Link href="/pos-for-fish-and-chip-shop" className="text-primary hover:underline">
                  guide to POS for fish and chip shops
                </Link>{' '}
                covers what to look for.
              </p>
            </div>
          </div>
        </section>

        {/* First 90 days */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              A chain just opened near you. What to do in the first 90 days.
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              The support surge is real but temporary. Use it to build something that outlasts it.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-700/50">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-900/60 text-white text-sm uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Move</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {firstNinetyDays.map((row) => (
                    <tr key={row.step}>
                      <td className="px-5 py-4 font-medium text-white align-top">{row.step}</td>
                      <td className="px-5 py-4 align-top">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 mt-6">
              Every one of those moves depends on the till knowing who ordered what, when, and through which channel. A
              cash register cannot do it.
            </p>
          </div>
        </section>

        {/* Closing thought */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white !mt-0">Is a chain opening nearby actually bad news?</h2>
              <p>
                Not always. A chain opening spends money telling a town to think about fish and chips, and not everyone
                who thinks about it walks into the chain. Middleton Fish Bar had a record day on the back of a competitor
                launch, because 28 years of goodwill turned free publicity into its own queue.
              </p>
              <p>
                The chain will still be there in March, though, and goodwill alone does not cover a gas bill. The
                independents that come through this are the ones that pair the loyalty they already have with the
                operational kit chains have used for years: fast service, accurate kitchens, their own ordering channel,
                and numbers they can actually see.
              </p>
              <p>
                Middleton showed up. The job now is to give them a reason to keep showing up in month six.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Compete with the chains, without chain prices</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Posso supplies ePOS, kitchen screens, self-order kiosks and commission-free online ordering to UK fish and
              chip shops. Faster counters, fewer mistakes at peak, and every online order coming straight to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pos-for-fish-and-chip-shop"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium"
              >
                See Fish &amp; Chip Shop POS <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+448081753956"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  href="/pos-for-fish-and-chip-shop"
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50"
                >
                  <p className="font-semibold text-white">Fish &amp; Chip Shop POS</p>
                  <p className="text-slate-400 text-sm mt-1">Built for chippies</p>
                </Link>
                <Link
                  href="/online-ordering"
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50"
                >
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Commission-free, your brand</p>
                </Link>
                <Link
                  href="/blog/epos-system-for-takeaway-commission-free"
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50"
                >
                  <p className="font-semibold text-white">Commission-Free Takeaway EPOS</p>
                  <p className="text-slate-400 text-sm mt-1">Stop paying per order</p>
                </Link>
                <Link
                  href="/blog/how-dominos-became-a-tech-company"
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50"
                >
                  <p className="font-semibold text-white">How Domino&apos;s Became a Tech Company</p>
                  <p className="text-slate-400 text-sm mt-1">Chain lessons for independents</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          title="Independent Chippies vs Chains — Frequently Asked Questions"
          faqs={[
            {
              question: 'How can an independent fish and chip shop compete with a national chain?',
              answer:
                'Not on price. Independents compete on speed of service at peak, order accuracy, direct customer relationships and their own commission-free online ordering. A chain can absorb a loss-leading launch offer; it cannot replicate a local reputation built over decades, and it has no advantage in how fast your counter moves on a Friday night.',
            },
            {
              question: 'How much commission do delivery apps charge UK takeaways?',
              answer:
                'Commission commonly runs up to around 35% per order depending on the platform and the services taken, such as delivery versus collection. On a £20 order that can be up to £7 before food and labour costs. Operators typically use aggregators to acquire customers, then work to move repeat orders to their own ordering channel.',
            },
            {
              question: 'Is a loss-leading offer a good way to respond when a chain opens nearby?',
              answer:
                'Rarely. A group with many sites can fund a launch offer from a marketing budget, while a single site funds it from working capital. Matching the offer trains customers to wait for discounts and damages margin at the worst possible time. Investing in speed, accuracy and direct ordering holds value after the offer ends.',
            },
            {
              question: 'What should a fish and chip shop EPOS system be able to do?',
              answer:
                'Take an order in a handful of taps, recall repeat customers and their usual order, take card payment on the same screen, send tickets to kitchen screens, handle pre-orders and timed collection, run commission-free online ordering under your own brand, and report gross margin by portion size and sales by channel and by hour.',
            },
            {
              question: 'Does a small chippy really need a kitchen display system?',
              answer:
                'It helps most where it hurts most: peak. Kitchen screens remove handwritten tickets, timestamp every order, show what is ageing and reduce missed items and remakes when the shop is three-deep. The payback is fewer refunds and faster turnaround rather than headcount.',
            },
            {
              question: 'What happened with Mother Hubbard’s in Middleton?',
              answer:
                'Mother Hubbard’s, a chain founded in Bradford in 1972, opened in Middleton Shopping Centre with a 45p fish and chips offer for the first 1,000 customers. The owners of nearby independent Middleton Fish Bar had previously petitioned against the opening. On opening day the independent was so busy it sold out and closed early at 2.30pm.',
            },
          ]}
        />

        {/* Author box */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8 text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">About the author</p>
              <p>
                <Link href="/about/paul-robinson" className="text-white font-semibold hover:text-primary transition-colors">
                  Paul Robinson
                </Link>{' '}
                is Managing Director of{' '}
                <Link href="/about" className="text-primary hover:underline">
                  Posso Ltd
                </Link>
                , a Leicester-based UK technology company supplying ePOS systems,{' '}
                <Link href="/self-order-kiosks" className="text-primary hover:underline">
                  self-order kiosks
                </Link>
                , online ordering, kitchen display systems and card payments to takeaways, QSRs, restaurants and schools.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
