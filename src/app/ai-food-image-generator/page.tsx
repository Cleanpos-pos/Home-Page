import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles, Clock, Camera, Palette, RefreshCw, Download, Wand2,
  Check, ArrowRight, Phone, Monitor, ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const SLUG = 'ai-food-image-generator';
const URL = `https://www.posso.co.uk/${SLUG}`;
const TOOL = 'https://images.posso.co.uk';

export const metadata: Metadata = {
  title: 'AI Food Image Generator for UK Menus',
  description:
    "Create professional AI food photos for your menu in minutes — no photographer, no studio, no waiting. Posso's Food Menu Studio turns a plain-English dish description into a consistent menu image. 15 free to start, no card required.",
  keywords: [
    'AI food image generator',
    'AI food photography',
    'menu image generator',
    'food photos for menu',
    'AI menu pictures',
    'food images for Just Eat Deliveroo',
    'restaurant menu photography UK',
    'takeaway menu images',
    'digital menu board images',
  ],
  alternates: { canonical: `/${SLUG}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Food Image Generator for UK Menus | Food Menu Studio by Posso',
    description:
      'Turn a written dish description into a professional, consistent menu photo in seconds. 15 free images, no card. Built for UK restaurants, takeaways, cafés and pubs.',
    url: URL,
    type: 'website',
    images: [{ url: 'https://images.posso.co.uk/examples/burger.webp', width: 1024, height: 1024, alt: 'AI-generated food image of a double cheeseburger and chips, created with Food Menu Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Food Image Generator for UK Menus | Posso',
    description: 'Describe a dish, get a professional menu photo in seconds. 15 free, no card.',
    images: ['https://images.posso.co.uk/examples/burger.webp'],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Food Menu Studio',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    url: TOOL,
    description:
      'An AI food image generator from Posso for UK restaurants and takeaways. Describe a dish in plain English and get a professional, consistently styled menu photo, ready to download for menus, ordering pages, kiosks and menu boards.',
    provider: { '@id': 'https://www.posso.co.uk/#organization' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: '15 free food images for every new account — no card required.',
    },
    inLanguage: 'en-GB',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'AI Food Image Generator', item: URL },
    ],
  },
];

const examples = [
  { src: `${TOOL}/examples/burger.webp`, alt: 'AI-generated food image of a double cheeseburger with bacon and lettuce, served with chips', label: 'Burgers' },
  { src: `${TOOL}/examples/pizza-480.webp`, alt: 'AI-generated food image of a stone-baked pepperoni pizza with fresh basil', label: 'Pizza' },
  { src: `${TOOL}/examples/indian-480.webp`, alt: 'AI-generated food image of chicken tikka masala in a copper dish with rice and naan', label: 'Indian' },
  { src: `${TOOL}/examples/fish-and-chips-480.webp`, alt: 'AI-generated food image of battered fish, chunky chips, peas and tartare sauce', label: 'Fish & chips' },
  { src: `${TOOL}/examples/chinese.png`, alt: 'AI-generated food image of sweet and sour chicken with peppers and egg fried rice', label: 'Chinese' },
  { src: `${TOOL}/examples/dessert-480.webp`, alt: 'AI-generated food image of a chocolate brownie sundae with ice cream and raspberries', label: 'Desserts' },
];

const benefits = [
  { icon: Clock, title: 'Ready in minutes', body: 'Describe a dish, generate the image and get back to service. Nothing to schedule, nothing to wait for.' },
  { icon: Camera, title: 'No photographer to book', body: 'No studio hire, no food stylist and no half-day session organised around a quiet lunchtime.' },
  { icon: Palette, title: 'One consistent style', body: 'Every dish is lit, plated and framed the same way, so your whole menu looks considered top to bottom.' },
  { icon: RefreshCw, title: 'Update it whenever', body: 'New special, new supplier, new season — generate a fresh image the same day the menu changes.' },
  { icon: Monitor, title: 'Use it everywhere', body: 'Your website, EPOS and kiosk screens, printed menus, digital menu boards and delivery-platform listings.' },
  { icon: Download, title: 'Web-ready downloads', body: 'High-quality 1024×1024 PNG images sized for menus and ordering pages — upload them exactly as they are.' },
];

const steps = [
  { n: '01', title: 'Describe your dish', body: 'Type it the way it reads on your menu, then add the details that matter — the cut of meat, the sides, the sauce and how it comes to the table. Plain English, no prompt-writing.' },
  { n: '02', title: 'Generate the image', body: 'Food Menu Studio returns a plated, well-lit photo in the same house style as the rest of your menu. Each image uses one credit and includes a free retry if it is not quite right.' },
  { n: '03', title: 'Download and add it', body: 'Save the finished file and put it wherever your menu lives — your website, your Posso EPOS and kiosk screens, a printed menu or your delivery listings.' },
];

export default function AiFoodImageGeneratorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        {/* Promo banner — AI voice orders (Dial4.food) */}
        <a
          href="https://www.dial4.food"
          className="group block border-b border-primary/20 bg-gradient-to-r from-primary/15 via-slate-900/50 to-accent/15 transition-colors hover:from-primary/25 hover:to-accent/25"
        >
          <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
            <div className="flex flex-col items-center gap-4 sm:flex-row md:gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/posso_caller_id_delivery.png"
                alt="A food order arriving by phone call, ready to print in the restaurant kitchen"
                width={224}
                height={128}
                loading="eager"
                className="hidden h-24 w-40 shrink-0 rounded-lg border border-slate-700/50 object-cover sm:block md:h-28 md:w-56"
              />
              <div className="flex-1 text-center sm:text-left">
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <Phone className="h-3 w-3" /> New · Powered by Posso AI
                </span>
                <p className="text-lg font-bold leading-tight text-white md:text-2xl">
                  Let AI answer the phone and take the order
                </p>
                <p className="mt-1 text-sm text-slate-300 md:text-base">
                  <strong className="text-white">Dial4.food</strong> takes food orders by natural phone conversation and sends them straight to your kitchen — no app, no account for your customers.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-105">
                Explore Dial4.food <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
        </a>

        <BreadcrumbNav items={[{ label: 'AI Food Image Generator' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Sparkles className="w-3 h-3 mr-2" />
              AI FOOD IMAGES FOR UK MENUS
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Turn any dish into a menu image that sells
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl">
              <strong className="text-white">Food Menu Studio</strong> is Posso&apos;s AI food image generator. Describe a dish in plain English and get a professional, consistently styled photo for your menu in minutes — no photographer, no studio and no waiting. Built for UK restaurants, takeaways, cafés, pubs and food delivery businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={TOOL} className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                Create 15 food images free <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href={`${TOOL}/#examples`} className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                See more examples
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">15 images on the house when you create an account. No card required.</p>
          </div>
        </section>

        {/* Short answer card for AI extraction */}
        <section className="py-6">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-primary/30 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">In short</p>
              <p className="text-slate-200 text-lg leading-relaxed">
                Food Menu Studio is Posso&apos;s AI food image generator for UK hospitality menus. You describe a dish the way you would to a customer — &quot;double cheeseburger with crispy bacon, lettuce, burger sauce and seasoned fries&quot; — and it returns a professional, well-lit photo in one consistent house style, downloaded as a 1024×1024 PNG. Every new account gets <strong className="text-white">15 free images with no card required</strong>; after that you buy one-off credit packs with no subscription, and unused credits do not expire. Use the images on your website, EPOS and kiosk screens, digital menu boards, your own online ordering pages and delivery-marketplace listings.
              </p>
            </div>
          </div>
        </section>

        {/* Example gallery */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">Real examples, one house style</h2>
              <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
                Every image below was produced by Food Menu Studio from a written description of the dish — no stock photography, and no photographer, studio or food stylist involved.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {examples.map((ex) => (
                <figure key={ex.src} className="glass-card rounded-2xl border border-slate-700/50 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ex.src} alt={ex.alt} width={480} height={480} loading="lazy" className="w-full h-auto aspect-square object-cover" />
                  <figcaption className="text-xs text-slate-400 px-3 py-2 text-center">{ex.label}</figcaption>
                </figure>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-4 text-center">Example images from Food Menu Studio, resized for this page.</p>
          </div>
        </section>

        {/* Why images */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text">Customers eat with their eyes</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                An appetising picture beside every dish makes a menu easier to browse and easier to understand — and a menu shot in one consistent style reads as a single, deliberate thing, not a scrapbook of phone snaps.
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

        {/* How it works */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-3">Three steps from menu text to menu photo</h2>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              No brief to write, no shoot to organise and no design software to learn. If you can type out the dish, you can produce the picture that goes beside it.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold gradient-text">{s.n}</span>
                    <Wand2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="text-slate-400 text-sm mt-2">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where images go */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4">One image, every place you sell</h2>
            <p className="text-slate-300 text-lg mb-6">
              You generate an image once and download the file. From there it is an ordinary image on your computer or phone, so it can go wherever your menu appears — nothing to connect and no integration to set up:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
              {[
                <>Your own <Link href="/online-ordering" className="text-primary hover:underline">online ordering</Link> and click-and-collect pages</>,
                <>Posso <Link href="/self-order-kiosks" className="text-primary hover:underline">self-order kiosks</Link> and tablet ordering</>,
                <><Link href="/digital-signage" className="text-primary hover:underline">Digital menu boards</Link> above the counter and in the window</>,
                <>Your <Link href="/restaurant-epos" className="text-primary hover:underline">EPOS</Link> till and ordering screens</>,
                <>Delivery marketplaces such as Just Eat, Deliveroo and Uber Eats</>,
                <>Your website, printed menus and social media</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 glass-card rounded-xl border border-slate-700/50 p-4">
                  <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" /> <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">Free to start, one-off packs after that</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Every account starts with <strong className="text-white">15 free images and no card required</strong>. After that you buy a one-off credit pack — there is no subscription, no monthly minimum and nothing that renews on you. One credit covers one dish and includes a free retry, so if a picture is not quite right you can put it right for nothing, and any credits you do not use do not expire.
              </p>
              <p>
                Paid packs start from <strong className="text-white">£19 + VAT</strong> (working out at roughly 50–65p an image, less on the larger packs). See <a href={`${TOOL}/#pricing`} className="text-primary hover:underline">Food Menu Studio</a> for the current packages and prices.
              </p>
            </div>
          </div>
        </section>

        {/* Honest caveat */}
        <section className="py-6">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-xl border-l-4 border-l-primary border border-slate-700/50 p-6 flex gap-3">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Show your dishes honestly.</strong> Food Menu Studio creates a polished image from your description — make sure what you publish is a fair representation of the dish you actually serve. It is not affiliated with, endorsed by or integrated with Just Eat, Deliveroo, Uber Eats or any marketplace; those names are examples only, and each platform sets its own image requirements, so check theirs before you upload.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Give your menu 15 free images</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Create an account, describe your bestsellers and see them plated in one consistent style — no card, no photographer, no wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TOOL} className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                Try Food Menu Studio free <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> Talk to Posso
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Where your menu photos work hardest</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Customers browse by picture</p>
                </Link>
                <Link href="/digital-signage" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Digital Menu Boards</p>
                  <p className="text-slate-400 text-sm mt-1">One consistent look on screen</p>
                </Link>
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Pictures build bigger baskets</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Posso ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">The system behind the menu</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="AI food image generator — FAQs" faqs={[
          { question: 'What is Posso’s AI food image generator?', answer: 'It is Food Menu Studio, an AI tool at images.posso.co.uk that turns a written description of a dish into a professional, consistently styled menu photo. You describe the dish in plain English, generate the image, and download a 1024×1024 PNG ready to use on menus and ordering pages. Every new account gets 15 free images with no card required.' },
          { question: 'How many free food images do I get?', answer: 'Every account starts with 15 free images and no card required. After that you buy a one-off credit pack — there is no subscription and nothing that renews. One credit covers one dish and includes a free retry, and unused credits do not expire.' },
          { question: 'How does the AI food image generator work?', answer: 'Three steps: describe the dish the way it reads on your menu (the cut of meat, the sides, the sauce, how it is served); generate the image, which comes back plated and well-lit in one house style; then download the file and add it wherever your menu lives. There is no brief to write, no shoot to book and no design software to learn.' },
          { question: 'Where can I use the images?', answer: 'Anywhere your menu appears. Common places are your own website, your Posso EPOS and self-order kiosk screens, digital menu boards, your own online ordering and click-and-collect pages, delivery marketplaces such as Just Eat, Deliveroo and Uber Eats, and social media. You download an ordinary image file, so there is nothing to integrate.' },
          { question: 'Do I need photography or design skills?', answer: 'No. If you can describe a dish to a customer at the counter, you can describe it to Food Menu Studio — that is the whole skill. There is no photography jargon and no prompt-writing.' },
          { question: 'How much does it cost after the free images?', answer: 'Paid packs are one-off and start from £19 + VAT, working out at roughly 50–65p per image (less on larger packs). There is no subscription or monthly minimum, and credits do not expire. See images.posso.co.uk for current packages.' },
          { question: 'Are the images real photographs?', answer: 'No — they are AI-generated from your written description, not stock photos and not a photograph of your actual plate. They are designed to look like professional menu photography in one consistent style. You should make sure the image you publish is a fair representation of the dish you actually serve, and check each platform’s own image rules before uploading.' },
          { question: 'What size and format are the images?', answer: 'Each image is a high-quality 1024×1024 PNG — a square file sized for menus, ordering pages and delivery listings, ready to upload as it is.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
