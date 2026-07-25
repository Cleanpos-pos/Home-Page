import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Code, AlertTriangle, Clock, Headphones, PoundSterling, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Source ePOS Software',
  description:
    'Open Source ePOS Software — honest comparison of open source vs commercial POS. Hidden costs, support gaps, and security risks explained. Posso POS from £499 + VAT.',
  keywords: [
    'open source epos software',
    'open source pos system',
    'free pos software',
    'open source till software',
    'free epos system',
    'open source point of sale',
    'pos software free download',
    'open source pos uk',
    'free till software',
    'open source epos system',
  ],
  alternates: {
    canonical: '/open-source-epos-software',
  },
  openGraph: {
    title: 'Open Source ePOS Software | Posso UK',
    description:
      'Open Source ePOS Software — honest comparison of open source vs commercial POS. Hidden costs, support gaps, and why Posso offers better value.',
    url: 'https://www.posso.co.uk/open-source-epos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Commercial ePOS software that eliminates the hidden costs and support gaps of open source POS. Includes hardware, installation, training, and UK-based support from £499 + VAT.',
    url: 'https://www.posso.co.uk/open-source-epos-software',
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
      reviewCount: '298',
      bestRating: '5',
    },
    featureList: [
      'No technical expertise required',
      'UK-based telephone support included',
      'Automatic security updates',
      'Hardware and software warranty',
      'Free installation and training',
      'PCI-compliant payment processing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Open Source ePOS Software', item: 'https://www.posso.co.uk/open-source-epos-software' },
    ],
  },
];

const features = [
  { icon: AlertTriangle, title: 'The Hidden Cost of "Free"', description: 'Open source POS software is free to download but expensive to operate. You need a server to host it, a developer to install and configure it, ongoing maintenance to apply updates, and technical expertise to troubleshoot problems. Most businesses that try open source POS spend more in the first year than a commercial system costs.' },
  { icon: Headphones, title: 'No Support When It Breaks', description: 'Open source projects have community forums, not support teams. When your POS crashes on a Saturday night, a forum post does not fix it. You wait for volunteers to respond — maybe in hours, maybe in days. Posso provides UK-based telephone support from engineers who know your system and can fix problems immediately.' },
  { icon: ShieldCheck, title: 'Security Update Gaps', description: 'Open source POS software relies on volunteer developers to find and patch security vulnerabilities. Patches are irregular and require manual installation. If you miss an update, your system is exposed. Posso applies security patches automatically. Your system is always running the latest, most secure version without any action from you.' },
  { icon: Clock, title: 'Setup Takes Weeks, Not Hours', description: 'Installing open source POS means downloading source code, setting up a database, configuring networking, installing drivers for your printer and cash drawer, and testing every feature manually. A Posso system arrives pre-configured. Plug it in, connect to Wi-Fi, and you are taking orders in under two hours.' },
  { icon: PoundSterling, title: 'True Cost Comparison', description: 'Open source POS: server hosting £20–£50/month, developer setup £500–£2,000, ongoing maintenance £50–£100/month, zero support guarantee. Year-one cost: £1,500–£4,000+. Posso: complete system from £499 + VAT including hardware, software, installation, training, and support. The "free" option costs more.' },
  { icon: Code, title: 'No Developer? No POS.', description: 'Open source POS requires a developer to install, configure, customise, and maintain. If your developer leaves, gets busy, or raises their rates, you are stuck with a system nobody can fix. Posso is fully managed — updates, maintenance, and support are handled by the Posso team. You run your business; we run the technology.' },
];

const benefits = [
  { title: 'Spend Less Than Open Source', description: 'When you add up hosting, developer time, maintenance, and lost revenue from downtime, open source POS typically costs £1,500–£4,000 in the first year. A complete Posso system — hardware, software, installation, training, and support — starts from £499 + VAT. Better value, less risk, no technical skills needed.' },
  { title: 'Get Support When You Need It', description: 'The biggest problem with open source POS is what happens when something goes wrong. Community forums are not support teams. Posso provides UK-based telephone and remote support from engineers who understand your system. Call, explain the problem, get it fixed. That is the support model a business needs.' },
  { title: 'Stay Secure Without Effort', description: 'POS systems handle payment card data. Security is not optional. Open source POS puts the burden of security updates on you. Miss one patch and customer card data could be at risk. Posso handles all security updates automatically. Your system is PCI-compliant and always running the latest security patches.' },
  { title: 'Focus on Running Your Business', description: 'Open source POS turns you into an unpaid IT administrator. Every update, every bug, every hardware compatibility issue falls on your desk. Posso is a fully managed system. You focus on serving customers, growing revenue, and managing your team. The technology runs itself.' },
];

