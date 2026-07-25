import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Building2, Monitor, UtensilsCrossed, Tablet, Globe, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality Software UK',
  description:
    'Hospitality Software UK — POS, kitchen display, booking, self-order kiosks, online ordering, and analytics in one integrated platform. Built for UK hospitality businesses. From £499 + VAT.',
  keywords: [
    'hospitality software uk',
    'hospitality technology uk',
    'hospitality pos system',
    'uk hospitality software',
    'restaurant management software uk',
    'hospitality epos',
    'hotel restaurant software',
    'pub pos system uk',
    'hospitality tech uk',
    'hospitality management system',
  ],
  alternates: {
    canonical: '/hospitality-software-uk',
  },
  openGraph: {
    title: 'Hospitality Software UK | Posso',
    description:
      'Hospitality Software UK — POS, KDS, booking, kiosks, online ordering, and analytics. Integrated platform for UK hospitality.',
    url: 'https://www.posso.co.uk/hospitality-software-uk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Hospitality Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Comprehensive UK hospitality software platform with POS, kitchen display system, table booking, self-order kiosks, online ordering, and business analytics for restaurants, pubs, hotels, and cafes.',
    url: 'https://www.posso.co.uk/hospitality-software-uk',
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
      reviewCount: '387',
      bestRating: '5',
    },
    featureList: [
      'Integrated POS for hospitality',
      'Kitchen display system',
      'Table booking and management',
      'Self-order kiosks',
      'Online ordering platform',
      'Business analytics dashboard',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Hospitality Software UK', item: 'https://www.posso.co.uk/hospitality-software-uk' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Hospitality POS System', description: 'A point of sale system designed for UK hospitality — table service, bar tabs, split bills, course management, and allergen flagging. The POS handles the complexity of restaurant and pub service: hold starters while the table finishes drinks, fire mains when the starters are cleared, split a bill six ways by item or equally. Built for the way UK hospitality actually operates.' },
  { icon: UtensilsCrossed, title: 'Kitchen Display System', description: 'Replace ticket printers with a kitchen display that shows every order in real time. Items are colour-coded by course and sorted by time. The kitchen team marks items as started and completed. The front-of-house team sees preparation status on their POS. Communication between kitchen and floor happens through the system — no shouting, no lost tickets, no confusion during a busy Friday service.' },
  { icon: Tablet, title: 'Self-Order Kiosks', description: 'Customer-facing kiosks from £699 + VAT that take orders and payments without staff involvement. Customers browse the full menu with photos and descriptions, customise their order, pay by card or phone, and receive a ticket number. The order goes straight to the kitchen display. Kiosks increase average order value by 20-30% through visual upselling and reduce queue times during peak periods.' },
  { icon: Globe, title: 'Online Ordering Platform', description: 'A branded online ordering system for takeaway, delivery, and click-and-collect. Customers order through your website or app — not a third-party marketplace. Orders arrive directly on your POS and kitchen display. Low commission means you keep your margins. Delivery zone management, minimum order values, and estimated prep times are all configurable from the dashboard.' },
  { icon: Building2, title: 'Table Booking & Management', description: 'Accept online reservations through your website, Google, and social media. The booking system shows table availability in real time. Set covers per table, manage walk-ins alongside reservations, and track table turn times. Automated confirmation and reminder emails reduce no-shows. The floor plan view shows which tables are occupied, reserved, and available at a glance.' },
  { icon: BarChart3, title: 'Business Analytics Dashboard', description: 'Every transaction, order, and booking generates data. The analytics dashboard turns that data into actionable insights — best-selling items, peak trading hours, average spend per cover, staff performance, and revenue trends. Compare this week to last week, this month to last year. Identify your most profitable menu items and your loss leaders. Make decisions based on data, not gut feel.' },
];

const benefits = [
  { title: 'One Integrated Platform', description: 'POS, kitchen display, kiosks, online ordering, booking, and analytics all in one system from one supplier. No integrating five different products from five different companies. Data flows seamlessly between all components. An online order appears on the kitchen display the same way a kiosk order does. One dashboard, one support number, one invoice.' },
  { title: 'Built for UK Hospitality', description: 'VAT-compliant with automatic rate handling for eat-in versus takeaway. Allergen information built into every menu item. Tipping and service charge management that meets UK employment law requirements. HMRC digital records ready. Designed for UK hospitality from day one, not adapted from an American product with a pound sign added.' },
  { title: 'Scale From One Site to Many', description: 'Start with a single POS terminal for your independent restaurant. Add a kitchen display when the kitchen team grows. Add kiosks when queues form at lunch. Add online ordering when you want takeaway revenue. Add a second site and manage both from one dashboard. The platform scales with your business — you never outgrow it and never need to switch systems.' },
  { title: 'Reduce Operational Costs', description: 'Kiosks reduce front-of-house staffing needs. Kitchen displays eliminate ticket reprints and order errors. Online ordering at low commission replaces expensive marketplace fees. Analytics identify waste and underperforming menu items. Across a typical 80-cover restaurant, the integrated platform saves £15,000-25,000 per year through operational efficiencies.' },
];

