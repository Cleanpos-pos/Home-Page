import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, Truck, CreditCard, BarChart3, Phone, ArrowRight, Utensils, ShieldCheck, Printer, Package } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS Systems for Takeaways | Complete Hardware & Software Bundle',
  description:
    'Complete ePOS systems for takeaways — touchscreen till, kitchen printer, cash drawer, receipt printer, and software in one bundle. Collection and delivery workflows with online ordering. From £499 + VAT.',
  keywords: [
    'epos systems for takeaways',
    'takeaway epos system',
    'takeaway pos system',
    'epos for takeaway',
    'takeaway till system',
    'takeaway epos bundle',
    'takeaway pos hardware',
    'epos system takeaway uk',
    'complete takeaway pos',
    'takeaway ordering system',
  ],
  alternates: {
    canonical: '/epos-systems-for-takeaways',
  },
  openGraph: {
    title: 'ePOS Systems for Takeaways | Posso UK',
    description:
      'Complete takeaway ePOS bundles with touchscreen till, kitchen printer, cash drawer, and integrated online ordering. From £499 + VAT.',
    url: 'https://posso.co.uk/epos-systems-for-takeaways',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS System for Takeaways',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Complete ePOS system for takeaways including touchscreen till, kitchen printer, cash drawer, receipt printer, and software with collection and delivery workflows.',
    url: 'https://posso.co.uk/epos-systems-for-takeaways',
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
      'Touchscreen till with takeaway POS software',
      'Kitchen printer with auto-cut',
      'Cash drawer and receipt printer included',
      'Collection and delivery order management',
      'Online ordering website included',
      'Delivery zone and fee management',
      'Caller ID for returning customers',
      'Kitchen display system',
      'Integrated card payments',
      'Works offline',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'ePOS Systems for Takeaways', item: 'https://posso.co.uk/epos-systems-for-takeaways' },
    ],
  },
];

const bundleFeatures = [
  { icon: Monitor, title: '15.6" Touchscreen Till', description: 'Commercial-grade touchscreen terminal pre-loaded with Posso takeaway software. Built for greasy fingers, fast tapping, and busy Friday nights.' },
  { icon: Printer, title: 'Kitchen Printer', description: 'Thermal kitchen printer with auto-cut. Orders print the moment they are placed — collection or delivery, counter or online.' },
  { icon: Package, title: 'Cash Drawer', description: 'Heavy-duty cash drawer that opens automatically on cash sales. Five note compartments and eight coin slots for fast change.' },
  { icon: CreditCard, title: 'Card Terminal', description: 'Teya card machine with contactless, chip & PIN, Apple Pay, and Google Pay. Payments sync directly to your POS — no double entry.' },
  { icon: Smartphone, title: 'Online Ordering Website', description: 'Your own branded ordering website for collection and delivery. Customers order from their phone — orders go straight to your kitchen printer.' },
  { icon: Truck, title: 'Delivery Management', description: 'Set delivery zones with custom fees, assign drivers, track orders, and print delivery labels — all from the same till.' },
];

const workflowFeatures = [
  { title: 'Collection Orders', description: 'Customer calls or orders online. Order appears on your till and kitchen printer with a collection time. Mark as ready, customer collects. Simple.' },
  { title: 'Delivery Orders', description: 'Delivery orders auto-calculate the fee by postcode zone. Assign a driver, print a delivery label, and track the order from dispatch to delivery.' },
  { title: 'Walk-In Counter Orders', description: 'Tap items on the touchscreen, take payment by card or cash, and the kitchen printer fires immediately. Average transaction under 30 seconds.' },
  { title: 'Online Orders', description: 'Orders from your website and delivery apps (Just Eat, Uber Eats, Deliveroo) appear on the same till. One screen, one kitchen printer, zero chaos.' },
];

export default function EposSystemsForTakeawaysPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'ePOS Systems for Takeaways' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Zap className="w-3 h-3 mr-2" />
                COMPLETE TAKEAWAY ePOS BUNDLE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  ePOS Systems for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Takeaways
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Everything you need in one box — touchscreen till, kitchen printer, cash drawer, receipt printer, card terminal, and takeaway software. Not just software. The full package.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete hardware + software bundle from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Collection, delivery & online ordering built in</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Free setup, menu import & staff training</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What's in the Bundle */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                What You Get in the Box
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Most ePOS companies sell you software and tell you to source your own hardware. We supply everything — tested, configured, and ready to plug in.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {bundleFeatures.map((f) => (
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

        {/* Why a Full Bundle Beats Software-Only */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Why a Full Bundle Beats Software-Only
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Software-only ePOS providers look cheap on paper. But then you need to buy a tablet, find a compatible printer, source a cash drawer, and pray everything works together. When something breaks, you get passed between three different support teams.
                </p>
                <p>
                  With <strong className="text-white">Posso</strong>, you get one box with everything inside. We pre-configure the hardware, load your menu, and test the full system before shipping. When you call support, we know your exact setup because we built it.
                </p>
                <p>
                  That is the difference between a <strong className="text-white">takeaway ePOS system</strong> and a collection of parts you have to assemble yourself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collection & Delivery Workflows */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Built for How Takeaways Actually Work
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Four order types, one screen. Every workflow is built into the system — not bolted on as an afterthought.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {workflowFeatures.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Why 1,000+ Takeaways Use Posso
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: '2-Year Warranty', desc: 'Every piece of hardware covered for two full years. If it breaks, we replace it.' },
                  { icon: Clock, title: 'Go Live in 24 Hours', desc: 'We pre-configure everything. Plug in, switch on, and start taking orders the same day.' },
                  { icon: BarChart3, title: 'Real-Time Sales Reports', desc: 'Track your best sellers, peak hours, and revenue by channel — collection, delivery, and online.' },
                  { icon: Smartphone, title: 'Low Commission Online Ordering', desc: 'Your own ordering website with low commission rates. Keep more of every order compared to third-party apps.' },
                ].map((b) => (
                  <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50 flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <b.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{b.title}</h3>
                      <p className="text-slate-400">{b.desc}</p>
                    </div>
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Takeaway Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/best-epos-system-for-takeaway" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Best Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Feature comparison guide</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own ordering website</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integrations</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats & more</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="ePOS Systems for Takeaways — Frequently Asked Questions" faqs={[
          { question: 'What hardware is included in the takeaway ePOS bundle?', answer: 'The complete bundle includes a 15.6-inch touchscreen till, thermal kitchen printer with auto-cut, receipt printer, cash drawer, and all cables. The Posso takeaway software comes pre-installed. Card terminals are available separately through our Teya integration with low transaction rates.' },
          { question: 'Can I use the ePOS system for both collection and delivery orders?', answer: 'Yes. The system has separate workflows for collection, delivery, walk-in counter orders, and online orders. Delivery orders auto-calculate fees by postcode zone, and you can assign drivers and print delivery labels directly from the till.' },
          { question: 'Does the system work with Just Eat, Uber Eats, and Deliveroo?', answer: 'Yes. Orders from all major delivery platforms appear on your till and kitchen printer automatically through our delivery integration module. You manage everything from one screen instead of juggling multiple tablets.' },
          { question: 'How long does setup take?', answer: 'We pre-configure all hardware and load your menu before shipping. Most takeaways go live within 24 hours of receiving the equipment. Free setup assistance and staff training are included with every system.' },
          { question: 'What happens if the internet goes down during a busy period?', answer: 'The Posso ePOS system works offline. You can continue taking orders, processing cash payments, and printing kitchen tickets. Everything syncs automatically when the connection is restored.' },
          { question: 'How much does a complete takeaway ePOS system cost?', answer: 'Our POS systems start from £499 + VAT for the complete hardware and software bundle. Self-order kiosks start from £699 + VAT. Finance is available from £24.92 per week with free setup and a 2-year warranty included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
