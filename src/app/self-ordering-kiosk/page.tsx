import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, CreditCard, TrendingUp, ChefHat, Paintbrush, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self Ordering Kiosk',
  description:
    'Self Ordering Kiosk with 21-inch touchscreen, integrated card payment, custom branding, upselling prompts, and kitchen integration. Reduce queues and increase order value. Kiosks from £699 + VAT.',
  keywords: [
    'self ordering kiosk',
    'self order kiosk',
    'self service kiosk',
    'restaurant kiosk',
    'ordering kiosk uk',
    'self ordering kiosk uk',
    'touchscreen ordering kiosk',
    'food ordering kiosk',
    'self service ordering kiosk',
    'kiosk ordering system',
  ],
  alternates: {
    canonical: '/self-ordering-kiosk',
  },
  openGraph: {
    title: 'Self Ordering Kiosk | Posso UK',
    description:
      'Self Ordering Kiosk with 21" touchscreen, card payment, branding, upselling, and kitchen integration. Kiosks from £699 + VAT.',
    url: 'https://posso.co.uk/self-ordering-kiosk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Self Ordering Kiosk',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Self ordering kiosk with 21-inch touchscreen display, integrated contactless card payment, custom branding, intelligent upselling prompts, and direct kitchen display integration.',
    url: 'https://posso.co.uk/self-ordering-kiosk',
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
      reviewCount: '167',
      bestRating: '5',
    },
    featureList: [
      '21-inch capacitive touchscreen display',
      'Integrated contactless card payment terminal',
      'Custom branding — your colours, logo, and imagery',
      'Intelligent upselling prompts increase average order value',
      'Direct integration with kitchen display system',
      'Menu syncs with POS and online ordering',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Kiosks', item: 'https://posso.co.uk/kiosks' },
      { '@type': 'ListItem', position: 3, name: 'Self Ordering Kiosk', item: 'https://posso.co.uk/self-ordering-kiosk' },
    ],
  },
];

const features = [
  { icon: Monitor, title: '21" Touchscreen Display', description: 'A large, bright 21-inch capacitive touchscreen that customers can see clearly even in bright environments. Responsive touch means no frustrated jabbing at the screen. The display is commercial-grade — built for thousands of touches per day without degrading.' },
  { icon: CreditCard, title: 'Integrated Card Payment', description: 'The card payment terminal is built into the kiosk — no separate device to manage. Contactless, chip and PIN, Apple Pay, and Google Pay all accepted. Payment processes in under 2 seconds. The customer taps, pays, and moves on.' },
  { icon: Paintbrush, title: 'Your Brand, Your Kiosk', description: 'Upload your logo, set your brand colours, add product images, and the kiosk becomes an extension of your restaurant. Customers see your brand identity throughout the ordering journey — not a generic ordering interface with someone else\'s branding.' },
  { icon: TrendingUp, title: 'Upselling That Works', description: 'After selecting a main item, customers see relevant upsell suggestions — add a drink? upgrade to a meal deal? extra cheese? These prompts convert at 20-30% because customers are already in buying mode. Average order value increases by £2-4 per transaction.' },
  { icon: ChefHat, title: 'Kitchen Display Integration', description: 'When a customer completes their order, it appears on the kitchen display within 2 seconds. The ticket shows item details, modifiers, and order number. The customer receives a printed receipt with their order number to collect when ready.' },
  { icon: ShoppingCart, title: 'Menu Sync Across Channels', description: 'Your kiosk menu syncs with your POS and online ordering. Update a price or add a new item once, and it appears on the kiosk, counter POS, and website simultaneously. Mark an item as out of stock and it disappears from all channels.' },
];

