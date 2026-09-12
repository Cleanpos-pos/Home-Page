import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, X, Minus, MessageSquare, Phone, ArrowRight, ShieldQuestion, Info } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

const SLUG = 'best-pos-system-reddit';
const URL = `https://www.posso.co.uk/${SLUG}`;
const PUBLISHED = '2026-09-12';
const REVIEWED = '2026-09-12';

export const metadata: Metadata = {
  title: 'Best POS Systems According to Reddit Users | UK Guide 2026',
  description:
    'We analysed real Reddit discussions about restaurant and takeaway POS systems. See common recommendations, complaints and what UK businesses should check before choosing an EPOS system.',
  keywords: [
    'best POS system Reddit',
    'best restaurant POS system Reddit',
    'takeaway POS system Reddit',
    'POS system recommendations Reddit',
    'best EPOS system UK Reddit',
    'Reddit POS reviews',
    'affordable POS system for restaurants',
    'best takeaway POS system UK',
  ],
  alternates: { canonical: `/${SLUG}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'What Reddit Users Really Say About POS Systems (UK Guide 2026)',
    description:
      'A fair summary of recurring themes in public Reddit discussions about restaurant and takeaway POS systems, with links to the original threads. Produced by Posso.',
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    images: [{ url: '/images/posso_epos_integration.png', width: 1200, height: 630, alt: 'Posso One EPOS system for UK restaurants and takeaways' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best POS Systems According to Reddit Users | UK Guide 2026',
    description: 'Recurring recommendations and complaints from real Reddit POS discussions, plus a UK buyer’s checklist.',
    images: ['/images/posso_epos_integration.png'],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${URL}#article`,
    headline: 'What Reddit Users Really Say About POS Systems',
    description:
      'A summary of recurring themes in public Reddit discussions about restaurant and takeaway POS systems, with links to the original threads and a UK buyer’s checklist. Produced by Posso, a UK hospitality POS provider.',
    author: { '@type': 'Organization', name: 'Posso Editorial Team', url: 'https://www.posso.co.uk/about' },
    publisher: {
      '@type': 'Organization',
      name: 'Posso Ltd',
      logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' },
    },
    datePublished: PUBLISHED,
    dateModified: REVIEWED,
    url: URL,
    mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
    image: 'https://www.posso.co.uk/images/posso_epos_integration.png',
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'POS Systems on Reddit', item: URL },
    ],
  },
];

// Real, public Reddit threads surfaced via Google UK (Sept 2026). We link them as
// examples and paraphrase the recurring themes — no quotes, usernames or vote counts.
const quickFindings = [
  { label: 'Often recommended for general small businesses', value: 'Square', why: 'Praised in threads for quick setup and no monthly fee to start; fewer hospitality features on the free tier.' },
  { label: 'Often recommended for full-service restaurants', value: 'Toast / Lightspeed', why: 'Named for table management and reporting — though opinions genuinely split, and both carry higher ongoing cost.' },
  { label: 'Matters most for takeaways', value: 'Delivery integration', value2: '(Just Eat, Uber Eats, Deliveroo)', why: 'The feature simpler systems most often lack; UK takeaway threads weight it heavily.' },
  { label: 'Matters most for complex table service', value: 'Floor plans & course firing', why: 'Full-service owners prioritise table management over price.' },
  { label: 'For businesses wanting local UK support', value: 'A UK-based provider', why: 'Support responsiveness in UK hours is a recurring deciding factor — Posso is one UK option.' },
  { label: 'Most common complaints across providers', value: 'Fees, support, contracts', why: 'Hidden/processing fees, slow support, long contracts, payment lock-in and offline reliability come up again and again.' },
];

