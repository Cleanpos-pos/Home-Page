import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Users, UtensilsCrossed, Settings, LayoutGrid, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kiosk POS',
  description:
    'Kiosk POS combining self-service kiosk and counter POS in one system. Staff override mode, kitchen integration, and hybrid ordering for restaurants and takeaways. From £699 + VAT.',
  keywords: [
    'kiosk pos',
    'kiosk pos system',
    'kiosk point of sale',
    'self service kiosk pos',
    'kiosk and pos combined',
    'hybrid kiosk pos',
    'restaurant kiosk pos',
    'kiosk pos uk',
    'kiosk till system',
    'kiosk ordering system',
  ],
  alternates: {
    canonical: '/kiosk-pos',
  },
  openGraph: {
    title: 'Kiosk POS | Posso UK',
    description:
      'Kiosk POS combining self-service and counter ordering in one system. Staff override, kitchen integration, and hybrid operation.',
    url: 'https://www.posso.co.uk/kiosk-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Kiosk POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Hybrid kiosk POS system combining self-service ordering with counter-based point of sale. Features staff override mode, kitchen display integration, and unified order management.',
    url: 'https://www.posso.co.uk/kiosk-pos',
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
      reviewCount: '198',
      bestRating: '5',
    },
    featureList: [
      'Hybrid kiosk and counter POS mode',
      'Staff override with manager PIN',
      'Self-service and assisted ordering',
      'Kitchen display integration',
      'Unified order queue management',
      'Upselling prompts on kiosk screen',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Kiosk POS', item: 'https://www.posso.co.uk/kiosk-pos' },
    ],
  },
];

const features = [
  { icon: LayoutGrid, title: 'Hybrid Kiosk & Counter Mode', description: 'One device operates as both a self-service kiosk and a staff-operated POS. During quiet periods, customers order independently on the touchscreen. When the queue builds, a staff member steps in and switches to counter mode with a single tap. The same hardware serves both purposes — no duplicate equipment needed.' },
  { icon: ShieldCheck, title: 'Staff Override Mode', description: 'Managers and supervisors override kiosk mode with a secure PIN. This unlocks the full POS interface: refunds, discounts, order modifications, and reporting. Staff see the complete order history, adjust items mid-order, and process complex requests that a self-service screen cannot handle. The kiosk returns to customer mode automatically after a timeout.' },
  { icon: Users, title: 'Self-Service & Assisted Ordering', description: 'Customers browse the menu, customise items with modifiers, and pay by card — all without staff interaction. For customers who need help, a staff member can step alongside and guide them through the screen. The interface supports accessibility options: larger text, high-contrast mode, and simplified navigation for elderly or less tech-savvy users.' },
  { icon: UtensilsCrossed, title: 'Kitchen Display Integration', description: 'Orders placed at the kiosk and the counter feed into the same kitchen display system. The kitchen sees one unified queue regardless of where the order originated. Each ticket shows the source — kiosk or counter — so staff know whether the customer is waiting at a table or standing at the collection point.' },
  { icon: Monitor, title: 'Upselling & Meal Deal Prompts', description: 'The kiosk screen prompts customers to upgrade their order. Add a drink for £1.50, upgrade to large for 50p, or complete a meal deal. These prompts display at the right moment in the ordering flow — after the main item is selected but before payment. Businesses typically see a 15-25% increase in average order value from kiosk upselling.' },
  { icon: Settings, title: 'Unified Order Management', description: 'Every order — kiosk, counter, online, and phone — appears in one order management dashboard. Track order status from placed to prepared to collected. Assign order numbers that display on a customer-facing screen. Manage peak-time queues without losing track of who ordered what and where they are waiting.' },
];

