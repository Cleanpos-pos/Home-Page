import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Monitor, Smartphone, Clock, CreditCard, BarChart3, Phone, ArrowRight, Cloud, RefreshCw, Layers, WifiOff } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ePOS Software for Takeaway | Cloud-Based Takeaway Management',
  description:
    'Posso ePOS software for takeaways. Cloud-based, offline-first, multi-device, real-time sync, menu management, analytics dashboard, and X/Z reports. From £499 + VAT.',
  keywords: [
    'epos software for takeaway',
    'takeaway epos software',
    'takeaway pos software',
    'cloud pos software takeaway',
    'takeaway management software',
    'best takeaway software',
    'epos software takeaway uk',
    'takeaway ordering software',
    'takeaway software system',
    'online takeaway software',
  ],
  alternates: {
    canonical: '/epos-software-for-takeaway',
  },
  openGraph: {
    title: 'ePOS Software for Takeaway | Posso UK',
    description:
      'Cloud-based takeaway ePOS software with offline mode, real-time sync, analytics dashboard, and multi-device support.',
    url: 'https://posso.co.uk/epos-software-for-takeaway',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso ePOS Software for Takeaway',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows',
    description:
      'Cloud-based ePOS software for takeaway businesses with offline-first architecture, real-time sync, multi-device support, menu management, analytics dashboard, and X/Z reporting.',
    url: 'https://posso.co.uk/epos-software-for-takeaway',
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
      'Cloud-based with offline-first architecture',
      'Real-time sync across devices',
      'Multi-device support (till, tablet, phone)',
      'Menu management with categories and modifiers',
      'Sales analytics dashboard',
      'X and Z reports',
      'Automatic updates — no manual installs',
      'Customer database with order history',
      'Multi-channel order management',
      'Secure cloud data backup',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Takeaway ePOS Software', item: 'https://posso.co.uk/epos-software-for-takeaway' },
    ],
  },
];

const softwareFeatures = [
  { icon: Cloud, title: 'Cloud-Based Software', description: 'Your data lives in the cloud. Access your sales, menu, and customer data from anywhere — your takeaway, your home, or your phone. No local server to maintain.' },
  { icon: WifiOff, title: 'Offline-First Architecture', description: 'Internet goes down? The software keeps working. Take orders, process cash payments, and print kitchen tickets offline. Everything syncs automatically when the connection returns.' },
  { icon: RefreshCw, title: 'Real-Time Multi-Device Sync', description: 'Run the software on your main till, a second terminal, and a tablet. Menu changes, orders, and stock updates sync instantly across all devices.' },
  { icon: Layers, title: 'Menu Management', description: 'Categories, subcategories, modifiers, combo deals, and allergen tags — all managed through a simple drag-and-drop interface. Update your menu in minutes, not hours.' },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'See revenue by day, week, or month. Track your best sellers, peak hours, average order value, and order channel breakdown. Export reports to CSV for your accountant.' },
  { icon: Monitor, title: 'X & Z Reports', description: 'End-of-shift and end-of-day reports at the tap of a button. Cash up accurately, track variances, and keep HMRC-compliant records without manual calculations.' },
];

const softwareAdvantages = [
  { title: 'No Manual Updates', description: 'Posso updates automatically in the background. You always run the latest version with the newest features and security patches — no USB sticks, no engineer visits.' },
  { title: 'Secure Cloud Backup', description: 'Every transaction, menu change, and customer record is backed up to the cloud in real time. If your hardware fails, your data is safe and you can be back up on a new device within hours.' },
  { title: 'Multi-Channel Management', description: 'Phone orders, walk-ins, online orders, and delivery app orders all funnel into one software system. No switching between apps or tablets to manage different channels.' },
  { title: 'Customer Database', description: 'Every customer is saved with their order history, delivery address, and contact details. Use this for caller ID lookups, targeted promotions, and loyalty tracking.' },
];

export default function TakeawaySoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Takeaway ePOS Software' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                  <Cloud className="w-3 h-3 mr-2" />
                  TAKEAWAY ePOS SOFTWARE
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                  <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    ePOS Software for{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Takeaway
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Cloud-based takeaway software that works even when the internet does not. Manage your menu, track your sales, and run your entire takeaway operation from one intelligent platform that syncs across every device in real time.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Cloud-based with full offline mode</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Real-time sync across all devices</li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full POS from £499 + VAT</li>
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
              <div className="relative">
                <img
                  src="/images/posso_epos_integration.png"
                  alt="Posso cloud-based ePOS software for takeaway with analytics dashboard, menu management, and multi-device sync"
                  width={1200}
                  height={630}
                  loading="eager"
                  className="rounded-2xl shadow-2xl shadow-primary/10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Software Features */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Takeaway Software That Thinks Ahead
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Not just a till. Posso is a complete software platform for managing orders, menus, analytics, and customers across every channel your takeaway operates on.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {softwareFeatures.map((f) => (
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

        {/* Software Advantages */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                The Advantages of Cloud ePOS Software
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Old-fashioned tills store data locally and need manual updates. Cloud software keeps everything synced, backed up, and always up to date.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {softwareAdvantages.map((a) => (
                <div key={a.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-2">{a.title}</h3>
                  <p className="text-slate-400">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Takeaway Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/epos-system-for-takeaway" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway ePOS System</p>
                  <p className="text-slate-400 text-sm mt-1">Hardware + software</p>
                </Link>
                <Link href="/epos-software-for-takeaway-delivery" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Software</p>
                  <p className="text-slate-400 text-sm mt-1">Driver management & zones</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Your own ordering website</p>
                </Link>
                <Link href="/pos-systems" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Get a Quote</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Takeaway ePOS Software — Frequently Asked Questions" faqs={[
          { question: 'Is the takeaway ePOS software cloud-based?', answer: 'Yes. Posso is fully cloud-based. Your menu, orders, customer data, and sales reports are stored securely in the cloud and accessible from any device. The software also works offline — orders continue to process even if the internet drops, and data syncs when the connection returns.' },
          { question: 'Can the software run on multiple devices?', answer: 'Yes. Run Posso on your main touchscreen till, a second terminal, a tablet for the kitchen, or even your phone for remote monitoring. All devices sync in real time so every screen shows the same data.' },
          { question: 'How do I manage my takeaway menu in the software?', answer: 'The menu editor uses a drag-and-drop interface. Create categories (starters, mains, sides, drinks), add items with descriptions and images, set up modifiers (spice levels, sizes, extras), and build combo deals. Menu changes publish instantly to your POS and online ordering site.' },
          { question: 'What reports does the takeaway ePOS software provide?', answer: 'Posso provides real-time sales dashboards, X and Z reports for end-of-shift cash-up, product mix reports showing best sellers, hourly sales breakdowns, and order channel analysis. All reports can be exported to CSV.' },
          { question: 'Does the software update automatically?', answer: 'Yes. Posso updates automatically in the background with no downtime. You always have the latest features and security updates without needing to install anything manually or pay for engineer visits.' },
          { question: 'What happens if my internet goes down?', answer: 'The software continues to work offline. You can take orders, process cash payments, and print kitchen tickets without an internet connection. When the connection returns, all offline transactions sync to the cloud automatically.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
