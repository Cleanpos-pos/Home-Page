import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, PoundSterling, Package, ShieldCheck, Layers, HeadphonesIcon, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cheap ePOS Software',
  description:
    'Cheap ePOS Software with no hidden fees, full feature set, cloud reporting, integrated payments, and free training. Affordable POS from £499 + VAT. Compare what you get for the price.',
  keywords: [
    'cheap epos software',
    'cheap epos system',
    'affordable epos software',
    'budget epos system',
    'low cost epos',
    'cheap pos software uk',
    'affordable pos system',
    'cheap till software',
    'epos software price',
    'value epos system uk',
  ],
  alternates: {
    canonical: '/cheap-epos-software',
  },
  openGraph: {
    title: 'Cheap ePOS Software',
    description:
      'Cheap ePOS Software with no hidden fees, full features, cloud reporting, integrated payments, and free training. From £499 + VAT.',
    url: 'https://www.posso.co.uk/cheap-epos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Cheap ePOS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Affordable ePOS software with full feature set including cloud reporting, integrated card payments, inventory management, staff management, and online ordering — all from £499 + VAT with no hidden fees.',
    url: 'https://www.posso.co.uk/cheap-epos-software',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Full ePOS feature set from £499 + VAT',
      'No hidden fees or surprise charges',
      'Cloud reporting and analytics',
      'Integrated card payments',
      'Free setup and staff training',
      'Inventory and staff management included',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Cheap ePOS Software', item: 'https://www.posso.co.uk/cheap-epos-software' },
    ],
  },
];

const features = [
  { icon: PoundSterling, title: 'Genuinely Affordable Pricing', description: 'The complete ePOS software starts from £499 + VAT. That includes the touchscreen terminal, software licence, menu setup, and staff training. No setup fee hidden in the small print, no "activation charge" added at checkout. The price you see is the price you pay. Finance options from £24.92 per week make it accessible for any budget.' },
  { icon: Package, title: 'Full Feature Set Included', description: 'Cheap does not mean stripped down. You get sales reporting, inventory management, staff permissions, table management, kitchen display, online ordering integration, loyalty programme, and card payment integration. Every feature that expensive competitors charge extra for is included as standard. Nothing is paywalled behind a premium tier.' },
  { icon: BarChart3, title: 'Cloud Reporting & Analytics', description: 'Access your sales data from any device, anywhere. See daily revenue, best-selling items, peak trading hours, staff performance, and payment method breakdowns. Compare this week to last week. Export reports for your accountant. The cloud dashboard is included — not a paid add-on that doubles your monthly cost.' },
  { icon: ShieldCheck, title: 'No Hidden Fees', description: 'No monthly "software maintenance" fee. No per-terminal surcharge for additional screens. No charge for software updates. No annual licence renewal. The ePOS industry has a reputation for hidden costs — we list every charge upfront before you commit. Ask us to break down the total cost and we will, line by line.' },
  { icon: Layers, title: 'Integrated Card Payments', description: 'The ePOS integrates with Teya card machines. Sale amounts transfer from the till to the terminal automatically. Low transaction fees with next-day settlement. Unified reporting shows card and cash sales in one view. You can even get a free card machine with a processing agreement — eliminating another upfront cost.' },
  { icon: HeadphonesIcon, title: 'Free Setup & Training', description: 'Setup, menu configuration, and staff training are included at no extra cost. We configure your menu, load your items, set up your table layout, and train your team on how to use the system. You do not pay a consultant £500 to get started. The system is ready to trade on day one.' },
];

const benefits = [
  { title: 'Get Premium Features at a Budget Price', description: 'Other ePOS providers charge £1,500–£3,000 for the same features Posso includes from £499. Cloud reporting, kitchen display, loyalty programmes, and online ordering are standard — not premium add-ons. You get the tools that drive revenue without the price tag that eats into your profit.' },
  { title: 'Avoid the Hidden Cost Trap', description: 'The cheapest-looking ePOS system is often the most expensive once you add monthly fees, per-terminal charges, update costs, and premium feature unlocks. Posso prices transparently. The quote includes everything. No surprises on your first invoice, your sixth, or your sixtieth.' },
  { title: 'Start Trading Without Large Capital Outlay', description: 'A new restaurant or shop should not spend thousands on a till system before serving a single customer. From £499 + VAT — or from £24.92 per week on finance — you have a complete ePOS system running from day one. Keep your capital for stock, fit-out, and marketing where it makes a bigger impact.' },
  { title: 'Scale Without Cost Escalation', description: 'Adding a second terminal, a kitchen display, or online ordering does not trigger a massive price increase. The software is designed to scale with your business. A single-site cafe and a five-location chain both run the same software — the cost scales proportionally, not exponentially.' },
];