type Theme = { topic: string; summary: string; threads: { t: string; url: string }[] };
const themes: Theme[] = [
  {
    topic: 'Price and hidden costs',
    summary:
      'The most repeated warning is that a low headline price can hide add-ons: per-feature charges, hardware costs and card-processing margins. One discussion notes a processing rate quoted at around 2% working out higher in practice, so owners are advised to total the real monthly cost, not the sticker price.',
    threads: [
      { t: 'r/POS — What is the consensus on EposNow?', url: 'https://www.reddit.com/r/POS/comments/1p96928/what_is_the_consensus_on_eposnow/' },
      { t: 'r/smallbusinessuk — Which POS system should I choose?', url: 'https://www.reddit.com/r/smallbusinessuk/comments/1gbqamk/which_pos_system_should_i_choose/' },
    ],
  },
  {
    topic: 'Reliability and offline mode',
    summary:
      'Operators describe payment-terminal connection errors and tills that struggle to cash up at end of day. For food businesses the recurring lesson is to check whether the system keeps taking orders when the internet drops, rather than freezing mid-service.',
    threads: [
      { t: 'r/ePOS — Sick of Epos Now, UK software suggestions?', url: 'https://www.reddit.com/r/ePOS/comments/1ii75ra/epos_software_uk_market_suggestions_sick_of_epos/' },
    ],
  },
  {
    topic: 'Customer support',
    summary:
      'Support responsiveness is one of the most common themes — several UK threads describe slow help when something breaks during service. Owners repeatedly say they wish they had tested support before committing.',
    threads: [
      { t: 'r/smallbusinessuk — POS for a restaurant and bar business', url: 'https://www.reddit.com/r/smallbusinessuk/comments/1u85jwq/pos_for_restaurant_and_bar_business/' },
    ],
  },
  {
    topic: 'Ease of use and staff training',
    summary:
      'Fast staff training is a priority, especially for cafés and takeaways with turnover. Simpler systems are praised for setup, while feature-rich platforms are acknowledged to have a steeper learning curve — a trade-off, not a clear winner.',
    threads: [
      { t: 'r/smallbusiness — What POS system are you using for your small business?', url: 'https://www.reddit.com/r/smallbusiness/comments/1optbqh/what_pos_system_are_you_using_for_your_small/' },
    ],
  },
  {
    topic: 'Card-processing restrictions',
    summary:
      'A frequent request is to keep your own payment processor rather than being locked into the POS vendor’s rates. Some UK posters specifically look for a system that lets them bring their own merchant account.',
    threads: [
      { t: 'r/POS — Looking for the right EPOS (own payment provider)', url: 'https://www.reddit.com/r/POS/comments/1ixyxlr/please_help_looking_for_the_right_epos/' },
    ],
  },
  {
    topic: 'Restaurant features',
    summary:
      'For sit-down venues, table management, modifiers and reporting drive the decision. Toast and Lightspeed are named often, but the same threads show genuine disagreement — one poster calls Toast the clear winner while others prefer alternatives, which is exactly why individual experiences should be weighed rather than treated as consensus.',
    threads: [
      { t: 'r/restaurant — Deciding on a POS system for a restaurant', url: 'https://www.reddit.com/r/restaurant/comments/1024wof/deciding_on_a_pos_system_for_a_restaurant/' },
      { t: 'r/restaurantowners — What POS do you use?', url: 'https://www.reddit.com/r/restaurantowners/comments/1az6ghv/what_pos_do_you_use/' },
    ],
  },
  {
    topic: 'Takeaway and delivery features',
    summary:
      'Takeaway operators weight delivery-platform integration (Just Eat, Uber Eats, Deliveroo), phone-order handling and kitchen printing heavily — the things general retail-first systems tend to handle poorly.',
    threads: [
      { t: 'r/Restaurant_Managers — Best POS system you use?', url: 'https://www.reddit.com/r/Restaurant_Managers/comments/1hfcsgk/restaurant_owners_whats_the_best_pos_system_you/' },
    ],
  },
  {
    topic: 'Contract length and cancellation',
    summary:
      'Long or auto-renewing contracts and exit fees are a recurring regret. The practical advice that surfaces is to read the cancellation terms and minimum term before signing, whichever provider you choose.',
    threads: [
      { t: 'r/POS — A strongly negative Epos Now experience', url: 'https://www.reddit.com/r/POS/comments/1fx7ec6/epos_now_is_one_of_the_worst_companies_i_have/' },
    ],
  },
  {
    topic: 'Hardware ownership',
    summary:
      'With some systems — Clover in particular, when sold through a bank or acquirer — the hardware can be tied to the provider, so posters raise concerns about portability if they later switch.',
    threads: [
      { t: 'r/smallbusiness — What POS are small retail owners finding best?', url: 'https://www.reddit.com/r/smallbusiness/comments/1nhhen9/what_pos_systems_are_small_retail_owners_here/' },
    ],
  },
  {
    topic: 'Switching providers',
    summary:
      'Plenty of threads describe switching after a poor experience. The friction is re-entering the menu and exiting a contract, so menu-import help and clean data export are worth checking up front.',
    threads: [
      { t: 'r/POS — Consensus on EposNow (switching experiences)', url: 'https://www.reddit.com/r/POS/comments/1p96928/what_is_the_consensus_on_eposnow/' },
    ],
  },
];

