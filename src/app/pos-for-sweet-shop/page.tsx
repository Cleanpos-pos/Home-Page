import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Candy, Scale, Barcode, Package, Calculator, Tags } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS for Sweet Shop',
  description:
    'POS for Sweet Shop with weigh-and-pay, pick and mix pricing, barcode scanning, stock management, and customer loyalty. Built for sweet shops and confectionery retailers. From £499 + VAT.',
  keywords: [
    'pos for sweet shop',
    'sweet shop pos',
    'sweet shop till system',
    'confectionery pos system',
    'pick and mix pos',
    'sweet shop epos',
    'candy shop pos',
    'weigh and pay pos',
    'sweet shop till',
    'sweet shop pos uk',
  ],
  alternates: {
    canonical: '/pos-for-sweet-shop',
  },
  openGraph: {
    title: 'POS for Sweet Shop | Posso UK',
    description:
      'POS for Sweet Shop — weigh-and-pay, pick and mix, barcode scanning, and stock management built for confectionery retailers.',
    url: 'https://posso.co.uk/pos-for-sweet-shop',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS for Sweet Shop',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Sweet shop POS system with integrated scale for weigh-and-pay, pick and mix per-gram pricing, barcode scanning, stock management with reorder alerts, and customer loyalty programmes.',
    url: 'https://posso.co.uk/pos-for-sweet-shop',
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
      reviewCount: '156',
      bestRating: '5',
    },
    featureList: [
      'Integrated scale for weigh-and-pay pricing',
      'Pick and mix per-gram and per-scoop pricing',
      'Barcode scanning for pre-packaged sweets',
      'Stock management with reorder alerts',
      'Customer loyalty and gift vouchers',
      'Product images on till screen for quick ID',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS for Sweet Shop', item: 'https://posso.co.uk/pos-for-sweet-shop' },
    ],
  },
];

const features = [
  { icon: Scale, title: 'Weigh-and-Pay Integration', description: 'Connect a digital scale directly to the POS. Place a bag of sweets on the scale, the weight reads automatically, and the price calculates based on your per-gram rate. No manual weight entry, no mental arithmetic, no pricing disputes. A 250g bag at £1.20 per 100g rings up at £3.00 instantly. Accurate, fast, and tamper-proof.' },
  { icon: Candy, title: 'Pick & Mix Pricing', description: 'Set prices per gram, per scoop, or per bag for your pick and mix range. Customers fill their bag, you place it on the scale, and the POS calculates the total. Different sections can have different per-gram rates — premium imported sweets at one price, traditional favourites at another. The system handles mixed pricing without confusion.' },
  { icon: Barcode, title: 'Barcode Scanning', description: 'Pre-packaged sweets, boxed chocolates, and branded confectionery scan through the barcode reader instantly. The product, price, and stock level update in one beep. Scan 50 items in a transaction and the POS keeps up. For own-brand products, print custom barcode labels from the system with product name, weight, price, and allergen information.' },
  { icon: Package, title: 'Stock Management', description: 'Track every sweet jar, pre-packaged box, and pick and mix line. Set reorder points and receive alerts when stock drops below your threshold. See which sweets sell fastest and which gather dust. The POS tracks stock in grams for loose sweets and in units for packaged products. Monthly stock reports show exactly where your money is tied up.' },
  { icon: Tags, title: 'Gift Vouchers and Loyalty', description: 'Sell physical or digital gift vouchers redeemable against any product. Run a loyalty programme where customers earn points on every purchase. A child saving pocket money can build a loyalty balance over weeks. Gift vouchers are a pure revenue driver — 15-20% of vouchers are never redeemed, and the rest bring new customers through the door.' },
  { icon: Calculator, title: 'Margin and Pricing Tools', description: 'Enter your cost price and the POS calculates your margin at different selling prices. Compare profitability across product categories — pick and mix margins versus boxed chocolates versus branded bars. Identify your best margin products and position them prominently. Price increases can be applied by category or individually with bulk edit tools.' },
];

const benefits = [
  { title: 'Speed Up the Queue', description: 'Sweet shops get busy on weekends and school holidays. Weigh-and-pay calculates instantly, barcode scanning handles pre-packaged items in a beep, and the touchscreen is organised by category. A transaction that took 2 minutes with manual entry takes 30 seconds with the POS. Shorter queues mean more customers served and fewer who walk away.' },
  { title: 'Eliminate Pricing Errors', description: 'Manual calculation of weigh-and-pay prices leads to errors — undercharging loses margin, overcharging loses customers. The integrated scale and automatic price calculation eliminate both. Every transaction is accurate to the gram. Over a month of hundreds of weigh-and-pay transactions, the accuracy savings are significant.' },
  { title: 'Control Stock and Reduce Waste', description: 'Sweet shops carry hundreds of lines. Without stock tracking, you discover empty jars when a customer asks for something. With the POS, reorder alerts trigger before you run out. Stock reports show slow movers that need promoting or discontinuing. Better stock management means less expired product and fewer missed sales.' },
  { title: 'Increase Average Basket Value', description: 'Product images on the till screen prompt staff to suggest complementary items. A customer buying pick and mix is shown the new fudge range. Gift vouchers are offered at the till. Loyalty points encourage a return visit. These small prompts increase average transaction value by 10-15% without aggressive selling.' },
];

