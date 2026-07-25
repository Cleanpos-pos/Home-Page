import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  Check, Phone, ArrowRight, GraduationCap, CreditCard, Fingerprint,
  QrCode, Clock, BarChart3, ShieldCheck, Lock, FileCheck, Smartphone,
  Utensils, Building2, CalendarClock, Code, Plug,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const PAGE_URL = 'https://www.posso.co.uk/cashless-catering-colleges-universities';

export const metadata: Metadata = {
  title: 'Cashless Catering for Colleges & Universities',
  description:
    'Cashless catering and payment systems for UK colleges, sixth forms and universities. Prepare for the September 2026 free school meals expansion with fast, anonymous, fully auditable payments. Bespoke software from Posso. Call 0808 175 3956.',
  keywords: [
    'cashless catering colleges',
    'cashless catering universities',
    'cashless payments colleges',
    'cashless catering sixth form',
    'free school meals expansion 2026',
    'further education cashless catering',
    'college catering system uk',
    'university cashless payment system',
    'student meal payment system',
    'cashless catering software uk',
    'anonymous free meal payments',
    'campus catering epos',
  ],
  alternates: {
    canonical: '/cashless-catering-colleges-universities',
  },
  openGraph: {
    title: 'Cashless Catering for Colleges & Universities | Posso UK',
    description:
      'Cashless catering and payment systems for UK colleges, sixth forms and universities. Built for the September 2026 free school meals expansion. Fast, anonymous, fully auditable.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Posso cashless catering for colleges and universities' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cashless Catering for Colleges & Universities | Posso UK',
    description: 'Cashless catering and payment systems for UK colleges, sixth forms and universities. Built for the September 2026 free school meals expansion.',
    images: ['/og-image.png'],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cashless Catering for Colleges & Universities',
    serviceType: 'Cashless catering and campus payment systems',
    provider: {
      '@type': 'Organization',
      name: 'Posso Ltd',
      url: 'https://www.posso.co.uk',
      telephone: '+44-808-175-3956',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'Further and higher education providers',
    },
    description:
      'Cashless catering, identification and payment systems for UK colleges, sixth forms and universities, designed to meet the September 2026 free school meals expansion with anonymous, auditable, attendance-linked transactions.',
    url: PAGE_URL,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cashless Catering for Colleges and Universities: Preparing for the 2026 Free School Meals Expansion',
    description:
      'How UK colleges, sixth forms and universities can move to cashless catering ahead of the September 2026 free school meals expansion, protecting student dignity while meeting funding and record-keeping rules.',
    author: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
    publisher: {
      '@type': 'Organization',
      name: 'Posso Ltd',
      logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' },
    },
    datePublished: '2026-06-14',
    dateModified: '2026-06-14',
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    image: 'https://www.posso.co.uk/og-image.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is changing for college and sixth-form catering in September 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'From the start of the 2026 to 2027 academic year, every student in a Department for Education funded institution — including further education colleges and, for the first time, school sixth forms — whose household receives Universal Credit becomes entitled to a free meal. The Department for Education estimates the wider reform will make around 500,000 additional young people eligible. Providers must be able to issue and redeem free meals on each day a student attends their study programme.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does a cashless system protect free-meal students from being identified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Government guidance asks providers to fund free meals through an electronic credit or voucher redeemed at the point of sale, precisely so that eligible students are not singled out. With Posso, a free-meal entitlement is loaded onto the student’s account and spent in exactly the same way as any cash or card balance. The till shows no difference between a paying student and a funded one, removing the stigma that paper tickets or separate queues create.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the free meal funding rate for further education in 2026 to 2027?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Department for Education has confirmed the meal rate for the 2026 to 2027 academic year will, as a minimum, match the previous rate of £2.61 per eligible student. Institutions receive two-thirds of their allocation in August 2026 and the remaining third in April 2027, and may use up to 5% of the allocation for administration. Posso records every funded transaction at learner level so the spend is reconciled against the grant automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the system link meal payments to student attendance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The guidance requires institutions to keep records that link funded meals to actual attendance. Posso timestamps each transaction against the identified student, so reporting demonstrates that entitlements were redeemed only on days a student attended their programme. Reports export in the format your finance team and auditors need.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment and identification methods does Posso support on campus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Students can pay or identify themselves by smart card, PIN, QR code on a phone, biometric recognition, or a linked account, alongside contactless debit and credit cards, Apple Pay and Google Pay. Average transaction times are around three seconds, which keeps lunchtime queues moving in a busy refectory.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Posso compare with other cashless catering providers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Several established providers have served the schools and colleges cashless market for many years and offer capable catering systems. Posso provides the same core capabilities — multi-method payments, pre-order, self-service kiosks, anonymous free-meal redemption and learner-level reporting — and adds bespoke software development, so colleges and universities with student records, finance or campus-card systems already in place can have the catering platform built around them rather than the other way round.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should colleges start the process now rather than nearer September 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eligibility checking, account creation, hardware installation, kitchen workflow changes and staff training all take time, and demand on catering services is expected to rise sharply once the expansion begins. Procuring and configuring a system over the summer leaves no margin for testing. Beginning now means the platform is live, audited and familiar to staff and students before the first funded meal is served.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Cashless Catering for Colleges & Universities', item: PAGE_URL },
    ],
  },
];

