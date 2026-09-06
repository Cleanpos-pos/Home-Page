import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Search, Flame, Grid3x3, Users, MousePointerClick, Timer, FileText } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indian Takeaway EPOS & Till System — from £499',
  description:
    'Choosing an EPOS for an Indian takeaway? What actually matters — spice levels, protein-by-curry pricing, banquet menus and collection times — plus real costs. Posso tills from £499 + VAT.',
  keywords: [
    'pos for indian takeaway',
    'indian takeaway epos',
    'indian takeaway till system',
    'indian takeaway pos system',
    'curry house epos',
    'indian restaurant pos uk',
    'spice level pos',
    'indian takeaway till',
    'indian takeaway software',
    'best pos for indian takeaway',
  ],
  alternates: {
    canonical: '/pos-for-indian-takeaway',
  },
  openGraph: {
    title: 'Indian Takeaway EPOS & Till System | Posso UK',
    description:
      'Indian takeaway EPOS buyer\'s guide — the six things that actually matter, what to test before you buy, and what it costs. Posso tills from £499 + VAT.',
    url: 'https://www.posso.co.uk/pos-for-indian-takeaway',
    type: 'website',
    // TODO: replace with a bespoke 1200×630 card once artwork exists
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso POS for UK Indian takeaways — buyer\'s guide' }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS for Indian Takeaways',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Guide to choosing a POS system for an Indian takeaway, covering compulsory spice-level selection, protein-by-curry price matrices, banquet and set menu pricing, sundry attach speed, realistic collection times and menu descriptions.',
    url: 'https://www.posso.co.uk/pos-for-indian-takeaway',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    publisher: { '@id': 'https://www.posso.co.uk/#organization' },
    featureList: [
      'Compulsory spice-level modifiers per dish',
      'Protein and curry variant pricing on one product',
      'Banquet and set menu pricing per head',
      'One-tap sundries from the main dish screen',
      'Timed collection slots with capacity limits',
      'Caller ID with customer order history',
      'Just Eat, Uber Eats and Deliveroo integration',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS for Indian Takeaways', item: 'https://www.posso.co.uk/pos-for-indian-takeaway' },
    ],
  },
];

const features = [
  { icon: Flame, title: 'Spice Level Has to Be a Forced Choice, Not a Note', description: 'Mild, medium, hot, extra hot — and the customer who says "medium but proper medium". This is the single most common source of a remake and a refund on an Indian menu, and it is the one detail that must never rely on a free-text note staff can skip. The prompt should fire automatically when the dish is added, refuse to be dismissed, and print on the kitchen ticket at the same weight as the dish name.' },
  { icon: Grid3x3, title: 'One Curry Across Six Proteins Is a Matrix, Not Six Products', description: 'Chicken, lamb, prawn, king prawn, paneer, vegetable — against madras, jalfrezi, korma, balti and the rest. Built as separate products that is several hundred items to create and reprice by hand. Built properly it is one dish with a protein variant carrying its own price. Ask how a 40p rise on king prawn across the whole menu is applied: if the answer involves editing dozens of products individually, the system will fight you at every price review.' },
  { icon: Users, title: 'Banquet Nights and Set Menus Have to Price Per Head', description: 'Banquet for two, Sunday banquet, a fixed menu at a price per person with choices at each course. A POS that cannot hold a per-head price with selections underneath forces staff to ring in every component and discount by hand — which loses money on some, overcharges on others, and leaves you unable to tell how many banquets you sold. Look for a bundle that multiplies by covers and still sends every chosen dish to the kitchen.' },
  { icon: MousePointerClick, title: 'Sundries Have to Be One Tap from the Main Dish', description: 'Rice, naan, poppadoms, chutney tray, bhajis. They are on nearly every order, they carry good margin, and they are added at the end of a phone call when the customer is already saying goodbye. If reaching them means leaving the curry screen and navigating back, they get missed. The sundries most often ordered alongside a dish should be one tap away from it, not a category tab elsewhere.' },
  { icon: Timer, title: 'Long Cook Times Change What a Collection Time Means', description: 'A curry ordered at half seven on a Saturday is not ready in the fifteen minutes a pizza would take, and a system that quotes one flat prep time to every customer sets up an argument at the counter. What matters is being able to vary the quoted time by how busy the kitchen already is, and to cap how many orders are accepted into any one slot so a rush of online orders does not all land on the same burners.' },
  { icon: FileText, title: 'Dish Descriptions Belong in the POS, Not a Separate PDF', description: 'On an Indian menu the name rarely explains the dish, and the customer ordering online has no member of staff to ask. If descriptions and allergen data live in a PDF menu maintained separately from the till, they go stale the moment you change anything. Descriptions, allergens and images should sit against the product in the POS and flow to your online menu from there, so one edit updates everywhere.' },
];

