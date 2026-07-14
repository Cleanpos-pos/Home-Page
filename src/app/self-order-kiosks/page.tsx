import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { KiosksHero } from '@/components/sections/kiosks-hero';
import { KioskDemo } from '@/components/sections/kiosk-demo';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { TrendingUp, Clock, CheckCircle2, Sparkles, Languages, CreditCard, ArrowRight, PlayCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { videoPages } from '@/lib/video-pages-data';

const kioskFeatures = [
  { icon: TrendingUp, title: 'Higher Average Order Value', description: 'Self-order kiosks consistently lift average order value by 15-30%. The screen never forgets to suggest a meal deal, a side, or a dessert — and customers spend more when they order at their own pace without feeling watched.' },
  { icon: Clock, title: 'Shorter Queues & Faster Service', description: 'Add extra ordering points without adding staff. A self-service kiosk busts queues at peak times, turns tables faster, and keeps your counter free for collections — ideal for fast food and busy takeaway venues.' },
  { icon: CheckCircle2, title: 'Fewer Order Errors', description: 'Customers tap exactly what they want, so there is no mishearing across a noisy counter. Every order on the self-ordering kiosk goes straight to the kitchen exactly as entered, cutting refunds and remakes.' },
  { icon: Sparkles, title: 'Smart Upselling Prompts', description: 'Built-in upsell and cross-sell prompts appear at the perfect moment — "make it a meal?", "add a drink?", "go large?" — so every restaurant kiosk works like your best salesperson on every single order.' },
  { icon: Languages, title: 'Multilingual & Accessible', description: 'Serve every customer with multi-language menus, large clear text, and an accessible, branded UI. A self-service kiosk lets international and hard-of-hearing customers order confidently and independently.' },
  { icon: CreditCard, title: 'Contactless Payments & POS Integration', description: 'Integrated contactless ordering with Apple Pay, Google Pay, and chip & PIN. Each takeaway kiosk shares one central menu with your Posso POS and kitchen display — no double entry, no mismatched prices.' },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "POSSO Self-Order Kiosk",
    "brand": "POSSO Ltd",
    "description": "Self-order kiosk for UK restaurants and takeaways. Helps reduce queues and increase order value with smart upsells.",
    "category": "Self Service Kiosk",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "699.00",
      "availability": "https://schema.org/InStock",
      "url": "https://posso.co.uk/self-order-kiosks"
    },
    "url": "https://posso.co.uk/self-order-kiosks",
    "image": "https://posso.co.uk/images/posso_coffee_shop_hero.png"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://posso.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "ePOS Systems", "item": "https://posso.co.uk/pos" },
      { "@type": "ListItem", "position": 3, "name": "Self-Order Kiosks", "item": "https://posso.co.uk/self-order-kiosks" },
    ],
  },
];

const videoHubSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Posso Self-Order Kiosk Videos",
  "itemListElement": videoPages.map((p, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `https://posso.co.uk/${p.slug}`,
    "name": p.h1,
    "image": `https://posso.co.uk/videos/thumbs/${p.slug}.png`,
  })),
};

export const metadata: Metadata = {
  title: 'Self-Order Kiosks for UK Restaurants & Takeaways | Posso',
  description: 'Posso self-order kiosks cut queues, increase order accuracy and lift average order value by 15–30% — with contactless payments and full EPOS & kitchen integration. UK setup & support.',
  alternates: {
    canonical: '/self-order-kiosks',
  },
  openGraph: {
    title: 'Self-Order Kiosks for Restaurants & Takeaways | Posso UK',
    description:
      'Reduce queues, increase order accuracy, and boost average order value with Posso self-order kiosks. Smart upsells, kitchen and POS integration, UK setup and support.',
    url: 'https://posso.co.uk/self-order-kiosks',
    type: 'website',
    images: [
      {
        url: '/images/posso_qr_scan_hero.png',
        width: 1200,
        height: 1200,
        alt: 'Posso self-order kiosk for UK restaurants and takeaways with smart upsells to increase average order value',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self-Order Kiosks for Restaurants & Takeaways | Posso UK',
    description: 'Reduce queues, increase order accuracy, and boost average order value with Posso self-order kiosks.',
    images: ['/images/posso_qr_scan_hero.png'],
  },
};

const kioskScreenshots = [
  { src: '/images/posso-self-order-kiosk-menu-screen.png', w: 545, h: 962, alt: 'Posso self-order kiosk menu screen showing categories and iced drinks with prices for a UK coffee shop', cap: 'Customers browse the full menu at their own pace.' },
  { src: '/images/posso-self-order-kiosk-item-customise.png', w: 536, h: 949, alt: 'Customising an iced latte with syrup and milk options on a Posso self-order kiosk', cap: 'Every item prompts upsells — syrups, milk choices and extras.' },
  { src: '/images/posso-self-order-kiosk-review-order.png', w: 545, h: 958, alt: 'Review order and checkout screen with a tip prompt on a Posso self-order kiosk', cap: 'Review, tip and pay — the checkout that lifts average order value.' },
];

const kioskImageSchema = kioskScreenshots.map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  contentUrl: `https://posso.co.uk${s.src}`,
  url: `https://posso.co.uk${s.src}`,
  name: s.alt,
  caption: s.cap,
  creditText: 'Posso Ltd',
  creator: { '@type': 'Organization', name: 'Posso Ltd' },
  copyrightNotice: '© Posso Ltd',
}));

