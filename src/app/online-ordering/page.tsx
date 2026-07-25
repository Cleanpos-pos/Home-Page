import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { OnlineOrderingHero } from '@/components/sections/online-ordering-hero';
import { OnlineOrderingFeatures } from '@/components/sections/online-ordering-features';
import { FAQSection } from '@/components/sections/faq-section';
import { Contact } from '@/components/sections/contact';
import { Percent, Globe, Monitor, RefreshCw, Users, Truck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const onlineOrderingFeatures = [
  { icon: Percent, title: 'Commission-Free Online Ordering', description: 'Keep 100% of every order. There are no 14–30% per-order commissions like Just Eat, Uber Eats, or Deliveroo — just one simple low monthly fee, so the more you sell the more you save.' },
  { icon: Globe, title: 'Your Own Branded Ordering Website & App', description: 'A custom-branded online ordering website and your own online ordering app for iOS and Android, built with your logo, colours, and menu so customers order directly from you.' },
  { icon: Monitor, title: 'Orders Straight to the POS & Kitchen', description: 'Every online and app order is injected into your Posso POS and printed to your kitchen display (KDS) automatically — no second tablet to juggle and no re-keying orders.' },
  { icon: RefreshCw, title: 'Live Menu & Stock Sync', description: 'Update a price, add a special, or mark an item sold out once on your till and it updates across your website and online ordering app instantly. One menu, everywhere.' },
  { icon: Users, title: 'Customer Data Ownership & Remarketing', description: 'You own every customer record — names, emails, and order history stay yours. Use them for email, SMS, and loyalty remarketing instead of handing them to a marketplace.' },
  { icon: Truck, title: 'Delivery & Collection Options', description: 'Offer delivery with custom zones and fees, click-and-collect, and scheduled ordering. Customers choose how and when they want their food at checkout.' },
];

const orderingSteps = [
  { step: '1', title: 'Customer Orders Online', desc: 'They browse your branded ordering website or online ordering app, build their basket, and check out.' },
  { step: '2', title: 'Card Payment Taken', desc: 'Secure card payment is captured at checkout, so the order is paid before it reaches your kitchen.' },
  { step: '3', title: 'Order Hits the Till', desc: 'The order is sent straight to the till and your Posso POS, with no manual re-entry by staff.' },
  { step: '4', title: 'Kitchen Prepares & Sends', desc: 'It prints to your kitchen display or printer for prep, then goes out for delivery or collection.' },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "POSSO Online Ordering & Mobile Apps",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "Food Ordering",
    "description": "Low-commission online ordering and mobile apps for takeaways and restaurants in the UK — a fraction of marketplace fees.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock"
    },
    "url": "https://www.posso.co.uk/online-ordering",
    "image": "https://www.posso.co.uk/images/posso_online_ordering_hero.png"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://www.posso.co.uk/images/posso_online_ordering_hero.png",
    url: "https://www.posso.co.uk/online-ordering",
    name: "POSSO Online Ordering Website & Branded Mobile App",
    description: "Commission-free online ordering website and branded mobile app for UK takeaways and restaurants, with orders sent straight to the Posso POS and kitchen.",
    creator: {
      "@type": "Organization",
      name: "Posso Ltd",
    },
    copyrightHolder: {
      "@type": "Organization",
      name: "Posso Ltd",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.posso.co.uk" },
      { "@type": "ListItem", position: 2, name: "ePOS Systems", item: "https://www.posso.co.uk/pos" },
      { "@type": "ListItem", position: 3, name: "Online Ordering", item: "https://www.posso.co.uk/online-ordering" },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Online Ordering & Branded Apps | Get More Orders with Posso',
  description: 'Launch your own branded online ordering website and mobile app. Get listed on the FoodBooking marketplace to attract more local customers and increase your revenue.',
  alternates: {
    canonical: '/online-ordering',
  },
  openGraph: {
    title: 'Online Ordering & Branded Apps | Get More Orders with Posso',
    description:
      'Launch your own commission-free online ordering website and branded mobile app. Orders flow straight into your Posso POS and kitchen.',
    url: 'https://www.posso.co.uk/online-ordering',
    type: 'website',
    images: [
      {
        url: '/images/posso_online_ordering_hero.png',
        width: 1200,
        height: 1200,
        alt: 'Posso commission-free online ordering website and branded mobile app for UK takeaways and restaurants, with orders sent straight to the POS and kitchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Ordering & Branded Apps | Get More Orders with Posso',
    description: 'Launch your own commission-free online ordering website and branded mobile app. Orders flow straight into your Posso POS and kitchen.',
    images: ['/images/posso_online_ordering_hero.png'],
  },
};

export default function OnlineOrderingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Online Ordering' },
        ]} />
        <OnlineOrderingHero />
        <OnlineOrderingFeatures />

        {/* Why Restaurants & Takeaways Choose Posso */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <figure>
                <img
                  src="/images/posso_online_ordering_hero.png"
                  alt="Posso commission-free online ordering website and branded mobile app for a UK restaurant, with orders sent straight to the POS and kitchen"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full"
                />
                <figcaption className="text-slate-500 text-sm mt-3 text-center">
                  Your own commission-free ordering website and branded online ordering app — orders go straight to the till.
                </figcaption>
              </figure>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                  Why Restaurants &amp; Takeaways Choose Posso Online Ordering
                </h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Marketplaces like Just Eat, Uber Eats, and Deliveroo charge <strong className="text-white">14–30% commission on every single order</strong>. On a busy week that is hundreds of pounds handed to a third party. Posso gives you a <strong className="text-white">commission-free online ordering</strong> system on a simple low monthly fee, so as your order volume grows your costs stay flat and your margins improve.
                  </p>
                  <p>
                    With Posso you get <strong className="text-white">your own branded ordering website and online ordering app</strong> — your name, your logo, your menu — not a listing buried among competitors. Customers order directly from you, which means <strong className="text-white">you own the customer relationship and their data</strong> for repeat marketing, loyalty, and offers. It is restaurant online ordering and takeaway online ordering built around your brand, not someone else&apos;s.
                  </p>
                  <p>
                    Best of all, every order flows <strong className="text-white">straight to the till</strong>. Online and app orders are injected directly into your Posso POS and printed to your kitchen, so there is no second tablet, no re-keying, and no missed orders. It is a complete online ordering system for the UK that keeps your front counter, website, and kitchen perfectly in sync.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Everything in Your Online Ordering System
              </h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                A complete commission-free online ordering platform that connects your website, app, POS, and kitchen — with no per-order fees.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {onlineOrderingFeatures.map((f) => (
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

        {/* How Online Ordering Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How Online Ordering Works</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                From your customer&apos;s phone to your kitchen in four steps — with every order going straight to the till.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {orderingSteps.map((s) => (
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

        <section className="pb-8">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <p className="text-slate-400">
              Choosing a full till system too? Read our guide to the{' '}
              <Link href="/best-restaurant-epos-system-uk" className="text-primary hover:underline">
                best restaurant EPOS systems in the UK
              </Link>{' '}
              to see how online ordering fits into one integrated platform.
            </p>
          </div>
        </section>

        <FAQSection title="Online Ordering — Frequently Asked Questions" faqs={[
          { question: 'Is Posso online ordering really commission-free?', answer: 'Yes. With your own Posso online ordering website and branded app, you keep 100% of every order — there are no per-order commissions like the 14–30% charged by marketplaces such as Just Eat, Uber Eats, and Deliveroo. You pay a simple low monthly fee instead, so the more you sell, the more you save.' },
          { question: 'Do I get my own branded online ordering website and app?', answer: 'Yes. We build you a custom-branded online ordering website and your own mobile app for iOS and Android, using your logo, colours, and menu. Customers order directly from you, so you own the customer relationship and their data — not a third-party marketplace.' },
          { question: 'Does online ordering integrate with my Posso POS and kitchen?', answer: 'Absolutely. Online and app orders flow straight into your Posso POS and print to your kitchen display or printer automatically — no second tablet to manage and no re-keying orders. Stock, menu, and pricing stay in sync across your till, website, and app.' },
          { question: 'How long does it take to set up online ordering?', answer: 'Most takeaways and restaurants go live in under 24 hours. We import your menu, set up your delivery zones and collection times, brand your site and app, and handle the configuration for you. Staff training is quick because orders appear right on the POS you already use.' },
          { question: 'How much does Posso online ordering cost?', answer: 'Online ordering is a low fixed monthly fee with no per-order commission, so your costs do not rise as your order volume grows. Book a free demo for a tailored quote based on your menu and order volume — most operators recover the cost after just a handful of commission-free orders.' },
          { question: 'Can customers find my restaurant on a marketplace too?', answer: 'Yes. As well as your own commission-free ordering site and app, you can be listed on the FoodBooking marketplace to attract thousands of new local customers searching for places to order from — giving you the best of both direct and discovery-led ordering.' },
        ]} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
