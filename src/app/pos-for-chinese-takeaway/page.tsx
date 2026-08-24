import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Search, Hash, ListFilter, Package, Flame, PhoneCall, ToggleLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS for Chinese Takeaways',
  description:
    'POS for Chinese takeaways — what to look for, what to avoid and what it costs. Dish numbers, 200-item menus, set meals, station printing and phone ordering.',
  keywords: [
    'pos for chinese takeaway',
    'chinese takeaway epos',
    'chinese takeaway till system',
    'chinese takeaway pos system',
    'chinese takeaway pos uk',
    'chinese restaurant epos',
    'dish number pos',
    'chinese takeaway till',
    'chinese takeaway software',
    'best pos for chinese takeaway',
  ],
  alternates: {
    canonical: '/pos-for-chinese-takeaway',
  },
  openGraph: {
    title: 'POS for Chinese Takeaways | Posso UK',
    description:
      'Chinese takeaway POS buyer\'s guide — six things that actually matter on a 200-item menu, what to test before you buy, and what it costs.',
    url: 'https://www.posso.co.uk/pos-for-chinese-takeaway',
    type: 'website',
    // TODO: replace with a bespoke 1200×630 card once artwork exists
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso POS for UK Chinese takeaways — buyer\'s guide' }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS for Chinese Takeaways',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Guide to choosing a POS system for a Chinese takeaway, covering dish-number ordering, large menu navigation, set meal pricing and substitutions, station printing, phone order volume and channel-wide availability control.',
    url: 'https://www.posso.co.uk/pos-for-chinese-takeaway',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    publisher: { '@id': 'https://www.posso.co.uk/#organization' },
    featureList: [
      'Dish-number search and quick keys',
      'Flat search across large menus',
      'Set meal and combo pricing with substitutions',
      'Station-level kitchen printing and routing',
      'Caller ID with customer order history',
      'Menu and availability sync across channels',
      'Offline-first operation',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS for Chinese Takeaways', item: 'https://www.posso.co.uk/pos-for-chinese-takeaway' },
    ],
  },
];

const features = [
  { icon: Hash, title: 'Dish Numbers Are the Interface, Not a Label', description: 'Customers do not order salt and pepper chicken wings, they order 84. Staff do not hunt for it on a screen either — they type 84. If the POS treats the number as decoration printed next to the item name, every order becomes a search. The number needs to be a key you can type straight into, from any screen, with the item landing in the basket on entry. Ask to see someone ring in three dishes by number without touching a category tab.' },
  { icon: ListFilter, title: 'A 200-Item Menu Needs Search, Not a Deeper Menu Tree', description: 'Most POS systems answer a big menu by adding another layer of categories. That is the wrong direction. Four taps to reach a dish is four taps on every line of a seven-item order. What works on a long menu is a flat, fast text search plus a small set of pinned favourites covering the twenty dishes that make up most of your trade. Count the taps to reach item 116 on any system you are shown.' },
  { icon: Package, title: 'Set Meals Must Price as One Line — Including Substitutions', description: 'Set meal for two, set meal for four, banquet for six. The bundle is a fixed price, and half the customers will swap the rice for chow mein or the wings for spring rolls. A POS that prices this as individual items with a manual discount will drift on every substitution, and your reports will never show how many set meals you actually sold. Look for a combo builder that holds the bundle price while letting a component be swapped, with its own price rule when the swap costs more.' },
  { icon: Flame, title: 'Wok, Fryer and Rice Need Separate Tickets from One Order', description: 'A Chinese kitchen is stations, not a line. One eight-item order splits across the wok, the fryer and the rice station, and each needs only its own items — not a copy of the whole ticket with the other stations\' dishes to read past. Ask whether printing and the kitchen display can route by category to a specific printer or screen, and what happens to a dish that belongs to two stations.' },
  { icon: PhoneCall, title: 'The Phone Rings Faster Than Staff Can Answer It', description: 'Chinese takeaways still take a larger share of orders by phone than almost any other vertical, and the calls arrive in the same ninety minutes. The constraint is not order entry speed, it is how many calls get answered at all. Ask what happens to the second and third simultaneous caller, whether returning customers are recognised on the ring, and whether there is any way to take an order when every member of staff is already on a call or at the counter.' },
  { icon: ToggleLeft, title: 'Selling Out Has to Take Seconds, Across Every Channel', description: 'On a two-hundred item menu something runs out most nights. If marking it unavailable means logging into the till, then Just Eat, then Uber Eats, then Deliveroo, then your own website, it will not get done — and you will spend the evening ringing customers back. One toggle should remove the dish everywhere it is sold. Ask to watch someone do it, and time it.' },
];

const benefits: { title: string; description: React.ReactNode }[] = [
  {
    title: 'Get Your Menu Loaded Before You Judge Anything',
    description: (
      <>
        A demo on a twenty-item sample menu tells you nothing about a system that has to hold two hundred dishes. The whole question is how it behaves at your scale. Insist your real menu is loaded before the demo, then ring in your three most common orders at speed. Every supplier will agree to this; the ones that stall are telling you something.
      </>
    ),
  },
  {
    title: 'Ask Who Does the Menu Build, and What It Costs',
    description: 'Typing two hundred dishes with numbers, variants, set meals and substitution rules is days of work, not an afternoon. Find out whether the supplier does it, whether it is included, and how long it takes. Then ask what happens the next time you reprice the menu — whether that is your job or theirs, and whether it is chargeable.',
  },
  {
    title: 'Work Out the Real Three-Year Cost',
    description: 'Hardware is the smallest line. Add monthly software, card processing, marketplace commission, your own online ordering costs, printer rolls at two or three stations, and support. For a shop with a high marketplace share, commission over three years will dwarf everything else on the list — which makes the cost of moving customers onto your own ordering channel the first number worth modelling, before you compare terminal prices at all.',
  },
  {
    title: 'Check the Second Language Actually Reaches the Kitchen',
    description: 'A POS being available in Chinese and a kitchen ticket printing in Chinese are two different things, and suppliers routinely conflate them. Decide which one you need — an interface your staff can navigate, or tickets your kitchen can read — and ask to see the exact one you need, printed, before you buy.',
  },
];

