import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Phone, ArrowRight, Star, X, Monitor, Globe, Smartphone, CreditCard, Truck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '⭐ Top 5 POS Systems for Restaurants UK (2026 Comparison)',
  description:
    'Compare the top 5 POS systems for UK restaurants in 2026: Posso, Square, Lightspeed, Zettle, and TouchBistro. Features, pricing, and which is best for your restaurant.',
  keywords: [
    'top POS systems for restaurants',
    'best POS system restaurant UK',
    'top 5 POS systems',
    'restaurant POS comparison',
    'best restaurant POS UK 2026',
    'POS system reviews UK',
    'Square vs Lightspeed restaurant',
    'best EPOS for restaurant',
  ],
  alternates: { canonical: '/top-5-pos-systems-for-restaurants' },
  openGraph: {
    title: 'Top 5 POS Systems for Restaurants UK (2026 Comparison)',
    description: 'Side-by-side comparison of the 5 best restaurant POS systems in the UK. Features, pricing, pros, and cons.',
    url: 'https://www.posso.co.uk/top-5-pos-systems-for-restaurants',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 5 POS Systems for Restaurants UK (2026 Comparison)',
    description: 'Independent comparison of the best restaurant POS systems available in the UK, including pricing, features, and ideal use cases.',
    author: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
    publisher: { '@type': 'Organization', name: 'Posso Ltd', logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' } },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    url: 'https://www.posso.co.uk/top-5-pos-systems-for-restaurants',
    image: 'https://www.posso.co.uk/images/posso_epos_integration.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 5 POS Systems for Restaurants UK 2026',
    description: 'Ranked comparison of the best restaurant POS systems in the UK.',
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Posso One', url: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 2, name: 'Square for Restaurants' },
      { '@type': 'ListItem', position: 3, name: 'Lightspeed Restaurant' },
      { '@type': 'ListItem', position: 4, name: 'Zettle by PayPal' },
      { '@type': 'ListItem', position: 5, name: 'TouchBistro' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Top 5 POS Systems', item: 'https://www.posso.co.uk/top-5-pos-systems-for-restaurants' },
    ],
  },
];

type PosSystem = {
  rank: number;
  name: string;
  bestFor: string;
  priceFrom: string;
  monthlyFee: string;
  pros: string[];
  cons: string[];
  verdict: string;
  highlight?: boolean;
};

const posSystems: PosSystem[] = [
  {
    rank: 1,
    name: 'Posso One',
    bestFor: 'Restaurants, takeaways, and multi-site operations',
    priceFrom: '£499 + VAT',
    monthlyFee: 'Included with hardware',
    pros: [
      'Built-in pizza builder, KDS, kiosk mode, and online ordering',
      'Works offline — take orders without internet',
      'Just Eat, Uber Eats, and Deliveroo integration',
      'Caller ID for phone orders with customer history',
      '5 languages, delivery zone management, driver app',
      'Free setup, training, and UK-based support',
    ],
    cons: [
      'Smaller brand compared to Square or Lightspeed',
      'Currently UK-only',
    ],
    verdict: 'The most feature-rich option for UK restaurants and takeaways. Ideal if you need kiosks, online ordering, delivery integration, and a pizza builder — all in one system with transparent UK pricing.',
    highlight: true,
  },
  {
    rank: 2,
    name: 'Square for Restaurants',
    bestFor: 'Small cafes and single-location restaurants',
    priceFrom: '£0 (iPad required)',
    monthlyFee: 'Free plan / £69/mo Plus',
    pros: [
      'Free basic plan with no monthly fees',
      'Easy to set up — runs on iPad',
      'Built-in payment processing',
      'Good reporting and analytics',
    ],
    cons: [
      'Limited takeaway/delivery features on free plan',
      'No built-in kitchen display on free plan',
      'Transaction fees higher than dedicated providers',
      'No offline ordering capability',
    ],
    verdict: 'A solid choice for small cafes that want a free starting point. However, growing restaurants will quickly hit feature limits and need to upgrade to the paid plan.',
  },
  {
    rank: 3,
    name: 'Lightspeed Restaurant',
    bestFor: 'Fine dining and full-service restaurants',
    priceFrom: '£59/month',
    monthlyFee: '£59–£289/month',
    pros: [
      'Excellent table management and floor plan',
      'Advanced reporting and inventory',
      'Multi-location support',
      'Good integration ecosystem',
    ],
    cons: [
      'Most expensive monthly fees',
      'Complex setup — steep learning curve',
      'Hardware purchased separately',
      'No built-in self-order kiosks',
    ],
    verdict: 'Best for upmarket restaurants that need deep analytics and inventory management. The monthly cost is high, making it less suitable for takeaways or small operations.',
  },
  {
    rank: 4,
    name: 'Zettle by PayPal',
    bestFor: 'Pop-ups, market stalls, and micro-businesses',
    priceFrom: '£29 (card reader)',
    monthlyFee: 'Free',
    pros: [
      'Cheapest entry point — card reader from £29',
      'No monthly fees',
      'PayPal integration',
      'Simple and intuitive',
    ],
    cons: [
      'Very basic — no KDS, no kiosks, no delivery',
      'No table management or floor plan',
      'Limited menu management',
      'Not suitable for busy restaurants',
    ],
    verdict: 'Perfect for market stalls and pop-ups that just need to take card payments. Not a real restaurant POS — it lacks kitchen display, table management, and delivery features.',
  },
  {
    rank: 5,
    name: 'TouchBistro',
    bestFor: 'iPad-based restaurants in North America',
    priceFrom: '£55/month',
    monthlyFee: '£55–£399/month',
    pros: [
      'Purpose-built for restaurants',
      'Good table management',
      'Staff scheduling built in',
      'Offline mode on iPad',
    ],
    cons: [
      'Limited UK support — primarily North American',
      'iPad-only — no Windows or kiosk support',
      'Add-on pricing for online ordering, reservations',
      'No self-order kiosk option',
    ],
    verdict: 'A capable restaurant POS but primarily designed for the North American market. UK restaurants may find better local support and features with UK-based providers.',
  },
];

