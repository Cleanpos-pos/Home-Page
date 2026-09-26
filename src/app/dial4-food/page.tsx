import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  Phone, PhoneCall, Bot, ClipboardCheck, BookOpen, Bike, Printer, CreditCard,
  ArrowRight, Check, Sparkles, Mic,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const SLUG = 'dial4-food';
const URL = `https://www.posso.co.uk/${SLUG}`;
const TOOL = 'https://www.dial4.food';

export const metadata: Metadata = {
  title: 'AI Voice Ordering for Restaurants — Dial4.food',
  description:
    'Dial4.food is AI voice ordering from Posso. Customers call a dedicated number and tell the AI what they want; the confirmed order prints straight to your kitchen. Every call answered, no app for customers. Powered by Posso AI.',
  keywords: [
    'AI voice ordering',
    'AI phone ordering for restaurants',
    'voice ordering for restaurants',
    'Dial4.food',
    'order food by phone call',
    'AI takes phone orders',
    'restaurant phone ordering AI',
    'AI order taking takeaway',
  ],
  alternates: { canonical: `/${SLUG}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Voice Ordering for Restaurants — Dial4.food | Posso',
    description:
      'Customers call a dedicated Dial4.food number and simply say what they want. Posso AI takes the order from your live menu and prints a confirmed ticket to your kitchen.',
    url: URL,
    type: 'website',
    images: [{ url: 'https://www.posso.co.uk/images/posso_caller_id_delivery.png', width: 1024, height: 1024, alt: 'A food order arriving by phone call, ready to print in the restaurant kitchen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Ordering for Restaurants — Dial4.food | Posso',
    description: 'Customers call, the AI takes the order from your menu, and it prints in your kitchen. Powered by Posso AI.',
    images: ['https://www.posso.co.uk/images/posso_caller_id_delivery.png'],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Dial4.food',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Phone',
    url: TOOL,
    description:
      'An AI voice-ordering service from Posso for UK restaurants and takeaways. Customers browse the menu online, call a dedicated Dial4.food number and tell the AI assistant what they want; Posso AI takes the order from the live menu, reads it back with the total, and sends a confirmed ticket to the restaurant’s till, kitchen printer or display.',
    provider: { '@id': 'https://www.posso.co.uk/#organization' },
    inLanguage: 'en-GB',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Dial4.food AI Voice Ordering', item: URL },
    ],
  },
];

const flow = [
  { n: '01', title: 'A customer taps your number', body: 'They find your menu and tap your dedicated Dial4.food number — from your listing, a QR code, your own website or a social post.' },
  { n: '02', title: 'Posso AI takes the order', body: 'The AI works from your live menu — prices, sizes, options and what is available today — asks the right follow-up questions and handles changes mid-order.' },
  { n: '03', title: 'It reads the order back', body: 'It repeats the full order and the total, confirms collection or delivery and the address, and only sends it once the caller agrees.' },
  { n: '04', title: 'It prints in your kitchen', body: 'A clear, structured ticket lands on your Posso POS, order terminal and kitchen printer or display — no handwriting, no re-keying.' },
];

const benefits = [
  { icon: PhoneCall, title: 'Never miss a call', body: 'Every call is answered, even when four arrive at once at 7pm on a Saturday — no ringing out, no hold music, and no customer ordering from whoever picks up next.' },
  { icon: ClipboardCheck, title: 'Clear, structured tickets', body: 'No handwriting to decipher and no details lost between the phone and the pass. Sizes, options and extras arrive exactly as the customer said them.' },
  { icon: BookOpen, title: 'Your menu, your prices', body: 'The AI orders from your live menu — sizes, options, extras and availability applied every time — so a sold-out item is never taken.' },
  { icon: Bike, title: 'Collection and delivery', body: 'Offer collection, plus delivery where you run it. The AI confirms the address and reads the total, delivery included, before it sends the order.' },
  { icon: Printer, title: 'Straight into Posso', body: 'Orders land on your Posso POS, order terminals and kitchen printer or display, alongside your counter and online orders — one flow, one set of numbers.' },
  { icon: CreditCard, title: 'Optional Posso Pay', body: 'Take payment during the call through Posso Pay on supported setups, or keep it pay-on-collection — your choice, settling into the same reports as your till.' },
];

const aiHandles = [
  'Choosing sizes and portions',
  'Adding toppings and extras',
  'Removing ingredients',
  'Collection or delivery',
  'Handling corrections mid-order',
  'Reading the order and total back',
  'Confirming delivery addresses',
  'Taking payment during the call (supported setups)',
];

const whyCustomers = [
  { t: 'No app to download', d: 'Nothing to install, update or make room for on a phone.' },
  { t: 'No password to remember', d: 'No account, no sign-up and no reset emails — just call.' },
  { t: 'Easier if you’d rather talk', d: 'Say what you want in your own words instead of tapping through screens.' },
  { t: 'Faster than fiddly menus', d: '“Large, no onions, extra cheese” takes seconds to say.' },
  { t: 'Ask before you order', d: 'Check what is in a dish, how big a portion is, or what is spicy.' },
  { t: 'Works for everyone', d: 'Suits people of all ages and abilities, including anyone who finds small screens hard.' },
];

export default function Dial4FoodPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Dial4.food AI Voice Ordering' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Sparkles className="w-3 h-3 mr-2" />
              AI VOICE ORDERING · POWERED BY POSSO AI
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              AI voice ordering for restaurants, with Dial4.food
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl">
              <strong className="text-white">Dial4.food</strong> turns every phone call into a confirmed digital order. Customers call your dedicated number and simply tell the AI what they want; <Link href="/pos" className="text-primary hover:underline">Posso&nbsp;AI</Link> takes the order from your live menu, reads it back with the total, and prints a clean ticket straight to your kitchen — every call answered, with no app or account for the customer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={TOOL} className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                Get your restaurant on Dial4.food <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> Book a demo
              </a>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="pb-4">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/posso_caller_id_delivery.png"
                alt="A restaurant phone order captured and ready to print in the kitchen"
                width={1024}
                height={1024}
                className="rounded-2xl border border-slate-700/50 shadow-2xl shadow-primary/10 w-full h-auto max-h-[420px] object-cover"
              />
            </figure>
          </div>
        </section>

        {/* Short answer card */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-primary/30 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">In short</p>
              <p className="text-slate-200 text-lg leading-relaxed">
                Dial4.food is an AI voice-ordering service from Posso for UK restaurants and takeaways. Customers browse your menu online, tap a dedicated Dial4.food number and tell the AI assistant what they want; <strong className="text-white">Posso AI takes the order from your live menu</strong>, asks the right follow-up questions, reads the order and total back, then sends a confirmed ticket to your till, kitchen printer or display. Every call is answered — even in the Friday rush — with <strong className="text-white">no app or account for the customer</strong>, and it works for collection and delivery. It is powered by Posso AI, which connects the call to your menu, payments, POS and kitchen.
              </p>
            </div>
          </div>
        </section>

        {/* From call to kitchen */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-3">From call to kitchen</h2>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              No app to install and no account to create. If a customer can make a phone call, they can order.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {flow.map((s) => (
                <div key={s.n} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold gradient-text">{s.n}</span>
                    <Mic className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="text-slate-400 text-sm mt-2">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Turn every phone call into a confirmed order</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A dedicated AI ordering channel for your restaurant — the calls you miss today, answered and turned into clean digital tickets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                  <p className="text-slate-400 text-sm mt-2">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* It understands how people order */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4">It understands how people actually order</h2>
            <p className="text-slate-300 text-lg mb-8">
              Posso AI works from each restaurant&apos;s real menu — prices, portions, options and what is available today. It handles the messy, human way people order, and reads everything back before the order is sent:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {aiHandles.map((h) => (
                <li key={h} className="flex items-start gap-2 glass-card rounded-xl border border-slate-700/50 p-4">
                  <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" /> <span className="text-slate-300 text-sm">{h}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm mt-4">Options such as delivery areas and taking payment depend on each restaurant&apos;s setup.</p>
          </div>
        </section>

        {/* Why customers use it */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text">Ordering food shouldn&apos;t need a tutorial</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                People already know how to ask for what they want — Dial4.food lets them do exactly that, which is why customers pick up the phone.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyCustomers.map((w) => (
                <div key={w.t} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white">{w.t}</h3>
                  <p className="text-slate-400 text-sm mt-2">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Powered by Posso AI + differentiation */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white">Powered by Posso AI</h2>
            </div>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Dial4.food is the customer-facing side of Posso&apos;s voice ordering: a dedicated restaurant page and phone number your customers can find and call. Behind every conversation, Posso AI connects the call to your menu engine, <Link href="/credit-card-machines" className="text-primary hover:underline">payments</Link>, POS terminals, <Link href="/kitchen-display-system" className="text-primary hover:underline">kitchen printers and displays</Link> and order management — so a spoken order becomes a structured ticket in the same system as your <Link href="/restaurant-epos" className="text-primary hover:underline">EPOS</Link>, <Link href="/online-ordering" className="text-primary hover:underline">online ordering</Link> and counter takings.
              </p>
              <p>
                Prefer to keep your own existing phone number rather than a dedicated Dial4.food line? That is a different setup — see <Link href="/ai-phone-ordering" className="text-primary hover:underline">AI phone ordering</Link>, where the AI answers calls on your current number and can also handle table bookings. Both run on Posso AI; Dial4.food adds a listing customers can discover and a number built for ordering.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Answer every call — without answering the phone</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get your restaurant a Dial4.food page and number, and let Posso AI take the orders while your team looks after the customers in front of them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TOOL} className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                List your restaurant on Dial4.food <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> Talk to Posso
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">More Posso ordering &amp; AI</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/ai-phone-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">AI Phone Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">AI on your own number</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Commission-free, your brand</p>
                </Link>
                <Link href="/ai-food-image-generator" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">AI Food Images</p>
                  <p className="text-slate-400 text-sm mt-1">15 free menu photos</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Posso ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">The system behind it all</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Dial4.food AI voice ordering — FAQs" faqs={[
          { question: 'What is Dial4.food?', answer: 'Dial4.food is an AI voice-ordering service from Posso for UK restaurants and takeaways. Customers browse a restaurant’s menu online, tap a dedicated Dial4.food number and tell the AI assistant what they want. Posso AI takes the order from the live menu, reads it back with the total and sends a confirmed ticket to the restaurant’s kitchen. There is no app or account for the customer.' },
          { question: 'How does Dial4.food work for my restaurant?', answer: 'You get a dedicated Dial4.food restaurant page and phone number. When a customer calls, Posso AI takes the order from your live menu — sizes, options, extras and availability — confirms collection or delivery and the total, then sends a clear, structured ticket to your Posso POS, order terminal and kitchen printer or display. Every call is answered, even at peak.' },
          { question: 'Do customers need an app or account to order?', answer: 'No. That is the point — no app to download, no account to create and no password to remember. If a customer can make a phone call, they can order. It suits people of all ages and abilities, including anyone who finds small screens difficult.' },
          { question: 'What can the AI handle on a call?', answer: 'It chooses sizes and portions, adds toppings and extras, removes ingredients, handles corrections mid-order, confirms collection or delivery and the delivery address, and reads the full order and total back before sending. On supported setups it can also take payment during the call. It works from your real menu, so it never takes a sold-out item.' },
          { question: 'Does it work with my Posso till and kitchen printer?', answer: 'Yes. Dial4.food runs on Posso AI, which sends confirmed orders to your Posso POS, order terminals and kitchen printer or display — alongside your counter and online orders, in one flow and one set of reports. There is no re-keying for your staff.' },
          { question: 'Can customers pay over the phone?', answer: 'On supported setups, yes — payment can be taken during the call through Posso Pay, and it settles into the same reports as your till takings. You can also keep orders pay-on-collection. Payment and delivery options depend on each restaurant’s setup.' },
          { question: 'How is Dial4.food different from AI phone ordering on my own number?', answer: 'Dial4.food gives you a dedicated ordering number and a listing customers can discover and call. Posso’s AI phone ordering instead puts the AI on your existing phone line, answering the calls that come to your current number and handling questions and table bookings too. Both use Posso AI — the right one depends on whether you want a dedicated ordering line or AI on the number you already advertise.' },
          { question: 'How do I get my restaurant on Dial4.food?', answer: 'List your restaurant at dial4.food, or book a demo with the Posso team. We set up your menu, your dedicated page and number, and connect it to your POS and kitchen so orders arrive ready to cook.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