const paymentMethods = [
  { icon: CreditCard, title: 'Contactless & Mobile Wallets', description: 'Contactless debit and credit cards, Apple Pay and Google Pay are accepted at every till and kiosk. Students who never carry cash are served without friction, and the institution handles far less physical money.' },
  { icon: Fingerprint, title: 'Biometric & Card Identification', description: 'Students identify themselves by campus smart card, secure PIN or biometric recognition. The method suits the setting — a sixth-form refectory, a university food court, or an unstaffed grab-and-go counter.' },
  { icon: QrCode, title: 'QR & Account Top-Ups', description: 'A QR code in the student app acts as a wallet. Parents, guardians or students top up online, balances update in real time, and there is no queue at a cash-loader on the way into lunch.' },
  { icon: Clock, title: 'Three-Second Transactions', description: 'Identification and payment complete in around three seconds. During a compressed lunch break with hundreds of students, throughput is the difference between a meal eaten and a meal missed.' },
  { icon: Utensils, title: 'Pre-Order & Grab-and-Go', description: 'Students reserve meals through the app or web ahead of time and collect without queuing. Kitchens forecast demand accurately, cut waste and prepare to a known number rather than a guess.' },
  { icon: Smartphone, title: 'Self-Service Kiosks', description: 'Touchscreen kiosks let students order, identify and pay unaided. They extend service capacity at peak times without adding staff, and they read the same accounts and entitlements as the main tills.' },
];

const compliance = [
  { icon: Lock, title: 'Anonymous Free-Meal Redemption', description: 'A free-meal entitlement is loaded onto the student account and spent exactly like any other balance. The till draws no distinction between a funded student and a paying one. No paper tickets, no separate queue, no visible marker — the dignity that government guidance asks providers to protect is built into the transaction itself.' },
  { icon: FileCheck, title: 'Attendance-Linked Records', description: 'Every funded meal is timestamped against the identified student. Reporting demonstrates that entitlements were redeemed only on days the student attended their study programme, satisfying the requirement to link payments to actual attendance.' },
  { icon: BarChart3, title: 'Learner-Level Reconciliation', description: 'Spend is tracked per student and rolled up against your allocation, calculated on the confirmed minimum meal rate of £2.61 for 2026 to 2027. The funding distributed, the meals redeemed and any enhancement above the rate are all evidenced for audit.' },
  { icon: ShieldCheck, title: 'Secure & PCI-Compliant', description: 'Card payments meet current PCI DSS standards with end-to-end encryption. Student data is held securely and access is controlled by role, so catering, finance and administration each see only what their work requires.' },
];

