import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Zap, TrendingUp, Timer, CreditCard, Monitor, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self Order Kiosk Fast Food',
  description:
    'Self Order Kiosk Fast Food with speed-optimised ordering, upselling prompts, combo meal builder, queue reduction, and kitchen integration. Increase throughput and average order value. Kiosks from £699 + VAT.',
  keywords: [
    'self order kiosk fast food',
    'fast food kiosk',
    'self service kiosk fast food',
    'fast food ordering kiosk',
    'qsr kiosk',
    'quick service kiosk',
    'fast food self order',
    'kiosk ordering fast food',
    'fast food ordering system',
    'fast food kiosk uk',
  ],
  alternates: {
    canonical: '/self-order-kiosk-fast-food',
  },
  openGraph: {
    title: 'Self Order Kiosk Fast Food | Posso UK',
    description:
      'Self Order Kiosk Fast Food with speed ordering, upselling, combo meals, and queue reduction. Kiosks from £699 + VAT.',
    url: 'https://posso.co.uk/self-order-kiosk-fast-food',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Self Order Kiosk Fast Food',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Self order kiosk for fast food restaurants with speed-optimised ordering, intelligent upselling, combo meal builder, queue reduction technology, and direct kitchen display integration.',
    url: 'https://posso.co.uk/self-order-kiosk-fast-food',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '699',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '198',
      bestRating: '5',
    },
    featureList: [
      'Speed-optimised ordering for fast food workflows',
      'Intelligent upselling — add drinks, sides, upgrades',
      'Combo meal builder with one-tap meal deals',
      'Queue reduction — serve more customers per hour',
      'Direct kitchen display integration',
      'Integrated contactless card payment',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Kiosks', item: 'https://posso.co.uk/kiosks' },
      { '@type': 'ListItem', position: 3, name: 'Self Order Kiosk Fast Food', item: 'https://posso.co.uk/self-order-kiosk-fast-food' },
    ],
  },
];

const features = [
  { icon: Zap, title: 'Speed-Optimised Ordering', description: 'The kiosk interface is designed for speed. Popular items are front and centre. Category navigation takes one tap. A complete fast food order — burger, fries, drink — takes under 45 seconds. During lunch rush, speed is the difference between a queue of 5 and a queue of 20.' },
  { icon: TrendingUp, title: 'Intelligent Upselling', description: 'After selecting a burger, the customer sees: "Make it a meal for £2 more?" Then: "Upgrade to large for 50p?" These prompts convert at 25-35% on kiosks — significantly higher than verbal upselling at the counter. Average order value increases by £2-5 per transaction.' },
  { icon: ShoppingCart, title: 'Combo Meal Builder', description: 'One-tap meal deals let customers select a main, side, and drink as a combo. The price updates automatically. Custom combos let customers mix and match within categories. The meal deal price is always visible so customers see the savings instantly.' },
  { icon: Timer, title: 'Queue Reduction', description: 'Two kiosks handle the same ordering throughput as three counter staff. During the 12-1pm lunch rush, kiosks absorb the peak while staff focus on food preparation. Customers who see a short queue stay. Those who see a long one go to the competitor next door.' },
  { icon: Monitor, title: 'Kitchen Integration', description: 'Kiosk orders appear on the kitchen display within 2 seconds. The ticket shows items, customisations, and order number. Customers collect with their receipt number. The kitchen works one queue — kiosk and counter orders interleaved by time of submission.' },
  { icon: CreditCard, title: 'Fast Contactless Payment', description: 'Integrated card terminal processes contactless payments in under 2 seconds. Tap, done. Apple Pay and Google Pay supported. For fast food, eliminating cash handling at the kiosk speeds up the entire transaction and reduces errors.' },
];