const comparisonFeatures = [
  { feature: 'Self-Order Kiosks', posso: true, square: false, lightspeed: false, zettle: false, touchbistro: false },
  { feature: 'Kitchen Display System', posso: true, square: true, lightspeed: true, zettle: false, touchbistro: true },
  { feature: 'Online Ordering Website', posso: true, square: true, lightspeed: true, zettle: false, touchbistro: true },
  { feature: 'Offline Operation', posso: true, square: false, lightspeed: false, zettle: false, touchbistro: true },
  { feature: 'Just Eat / Uber Eats / Deliveroo', posso: true, square: true, lightspeed: true, zettle: false, touchbistro: false },
  { feature: 'Caller ID Integration', posso: true, square: false, lightspeed: false, zettle: false, touchbistro: false },
  { feature: 'Pizza Builder', posso: true, square: false, lightspeed: false, zettle: false, touchbistro: false },
  { feature: 'Delivery Driver App', posso: true, square: false, lightspeed: false, zettle: false, touchbistro: false },
  { feature: 'Split-Sided Customisation', posso: true, square: false, lightspeed: false, zettle: false, touchbistro: false },
  { feature: 'Multi-Language (5 Languages)', posso: true, square: false, lightspeed: true, zettle: false, touchbistro: false },
  { feature: 'Free Setup & Training', posso: true, square: false, lightspeed: false, zettle: false, touchbistro: false },
  { feature: 'UK-Based Support', posso: true, square: true, lightspeed: true, zettle: true, touchbistro: false },
];

function FeatureIcon({ available }: { available: boolean }) {
  return available ? (
    <Check className="h-5 w-5 text-green-400 mx-auto" />
  ) : (
    <X className="h-5 w-5 text-slate-600 mx-auto" />
  );
}

