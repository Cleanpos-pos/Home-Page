import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Cpu, HardDrive, MonitorSmartphone, CircleDollarSign, Timer, Blocks } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Your Own POS System',
  description:
    'Build Your Own POS System — DIY approach pros and cons, hardware requirements, software options, and why a turnkey solution is faster and cheaper. POS from £499 + VAT.',
  keywords: [
    'build your own pos system',
    'diy pos system',
    'make your own pos',
    'custom pos system build',
    'build pos system from scratch',
    'pos system hardware components',
    'raspberry pi pos system',
    'diy point of sale',
    'build epos system',
    'create your own pos system',
  ],
  alternates: {
    canonical: '/build-your-own-pos-system',
  },
  openGraph: {
    title: 'Build Your Own POS System | Posso UK',
    description:
      'Build Your Own POS System — DIY approach pros and cons, hardware requirements, and why turnkey is faster and cheaper.',
    url: 'https://posso.co.uk/build-your-own-pos-system',
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
      'Turnkey POS system that eliminates the complexity of building your own. Pre-configured hardware, tested software, integrated payments, and UK-based support from £499 + VAT.',
    url: 'https://posso.co.uk/build-your-own-pos-system',
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
      reviewCount: '245',
      bestRating: '5',
    },
    featureList: [
      'Pre-tested compatible hardware',
      'Software pre-installed and configured',
      'Integrated payment processing',
      'Free installation and training',
      'UK-based telephone support',
      '2-year hardware warranty',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Build Your Own POS System', item: 'https://posso.co.uk/build-your-own-pos-system' },
    ],
  },
];

const features = [
  { icon: HardDrive, title: 'Hardware You Would Need', description: 'Building your own POS requires: a touchscreen display (£200–£500), a single-board computer or PC (£100–£400), a thermal receipt printer (£150–£250), a cash drawer (£50–£100), a card payment terminal (£50–£200), cables, mounts, and a keyboard for initial setup. Total component cost: £550–£1,450 — before any software.' },
  { icon: Cpu, title: 'Software Options', description: 'Software choices for a DIY POS include open source projects (Floreant, Unicenta), cloud-based free tiers (Square, SumUp), or building from scratch. Open source requires a developer. Free tiers have feature limitations. Building from scratch requires months of development and thousands in developer costs. None include support.' },
  { icon: MonitorSmartphone, title: 'The Raspberry Pi Approach', description: 'Raspberry Pi POS projects are popular online. A Pi costs £50, add a touchscreen for £60, and install open source POS software. Sounds great — until you need a receipt printer driver that does not exist, a card reader that will not pair, and discover the Pi cannot handle 50 orders per hour without overheating.' },
  { icon: Timer, title: 'Realistic Time Commitment', description: 'Building a functional POS from components takes 60–100+ hours for someone technically competent. Hardware assembly, software installation, driver configuration, menu setup, payment integration, printer testing, and staff training. For a restaurant owner already working 60-hour weeks, this is an unacceptable time cost.' },
  { icon: CircleDollarSign, title: 'The Real Cost Calculation', description: 'Components: £550–£1,450. Developer time (if hiring): £500–£3,000. Your own time at opportunity cost: 60–100 hours. Ongoing maintenance and troubleshooting: 2–5 hours per month. Total first-year cost: £1,500–£5,000+. A complete Posso system: from £499 + VAT with everything included and working on day one.' },
  { icon: Blocks, title: 'Why Turnkey Wins', description: 'A turnkey POS system like Posso eliminates every DIY headache. Hardware is tested and compatible. Software is pre-installed. Payments are integrated. Your menu is pre-configured. Installation takes under 2 hours. Support answers the phone when something goes wrong. You skip the project and go straight to trading.' },
];

const benefits = [
  { title: 'Skip Months of Building', description: 'A DIY POS project stretches across weeks or months of evenings and weekends. Component sourcing, compatibility testing, software configuration, and troubleshooting consume time that should be spent on your business. Posso delivers a working system in days, not months. You open the box and start selling.' },
  { title: 'Avoid Compatibility Nightmares', description: 'The most frustrating part of building your own POS is hardware compatibility. Your chosen receipt printer does not work with your chosen software. Your card reader drops its Bluetooth connection every 30 minutes. Your touchscreen driver conflicts with the POS application. Posso tests every component together before it ships.' },
  { title: 'Get Professional-Grade Reliability', description: 'DIY POS builds use consumer components not designed for commercial environments. A Raspberry Pi in a hot kitchen fails. A consumer tablet running for 14 hours straight overheats. Posso uses commercial-grade hardware rated for continuous use in demanding environments — restaurants, retail floors, and outdoor events.' },
  { title: 'Reclaim Your Weekends', description: 'Every hour spent building, configuring, and fixing a DIY POS is an hour not spent on revenue-generating activities. Menu development, marketing, staff training, customer relationships — these grow your business. Debugging a printer driver does not. Let Posso handle the technology while you handle the business.' },
];

