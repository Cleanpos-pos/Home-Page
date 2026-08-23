import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, CreditCard, Clock, Tv, Smartphone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self Serve Kiosk',
  description:
    'Self Serve Kiosk for unattended ordering with 24/7 operation, card-only payment, attract screen, and vending-style automation. No staff required. Kiosks from £699 + VAT.',
  keywords: [
    'self serve kiosk',
    'self service kiosk',
    'unattended kiosk',
    'self serve ordering kiosk',
    'vending kiosk',
    'card only kiosk',
    '24 7 kiosk',
    'self serve kiosk uk',
    'automated ordering kiosk',
    'touchscreen self serve kiosk',
  ],
  alternates: {
    canonical: '/self-serve-kiosk',
  },
  openGraph: {
    title: 'Self Serve Kiosk | Posso UK',
    description:
      'Self Serve Kiosk for unattended 24/7 ordering. Card-only payment, attract screen, and vending-style automation. No staff needed.',
    url: 'https://www.posso.co.uk/self-serve-kiosk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Self Serve Kiosk',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Self serve kiosk software for unattended ordering with 24/7 operation, card-only payment processing, attract screen loop, and vending-style automation for food and retail businesses.',
    url: 'https://www.posso.co.uk/self-serve-kiosk',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '699',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '176',
      bestRating: '5',
    },
    featureList: [
      'Unattended 24/7 ordering mode',
      'Card-only payment processing',
      'Attract screen with animated promotions',
      'Vending-style automated operation',
      'Remote menu and pricing management',
      'Real-time sales monitoring dashboard',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Self Serve Kiosk', item: 'https://www.posso.co.uk/self-serve-kiosk' },
    ],
  },
];

const features = [
  { icon: Clock, title: 'Unattended 24/7 Operation', description: 'The kiosk operates around the clock without staff supervision. Customers walk up, browse the menu, place an order, and pay — all without human interaction. The system handles everything from order confirmation to kitchen notification. Ideal for late-night takeaways, hotel lobbies, campus canteens, and anywhere service continues outside staffed hours.' },
  { icon: CreditCard, title: 'Card-Only Payment', description: 'Eliminate cash handling entirely. The kiosk accepts contactless, chip and PIN, Apple Pay, and Google Pay. No cash drawer to manage, no change to count, no theft risk. Transactions settle directly to your bank account. The average payment time is under 4 seconds with contactless — faster than any cash transaction.' },
  { icon: Tv, title: 'Attract Screen Loop', description: 'When no one is ordering, the kiosk displays an animated attract screen. Showcase your menu, daily specials, promotions, or brand messaging. The screen draws customers in and encourages them to start an order. Update the attract screen content remotely from your dashboard — change promotions in minutes, not days.' },
  { icon: Monitor, title: 'Vending-Style Automation', description: 'The kiosk follows a strict automated flow: browse, select, customise, pay, confirm. No staff intervention at any step. If a menu item is unavailable, the system hides it automatically. If the payment terminal is offline, the kiosk displays a clear message and prevents incomplete orders. Everything is designed for zero-touch operation.' },
  { icon: Smartphone, title: 'Remote Management Dashboard', description: 'Monitor every kiosk from your phone or laptop. See live order feeds, daily revenue, and average order values in real time. Update menus, change prices, add promotions, and disable items remotely. If a kiosk goes offline, you receive an instant alert. Manage 1 kiosk or 50 from the same dashboard without visiting a single site.' },
  { icon: ShieldCheck, title: 'Order Confirmation & Collection', description: 'After payment, the kiosk displays an order number and prints a receipt or sends an SMS confirmation. A customer-facing collection screen shows order progress — preparing, ready, collected. Customers know exactly when their order is ready without asking staff. The entire flow is self-contained and requires no staff involvement.' },
];

