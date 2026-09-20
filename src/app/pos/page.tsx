import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PosHero } from '@/components/sections/pos-hero';
import { Contact } from '@/components/sections/contact';
import { EposFeatures } from '@/components/sections/epos-features';
import { FAQSection } from '@/components/sections/faq-section';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { PossoEposSystemDiagram } from '@/components/posso-epos-system-diagram';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import type { Metadata } from 'next';

const PAGE_URL = 'https://www.posso.co.uk/pos';
const DIAGRAM_SVG = 'https://www.posso.co.uk/images/posso-epos-system-diagram.svg';

export const metadata: Metadata = {
  // The root layout applies a `%s | Posso` template; absolute keeps this
  // title at the exact 57 characters intended rather than doubling the suffix.
  title: { absolute: 'EPOS System for Restaurants & Takeaways UK | Posso' },
  description:
    'UK EPOS systems for restaurants, takeaways, cafés and pubs. Tills, self-order kiosks, kitchen displays and card payments in one offline-first system.',
  alternates: {
    canonical: '/pos',
  },
  openGraph: {
    title: 'EPOS System for Restaurants & Takeaways UK | Posso',
    description:
      'UK EPOS systems for restaurants, takeaways, cafés and pubs. Tills, self-order kiosks, kitchen displays and card payments in one offline-first system.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        // Social previews do not render SVG, so the diagram is also published as
        // a 1200x630 PNG. The SVG itself is what the schema graph points at.
        url: '/images/posso-epos-system-diagram.png',
        width: 1200,
        height: 630,
        alt: 'Diagram showing how a Posso EPOS system works: the POS till, self-order kiosk, waiter pad, QR ordering, website, AI phone ordering and delivery platforms all feed one offline-first EPOS core.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPOS System for Restaurants & Takeaways UK | Posso',
    description:
      'Tills, self-order kiosks, kitchen displays, online ordering and integrated card payments in one offline-first UK EPOS system.',
    images: ['/images/posso-epos-system-diagram.png'],
  },
};

/**
 * Page schema graph. Every @id is namespaced under /pos# so it cannot collide
 * with the vertical pages — duplicate IDs were flagged in the last technical
 * audit. #organization is defined once in the root layout; #website is defined
 * here so the WebPage's isPartOf reference resolves rather than dangling.
 *
 * The FAQPage node is not in this graph on purpose — FAQSection emits it (with
 * the #faq @id passed below) so there is exactly one FAQPage on the page and it
 * covers every question actually rendered.
 */
const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.posso.co.uk/#website',
      url: 'https://www.posso.co.uk/',
      name: 'Posso',
      publisher: { '@id': 'https://www.posso.co.uk/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'EPOS System for Restaurants & Takeaways UK | Posso',
      description:
        'UK EPOS systems for restaurants, takeaways, cafés and pubs. Tills, self-order kiosks, kitchen displays and card payments in one offline-first system.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://www.posso.co.uk/#website' },
      about: { '@id': `${PAGE_URL}#product` },
      primaryImageOfPage: { '@id': `${PAGE_URL}#diagram` },
      mainEntity: { '@id': `${PAGE_URL}#faq` },
    },
    {
      '@type': 'ImageObject',
      '@id': `${PAGE_URL}#diagram`,
      contentUrl: DIAGRAM_SVG,
      url: DIAGRAM_SVG,
      caption:
        'Diagram of how a Posso EPOS system works: order sources feed one core, which drives the kitchen display, printers, card terminals, delivery and reporting.',
      creditText: 'Posso Ltd',
      creator: { '@id': 'https://www.posso.co.uk/#organization' },
    },
    {
      '@type': 'Product',
      '@id': `${PAGE_URL}#product`,
      name: 'Posso EPOS System',
      category: 'Restaurant EPOS system',
      brand: { '@type': 'Brand', name: 'Posso' },
      url: PAGE_URL,
      image: DIAGRAM_SVG,
      description:
        'UK EPOS system for restaurants, takeaways, cafés, pubs and bars. Touchscreen tills, self-order kiosks, kitchen display systems, online ordering and integrated card payments, running offline-first.',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GBP',
        lowPrice: '499',
        availability: 'https://schema.org/InStock',
        areaServed: 'GB',
        seller: { '@id': 'https://www.posso.co.uk/#organization' },
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'EPOS Systems', item: PAGE_URL },
      ],
    },
  ],
};

