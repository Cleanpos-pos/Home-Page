import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Lock, Plug, Key, Coins, Settings, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DIY Cash Drawer',
  description:
    'DIY Cash Drawer setup guide — auto-kick POS integration, key management, denomination configuration, cash reconciliation, and choosing the right drawer for your business. POS from £499 + VAT.',
  keywords: [
    'diy cash drawer',
    'cash drawer setup',
    'pos cash drawer',
    'auto kick cash drawer',
    'cash drawer pos integration',
    'till cash drawer',
    'cash drawer for epos',
    'cash register drawer',
    'cash drawer uk',
    'rj11 cash drawer',
  ],
  alternates: {
    canonical: '/diy-cash-drawer',
  },
  openGraph: {
    title: 'DIY Cash Drawer | Posso UK',
    description:
      'DIY Cash Drawer — setup guide for auto-kick POS integration, key management, denominations, and cash reconciliation.',
    url: 'https://www.posso.co.uk/diy-cash-drawer',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso POS with Cash Drawer Integration',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'POS system with automatic cash drawer integration — auto-kick on transaction, key management, denomination tracking, cash reconciliation reports, and full audit trail for cash handling.',
    url: 'https://www.posso.co.uk/diy-cash-drawer',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Auto-kick cash drawer on cash transactions',
      'RJ11 and USB drawer connectivity',
      'Denomination tracking and float management',
      'Cash reconciliation with variance reporting',
      'Key management and drawer assignment',
      'Full audit trail for every drawer open event',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'DIY Cash Drawer', item: 'https://www.posso.co.uk/diy-cash-drawer' },
    ],
  },
];

const features = [
  { icon: Plug, title: 'Auto-Kick POS Integration', description: 'The cash drawer connects to your POS terminal via an RJ11 cable (through the receipt printer) or USB. When a cash transaction completes, the drawer kicks open automatically. No manual button press, no reaching under the counter. The drawer opens only when the POS authorises it — during a legitimate cash sale, float count, or end-of-day cash-up. Every open event is logged.' },
  { icon: Key, title: 'Key Management', description: 'Each cash drawer comes with two keys for manual override. Keys should be held by management only — the POS handles all routine opening. If the drawer needs opening without a transaction (for change or a float adjustment), a manager enters their PIN on the POS. The no-sale open is recorded with a timestamp and user ID. Keep spare keys locked in the safe, not in the drawer.' },
  { icon: Coins, title: 'Denomination Configuration', description: 'Set up the drawer layout to match your coin and note denominations: £50, £20, £10, £5 notes in the back compartments; £2, £1, 50p, 20p, 10p, 5p, 2p, 1p coins in the front sections. The POS knows the layout and guides the cash-up process denomination by denomination. Staff count each slot, enter the total, and the system calculates the variance against expected cash.' },
  { icon: Lock, title: 'Cash Reconciliation', description: 'At the end of each shift or day, the POS runs a cash reconciliation. Expected cash is calculated from all cash transactions minus change given. Staff count the physical cash in the drawer. The system compares expected versus actual and reports any variance. A £2 shortage is flagged for investigation. Over time, reconciliation data identifies patterns — specific staff, specific shifts, specific days.' },
  { icon: Settings, title: 'Float Management', description: 'Set your opening float amount — typically £100-£150 in mixed denominations. The POS prompts staff to verify the float at the start of each shift. If the float is short, the variance is recorded before the shift begins. During the day, the POS calculates when a cash skim is needed to keep the drawer below a safe maximum. A full float management guide is included with setup.' },
  { icon: BookOpen, title: 'Setup Guide and Best Practices', description: 'The Posso setup includes a complete cash drawer guide: physical installation, cable routing, POS configuration, float amounts, cash-up procedures, key security, and troubleshooting. Common issues like drawer not kicking, misaligned compartments, and jammed mechanisms are covered. Staff training materials are provided so every team member follows the same cash handling procedure.' },
];

const benefits = [
  { title: 'Prevent Cash Shrinkage', description: 'An uncontrolled cash drawer is an invitation for shrinkage. Auto-kick means the drawer only opens during legitimate transactions. Every no-sale open requires a PIN and is logged. End-of-shift reconciliation catches discrepancies immediately. Businesses that implement proper cash drawer controls see shrinkage drop by 60-80% within the first month.' },
  { title: 'Speed Up Cash Handling', description: 'Auto-kick eliminates the step of manually opening the drawer. Denomination layout matches the POS change calculation — the system tells the cashier to give £3.45 change, and the coins are in the order shown on screen. Cash-up at end of day follows a guided process denomination by denomination. What used to take 15 minutes now takes 5.' },
  { title: 'Create Accountability', description: 'Every drawer open event is recorded with a timestamp, user ID, and reason (sale, refund, no-sale, float check). If cash goes missing, the audit trail shows exactly who opened the drawer and when. Individual drawer assignment means each staff member is responsible for their own float. Accountability reduces both accidental errors and intentional theft.' },
  { title: 'Simplify End-of-Day', description: 'The guided cash-up process walks staff through counting each denomination, entering totals, and comparing against the POS expected figure. The variance report prints automatically. Managers review variances remotely from the cloud portal. No more handwritten cash-up sheets, no more spreadsheets, no more arguments about who was short. The system handles it.' },
];