const benefits = [
  { title: 'Serve More Customers Per Hour', description: 'During the lunch rush, every second counts. Kiosks process orders simultaneously while counter staff focus on preparation. A restaurant with 2 kiosks and 2 counter tills serves 40% more customers per hour than one with 4 counter tills alone.' },
  { title: 'Higher Average Order Value', description: 'Kiosk upselling is consistent, patient, and never rushed. Every customer sees meal deal offers, size upgrades, and add-on suggestions. Counter staff under pressure skip upselling to keep the queue moving. The kiosk never skips it — and the 25-35% conversion rate proves it works.' },
  { title: 'Reduce Labour Costs', description: 'Two kiosks replace the ordering workload of two counter staff. Those staff members are redeployed to food preparation, cleaning, or customer service — roles that directly improve the customer experience. You serve more customers without increasing headcount.' },
  { title: 'Consistent Brand Experience', description: 'The kiosk delivers the same ordering experience every time — same menu layout, same upselling prompts, same payment flow. No variation based on which staff member is on shift. Customers get a predictable, professional experience at 8am and 8pm.' },
];

export default function SelfOrderKioskFastFoodPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Kiosks', href: '/kiosks' },
          { label: 'Self Order Kiosk Fast Food' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Zap className="w-3 h-3 mr-2" />
                FASTER ORDERS, BIGGER TICKETS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Self Order Kiosk{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Fast Food
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Speed-optimised kiosks for fast food restaurants. Combo meal builder, upselling that converts at 25-35%, and queue reduction that keeps customers coming back.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete order in under 45 seconds</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Upselling increases orders by £2-5</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Fast food kiosks from £699 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Fast Food Kiosk Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">Speed, upselling, and throughput — the three things that drive fast food profitability.</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Fast Food Restaurants Choose Kiosks</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">The Maths Behind Fast Food Kiosks</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Consider a fast food restaurant averaging <strong className="text-white">200 orders per day</strong> with an average order value of £8. If kiosk upselling increases that average by £2.50, that is <strong className="text-white">£500 per day in extra revenue</strong> — £3,500 per week, £182,000 per year.
                </p>
                <p>
                  A kiosk costs £699 + VAT. At £500 per day in extra revenue, the kiosk <strong className="text-white">pays for itself in less than 2 days</strong>. The ROI on fast food kiosks is among the highest of any restaurant technology investment.
                </p>
                <p>
                  Add the labour efficiency — 2 kiosks absorbing the ordering workload of 2 counter staff — and the total value compounds. Staff redeployed to food prep means faster kitchen output, which means <strong className="text-white">more orders served before customers get tired of waiting</strong>.
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
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">All Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Full kiosk range</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Counter POS</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Self Order Kiosk Fast Food — Frequently Asked Questions" faqs={[
          { question: 'How fast can customers order on the kiosk?', answer: 'A complete fast food order — main item, side, drink, and payment — takes under 45 seconds on the Posso kiosk. The interface is optimised for speed with popular items prominent, one-tap meal deals, and fast contactless payment. This is comparable to or faster than counter ordering.' },
          { question: 'How much does upselling increase average order value?', answer: 'Restaurants using Posso kiosks see average order value increases of £2-5 per transaction. Meal deal prompts, size upgrades, and add-on suggestions convert at 25-35% on kiosks because customers browse at their own pace without feeling rushed.' },
          { question: 'How many kiosks do I need for my fast food restaurant?', answer: 'Most fast food restaurants start with 2 kiosks alongside their counter till. Two kiosks handle the ordering throughput of approximately 3 counter staff during peak hours. For very high-volume locations, 3-4 kiosks are recommended. We assess your peak traffic during the consultation.' },
          { question: 'Do kiosk orders go straight to the kitchen?', answer: 'Yes. When a customer completes their order and pays, it appears on the kitchen display within 2 seconds. The ticket shows items, customisations, and the order number. Kiosk and counter orders are interleaved by submission time so the kitchen works one unified queue.' },
          { question: 'Can I customise the kiosk with meal deals and combos?', answer: 'Yes. Set up meal deals with configurable choices — pick a main, pick a side, pick a drink — with automatic combo pricing. Feature seasonal promotions on the home screen. Upselling prompts are configurable per product. The entire interface reflects your brand colours and imagery.' },
          { question: 'How much does a fast food kiosk cost?', answer: 'Fast food self order kiosks start from £699 + VAT including the 21-inch touchscreen, integrated payment terminal, receipt printer, and kiosk software. The kiosk menu syncs with your POS — one menu to manage. Finance options available. Free setup and training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
