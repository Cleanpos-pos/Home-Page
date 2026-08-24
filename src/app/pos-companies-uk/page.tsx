import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Search, Shield, PoundSterling, Headphones, Scale, Award } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS Companies UK',
  description:
    'POS Companies UK — compare the leading UK POS providers. What to look for, hidden costs to avoid, and why Posso offers the best value. POS from £499 + VAT.',
  keywords: [
    'pos companies uk',
    'epos companies uk',
    'best pos company uk',
    'pos providers uk',
    'uk pos suppliers',
    'pos system companies',
    'epos providers uk',
    'pos company comparison uk',
    'best epos company uk',
    'till system companies uk',
  ],
  alternates: {
    canonical: '/pos-companies-uk',
  },
  openGraph: {
    title: 'POS Companies UK | Posso UK',
    description:
      'POS Companies UK — compare the leading UK POS providers. What to look for, hidden costs to avoid, and why Posso offers the best value.',
    url: 'https://www.posso.co.uk/pos-companies-uk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'UK POS company providing complete point-of-sale systems for retail, hospitality, and food service businesses with transparent pricing, free installation, and UK-based support.',
    url: 'https://www.posso.co.uk/pos-companies-uk',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Transparent pricing with no hidden fees',
      'Free installation and staff training',
      'UK-based telephone and remote support',
      'Hardware and software warranty included',
      'No long-term lock-in contracts',
      'Cloud dashboard with real-time reporting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'POS Companies UK', item: 'https://www.posso.co.uk/pos-companies-uk' },
    ],
  },
];

const features = [
  { icon: PoundSterling, title: 'Transparent Pricing', description: 'Many POS companies advertise low monthly fees then add charges for payment processing, support, updates, and additional terminals. Posso quotes a single upfront price from £499 + VAT that includes hardware, software, installation, and training. No hidden fees, no surprise invoices after three months.' },
  { icon: Headphones, title: 'UK-Based Support', description: 'When your POS goes down on a Saturday night, you need to speak to someone who can help immediately. Posso provides UK-based telephone and remote support. No overseas call centres, no chatbot-only support, no "we will get back to you in 48 hours". Real people solving real problems in real time.' },
  { icon: Shield, title: 'No Lock-In Contracts', description: 'Some POS companies tie you into 3–5 year contracts with early termination fees. Posso does not. You own your hardware outright, your data is exportable, and you are free to leave at any time. We keep your business by providing a good product and good service — not by trapping you.' },
  { icon: Scale, title: 'Hardware You Own', description: 'Leased hardware means you never own the equipment and face penalties for damage or early return. Posso sells hardware outright. After purchase, it is yours. No monthly rental fees accumulating over years, no return obligations, no arguments about wear and tear at the end of a lease.' },
  { icon: Search, title: 'Industry-Specific Solutions', description: 'Generic POS companies sell one system to every business. Posso builds industry-specific configurations for restaurants, takeaways, retail shops, coffee shops, bars, and more. Your POS arrives pre-configured for your sector with the features, menu layout, and workflows your business actually needs.' },
  { icon: Award, title: 'Free Installation & Training', description: 'Many POS companies charge £200–£500 for installation and training on top of the system price. Posso includes free on-site or remote installation, full menu and product setup, and staff training. Your system arrives ready to use on day one. No extra invoices after delivery.' },
];

const benefits = [
  { title: 'Avoid the Hidden Cost Trap', description: 'The biggest complaint about POS companies is hidden costs. A system advertised at £29/month becomes £150/month once you add payment processing, support, extra terminals, and software updates. Posso quotes a transparent price upfront. What you are quoted is what you pay. No monthly surprises.' },
  { title: 'Get a System Built for Your Industry', description: 'A restaurant needs table management, kitchen displays, and modifier menus. A retail shop needs barcode scanning, stock management, and purchase orders. Posso delivers industry-specific solutions — not a generic system that you have to configure yourself over weeks of trial and error.' },
  { title: 'Keep Control of Your Business Data', description: 'Some POS companies restrict data access or charge for data exports. With Posso, your data belongs to you. Export sales reports, customer lists, and product catalogues at any time. If you ever decide to switch providers, your data leaves with you — no ransom fees, no restrictions.' },
  { title: 'Support When It Matters', description: 'POS problems do not happen during business hours. They happen at 7pm on a Friday when you have a full restaurant. Posso provides UK-based support from real engineers who understand your system. Phone, remote access, and on-site support options ensure you are never left stuck.' },
];

