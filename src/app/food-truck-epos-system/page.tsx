import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { Badge } from '@/components/ui/badge';
import { WifiOff, BatteryCharging, CreditCard, MonitorSmartphone, ChefHat, MapPin, Check, Phone, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

const UPDATED = '2026-09-08';

export const metadata: Metadata = {
  title: 'Food Truck EPOS System UK — Tills & Kiosks for Trailers & Mobile Catering',
  description:
    'Food truck EPOS that runs without fixed wifi — works on 4G, takes card payments anywhere, and drives self-order kiosks. Built for trailers, burger vans and street food. From £499 + VAT.',
  keywords: [
    'food truck epos system uk',
    'epos for food truck uk',
    'pos system for food truck',
    'food trailer epos system',
    'mobile catering epos',
    'street food epos system',
    'burger van till system',
    'catering trailer epos',
    'food truck card machine uk',
    'food truck self order kiosk',
  ],
  alternates: { canonical: '/food-truck-epos-system' },
  openGraph: {
    title: 'Food Truck & Trailer EPOS UK | Posso',
    description:
      'An EPOS built for the pitch, not the high street — runs on 4G with no fixed wifi, takes card anywhere, and powers self-order kiosks. For food trucks, trailers, burger vans and street food. From £499 + VAT.',
    url: 'https://www.posso.co.uk/food-truck-epos-system',
    type: 'website',
    images: [{ url: '/images/posso-kiosk-krispy-kreme-food-trailer.jpg', width: 800, height: 600, alt: 'Krispy Kreme food trailer with two Posso self-order kiosks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Truck & Trailer EPOS UK | Posso',
    description: 'EPOS that runs on 4G with no fixed wifi, takes card anywhere, and powers self-order kiosks. For food trucks, trailers and street food.',
    images: ['/images/posso-kiosk-krispy-kreme-food-trailer.jpg'],
  },
};

const installs = [
  { src: '/images/posso-kiosk-chaiiwala-food-container.jpg', w: 500, h: 375, brand: 'Chaiiwala', cap: 'A Chaiiwala street-food container with a Posso self-order kiosk built into the front.' },
  { src: '/images/posso-kiosk-krispy-kreme-food-trailer.jpg', w: 800, h: 600, brand: 'Krispy Kreme', cap: 'A Krispy Kreme food trailer running two Posso self-order kiosks, one each side.' },
  { src: '/images/posso-kiosk-krispy-kreme-customers.jpg', w: 800, h: 508, brand: 'Krispy Kreme', cap: 'Customers ordering themselves at the trailer kiosks — the queue-buster at a busy pitch.' },
];

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Food Truck & Trailer EPOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'EPOS and self-order kiosk system for UK food trucks, food trailers, burger vans, mobile catering units and street food stalls. Runs offline and on 4G, takes card payments anywhere, and shares one menu across every pitch.',
    url: 'https://www.posso.co.uk/food-truck-epos-system',
    offers: { '@type': 'AggregateOffer', lowPrice: '499', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
    brand: { '@type': 'Brand', name: 'Posso' },
    publisher: { '@id': 'https://www.posso.co.uk/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Food Truck EPOS', item: 'https://www.posso.co.uk/food-truck-epos-system' },
    ],
  },
  ...installs.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `https://www.posso.co.uk${s.src}`,
    url: `https://www.posso.co.uk${s.src}`,
    caption: s.cap,
    creditText: 'Posso Ltd',
    creator: { '@type': 'Organization', name: 'Posso Ltd' },
    copyrightNotice: '© Posso Ltd',
  })),
];