export default function OpenSourceEposSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Open Source ePOS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Code className="w-3 h-3 mr-2" />
                OPEN SOURCE VS COMMERCIAL
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Open Source ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Open source POS is free to download but expensive to run. No support, no security guarantees, and a developer bill that exceeds the cost of a commercial system. Here is the honest comparison.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete POS system from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> UK-based support included</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> No developer or technical skills needed</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">The Reality of Open Source POS</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Six things you discover after you download open source ePOS software and try to run a business on it.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Commercial POS Is Better Value</h2>
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
                Open Source POS: Who It Works For (And Who It Does Not)
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Open source POS works for <strong className="text-white">developers who want a hobby project</strong>. If you enjoy configuring Linux servers, writing database queries, and debugging printer drivers on a Saturday afternoon, open source POS gives you full control. It is a legitimate technical project for someone with the skills and time.
                </p>
                <p>
                  It does not work for <strong className="text-white">business owners who need reliability</strong>. When your restaurant is full on a Friday night and the POS freezes, you need a phone number to call — not a GitHub issue tracker. When a security vulnerability is discovered, you need an automatic patch — not a volunteer developer who may or may not fix it this month.
                </p>
                <p>
                  The Posso approach is <strong className="text-white">commercial software at a fair price</strong>. From £499 + VAT, you get a complete system that is installed, configured, and supported. No developer fees. No hosting costs. No security risks. No weekends spent debugging. Just a POS system that works, backed by a team that answers the phone.
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
                  <p className="text-slate-400 text-sm mt-1">Full software features</p>
                </Link>
                <Link href="/buy-epos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Buy ePOS System UK</p>
                  <p className="text-slate-400 text-sm mt-1">Buyer&apos;s guide</p>
                </Link>
                <Link href="/diy-pos-system-restaurants" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">DIY POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Build vs buy comparison</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Open Source ePOS Software — Frequently Asked Questions" faqs={[
          { question: 'Is open source POS really free?', answer: 'The software download is free. But you need a server (£20–£50/month), a developer to install and configure it (£500–£2,000), ongoing maintenance (£50–£100/month), and your own time to manage updates and troubleshoot issues. Most businesses spend £1,500–£4,000 in the first year. A complete Posso system costs from £499 + VAT.' },
          { question: 'What open source POS options are available?', answer: 'Popular open source POS projects include Floreant, Unicenta, and Odoo POS. Each has different features, installation requirements, and community activity levels. The challenge with all of them is the same: no guaranteed support, no automatic updates, and a significant technical skill requirement to install and maintain.' },
          { question: 'Can I get support for open source POS?', answer: 'Some open source POS projects have community forums where volunteers answer questions. Response times range from hours to weeks. Paid support options exist for some projects but typically cost £50–£150/month — which eliminates the cost advantage over commercial systems. Posso includes UK-based telephone support in the system price.' },
          { question: 'Is open source POS secure for payment processing?', answer: 'Security depends entirely on how well you maintain the system. Open source POS requires you to apply security patches manually, configure encryption correctly, and ensure PCI compliance yourself. Miss one update and customer payment data could be exposed. Posso handles all security updates automatically and is PCI-compliant by default.' },
          { question: 'How long does it take to set up open source POS?', answer: 'Expect 1–4 weeks for a technically competent person to download, install, configure, test, and customise an open source POS system. Hardware compatibility issues with printers, cash drawers, and payment terminals often cause delays. A Posso system is pre-configured and installs in under two hours.' },
          { question: 'Should I use open source POS for my restaurant?', answer: 'For most restaurants, no. Restaurants need reliable, fast systems with immediate support when problems occur. Open source POS introduces unnecessary risk — downtime costs revenue, security gaps risk customer data, and troubleshooting takes time away from running the business. Posso provides a proven, supported system from £499 + VAT.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
