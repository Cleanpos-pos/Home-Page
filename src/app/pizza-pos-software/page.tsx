import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Pizza, Layers, Grid3X3, Truck, MonitorSmartphone, Printer } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pizza POS Software',
  description:
    'Pizza POS Software with visual pizza builder, size and topping matrix, delivery management, kitchen ticket printing, and online ordering. Purpose-built for pizzerias. From £499 + VAT.',
  keywords: [
    'pizza pos software',
    'pizza point of sale software',
    'pizzeria pos software',
    'pizza shop software',
    'pizza ordering software',
    'pizza builder software',
    'pizza delivery software',
    'pizza till software',
    'pizza pos software uk',
    'best pizza pos software',
  ],
  alternates: {
    canonical: '/pizza-pos-software',
  },
  openGraph: {
    title: 'Pizza POS Software | Posso UK',
    description:
      'Pizza POS Software with visual builder, size matrix, toppings management, delivery tracking, and kitchen tickets. Built for pizzerias.',
    url: 'https://www.posso.co.uk/pizza-pos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Pizza POS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Pizza POS software with visual pizza builder, size and topping pricing matrix, delivery zone management, kitchen ticket printing, and integrated online ordering for pizzerias.',
    url: 'https://www.posso.co.uk/pizza-pos-software',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Visual pizza builder with topping selector',
      'Size and topping pricing matrix',
      'Kitchen ticket printing with full specifications',
      'Delivery zone and driver management',
      'Online ordering with pizza customisation',
      'Split-side topping support',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'POS Software', item: 'https://www.posso.co.uk/pos-software' },
      { '@type': 'ListItem', position: 3, name: 'Pizza POS Software', item: 'https://www.posso.co.uk/pizza-pos-software' },
    ],
  },
];

const features = [
  { icon: Pizza, title: 'Visual Pizza Builder', description: 'Staff select base size, crust, sauce, and toppings from a guided visual interface. Each selection updates the price instantly. Half-and-half toppings are supported natively — customers can have pepperoni on one side and vegetables on the other without workaround codes or manual pricing.' },
  { icon: Grid3X3, title: 'Size & Topping Matrix', description: 'Configure pricing across every size and topping combination in one matrix. A 10-inch Pepperoni Feast at £8.49, 14-inch at £12.99, 18-inch at £16.49. Extra cheese costs £1.00 on small, £1.50 on large. The software calculates totals automatically — no staff memorisation needed.' },
  { icon: Printer, title: 'Kitchen Ticket Printing', description: 'Every pizza prints with its full specification: size, crust type, sauce, each topping with portion (light, normal, extra), split-side detail, and special instructions. Tickets are formatted for rapid scanning — pizza makers read the spec top to bottom and build without questions.' },
  { icon: Truck, title: 'Delivery Management', description: 'Draw zones on a map, set delivery fees and minimums per zone, assign drivers, and track orders from prep through to delivery. The dispatch screen shows all active deliveries with time elapsed. Drivers can update status from their phone. Customers receive SMS updates.' },
  { icon: MonitorSmartphone, title: 'Online Ordering Integration', description: 'Your branded ordering website features the same pizza builder with full customisation. Orders sync directly to the POS and kitchen. No phone calls, no re-keying. Low commission compared to aggregator platforms charging up to 35%. Customers save their favourites for quick reordering.' },
  { icon: Layers, title: 'Multi-Channel Order Flow', description: 'Phone orders, walk-ins, website orders, and delivery app orders all funnel into one unified queue. The kitchen display prioritises by promised time. Collection and delivery orders are colour-coded differently. One screen, one workflow, regardless of how the order arrived.' },
];

const benefits = [
  { title: 'Eliminate Order Errors', description: 'The structured pizza builder removes ambiguity from every order. No more scribbled tickets where "pep + mush h/h" could mean anything. The software forces explicit selection at every step — size, crust, sauce, left toppings, right toppings. The kitchen receives a clear, unambiguous specification every time.' },
  { title: 'Speed Up Order Taking', description: 'Staff tap through the builder in under 30 seconds per pizza. Favourites and popular combinations are saved as one-tap presets. Repeat customers can reorder their last order with a single button. During Friday rush, the difference between 30-second and 2-minute order entry compounds across hundreds of pizzas.' },
  { title: 'Increase Average Order Value', description: 'Automatic upsell prompts suggest upgrading to a larger size, adding extra toppings, or bundling a meal deal. When a customer orders a 10-inch, the screen shows the 14-inch is only £4 more. Side suggestions appear at checkout. These micro-prompts add up to measurably higher ticket averages.' },
  { title: 'Own Your Online Orders', description: 'Every order through your branded website costs a fraction of what aggregator platforms charge. At low commission versus 35% on delivery apps, a £20 pizza order puts significantly more profit in your pocket. The software helps you build a direct customer base you actually own.' },
];