export default function BuildYourOwnPosSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Build Your Own POS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Cpu className="w-3 h-3 mr-2" />
                DIY VS TURNKEY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Build Your Own POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Building a POS from scratch appeals to the tinkerer in all of us. But when you add up the hardware, software, time, and ongoing maintenance, a turnkey system is faster, cheaper, and more reliable.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Turnkey POS system from £499 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pre-tested hardware and software</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> 2-year warranty and UK support</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What Building Your Own POS Actually Involves</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                The hardware, software, time, and ongoing effort required to build a POS system from scratch.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Turnkey Beats DIY Every Time</h2>
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
                Who Should (and Should Not) Build Their Own POS
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Build your own if</strong> you are a developer who wants a personal project, you have no deadline for going live, you enjoy hardware tinkering, and you do not need telephone support when things break. Building a POS from a Raspberry Pi, touchscreen, and open source software is a genuinely interesting technical challenge.
                </p>
                <p>
                  <strong className="text-white">Do not build your own if</strong> you need a working POS for a real business with real customers. The time investment is enormous, the reliability is questionable, and the feature gap compared to commercial systems is significant. Kitchen displays, online ordering, inventory management, and multi-terminal sync require professional software.
                </p>
                <p>
                  <strong className="text-white">The smart middle ground</strong> is a turnkey system from Posso. From £499 + VAT, you get commercial hardware, professional software, integrated payments, free installation, staff training, and UK-based support. It costs less than most DIY builds and works better from day one.
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
                <Link href="/diy-pos-system-restaurants" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">DIY Restaurant POS</p>
                  <p className="text-slate-400 text-sm mt-1">Restaurant-specific guide</p>
                </Link>
                <Link href="/open-source-epos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Open Source ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Free vs commercial</p>
                </Link>
                <Link href="/buy-epos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Buy ePOS System UK</p>
                  <p className="text-slate-400 text-sm mt-1">Buyer&apos;s guide</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Build Your Own POS System — Frequently Asked Questions" faqs={[
          { question: 'Can I build a POS system with a Raspberry Pi?', answer: 'Technically yes, but practically it is problematic. Raspberry Pi units overheat under continuous use, receipt printer driver support is limited, card payment integration is difficult, and the performance degrades with more than 20–30 menu items. It works as a hobby project but is not reliable enough for a business handling real money.' },
          { question: 'What hardware do I need to build a POS system?', answer: 'At minimum: a touchscreen display (15–22 inch), a computer or single-board computer, a thermal receipt printer, a cash drawer, a card payment terminal, mounting hardware, and cables. Optionally: a barcode scanner, kitchen display screen, and customer-facing display. Component sourcing and compatibility testing adds significant time.' },
          { question: 'How much does a DIY POS system cost?', answer: 'Hardware components: £550–£1,450. Software (open source or subscriptions): £0–£30/month. Developer time if hiring: £500–£3,000. Your own time: 60–100+ hours. First-year total: £1,500–£5,000+. A complete Posso turnkey system starts from £499 + VAT including hardware, software, installation, and support.' },
          { question: 'What software do I need for a DIY POS?', answer: 'Options include open source POS software (Floreant, Unicenta, Odoo), cloud-based free tiers (Square POS, SumUp), or custom-built software. Open source requires Linux knowledge and developer skills. Free tiers have transaction fees and feature limits. Custom builds require professional development — the most expensive option.' },
          { question: 'Is a DIY POS system reliable?', answer: 'Reliability depends on your technical ability and component quality. Consumer hardware in a commercial environment fails more frequently than commercial-grade equipment. Without warranty coverage and professional support, every failure means lost trading time while you diagnose and fix the problem yourself.' },
          { question: 'How long does it take to build a POS from scratch?', answer: 'For a technically competent person: 60–100+ hours spread across several weeks. This includes hardware sourcing, assembly, software installation, driver configuration, menu setup, payment terminal integration, printer testing, and staff training. A Posso system installs in under 2 hours, fully pre-configured.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
