import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, QrCode, Clock, Users, Scan, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self Service ePOS',
  description:
    'Self Service ePOS with unattended ordering kiosks, QR code ordering, reduced staffing requirements, and 24/7 operation. Kiosks from £699 + VAT. Low commission.',
  keywords: [
    'self service epos',
    'self service pos',
    'self ordering kiosk',
    'self service kiosk',
    'unattended ordering',
    'qr code ordering',
    'self service till',
    'self checkout system',
    'self service ordering system',
    'self service epos uk',
  ],
  alternates: {
    canonical: '/self-service-epos',
  },
  openGraph: {
    title: 'Self Service ePOS | Posso UK',
    description:
      'Self Service ePOS with unattended ordering kiosks, QR code ordering, reduced staffing, and 24/7 operation.',
    url: 'https://www.posso.co.uk/self-service-epos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Self Service ePOS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Self service ePOS with unattended ordering kiosks, QR code ordering, reduced staffing requirements, and 24/7 operation for restaurants, retail, and hospitality.',
    url: 'https://www.posso.co.uk/self-service-epos',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '699',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '234',
      bestRating: '5',
    },
    featureList: [
      'Self-ordering touchscreen kiosks',
      'QR code table and takeaway ordering',
      'Unattended 24/7 operation capability',
      'Integrated contactless payment',
      'Kitchen display integration',
      'Upselling prompts and combo builders',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Self Service ePOS', item: 'https://www.posso.co.uk/self-service-epos' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Self-Ordering Kiosks', description: 'Freestanding touchscreen kiosks where customers browse the menu, customise their order, and pay — all without staff assistance. The order goes straight to the kitchen display. Kiosks handle queues during peak hours, freeing your team to focus on food preparation and service. A single kiosk replaces a counter position during the lunch rush.' },
  { icon: QrCode, title: 'QR Code Ordering', description: 'Customers scan a QR code at their table or at the entrance and order from their own phone. No app download required — the menu loads in the browser. They browse, customise, and pay. The order appears on the kitchen display instantly. QR ordering works for dine-in, takeaway, and collection. Zero hardware cost per table.' },
  { icon: Clock, title: '24/7 Unattended Operation', description: 'Kiosks and QR ordering can operate around the clock without staff presence. A vending-style food business, a hotel lobby snack bar, or a late-night takeaway counter can accept orders and payments at 3am. The system processes the order, takes payment, and sends it to the preparation area. Revenue generation continues when your team has gone home.' },
  { icon: Users, title: 'Reduced Staffing Requirements', description: 'Self-service ordering handles the transaction so your staff handle the product. A fast food restaurant with 3 counter staff can reduce to 1 while adding 2 kiosks. The kiosks never call in sick, never need breaks, and never make keying errors. Labour savings from even one fewer counter position pay for the kiosk within months.' },
  { icon: Scan, title: 'Upselling & Combo Prompts', description: 'The kiosk and QR ordering interface show upsell suggestions at the right moment. Ordering a burger? "Add chips and a drink for £2 more." The customer sees the offer on screen and taps to accept. No awkward verbal upsell from a rushed cashier. Digital upselling is consistent and increases average order value by 15 to 25 percent.' },
  { icon: ShieldCheck, title: 'Secure Contactless Payment', description: 'Every kiosk has an integrated contactless payment terminal. Customers tap their card, phone, or watch to pay. Chip and PIN is available for higher amounts. All transactions are PCI compliant and encrypted end-to-end. Payment is fast, secure, and friction-free. Low commission on every transaction through our Teya partnership.' },
];

const benefits = [
  { title: 'Cut Labour Costs Significantly', description: 'Every kiosk replaces a counter ordering position. A restaurant with 2 kiosks can redeploy 2 staff members from the counter to the kitchen, cleaning, or customer service. At minimum wage plus employer costs, saving one full-time counter position saves over £20,000 per year. The kiosk pays for itself in weeks.' },
  { title: 'Increase Average Order Value', description: 'Digital upselling works better than verbal upselling. The kiosk shows a visual prompt — "Make it a meal deal?" — with a photo and a clear price. Customers add extras without feeling pressured. Businesses using self-service kiosks see average order values increase by 15 to 25 percent compared to counter ordering.' },
  { title: 'Eliminate Queue Abandonment', description: 'When the queue is too long, customers leave. Kiosks absorb overflow during peak hours. Two kiosks and one counter position handle more customers than three counter positions alone because customers start ordering immediately instead of waiting. Shorter perceived wait times mean fewer walkouts and more completed transactions.' },
  { title: 'Operate Beyond Staffed Hours', description: '24/7 kiosk operation means you capture revenue when your competitors are closed. A late-night kebab shop, a hotel lobby, or a campus food outlet can serve customers at midnight or 6am without additional staffing. The kiosk takes the order, processes payment, and sends it to preparation.' },
];

