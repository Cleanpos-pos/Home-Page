import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, MessageSquare, UserCheck, ClipboardList, Repeat, PhoneCall, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Text Ordering System',
  description:
    'Text Ordering System with SMS order placement, caller ID integration, phone order management, repeat order recall, and kitchen display routing. From £499 + VAT.',
  keywords: [
    'text ordering system',
    'sms ordering system',
    'text to order system',
    'phone ordering system',
    'sms food ordering',
    'text message ordering',
    'caller id ordering',
    'phone order management',
    'text ordering system uk',
    'sms order system restaurant',
  ],
  alternates: {
    canonical: '/text-ordering-system',
  },
  openGraph: {
    title: 'Text Ordering System',
    description:
      'Text Ordering System with SMS order placement, caller ID integration, phone order management, repeat order recall, and kitchen display routing.',
    url: 'https://www.posso.co.uk/text-ordering-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Text Ordering System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Text ordering system with SMS-based order placement, caller ID customer recognition, phone order management, repeat order recall, kitchen display routing, and order confirmation messaging.',
    url: 'https://www.posso.co.uk/text-ordering-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '134',
      bestRating: '5',
    },
    featureList: [
      'SMS text-based order placement',
      'Caller ID customer recognition',
      'Phone order management screen',
      'Repeat order one-tap recall',
      'Kitchen display routing',
      'Automated order confirmation SMS',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Text Ordering System', item: 'https://www.posso.co.uk/text-ordering-system' },
    ],
  },
];

const features = [
  { icon: MessageSquare, title: 'SMS Order Placement', description: 'Customers text their order to your dedicated number. The system parses the message, matches items to your menu, and creates an order in the POS. A confirmation text goes back with the order summary, total, and estimated collection or delivery time. Customers who do not want to use an app or website can order with a simple text message.' },
  { icon: UserCheck, title: 'Caller ID Recognition', description: 'When a customer calls to place an order, their phone number is matched to their account instantly. The POS displays their name, address, previous orders, and any notes. Your staff greet them by name and can say "Same as last time?" before the customer has finished speaking. Faster service, fewer errors, better experience.' },
  { icon: ClipboardList, title: 'Phone Order Management', description: 'A dedicated phone order screen on the POS lets your staff build orders while on the call. Large buttons, quick-add favourites, and a running total visible at all times. The order is confirmed verbally, then sent to the kitchen display with one tap. No paper pads, no illegible handwriting, no missed items.' },
  { icon: Repeat, title: 'One-Tap Repeat Orders', description: 'Regular customers often order the same thing. The system stores their order history and surfaces their most common orders at the top of the screen. One tap reorders their usual — a large margherita, garlic bread, and a Coke, for example. The entire phone call takes 30 seconds instead of three minutes.' },
  { icon: PhoneCall, title: 'Automated Confirmation Messages', description: 'After every order — whether placed by text, phone, or online — the customer receives an SMS confirmation. It includes the order summary, total price, and estimated ready time. When the order is ready for collection or out for delivery, a second message is sent. Customers always know where their order stands.' },
  { icon: BarChart3, title: 'Phone Order Analytics', description: 'Track how many orders come through text, phone, and online channels. See peak calling times so you staff the phones accordingly. Identify your most frequent phone customers and their average order value. Understand which channel drives the most revenue and where to focus your marketing.' },
];

const benefits = [
  { title: 'Serve Customers Who Avoid Apps', description: 'Not every customer wants to download an app or navigate a website. Older customers, busy tradespeople, and people driving prefer to call or text. A text ordering system captures this segment — customers who would otherwise phone a competitor or simply not order at all.' },
  { title: 'Speed Up Phone Orders by 60%', description: 'Caller ID recognition and repeat order recall cut the average phone order from three minutes to under one. Staff spend less time on each call, which means fewer missed calls during peak periods. More calls answered means more orders taken means more revenue.' },
  { title: 'Eliminate Order Errors', description: 'Orders entered directly into the POS from the phone order screen or parsed from SMS are accurate and legible. No misread handwriting, no forgotten items, no wrong addresses. The kitchen display shows exactly what was ordered. Error rates drop, customer satisfaction rises.' },
  { title: 'Keep Every Channel in One System', description: 'Text orders, phone orders, walk-in orders, and online orders all flow into the same POS and the same kitchen display. One queue, one system, one set of reports. Your team does not juggle separate platforms or manually re-enter orders from different sources.' },
];