const posScreenshots = [
  { src: '/images/posso-epos-dashboard.png', w: 1906, h: 914, alt: 'Posso One EPOS back-office dashboard showing live sales, orders, average ticket, terminals and store management for a UK restaurant', cap: 'The Posso One dashboard — live sales, terminals and store management in one place.' },
  { src: '/images/posso-epos-order-types-till.png', w: 1914, h: 912, alt: 'Posso EPOS till order-types screen with Eat In, Takeaway and Delivery plus manager operations', cap: 'Start every order by choosing Eat In, Takeaway or Delivery on the Posso till.' },
  { src: '/images/posso-epos-add-delivery-order.png', w: 1298, h: 677, alt: 'Adding a delivery order with customer address capture in the Posso One EPOS system', cap: 'Take delivery orders with address capture, straight from the POS.' },
  { src: '/images/posso-epos-add-collection-order.png', w: 864, h: 575, alt: 'Adding a collection order in the Posso One EPOS system for a UK takeaway', cap: 'Log a collection order in seconds on Posso One.' },
];

const posImageSchema = posScreenshots.map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  contentUrl: `https://www.posso.co.uk${s.src}`,
  url: `https://www.posso.co.uk${s.src}`,
  name: s.alt,
  caption: s.cap,
  creditText: 'Posso Ltd',
  creator: { '@type': 'Organization', name: 'Posso Ltd' },
  copyrightNotice: '© Posso Ltd',
}));

const hardware = [
  {
    name: 'POS terminals',
    body: 'All Posso PC terminals run Windows 11 Pro with 8GB RAM and a 128GB SSD. Single-screen as standard; twin-screen — so the customer sees their order as it is rung in — is a £150 upgrade on any package.',
  },
  {
    name: 'Touchscreen tills',
    body: 'Capacitive touch built for wet, fast, gloved-hand environments rather than office use.',
  },
  {
    name: 'Self-order kiosks',
    body: 'Floor-standing and wall-mounted formats from £699 + VAT for indoor models. Outdoor IP65-rated kiosks for food trucks and forecourt sites are a special order rather than part of the standard offer.',
  },
  {
    name: 'Kitchen display screens',
    body: 'A 21-inch kitchen display taking all orders through to the kitchen is £399 + VAT.',
  },
  {
    name: 'Printers',
    body: 'An 80mm kitchen printer is included with the standard packages. Additional kitchen or receipt printers are £99 each. Pizza sites can add a Zebra box label printer for £325.',
  },
  {
    name: 'Handheld waiter pads',
    body: 'Table-side ordering devices at £259 as an optional add-on.',
  },
  {
    name: 'Card terminals',
    body: 'Card readers are supplied through Posso Pay, integrated with the till so the amount pushes across automatically — see card payments below.',
  },
  {
    name: 'Cash drawers, customer displays and combo stands',
    body: 'Configured as part of your package at setup, so the counter arrives ready to trade.',
  },
];

const softwareCapabilities = [
  {
    name: 'Taking orders',
    body: 'Touchscreen ordering with menu modifiers and combo builders, across dine-in, counter, takeaway, collection and delivery. Scheduled orders with time-slot management for pre-orders and busy periods.',
  },
  {
    name: 'Table service',
    body: 'Visual floor plans, waiter mode, merging tables, moving covers, and bill splitting by headcount, by item or by custom amount. Table Maestro booking is built in — set your booking days and times and it sends confirmation or no-availability emails automatically.',
  },
  {
    name: 'Menu management',
    body: 'A drag-and-drop visual menu builder, opening-hours exceptions, service charges and tax configuration. Fourteen EU-standard allergen tags against every item.',
  },
  {
    name: 'Staff',
    body: 'Role-based access control, shift and cash management with float tracking, and staff performance reporting.',
  },
  {
    name: 'Money',
    body: 'X and Z daily reconciliation reports, discounts, promotions and coupons, and full or partial refunds.',
  },
  {
    name: 'Languages',
    body: 'Five built in — English, Spanish, French, Italian and Simplified Chinese.',
  },
];

