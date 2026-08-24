import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Globe, Monitor, BarChart3, RefreshCw, Building2, Shield } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS Portal',
  description:
    'ePOS Portal for cloud-based management of your point of sale — remote menu updates, multi-site dashboard, real-time analytics, and staff management from any browser. From £499 + VAT.',
  keywords: [
    'epos portal',
    'pos management portal',
    'cloud pos dashboard',
    'epos cloud management',
    'remote pos management',
    'multi-site pos dashboard',
    'pos analytics portal',
    'epos back office',
    'pos cloud portal uk',
    'epos portal login',
  ],
  alternates: {
    canonical: '/epos-portal',
  },
  openGraph: {
    title: 'ePOS Portal | Posso UK',
    description:
      'ePOS Portal — manage menus, view analytics, and control multi-site operations from any browser with the Posso cloud dashboard.',
    url: 'https://www.posso.co.uk/epos-portal',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS Portal',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Cloud-based ePOS management portal with remote menu editing, multi-site dashboard, real-time sales analytics, staff management, and inventory control accessible from any web browser.',
    url: 'https://www.posso.co.uk/epos-portal',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Remote menu updates pushed to all terminals',
      'Multi-site dashboard with group reporting',
      'Real-time sales and performance analytics',
      'Staff rota and permission management',
      'Inventory alerts and stock level monitoring',
      'Secure role-based access control',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'ePOS Portal', item: 'https://www.posso.co.uk/epos-portal' },
    ],
  },
];

const features = [
  { icon: RefreshCw, title: 'Remote Menu Updates', description: 'Edit your menu from any browser and push changes to every terminal instantly. Add a new dish, change a price, remove a sold-out item — the update appears on the POS in seconds. No need to be on site. Manage seasonal menus, daily specials, and price changes from your phone during your commute.' },
  { icon: Building2, title: 'Multi-Site Dashboard', description: 'See all your locations on a single screen. Compare sales between branches in real time. Identify which site is outperforming and which needs attention. Roll out menu changes across the entire group or customise per location. One login gives you complete oversight without visiting each site.' },
  { icon: BarChart3, title: 'Real-Time Analytics', description: 'Live sales data, hourly breakdowns, product mix reports, and staff performance metrics updated every minute. See today\'s revenue as it happens. Compare against yesterday, last week, or last year. Drill into product-level detail to find your best sellers and your dead stock. Export reports for your accountant in one click.' },
  { icon: Monitor, title: 'Staff Management', description: 'Create staff accounts with role-based permissions. Managers see full reports; cashiers see only the till. Track clock-in and clock-out times. View staff sales performance and identify your top performers. Manage rotas and set access schedules so temporary staff only have access during their shifts.' },
  { icon: Shield, title: 'Secure Access Control', description: 'Every action in the portal is logged with a timestamp and user ID. Void a transaction — it is recorded who did it and when. Change a price — the audit trail shows the before and after. Role-based permissions ensure staff see only what they need. Two-factor authentication protects your business data.' },
  { icon: Globe, title: 'Access From Anywhere', description: 'The ePOS portal runs in any modern web browser — Chrome, Safari, Edge, Firefox. No software to install, no VPN required. Check your sales from a beach in Spain or update the menu from your kitchen at home. The cloud infrastructure is hosted in UK data centres with 99.9% uptime guarantee.' },
];

const benefits = [
  { title: 'Manage Without Being On Site', description: 'Business owners spend too much time physically present in the venue. The ePOS portal gives you complete control from anywhere. Update menus, check sales, manage staff permissions, and monitor stock levels — all without leaving your home. Reduce your on-site hours while maintaining full oversight of operations.' },
  { title: 'Scale Across Multiple Locations', description: 'Opening a second site doubles the complexity of management. The multi-site dashboard keeps everything in one place. Standardise menus across locations or customise each branch. Compare performance side by side. One set of reports, one login, one source of truth for your entire business.' },
  { title: 'Make Faster Decisions with Live Data', description: 'Real-time analytics mean you react to what is happening now, not what happened last week. A product selling fast at lunchtime gets promoted. A slow day triggers an instant social media offer. Live data turns your POS into a business intelligence tool that pays for itself in better decisions.' },
  { title: 'Reduce Shrinkage and Errors', description: 'The audit trail tracks every void, refund, discount, and price change with the responsible user. Discrepancies are flagged automatically. Stock alerts warn when levels drop below reorder points. Transparency reduces theft, errors, and waste — the three biggest profit killers in hospitality.' },
];

