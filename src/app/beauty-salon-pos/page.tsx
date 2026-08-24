import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Sparkles, Calendar, Users, ShoppingBag, Heart, Globe } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beauty Salon POS',
  description:
    'Beauty Salon POS with treatment booking, staff scheduling, client records, retail product sales, loyalty programmes, and online booking. Purpose-built for salons. From £499 + VAT.',
  keywords: [
    'beauty salon pos',
    'salon pos system',
    'beauty salon till system',
    'salon epos',
    'beauty pos system',
    'hair and beauty pos',
    'salon booking system',
    'beauty salon software',
    'salon till system uk',
    'beauty salon epos',
  ],
  alternates: {
    canonical: '/beauty-salon-pos',
  },
  openGraph: {
    title: 'Beauty Salon POS | Posso UK',
    description:
      'Beauty Salon POS with treatment booking, staff scheduling, client records, retail sales, and loyalty. Built for salons.',
    url: 'https://www.posso.co.uk/beauty-salon-pos',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Beauty Salon POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Beauty salon POS system with treatment booking, staff scheduling, client records, retail product management, loyalty programmes, and online booking integration for salons.',
    url: 'https://www.posso.co.uk/beauty-salon-pos',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Treatment menu with duration and pricing',
      'Staff scheduling and rota management',
      'Client records with treatment history',
      'Retail product sales and stock tracking',
      'Loyalty programmes and reward points',
      'Online booking integration',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Beauty Salon POS', item: 'https://www.posso.co.uk/beauty-salon-pos' },
    ],
  },
];

const features = [
  { icon: Sparkles, title: 'Treatment Menu Management', description: 'Build your full treatment menu with service names, durations, and prices. Group treatments by category — nails, facials, lashes, waxing, massage. Each treatment has a set duration so booking slots are allocated correctly. Add-on treatments like a scalp massage or conditioning treatment attach to the main service with their own timing and pricing.' },
  { icon: Calendar, title: 'Staff Scheduling & Rotas', description: 'Set working hours, break times, and days off for every team member. The booking calendar only shows available slots based on each stylist or therapist\'s schedule. When a staff member calls in sick, block their column and the system stops accepting bookings for them. View the full week\'s rota in one screen and publish it to your team.' },
  { icon: Users, title: 'Client Records & History', description: 'Every client has a profile with their full treatment history, product preferences, allergy notes, and contact details. When a regular client books, the therapist sees their last three treatments and any notes from previous visits. Record patch test dates for tinting and lash services. Flag clients with specific allergies or sensitivities so staff are alerted before each appointment.' },
  { icon: ShoppingBag, title: 'Retail Product Sales', description: 'Sell shampoos, serums, skincare, and styling products alongside your treatments. The POS tracks stock levels automatically — when a product sells, the count updates in real time. Set reorder alerts so you never run out of your best sellers. Link product recommendations to specific treatments so your team can suggest the right aftercare at checkout.' },
  { icon: Heart, title: 'Loyalty Programme', description: 'Reward repeat clients with points for every pound spent on treatments and products. Points accumulate automatically and can be redeemed against future bookings or retail purchases. Set bonus point promotions for quiet periods — double points on Tuesdays, for example. The dashboard shows your top 50 clients by spend and visit frequency so you can nurture your most valuable relationships.' },
  { icon: Globe, title: 'Online Booking Integration', description: 'Clients book appointments through your website or a branded booking page. They select their treatment, preferred therapist, and available time slot. The booking syncs instantly with your salon calendar — no double bookings, no phone tag. Automated confirmations and reminders go out by SMS or email. Reduce no-shows with a 24-hour reminder that includes a cancellation link.' },
];

