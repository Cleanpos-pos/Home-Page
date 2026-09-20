import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { DemoEnquiry } from '@/components/sections/demo-enquiry';
import { Badge } from '@/components/ui/badge';
import {
  Building2, MapPin, Phone, ArrowRight, Check,
  Monitor, MonitorSmartphone, Globe, Bot, ChefHat, CreditCard,
  PhoneCall, Tv, Truck, CalendarCheck, PenTool, Network, Camera,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Posso',
  description:
    'Posso is a UK hospitality technology company: EPOS systems, self-order kiosks, online ordering, AI phone ordering, payments and more — built for 500+ restaurants, takeaways and cafés and supported from Leicester.',
  keywords: [
    'about posso',
    'posso ltd',
    'uk hospitality epos company',
    'posso paul robinson',
    'epos self-order kiosks online ordering uk',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Posso — UK Hospitality Technology',
    description:
      'EPOS, self-order kiosks, online ordering, AI phone ordering, payments and more for UK restaurants, takeaways and cafés. Built and supported in the UK.',
    url: 'https://www.posso.co.uk/about',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Posso' }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Posso',
    url: 'https://www.posso.co.uk/about',
    mainEntity: { '@id': 'https://www.posso.co.uk/#organization' },
    about: { '@id': 'https://www.posso.co.uk/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.posso.co.uk/about/paul-robinson#person',
    name: 'Paul Robinson',
    jobTitle: 'Managing Director',
    worksFor: { '@id': 'https://www.posso.co.uk/#organization' },
    url: 'https://www.posso.co.uk/about/paul-robinson',
    knowsAbout: [
      'Restaurant EPOS Systems',
      'Self-Order Kiosks',
      'Online Ordering',
      'AI Phone Ordering',
      'Card Payments',
      'Kitchen Display Systems',
      'UK Hospitality Technology',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.posso.co.uk/about' },
    ],
  },
];

const services = [
  { icon: Monitor, title: 'EPOS Tills', desc: 'The Posso One point-of-sale platform — the till at the centre of it all.', href: '/pos' },
  { icon: MonitorSmartphone, title: 'Self-Order Kiosks', desc: 'Freestanding, countertop and outdoor kiosks that cut queues and lift spend.', href: '/self-order-kiosks' },
  { icon: Globe, title: 'Online Ordering', desc: 'Your own branded, commission-light ordering website and app.', href: '/online-ordering' },
  { icon: Bot, title: 'AI Phone Ordering', desc: 'An AI receptionist that answers every call and takes the order 24/7.', href: '/ai-phone-ordering' },
  { icon: ChefHat, title: 'Kitchen Display Screens', desc: 'Every order from every channel, on one screen in the kitchen.', href: '/kitchen-display-system' },
  { icon: CreditCard, title: 'Card Machines & Payments', desc: 'Posso Pay and Teya — integrated card processing from 1% + 10p.', href: '/credit-card-machines' },
  { icon: PhoneCall, title: 'Cloud Phones', desc: 'A two-line business phone plus unlimited internet, on one bill.', href: '/cloud-phone-for-restaurants' },
  { icon: Tv, title: 'Digital Signage', desc: 'Menu boards and screens you update in seconds, not reprints.', href: '/digital-signage' },
  { icon: Truck, title: 'Delivery Management', desc: 'Aggregator orders and your own drivers, managed in one place.', href: '/delivery-management-pos' },
  { icon: CalendarCheck, title: 'Table Booking', desc: 'TableMaestro reservations and waitlists, linked to your floor.', href: '/tablemaestro' },
  { icon: PenTool, title: 'Website Design', desc: 'Fast, ordering-ready websites built for hospitality businesses.', href: '/web-design' },
  { icon: Network, title: 'Multi-Site EPOS', desc: 'Central menus, pricing and reporting across every location.', href: '/multi-site-epos-uk' },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'About' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Building2 className="w-3 h-3 mr-2" />
              ABOUT POSSO
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              One UK company for the whole counter
            </h1>
            <p className="text-xl text-slate-300 mt-6 leading-relaxed">
              Posso builds and supports the technology UK restaurants, takeaways and cafés run on — the till,
              the kiosks, the online ordering, the phones, the payments and the AI — all from one place, with a
              human on the end of the line.
            </p>
          </div>
        </section>

        {/* Who I am */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Who runs it</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">I&apos;m Paul Robinson</h2>
            <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
              <p>
                I&apos;m the Managing Director of Posso, and I lead the team behind the Posso One platform. My
                days are spent where the systems actually meet the counter — product direction, on-site
                installations and our UK support desk — and I personally review the buying guides we publish so
                the pricing, features and comparisons stay honest for the operators reading them.
              </p>
              <p>
                Posso is my focus, and hospitality technology is what I know inside out: EPOS and tills,
                self-order kiosks, online and AI phone ordering, kitchen displays, and card payments. If you want
                a straight answer about any of it — including where the tech genuinely helps a food business and
                where it doesn&apos;t — that&apos;s the conversation I have every day. Ask me.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="glass-card rounded-xl border border-slate-700/50 p-6 flex items-start gap-4">
                <Building2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Posso Ltd</p>
                  <p className="text-slate-400 text-sm mt-1">Registered in England &amp; Wales, Companies House No. 11813595</p>
                </div>
              </div>
              <div className="glass-card rounded-xl border border-slate-700/50 p-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Leicester, UK</p>
                  <p className="text-slate-400 text-sm mt-1">The Oval, 57 New Walk, Leicester LE1 7EA</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-slate-400">
              More on my role and background:{' '}
              <Link href="/about/paul-robinson" className="text-primary hover:underline">Paul Robinson, Managing Director</Link>.
            </p>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">What we do</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything your counter needs, from one supplier</h2>
              <p className="text-lg text-slate-400">
                Most hospitality businesses juggle a different supplier for the till, the card machine, the
                website and the phones. We build them to work as one system — so it all talks, and there&apos;s
                one number to call when it doesn&apos;t.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, title, desc, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="group glass-card rounded-2xl border border-slate-700/50 p-6 hover:border-primary/40 transition-colors block"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>

            {/* AI + food photography callout */}
            <div className="mt-8 glass-card rounded-2xl border border-primary/30 p-8 max-w-4xl">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">And where AI actually helps</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Beyond AI phone ordering, we built{' '}
                    <a href="https://pix-virid.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Food Menu Studio</a>
                    {' '}— AI food photography that gives a takeaway a full set of professional menu photos in minutes,
                    without a photographer. It&apos;s the same instinct behind everything we make: use the technology
                    where it takes real work off your plate, and leave it out where it doesn&apos;t.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who we work with</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              500+ UK businesses run on Posso — pizza shops, kebab and Indian takeaways, fish and chip shops,
              cafés, dessert and bubble tea counters, restaurants and pubs, plus entertainment and event venues
              from trampoline parks to festivals. Whether you&apos;re a single counter or a multi-site group,
              the system scales with you and the support is the same either way.
            </p>
          </div>
        </section>

        {/* Why Posso */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Why Posso</p>
              <h2 className="text-3xl sm:text-4xl font-bold">What makes us different</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ['One supplier', 'Till, kiosks, ordering, phones and payments built to work as one — not stitched together from five vendors.'],
                ['A human answers', 'UK-based support on the phone Monday to Friday, 9am–9:30pm. No tickets into the void.'],
                ['Honest pricing', 'Real numbers stated plainly — hardware from £499 + VAT, software from £25 + VAT a month, card processing from 1% + 10p quoted on your turnover.'],
                ['You own it', 'Own your hardware, own your customers, own your data — not rented back to you by a platform.'],
              ].map(([title, desc]) => (
                <div key={title} className="glass-card rounded-2xl border border-slate-700/50 p-6">
                  <Check className="h-6 w-6 text-green-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
              </a>
              <Link href="/epos-pricing-uk" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                See our pricing <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <DemoEnquiry
          heading="Talk to the team that builds it"
          intro="Tell us what you run and what you're trying to fix, and we'll give you a straight answer — a demo, a quote, and honest advice on what you actually need."
        />
      </main>
      <Footer />
    </div>
  );
}
