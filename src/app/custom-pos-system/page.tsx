import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Wrench, Building2, BarChart3, Network, Shield, Layers } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom POS System',
  description:
    'Custom POS System with bespoke development for chains, franchise management, multi-site analytics, and tailored workflows. Built for businesses that need more than off-the-shelf. From £499 + VAT.',
  keywords: [
    'custom pos system',
    'custom pos software',
    'bespoke pos system',
    'custom till system',
    'custom epos system',
    'pos system for chains',
    'franchise pos system',
    'multi-site pos system',
    'custom pos development uk',
    'tailored pos system',
  ],
  alternates: {
    canonical: '/custom-pos-system',
  },
  openGraph: {
    title: 'Custom POS System | Posso UK',
    description:
      'Custom POS System with bespoke development for chains, franchise management, and multi-site analytics.',
    url: 'https://posso.co.uk/custom-pos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Custom POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Custom POS system with bespoke development for chains, franchise management, multi-site analytics, and tailored workflows for businesses with complex requirements.',
    url: 'https://posso.co.uk/custom-pos-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '168',
      bestRating: '5',
    },
    featureList: [
      'Bespoke POS development for chains',
      'Franchise management and control',
      'Multi-site analytics dashboard',
      'Custom integrations and APIs',
      'Role-based permissions and access',
      'Scalable architecture for growth',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Custom POS System', item: 'https://posso.co.uk/custom-pos-system' },
    ],
  },
];

const features = [
  { icon: Wrench, title: 'Bespoke POS Development', description: 'Your business has processes that no standard POS handles. We build custom screens, workflows, and logic that match how your team operates. A chain with a unique loyalty programme, a specialist pricing structure, or a complex fulfilment process gets software that works exactly as needed — no workarounds, no compromises.' },
  { icon: Building2, title: 'Franchise Management', description: 'Control what franchisees can and cannot change. Set the menu, pricing, and branding centrally while allowing local variations where appropriate. Franchisees operate their own till but report to your central dashboard. Royalty calculations, compliance checks, and brand standards are enforced by the system, not by manual audits.' },
  { icon: BarChart3, title: 'Multi-Site Analytics', description: 'A single dashboard shows performance across all locations. Compare revenue, transaction counts, average order values, and product mix between sites. Identify your best and worst performers. Drill down to individual site data or zoom out to group-level trends. Data refreshes in real time so decisions are based on what is happening now.' },
  { icon: Network, title: 'Custom Integrations', description: 'Connect the POS to your accounting, HR, supply chain, delivery, and loyalty systems. We build integrations that push and pull data automatically. A sale at the till updates your accounts, triggers a stock reorder, and awards loyalty points — all without manual intervention. If it has an API, we connect it.' },
  { icon: Shield, title: 'Role-Based Permissions', description: 'Every user sees only what they need. Cashiers access the till. Store managers see sales reports and manage staff. Area managers compare multiple sites. Head office configures menus, pricing, and promotions. Franchisees see their own data but not others. Granular permissions protect sensitive data and prevent unauthorised changes.' },
  { icon: Layers, title: 'Scalable Architecture', description: 'The system is built to grow. Start with 5 sites and expand to 50 without rebuilding. Add new product lines, new ordering channels, or new countries. The cloud infrastructure scales automatically. Performance does not degrade as you add locations, transactions, or users. Your POS grows with your business.' },
];

const benefits = [
  { title: 'Control Your Entire Network', description: 'Franchise management tools let you enforce brand standards, control pricing, and monitor compliance from head office. Franchisees get the tools they need to run their site, but within the boundaries you set. Royalty reporting, menu updates, and promotional campaigns are managed centrally and rolled out instantly.' },
  { title: 'Make Data-Driven Decisions', description: 'Multi-site analytics show you what is working and what is not across your entire network. Identify which products sell best at which locations. Spot underperforming sites early. Compare promotional campaigns across regions. Every decision is backed by real-time data, not quarterly reports that arrive too late.' },
  { title: 'Eliminate Manual Processes', description: 'Custom integrations automate the data flows between your POS and other systems. No spreadsheet exports, no manual reconciliation, no double entry. A sale triggers accounting entries, stock adjustments, and loyalty rewards automatically. Your team spends time on the business, not on admin.' },
  { title: 'Future-Proof Your Investment', description: 'Scalable architecture means your POS investment grows with you. Adding a new location is a configuration task, not a development project. New features are built on the same platform. The system that serves you today will serve you when you are twice the size.' },
];

