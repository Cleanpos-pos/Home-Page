import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Code, Plug, Palette, Settings, Shield, Workflow } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bespoke ePOS Software',
  description:
    'Bespoke ePOS Software custom-built for businesses with unique requirements. API integration, white-label options, and tailored workflows. From £499 + VAT.',
  keywords: [
    'bespoke epos software',
    'custom epos system',
    'bespoke pos software',
    'custom pos development',
    'tailored epos solution',
    'bespoke till software',
    'custom epos development uk',
    'white label pos software',
    'bespoke pos system uk',
    'custom epos software uk',
  ],
  alternates: {
    canonical: '/bespoke-epos-software',
  },
  openGraph: {
    title: 'Bespoke ePOS Software | Posso UK',
    description:
      'Bespoke ePOS Software custom-built for businesses with unique requirements. API integration and white-label options.',
    url: 'https://www.posso.co.uk/bespoke-epos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Bespoke ePOS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Bespoke ePOS software custom-built for businesses with unique requirements, featuring API integration, white-label branding, and tailored workflows.',
    url: 'https://www.posso.co.uk/bespoke-epos-software',
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
      reviewCount: '156',
      bestRating: '5',
    },
    featureList: [
      'Custom-built workflows and screens',
      'Full API integration with existing systems',
      'White-label branding and theming',
      'Bespoke reporting and analytics',
      'Role-based access and permissions',
      'Dedicated development and support team',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Bespoke ePOS Software', item: 'https://www.posso.co.uk/bespoke-epos-software' },
    ],
  },
];

const features = [
  { icon: Code, title: 'Custom-Built Workflows', description: 'Your business does not fit a template — your ePOS should not either. We build screens, flows, and logic that match how your team actually works. Whether you need a unique intake process, a multi-stage approval system, or a specialist pricing model, the software is built around your operations, not the other way around.' },
  { icon: Plug, title: 'API Integration', description: 'Connect the ePOS to your existing systems. Accounting software, CRM, warehouse management, delivery platforms, loyalty providers — if it has an API, we integrate it. Data flows automatically between systems. No manual exports, no copy-pasting between platforms. Your ePOS becomes the hub that ties everything together.' },
  { icon: Palette, title: 'White-Label Branding', description: 'The software carries your brand, not ours. Your logo, your colours, your name on every screen, receipt, and customer-facing display. Ideal for franchise groups, resellers, or businesses that want a branded experience. Customers see your business at every touchpoint — from the POS screen to the digital receipt.' },
  { icon: Settings, title: 'Bespoke Reporting', description: 'Standard reports do not always answer the questions that matter to your business. We build custom dashboards and reports that show the metrics you care about. Track KPIs specific to your industry, compare performance across custom dimensions, and export data in the format your finance team needs.' },
  { icon: Shield, title: 'Role-Based Access', description: 'Control who sees what and who can do what. Cashiers see the till screen. Managers access reports and voids. Area managers see multi-site data. Administrators configure the system. Every role has tailored permissions. Sensitive data stays protected and staff only see what they need to do their job.' },
  { icon: Workflow, title: 'Dedicated Development Team', description: 'You get a named project manager and development team throughout the build. We scope the requirements, build iteratively, and test with your team before launch. After go-live, the same team handles support and enhancements. You are not handed off to a generic helpdesk — the people who built it maintain it.' },
];

