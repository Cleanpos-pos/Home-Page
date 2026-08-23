import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Smartphone, Wifi, Utensils, ShoppingBag, MapPin, BatteryFull } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile POS System UK',
  description:
    'Mobile POS System UK with handheld devices, tableside ordering, pop-up and event support, WiFi and 4G connectivity, and portable card payments. From £499 + VAT.',
  keywords: [
    'mobile pos system uk',
    'mobile pos system',
    'handheld pos system',
    'portable pos system',
    'mobile epos system',
    'tableside ordering system',
    'pop-up pos system',
    'event pos system',
    'mobile till system uk',
    'portable epos',
  ],
  alternates: {
    canonical: '/mobile-pos-system-uk',
  },
  openGraph: {
    title: 'Mobile POS System UK | Posso UK',
    description:
      'Mobile POS System UK with handheld devices, tableside ordering, pop-up support, and WiFi/4G connectivity.',
    url: 'https://www.posso.co.uk/mobile-pos-system-uk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Mobile POS System UK',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Mobile POS system for the UK market with handheld devices, tableside ordering, pop-up and event support, WiFi and 4G connectivity, and portable card payments.',
    url: 'https://www.posso.co.uk/mobile-pos-system-uk',
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
      reviewCount: '203',
      bestRating: '5',
    },
    featureList: [
      'Handheld POS devices with touchscreen',
      'Tableside ordering and payment',
      'WiFi and 4G dual connectivity',
      'Pop-up shop and event support',
      'Integrated contactless card payments',
      'All-day battery life',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Mobile POS System UK', item: 'https://www.posso.co.uk/mobile-pos-system-uk' },
    ],
  },
];

const features = [
  { icon: Smartphone, title: 'Handheld POS Devices', description: 'Compact touchscreen devices that fit in one hand. Take orders, process payments, and print receipts anywhere in your venue or on the move. The device runs the full Posso POS — menu, modifiers, discounts, and reporting. It is not a cut-down app — it is the complete system in a portable format.' },
  { icon: Utensils, title: 'Tableside Ordering', description: 'Walk to the table, take the order on the handheld, and send it straight to the kitchen. No writing on a pad and walking back to a fixed terminal. The order reaches the kitchen display in real time. Drinks are poured while starters are being prepared. Tableside ordering reduces errors and speeds up service by eliminating the relay between front of house and kitchen.' },
  { icon: Wifi, title: 'WiFi & 4G Connectivity', description: 'The device connects via WiFi when available and falls back to 4G mobile data when it is not. At a pop-up market with no WiFi, the 4G SIM keeps you connected. In a restaurant with full WiFi coverage, the device uses the fastest available connection. Dual connectivity means you never lose the ability to take orders or process payments.' },
  { icon: ShoppingBag, title: 'Pop-Up & Event Support', description: 'Set up a complete POS in minutes. No wiring, no fixed infrastructure. The mobile POS works at markets, festivals, trade shows, and pop-up shops. Arrive, switch on, and start selling. At the end of the day, pack up and go. All transaction data syncs to the cloud, so your sales history is complete regardless of where you traded.' },
  { icon: MapPin, title: 'Portable Card Payments', description: 'The built-in card reader accepts contactless, chip and PIN, Apple Pay, and Google Pay. No separate terminal needed. The customer taps their card on the handheld device and the payment is processed in seconds. Low commission on every transaction through our Teya partnership. Accept cards anywhere — indoors, outdoors, on the move.' },
  { icon: BatteryFull, title: 'All-Day Battery Life', description: 'The battery lasts a full trading day on a single charge. Start at 8am, trade through lunch and dinner, and still have charge at 10pm. No interruptions to find a plug socket during service. For multi-day events, a quick overnight charge gets you back to 100%. Reliable power means uninterrupted trading.' },
];

