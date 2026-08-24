import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Home, ScanBarcode, Package, ShoppingBag, MapPin, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeware POS',
  description:
    'Homeware POS system with barcode scanning, stock management, supplier ordering, and multi-location support. Built for homeware shops and home furnishing retailers. From £499 + VAT.',
  keywords: [
    'homeware pos',
    'homeware pos system',
    'homeware shop till',
    'home furnishing pos',
    'homeware epos',
    'retail pos homeware',
    'homeware stock management',
    'homeware shop software',
    'home goods pos system',
    'homeware retail software',
  ],
  alternates: {
    canonical: '/homeware-pos',
  },
  openGraph: {
    title: 'Homeware POS | Posso UK',
    description:
      'Homeware POS with barcode scanning, stock management, supplier ordering, and multi-location support for homeware retailers.',
    url: 'https://www.posso.co.uk/homeware-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Homeware POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Homeware POS system with barcode scanning, stock management, supplier ordering, and multi-location support for homeware shops and home furnishing retailers.',
    url: 'https://www.posso.co.uk/homeware-pos',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Barcode scanning and label printing',
      'Real-time stock management',
      'Supplier ordering and purchase orders',
      'Multi-location inventory sync',
      'Customer profiles and loyalty',
      'Sales analytics and margin reporting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Homeware POS', item: 'https://www.posso.co.uk/homeware-pos' },
    ],
  },
];

const features = [
  { icon: ScanBarcode, title: 'Barcode Scanning', description: 'Scan product barcodes at the till for instant identification and pricing. Print your own barcode labels for items without manufacturer barcodes. The scanner reads EAN, UPC, and custom codes. A homeware shop with 3,000 SKUs processes sales accurately without manual price lookups — every item scans, prices, and records in under a second.' },
  { icon: Package, title: 'Stock Management', description: 'Track every product in real time. When a candle sells, the stock count updates instantly. Set reorder alerts so you never run out of your best sellers. View stock levels by category — kitchenware, textiles, decorative items, furniture. Run a stock take with a handheld scanner and reconcile in minutes rather than days.' },
  { icon: ShoppingBag, title: 'Supplier Ordering', description: 'Create purchase orders directly from the POS. The system suggests reorders based on sales velocity and minimum stock levels. Send orders to suppliers electronically. When stock arrives, scan it in and the system updates quantities, costs, and margin calculations. A shop managing 20 suppliers keeps every relationship organised from one screen.' },
  { icon: MapPin, title: 'Multi-Location Sync', description: 'Run two shops, three shops, or ten from a single cloud dashboard. Inventory syncs across all locations in real time. Transfer stock between shops with a digital transfer note. Compare sales performance between locations. Head office sees everything — each shop operates independently at the till but reports to one central system.' },
  { icon: Home, title: 'Customer Profiles & Loyalty', description: 'Build a customer database with purchase history and preferences. When a customer who bought a dining table six months ago returns, you can suggest matching chairs. Run a loyalty programme that rewards repeat purchases. Send targeted emails when new stock arrives in categories they have bought from before.' },
  { icon: BarChart3, title: 'Sales & Margin Analytics', description: 'See your best sellers, worst performers, and margin by product, category, or supplier. Identify which products deliver the highest profit — not just revenue. Seasonal trends show you when to stock up on garden accessories or cosy textiles. Data-driven buying decisions replace gut feeling.' },
];

