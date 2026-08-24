import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Hotel, Utensils, Wine, Users, Building, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel ePOS System',
  description:
    'Hotel ePOS System for room service, restaurant, bar, conference catering, and multi-venue management. Charge to rooms, track revenue by outlet, and manage everything from one platform. POS from £499 + VAT.',
  keywords: [
    'hotel epos system',
    'hotel pos system',
    'hotel point of sale',
    'hotel epos system uk',
    'hotel restaurant pos',
    'room service pos',
    'hotel bar epos',
    'multi venue pos system',
    'hospitality epos hotel',
    'hotel till system',
  ],
  alternates: {
    canonical: '/hotel-epos-system',
  },
  openGraph: {
    title: 'Hotel ePOS System | Posso UK',
    description:
      'Hotel ePOS System with room service, restaurant, bar, and conference catering. Charge to rooms and manage multiple outlets.',
    url: 'https://www.posso.co.uk/hotel-epos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Hotel ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Hotel ePOS system managing room service ordering, restaurant POS, bar tab management, conference catering, and multi-venue reporting with room charge capability.',
    url: 'https://www.posso.co.uk/hotel-epos-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Room service ordering with delivery tracking',
      'Restaurant POS with table management and course firing',
      'Bar tab management with speed-pour ordering',
      'Conference and event catering management',
      'Multi-venue reporting from a single dashboard',
      'Room charge capability — add F&B to the guest folio',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Hotel ePOS System', item: 'https://www.posso.co.uk/hotel-epos-system' },
    ],
  },
];

const features = [
  { icon: Hotel, title: 'Room Service Ordering', description: 'Guests order room service via QR code in the room or by phone. Orders route to the kitchen display with the room number clearly shown. Staff confirm delivery on the mobile app. Charges post to the guest folio automatically.' },
  { icon: Utensils, title: 'Restaurant POS', description: 'Full restaurant ePOS with table management, course firing, modifier workflows, and split bills. Handle breakfast buffet service in the morning and a la carte dining in the evening — same system, different menu configurations.' },
  { icon: Wine, title: 'Bar & Lounge', description: 'Tab management, speed-pour ordering, drink modifiers, and happy hour scheduling for the hotel bar. Guests can charge drinks to their room or pay at the bar. Corporate tabs for conference delegates are tracked separately.' },
  { icon: Users, title: 'Conference Catering', description: 'Manage catering packages for conference rooms and events. Set up pre-ordered tea and coffee breaks, working lunches, and evening reception drinks. Track consumption against the booking and invoice the organiser with a detailed breakdown.' },
  { icon: Building, title: 'Multi-Venue Management', description: 'Restaurant, bar, lounge, pool bar, room service — each outlet runs its own POS while management sees consolidated reporting. Compare revenue by outlet, track popular items, and manage staff across all F&B operations from one dashboard.' },
  { icon: BarChart3, title: 'Revenue Reporting', description: 'Real-time reporting across all hotel F&B outlets. Revenue by outlet, by day part, by product category, and by staff member. Export data for your hotel management system. Track covers, average spend, and popular items to optimise menus and staffing.' },
];

const benefits = [
  { title: 'Seamless Room Charging', description: 'Guests charge food and drinks to their room from the restaurant, bar, or room service. No signing paper chits. The charge appears on their folio instantly. At checkout, all F&B charges are consolidated on one bill — clean, professional, and dispute-free.' },
  { title: 'One System for Every Outlet', description: 'Instead of separate POS systems for the restaurant, bar, and room service — each with its own menu management, reporting, and support — Posso runs all outlets on one platform. One menu to manage, one set of reports, one support team.' },
  { title: 'Conference Revenue Tracking', description: 'Hotels lose revenue when conference catering is not tracked accurately. The Posso system logs every tea break, lunch order, and evening reception against the conference booking. You invoice with a detailed breakdown that conference organisers accept without dispute.' },
  { title: 'Optimise Across Outlets', description: 'Cross-outlet reporting reveals patterns. If the bar is quiet on Tuesday evenings but the restaurant is full, consider a drinks promotion for restaurant guests. Data-driven decisions across all F&B outlets maximise revenue per guest.' },
];

export default function HotelEposSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Hotel ePOS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Hotel className="w-3 h-3 mr-2" />
                EVERY HOTEL F&B OUTLET ON ONE PLATFORM
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Hotel ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Room service, restaurant, bar, conference catering — every F&B outlet managed from one platform. Room charging, multi-venue reporting, and outlet-specific workflows.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Room charge capability across all outlets</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Multi-venue consolidated reporting</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Hotel ePOS from £499 + VAT per outlet</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Hotel F&B Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From room service to conference catering, every hotel F&B operation managed on one platform.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Hotels Choose Posso</h2>
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
                From Boutique Hotels to Hotel Groups
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A boutique hotel with one restaurant and one bar needs a system that handles <strong className="text-white">room charging, table service, and bar tabs</strong> without the complexity of enterprise hotel POS systems. Posso delivers exactly that — the features you need without the overhead you do not.
                </p>
                <p>
                  For hotel groups managing multiple properties, the <strong className="text-white">cloud-based dashboard</strong> provides group-level reporting while each property operates independently. Compare F&B revenue across properties, standardise menus, and identify your best-performing outlets.
                </p>
                <p>
                  The system works alongside your existing property management system (PMS). Room charges from the Posso ePOS can be exported for posting to your PMS, keeping guest folios accurate and checkout smooth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Hospitality Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/bar-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bar ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Tab & bar management</p>
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
                  <p className="text-slate-400 text-sm mt-1">Room service online</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Hotel ePOS System — Frequently Asked Questions" faqs={[
          { question: 'Can guests charge food and drinks to their room?', answer: 'Yes. Staff select the room number on the POS when processing an order, and the charge is assigned to that room. All F&B charges across restaurant, bar, and room service are consolidated. The data can be exported for posting to your property management system for guest checkout.' },
          { question: 'Does the system handle multiple outlets?', answer: 'Yes. Each outlet — restaurant, bar, lounge, room service, pool bar — runs its own POS with its own menu and workflow. Management sees consolidated reporting across all outlets from a single cloud dashboard. You can compare revenue, track stock, and manage staff across the entire F&B operation.' },
          { question: 'How does room service ordering work?', answer: 'Guests can order room service by scanning a QR code in the room or by calling reception. Orders route to the kitchen display with the room number clearly shown. The kitchen prepares the order, staff deliver it, and the charge posts to the room automatically.' },
          { question: 'Can we manage conference catering?', answer: 'Yes. Set up catering packages for conference rooms — tea and coffee breaks, working lunches, evening receptions. Track consumption against the booking and generate a detailed invoice for the conference organiser. Recurring conferences can reuse saved package configurations.' },
          { question: 'Does it integrate with our property management system?', answer: 'Posso exports F&B charge data that can be imported into your PMS. This keeps guest folios accurate without manual data entry. The integration works with most popular PMS platforms used by UK hotels. Contact us with your PMS details for confirmation.' },
          { question: 'How much does the hotel ePOS system cost?', answer: 'The hotel ePOS starts from £499 + VAT per outlet. Multi-outlet packages are available for hotels with restaurant, bar, and room service operations. Finance options available. Free setup, menu import, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
