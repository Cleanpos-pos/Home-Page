import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Cloud, RefreshCw, Shield, Monitor, Wifi, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud ePOS System',
  description:
    'Cloud ePOS System with real-time sync, multi-device operation, PowerSync technology, offline-first architecture, and remote management. Access your POS from anywhere. POS from £499 + VAT.',
  keywords: [
    'cloud epos system',
    'cloud pos system',
    'cloud based epos',
    'cloud pos system uk',
    'cloud epos',
    'online pos system',
    'cloud based pos system',
    'cloud till system',
    'saas pos system',
    'cloud pos software',
  ],
  alternates: {
    canonical: '/cloud-epos-system',
  },
  openGraph: {
    title: 'Cloud ePOS System | Posso UK',
    description:
      'Cloud ePOS System with real-time sync, multi-device, PowerSync, offline-first, and remote management. POS from £499 + VAT.',
    url: 'https://www.posso.co.uk/cloud-epos-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Cloud ePOS System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Cloud ePOS system with real-time data synchronisation, multi-device operation, PowerSync technology for instant sync, offline-first architecture, and remote business management from any location.',
    url: 'https://www.posso.co.uk/cloud-epos-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Real-time cloud synchronisation across all devices',
      'Multi-device operation — tablet, desktop, phone',
      'PowerSync technology for sub-second data sync',
      'Offline-first architecture — works without internet',
      'Remote management dashboard — access from anywhere',
      'Automatic updates — always the latest version',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Cloud ePOS System', item: 'https://www.posso.co.uk/cloud-epos-system' },
    ],
  },
];

const features = [
  { icon: Cloud, title: 'Real-Time Cloud Sync', description: 'Every order, payment, and menu change syncs across all devices in real time. An order taken on the waiter pad appears on the kitchen display within milliseconds. Stock levels update instantly across all terminals. No batch syncing, no delays, no stale data.' },
  { icon: Monitor, title: 'Multi-Device Operation', description: 'Run the POS on tablets, desktops, phones, and dedicated terminals — all connected through the cloud. Add a device during busy periods and remove it when things quiet down. Every device shares the same menu, prices, stock levels, and order queue.' },
  { icon: RefreshCw, title: 'PowerSync Technology', description: 'Posso uses PowerSync for sub-second synchronisation between devices and the cloud. Changes propagate in under 200 milliseconds. This is not traditional polling — it is reactive sync that pushes changes the instant they happen. The result is a POS that feels local even though it is cloud-connected.' },
  { icon: Wifi, title: 'Offline-First Architecture', description: 'The cloud ePOS works without internet. Orders process locally, payments go through, and receipts print — all offline. When connectivity returns, data syncs automatically. Your business never stops because of a WiFi outage or ISP problem.' },
  { icon: BarChart3, title: 'Remote Management', description: 'Check sales, update menus, and monitor staff from anywhere. On holiday? Open the dashboard on your phone and see today\'s revenue. At home? Change tomorrow\'s specials from your laptop. The cloud dashboard works on any device with a browser.' },
  { icon: Shield, title: 'Automatic Updates & Backups', description: 'Software updates happen automatically — no scheduling downtime, no engineer visits. Your POS always runs the latest version with the newest features and security patches. All data is backed up to the cloud continuously. Even if a device is lost or damaged, your data is safe.' },
];

const benefits = [
  { title: 'Never Lose Data', description: 'Cloud backup means your sales data, customer records, and menu configurations are safe regardless of what happens to your hardware. Drop a tablet? Replace it, log in, and all your data is there. No local-only databases to lose, no manual backups to remember.' },
  { title: 'Manage From Anywhere', description: 'You do not need to be in the restaurant to manage it. Check sales, change menus, review staff performance, and monitor orders from your phone, tablet, or laptop — anywhere with an internet connection. Multi-site operators manage all locations from one dashboard.' },
  { title: 'Scale Without Complexity', description: 'Opening a second location? Log into the new device and your menu, pricing, and settings are already there. No data migration, no USB drives, no engineer visits. The cloud POS scales from one terminal to fifty across multiple sites — same platform, same simplicity.' },
  { title: 'Always Up to Date', description: 'Cloud-based POS updates automatically. New features, security patches, and improvements roll out without disrupting service. You never run outdated software, never wait for an engineer to install an update, and never pay for a version upgrade.' },
];

