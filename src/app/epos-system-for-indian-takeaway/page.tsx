import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, Truck, CreditCard, BarChart3, Phone, ArrowRight, Globe, Users, MapPin } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS System for Indian Takeaway | Posso UK',
  description:
    'Posso ePOS system built for Indian takeaways. Caller ID phone ordering, delivery zone management, multi-language kitchen tickets, spice level modifiers, and Just Eat/Uber Eats/Deliveroo integration. From £499 + VAT.',
  keywords: [
    'epos system for indian takeaway',
    'indian takeaway epos',
    'indian restaurant pos system',
    'indian takeaway pos',
    'epos for indian restaurant',
    'indian food ordering system',
    'pos system for indian takeaway uk',
    'indian takeaway till system',
    'best epos for indian takeaway',
    'indian takeaway online ordering',
  ],
  alternates: {
    canonical: '/epos-system-for-indian-takeaway',
  },
  openGraph: {
    title: 'ePOS System for Indian Takeaway | Posso UK',
    description:
      'Purpose-built ePOS for Indian takeaways with caller ID, delivery zones, multi-language tickets, and aggregator integration.',
    url: 'https://www.posso.co.uk/epos-system-for-indian-takeaway',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS System for Indian Takeaway',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'ePOS system designed for Indian takeaways with caller ID, delivery zone management, multi-language kitchen tickets, spice level modifiers, meal deal combos, and delivery aggregator integration.',
    url: 'https://www.posso.co.uk/epos-system-for-indian-takeaway',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: {
      '@type': 'Brand',
      name: 'Posso',
    },
    featureList: [
      'Caller ID for repeat phone orders',
      'Delivery zone management by postcode',
      'Multi-language kitchen tickets',
      'Spice level modifiers',
      'Meal deal and combo management',
      'Just Eat, Uber Eats, Deliveroo integration',
      'Online ordering website included',
      'Kitchen display system',
      'Works offline',
      'Low commission online orders',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Indian Takeaway ePOS', item: 'https://www.posso.co.uk/epos-system-for-indian-takeaway' },
    ],
  },
];

const indianFeatures = [
  { icon: Phone, title: 'Caller ID Phone Orders', description: 'Incoming calls automatically pull up the customer\'s previous orders, address, and delivery notes. One tap to reorder their usual — saving 30+ seconds per call.' },
  { icon: MapPin, title: 'Delivery Zone Management', description: 'Set delivery zones by postcode with custom minimum orders and delivery charges. Automatically reject orders outside your delivery radius.' },
  { icon: Globe, title: 'Multi-Language Kitchen Tickets', description: 'Print kitchen tickets in English, Hindi, Urdu, Bengali, Punjabi, or Gujarati so your kitchen staff can read orders in their preferred language.' },
  { icon: Users, title: 'Spice Level Modifiers', description: 'Mild, Medium, Hot, and Extra Hot modifiers on every dish. Staff select the spice level at the point of order and it prints clearly on the kitchen ticket.' },
  { icon: CreditCard, title: 'Meal Deal & Combo Builder', description: 'Set up meal deals like "Any Curry + Rice + Naan for £9.99". The POS automatically applies the deal price when items qualify.' },
  { icon: Truck, title: 'Just Eat, Uber Eats & Deliveroo', description: 'Aggregator orders flow straight into your POS and kitchen display. No separate tablets, no manual re-keying, no missed orders.' },
];

const benefits = [
  { icon: Clock, title: 'Speed Up Phone Orders', description: 'Caller ID and order history mean your staff spend less time on the phone and more time preparing food. Average call time drops from 3 minutes to under 90 seconds.' },
  { icon: Monitor, title: 'Kitchen Display System', description: 'Orders appear on screen in the kitchen with spice levels, allergen notes, and special instructions clearly visible. No lost paper tickets.' },
  { icon: Smartphone, title: 'Your Own Ordering Website', description: 'Get your own branded online ordering site with low commission. Customers order directly from you instead of paying 30%+ to aggregators.' },
  { icon: BarChart3, title: 'Sales & Menu Analytics', description: 'See which dishes sell best, your peak ordering hours, average order value by channel, and which meal deals drive the most revenue.' },
];

export default function IndianTakeawayEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Indian Takeaway ePOS' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                  <Zap className="w-3 h-3 mr-2" />
                  INDIAN TAKEAWAY ePOS
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    ePOS System for{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Indian Takeaway
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Built specifically for Indian takeaways. Caller ID pulls up previous orders instantly, multi-language kitchen tickets keep your chefs in flow, and delivery zone management handles your postcode areas automatically.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Caller ID with one-tap reorder</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Kitchen tickets in Hindi, Urdu, Bengali & more</li>
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
                  alt="Posso ePOS system for Indian takeaway showing caller ID, delivery zones, and multi-language kitchen ticket features"
                  width={1200}
                  height={630}
                  loading="eager"
                  className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Built for How Indian Takeaways Actually Work
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Most POS systems are designed for generic restaurants. Posso is built around the way Indian takeaways take orders — by phone, through apps, and at the counter.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {indianFeatures.map((f) => (
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

        {/* Benefits / Why Choose */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Why Indian Takeaways Switch to Posso
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From busy Friday night phone queues to managing three delivery apps at once — Posso handles the chaos so you can focus on the food.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Posso Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Full ePOS Features</p>
                  <p className="text-slate-400 text-sm mt-1">30+ features overview</p>
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
              </div>
              <p className="text-slate-400 text-center mt-6">
                Still comparing suppliers? Our{' '}
                <Link href="/pos-for-indian-takeaway" className="text-primary hover:underline">Indian takeaway POS buyer&apos;s guide</Link>{' '}
                covers what to look for, what to test and what it should cost — whoever you buy from.
              </p>
            </div>
          </div>
        </section>

        <FAQSection title="Indian Takeaway ePOS — Frequently Asked Questions" faqs={[
          { question: 'Does the ePOS system support caller ID for Indian takeaway phone orders?', answer: 'Yes. When a customer calls, the POS automatically displays their name, address, previous orders, and delivery notes. Your staff can reorder their usual with one tap, cutting average call times from 3 minutes to under 90 seconds.' },
          { question: 'Can kitchen tickets be printed in Hindi or Urdu?', answer: 'Yes. Posso supports multi-language kitchen tickets including Hindi, Urdu, Bengali, Punjabi, and Gujarati. Your kitchen staff read orders in their preferred language while the customer-facing receipt stays in English.' },
          { question: 'How does delivery zone management work for Indian takeaways?', answer: 'You set delivery zones by postcode area with custom minimum order values and delivery charges. The system automatically checks the customer\'s postcode and applies the correct delivery fee — or rejects the order if they are outside your delivery area.' },
          { question: 'Does Posso integrate with Just Eat, Uber Eats, and Deliveroo?', answer: 'Yes. Orders from all three aggregators flow directly into your POS and kitchen display system. No separate tablets, no manual re-keying. You manage all channels from one screen.' },
          { question: 'Can I set up meal deals and combos for my Indian takeaway?', answer: 'Yes. Create meal deals like "Any Curry + Rice + Naan for £9.99" or "Family Feast for £24.99". The POS automatically applies the deal price when qualifying items are added to the order.' },
          { question: 'How much does an Indian takeaway ePOS system cost?', answer: 'Our POS systems start from £499 + VAT for a complete touchscreen terminal with integrated card payments, receipt printer, and all Indian takeaway features. Self-order kiosks start from £699 + VAT. Finance options are available.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
