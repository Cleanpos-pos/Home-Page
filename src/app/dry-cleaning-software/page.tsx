import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Shirt, Tag, Users, Truck, MessageSquare, Clock } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dry Cleaning Software',
  description:
    'Dry Cleaning Software for garment tracking, ticket printing, customer records, pickup and delivery scheduling, and SMS notifications. Purpose-built for dry cleaners. From £499 + VAT.',
  keywords: [
    'dry cleaning software',
    'dry cleaning pos',
    'dry cleaner software',
    'laundry pos system',
    'dry cleaning management software',
    'garment tracking software',
    'dry cleaning till system',
    'laundry management system',
    'dry cleaning epos',
    'dry cleaning booking system',
  ],
  alternates: {
    canonical: '/dry-cleaning-software',
  },
  openGraph: {
    title: 'Dry Cleaning Software | Posso UK',
    description:
      'Dry Cleaning Software with garment tracking, ticket printing, customer records, and SMS notifications. Built for dry cleaners.',
    url: 'https://www.posso.co.uk/dry-cleaning-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Dry Cleaning Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Dry cleaning software with garment tracking, ticket printing, customer records, pickup and delivery scheduling, and SMS notifications for dry cleaners and laundry businesses.',
    url: 'https://www.posso.co.uk/dry-cleaning-software',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '187',
      bestRating: '5',
    },
    featureList: [
      'Garment tracking with barcode labels',
      'Thermal ticket and tag printing',
      'Customer records with order history',
      'Pickup and delivery scheduling',
      'Automated SMS notifications',
      'Multi-branch management dashboard',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Dry Cleaning Software', item: 'https://www.posso.co.uk/dry-cleaning-software' },
    ],
  },
];

const features = [
  { icon: Shirt, title: 'Garment Tracking', description: 'Every garment receives a unique barcode label at intake. Scan it at each stage — received, cleaning, pressing, ready, collected. Staff see exactly where every item is in the process. Customers never wait while you search for their order. A shop handling 200 garments per day stays organised without a single lost ticket.' },
  { icon: Tag, title: 'Ticket & Tag Printing', description: 'Thermal printers produce durable tags that attach to each garment and a customer receipt in seconds. Tags survive the cleaning process — heat, steam, and solvents. The ticket shows the customer name, garment description, service type, and collection date. No handwritten tickets, no smudged ink, no misread numbers.' },
  { icon: Users, title: 'Customer Records', description: 'Every customer has a profile with their full order history, preferences, and contact details. When a regular walks in, you pull up their record instantly. You see what they brought in last time, any special instructions, and their preferred collection method. Personalised service that builds loyalty without relying on memory.' },
  { icon: Truck, title: 'Pickup & Delivery Scheduling', description: 'Offer collection and delivery as a service. Customers book a pickup slot online or by phone. The system schedules drivers, optimises routes, and tracks each delivery. When the driver collects garments, they scan them into the system on a mobile device. The customer receives confirmation that their items are on their way to the shop.' },
  { icon: MessageSquare, title: 'SMS Notifications', description: 'Customers receive an automatic text message when their garments are ready for collection. No more phone calls asking "is my order ready?" — the system handles it. You can also send reminders for uncollected items after 7 days. SMS reduces counter enquiries and ensures garments are collected promptly.' },
  { icon: Clock, title: 'Express & Scheduled Services', description: 'Offer same-day express cleaning at a premium price or standard 3-day service. The system manages due dates for every order and alerts staff when items are approaching their promised collection time. Express orders are flagged and prioritised in the workflow. You never miss a deadline.' },
];

