import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Bot, PhoneCall, BookOpen, CalendarCheck, UserCheck, CreditCard, Headphones, BarChart3, Clock } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Phone Ordering UK — 24/7 AI Phone Answering for Restaurants & Takeaways',
  description:
    'AI phone ordering for UK restaurants and takeaways. An AI receptionist answers every call, takes orders straight into your Posso One POS and kitchen, books tables, and sends payment links — 24/7. UK support.',
  keywords: [
    'ai phone ordering',
    'ai phone ordering uk',
    'ai phone answering restaurant',
    'ai phone answering service uk',
    'ai answering service takeaway',
    'restaurant voice ai uk',
    'ai order taking system',
    'ai receptionist restaurant',
    'ai phone agent restaurant uk',
    'automated phone ordering system',
    'ai takeaway ordering',
    'missed calls restaurant solution',
  ],
  alternates: {
    canonical: '/ai-phone-ordering',
  },
  openGraph: {
    title: 'AI Phone Ordering UK — 24/7 AI Phone Answering for Restaurants & Takeaways',
    description:
      'An AI receptionist that answers every call, takes orders straight into your POS and kitchen, books tables, and sends payment links — 24 hours a day. Built for UK hospitality.',
    url: 'https://www.posso.co.uk/ai-phone-ordering',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso AI Phone Ordering',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'AI phone answering and ordering for restaurants and takeaways. Answers every call in a natural voice, takes orders directly into the Posso One POS and kitchen display, books tables, recognises repeat customers, and sends secure payment links by SMS.',
    url: 'https://www.posso.co.uk/ai-phone-ordering',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      '24/7 AI phone answering in a natural voice',
      'Phone orders sent directly to POS and kitchen display',
      'Unlimited simultaneous calls — no engaged tone',
      'Table reservations by phone',
      'Caller ID and repeat customer recognition',
      'Secure payment links by SMS',
      'Live call transcripts and order log',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'AI Phone Ordering', item: 'https://www.posso.co.uk/ai-phone-ordering' },
    ],
  },
];

const features = [
  { icon: Bot, title: 'AI Order Taking', description: 'The AI answers in a natural, friendly voice and takes the full order — items, sizes, toppings, and special requests — for collection or delivery. It confirms the total and the ready time, then sends the order straight to your Posso One till and kitchen display. No app for the customer to install, no re-keying for your staff.' },
  { icon: PhoneCall, title: 'Answers 24/7, Never Engaged', description: 'The AI handles unlimited calls at the same time, so your line is never busy and nobody sits on hold during the Friday rush. It keeps answering after close too — taking pre-orders for tomorrow and answering questions while your team is at home. Every call answered on the first ring, every time.' },
  { icon: BookOpen, title: 'Knows Your Menu and Business', description: 'The AI is trained on your live Posso One menu — prices, portions, modifiers, and out-of-stock items stay in sync automatically. It answers the everyday questions that eat your staff’s time: opening hours, delivery areas, parking, dietary options, and how long the wait is right now.' },
  { icon: CalendarCheck, title: 'Table Bookings by Phone', description: 'Callers can book a table around the clock. The AI checks live availability, offers alternative times when you are full, and writes the booking into your Posso reservation diary with the customer’s name and party size. No missed bookings because the phone rang during service.' },
  { icon: UserCheck, title: 'Recognises Regular Customers', description: 'Caller ID is matched against your Posso customer database. The AI greets returning customers, recalls their address without asking again, and can offer their usual order — "Same as last time?" — just like your best counter staff would. New callers are added to your CRM automatically after their first order.' },
  { icon: CreditCard, title: 'Payment by Secure Text Link', description: 'For prepaid orders the AI texts the customer a secure PossoPay payment link. They pay on their phone in seconds, the order is confirmed, and the payment lands in the same reports as your till takings. No card numbers read out over the phone, no chargeback-prone manual entry.' },
];

