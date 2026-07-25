import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, CalendarDays, CreditCard, Clock, Users, Bell, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS Booking System',
  description:
    'ePOS Booking System with table reservations, deposit collection, booking management, and calendar integration. Built for restaurants and hospitality. POS from £499 + VAT.',
  keywords: [
    'epos booking system',
    'pos booking system',
    'restaurant booking system',
    'table reservation pos',
    'booking management epos',
    'epos with reservations',
    'restaurant reservation system',
    'epos booking uk',
    'table booking pos',
    'hospitality booking system',
  ],
  alternates: {
    canonical: '/epos-booking-system',
  },
  openGraph: {
    title: 'ePOS Booking System | Posso UK',
    description:
      'ePOS Booking System with table reservations, deposits, calendar integration, and booking management for restaurants.',
    url: 'https://www.posso.co.uk/epos-booking-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS Booking System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'ePOS system with integrated table reservation management, deposit collection, booking calendar, and guest communication for restaurants and hospitality venues.',
    url: 'https://www.posso.co.uk/epos-booking-system',
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
      reviewCount: '189',
      bestRating: '5',
    },
    featureList: [
      'Table reservation management',
      'Deposit collection at booking',
      'Booking calendar with time slots',
      'Automated SMS and email reminders',
      'Walk-in and booking guest merging',
      'No-show tracking and reporting',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'ePOS Booking System', item: 'https://www.posso.co.uk/epos-booking-system' },
    ],
  },
];

const features = [
  { icon: CalendarDays, title: 'Table Reservation Management', description: 'Manage reservations from a visual floor plan. See which tables are booked, which are available, and which are currently occupied. Drag and drop to reassign tables. Set table capacity, combine tables for larger parties, and block tables for maintenance. The system prevents double-booking automatically and suggests optimal table assignments.' },
  { icon: CreditCard, title: 'Deposit Collection', description: 'Collect deposits at the time of booking to reduce no-shows. Set deposit amounts per person or per booking — £10 per head for Friday dinner, for example. Deposits are taken by card online during the booking flow. If the guest arrives, the deposit applies to their bill. If they no-show, you keep the deposit. No-show rates typically drop by 70%.' },
  { icon: Clock, title: 'Time Slot Management', description: 'Define booking time slots that match your service flow. Lunch slots from 12:00 to 14:30, dinner slots from 18:00 to 21:00. Set maximum covers per slot to prevent overbooking the kitchen. Control the interval between seatings — 15-minute gaps allow turnover without rushing guests. Each slot shows availability in real time on your booking page.' },
  { icon: Bell, title: 'Automated Reminders', description: 'Guests receive automatic confirmation when they book, a reminder 24 hours before their reservation, and a final reminder 2 hours before. Messages are sent by SMS or email — your choice. The reminder includes date, time, party size, and a link to modify or cancel. Fewer forgotten bookings means fewer empty tables and less wasted prep.' },
  { icon: Users, title: 'Walk-In & Booking Merging', description: 'Walk-in guests and pre-booked guests are managed on the same floor plan. When a walk-in arrives, see available tables instantly alongside upcoming reservations. The system shows you which tables will be free in 30 minutes if nothing is available right now. Manage the waitlist and notify walk-in guests by SMS when their table is ready.' },
  { icon: BarChart3, title: 'No-Show Analytics', description: 'Track no-show rates by day, time slot, and booking channel. Identify repeat no-show guests — the system flags customers who have failed to show up previously. Set policies: require deposits from flagged guests, or block booking for serial no-shows. The data helps you protect your revenue and optimise your booking strategy.' },
];

const benefits = [
  { title: 'Eliminate No-Shows With Deposits', description: 'A Friday night no-show for a table of 6 costs you revenue, wasted food prep, and a table that could have been given to someone else. Deposits change behaviour — when guests have paid £10 per head upfront, they show up. The deposit applies to their bill, so there is no extra cost for guests who honour their booking. No-show rates drop dramatically.' },
  { title: 'Maximise Covers Per Service', description: 'Time slot management and table assignment optimisation ensure you seat the maximum number of guests per service. The system suggests the best table for each booking based on party size, duration, and upcoming reservations. No more holding a table for 6 when a party of 2 could sit there and a 6-top is available elsewhere.' },
  { title: 'Reduce Phone Call Volume', description: 'An online booking page handles reservations 24/7 without staff picking up the phone. Guests book, modify, and cancel through a self-service interface. Automated confirmations and reminders reduce "just checking my booking" calls. Your front-of-house team spends time on guests in the room, not on the phone.' },
  { title: 'One System for Bookings and POS', description: 'The booking system is built into the POS — not a separate platform. When a booked guest arrives, their reservation links to their table and their bill. Pre-order information, dietary notes, and special requests appear on the kitchen display. No switching between booking software and your till. One system handles everything.' },
];

