import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  X,
  Phone,
  ArrowRight,
  AlertTriangle,
  Globe,
  Smartphone,
  Truck,
  Percent,
  Headphones,
  RefreshCw,
  MonitorCheck,
  CalendarClock,
  Database,
  Rocket,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GloriaFood Alternative UK — Switch Before the 2027 Shutdown',
  description:
    'GloriaFood shuts down 30 April 2027. Switch to Posso — branded ordering website & app, full ePOS, delivery integrations, free migration. Call 0808 175 3956.',
  keywords: [
    'gloriafood alternative',
    'gloriafood alternative uk',
    'gloriafood shutting down',
    'gloriafood shutdown 2027',
    'gloriafood replacement',
    'gloriafood closing',
    'switch from gloriafood',
    'gloriafood migration',
    'free online ordering system alternative',
    'restaurant online ordering system uk',
    'takeaway online ordering software',
    'commission free online ordering',
  ],
  alternates: {
    canonical: '/gloriafood-alternative',
  },
  openGraph: {
    title: 'GloriaFood Alternative UK | Posso — Free Migration Before the 2027 Shutdown',
    description:
      'Oracle is closing GloriaFood on 30 April 2027. Posso moves your menu, online ordering, and customers across with free setup — branded website & app, ePOS, and delivery integrations in one system.',
    url: 'https://posso.co.uk/gloriafood-alternative',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso — the UK GloriaFood alternative for restaurants and takeaways' }],
  },
};

const faqs = [
  {
    question: 'Is GloriaFood really shutting down?',
    answer:
      'Yes. Oracle, which acquired GloriaFood in 2021, has confirmed the platform will close permanently on 30 April 2027. New signups have already stopped, the product is no longer being developed, and Oracle is not providing a migration tool. Restaurants need to move to an alternative before the deadline.',
  },
  {
    question: 'What happens to my GloriaFood ordering system after the shutdown?',
    answer:
      'When GloriaFood goes dark, the ordering widget on your website will stop working, Facebook ordering buttons will stop working, and payment processing through the platform will be cut off. Your menus, customer data, delivery zones, and order history will no longer be accessible — which is why it is important to export your data and migrate early.',
  },
  {
    question: 'What is the best GloriaFood alternative in the UK?',
    answer:
      'Posso is a UK-based GloriaFood alternative that goes further than a like-for-like swap: you get a branded online ordering website and mobile app, plus a full ePOS system, kitchen display, self-order kiosks, and Just Eat, Uber Eats, and Deliveroo integrations — all in one system with UK-based support.',
  },
  {
    question: 'GloriaFood was free — how much does Posso cost?',
    answer:
      'GloriaFood’s free plan was the hook, but the features most takeaways actually needed — branded apps, payment processing, promotions — sat in paid add-ons. Posso is transparent: a complete ePOS system from £499 + VAT, self-order kiosks from £699 + VAT, low-commission online ordering, and free setup and training. Finance is available from £24.92 per week.',
  },
  {
    question: 'Can Posso import my menu from GloriaFood?',
    answer:
      'Yes. Posso already integrates with GloriaFood (via Hubrise), so we can bring your menu across rather than re-keying it from scratch. Our team rebuilds your categories, modifiers, prices, and opening hours, and helps you export your customer data from GloriaFood before the shutdown.',
  },
  {
    question: 'How long does it take to switch from GloriaFood to Posso?',
    answer:
      'Most restaurants and takeaways are fully live within 24–48 hours. We handle the menu import, delivery zones, settings, branding, and staff training — setup and training are free.',
  },
  {
    question: 'Will I lose my customers when GloriaFood closes?',
    answer:
      'Not if you move early. We help you export your customer list from GloriaFood while the platform is still running, then bring those customers across to your new Posso-powered website and app. The longer you wait, the greater the risk of losing access to that data.',
  },
  {
    question: 'Do I get my own branded website and app like GloriaFood offered?',
    answer:
      'Yes — and better. Posso gives you a modern, mobile-friendly online ordering website plus your own branded app on the Apple App Store and Google Play Store. You can also be listed on the FoodBooking marketplace, which drives new local customers; our partners see up to 11% of total sales from it.',
  },
  {
    question: 'Does Posso integrate with delivery platforms?',
    answer:
      'Yes. Posso integrates with Just Eat, Uber Eats, and Deliveroo, so every delivery order appears directly on your POS and kitchen display — no extra tablets and no re-keying. GloriaFood never offered this level of delivery platform integration.',
  },
  {
    question: 'Does Posso charge commission like the delivery apps?',
    answer:
      'Orders through your own Posso website and app carry a low commission — a fraction of the 25–35% charged by the major aggregators. There is no commission on in-store POS transactions, so you keep more of every sale.',
  },
  {
    question: 'Is Posso a full POS system or just online ordering?',
    answer:
      'Both. Unlike GloriaFood, which was online ordering only, Posso is a complete hospitality system: touchscreen ePOS, kitchen display, table management, self-order kiosks, card machines, digital signage, and online ordering all work together out of the box. The POS is offline-first, so you can keep taking orders even if the internet drops.',
  },
  {
    question: 'When should I switch from GloriaFood?',
    answer:
      'Now, rather than close to the April 2027 deadline. The product is already frozen, support is winding down, and thousands of restaurants will be scrambling to migrate at the same time as the shutdown approaches. Moving early means a calm switchover, your customer data safely exported, and no risk of your ordering channel going dark overnight.',
  },
];

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso — GloriaFood Alternative',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Posso is a UK GloriaFood alternative for restaurants and takeaways: branded online ordering website and mobile app, complete ePOS system, kitchen display, self-order kiosks, and Just Eat, Uber Eats, and Deliveroo integrations, with free migration from GloriaFood before the April 2027 shutdown.',
    url: 'https://posso.co.uk/gloriafood-alternative',
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
      reviewCount: '127',
      bestRating: '5',
    },
    featureList: [
      'Branded online ordering website and mobile app',
      'Free menu import and migration from GloriaFood',
      'Complete ePOS system with kitchen display',
      'Just Eat, Uber Eats and Deliveroo integrations',
      'Low-commission online ordering',
      'Self-order kiosks and table ordering',
      'UK-based support and free setup and training',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Online Ordering', item: 'https://posso.co.uk/online-ordering' },
      { '@type': 'ListItem', position: 3, name: 'GloriaFood Alternative', item: 'https://posso.co.uk/gloriafood-alternative' },
    ],
  },
];

