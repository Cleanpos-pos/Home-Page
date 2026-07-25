import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Coffee, Monitor, Heart, Zap, CupSoda, Clock } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coffee POS System',
  description:
    'Coffee POS System with barista KDS, milk and size modifiers, loyalty stamp cards, morning rush mode, and takeaway cup management. Built for coffee shops. From £499 + VAT.',
  keywords: [
    'coffee pos system',
    'coffee shop pos',
    'coffee shop till system',
    'coffee epos system',
    'cafe pos system',
    'barista pos',
    'coffee shop epos',
    'coffee till system',
    'coffee shop software',
    'coffee pos system uk',
  ],
  alternates: {
    canonical: '/coffee-pos-system',
  },
  openGraph: {
    title: 'Coffee POS System | Posso UK',
    description:
      'Coffee POS System with barista KDS, milk/size modifiers, loyalty stamps, and morning rush speed. Built for coffee shops.',
    url: 'https://www.posso.co.uk/coffee-pos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Coffee POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Coffee POS system with barista kitchen display, milk and size modifiers, digital loyalty stamp cards, morning rush optimisation, and takeaway cup management for coffee shops.',
    url: 'https://www.posso.co.uk/coffee-pos-system',
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
      reviewCount: '245',
      bestRating: '5',
    },
    featureList: [
      'Barista kitchen display with drink queue',
      'Milk and size modifiers with live pricing',
      'Digital loyalty stamp cards',
      'Morning rush speed mode',
      'Takeaway cup tracking and reporting',
      'Mobile ordering and click-and-collect',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Coffee POS System', item: 'https://www.posso.co.uk/coffee-pos-system' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Barista Kitchen Display', description: 'Orders appear on the barista display the moment they are placed. Each drink shows the full specification — size, milk, shots, syrup, temperature. Drinks are queued in order and marked off as they are made. During a morning rush of 30 drinks, your barista works through the queue without a single handwritten cup.' },
  { icon: Coffee, title: 'Milk & Size Modifiers', description: 'Every drink can be customised with modifiers: oat milk, soy, almond, coconut — plus extra shots, syrups, and decaf options. Prices adjust automatically. A large oat milk latte with an extra shot and vanilla syrup prices itself correctly in one tap. No mental arithmetic, no pricing errors.' },
  { icon: Heart, title: 'Digital Loyalty Stamps', description: 'Replace paper stamp cards with a digital version. Customers earn stamps automatically with each qualifying purchase. After 9 coffees, the 10th is free. Customers check their balance on their phone. You see which customers are most loyal, how often they visit, and what they order most.' },
  { icon: Zap, title: 'Morning Rush Speed Mode', description: 'When the queue hits the door at 8am, speed matters. Rush mode streamlines the POS to show only your top-selling drinks in large buttons. One tap for a regular latte, one tap for a flat white. Card payment processes while the next customer is already ordering. Designed to handle 3 transactions per minute.' },
  { icon: CupSoda, title: 'Takeaway Cup Management', description: 'Track dine-in versus takeaway for every drink. The system reports your takeaway cup usage so you can order supplies accurately. If you offer a discount for reusable cups, the POS applies it automatically. Monitor your takeaway-to-dine-in ratio and plan staffing and supplies accordingly.' },
  { icon: Clock, title: 'Click-and-Collect Ordering', description: 'Customers order and pay on their phone, then collect their coffee when it is ready. Orders arrive on the barista display alongside walk-in orders. A notification tells the customer when their drink is ready. During peak times, click-and-collect customers skip the queue — reducing congestion at the counter.' },
];

