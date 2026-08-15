import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Search, ListOrdered, Ban, Scale, TrendingUp, Moon, Layers } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS for Kebab Shops | Buyer\'s Guide',
  description:
    'POS for kebab shops — what to look for, what to avoid and what it costs. Build sequence, no-salad prompts, paid extras by size, late-night trade and delivery apps.',
  // Explicitly drop the sitewide meta-keywords tag inherited from the root layout
  keywords: null,
  alternates: {
    canonical: '/pos-for-kebab-shop',
  },
  openGraph: {
    title: 'POS for Kebab Shops | Posso UK',
    description:
      'Kebab shop POS buyer\'s guide — six things that actually matter at 1am, what to test before you buy, and what it costs.',
    url: 'https://www.posso.co.uk/pos-for-kebab-shop',
    type: 'website',
    // TODO: replace with a bespoke 1200×630 kebab shop card once artwork exists
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso POS for UK kebab shops — buyer\'s guide' }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS for Kebab Shops',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Guide to choosing a POS system for a kebab shop, covering order build sequence, negative modifiers, size-based extra pricing, upsell prompts, late-night shift reporting and delivery app integration.',
    url: 'https://www.posso.co.uk/pos-for-kebab-shop',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    publisher: { '@id': 'https://www.posso.co.uk/#organization' },
    featureList: [
      'Sequenced modifier groups for meat, bread, salad and sauces',
      'Negative modifiers printed clearly on kitchen tickets',
      'Size-specific pricing for paid extras',
      'Product-level upsell prompts',
      'Shift-based cash handling across midnight',
      'Caller ID for repeat phone orders',
      'Just Eat, Uber Eats and Deliveroo integration',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS for Kebab Shops', item: 'https://www.posso.co.uk/pos-for-kebab-shop' },
    ],
  },
];

const features = [
  { icon: ListOrdered, title: 'The Build Sequence Has to Match How Staff Ask', description: 'Meat, then bread, then salad, then sauces, then extras. That is the order the question gets asked at the counter, and it should be the order the screen presents. A system that asks for sauces before it asks for bread forces staff to hold the order in their head and double back. Watch any demo against your own counter script — this single detail separates a fast kebab till from a slow one more than any feature on the spec sheet.' },
  { icon: Ban, title: 'Exclusions Have to Print as Loudly as Inclusions', description: 'No salad. No onion. No tomato. These are the most common kebab instructions and the most commonly missed, because most systems print additions in bold and omissions in small grey text at the end of the line. A negative modifier needs to be as visible on the kitchen ticket or display as a paid extra is. Ask specifically to see how "no onion" prints — do not accept "it supports modifiers" as an answer.' },
  { icon: Scale, title: 'Paid Extras Have to Price by Size', description: 'Extra meat on a small doner and extra meat on a large are not the same cost to you and should not be the same price to the customer. Cheese, halloumi, extra sauce pots, chips in the wrap — each needs its own price against each size. A system with one flat modifier price across every size quietly loses margin on every large order you sell, and you will not see it in the reports.' },
  { icon: TrendingUp, title: 'Upsell Prompts Beat Staff Memory', description: 'Chips with that? Drink? A prompt that fires on screen at the right moment converts far more reliably than asking staff to remember at one in the morning on a Saturday. Look for prompts you can attach to specific products, and switch off on the ones where they do not fit. Attach rate is one of the few things a POS can genuinely improve on its own.' },
  { icon: Moon, title: 'The Trading Day Crosses Midnight', description: 'Peak is roughly eleven until three, which means the busiest hour of Saturday’s trade falls on Sunday’s date. Check how the system handles that. Does the shift report cut at midnight or at close? Can you run a blind cash count at 3am and have it reconcile against the right trading day? Staff logins, cash drops and variance alerts all have to survive the rollover, or your figures will never tie up and you will never know which shift is short.' },
  { icon: Layers, title: 'Three Delivery Tablets in the Rush Is the Failure Point', description: 'Just Eat on one tablet, Uber Eats on another, Deliveroo on a third, all going off during the busiest forty minutes, while the phone rings and there are eight people at the counter. Integration that pulls all three into one queue on the POS and one list on the kitchen display is worth more to a kebab shop than almost any other single feature. Ask whether orders auto-accept, or whether someone still has to tap each one as it lands.' },
];