const benefits = [
  { title: 'Software That Fits Your Business', description: 'Off-the-shelf POS forces you to adapt your processes to the software. Bespoke ePOS does the opposite — the software adapts to you. Your team works the way they always have, but with digital precision, speed, and reporting. No workarounds, no compromises, no features you do not need cluttering the screen.' },
  { title: 'Integrate Everything in One Place', description: 'API integration means your ePOS talks to your accounting, CRM, delivery, and warehouse systems automatically. A sale at the till updates your accounts, adjusts stock, and triggers fulfilment. One transaction, multiple systems updated. Eliminate double entry and the errors that come with it.' },
  { title: 'Scale Without Rebuilding', description: 'Bespoke software is built to grow with you. Add new locations, new product lines, or new channels without starting from scratch. The architecture is designed for expansion. A system built for 5 sites today can scale to 50 sites tomorrow without a rewrite.' },
  { title: 'Own Your Brand Experience', description: 'White-label branding means every customer interaction reinforces your brand. The POS screen, self-service kiosk, customer app, and digital receipts all carry your identity. For franchises and multi-brand groups, each brand can have its own look while sharing the same backend infrastructure.' },
];

export default function BespokeEposSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Bespoke ePOS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Code className="w-3 h-3 mr-2" />
                CUSTOM-BUILT FOR YOUR BUSINESS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Bespoke ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Custom-built ePOS software for businesses with unique requirements. API integration, white-label branding, and workflows tailored to how your team actually works.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Built around your workflows, not templates</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full API integration with your existing systems</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Bespoke ePOS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Bespoke ePOS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every feature is designed, built, and tested specifically for your business requirements.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Bespoke ePOS</h2>
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
                How the Bespoke Build Process Works
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  We start with a <strong className="text-white">detailed discovery session</strong> to understand your business, workflows, and pain points. No sales pitch — just questions about how your team works today and what would make them faster, more accurate, and less frustrated.
                </p>
                <p>
                  From discovery, we produce a <strong className="text-white">specification document</strong> that maps every screen, feature, and integration. You review it, suggest changes, and sign off before any development begins. There are no surprises during the build because every detail is agreed upfront.
                </p>
                <p>
                  Development is iterative. We build in sprints, demo progress regularly, and incorporate your feedback. When the system is ready, we <strong className="text-white">install, configure, and train your team on-site</strong>. The same team that built the software provides ongoing support and enhancements.
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
                <Link href="/custom-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Custom POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Bespoke POS for chains</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/self-service-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/pdq-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Payment processing</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Bespoke ePOS Software — Frequently Asked Questions" faqs={[
          { question: 'How long does a bespoke ePOS build take?', answer: 'A typical bespoke ePOS project takes 6 to 12 weeks from discovery to go-live. Simple customisations on our existing platform can be delivered in 2 to 4 weeks. Complex multi-site projects with extensive integrations may take longer. We provide a detailed timeline during the scoping phase so you know exactly what to expect.' },
          { question: 'Can you integrate with my existing software?', answer: 'Yes. If your existing systems have an API — accounting software, CRM, warehouse management, delivery platforms, loyalty providers — we integrate them. Data flows automatically between the ePOS and your other systems. We have experience integrating with Xero, Sage, QuickBooks, Salesforce, and hundreds of other platforms.' },
          { question: 'What does white-label branding include?', answer: 'White-label branding covers the POS screen, customer-facing displays, self-service kiosks, digital receipts, and any customer-facing app. Your logo, colours, and brand name appear on everything. We remove all Posso branding. Ideal for franchises, resellers, and businesses that want a fully branded experience.' },
          { question: 'Do I own the software?', answer: 'You own the bespoke elements built specifically for your business. The underlying platform is licensed. This means you get a system that is maintained, updated, and supported without needing your own development team. If your requirements change, we build new features on the same foundation.' },
          { question: 'Can it scale to multiple locations?', answer: 'Yes. The architecture is built for multi-site operation from the start. Add new locations without rebuilding. Each site operates independently at the till, but data rolls up to a central dashboard. Stock, pricing, staff, and reporting are managed centrally or per-location as you prefer.' },
          { question: 'How much does bespoke ePOS software cost?', answer: 'Bespoke ePOS projects start from £499 + VAT per terminal for the base platform, with development costs quoted based on your specific requirements. We provide a detailed fixed-price quote after the discovery session. Finance options are available. Free on-site installation and training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
