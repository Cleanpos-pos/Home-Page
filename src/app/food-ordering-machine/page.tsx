import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, MonitorSmartphone, CreditCard, ChefHat, ShoppingCart, BarChart3, Accessibility } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Ordering Machine',
  description:
    'Food Ordering Machine for self-service restaurants, takeaways, and fast food. Freestanding kiosks with touchscreen ordering, card payment, and kitchen integration. Kiosks from £699 + VAT.',
  keywords: [
    'food ordering machine',
    'self service food ordering machine',
    'food ordering kiosk',
    'food ordering terminal',
    'restaurant ordering machine',
    'takeaway ordering machine',
    'self service ordering machine',
    'food order machine uk',
    'self service food kiosk',
    'food ordering machine price',
  ],
  alternates: {
    canonical: '/food-ordering-machine',
  },
  openGraph: {
    title: 'Food Ordering Machine | Posso UK',
    description:
      'Food Ordering Machine with touchscreen self-service, card payment, and direct kitchen integration for restaurants and takeaways.',
    url: 'https://www.posso.co.uk/food-ordering-machine',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Food Ordering Machine',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, Android',
    description:
      'Self-service food ordering machine with touchscreen interface, integrated card payment, kitchen display connection, and upsell automation for restaurants, takeaways, and fast food outlets.',
    url: 'https://www.posso.co.uk/food-ordering-machine',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '699',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '167',
      bestRating: '5',
    },
    featureList: [
      'Freestanding touchscreen kiosk',
      'Integrated contactless card payment',
      'Direct kitchen display integration',
      'Automated upsell and cross-sell prompts',
      'Accessibility features for all users',
      'Real-time sales and product analytics',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Self-Service', item: 'https://www.posso.co.uk/self-service-epos' },
      { '@type': 'ListItem', position: 3, name: 'Food Ordering Machine', item: 'https://www.posso.co.uk/food-ordering-machine' },
    ],
  },
];

const features = [
  { icon: MonitorSmartphone, title: 'Freestanding Touchscreen Kiosk', description: 'A purpose-built machine with a large touchscreen display (15.6" or 21.5") mounted on a freestanding pedestal or wall bracket. Customers browse your menu with high-resolution product images, select items, customise options, and place their order without staff assistance. Built for high-traffic environments.' },
  { icon: CreditCard, title: 'Integrated Card Payment', description: 'Contactless, chip-and-PIN, and mobile wallet payments built directly into the machine. Customers tap their card or phone to pay as the final step of ordering. No separate card terminal. No staff needed to process payment. Transaction completes in under 3 seconds. Receipts are optional — printed or emailed.' },
  { icon: ChefHat, title: 'Direct Kitchen Integration', description: 'Orders placed on the machine fire instantly to the kitchen display or printer. No staff relay step. The kitchen sees the order within 2 seconds of payment. Each item shows customisations, special requests, and order number. The customer receives a collection number on screen and on their receipt.' },
  { icon: ShoppingCart, title: 'Automated Upsell Prompts', description: 'The machine suggests add-ons, size upgrades, and meal deals at strategic points during the ordering flow. A burger order triggers a "Add fries and a drink for £2.99?" prompt. Dessert suggestions appear before checkout. These automated prompts consistently increase average order value by 15-25% compared to counter ordering.' },
  { icon: Accessibility, title: 'Accessible Design', description: 'Screen height adjustable for wheelchair users. High-contrast mode for visual accessibility. Large text option. Multiple language support. The machine is designed to be usable by every customer, not just those comfortable with technology. Compliance with accessibility guidelines is built in, not bolted on.' },
  { icon: BarChart3, title: 'Real-Time Analytics', description: 'Track which products sell best on the kiosk, which upsells convert, peak ordering times, and average order values. Compare kiosk performance against counter sales. Identify which menu items photograph well and which need better images. Data updates in real time on your management dashboard.' },
];

const benefits = [
  { title: 'Serve More Customers With Less Staff', description: 'Each food ordering machine handles the workload of a counter cashier — taking orders, processing payments, and sending to the kitchen. During peak hours, two machines can absorb queue pressure that would otherwise need two additional staff. Labour costs drop while throughput increases.' },
  { title: 'Increase Order Values Automatically', description: 'Staff forget to upsell during busy periods. The machine never forgets. Every single order receives relevant upsell prompts — larger sizes, add-ons, meal deals, desserts. Customers browsing a visual menu with images spend more than those ordering verbally at a counter. The data consistently shows 15-25% higher average order values.' },
  { title: 'Eliminate Counter Queues', description: 'Customers who see a long queue often leave. Food ordering machines provide additional ordering points that work in parallel with counter service. Two machines and one counter staff member can handle the volume that previously required three counter staff — with shorter wait times and no walkouts.' },
  { title: 'Reduce Order Errors', description: 'Customers select exactly what they want on screen — no miscommunication between customer and cashier. Customisations are explicit: "no onion", "extra sauce", "gluten-free bun". The kitchen receives a clean, accurate order every time. Fewer remakes mean less food waste and happier customers.' },
];

