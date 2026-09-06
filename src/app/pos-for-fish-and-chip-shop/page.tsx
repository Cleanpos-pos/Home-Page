import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Search, Ruler, ClipboardList, Package, ShieldAlert, Zap, Clock } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fish & Chip Shop EPOS & Till System — from £499',
  description:
    'Choosing an EPOS for a fish & chip shop? What actually matters — portion pricing, condiment prompts, meal deals and peak-hour speed — plus real costs. Posso tills from £499 + VAT, UK support.',
  keywords: [
    'pos for fish and chip shop',
    'fish and chip shop epos',
    'chip shop till system',
    'chippy pos system',
    'fish and chip shop pos uk',
    'chip shop epos system',
    'takeaway pos fish and chips',
    'chip shop till',
    'fish and chip shop software',
    'best pos for chip shop',
  ],
  alternates: {
    canonical: '/pos-for-fish-and-chip-shop',
  },
  openGraph: {
    title: 'Fish & Chip Shop EPOS & Till System | Posso UK',
    description:
      'Fish & chip shop EPOS buyer\'s guide — the six things that actually matter, what to test before you buy, and what it costs. Posso tills from £499 + VAT.',
    url: 'https://www.posso.co.uk/pos-for-fish-and-chip-shop',
    type: 'website',
    // TODO: replace with a bespoke 1200×630 chip shop card once artwork exists
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso POS for UK fish and chip shops — buyer\'s guide' }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS for Fish and Chip Shops',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Guide to choosing a POS system for a fish and chip shop, covering portion pricing, condiment and wrapping prompts, meal deal bundling, allergen management, peak-hour throughput and timed collection orders.',
    url: 'https://www.posso.co.uk/pos-for-fish-and-chip-shop',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    publisher: { '@id': 'https://www.posso.co.uk/#organization' },
    featureList: [
      'Portion and size pricing on a single screen',
      'Compulsory condiment and wrapping modifiers',
      'Meal deal and combo bundling',
      '14-allergen tagging per product',
      'Timed collection slots with capacity limits',
      'Just Eat, Uber Eats and Deliveroo integration',
      'Offline-first operation',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS for Fish and Chip Shops', item: 'https://www.posso.co.uk/pos-for-fish-and-chip-shop' },
    ],
  },
];

const features = [
  { icon: Ruler, title: 'Portion Sizes Need to Be Products, Not Notes', description: 'Regular chips, large chips, small cod, large cod, children’s portion — each is a different price and a different scoop. A POS that makes you tap "chips" and then type a size into a free-text note will produce mis-scooped orders every single busy service. Each portion should be its own item on the screen with its own price. If staff have to open a sub-menu to pick a size, that is two taps too many at half five on a Friday.' },
  { icon: ClipboardList, title: 'Condiment and Wrapping Prompts Belong at the Till', description: 'Salt and vinegar? Open or wrapped? Tray or bag? These get asked at the counter, forgotten, then asked again at the hatch. A system that forces the prompt at order entry puts the answer on the kitchen ticket and the wrapping station gets it right first time. Look for compulsory modifiers you can attach to a product — not optional notes that staff will skip the moment there is a queue.' },
  { icon: Package, title: 'Meal Deals Must Price as a Single Item', description: 'Fish, chips, peas and a can is a set price, not four items discounted by hand. If staff are ringing in four lines and applying a manual discount, you will lose money on some of them and your reports will never tell you how many deals you actually sold. A combo builder prices the bundle as one line while still sending all four components through to the kitchen — that is the difference between a promotion you can measure and one you can only guess at.' },
  { icon: ShieldAlert, title: 'Allergen Data Is Not Optional on a Fried Menu', description: 'Batter is gluten. The fryer is shared. There is celery in most curry sauce. Allergen rules apply to everything you sell over the counter, and "ask a member of staff" stops working the moment that member of staff is a Saturday temp who started last week. A POS that tags all fourteen allergens against each product — and carries them through to your online menu — moves this off a laminated sheet behind the till and into the system where it belongs.' },
  { icon: Zap, title: 'Peak-Hour Throughput Beats Feature Count', description: 'The week is decided between half four and seven. Count the taps from first item to cash tendered on your three most common orders. If it is more than six, the system will cost you customers on a Friday regardless of how good the back-office reporting looks in the demo. Deep menu trees, confirmation dialogs and slow card handshakes are what actually slow a chippy down — not a missing feature.' },
  { icon: Clock, title: 'Collection Comes First, Delivery Second', description: 'Most chip shop orders are collection with a time attached: half six, name of Dave. The system needs timed collection slots with a cap on how many orders it will accept per fifteen minutes, so a rush of online orders does not all land in the fryer at once. Delivery matters, but a POS that treats collection as an afterthought to delivery was designed for a pizza shop, not a chip shop.' },
];