const benefits: { title: string; description: React.ReactNode }[] = [
  {
    title: 'Separate the Guide from the Sales Pitch',
    description: (
      <>
        Most Indian takeaway POS pages are product brochures. Work out your own requirements first — spice prompts, protein variants, banquet pricing, sundry speed — then judge each supplier against your list rather than theirs. When you are ready to look at a specific system, our{' '}
        <Link href="/epos-system-for-indian-takeaway" className="text-primary hover:underline">Indian takeaway ePOS page</Link>{' '}
        covers what Posso actually does.
      </>
    ),
  },
  {
    title: 'Ask What Language the Kitchen Ticket Prints In',
    description: 'A POS available in several languages and a kitchen ticket printed in one are different claims, and suppliers routinely blur them. If your kitchen team reads Bengali, Punjabi or Urdu more comfortably than English, ask for a printed sample ticket in that language before you buy — not a screenshot of a settings menu.',
  },
  {
    title: 'Work Out the Real Three-Year Cost',
    description: 'Hardware is the smallest line. Add monthly software, card processing, marketplace commission, your own online ordering costs, printer rolls and support. For a shop taking a large share of its orders through Just Eat or Uber Eats, three years of commission will exceed every other cost in the setup combined — which makes the cost of moving customers to your own channel the first number worth modelling, before you compare terminal prices.',
  },
  {
    title: 'Test It on a Saturday Order, Not a Demo Order',
    description: 'Ask for your own menu to be loaded, then ring in a real Saturday order at speed — four curries at three different spice levels, two rice, two naan and a starter — while somebody talks over you. That takes about ninety seconds on a system that fits and considerably longer on one that does not. It is the easiest test to run and the one buyers most often skip.',
  },
];

