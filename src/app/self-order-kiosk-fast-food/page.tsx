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
    url: 'https://www.posso.co.uk/self-order-kiosk-fast-food',
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
    url: 'https://www.posso.co.uk/self-order-kiosk-fast-food',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '699',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Kiosks', item: 'https://www.posso.co.uk/kiosks' },
      { '@type': 'ListItem', position: 3, name: 'Self Order Kiosk Fast Food', item: 'https://www.posso.co.uk/self-order-kiosk-fast-food' },
    ],
  },
];

const features = [
  { icon: Zap, title: 'Speed-Optimised Ordering', description: 'The kiosk interface is designed for speed. Popular items are front and centre. Category navigation takes one tap. A complete fast food order — burger, fries, drink — is a handful of taps. During lunch rush, speed is the difference between a queue of 5 and a queue of 20.' },
  { icon: TrendingUp, title: 'Intelligent Upselling', description: 'After selecting a burger, the customer sees: "Make it a meal for £2 more?" Then: "Upgrade to large for 50p?" The prompt appears on every order, at the moment the customer is choosing, rather than only when the counter is quiet enough for staff to ask.' },
  { icon: ShoppingCart, title: 'Combo Meal Builder', description: 'One-tap meal deals let customers select a main, side, and drink as a combo. The price updates automatically. Custom combos let customers mix and match within categories. The meal deal price is always visible so customers see the savings instantly.' },
  { icon: Timer, title: 'Queue Reduction', description: 'Two kiosks handle the same ordering throughput as three counter staff. During the 12-1pm lunch rush, kiosks absorb the peak while staff focus on food preparation. Customers who see a short queue stay. Those who see a long one go to the competitor next door.' },
  { icon: Monitor, title: 'Kitchen Integration', description: 'Kiosk orders appear on the kitchen display as soon as payment completes. The ticket shows items, customisations, and order number. Customers collect with their receipt number. The kitchen works one queue — kiosk and counter orders interleaved by time of submission.' },
  { icon: CreditCard, title: 'Fast Contactless Payment', description: 'Integrated card terminal takes contactless payments. Tap, done. Apple Pay and Google Pay supported. For fast food, eliminating cash handling at the kiosk speeds up the entire transaction and reduces errors.' },
];

const benefits = [
  { title: 'Serve More Customers Per Hour', description: 'During the lunch rush, every second counts. Kiosks process orders simultaneously while counter staff focus on preparation. Adding kiosks alongside your counter tills opens more order points at once, so the queue splits instead of stacking behind a single till.' },
  { title: 'Higher Average Order Value', description: 'Kiosk upselling is consistent, patient, and never rushed. Every customer sees meal deal offers, size upgrades, and add-on suggestions. Counter staff under pressure skip upselling to keep the queue moving. The kiosk never skips it, on the tenth order of the rush or the last one of the night.' },
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
                Speed-optimised kiosks for fast food restaurants. Combo meal builder, an upsell prompt on every order, and queue reduction that keeps customers coming back.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete an order in a handful of taps</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Upsell prompt fires on every order</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">How to Work Out Kiosk Payback</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most kiosk payback sums divide the hardware cost by extra <em>revenue</em>. That overstates the answer badly, because a pound of extra sales is not a pound in your pocket — you still have to buy the food. Work it on <strong className="text-white">gross margin</strong> instead, in four steps.
                </p>
                <ol className="space-y-4 list-decimal pl-6">
                  <li><strong className="text-white">Take your own average order value and gross margin.</strong> Gross margin is sales minus food cost, expressed as a percentage. Your accounts have both figures — do not borrow a number from a vendor page.</li>
                  <li><strong className="text-white">Measure the uplift per kiosk order.</strong> Run one kiosk for a few weeks and compare the average kiosk order against the average counter order over the same period. That difference is your uplift, not an industry range.</li>
                  <li><strong className="text-white">Convert the uplift into gross profit.</strong> Multiply kiosk orders per day by the uplift per order, then by your gross margin. Extra sales at a thin margin buy you a fraction of what the headline suggests.</li>
                  <li><strong className="text-white">Divide the total cost by that daily gross profit.</strong> Count the kiosk, the software fee and any installation — not just the headline hardware price.</li>
                </ol>
                <div className="glass-card rounded-xl border border-slate-700/50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Worked illustration — assumed inputs, not measured results</p>
                  <p>
                    Every number below is an assumption chosen to demonstrate the method. Replace each one with your own before drawing any conclusion from it.
                  </p>
                  <ul className="mt-4 space-y-2 text-base">
                    <li>Assume 80 orders a day are placed at the kiosk.</li>
                    <li>Assume the average kiosk order runs 80p above the average counter order.</li>
                    <li>Assume a gross margin of 65%.</li>
                  </ul>
                  <p className="mt-4">
                    Extra gross profit per day = 80 × £0.80 × 0.65 = <strong className="text-white">£41.60</strong>. Against a £699 + VAT kiosk that is roughly 17 trading days before the hardware is covered, and longer once the monthly software fee is included.
                  </p>
                  <p className="mt-4 text-slate-400 text-base">
                    Change any one of those assumptions and the answer moves a long way. A thinner margin, a smaller uplift or fewer kiosk orders turns weeks into months. Posso does not promise a payback period — the point of the method is that you can work out your own.
                  </p>
                </div>
                <p>
                  Labour is the other half of the picture. Kiosks add order points without adding staffed tills, so the queue splits at peak and staff can move across to preparation. Whether that saves a shift or simply makes an existing shift less frantic depends on how your rota is built.
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
          { question: 'How fast can customers order on the kiosk?', answer: 'A complete fast food order — main item, side, drink, and payment — takes a handful of taps on the Posso kiosk. The interface is optimised for speed with popular items prominent, one-tap meal deals, and fast contactless payment. How long it takes in practice depends on your menu size and how deep your customisation options go.' },
          { question: 'How much does upselling increase average order value?', answer: 'Any increase depends on your menu, your prices and how you configure the prompts, so the honest answer is to measure it on your own tills. The mechanism is that meal deal prompts, size upgrades and add-on suggestions appear on every kiosk order, while customers browse at their own pace without feeling rushed.' },
          { question: 'How many kiosks do I need for my fast food restaurant?', answer: 'Most fast food restaurants start with 2 kiosks alongside their counter till. Two kiosks handle the ordering throughput of approximately 3 counter staff during peak hours. For very high-volume locations, 3-4 kiosks are recommended. We assess your peak traffic during the consultation.' },
          { question: 'Do kiosk orders go straight to the kitchen?', answer: 'Yes. When a customer completes their order and pays, it appears on the kitchen display straight away. The ticket shows items, customisations, and the order number. Kiosk and counter orders are interleaved by submission time so the kitchen works one unified queue.' },
          { question: 'Can I customise the kiosk with meal deals and combos?', answer: 'Yes. Set up meal deals with configurable choices — pick a main, pick a side, pick a drink — with automatic combo pricing. Feature seasonal promotions on the home screen. Upselling prompts are configurable per product. The entire interface reflects your brand colours and imagery.' },
          { question: 'How much does a fast food kiosk cost?', answer: 'Fast food self order kiosks start from £699 + VAT including the 21-inch touchscreen, integrated payment terminal, receipt printer, and kiosk software. The kiosk menu syncs with your POS — one menu to manage. Finance options available. Free setup and training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