const benefits = [
  { title: 'Reduce Queue Times by 50%', description: 'Two kiosks serve customers as fast as three counter staff. During lunch rush, kiosks absorb the ordering workload while staff focus on food preparation. Customers who see a short queue are more likely to stay — those who see a long one walk away.' },
  { title: 'Increase Average Order Value 20-30%', description: 'Kiosk upselling prompts are consistent and never forget. Every customer sees relevant suggestions at the right moment in the ordering journey. No awkward verbal upselling, no rushing past extras because the queue is long. The kiosk sells patiently, every time.' },
  { title: 'Free Your Staff for Better Tasks', description: 'When kiosks handle ordering and payment, your staff focus on food preparation, customer service, and keeping the restaurant clean. You serve more customers without hiring more people — or you maintain service levels with fewer staff during quieter periods.' },
  { title: 'Consistent Customer Experience', description: 'The kiosk presents the same menu, the same upsells, and the same ordering flow every time. No variation based on which staff member is on shift. Customers get a predictable, professional experience whether they visit at 8am or 8pm.' },
];

export default function SelfOrderingKioskPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Kiosks', href: '/kiosks' },
          { label: 'Self Ordering Kiosk' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                ORDER, PAY & GO — NO QUEUE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Self Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Kiosk
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                21-inch touchscreen kiosks with integrated card payment, custom branding, upselling prompts, and kitchen display integration. Customers order and pay in under 60 seconds.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> 21" touchscreen with integrated payment</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Upselling increases order value 20-30%</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Self ordering kiosks from £699 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Kiosk Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Commercial-grade hardware with intelligent software that sells more and serves faster.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Self Ordering Kiosks</h2>
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
                Kiosks for Every Food Business
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Fast food and QSR</strong> — kiosks are now expected in fast food restaurants. Customers choose self-service because it is faster, and they spend more because upselling prompts are consistent. Two kiosks plus one counter till handles the same throughput as four counter staff.
                </p>
                <p>
                  <strong className="text-white">Casual dining</strong> — kiosks work for order-at-counter restaurants where diners browse the menu on screen, order, pay, and take a table number. The kitchen fires their food when ready. No waiting staff needed for the ordering process.
                </p>
                <p>
                  <strong className="text-white">Cafes and bakeries</strong> — a single kiosk handles the morning coffee rush while staff focus on making drinks. Customers order at the kiosk, pay contactless, and collect at the counter. Queue times drop and throughput increases.
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
                  <p className="text-slate-400 text-sm mt-1">Counter POS features</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering site</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Self Ordering Kiosk — Frequently Asked Questions" faqs={[
          { question: 'What size is the kiosk touchscreen?', answer: 'The Posso self ordering kiosk features a 21-inch capacitive touchscreen display. It is commercial-grade, built for thousands of touches per day, and bright enough to see clearly in well-lit restaurant environments. The screen supports multi-touch for smooth scrolling and navigation.' },
          { question: 'How does kiosk upselling work?', answer: 'After a customer selects a main item, the kiosk displays relevant upsell suggestions — add a drink, upgrade to a meal deal, add extra toppings. The suggestions are configurable per product. These prompts convert at 20-30% and increase average order value by £2-4 per transaction.' },
          { question: 'Can I customise the kiosk with my branding?', answer: 'Yes. Upload your logo, set your brand colours, add product images, and configure the menu layout. The entire ordering interface reflects your brand identity. You can also add promotional banners and featured items to the home screen.' },
          { question: 'Does the kiosk accept contactless payment?', answer: 'Yes. The integrated payment terminal accepts contactless card, chip and PIN, Apple Pay, and Google Pay. Payment processes in under 2 seconds. The terminal is built into the kiosk unit — no separate device to manage or charge.' },
          { question: 'How does the kiosk connect to the kitchen?', answer: 'When a customer completes their order on the kiosk, it appears on the kitchen display system within 2 seconds. The kitchen ticket shows all items, modifiers, and the order number. The customer receives a printed receipt with their number to collect when ready.' },
          { question: 'How much does a self ordering kiosk cost?', answer: 'Self ordering kiosks start from £699 + VAT including the 21-inch touchscreen, payment terminal, receipt printer, and kiosk software. Finance options available. Free setup, menu configuration, and staff training included. The kiosk menu syncs with your POS — one menu to manage.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
