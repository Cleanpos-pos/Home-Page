import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Store, Image, Heart, Receipt, Layers, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sweet Shop Point of Sale',
  description:
    'Sweet Shop Point of Sale — complete till system with product images, customer loyalty, pick and mix, gift cards, and stock tracking for sweet shops and confectioners. From £499 + VAT.',
  keywords: [
    'sweet shop point of sale',
    'sweet shop till',
    'sweet shop epos system',
    'confectionery point of sale',
    'sweet shop till system uk',
    'candy store pos',
    'sweet shop register',
    'sweet shop checkout system',
    'confectioner pos',
    'sweet shop point of sale uk',
  ],
  alternates: {
    canonical: '/sweet-shop-point-of-sale',
  },
  openGraph: {
    title: 'Sweet Shop Point of Sale | Posso UK',
    description:
      'Sweet Shop Point of Sale — complete till with product images, loyalty, pick and mix, and stock tracking for confectionery retailers.',
    url: 'https://www.posso.co.uk/sweet-shop-point-of-sale',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Sweet Shop Point of Sale',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Complete sweet shop point of sale system with product image display, customer loyalty programme, pick and mix till integration, gift card management, and confectionery stock tracking.',
    url: 'https://www.posso.co.uk/sweet-shop-point-of-sale',
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
      reviewCount: '143',
      bestRating: '5',
    },
    featureList: [
      'Product images on till for visual identification',
      'Customer loyalty with points and rewards',
      'Pick and mix integration with scales',
      'Gift card sales and redemption',
      'Confectionery stock tracking by weight and unit',
      'Age-restricted product prompts',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Sweet Shop Point of Sale', item: 'https://www.posso.co.uk/sweet-shop-point-of-sale' },
    ],
  },
];

const features = [
  { icon: Image, title: 'Product Images on Till', description: 'Every sweet, chocolate, and confectionery item displays with a clear image on the touchscreen. New staff identify products instantly without memorising hundreds of names. A customer asks for "those pink and white ones" and the staff member finds them by image in seconds. Visual product tiles speed up service and reduce selection errors.' },
  { icon: Heart, title: 'Customer Loyalty Programme', description: 'Customers earn points on every purchase — 1 point per pound spent. After 100 points, they receive a reward: a free bag of pick and mix, a percentage discount, or a specific product. Children build up loyalty over weeks of pocket money visits. Parents appreciate the reward structure. The programme drives repeat visits and increases lifetime customer value.' },
  { icon: ShoppingBag, title: 'Pick & Mix Till Integration', description: 'The till connects to a digital scale for seamless pick and mix transactions. Customers fill their bag, staff place it on the scale, and the price calculates automatically by weight. Premium ranges can have higher per-gram rates. The customer sees the price building on the customer-facing display. Transparent pricing builds trust and reduces complaints.' },
  { icon: Receipt, title: 'Gift Card Management', description: 'Sell branded gift cards in any denomination. Cards are activated at the till and redeemable against any product. Check balances instantly. Track gift card sales and redemptions in your reports. Sweet shop gift cards are popular for birthdays, Christmas stockings, and thank-you gifts. They bring new customers through the door and generate revenue upfront.' },
  { icon: Layers, title: 'Category Organisation', description: 'Organise your till into logical categories: retro sweets, chocolate bars, pick and mix, fudge, gift boxes, drinks, and seasonal specials. Each category shows as a tab on the touchscreen. Subcategories drill down further — chocolate bars split into milk, dark, and white. Staff navigate hundreds of products in two taps maximum.' },
  { icon: Store, title: 'Customer-Facing Display', description: 'A second screen faces the customer showing each item as it is scanned or selected, the running total, and loyalty points earned. For weigh-and-pay, the customer watches the weight and price calculate in real time. Transparency reduces pricing queries and builds confidence. The display can also show promotions and offers during idle periods.' },
];

const benefits = [
  { title: 'Train New Staff in Minutes', description: 'Sweet shops often employ part-time and seasonal staff. Product images on the till screen mean a new starter can serve customers on their first day without memorising 200+ product names. Tap the image that matches the product, scan the barcode, or place the bag on the scale. The POS guides the transaction. Training takes minutes, not days.' },
  { title: 'Drive Repeat Visits with Loyalty', description: 'Sweet shops thrive on regular customers — children with pocket money, parents buying treats, office workers grabbing afternoon snacks. A loyalty programme gives every customer a reason to return to your shop instead of the supermarket confectionery aisle. Points accumulation creates a habit loop that turns occasional buyers into weekly regulars.' },
  { title: 'Sell More with Gift Cards', description: 'Gift cards are pure margin. They bring new customers into your shop who might never have visited otherwise. 15-20% of gift card value typically goes unredeemed — that is profit. The rest brings customers through the door who often spend beyond the card value. Sweet shop gift cards are natural gifts for children and work as corporate thank-you items.' },
  { title: 'Manage Seasonal Stock Effectively', description: 'Sweet shops have strong seasonal patterns — Easter eggs, Christmas selection boxes, Halloween treats, Valentine chocolates. The POS tracks seasonal product performance year over year. See exactly how many Easter eggs you sold last April to plan this year order. Avoid overstock that ends up discounted or wasted after the season passes.' },
];