const benefits = [
  { title: 'Late-Night Support Is the Only Support That Counts', description: 'Your problems happen at midnight, not at eleven on a Tuesday morning. Ask what hours support actually covers, whether it is phone or email only, and what specifically happens if the till goes down at half past eleven on a Saturday. A supplier offering business-hours email support is offering you nothing at all during the only hours that matter to you.' },
  { title: 'Hardware Takes a Beating', description: 'Grease, heat, and hands coming straight off the grill. Ask about the screen coating and whether it responds to greasy or gloved fingers. Ask how quickly a failed printer or terminal is replaced and what you do in the meantime. A two-year warranty is worth checking for, but response time is worth more than warranty length.' },
  { title: 'Count the Taps on Your Top Three Orders', description: 'Build your three most-ordered kebabs on the demo system and count the taps for each. Most shops find one system takes roughly half the taps of another for identical output. Across two hundred orders on a Saturday, that difference is the queue moving or not moving. It is also the single easiest thing to test and the thing buyers most often skip.' },
  { title: 'Do the Real Three-Year Sum', description: 'Hardware, monthly software, card processing, marketplace commission, your own online ordering costs, printer rolls, support. For most kebab shops, marketplace commission dwarfs every other line by a wide margin — which makes the cost of pushing customers to your own ordering channel the number worth modelling first, before you compare terminal prices at all.' },
];