export default function PosCompaniesUkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'POS Companies UK' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Search className="w-3 h-3 mr-2" />
                UK POS PROVIDER GUIDE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS Companies{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  UK
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Choosing a POS company is one of the most important decisions for your business. Here is what to look for, what to avoid, and why thousands of UK businesses choose Posso.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete POS systems from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> No hidden fees or lock-in contracts</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> UK-based support and free installation</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What to Look for in a UK POS Company</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Six criteria that separate a trustworthy POS provider from one that will cost you more than you expected.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why UK Businesses Choose Posso</h2>
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
                How to Compare POS Companies in the UK
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Start with <strong className="text-white">total cost of ownership</strong>. A system that costs £29/month sounds cheap until you add payment processing fees (1.5–2.5%), support charges (£30–£50/month), additional terminal licences (£20–£40 each), and software update fees. Calculate the 3-year total before signing anything.
                </p>
                <p>
                  Ask about <strong className="text-white">contract length and exit terms</strong>. If a POS company requires a 3-year minimum contract with early termination fees, they are betting you will not be happy enough to stay voluntarily. Posso offers flexible terms because we are confident the product speaks for itself.
                </p>
                <p>
                  Test the <strong className="text-white">support response time</strong>. Call the support line before you buy. If you cannot get through quickly as a prospective customer, imagine how long you will wait as an existing one. Posso provides UK-based telephone support with average response times measured in minutes, not hours.
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
                <Link href="/buy-epos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Buy ePOS System UK</p>
                  <p className="text-slate-400 text-sm mt-1">Buyer&apos;s guide</p>
                </Link>
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Software features</p>
                </Link>
                <Link href="/custom-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Custom POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Tailored solutions</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS Companies UK — Frequently Asked Questions" faqs={[
          { question: 'What should I look for in a POS company?', answer: 'Look for transparent pricing with no hidden fees, UK-based support with fast response times, no long-term lock-in contracts, hardware that you own outright, industry-specific solutions for your business type, and free installation and training included in the price. Avoid companies that lease hardware or require multi-year contracts.' },
          { question: 'How much do POS systems cost in the UK?', answer: 'POS systems in the UK range from £300 to £3,000+ depending on the provider and features. Posso complete POS systems start from £499 + VAT including hardware, software, installation, and training. Self-service kiosks start from £699 + VAT. Finance options available from £24.92 per week.' },
          { question: 'Should I buy or lease a POS system?', answer: 'Buying is almost always better value. A leased POS at £50/month over 3 years costs £1,800 — and you own nothing at the end. A purchased Posso system from £499 + VAT is yours to keep. No monthly rental, no return obligations, no penalties for wear and tear.' },
          { question: 'What is the difference between POS and ePOS?', answer: 'POS (point of sale) is the general term. ePOS (electronic point of sale) specifically refers to digital, software-based systems as opposed to traditional cash registers. In practice, almost all modern POS systems are ePOS systems. The terms are used interchangeably in the UK market.' },
          { question: 'Can I switch POS companies easily?', answer: 'It depends on your current provider. Some lock you into contracts and make data export difficult. Posso makes switching straightforward — we handle data migration, menu setup, hardware installation, and staff training. Most businesses are fully switched over and operational within one week.' },
          { question: 'Do POS companies charge for updates?', answer: 'Some do. Software update fees of £20–£50/month are common among UK POS companies. Posso includes all software updates at no additional charge. New features, security patches, and improvements are deployed automatically. You always run the latest version without paying extra.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
