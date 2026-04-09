import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Hammer, Calculator, Clock, AlertTriangle, Wrench, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DIY POS System for Restaurants',
  description:
    'DIY POS System for Restaurants — build your own vs buy ready-made. Honest cost comparison, time investment, and hidden pitfalls. Restaurant POS from £499 + VAT.',
  keywords: [
    'diy pos system restaurants',
    'build your own restaurant pos',
    'diy till system restaurant',
    'homemade pos system',
    'diy epos system',
    'cheap restaurant pos',
    'restaurant pos alternative',
    'tablet pos restaurant diy',
    'ipad pos restaurant setup',
    'diy point of sale restaurant',
  ],
  alternates: {
    canonical: '/diy-pos-system-restaurants',
  },
  openGraph: {
    title: 'DIY POS System for Restaurants | Posso UK',
    description:
      'DIY POS System for Restaurants — build your own vs buy ready-made. Honest cost comparison and hidden pitfalls explained.',
    url: 'https://posso.co.uk/diy-pos-system-restaurants',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Ready-made restaurant POS system that replaces DIY solutions with professional hardware, pre-configured software, kitchen display integration, and UK-based support from £499 + VAT.',
    url: 'https://posso.co.uk/diy-pos-system-restaurants',
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
      reviewCount: '267',
      bestRating: '5',
    },
    featureList: [
      'Pre-configured for restaurants',
      'Kitchen display system included',
      'Table management and floor plans',
      'Online ordering integration',
      'Free installation and staff training',
      'UK-based telephone support',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'DIY POS System for Restaurants', item: 'https://posso.co.uk/diy-pos-system-restaurants' },
    ],
  },
];

const features = [
  { icon: Calculator, title: 'The True Cost of DIY', description: 'A DIY restaurant POS typically involves: an iPad or tablet (£300–£500), a card reader (£50–£100), a receipt printer (£150–£250), a cash drawer (£50–£100), free or cheap POS app (£0–£30/month), plus time spent configuring everything. Total hardware: £550–£950. But then you need to add a kitchen display, online ordering, and reporting — each adding cost and complexity.' },
  { icon: Clock, title: 'Time Investment Reality', description: 'Setting up a DIY POS for a restaurant takes 20–40 hours of your time. Researching compatible hardware, installing software, configuring menus with modifiers, setting up printers, testing payment processing, training yourself — then training your staff. That is a full working week before you take a single order. A Posso system installs in under 2 hours.' },
  { icon: AlertTriangle, title: 'What DIY Cannot Do', description: 'Most DIY POS setups lack critical restaurant features: kitchen display integration, split bills, table management, online ordering, multi-terminal sync, staff permissions, and detailed reporting. Adding these features means patching together multiple apps and services — each with its own cost, login, and support channel.' },
  { icon: Wrench, title: 'Maintenance Falls on You', description: 'When a DIY POS breaks — and it will — you are the IT department. Printer stops working? Your problem. App crashes during service? Your problem. Card reader disconnects from the tablet? Your problem. Every minute spent troubleshooting is a minute not spent running your restaurant.' },
  { icon: Hammer, title: 'Hardware Compatibility Issues', description: 'DIY means choosing your own hardware. But not every receipt printer works with every POS app. Not every cash drawer connects to every tablet. Not every card reader pairs reliably over Bluetooth. Compatibility testing is time-consuming, frustrating, and the answers are not always clear until you have already spent the money.' },
  { icon: ThumbsUp, title: 'The Ready-Made Alternative', description: 'A Posso restaurant POS arrives pre-configured with your menu, modifiers, table layout, and kitchen display routing. Hardware is tested and compatible. Software is installed and updated. Payment processing is connected. Staff training is included. You open the box and start taking orders. From £499 + VAT.' },
];

const benefits = [
  { title: 'Save 40+ Hours of Setup Time', description: 'DIY POS setup for a restaurant — researching, buying, configuring, testing, troubleshooting — takes 40+ hours minimum. A Posso system is pre-configured and installed in under 2 hours. Your time is worth more spent on menu development, staff training, and marketing than wrestling with Bluetooth printer drivers.' },
  { title: 'Get Features That DIY Cannot Match', description: 'Kitchen display systems, multi-terminal sync, split billing, table management, online ordering, real-time reporting — these features require a purpose-built platform. Stitching together free apps and consumer hardware cannot replicate what a commercial restaurant POS delivers out of the box.' },
  { title: 'Reliability During Service', description: 'A Friday night with 80 covers is not the time for your DIY POS to crash. Consumer tablets overheat, Bluetooth drops, and free apps freeze under load. Posso uses commercial-grade hardware tested for continuous use. The system is designed for peak-service pressure — not casual home use.' },
  { title: 'Support That Answers the Phone', description: 'DIY POS means you are your own support team. When something breaks at 7pm on a Saturday, you diagnose and fix it yourself — or you operate without a POS until Monday. Posso provides UK-based telephone support. Call, describe the problem, get it fixed while your restaurant is still serving.' },
];

export default function DiyPosSystemRestaurantsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'DIY POS System for Restaurants' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Hammer className="w-3 h-3 mr-2" />
                BUILD VS BUY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  DIY POS System for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Restaurants
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Building your own restaurant POS seems like a way to save money. Here is why it usually costs more in time, stress, and missed features — and what to do instead.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Ready-made restaurant POS from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Kitchen display, online ordering, split bills included</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Installs in under 2 hours, not 40+</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">DIY POS: The Reality Check</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                What you actually encounter when you try to build a restaurant POS from off-the-shelf components.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Ready-Made Beats DIY</h2>
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
                DIY vs Posso: Side-by-Side Comparison
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Hardware cost:</strong> DIY involves sourcing a tablet, printer, cash drawer, card reader, and kitchen screen separately — typically £700–£1,200 total with no guarantee of compatibility. Posso provides a tested, compatible hardware bundle from £499 + VAT with everything included.
                </p>
                <p>
                  <strong className="text-white">Setup time:</strong> DIY takes 40+ hours of research, purchasing, configuration, and testing. Many restaurant owners report spending entire weekends just getting the printer to work with their tablet. Posso installs in under 2 hours — pre-configured with your menu, table layout, and kitchen routing.
                </p>
                <p>
                  <strong className="text-white">Ongoing support:</strong> DIY means self-support. When the card reader disconnects mid-service, you troubleshoot it yourself between serving tables. Posso provides UK-based telephone support from engineers who can remote into your system and fix problems while you continue serving.
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
                <Link href="/restaurant-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant POS</p>
                  <p className="text-slate-400 text-sm mt-1">Purpose-built system</p>
                </Link>
                <Link href="/build-your-own-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Build Your Own POS</p>
                  <p className="text-slate-400 text-sm mt-1">DIY pros and cons</p>
                </Link>
                <Link href="/open-source-epos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Open Source ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Free vs commercial</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="DIY POS System for Restaurants — Frequently Asked Questions" faqs={[
          { question: 'Can I use an iPad as a restaurant POS?', answer: 'You can, but consumer tablets have limitations for restaurant use. iPads overheat during long service hours, Bluetooth connections to printers and card readers drop intermittently, and screen size limits the number of items visible at once. Commercial POS terminals are built for continuous use in hot, busy environments.' },
          { question: 'How much does a DIY restaurant POS cost?', answer: 'Typical DIY costs: tablet £300–£500, receipt printer £150–£250, cash drawer £50–£100, card reader £50–£100, POS app £0–£30/month. Total hardware: £550–£950. But adding kitchen display, online ordering, and proper reporting pushes the total past £1,200. A complete Posso system starts from £499 + VAT.' },
          { question: 'What POS app should I use for a DIY setup?', answer: 'Popular options include Square, SumUp, and iZettle for basic setups. These work for simple operations but lack restaurant-specific features like kitchen displays, table management, and split billing. Adding these features requires additional apps and services, each with their own cost and complexity.' },
          { question: 'Can I add a kitchen display to a DIY POS?', answer: 'Not easily. Most DIY POS apps do not support kitchen display systems. Adding one requires a separate app, a second tablet or screen, and a way to route orders between devices. This is where DIY setups become fragile — multiple disconnected systems that break independently. Posso includes kitchen display integration as a core feature.' },
          { question: 'Is DIY POS reliable enough for a busy restaurant?', answer: 'For a quiet cafe serving 30 covers, a DIY POS may suffice. For a busy restaurant handling 100+ covers with modifiers, split bills, kitchen routing, and card payments, DIY systems buckle under the pressure. Consumer hardware and free apps are not designed for peak-service intensity.' },
          { question: 'How long does it take to set up a DIY POS?', answer: 'Plan for 40+ hours minimum. This includes researching hardware compatibility, purchasing equipment, downloading and configuring software, building your menu with modifiers and pricing, connecting printers and card readers, testing payment processing, and training staff. A Posso system installs in under 2 hours with your menu pre-loaded.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
