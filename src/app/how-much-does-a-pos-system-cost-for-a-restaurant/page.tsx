import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Phone, ArrowRight, PoundSterling, Monitor, Smartphone, Globe, CreditCard, Printer, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '💰 How Much Does a POS System Cost for a Restaurant? (2026 UK Guide)',
  description:
    'Restaurant POS system costs in the UK range from £499 to £4,500+ depending on hardware, software, and features. Full 2026 pricing breakdown with finance options from £24.92/week.',
  keywords: [
    'how much does a POS system cost',
    'restaurant POS system cost',
    'POS system price UK',
    'EPOS system cost restaurant',
    'restaurant till system price',
    'POS system cost for small restaurant',
    'cheap POS system restaurant',
    'POS system monthly cost',
  ],
  alternates: { canonical: '/how-much-does-a-pos-system-cost-for-a-restaurant' },
  openGraph: {
    title: 'How Much Does a POS System Cost for a Restaurant? (2026 UK Guide)',
    description: 'Complete UK pricing guide: POS hardware from £499, kiosks from £699, online ordering from £350. Finance from £24.92/week.',
    url: 'https://www.posso.co.uk/how-much-does-a-pos-system-cost-for-a-restaurant',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does a POS System Cost for a Restaurant in 2026?',
    description: 'Complete UK pricing guide for restaurant POS systems. Hardware, software, payment processing, and total cost of ownership breakdown.',
    author: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
    publisher: { '@type': 'Organization', name: 'Posso Ltd', logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' } },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    url: 'https://www.posso.co.uk/how-much-does-a-pos-system-cost-for-a-restaurant',
    image: 'https://www.posso.co.uk/images/posso_epos_integration.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'POS System Cost', item: 'https://www.posso.co.uk/how-much-does-a-pos-system-cost-for-a-restaurant' },
    ],
  },
];

const pricingTable = [
  { item: 'POS Touchscreen Till', price: 'From £499', note: '15" capacitive, fanless, IP54 rated' },
  { item: 'Self-Order Kiosk', price: 'From £699', note: '21" touchscreen, floor-standing or wall-mount' },
  { item: 'Kitchen Display Screen', price: 'From £199', note: 'Wall-mounted, HDMI, runs KDS in browser' },
  { item: 'Receipt Printer', price: 'From £89', note: '80mm thermal, USB or LAN, 250mm/s' },
  { item: 'Kitchen Printer', price: 'From £129', note: 'Heat/splash resistant, loud buzzer alert' },
  { item: 'Cash Drawer', price: 'From £59', note: 'Auto-kick, 5 note/8 coin compartments' },
  { item: 'Card Machine (Teya)', price: 'From £0', note: 'Included with Teya payment processing agreement' },
  { item: 'Customer Display', price: 'From £149', note: 'Secondary screen showing cart and promotions' },
  { item: 'Online Ordering Website', price: 'From £350', note: 'Or included free with Teya card machines' },
];

const hiddenCosts = [
  { title: 'Transaction Fees', description: 'Card processing fees typically range from 1.2% to 1.75% per transaction. Posso integrates with Teya for competitive rates.' },
  { title: 'Monthly Software Fees', description: 'Some providers charge £30–£100/month for software. Ask if this is included in the upfront price.' },
  { title: 'Commission on Online Orders', description: 'Marketplaces like Just Eat charge 25–35% per order. With your own ordering website, commission is a fraction of this.' },
  { title: 'Setup & Installation', description: 'Many providers charge £200–£500 for installation. Posso includes free on-site setup and training.' },
  { title: 'Support & Maintenance', description: 'Check if support is included or charged extra. Posso includes UK-based support with a 2-year warranty.' },
  { title: 'Menu Updates', description: 'Some providers charge per menu change. With Posso, you manage your own menu anytime — no extra cost.' },
];