type Cell = 'yes' | 'partial' | 'no';
type Provider = {
  name: string;
  bestFor: string;
  restaurant: Cell;
  takeaway: Cell;
  kds: Cell;
  online: Cell;
  paymentFlex: string;
  ukSupport: Cell;
  concern: string;
  highlight?: boolean;
};

const providers: Provider[] = [
  { name: 'Square', bestFor: 'Cafés & single sites, quick start', restaurant: 'partial', takeaway: 'yes', kds: 'partial', online: 'yes', paymentFlex: 'Square processing only', ukSupport: 'yes', concern: 'Features gated behind paid tiers; processing locked to Square' },
  { name: 'Toast', bestFor: 'US full-service restaurants', restaurant: 'yes', takeaway: 'yes', kds: 'yes', online: 'yes', paymentFlex: 'Toast processing', ukSupport: 'no', concern: 'US-focused; contract and hardware cost raised by users' },
  { name: 'Lightspeed', bestFor: 'Full-service & fine dining, analytics', restaurant: 'yes', takeaway: 'partial', kds: 'yes', online: 'yes', paymentFlex: 'Lightspeed Payments or third-party', ukSupport: 'yes', concern: 'Higher monthly cost; annual commitment' },
  { name: 'Epos Now', bestFor: 'Retail & hospitality, budget entry', restaurant: 'partial', takeaway: 'partial', kds: 'partial', online: 'partial', paymentFlex: 'Own processor or Epos Now Payments', ukSupport: 'yes', concern: 'Support and contract terms are a recurring complaint in threads' },
  { name: 'TouchBistro', bestFor: 'iPad restaurants (North America)', restaurant: 'yes', takeaway: 'partial', kds: 'yes', online: 'partial', paymentFlex: 'Region-dependent / third-party', ukSupport: 'no', concern: 'iPad-only; primarily a North American product' },
  { name: 'Clover', bestFor: 'Retail & hospitality via banks/acquirers', restaurant: 'partial', takeaway: 'partial', kds: 'yes', online: 'partial', paymentFlex: 'Often tied to the acquirer that sold it', ukSupport: 'partial', concern: 'Hardware can be locked to the acquirer; portability concerns' },
  { name: 'Posso One', bestFor: 'UK takeaways, restaurants & multi-site', restaurant: 'yes', takeaway: 'yes', kds: 'yes', online: 'yes', paymentFlex: 'Integrated payments or discuss your own', ukSupport: 'yes', concern: 'Smaller brand than Square/Toast; UK-only', highlight: true },
];

