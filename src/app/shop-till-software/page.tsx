import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, ShoppingBag, Package, BarChart3, ScanBarcode, Building2, Monitor } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Till Software',
  description:
    'Shop Till Software for retail and hospitality with stock control, barcode scanning, real-time reporting, and multi-location management. From £499 + VAT.',
  keywords: [
    'shop till software',
    'till software',
    'shop till system',
    'retail till software',
    'till software uk',
    'shop epos software',
    'electronic till software',
    'shop pos software',
    'till system for shops',
    'till software for small business',
  ],
  alternates: {
    canonical: '/shop-till-software',
  },
  openGraph: {
    title: 'Shop Till Software | Posso UK',
    description:
      'Shop Till Software for retail and hospitality — stock control, barcode scanning, reporting, and multi-location support. From £499 + VAT.',
    url: 'https://www.posso.co.uk/shop-till-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Shop Till Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Till software for retail and hospitality shops with stock control, barcode scanning, real-time sales reporting, multi-location management, and cloud-based dashboard.',
    url: 'https://www.posso.co.uk/shop-till-software',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Stock control with automatic tracking',
      'Barcode scanning for fast product lookup',
      'Real-time sales and profit reporting',
      'Multi-location management from one dashboard',
      'Cloud-based with offline capability',
      'Customisable touchscreen till layout',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Shop Till Software', item: 'https://www.posso.co.uk/shop-till-software' },
    ],
  },
];

const features = [
  { icon: Package, title: 'Stock Control', description: 'Track every product in your shop automatically. Stock levels update as items are sold. Set reorder points and receive alerts when stock runs low. View stock valuations, wastage reports, and supplier purchase history. For shops with variants — sizes, colours, flavours — track stock at the variant level so you know exactly what needs reordering.' },
  { icon: ScanBarcode, title: 'Barcode Scanning', description: 'Scan barcodes to add items to a sale instantly. No searching through product lists or typing item names. The barcode scanner reads existing manufacturer barcodes or you can print your own for non-barcoded products. Scanning is the fastest way to process sales — especially for shops with hundreds or thousands of SKUs.' },
  { icon: BarChart3, title: 'Real-Time Reporting', description: 'See what is selling, when, and how much profit each product generates. Daily, weekly, and monthly reports show sales trends, best sellers, slow movers, and profit margins. Staff performance reports track individual sales by employee. All data is live — check reports on your phone from anywhere, updated to the minute.' },
  { icon: Building2, title: 'Multi-Location Management', description: 'Run multiple shops from one cloud dashboard. Standardise product lists and pricing across locations or customise per site. Compare sales performance between shops. Transfer stock between locations. Each shop operates independently during service but all data rolls up to a central view for owners and managers.' },
  { icon: Monitor, title: 'Customisable Till Layout', description: 'Arrange products on the touchscreen in the way that makes most sense for your staff. Group by category, colour-code for quick identification, add product images. For hospitality shops — cafes, bakeries, delis — arrange by food type with modifier buttons for customisation. The layout adapts to your workflow, not the other way around.' },
  { icon: ShoppingBag, title: 'Works for Retail & Hospitality', description: 'The same core software adapts to both retail and hospitality. Retail features include barcode scanning, stock variants, and purchase orders. Hospitality features include modifiers, kitchen printing, and table management. Whether you run a gift shop, a bakery, or a convenience store, the software configures to match your business type.' },
];

const benefits = [
  { title: 'Stop Running Out of Best-Sellers', description: 'Automatic stock tracking means you know exactly how much of every product you have. Low-stock alerts arrive before you run out — not after. No more discovering your top-selling item is out of stock during the busiest part of the week. The system does the counting so you focus on selling.' },
  { title: 'Process Sales Faster', description: 'Barcode scanning and an optimised touchscreen layout mean transactions take seconds. For a busy shop with a lunchtime queue, faster transactions mean shorter waits and more customers served. New staff learn the system in under an hour because the interface is intuitive and the barcode scanner does the heavy lifting.' },
  { title: 'Understand Your Business with Data', description: 'Real-time reports show you which products generate the most profit, which days are busiest, and which staff perform best. Stop guessing about what to reorder, when to run promotions, and where to focus your efforts. Data-driven decisions consistently outperform gut feelings.' },
  { title: 'Manage Multiple Shops Easily', description: 'If you have more than one location, the cloud dashboard shows all shops on one screen. Compare daily sales, check stock levels across sites, and manage products centrally. Transfer stock between locations when one shop is running low. Scale from one shop to five without changing your till system.' },
];