const features = [
  { icon: WifiOff, title: 'Runs with no fixed wifi', body: 'A pitch rarely has broadband. Posso runs on 4G and keeps taking orders and card payments even when signal drops, syncing everything the moment it returns — so a dead spot never stops a sale.' },
  { icon: CreditCard, title: 'Take card anywhere', body: 'Integrated card payments through Posso Pay (from 1% + 10p, quoted on your turnover) or Teya — contactless, Apple Pay and Google Pay, with the amount pushed from the till so nothing is retyped at a busy hatch.' },
  { icon: MonitorSmartphone, title: 'Self-order kiosks', body: 'Add a weatherproof self-order kiosk to the side of the trailer — like Krispy Kreme and Chaiiwala do — to bust the queue at peak and lift average spend, from £699 + VAT.' },
  { icon: BatteryCharging, title: 'Portable, low-power hardware', body: 'Compact touchscreen tills and printers that run off your trailer’s power. Pack down at the end of the event, set up at the next pitch in minutes — no engineer, no fixed install.' },
  { icon: MapPin, title: 'One menu, every pitch', body: 'Change a price or sell-out once and it updates across every till and kiosk, at every event. Run the same menu at a festival on Saturday and a retail park on Monday.' },
  { icon: ChefHat, title: 'Kitchen tickets & order flow', body: 'Orders print or route to a kitchen screen in the trailer exactly as entered, with collection numbers — so the one-person hatch never loses track at a rush.' },
];

const faqs = [
  { question: 'How much does a food truck EPOS cost in the UK?', answer: 'A complete Posso food truck system starts at £499 + VAT, including the touchscreen till, printer, menu build and staff training, with software from £25 + VAT a month. A weatherproof self-order kiosk is from £699 + VAT. Card processing runs through Posso Pay from 1% + 10p, quoted on your turnover — bring your numbers for a written quote.' },
  { question: 'Does a food truck EPOS work without wifi?', answer: 'Yes. Posso is built for pitches with no broadband — it runs on 4G and keeps taking orders and card payments through short signal drops, then syncs sales, stock and reports automatically when the connection returns. You never stop trading because the wifi did.' },
  { question: 'Can I take card payments on a food truck or trailer?', answer: 'Yes — integrated card payments are built in through Posso Pay or the Teya partnership, taking contactless, Apple Pay, Google Pay and chip & PIN. The amount pushes from the till to the reader so nothing is keyed twice, and it settles the same rate in store and online. Rates from 1% + 10p, quoted on your card turnover.' },
  { question: 'Is there a free POS for a food truck?', answer: 'For a one-person stall taking a few hundred pounds a week, a flat-rate reader from SumUp or Square is genuinely the cheapest way to start, and we’ll say so. A proper food truck EPOS earns its place once you run kiosks, need offline card payments, sell across multiple pitches, or want one menu and real reporting — that’s where Posso fits.' },
  { question: 'Do you do self-order kiosks for food trailers?', answer: 'Yes — it’s one of the most popular setups. Brands like Krispy Kreme and Chaiiwala run Posso self-order kiosks mounted on the side of the trailer to cut the queue at peak and lift average order value. Kiosks share the same menu and card processing as the till, from £699 + VAT.' },
  { question: 'Can one menu run across several pitches or events?', answer: 'Yes. Your menu, prices and modifiers live centrally, so a change updates every till and kiosk at once, wherever they’re trading. Run the same setup at a festival, a retail park and a private event without rebuilding anything — and see the takings from each in one place.' },
];