const checklist = [
  'Is support UK-based, and what are its hours?',
  'What is the minimum contract term — and does it auto-renew?',
  'What is the true total monthly cost (software + hardware finance + add-ons)?',
  'What are the card-processing rates, and are they fixed or tiered?',
  'Is payment processing compulsory, or can you bring your own provider?',
  'Do you own the hardware, or is it tied to the provider?',
  'Does it keep taking orders offline if the internet drops?',
  'Does it support kitchen printers and a kitchen display system (KDS)?',
  'Does it integrate with Just Eat, Uber Eats and Deliveroo?',
  'Does it include your own online ordering (and at what commission)?',
  'Does it offer table ordering and QR-code ordering?',
  'Will they import your existing menu for you?',
  'Can you export your own sales and customer data?',
  'What are the cancellation charges if it does not work out?',
];

const cellIcon = (c: Cell) =>
  c === 'yes' ? <Check className="h-4 w-4 text-green-400 mx-auto" aria-label="Yes" /> :
  c === 'partial' ? <Minus className="h-4 w-4 text-amber-400 mx-auto" aria-label="Partial / add-on" /> :
  <X className="h-4 w-4 text-slate-600 mx-auto" aria-label="No" />;

const businessTypes = ['Takeaways', 'Fish and chip shops', 'Kebab shops', 'Pizza shops', 'Cafés', 'Restaurants', 'Pubs'];
const capabilities = [
  { c: 'POS tills', href: '/restaurant-epos' },
  { c: 'Self-order kiosks', href: '/self-order-kiosks' },
  { c: 'Online ordering', href: '/online-ordering' },
  { c: 'Kitchen display screens', href: '/kitchen-display-system' },
  { c: 'Kitchen & customer receipt printing', href: null },
  { c: 'Table ordering', href: null },
  { c: 'Digital menu screens', href: '/digital-signage' },
  { c: 'Integrated card payments', href: '/credit-card-machines' },
  { c: 'Menu setup & onboarding support', href: null },
];

