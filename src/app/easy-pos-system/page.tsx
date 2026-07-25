import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Smile, Zap, MousePointerClick, UserCheck, Clock, Settings } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Easy POS System',
  description:
    'Easy POS System with intuitive touchscreen interface, minimal staff training, plug-and-play setup, and simple daily operations. Designed for businesses that want simplicity. From £499 + VAT.',
  keywords: [
    'easy pos system',
    'easy to use pos system',
    'simple pos system',
    'easy pos system uk',
    'simple till system',
    'easy point of sale',
    'user friendly pos',
    'plug and play pos',
    'easy epos system',
    'simple epos',
  ],
  alternates: {
    canonical: '/easy-pos-system',
  },
  openGraph: {
    title: 'Easy POS System | Posso UK',
    description:
      'Easy POS System with intuitive interface, minimal training, plug-and-play setup. Designed for simplicity.',
    url: 'https://www.posso.co.uk/easy-pos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Easy POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Easy POS system with intuitive touchscreen interface, minimal staff training requirements, plug-and-play setup, and streamlined daily operations for retail and hospitality businesses.',
    url: 'https://www.posso.co.uk/easy-pos-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '274',
      bestRating: '5',
    },
    featureList: [
      'Intuitive touchscreen interface',
      'Minimal staff training required',
      'Plug-and-play hardware setup',
      'Visual product buttons with images',
      'One-tap daily reports',
      'Built-in guided setup wizard',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Easy POS System', item: 'https://www.posso.co.uk/easy-pos-system' },
    ],
  },
];

const features = [
  { icon: MousePointerClick, title: 'Intuitive Touchscreen Interface', description: 'Large, clearly labelled product buttons with images. Tap to add, tap to pay. No nested menus, no hidden functions, no keyboard shortcuts to memorise. The screen layout mirrors how your business actually works — categories on the left, products in the centre, order summary on the right. New staff understand it within minutes.' },
  { icon: Zap, title: 'Plug-and-Play Setup', description: 'Unbox, plug in, connect to Wi-Fi, and you are taking orders. The guided setup wizard walks you through adding products, setting prices, configuring tax rates, and connecting a card reader. No IT team required. No server room. No complex networking. The entire setup takes under an hour for a typical menu.' },
  { icon: UserCheck, title: 'Minimal Staff Training', description: 'Most staff are comfortable using the system within 15 minutes. The interface uses the same tap-and-swipe patterns people use on their phones. Product images mean staff recognise items visually instead of searching through text lists. Training mode lets new hires practise without affecting real sales data.' },
  { icon: Smile, title: 'Staff-Friendly Daily Operations', description: 'Start of day: tap "Open Register". End of day: tap "Close and Report". Cash up in two taps. Refunds in three taps. No complicated Z-read procedures or manager overrides for basic tasks. The system does the complicated accounting in the background while staff see only what they need.' },
  { icon: Clock, title: 'Quick Menu Changes', description: 'Add a new product in under 30 seconds — name, price, category, done. Change a price with two taps. Mark an item as sold out with one tap and it greys out across all channels. Daily specials can be scheduled in advance. You do not need technical knowledge to manage your menu day to day.' },
  { icon: Settings, title: 'Simple Reporting', description: 'One-tap daily summary shows total sales, card vs cash split, top-selling products, and hourly breakdown. Weekly and monthly reports are generated automatically and emailed to you. No need to export spreadsheets or build custom queries. The reports answer the questions business owners actually ask.' },
];

const benefits = [
  { title: 'Get Running the Same Day', description: 'Other systems need days of configuration, IT support, and training sessions. The Posso easy POS system goes from unboxing to live sales in under an hour. The setup wizard handles the technical configuration. You focus on entering your products and prices. Free remote support is available if you get stuck on any step.' },
  { title: 'Stop Losing Sales to Complexity', description: 'Every second a cashier spends searching through menus or figuring out a function is a second a customer waits. An easy interface means faster transactions, shorter queues, and fewer abandoned orders. When the system is intuitive, staff serve customers instead of fighting the technology.' },
  { title: 'Reduce Training Costs', description: 'High staff turnover in hospitality and retail means constant retraining. With a 15-minute learning curve instead of a full-day training session, new starters are productive from their first shift. No printed manuals. No complicated login procedures. The system is as easy as using a smartphone.' },
  { title: 'Focus on Your Business, Not IT', description: 'Automatic updates happen overnight. Cloud backup runs continuously. Card reader firmware updates itself. You never need to think about software versions, server maintenance, or database backups. The technology stays invisible so you can focus entirely on running your business.' },
];