export default function PosForSweetShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS for Sweet Shop' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Candy className="w-3 h-3 mr-2" />
                BUILT FOR SWEET SHOPS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sweet Shop
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Weigh-and-pay, pick and mix pricing, barcode scanning, stock management, and customer loyalty — a POS system built for the unique needs of sweet shops.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Integrated scale for weigh-and-pay</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pick and mix per-gram pricing</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Sweet shop POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Sweet Shop POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every tool a sweet shop needs — from weigh-and-pay to stock control.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Sweet Shops Choose Posso</h2>
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
                From Penny Sweets to Premium Confectionery
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A sweet shop sells <strong className="text-white">hundreds of product lines</strong> — loose pick and mix, pre-packaged bags, boxed chocolates, fudge by weight, retro sweets by the jar, and seasonal specials. The Posso POS handles every selling method: per gram, per scoop, per unit, and per barcode scan.
                </p>
                <p>
                  <strong className="text-white">Stock management for a sweet shop</strong> is uniquely challenging. Loose sweets deplete in grams, not units. Seasonal lines need ordering weeks in advance. Best-before dates vary across hundreds of products. The POS tracks it all — alerting you when jars need refilling, flagging slow movers, and showing exactly which sweets drive the most profit.
                </p>
                <p>
                  With <strong className="text-white">product images on the till screen</strong>, even new staff can identify hundreds of sweet varieties instantly. No more asking the manager which jar contains cola bottles versus cherry lips. Visual product identification speeds up service and reduces errors — especially important when you have 200+ loose sweet lines.
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
                <Link href="/sweet-shop-point-of-sale" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Sweet Shop POS</p>
                  <p className="text-slate-400 text-sm mt-1">Complete till system</p>
                </Link>
                <Link href="/shop-till-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Shop Till Software</p>
                  <p className="text-slate-400 text-sm mt-1">Retail till software</p>
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

        <FAQSection title="POS for Sweet Shop — Frequently Asked Questions" faqs={[
          { question: 'How does weigh-and-pay work?', answer: 'Connect a digital scale to the POS via USB. Select the pick and mix category, place the bag on the scale, and the weight reads automatically. The POS calculates the price based on your per-gram rate — for example, 250g at £1.20 per 100g equals £3.00. No manual entry, no calculator, no errors. Different product categories can have different per-gram rates.' },
          { question: 'Can I manage hundreds of sweet lines?', answer: 'Yes. The POS supports unlimited products organised into categories and subcategories. Each product can have an image for visual identification on the till screen. Loose sweets are tracked in grams, packaged products in units. Barcode scanning handles pre-packaged items. Search by name or scan to find any product in your range instantly.' },
          { question: 'Does it handle pick and mix with different prices?', answer: 'Yes. You can set different per-gram rates for different pick and mix sections. Premium imported sweets might be £1.50 per 100g while traditional favourites are £1.00 per 100g. The system can also handle per-scoop pricing for items like fudge or chocolate-covered nuts. Mixed bags with items from different price categories are calculated accurately.' },
          { question: 'Can I print barcode labels?', answer: 'Yes. Print custom barcode labels for own-brand products, pre-packed bags, and gift boxes. Labels include product name, weight, price, barcode, and allergen information. Print labels individually or in batches. When you make a batch of 50 fudge bags, print 50 labels in one go. Labels scan at the till like any branded product.' },
          { question: 'How does stock tracking work for loose sweets?', answer: 'Loose sweets are tracked in grams. When you receive a delivery of 5kg of cola bottles, add 5000g to stock. Each sale deducts the weight sold. Set a reorder point at 500g and receive an alert when stock drops below that level. Monthly stock reports show consumption, waste, and reorder requirements for every line in your range.' },
          { question: 'How much does a sweet shop POS cost?', answer: 'The complete sweet shop POS starts from £499 + VAT including touchscreen terminal, integrated scale connection, barcode scanner, and receipt printer. Stock management, loyalty programme, and gift vouchers are included. Finance from £24.92 per week. Free setup, product configuration with images, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
