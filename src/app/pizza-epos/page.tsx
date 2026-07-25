import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Pizza, Layers, SplitSquareHorizontal, MapPin, Globe, DollarSign } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pizza ePOS',
  description:
    'Pizza ePOS with visual pizza builder, size-based pricing, split-side toppings, delivery zone management, and online ordering integration. Built for pizzerias. From £499 + VAT.',
  keywords: [
    'pizza epos',
    'pizza epos system',
    'pizza pos system',
    'pizza shop epos',
    'pizza ordering system',
    'pizzeria epos',
    'pizza builder pos',
    'pizza delivery epos',
    'pizza till system',
    'pizza epos uk',
  ],
  alternates: {
    canonical: '/pizza-epos',
  },
  openGraph: {
    title: 'Pizza ePOS | Posso UK',
    description:
      'Pizza ePOS with visual builder, size pricing, split sides, delivery zones, and online ordering. Built for pizzerias.',
    url: 'https://www.posso.co.uk/pizza-epos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Pizza ePOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Pizza-specific ePOS system with visual pizza builder, size-based pricing matrix, split-side topping support, delivery zone management, and integrated online ordering for pizzerias.',
    url: 'https://www.posso.co.uk/pizza-epos',
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
      reviewCount: '198',
      bestRating: '5',
    },
    featureList: [
      'Visual pizza builder with topping preview',
      'Size-based pricing matrix across all products',
      'Split-side topping support (half and half)',
      'Delivery zone management with fee tiers',
      'Integrated online ordering with pizza customisation',
      'Kitchen display with full pizza specifications',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Pizza ePOS', item: 'https://www.posso.co.uk/pizza-epos' },
    ],
  },
];

const features = [
  { icon: Pizza, title: 'Visual Pizza Builder', description: 'Build pizzas step by step on a visual interface. Select base size, choose crust type, pick sauce, then add toppings from a categorised list. The price updates in real time as each option is selected. Staff and online customers use the same builder — consistency across every ordering channel.' },
  { icon: DollarSign, title: 'Size-Based Pricing Matrix', description: 'Set different prices for each size across your entire menu. A 9-inch Margherita at £6.99, 12-inch at £9.99, 14-inch at £12.99, 18-inch at £15.99. Toppings also price by size — extra mozzarella is £1 on a 9-inch, £1.50 on a 14-inch. The matrix handles it all without manual price lookups.' },
  { icon: SplitSquareHorizontal, title: 'Split-Side Toppings', description: 'Customers want pepperoni on one half and mushrooms on the other. The pizza builder supports half-and-half toppings natively. Each side is priced independently. The kitchen display shows the full split specification clearly so there is no confusion about which toppings go where.' },
  { icon: MapPin, title: 'Delivery Zone Management', description: 'Define delivery areas on a map with radius or custom-drawn zones. Set delivery charges per zone — free within 1 mile, £2 within 3 miles, £4 within 5 miles. Set minimum order values per zone. Postcodes outside your delivery area are declined automatically with a collection suggestion.' },
  { icon: Globe, title: 'Online Pizza Ordering', description: 'Your branded website features the same pizza builder customers see in-store. Choose size, crust, sauce, toppings — with split-side support. Orders flow directly to your POS and kitchen display. No phone calls, no manual re-entry. Collection or delivery with real-time estimated prep times.' },
  { icon: Layers, title: 'Kitchen Display System', description: 'Every pizza order appears on the kitchen display with the full specification: size, crust, sauce, toppings (including split sides), and any special instructions. Orders are colour-coded by priority. A prep timer tracks each order. The kitchen works through the queue systematically without handwritten tickets.' },
];