/** The capability sections between the software grid and the pricing table. */
const capabilitySections = [
  {
    id: 'kitchen-display-system',
    heading: 'Kitchen Display System (KDS)',
    paragraphs: [
      'A kitchen display system replaces paper tickets with live screens. Orders land the moment they are rung in — from the till, the kiosk, the QR code, your website or a delivery platform — and stay on screen until they are bumped.',
      'For multi-section kitchens, tickets route by course or station, so the grill sees grill items and the fryer sees fryer items rather than every chef reading every docket. Where you would rather keep paper, the same routing works with multi-kitchen printed copies.',
    ],
    link: { href: '/kitchen-display-system', label: 'Kitchen display systems' },
  },
  {
    id: 'self-order-kiosks',
    heading: 'Self-Order Kiosks',
    paragraphs: [
      'Kiosk mode turns customer ordering over to the customer. It handles the queue at peak, it upsells consistently, and it takes the order exactly as the customer wants it, which cuts the error rate on modifiers.',
      'Kiosks run the same menu as the till, so there is nothing separate to maintain, and orders go straight to the kitchen screen.',
    ],
    link: { href: '/self-order-kiosks', label: 'Self-order kiosks' },
  },
  {
    id: 'qr-table-ordering',
    heading: 'QR Table Ordering and Order-at-Table',
    paragraphs: [
      'Customers scan a code at the table, see the live menu with allergen information, order and pay from their own phone. Orders arrive against the correct table number, so service staff are not relaying.',
      'It works alongside, not instead of, waiter service — most sites run QR for drinks and repeat rounds while keeping waiter ordering for food.',
    ],
    link: { href: '/restaurant-order-at-table-app', label: 'Order-at-table ordering' },
  },
  {
    id: 'online-ordering',
    heading: 'Online Ordering, Your Own Website and App',
    paragraphs: [
      'Posso online ordering runs on your own domain, taking collection and delivery orders that come into the same system as everything else. Hosting is free with Posso online ordering.',
      'A full restaurant website with online booking is £450, or £750 for a build on a modern Next.js framework including SEO work and up to 30 blog pages. Web and app orders carry a 60p service fee added to the customer’s order — the store pays nothing beyond card processing fees.',
    ],
    link: { href: '/online-ordering', label: 'Online ordering' },
  },
  {
    id: 'ai-phone-ordering',
    heading: 'AI Phone Ordering',
    paragraphs: [
      'Calls that ring out are orders lost. Posso’s AI phone ordering answers the phone when the line is busy or the counter is three deep, takes the order conversationally and drops it straight into the EPOS.',
      'You get a free dedicated number to divert to or advertise, with free setup, at £1 per order taken.',
    ],
    link: { href: '/ai-phone-ordering', label: 'AI phone ordering' },
  },
  {
    id: 'card-payments',
    heading: 'Card Payments and Posso Pay',
    paragraphs: [
      'Posso Pay is our integrated card payment service. Terminals take contactless, chip and PIN, Apple Pay and Google Pay, and they are integrated with the till — the amount pushes across automatically, so there are no keying errors and no end-of-day mismatch between the till and the terminal.',
      'Posso Pay pricing starts from a guide rate of 1% + 10p, and the same rate applies to in-store terminals and the online payment gateway — so you are not paying a premium to take payments online. Your actual rate depends on card mix and turnover, and we quote it as part of your consultation.',
      'Teya and Dojo are also supported as card machine partners where a site already has a relationship in place.',
    ],
    link: { href: '/credit-card-machines', label: 'Posso Pay card payments' },
  },
  {
    id: 'delivery',
    heading: 'Delivery, Drivers and Platform Integrations',
    paragraphs: [
      'Delivery-zone management with custom fees by area, driver assignment and a live driver app at 30p per delivery. Caller ID integration pulls up a returning customer’s address as the phone rings.',
      'Just Eat, Uber Eats and Deliveroo integration is available as an add-on to any package at £45/month with unlimited orders, so platform orders land on the same kitchen screen as everything else instead of on three separate tablets.',
      'Also integrates with HubRise, GloriaFood and Shipday.',
    ],
    link: { href: '/delivery-management-pos', label: 'Delivery management' },
  },
  {
    id: 'reporting',
    heading: 'Reporting, Analytics and Customer Marketing',
    paragraphs: [
      'Sales analytics by item, hour, channel and staff member, alongside X and Z reads for daily reconciliation.',
      'The CMS is built in — customer data captured through ordering is retained and usable in Posso’s marketing suite free of charge, including 2,000 emails per month. SMS packages can be added.',
    ],
    link: { href: '/epos-marketing', label: 'EPOS marketing' },
  },
  {
    id: 'multi-site',
    heading: 'Multi-Site and Multi-Location',
    paragraphs: [
      'Each location holds its own isolated data with central reporting across the group. Menus and prices can be managed centrally or set per site.',
      'Multi-tenant support means groups, franchises and multi-academy trusts can run separate operations under one roof.',
    ],
    link: { href: '/multi-site-epos-uk', label: 'Multi-site EPOS' },
  },
];