const steps = [
  { number: '1', title: 'Keep Your Number', description: 'Forward your existing phone number to your new AI line — or advertise the new number directly. Nothing changes for your customers; they call the same way they always have.' },
  { number: '2', title: 'The AI Learns Your Business', description: 'It reads your live Posso One menu, prices, opening hours, and delivery settings. You review the greeting and answers in the dashboard, and go live typically within a day or two.' },
  { number: '3', title: 'Calls Answered, Orders Taken', description: 'From that moment every call is answered instantly. Orders, bookings, and questions are handled in a natural voice — and anything unusual is passed to your team.' },
  { number: '4', title: 'Orders Land in Your Kitchen', description: 'Each order appears on your Posso One till, prints in the kitchen, and shows on the kitchen display like any other order. The customer gets an SMS confirmation and, if needed, a payment link.' },
];

const pillars = [
  { icon: Clock, title: 'Never Miss a Call Again', description: 'As many as a third of calls to busy takeaways ring out at peak times — and a caller who cannot get through orders from whoever answers next. The AI answers every single call on the first ring, including the four calls that arrive at once at 7pm on a Saturday.' },
  { icon: BarChart3, title: 'More Revenue, Lower Labour Cost', description: 'A typical takeaway phone order is worth £15–£40. Capturing the calls you currently miss adds revenue without a penny of extra marketing — and the AI costs a fraction of staffing the phone, with no sick days, breaks, or training.' },
  { icon: Headphones, title: 'Your Team Stays With Guests', description: 'Every answered phone call pulls someone off the counter, the floor, or the pass. With the AI on the phones, your staff serve the customers in front of them — and only step in when a call genuinely needs a human.' },
];