const benefits = [
  { title: 'Serve Customers Where They Are', description: 'Take the POS to the customer instead of making them come to a fixed till. At a table, in a queue, on a showroom floor, or at an outdoor event — the mobile POS handles orders and payments wherever the customer is. Faster service, better experience, more sales.' },
  { title: 'Trade Anywhere Without Infrastructure', description: 'Pop-up shops, markets, and events do not have fixed tills or wired internet. The mobile POS needs nothing but a charged battery and a 4G signal. Set up in minutes, trade all day, pack up and go. Your POS goes wherever your business goes.' },
  { title: 'Reduce Wait Times in Restaurants', description: 'Tableside ordering sends orders to the kitchen the moment they are taken. No queueing at a central terminal, no handwritten tickets to decipher. A server handling 8 tables sends orders instantly from each one. The kitchen starts cooking sooner, food arrives faster, and table turnover increases.' },
  { title: 'One System, Every Location', description: 'The mobile POS runs the same software as your fixed terminal. Menu, pricing, promotions, and reporting are identical. Whether you trade from a shop, a market stall, or a festival tent, the data flows to the same cloud dashboard. One system, complete visibility, no matter where you sell.' },
];

export default function MobilePosSystemUkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Mobile POS System UK' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Smartphone className="w-3 h-3 mr-2" />
                PORTABLE POS FOR THE UK
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Mobile POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System UK
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Handheld POS with tableside ordering, pop-up and event support, WiFi and 4G connectivity, and built-in card payments — trade anywhere in the UK.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full POS in a handheld device with all-day battery</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> WiFi and 4G so you trade anywhere</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Mobile POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Mobile POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A complete POS system that fits in your hand — designed for tableside ordering, pop-ups, events, and businesses on the move.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why UK Businesses Choose Mobile POS</h2>
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
                Restaurants, Retail, Events — One Device Does It All
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  In a <strong className="text-white">restaurant</strong>, servers take orders tableside and send them to the kitchen instantly. Payment happens at the table — no waiting for the bill. Tips are added on screen. Table turnover increases because every step happens faster and without leaving the guest.
                </p>
                <p>
                  In <strong className="text-white">retail</strong>, the mobile POS lets you serve customers on the shop floor. Queue-busting during busy periods. Assisted selling with product information at your fingertips. Stock lookups and order placement without walking back to the counter. The entire shop becomes a point of sale.
                </p>
                <p>
                  At <strong className="text-white">events and pop-ups</strong>, the mobile POS is your complete business in a pocket. 4G connectivity, built-in card payments, and all-day battery mean you set up in minutes and trade all day. Low commission on every card transaction. All data syncs to the cloud when you are back on WiFi.
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
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Card payment terminals</p>
                </Link>
                <Link href="/order-counter-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Counter POS</p>
                  <p className="text-slate-400 text-sm mt-1">Fast counter-service POS</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Mobile POS System UK — Frequently Asked Questions" faqs={[
          { question: 'Does the mobile POS work without WiFi?', answer: 'Yes. The device has a built-in 4G SIM that provides connectivity anywhere with a mobile signal. When WiFi is available, it connects via WiFi for the fastest performance. When WiFi is not available — at markets, events, or outdoor locations — 4G keeps you fully operational. Orders, payments, and syncing all work over 4G.' },
          { question: 'How long does the battery last?', answer: 'The battery lasts a full trading day — typically 10 to 14 hours of continuous use depending on transaction volume and screen brightness. Start at 8am and trade through to 10pm without needing a charge. For multi-day events, an overnight charge returns the device to full capacity.' },
          { question: 'Can I take card payments on the handheld?', answer: 'Yes. The device has a built-in card reader that accepts contactless, chip and PIN, Apple Pay, and Google Pay. No separate terminal needed. The customer taps or inserts their card directly on the handheld device. Low commission on every transaction through our Teya partnership. Payments are processed and settled like any standard card terminal.' },
          { question: 'Is it the same software as the fixed POS?', answer: 'Yes. The mobile device runs the full Posso POS software — not a simplified version. Menu, modifiers, discounts, loyalty, and reporting are identical to the countertop system. Data syncs to the same cloud dashboard. A sale made on the handheld appears alongside sales from your fixed terminals.' },
          { question: 'Can I use it for tableside ordering in a restaurant?', answer: 'Yes. Servers carry the handheld device and take orders directly at the table. Orders are sent to the kitchen display in real time. Payment is processed at the table — no waiting for a bill. Tips can be added on screen. Tableside ordering speeds up service and reduces errors from handwritten orders.' },
          { question: 'How much does a mobile POS system cost?', answer: 'The mobile POS system starts from £499 + VAT including the handheld device, POS software, built-in card reader, and 4G SIM. Low commission on card payments. Finance from £24.92 per week. Free setup, menu configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