export default function Top5PosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Top 5 POS Systems' }]} />

        {/* Hero — Featured Snippet Target */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Star className="w-3 h-3 mr-2" />
              2026 UK COMPARISON
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Top 5 POS Systems for Restaurants (2026)
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-2xl">
              We compared the 5 most popular restaurant POS systems available in the UK. Here&apos;s how they stack up on features, pricing, and suitability for different types of restaurants.
            </p>

            {/* Quick Answer — Featured Snippet */}
            <div className="mt-8 glass-card rounded-2xl border border-primary/30 p-8">
              <p className="text-lg text-white font-semibold mb-4">The top 5 POS systems for restaurants in the UK (2026):</p>
              <ol className="space-y-2 text-lg text-slate-300 list-decimal list-inside">
                <li><strong className="text-primary">Posso One</strong> — Best overall for restaurants &amp; takeaways (from £499)</li>
                <li><strong className="text-white">Square for Restaurants</strong> — Best free option for small cafes</li>
                <li><strong className="text-white">Lightspeed Restaurant</strong> — Best for fine dining &amp; analytics</li>
                <li><strong className="text-white">Zettle by PayPal</strong> — Best for pop-ups &amp; market stalls</li>
                <li><strong className="text-white">TouchBistro</strong> — Best iPad-based system (US-focused)</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Individual Reviews */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
            {posSystems.map((pos) => (
              <div
                key={pos.name}
                className={`glass-card rounded-2xl p-8 border ${pos.highlight ? 'border-primary/50 shadow-lg shadow-primary/5' : 'border-slate-700/50'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold ${pos.highlight ? 'bg-gradient-to-br from-primary to-accent text-white' : 'bg-slate-800 text-slate-300'}`}>
                    {pos.rank}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{pos.name}</h2>
                    <p className="text-slate-400">Best for: {pos.bestFor}</p>
                  </div>
                  {pos.highlight && (
                    <Badge className="bg-primary/10 text-primary border-primary/30 ml-auto hidden sm:flex">
                      <Star className="w-3 h-3 mr-1 fill-primary" /> TOP PICK
                    </Badge>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">Hardware From</p>
                    <p className="text-white font-bold text-lg">{pos.priceFrom}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">Monthly Software</p>
                    <p className="text-white font-bold text-lg">{pos.monthlyFee}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-green-400 font-semibold mb-3">Pros</h3>
                    <ul className="space-y-2">
                      {pos.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-slate-300 text-sm">
                          <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" /> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-semibold mb-3">Cons</h3>
                    <ul className="space-y-2">
                      {pos.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-slate-300 text-sm">
                          <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" /> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-slate-300"><strong className="text-white">Verdict:</strong> {pos.verdict}</p>
                </div>

                {pos.highlight && (
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Link href="/pos-systems" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 px-6 py-3 font-medium">
                      Get a Posso Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link href="/pos" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 px-6 py-3 font-medium transition-colors">
                      See Full Features
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Feature-by-Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-3 text-left text-white font-semibold">Feature</th>
                    <th className="py-3 px-3 text-center text-primary font-semibold">Posso</th>
                    <th className="py-3 px-3 text-center text-slate-300 font-semibold">Square</th>
                    <th className="py-3 px-3 text-center text-slate-300 font-semibold">Lightspeed</th>
                    <th className="py-3 px-3 text-center text-slate-300 font-semibold">Zettle</th>
                    <th className="py-3 px-3 text-center text-slate-300 font-semibold">TouchBistro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-3 text-slate-300">{row.feature}</td>
                      <td className="py-3 px-3"><FeatureIcon available={row.posso} /></td>
                      <td className="py-3 px-3"><FeatureIcon available={row.square} /></td>
                      <td className="py-3 px-3"><FeatureIcon available={row.lightspeed} /></td>
                      <td className="py-3 px-3"><FeatureIcon available={row.zettle} /></td>
                      <td className="py-3 px-3"><FeatureIcon available={row.touchbistro} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Learn More About Posso</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">30+ Features</p>
                  <p className="text-slate-400 text-sm mt-1">Full ePOS feature list</p>
                </Link>
                <Link href="/how-much-does-a-pos-system-cost-for-a-restaurant" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pricing Guide</p>
                  <p className="text-slate-400 text-sm mt-1">Full cost breakdown</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">Free demo available</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant POS — FAQs" faqs={[
          { question: 'What is the best POS system for a small restaurant?', answer: 'For small UK restaurants, Posso One offers the best value — you get a full POS with KDS, online ordering, and card payments from £499 + VAT plus software from £25 + VAT a month. Square is a good free alternative but lacks features like kitchen display and delivery integration on the free plan.' },
          { question: 'What POS system do most restaurants use?', answer: 'In the UK, the most common restaurant POS systems are Square, Lightspeed, Posso, and Zettle. Takeaways and fast food outlets tend to prefer systems with delivery integration (Posso, Square), while fine dining restaurants often choose Lightspeed for its advanced table management.' },
          { question: 'How much should I pay for a restaurant POS?', answer: 'A professional restaurant POS in the UK costs from £499 to £4,500+ depending on your setup. A basic single-till costs around £499–£799. A full package with kiosks, KDS, printers, and online ordering is typically £3,000–£4,500. Finance is available from £24.92/week.' },
          { question: 'Do I need a self-order kiosk for my restaurant?', answer: 'Kiosks are optional but highly recommended for fast food, takeaways, and casual dining. They increase average order value by 20–30% through smart upselling and reduce queue times. Most restaurants see ROI within 3–6 months.' },
          { question: 'Can I switch POS systems mid-contract?', answer: 'Yes, though you should check your current provider for early termination fees. Posso offers free menu import and setup when switching — we can have you live on the new system within 24 hours while minimising disruption.' },
          { question: 'What features should I look for in a restaurant POS?', answer: 'Essential features: touchscreen ordering, integrated card payments, kitchen display, receipt printing, and reporting. Valuable extras: online ordering, self-order kiosks, delivery platform integration (Just Eat, Uber Eats, Deliveroo), table management, and offline operation.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