const priceRows: [string, string][] = [
  ['POS system', '£499 + VAT'],
  ['Self-order kiosk (indoor)', '£699 + VAT'],
  ['Restaurant Full Service package', '£899 + VAT'],
  ['Fast Food Growth package', '£1,250 + VAT'],
  ['21-inch kitchen display', '£399 + VAT'],
  ['Extra printer', '£99'],
  ['Handheld waiter pad', '£259'],
  ['Twin-screen upgrade', '£150'],
  ['Software and support', 'From £25 + VAT a month'],
];

const comparisonChecks = [
  {
    q: 'Does it work offline?',
    a: 'A cloud-only system stops taking orders when the broadband does.',
  },
  {
    q: 'Is the card processing locked in?',
    a: 'Some EPOS contracts tie you to one acquirer at a rate you cannot renegotiate.',
  },
  {
    q: 'What is the real monthly cost?',
    a: 'Add the software, the support, the integrations and the per-order fees together, not just the headline.',
  },
  {
    q: 'Who answers the phone at 8pm on a Saturday?',
    a: 'Check the support hours against your trading hours, and check where the team is based.',
  },
  {
    q: 'Is the hardware yours?',
    a: 'Rented hardware on a long lease usually costs more over the term than buying.',
  },
  {
    q: 'What does leaving look like?',
    a: 'Contract length, notice period and whether you keep your own customer data.',
  },
];

