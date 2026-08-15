import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Timer, Split, WifiOff, CheckCheck, Layers, Printer } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen Display System (KDS) for Restaurants & Takeaways',
  description:
    'Posso kitchen display system — every order on one screen with item completion tracking, prep timers, station routing and production totals. Works offline. From £499 + VAT.',
  // Explicitly drop the sitewide meta-keywords tag inherited from the root layout
  keywords: null,
  alternates: {
    canonical: '/kitchen-display-system',
  },
  openGraph: {
    title: 'Kitchen Display System (KDS) | Posso UK',
    description:
      'One screen for counter, phone, online and delivery app orders — with completion tracking, prep timers and station routing.',
    url: 'https://www.posso.co.uk/kitchen-display-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso kitchen display system showing live orders with completion tracking' }],
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
      'Kitchen display system for restaurants and takeaways with real-time order display, item completion tracking, production totals, prep timers, station routing and offline-first operation.',
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
  { icon: Monitor, title: 'Every Channel on One Screen', description: 'Counter, phone, your own website and Just Eat, Uber Eats and Deliveroo orders all arrive in the same list. The kitchen works one queue instead of watching a printer and three tablets, which is where most missed orders during a rush actually come from.' },
  { icon: CheckCheck, title: 'Item-Level Completion Tracking', description: 'Mark individual items done rather than whole tickets. On a multi-item order that means the parts already made are visibly finished, so nothing gets cooked twice and nothing gets forgotten at the pass when the order is called.' },
  { icon: Layers, title: 'Production Totals Across Live Orders', description: 'See how many of each item are outstanding across every order on the screen at once. Six portions of chips across four tickets is one basket, not four — which is the difference between batching properly at peak and running the fryer inefficiently all night.' },
  { icon: Timer, title: 'Prep Timers and Order Ageing', description: 'Every ticket carries the time it has been waiting, so the order that has been sitting longest is obvious at a glance instead of buried in the middle of the screen. Orders that pass your target time stand out before the customer is the one telling you.' },
  { icon: Split, title: 'Route by Station, Not One Long Ticket', description: 'Send items to the right screen or printer by menu category, so the grill gets the grill items and the fryer gets the fryer items. On a long ticket that removes the reading-past problem entirely — each station sees only what it has to make.' },
  { icon: WifiOff, title: 'Keeps Working Without Internet', description: 'The kitchen display runs on the same offline-first architecture as the rest of Posso One. If the broadband drops mid-service, orders keep arriving from the till, tickets keep printing, and everything syncs when the connection returns.' },
];

const benefits = [
  { title: 'Paper Tickets Are the Failure Point at Peak', description: 'Printed tickets get smudged by steam, fall off the rail, get stuck together, and are read wrong at the exact moment nobody has time to check. A screen has none of those failure modes, and every order is still there to re-read when someone asks what happened to table nine or the collection at half seven.' },
  { title: 'The Real Saving Is Batching, Not Speed', description: 'A KDS does not make anyone cook faster. What it does is show the whole board at once, so the same items across different orders get made together. In a takeaway running a fryer or a grill at capacity between five and seven, that is the single largest efficiency gain available without hiring anyone.' },
  { title: 'Count Your Screens Before You Budget', description: 'A single busy counter operation often needs one screen. A kitchen with distinct stations usually wants two or three, and a pass screen on top of that. Work out how many you actually need before comparing quotes, because per-screen pricing is where headline figures and real figures separate.' },
  { title: 'Check It Handles Marketplace Orders Natively', description: 'A KDS that only shows orders typed at the till is half a system. Ask specifically whether Just Eat, Uber Eats and Deliveroo orders appear on the same screen automatically, or whether someone has to re-key them from a tablet first — because the second option leaves the tablets on your counter regardless.' },
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
                <Monitor className="w-3 h-3 mr-2" />
                KITCHEN DISPLAY SYSTEM
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
                One screen for every order, wherever it came from. Item-level completion tracking, live production totals so the same items get batched together, prep timers that surface the ticket that has been waiting longest, and station routing so each section sees only its own work.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Counter, phone, online and delivery apps in one queue</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Works without internet, syncs when it returns</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What the Posso Kitchen Display Does</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Built into Posso One rather than bolted on, so orders reach the kitchen without a second system in between.
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
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Screen or Printer? What Actually Changes</h2>
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
                A Kitchen Display Is Not a Replacement for Printing
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most kitchens end up running <strong className="text-white">both</strong>, and that is usually the right answer. The screen manages the queue — what is outstanding, what is batched, what has been waiting longest. The printer produces the thing that travels with the order: the ticket that goes on the bag for a collection, or the label the driver checks against.
                </p>
                <p>
                  Posso supports <strong className="text-white">thermal receipt and kitchen printing over network or USB</strong> alongside the display, with custom receipt templates, so you can route by category to a screen, a printer, or both. If you are choosing between them rather than running both, the question is whether your bottleneck is the kitchen keeping track of the queue — in which case a screen wins — or getting a piece of paper onto a bag, in which case a printer alone may still be enough.
                </p>
                <p>
                  Both run on the same <strong className="text-white">offline-first</strong> system. A dropped connection mid-service does not stop the kitchen receiving orders from the till.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Works With the Rest of Posso One</h2>
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
                  <p className="text-slate-400 text-sm mt-1">Kiosk orders land on the same screen</p>
                </Link>
              </div>
              <p className="text-slate-400 text-center mt-6">
                Choosing a system for a specific kind of kitchen? See the buyer&apos;s guides for{' '}
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
          { question: 'Do delivery app orders appear on the kitchen display?', answer: 'On Posso, yes. Just Eat, Uber Eats and Deliveroo orders arrive in the same queue as counter, phone and website orders, so the kitchen works one list rather than a printer plus three marketplace tablets. Ask any supplier this specifically — a KDS that only shows orders typed at the till leaves the tablets on your counter.' },
          { question: 'Does a kitchen display replace kitchen printers?', answer: 'Not usually, and it does not have to. Most kitchens run both: the screen manages the queue while the printer produces the ticket that physically travels with a collection bag or a driver order. Posso supports thermal kitchen printing over network or USB alongside the display, routed by menu category to a screen, a printer, or both.' },
          { question: 'What are production totals and why do they matter?', answer: 'Production totals show how many of each item are outstanding across every live order at once, rather than order by order. Six portions of chips spread across four tickets is one fryer basket rather than four. In a kitchen running a fryer or grill at capacity during peak, batching from that view is usually the largest efficiency gain available without adding staff.' },
          { question: 'How many screens does a kitchen need?', answer: 'A single busy counter operation often runs on one. A kitchen with distinct stations — grill, fryer, wok, cold — typically wants one per station, sometimes with an additional screen at the pass. Work out the number you need before comparing quotes, because per-screen pricing is where headline prices and real prices tend to diverge.' },
          { question: 'Does the kitchen display work if the internet goes down?', answer: 'Yes. Posso One is offline-first, so orders continue to reach the kitchen display and the kitchen printers from the till without a connection, and everything syncs to the cloud once you are back online. Cloud-only systems stop dead in the same situation.' },
        ]} />

        <DemoEnquiry
          heading="See the Kitchen Display in Action"
          intro="Tell us how your kitchen is set up and we will show you how the display would run your service — including how many screens you would actually need."
        />
      </main>
      <Footer />
    </div>
  );
}