export default function SelfServiceEposPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Self Service ePOS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                SELF-SERVICE ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Self Service{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ePOS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Unattended ordering kiosks, QR code ordering, reduced staffing, and 24/7 operation — let customers order and pay without staff assistance.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Self-ordering kiosks from £699 + VAT</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> QR code ordering with zero hardware cost</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Average order value increases 15-25%</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Self Service ePOS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Kiosks, QR ordering, and unattended operation — designed to reduce costs, increase order values, and serve more customers.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Self Service ePOS</h2>
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
                Kiosks, QR Codes, or Both — Your Choice
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Self-ordering kiosks</strong> are ideal for fast food, quick-service restaurants, and takeaways. The large touchscreen displays your menu with photos, descriptions, and prices. Customers tap to order, customise, and pay. The visual interface drives upselling naturally — customers see the extras and add them.
                </p>
                <p>
                  <strong className="text-white">QR code ordering</strong> is perfect for sit-down restaurants, cafes, and bars. Print a QR code on each table or at the entrance. Customers scan with their phone and order from their seat. No app download, no waiting for a server. The order goes straight to the kitchen. Low commission on every order.
                </p>
                <p>
                  Many businesses <strong className="text-white">use both together</strong>. Kiosks handle the takeaway queue while QR codes serve dine-in customers. Both channels feed into the same kitchen display. Staff focus entirely on preparation and service rather than taking orders. The result: faster service, fewer errors, and higher average order values across every channel.
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
                <Link href="/order-counter-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Counter POS</p>
                  <p className="text-slate-400 text-sm mt-1">Speed ordering systems</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/bespoke-epos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bespoke ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Custom-built software</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS</p>
                  <p className="text-slate-400 text-sm mt-1">Handheld POS devices</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Self Service ePOS — Frequently Asked Questions" faqs={[
          { question: 'How much does a self-ordering kiosk cost?', answer: 'Self-ordering kiosks start from £699 + VAT including the touchscreen hardware, kiosk software, integrated contactless payment terminal, and kitchen display integration. QR code ordering can be added at low commission per order with zero hardware cost. Finance options available. Free installation, menu setup, and training included.' },
          { question: 'Do customers need to download an app for QR ordering?', answer: 'No. QR code ordering works in the customer\'s mobile browser. They scan the code, the menu loads, they order and pay — all without downloading anything. This removes the biggest barrier to adoption. Works on any smartphone with a camera and a browser, which covers virtually every customer.' },
          { question: 'How much does self-service increase average order value?', answer: 'Businesses using self-service kiosks typically see average order values increase by 15 to 25 percent. The visual interface shows upsell prompts — "Add a drink for £1.50?" — with photos. Customers browse the full menu rather than ordering the first thing they see. The result is larger, more customised orders.' },
          { question: 'Can kiosks integrate with the kitchen display?', answer: 'Yes. Kiosk orders appear on the kitchen display alongside counter orders. The kitchen sees one unified queue regardless of where the order originated. Each order shows whether it came from the kiosk, the counter, or QR ordering. The kitchen works through them in sequence.' },
          { question: 'Is 24/7 unattended operation really possible?', answer: 'Yes, for businesses with the right setup. The kiosk handles ordering and payment. If food preparation is automated or pre-prepared, the operation can run without staff. Hotels, campus food outlets, and vending-style businesses use unattended kiosks overnight. The system monitors itself and alerts you to any issues.' },
          { question: 'Can I combine kiosks with a staffed counter?', answer: 'Yes. Most businesses use kiosks alongside a staffed counter. The kiosks handle overflow during peak periods and tech-savvy customers who prefer self-service. The staffed counter handles customers who want personal service, complex orders, or need assistance. Both channels feed into the same kitchen and reporting system.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