const benefits = [
  { title: 'Serve the Morning Rush Faster', description: 'Rush mode, barista display, and card-first payment flow are designed for the 7:30–9:00am peak. Three transactions per minute means a queue of 15 people clears in 5 minutes. Every second saved per transaction adds up to hundreds of extra coffees served per week.' },
  { title: 'Eliminate Drink Errors', description: 'Modifiers are selected on screen and displayed on the barista KDS. No interpreting handwriting, no shouting across the counter. The barista sees "Large, Oat, Extra Shot, Vanilla, Hot" on the display. The drink is made to specification every time. Fewer remakes, less waste, happier customers.' },
  { title: 'Build a Loyal Customer Base', description: 'Digital loyalty stamps give customers a reason to come back. The data shows you who your regulars are, how often they visit, and what they drink. Send targeted offers to customers who have not visited in two weeks. Turn occasional visitors into daily regulars with a programme that runs itself.' },
  { title: 'Grow Revenue with Mobile Ordering', description: 'Click-and-collect adds a new revenue channel without adding counter pressure. Office workers order ahead and collect on their commute. You capture sales that would otherwise go to the competitor with a shorter queue. Low commission on orders through your branded app means more profit per cup.' },
];

export default function CoffeePosSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Coffee POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Coffee className="w-3 h-3 mr-2" />
                BUILT FOR COFFEE SHOPS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Coffee POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Barista KDS, milk and size modifiers, digital loyalty stamps, morning rush speed mode, and click-and-collect — everything a coffee shop needs to serve faster and sell more.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Barista display shows every drink specification</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Digital loyalty stamps replace paper cards</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Coffee POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Coffee Shop POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Purpose-built for the speed, precision, and customer experience that coffee shops demand.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Coffee Shops Choose Posso</h2>
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
                From Single-Site Cafes to Coffee Chains
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  An independent coffee shop needs a system that handles the <strong className="text-white">morning rush without slowing down</strong>. The Posso coffee POS is built for speed — rush mode, barista display, and tap-to-pay keep the queue moving when every second counts.
                </p>
                <p>
                  For coffee chains, the <strong className="text-white">cloud dashboard</strong> gives you group-level reporting across all sites. Standardise your menu, compare sales between locations, and manage loyalty programmes centrally. Each shop operates independently during service, but the data rolls up to one view.
                </p>
                <p>
                  Add <strong className="text-white">mobile ordering</strong> and your customers order ahead, pay on their phone, and collect without queuing. During peak hours, click-and-collect customers bypass the counter queue entirely — reducing congestion and increasing throughput.
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
                <Link href="/cafe-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Cafe POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full cafe POS system</p>
                </Link>
                <Link href="/coffee-ordering-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Coffee Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile ordering for cafes</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Coffee POS System — Frequently Asked Questions" faqs={[
          { question: 'How does the barista display work?', answer: 'When a drink is ordered at the till or through mobile ordering, it appears instantly on the barista display screen. Each drink shows the full specification: size, milk type, number of shots, syrup, and temperature preference. The barista works through the queue in order and taps to mark each drink as complete. No handwritten cups, no shouting.' },
          { question: 'Can I set up drink modifiers and extras?', answer: 'Yes. Every drink can have modifiers: milk alternatives (oat, soy, almond, coconut), extra shots, syrups (vanilla, caramel, hazelnut), decaf, and temperature preferences. Each modifier can have its own price. A large oat milk latte with an extra shot and vanilla prices itself correctly in a single order flow.' },
          { question: 'How do digital loyalty stamps work?', answer: 'Customers link their phone number or email to your loyalty programme. Each qualifying purchase adds a digital stamp automatically. After the set number of stamps (e.g., 9), the next drink is free. Customers check their balance on their phone. You see loyalty data in your dashboard — visit frequency, favourite drinks, and retention rates.' },
          { question: 'What is morning rush mode?', answer: 'Rush mode reconfigures the POS screen to show only your top-selling items in large, easy-to-tap buttons. Regular latte, flat white, americano, cappuccino — one tap each. Combined with tap-to-pay card processing, you can complete a transaction in under 20 seconds. Designed for the 7:30–9:00am peak when speed is everything.' },
          { question: 'Does it support click-and-collect?', answer: 'Yes. Customers order and pay through your branded app or website. The order arrives on the barista display alongside walk-in orders. When the drink is ready, the customer receives a notification. They collect without queuing. During peak times, this reduces counter congestion and increases overall throughput.' },
          { question: 'How much does a coffee POS system cost?', answer: 'The complete coffee POS system starts from £499 + VAT including touchscreen terminal, barista display software, and loyalty programme. Mobile ordering is available at low commission. Finance from £24.92 per week. Free setup, menu configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
