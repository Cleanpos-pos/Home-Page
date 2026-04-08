import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Scale, Barcode, Package, CreditCard, ShoppingBag, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sweet Shop POS System',
  description:
    'Sweet Shop POS System with weigh-and-pay, barcode scanning, pick and mix pricing, stock management, and integrated card payments. Built for sweet shops and confectionery retail. POS from £499 + VAT.',
  keywords: [
    'sweet shop pos',
    'sweet shop pos system',
    'sweet shop till',
    'confectionery pos system',
    'pick and mix pos',
    'sweet shop epos',
    'weigh and pay pos',
    'candy shop pos system',
    'sweet shop till system',
    'retail pos sweet shop',
  ],
  alternates: {
    canonical: '/sweet-shop-pos',
  },
  openGraph: {
    title: 'Sweet Shop POS System | Posso UK',
    description:
      'Sweet Shop POS System with weigh-and-pay, barcode scanning, pick & mix pricing, and stock management. POS from £499 + VAT.',
    url: 'https://posso.co.uk/sweet-shop-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Sweet Shop POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Sweet shop POS system with weigh-and-pay functionality, barcode scanning, pick and mix pricing by weight, stock management for loose and packaged confectionery, and integrated card payments.',
    url: 'https://posso.co.uk/sweet-shop-pos',
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
      reviewCount: '76',
      bestRating: '5',
    },
    featureList: [
      'Weigh-and-pay with connected scale integration',
      'Barcode scanning for packaged confectionery',
      'Pick and mix pricing by weight — per 100g or per kg',
      'Stock management for loose and pre-packed items',
      'Integrated contactless card payments',
      'Visual product grid with sweet images',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Sweet Shop POS System', item: 'https://posso.co.uk/sweet-shop-pos' },
    ],
  },
];

const features = [
  { icon: Scale, title: 'Weigh-and-Pay', description: 'Connect a scale to the POS and price pick and mix by weight. Scoop the sweets into the bag, place on the scale, and the POS calculates the price per 100g or per kg. Fast, accurate, and eliminates the mental arithmetic that slows down busy sweet shops.' },
  { icon: Barcode, title: 'Barcode Scanning', description: 'Scan packaged sweets, chocolate bars, and pre-packed confectionery. The product, price, and stock level update automatically. For items without barcodes (jars, pick and mix bags), use the visual product grid to tap and add. Both workflows work side by side.' },
  { icon: ShoppingBag, title: 'Pick & Mix Pricing', description: 'Set prices per 100g or per kg for different pick and mix categories. Premium sweets like fudge can be priced higher per 100g than basic sweets. The POS displays the price per weight so customers know exactly what they are paying as the bag fills up.' },
  { icon: Package, title: 'Stock Management', description: 'Track stock for packaged items by barcode and loose items by weight. Know when you are running low on cola bottles, when to reorder fudge, and which sweets are not selling. Set low stock alerts so you never disappoint a customer with an empty jar.' },
  { icon: CreditCard, title: 'Card & Contactless', description: 'Sweet shop transactions are often small — £2, £3, £5. Contactless payment makes these quick. Tap, done. Apple Pay and Google Pay supported. No minimum transaction amount. For larger gift purchases, chip and PIN is available too.' },
  { icon: BarChart3, title: 'Sales Reporting', description: 'Track which sweets sell best, compare sales by day of the week, and identify slow-moving stock. See how pick and mix sales compare to pre-packed. Seasonal analysis shows when to stock up on chocolate (Christmas), candy (Halloween), and fudge (summer holidays).' },
];