export default function FoodOrderingMachinePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Self-Service', href: '/self-service-epos' },
          { label: 'Food Ordering Machine' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <MonitorSmartphone className="w-3 h-3 mr-2" />
                SELF-SERVICE ORDERING KIOSK
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Food Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Machine
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Self-service food ordering machines that let customers browse, customise, pay, and send orders to your kitchen — without queuing or staff assistance.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Freestanding touchscreen with card payment</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Direct kitchen display integration</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Food ordering machines from £699 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Food Ordering Machine Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Purpose-built machines designed for high-volume self-service food ordering in restaurants and takeaways.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Food Businesses Choose Ordering Machines</h2>
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
                The Machine That Pays for Itself
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A food ordering machine is not just a screen on a stand — it is an <strong className="text-white">additional ordering channel that works every shift without breaks, sick days, or training costs</strong>. It takes orders accurately, upsells consistently, and processes payments instantly. The economics are straightforward: higher throughput, lower labour cost, bigger order values.
                </p>
                <p>
                  Customers increasingly prefer self-service. They want to <strong className="text-white">browse the menu at their own pace, see images of every dish, customise their order without feeling rushed</strong>, and pay without waiting for a cashier. The ordering machine gives them exactly that experience — and your business benefits from the efficiency.
                </p>
                <p>
                  Installation is simple. The machine arrives <strong className="text-white">pre-loaded with your menu, images, and pricing</strong>. Position it in your restaurant, connect to power and Wi-Fi, and it is ready to take orders. Your existing POS and kitchen display receive kiosk orders in the same format as counter orders. One kitchen, one queue, multiple ordering points.
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
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Full self-service platform</p>
                </Link>
                <Link href="/tablet-food-ordering-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Tablet Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Tablet-based ordering</p>
                </Link>
                <Link href="/online-food-ordering-portal" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering Portal</p>
                  <p className="text-slate-400 text-sm mt-1">Web-based ordering</p>
                </Link>
                <Link href="/food-delivery-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Delivery Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery integration</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Food Ordering Machine — Frequently Asked Questions" faqs={[
          { question: 'What size are the food ordering machines?', answer: 'We offer 15.6-inch and 21.5-inch touchscreen displays. The 15.6-inch works well in compact spaces and is available as a countertop or wall-mounted unit. The 21.5-inch is our most popular for freestanding floor installations — it is large enough for comfortable browsing and highly visible to customers entering your premises.' },
          { question: 'Do customers need to download an app?', answer: 'No. The food ordering machine is a physical touchscreen that customers walk up to and use. No app download, no QR code scanning, no account creation. Tap the screen to start browsing, select items, customise, pay by card — done. The barrier to use is as low as physically possible.' },
          { question: 'How does payment work?', answer: 'A card reader is integrated into the machine. Customers pay by contactless tap (card or phone), chip and PIN, or Apple Pay / Google Pay. Payment is the final step in the ordering flow. The transaction completes in under 3 seconds. An optional receipt prints or is emailed to the customer.' },
          { question: 'Does it connect to my existing kitchen setup?', answer: 'Yes. Orders from the food ordering machine appear on your existing kitchen display or printer in the same format as counter orders. If you already use a Posso POS, the kiosk integrates seamlessly. If you use a different POS, we can discuss integration options. The kitchen workflow does not change.' },
          { question: 'How much do food ordering machines cost?', answer: 'Food ordering machines start from £699 + VAT including the touchscreen display, pedestal or wall mount, integrated card reader, and ordering software. Volume discounts available for multiple machines. Finance from £34.95 per week. Free installation, menu setup, and on-site training included.' },
          { question: 'Do they actually increase order values?', answer: 'Yes. Data from our installed base shows average order values increase 15-25% on kiosk orders compared to counter orders. The combination of visual menus with food photography, automated upsell prompts, and customers browsing at their own pace consistently leads to larger orders. The machine pays for itself quickly.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
