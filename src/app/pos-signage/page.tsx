import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, RefreshCw, Calendar, Palette, Wifi, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS Signage',
  description:
    'POS Signage with live menu updates from your till, promotional scheduling, daypart switching, multi-screen management, and cloud-based content control. From £499 + VAT.',
  keywords: [
    'pos signage',
    'pos digital signage',
    'epos signage',
    'pos connected signage',
    'digital menu board pos',
    'pos linked display',
    'epos menu signage',
    'pos screen signage',
    'pos signage system uk',
    'till connected digital signage',
  ],
  alternates: {
    canonical: '/pos-signage',
  },
  openGraph: {
    title: 'POS Signage',
    description:
      'POS Signage with live menu updates from your till, promotional scheduling, daypart switching, multi-screen management, and cloud control.',
    url: 'https://www.posso.co.uk/pos-signage',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS Signage',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'POS signage system with live menu updates from the till, promotional scheduling, automatic daypart switching, multi-screen management, and cloud-based content control for restaurants, cafes, and takeaways.',
    url: 'https://www.posso.co.uk/pos-signage',
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
      reviewCount: '152',
      bestRating: '5',
    },
    featureList: [
      'Live menu updates from POS',
      'Promotional content scheduling',
      'Automatic daypart menu switching',
      'Multi-screen management',
      'Sold-out item auto-removal',
      'Cloud-based content control',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS Signage', item: 'https://www.posso.co.uk/pos-signage' },
    ],
  },
];

const features = [
  { icon: RefreshCw, title: 'Live Menu Sync from POS', description: 'Change a price on the till and it updates on the screen within seconds. Mark an item as sold out and it disappears from the digital menu board automatically. Your signage always shows what is actually available at the actual price. No more customers ordering items that have run out or querying a price that changed last week.' },
  { icon: Calendar, title: 'Promotional Scheduling', description: 'Schedule promotions to appear at specific times and dates. Happy hour pricing shows from 4pm to 7pm. A weekend brunch offer appears Saturday and Sunday mornings. Seasonal campaigns launch and end on preset dates. Set it once, and the signage handles the rest — no staff intervention needed during service.' },
  { icon: Monitor, title: 'Multi-Screen Management', description: 'Run different content on different screens from one dashboard. The menu board behind the counter shows food and drinks. The window-facing screen shows promotions to attract passers-by. The queue screen shows estimated wait times. Each screen pulls content from the same system but displays what is relevant to its location.' },
  { icon: Palette, title: 'Brand-Consistent Templates', description: 'Start with professionally designed templates and customise them with your colours, fonts, and imagery. Every screen across every location looks consistent with your brand. Update the template once and it rolls out to all screens. No graphic design skills required — the editor is drag-and-drop.' },
  { icon: Wifi, title: 'Cloud-Based Control', description: 'Manage all screens from any device with an internet connection. Update menus from your phone while sitting in another location. Push an urgent message — "Card payments only today" — to all screens in seconds. Multi-site chains control every screen from a single dashboard without visiting each location.' },
  { icon: BarChart3, title: 'Sold-Out Auto-Removal', description: 'When stock runs out on the POS, the item is automatically removed or greyed out on the digital signage. No customers approaching the counter to order something unavailable. When stock is replenished, the item reappears. This synchronisation between POS and signage eliminates one of the most common frustrations in hospitality.' },
];

const benefits = [
  { title: 'Never Show the Wrong Price Again', description: 'Manual menu boards require someone to update them. Chalk boards get forgotten. Paper menus go out of date. POS-connected signage updates automatically when you change a price or add an item on the till. One source of truth, everywhere. Price discrepancies between menu and till disappear completely.' },
  { title: 'Increase Revenue with Targeted Promotions', description: 'Scheduled promotions appear at exactly the right moment. A coffee and pastry deal shows during the morning rush. An afternoon tea offer appears at 2pm. A Friday drinks promotion goes live at 4:30pm. The right message at the right time drives impulse purchases and lifts average transaction value.' },
  { title: 'Save Hours of Manual Updates', description: 'Without POS signage, someone updates the menu board every time a price changes, an item sells out, or a promotion starts. With POS signage, all of this is automated. Over a month, that is hours of staff time saved — time better spent serving customers.' },
  { title: 'Manage Multiple Sites from Anywhere', description: 'Update pricing, push promotions, and change layouts across all your locations from one cloud dashboard. Open a new site and configure its screens remotely before the doors open. There is no need to travel to each site to make changes or train staff on signage updates.' },
];

