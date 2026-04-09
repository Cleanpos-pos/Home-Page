import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, CalendarDays, Sparkles, ShoppingBag, Users, ClipboardList, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nail Salon POS',
  description:
    'Nail Salon POS with appointment booking, treatment tracking, product retail, staff scheduling, and client records. Built for nail salons and beauty businesses. From £499 + VAT.',
  keywords: [
    'nail salon pos',
    'nail salon pos system',
    'nail bar pos',
    'nail salon till system',
    'nail salon epos',
    'beauty salon pos',
    'nail salon software',
    'nail salon booking system',
    'nail salon pos uk',
    'nail technician pos',
  ],
  alternates: {
    canonical: '/nail-salon-pos',
  },
  openGraph: {
    title: 'Nail Salon POS | Posso UK',
    description:
      'Nail Salon POS with appointments, treatment tracking, product retail, staff scheduling, and client records for nail salons.',
    url: 'https://posso.co.uk/nail-salon-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Nail Salon POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'POS system for nail salons with appointment booking, treatment tracking and timing, retail product sales, staff scheduling and commission, and client record management.',
    url: 'https://posso.co.uk/nail-salon-pos',
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
      reviewCount: '167',
      bestRating: '5',
    },
    featureList: [
      'Online and in-salon appointment booking',
      'Treatment tracking with timing',
      'Retail product sales at checkout',
      'Staff scheduling and commission tracking',
      'Client records with treatment history',
      'Automated appointment reminders',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Nail Salon POS', item: 'https://posso.co.uk/nail-salon-pos' },
    ],
  },
];

const features = [
  { icon: CalendarDays, title: 'Appointment Booking', description: 'Clients book online or you book from the POS. The calendar shows every technician, every time slot, and every treatment duration. Double-booking is prevented automatically. Clients select their preferred technician and treatment, see available times, and confirm in seconds. Walk-ins are added to the calendar in real time alongside pre-booked appointments.' },
  { icon: Sparkles, title: 'Treatment Tracking', description: 'Every treatment has a defined duration, price, and product requirement. A gel manicure is 45 minutes and uses specific products. The POS tracks which treatments are performed, by whom, and how long they take. If a technician consistently finishes 10 minutes early or late, you see it in the data. Treatment timing helps you schedule more accurately and maximise chair time.' },
  { icon: ShoppingBag, title: 'Retail Product Sales', description: 'Sell nail care products, polishes, hand creams, and accessories alongside treatments. The POS handles services and retail in one transaction — a gel set plus a cuticle oil and a nail file ring up on the same receipt. Stock management tracks retail inventory separately from treatment supplies. Product recommendations at checkout increase retail revenue by 15-25%.' },
  { icon: Users, title: 'Staff Scheduling & Commission', description: 'Build staff schedules in the POS and assign technicians to time slots. Each team member has their own calendar column. Commission structures are configurable: percentage of treatment value, flat rate per service, or tiered rates. The system calculates commission automatically at the end of each pay period. Staff see their own bookings and earnings on their login.' },
  { icon: ClipboardList, title: 'Client Records & History', description: 'Every client has a profile showing their treatment history, preferred technician, allergies, colour preferences, and special notes. When a regular arrives for their appointment, the technician sees their last treatment, the colours used, and any notes from previous visits. This personalisation turns a good service into an exceptional one that clients remember and recommend.' },
  { icon: BarChart3, title: 'Automated Reminders & Rebooking', description: 'Clients receive automated SMS or email reminders 24 hours before their appointment. After their visit, the system suggests a rebooking based on the treatment cycle — gel nails every 3 weeks, for example. Reminders reduce no-shows by up to 60%. Rebooking prompts keep your calendar full and your clients on a regular schedule.' },
];

