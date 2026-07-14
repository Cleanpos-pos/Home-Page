import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Clock, CreditCard, BarChart3, Phone, ArrowRight, ShoppingCart, Globe, Smartphone, Truck, TabletSmartphone, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Ordering System',
  description:
    'Food Ordering System for restaurants, takeaways, and cafes. Online ordering, self-order kiosks, POS, phone orders, and delivery app integration in one platform. POS from £499 + VAT.',
  keywords: [
    'food ordering system',
    'food ordering system uk',
    'restaurant ordering system',
    'online food ordering system',
    'takeaway ordering system',
    'food order management system',
    'digital food ordering',
    'restaurant order system',
    'multi-channel ordering system',
    'food ordering platform',
  ],
  alternates: {
    canonical: '/food-ordering-system',
  },
  openGraph: {
    title: 'Food Ordering System | Posso UK',
    description:
      'Food Ordering System covering online, kiosk, POS, phone, and delivery apps. One platform for every ordering channel.',
    url: 'https://posso.co.uk/food-ordering-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Food Ordering System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Complete food ordering system combining online ordering, self-order kiosks, POS terminal, phone order entry, and delivery app integration into one unified platform.',
    url: 'https://posso.co.uk/food-ordering-system',
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
      reviewCount: '189',
      bestRating: '5',
    },
    featureList: [
      'Online ordering website — branded, mobile-first',
      'Self-order kiosk with upselling prompts',
      'POS terminal for counter and table service',
      'Phone order entry with caller ID',
      'Delivery app integration — Just Eat, Uber Eats, Deliveroo',
      'Single menu management across all channels',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Food Ordering System', item: 'https://posso.co.uk/food-ordering-system' },
    ],
  },
];

const features = [
  { icon: Globe, title: 'Online Ordering Website', description: 'Your own branded ordering website where customers browse your menu, customise items, choose collection or delivery, and pay online. Mobile-first design ensures 95% of customers can order without zooming or scrolling sideways.' },
  { icon: TabletSmartphone, title: 'Self-Order Kiosks', description: 'Touchscreen kiosks from £699 + VAT let customers order and pay in-store. Upselling prompts increase average order value by 20-30%. The queue moves faster because customers order at their own pace while staff focus on preparation.' },
  { icon: Monitor, title: 'POS Counter Ordering', description: 'The touchscreen POS handles counter orders, table service, and phone orders. Visual product grid with one-tap ordering keeps the queue moving. Modifiers, combos, and meal deals are built into the ordering flow.' },
  { icon: Smartphone, title: 'Phone Order Entry', description: 'When a customer calls to order, staff enter the order on the POS with caller ID lookup. Previous orders are recalled instantly so regulars can reorder their usual. The order prints in the kitchen just like any other channel.' },
  { icon: Truck, title: 'Delivery App Integration', description: 'Just Eat, Uber Eats, and Deliveroo orders arrive directly on your POS and kitchen display. No separate tablets, no manual re-entry. Accept, prepare, and dispatch from the same screen as your walk-in orders.' },
  { icon: ShoppingCart, title: 'Single Menu Management', description: 'Update your menu once and it syncs across every channel — POS, kiosk, website, and delivery apps. Change a price, add a new item, or mark something out of stock and it updates everywhere within seconds.' },
];

const benefits = [
  { title: 'Every Order in One Place', description: 'Whether a customer orders online, at the kiosk, over the phone, on Just Eat, or at the counter — every order appears on the same kitchen display in the same format. Your kitchen staff work one system, not five separate tablets.' },
  { title: 'Grow Your Direct Orders', description: 'Delivery apps charge up to 35% commission. Your Posso online ordering website charges low commission, so you keep more of every sale. Drive customers to your branded website and build a direct relationship with your audience.' },
  { title: 'Reduce Errors Across Channels', description: 'Manual re-entry from delivery app tablets causes mistakes. The Posso food ordering system sends every order directly to the kitchen display with full item details, modifiers, and special requests — no re-typing, no miscommunication.' },
  { title: 'Scale Without Extra Staff', description: 'Kiosks and online ordering handle the ordering workload so you can serve more customers without hiring more counter staff. During peak hours, self-service channels absorb the overflow while staff focus on food preparation and customer service.' },
];

export default function FoodOrderingSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Food Ordering System' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <ShoppingCart className="w-3 h-3 mr-2" />
                EVERY ORDERING CHANNEL IN ONE SYSTEM
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Food Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Online ordering, self-order kiosks, POS, phone orders, and delivery app integration — all in one platform. One menu, one kitchen display, every channel covered.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Online, kiosk, POS, phone & delivery apps unified</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Single menu syncs across all channels</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Complete food ordering system from £499 + VAT</li>
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

        {/* Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Five Ordering Channels, One Platform
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Stop juggling separate systems for each ordering channel. Posso brings online, kiosk, POS, phone, and delivery apps together.
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

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                Why One System Beats Five Separate Tools
              </h2>
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

        {/* Content Section */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Built for Restaurants, Takeaways, and Cafes
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most food businesses start with a till and add channels over time — an online ordering website here, a Just Eat tablet there, maybe a kiosk later. Before long you have <strong className="text-white">five separate systems</strong>, five menus to update, and a kitchen drowning in different order formats.
                </p>
                <p>
                  The Posso food ordering system solves this by putting every channel on <strong className="text-white">one platform with one menu</strong>. Your kitchen receives orders in the same format regardless of whether the customer ordered online, at the kiosk, over the phone, or through Deliveroo. One system to learn, one menu to manage, one set of reports to review.
                </p>
                <p>
                  For takeaways doing high volume across multiple channels, the unified approach eliminates the double-entry errors that cause wrong orders and refunds. For restaurants adding online ordering for the first time, it means no extra hardware and no separate system to learn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Ordering Channels</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded website</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">In-store ordering</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Food Ordering System — Frequently Asked Questions" faqs={[
          { question: 'What ordering channels does the Posso food ordering system support?', answer: 'Posso supports five ordering channels in one system: online ordering through your branded website, self-order kiosks in-store, POS counter and table ordering, phone order entry with caller ID, and delivery app integration with Just Eat, Uber Eats, and Deliveroo. All channels share one menu and one kitchen display.' },
          { question: 'Do I need to update menus separately for each channel?', answer: 'No. You manage one menu and it syncs across all channels — POS, kiosk, website, and delivery apps. Change a price, add a new item, or mark something out of stock and it updates everywhere within seconds. No duplicate data entry.' },
          { question: 'How does the kitchen handle orders from different channels?', answer: 'Every order appears on the same kitchen display system in the same format, regardless of which channel it came from. The kitchen ticket shows the order source (online, kiosk, counter, Just Eat, etc.) so staff can prioritise, but the format is consistent so there is no confusion.' },
          { question: 'What commission do you charge on online orders?', answer: 'Posso charges low commission on online orders through your branded website. This is significantly less than the 15-35% charged by delivery platforms like Just Eat and Uber Eats. The exact rate depends on your plan — contact us for a quote.' },
          { question: 'Can I start with just the POS and add other channels later?', answer: 'Yes. Many customers start with the POS from £499 + VAT and add online ordering, kiosks, or delivery integration as their business grows. Each channel plugs into the same system with the same menu — no migration or data transfer needed.' },
          { question: 'How long does it take to set up the food ordering system?', answer: 'Most restaurants are fully set up within 48 hours. We import your menu, configure your ordering channels, set up the kitchen display, and train your staff. Hardware ships pre-configured so it works out of the box. Free setup and training are included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
