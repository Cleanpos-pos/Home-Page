import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, ScanBarcode, Scale, Package, Truck, Heart, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grocery Store ePOS',
  description:
    'Grocery Store ePOS with barcode scanning, weigh scale integration, stock management, supplier ordering, and customer loyalty. Built for grocery and convenience stores. From £499 + VAT.',
  keywords: [
    'grocery store epos',
    'grocery pos system',
    'grocery epos',
    'convenience store pos',
    'grocery store till',
    'supermarket pos system',
    'grocery epos uk',
    'grocery store pos software',
    'shop epos system',
    'grocery stock management',
  ],
  alternates: {
    canonical: '/grocery-store-epos',
  },
  openGraph: {
    title: 'Grocery Store ePOS | Posso UK',
    description:
      'Grocery Store ePOS with barcode scanning, scales, stock management, supplier ordering, and loyalty. Built for grocery stores.',
    url: 'https://www.posso.co.uk/grocery-store-epos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Grocery Store ePOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'ePOS system for grocery and convenience stores with barcode scanning, weigh scale integration, stock management, supplier ordering, and customer loyalty programmes.',
    url: 'https://www.posso.co.uk/grocery-store-epos',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Barcode scanning with product lookup',
      'Weigh scale integration for loose goods',
      'Stock management with low-stock alerts',
      'Supplier ordering and purchase orders',
      'Customer loyalty programme',
      'Age-restricted product verification',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Grocery Store ePOS', item: 'https://www.posso.co.uk/grocery-store-epos' },
    ],
  },
];

const features = [
  { icon: ScanBarcode, title: 'Barcode Scanning', description: 'Scan product barcodes and the ePOS instantly retrieves the item name, price, VAT rate, and stock level. Works with standard EAN-13, UPC, and Code 128 barcodes. Import your product catalogue from a spreadsheet or scan items one by one to build it. The scanner handles over 1,000 scans per hour — fast enough for the busiest checkout.' },
  { icon: Scale, title: 'Weigh Scale Integration', description: 'Connect weigh scales directly to the ePOS for loose produce, deli items, and pick-and-mix. Place the item on the scale, select the product, and the system calculates the price by weight automatically. Supports pricing per kilogram, per 100g, and per pound. The weight and price print on the receipt for full transparency. No manual calculation needed.' },
  { icon: Package, title: 'Stock Management', description: 'Track stock levels in real time across every product. When a barcode is scanned at the till, stock deducts automatically. Set low-stock thresholds and receive alerts when items need reordering. View stock reports by category, supplier, or best-before date. Know exactly what is on your shelves, what is running low, and what needs ordering — without a manual stock take.' },
  { icon: Truck, title: 'Supplier Ordering', description: 'Create purchase orders directly from the ePOS based on stock levels. The system suggests reorder quantities based on sales velocity and current stock. Send orders to suppliers by email. When deliveries arrive, scan items in and stock levels update automatically. Track supplier pricing, compare costs, and identify where you can negotiate better deals.' },
  { icon: Heart, title: 'Customer Loyalty Programme', description: 'Reward regular shoppers with a digital loyalty programme. Customers earn points on every purchase and redeem them for discounts. Track customer spending patterns, visit frequency, and favourite products. Send targeted offers — 10% off fresh fruit for customers who always buy vegetables, for example. Build loyalty without the cost of paper stamp cards.' },
  { icon: BarChart3, title: 'Age Verification & Compliance', description: 'When a restricted product is scanned — alcohol, tobacco, energy drinks — the system prompts for age verification before completing the sale. Staff confirm the check with a single tap. Every verification is logged with a timestamp and staff ID for compliance records. Challenge 25 prompts ensure your store meets legal requirements consistently.' },
];

const benefits = [
  { title: 'Speed Up the Checkout Queue', description: 'Barcode scanning processes items in under a second. Scale integration calculates loose produce pricing instantly. Combined, a basket of 20 items scans and totals in under 30 seconds. During peak times, faster checkouts mean shorter queues, happier customers, and more transactions per hour. Every second saved at checkout adds up over thousands of daily transactions.' },
  { title: 'Never Run Out of Best Sellers', description: 'Stock management with low-stock alerts means you reorder before the shelf goes empty. The system tracks sales velocity — if you sell 40 pints of milk per day, it alerts you when stock drops below 2 days of supply. Supplier ordering from the ePOS means a restock order takes 60 seconds. No clipboard, no guesswork, no empty shelves.' },
  { title: 'Reduce Shrinkage and Waste', description: 'Real-time stock tracking highlights discrepancies between expected and actual stock. If 100 units were received and 90 were sold, but only 5 remain on the shelf, 5 units are unaccounted for. The system flags this for investigation. For perishables, best-before tracking helps you discount items before they expire — reducing waste and recovering revenue.' },
  { title: 'Build a Loyal Customer Base', description: 'The loyalty programme turns occasional shoppers into regulars. Points accumulation gives customers a reason to choose your store over a competitor. The data shows you what your customers buy, how often they visit, and what offers drive them back. A well-run loyalty programme increases visit frequency by 20-30% — significant for a grocery store margin.' },
];

