import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Cpu, Touchpad, Wifi, Shield, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS Machine Software',
  description:
    'POS Machine Software optimised for touchscreen hardware, Windows and web compatible, with offline mode, peripheral support, and automatic updates. Runs on any POS terminal. From £499 + VAT.',
  keywords: [
    'pos machine software',
    'pos terminal software',
    'pos hardware software',
    'touchscreen pos software',
    'pos machine software uk',
    'epos machine software',
    'till machine software',
    'point of sale machine software',
    'pos software for touchscreen',
    'pos machine operating software',
  ],
  alternates: {
    canonical: '/pos-machine-software',
  },
  openGraph: {
    title: 'POS Machine Software | Posso UK',
    description:
      'POS Machine Software optimised for touchscreen terminals, Windows and web compatible, with offline mode and automatic updates.',
    url: 'https://www.posso.co.uk/pos-machine-software',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS Machine Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'POS machine software optimised for touchscreen POS hardware, compatible with Windows and web browsers, featuring offline mode, peripheral device support, and automatic software updates.',
    url: 'https://www.posso.co.uk/pos-machine-software',
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
      reviewCount: '231',
      bestRating: '5',
    },
    featureList: [
      'Touchscreen-optimised interface',
      'Windows and web browser compatible',
      'Offline mode with automatic sync',
      'Receipt printer and cash drawer support',
      'Automatic software updates',
      'Multi-terminal support',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'POS Software', item: 'https://www.posso.co.uk/pos-software' },
      { '@type': 'ListItem', position: 3, name: 'POS Machine Software', item: 'https://www.posso.co.uk/pos-machine-software' },
    ],
  },
];

const features = [
  { icon: Touchpad, title: 'Touchscreen Optimised', description: 'Every button, menu, and interaction is designed for finger-tap accuracy on touchscreens from 10 inches to 21 inches. No tiny click targets. No mouse-dependent hover menus. Large product buttons with images, swipe navigation between categories, and pinch-to-zoom on reports. The interface feels native to touch hardware.' },
  { icon: Monitor, title: 'Windows & Web Compatible', description: 'Run as a native Windows application on dedicated POS terminals or as a web app in any modern browser on any device. Same software, same features, same data — whether you are on a purpose-built POS machine, a Windows laptop, an iPad, or an Android tablet. Choose the hardware that fits your business.' },
  { icon: Wifi, title: 'Offline Mode', description: 'Internet drops mid-service? The software keeps working. Take orders, process cash payments, and print receipts without any connection. When connectivity returns, all transactions sync automatically to the cloud. No lost sales. No downtime. The offline queue handles hours of trading if necessary.' },
  { icon: Cpu, title: 'Peripheral Device Support', description: 'Connect receipt printers, cash drawers, barcode scanners, kitchen printers, customer displays, and card readers. The software auto-detects most common POS peripherals — plug in and it works. Supports USB, Bluetooth, and network-connected devices. One software platform drives your entire hardware setup.' },
  { icon: RefreshCw, title: 'Automatic Updates', description: 'Software updates install automatically during off-hours. New features, security patches, and performance improvements arrive without you lifting a finger. No manual downloads. No version conflicts between terminals. Every machine in your business always runs the latest, most secure version of the software.' },
  { icon: Shield, title: 'Multi-Terminal Management', description: 'Run multiple POS terminals from one account. Add a new terminal in minutes — log in and it syncs your menu, prices, and settings automatically. All terminals share real-time inventory. Sales from every terminal consolidate into unified reports. Scale from one machine to twenty without software changes.' },
];

const benefits = [
  { title: 'Use Your Existing Hardware', description: 'Already have POS terminals, touchscreens, or Windows machines? The software runs on them. No need to buy proprietary hardware locked to one vendor. Switch from your current POS software to Posso without replacing a single piece of equipment. The web version works on any device with a browser.' },
  { title: 'Never Stop Selling', description: 'Offline mode means internet outages do not shut down your business. The software stores transactions locally and syncs when connectivity returns. Combined with automatic updates and remote monitoring, the system maximises uptime. Your POS machine keeps working even when everything else fails.' },
  { title: 'Simplify Your Hardware Setup', description: 'One software platform connects to all your peripherals — printers, scanners, drawers, displays, card readers. No separate driver installations for each device. No compatibility matrices to check. Plug in standard POS hardware and the software handles the rest. Fewer headaches, faster setup.' },
  { title: 'Scale Without Friction', description: 'Adding a second location or an extra terminal at a busy counter takes minutes. Log in on the new machine, and it pulls your menu, prices, and configuration from the cloud. No reinstallation. No USB drives with backup files. Growing your business should not mean growing your IT problems.' },
];

