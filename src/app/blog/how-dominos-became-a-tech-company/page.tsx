import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, ArrowRight, Phone, Monitor, Smartphone, Globe, CreditCard, Truck, BarChart3, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How Domino's Became a Tech Company — And Why You Don't Need To in 2026",
  description:
    "Domino's spent millions building custom POS technology. In 2026, independent pizza shops and restaurants can get the same capabilities with Posso One — without the R&D budget.",
  keywords: [
    "Dominos POS system",
    "Dominos technology",
    "Dominos Pulse POS",
    "restaurant technology 2026",
    "pizza POS system",
    "Posso One POS",
    "restaurant digital transformation",
    "pizza ordering technology",
  ],
  alternates: { canonical: '/blog/how-dominos-became-a-tech-company' },
  openGraph: {
    title: "How Domino's Became a Tech Company — And Why You Don't Need To",
    description: "Domino's spent millions on custom tech. You don't have to. Posso One gives independent restaurants the same power.",
    url: 'https://www.posso.co.uk/blog/how-dominos-became-a-tech-company',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "How Domino's Became a Tech Company — And Why You Don't Need To in 2026",
    description: "Domino's invested millions in building proprietary POS technology. Here's what independent restaurants can learn — and how Posso One delivers the same capabilities off the shelf.",
    author: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
    publisher: { '@type': 'Organization', name: 'Posso Ltd', logo: { '@type': 'ImageObject', url: 'https://www.posso.co.uk/icon-512x512.png' } },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    url: 'https://www.posso.co.uk/blog/how-dominos-became-a-tech-company',
    image: 'https://www.posso.co.uk/images/posso_epos_integration.png',
    mainEntityOfPage: 'https://www.posso.co.uk/blog/how-dominos-became-a-tech-company',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.posso.co.uk/blog' },
      { '@type': 'ListItem', position: 3, name: "How Domino's Became a Tech Company", item: 'https://www.posso.co.uk/blog/how-dominos-became-a-tech-company' },
    ],
  },
];

const dominosTechMoves = [
  { year: '2002', title: 'Built Pulse POS', description: 'Started converting company-owned stores to a single, proprietary point-of-sale system called Pulse.' },
  { year: '2008', title: 'Mandated Franchisee Adoption', description: 'Required all franchisees to use Pulse — controversial at the time, but it became the foundation for everything that followed.' },
  { year: '2012', title: 'Mobile App Launch', description: 'Launched mobile ordering with voice capabilities. More than half of all orders now come through digital channels.' },
  { year: '2014', title: 'Easy Order System', description: 'Enabled customers to save favourite orders and reorder in seconds — even at a stoplight.' },
  { year: '2015', title: 'Ordering Everywhere', description: 'Emoji ordering, smart TV ordering, smartwatch ordering, Ford car ordering — all built on top of Easy Order.' },
  { year: '2016', title: 'Data Science Team', description: 'Built an in-house team of data scientists using A/B testing and customer analytics to optimise every part of the ordering experience.' },
];

const possoEquivalents = [
  { dominos: 'Pulse POS (proprietary)', posso: 'Posso One ePOS', icon: Monitor, description: 'Full touchscreen POS with visual menu, modifiers, split bills, and multi-service ordering. No custom development needed.' },
  { dominos: 'Mobile & Online Ordering', posso: 'Online Ordering Website', icon: Globe, description: 'Your own branded ordering website with delivery and collection. Customers order from their phone — no app download required.' },
  { dominos: 'Easy Order (saved favourites)', posso: 'Customer History & Caller ID', icon: Phone, description: 'When a customer calls, their details and previous orders pop up instantly. Reorder in one tap.' },
  { dominos: 'Domino\'s Tracker', posso: 'Kitchen Display + Order Tracking', icon: Smartphone, description: 'Real-time KDS with bump-to-progress workflow. Customers can track their order status online.' },
  { dominos: 'Multi-platform ordering', posso: 'Just Eat + Uber Eats + Deliveroo', icon: Truck, description: 'All marketplace orders flow into one POS screen. No extra tablets, no re-keying, no missed orders.' },
  { dominos: 'Data analytics team', posso: 'Built-In Analytics', icon: BarChart3, description: 'Live dashboard with revenue, best sellers, peak hours, and payment breakdowns. X and Z reports included.' },
];