const eposVerticals = [
  { href: '/best-restaurant-epos-system-uk', name: 'Best Restaurant EPOS UK', desc: '2026 buyer’s guide & comparison' },
  { href: '/restaurant-epos', name: 'Restaurant EPOS', desc: 'Table service, courses & split bills' },
  { href: '/takeaway-epos', name: 'Takeaway EPOS', desc: 'Collection, delivery & online orders' },
  // /cafe-epos-system and /coffee-pos-system both 308 to this page — link the
  // canonical URL directly rather than sending the hub through a redirect.
  { href: '/coffee-shop-cafe-epos-systems', name: 'Cafe & Coffee Shop EPOS', desc: 'Fast counter service, modifiers & loyalty' },
  { href: '/pos-for-cafe', name: 'Café POS Buyer’s Guide', desc: 'Modifiers, peak speed & loyalty' },
  { href: '/pizza-epos', name: 'Pizza POS', desc: 'Half & half, toppings & delivery' },
  { href: '/pos-for-pizza-shop', name: 'Pizza POS Buyer’s Guide', desc: 'What to look for before you buy' },
  { href: '/pos-for-fish-and-chip-shop', name: 'Fish & Chip Shop POS', desc: 'Portions, prompts & peak-hour speed' },
  { href: '/pos-for-kebab-shop', name: 'Kebab Shop POS', desc: 'Build sequence, extras & late-night trade' },
  { href: '/pos-for-chinese-takeaway', name: 'Chinese Takeaway POS', desc: 'Dish numbers, long menus & set meals' },
  { href: '/pos-for-indian-takeaway', name: 'Indian Takeaway POS', desc: 'Spice levels, banquets & sundries' },
  { href: '/kitchen-display-system', name: 'Kitchen Display System', desc: 'One queue, batching & station routing' },
  { href: '/opening-a-takeaway-epos-checklist', name: 'Opening a Takeaway', desc: 'Week-by-week EPOS checklist' },
  { href: '/delivery-management-pos', name: 'Delivery Management POS', desc: 'Own drivers, zones & dispatch' },
  { href: '/multi-site-epos-uk', name: 'Multi-Site EPOS', desc: 'Central menus & group reporting' },
  { href: '/replace-old-epos-system', name: 'Replacing an Old EPOS', desc: 'What transfers & how to switch' },
  { href: '/epos-now-alternative', name: 'Epos Now Alternative', desc: 'Costs & contracts compared' },
  { href: '/posso-vs-epos-now', name: 'Posso vs Epos Now', desc: 'Honest side-by-side comparison' },
  { href: '/epos-pricing-uk', name: 'EPOS Pricing', desc: 'Every cost, published' },
  { href: '/pub-pos-system', name: 'Pub POS', desc: 'Tabs, rounds & fast bar service' },
  { href: '/bar-epos', name: 'Bar EPOS', desc: 'Rapid rounds & happy-hour pricing' },
  { href: '/hotel-epos-system', name: 'Hotel EPOS', desc: 'Room charging & multi-outlet' },
  { href: '/epos-system-for-indian-takeaway', name: 'Indian Takeaway EPOS', desc: 'Heat levels, menus & delivery' },
  { href: '/salon-pos-software', name: 'Salon POS', desc: 'Appointments, deposits & tips' },
  { href: '/cloud-epos-system', name: 'Cloud EPOS', desc: 'Manage every site from anywhere' },
  { href: '/self-order-kiosks', name: 'Self-Order Kiosks', desc: 'Self-service ordering that upsells' },
];

const eposHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#venue-list`,
  name: 'Posso EPOS Systems by Business Type',
  itemListElement: eposVerticals.map((v, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: v.name,
    url: `https://www.posso.co.uk${v.href}`,
  })),
};

