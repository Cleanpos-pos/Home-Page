import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, CreditCard, BarChart3, Phone, ArrowRight, Shield, MapPin, Building2, Globe } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant ePOS Systems UK | British Support, GBP Pricing & VAT',
  description:
    'UK restaurant ePOS systems by Posso. British-based support, GBP pricing, VAT reporting, HMRC compliance, and delivery zones covering London, Manchester, Birmingham, Leeds, and more. From £499 + VAT.',
  keywords: [
    'restaurant epos systems uk',
    'restaurant pos system uk',
    'epos systems for restaurants uk',
    'best restaurant epos uk',
    'uk restaurant pos',
    'restaurant till system uk',
    'epos for restaurants uk',
    'restaurant point of sale uk',
    'british restaurant epos',
    'restaurant epos london',
  ],
  alternates: {
    canonical: '/restaurant-epos-systems-uk',
  },
  openGraph: {
    title: 'Restaurant ePOS Systems UK | Posso',
    description:
      'UK-based restaurant ePOS with British support, GBP pricing, VAT reporting, and HMRC compliance. Serving restaurants across England, Scotland, and Wales.',
    url: 'https://www.posso.co.uk/restaurant-epos-systems-uk',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Restaurant ePOS Systems UK',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'UK restaurant ePOS system with British-based support, GBP pricing, VAT reporting, HMRC compliance, and nationwide coverage across England, Scotland, and Wales.',
    url: 'https://www.posso.co.uk/restaurant-epos-systems-uk',
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
      'UK-based telephone and email support',
      'GBP pricing with no hidden fees',
      'Automatic VAT calculation and reporting',
      'HMRC-compliant sales reporting',
      'Nationwide delivery and installation',
      'UK delivery zone management by postcode',
      'Integration with UK payment processors',
      'Works with UK aggregators (Just Eat, Deliveroo, Uber Eats)',
      'Allergen compliance for UK regulations',
      'Works offline',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Restaurant ePOS Systems UK', item: 'https://www.posso.co.uk/restaurant-epos-systems-uk' },
    ],
  },
];

const ukFeatures = [
  { icon: Phone, title: 'UK-Based Support', description: 'Call our British support team on 0808 175 3956. No overseas call centres, no language barriers. Real people who understand UK hospitality.' },
  { icon: CreditCard, title: 'GBP Pricing, No Hidden Fees', description: 'POS from £499 + VAT. Kiosks from £699 + VAT. Prices in pounds sterling with no monthly software fees, no per-transaction charges from Posso.' },
  { icon: BarChart3, title: 'VAT Reporting Built In', description: 'Automatic VAT calculation on every transaction. Generate VAT-ready reports for your accountant. Handles different VAT rates for eat-in vs takeaway food.' },
  { icon: Shield, title: 'HMRC Compliance', description: 'Sales reports, X and Z reads, cash management, and digital record-keeping that satisfy HMRC requirements. Your accountant will thank you.' },
  { icon: MapPin, title: 'UK Delivery Zones', description: 'Set delivery areas by UK postcode. Custom minimum order values and delivery charges per zone. Automatic postcode validation for every delivery order.' },
  { icon: Globe, title: 'UK Aggregator Integration', description: 'Direct integration with Just Eat, Uber Eats, and Deliveroo — the three aggregators that dominate the UK market. All orders on one screen.' },
];

const ukCities = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool',
  'Bristol', 'Sheffield', 'Edinburgh', 'Leicester', 'Nottingham', 'Newcastle',
  'Cardiff', 'Belfast', 'Brighton', 'Southampton', 'Oxford', 'Cambridge',
  'York', 'Bath', 'Reading', 'Coventry', 'Aberdeen', 'Swansea',
];

