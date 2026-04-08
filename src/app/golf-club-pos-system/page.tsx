import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Users, ShoppingBag, Wine, Utensils, CalendarDays, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Golf Club POS System',
  description:
    'Golf Club POS System for pro shop, bar, restaurant, member accounts, and event catering. Multi-venue management, member charging, and club-specific reporting. POS from £499 + VAT.',
  keywords: [
    'golf club pos system',
    'golf club epos',
    'golf club till system',
    'pos system for golf clubs',
    'golf club point of sale',
    'pro shop pos system',
    'golf club bar pos',
    'golf club restaurant pos',
    'golf club member accounts',
    'sports club pos system',
  ],
  alternates: {
    canonical: '/golf-club-pos-system',
  },
  openGraph: {
    title: 'Golf Club POS System | Posso UK',
    description:
      'Golf Club POS System for pro shop, bar, restaurant, and member accounts. Multi-venue POS for golf clubs. From £499 + VAT.',
    url: 'https://posso.co.uk/golf-club-pos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Golf Club POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Golf club POS system managing pro shop retail, bar operations, restaurant service, member account charging, event and function catering, and multi-venue reporting for golf clubs.',
    url: 'https://posso.co.uk/golf-club-pos-system',
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
      reviewCount: '87',
      bestRating: '5',
    },
    featureList: [
      'Pro shop retail POS with barcode scanning and stock',
      'Bar operations with tab management and speed-pour',
      'Restaurant POS with table management and course firing',
      'Member account charging across all club outlets',
      'Event and function catering management',
      'Multi-venue reporting from one dashboard',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Golf Club POS System', item: 'https://posso.co.uk/golf-club-pos-system' },
    ],
  },
];

const features = [
  { icon: ShoppingBag, title: 'Pro Shop Retail POS', description: 'Barcode scanning, stock management, and retail workflows for golf equipment, clothing, and accessories. Track inventory levels, receive deliveries, and see which products sell best. The pro shop POS handles everything from a box of tees to a full set of clubs.' },
  { icon: Wine, title: 'Bar & Lounge', description: 'Tab management for members and visitors, speed-pour ordering for popular drinks, happy hour scheduling, and split bills. Members can charge drinks to their account. The 19th hole bar runs as smoothly as a standalone pub — with the added benefit of member integration.' },
  { icon: Utensils, title: 'Restaurant & Dining', description: 'Table management, course firing, and a full restaurant POS for the clubhouse dining room. Handle casual bar food at lunch and a formal competition dinner in the evening. Menus switch between configurations without changing the system.' },
  { icon: Users, title: 'Member Account Charging', description: 'Members charge purchases at the pro shop, bar, and restaurant to their member account. Charges are tracked per member and invoiced monthly. Members see their running balance. The treasurer gets a detailed breakdown of all member charges for reconciliation.' },
  { icon: CalendarDays, title: 'Event & Function Catering', description: 'Manage catering for competitions, society days, weddings, and private functions. Set up pre-ordered menus, track catering costs against the booking, and generate invoices. Recurring events reuse saved configurations to save time on setup.' },
  { icon: BarChart3, title: 'Club-Wide Reporting', description: 'Revenue reporting across all club outlets — pro shop, bar, restaurant, and events. Compare performance by outlet, track member vs visitor spend, and analyse seasonal patterns. Export data for the club treasurer and committee meetings.' },
];

const benefits = [
  { title: 'One System for the Whole Club', description: 'Pro shop, bar, restaurant, and events all run on one POS platform. One menu to manage per outlet, one set of reports, one support team. Staff trained on the bar POS can work the pro shop till with minimal retraining because the interface is the same.' },
  { title: 'Member Charging That Works', description: 'Members expect to charge to their account across the club. The Posso POS makes this seamless — member number or card swipe charges the purchase to their account. Monthly statements detail every transaction. The treasurer reconciles with one report instead of collecting data from multiple systems.' },
  { title: 'Professional Event Management', description: 'Golf clubs host competitions, society days, and functions regularly. The POS manages catering orders, tracks consumption, and generates invoices. For society days with 40 golfers, set up the pre-ordered lunch, track the bar tab, and invoice the organiser with a complete breakdown.' },
  { title: 'Retail and Hospitality in One', description: 'The pro shop needs retail features — barcode scanning, stock management, purchase orders. The bar and restaurant need hospitality features — tab management, table service, kitchen display. Posso combines both in one system instead of forcing the club to buy two separate POS solutions.' },
];

export default function GolfClubPosSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Golf Club POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Users className="w-3 h-3 mr-2" />
                PRO SHOP, BAR, RESTAURANT & MEMBERS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Golf Club POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Pro shop, bar, restaurant, member accounts, and event catering — one POS system for every part of the golf club. Member charging, multi-outlet reporting, and club-specific features.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Member account charging across all outlets</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pro shop, bar & restaurant on one system</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Golf club POS from £499 + VAT per outlet</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Golf Club POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">Retail, hospitality, and member management in one system — built for golf clubs.</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Golf Clubs Choose Posso</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">From Small Clubs to Championship Courses</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">small members club</strong> with one bar and a pro shop needs a simple system that handles retail and bar sales with member charging. The Posso POS does this without the complexity of enterprise golf club management systems that cost five figures.
                </p>
                <p>
                  A <strong className="text-white">championship course</strong> with a restaurant, multiple bars, a busy pro shop, and regular events needs multi-outlet management with detailed reporting. Each outlet runs its own till while management sees consolidated data across the entire club.
                </p>
                <p>
                  For <strong className="text-white">club groups</strong> managing multiple courses, the cloud dashboard provides group-level reporting. Compare F&B performance across clubs, standardise pro shop inventory, and track member spending patterns across the portfolio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/bar-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bar ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Tab & bar management</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Contactless payments</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Compare POS options</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Golf Club POS System — Frequently Asked Questions" faqs={[
          { question: 'Can members charge purchases to their account?', answer: 'Yes. Members swipe their member card or enter their member number at any POS terminal — pro shop, bar, or restaurant. The charge is added to their account. Monthly statements detail every transaction with date, time, outlet, and items. The treasurer gets a consolidated report for all members.' },
          { question: 'Does it handle pro shop retail and bar/restaurant service?', answer: 'Yes. The pro shop POS includes barcode scanning, stock management, and retail workflows. The bar and restaurant POS includes tab management, table service, kitchen display, and hospitality features. Both run on the same Posso platform with shared member accounts and unified reporting.' },
          { question: 'How does event catering management work?', answer: 'Create an event (competition day, society visit, wedding) and set up the catering package — pre-ordered meals, bar arrangements, dietary requirements. Track consumption during the event. Generate an invoice with a detailed breakdown for the organiser. Save configurations for recurring events.' },
          { question: 'Can we see reports across all club outlets?', answer: 'Yes. The cloud dashboard shows revenue, sales mix, and performance for each outlet — pro shop, bar, restaurant, events — and a consolidated view across the whole club. Compare outlets, track seasonal patterns, and export data for committee meetings and financial reporting.' },
          { question: 'Is it suitable for clubs with visitors and non-members?', answer: 'Yes. The POS handles member and non-member transactions. Members charge to their account or pay at the point of sale. Visitors and society members pay by card or cash. Reporting separates member spend from visitor spend so you can track both revenue streams.' },
          { question: 'How much does the golf club POS cost?', answer: 'The golf club POS starts from £499 + VAT per outlet. A club with pro shop, bar, and restaurant would have three outlets. Multi-outlet packages are available. Finance options from £24.92 per week per outlet. Free setup, training, and menu configuration included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