const benefits = [
  { title: 'Accurate Pick & Mix Pricing', description: 'Guessing the price of a bag of pick and mix leads to undercharging or customer disputes. The weigh-and-pay scale gives an exact price based on weight. Customers see the price building as sweets go on the scale. No surprises, no arguments, no lost margin from undercharging.' },
  { title: 'Speed at the Counter', description: 'Sweet shops get rushes — school run, weekend foot traffic, holiday periods. Barcode scanning for packaged items and one-tap for popular loose sweets keeps the queue moving. Contactless payment completes the transaction in seconds. Fast service means more customers served before they lose patience.' },
  { title: 'Know Your Stock', description: 'Sweet shops carry hundreds of lines — jars of loose sweets, pre-packed bags, chocolate bars, fudge, gift boxes. Without stock management, you discover you are out of something when a customer asks for it. The POS tracks stock levels and alerts you before jars go empty.' },
  { title: 'Understand What Sells', description: 'Which sweets are your best sellers? Which are sitting in jars for weeks? Which days of the week drive the most sales? POS reporting answers these questions with data instead of guesswork. Stock the sweets that sell and phase out the ones that do not.' },
];

export default function SweetShopPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Sweet Shop POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Scale className="w-3 h-3 mr-2" />
                WEIGH, SCAN & SELL — SWEET SHOP POS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Sweet Shop POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Weigh-and-pay for pick and mix, barcode scanning for packaged sweets, stock management, and card payments. A POS built for the way sweet shops actually work.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Weigh-and-pay with connected scale</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pick & mix pricing per 100g or per kg</li>
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
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">Weigh, scan, and sell — everything a sweet shop needs at the counter.</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">More Than Just a Till</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Many sweet shops use a basic cash register or even a calculator and cash box. This works when you are small, but as you grow — <strong className="text-white">multiple staff, hundreds of products, VAT returns, stock counting</strong> — you need a proper system.
                </p>
                <p>
                  The Posso sweet shop POS gives you professional stock management, accurate weigh-and-pay pricing, card payments, and <strong className="text-white">sales reporting that shows you what is really happening</strong> in your business. Which sweets are making money? Which are tying up cash on the shelf? The data tells you.
                </p>
                <p>
                  For sweet shops with an online presence, Posso also supports <strong className="text-white">online ordering for delivery and collection</strong>. Customers order gift boxes and pick and mix bags online, and the order arrives on your POS for fulfilment. One system for counter sales and online sales.
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
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Contactless payments</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Sell sweets online</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Compare options</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Sweet Shop POS System — Frequently Asked Questions" faqs={[
          { question: 'How does weigh-and-pay work for pick and mix?', answer: 'Connect a compatible scale to the POS. When a customer fills a bag of pick and mix, place it on the scale. The POS reads the weight and calculates the price based on your per-100g or per-kg rate. Different categories can have different rates — premium fudge at one price, standard sweets at another.' },
          { question: 'Can I scan barcodes on packaged sweets?', answer: 'Yes. The POS supports barcode scanning for all pre-packed items — chocolate bars, sweet bags, gift boxes. Scan the barcode and the product, price, and stock update automatically. For loose items without barcodes, use the visual product grid or weigh-and-pay function.' },
          { question: 'Does the POS track stock for loose sweets?', answer: 'Yes. Track loose sweet stock by weight — record how much you receive from the wholesaler and the POS deducts as you sell. When stock drops below your reorder level, you get an alert. This prevents empty jars and helps you plan wholesale orders accurately.' },
          { question: 'Can I accept card payments for small transactions?', answer: 'Yes. There is no minimum transaction amount. Sweet shop purchases of £1-2 are processed at the same speed as larger transactions. Contactless payment takes under 2 seconds. Apple Pay and Google Pay are supported alongside chip and PIN for larger amounts.' },
          { question: 'Can I sell sweets online through the same system?', answer: 'Yes. Posso supports online ordering so customers can order gift boxes, pick and mix selections, and packaged sweets for delivery or collection. Online orders arrive on your POS for fulfilment. One menu manages both counter and online sales.' },
          { question: 'How much does the sweet shop POS cost?', answer: 'The sweet shop POS starts from £499 + VAT including the touchscreen terminal, POS software, and barcode scanner. Scale integration for weigh-and-pay is available. Card terminals available separately. Free setup, product import, and training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