export default function TextOrderingSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Text Ordering System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <MessageSquare className="w-3 h-3 mr-2" />
                SMS &amp; PHONE ORDER MANAGEMENT
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Text Ordering{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Customers text or call to order. Caller ID pulls up their history. Repeat orders recalled in one tap. Confirmation SMS sent automatically. Every order flows straight to the kitchen display.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> SMS ordering with automated confirmation</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Caller ID recognition with order history</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Text &amp; Phone Ordering Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Manage SMS orders, phone orders, and caller ID recognition from one POS system.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Text Ordering</h2>
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
                Phone and Text Orders Still Drive Takeaway Revenue
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Despite the rise of apps and online ordering, <strong className="text-white">phone calls remain the number one order channel</strong> for many takeaways, fish and chip shops, and local restaurants. Customers call because it is quick, familiar, and requires no account setup. A text ordering system meets these customers where they already are.
                </p>
                <p>
                  Caller ID transforms the phone order experience. When a regular calls, <strong className="text-white">their name, address, and last three orders appear on screen</strong> before your staff even say hello. "Hi John, same as usual?" — that is the kind of service that creates a loyal customer for life. And it takes 30 seconds instead of three minutes.
                </p>
                <p>
                  SMS ordering adds another channel for customers who <strong className="text-white">cannot call but do not want to use an app</strong>. A builder on a noisy site, a driver between stops, a parent with a sleeping baby — they text their order and get a confirmation back. Simple, accessible, and effective.
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
                <Link href="/takeaway-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway POS</p>
                  <p className="text-slate-400 text-sm mt-1">Complete takeaway system</p>
                </Link>
                <Link href="/food-delivery-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery order management</p>
                </Link>
                <Link href="/restaurant-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant system</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Text Ordering System — FAQ" faqs={[
          { question: 'How does SMS ordering work?', answer: 'Customers send a text message to your dedicated ordering number. The system matches the items mentioned to your menu and creates an order. A confirmation SMS is sent back with the order summary, total, and estimated time. If the message is unclear, the system texts back asking for clarification. All orders appear on your POS and kitchen display.' },
          { question: 'Do I need a special phone number for text orders?', answer: 'We provide a dedicated virtual number for your text ordering service. Customers text this number to order. Your existing phone number continues to handle voice calls. Both channels feed into the same POS system. The virtual number is included in your subscription.' },
          { question: 'How does caller ID recognition work?', answer: 'When a customer calls, their phone number is matched against your customer database. If they have ordered before, their name, address, order history, and any notes appear on the POS screen instantly. Your staff can greet them by name and recall previous orders in one tap. New callers are added to the database after their first order.' },
          { question: 'Can customers reorder their usual by text?', answer: 'Yes. Customers can text "usual" or "same as last time" and the system recalls their most recent order. A confirmation SMS lists the items and total. The customer replies to confirm, and the order goes to the kitchen. Regular customers can place a repeat order in under 30 seconds.' },
          { question: 'Does this work alongside online ordering?', answer: 'Yes. Text orders, phone orders, online orders, and walk-in orders all flow into the same POS system and kitchen display. One unified queue, one set of reports. Your team manages all channels from a single screen. There is no need for separate systems or manual re-entry.' },
          { question: 'What does the text ordering system cost?', answer: 'The POS system starts from £499 + VAT including the text ordering module, caller ID integration, phone order screen, and kitchen display connection. SMS costs are minimal — a few pence per message. Low commission on orders. Setup, training, and a 2-year warranty are included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
