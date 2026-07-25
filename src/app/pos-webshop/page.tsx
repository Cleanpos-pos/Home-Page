import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, ShoppingCart, RefreshCw, Package, Globe, BarChart3, CreditCard } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS Webshop',
  description:
    'POS Webshop with integrated online store, real-time product sync, unified inventory, and combined reporting. Sell in-store and online from one system. POS from £499 + VAT.',
  keywords: [
    'pos webshop',
    'pos with online store',
    'epos webshop integration',
    'pos system with webshop',
    'integrated pos and webshop',
    'pos online shop',
    'ecommerce pos system',
    'pos with ecommerce',
    'webshop till system',
    'pos webshop uk',
  ],
  alternates: {
    canonical: '/pos-webshop',
  },
  openGraph: {
    title: 'POS Webshop | Posso UK',
    description:
      'POS Webshop with integrated online store, real-time product sync, and unified inventory. Sell in-store and online from one system.',
    url: 'https://www.posso.co.uk/pos-webshop',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS Webshop',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'POS system with integrated webshop for selling in-store and online. Real-time product sync, unified inventory management, combined sales reporting, and online payment processing.',
    url: 'https://www.posso.co.uk/pos-webshop',
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
      reviewCount: '204',
      bestRating: '5',
    },
    featureList: [
      'Integrated online webshop',
      'Real-time product and stock sync',
      'Unified inventory management',
      'Combined in-store and online reporting',
      'Online payment processing',
      'Click-and-collect fulfilment',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS Webshop', item: 'https://www.posso.co.uk/pos-webshop' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Integrated Online Store', description: 'Your webshop launches from the same system as your POS. Products, images, descriptions, and prices are entered once and appear on both your in-store till and your online shop. No separate ecommerce platform to manage. One product catalogue serves every sales channel.' },
  { icon: RefreshCw, title: 'Real-Time Product Sync', description: 'When you update a price, add a new product, or change a description on the POS, the webshop updates instantly. When a customer buys the last unit online, the in-store stock count drops to zero in real time. No overselling, no manual reconciliation, no end-of-day sync delays.' },
  { icon: Package, title: 'Unified Inventory Management', description: 'One stock pool serves all channels. Sell 5 units in-store and 3 online — the system shows the correct remaining quantity everywhere. Set low-stock alerts, automate reorder points, and track inventory value across your entire business from one dashboard. No spreadsheets, no guesswork.' },
  { icon: ShoppingCart, title: 'Click-and-Collect', description: 'Customers order on your webshop and collect from your store. The order appears on your POS with a collection time. Staff pick the items, and the customer receives a notification when the order is ready. Drives online customers into your physical location — where they often buy additional items.' },
  { icon: CreditCard, title: 'Online Payment Processing', description: 'Your webshop accepts card payments, Apple Pay, Google Pay, and bank transfers. Payments settle into your account with low commission. No third-party payment gateway to configure separately — it is built into the Posso platform. PCI-compliant and secure by default.' },
  { icon: BarChart3, title: 'Combined Sales Reporting', description: 'See in-store and online sales in one report. Compare channel performance, identify products that sell better online versus in-store, and track total revenue across all channels. Daily, weekly, and monthly breakdowns with export to CSV for your accountant.' },
];

const benefits = [
  { title: 'Sell Online Without the Complexity', description: 'Most POS-to-webshop setups require a separate ecommerce platform, a sync plugin, and hours of configuration. Posso builds the webshop into the POS. You enter products once, and they appear in both places. No integration to maintain, no sync errors to fix, no two systems to learn.' },
  { title: 'Never Oversell Again', description: 'Real-time inventory sync means the webshop always shows accurate stock levels. When the last unit sells in-store, the online listing immediately shows out of stock. No angry emails from customers who ordered something you have already sold. Stock accuracy builds customer trust.' },
  { title: 'Drive Footfall with Click-and-Collect', description: 'Click-and-collect brings online customers into your store. Research shows that 30% of click-and-collect customers buy additional items when they visit. Your webshop becomes a footfall driver — not a replacement for your physical location, but a complement to it.' },
  { title: 'One System to Learn and Manage', description: 'Your staff learn one system. Your accountant receives one set of reports. Your stock lives in one place. Every sales channel — till, webshop, mobile — draws from the same product catalogue and the same inventory. Simplicity reduces errors and saves management time every single day.' },
];