export default function BestPosSystemRedditPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'POS Systems on Reddit' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <MessageSquare className="w-3 h-3 mr-2" />
              UK GUIDE · 2026
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              What Reddit Users Really Say About POS Systems
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl">
              Comparison articles tend to list features. Reddit threads tend to surface the practical problems that only show up after you have signed — unexpected fees, slow support, offline outages and awkward menu changes. We read through public discussions and summarised the recurring themes, with links to the original threads so you can read them yourself.
            </p>
            <p className="mt-5 text-sm text-slate-400 flex flex-wrap gap-x-3 gap-y-1">
              <span>By the <Link href="/about" className="text-slate-300 hover:text-primary transition-colors">Posso Editorial Team</Link></span>
              <span className="hidden sm:inline">·</span>
              <span>Published <time dateTime={PUBLISHED}>12 September 2026</time></span>
              <span className="hidden sm:inline">·</span>
              <span>Last reviewed <time dateTime={REVIEWED}>12 September 2026</time></span>
            </p>

            {/* Commercial disclosure — up front */}
            <div className="mt-8 glass-card rounded-2xl border border-amber-500/30 p-5 flex gap-3">
              <Info className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong className="text-white">This guide was produced by Posso</strong>, a UK hospitality POS provider. It is not an independent review. We have aimed to represent the recurring themes in the linked discussions fairly, including concerns that may also be relevant when assessing Posso.
              </p>
            </div>
          </div>
        </section>

        {/* What Reddit reveals (the eight practical problems) */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4">Why Reddit is worth reading before you buy</h2>
            <p className="text-slate-300 text-lg mb-6">
              Across POS discussions, the same practical problems come up far more than any single &quot;best&quot; answer. Not every user agrees — but these are the issues people say caught them out:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {['Unexpected monthly or transaction fees','Poor or slow customer support','Internet and offline-mode problems','Difficult menu changes','Weak kitchen-printer or KDS integration','Delivery-platform integration gaps','Long or auto-renewing contracts','Proprietary hardware restrictions'].map((p) => (
                <div key={p} className="flex items-start gap-2 glass-card rounded-xl border border-slate-700/50 p-4">
                  <ShieldQuestion className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{p}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-4">
              These are recurring themes, not a universal verdict — individual Reddit comments reflect personal experiences and specific setups.
            </p>
          </div>
        </section>

        {/* Quick findings */}
        <section className="py-12 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-3">Quick findings</h2>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              A scannable summary of what discussions tend to favour by use case. We only name a provider where the threads give a reasonable, transparent basis — and &quot;best&quot; almost always depends on your type of business.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickFindings.map((f) => (
                <div key={f.label} className="glass-card rounded-2xl border border-slate-700/50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{f.label}</p>
                  <p className="text-white font-bold text-lg">{f.value} {f.value2 && <span className="text-slate-400 font-normal text-sm">{f.value2}</span>}</p>
                  <p className="text-slate-400 text-sm mt-2">{f.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Themed findings */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-3">What Reddit users discuss, by topic</h2>
            <p className="text-slate-400 mb-10">
              Organised by theme rather than by thread. Summaries are paraphrased; follow the links to read the original discussions in full.
            </p>
            <div className="space-y-8">
              {themes.map((th, i) => (
                <div key={th.topic} className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-8 pb-8 border-b border-slate-800 last:border-0">
                  <h3 className="text-xl font-bold text-white flex items-start gap-3">
                    <span className="text-primary/60 text-sm font-mono mt-1">{String(i + 1).padStart(2, '0')}</span>
                    {th.topic}
                  </h3>
                  <div>
                    <p className="text-slate-300 leading-relaxed">{th.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {th.threads.map((t) => (
                        <a key={t.url} href={t.url} target="_blank" rel="noopener noreferrer nofollow"
                           className="inline-flex items-center gap-1.5 text-xs text-primary/90 hover:text-primary underline decoration-slate-600 hover:decoration-primary transition-colors">
                          <MessageSquare className="h-3 w-3" /> {t.t}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provider comparison */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-3">Provider comparison</h2>
            <p className="text-slate-400 text-center mb-8 max-w-3xl mx-auto">
              How the frequently-discussed systems compare on the features UK hospitality businesses ask about.
              <span className="block mt-2 text-sm">
                <Check className="h-3.5 w-3.5 text-green-400 inline mx-1" aria-hidden="true" /> included ·
                <Minus className="h-3.5 w-3.5 text-amber-400 inline mx-1" aria-hidden="true" /> add-on / limited ·
                <X className="h-3.5 w-3.5 text-slate-600 inline mx-1" aria-hidden="true" /> not offered.
                The &quot;main concern&quot; column reflects themes users raise, not our own rating.
              </span>
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-700/50">
              <table className="w-full text-sm border-collapse min-w-[820px]">
                <caption className="sr-only">Comparison of restaurant and takeaway POS providers by features and the main concern raised by users</caption>
                <thead className="bg-slate-900/60 text-white">
                  <tr>
                    <th scope="col" className="py-3 px-4 text-left font-semibold">Provider</th>
                    <th scope="col" className="py-3 px-4 text-left font-semibold">Best suited to</th>
                    <th scope="col" className="py-3 px-3 text-center font-semibold">Restaurant</th>
                    <th scope="col" className="py-3 px-3 text-center font-semibold">Takeaway</th>
                    <th scope="col" className="py-3 px-3 text-center font-semibold">KDS</th>
                    <th scope="col" className="py-3 px-3 text-center font-semibold">Online</th>
                    <th scope="col" className="py-3 px-4 text-left font-semibold">Payment flexibility</th>
                    <th scope="col" className="py-3 px-3 text-center font-semibold">UK support</th>
                    <th scope="col" className="py-3 px-4 text-left font-semibold">Main concern raised by users</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {providers.map((p) => (
                    <tr key={p.name} className={p.highlight ? 'bg-primary/5' : 'hover:bg-slate-800/30 transition-colors'}>
                      <th scope="row" className={`py-3 px-4 text-left font-semibold ${p.highlight ? 'text-primary' : 'text-white'}`}>{p.name}</th>
                      <td className="py-3 px-4 text-slate-300">{p.bestFor}</td>
                      <td className="py-3 px-3">{cellIcon(p.restaurant)}</td>
                      <td className="py-3 px-3">{cellIcon(p.takeaway)}</td>
                      <td className="py-3 px-3">{cellIcon(p.kds)}</td>
                      <td className="py-3 px-3">{cellIcon(p.online)}</td>
                      <td className="py-3 px-4 text-slate-300">{p.paymentFlex}</td>
                      <td className="py-3 px-3">{cellIcon(p.ukSupport)}</td>
                      <td className="py-3 px-4 text-slate-400">{p.concern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              Details change often — always confirm current features, pricing and contract terms directly with each provider before deciding. Where we could not verify a detail, we have left it out rather than guess.
            </p>
          </div>
        </section>

        {/* UK buyer's checklist */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-3">The UK buyer&apos;s checklist</h2>
            <p className="text-slate-400 mb-8">
              The questions Reddit threads suggest you should ask any provider — Posso included — before signing.
            </p>
            <ol className="grid sm:grid-cols-2 gap-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3 glass-card rounded-xl border border-slate-700/50 p-4">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Where Posso fits */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Where Posso One fits</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  To be clear about our own position: Posso is a UK hospitality POS provider, so we are not a neutral party. Factually, Posso One is designed for UK food businesses — {businessTypes.join(', ').replace(/, ([^,]*)$/, ' and $1')} — and aims to cover the areas Reddit threads flag as gaps: UK-based support, delivery-platform integration, offline operation and self-order kiosks.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {capabilities.map((cap) =>
                    cap.href ? (
                      <Link key={cap.c} href={cap.href} className="text-xs rounded-full border border-slate-700 px-3 py-1.5 text-slate-300 hover:border-primary/50 hover:text-primary transition-colors">
                        {cap.c}
                      </Link>
                    ) : (
                      <span key={cap.c} className="text-xs rounded-full border border-slate-800 px-3 py-1.5 text-slate-400">{cap.c}</span>
                    )
                  )}
                </div>
                <p className="text-slate-400 text-sm">
                  It fits some businesses better than others — for example, if you are firmly in the North American market or want a globally recognised brand, other systems on this page may suit you more.
                </p>
              </div>
              <div>
                <Image
                  src="/images/posso-epos-dashboard.png"
                  width={900}
                  height={600}
                  alt="Posso One EPOS dashboard showing orders and sales reporting for a UK hospitality business"
                  className="rounded-2xl border border-slate-700/50 shadow-2xl shadow-primary/10 w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contextual internal links */}
            <div className="mt-10 text-slate-400 text-sm leading-relaxed">
              Explore the specifics by sector: {' '}
              <Link href="/restaurant-epos" className="text-primary hover:underline">restaurant EPOS</Link>, {' '}
              <Link href="/takeaway-epos" className="text-primary hover:underline">takeaway tills</Link>, {' '}
              <Link href="/pos-for-fish-and-chip-shop" className="text-primary hover:underline">fish &amp; chip shop POS</Link>, {' '}
              <Link href="/pos-for-pizza-shop" className="text-primary hover:underline">pizza shop systems</Link> and {' '}
              <Link href="/pos-for-indian-takeaway" className="text-primary hover:underline">Indian takeaway EPOS</Link>. Or read our own comparison pieces on the{' '}
              <Link href="/best-restaurant-epos-system-uk" className="text-primary hover:underline">best restaurant EPOS systems</Link> and{' '}
              <Link href="/top-5-pos-systems-for-restaurants" className="text-primary hover:underline">top 5 POS systems</Link>.
            </div>
          </div>
        </section>

        {/* CTA — used sparingly */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">See it against your own checklist</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Bring the questions above and we will answer them plainly for Posso — contract, costs, card rates, offline mode and delivery integration included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                Book a Posso One demonstration <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> Talk to a UK POS specialist
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Prefer to read first? See <Link href="/takeaway-epos" className="text-primary hover:underline">Posso for takeaways</Link>.
            </p>
          </div>
        </section>

        {/* Methodology + disclaimers */}
        <section className="py-12 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8 text-slate-400 text-sm leading-relaxed space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">How we selected these discussions</p>
                <p>
                  We searched public Reddit discussions (via Google) about restaurant, takeaway and small-business POS and EPOS systems, then grouped the recurring themes. We focused on issues relevant to UK operators; some linked threads are international, and we say so where it matters. We paraphrased rather than reproducing posts, and did not include usernames, vote counts or direct quotations. Individual comments represent personal experiences and specific setups, not a consensus.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Disclosures</p>
                <p>
                  This guide was produced by Posso and is not independent or impartial. Reddit is a trademark of Reddit, Inc.; Posso is not affiliated with, endorsed by, or sponsored by Reddit, and this page is not endorsed by Reddit. Other product names and brands are the property of their respective owners and are referenced for identification only. Details about third-party providers were correct to the best of our knowledge in September 2026 — verify current terms directly with each provider.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS systems on Reddit — FAQs" faqs={[
          { question: 'What POS system do restaurant owners recommend on Reddit?', answer: 'There is no single answer — recommendations vary by business type. For full-service restaurants, Toast and Lightspeed come up often; for cafés and simple setups, Square is popular for its quick start; UK takeaways tend to prioritise systems with delivery-platform integration and UK support. The stronger takeaway is to match the system to your operation rather than chase a single "best".' },
          { question: 'What complaints do Reddit users have about POS systems?', answer: 'The most common complaints are unexpected or hidden fees (including card-processing margins), slow customer support, long or auto-renewing contracts, being locked into the provider’s payment processing, offline/reliability problems, and hardware that is tied to the provider. These are recurring themes, not universal — experiences differ.' },
          { question: 'What is the best POS system for a UK takeaway?', answer: 'For UK takeaways, the features that matter most are Just Eat, Uber Eats and Deliveroo integration, phone-order handling, kitchen printing or a kitchen display, offline operation and UK-based support. Any system that covers those well is a strong candidate. Posso One is one UK-built option designed around exactly these needs.' },
          { question: 'Should a restaurant choose a cloud-based POS?', answer: 'Cloud POS gives you remote reporting, automatic updates and easier multi-site management, which is why most modern systems are cloud-based. The important caveat Reddit raises is offline mode: choose a system that keeps taking orders if your internet drops, so a broadband outage does not stop service.' },
          { question: 'Can a POS system work if the internet goes down?', answer: 'Good hospitality POS systems keep operating offline — taking orders and printing to the kitchen — then sync when the connection returns. Not all do, and it is one of the most common reliability complaints, so confirm offline behaviour before you buy. Posso is designed to keep working through an outage.' },
          { question: 'Are cheap POS systems more expensive in the long run?', answer: 'They can be. A low headline price can hide per-feature charges, hardware costs, card-processing margins and long contracts. The practical advice from Reddit is to total the real monthly cost over the contract term, and to check the cancellation charges, rather than comparing sticker prices.' },
          { question: 'What should I check before signing a POS contract?', answer: 'Check the minimum term and whether it auto-renews, the cancellation charges, the true total monthly cost, the card-processing rates and whether processing is compulsory, whether you own the hardware, offline operation, delivery-platform and KDS support, and whether they will import your menu and let you export your data. The UK buyer’s checklist on this page lists all of these.' },
          { question: 'Does Posso support self-order kiosks and online ordering?', answer: 'Yes. Posso One includes self-order kiosks and its own online ordering, alongside POS tills, kitchen display screens, table ordering, integrated card payments and delivery-platform integration — all built for UK hospitality. You can see the kiosks and online ordering pages for details.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