export default function PosMachineSoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'POS Software', href: '/pos-software' },
          { label: 'POS Machine Software' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                HARDWARE-OPTIMISED POS SOFTWARE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  POS Machine{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Software built to run flawlessly on POS hardware — touchscreen optimised, Windows and web compatible, with offline resilience and automatic peripheral detection.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Touchscreen optimised for POS terminals</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Works on Windows, web, iOS, and Android</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS machine software from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">POS Machine Software Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Software engineered for the realities of POS hardware — touchscreens, peripherals, and uninterrupted operation.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Choose Posso Machine Software</h2>
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
                Software Designed for Real POS Hardware
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Too many POS software products are designed on a laptop and then expected to work on a POS terminal. The result is tiny buttons, mouse-dependent interfaces, and poor peripheral support. Posso POS machine software is <strong className="text-white">designed and tested on actual POS hardware</strong> from the start.
                </p>
                <p>
                  The touchscreen interface uses <strong className="text-white">appropriately sized tap targets, swipe gestures, and visual layouts</strong> optimised for the screen sizes and resolutions found in real POS terminals. It connects natively to receipt printers, cash drawers, barcode scanners, and customer-facing displays without driver hassles.
                </p>
                <p>
                  Whether you run the software on a <strong className="text-white">dedicated Windows POS terminal, a commercial tablet, or a web browser on existing hardware</strong>, you get the same features and the same data. The flexibility to choose your hardware without being locked into a single vendor is fundamental to how the software is built.
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
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">General POS solutions</p>
                </Link>
                <Link href="/easy-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Easy POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Simple POS interface</p>
                </Link>
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machine</p>
                  <p className="text-slate-400 text-sm mt-1">Card payment terminals</p>
                </Link>
                <Link href="/mobile-pos-system-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Mobile POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Portable POS</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="POS Machine Software — Frequently Asked Questions" faqs={[
          { question: 'What hardware does the software run on?', answer: 'The software runs on Windows POS terminals (Windows 10 and above), any device with a modern web browser (Chrome, Edge, Safari, Firefox), iPads, Android tablets, and purpose-built POS hardware. It is not locked to proprietary terminals. If you already own POS machines, the software almost certainly runs on them.' },
          { question: 'Does it work offline?', answer: 'Yes. When internet connectivity drops, the software continues operating in offline mode. You can take orders, process cash payments, and print receipts. All transactions are queued locally and sync automatically when the connection returns. Card payments require connectivity but cash sales are uninterrupted.' },
          { question: 'What peripherals does it support?', answer: 'Receipt printers (USB, Bluetooth, network), cash drawers, barcode scanners, kitchen printers, customer-facing displays, and card readers. Most standard POS peripherals are auto-detected — plug in and they work. The software supports Epson, Star, and Bixolon printers out of the box.' },
          { question: 'Can I use it on multiple terminals?', answer: 'Yes. Add terminals by logging into your account on each machine. Menu, prices, and settings sync automatically. All terminals share real-time inventory and feed into unified sales reports. There is no limit on the number of terminals per location.' },
          { question: 'How are software updates handled?', answer: 'Updates install automatically during off-hours — typically overnight. New features, security patches, and bug fixes arrive without manual intervention. Every terminal updates simultaneously so there are no version mismatches. You always have the latest software without any effort.' },
          { question: 'How much does POS machine software cost?', answer: 'POS machine software starts from £499 + VAT including a touchscreen terminal with the software pre-installed. If you want to run the software on your existing hardware, software-only plans are available. Finance from £24.92 per week. Free setup, configuration, and training included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