const benefits = [
  { title: 'Generate Revenue Without Staff Costs', description: 'An unattended kiosk takes orders and processes payments while you pay zero labour cost for that channel. A late-night takeaway kiosk in a hotel lobby or student campus generates revenue from 10pm to 6am — hours when staffing is expensive or impossible. The kiosk pays for itself within weeks.' },
  { title: 'Serve Customers Who Prefer Self-Service', description: 'Research consistently shows that a significant portion of customers prefer ordering from a screen rather than speaking to a person. The kiosk gives them that option. No queuing, no pressure, no communication barriers. International customers, hearing-impaired customers, and anyone who prefers browsing at their own pace all benefit.' },
  { title: 'Eliminate Human Error Completely', description: 'The customer selects every item themselves. Modifiers, quantities, and special requests are chosen on screen and confirmed before payment. There is no staff member to mishear an order, forget a modifier, or enter the wrong item. The kitchen receives exactly what the customer selected — every single time.' },
  { title: 'Scale With Minimal Investment', description: 'Adding a second kiosk costs a fraction of hiring another staff member. A kiosk works every shift, never takes a break, and handles peak demand without overtime. Deploy kiosks in new locations — lobbies, corridors, outdoor areas — to capture orders where a staffed counter would be impractical.' },
];

export default function SelfServeKioskPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Self Serve Kiosk' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                UNATTENDED ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Self Serve{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Kiosk
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Fully unattended self-service kiosk that takes orders and payments 24/7. Card-only operation, attract screen, and vending-style automation — no staff required.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Operates 24/7 without staff supervision</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Card-only with contactless and mobile pay</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Self serve kiosks from £699 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Self Serve Kiosk Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Designed for zero-touch, unattended operation — the kiosk handles everything from browsing to payment.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Self Serve Kiosks</h2>
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
                Ordering That Never Sleeps
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A self serve kiosk turns <strong className="text-white">dead hours into revenue hours</strong>. Hotel guests ordering room service at midnight, students grabbing food at 2am, office workers picking up lunch without queuing — the kiosk serves them all without adding a single hour of labour cost.
                </p>
                <p>
                  The <strong className="text-white">attract screen</strong> is your silent salesperson. When the kiosk is idle, it displays your menu, promotions, and brand imagery on a bright, animated loop. Foot traffic becomes order traffic. Customers who would have walked past stop, browse, and buy.
                </p>
                <p>
                  With <strong className="text-white">remote management</strong>, you control every kiosk from one dashboard. Push a new seasonal menu to all locations at once. Disable an out-of-stock item instantly. Monitor revenue in real time and receive alerts if any kiosk goes offline. Full control, zero site visits.
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
                <Link href="/kiosk-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Kiosk POS</p>
                  <p className="text-slate-400 text-sm mt-1">Hybrid kiosk + counter</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Ordering Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Interactive ordering</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Self-service solutions</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Self Serve Kiosk — Frequently Asked Questions" faqs={[
          { question: 'Can the kiosk operate completely without staff?', answer: 'Yes. The self serve kiosk is designed for fully unattended operation. Customers browse the menu, select items, customise with modifiers, pay by card, and receive an order confirmation — all without any staff interaction. The kiosk handles the entire ordering flow autonomously, 24 hours a day.' },
          { question: 'What payment methods does the kiosk accept?', answer: 'The kiosk accepts all major card payments: contactless, chip and PIN, Apple Pay, Google Pay, and Samsung Pay. It is a card-only system — no cash handling required. This eliminates cash management, reduces theft risk, and speeds up transactions to under 4 seconds with contactless.' },
          { question: 'What is the attract screen?', answer: 'The attract screen is an animated display that runs when no customer is actively ordering. It shows your menu, promotions, daily specials, or brand content on a looping animation. The purpose is to draw in passing foot traffic and encourage spontaneous orders. You update the content remotely from your dashboard.' },
          { question: 'How do I manage the kiosk remotely?', answer: 'The cloud dashboard lets you manage every kiosk from any device. Update menus, change prices, add or remove items, and push promotions — all remotely. Real-time monitoring shows live order feeds, revenue, and kiosk status. If a kiosk goes offline, you receive an instant notification.' },
          { question: 'What happens if an item is out of stock?', answer: 'You can mark items as unavailable from the dashboard and they disappear from the kiosk menu instantly. The system can also be configured to automatically hide items when stock reaches zero. Customers only see what is actually available, preventing orders that cannot be fulfilled.' },
          { question: 'How much does a self serve kiosk cost?', answer: 'Self serve kiosks start from £699 + VAT including the touchscreen terminal, kiosk software, card payment integration, and attract screen functionality. Low commission on transactions. Free setup, menu configuration, and remote training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
