import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Clock, CreditCard, BarChart3, Phone, ArrowRight, Users, ShieldCheck, Wine, Split, Timer, Percent } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bar ePOS System | Tab Management, Speed Ordering & Split Bills',
  description:
    'Bar ePOS system with tab management, speed-pour ordering, drink modifiers, split bills, cocktail menus, and happy hour scheduling. Built for high-volume bar service. From £499 + VAT.',
  keywords: [
    'bar epos',
    'bar epos system',
    'bar pos system',
    'pub epos system',
    'epos for bars',
    'bar till system',
    'bar tab management',
    'pub pos system uk',
    'nightclub pos system',
    'bar point of sale',
  ],
  alternates: {
    canonical: '/bar-epos',
  },
  openGraph: {
    title: 'Bar ePOS System | Posso UK',
    description:
      'Bar ePOS with tab management, speed ordering, drink modifiers, split bills, and happy hour pricing. Built for high-volume service.',
    url: 'https://posso.co.uk/bar-epos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Bar ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Bar ePOS system with tab management, speed-pour ordering, drink modifiers for singles and doubles, split bills, cocktail menu management, and happy hour scheduling.',
    url: 'https://posso.co.uk/bar-epos',
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
      reviewCount: '127',
      bestRating: '5',
    },
    featureList: [
      'Tab management — open, add items, settle',
      'Speed-pour ordering interface',
      'Drink modifiers (singles, doubles, mixers)',
      'Split bills by item, seat, or equal split',
      'Cocktail menu with recipe management',
      'Happy hour scheduling with auto-pricing',
      'Per-category KDS (bar screen separate from kitchen)',
      'Integrated card payments and contactless',
      'Staff login and sales tracking',
      'Works offline',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Bar ePOS System', item: 'https://posso.co.uk/bar-epos' },
    ],
  },
];

const barFeatures = [
  { icon: CreditCard, title: 'Tab Management', description: 'Open a tab with a card or name. Add drinks throughout the night. Settle when ready — card, cash, or split between the group. Tabs stay open across shift changes.' },
  { icon: Zap, title: 'Speed-Pour Ordering', description: 'One-tap drink buttons for your most popular pours. Lager, IPA, house white, G&T — tap and move on. Average bar transaction under 10 seconds.' },
  { icon: Wine, title: 'Drink Modifiers', description: 'Singles, doubles, mixers, garnishes — all in one tap flow. Staff select the spirit, choose single or double, add the mixer, and the price calculates automatically.' },
  { icon: Split, title: 'Split Bills', description: 'Split by item (you had the cocktails, I had the beers), by seat, by equal share, or any custom combination. Works with card and cash payments.' },
  { icon: Timer, title: 'Happy Hour Scheduling', description: 'Set happy hour rules by day, time, and category. Prices switch automatically at 5pm and revert at 7pm. No manual price changes, no forgetting to switch back.' },
  { icon: Monitor, title: 'Bar & Kitchen Screens', description: 'Drinks orders go to the bar display. Food orders go to the kitchen display. Each screen only shows what that station needs to prepare — no clutter, no confusion.' },
];

const barBenefits = [
  { title: 'Faster Service at the Bar', description: 'Speed-pour buttons and one-tap ordering mean your bartenders spend less time on the till and more time pouring. During peak hours, that 5-second difference per transaction adds up to hundreds of extra drinks served.' },
  { title: 'No More Tab Confusion', description: 'Every tab is tied to a name or card. Staff can see what is on the tab, add items from any till, and settle at the end of the night. No paper tabs, no lost orders, no arguments about who ordered what.' },
  { title: 'Happy Hour Runs Itself', description: 'Set your happy hour schedule once and forget it. The POS automatically applies discounted pricing during your specified hours and categories. When happy hour ends, prices revert instantly.' },
  { title: 'Staff You Can Trust', description: 'Individual staff logins track every transaction. See who sold what, when, and at what price. Void reports flag unusual activity. Cash drawer counts at shift end reconcile against POS totals.' },
];