const painPoints = [
  {
    icon: CalendarClock,
    title: 'The Product Is Frozen',
    description:
      'New signups are closed, there is no development roadmap, and no new features are coming. Every month you stay is a month on a platform that is winding down — while your competitors move to systems that keep improving.',
  },
  {
    icon: Database,
    title: 'Your Data Disappears',
    description:
      'Oracle is not providing a migration tool. When the platform closes, menus, customer lists, delivery zones, and order history go with it. Exporting your data early — while everything still works — is the only safe option.',
  },
  {
    icon: AlertTriangle,
    title: 'Ordering Goes Dark Overnight',
    description:
      'On shutdown day, the ordering widget on your website stops working and Facebook ordering buttons stop working. If you have not switched by then, your online ordering revenue stops with them.',
  },
];

const features = [
  {
    icon: Globe,
    title: 'Your Own Branded Ordering Website',
    description:
      'A modern, mobile-friendly online ordering website built to convert visitors into paying customers — a direct replacement for your GloriaFood widget, on your own domain, with your branding.',
  },
  {
    icon: Smartphone,
    title: 'Branded Mobile App',
    description:
      'Your own app on the Apple App Store and Google Play Store, putting your brand directly in your customers’ pockets. Plus a listing on the FoodBooking marketplace that drives new local customers — partners see up to 11% of total sales from it.',
  },
  {
    icon: MonitorCheck,
    title: 'A Complete ePOS, Not Just Ordering',
    description:
      'GloriaFood stopped at online ordering. Posso includes a full touchscreen ePOS, kitchen display, table management, and self-order kiosks — every order from every channel lands in one system. Offline-first, so service never stops.',
  },
  {
    icon: Truck,
    title: 'Delivery Platforms, Integrated',
    description:
      'Just Eat, Uber Eats, and Deliveroo orders appear directly on your POS and kitchen display. No extra tablets, no re-keying — something GloriaFood never solved.',
  },
  {
    icon: Percent,
    title: 'Low Commission — Keep Your Margin',
    description:
      'Orders through your own website and app carry a low commission, a fraction of the 25–35% the big aggregators charge. No commission on in-store POS sales. Transparent pricing you can plan around.',
  },
  {
    icon: Headphones,
    title: 'Free Migration & UK Support',
    description:
      'We import your GloriaFood menu, set up your delivery zones, brand your store, and train your team — setup and training are free. UK-based support on 0808 175 3956, with remote assistance when you need it.',
  },
];

