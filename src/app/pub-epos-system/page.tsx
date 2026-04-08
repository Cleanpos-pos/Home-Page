import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Beer, CreditCard, BarChart3, Package, Users, Percent } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pub ePOS System',
  description:
    'Pub ePOS System with tab management, cellar stock tracking, real ale management, drink modifiers, and pub-specific reporting. Built for wet-led and food-led pubs. POS from £499 + VAT.',
  keywords: [
    'pub epos system',
    'pub epos',
    'epos for pubs',
    'pub epos system uk',
    'pub electronic point of sale',
    'pub till system uk',
    'epos system for pubs',
    'pub pos uk',
    'pub stock management',
    'pub cellar management',
  ],
  alternates: {
    canonical: '/pub-epos-system',
  },
  openGraph: {
    title: 'Pub ePOS System | Posso UK',
    description:
      'Pub ePOS System with tab management, cellar stock, real ale management, and pub-specific reporting. POS from £499 + VAT.',
    url: 'https://posso.co.uk/pub-epos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Pub ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Pub ePOS system with tab management, cellar stock tracking, real ale and guest beer management, drink modifiers, multi-till sync, and pub-specific reporting for wet-led and food-led pubs.',
    url: 'https://posso.co.uk/pub-epos-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '143',
      bestRating: '5',
    },
    featureList: [
      'Tab management across multiple tills',
      'Cellar stock tracking with yield monitoring',
      'Real ale and guest beer rotation management',
      'Drink modifiers — singles, doubles, mixers',
      'Multi-till synchronisation in real time',
      'Pub-specific reporting — wet vs dry sales split',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Pub ePOS System', item: 'https://posso.co.uk/pub-epos-system' },
    ],
  },
];

const features = [
  { icon: CreditCard, title: 'Multi-Till Tab Management', description: 'Open a tab at the main bar and add drinks from the garden bar, the function room, or any other till in the pub. Tabs sync in real time across all tills. Settle at any till — card, cash, or split. Tabs persist across shift changes so the night shift picks up where the day shift left off.' },
  { icon: Package, title: 'Cellar Stock Tracking', description: 'Track kegs, bottles, and spirits at the cellar level. Know exactly how many pints remain in each keg. Monitor yield — are you getting 88 pints from an 11-gallon keg, or are you losing to wastage and over-pour? Cellar stock reports highlight discrepancies before they become costly.' },
  { icon: Beer, title: 'Real Ale & Guest Beer Management', description: 'Real ale pubs rotate guest beers regularly. Add a new guest beer in seconds — name, price, category, position on the bar. When the cask is finished, remove it from the till with one tap. Track which guest beers sold best to inform future purchasing decisions.' },
  { icon: Percent, title: 'Drink Modifiers & Pricing', description: 'Spirit orders flow through a modifier screen: single or double, mixer choice, ice, garnish. The price adjusts automatically. For real ale, set prices by the pint, half, and third. Wine can be priced by glass, carafe, and bottle — all from the same product entry.' },
  { icon: Users, title: 'Staff Accountability', description: 'Individual staff logins track every transaction, void, discount, and till opening. See who sold what, when, and at what price. End-of-shift cash drawer reports reconcile cash against POS totals. Flag unusual void or discount patterns that might indicate problems.' },
  { icon: BarChart3, title: 'Pub-Specific Reporting', description: 'Split reporting between wet sales (drinks) and dry sales (food). Track average spend per head, covers per service, and hourly revenue. Compare weekday vs weekend performance. GP analysis by category shows which products deliver the best margin.' },
];