const benefits = [
  { title: 'Eliminate Lost Garments', description: 'Barcode tracking means every garment is accounted for from intake to collection. The system shows you exactly where each item is in the process. No more searching through racks, no more misplaced orders. A shop processing 1,000 garments per week operates with zero lost items.' },
  { title: 'Reduce Counter Enquiries', description: 'Automated SMS notifications tell customers when their order is ready. The result: fewer phone calls, fewer "is it ready?" visits, and less time spent by staff checking order status. Counter staff focus on intake and payment instead of answering the same question 50 times a day.' },
  { title: 'Grow with Delivery Services', description: 'Pickup and delivery opens a new revenue channel. Busy professionals book a collection from their home or office. You process the garments and deliver them back. The system handles scheduling, route planning, and customer communication. Add delivery without adding chaos.' },
  { title: 'Build Customer Loyalty', description: 'Customer records let you remember preferences, offer loyalty discounts, and send targeted promotions. A customer who brings in 3 suits every month gets a personalised thank-you message and a discount on their next order. Retention improves because customers feel recognised and valued.' },
];

export default function DryCleaningSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Dry Cleaning Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Shirt className="w-3 h-3 mr-2" />
                BUILT FOR DRY CLEANERS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Dry Cleaning{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Garment tracking, ticket printing, customer records, pickup and delivery scheduling, and SMS notifications — everything a dry cleaning business needs to run efficiently.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Barcode tracking for every garment from intake to collection</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Automated SMS when orders are ready</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Dry cleaning software from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Dry Cleaning Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Purpose-built for the workflow, tracking, and customer communication that dry cleaning businesses demand.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Dry Cleaners Choose Posso</h2>
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
                From Single Shops to Multi-Branch Operations
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A single dry cleaning shop needs a system that <strong className="text-white">tracks every garment reliably</strong> and tells customers when their order is ready. The Posso dry cleaning software handles intake, processing, and collection with barcode precision — no garment goes missing.
                </p>
                <p>
                  For multi-branch operations, the <strong className="text-white">cloud dashboard</strong> gives you visibility across all locations. Transfer garments between branches, compare throughput, and manage staff centrally. Each shop operates independently during service, but reporting rolls up to one view.
                </p>
                <p>
                  Add <strong className="text-white">pickup and delivery</strong> and you reach customers who never visit your shop. They book online, a driver collects their garments, and you deliver them back cleaned and pressed. A new revenue stream with low commission on every order.
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
                <Link href="/custom-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Custom POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Bespoke POS development</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Portable POS for deliveries</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Card payments from day one</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Dry Cleaning Software — Frequently Asked Questions" faqs={[
          { question: 'How does garment tracking work?', answer: 'Every garment receives a unique barcode label at intake. Staff scan the barcode at each stage: received, in cleaning, pressing, ready for collection, and collected. The system shows the real-time status of every garment. If a customer calls to ask about their order, you scan or search and give them an instant answer.' },
          { question: 'Can customers receive SMS notifications?', answer: 'Yes. When a garment is marked as ready for collection, the system automatically sends an SMS to the customer. You can also configure reminders for uncollected items — for example, a reminder after 7 days. SMS reduces phone calls and ensures garments are collected promptly.' },
          { question: 'Does it support pickup and delivery?', answer: 'Yes. Customers book a pickup slot through your website or by phone. The system schedules drivers and tracks each collection and delivery. Drivers use a mobile app to scan garments at the customer doorstep. The customer receives confirmation at every stage — collected, in process, out for delivery, delivered.' },
          { question: 'Can I manage multiple branches?', answer: 'Yes. The cloud dashboard gives you a single view across all branches. You can transfer garments between locations, compare throughput, manage pricing centrally, and see staff performance. Each branch operates independently during service but reports to the same dashboard.' },
          { question: 'What ticket and tag printers are supported?', answer: 'The system works with standard thermal label printers for garment tags and receipt printers for customer tickets. Tags are designed to survive cleaning, pressing, and steaming. We supply compatible printers or integrate with your existing hardware during setup.' },
          { question: 'How much does dry cleaning software cost?', answer: 'The complete dry cleaning software starts from £499 + VAT including the POS terminal, barcode scanner, label printer, and garment tracking software. SMS notifications are included. Finance from £24.92 per week. Free setup, configuration, and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