const comparisonRows = [
  { feature: 'Future of the platform', posso: 'Active development and regular updates', gloria: 'Closing 30 April 2027 — product frozen', possoGood: true, gloriaGood: false },
  { feature: 'Branded ordering website', posso: 'Modern, mobile-first, built to convert', gloria: 'Dated widget bolted onto your site', possoGood: true, gloriaGood: false },
  { feature: 'Branded mobile app', posso: 'iOS & Android app with your branding', gloria: 'Paid add-on, no longer developed', possoGood: true, gloriaGood: false },
  { feature: 'Full ePOS & kitchen display', posso: 'Included — one system for every order', gloria: 'Not offered — online ordering only', possoGood: true, gloriaGood: false },
  { feature: 'Just Eat, Uber Eats & Deliveroo integration', posso: 'Built in — orders land on your POS', gloria: 'Not offered', possoGood: true, gloriaGood: false },
  { feature: 'Self-order kiosks & table ordering', posso: 'From £699 + VAT, fully integrated', gloria: 'Not offered', possoGood: true, gloriaGood: false },
  { feature: 'Marketplace exposure', posso: 'FoodBooking marketplace listing included', gloria: 'None — your traffic only', possoGood: true, gloriaGood: false },
  { feature: 'Commission on your own orders', posso: 'Low commission — a fraction of aggregator fees', gloria: 'Free plan, but key features were paid add-ons', possoGood: true, gloriaGood: true },
  { feature: 'Customer data', posso: 'Yours — full access and export, always', gloria: 'Inaccessible after the shutdown', possoGood: true, gloriaGood: false },
  { feature: 'Support', posso: 'UK-based phone & remote support', gloria: 'Winding down with the platform', possoGood: true, gloriaGood: false },
  { feature: 'Setup & training', posso: 'Free — live within 24–48 hours', gloria: 'Self-service setup', possoGood: true, gloriaGood: false },
];

const migrationSteps = [
  {
    step: '1',
    title: 'Quick Chat',
    description:
      'A short call to review your current GloriaFood setup — menu, delivery zones, payments, and what you want to keep or improve. Call 0808 175 3956 or book a free demo.',
  },
  {
    step: '2',
    title: 'We Do the Build',
    description:
      'Our team imports your menu from GloriaFood, rebuilds your categories, modifiers, hours, and delivery zones, and helps you export your customer data before the platform closes.',
  },
  {
    step: '3',
    title: 'Branding & Testing',
    description:
      'Your colours, logo, and domain go onto your new ordering website and app. We pressure-test ordering, payments, and printing with you before anything goes live.',
  },
  {
    step: '4',
    title: 'Go Live in 24–48 Hours',
    description:
      'Most businesses are live within 24–48 hours, with free staff training included and UK-based support from day one. Your online ordering never misses a beat.',
  },
];

