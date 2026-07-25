import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Hotel, UtensilsCrossed, Wine, Ticket, MapPin, Settings } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality Kiosks',
  description:
    'Hospitality Kiosks for hotels, restaurants, bars, events, and visitor attractions. Self-service ordering, check-in, and ticketing. Kiosks from £699 + VAT.',
  keywords: [
    'hospitality kiosks',
    'hotel self service kiosk',
    'restaurant ordering kiosk',
    'bar ordering kiosk',
    'event kiosk system',
    'visitor attraction kiosk',
    'self service kiosk hospitality',
    'hospitality self ordering',
    'kiosk system uk hospitality',
    'self service kiosk uk',
  ],
  alternates: {
    canonical: '/hospitality-kiosks',
  },
  openGraph: {
    title: 'Hospitality Kiosks | Posso UK',
    description:
      'Hospitality Kiosks for hotels, restaurants, bars, events, and visitor attractions. Self-service ordering and check-in.',
    url: 'https://www.posso.co.uk/hospitality-kiosks',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Hospitality Kiosks',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Hospitality kiosks for self-service ordering, check-in, and ticketing across hotels, restaurants, bars, events, and visitor attractions.',
    url: 'https://www.posso.co.uk/hospitality-kiosks',
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
      reviewCount: '189',
      bestRating: '5',
    },
    featureList: [
      'Self-service food and drink ordering',
      'Hotel check-in and check-out',
      'Event ticketing and entry',
      'Multi-language interface',
      'Contactless payment processing',
      'Cloud-managed content and pricing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Hospitality Kiosks', item: 'https://www.posso.co.uk/hospitality-kiosks' },
    ],
  },
];

const features = [
  { icon: UtensilsCrossed, title: 'Restaurant & Food Court Kiosks', description: 'Freestanding or countertop kiosks for restaurants, food courts, and canteens. Customers browse image-rich menus, select modifiers, and pay by card. Orders fire to the kitchen display instantly. Average order value increases by 15–20% thanks to consistent upsell prompts on every transaction.' },
  { icon: Hotel, title: 'Hotel Check-In Kiosks', description: 'Guests check in on arrival without queuing at reception. The kiosk verifies the booking, captures ID, issues a room key card, and provides a digital welcome pack. Check-out is equally fast — review the bill, settle any extras, and leave. Reception staff focus on concierge duties instead of admin.' },
  { icon: Wine, title: 'Bar & Event Ordering', description: 'At busy bars and events, kiosks eliminate the three-deep queue. Customers order and pay at the kiosk, then collect at the bar. Staff focus on pouring drinks, not handling payments. During a 500-person event, four kiosks can handle the entire ordering volume with minimal waiting time.' },
  { icon: Ticket, title: 'Ticketing & Entry Management', description: 'Visitor attractions, cinemas, and leisure venues use kiosks for ticket purchase and collection. Customers select their time slot, add extras, pay, and receive a printed or digital ticket. Integrates with entry barriers for automated scanning. Reduces box office queues to near zero.' },
  { icon: MapPin, title: 'Multi-Language Support', description: 'Hospitality serves international visitors. Every kiosk supports multiple languages — customers select their preferred language on the first screen. Menus, prompts, and receipts display in the chosen language. Essential for hotels, airports, tourist attractions, and international conference venues.' },
  { icon: Settings, title: 'Cloud Management Dashboard', description: 'Manage every kiosk from one cloud dashboard. Update menus, change pricing, push promotions, and monitor uptime across all locations. A hotel chain with 20 properties manages all lobby kiosks from a single login. Changes deploy instantly — no engineer visits, no USB sticks, no downtime.' },
];

const benefits = [
  { title: 'Reduce Front-of-House Staffing Costs', description: 'Kiosks handle the repetitive work: taking orders, processing payments, checking in guests, issuing tickets. A restaurant saves one full-time front-of-house salary per kiosk during peak hours. A hotel reduces reception staffing during overnight and early-morning shifts when kiosks handle check-in.' },
  { title: 'Serve More Guests Without More Staff', description: 'During peak periods — Friday night dinner service, hotel check-in at 3pm, event interval rush — kiosks absorb the volume spike. Four kiosks handle 240 orders per hour without fatigue, breaks, or errors. Your existing team manages the same event with half the stress.' },
  { title: 'Consistent Upselling on Every Order', description: 'Staff forget to upsell. Kiosks never do. Every food order gets a side suggestion. Every drink gets an upgrade prompt. Every hotel check-in offers a room upgrade or late checkout. These prompts run on every transaction, generating incremental revenue that compounds across thousands of orders.' },
  { title: 'Improve Guest Experience', description: 'Guests who prefer self-service get exactly what they want. No waiting for a server, no language barriers, no pressure to order quickly. Guests who prefer human interaction still get it — your staff are freed up to provide attentive service to those who value it most.' },
];