export default function CustomPosSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Custom POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Wrench className="w-3 h-3 mr-2" />
                BUILT FOR CHAINS & FRANCHISES
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Custom POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Bespoke POS development for chains and franchises. Multi-site analytics, franchise control, custom integrations, and workflows built around how your business actually operates.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Franchise management with central control</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Multi-site analytics in real time</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Custom POS from £499 + VAT per terminal</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Custom POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every feature built to solve the specific challenges that chains, franchises, and multi-site businesses face.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Chains Choose a Custom POS</h2>
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
                From 5 Sites to 500 — Built to Scale
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A growing chain with 5 locations needs a POS that <strong className="text-white">works consistently across every site</strong> while giving head office full visibility. Menu changes push to all locations instantly. New promotions activate across the network with one click. Every site runs the same software, the same way.
                </p>
                <p>
                  At 20 or 50 locations, <strong className="text-white">franchise management</strong> becomes critical. Franchisees need autonomy to run their daily operations, but you need control over the brand, the menu, and the customer experience. The custom POS enforces your standards while giving franchisees the tools to succeed.
                </p>
                <p>
                  At scale, <strong className="text-white">data becomes your competitive advantage</strong>. Multi-site analytics reveal patterns that are invisible at the individual store level. Which products perform differently by region? Which promotions drive incremental sales? Which locations need support? The answers are in the dashboard, updated in real time.
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
                <Link href="/bespoke-epos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bespoke ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Custom-built software</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/self-service-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/order-counter-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Counter POS</p>
                  <p className="text-slate-400 text-sm mt-1">Speed ordering systems</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Custom POS System — Frequently Asked Questions" faqs={[
          { question: 'What makes a custom POS different from off-the-shelf?', answer: 'Off-the-shelf POS systems offer the same features to every business. A custom POS is built around your specific workflows, integrations, and requirements. If you have a unique pricing model, a specialist loyalty programme, or complex franchise rules, the custom system handles them natively instead of forcing workarounds.' },
          { question: 'How do you manage franchisee access?', answer: 'Each franchisee gets access to their own location data — sales, stock, staff, and reports. They cannot see other franchisees\' data. Head office controls what franchisees can change — for example, they might adjust staff schedules but not menu pricing. Permissions are granular and enforced by the system.' },
          { question: 'Can I see data across all locations in real time?', answer: 'Yes. The multi-site dashboard shows live data from every location. Revenue, transaction counts, average order value, product mix, and staff performance update in real time. Compare locations side by side. Drill down into any site for detailed analysis. The dashboard is accessible from any device with a browser.' },
          { question: 'What systems can you integrate with?', answer: 'If it has an API, we can integrate it. Common integrations include Xero, Sage, QuickBooks for accounting; Deliveroo, Uber Eats, Just Eat for delivery; and various CRM, HR, and supply chain systems. We also build custom APIs if your existing system does not have one. Data flows automatically between systems.' },
          { question: 'How long does a custom POS project take?', answer: 'A typical custom POS project takes 8 to 16 weeks from discovery to rollout. Simpler configurations on our existing platform can be delivered faster. Complex multi-site projects with extensive integrations may take longer. We provide a detailed timeline and fixed-price quote after the discovery session.' },
          { question: 'How much does a custom POS system cost?', answer: 'Custom POS starts from £499 + VAT per terminal for the base platform. Development costs depend on the scope of customisation, number of integrations, and number of locations. We provide a fixed-price quote after understanding your requirements. Finance options available. Installation and training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
