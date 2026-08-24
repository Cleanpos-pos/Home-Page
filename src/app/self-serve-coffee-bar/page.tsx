import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Coffee, Monitor, Building, Clock, CreditCard, Wifi } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self Serve Coffee Bar',
  description:
    'Self Serve Coffee Bar with kiosk ordering, unmanned operation, contactless payment, remote monitoring, and branded interface for offices, hotel lobbies, and co-working spaces. Kiosks from £699 + VAT.',
  keywords: [
    'self serve coffee bar',
    'self service coffee station',
    'unmanned coffee bar',
    'self serve coffee kiosk',
    'office coffee bar pos',
    'hotel lobby coffee station',
    'self service coffee machine pos',
    'automated coffee bar',
    'self serve coffee bar uk',
    'coffee kiosk system',
  ],
  alternates: {
    canonical: '/self-serve-coffee-bar',
  },
  openGraph: {
    title: 'Self Serve Coffee Bar | Posso UK',
    description:
      'Self Serve Coffee Bar — kiosk ordering, unmanned operation, contactless payment, and remote monitoring for offices and hotels.',
    url: 'https://www.posso.co.uk/self-serve-coffee-bar',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Self Serve Coffee Bar',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Self serve coffee bar kiosk system with touchscreen ordering, contactless payment, unmanned operation mode, remote stock and sales monitoring, and branded interface for offices, hotels, and co-working spaces.',
    url: 'https://www.posso.co.uk/self-serve-coffee-bar',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '699',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Touchscreen kiosk for self-service ordering',
      'Unmanned operation with contactless payment',
      'Remote sales and stock monitoring',
      'Branded interface with your logo and colours',
      'Integration with bean-to-cup machines',
      'Scheduled availability for office hours',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Self Serve Coffee Bar', item: 'https://www.posso.co.uk/self-serve-coffee-bar' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Touchscreen Kiosk Ordering', description: 'A freestanding or countertop kiosk displays your coffee menu with images, descriptions, and prices. Customers select their drink, choose customisations (size, milk, extras), and pay by contactless card or mobile wallet. The kiosk communicates with the coffee machine to prepare the drink automatically. No staff required at the point of sale.' },
  { icon: CreditCard, title: 'Contactless Payment Only', description: 'Self-serve coffee bars work best as cashless operations. The kiosk accepts contactless card, Apple Pay, Google Pay, and company charge accounts. No cash handling means no cash management, no float, and no shrinkage. Payment completes in 2 seconds. The customer taps, the machine brews, and the coffee is ready in under a minute.' },
  { icon: Building, title: 'Unmanned Operation', description: 'The self-serve coffee bar runs without permanent staff. The kiosk handles ordering and payment. The bean-to-cup machine handles preparation. Restocking beans, milk, and cups is a daily 10-minute task. The system alerts you remotely when supplies run low. One person can maintain multiple self-serve stations across a building or campus.' },
  { icon: Wifi, title: 'Remote Monitoring', description: 'Monitor sales, stock levels, and machine status from your phone or laptop via the cloud dashboard. See how many coffees were sold today, which drinks are most popular, and when the beans need refilling. Receive alerts for low stock, machine errors, or payment terminal issues. Manage multiple self-serve locations from one dashboard without visiting each station.' },
  { icon: Coffee, title: 'Branded Interface', description: 'The kiosk displays your brand — logo, colours, and custom menu. For hotels, the interface matches the property branding. For offices, it shows the company logo. For co-working spaces, it can display the space branding or individual tenant logos. The branded experience turns a vending machine into a premium coffee bar that reflects your environment.' },
  { icon: Clock, title: 'Scheduled Availability', description: 'Set operating hours for the kiosk — available from 7am to 7pm on weekdays for an office, 24/7 for a hotel lobby, or specific hours for a co-working space. Outside operating hours, the kiosk displays a "Back at 7am" message. Pricing can vary by time — subsidised coffee during work hours, full price during evenings — all configured remotely.' },
];

const benefits = [
  { title: 'Generate Revenue Without Staff', description: 'A self-serve coffee bar generates revenue 12+ hours per day without a single barista on the payroll. An office location selling 80 coffees per day at £2.50 average generates £200 per day — £1,000 per week — with minimal operating cost. The bean cost, milk, and cups total approximately £0.40 per coffee. The margin on self-serve is exceptional.' },
  { title: 'Enhance Your Venue or Workspace', description: 'Office tenants expect quality coffee. Hotel guests expect lobby refreshments. Co-working spaces compete on amenities. A branded self-serve coffee bar upgrades the experience without the cost of staffing a full cafe. It is an amenity that attracts tenants, delights guests, and differentiates your space from competitors.' },
  { title: 'Scale Across Multiple Locations', description: 'Once the model works in one location, replicate it. An office building with 5 floors can have a self-serve station on each floor managed from one dashboard. A hotel chain can deploy the same branded experience across all properties. Each station operates independently but reports centrally. Scaling is fast because there is no recruitment or training.' },
  { title: 'Reduce Waste with Data', description: 'The dashboard shows exactly when coffee is consumed — peak at 9am, dip at 11am, second peak at 2pm. Adjust stock accordingly. If 90% of orders are lattes and only 2% are mochas, simplify the menu. Data-driven decisions eliminate overstock, reduce waste, and optimise the product mix for what customers actually want.' },
];

export default function SelfServeCoffeeBarPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Self Serve Coffee Bar' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Coffee className="w-3 h-3 mr-2" />
                UNMANNED COFFEE STATION
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Self Serve{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coffee Bar
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Kiosk ordering, contactless payment, unmanned operation, and remote monitoring — a self-service coffee station for offices, hotel lobbies, and co-working spaces.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Unmanned operation with contactless payment</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Remote monitoring and stock alerts</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Self-serve kiosks from £699 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Self Serve Coffee Bar Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything you need to run a profitable, unmanned coffee station.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Self Serve Coffee Works</h2>
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
                Coffee Service Without the Overhead
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A staffed coffee bar costs <strong className="text-white">£25,000-£35,000 per year in wages alone</strong> before rent, equipment, and supplies. A self-serve coffee bar eliminates that cost entirely. The kiosk handles ordering and payment. The bean-to-cup machine handles preparation. Restocking takes 10 minutes per day. The economics are transformative.
                </p>
                <p>
                  For <strong className="text-white">offices and co-working spaces</strong>, a self-serve coffee bar is a tenant amenity that drives occupancy. Quality coffee on every floor means staff do not leave the building for their morning fix. Productivity improves. Satisfaction surveys improve. The coffee bar pays for itself in tenant retention.
                </p>
                <p>
                  For <strong className="text-white">hotels</strong>, a lobby coffee station serves guests from 6am without requiring early morning staff. Late-night guests grab a coffee after a long journey. The kiosk runs 24/7 with your hotel branding on every screen. Revenue per available room increases when amenities improve — and coffee is the most requested amenity.
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
                <Link href="/branded-self-serve-coffee-cart" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee Cart</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile branded coffee cart</p>
                </Link>
                <Link href="/coffee-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Full coffee shop POS</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Self Serve Coffee Bar — Frequently Asked Questions" faqs={[
          { question: 'How does an unmanned coffee bar work?', answer: 'A touchscreen kiosk handles ordering and payment. The customer selects their drink, taps to pay by contactless card or mobile wallet, and the connected bean-to-cup machine prepares the coffee automatically. No staff are required at the point of sale. Restocking beans, milk, and cups is a daily task that takes approximately 10 minutes. The system runs independently.' },
          { question: 'What coffee machines are compatible?', answer: 'The Posso kiosk integrates with most commercial bean-to-cup machines via API or serial connection. Popular compatible models include machines from Franke, WMF, Schaerer, and Melitta. The kiosk sends the drink specification to the machine — size, milk type, strength — and the machine prepares it. We advise on compatible models during the consultation.' },
          { question: 'Can I monitor sales remotely?', answer: 'Yes. The cloud dashboard shows real-time sales, cup counts, popular drinks, revenue by hour, and stock levels. You receive push alerts when bean levels drop below your threshold or when a machine reports an error. Multiple self-serve locations appear on one dashboard. You manage everything from your phone without visiting the station.' },
          { question: 'Is it suitable for offices?', answer: 'Perfectly suited. Office self-serve coffee bars provide quality coffee on every floor without the cost of staffing a cafe. Set the kiosk to operate during office hours and display an out-of-hours message on evenings and weekends. Pricing can be subsidised by the employer or charged to individuals. Company accounts allow departments to track their coffee spend.' },
          { question: 'What about hotels and co-working spaces?', answer: 'Hotels benefit from 24/7 lobby coffee service without early morning or late night staffing. The kiosk matches hotel branding. Co-working spaces use self-serve coffee as a premium amenity that justifies membership pricing. The kiosk can be configured for member-only access using QR codes or membership cards.' },
          { question: 'How much does a self-serve coffee kiosk cost?', answer: 'Self-serve coffee kiosks start from £699 + VAT including the touchscreen kiosk, contactless payment terminal, software, and cloud dashboard. The bean-to-cup machine is sourced separately or supplied as part of a complete package. Finance available. Free installation, configuration, and training. Remote monitoring and software updates are included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
