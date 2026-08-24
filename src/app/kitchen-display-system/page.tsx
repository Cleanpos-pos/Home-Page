import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Search, CheckCheck, Layers, Inbox, Split, Timer, WifiOff } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen Display System',
  description:
    'Kitchen display system buyer\'s guide — what to look for, what to avoid and what it costs. Completion tracking, batching, station routing and screens vs printers.',
  keywords: [
    'kitchen display system',
    'kds system',
    'kitchen display system uk',
    'restaurant kitchen display',
    'kds for takeaway',
    'kitchen order display',
    'kitchen screen system',
    'kds epos integration',
    'kitchen display software',
    'best kitchen display system',
  ],
  alternates: {
    canonical: '/kitchen-display-system',
  },
  openGraph: {
    title: 'Kitchen Display System | Posso UK',
    description:
      'KDS buyer\'s guide — six things that actually matter in a kitchen, what to test before you buy, and what it costs.',
    url: 'https://www.posso.co.uk/kitchen-display-system',
    type: 'website',
    // TODO: replace with a bespoke 1200×630 card once artwork exists
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso kitchen display system — buyer\'s guide' }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Kitchen Display System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Guide to choosing a kitchen display system, covering item-level completion tracking, production totals and batching, single-queue order intake across every channel, station routing, order ageing and offline-first operation.',
    url: 'https://www.posso.co.uk/kitchen-display-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    publisher: { '@id': 'https://www.posso.co.uk/#organization' },
    featureList: [
      'Real-time order display across every channel',
      'Item-level completion tracking',
      'Production totals across live orders',
      'Prep timers and order ageing',
      'Station routing by menu category',
      'Thermal kitchen printing alongside the display',
      'Offline-first operation',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Kitchen Display System', item: 'https://www.posso.co.uk/kitchen-display-system' },
    ],
  },
];

const features = [
  { icon: CheckCheck, title: 'Completion Has to Work Item by Item, Not Ticket by Ticket', description: 'On a six-item order the grill finishes its part long before the fryer does. A system that only lets you clear a whole ticket tells the kitchen nothing about what is already made, so items get cooked twice or forgotten at the pass. Each line needs to be markable on its own, with the ticket closing only when the last one is done. Ask to see a half-finished order on screen and check what the pass can actually tell from it.' },
  { icon: Layers, title: 'Production Totals Are the Feature That Pays for the Screen', description: 'The question that matters at peak is not "what is on ticket four", it is "how many portions of chips are outstanding across everything on this board". Six across four tickets is one basket, not four. A display that shows only per-order lists cannot answer that, and the kitchen goes on cooking in ones. This single view is usually where the time actually comes back — more than any speed gained from not reading paper.' },
  { icon: Inbox, title: 'Every Channel Has to Land on the Same Screen', description: 'Counter, phone, your own website, Just Eat, Uber Eats, Deliveroo. If marketplace orders arrive on their own tablets and someone re-keys them into the till before the kitchen sees them, the tablets stay on your counter and you have bought a screen that solved half the problem. Ask specifically whether each channel appears automatically, or whether a person is the integration.' },
  { icon: Split, title: 'Routing by Station Beats One Long Ticket', description: 'A kitchen with a grill, a fryer and a cold section does not want three copies of the same ticket, each with two-thirds of it to read past. Items should route to the screen or printer that owns them, by menu category. Ask what happens to a dish that belongs to two stations, and whether the pass still sees the whole order assembled in one place.' },
  { icon: Timer, title: 'Order Ageing Has to Be Readable Without Reading', description: 'During service nobody has time to compare timestamps. The ticket that has been waiting longest has to be obvious from across the kitchen — colour, position, a timer that changes state at your target. If working out what is late requires studying the screen, it will not get done at the moment it matters. Set a target time in the demo and watch what the board does when an order passes it.' },
  { icon: WifiOff, title: 'It Has to Survive a Dropped Connection', description: 'A screen that goes blank when the broadband drops is worse than paper, because paper does not disappear. Ask what happens to orders already on the display, whether new ones still arrive from the till, and whether anything is lost when the connection returns. A cloud-only display in a kitchen is a single point of failure on your busiest night.' },
];

const benefits = [
  { title: 'Count Your Screens Before You Compare Prices', description: 'A single busy counter often runs on one. A kitchen with distinct sections usually wants one per station, sometimes with another at the pass. Per-screen licensing is where headline quotes and real quotes separate, so work out the number you actually need first and get every supplier to price the same configuration. A cheap first screen with an expensive second one is a common shape.' },
  { title: 'A Screen Does Not Replace the Printer', description: 'Most kitchens end up running both, and that is usually right. The display manages the queue; the printed ticket is the thing that physically travels with a collection bag or a driver order. Decide which job you are solving before you decide what to buy. If your bottleneck is getting paper onto a bag, a screen will not fix it — and if it is the kitchen losing track of the queue, a faster printer will not either.' },
  { title: 'Check the Hardware Is Rated for a Kitchen', description: 'Heat, steam and hands coming straight off the grill. Consumer tablets on a shelf above a fryer do not last. Ask what the screen is rated for, whether it responds to wet or gloved fingers, how it is mounted, and what the replacement time is when one fails mid-service. Response time is worth more to you than warranty length.' },
  { title: 'Test It at Real Volume, Not With Three Orders', description: 'Any display looks calm with three tickets on it. Ask the supplier to load fifteen live orders across your stations and then judge it: can you see what is outstanding, what is batched, and what is late, without touching anything? That is the state the screen will be in for the two hours a week that decide whether service works.' },
];