export default function DominosTechBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Blog', href: '/blog' },
          { label: "How Domino's Became a Tech Company" },
        ]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Zap className="w-3 h-3 mr-2" />
              RESTAURANT TECHNOLOGY
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              How Domino&apos;s Became a Tech Company — And Why You Don&apos;t Need To in 2026
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl">
              Domino&apos;s spent millions building proprietary technology that transformed them from a struggling pizza chain into a digital powerhouse. Here&apos;s what they did — and why you can get the same capabilities off the shelf with Posso One.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
              <time dateTime="2026-04-08">8 April 2026</time>
              <span>|</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        {/* The Domino's Story */}
        <article className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white !mt-0">The Stoplight Challenge</h2>
              <p>
                A few years ago, Domino&apos;s CEO Patrick Doyle gave his IT team a seemingly impossible challenge: <strong className="text-white">make it so a customer could order a pizza while waiting for a stoplight.</strong>
              </p>
              <p>
                Think about this. There are 34 million potential pizza combinations on the Domino&apos;s menu. Customers might want a simple large pepperoni — or a spinach and provolone pizza with barbecue sauce. How do you enable someone to wade through all those selections in the 17 seconds it takes for a light to turn green?
              </p>
              <p>
                The answer to this question explains how Domino&apos;s became the most technologically advanced chain in the restaurant business — and how they went from a stock price of under £3 to a company where a £1,000 investment in 2008 would be worth nearly £52,000 today.
              </p>

              <h2 className="text-3xl font-bold text-white">The Single POS Decision That Changed Everything</h2>
              <p>
                The foundation of Domino&apos;s tech transformation wasn&apos;t an app or a website — it was a POS system. In 2002, five years before the iPhone even existed, Domino&apos;s started converting company-owned stores to a single, proprietary point-of-sale system called <strong className="text-white">Pulse</strong>.
              </p>
              <p>
                By 2008, they mandated that every franchisee use the same system. Franchisees weren&apos;t happy — they wanted to shop around, and even sued the chain. But the decision proved &quot;maybe the most important technology decision made in the last decade at Domino&apos;s,&quot; according to CIO Kevin Vasconi.
              </p>
              <p>
                Why? Because with a single POS system across thousands of locations, Domino&apos;s could build <strong className="text-white">any new feature once</strong> and roll it out everywhere. No managing multiple vendors. No writing software that interfaces with different technologies. One system, one codebase, instant scale.
              </p>
              <p>
                This is exactly the principle behind Posso One — one system that handles POS, kitchen display, kiosk, online ordering, and delivery integration. The difference? <strong className="text-white">You don&apos;t need to build it yourself.</strong>
              </p>

              <h2 className="text-3xl font-bold text-white">The &quot;Easy Order&quot; Breakthrough</h2>
              <p>
                The solution to the stoplight problem was the Easy Order system. Let customers save their favourite order and reorder with a single tap. Simple — but it became the foundation for everything that followed.
              </p>
              <p>
                Over just a few months in 2014 and 2015, Domino&apos;s launched ordering through smart TVs, smartwatches, Ford cars, text messages, and even pizza emoji on Twitter. All of it was built on top of Easy Order — like Lego bricks, each new platform snapped onto the same foundation.
              </p>
              <p>
                Today, more than half of all Domino&apos;s orders come through digital channels. Customers are now more likely to order digitally than pick up the phone.
              </p>

              <h2 className="text-3xl font-bold text-white">What This Cost Domino&apos;s</h2>
              <p>
                Domino&apos;s runs one of the largest technology teams in the restaurant industry. They employ hundreds of developers, data scientists, and UX designers. They operate an in-house A/B testing lab. They build prototypes, run statistical models, and test in company-owned locations before rolling out to franchisees.
              </p>
              <p>
                The investment is enormous — and it pays off for a company with 19,000+ locations worldwide. But it&apos;s not a model that an independent pizza shop, a 3-location chain, or even a 50-unit franchise can replicate.
              </p>
              <p className="text-white font-semibold text-xl">
                That&apos;s exactly the gap Posso One fills.
              </p>
            </div>
          </div>
        </article>

        {/* Domino's Tech Timeline */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              Domino&apos;s Tech Timeline
            </h2>
            <div className="space-y-6">
              {dominosTechMoves.map((move) => (
                <div key={move.year} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 text-white font-bold text-sm">
                    {move.year}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{move.title}</h3>
                    <p className="text-slate-400 mt-1">{move.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Pivot: You Don't Need To Be Domino's */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
              <h2 className="text-3xl font-bold text-white">Why You Don&apos;t Need To Be Domino&apos;s in 2026</h2>
              <p>
                In 2002, Domino&apos;s had no choice but to build from scratch. There were no off-the-shelf POS systems that could handle pizza-specific ordering, delivery management, and online integration in one platform. So they built Pulse.
              </p>
              <p>
                In 2026, that&apos;s no longer true. <strong className="text-white">Everything Domino&apos;s built over two decades is now available in a single system — ready to install, not build.</strong>
              </p>
              <p>
                Posso One is the Pulse for the rest of us. A unified POS, kitchen display, kiosk, and online ordering platform built specifically for restaurants, takeaways, and pizza shops. It took Domino&apos;s 15 years and millions of pounds to get where they are. With Posso, you can get there in under 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-4">
              Domino&apos;s Built It. Posso One Includes It.
            </h2>
            <p className="text-slate-400 text-center mb-10 text-lg max-w-2xl mx-auto">
              Here&apos;s how every major Domino&apos;s technology investment maps to a Posso One feature — included out of the box.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {possoEquivalents.map((item) => (
                <div key={item.posso} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-slate-500 text-sm line-through">{item.dominos}</p>
                  <h3 className="text-lg font-semibold text-white mt-1">{item.posso}</h3>
                  <p className="text-slate-400 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bespoke for Chains */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
              <h2 className="text-3xl font-bold text-white">We&apos;re Your Tech Team — For Chains Too</h2>
              <p>
                One of the key lessons from Domino&apos;s is that <strong className="text-white">having a unified system across all locations is what makes everything else possible</strong>. Their CIO called it &quot;maybe the most important technology decision made in the last decade.&quot;
              </p>
              <p>
                With Posso, you get that same advantage without the lawsuit. Every location runs the same software, the same kitchen display, the same online ordering. Menu changes roll out instantly across all sites. Reporting consolidates automatically.
              </p>
              <p>
                And if you&apos;re a growing chain that needs something Posso doesn&apos;t do out of the box? <strong className="text-white">We build bespoke systems for chains.</strong> Custom integrations, branded ordering flows, franchise-level analytics, multi-location management — whatever your operation needs, we can develop it.
              </p>
              <p>
                Domino&apos;s spent millions on in-house developers. <strong className="text-white">You just need to call us.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* The Key Lessons */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10">
              What Independent Restaurants Can Learn from Domino&apos;s
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'One System, Every Location', description: "Domino's mandated a single POS across all franchises. It was controversial, but it was the foundation for everything. With Posso One, you get this from day one." },
                { title: 'Digital Ordering Is Not Optional', description: "Over half of Domino's orders are digital. Customers expect to order from their phone. If you don't have an online ordering website, you're losing sales to competitors who do." },
                { title: 'Speed Wins', description: "Domino's obsessed over ordering speed — 17 seconds at a stoplight. Fast ordering means more orders. Posso's POS is built for speed: visual grids, one-tap payments, instant kitchen prints." },
                { title: 'Data Drives Decisions', description: "Domino's hired data scientists to A/B test every idea. Posso's built-in analytics give you the same insights: best sellers, peak hours, payment breakdowns, and channel performance." },
              ].map((lesson) => (
                <div key={lesson.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-2">{lesson.title}</h3>
                  <p className="text-slate-400">{lesson.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let Us Be Your Tech Company
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Domino&apos;s had 15 years and millions in R&amp;D budget. You have Posso One — the same power, ready in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pos-systems" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
              </a>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/pizza-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Pizza POS System</p>
                  <p className="text-slate-400 text-sm mt-1">Visual pizza builder</p>
                </Link>
                <Link href="/does-dominos-use-a-pos-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Domino&apos;s POS Explained</p>
                  <p className="text-slate-400 text-sm mt-1">The Pulse system</p>
                </Link>
                <Link href="/franchise" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Franchise Solutions</p>
                  <p className="text-slate-400 text-sm mt-1">Multi-site POS</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">30+ ePOS Features</p>
                  <p className="text-slate-400 text-sm mt-1">Full feature list</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Restaurant Technology — FAQs" faqs={[
          { question: "What POS system does Domino's use?", answer: "Domino's uses a proprietary system called Pulse, built in-house starting in 2002. It's custom-built for their franchise model and not available to other restaurants. Independent pizza shops can get equivalent capabilities with off-the-shelf systems like Posso One." },
          { question: 'Can a small restaurant afford the same tech as a big chain?', answer: "Yes. In 2026, restaurant technology that would have cost millions to develop 10 years ago is available off the shelf. A complete Posso One setup — POS, KDS, online ordering, delivery integration — starts from £499 + VAT, with finance from £24.92/week." },
          { question: 'Do you build custom POS systems for restaurant chains?', answer: "Yes — Posso works with growing chains and franchises to build bespoke systems. Custom integrations, branded ordering flows, franchise-level analytics, and multi-location management. Contact us to discuss your requirements." },
          { question: 'How quickly can I go live with a POS system?', answer: "Domino's took years to roll out Pulse. With Posso, we go from signup to live orders in under 24 hours. We handle hardware setup, menu import, staff training, and ongoing support — all included free." },
          { question: 'What makes Posso different from generic POS systems?', answer: "Posso One is built specifically for restaurants and takeaways. It includes a visual pizza builder with split-sided ordering, kitchen display system, self-order kiosks, online ordering, delivery platform integration (Just Eat, Uber Eats, Deliveroo), caller ID, and offline operation — all in one system." },
          { question: 'Is it worth investing in restaurant technology?', answer: "Absolutely. Domino's attributes much of their sales growth to technology investment. Digital ordering, self-service kiosks, and delivery integration directly increase revenue. Most Posso customers see ROI within 3–6 months through higher average order values and reduced labour costs." },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