export default function PosSignagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS Signage' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                DIGITAL SIGNAGE CONNECTED TO YOUR POS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Signage
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Digital signage that updates itself when you change the POS. Live prices, automatic sold-out removal, scheduled promotions, and multi-screen control — all from your existing till system.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Menu and prices sync live from the POS</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Sold-out items removed automatically</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">POS Signage Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Digital signage that stays in sync with your POS — automatically, in real time.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose POS-Connected Signage</h2>
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
                Why POS-Connected Signage Beats Standalone Digital Menus
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Standalone digital signage looks impressive but creates a <strong className="text-white">double-entry problem</strong>. You update the POS when a price changes, then separately update the signage software. Inevitably, one gets missed. Customers see one price on the screen and are charged another. POS-connected signage eliminates this entirely.
                </p>
                <p>
                  The real power is in <strong className="text-white">sold-out automation</strong>. When a dish runs out during a busy Friday evening, the POS operator marks it as unavailable. The menu board removes it within seconds. Customers stop ordering items you cannot serve. The kitchen stops fielding apologies. It is a small feature with an outsized impact on customer experience.
                </p>
                <p>
                  For chains, <strong className="text-white">cloud-based management</strong> means head office controls branding, layouts, and promotions centrally, while each site's screens reflect their local POS data. A location that has run out of chicken shows a different menu to one that has full stock — all managed automatically, all from one system.
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
                <Link href="/food-and-drink-digital-signage" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">F&amp;B Digital Signage</p>
                  <p className="text-slate-400 text-sm mt-1">Menu boards for hospitality</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/restaurant-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant system</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS Signage — FAQ" faqs={[
          { question: 'How does the signage sync with the POS?', answer: 'The signage software connects to your POS through the cloud. When you change a price, add an item, or mark something as sold out on the till, the signage updates within seconds. There is no manual step — the sync is automatic and continuous. Both systems share the same menu database.' },
          { question: 'What screens do I need?', answer: 'Any commercial-grade display with an HDMI input works. We recommend commercial displays rated for all-day use — domestic TVs are not designed to run 12+ hours daily. We can supply screens or connect to hardware you already own. Screen sizes from 32 inches to 65 inches are most common.' },
          { question: 'Can I show different content on different screens?', answer: 'Yes. Each screen is independently managed. The counter menu board shows your full menu with prices. A window display shows promotions to attract passers-by. A queue-facing screen shows wait times or upsell offers. All controlled from one dashboard, each showing content appropriate to its location.' },
          { question: 'How does promotional scheduling work?', answer: 'Set promotions to appear at specific times, days, or date ranges. A happy hour offer shows from 4–7pm on weekdays. A Christmas menu appears from 1st December. A lunch deal shows Monday to Friday, 12–2pm. Promotions start and end automatically — no staff action required during service.' },
          { question: 'Can I manage signage across multiple locations?', answer: 'Yes. The cloud dashboard lets you manage screens across all your sites. Push a brand-wide promotion to every location at once, or update a single site individually. Each location\'s screens reflect its own POS data — stock levels, local prices, and availability — while maintaining consistent branding.' },
          { question: 'What does POS signage cost?', answer: 'The POS system starts from £499 + VAT. Digital signage software is included with the POS subscription. You supply the screens or purchase them through us. Setup includes template design, screen configuration, and training on the content management dashboard. Multi-site pricing available on request.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