export default function KitchenDisplaySystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Kitchen Display System' },
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
                  Kitchen Display{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A kitchen display is sold as a way to stop losing paper tickets. That is the smallest thing it does. The real question is whether the screen can tell your kitchen what to batch, what is late and what is already made — during the two hours a week when nobody has time to look properly. Here is what to look for, what to test, and what it should cost.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Six things that matter in a real kitchen</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> What to test before you sign anything</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Part of Posso One — POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What to Look For in a Kitchen Display System</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Six things that separate a screen your kitchen relies on from one that becomes an expensive ticket printer.
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
                &ldquo;Fifteen live orders, six of them with chips, across three stations — and one ticket that has been waiting eleven minutes.&rdquo;
              </p>
              <footer className="text-slate-400 mt-3">
                Ask for that board on any system you are shown, then time how long it takes you to spot the chips and the late one.
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
                The Posso Approach to Kitchen Display
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The Posso kitchen display is <strong className="text-white">part of Posso One</strong> rather than a separate product wired into it, so there is no integration between the till and the kitchen that can break or fall behind.
                </p>
                <p>
                  Orders show in <strong className="text-white">real time with item-level completion tracking</strong>, so a half-finished ticket reads correctly at the pass, and <strong className="text-white">production totals</strong> show how many of each item are outstanding across every live order rather than order by order. Counter, phone, website and Just Eat, Uber Eats and Deliveroo orders all arrive in the same queue — no marketplace tablet in between, and nothing to re-key.
                </p>
                <p>
                  Printing and the display can be <strong className="text-white">routed by menu category</strong>, so a station receives only its own items. Thermal receipt and kitchen printing over network or USB runs alongside the screen with custom templates, which is what most kitchens actually want: the screen manages the queue, the printed ticket travels with the bag.
                </p>
                <p>
                  The whole system is <strong className="text-white">offline-first</strong>. If the broadband drops mid-service, orders keep reaching the kitchen from the till and nothing on the board is lost — everything syncs when the connection returns.
                </p>
                <p>
                  The kitchen display is part of Posso One, with the POS from <strong className="text-white">£499 + VAT</strong>. Setup is free — your menu is built and your equipment configured before you go live — and every system carries a two-year warranty. On-site installation is quoted separately if you want it. Screen count depends on how your kitchen is laid out, so we price that with you rather than quoting a number that assumes one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Kitchen Display Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS System</p>
                  <p className="text-slate-400 text-sm mt-1">30+ features, from £499 + VAT</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integrations</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own site, 60p per order</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosk orders on the same screen</p>
                </Link>
              </div>
              <p className="text-slate-400 text-center mt-6">
                Choosing for a specific kind of kitchen? See the buyer&apos;s guides for{' '}
                <Link href="/pos-for-pizza-shop" className="text-primary hover:underline">pizza shops</Link>,{' '}
                <Link href="/pos-for-fish-and-chip-shop" className="text-primary hover:underline">fish and chip shops</Link>,{' '}
                <Link href="/pos-for-kebab-shop" className="text-primary hover:underline">kebab shops</Link>,{' '}
                <Link href="/pos-for-chinese-takeaway" className="text-primary hover:underline">Chinese takeaways</Link>{' '}
                and <Link href="/pos-for-indian-takeaway" className="text-primary hover:underline">Indian takeaways</Link>.
              </p>
            </div>
          </div>
        </section>

        <FAQSection title="Kitchen Display System — Frequently Asked Questions" faqs={[
          { question: 'What is a kitchen display system?', answer: 'A kitchen display system, or KDS, is a screen in the kitchen that replaces or supplements printed tickets. It shows every live order in one queue with the items still to make, tracks completion at item level, ages each ticket so the longest-waiting order is obvious, and can route items to the station responsible for them.' },
          { question: 'Does a kitchen display replace kitchen printers?', answer: 'Not usually, and it does not have to. Most kitchens run both: the screen manages the queue while the printer produces the ticket that physically travels with a collection bag or a driver order. Posso supports thermal kitchen printing over network or USB alongside the display, routed by menu category to a screen, a printer, or both.' },
          { question: 'What are production totals and why do they matter?', answer: 'Production totals show how many of each item are outstanding across every live order at once, rather than order by order. Six portions of chips spread across four tickets is one fryer basket rather than four. In a kitchen running a fryer or grill at capacity during peak, batching from that view is usually the largest efficiency gain available without adding staff.' },
          { question: 'Do delivery app orders appear on the kitchen display?', answer: 'On Posso, yes. Just Eat, Uber Eats and Deliveroo orders arrive in the same queue as counter, phone and website orders, so the kitchen works one list rather than a printer plus three marketplace tablets. Ask any supplier this specifically — a KDS that only shows orders typed at the till leaves the tablets on your counter.' },
          { question: 'How many screens does a kitchen need?', answer: 'A single busy counter operation often runs on one. A kitchen with distinct stations — grill, fryer, wok, cold — typically wants one per station, sometimes with an additional screen at the pass. Work out the number you need before comparing quotes, because per-screen pricing is where headline prices and real prices tend to diverge.' },
          { question: 'Does the kitchen display work if the internet goes down?', answer: 'Yes. Posso One is offline-first, so orders continue to reach the kitchen display and the kitchen printers from the till without a connection, and everything syncs to the cloud once you are back online. Cloud-only systems stop dead in the same situation.' },
        ]} />

        <DemoEnquiry />
      </main>
      <Footer />
    </div>
  );
}