export default function GloriaFoodAlternativePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Online Ordering', href: '/online-ordering' },
          { label: 'GloriaFood Alternative' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-amber-500/50 text-amber-400 bg-amber-500/10 py-1 px-3">
                <AlertTriangle className="w-3 h-3 mr-2" />
                GLORIAFOOD CLOSES 30 APRIL 2027
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  GloriaFood Is Shutting Down.{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Posso Is the Upgrade.
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Oracle is closing GloriaFood for good. Posso moves your menu, online ordering, and customers across — and replaces it with something better: a branded website and app, a full ePOS system, and delivery integrations in one place.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Free migration — we import your GloriaFood menu for you</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Branded ordering website &amp; mobile app, low commission</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Just Eat, Uber Eats &amp; Deliveroo straight to your POS</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Live in 24–48 hours with free setup, training &amp; UK support</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Plan My Switch — Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The announcement */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">The GloriaFood Shutdown: What Was Announced</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Oracle, which acquired GloriaFood in 2021, has confirmed that the platform will <strong className="text-white">close permanently on 30 April 2027</strong>. This is not a rebrand or a merger — accounts, the partner programme, and the product itself are being wound down.
                </p>
                <p>
                  Over <strong className="text-white">123,000 restaurants worldwide</strong> built their online ordering on GloriaFood, including thousands of UK takeaways and restaurants. For all of them, the situation is the same:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><X className="h-5 w-5 text-red-400 shrink-0 mt-1" /> New signups have already closed — the product is frozen with no roadmap.</li>
                  <li className="flex items-start gap-3"><X className="h-5 w-5 text-red-400 shrink-0 mt-1" /> Oracle is not providing a migration tool — moving your data is on you.</li>
                  <li className="flex items-start gap-3"><X className="h-5 w-5 text-red-400 shrink-0 mt-1" /> On shutdown day, website ordering widgets and Facebook ordering buttons stop working.</li>
                  <li className="flex items-start gap-3"><X className="h-5 w-5 text-red-400 shrink-0 mt-1" /> Menus, customer data, delivery zones, and order history become inaccessible.</li>
                </ul>
                <p>
                  The good news: switching early turns a forced shutdown into a free upgrade. Posso already integrates with GloriaFood, so your menu can come across without re-keying — and you end up with more than you had before.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why operators are leaving now */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Why Operators Aren&apos;t Waiting Until 2027</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                The deadline is April 2027, but the risks start much earlier. Here is why UK restaurants and takeaways are moving now.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {painPoints.map((p) => (
                <div key={p.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                    <p.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Posso */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Why Posso Is the Natural Next Step</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Don&apos;t just replace GloriaFood — upgrade it. Posso gives you everything GloriaFood did, plus the POS, kiosks, and delivery integrations it never had.
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

        {/* Comparison table */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">Posso vs GloriaFood: Side by Side</h2>
              <p className="text-slate-400 text-center text-lg mb-10 max-w-2xl mx-auto">
                An honest comparison. GloriaFood&apos;s free plan served a lot of takeaways well — but the platform is closing, and Posso covers far more of your operation.
              </p>
              <div className="glass-card rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-700/50 bg-slate-900/50">
                        <th scope="col" className="p-4 text-slate-300 font-semibold">Feature</th>
                        <th scope="col" className="p-4 text-white font-semibold">Posso</th>
                        <th scope="col" className="p-4 text-slate-300 font-semibold">GloriaFood</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.feature} className="border-b border-slate-800/50 last:border-0">
                          <th scope="row" className="p-4 text-slate-300 font-medium align-top">{row.feature}</th>
                          <td className="p-4 align-top">
                            <span className="flex items-start gap-2 text-slate-200">
                              {row.possoGood ? <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" /> : <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />}
                              {row.posso}
                            </span>
                          </td>
                          <td className="p-4 align-top">
                            <span className="flex items-start gap-2 text-slate-400">
                              {row.gloriaGood ? <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" /> : <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />}
                              {row.gloria}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-slate-500 text-sm text-center mt-4">
                GloriaFood details reflect the platform&apos;s status following Oracle&apos;s shutdown announcement. Posso pricing: ePOS from £499 + VAT, kiosks from £699 + VAT, finance from £24.92/week.
              </p>
            </div>
          </div>
        </section>

        {/* Migration steps */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How We Move You Across</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Switching from GloriaFood to Posso is a done-for-you process. Setup and training are free, and most businesses are live within 24–48 hours.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {migrationSteps.map((s) => (
                <div key={s.step} className="glass-card rounded-xl p-6 border border-slate-700/50 relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4 text-white text-xl font-bold">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                <RefreshCw className="mr-2 h-5 w-5" /> Start My Free Migration
              </a>
            </div>
          </div>
        </section>

        {/* Proof / stats */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-10">Trusted by UK Restaurants &amp; Takeaways</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-slate-400 mt-1">UK restaurants &amp; venues on Posso</p>
                </div>
                <div className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <p className="text-3xl font-bold text-white">24–48h</p>
                  <p className="text-slate-400 mt-1">From sign-up to taking orders</p>
                </div>
                <div className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <p className="text-3xl font-bold text-white">30%</p>
                  <p className="text-slate-400 mt-1">Average order value uplift with kiosks</p>
                </div>
                <div className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <p className="text-3xl font-bold text-white">11%</p>
                  <p className="text-slate-400 mt-1">Of partner sales driven by FoodBooking</p>
                </div>
              </div>
              <p className="text-slate-400 mt-8 text-lg">
                One system for online ordering, ePOS, kiosks, and delivery — with free setup, free training, and UK-based support on{' '}
                <a href="tel:+448081753956" className="text-primary hover:underline font-medium">0808 175 3956</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Everything GloriaFood Did — and Everything It Didn&apos;t</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded website &amp; app</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">From £499 + VAT</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integrations</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats, Deliveroo</p>
                </Link>
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">From £699 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="GloriaFood Alternative — Frequently Asked Questions" faqs={faqs} />

        {/* Final CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl border border-slate-700/50 p-10">
              <Rocket className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Wait for the Shutdown</h2>
              <p className="text-slate-300 text-lg mb-8">
                GloriaFood closes on 30 April 2027 and your data goes with it. Switch to Posso now — free migration, free setup and training, and live within 24–48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