export default function CloudEposSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Cloud ePOS System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Cloud className="w-3 h-3 mr-2" />
                CLOUD-POWERED, OFFLINE-READY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Cloud ePOS{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Real-time cloud sync with PowerSync technology, multi-device operation, offline-first architecture, and remote management. Your POS data is always safe, always synced, always accessible.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> PowerSync — sub-second data synchronisation</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Offline-first — works without internet</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Cloud ePOS system from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Cloud ePOS Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                The power of the cloud with the reliability of local operation. No compromise.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Cloud Beats Legacy POS</h2>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">Cloud vs Legacy: The Real Difference</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Legacy POS systems store data on a local server. If that server fails, you lose everything. Updates require an engineer visit. Adding a new terminal means configuring it on-site. Multi-site reporting means collecting data from each location manually.
                </p>
                <p>
                  The Posso cloud ePOS stores data in the cloud with <strong className="text-white">PowerSync technology</strong> for real-time synchronisation. If a device fails, log into a replacement and your data is there. Updates happen automatically. New terminals connect in minutes. Multi-site reporting is instant from one dashboard.
                </p>
                <p>
                  The key differentiator is the <strong className="text-white">offline-first architecture</strong>. Many cloud POS systems fail when the internet drops — leaving you unable to process orders. The Posso system works offline, syncing when connectivity returns. You get cloud benefits without cloud dependency.
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
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">Compare POS options</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering</p>
                </Link>
                <Link href="/credit-card-machines" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Card Machines</p>
                  <p className="text-slate-400 text-sm mt-1">Contactless payments</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Cloud ePOS System — Frequently Asked Questions" faqs={[
          { question: 'What happens if the internet goes down?', answer: 'The Posso cloud ePOS keeps working. The offline-first architecture stores data locally and processes orders without internet. When connectivity returns, everything syncs automatically. You never lose a sale because of an internet outage. Kitchen printing works over the local network even without internet.' },
          { question: 'What is PowerSync and why does it matter?', answer: 'PowerSync is the synchronisation technology that keeps all devices updated in real time — under 200 milliseconds. Unlike traditional cloud POS systems that poll for changes every few seconds, PowerSync pushes changes instantly. This means a menu update appears on all devices immediately, and orders sync to the kitchen display in milliseconds.' },
          { question: 'Can I manage my POS remotely?', answer: 'Yes. The cloud dashboard is accessible from any device with a browser. Check today\'s sales from your phone, update the menu from your laptop, review staff performance from your tablet — all remotely. Multi-site operators manage all locations from one centralised dashboard.' },
          { question: 'Is my data secure in the cloud?', answer: 'Yes. Data is encrypted in transit and at rest. The cloud infrastructure uses enterprise-grade security with automatic backups. Your data is replicated across multiple data centres so it is safe even if one centre experiences issues. This is significantly more secure than a local server in the back office.' },
          { question: 'How many devices can connect to the cloud POS?', answer: 'As many as you need. Tablets, desktops, phones, kiosks, and kitchen displays all connect through the cloud. There are no per-device licensing fees. Add devices during busy periods and remove them when things quiet down. Every device shares the same data in real time.' },
          { question: 'How much does the cloud ePOS system cost?', answer: 'The cloud ePOS starts from £499 + VAT including the software, PowerSync, offline mode, and cloud dashboard. Use your own hardware or purchase through us. Multi-site packages are available. Free setup and training included with a 2-year warranty. No hidden cloud hosting fees.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