const possoBenefits = [
  { title: 'Built Around Your Campus, Not a Template', description: 'Colleges and universities already run student record systems, finance ledgers and campus-card schemes. Rather than forcing catering into a fixed product, Posso builds the platform around the systems you already operate, so meal data, entitlements and identities stay consistent across the institution.' },
  { title: 'One Platform Across Every Outlet', description: 'A refectory, a coffee bar, a vending wall and an unstaffed grab-and-go counter share one account, one balance and one set of reports. A student moves between them with a single identity, and management sees the whole estate from a single dashboard.' },
  { title: 'Works When the Network Does Not', description: 'Posso One is offline-first. Service continues through a broadband outage — orders are taken, balances are read and payments are processed locally, then everything reconciles automatically once connectivity returns. A failed line never closes the canteen.' },
  { title: 'UK Support and Free Training', description: 'Installation, menu build and staff training are handled by a UK team, and support is reachable by phone and remote assistance. The people who configure the system are the people who keep it running through term.' },
];

const bespokeFeatures = [
  { icon: Plug, title: 'Integration with Student & Finance Systems', description: 'If your MIS, student record, campus card or finance software exposes an API, Posso connects to it. Eligibility, enrolment and entitlement data flow automatically, removing the manual re-keying that introduces error and delay.' },
  { icon: Code, title: 'Workflows Designed for Your Institution', description: 'A single sixth form and a multi-campus university do not run catering the same way. Screens, allowances, meal deals, allergen handling and reporting are built to match your operation, your policies and your timetable.' },
  { icon: Building2, title: 'Multi-Campus and Multi-Brand Ready', description: 'Architecture designed for expansion lets you add outlets, sites or sub-brands without rebuilding. Each location operates independently at the till while data rolls up centrally for funding returns and management reporting.' },
  { icon: GraduationCap, title: 'White-Label Student Experience', description: 'The app, kiosks and digital receipts can carry your institution’s identity rather than a supplier’s. Students see their own college or university at every touchpoint, reinforcing a single, professional campus brand.' },
];

const relatedLinks = [
  { href: '/self-service-epos', title: 'Self-Service ePOS', subtitle: 'Kiosks from £699 + VAT' },
  { href: '/bespoke-epos-software', title: 'Bespoke ePOS Software', subtitle: 'Custom-built for you' },
  { href: '/kiosks', title: 'Self-Order Kiosks', subtitle: 'Faster service at peak' },
  { href: '/online-ordering', title: 'Online Ordering & Pre-Order', subtitle: 'Order ahead, collect fast' },
  { href: '/credit-card-machines', title: 'Card Payment Machines', subtitle: 'Contactless & mobile wallets' },
  { href: '/digital-signage', title: 'Digital Menu Signage', subtitle: 'Allergens & pricing on screen' },
  { href: '/pos', title: 'ePOS Systems', subtitle: 'All Posso point-of-sale' },
  { href: '/finance', title: 'Finance Options', subtitle: 'Spread the cost' },
];

export default function CashlessCateringCollegesUniversitiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Cashless Catering for Colleges & Universities' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <CalendarClock className="w-3 h-3 mr-2" />
                READY FOR THE SEPTEMBER 2026 FREE SCHOOL MEALS EXPANSION
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Cashless Catering for{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Colleges &amp; Universities
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Fast, anonymous and fully auditable payments for further and higher education catering. Posso prepares your college, sixth form or university for the 2026 free school meals expansion — and builds the system around the campus you already run.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Free-meal entitlements redeemed with no visible difference at the till</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Learner-level records that link funded meals to attendance</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Bespoke integration with your MIS, finance and campus-card systems</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Government guidance & urgency */}
        <section className="py-20 bg-slate-900/30" aria-label="The 2026 free school meals expansion">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
                The 2026 Free School Meals Expansion: What It Means for Your Catering
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  From the start of the <strong className="text-white">2026 to 2027 academic year</strong>, every student in a Department for Education funded institution whose household receives Universal Credit becomes entitled to a free meal. For the first time the scheme includes <strong className="text-white">school sixth forms</strong> alongside further education colleges, and across the wider reform the Department for Education estimates that around <strong className="text-white">500,000 additional young people</strong> will become eligible.
                </p>
                <p>
                  The funding rules are specific. The meal rate for 2026 to 2027 will, as a minimum, match the previous rate of <strong className="text-white">£2.61 per eligible student</strong>. Institutions receive two-thirds of their allocation in August 2026 and the remaining third in April 2027, and may apply up to <strong className="text-white">5% of the allocation</strong> to administration. A meal must be available for each day a student attends their study programme.
                </p>
                <p>
                  Two requirements have a direct bearing on the catering system you choose. First, the guidance asks providers to fund the free meal through an <strong className="text-white">electronic credit or voucher redeemed on-site</strong>, specifically so that eligible students are not identified or stigmatised. Second, institutions must keep records that <strong className="text-white">link payments to actual attendance</strong> and evidence how the funding was spent at learner level. A modern cashless platform is the practical way to satisfy both at once.
                </p>
                <p className="text-white font-medium">
                  This is why the time to act is now. Eligibility checking, account creation, hardware installation, kitchen workflow changes and staff training cannot be compressed into the final weeks before term. Beginning the process this year leaves room to test, train and refine — so the first funded meal in September 2026 is served on a system that already works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment & service features */}
        <section className="py-20" aria-label="Cashless payment features for campus catering">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Cashless Payments Built for Campus Life</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Every method a student might use to pay or identify, served at the speed a busy lunch break demands.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {paymentMethods.map((f) => (
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

        {/* Compliance & dignity */}
        <section className="py-20 bg-slate-900/30" aria-label="Compliance, dignity and reporting">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Dignity, Compliance and a Clean Audit Trail</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                The features that turn the government&apos;s requirements into everyday practice — without anyone at the till noticing the difference.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {compliance.map((f) => (
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

        {/* Why Posso */}
        <section className="py-20" aria-label="Why colleges and universities choose Posso">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Education Providers Choose Posso</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {possoBenefits.map((b) => (
                  <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">{b.title}</h3>
                    <p className="text-slate-400">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Established providers context */}
        <section className="py-20 bg-slate-900/30" aria-label="How Posso compares with established providers">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                A Modern Alternative to Established Catering Suppliers
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Cashless catering is not new to education. <strong className="text-white">Several long-standing providers</strong> have supplied schools and colleges for decades, and they offer well-proven systems for payment, identification and pre-order. Any institution comparing options should expect a capable product from the established names in the market.
                </p>
                <p>
                  Posso matches that core capability — <strong className="text-white">multi-method payments, three-second transactions, pre-order, self-service kiosks, anonymous free-meal redemption and learner-level reporting</strong> — and then goes a step further. Because Posso develops its own software, the platform can be shaped to the systems a college or university already runs, rather than asking the institution to adapt to a fixed product.
                </p>
                <p>
                  For a small sixth form that means a tidy, affordable system that is quick to deploy. For a multi-campus college or a university food court it means deep integration with student records, finance and campus-card schemes, a single account that follows a student across every outlet, and reporting designed around your funding returns. The decision is no longer simply which supplier to buy from — it is whether your timetable for 2026 allows a system to be <strong className="text-white">built around you</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bespoke software */}
        <section className="py-20" aria-label="Bespoke software for education catering">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Bespoke Software for Education Catering</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Where an off-the-shelf product stops, Posso&apos;s in-house development begins. Build the catering platform your institution actually needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {bespokeFeatures.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/bespoke-epos-software" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                Explore Bespoke ePOS Software <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* How implementation works */}
        <section className="py-20 bg-slate-900/30" aria-label="How implementation works">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                From Discovery to Go-Live Before September 2026
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  We begin with a <strong className="text-white">discovery session</strong> covering your catering outlets, student numbers, existing systems and the policies you must satisfy. There is no sales pitch — only the questions needed to scope a system that fits your institution and the 2026 funding rules.
                </p>
                <p>
                  From there we agree a <strong className="text-white">specification and integration plan</strong>: how eligibility and enrolment data will flow from your MIS, how free-meal entitlements will be loaded, and how reporting will evidence attendance-linked spend. You sign this off before any build begins, so there are no surprises later.
                </p>
                <p>
                  We then <strong className="text-white">install, configure and train</strong> on-site, run a parallel test through a typical service, and refine before go-live. Because the same team that builds the system supports it, the people who know your configuration are the people who answer the phone in term time. Start now and the platform is live, audited and second nature to staff well before the first funded meal is served.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related internal links */}
        <section className="py-12" aria-label="Related Posso solutions">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Related Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                    <p className="font-semibold text-white">{l.title}</p>
                    <p className="text-slate-400 text-sm mt-1">{l.subtitle}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Cashless Catering for Colleges & Universities — Frequently Asked Questions" faqs={[
          { question: 'What is changing for college and sixth-form catering in September 2026?', answer: 'From the start of the 2026 to 2027 academic year, every student in a Department for Education funded institution — including further education colleges and, for the first time, school sixth forms — whose household receives Universal Credit becomes entitled to a free meal. The Department for Education estimates the wider reform will make around 500,000 additional young people eligible. Providers must be able to issue and redeem free meals on each day a student attends their study programme.' },
          { question: 'How does a cashless system protect free-meal students from being identified?', answer: 'Government guidance asks providers to fund free meals through an electronic credit or voucher redeemed at the point of sale, precisely so that eligible students are not singled out. With Posso, a free-meal entitlement is loaded onto the student’s account and spent in exactly the same way as any cash or card balance. The till shows no difference between a paying student and a funded one, removing the stigma that paper tickets or separate queues create.' },
          { question: 'What is the free meal funding rate for further education in 2026 to 2027?', answer: 'The Department for Education has confirmed the meal rate for the 2026 to 2027 academic year will, as a minimum, match the previous rate of £2.61 per eligible student. Institutions receive two-thirds of their allocation in August 2026 and the remaining third in April 2027, and may use up to 5% of the allocation for administration. Posso records every funded transaction at learner level so the spend is reconciled against the grant automatically.' },
          { question: 'Can the system link meal payments to student attendance?', answer: 'Yes. The guidance requires institutions to keep records that link funded meals to actual attendance. Posso timestamps each transaction against the identified student, so reporting demonstrates that entitlements were redeemed only on days a student attended their programme. Reports export in the format your finance team and auditors need.' },
          { question: 'What payment and identification methods does Posso support on campus?', answer: 'Students can pay or identify themselves by smart card, PIN, QR code on a phone, biometric recognition, or a linked account, alongside contactless debit and credit cards, Apple Pay and Google Pay. Average transaction times are around three seconds, which keeps lunchtime queues moving in a busy refectory.' },
          { question: 'How does Posso compare with other cashless catering providers?', answer: 'Several established providers have served the schools cashless market for many years and offer capable catering systems. Posso provides the same core capabilities — multi-method payments, pre-order, self-service kiosks, anonymous free-meal redemption and learner-level reporting — and adds bespoke software development, so colleges and universities with student records, finance or campus-card systems already in place can have the catering platform built around them.' },
          { question: 'Why should colleges start the process now rather than nearer September 2026?', answer: 'Eligibility checking, account creation, hardware installation, kitchen workflow changes and staff training all take time, and demand on catering services is expected to rise sharply once the expansion begins. Procuring and configuring a system over the summer leaves no margin for testing. Beginning now means the platform is live, audited and familiar to staff and students before the first funded meal is served.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