export default function PizzaPosSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'POS Software', href: '/pos-software' },
          { label: 'Pizza POS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Pizza className="w-3 h-3 mr-2" />
                PURPOSE-BUILT FOR PIZZERIAS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Pizza POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                POS software engineered around how pizzerias actually work — visual builder, size matrix, topping pricing, kitchen tickets, and delivery management in one system.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Visual pizza builder with split-side toppings</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Size and topping pricing matrix</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pizza POS software from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Pizza POS Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Software features designed specifically for pizza preparation, pricing, and delivery workflows.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Pizzerias Choose Posso Software</h2>
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
                Software That Thinks in Pizzas
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most POS software treats a pizza as a flat menu item with modifiers bolted on. Posso pizza POS software treats a pizza as what it actually is — a <strong className="text-white">configurable product with a size, crust, sauce, and topping layer</strong> where every combination affects pricing. The difference shows in speed, accuracy, and kitchen clarity.
                </p>
                <p>
                  The visual builder guides order entry through a <strong className="text-white">logical sequence: size, crust, sauce, toppings</strong>. Staff cannot skip steps or forget to ask about crust type. The kitchen ticket prints every detail in a consistent format. Whether the order came from the phone, the counter, or your website, the kitchen sees the same structured specification.
                </p>
                <p>
                  For delivery operations, the software manages <strong className="text-white">zones, fees, driver assignment, and live tracking</strong> without needing a separate system. Dispatch sees every active order on one screen. Drivers update status from their phones. Customers get SMS notifications. One piece of software handles everything from order to doorstep.
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
                <Link href="/pizza-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Complete ePOS system</p>
                </Link>
                <Link href="/pizza-restaurant-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza Restaurant Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant management</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering site</p>
                </Link>
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">General POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pizza POS Software — Frequently Asked Questions" faqs={[
          { question: 'What makes pizza POS software different from regular POS?', answer: 'Pizza POS software treats each pizza as a configurable product with size, crust, sauce, and toppings — each affecting the price. Regular POS systems use flat modifiers that cannot handle size-based topping pricing or split-side orders natively. The visual builder, pricing matrix, and structured kitchen tickets are specific to how pizzerias operate.' },
          { question: 'Can I configure the size and topping pricing matrix?', answer: 'Yes. You set a base price per size (e.g. 10-inch £7.99, 14-inch £11.99, 18-inch £15.99) and a topping price per size (e.g. extra cheese £1.00 on small, £1.50 on large). The matrix supports unlimited sizes and unlimited toppings. Changes apply instantly across counter and online ordering.' },
          { question: 'Does it print detailed kitchen tickets?', answer: 'Yes. Each pizza ticket prints the full specification: size, crust type, sauce, every topping with portion size, split-side detail (left/right), and special instructions. Tickets are formatted for rapid reading so pizza makers can build without asking questions. Non-pizza items print on separate tickets if needed.' },
          { question: 'Can I manage deliveries from the same software?', answer: 'Yes. The delivery module includes zone drawing, fee configuration, minimum order values, driver management, and live order tracking. The dispatch screen shows all active orders with time elapsed. Drivers update delivery status from their phones. No separate delivery management system needed.' },
          { question: 'Does it support online ordering with pizza customisation?', answer: 'Yes. Your branded ordering website includes the full visual pizza builder. Customers select size, crust, sauce, toppings, and split sides. Orders flow directly into the POS and kitchen display. Low commission compared to aggregator platforms. Customers can save favourite orders for quick reordering.' },
          { question: 'How much does pizza POS software cost?', answer: 'Pizza POS software starts from £499 + VAT including the touchscreen terminal, pizza builder software, kitchen ticket printer, and delivery management module. Online ordering included at low commission. Finance available from £24.92 per week. Free setup, menu configuration, and staff training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