export default function EposBookingSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'ePOS Booking System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <CalendarDays className="w-3 h-3 mr-2" />
                BOOKINGS + POS COMBINED
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  ePOS Booking{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Table reservations, deposit collection, calendar management, and automated reminders — all built into your ePOS. One system for bookings and billing.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Deposits reduce no-shows by up to 70%</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Automated SMS and email reminders</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> ePOS booking system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">ePOS Booking Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Reservation management built into your point of sale — from booking to billing in one system.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Choose Posso Bookings</h2>
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
                Every Table Filled, Every Guest Expected
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A no-show on a Saturday night is not just a lost booking — it is <strong className="text-white">lost revenue that cannot be recovered</strong>. The ePOS booking system with deposits changes the economics of reservations. Guests who commit financially show up. Those who cannot make it cancel in advance, giving you time to reseat the table.
                </p>
                <p>
                  The <strong className="text-white">visual floor plan</strong> gives your front-of-house team complete visibility. They see every reservation, every walk-in, and every table status at a glance. When a guest arrives, they are seated within seconds. When a walk-in asks for a table, your team knows exactly what is available and when the next table opens.
                </p>
                <p>
                  Because bookings and POS are <strong className="text-white">one integrated system</strong>, the guest journey flows seamlessly from reservation to payment. Dietary notes entered at booking appear on the kitchen ticket. The deposit deducts from the final bill automatically. There is no data re-entry, no missed information, no disconnected systems.
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
                <Link href="/restaurant-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant Till System</p>
                  <p className="text-slate-400 text-sm mt-1">Restaurant POS</p>
                </Link>
                <Link href="/restaurant-pre-order-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pre-Order App</p>
                  <p className="text-slate-400 text-sm mt-1">Advance ordering</p>
                </Link>
                <Link href="/bespoke-epos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bespoke ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Custom solutions</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="ePOS Booking System — Frequently Asked Questions" faqs={[
          { question: 'How do deposits work with the booking system?', answer: 'When a guest books online, they are prompted to pay a deposit by card. You set the deposit amount — per person or per booking. The deposit is held and automatically applied to the final bill when the guest dines. If the guest no-shows without cancelling, the deposit is retained. This significantly reduces no-show rates.' },
          { question: 'Can guests book online without calling?', answer: 'Yes. The booking system includes an online reservation page that guests access from your website or a direct link. They select a date, time, party size, and enter their details. Deposits are collected during the booking flow. The system confirms instantly and sends automated reminders. No phone call required.' },
          { question: 'Does the booking system prevent double-booking?', answer: 'Yes. The system tracks table availability in real time. When a table is booked for a time slot, it is no longer available for that period. The system accounts for estimated dining duration so tables become available again at the right time. Double-booking is physically prevented by the software.' },
          { question: 'Can I manage walk-ins alongside bookings?', answer: 'Yes. Walk-in guests are added to the floor plan alongside pre-booked guests. If no tables are available, guests join a waitlist. The system estimates wait times based on current table occupancy and upcoming departures. When a table opens, the next guest on the waitlist receives an SMS notification.' },
          { question: 'Does it integrate with Google Calendar?', answer: 'The booking system syncs with your cloud dashboard where all reservations are visible in a calendar view. Booking data can be exported and integrated with external calendar systems. The primary management interface is the POS floor plan and calendar, designed specifically for restaurant operations.' },
          { question: 'How much does an ePOS booking system cost?', answer: 'The ePOS with integrated booking management starts from £499 + VAT including touchscreen terminal, booking software, floor plan management, and deposit collection. Low commission on online bookings. Free setup, floor plan configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