export default function FoodTruckEposPage() {
  const faqSchema = null; // FAQPage schema is emitted by <FAQSection>
  return (
    <div className="flex min-h-screen flex-col bg-background text-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      {faqSchema}
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'ePOS Systems', href: '/pos' }, { label: 'Food Truck EPOS' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
                  <Zap className="w-3 h-3 mr-2" /> FOOD TRUCKS · TRAILERS · STREET FOOD
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">Food truck &amp; trailer </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">EPOS</span>
                </h1>
                <p className="text-xl text-slate-300 mt-6 leading-relaxed">
                  An EPOS built for the pitch, not the high street. Runs on 4G with no fixed wifi, takes card anywhere, and powers the self-order kiosks brands like Krispy Kreme and Chaiiwala bolt onto the trailer.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg mt-6">
                  {['Works offline & on 4G — a dead spot never stops a sale', 'Card payments built in, from 1% + 10p', 'Complete systems from £499 + VAT · kiosks from £699'].map((h) => (
                    <li key={h} className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> {h}</li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                    <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                  </a>
                </div>
              </div>
              <figure className="relative">
                <Image src={installs[1].src} width={installs[1].w} height={installs[1].h} alt="Krispy Kreme food trailer with two Posso self-order kiosks mounted on the sides" className="rounded-2xl border border-slate-700/50 shadow-2xl shadow-primary/10 w-full h-auto" priority />
                <figcaption className="text-sm text-slate-500 mt-3 text-center">A Krispy Kreme trailer running Posso self-order kiosks.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Quick answer (AEO) */}
        <section className="pb-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto glass-card rounded-xl border border-primary/30 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Short answer</p>
              <p className="text-lg leading-relaxed text-slate-200">
                A food truck EPOS is a till system built to trade without fixed broadband: it runs on 4G, keeps taking orders and card payments through signal drops, and syncs when the connection returns. The right one for a UK mobile operation takes card anywhere, drives self-order kiosks, and runs one menu across every pitch. Posso food truck systems start at £499 + VAT, kiosks from £699 + VAT, and card processing from 1% + 10p quoted on your turnover.
              </p>
            </div>
          </div>
        </section>

        {/* Why it's different */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">Built for the pitch, not the high street</h2>
            <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
              <p>Most EPOS assumes a fixed shop with broadband on the wall. A food truck has neither. The system that works on a trailer is the one that keeps trading when the 4G dips at a field, packs down and sets up in minutes at the next event, and runs off the power you’ve got — while still taking card, printing kitchen tickets and driving a kiosk at the hatch.</p>
              <p>That’s the difference between a till that happens to be portable and one designed for mobile catering. Whether you call it a <strong className="text-white">food truck, food trailer, catering trailer, burger van, mobile catering unit or street food stall</strong>, the job is the same: take the order, take the money, feed the queue — wherever you’re parked.</p>
            </div>
          </div>
        </section>

        {/* Real installs gallery */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Real Posso installs</p>
              <h2 className="text-3xl sm:text-4xl font-bold">On trailers you’ll recognise</h2>
              <p className="text-lg text-slate-400 mt-3">Named brands run Posso on the road — self-order kiosks bolted to the trailer, tills at the hatch, one menu across every pitch.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {installs.map((s) => (
                <figure key={s.src} className="glass-card rounded-2xl border border-slate-700/50 overflow-hidden">
                  <Image src={s.src} width={s.w} height={s.h} alt={s.cap} className="w-full h-56 object-cover" loading="lazy" />
                  <figcaption className="p-4">
                    <span className="text-primary font-semibold text-sm">{s.brand}</span>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{s.cap}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What a food truck EPOS needs</h2>
              <p className="text-slate-400 mt-3 text-lg">Six things that decide whether a till survives a Saturday at a busy pitch.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map(({ icon: Icon, title, body }) => (
                <div key={title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary"><Icon className="w-5 h-5" /></div>
                  <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">What it costs</h2>
            <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
              <p>A complete Posso food truck system is <strong className="text-white">£499 + VAT</strong> — the touchscreen till, printer, menu build and staff training — with software from <strong className="text-white">£25 + VAT a month</strong> and finance from £24.92 a week. A weatherproof <strong className="text-white">self-order kiosk is from £699 + VAT</strong>. Card processing runs through Posso Pay <strong className="text-white">from 1% + 10p</strong>, quoted on your card turnover and the same rate in store and online.</p>
              <p>Being honest about where we don’t fit: if you’re a one-person stall taking a few hundred pounds a week, a flat-rate reader from SumUp or Square is the cheaper start. Posso earns its place when you add kiosks, need offline card payments, trade across several pitches, or want one menu and real reporting.</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {[['Card machines', '/credit-card-machines'], ['Self-order kiosks', '/self-order-kiosks'], ['EPOS pricing', '/epos-pricing-uk'], ['Portable EPOS', '/portable-epos-system'], ['Street food & events', '/solutions/festivals-events']].map(([l, h]) => (
                <Link key={h} href={h} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-primary/50 hover:text-white">{l}</Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection title="Food Truck EPOS — Frequently Asked Questions" faqs={faqs} />

        <DemoEnquiry
          heading="Get a food truck EPOS quote"
          intro="Tell us what you run — truck, trailer, burger van or street-food stall — and whether you want a kiosk. We'll come back with a quote and honest advice on the right kit for your pitch."
        />
      </main>
      <Footer />
      <p className="sr-only">Last updated {UPDATED}.</p>
    </div>
  );
}