const benefits = [
  { title: 'Control Your Cellar Costs', description: 'Cellar stock is the biggest cost centre in a pub. Untracked wastage, over-pouring, and unrecorded give-aways erode margins invisibly. The Posso pub ePOS tracks every pour against every keg. When the numbers do not match, you know there is a problem — and you can fix it before it costs thousands.' },
  { title: 'Manage Guest Beer Rotation', description: 'Real ale pubs need to rotate guest beers quickly. The ePOS makes adding and removing beers effortless — new beer on the bar in seconds, old beer off the till in one tap. Sales data tells you which styles sell best so you buy smarter next time.' },
  { title: 'Tabs That Work Across the Whole Pub', description: 'Customers move around — main bar, beer garden, function room. With multi-till tab sync, staff add to a tab from any location. The customer settles at whichever till is convenient. No confusion, no lost tabs, no customers walking out on a bar tab.' },
  { title: 'Reporting That Pub Landlords Need', description: 'Generic POS reports do not separate wet from dry sales or track yield per keg. Pub landlords need to see GP by drink category, wastage reports, and staff performance in the context of a pub — not a restaurant. The Posso pub ePOS delivers pub-specific insights.' },
];

export default function PubEposSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Pub ePOS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Beer className="w-3 h-3 mr-2" />
                ePOS BUILT FOR PUB LANDLORDS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Pub ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Tab management, cellar stock tracking, real ale rotation, drink modifiers, and pub-specific reporting. An ePOS that understands how pubs actually operate.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Cellar stock tracking with yield monitoring</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Multi-till tab sync across the whole pub</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pub ePOS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Pub ePOS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Not a restaurant POS with a pub label. Purpose-built features for cellar management, real ale, and pub service.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Pub Landlords Choose Posso</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">Wet-Led, Food-Led, or Both</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Wet-led pubs</strong> need speed at the bar above everything. One-tap speed-pour buttons, fast tab management, and drink modifiers that do not slow down service. The Posso pub ePOS processes bar transactions in under 10 seconds so your queue keeps moving.
                </p>
                <p>
                  <strong className="text-white">Food-led pubs and gastropubs</strong> need restaurant features alongside bar service. Table management, course firing, kitchen display, and food modifiers run alongside the bar workflow. A customer ordering a pint and a steak pie gets one order that routes appropriately — drinks to the bar, food to the kitchen.
                </p>
                <p>
                  <strong className="text-white">Pub groups</strong> with multiple sites manage all locations from one cloud dashboard. Standardise menus or allow local variations. Compare cellar costs across sites. Track which pubs perform best on food, which on wet sales, and where the opportunities are.
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
                  <p className="text-slate-400 text-sm mt-1">High-volume bar service</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full feature overview</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Contactless payments</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Order ahead for pubs</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pub ePOS System — Frequently Asked Questions" faqs={[
          { question: 'How does cellar stock tracking work?', answer: 'Register kegs when they arrive in the cellar. The ePOS tracks pints sold per keg and calculates yield. When the expected number of pints is reached, you get an alert that the keg should be empty. If the keg runs out early, there is wastage or unrecorded sales to investigate.' },
          { question: 'Can I manage guest beer rotation on the ePOS?', answer: 'Yes. Add a new guest beer in seconds — enter the name, set the price, assign a category. When the cask is finished, remove it from the till in one tap. Sales reports show which guest beers sold best and at what rate, helping you make better purchasing decisions.' },
          { question: 'Do tabs sync across all tills in the pub?', answer: 'Yes. A tab opened at the main bar can have items added from the garden bar, function room, or any other till. Tabs sync in real time via the cloud. The customer can settle at any till. Tabs persist across shift changes.' },
          { question: 'Does the pub ePOS handle food orders too?', answer: 'Yes. Food orders route to the kitchen display while drink orders appear on the bar screen. A customer ordering a pint and a pie gets one order split automatically. Table management, course firing, and food modifiers are all available for food-led pubs and gastropubs.' },
          { question: 'Can I split reporting between wet and dry sales?', answer: 'Yes. The pub ePOS separates wet sales (drinks) from dry sales (food) in all reports. Track revenue, GP, and average spend for each category independently. Compare the wet-to-dry ratio over time to understand how your food offering is growing relative to bar sales.' },
          { question: 'How much does the pub ePOS system cost?', answer: 'The pub ePOS starts from £499 + VAT including the touchscreen terminal and software. Additional tills for multi-bar setups, card terminals, and kitchen display screens are available. Finance from £24.92 per week. Free setup and training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