export default function EasyPosSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Easy POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Smile className="w-3 h-3 mr-2" />
                SIMPLICITY BY DESIGN
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Easy POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A POS system anyone can use from day one. Intuitive touchscreen, plug-and-play setup, 15-minute training, and daily operations so simple your whole team will love it.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Intuitive interface — 15-minute staff training</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Plug-and-play setup — live in under an hour</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Easy POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Easy POS System Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every feature designed with one principle: if it is not simple, it is not finished.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose the Easy POS</h2>
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
                POS That Gets Out of Your Way
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Many POS systems are built for power users and IT departments. They have hundreds of settings, nested configuration menus, and training manuals thicker than a phone book. The Posso easy POS system takes the opposite approach — <strong className="text-white">every unnecessary step has been removed</strong>.
                </p>
                <p>
                  The result is a system where <strong className="text-white">new staff take orders confidently within 15 minutes</strong>. Owners manage their menu without calling support. Daily cash-up takes two taps instead of a complicated end-of-day procedure. Reports arrive in your inbox automatically instead of requiring you to export and analyse spreadsheets.
                </p>
                <p>
                  Simple does not mean limited. Behind the clean interface, the system handles <strong className="text-white">multi-tax rates, split payments, refunds, stock tracking, and cloud reporting</strong>. The complexity exists in the background where it belongs. What staff see is a screen that makes sense — immediately, intuitively, without a manual.
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
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full software suite</p>
                </Link>
                <Link href="/pos-machine-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Machine Software</p>
                  <p className="text-slate-400 text-sm mt-1">Hardware-optimised</p>
                </Link>
                <Link href="/shop-till-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Shop Till Software</p>
                  <p className="text-slate-400 text-sm mt-1">Retail till solutions</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Portable POS</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Easy POS System — Frequently Asked Questions" faqs={[
          { question: 'How long does it take to set up?', answer: 'Under an hour for most businesses. Unbox the terminal, connect to Wi-Fi, follow the setup wizard to add your products and prices, pair the card reader, and you are live. We pre-load your menu if you send it to us before delivery — in that case, setup takes under 15 minutes.' },
          { question: 'How quickly can staff learn to use it?', answer: 'Most staff are comfortable within 15 minutes. The interface uses large buttons with product images, familiar tap-and-swipe gestures, and a logical left-to-right layout. Training mode lets new starters practise without affecting real data. We have never had a business report that staff could not learn the system.' },
          { question: 'Is it too simple for a busy business?', answer: 'No. Simple interface does not mean limited functionality. The system handles split payments, multi-tax rates, refunds, discounts, stock tracking, staff permissions, kitchen printing, and cloud reporting. The simplicity is in how staff interact with the system — the powerful features work in the background.' },
          { question: 'Do I need IT support to maintain it?', answer: 'No. Updates install automatically overnight. Cloud backup runs continuously. The card reader firmware updates itself. If something needs attention, the system shows a plain-English notification with a one-tap fix. Free phone support on 0808 175 3956 is available if you ever need help.' },
          { question: 'Can I change my menu easily?', answer: 'Yes. Add a product in under 30 seconds: tap Add Product, type the name, set the price, choose a category. Change prices with two taps. Mark items sold out with one tap. Schedule daily specials in advance. No technical knowledge required — if you can use a smartphone, you can manage your menu.' },
          { question: 'How much does the easy POS system cost?', answer: 'The easy POS system starts from £499 + VAT including touchscreen terminal, POS software, and card reader. Finance available from £24.92 per week. Free setup, menu import, and staff training included. Online ordering available at low commission. 2-year warranty on all hardware.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