export default function HospitalitySoftwareUkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Hospitality Software UK' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Building2 className="w-3 h-3 mr-2" />
                COMPREHENSIVE UK HOSPITALITY TECH
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Hospitality Software{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  UK
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                POS, kitchen display, table booking, self-order kiosks, online ordering, and analytics — one integrated platform built for UK hospitality businesses.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete hospitality tech stack in one platform</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> UK VAT, allergens, and compliance built in</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS from £499 + VAT, kiosks from £699 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Hospitality Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every component a UK hospitality business needs — integrated, tested, and supported from one supplier.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why UK Hospitality Businesses Choose Posso</h2>
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
                Technology That Works the Way Hospitality Works
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  UK hospitality is unique. <strong className="text-white">VAT rules differ between eat-in and takeaway</strong>. Allergen information must be available for every dish. Tipping laws changed in 2024. Service charges need transparent handling. A hospitality software platform that does not account for these realities is not fit for purpose in the UK market.
                </p>
                <p>
                  Posso is built from the ground up for <strong className="text-white">UK hospitality businesses</strong> — restaurants, pubs, cafes, hotels, and food halls. Every feature accounts for UK regulations, UK payment methods, UK consumer expectations, and UK operational patterns. The system handles a Friday night 200-cover restaurant service as comfortably as a quiet Tuesday cafe lunch.
                </p>
                <p>
                  The platform is <strong className="text-white">modular by design</strong>. Start with what you need — a POS and kitchen display for a new restaurant. Add online ordering when you are ready for takeaway. Add kiosks when lunchtime queues grow. Add a second location and manage both centrally. You are never locked into paying for features you do not use, and you are never limited when you want to grow.
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
                <Link href="/restaurant-ordering-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">Dine-in, takeaway, delivery</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/digital-signage-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Digital Signage</p>
                  <p className="text-slate-400 text-sm mt-1">Menu boards and displays</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Hospitality Software UK — Frequently Asked Questions" faqs={[
          { question: 'Does the software handle UK VAT correctly?', answer: 'Yes. The system automatically applies the correct VAT rate based on whether an item is eat-in or takeaway. For mixed orders, each item is taxed at the appropriate rate. VAT reports are generated for your accountant with a single click. The system is fully compliant with HMRC digital records requirements.' },
          { question: 'Can I start with just a POS and add more later?', answer: 'Absolutely. Start with a POS terminal from £499 + VAT. Add a kitchen display when you need it. Add online ordering, kiosks, or table booking as your business grows. Every component integrates automatically — there is no migration or data transfer needed. You build your tech stack over time without switching systems.' },
          { question: 'How does allergen information work?', answer: 'Every menu item has allergen flags for the 14 major allergens required by UK law. When a customer asks about allergens, staff see the information on the POS screen. Online ordering and kiosk menus display allergen information automatically. Allergen data can be filtered so a customer with a nut allergy sees only safe options.' },
          { question: 'Is it suitable for multi-site hospitality groups?', answer: 'Yes. Manage all locations from one dashboard. Standardise menus, pricing, and promotions across sites or customise per location. Compare revenue, covers, average spend, and staff performance between venues. Central purchasing, stock management, and reporting with local operational flexibility. Designed for groups from 2 to 200+ sites.' },
          { question: 'What support is available?', answer: 'UK-based support team available by phone, email, and live chat. Emergency support available during service hours for critical issues. Free onboarding including hardware setup, menu configuration, staff training, and go-live support. A dedicated account manager for multi-site businesses. 2-year hardware warranty included with all systems.' },
          { question: 'How much does hospitality software cost?', answer: 'POS systems start from £499 + VAT. Self-order kiosks from £699 + VAT. Online ordering at low commission. Kitchen display, table booking, and analytics included with the POS. Finance available from £24.92 per week. Free setup, configuration, and training. No hidden fees, no long-term contracts required. Contact us for a tailored quote.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
