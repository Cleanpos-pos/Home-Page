import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Fingerprint, Shield, Cpu, Droplets, Wrench } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Touch Screen Till System',
  description:
    'Touch Screen Till System with 15" capacitive touchscreen, IP54 rated, fanless design, built for hospitality. Fast, durable, and spill-resistant. From £499 + VAT.',
  keywords: [
    'touch screen till system',
    'touchscreen till',
    'touch screen pos',
    'touchscreen epos',
    'touch screen till system uk',
    'capacitive touch till',
    'touchscreen cash register',
    'touch screen pos system',
    'touchscreen till for restaurants',
    'touch screen till for shops',
  ],
  alternates: {
    canonical: '/touch-screen-till-system',
  },
  openGraph: {
    title: 'Touch Screen Till System | Posso UK',
    description:
      'Touch Screen Till System — 15" capacitive, IP54 rated, fanless, built for hospitality. Durable and fast from £499 + VAT.',
    url: 'https://posso.co.uk/touch-screen-till-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Touch Screen Till System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Touch screen till system with 15-inch capacitive touchscreen, IP54 splash rating, fanless design, and hospitality-grade durability. Built for restaurants, cafes, pubs, and retail.',
    url: 'https://posso.co.uk/touch-screen-till-system',
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
      reviewCount: '298',
      bestRating: '5',
    },
    featureList: [
      '15-inch capacitive touchscreen',
      'IP54 rated splash and dust protection',
      'Fanless silent design',
      'Hospitality-grade durability',
      'Multi-touch gesture support',
      '2-year hardware warranty',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Touch Screen Till System', item: 'https://posso.co.uk/touch-screen-till-system' },
    ],
  },
];

const features = [
  { icon: Monitor, title: '15" Capacitive Touchscreen', description: 'A 15-inch capacitive touchscreen that responds to the lightest touch — the same technology as your smartphone. No pressing hard, no stylus needed. Multi-touch gestures let staff scroll, pinch-to-zoom, and swipe between screens. The display is bright enough to read in direct sunlight and at wide viewing angles. 1024x768 resolution shows your full menu with clear text and product images.' },
  { icon: Fingerprint, title: 'Responsive Multi-Touch', description: 'Capacitive touch is faster and more accurate than resistive touchscreens found on older POS systems. Staff tap products, swipe between categories, and scroll through long menus with the same fluidity as using an iPad. During a Friday night rush, the difference between a responsive screen and a laggy one is the difference between keeping up with orders and falling behind.' },
  { icon: Droplets, title: 'IP54 Splash Protection', description: 'Rated IP54 for protection against dust and water splashes from any direction. A spilled pint on the bar, sauce splatter from the kitchen pass, cleaning spray during close-down — the till keeps working. In hospitality environments where liquid near electronics is inevitable, IP54 protection means your till survives the real conditions of daily service without faulting.' },
  { icon: Cpu, title: 'Fanless Silent Operation', description: 'No internal fan means no noise and no air intake. The system runs silently — no whirring, no humming, no dust being pulled inside. In a quiet cafe, the till is inaudible. More importantly, fanless design means no dust accumulation on internal components. A fan-cooled till in a flour-dusted bakery or a dusty stockroom clogs within months. A fanless till does not.' },
  { icon: Shield, title: 'Built for Hospitality', description: 'The hardware is designed for 16-hour service days, 7 days a week. Solid-state storage with no moving parts means no hard drive failures. The chassis is reinforced for accidental knocks. The stand is adjustable for height and angle — tilt it for standing service or angle it for seated operation. Cable management keeps the counter tidy. This is not consumer electronics repurposed — it is built for commercial use.' },
  { icon: Wrench, title: 'Easy Maintenance & Connectivity', description: 'Standard USB ports for receipt printer, cash drawer, barcode scanner, and card terminal. Ethernet and Wi-Fi for network connectivity. The system is modular — if a component needs replacing, it is swapped without replacing the whole unit. Wall-mount and counter-mount options. 2-year hardware warranty covers all components. UK-based support for any hardware issues.' },
];