const benefits = [
  { title: 'Fill Your Appointment Book', description: 'Online booking captures appointments 24/7, even when you are closed. Clients book at 10pm on a Sunday for Monday morning. Automated reminders reduce no-shows by up to 40%. Every empty slot is revenue lost — the booking system keeps your columns full without you chasing clients by phone.' },
  { title: 'Know Every Client Personally', description: 'Client records give your team the information they need before each appointment. Allergy notes, preferred products, treatment history, and personal preferences are all visible. A new team member can deliver the same personalised service as your most experienced therapist because the information is in the system, not in someone\'s memory.' },
  { title: 'Grow Retail Revenue', description: 'Product recommendations linked to treatments mean your team suggests the right aftercare every time. Stock tracking ensures popular products are always available. The POS shows retail as a percentage of total revenue so you can set targets and track progress. Salons using linked recommendations see retail sales increase by 25% on average.' },
  { title: 'Build Long-Term Client Loyalty', description: 'The loyalty programme gives clients a tangible reason to return. Points for every visit and purchase create a reward cycle that keeps clients coming back. Targeted promotions for lapsed clients — those who haven\'t visited in 6 weeks — bring them back before they find another salon. Retention is cheaper than acquisition.' },
];

export default function BeautySalonPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Beauty Salon POS' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Sparkles className="w-3 h-3 mr-2" />
                BUILT FOR BEAUTY SALONS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Beauty Salon{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  POS
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Treatment booking, staff scheduling, client records, retail product sales, loyalty rewards, and online booking — one system built specifically for beauty salons.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full treatment menu with durations and pricing</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Client records with allergy notes and history</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Beauty salon POS from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Beauty Salon POS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every feature designed around how beauty salons actually operate — from booking to checkout.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                From Solo Therapists to Multi-Chair Salons
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A solo beautician needs a system that handles <strong className="text-white">bookings, payments, and client records</strong> without complexity. The Posso beauty salon POS gives you a single screen to manage your day — see your appointments, take payments, and record treatment notes in one place.
                </p>
                <p>
                  For multi-chair salons, the <strong className="text-white">staff scheduling module</strong> manages rotas across your whole team. Each therapist has their own column in the booking diary. Walk-in clients are allocated to whoever has the next available slot. The dashboard shows revenue per therapist so you can track performance and set commission targets.
                </p>
                <p>
                  Add <strong className="text-white">online booking</strong> and your clients book their next appointment the moment they leave the salon — or at midnight when they remember they need their lashes done. Automated reminders reduce no-shows, and the booking page works on any phone without an app download.
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
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/touch-screen-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Touch Screen Till</p>
                  <p className="text-slate-400 text-sm mt-1">15" capacitive display</p>
                </Link>
                <Link href="/hospitality-software-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Hospitality Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full UK hospitality tech</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Beauty Salon POS — Frequently Asked Questions" faqs={[
          { question: 'Can I manage treatment bookings and payments in one system?', answer: 'Yes. The Posso beauty salon POS combines your appointment diary, treatment menu, payment processing, and client records in a single system. When a client arrives, you see their booking, take payment at checkout, and the treatment is recorded to their profile automatically. No separate booking software needed.' },
          { question: 'How does staff scheduling work?', answer: 'Set working hours, break times, holidays, and days off for each team member. The booking calendar only offers appointment slots when the selected therapist is available. If someone calls in sick, block their column and all their bookings are flagged for rescheduling. View and publish the weekly rota from one screen.' },
          { question: 'Can I track retail product sales?', answer: 'Yes. Add your full retail range — shampoos, serums, skincare, tools — with stock counts and reorder levels. The POS tracks every sale and updates stock in real time. Link product recommendations to treatments so your team can suggest aftercare at checkout. Retail revenue is reported separately so you can set and track targets.' },
          { question: 'Does it support online booking?', answer: 'Yes. Clients book through your website or a branded booking page. They choose their treatment, preferred therapist, and time slot. Bookings sync instantly with your salon diary. Automated SMS and email confirmations go out immediately, with a reminder 24 hours before the appointment including a cancellation link to reduce no-shows.' },
          { question: 'How does the loyalty programme work?', answer: 'Clients earn points for every pound spent on treatments and products. Points accumulate automatically and can be redeemed against future services or retail purchases. You set the earn rate and redemption value. Run bonus point promotions during quiet periods. The dashboard shows your most loyal clients ranked by spend and visit frequency.' },
          { question: 'How much does a beauty salon POS cost?', answer: 'The complete beauty salon POS starts from £499 + VAT including the touchscreen terminal, booking module, client records, and loyalty programme. Online booking integration is included at no extra cost. Finance available from £24.92 per week. Free setup, treatment menu configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