const benefits = [
  { title: 'Never Run Out of Best Sellers', description: 'Automated reorder alerts and supplier ordering mean your top products are always in stock. The system tracks sales velocity and warns you before stock runs low. A homeware shop that never has empty shelves on popular lines outsells competitors who rely on manual stock checks.' },
  { title: 'Speed Up the Till', description: 'Barcode scanning eliminates manual price entry and reduces errors. A transaction that took 2 minutes with manual lookup now takes 20 seconds with a scan. During the Christmas rush or a sale event, faster transactions mean shorter queues and happier customers.' },
  { title: 'Buy Smarter with Margin Data', description: 'Margin reporting shows you which products and suppliers are most profitable. Stop reordering items that sell but barely break even. Double down on products with healthy margins and strong demand. Your buying decisions are backed by data, not guesswork.' },
  { title: 'Scale to Multiple Locations', description: 'Open a second shop or a concession without duplicating effort. The cloud system syncs inventory, pricing, and customer data across all locations. Transfer stock where it sells best. Manage everything from one dashboard while each location runs independently at the point of sale.' },
];

export default function HomewarePosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Homeware POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Home className="w-3 h-3 mr-2" />
                BUILT FOR HOMEWARE RETAILERS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Homeware{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Barcode scanning, stock management, supplier ordering, and multi-location support — everything a homeware shop needs to sell more and manage inventory with precision.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Real-time stock tracking across all locations</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Supplier ordering built into the POS</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Homeware POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Homeware POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Purpose-built for homeware retailers who need precise stock control, fast transactions, and supplier management in one system.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Homeware Shops Choose Posso</h2>
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
                From Independent Shops to Growing Retail Chains
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  An independent homeware shop needs a system that <strong className="text-white">tracks thousands of products accurately</strong> and processes sales quickly. The Posso homeware POS handles barcode scanning, stock counts, and margin reporting — giving you full control over what sells and what sits on the shelf.
                </p>
                <p>
                  For growing retailers with multiple locations, the <strong className="text-white">cloud dashboard</strong> provides group-level visibility. See which products are flying off the shelves in one location and gathering dust in another. Transfer stock to where it sells. Standardise pricing or run location-specific promotions.
                </p>
                <p>
                  Add an <strong className="text-white">online store</strong> and your inventory syncs between your physical shop and website. Sell a vase in-store and it updates online instantly. Low commission on every online order means you keep more margin while reaching customers who prefer to browse from home.
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
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/bespoke-epos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bespoke ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Custom-built software</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Card payments for retail</p>
                </Link>
                <Link href="/custom-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Custom POS</p>
                  <p className="text-slate-400 text-sm mt-1">Tailored for your business</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Homeware POS — Frequently Asked Questions" faqs={[
          { question: 'Can it handle a large product catalogue?', answer: 'Yes. The system is designed for retailers with thousands of SKUs. Every product has a barcode, description, cost price, sale price, category, and supplier. You can import your catalogue from a spreadsheet during setup. Search, filter, and manage products from a single screen — whether you stock 500 items or 10,000.' },
          { question: 'How does supplier ordering work?', answer: 'Create purchase orders from the POS based on stock levels and sales data. The system suggests reorders when products fall below minimum thresholds. Send orders to suppliers electronically. When deliveries arrive, scan items in to update stock counts, costs, and margin calculations automatically.' },
          { question: 'Does it support multi-location inventory?', answer: 'Yes. Stock levels sync across all your shops in real time via the cloud. Transfer stock between locations with a digital transfer note. Head office sees inventory at every site. Each shop operates independently at the till, but inventory data is always up to date across the group.' },
          { question: 'Can I track margins and profitability?', answer: 'Yes. The system records cost price and sale price for every product. Reports show margin by product, category, supplier, and location. Identify your most profitable lines and spot products that sell well but barely break even. Use this data to negotiate better terms with suppliers or adjust pricing.' },
          { question: 'Is customer loyalty included?', answer: 'Yes. Customers can join your loyalty programme and earn points or rewards with every purchase. The system tracks their purchase history and preferences. Send targeted promotions when new stock arrives in categories they have bought from before. Loyalty features are included at no extra cost.' },
          { question: 'How much does a homeware POS cost?', answer: 'The complete homeware POS system starts from £499 + VAT including touchscreen terminal, barcode scanner, receipt printer, and stock management software. Multi-location features are included. Finance from £24.92 per week. Free setup, product import, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