const faqs = [
  {
    question: 'What does EPOS stand for?',
    answer:
      'Electronic Point of Sale. It is the UK term for a point-of-sale system — a touchscreen till connected to software that records sales, sends orders to the kitchen and reports on trading.',
  },
  {
    question: 'What is the difference between EPOS and POS?',
    answer:
      'None in practice. POS is the international term and EPOS is the UK one. Both describe the same system.',
  },
  {
    question: 'Does a Posso EPOS system work without internet?',
    answer:
      'Yes. The system is offline-first and runs on a local database on the terminal, so the till, kitchen screens and printers keep working if the connection drops. Everything syncs automatically when the connection returns.',
  },
  {
    question: 'What order types does it handle?',
    answer:
      'Counter, takeaway, collection, delivery and dine-in, plus kiosk, QR, website, app, AI phone ordering and the delivery platforms.',
  },
  {
    question: 'Can bills be split at the table?',
    answer: 'Yes — by headcount, by item, or by custom amounts.',
  },
  {
    question: 'Which card machines work with a Posso EPOS system?',
    answer: 'Posso Pay is our integrated payment service. Teya and Dojo terminals are also supported.',
  },
  {
    question: 'Can a Posso EPOS system run more than one location?',
    answer: 'Yes. Each site keeps isolated data with central reporting across the group.',
  },
  {
    question: 'How much does an EPOS system cost in the UK?',
    answer:
      'Posso POS systems start at £499 plus VAT and self-order kiosks at £699 plus VAT, with package prices for single-screen setups. Software is from £25 + VAT a month, with your exact figure confirmed on your quote. Setup is free; on-site installation for larger sites is priced on application.',
  },
  {
    question: 'Is support included, or extra?',
    answer:
      'Included. The monthly software fee, from £25 + VAT, covers the core system, software updates and cloud features, and UK-based support comes with it — there is no separate support tier to buy.',
  },
  {
    question: 'Can I move my data over from my old EPOS system?',
    answer:
      'Your customer database can be brought across, including names, addresses, order history and marketing contacts, into Posso’s built-in CMS. Historic sales data does not transfer, so reporting starts fresh from go-live. Export a final set of reports from your old system before you switch.',
  },
  {
    question: 'What card processing rate does Posso Pay charge?',
    answer:
      'Posso Pay starts from a guide rate of 1% + 10p, and the same rate applies to in-store terminals and the online payment gateway. Your actual rate depends on card mix and turnover and is confirmed at consultation.',
  },
  {
    question: 'Is there a warranty?',
    answer: 'Two years on the systems.',
  },
  {
    question: 'How long does it take to get running?',
    answer:
      'Systems ship preconfigured and plug-and-play, with your menu built for you during free setup.',
  },
];

