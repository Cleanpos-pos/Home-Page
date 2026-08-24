import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Calendar, Users, ShoppingBag, CreditCard, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salon POS Software',
  description:
    'Salon POS Software with appointment booking, staff scheduling, product retail, client records, and integrated card payments. Built for hair salons, beauty salons, and spas. POS from £499 + VAT.',
  keywords: [
    'salon pos software',
    'salon pos system',
    'hair salon pos',
    'beauty salon pos',
    'salon till system',
    'salon epos',
    'salon booking system',
    'salon point of sale',
    'hair salon till',
    'salon pos software uk',
  ],
  alternates: {
    canonical: '/salon-pos-software',
  },
  openGraph: {
    title: 'Salon POS Software | Posso UK',
    description:
      'Salon POS Software with appointment booking, staff scheduling, product retail, and client records. POS from £499 + VAT.',
    url: 'https://www.posso.co.uk/salon-pos-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Salon POS Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Salon POS software with appointment booking, staff scheduling, product retail management, client records with service history, and integrated card payments for hair salons, beauty salons, and spas.',
    url: 'https://www.posso.co.uk/salon-pos-software',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Appointment booking with online self-booking',
      'Staff scheduling with commission tracking',
      'Product retail POS with barcode scanning',
      'Client records with service history and preferences',
      'Integrated contactless card payments',
      'Revenue reporting by service, staff, and product',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Salon POS Software', item: 'https://www.posso.co.uk/salon-pos-software' },
    ],
  },
];

const features = [
  { icon: Calendar, title: 'Appointment Booking', description: 'Book appointments at the desk or let clients book online. The appointment calendar shows each stylist or therapist with colour-coded time slots. Double bookings are prevented automatically. Reminders by SMS or email reduce no-shows by up to 30%.' },
  { icon: Users, title: 'Staff Scheduling & Commission', description: 'Set working hours for each team member, track services performed, and calculate commission automatically. See who is generating the most revenue, which services each stylist performs most, and how utilisation rates compare across the team.' },
  { icon: ShoppingBag, title: 'Product Retail', description: 'Sell shampoo, conditioner, styling products, and beauty items alongside services. Barcode scanning, stock management, and reorder alerts keep your retail shelves full. Track which stylist sells the most product — retail recommendations during a service are the highest-converting sales opportunity.' },
  { icon: Clock, title: 'Client Records', description: 'Every client has a profile with their service history, colour formula, preferences, and notes. When a regular walks in, the stylist sees their last cut, preferred products, and any notes from previous visits. Personal service builds loyalty and justifies premium pricing.' },
  { icon: CreditCard, title: 'Payment Processing', description: 'Card, contactless, Apple Pay, Google Pay, and cash all accepted. Combine service and product charges on one bill. Split payments between two cards. Take deposits at booking to reduce no-shows. Tipping on card is supported with a prompt on the payment terminal.' },
  { icon: BarChart3, title: 'Business Reporting', description: 'Revenue by service type, by stylist, by day, and by product. Track average service value, client retention rate, and new client acquisition. Compare month-on-month performance. The data shows where your salon is growing and where there are opportunities to improve.' },
];

const benefits = [
  { title: 'Reduce No-Shows', description: 'No-shows cost salons thousands per year in lost revenue. Automated appointment reminders via SMS and email reduce no-shows by up to 30%. Online booking with card-on-file means clients commit financially when they book. Late cancellation fees can be charged automatically.' },
  { title: 'Grow Product Revenue', description: 'Salons that track product sales by stylist consistently sell more retail. When each stylist can see their product sales alongside their service revenue, product recommendations become part of every appointment. The POS makes ringing up products alongside services seamless.' },
  { title: 'Know Your Clients', description: 'Client records with service history, colour formulas, and preferences turn every appointment into a personalised experience. Clients feel remembered and valued. Stylists reference previous services without relying on memory. This personal touch is what keeps clients coming back instead of trying the salon down the road.' },
  { title: 'Staff Performance Visibility', description: 'Commission tracking, service counts, and client retention by stylist give you the data to manage your team effectively. Reward high performers, identify training needs, and set targets based on real performance data rather than guesswork.' },
];

export default function SalonPosSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Salon POS Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Calendar className="w-3 h-3 mr-2" />
                APPOINTMENTS, RETAIL & CLIENT RECORDS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Salon POS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Appointment booking, staff scheduling, product retail, client records, and card payments — everything a salon needs in one system. Book, serve, sell, and track.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Online booking reduces no-shows by 30%</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Client records with service history & formulas</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Salon POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Salon POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Booking, service, retail, and client management — everything a salon needs in one place.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Salons Choose Posso</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">For Every Type of Salon</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Hair salons</strong> need appointment management, colour formula records, and product retail. The Posso POS stores each client's colour history, preferred stylist, and product purchases. When a regular books in, the stylist has everything they need on screen.
                </p>
                <p>
                  <strong className="text-white">Beauty salons and spas</strong> need multi-service bookings, treatment room scheduling, and longer appointment slots. A client booking a facial, massage, and manicure gets three services scheduled back-to-back with the right therapist and room for each.
                </p>
                <p>
                  <strong className="text-white">Multi-site salon groups</strong> manage all locations from one cloud dashboard. Clients can book at any branch. Staff schedules, product stock, and revenue reporting work across the entire group. Standardise pricing or allow location-specific rates — you control the balance.
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
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Full POS features</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Contactless payments</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Booking</p>
                  <p className="text-slate-400 text-sm mt-1">Self-service booking</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Compare options</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Salon POS Software — Frequently Asked Questions" faqs={[
          { question: 'Can clients book appointments online?', answer: 'Yes. Clients book through your online booking page — select a service, choose a stylist or therapist, pick a time slot, and confirm. The appointment appears in your calendar immediately. Clients receive confirmation and reminder messages. Online booking reduces phone calls and fills gaps in the schedule.' },
          { question: 'How does the client record system work?', answer: 'Every client has a profile storing their service history, colour formulas, product purchases, preferences, and notes. When a client arrives, the stylist pulls up their profile and sees exactly what was done last time. Notes like "prefers shorter on the sides" or "sensitive scalp" help deliver consistently personal service.' },
          { question: 'Does it track staff commission?', answer: 'Yes. Set commission rates per staff member — percentage of services, percentage of product sales, or fixed amounts per service. The POS calculates commission automatically based on services performed and products sold. Commission reports show each team member\'s earnings for the period.' },
          { question: 'Can I sell retail products alongside services?', answer: 'Yes. Barcode scan products at the till to add them to the service bill. Track stock levels, set reorder points, and see which products sell best. Reports show product sales by stylist so you can identify who is best at retail and share their approach with the team.' },
          { question: 'How do appointment reminders reduce no-shows?', answer: 'Automated SMS and email reminders are sent before the appointment — typically 24 hours and 2 hours before. Clients can confirm or reschedule directly from the message. Salons using reminders see no-show rates drop by 25-30%, recovering thousands in lost revenue per year.' },
          { question: 'How much does salon POS software cost?', answer: 'The salon POS starts from £499 + VAT including appointment booking, client records, product retail, staff management, and card payment integration. Online booking is included. No per-booking fees. Free setup, service import, and training with a 2-year warranty. Finance from £24.92 per week.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