const benefits: { title: string; description: React.ReactNode }[] = [
  {
    title: 'Check It Handles Your Second Menu',
    description: (
      <>
        A lot of chippies are not only chippies. Kebabs, burgers, pies, southern fried chicken — often off the same range and always through the same till. A system built purely around fish and chips will fight you the moment you add a doner. Ask to see two distinct menu sections, each with its own modifier sets, running on one screen. Charnwood Fish Bar in Shepshed runs exactly that setup on Posso: a traditional chip shop menu and a kebab menu side by side. If that second menu is kebabs, our{' '}
        <Link href="/pos-for-kebab-shop" className="text-primary hover:underline">kebab shop POS guide</Link>{' '}
        covers what it needs; if it is pizza, the{' '}
        <Link href="/pos-for-pizza-shop" className="text-primary hover:underline">pizza POS buyer&apos;s guide</Link>{' '}
        does the same.
      </>
    ),
  },
  {
    title: 'Hardware Has to Survive the Environment',
    description: 'A chip shop counter is hot, humid and greasy. Consumer tablets and cheap printers do not last in it. Ask what the terminal is rated for, whether the screen responds to wet hands, and what happens when steam gets into a printer on a Saturday night. Then ask who replaces it, how fast, and what it costs you while you wait.',
  },
  {
    title: 'Work Out the Real Three-Year Cost',
    description: 'Upfront hardware is the smallest part of the number. Add monthly software, card processing across a lot of small tickets, online ordering commission, printer rolls and support. A shop doing three hundred orders a week at an average of nine pounds will pay far more in percentage-based online commission over three years than it will ever pay for hardware. Do that arithmetic on your own figures before you compare headline prices.',
  },
  {
    title: 'Test It On Your Own Menu, At Your Own Pace',
    description: 'Every supplier will demo beautifully on their own demo menu. Ask them to load yours instead. Then ring in your three most common orders back to back, at speed, with someone talking to you. That is the actual test. A system that holds up there will hold up on a Friday.',
  },
];