export default function PosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'ePOS Systems' }]} />
        <PosHero />

        {/* Definitional intent — front-loaded, because "epos meaning" and
            "epos full form" cluster into the same entity space as the
            commercial queries and the page previously answered neither. */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">What Is an EPOS System?</h2>
              <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
                <p>
                  EPOS stands for <strong className="text-white">Electronic Point of Sale</strong>. It is the
                  system that takes an order, prices it, sends it to the kitchen, takes the payment and records
                  the sale — replacing a traditional cash register with a touchscreen terminal connected to
                  software.
                </p>
                <p>
                  The difference between an EPOS system and an old-fashioned till is what happens after the sale.
                  A till records the money. An EPOS system records the money, the item, the time, the staff
                  member, the table, the customer and the channel the order came through — and makes all of that
                  available as reporting you can act on.
                </p>
                <p>
                  In UK hospitality an EPOS system usually spans four things: the hardware on the counter, the
                  software that runs it, the kitchen-side equipment it drives, and the payment method it is
                  connected to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EPOS vs POS */}
        <section className="py-16 md:py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">
                EPOS vs POS — Is There a Difference?
              </h2>
              <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
                <p>
                  In practice, no. <strong className="text-white">POS</strong> (point of sale) is the
                  international term; <strong className="text-white">EPOS</strong> (electronic point of sale) is
                  the term used in the UK and Ireland. You will see &ldquo;restaurant POS system&rdquo; and
                  &ldquo;restaurant EPOS system&rdquo; used to mean exactly the same thing, and Posso systems are
                  sold under both names.
                </p>
                <p>
                  Where the words do diverge slightly: &ldquo;point of sale&rdquo; can describe the physical place
                  a sale happens, while &ldquo;EPOS&rdquo; almost always means the electronic system itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works + system diagram */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">
                How a Posso EPOS System Works
              </h2>
              <figure className="glass-card rounded-2xl border border-slate-700/50 overflow-hidden mb-10">
                {/* The diagram is three columns wide; squeezed to phone width its
                    labels stop being readable, so below ~960px it pans inside its
                    own scroll container rather than shrinking. Page-level
                    horizontal scroll is unaffected. */}
                <div className="overflow-x-auto">
                  <div className="min-w-[960px]">
                    <PossoEposSystemDiagram />
                  </div>
                </div>
                <figcaption className="text-slate-400 text-sm p-4 text-center">
                  Order channels on the left, the offline-first core in the middle, and everything the core drives
                  on the right. <span className="lg:hidden">Scroll the diagram sideways to read it in full.</span>
                </figcaption>
              </figure>
              <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
                <p>
                  Every order channel writes into the same core. One menu, one price list, one set of numbers.
                  Change a price once and it changes on the till, the kiosk, the QR menu and your ordering website
                  at the same time.
                </p>
                <p>
                  The core runs <strong className="text-white">offline-first</strong> on a local database on the
                  terminal itself. If your broadband drops, the till keeps serving, the kitchen screens keep
                  receiving and the printers keep printing. When the connection returns, everything syncs
                  automatically. For sites where connectivity is genuinely unreliable, we also supply Posso
                  Connect — an industrial 4G/WiFi router with a multi-network SIM that roams across UK networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware — the page was previously written almost entirely in
            software-feature language, and the hardware entities (till, cash
            drawer, terminal, touch screen, card reader) were missing. */}
        <section className="py-16 md:py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                  EPOS Hardware: Tills, Terminals, Screens and Printers
                </h2>
                <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                  What actually arrives on your counter — and what each piece costs.
                </p>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {hardware.map((h) => (
                  <div key={h.name} className="glass-card rounded-2xl border border-slate-700/50 p-6">
                    <dt className="text-lg font-bold text-white">{h.name}</dt>
                    <dd className="text-slate-400 mt-2 leading-relaxed">{h.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Software, in prose — the feature matrix below carries the detail */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                  EPOS Software: What It Does Day to Day
                </h2>
                <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                  The software is where most of the time is saved. These are the core capabilities.
                </p>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {softwareCapabilities.map((c) => (
                  <div key={c.name} className="glass-card rounded-2xl border border-slate-700/50 p-6">
                    <dt className="text-lg font-bold text-white">{c.name}</dt>
                    <dd className="text-slate-400 mt-2 leading-relaxed">{c.body}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-slate-300 text-lg leading-relaxed mt-8 max-w-3xl mx-auto text-center">
                The software is fully customisable, including receipt and kitchen-copy layouts, with
                multi-location printing.
              </p>
            </div>
          </div>
        </section>

        <EposFeatures />

        {/* Product screenshots */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(posImageSchema) }} />
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">See the Posso One EPOS in Action</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From the back-office dashboard to taking Eat In, Takeaway and Delivery orders on the till — a real look at the Posso One EPOS system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {posScreenshots.map((s) => (
                <figure key={s.src} className="min-w-0 glass-card rounded-2xl border border-slate-700/50 overflow-hidden">
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={s.w}
                    height={s.h}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <figcaption className="text-slate-400 text-sm p-4 text-center">{s.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Capability sections — KDS, kiosks, QR, online ordering, AI phone,
            payments, delivery, reporting, multi-site */}
        {capabilitySections.map((s, i) => (
          <section key={s.id} id={s.id} className={i % 2 === 0 ? 'py-16 bg-slate-900/30' : 'py-16'}>
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">{s.heading}</h2>
                <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <Link
                  href={s.link.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:underline"
                >
                  {s.link.label} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* Prices */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">EPOS System Prices</h2>
                <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                  Published, not quoted on request. Every package price below is for a single-screen POS.
                </p>
              </div>
              <div className="glass-card rounded-2xl border border-slate-700/50 p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[26rem] border-collapse text-left text-sm">
                    <caption className="sr-only">Posso EPOS system prices, from</caption>
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th scope="col" className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400">Item</th>
                        <th scope="col" className="py-3 pr-4 font-semibold uppercase tracking-wide text-slate-400">From</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceRows.map((row) => (
                        <tr key={row[0]} className="border-b border-slate-800 align-top last:border-b-0">
                          <th scope="row" className="py-3 pr-4 font-medium text-white">{row[0]}</th>
                          <td className="py-3 pr-4 text-slate-300">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-5 text-slate-300 leading-relaxed mt-8">
                <p>
                  Software is from £25 + VAT a month, covering the core system, software updates and cloud
                  features, with your exact figure confirmed on your quote. UK-based support is included in
                  that — there is no separate support tier to buy. Setup — menu building and equipment
                  configuration — is free. Systems are plug-and-play with setup guidance; on-site installation
                  for larger sites is priced on application.
                </p>
                <p>
                  Add-ons priced separately: delivery platform integration (Just Eat, Uber Eats, Deliveroo) at
                  £45/month with unlimited orders, AI phone ordering at £1 per order, and driver-app delivery at
                  30p per delivery. Every cost we charge is set out on the{' '}
                  <Link href="/epos-pricing-uk" className="text-primary hover:underline">EPOS pricing page</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EPOS by business type — pillar hub */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eposHubSchema) }} />
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">EPOS for Your Type of Venue</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Different operations need genuinely different setups — restaurants, takeaways, cafés and coffee
                shops, pizza shops, fish and chip shops, kebab shops, Chinese and Indian takeaways, pubs, bars,
                hotels and salons. Here is the guide for each.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {eposVerticals.map((v) => (
                <Link key={v.href} href={v.href} className="group glass-card rounded-2xl border border-slate-700/50 p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{v.name}</h3>
                  <p className="text-slate-400 text-sm mt-2">{v.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Switching */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">
                Switching from an Older Till or EPOS System
              </h2>
              <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most sites that call us are not buying their first system — they are replacing one that is out
                  of support, locked to a card processor, or quoting a renewal they do not want to sign.
                </p>
                <p>
                  What switching actually involves: we build your menu for you as part of free setup, so you are
                  not re-keying hundreds of items. Systems arrive preconfigured. Where you are mid-contract with a
                  card processor, Posso can run with your existing Teya or Dojo terminal until that ends.
                </p>
                <p>
                  <strong className="text-white">What comes across, and what does not.</strong> Your customer
                  database does — names, addresses, order history and marketing contacts can be brought into
                  Posso’s built-in CMS, so you do not lose the list you have spent years building. Historic{' '}
                  <em>sales</em> data does not: reporting starts fresh from go-live. In practice that is worth
                  knowing in advance rather than discovering in January — most sites export a final set of reports
                  from the old system before switching and keep them for year-end.
                </p>
              </div>
              <Link
                href="/replace-old-epos-system"
                className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:underline"
              >
                Replacing an old EPOS system <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* How to compare */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How to Compare UK EPOS Systems</h2>
                <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                  Worth checking, on any quote you are given — including ours.
                </p>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {comparisonChecks.map((c) => (
                  <div key={c.q} className="glass-card rounded-2xl border border-slate-700/50 p-6">
                    <dt className="text-lg font-bold text-white">{c.q}</dt>
                    <dd className="text-slate-400 mt-2 leading-relaxed">{c.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Customer review */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8 text-center">
              <div className="text-amber-400 text-2xl mb-4" aria-label="Rated 4.5 out of 5">★★★★<span className="opacity-40">★</span></div>
              <blockquote className="text-xl md:text-2xl text-slate-100 italic leading-relaxed">
                &ldquo;My Posso POS system is a game changer — my restaurant runs more smoothly now thanks to Posso One and the team. A big thank you.&rdquo;
              </blockquote>
              <p className="text-slate-300 mt-5 font-semibold">Sally <span className="text-slate-500 font-normal">· 4.5/5</span></p>
            </div>
          </div>
        </section>

        {/* Contextual internal links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Complete Your Setup</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/drink-order-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Table Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Waiter pad &amp; QR ordering</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} schemaId={`${PAGE_URL}#faq`} />

        {/* Closing CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto glass-card rounded-2xl border border-primary/30 p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Talk to someone who runs these systems every day
              </h2>
              <p className="text-slate-300 mt-4 text-lg">
                Book a free consultation and we will build your menu, configure the equipment and ship it
                plug-and-play — with two years of warranty and UK-based support included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="tel:+448081753956"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium"
                >
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
                <a
                  href="mailto:info@posso.co.uk"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors"
                >
                  info@posso.co.uk
                </a>
              </div>
              <p className="text-slate-500 text-sm mt-5">Mon–Fri, 9am–9:30pm</p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