export default function GroceryStoreEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Grocery Store ePOS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <ScanBarcode className="w-3 h-3 mr-2" />
                BUILT FOR GROCERY STORES
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Grocery Store{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ePOS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Barcode scanning, weigh scales, stock management, supplier ordering, and loyalty — everything a grocery store needs to run faster and sell smarter.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Barcode scanning with instant product lookup</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Weigh scale integration for loose produce</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Grocery store ePOS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Grocery ePOS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Purpose-built for the speed, stock control, and compliance demands of grocery retail.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Grocery Stores Choose Posso</h2>
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
                From Corner Shop to Multi-Store Chain
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A single grocery store needs an ePOS that <strong className="text-white">scans fast, tracks stock accurately, and handles cash and card</strong>. Posso delivers all three. Barcode scanning processes items in under a second. Stock deducts automatically at every sale. Cash and card reconcile at end of day without manual counting.
                </p>
                <p>
                  For multi-store operators, the <strong className="text-white">cloud dashboard</strong> connects every till across every location. Compare sales between stores, manage pricing centrally, and track stock across the group. When a promotion runs across all stores, push the price change from one screen. Each store operates independently during trading hours, but data is always unified.
                </p>
                <p>
                  The <strong className="text-white">supplier ordering module</strong> turns stock management from a weekly chore into a daily habit. The system suggests what to reorder based on sales data. Staff create purchase orders in 60 seconds. When deliveries arrive, scanning items in updates stock instantly. Less time on admin, more time serving customers.
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
                <Link href="/homeware-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Homeware POS</p>
                  <p className="text-slate-400 text-sm mt-1">Retail POS system</p>
                </Link>
                <Link href="/shop-till-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Shop Till Software</p>
                  <p className="text-slate-400 text-sm mt-1">Retail till solutions</p>
                </Link>
                <Link href="/till-system-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Till System Software</p>
                  <p className="text-slate-400 text-sm mt-1">Modern till software</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Grocery Store ePOS — Frequently Asked Questions" faqs={[
          { question: 'Does the ePOS work with barcode scanners?', answer: 'Yes. The Posso grocery ePOS works with standard USB and Bluetooth barcode scanners. It reads EAN-13, UPC, Code 128, and other common formats. When a barcode is scanned, the system instantly retrieves the product name, price, VAT rate, and current stock level. We can supply scanners as part of your hardware package.' },
          { question: 'Can I connect weigh scales to the till?', answer: 'Yes. The ePOS integrates with compatible weigh scales for loose produce, deli items, and pick-and-mix. Place the item on the scale, select the product code, and the price calculates automatically by weight. The weight and price appear on the customer display and receipt. Scales are available as part of your hardware package.' },
          { question: 'How does stock management work?', answer: 'Stock levels update in real time as items are scanned at the till. Set low-stock thresholds for each product and receive alerts when reordering is needed. View stock reports by category, supplier, or shelf life. Perform stocktakes using a barcode scanner and the system highlights discrepancies between expected and actual stock.' },
          { question: 'Can I create purchase orders for suppliers?', answer: 'Yes. The supplier ordering module lets you create purchase orders based on stock levels and sales data. The system suggests reorder quantities based on how quickly items sell. Send orders to suppliers by email directly from the dashboard. When deliveries arrive, scan items in to update stock levels automatically.' },
          { question: 'Does it handle age-restricted products?', answer: 'Yes. When a restricted product is scanned — alcohol, tobacco, certain energy drinks, lottery, knives — the system prompts for age verification. The staff member confirms the check and the sale proceeds. Every verification is logged with a timestamp, staff ID, and outcome for compliance records. Challenge 25 prompts are configurable.' },
          { question: 'How much does a grocery store ePOS cost?', answer: 'The complete grocery ePOS starts from £499 + VAT including touchscreen terminal, barcode scanner, stock management software, and loyalty programme. Scale integration and multi-till setups available. Low commission on card transactions. Free setup, product import, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
