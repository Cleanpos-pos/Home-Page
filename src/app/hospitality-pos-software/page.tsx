import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Utensils, Hotel, Wine, Coffee, CalendarDays, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality POS Software',
  description:
    'Hospitality POS Software for restaurants, hotels, bars, cafes, venues, and events. Table management, kitchen display, online ordering, and multi-site reporting. POS from £499 + VAT.',
  keywords: [
    'hospitality pos software',
    'hospitality epos',
    'hospitality pos system',
    'pos software for hospitality',
    'hospitality point of sale',
    'restaurant hospitality software',
    'hospitality till software',
    'hotel pos software',
    'venue pos system',
    'hospitality epos system uk',
  ],
  alternates: {
    canonical: '/hospitality-pos-software',
  },
  openGraph: {
    title: 'Hospitality POS Software | Posso UK',
    description:
      'Hospitality POS Software for restaurants, hotels, bars, cafes, venues, and events. One platform for all hospitality sectors.',
    url: 'https://www.posso.co.uk/hospitality-pos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Hospitality POS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Hospitality POS software serving restaurants, hotels, bars, cafes, venues, and events with table management, kitchen display, online ordering, delivery integration, and multi-site reporting.',
    url: 'https://www.posso.co.uk/hospitality-pos-software',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Table management with floor plan and course firing',
      'Kitchen display system with order routing',
      'Online ordering and delivery integration',
      'Bar tab management with speed-pour ordering',
      'Multi-site reporting and central menu management',
      'Event and venue POS with portable operation',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Hospitality POS Software', item: 'https://www.posso.co.uk/hospitality-pos-software' },
    ],
  },
];

const features = [
  { icon: Utensils, title: 'Restaurant Management', description: 'Table management with interactive floor plans, course firing for multi-course meals, waiter pad ordering, split bills, and allergen tracking. From casual dining to fine dining, the POS adapts to your service style and workflow.' },
  { icon: Hotel, title: 'Hotel F&B', description: 'Room service, restaurant, bar, and conference catering on one system. Charge to guest rooms, track revenue by outlet, and manage multiple F&B operations from a single dashboard. Works alongside your property management system.' },
  { icon: Wine, title: 'Bar & Pub Operations', description: 'Tab management, speed-pour ordering, drink modifiers for singles and doubles, happy hour scheduling, and cocktail recipe management. The bar-specific workflows keep service fast during peak hours when every second counts.' },
  { icon: Coffee, title: 'Cafe & Coffee Shop', description: 'Quick-service ordering, mobile order-ahead, digital loyalty stamps, milk and syrup modifiers, and pickup scheduling. Built for high-throughput environments where speed and consistency drive customer satisfaction and repeat visits.' },
  { icon: CalendarDays, title: 'Venues & Events', description: 'Portable POS for events, conferences, and venue hire. Set up in minutes, trade on battery and 4G, and tear down at the end. Multi-bar setups with shared stock and consolidated reporting for event organisers.' },
  { icon: BarChart3, title: 'Multi-Site Reporting', description: 'Manage menus centrally, compare sales across locations, and track performance by site. Each venue runs independently while head office sees the full picture. Standardise menus or allow local variations — you control the balance.' },
];

const benefits = [
  { title: 'One Platform for Every Hospitality Sector', description: 'Whether you run a restaurant, hotel, bar, cafe, or event venue, Posso has the specific features you need. Switch between configurations for different service styles — table service at dinner, counter service at lunch — without changing systems.' },
  { title: 'Reduce Technology Complexity', description: 'Instead of separate systems for your POS, online ordering, kitchen display, delivery integration, and kiosks — Posso is one platform. One vendor, one support team, one set of training materials, one bill. Reduce the technology headache and focus on hospitality.' },
  { title: 'Grow Across Sectors', description: 'Start with a cafe and open a restaurant. Add a bar. Launch a pop-up at events. The same Posso platform powers all of them. Staff trained on one system can work across your venues. Reporting spans your entire portfolio.' },
  { title: 'Future-Proof Your Business', description: 'Cloud-based with automatic updates means you always have the latest features. As hospitality technology evolves — QR ordering, self-service kiosks, delivery integration — you get these features added to your existing platform without buying new systems.' },
];

export default function HospitalityPosSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Hospitality POS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Utensils className="w-3 h-3 mr-2" />
                ONE PLATFORM FOR ALL HOSPITALITY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Hospitality POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Restaurants, hotels, bars, cafes, venues, and events — one POS platform with sector-specific features for every hospitality business.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Sector-specific features for every hospitality type</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Multi-site management from one dashboard</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Hospitality POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Features for Every Hospitality Sector</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Not a generic POS shoehorned into hospitality. Purpose-built features for every sector.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Hospitality Businesses Choose Posso</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">The Hospitality POS That Grows With You</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most hospitality businesses evolve. A restaurant adds delivery. A cafe opens a second location. A pub starts serving food. A hotel adds a rooftop bar. At each stage, you either <strong className="text-white">add capability to your existing POS or buy another system</strong>.
                </p>
                <p>
                  With Posso, you add capability. Want online ordering? It is already in your platform — just switch it on. Opening a second site? Log in and your menu is there. Adding a kiosk? It connects to the same system. <strong className="text-white">One platform that expands as you do.</strong>
                </p>
                <p>
                  For hospitality groups operating across sectors — a hotel with a restaurant, bar, and event space — the unified platform means one set of reports, one training programme, and one support relationship. Complexity reduces as your portfolio grows, rather than multiplying.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Sector-Specific Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
                <Link href="/bar-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bar ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Bar & pub features</p>
                </Link>
                <Link href="/cafe-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cafe POS</p>
                  <p className="text-slate-400 text-sm mt-1">Cafe & coffee shop</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">In-store kiosks</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Hospitality POS Software — Frequently Asked Questions" faqs={[
          { question: 'Does the POS work for different hospitality sectors?', answer: 'Yes. Posso has sector-specific features for restaurants (table management, course firing), bars (tab management, speed-pour), cafes (quick service, loyalty), hotels (room charging, multi-outlet), and events (portable, battery-powered). You activate the features you need for your business type.' },
          { question: 'Can I manage multiple hospitality sites from one dashboard?', answer: 'Yes. The cloud dashboard provides multi-site reporting, central menu management, and cross-location analytics. Each site runs independently while head office sees consolidated data. You can standardise menus across sites or allow local variations.' },
          { question: 'Does it include online ordering and delivery integration?', answer: 'Yes. Online ordering through your branded website and integration with Just Eat, Uber Eats, and Deliveroo are included. All orders appear on the same POS and kitchen display regardless of channel. Low commission on direct online orders.' },
          { question: 'Can I add kiosks and table ordering to my existing POS?', answer: 'Yes. Self-order kiosks from £699 + VAT and QR table ordering plug into the same platform. One menu manages all channels — POS, kiosk, online, and table ordering. No separate systems, no duplicate menu management.' },
          { question: 'Is it suitable for hospitality groups with different venue types?', answer: 'Yes. A group running a hotel, restaurant, bar, and event venue can use Posso across all of them. Each venue has its own configuration and workflow while group reporting consolidates everything. Staff trained on one venue can work at any other.' },
          { question: 'How much does hospitality POS software cost?', answer: 'The hospitality POS starts from £499 + VAT per site. Self-order kiosks from £699 + VAT. Multi-site packages are available for hospitality groups. Online ordering, kitchen display, and delivery integration are included. Free setup and training with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