export default function AiPhoneOrderingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'AI Phone Ordering' },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Bot className="w-3 h-3 mr-2" />
                24/7 AI PHONE ANSWERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  AI Phone{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ordering
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                An AI receptionist that answers every call in a natural voice, takes the order, books the table, and sends it all straight to your Posso One till and kitchen — 24 hours a day, 7 days a week.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Answers unlimited calls at once — never engaged</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Orders flow straight into your POS and kitchen display</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Built into Posso One — POS system from £499 + VAT</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium">
                  Hear It in Action — Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                  <Phone className="mr-2 h-5 w-5" /> 0808 175 3956
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem: missed calls = lost revenue */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Every Missed Call Is a Lost Order</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                The phone is still the busiest order channel for most takeaways — and the most neglected.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card rounded-xl p-8 border border-slate-700/50 text-center">
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">30%</p>
                <p className="text-slate-300">of calls can go unanswered during the peak-hour rush — callers hang up and ring your competitor instead.</p>
              </div>
              <div className="glass-card rounded-xl p-8 border border-slate-700/50 text-center">
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">£15–£40</p>
                <p className="text-slate-300">the typical value of a takeaway phone order. A handful of missed calls a night quietly costs hundreds every week.</p>
              </div>
              <div className="glass-card rounded-xl p-8 border border-slate-700/50 text-center">
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">3 min</p>
                <p className="text-slate-300">of staff time per phone order — taken from the counter, the floor, or the kitchen every time the phone rings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What the AI Handles for You</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Orders, bookings, questions, and payments — handled like your best member of staff, on every call.
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

        {/* Built into the POS — the Posso advantage */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-8">
                Built Into Your POS — Not Bolted On
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Most AI phone agents are a separate service that has to be wired up to your till through a third-party integration. Posso AI Phone Ordering is different: <strong className="text-white">it is part of Posso One</strong>. Phone orders drop into the same order queue as your counter, kiosk, and online orders — the same kitchen display, the same receipt printers, the same end-of-day reports.
                </p>
                <p>
                  That means <strong className="text-white">no menu to maintain in a second system</strong>. When you change a price, add a special, or 86 a dish on the till, the AI knows immediately. When the AI takes an order, it appears on your Posso One till on Windows, Android, or iPad — and prints in the kitchen like any other order.
                </p>
                <p>
                  You also get the full paper trail: <strong className="text-white">live call transcripts, recordings, and an order log</strong> in your Posso dashboard, so you can hear exactly how your AI greets customers and fine-tune what it says. Phone revenue shows up in your reports next to every other channel — one system, one set of numbers.
                </p>
                <p>
                  Late-night trade is where this bites hardest — for{' '}
                  <Link href="/pos-for-kebab-shop" className="text-primary hover:underline">kebab shops taking phone orders at peak</Link>,{' '}
                  the calls that go unanswered between eleven and three are the ones worth the most.
                </p>
                <p>
                  And because Posso is a <strong className="text-white">UK company with UK-based support</strong>, your AI speaks naturally to British customers — pounds and pence, postcodes, collection and delivery — and our team on <a href="tel:+448081753956" className="text-primary hover:underline">0808 175 3956</a> sets it up with you end to end.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How It Works</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Live in days, not weeks — and your customers keep calling the number they already know.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {steps.map((s) => (
                <div key={s.number} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4 text-white font-bold">
                    {s.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value pillars */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Restaurants Switch the Phones to AI</h2>
              <div className="grid sm:grid-cols-3 gap-8">
                {pillars.map((p) => (
                  <div key={p.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                    <p className="text-slate-400">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related solutions */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Solutions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/text-ordering-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Text Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">SMS orders &amp; caller ID</p>
                </Link>
                <Link href="/takeaway-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway POS</p>
                  <p className="text-slate-400 text-sm mt-1">Complete takeaway system</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Commission-free web orders</p>
                </Link>
                <Link href="/tablemaestro" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Table Maestro</p>
                  <p className="text-slate-400 text-sm mt-1">Reservations &amp; bookings</p>
                </Link>
              </div>
              <p className="text-slate-400 text-center mt-6">
                The AI answers the calls — the line itself matters too. See{' '}
                <Link href="/cloud-phone-for-restaurants" className="text-primary hover:underline">cloud phones for restaurants</Link>:{' '}
                two lines and unlimited internet on one bill, so the order line is never engaged.
              </p>
            </div>
          </div>
        </section>

        <FAQSection title="AI Phone Ordering — FAQ" faqs={[
          { question: 'Does the AI sound like a robot?', answer: 'No. It speaks in a natural, conversational voice with normal pacing — most callers do not realise they are speaking to an AI. It handles interruptions, corrections ("actually, make that a large"), and background noise the way a person would, and it never sounds rushed on the tenth call of the evening.' },
          { question: 'What happens if a call is too complicated for the AI?', answer: 'The AI recognises when a caller needs a person — a complaint, a large catering enquiry, or anything outside its remit — and transfers the call to your staff or takes a message with a callback number. You decide the rules: which situations transfer, to which phone, and at which hours.' },
          { question: 'Do I have to change my phone number?', answer: 'No. You keep your existing number and simply forward it to your AI line — always, when busy, or only when unanswered, your choice. Customers call exactly as they always have. You can also advertise the AI line directly as a dedicated ordering number.' },
          { question: 'Where do the orders go?', answer: 'Straight into your Posso One POS. The order appears on the till, prints in the kitchen, and shows on the kitchen display exactly like a counter or online order, with the customer’s name, number, and address attached. The customer receives an SMS confirmation, and prepaid orders include a secure payment link.' },
          { question: 'How long does setup take?', answer: 'Typically one to two days. The AI reads your menu, prices, and opening hours from your Posso One system, we configure the greeting and call rules with you, and you test-call it before going live. Because it is built into the POS, there is no third-party integration project.' },
          { question: 'What does AI phone ordering cost?', answer: 'It is an add-on to Posso One, with the POS system from £499 + VAT. Pricing for the AI phone service depends on call volume — in every case it costs a fraction of staffing the phone, and it pays for itself from the calls you currently miss. Book a free demo and we will price it for your business.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