export default function PosWebshopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS Webshop' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <ShoppingCart className="w-3 h-3 mr-2" />
                POS + ONLINE STORE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Webshop
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Sell in-store and online from one system. Products, stock, and pricing sync in real time between your POS and your webshop. No separate ecommerce platform needed.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS with integrated webshop from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Real-time stock sync across all channels</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission on online payments</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">POS Webshop Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                One product catalogue, one stock pool, one reporting dashboard — serving every sales channel.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose a POS Webshop</h2>
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
                From Retail Shops to Restaurant Ordering
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">retail shop</strong> uses the POS webshop to sell products online that customers cannot find locally. The same barcode-scanned inventory that sits on your shelves appears on your website with photos, descriptions, and live stock counts. Orders come in for delivery or click-and-collect.
                </p>
                <p>
                  A <strong className="text-white">restaurant or takeaway</strong> uses the webshop as a branded online ordering platform. Customers browse the menu, place their order, and pay online. The order fires to the kitchen display. No third-party marketplace commission — just your brand, your customers, your margin.
                </p>
                <p>
                  A <strong className="text-white">multi-location business</strong> manages all stores and their webshops from one dashboard. Each location has its own stock, but the product catalogue is shared. Promotions can be rolled out to every store and webshop simultaneously, or targeted to specific locations.
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
                  <p className="text-slate-400 text-sm mt-1">Complete POS platform</p>
                </Link>
                <Link href="/food-to-order-online" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food to Order Online</p>
                  <p className="text-slate-400 text-sm mt-1">Online food ordering</p>
                </Link>
                <Link href="/homeware-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Homeware POS</p>
                  <p className="text-slate-400 text-sm mt-1">Retail POS system</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS Webshop — Frequently Asked Questions" faqs={[
          { question: 'How does the POS webshop sync products?', answer: 'Products are entered once on the POS. The webshop pulls product data — name, description, images, price, stock level — in real time. When you update a price or stock count on the POS, the webshop reflects the change instantly. There is no manual import/export or scheduled sync. It is one shared product catalogue.' },
          { question: 'Can customers order online for collection?', answer: 'Yes. Click-and-collect is built in. Customers place their order on the webshop and select a collection time. The order appears on your POS with the customer name and collection slot. Staff pick and prepare the order, and the customer receives a notification when it is ready to collect.' },
          { question: 'What payment methods does the webshop accept?', answer: 'The webshop accepts Visa, Mastercard, American Express, Apple Pay, Google Pay, and bank transfers. Payments are processed with low commission and settle directly into your bank account. The payment system is PCI-compliant and built into the Posso platform — no third-party gateway required.' },
          { question: 'Do I need a separate hosting provider?', answer: 'No. The webshop is hosted on the Posso platform. You get a branded URL (yourshop.posso.co.uk) or connect your own domain. Hosting, SSL certificate, and ongoing maintenance are included. No separate hosting fees, no technical setup, no CMS to manage.' },
          { question: 'Can I use the webshop for food ordering?', answer: 'Yes. Restaurants, takeaways, and food businesses use the webshop as a branded online ordering platform. Customers browse the menu with images, select items and modifiers, choose delivery or collection, and pay online. Orders fire directly to the kitchen display.' },
          { question: 'How much does a POS webshop cost?', answer: 'The POS system with integrated webshop starts from £499 + VAT. Online payment processing is available at low commission with no monthly gateway fees. Finance available from £24.92 per week. Free setup, product upload assistance, and staff training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