export default function EposPortalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'ePOS Portal' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Globe className="w-3 h-3 mr-2" />
                CLOUD MANAGEMENT PORTAL
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Portal
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Manage your entire point of sale operation from any browser — remote menu updates, multi-site dashboards, real-time analytics, and staff controls in one cloud portal.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Update menus remotely from any device</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Multi-site oversight on a single dashboard</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> ePOS portal included from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">ePOS Portal Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Complete cloud management for your point of sale — accessible from any browser, anywhere.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Use the ePOS Portal</h2>
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
                Your Business in Your Pocket
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The ePOS portal is <strong className="text-white">your back office in the cloud</strong>. Every report, every menu change, every staff setting is available from your phone, tablet, or laptop. No more driving to the venue to check yesterday&apos;s takings or update a menu price.
                </p>
                <p>
                  For <strong className="text-white">multi-site operators</strong>, the portal consolidates all locations into a single view. Group-level sales reports, cross-site inventory tracking, and centralised menu management mean you run five sites as easily as one. Each branch can have its own variations, but the core is managed centrally.
                </p>
                <p>
                  Security is built into every layer. <strong className="text-white">Role-based access</strong> ensures your managers see what they need and nothing more. Every action is logged in an immutable audit trail. Data is encrypted in transit and at rest, hosted in UK data centres compliant with GDPR.
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
                <Link href="/epos-marketing" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Marketing</p>
                  <p className="text-slate-400 text-sm mt-1">Built-in marketing tools</p>
                </Link>
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Complete POS software</p>
                </Link>
                <Link href="/bespoke-epos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bespoke ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Custom-built POS</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="ePOS Portal — Frequently Asked Questions" faqs={[
          { question: 'What can I do from the ePOS portal?', answer: 'The portal gives you full control of your POS from any browser. Edit menus and push changes to terminals instantly. View real-time sales analytics and product mix reports. Manage staff accounts, permissions, and clock times. Monitor stock levels and set reorder alerts. Run promotions and loyalty programmes. Export financial reports for your accountant.' },
          { question: 'Can I manage multiple sites from one portal?', answer: 'Yes. The multi-site dashboard shows all locations on a single screen. Compare sales between branches, standardise or customise menus per site, and view group-level reporting. Changes can be pushed to all sites simultaneously or to individual locations. One login gives you complete control over your entire operation.' },
          { question: 'How do remote menu updates work?', answer: 'Log into the portal from any device, edit your menu — add items, change prices, update descriptions, reorder categories — and click publish. The changes push to every connected terminal within seconds. No need to update each till individually. You can schedule menu changes in advance, such as switching to a weekend menu every Friday at 5pm.' },
          { question: 'Is the portal secure?', answer: 'Yes. The portal uses bank-grade encryption for data in transit and at rest. Role-based access control ensures each user sees only what their role permits. Every action is logged with a timestamp and user ID in an immutable audit trail. Two-factor authentication is available. Data is hosted in UK data centres compliant with GDPR.' },
          { question: 'Do I need to install any software?', answer: 'No. The ePOS portal runs entirely in your web browser — Chrome, Safari, Edge, or Firefox. There is nothing to download or install. It works on desktop, tablet, and mobile. Just log in from any device with an internet connection and you have full access to your business data and controls.' },
          { question: 'How much does the ePOS portal cost?', answer: 'The ePOS portal is included with every Posso POS system from £499 + VAT. There is no additional subscription for portal access. Multi-site management, real-time analytics, remote menu editing, and staff management are all included. The portal is part of the core product, not an upsell.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