export default function PosForKebabShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS for Kebab Shops' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Search className="w-3 h-3 mr-2" />
                BUYER&apos;S GUIDE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Kebab Shops
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A kebab shop takes most of its money in the four hours after other kitchens have closed, and almost every order is customised. Meat, bread, salad, sauces, extras — asked in that sequence, at speed, usually to a queue. A till that cannot follow that sequence slows down every single order. Here is what actually matters, what to test, and what it should cost.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Six features that matter at 1am</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> What to test before you sign anything</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Kebab shop POS from £499 + VAT</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What to Look For in a Kebab Shop POS</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Six things that decide whether the queue moves on a Saturday night.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>
            <blockquote className="max-w-3xl mx-auto mt-12 glass-card rounded-xl border border-slate-700/50 border-l-4 border-l-primary p-6">
              <p className="text-lg text-slate-200 italic">
                &ldquo;Large chicken doner in naan, lettuce and onion, no tomato, chilli sauce and garlic mayo, with cheesy chips.&rdquo;
              </p>
              <footer className="text-slate-400 mt-3">
                One item, six decisions, one exclusion. Build it on any system you are shown and count the taps.
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Smart Buying Advice</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">{b.title}</h3>
                    <p className="text-slate-400">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                The Posso Approach to Kebab Shop POS
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Posso is built for high-volume takeaway service, and the kebab workflow is one it <strong className="text-white">handles natively rather than by workaround</strong>.
                </p>
                <p>
                  Modifier groups are sequenced the way the counter actually asks — <strong className="text-white">meat, bread, salad, sauces, extras</strong> — so an order is built in the order it is spoken. Exclusions print clearly on the kitchen ticket and show on the kitchen display alongside additions, not buried at the end of the line. Paid extras carry their own price against each size, so a large with extra meat is charged as a large with extra meat. Upsell prompts can be attached per product and switched off where they do not suit.
                </p>
                <p>
                  Shift and cash handling is built for a <strong className="text-white">trading day that runs past midnight</strong>: opening float, cash drops, blind count at close, variance alerts, and X and Z reports that reconcile against the shift rather than the calendar date.
                </p>
                <p>
                  Just Eat, Uber Eats and Deliveroo orders arrive in the same queue as counter, phone and website orders, and the kitchen display shows one list with completion tracking. Caller ID brings up a returning customer&apos;s details and last order before you pick up. The system is <strong className="text-white">offline-first</strong>, so a dropped connection mid-rush does not stop you taking orders, taking cash or printing tickets.
                </p>
                <p>
                  Plenty of kebab menus run out of a chip shop range. If that is you, the{' '}
                  <Link href="/pos-for-fish-and-chip-shop" className="text-primary hover:underline">fish and chip shop POS guide</Link>{' '}
                  covers the other half of the counter.
                </p>
                <p>
                  Pricing starts at <strong className="text-white">£499 + VAT</strong>. Setup is free — your menu is built and your equipment configured before you go live — and every system carries a two-year warranty. On-site installation is quoted separately if you want it. Orders through your own website or app carry a 60p service fee paid by the customer at checkout, so there is no percentage commission on your own trade; you pay card processing only. Card payments run through Posso Pay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Kebab Shop POS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/takeaway-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Counter, collection &amp; delivery</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own site, 60p per order</p>
                </Link>
                <Link href="/ai-phone-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">AI Phone Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Answer every call at peak</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integrations</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS for Kebab Shops — Frequently Asked Questions" faqs={[
          { question: 'What is a kebab shop POS system?', answer: 'A kebab shop POS system is point-of-sale software built around customised, high-speed takeaway orders — a build sequence that follows meat, bread, salad and sauces, clear printing of exclusions like "no onion", paid extras priced by size, late-night shift and cash handling, kitchen printing, card payments, and online and delivery app orders arriving in one queue.' },
          { question: 'How should a kebab POS handle "no salad" or "no onion"?', answer: 'As a negative modifier that prints as prominently as a paid addition. This is the most common source of remakes in a kebab shop. On a kitchen ticket or display, an exclusion in small grey text at the end of the line will be missed during a rush. Ask to see a ticket printed with an exclusion on it before you buy anything.' },
          { question: 'How much does a kebab shop POS cost in the UK?', answer: 'A complete system with a touchscreen terminal, kitchen printing and online ordering typically starts around £499 + VAT upfront, with monthly software from roughly £30. Kitchen display screens, extra printers and kiosks add to that. Over three years, marketplace commission is usually the largest cost in the whole setup by a considerable distance — model that before you compare hardware prices.' },
          { question: 'Can one system handle counter, phone, online and delivery app orders?', answer: 'Yes, and for a kebab shop it is close to essential. During the peak forty minutes, orders arrive simultaneously from the counter, the phone, your own site and up to three marketplace tablets. A system that consolidates them into one queue and one kitchen list removes the re-typing that causes most late-night mistakes.' },
          { question: 'Does a kebab shop POS support caller ID?', answer: 'Posso includes caller ID, which brings up a returning customer’s name, address and order history as the phone rings. For a shop with a high proportion of repeat phone trade, it removes the address-taking step entirely and cuts postcode errors on delivery orders.' },
          { question: 'Will the reports work if we trade past midnight?', answer: 'They need to, and it is worth testing. Posso handles shift-based reporting with opening float, cash drops, blind count closing and variance alerts, so a shift that runs from 5pm to 3am reconciles as one trading period rather than being split across two dates.' },
          { question: 'Can we take online orders without paying commission?', answer: 'Through your own website or app, yes — orders carry a 60p service fee paid by the customer at checkout rather than a percentage taken from you, so the only cost to the shop is card processing. Marketplace orders from Just Eat, Uber Eats or Deliveroo still carry those platforms’ own commission; the POS integration reduces the handling, not the fee.' },
        ]} />

        <DemoEnquiry />
      </main>
      <Footer />
    </div>
  );
}