export default function PosForChineseTakeawayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS for Chinese Takeaways' },
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
                  Chinese Takeaways
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Two hundred dishes, most of them ordered by number, a lot of them still ordered by phone, and an eight-item ticket that has to split across three stations. A Chinese takeaway asks more of a till than almost any other kind of food business. Here is what to look for, what to test, and what it should cost.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Six features a long menu actually needs</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> What to test before you sign anything</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Chinese takeaway POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What to Look For in a Chinese Takeaway POS</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Six things that decide whether a two-hundred-item menu is fast or exhausting to work.
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
                &ldquo;Number 27, number 84 no MSG, a set meal for two with chow mein instead of the rice, and prawn crackers.&rdquo;
              </p>
              <footer className="text-slate-400 mt-3">
                Two dish numbers, one substitution inside a fixed-price bundle, three stations. Build it on any system you are shown and count the taps.
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
                The Posso Approach to Chinese Takeaway POS
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Posso is built for <strong className="text-white">high-volume takeaway service</strong>, which is the part of a Chinese takeaway that breaks most tills — long menus, long tickets and a phone that does not stop.
                </p>
                <p>
                  The menu builder handles <strong className="text-white">dish numbers, favourites and search</strong> so a long list stays navigable instead of turning into another layer of categories, and the combo builder prices a set meal as one line while still sending every component through to the kitchen. Kitchen printing and the kitchen display can be <strong className="text-white">routed by category</strong>, so the wok station gets the wok dishes and nothing else.
                </p>
                <p>
                  Caller ID brings up a returning customer&apos;s name, address and order history as the phone rings, and{' '}
                  <Link href="/ai-phone-ordering" className="text-primary hover:underline">AI phone ordering</Link>{' '}
                  can pick up the calls that would otherwise go unanswered during the ninety minutes when every line is busy at once.
                </p>
                <p>
                  Just Eat, Uber Eats and Deliveroo orders arrive in the same queue as counter, phone and website orders, and the kitchen display shows one list with completion tracking. The interface ships in <strong className="text-white">five languages including Simplified Chinese</strong>. The system is offline-first, so a dropped connection mid-rush does not stop you taking orders, taking cash or printing tickets.
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Chinese Takeaway POS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/takeaway-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Counter, collection &amp; delivery</p>
                </Link>
                <Link href="/ai-phone-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">AI Phone Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Answer every call at peak</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own site, 60p per order</p>
                </Link>
                <Link href="/kitchen-display-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Kitchen Display System</p>
                  <p className="text-slate-400 text-sm mt-1">Route tickets by station</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS for Chinese Takeaways — Frequently Asked Questions" faqs={[
          { question: 'What is a Chinese takeaway POS system?', answer: 'A Chinese takeaway POS system is point-of-sale software built for long menus and high phone-order volume — dish-number entry and search across two hundred or more items, set meals priced as a single line with substitution rules, kitchen tickets routed to the wok, fryer and rice stations separately, caller ID for repeat customers, card payments, and online and delivery app orders arriving in one queue.' },
          { question: 'How should a POS handle ordering by dish number?', answer: 'The number should be something staff can type directly, from any screen, with the dish landing in the basket on entry — not a label printed next to the item that still has to be found by tapping through categories. On a seven-item order the difference is the whole call. Ask to watch someone ring in three dishes by number without touching a category tab.' },
          { question: 'Can a POS cope with a menu of two hundred dishes?', answer: 'Yes, but not by adding more categories. What works on a long menu is a flat text search combined with pinned favourites covering the twenty or so dishes that make up most of the trade. If the answer to a bigger menu is a deeper menu tree, every order gets slower as the menu grows.' },
          { question: 'How should set meals and substitutions be priced?', answer: 'The bundle should hold its fixed price as a single line while still sending each component to the kitchen, with a price rule that applies only when a substitution costs more. Ringing a set meal in as separate items and applying a manual discount drifts on every swap and leaves your reports unable to tell you how many set meals you actually sold.' },
          { question: 'Can kitchen tickets be split between the wok and the fryer?', answer: 'They should be. A Chinese kitchen works as stations rather than a single line, so an eight-item order needs each station to receive only its own dishes rather than a full copy of the ticket. Look for printing and kitchen display routing configured per menu category, and ask what happens to a dish that belongs to two stations.' },
          { question: 'How much does a Chinese takeaway POS cost in the UK?', answer: 'A complete system with a touchscreen terminal, kitchen printing and online ordering typically starts around £499 + VAT upfront, with monthly software from roughly £30. Extra station printers, kitchen display screens and kiosks add to that. Over three years marketplace commission is usually the largest single cost in the setup — model that before comparing hardware prices.' },
          { question: 'What happens if the internet goes down mid-service?', answer: 'On an offline-first system, nothing stops. Posso stores products, orders and settings locally, so you carry on taking orders, taking cash and printing kitchen tickets without a connection, and everything syncs once you are back online. Ask any supplier this question specifically — cloud-only systems stop dead.' },
        ]} />

        <DemoEnquiry />
      </main>
      <Footer />
    </div>
  );
}