export default function KiosksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="flex-1">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Self-Order Kiosks' },
        ]} />
        <KiosksHero />
        <KioskDemo />

        {/* Why UK Restaurants & Takeaways Choose Self-Order Kiosks */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <figure>
                <picture>
                  <img
                    src="/images/posso_qr_scan_hero.png"
                    alt="Customer using a Posso self-order kiosk to place a contactless order in a UK fast food restaurant and takeaway"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="rounded-2xl shadow-xl w-full"
                  />
                </picture>
                <figcaption className="text-slate-500 text-sm mt-3 text-center">
                  A Posso self-order kiosk lets customers browse the full menu and pay contactless — no queueing at the counter.
                </figcaption>
              </figure>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why UK Restaurants &amp; Takeaways Choose Self-Order Kiosks
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Counter ordering has a ceiling. At peak times your team can only serve one customer at a time, queues build, and rushed orders lead to mistakes. <strong className="text-white">Self-order kiosks in the UK</strong> remove that bottleneck by letting customers place and pay for their own orders while your staff focus on preparing food and serving fast.
                  </p>
                  <p>
                    A <strong className="text-white">self-service kiosk</strong> also sells harder than a person can. It presents the whole menu, never forgets to suggest a meal deal, and prompts every customer to add a side, drink, or dessert. That is why UK operators typically see a <strong className="text-white">15-30% rise in average order value</strong> after installing a self-ordering kiosk — the upsell happens on every single order, automatically.
                  </p>
                  <p>
                    Because every Posso <strong className="text-white">restaurant kiosk</strong> and <strong className="text-white">takeaway kiosk</strong> shares one central menu with your POS and kitchen display, prices stay in sync everywhere and orders flow straight to the kitchen. The result is faster service, fewer errors, real <strong className="text-white">queue busting</strong> at rush hour, and a slicker experience for every customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kiosk Benefits Feature Grid */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Benefits of Self-Service Kiosks for Your Venue
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From higher average order value to shorter queues, a fast food kiosk pays for itself by selling more and serving faster.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {kioskFeatures.map((f) => (
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

        {/* How Self-Order Kiosks Work */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How Self-Ordering Kiosks Work in 4 Steps</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Contactless ordering in four simple steps — from browsing the menu to a ticket landing in your kitchen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Browse the Menu', desc: 'Customers explore your full menu on a large touchscreen, at their own pace' },
                { step: '2', title: 'Customise & Upsell', desc: 'Add toppings, meal deals, and sides — the kiosk prompts every upsell automatically' },
                { step: '3', title: 'Pay Contactless', desc: 'Pay by card, Apple Pay, or Google Pay with fully contactless ordering' },
                { step: '4', title: 'Order to Kitchen', desc: 'The order prints to your kitchen display instantly — accurate every time' },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kiosk screenshots */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kioskImageSchema) }} />
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Inside the Posso Self-Order Kiosk</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From browsing the menu to customising an item and paying at the checkout — the self-order kiosk experience your customers get.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {kioskScreenshots.map((s) => (
                <figure key={s.src} className="flex flex-col items-center">
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={s.w}
                    height={s.h}
                    loading="lazy"
                    className="rounded-2xl shadow-xl w-full max-w-[280px] border border-slate-700/50"
                  />
                  <figcaption className="text-slate-400 text-sm mt-3 text-center max-w-[280px]">{s.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Video guides hub */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoHubSchema) }} />
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Self-Order Kiosk Video Guides</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Costs, kiosks for restaurants and takeaways, IP65 outdoor kiosks, and how they increase sales — watch the guides.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {videoPages.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="group rounded-2xl overflow-hidden border border-slate-700/50 glass-card hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <Image
                      src={`/videos/thumbs/${p.slug}.png`}
                      alt={p.h1}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="w-14 h-14 text-white/90 drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2">{p.h1}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{p.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                      Watch &amp; learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection title="Self-Order Kiosks — Frequently Asked Questions" faqs={[
          { question: 'How do self-order kiosks increase average order value?', answer: 'Self-order kiosks consistently increase average order value because customers take their time browsing the full menu without feeling rushed, and the kiosk automatically suggests relevant upsells and meal deals at the right moment. UK operators typically see a 15-30% uplift in average order value once kiosks are in place — the screen never forgets to ask "would you like to make that a meal?" or "add a dessert?".' },
          { question: 'Are Posso self-order kiosks suitable for UK restaurants and takeaways?', answer: 'Yes. Posso self-order kiosks are built for UK restaurants, takeaways, quick-service venues, coffee shops, and casual dining. They handle GBP pricing, UK VAT, contactless and chip & PIN card payments, and integrate with the same menu you use on your Posso POS — so prices and items stay in sync across every till and kiosk.' },
          { question: 'What hardware comes with a Posso self-order kiosk?', answer: 'Each kiosk includes a large touchscreen display, an integrated card payment terminal for contactless, Apple Pay and Google Pay, and an optional receipt printer. We offer freestanding floor kiosks and countertop/wall-mounted units so you can match the format to your floor space. All hardware is supplied, configured, and supported by Posso.' },
          { question: 'Do the kiosks integrate with my kitchen and POS system?', answer: 'Yes. Every order placed on a kiosk goes straight to your kitchen display system (KDS) or kitchen printer, exactly like an order taken at the counter. Kiosks share one central menu with your Posso POS, so a price or menu change updates everywhere at once — no double entry and no mismatched menus.' },
          { question: 'How much do self-order kiosks cost and is finance available?', answer: 'Posso self-order kiosks start from £699 + VAT, with finance options available from around £24.92/week to spread the cost. Pricing depends on whether you choose freestanding or countertop units and how many you need. Book a free demo and we will quote based on your venue and order volumes.' },
          { question: 'How long does it take to set up a self-order kiosk?', answer: 'Setup is fast. Because the kiosk uses your existing Posso menu, we can configure and deploy in well under 24 hours in most cases. Posso handles menu import, payment setup, and staff training, so your team is comfortable before you go live — and ongoing UK-based support is included.' },
          { question: 'Do you offer outdoor self-order kiosks?', answer: 'Yes. Posso outdoor self-order kiosks are IP65 rated — water and dust resistant — with bright, sunlight-readable screens, so they keep trading in rain, sun and cold. They are ideal for food trucks, beer gardens, stadiums, markets and festivals, and run on 4G with no fixed Wi-Fi needed.' },
          { question: 'Are self-order kiosks suitable for coffee shops and quick-service restaurants?', answer: 'Absolutely. Self-ordering kiosks work brilliantly for coffee shops, quick-service restaurants (QSR), fast food and casual dining. Customers customise drinks and meals with modifiers, the kiosk automatically upsells sides and extras, and orders fire straight to the barista station or kitchen display — keeping queues short at peak.' },
          { question: 'Are self-order kiosks worth it for a small business?', answer: 'Yes. Even a single self-order kiosk can pay for itself by lifting average order value 15-30% and freeing staff at busy times. Many small UK restaurants and takeaways start with one countertop or freestanding kiosk and add more as they grow — kiosks start from £699 + VAT with finance available.' },
          { question: 'Self-order kiosk vs counter service — which is better?', answer: 'Self-order kiosks do not replace your team — they remove the ordering bottleneck. Counter service handles one customer at a time, while a self-service kiosk lets several customers order and pay at once, cutting queues and freeing staff to prepare food and serve. Most venues run kiosks alongside a staffed counter for the best of both.' },
        ]} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