export default function PosForFishAndChipShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS for Fish and Chip Shops' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Search className="w-3 h-3 mr-2" />
                BUYER&apos;S GUIDE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Fish and Chip Shops
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                A chip shop lives or dies on the Friday teatime queue. Between half four and seven, an order has to get from mouth to fryer in seconds — right portion, right sauce, right wrapping — and settle a card payment on a nine-pound ticket. Most POS systems are built for restaurants that turn tables. Here is what to look for instead, what to test, and what it should cost.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Six features a chippy actually needs</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> What to test before you sign anything</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Fish and chip shop POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What to Look For in a Fish and Chip Shop POS</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Six things that separate a system built for counter service from one that will slow you down.
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
            <blockquote className="max-w-3xl mx-auto mt-12 glass-card rounded-xl border border-slate-700/50 border-l-4 border-l-primary p-6">
              <p className="text-lg text-slate-200 italic">
                &ldquo;Large cod, regular chips, salt and vinegar, curry sauce and a can of Coke.&rdquo;
              </p>
              <footer className="text-slate-400 mt-3">
                Four items, three prompts, one price. Time how long it takes on any system you are shown.
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Smart Buying Advice</h2>
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
                The Posso Approach to Fish and Chip Shop POS
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Posso builds POS systems for food-service businesses, and <strong className="text-white">counter service is a workflow it was designed around</strong> rather than adapted to.
                </p>
                <p>
                  Portions sit on the screen as separately priced products, so large cod and regular chips are single taps instead of a size sub-menu. <strong className="text-white">Compulsory modifiers</strong> handle salt, vinegar, wrapping and sauces at the point of entry and print them on the kitchen ticket. The combo builder prices a meal deal as one line while still sending every component to the kitchen. All fourteen allergens are tagged per product and carry through to your online menu.
                </p>
                <p>
                  Collection orders can be scheduled into <strong className="text-white">timed slots with a capacity limit</strong> on each one, so an online rush does not arrive in the fryer all at once. Delivery zones, fees and minimum order values are drawn and set on a map. Just Eat, Uber Eats and Deliveroo orders land in the same queue as counter and phone orders, and the kitchen display shows one list with completion tracking rather than three tablets competing for attention.
                </p>
                <p>
                  The system is <strong className="text-white">offline-first</strong>. If the broadband drops mid-service you keep taking orders, taking cash and printing tickets, and everything syncs when the connection returns.
                </p>
                <p>
                  Pricing starts at <strong className="text-white">£499 + VAT</strong>. Setup is free — your menu is built and your equipment configured before you go live — and every system carries a two-year warranty. On-site installation is quoted separately if you want it. Orders through your own website or app carry a 60p service fee paid by the customer at checkout, so there is no percentage commission on your own trade; you pay card processing only. Card payments run through Posso Pay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Fish and Chip Shop POS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/takeaway-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Counter, collection &amp; delivery</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own site, 60p per order</p>
                </Link>
                <Link href="/self-order-kiosks-for-takeaways" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Cut the queue at peak</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integrations</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
              </div>
              <p className="text-slate-400 text-center mt-6">
                Prefer the unvarnished version? Read{' '}
                <Link href="/takeaway-epos-what-owners-say" className="text-primary hover:underline">what takeaway owners actually say about EPOS</Link>{' '}
                — including the chippy modernisation story, every source linked.
              </p>
            </div>
          </div>
        </section>

        <FAQSection title="POS for Fish and Chip Shops — Frequently Asked Questions" faqs={[
          { question: 'What is a fish and chip shop POS system?', answer: 'A fish and chip shop POS system is point-of-sale software built around the counter-service workflow of a chippy — portion and size pricing for fish and chips, compulsory prompts for salt, vinegar and wrapping, meal deals priced as single items, allergen tagging for fried menus, kitchen printing, card payments, and timed collection or delivery ordering.' },
          { question: 'Does a chip shop really need a specialist POS?', answer: 'Not a specialist system, but a specialist configuration. A general retail till will take money and print a receipt. What it will not do is price six portion variants on one screen, force a wrapping prompt, price a meal deal as one line, or hold a collection order for half six. Those are the four things that decide whether service runs smoothly at peak.' },
          { question: 'How much does a fish and chip shop POS cost in the UK?', answer: 'A complete system with a touchscreen terminal, kitchen printing and online ordering typically starts around £499 + VAT upfront, with monthly software from roughly £30. Add kitchen display screens, extra printers or a kiosk and the upfront figure rises. The number that matters over three years is usually online ordering commission, not hardware — a percentage-based platform on a busy shop will outspend the terminal several times over.' },
          { question: 'Can a chip shop POS handle a kebab or burger menu as well?', answer: 'Yes, and it should. Many chippies run a second menu off the same range. What to check is whether each menu section can carry its own modifier sets — salt and vinegar on one side, salad and sauces on the other — without the two interfering. Posso handles both on one screen.' },
          { question: 'Can online orders and Just Eat orders come into the same system?', answer: 'Yes. Orders from your own website, from the counter, from the phone and from Just Eat, Uber Eats or Deliveroo can all arrive in one queue on the POS and one list on the kitchen display. Without that, staff are re-typing marketplace orders from separate tablets during the busiest hour of the week.' },
          { question: 'Can the POS hold a collection order for a specific time?', answer: 'Yes. Collection orders can be scheduled into time slots with a limit on how many the system will accept per slot, so a burst of online orders is spread across the service instead of arriving together. This matters far more to a chip shop than delivery routing does.' },
          { question: 'What happens if the internet goes down mid-service?', answer: 'On an offline-first system, nothing stops. Posso stores products, orders and settings locally, so you carry on taking orders, taking cash and printing kitchen tickets without a connection, and everything syncs once you are back online. Ask any supplier this question specifically — cloud-only systems stop dead.' },
        ]} />

        <DemoEnquiry />
      </main>
      <Footer />
    </div>
  );
}