export default function PosForIndianTakeawayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS for Indian Takeaways' },
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
                  Indian Takeaways
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Six proteins against a dozen sauces, four spice levels that decide whether a dish comes back, a banquet priced per head, and a kitchen that cannot turn a curry round in the time a pizza takes. An Indian takeaway asks specific things of a till. Here is what to look for, what to test, and what it should cost.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Six features an Indian menu actually needs</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> What to test before you sign anything</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Indian takeaway POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What to Look For in an Indian Takeaway POS</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Six things that separate a system built for a curry menu from one that will make you rebuild it by hand.
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
                &ldquo;Chicken tikka madras, lamb rogan josh medium, king prawn balti hot, a peshwari naan, pilau rice and onion bhajis — collection at eight.&rdquo;
              </p>
              <footer className="text-slate-400 mt-3">
                Three proteins, three spice levels, three sundries and a collection time. Ring it in on any system you are shown and time it.
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
                The Posso Approach to Indian Takeaway POS
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Posso is built for <strong className="text-white">high-volume takeaway service</strong>, and the parts of an Indian menu that break a generic till — spice prompts, protein variants and per-head banquets — are handled in the menu builder rather than by workaround.
                </p>
                <p>
                  <strong className="text-white">Spice-level modifiers</strong> attach to a dish and fire at the point of entry, printing on the kitchen ticket alongside the dish name. Variants carry their own prices, so a protein change is a price change rather than a separate product. The combo builder prices meal deals and set menus as one line while still sending each component through to the kitchen, and all fourteen allergens are tagged per product from the same screen.
                </p>
                <p>
                  Collection orders can be scheduled into <strong className="text-white">timed slots with a capacity limit</strong> on each, so an online rush is spread across the service rather than landing on the burners at once. Delivery zones, fees and minimum order values are drawn and set on a map. Caller ID brings up a returning customer&apos;s name, address and order history as the phone rings.
                </p>
                <p>
                  Just Eat, Uber Eats and Deliveroo orders arrive in the same queue as counter, phone and website orders, and the{' '}
                  <Link href="/kitchen-display-system" className="text-primary hover:underline">kitchen display</Link>{' '}
                  shows one list with completion tracking. The system is offline-first, so a dropped connection mid-service does not stop you taking orders, taking cash or printing tickets.
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Indian Takeaway POS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/epos-system-for-indian-takeaway" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Indian Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">The Posso system in full</p>
                </Link>
                <Link href="/ai-phone-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">AI Phone Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Answer every call at peak</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own site, 60p per order</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integrations</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS for Indian Takeaways — Frequently Asked Questions" faqs={[
          { question: 'What is an Indian takeaway POS system?', answer: 'An Indian takeaway POS system is point-of-sale software built around a curry menu — compulsory spice-level prompts on every applicable dish, protein variants priced against a single curry rather than duplicated as separate products, banquet and set menus priced per head, fast access to rice, naan and sundries, kitchen printing, card payments, and phone, online and delivery app orders arriving in one queue.' },
          { question: 'How should a POS handle spice levels?', answer: 'As a compulsory modifier that fires when the dish is added and cannot be dismissed, printing on the kitchen ticket at the same weight as the dish name. Spice level is the most common cause of a remake on an Indian menu, and a free-text note is the first thing staff skip when there is a queue. Ask to see a ticket printed with a spice level on it before you buy.' },
          { question: 'Do I need a separate product for every protein and curry combination?', answer: 'No, and a system that requires it will cost you days of setup and make every price review painful. Chicken, lamb, prawn, king prawn, paneer and vegetable should be variants against a single curry, each carrying its own price. Ask how a price rise on king prawn across the whole menu is applied — if the answer is editing dozens of products by hand, that is your answer.' },
          { question: 'Can a POS price a banquet menu per person?', answer: 'It should. A banquet is a fixed price per head with choices at each course, so the system needs to multiply by covers, hold the per-head price as a single line, and still send every chosen dish through to the kitchen. Ringing in each component and discounting by hand loses margin on some orders, overcharges on others, and leaves your reports unable to say how many banquets you sold.' },
          { question: 'How much does an Indian takeaway POS cost in the UK?', answer: 'A complete system with a touchscreen terminal, kitchen printing and online ordering typically starts around £499 + VAT upfront, with monthly software from roughly £30. Kitchen display screens, extra printers and kiosks add to that. Over three years marketplace commission is usually the largest single cost in the whole setup — model that before comparing hardware prices.' },
          { question: 'Can the POS quote a realistic collection time when the kitchen is busy?', answer: 'On a well-designed system, yes. Collection orders can be scheduled into time slots with a limit on how many the system accepts per slot, so a burst of online orders is spread across the service rather than landing on the burners together. A flat prep time quoted to every customer regardless of how busy the kitchen is will produce arguments at the counter on a Saturday.' },
          { question: 'What is the difference between this guide and your Indian takeaway ePOS page?', answer: 'This page is a buyer\'s guide — what to look for in any Indian takeaway POS, what to test and what it should cost, whoever you end up buying from. The Indian takeaway ePOS page describes what the Posso system itself does, with features, pricing and a demo request. Start here if you are comparing, and go there when you want the detail on Posso.' },
        ]} />

        <DemoEnquiry />
      </main>
      <Footer />
    </div>
  );
}