export default function SweetShopPointOfSalePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Sweet Shop Point of Sale' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Store className="w-3 h-3 mr-2" />
                COMPLETE SWEET SHOP TILL SYSTEM
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Sweet Shop Point{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  of Sale
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Product images for instant identification, customer loyalty, pick and mix scales, gift cards, and stock tracking — a complete point of sale for sweet shops and confectioners.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Product images on till for quick identification</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Loyalty, gift cards, and customer rewards</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Sweet shop point of sale from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Sweet Shop Till Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything a confectionery retailer needs to serve faster, sell more, and manage stock.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Confectioners Choose Posso</h2>
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
                The Modern Sweet Shop Experience
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Today&apos;s sweet shops compete with <strong className="text-white">supermarket confectionery aisles and online sweet subscription boxes</strong>. The advantage of an independent sweet shop is the experience — the jars, the pick and mix, the personal service. A modern point of sale enhances that experience rather than slowing it down.
                </p>
                <p>
                  <strong className="text-white">Customer loyalty programmes</strong> give your regulars a reason to choose your shop over the supermarket every time. Children love watching their points build up. Parents appreciate the reward structure. A loyalty programme turns your sweet shop into a destination, not an impulse stop.
                </p>
                <p>
                  With <strong className="text-white">gift cards and seasonal promotions</strong>, you capture revenue that would otherwise go elsewhere. A £10 sweet shop gift card in a Christmas stocking brings a new customer through the door in January. A half-term holiday promotion fills the shop when schools are out. The POS manages it all automatically.
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
                <Link href="/pos-for-sweet-shop" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS for Sweet Shop</p>
                  <p className="text-slate-400 text-sm mt-1">Weigh-and-pay POS</p>
                </Link>
                <Link href="/shop-till-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Shop Till Software</p>
                  <p className="text-slate-400 text-sm mt-1">Retail till software</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machine</p>
                  <p className="text-slate-400 text-sm mt-1">Card payment terminals</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Sweet Shop Point of Sale — Frequently Asked Questions" faqs={[
          { question: 'How do product images work on the till?', answer: 'Every product in your catalogue can have a photograph displayed on the touchscreen. When staff browse categories or search for a product, they see the image alongside the name and price. This is especially valuable in sweet shops with 200+ loose sweet varieties — staff identify products visually without needing to memorise every name. Images are uploaded during setup or added via the cloud portal.' },
          { question: 'How does the loyalty programme work?', answer: 'Customers register with a phone number or email. Each purchase earns points automatically — typically 1 point per £1 spent. When they reach the reward threshold (e.g., 100 points), they can redeem for a free product, a discount, or a specific reward you define. Points balances are checked at the till instantly. The dashboard shows customer visit frequency, average spend, and favourite products.' },
          { question: 'Can I sell and manage gift cards?', answer: 'Yes. Sell physical or digital gift cards in any denomination from the till. Cards are activated at the point of sale and can be redeemed against any product. Check balances instantly by scanning or entering the card number. Track total gift card sales, redemptions, and outstanding balances in your reports. Partially used cards retain their remaining balance for future visits.' },
          { question: 'Does it handle seasonal products?', answer: 'Yes. Create seasonal categories that appear on the till during specific date ranges — Easter eggs from February to April, Christmas selection boxes from October to December, Halloween treats in October. Year-over-year comparison reports show exactly what sold last season, helping you plan orders accurately and avoid overstock that gets discounted or wasted.' },
          { question: 'Can it manage age-restricted products?', answer: 'Yes. If you sell any age-restricted confectionery products (such as items containing alcohol), the POS prompts for age verification at the point of sale. The prompt cannot be bypassed without manager authorisation. This ensures compliance with licensing regulations and protects your business from accidental underage sales.' },
          { question: 'How much does a sweet shop point of sale cost?', answer: 'The complete sweet shop point of sale starts from £499 + VAT including touchscreen terminal, barcode scanner, receipt printer, and scale connection. Loyalty programme, gift card management, and stock tracking are included. Finance from £24.92 per week. Free setup with product images configured and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