const benefits = [
  { title: 'Speed That Matches Your Busiest Service', description: 'A capacitive touchscreen registers taps instantly. Combined with an SSD and modern processor, the till responds without delay. During peak service, staff are tapping products, processing payments, and moving to the next customer in a continuous flow. Lag on a POS screen costs seconds per transaction. Over a 200-transaction Friday night, those seconds add up to 30+ minutes of lost service time.' },
  { title: 'Hardware That Survives Hospitality', description: 'A consumer tablet lasts 12-18 months in a restaurant environment. It is not designed for grease, steam, splashes, and 16-hour days. The Posso touch screen till is built for exactly these conditions — IP54 rated, fanless, solid-state, reinforced chassis. The 2-year warranty reflects the durability. Most units run for 5+ years without hardware failure.' },
  { title: 'A Screen Your Staff Want to Use', description: 'Resistive touchscreens require pressure and precision. Staff press hard, aim carefully, and wait for the response. Capacitive touchscreens respond to a light tap — the same touch they use on their own phone. New staff learn the system faster because the interaction feels natural. Existing staff work faster because the screen keeps up with them.' },
  { title: 'Clean, Professional Counter Presence', description: 'The slim profile, adjustable stand, and integrated cable management create a clean counter setup. No rats-nest of cables, no bulky monitor, no external power bricks. The till looks professional from the customer side and is tidy from the staff side. In a cafe, restaurant, or shop where counter space is premium, the compact footprint matters.' },
];

export default function TouchScreenTillSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Touch Screen Till System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                HOSPITALITY-GRADE HARDWARE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Touch Screen Till{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                15-inch capacitive touchscreen, IP54 splash protection, fanless silent design — a till system built to survive and perform in hospitality environments.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> 15" capacitive multi-touch display</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> IP54 rated — splash and dust protected</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete touch screen till from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Touch Screen Till Specifications</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Commercial-grade hardware with every detail considered for hospitality and retail environments.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why the Hardware Matters</h2>
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
                Why Cheap Touch Screens Cost You More
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A budget POS tablet costs £150-250. It looks appealing until it fails <strong className="text-white">mid-service on a Saturday night</strong>. The screen stops responding because it is a resistive panel that degrades with use. The battery swells because it was not designed for 16-hour days plugged in. Grease from the kitchen pass seeps into the charging port. You are down to pen and paper during your busiest shift.
                </p>
                <p>
                  The Posso touch screen till is built for <strong className="text-white">commercial use from day one</strong>. The capacitive touchscreen is the same technology as flagship smartphones — accurate, responsive, and durable. IP54 means splashes and dust do not get in. Fanless means no dust accumulation inside. Solid-state storage means no moving parts to fail. The 2-year warranty is not optimistic — it reflects the engineering.
                </p>
                <p>
                  Over a 5-year lifespan, a <strong className="text-white">£499 commercial till</strong> costs £100 per year. A £200 consumer tablet replaced every 18 months costs £133 per year — plus the cost of downtime, data transfer, and reconfiguration each time. The cheaper option is more expensive. The reliable option pays for itself through uninterrupted service.
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
                <Link href="/cash-register-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cash Register</p>
                  <p className="text-slate-400 text-sm mt-1">Modern ePOS for small business</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/hospitality-software-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Hospitality Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full UK hospitality tech</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Touch Screen Till System — Frequently Asked Questions" faqs={[
          { question: 'What size is the touchscreen?', answer: '15 inches diagonally with a 1024x768 resolution. The screen is bright, clear, and readable from wide viewing angles. The capacitive multi-touch panel responds to light taps and supports gestures like scrolling and swiping. The display is large enough to show a full product menu without excessive scrolling.' },
          { question: 'What does IP54 rated mean?', answer: 'IP54 means the unit is protected against dust ingress (level 5 — dust-protected, not fully dust-tight) and water splashes from any direction (level 4). In practical terms, a spilled drink, cleaning spray, or kitchen steam will not damage the unit. It is not submersible, but it handles the everyday hazards of hospitality and retail environments.' },
          { question: 'Why does fanless design matter?', answer: 'A fan pulls air through the unit to cool it — and with the air comes dust, grease, flour, and moisture. In a bakery, kitchen, or dusty stockroom, fan-cooled electronics clog and overheat within months. Fanless design uses passive cooling with no air intake. The internals stay clean, the unit runs silently, and the lifespan is significantly longer in harsh environments.' },
          { question: 'What peripherals can I connect?', answer: 'Standard USB ports support receipt printers, cash drawers, barcode scanners, customer displays, and card payment terminals. Ethernet and Wi-Fi provide network connectivity. The system supports all standard POS peripherals. Multiple USB ports mean you can connect everything you need without a hub.' },
          { question: 'Is it suitable for retail as well as hospitality?', answer: 'Yes. The touch screen till works equally well in shops, salons, gyms, and any business that needs a point of sale. Barcode scanning, stock management, and product search are all supported. The IP54 rating and fanless design are valuable in any environment, not just hospitality. The 15-inch screen is ideal for both counter service and retail checkout.' },
          { question: 'How much does a touch screen till system cost?', answer: 'The complete touch screen till system starts from £499 + VAT including the 15-inch capacitive touchscreen, POS software, receipt printer, and cash drawer. Card payment terminal available. Finance from £24.92 per week. Free setup, product configuration, and staff training included with a 2-year hardware warranty covering all components.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