export default function RestaurantEposUkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Restaurant ePOS Systems UK' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                  <Building2 className="w-3 h-3 mr-2" />
                  UK RESTAURANT ePOS
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Restaurant ePOS{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Systems UK
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  A restaurant ePOS built for the UK market. British-based support you can actually call, GBP pricing with no surprises, VAT reporting that satisfies your accountant, and HMRC-compliant record-keeping. Serving restaurants from London to Glasgow.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> UK telephone support: 0808 175 3956</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Automatic VAT calculation & reporting</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full POS from £499 + VAT</li>
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
              <div className="relative">
                <img
                  src="/images/posso_epos_integration.png"
                  alt="Posso restaurant ePOS system for UK restaurants with VAT reporting, GBP pricing, and British support"
                  width={1200}
                  height={630}
                  loading="eager"
                  className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* UK-Specific Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Built for UK Restaurants, Not Adapted from an American System
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Many ePOS systems sold in the UK are American products with a currency swap. Posso is designed from the ground up for UK hospitality — VAT rules, postcode delivery zones, and all.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {ukFeatures.map((f) => (
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

        {/* Cities We Serve */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Serving Restaurants Across the UK
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                We deliver, install, and support restaurant ePOS systems nationwide. Whether you are in central London or a market town in the Highlands, we have you covered.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {ukCities.map((city) => (
                <span key={city} className="glass-card rounded-full px-4 py-2 border border-slate-700/50 text-slate-300 text-sm">
                  {city}
                </span>
              ))}
              <span className="glass-card rounded-full px-4 py-2 border border-primary/50 text-primary text-sm font-medium">
                + hundreds more
              </span>
            </div>
          </div>
        </section>

        {/* Why UK Restaurants Choose Posso */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why UK Restaurants Trust Posso
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Running a restaurant in the UK means dealing with VAT on food and drink, allergen regulations under Natasha&apos;s Law, postcode-based delivery zones, and customers who expect to pay with contactless. Your ePOS should handle all of this without you thinking about it.
                  </p>
                  <p>
                    <strong className="text-white">Posso is a UK company.</strong> Our support team is based in Britain. We price in pounds. Our VAT engine handles the difference between eat-in (20%) and cold takeaway food (0%). And when you need help at 6pm on a Saturday, you can call a real person who speaks your language.
                  </p>
                  <p>
                    That is the difference between an ePOS built for the UK and one that was just translated into English.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'UK support availability', value: '7 days a week' },
                  { label: 'VAT rates handled', value: 'Automatic (0%, 5%, 20%)' },
                  { label: 'Delivery coverage', value: 'All UK postcodes' },
                  { label: 'Setup and training', value: 'Included free' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-5 border border-slate-700/50">
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Posso Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/restaurant-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Table management & dine-in</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own ordering website</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
                <Link href="/best-restaurant-epos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Compare Restaurant EPOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">2026 buyer&apos;s guide</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="UK Restaurant ePOS — Frequently Asked Questions" faqs={[
          { question: 'Is Posso a UK-based ePOS company?', answer: 'Yes. Posso is a UK company with British-based support. Our team is available 7 days a week on 0808 175 3956. We deliver, install, and support ePOS systems to restaurants across England, Scotland, Wales, and Northern Ireland.' },
          { question: 'Does the restaurant ePOS handle UK VAT correctly?', answer: 'Yes. Posso automatically applies the correct VAT rate for eat-in food and drink (20%), cold takeaway food (0%), and hot takeaway food (20%). VAT reports are generated automatically for your accountant.' },
          { question: 'Is the ePOS system HMRC compliant?', answer: 'Yes. Posso provides digital sales records, X and Z reads, cash management reports, and itemised transaction logs that satisfy HMRC requirements for restaurant businesses.' },
          { question: 'Do you deliver ePOS systems anywhere in the UK?', answer: 'Yes. We deliver and support ePOS systems nationwide — from central London to rural Scotland. Hardware is shipped with next-day delivery available, and remote setup support is included free.' },
          { question: 'Can I manage UK postcode delivery zones?', answer: 'Yes. Set delivery zones by postcode prefix (e.g. M1, M2, M3 for Manchester). Each zone can have its own minimum order value and delivery charge. The system validates postcodes automatically.' },
          { question: 'How much does a UK restaurant ePOS system cost?', answer: 'Posso restaurant ePOS starts from £499 + VAT for a complete terminal. Self-order kiosks from £699 + VAT. All prices are in GBP with no hidden monthly software fees. Finance options are available from £24.92/week.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