const benefits = [
  { title: 'Handle Complex Orders Accurately', description: 'The pizza builder forces a structured order: size first, then crust, sauce, toppings. No ambiguity. A 14-inch stuffed crust with BBQ sauce, pepperoni and jalapeños on the left, chicken and sweetcorn on the right — the kitchen display shows it exactly as ordered. Zero interpretation required.' },
  { title: 'Maximise Revenue Per Order', description: 'Size-based pricing and upsell prompts increase average order value. When a customer selects a 9-inch, the system suggests the 12-inch for just £3 more. Extra toppings are one tap away. Meal deals combine pizza, sides, and drinks at a set price. Every order has opportunities to add more.' },
  { title: 'Grow Direct Online Orders', description: 'Your branded online ordering site with full pizza customisation gives customers a better experience than third-party apps. With low commission compared to 35% on delivery platforms, every direct order means significantly more profit. Promote your website URL on boxes, receipts, and flyers.' },
  { title: 'Streamline Delivery Operations', description: 'Zone management, order tracking, and driver assignment keep delivery efficient as volume grows. See all active orders on one screen — in prep, ready, out for delivery, delivered. Track driver availability and average delivery times. Scale from 30 deliveries a night to 100 without chaos.' },
];

export default function PizzaEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Pizza ePOS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Pizza className="w-3 h-3 mr-2" />
                PIZZA-SPECIFIC ePOS SYSTEM
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Pizza{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ePOS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Visual pizza builder, size pricing, split-side toppings, delivery zones, and online ordering — an ePOS built specifically for how pizzerias work.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Visual pizza builder with half-and-half support</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Size-based pricing across your full menu</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Pizza ePOS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Pizza ePOS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every feature designed around the way pizzerias actually take, make, and deliver orders.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Pizzerias Choose Posso ePOS</h2>
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
                An ePOS That Understands Pizza
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Generic POS systems treat a pizza like any other menu item. The Posso pizza ePOS understands that a pizza is a <strong className="text-white">configurable product with sizes, crusts, sauces, and toppings</strong> — each affecting the price. The system is built around this complexity so ordering is fast and accurate.
                </p>
                <p>
                  Whether orders arrive by <strong className="text-white">phone, counter, website, or delivery app</strong>, they all flow through the same pizza builder logic. The kitchen receives a consistent, structured specification for every pizza. No handwritten tickets with ambiguous abbreviations.
                </p>
                <p>
                  For pizzerias running delivery, the ePOS manages <strong className="text-white">zones, fees, drivers, and tracking</strong> alongside the kitchen workflow. One system handles everything from the first tap on the screen to the doorstep delivery. No separate tools, no manual coordination.
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
                <Link href="/pizza-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Full pizza POS</p>
                </Link>
                <Link href="/pizza-delivery-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza Delivery POS</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery management</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering site</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Pizza ePOS — Frequently Asked Questions" faqs={[
          { question: 'How does the visual pizza builder work?', answer: 'The builder walks through each step: select size (9", 12", 14", 18"), choose crust type (classic, thin, stuffed, deep pan), pick sauce (tomato, BBQ, garlic), then add toppings from a categorised list. Split-side toppings are supported — different toppings on each half. The price updates live at each step. The kitchen display receives the complete specification.' },
          { question: 'Can I set different prices by size?', answer: 'Yes. The pricing matrix lets you set a base price per size and a topping price per size. So a Pepperoni pizza might be £7.99 for 9-inch, £10.99 for 12-inch, £13.99 for 14-inch, and £17.99 for 18-inch. Extra toppings also scale by size. The system calculates the total automatically — no manual price lookups needed.' },
          { question: 'Does it handle split-side (half and half) pizzas?', answer: 'Yes. The pizza builder supports selecting different toppings for each half. Each side is priced independently based on the toppings chosen. The kitchen display shows the left and right side toppings clearly so the pizza maker knows exactly what goes where. Online ordering customers can use the same split-side feature.' },
          { question: 'Can customers order online with the pizza builder?', answer: 'Yes. Your branded website includes the same pizza builder with full customisation. Customers choose size, crust, sauce, toppings, and split sides — then select collection or delivery. Orders flow directly to your POS and kitchen display. Low commission compared to 35% on third-party delivery platforms.' },
          { question: 'Does it manage delivery zones?', answer: 'Yes. Draw delivery zones on a map and set delivery charges and minimum order values per zone. Postcodes outside your zones are declined automatically. The system suggests collection as an alternative. Zone settings can be adjusted by time of day — for example, reducing your delivery radius during peak hours.' },
          { question: 'How much does the pizza ePOS cost?', answer: 'The pizza ePOS starts from £499 + VAT including touchscreen terminal, pizza builder software, and kitchen display. Online ordering with pizza customisation is included at low commission. Finance from £24.92 per week. Free setup, full menu import, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