const benefits = [
  { title: 'Fill Every Chair, Every Hour', description: 'The booking calendar shows gaps in real time. If a 2pm slot opens due to a cancellation, it immediately becomes available online. Clients searching for last-minute availability fill the gap without you making a single phone call. Automated rebooking prompts ensure regular clients stay on schedule. The result: fewer empty chairs and more revenue per day.' },
  { title: 'Increase Revenue With Retail', description: 'A client who buys a cuticle oil after their manicure adds £8-15 to a transaction that was already happening. The POS prompts the technician to recommend relevant products based on the treatment just performed. Over a month, even modest retail sales add a meaningful second revenue stream alongside services. Stock management ensures popular products never run out.' },
  { title: 'Reward Your Best Technicians', description: 'Commission tracking shows exactly how much each technician earns for the business. Your top performer who handles 8 clients per day and upsells retail products sees their contribution reflected in their pay. Fair, transparent commission motivates staff and reduces turnover. The system handles the calculation — no spreadsheets, no disputes.' },
  { title: 'Build Client Loyalty Through Personalisation', description: 'When a client arrives and the technician already knows their preferred shape, colour, and style, the service feels personal. Client records make this effortless — every preference, every note, every past treatment is visible before the appointment begins. Clients who feel known and valued come back more often and refer their friends.' },
];

export default function NailSalonPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Nail Salon POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Sparkles className="w-3 h-3 mr-2" />
                BUILT FOR NAIL SALONS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Nail Salon{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Appointment booking, treatment tracking, retail sales, staff scheduling, and client records — one POS system designed for nail salons and beauty businesses.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Online booking with technician selection</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Client records with treatment history</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Nail salon POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Nail Salon POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything a nail salon needs — appointments, treatments, retail, staff, and clients in one system.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Nail Salons Choose Posso</h2>
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
                More Than a Till — A Complete Salon System
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A nail salon is not just a shop — it is an <strong className="text-white">appointment-based business with unique scheduling demands</strong>. Every technician has different skills, different availability, and different client preferences. The Posso POS manages all of this from one screen: who is available, who is booked, and who is walking in.
                </p>
                <p>
                  <strong className="text-white">Client records</strong> transform the service experience. When a regular client sits down, the technician sees their last treatment, preferred colours, nail shape, and any allergies or sensitivities. There is no awkward "what did you have last time?" conversation. The service is personalised from the first moment.
                </p>
                <p>
                  The <strong className="text-white">retail module</strong> adds a second revenue stream that requires no additional labour. Products sell at checkout alongside treatments. The POS tracks retail stock separately from treatment supplies, so you know when to reorder hand creams without counting bottles manually. Retail adds 15-25% to monthly revenue for salons that actively promote it.
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
                <Link href="/epos-booking-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Booking System</p>
                  <p className="text-slate-400 text-sm mt-1">Booking management</p>
                </Link>
                <Link href="/dry-cleaning-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Dry Cleaning POS</p>
                  <p className="text-slate-400 text-sm mt-1">Service-based POS</p>
                </Link>
                <Link href="/custom-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Custom POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Tailored solutions</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Nail Salon POS — Frequently Asked Questions" faqs={[
          { question: 'Can clients book appointments online?', answer: 'Yes. The online booking page lets clients choose a treatment, select their preferred technician, pick an available time slot, and confirm the appointment. They receive automatic confirmation and a reminder 24 hours before. Walk-in clients are added to the calendar from the POS. Both booking types appear on the same schedule.' },
          { question: 'Does it track treatment history per client?', answer: 'Yes. Every client has a profile showing their complete treatment history: dates, treatments, technician, colours used, duration, and any notes. When a returning client is booked in, the assigned technician can review their history before the appointment begins. This enables personalised service without relying on memory.' },
          { question: 'Can I sell retail products through the POS?', answer: 'Yes. The POS handles services and retail products in one transaction. A gel manicure plus a cuticle oil and a hand cream all appear on the same receipt. Retail stock is tracked separately from treatment supplies. Low-stock alerts ensure popular products are always available. Product suggestions at checkout encourage add-on sales.' },
          { question: 'How does staff commission tracking work?', answer: 'Commission structures are configured per staff member or per role. Options include a percentage of treatment revenue, flat rate per service, tiered rates based on volume, and separate rates for retail sales. The system calculates commission automatically and generates pay period reports. Staff can see their own earnings through their login.' },
          { question: 'Does the system send appointment reminders?', answer: 'Yes. Automated reminders are sent 24 hours before the appointment by SMS or email. After the appointment, the system can prompt clients to rebook based on the treatment cycle. Reminders reduce no-shows by up to 60% and rebooking prompts keep your calendar consistently full.' },
          { question: 'How much does a nail salon POS cost?', answer: 'The nail salon POS starts from £499 + VAT including touchscreen terminal, booking software, client management, and retail sales module. Low commission on card transactions. Free setup, treatment and service configuration, and staff training included with a 2-year warranty. Call 0808 175 3956 for a demo.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