const benefits = [
  { title: 'Serve More Customers With Fewer Staff', description: 'A kiosk handles orders while your staff focus on preparation and service. During a lunch rush, two kiosks and one staff member at the counter handle the same volume as three counter staff. Labour costs drop while throughput increases. The kiosk never calls in sick, never needs a break, and processes orders consistently every time.' },
  { title: 'Increase Average Order Value', description: 'Kiosk screens display upsell prompts that staff often forget or feel uncomfortable suggesting. "Add a side for £2.50?" appears on screen after every main item. Customers say yes more often to a screen than to a person. The data shows kiosk orders average 18% higher than counter orders — that is pure incremental revenue.' },
  { title: 'Reduce Order Errors to Near Zero', description: 'Customers select their own items, choose their own modifiers, and confirm before paying. There is no mishearing, no miscommunication, no illegible handwriting. The order arrives in the kitchen exactly as the customer intended. Fewer errors means fewer remakes, less food waste, and happier customers.' },
  { title: 'Flex Between Self-Service and Counter', description: 'Not every moment needs a kiosk and not every moment needs counter service. The hybrid mode means you adapt in real time. Quiet Tuesday afternoon? Kiosk mode handles the trickle of orders. Packed Friday evening? Switch to counter mode and staff take over. One investment covers both scenarios.' },
];

export default function KioskPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Kiosk POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                HYBRID KIOSK + POS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Kiosk{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Self-service kiosk and counter POS in one system. Customers order independently or staff take over with a single tap — hybrid ordering that adapts to your busy and quiet periods.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Switch between kiosk and counter mode instantly</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Kitchen display shows unified order queue</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Kiosk POS from £699 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Kiosk POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                One system that works as a self-service kiosk and a full counter POS — built for flexibility.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Kiosk POS</h2>
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
                The Best of Both Worlds
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most businesses face a choice: <strong className="text-white">install a kiosk or keep counter service</strong>. With Posso Kiosk POS, you do not have to choose. The same touchscreen operates in kiosk mode for self-service and switches to full POS mode when staff need to take over.
                </p>
                <p>
                  For <strong className="text-white">restaurants and takeaways</strong>, this means customers queue at the kiosk while staff handle phone orders and complex requests at the counter. Both order streams merge into one kitchen display — the kitchen does not care where the order came from.
                </p>
                <p>
                  The <strong className="text-white">upselling engine</strong> on the kiosk screen consistently increases average order value. Customers spend more when they browse visually and respond to upgrade prompts. Your staff focus on food quality and customer experience instead of taking orders.
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
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Ordering Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Dedicated self-service</p>
                </Link>
                <Link href="/self-serve-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self Serve Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Unattended ordering</p>
                </Link>
                <Link href="/self-service-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Service ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Self-service solutions</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Kiosk POS — Frequently Asked Questions" faqs={[
          { question: 'How does the hybrid kiosk/POS mode work?', answer: 'The touchscreen defaults to kiosk mode where customers browse the menu, select items, customise with modifiers, and pay by card. When a staff member enters their PIN, the screen switches to full POS mode with access to refunds, discounts, reporting, and order management. After a configurable timeout, it returns to kiosk mode automatically.' },
          { question: 'Can orders from the kiosk and counter go to the same kitchen?', answer: 'Yes. Orders from every source — kiosk, counter, online, and phone — feed into one unified kitchen display. The kitchen sees a single queue with each order labelled by source. Preparation priority and order sequencing work identically regardless of where the customer placed their order.' },
          { question: 'What happens if a customer needs help at the kiosk?', answer: 'A staff member can assist the customer directly at the kiosk screen without switching modes. For more complex requests, the staff member enters their PIN to access the full POS interface and handles the order from there. The system is designed for flexibility — not every customer interaction needs to be fully self-service.' },
          { question: 'Does the kiosk screen show upsell suggestions?', answer: 'Yes. After a customer selects a main item, the screen suggests complementary additions: drinks, sides, upgrades, and meal deal completions. These prompts are configurable — you choose which items trigger which suggestions and set the display timing. Businesses typically see a 15-25% lift in average order value.' },
          { question: 'Can I use the kiosk for table service?', answer: 'Yes. The kiosk can prompt customers to enter a table number after ordering. The kitchen display shows the table number on the ticket, and staff deliver the food. This works well for casual dining where customers order at the kiosk but sit at a table to eat.' },
          { question: 'How much does a kiosk POS system cost?', answer: 'Kiosk POS starts from £699 + VAT including the touchscreen terminal, kiosk and POS software, and kitchen display integration. Counter-only POS starts from £499 + VAT. Low commission on orders. Free setup, menu configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