export default function PosSystemCostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'POS System Cost' }]} />

        {/* Hero — Featured Snippet Target */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <PoundSterling className="w-3 h-3 mr-2" />
              2026 UK PRICING GUIDE
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              How Much Does a POS System Cost for a Restaurant?
            </h1>

            {/* Featured Snippet Answer — direct, concise, structured */}
            <div className="mt-8 glass-card rounded-2xl border border-primary/30 p-8">
              <p className="text-xl text-white font-semibold mb-4">
                A restaurant POS system in the UK costs between <span className="text-primary">£499 and £4,500+</span> depending on what you need:
              </p>
              <ul className="space-y-3 text-lg text-slate-300">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-400 mt-1 shrink-0" /> <strong className="text-white">Basic POS till:</strong> £499–£799 (touchscreen, software, receipt printer)</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-400 mt-1 shrink-0" /> <strong className="text-white">POS + kiosk bundle:</strong> £1,200–£2,500 (till + self-order kiosk + KDS)</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-400 mt-1 shrink-0" /> <strong className="text-white">Full restaurant package:</strong> £3,000–£4,500 (2 kiosks + till + KDS + printers + card machine + online ordering)</li>
              </ul>
              <p className="text-slate-400 mt-4">
                Finance options available from <strong className="text-white">£24.92/week</strong> (5-year plan). Free setup and training included with Posso.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
              </a>
            </div>
          </div>
        </section>

        {/* Detailed Pricing Table */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Restaurant POS Hardware Prices (2026)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-4 px-4 text-white font-semibold">Item</th>
                    <th className="py-4 px-4 text-white font-semibold">Price (ex VAT)</th>
                    <th className="py-4 px-4 text-white font-semibold hidden sm:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTable.map((row) => (
                    <tr key={row.item} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-4 text-slate-200 font-medium">{row.item}</td>
                      <td className="py-4 px-4 text-primary font-bold">{row.price}</td>
                      <td className="py-4 px-4 text-slate-400 text-sm hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mt-4 text-center">
              All prices exclude VAT. Prices correct as of April 2026. Contact us for a custom quote.
            </p>
          </div>
        </section>

        {/* Example Package */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Example Package: What Most Restaurants Choose
            </h2>
            <div className="glass-card rounded-2xl border border-primary/20 p-8">
              <p className="text-slate-400 mb-6 text-lg">
                The most popular Posso package for restaurants includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  '2x 21" Self-Order Kiosks',
                  '1x POS Touchscreen Till',
                  '1x Kitchen Display Screen',
                  'Receipt Printer + Kitchen Printer',
                  'Cash Drawer',
                  'Teya Card Machine',
                  'Posso One Software (all modules)',
                  'Free Setup, Menu Import & Training',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-green-400 shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-700 pt-6">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div className="glass-card rounded-xl p-4 border border-slate-700/50">
                    <p className="text-sm text-slate-400">Total Price</p>
                    <p className="text-2xl font-bold text-white">£4,500</p>
                    <p className="text-xs text-slate-500">ex VAT</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 border border-primary/30">
                    <p className="text-sm text-slate-400">3-Year Finance</p>
                    <p className="text-2xl font-bold text-primary">£162/mo</p>
                    <p className="text-xs text-slate-500">£37.38/week</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 border border-slate-700/50">
                    <p className="text-sm text-slate-400">5-Year Finance</p>
                    <p className="text-2xl font-bold text-white">£108/mo</p>
                    <p className="text-xs text-slate-500">£24.92/week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Costs */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Hidden Costs to Watch Out For
            </h2>
            <p className="text-slate-400 text-lg text-center mb-10 max-w-2xl mx-auto">
              The sticker price is only part of the story. Here are the costs many POS providers don&apos;t tell you about upfront.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {hiddenCosts.map((cost) => (
                <div key={cost.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-2">{cost.title}</h3>
                  <p className="text-slate-400">{cost.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Affects Price */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              What Affects the Price of a Restaurant POS?
            </h2>
            <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Number of Terminals</h3>
                <p>A single-till setup for a small takeaway is far cheaper than a multi-terminal restaurant with separate bar and kitchen stations. Each additional POS screen or kiosk adds to the hardware cost.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Self-Order Kiosks</h3>
                <p>Adding kiosks increases the upfront cost but typically pays for itself within 3–6 months through increased average order value (20–30% higher) and reduced labour costs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Online Ordering</h3>
                <p>Your own ordering website costs from £350 with Posso, or is included free with a Teya card machine agreement. Compare this to paying 25–35% commission on every Just Eat or Deliveroo order.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Software vs Hardware</h3>
                <p>Some providers sell software-only (you bring your own tablet). This is cheaper upfront but may lack features like thermal printing, cash drawer integration, and dedicated kitchen displays.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore POS Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
                <Link href="/epos-pricing-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">EPOS Pricing</p>
                  <p className="text-slate-400 text-sm mt-1">Every cost, published</p>
                </Link>
                <Link href="/finance" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Finance Calculator</p>
                  <p className="text-slate-400 text-sm mt-1">From £24.92/week</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Full Feature List</p>
                  <p className="text-slate-400 text-sm mt-1">30+ POS features</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS System Cost — FAQs" faqs={[
          { question: 'What is the cheapest POS system for a restaurant in the UK?', answer: 'The cheapest professional restaurant POS system starts from around £499 + VAT for a touchscreen till with software, receipt printing, and integrated card payments. Tablet-based solutions using an iPad can be cheaper (from £200–£300) but lack features like thermal printing and cash drawer integration.' },
          { question: 'Is it better to buy or lease a POS system?', answer: 'Both options work. Buying outright (from £499) gives you ownership with no ongoing payments. Leasing/finance (from £24.92/week on a 5-year plan) spreads the cost and can be claimed as a business expense for tax relief at 19% corporation tax.' },
          { question: 'Are there monthly fees for POS software?', answer: 'This varies by provider. Some charge £30–£100/month for software access. With Posso, the software is included — you pay for the hardware and there are no separate monthly software fees for the core POS system.' },
          { question: 'How much does a self-order kiosk cost?', answer: 'Self-order kiosks for restaurants typically cost from £699 + VAT for a 21" touchscreen with integrated card payment. Most restaurants see a return on investment within 3–6 months through increased average order value (20–30% higher) and reduced staffing needs.' },
          { question: 'Does the POS price include installation and training?', answer: 'Not always — many providers charge £200–£500 extra for setup. Posso includes free on-site installation, menu import, and staff training with every hardware purchase. We also include a 2-year warranty and UK-based support.' },
          { question: 'What ongoing costs should I budget for?', answer: 'Beyond the hardware, budget for: card processing fees (1.2–1.75% per transaction), internet connection, receipt paper rolls (around £20/month), and any optional add-ons like online ordering or delivery integration.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
