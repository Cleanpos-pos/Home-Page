import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Phone, ArrowRight, CreditCard, Clock, Beer, Users, Timer, Percent } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pub POS System',
  description:
    'Pub POS System with tab management, speed-pour ordering, drink modifiers, happy hour scheduling, and bar KDS. Built for fast-paced pub service. POS from £499 + VAT.',
  keywords: [
    'pub pos system',
    'pub pos system uk',
    'pub till system',
    'pub epos',
    'pos system for pubs',
    'pub point of sale',
    'bar pos system uk',
    'pub tab management',
    'pub till software',
    'pub ordering system',
  ],
  alternates: {
    canonical: '/pub-pos-system',
  },
  openGraph: {
    title: 'Pub POS System | Posso UK',
    description:
      'Pub POS System with tab management, speed-pour, drink modifiers, happy hour pricing, and bar KDS. Built for pubs.',
    url: 'https://www.posso.co.uk/pub-pos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Pub POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Pub POS system with tab management, speed-pour ordering, drink modifiers for singles and doubles, happy hour scheduling, and separate bar and kitchen display screens.',
    url: 'https://www.posso.co.uk/pub-pos-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Tab management — open, add, settle across shift changes',
      'Speed-pour one-tap ordering for popular drinks',
      'Drink modifiers — singles, doubles, mixers, garnishes',
      'Happy hour scheduling with automatic pricing',
      'Bar KDS separate from kitchen display',
      'Split bills by item, seat, or equal share',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Pub POS System', item: 'https://www.posso.co.uk/pub-pos-system' },
    ],
  },
];

const features = [
  { icon: CreditCard, title: 'Tab Management', description: 'Open a tab by swiping a card or entering a name. Add rounds throughout the session. Tabs transfer between staff at shift change and settle with card, cash, or split payment when the customer is ready to leave.' },
  { icon: Zap, title: 'Speed-Pour Ordering', description: 'One-tap buttons for your most popular pours — Carling, Guinness, house wine, G&T. Your bar staff tap once and move on. During Friday night rush, those saved seconds translate to dozens of extra pints served per hour.' },
  { icon: Beer, title: 'Drink Modifiers', description: 'Spirit orders flow through a modifier screen: single or double, choice of mixer, ice, garnish. Price calculates automatically. Staff cannot accidentally charge single price for a double, and customers get a consistent experience every time.' },
  { icon: Percent, title: 'Happy Hour Pricing', description: 'Set happy hour rules by day, time, and drink category. The POS switches prices at 4pm and reverts at 7pm — automatically. No forgetting to change prices, no manual overrides, no mistakes when the pub is heaving.' },
  { icon: Timer, title: 'Bar KDS Display', description: 'Drinks orders route to the bar screen. Food orders route to the kitchen screen. The bar display shows drink orders in queue order with prep times, so bar staff work through the list efficiently without shouting across the pub.' },
  { icon: Users, title: 'Split Bills', description: 'A group of eight wants to split the bill. Split by item so each person pays for their own drinks, split equally, or enter custom amounts. Combine card and cash on the same bill. Staff handle it in under 30 seconds.' },
];

const benefits = [
  { title: 'Serve More Pints Per Hour', description: 'Speed-pour buttons eliminate the browsing and searching that slows down traditional tills. During peak hours, serving each customer 5 seconds faster means your bar processes 30-40 more transactions per hour — that is real revenue you would otherwise lose to long queues.' },
  { title: 'No More Lost Tabs', description: 'Paper tab systems lead to lost tickets, disputed amounts, and end-of-night confusion. The Posso pub POS tracks every tab digitally. Staff can pull up any tab by name or card from any till in the pub, see every item added, and settle accurately.' },
  { title: 'Food and Drinks on One System', description: 'Pubs serving food need the kitchen and bar working from the same order. A customer ordering a burger and two pints gets one order that routes drinks to the bar screen and food to the kitchen display. One bill, one payment, two preparation screens.' },
  { title: 'Track Staff Performance', description: 'Individual logins show which staff sell the most, who processes transactions fastest, and where voids and discounts happen. Use this data to reward top performers, identify training needs, and catch any irregularities before they become problems.' },
];

export default function PubPosSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Pub POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Beer className="w-3 h-3 mr-2" />
                BUILT FOR BUSY PUB SERVICE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Pub POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Tabs, speed-pour, drink modifiers, happy hour pricing, food ordering to the kitchen, and split bills — everything a pub needs to run faster on a Friday night.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Open and manage tabs from any till</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Happy hour runs automatically</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete pub POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Pub-Specific POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Generic POS systems do not understand how pubs work. Posso is built for tabs, speed, and the chaos of a Saturday night.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Why Pubs Choose Posso
              </h2>
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
                From Wet-Led Locals to Gastropubs
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A wet-led pub needs <strong className="text-white">speed above everything</strong>. One-tap ordering, fast tab management, and a till that keeps up with three-deep-at-the-bar Friday nights. The Posso pub POS delivers sub-10-second transactions so your queue never stalls.
                </p>
                <p>
                  A gastropub needs all of that plus <strong className="text-white">food service management</strong> — table ordering, course firing, kitchen display, and the ability to handle a busy restaurant service alongside bar traffic. Posso handles both workloads on one system.
                </p>
                <p>
                  For pub groups with multiple sites, the cloud-based dashboard gives you <strong className="text-white">real-time reporting across all venues</strong>. Compare sales, track stock, and manage menus centrally while each pub runs independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Pub Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/bar-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bar ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">High-volume bar features</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Contactless payments</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Compare POS options</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Order ahead for pubs</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pub POS System — Frequently Asked Questions" faqs={[
          { question: 'How does tab management work on the pub POS?', answer: 'Open a tab by swiping a card or entering a customer name. Add drinks and food to the tab from any till in the pub. Tabs persist across shift changes. When the customer wants to settle, pull up the tab, review the items, and take payment by card, cash, or split between the group.' },
          { question: 'Can I run happy hour pricing automatically?', answer: 'Yes. Set happy hour rules by day of the week, start time, end time, and product category. The POS automatically applies discounted pricing during your happy hour window and reverts to full price when it ends. You can run different happy hours on different days.' },
          { question: 'Does it handle food orders as well as drinks?', answer: 'Yes. The Posso pub POS routes drinks orders to the bar display and food orders to the kitchen display. A customer ordering a pint and a pie gets one order that splits automatically. One bill, one payment, two preparation screens.' },
          { question: 'How do drink modifiers work?', answer: 'When staff select a spirit, they see options for single or double, choice of mixer, and garnish. The price adjusts automatically. This prevents undercharging for doubles and ensures every drink is rung up consistently, regardless of which member of staff serves it.' },
          { question: 'Can we split bills for groups?', answer: 'Yes. Split by item so each person pays for their own drinks, split equally between the group, or enter custom amounts. You can combine card and cash payments on the same bill. Staff can process a group split in under 30 seconds.' },
          { question: 'How much does the pub POS system cost?', answer: 'The complete pub POS starts from £499 + VAT including the touchscreen terminal and software. Additional tills, card terminals, and bar display screens are available. Finance options from £24.92 per week. Free setup and training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