export default function BarEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Bar ePOS System' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Zap className="w-3 h-3 mr-2" />
                BUILT FOR HIGH-VOLUME BAR SERVICE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Bar ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Tabs, speed-pour ordering, drink modifiers, split bills, happy hour pricing, and separate bar and kitchen screens — everything a bar needs to serve faster and sell more.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Open, add to, and settle tabs in seconds</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Happy hour pricing runs automatically</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete bar POS from £499 + VAT</li>
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

        {/* Bar Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Bar Features That Actually Matter
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Generic POS systems are built for restaurants. A bar needs speed, tabs, and drink-specific workflows. That is what Posso delivers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {barFeatures.map((f) => (
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

        {/* How Tab Management Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How Tab Management Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Open Tab', desc: 'Swipe a card or enter a name — tab opens in under 3 seconds' },
                { step: '2', title: 'Add Drinks', desc: 'Tap drinks to add them to the tab from any till in the venue' },
                { step: '3', title: 'Review', desc: 'Customer asks to see the tab — pull it up instantly by name or card' },
                { step: '4', title: 'Settle', desc: 'Pay full amount, split between friends, or close with cash' },
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

        {/* Benefits */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Why Bars Choose Posso
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {barBenefits.map((b) => (
                  <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">{b.title}</h3>
                    <p className="text-slate-400">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cocktail & Mixed Drinks */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Cocktail Menu Management
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Cocktail bars need more than a list of drinks. You need <strong className="text-white">recipe management</strong> so new staff know exactly what goes in each cocktail. You need <strong className="text-white">ingredient-level stock tracking</strong> so you know when the Aperol is running low before Saturday night.
                </p>
                <p>
                  The Posso bar ePOS lets you build cocktail recipes with ingredients and quantities. Staff see the recipe on screen when they tap the cocktail. Stock deducts automatically per ingredient — not just per drink.
                </p>
                <p>
                  For specials and seasonal menus, duplicate an existing cocktail, adjust the recipe, set a price, and it is live on the till in seconds. No waiting for a support ticket.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Types */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Works for Every Type of Bar
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Cocktail Bars', desc: 'Recipe management, premium modifier flows, and ingredient-level stock tracking.' },
                  { title: 'Pubs', desc: 'Speed-pour for draught, tab management, and food ordering to the kitchen.' },
                  { title: 'Wine Bars', desc: 'By-the-glass and by-the-bottle pricing, tasting notes on screen, and vintage tracking.' },
                  { title: 'Sports Bars', desc: 'Multiple tills for fast service during match rushes, with pre-set round ordering.' },
                  { title: 'Nightclubs', desc: 'High-volume speed ordering, VIP tab management, and staff performance tracking.' },
                  { title: 'Hotel Bars', desc: 'Room charge integration, corporate tab management, and multi-venue reporting.' },
                ].map((v) => (
                  <div key={v.title} className="glass-card rounded-xl p-5 border border-slate-700/50">
                    <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                    <p className="text-slate-400 text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Hospitality Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/restaurant-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Full dine-in features</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Contactless payments</p>
                </Link>
                <Link href="/table-ordering-app-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Table Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">QR code order & pay</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">All ePOS Features</p>
                  <p className="text-slate-400 text-sm mt-1">30+ features overview</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Bar ePOS — Frequently Asked Questions" faqs={[
          { question: 'How does tab management work on the Posso bar POS?', answer: 'Open a tab by swiping a card or entering a customer name. Add drinks to the tab from any till in the venue. The tab stays open across shift changes. When the customer is ready to leave, pull up the tab, review the items, and settle by card, cash, or split payment.' },
          { question: 'Can I set up happy hour pricing automatically?', answer: 'Yes. Set happy hour rules by day of the week, start time, end time, and product category. The POS automatically switches to discounted pricing when happy hour starts and reverts to normal pricing when it ends. No manual intervention required.' },
          { question: 'Does the bar screen show different orders to the kitchen screen?', answer: 'Yes. The Posso ePOS routes orders to the correct preparation screen by category. Drinks orders appear on the bar display. Food orders appear on the kitchen display. Each station only sees what they need to prepare, reducing clutter and confusion during busy periods.' },
          { question: 'How do drink modifiers work for spirits?', answer: 'When staff tap a spirit, they see modifier options — single or double, choice of mixer (tonic, lemonade, cola, soda), and garnish. The price adjusts automatically based on the selections. This ensures consistent pricing and speeds up the ordering process.' },
          { question: 'Can customers split the bill at the end of the night?', answer: 'Yes. Posso supports split by item (each person pays for their own drinks), equal split (divide the total equally), split by seat, or custom amounts. Staff can combine card and cash payments on the same bill.' },
          { question: 'How much does the bar ePOS system cost?', answer: 'The complete bar POS system starts from £499 + VAT including the touchscreen till and software. Additional tills for multi-bar setups, card terminals, and bar display screens are available. Finance from £24.92 per week. Free setup and training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
