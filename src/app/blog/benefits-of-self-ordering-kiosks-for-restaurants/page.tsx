import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Percent,
  Timer,
  ShieldCheck,
  Users,
  BarChart3,
  Coins,
  CreditCard,
  Languages,
  ArrowRight,
  Phone,
  Calculator,
  Monitor,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

const SLUG = 'benefits-of-self-ordering-kiosks-for-restaurants';
const URL = `https://www.posso.co.uk/blog/${SLUG}`;
const PUBLISHED = '2026-09-11';

export const metadata: Metadata = {
  title: 'Self-Ordering Kiosk Benefits & ROI for UK Restaurants',
  description:
    'Self-ordering kiosks lift average order value 20–30%, cut errors below 1%, and pay back in under 3 months. 18 data-backed benefits plus a UK ROI calculator.',
  keywords: [
    'benefits of self ordering kiosks for restaurants',
    'self ordering kiosk ROI',
    'self service kiosk benefits UK',
    'do self order kiosks increase order value',
    'restaurant kiosk payback period',
    'self order kiosk average order value uplift',
    'self service kiosk takeaway UK',
    'kiosk error rate reduction',
  ],
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: 'The Benefits of Self-Ordering Kiosks for Restaurants: ROI & Data | Posso UK',
    description:
      '18 data-backed benefits of self-ordering kiosks for UK restaurants and takeaways, a full ROI calculator, and worked before/after scenarios.',
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['https://www.posso.co.uk/about/paul-robinson'],
    images: [
      {
        url: '/images/posso-kiosk-krispy-kreme-customers.jpg',
        width: 800,
        height: 508,
        alt: 'Customers ordering at a Posso self-service kiosk at a UK food outlet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self-Ordering Kiosk Benefits & ROI for UK Restaurants',
    description: '18 data-backed benefits and a UK ROI calculator for self-ordering kiosks.',
    images: ['/images/posso-kiosk-krispy-kreme-customers.jpg'],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${URL}#article`,
  headline: 'The Benefits of Self-Ordering Kiosks for Restaurants: 18 Data-Backed Reasons and the ROI',
  description:
    'A data-driven guide to the benefits of self-ordering kiosks for UK restaurants and takeaways: 18 measurable benefits across revenue, efficiency, accuracy, customer experience and operations, plus an ROI calculator and worked scenarios.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.posso.co.uk/about/paul-robinson#person',
    name: 'Paul Robinson',
    jobTitle: 'Managing Director',
    url: 'https://www.posso.co.uk/about/paul-robinson',
    worksFor: { '@id': 'https://www.posso.co.uk/#organization' },
  },
  publisher: { '@id': 'https://www.posso.co.uk/#organization' },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  image: 'https://www.posso.co.uk/images/posso-kiosk-krispy-kreme-customers.jpg',
  inLanguage: 'en-GB',
  articleSection: 'Self-Service Kiosks',
  keywords:
    'self-ordering kiosk benefits, self-order kiosk ROI, average order value, order accuracy, restaurant technology, UK takeaway',
  about: [
    { '@type': 'Thing', name: 'Self-ordering kiosk' },
    { '@type': 'Thing', name: 'Return on investment' },
    { '@type': 'Thing', name: 'Restaurant technology' },
  ],
};

const benefits = [
  { area: 'Revenue', benefit: 'Average order value', figure: '+20–30% per order' },
  { area: 'Revenue', benefit: 'Upsell acceptance', figure: '30–40% (vs 5–10% verbal)' },
  { area: 'Revenue', benefit: 'Premium item selection', figure: '+15–25%' },
  { area: 'Revenue', benefit: 'Meal-deal / combo uptake', figure: '+30–50%' },
  { area: 'Efficiency', benefit: 'Order throughput', figure: '+30–40%' },
  { area: 'Efficiency', benefit: 'Orders per hour, per kiosk', figure: '40–60 (vs 20–30 at counter)' },
  { area: 'Efficiency', benefit: 'Peak-time queue pressure', figure: 'Parallel channel, fewer walk-aways' },
  { area: 'Efficiency', benefit: 'Front-of-house dependency', figure: 'Redeploy staff to kitchen & service' },
  { area: 'Accuracy', benefit: 'Order error rate', figure: 'Under 1% (vs 5–15%)' },
  { area: 'Accuracy', benefit: 'Allergen information', figure: 'Shown on every order' },
  { area: 'Accuracy', benefit: 'Kitchen tickets', figure: 'Formatted, no misreads' },
  { area: 'Experience', benefit: 'Speed-of-service satisfaction', figure: '+15–25%' },
  { area: 'Experience', benefit: 'Customer control & pace', figure: 'Higher repeat intent' },
  { area: 'Experience', benefit: 'Multi-language ordering', figure: 'Wider customer base' },
  { area: 'Experience', benefit: 'Consistency', figure: 'Same upsell on every visit' },
  { area: 'Operations', benefit: 'Real-time analytics', figure: 'AOV, peaks, abandonment' },
  { area: 'Operations', benefit: 'Cash handling', figure: 'Reduced (85%+ UK cashless)' },
  { area: 'Operations', benefit: 'Staff training time', figure: 'Near-zero on the kiosk UI' },
];

const roiByType = [
  { type: 'Fish & chip shop', order: '£8.50', daily: '180', uplift: '£5,100', payback: '< 1 month' },
  { type: 'Pizza takeaway', order: '£14.00', daily: '100', uplift: '£5,544', payback: '< 1 month' },
  { type: 'Curry house', order: '£18.00', daily: '80', uplift: '£5,702', payback: '< 1 month' },
  { type: 'Kebab shop', order: '£7.50', daily: '200', uplift: '£5,940', payback: '< 1 month' },
  { type: 'Small restaurant (50 covers)', order: '£22.00', daily: '60', uplift: '£5,227', payback: '< 1 month' },
];

const areaIcons: Record<string, typeof TrendingUp> = {
  Revenue: TrendingUp,
  Efficiency: Timer,
  Accuracy: ShieldCheck,
  Experience: Users,
  Operations: BarChart3,
};

export default function KioskBenefitsBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BlogBreadcrumb slug={SLUG} title="Benefits of Self-Ordering Kiosks for Restaurants" />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Monitor className="w-3 h-3 mr-2" />
              SELF-ORDER KIOSKS
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              The Benefits of Self-Ordering Kiosks for Restaurants: 18 Data-Backed Reasons (and the ROI)
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl">
              Self-ordering kiosks are not hype. For UK restaurants and takeaways they move real numbers — higher spend, faster service, fewer mistakes — and pay for themselves fast. Here is the evidence, benefit by benefit, with a full ROI calculator.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-sm text-slate-500">
              <span>
                By <Link href="/about/paul-robinson" className="text-slate-300 hover:text-primary transition-colors">Paul Robinson</Link>, Managing Director, Posso Ltd
              </span>
              <span className="hidden sm:inline">|</span>
              <time dateTime={PUBLISHED}>11 September 2026</time>
              <span className="hidden sm:inline">|</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="pb-4">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <figure>
              <Image
                src="/images/posso-kiosk-krispy-kreme-customers.jpg"
                width={800}
                height={508}
                alt="Customers placing orders at a Posso self-service kiosk at a UK food outlet"
                className="rounded-2xl border border-slate-700/50 shadow-2xl shadow-primary/10 w-full h-auto"
                priority
              />
              <figcaption className="text-sm text-slate-500 mt-3 text-center">
                A Posso self-service kiosk in the field — customers order and pay without queuing at the counter.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Short answer card for AI extraction */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-primary/30 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">In short</p>
              <p className="text-slate-200 text-lg leading-relaxed">
                Self-ordering kiosks help UK restaurants and takeaways <strong className="text-white">increase average order value by 20–30%</strong>, <strong className="text-white">cut order errors to under 1%</strong>, and <strong className="text-white">process 30–40% more orders per hour</strong> — typically paying for themselves in <strong className="text-white">under three months</strong>. The gains come from consistent visual upselling, a faster ordering flow, and the removal of the verbal-communication errors that counter ordering introduces. Kiosks run alongside counter service rather than replacing it, so staff are freed for the kitchen and genuine hospitality.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits at a glance */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4">18 benefits of self-ordering kiosks at a glance</h2>
            <p className="text-slate-300 text-lg mb-8">
              The full list, grouped by the part of the business it moves. Every figure is explained in the sections below, with sourcing notes at the end.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-700/50">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-900/60 text-white text-sm uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Area</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Benefit</th>
                    <th scope="col" className="px-5 py-4 font-semibold">The number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {benefits.map((row, i) => {
                    const Icon = areaIcons[row.area] ?? TrendingUp;
                    return (
                      <tr key={i}>
                        <td className="px-5 py-4 align-top">
                          <span className="inline-flex items-center gap-2 text-white font-medium">
                            <Icon className="h-4 w-4 text-primary shrink-0" />
                            {row.area}
                          </span>
                        </td>
                        <td className="px-5 py-4 align-top">{row.benefit}</td>
                        <td className="px-5 py-4 align-top font-medium text-white">{row.figure}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Article body: revenue */}
        <article className="py-8">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white !mt-0">Do self-ordering kiosks actually increase revenue?</h2>
              <p>
                Yes — and the average-order-value uplift is the single most impactful reason to install one. When customers order on a screen instead of at a counter, they consistently spend more. Figures publicly reported by large chains such as McDonald&apos;s, alongside widely cited industry studies and Posso&apos;s own UK deployments, point to a <strong className="text-white">20–30% increase in average order value</strong>. Three things drive it:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-white">No social pressure.</strong> Customers add extras, size up and order dessert without feeling judged or rushing an impatient queue.</li>
                <li><strong className="text-white">Visual upselling works.</strong> A photo of loaded cheesy chips with &quot;Add for just £2.50?&quot; converts far better than a verbal prompt from a busy member of staff.</li>
                <li><strong className="text-white">Systematic prompting.</strong> The screen never forgets to offer a drink, side or dessert. During a rush, staff skip the upsell to keep the queue moving.</li>
              </ul>
              <p>
                For a shop with a £10 average order, a 25% uplift is £12.50 per order. Across 200 orders a day that is an extra £500 daily — roughly <strong className="text-white">£15,000 a month</strong> in additional revenue. Upsell prompts on a kiosk are accepted <strong className="text-white">30–40%</strong> of the time, against 5–10% for verbal upselling, and premium items see 15–25% higher selection when shown with good photography. See how{' '}
                <Link href="/self-order-kiosks" className="text-primary hover:underline">Posso&apos;s self-order kiosks</Link> handle featured items and per-item upsell prompts, or the{' '}
                <Link href="/self-order-kiosk-fast-food" className="text-primary hover:underline">fast-food kiosk setup</Link> for QSR menus.
              </p>

              <h2 className="text-3xl font-bold text-white">How much faster is service with a kiosk?</h2>
              <p>
                A well-configured kiosk processes <strong className="text-white">40–60 orders an hour</strong> against 20–30 for a member of staff at a till — order throughput rises 30–40%. A counter transaction involves talking, clarifying, paying and making change; a kiosk transaction is a clean digital flow of browse, select, customise, pay. Deploying even one kiosk effectively doubles order-taking capacity without hiring.
              </p>
              <p>
                The counter queue is the primary bottleneck in most takeaways. A kiosk adds a parallel channel: confident customers self-serve while staff handle those who prefer counter service or need help. That parallel processing is what removes the single-point-of-failure a counter-only operation runs on, and it cuts walk-aways during the Friday-night peak. It also reduces dependency on front-of-house staffing in a tight UK labour market — the same covers with fewer people on tills, and those people redeployed to the kitchen.
              </p>

              <h2 className="text-3xl font-bold text-white">Do kiosks reduce order errors?</h2>
              <p>
                Dramatically. Counter ordering carries a <strong className="text-white">5–15% error rate</strong> depending on menu complexity, accents and background noise. A kiosk removes the verbal-communication layer entirely: the customer selects exactly what they want, sees it confirmed on screen, and submits it digitally. Kiosk error rates are typically <strong className="text-white">under 1%</strong>. For a takeaway doing 200 orders a day, going from 10% to 1% eliminates around 18 remakes daily — real food-cost and goodwill savings.
              </p>
              <p>
                Two accuracy benefits follow. Allergen tags and dietary icons (vegetarian, vegan, gluten-free, halal) are shown consistently on every order, supporting your duties under UK allergen rules — a member of staff can forget to ask mid-rush; the kiosk cannot. And every order reaches the kitchen as a clean, formatted ticket with no handwriting to decode, which is faster still when it lands straight on a{' '}
                <Link href="/kitchen-display-system" className="text-primary hover:underline">kitchen display system</Link>.
              </p>

              <h2 className="text-3xl font-bold text-white">What about the customer experience?</h2>
              <p>
                Customers rank speed of service among the most important parts of a food-service visit, and kiosks address it directly — restaurants deploying them report <strong className="text-white">15–25% higher satisfaction</strong> on speed-related measures. Beyond speed, customers browse at their own pace, feel in control, and can order in their preferred language where multi-language support is enabled, which widens the customer base in diverse UK communities. And the experience is identical every visit: the same menu, the same prompts, no off days.
              </p>

              <h2 className="text-3xl font-bold text-white">The operational wins</h2>
              <p>
                Every kiosk order is data — what sold, when, which upsells landed, what was abandoned, basket size and peak times — available in real-time reporting to sharpen your menu, pricing and staffing. Card-first ordering cuts cash handling in a market where 85%+ of transactions are already cashless; Posso kiosks pair with{' '}
                <Link href="/credit-card-machines" className="text-primary hover:underline">Posso card machines and payment processing</Link> so takings reconcile in one dashboard. And training shifts from &quot;how to take an order&quot; to &quot;how to make great food&quot; — customers already know how to use a touchscreen.
              </p>
            </div>
          </div>
        </article>

        {/* ROI calculator */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white">Self-ordering kiosk ROI: does it pay for itself?</h2>
            </div>
            <p className="text-slate-300 text-lg mb-8">
              A realistic model for a typical UK takeaway or small restaurant. Treat it as an illustration — plug in your own numbers to size it for your site.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="glass-card rounded-xl p-5 border border-slate-700/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Assumptions</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>£9.00 average order</li>
                  <li>150 orders/day, 30 days</li>
                  <li>+22% kiosk uplift (conservative)</li>
                  <li>60% of orders via kiosk</li>
                  <li>£150/month kiosk cost</li>
                </ul>
              </div>
              <div className="glass-card rounded-xl p-5 border border-slate-700/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Monthly revenue impact</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>90 kiosk orders/day</li>
                  <li>+£1.98 uplift per order</li>
                  <li>+£178.20 per day</li>
                  <li className="text-white font-semibold">+£5,346 per month</li>
                </ul>
              </div>
              <div className="glass-card rounded-xl p-5 border border-primary/30">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Net benefit</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>£5,346 revenue</li>
                  <li>− £230 total cost</li>
                  <li className="text-white font-semibold text-lg">= £5,116 net / month</li>
                  <li>Payback: under 1 month</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">ROI by restaurant type</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-700/50">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-900/60 text-white text-sm uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Restaurant type</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Avg order</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Daily orders</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Monthly uplift</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Payback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {roiByType.map((row) => (
                    <tr key={row.type}>
                      <td className="px-5 py-4 font-medium text-white align-top">{row.type}</td>
                      <td className="px-5 py-4 align-top">{row.order}</td>
                      <td className="px-5 py-4 align-top">{row.daily}</td>
                      <td className="px-5 py-4 align-top font-medium text-white">{row.uplift}</td>
                      <td className="px-5 py-4 align-top">{row.payback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 mt-6">
              The story holds across every format: the higher the average order, the bigger the absolute uplift per transaction; the higher the volume, the greater the cumulative impact. For hardware and monthly costs, see{' '}
              <Link href="/epos-pricing-uk" className="text-primary hover:underline">Posso EPOS pricing</Link>, and for fish &amp; chip shops specifically, the{' '}
              <Link href="/pos-for-fish-and-chip-shop" className="text-primary hover:underline">fish &amp; chip shop EPOS and till system</Link>.
            </p>
          </div>
        </section>

        {/* Before / after */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8">Before and after: two worked scenarios</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6 border border-slate-700/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Busy takeaway</p>
                <p className="text-slate-300">
                  A kebab-and-pizza shop does 200 orders on a Friday, 5–10pm, two staff on tills, £8 average order — £1,600 for the evening, with roughly 15 customers walking away from the queue. Add one kiosk: 60% of orders migrate, kiosk average climbs to £9.80, one staff member moves to food prep, walk-aways fall to 3, and the evening takes <strong className="text-white">£1,873</strong> — a £273 lift on a single Friday, about <strong className="text-white">£1,092 a month</strong> from Fridays alone.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6 border border-slate-700/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Small restaurant</p>
                <p className="text-slate-300">
                  A 40-cover restaurant does 50 dine-in and 30 takeaway orders a day, with errors on ~8% of orders costing about £36 a day in remakes. A kiosk handles takeaway and walk-in dine-in at peak: takeaway average rises to £18.30, errors drop below 1%, and orders reach the kitchen formatted. Monthly remake savings ~£1,050 plus ~£2,970 revenue uplift — a combined benefit of <strong className="text-white">over £4,000 a month</strong>.
                </p>
              </div>
            </div>
            <p className="text-slate-400 mt-6">
              For mobile and outdoor traders, the same maths applies to a weatherproof unit — see{' '}
              <Link href="/food-truck-epos-system" className="text-primary hover:underline">food truck &amp; trailer EPOS</Link>. New to kiosks entirely? Start with the{' '}
              <Link href="/self-order-kiosks-guide" className="text-primary hover:underline">self-order kiosks buyer&apos;s guide</Link>.
            </p>
          </div>
        </section>

        {/* Sourcing note */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 text-slate-400 text-sm leading-relaxed">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">How we source these figures</p>
              The 20–30% average-order-value uplift is widely reported across quick-service hospitality; McDonald&apos;s has publicly attributed higher average checks to its self-order kiosks, and Posso sees similar uplifts across UK deployments. Throughput, accuracy and satisfaction figures are given as ranges because results vary by menu complexity, footfall, kiosk placement and configuration. The ROI calculator is an illustrative model built on the stated assumptions, not a guarantee — the honest way to size the opportunity is to run your own numbers.
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">See the numbers for your own site</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Tell us your average order value, daily orders and menu, and we will model the uplift and payback on your actual figures — then show you the kiosk, KDS and payment setup behind it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                Get a Free Kiosk Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">The product & pricing</p>
                </Link>
                <Link href="/blog/self-service-revolution" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">The UK Self-Service Revolution</p>
                  <p className="text-slate-400 text-sm mt-1">Trends & the bigger picture</p>
                </Link>
                <Link href="/self-order-kiosk-fast-food" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Fast-Food Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">QSR upsell setup</p>
                </Link>
                <Link href="/kitchen-display-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Kitchen Display System</p>
                  <p className="text-slate-400 text-sm mt-1">Formatted tickets at peak</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Self-Ordering Kiosks — Frequently Asked Questions" faqs={[
          { question: 'Do self-ordering kiosks really increase average order value?', answer: 'Yes. Operators consistently report a 20–30% higher average order value on kiosks than at the counter, because every order gets the same visual upsell prompt and customers add extras more readily on a screen than to a member of staff. The exact lift depends on how well the prompts and meal deals are configured.' },
          { question: 'How quickly does a self-order kiosk pay for itself?', answer: 'On conservative assumptions — a 22% order-value uplift and 60% of orders migrating to the kiosk — a typical UK takeaway sees payback in under one month against a ~£150/month system cost. Even at a 15% uplift and 40% adoption, payback is usually under three months.' },
          { question: 'Will a kiosk replace my staff?', answer: 'No — it redeploys them. Kiosks run in parallel with counter service, so staff move from taking orders to preparing food and looking after customers. Chains that added kiosks often saw in-restaurant satisfaction rise because staff were freed up rather than cut.' },
          { question: 'My customers prefer ordering from a person. Is a kiosk still worth it?', answer: 'Customers prefer a person when there is no alternative. Where kiosks are offered, adoption typically climbs quickly even among initially reluctant groups. You keep counter ordering as an option, so no one is forced onto the screen.' },
          { question: 'Is my menu too complex for a kiosk?', answer: 'Complex menus often benefit more. Customers can browse categories, filter, read descriptions and customise at their own pace — a 200-item menu is easier to navigate on a well-designed kiosk than on a wall board.' },
          { question: 'Do kiosks help with allergen compliance?', answer: 'Kiosks display allergen tags and dietary icons consistently on every order, which supports your obligations under UK allergen rules. A kiosk aids compliance but does not by itself satisfy every legal duty — check your specific obligations.' },
          { question: 'What happens if the kiosk breaks or the internet drops?', answer: 'Commercial kiosk hardware is built for hospitality environments, and counter ordering remains as a seamless fallback. A hybrid setup keeps taking orders even if the connection drops.' },
        ]} />

        {/* Author box */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8 text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">About the author</p>
              <p>
                <Link href="/about/paul-robinson" className="text-white font-semibold hover:text-primary transition-colors">Paul Robinson</Link> is Managing Director of{' '}
                <Link href="/about" className="text-primary hover:underline">Posso Ltd</Link>, a Leicester-based UK technology company supplying ePOS systems,{' '}
                <Link href="/self-order-kiosks" className="text-primary hover:underline">self-order kiosks</Link>, online ordering, kitchen display systems and card payments to takeaways, QSRs, restaurants and visitor attractions.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