export default function DiyCashDrawerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'DIY Cash Drawer' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Lock className="w-3 h-3 mr-2" />
                CASH DRAWER SETUP GUIDE
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  DIY Cash{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Drawer
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Auto-kick POS integration, key management, denomination configuration, cash reconciliation, and setup best practices — everything you need to manage cash properly.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Auto-kick drawer on cash transactions</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Full audit trail for every drawer open</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS with cash drawer from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Cash Drawer Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Proper cash management starts with the right setup and the right controls.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Cash Control Matters</h2>
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
                Setting Up Your Cash Drawer
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Physical installation</strong> is straightforward. The cash drawer sits under or beside the POS terminal. An RJ11 cable connects from the drawer to the receipt printer — the printer passes the kick signal when the POS commands it. Some drawers connect via USB directly to the terminal. Both methods are plug-and-play with the Posso POS.
                </p>
                <p>
                  <strong className="text-white">Denomination layout</strong> matters more than most people realise. Notes should be arranged large to small from left to right: £50, £20, £10, £5. Coins arranged in the front tray: £2, £1, 50p, 20p, 10p, 5p, 2p, 1p. When the POS calculates change, the cashier works left to right picking up each denomination. Consistency eliminates errors.
                </p>
                <p>
                  <strong className="text-white">Security best practices</strong>: never leave the drawer open unattended. Assign individual drawers to individual staff members where possible. Keep manual override keys in the safe. Run a cash reconciliation at every shift change, not just at close of business. Review variance reports weekly and investigate any pattern of shortages immediately.
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
                <Link href="/pdq-machine-small-business" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">PDQ Machine</p>
                  <p className="text-slate-400 text-sm mt-1">Card payment terminals</p>
                </Link>
                <Link href="/pos-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Software</p>
                  <p className="text-slate-400 text-sm mt-1">Complete POS software</p>
                </Link>
                <Link href="/shop-till-software" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Shop Till Software</p>
                  <p className="text-slate-400 text-sm mt-1">Retail till system</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="DIY Cash Drawer — Frequently Asked Questions" faqs={[
          { question: 'How does the auto-kick cash drawer work?', answer: 'The cash drawer connects to the receipt printer via an RJ11 cable or directly to the POS terminal via USB. When a cash transaction is completed on the POS, a signal is sent that triggers the drawer to open automatically. The drawer opens only when authorised by the POS — during a cash sale, refund, or manager-approved no-sale event. Every open event is logged with a timestamp and user.' },
          { question: 'What size cash drawer do I need?', answer: 'Standard cash drawers come in two main sizes: compact (330mm wide, 4 note and 5 coin compartments) suitable for small shops and kiosks, and full-size (410mm wide, 5 note and 8 coin compartments) suitable for shops handling high volumes of cash. The full-size model accommodates all UK denominations with room for cheques and vouchers. Posso can advise based on your business type.' },
          { question: 'Can different staff members have separate drawers?', answer: 'Yes. The POS supports individual drawer assignment. Each staff member logs in with their own PIN and is assigned to a specific drawer. Their transactions, float, and cash reconciliation are tracked separately. At shift change, one staff member cashes up and the next starts with a fresh float. This creates clear accountability and makes variance investigation straightforward.' },
          { question: 'How do I set up the float?', answer: 'Set your opening float amount in the POS — typically £100-£150 in mixed denominations. A recommended float breakdown: 1x£20, 2x£10, 4x£5, 5x£2, 10x£1, 10x50p, 10x20p, 10x10p, 10x5p for a £100 float. Staff verify the float at shift start by counting and confirming. If the float is short, the variance is recorded before any transactions begin.' },
          { question: 'What if the drawer does not open?', answer: 'If the auto-kick fails, check the RJ11 cable connection between the drawer and receipt printer. Ensure the printer is powered on and connected. Try printing a test receipt — if the printer works but the drawer does not kick, the issue is the RJ11 cable or the drawer mechanism. Use the manual key to open the drawer in the interim and contact support for troubleshooting.' },
          { question: 'How much does a POS with cash drawer cost?', answer: 'The complete POS system with auto-kick cash drawer starts from £499 + VAT. This includes the touchscreen terminal, receipt printer, cash drawer, POS software with cash reconciliation and audit trail, and all setup. Finance from £24.92 per week. A 2-year warranty covers both hardware and software. Free installation and staff training are included.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
