import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, Truck, CreditCard, BarChart3, Phone, ArrowRight, ShieldCheck, Globe, Wifi, WifiOff, Languages, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best ePOS System for Takeaway | What to Look For in 2026',
  description:
    'How to choose the best ePOS system for takeaway — feature checklist, comparison criteria, and why 1,000+ UK takeaways chose Posso. Offline mode, delivery integration, caller ID, KDS, online ordering. From £499 + VAT.',
  keywords: [
    'best epos system for takeaway',
    'best takeaway epos',
    'best pos system for takeaway',
    'best takeaway pos system uk',
    'top takeaway epos',
    'takeaway epos comparison',
    'which epos for takeaway',
    'best epos takeaway uk',
    'takeaway pos system reviews',
    'recommended takeaway epos',
  ],
  alternates: {
    canonical: '/best-epos-system-for-takeaway',
  },
  openGraph: {
    title: 'Best ePOS System for Takeaway | Posso UK',
    description:
      'Feature checklist for choosing the best takeaway ePOS — offline mode, delivery integration, caller ID, kitchen display, and online ordering. 1,000+ UK installs.',
    url: 'https://www.posso.co.uk/best-epos-system-for-takeaway',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Takeaway ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'The best ePOS system for takeaways with offline operation, delivery integration, caller ID, kitchen display, online ordering, and multi-language support. 1,000+ UK installs with 2-year warranty.',
    url: 'https://www.posso.co.uk/best-epos-system-for-takeaway',
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
      reviewCount: '127',
      bestRating: '5',
    },
    featureList: [
      'Offline operation — works without internet',
      'Delivery platform integration (Just Eat, Uber Eats, Deliveroo)',
      'Caller ID for returning customers',
      'Kitchen display system',
      'Online ordering website',
      'Multi-language menu and interface',
      'Delivery zone management',
      'Sales analytics and reporting',
      '2-year hardware warranty',
      'UK-based support team',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Best ePOS System for Takeaway', item: 'https://www.posso.co.uk/best-epos-system-for-takeaway' },
    ],
  },
];

const featureChecklist = [
  { icon: WifiOff, title: 'Offline Operation', description: 'Your busiest hours are when the internet is most likely to struggle. The best takeaway ePOS must work offline — taking orders, printing tickets, and processing cash — then sync when reconnected.', posso: true },
  { icon: Truck, title: 'Delivery Platform Integration', description: 'Just Eat, Uber Eats, and Deliveroo orders should appear on your POS automatically. No extra tablets, no re-keying, no missed orders during the Friday rush.', posso: true },
  { icon: PhoneCall, title: 'Caller ID', description: 'When a regular customer calls, their name, address, and last order should pop up before you answer. Saves 30 seconds per phone order and makes customers feel valued.', posso: true },
  { icon: Monitor, title: 'Kitchen Display System', description: 'Paper tickets get lost, smudged, and buried under other tickets. A kitchen display shows orders in sequence, colour-coded by type, with timers so nothing gets forgotten.', posso: true },
  { icon: Globe, title: 'Online Ordering Website', description: 'Your own branded ordering website — not a listing on someone else\'s marketplace. Low commission rates so you keep more of every order.', posso: true },
  { icon: Languages, title: 'Multi-Language Support', description: 'Kitchen staff who speak different languages need an interface they can read. Multi-language support on the POS and kitchen display eliminates misunderstandings.', posso: true },
];

const trustSignals = [
  { stat: '1,000+', label: 'UK takeaway installs' },
  { stat: '2 years', label: 'Hardware warranty included' },
  { stat: 'UK-based', label: 'Support team — no overseas call centres' },
  { stat: '24 hours', label: 'Average time from delivery to going live' },
];

const comparisonCriteria = [
  { criteria: 'Does it work offline?', why: 'Cloud-only systems go down when your internet does. On a Friday night, that means lost orders and angry customers. Offline-first systems keep working regardless.' },
  { criteria: 'Is online ordering included or extra?', why: 'Some providers charge £50–£150/month for an ordering website on top of the POS. With Posso, your online ordering website is included with low commission — no monthly fee.' },
  { criteria: 'Who owns your customer data?', why: 'If your ePOS provider owns your customer database, you cannot leave without losing years of order history, customer details, and marketing lists. Make sure you own your data.' },
  { criteria: 'What happens when hardware breaks?', why: 'A 2-year warranty matters. Some providers offer 90 days, then charge for replacements. Ask about warranty length and whether it covers the full system or just the software.' },
  { criteria: 'Is delivery integration built in or bolted on?', why: 'Bolt-on integrations break. Native delivery integration means Just Eat, Uber Eats, and Deliveroo orders flow directly into your POS without middleware or extra fees.' },
  { criteria: 'Can you change provider without starting over?', why: 'Locked-in contracts with expensive exit fees are a red flag. The best providers earn your business every month — they do not need a contract to keep you.' },
];

export default function BestEposSystemForTakeawayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Best ePOS System for Takeaway' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Zap className="w-3 h-3 mr-2" />
                1,000+ UK TAKEAWAY INSTALLS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Best ePOS System for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Takeaway
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Not every ePOS system is built for takeaways. Here is what to look for, what to avoid, and why over 1,000 UK takeaways chose Posso.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Offline operation — never lose an order</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Delivery apps, caller ID & KDS built in</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete system from £499 + VAT with 2-year warranty</li>
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

        {/* Trust Signals */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {trustSignals.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{s.stat}</p>
                  <p className="text-slate-400 text-sm mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Checklist */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                The Takeaway ePOS Feature Checklist
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                These are the six features that separate a good takeaway ePOS from a generic one. Posso includes all of them as standard.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {featureChecklist.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    {f.posso && <span className="text-xs font-semibold text-green-400 bg-green-400/10 rounded-full px-2 py-1">POSSO INCLUDED</span>}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">
                What to Ask Before You Buy
              </h2>
              <p className="text-slate-400 text-lg text-center mb-10 max-w-2xl mx-auto">
                Six questions every takeaway owner should ask before choosing an ePOS system. If the provider cannot answer all of them, keep looking.
              </p>
              <div className="space-y-6">
                {comparisonCriteria.map((c) => (
                  <div key={c.criteria} className="glass-card rounded-xl p-6 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-2">{c.criteria}</h3>
                    <p className="text-slate-400">{c.why}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Posso */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Why 1,000+ Takeaways Chose Posso
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most ePOS systems are designed for restaurants and adapted for takeaways as an afterthought. Posso was <strong className="text-white">built for takeaways from the ground up</strong>. Collection workflows, delivery zone management, caller ID, and kitchen printing are core features — not add-ons you pay extra for.
                </p>
                <p>
                  Every system ships with a <strong className="text-white">2-year hardware warranty</strong>, free setup, free menu import, and free staff training. Our support team is UK-based — you speak to someone who understands the difference between a curry house and a fish and chip shop.
                </p>
                <p>
                  And with online ordering on a <strong className="text-white">low commission model</strong>, you keep more of every order than you would on a third-party marketplace. Your branding, your customer data, your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Everything Else That Comes Standard
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: BarChart3, title: 'Sales Analytics', desc: 'Track revenue by channel, see your best sellers, identify peak hours, and measure average order value — all from your phone.' },
                  { icon: CreditCard, title: 'Integrated Payments', desc: 'Teya card terminal with contactless, chip & PIN, Apple Pay, and Google Pay. Payment amount sent from the POS — no re-keying.' },
                  { icon: ShieldCheck, title: 'Free Setup & Training', desc: 'We configure the hardware, import your menu, and train your staff remotely. Most takeaways go live within 24 hours of delivery.' },
                  { icon: Smartphone, title: 'Self-Order Kiosks', desc: 'Add customer-facing kiosks from £699 + VAT. Customers browse the menu and order themselves — reducing queue times during peak hours.' },
                ].map((b) => (
                  <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50 flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <b.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{b.title}</h3>
                      <p className="text-slate-400">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Takeaway ePOS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/epos-systems-for-takeaways" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway ePOS Bundles</p>
                  <p className="text-slate-400 text-sm mt-1">Complete hardware packages</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own ordering website</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integrations</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats & more</p>
                </Link>
                <Link href="/epos-system-for-indian-takeaway" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Indian Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Cuisine-specific features</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Choosing the Best Takeaway ePOS — Frequently Asked Questions" faqs={[
          { question: 'What makes an ePOS system the best for takeaways specifically?', answer: 'A takeaway ePOS needs features that restaurant systems often lack — caller ID for phone orders, delivery zone management with automatic fee calculation, collection time estimation, and the ability to work offline during internet outages. Generic restaurant POS systems treat these as add-ons. The best takeaway ePOS includes them as standard.' },
          { question: 'Does the Posso ePOS really work offline?', answer: 'Yes. The system is built offline-first. If your internet drops during a busy Friday night, you can continue taking orders, printing kitchen tickets, and processing cash payments. Everything syncs automatically when the connection is restored. Card payments require connectivity, but order-taking and kitchen printing work without it.' },
          { question: 'How does caller ID work on the takeaway POS?', answer: 'When a customer calls your shop, their phone number is matched against your database. If they have ordered before, their name, address, and previous orders appear on screen before you answer. You can reorder their last meal in two taps, saving 30+ seconds per phone order.' },
          { question: 'Can I use the system with Just Eat, Uber Eats, and Deliveroo?', answer: 'Yes. Orders from all major delivery platforms are pulled directly into the Posso POS and printed on your kitchen printer. No extra tablets on the counter, no re-keying orders, and no missed orders. You manage all channels from one screen.' },
          { question: 'What does the 2-year warranty cover?', answer: 'The warranty covers all hardware supplied by Posso — touchscreen till, kitchen printer, receipt printer, and cash drawer. If any component fails within two years, we replace it. Most competitors offer 12 months or charge extra for extended coverage.' },
          { question: 'How does Posso compare on price to other takeaway ePOS systems?', answer: 'The complete system starts from £499 + VAT with all hardware and software included. Many competitors charge £499 for software alone, then require you to source hardware separately. Finance is available from £24.92 per week. Online ordering runs on a low commission model with no monthly subscription fee.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