export default function ShopTillSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Shop Till Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <ShoppingBag className="w-3 h-3 mr-2" />
                TILL SOFTWARE FOR RETAIL & HOSPITALITY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Shop Till{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Stock control, barcode scanning, real-time reporting, and multi-location management — till software that works for any shop, from a corner store to a growing chain.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Automatic stock tracking with low-stock alerts</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Barcode scanning for instant product lookup</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Shop till software from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Shop Till Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Core features that every shop needs — plus the flexibility to adapt to your specific business type.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Shops Choose Posso Till Software</h2>
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
                Till Software for Every Type of Shop
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">convenience store</strong> needs barcode scanning and fast checkout. A <strong className="text-white">bakery</strong> needs modifiers for fillings and sizes. A <strong className="text-white">gift shop</strong> needs stock variants for colours and sizes. The Posso till software handles all of these from one configurable platform.
                </p>
                <p>
                  For retail-focused shops, the emphasis is on <strong className="text-white">barcode scanning, stock management, and purchase orders</strong>. Scan products at the till, track stock automatically, and generate purchase orders when levels run low. The system handles hundreds or thousands of products without slowing down.
                </p>
                <p>
                  For hospitality-focused shops like cafes, delis, and bakeries, the software adds <strong className="text-white">modifiers, kitchen printing, and order management</strong>. A customer orders a baguette — the modifier asks what filling, what bread, toasted or not. The specification prints in the kitchen. Same till software, different configuration.
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
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Cloud POS software</p>
                </Link>
                <Link href="/touchscreen-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Touchscreen POS</p>
                  <p className="text-slate-400 text-sm mt-1">Touchscreen terminals</p>
                </Link>
                <Link href="/cafe-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cafe POS</p>
                  <p className="text-slate-400 text-sm mt-1">Cafe till system</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Shop Till Software — Frequently Asked Questions" faqs={[
          { question: 'Does the till software work for both retail and hospitality?', answer: 'Yes. The core till software handles sales, stock, and reporting for any business type. For retail, enable barcode scanning, stock variants, and purchase orders. For hospitality, enable modifiers, kitchen printing, and table management. One platform configured to your specific needs — you only see the features relevant to your business.' },
          { question: 'How does stock control work?', answer: 'Stock levels update automatically as items are sold. Set reorder points for each product and receive low-stock alerts by email or on the dashboard. View stock valuations, track wastage, and see supplier purchase history. For products with variants (sizes, colours), stock is tracked at the variant level so you know exactly which variants need reordering.' },
          { question: 'Can I use barcode scanning?', answer: 'Yes. Connect a barcode scanner to the till and scan existing manufacturer barcodes to add items to a sale instantly. For non-barcoded products, generate and print barcodes from the system. Barcode scanning is the fastest way to process sales — essential for shops with large product ranges.' },
          { question: 'Can I manage multiple shops?', answer: 'Yes. The cloud dashboard shows all your shops on one screen. Standardise or customise product lists per location. Compare sales between shops, track group-level stock, and transfer inventory between sites. Each shop operates independently during service, but data rolls up to one central view.' },
          { question: 'Does it work offline?', answer: 'Yes. The till software stores data locally, so it continues working if the internet drops. Sales, payments, and receipts process normally. When connectivity returns, all data syncs to the cloud automatically. No lost transactions and no interrupted service.' },
          { question: 'How much does shop till software cost?', answer: 'The complete setup including touchscreen terminal, cash drawer, receipt printer, and software starts from £499 + VAT. Barcode scanner available as an add-on. Finance from £24.92 per week. Free setup, product import, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