export default function HospitalityKiosksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Hospitality Kiosks' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Hotel className="w-3 h-3 mr-2" />
                SELF-SERVICE FOR HOSPITALITY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Hospitality{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Kiosks
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Self-service kiosks for hotels, restaurants, bars, events, and visitor attractions. Reduce queues, cut staffing costs, and serve more guests per hour.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Hospitality kiosks from £699 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Multi-language and contactless payment</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Cloud-managed across all locations</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Kiosk Solutions for Every Hospitality Venue</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From hotel lobbies to festival bars, Posso kiosks adapt to every hospitality environment.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Hospitality Businesses Choose Posso Kiosks</h2>
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
                Kiosks That Fit Your Venue
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A <strong className="text-white">boutique hotel</strong> needs a sleek lobby kiosk that handles check-in, room service ordering, and local area information. The Posso kiosk integrates with your property management system, issues key cards, and presents a branded interface that matches your hotel&apos;s identity.
                </p>
                <p>
                  A <strong className="text-white">busy restaurant group</strong> deploys countertop kiosks at each location for self-service ordering during peak hours. Menus, pricing, and promotions are managed centrally. Each site&apos;s kiosk shows its own menu and sends orders to its own kitchen — but you see group-wide data in one dashboard.
                </p>
                <p>
                  An <strong className="text-white">outdoor festival or sporting venue</strong> uses ruggedised kiosks at bar and food stations. With no cash handling and no order-taking, each serving point needs fewer staff. The kiosk processes payments and prints order tickets — your team just makes drinks and serves food.
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
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/restaurant-self-ordering-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Self Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">QR and kiosk ordering</p>
                </Link>
                <Link href="/bar-ordering-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bar Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">Order from your phone</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Hospitality Kiosks — Frequently Asked Questions" faqs={[
          { question: 'What types of hospitality venues use kiosks?', answer: 'Hotels use kiosks for self-service check-in and room service ordering. Restaurants and food courts use them for self-service food ordering. Bars and event venues use them to process drink orders without queuing. Cinemas, visitor attractions, and leisure centres use them for ticketing. Any hospitality venue with queues or high footfall benefits from self-service kiosks.' },
          { question: 'How much do hospitality kiosks cost?', answer: 'Posso hospitality kiosks start from £699 + VAT per unit. This includes the touchscreen hardware, payment terminal, kiosk software, and cloud management dashboard. Volume discounts are available for multi-unit deployments. Finance is available from £24.92 per week with free installation and training.' },
          { question: 'Can I manage kiosks across multiple locations?', answer: 'Yes. The cloud dashboard lets you manage every kiosk from one login. Update menus, change pricing, push promotions, and monitor kiosk uptime across all locations. Each site can have its own menu and settings, but group-level reporting rolls everything up into one view.' },
          { question: 'Do kiosks support multiple languages?', answer: 'Yes. Customers select their preferred language on the welcome screen. The entire interface — menus, prompts, modifier names, and receipts — displays in the chosen language. Languages can be added or removed from the cloud dashboard. Essential for venues serving international visitors.' },
          { question: 'What payment methods do kiosks accept?', answer: 'Kiosks accept contactless card payments (tap to pay), Apple Pay, Google Pay, Samsung Pay, and chip-and-PIN. Cash is not required. Payment processes before the order reaches the kitchen or service point. All transactions appear in your POS reporting dashboard in real time.' },
          { question: 'How long does installation take?', answer: 'A single kiosk installs in under two hours. Multi-kiosk deployments across a venue typically complete in one day. The Posso team handles physical installation, network configuration, menu setup, and staff walkthrough. Remote configuration and testing happen before the engineer arrives on site.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