export default function CheapEposSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Cheap ePOS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <PoundSterling className="w-3 h-3 mr-2" />
                AFFORDABLE ePOS — NO HIDDEN FEES
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Cheap ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Full-featured ePOS software from £499 + VAT. Cloud reporting, integrated payments, kitchen display, loyalty, and online ordering — all included. No hidden fees, no feature paywalls, no surprises.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete ePOS system from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Every feature included — nothing paywalled</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Free setup, training, and 2-year warranty</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What You Get for the Price</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Affordable ePOS software that does not compromise on features. Everything you need, nothing you do not.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Choose Affordable ePOS Software</h2>
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
                Cheap Does Not Mean Compromised
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The word &quot;cheap&quot; makes people nervous about quality. In the ePOS market, the concern is justified — <strong className="text-white">some budget systems strip out features until all you have is a glorified cash register</strong>. No reporting, no integrations, no support. You save £500 upfront and lose £5,000 in missed efficiency and lost sales over two years.
                </p>
                <p>
                  Posso takes a different approach. The software is affordable because we have <strong className="text-white">eliminated the overhead that inflates competitor pricing</strong> — no commissioned sales teams, no showroom rents, no enterprise-grade complexity that small businesses never use. The savings are passed directly to you in the form of a lower price for a complete product.
                </p>
                <p>
                  Every feature is included from day one: <strong className="text-white">cloud reporting, kitchen display, staff management, table service, online ordering, loyalty programmes, and integrated Teya card payments</strong>. If a competitor charges £2,000 for the same feature list, ask what you are paying extra for — because it is not the software.
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
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full software overview</p>
                </Link>
                <Link href="/free-card-machine" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Free Card Machine</p>
                  <p className="text-slate-400 text-sm mt-1">No upfront hardware cost</p>
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

        <FAQSection title="Cheap ePOS Software — FAQ" faqs={[
          { question: 'What is included in the £499 + VAT price?', answer: 'The price includes the touchscreen POS terminal, ePOS software licence, cloud reporting dashboard, menu setup and configuration, staff training, and a 2-year warranty. Features like kitchen display, table management, loyalty programme, and online ordering integration are all included as standard. There are no hidden activation or setup fees.' },
          { question: 'Are there monthly fees on top of the purchase price?', answer: 'There is a modest monthly subscription for cloud services, software updates, and ongoing support. This is clearly stated before purchase — it is not a surprise charge. The monthly fee covers continuous development, security updates, and access to the cloud dashboard. There are no per-terminal surcharges or feature unlock fees.' },
          { question: 'How does this compare to more expensive ePOS systems?', answer: 'Feature for feature, Posso matches ePOS systems costing £1,500–£3,000. Cloud reporting, kitchen display integration, staff management, loyalty programmes, online ordering, and card payment integration are all included. The lower price reflects efficient operations, not missing features. We encourage you to compare feature lists side by side.' },
          { question: 'Is there a finance option?', answer: 'Yes. Finance is available from £24.92 per week, making the system accessible for startups and businesses managing cash flow carefully. The finance agreement is straightforward with clear terms. You can start trading with the full system without a large upfront payment.' },
          { question: 'What support is included?', answer: 'Phone and remote support are included in your subscription. If something goes wrong, call 0808 175 3956 and speak to a support agent. Remote access allows our team to diagnose and fix issues without a site visit in most cases. Hardware support and replacement are covered under the 2-year warranty.' },
          { question: 'Can I add more terminals or features later?', answer: 'Yes. Add additional terminals, kitchen displays, or kiosks from £699 + VAT as your business grows. The software scales with you — the same cloud dashboard manages one terminal or ten. There is no penalty for starting small and expanding later. Pricing for additional hardware is proportional, not punitive.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
