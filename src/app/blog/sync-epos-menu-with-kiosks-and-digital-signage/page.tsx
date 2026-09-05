import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Phone,
  Monitor,
  Tv,
  ChefHat,
  Globe,
  Truck,
  PhoneCall,
  RefreshCw,
  Layers,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

const SLUG = 'sync-epos-menu-with-kiosks-and-digital-signage';
const URL = `https://www.posso.co.uk/blog/${SLUG}`;
const PUBLISHED = '2026-09-05';
const HERO_IMAGE = 'https://www.posso.co.uk/images/posso_free_epos_signage.png';
const HERO_ALT = 'Posso EPOS till with a digital signage menu board and self-order kiosk showing the same synced menu in a UK takeaway';

export const metadata: Metadata = {
  title: 'Sync Your EPOS Menu With Kiosks and Digital Signage',
  description:
    'Sync one EPOS menu to kiosks, digital signage, kitchen screens, online ordering, Just Eat, Deliveroo, Uber Eats and AI phone orders. Edit once, live everywhere.',
  keywords: [
    'sync EPOS menu with kiosks',
    'EPOS menu sync digital signage',
    'digital menu board POS integration',
    'self-order kiosk menu sync',
    'one menu all channels',
    'Just Eat Deliveroo Uber Eats menu sync',
    'kitchen display system menu',
    'AI phone ordering menu',
    'central menu management takeaway',
    'Posso One menu',
  ],
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: 'How Can I Sync My EPOS Menu With Kiosks and Digital Signage? | Posso UK',
    description:
      'One menu on the till, mirrored to kiosks, signage, kitchen screens, your website, the marketplaces and the AI phone line. How it works and what to check before you buy.',
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['https://www.posso.co.uk/about/paul-robinson'],
    images: [{ url: '/images/posso_free_epos_signage.png', width: 1024, height: 1024, alt: HERO_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sync Your EPOS Menu With Kiosks and Digital Signage',
    description: 'Edit the menu once on the till. Kiosks, signage, KDS, website, Just Eat, Deliveroo, Uber Eats and the AI phone line all update.',
    images: ['/images/posso_free_epos_signage.png'],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${URL}#article`,
  headline: 'How Can I Sync My EPOS Menu With Kiosks and Digital Signage?',
  description:
    'A single EPOS menu can drive self-order kiosks, digital signage menu boards, kitchen display screens, online ordering, Just Eat, Deliveroo, Uber Eats and an AI phone line. How the sync works in Posso One, what to check before you buy, and the mistakes that leave you re-typing menus.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.posso.co.uk/about/paul-robinson#person',
    name: 'Paul Robinson',
    jobTitle: 'Managing Director',
    url: 'https://www.posso.co.uk/about/paul-robinson',
    worksFor: { '@id': 'https://www.posso.co.uk/#organization' },
  },
  publisher: { '@id': 'https://www.posso.co.uk/#organization' },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  image: {
    '@type': 'ImageObject',
    url: HERO_IMAGE,
    contentUrl: HERO_IMAGE,
    width: 1024,
    height: 1024,
    caption: HERO_ALT,
    creditText: 'Posso Ltd',
    copyrightNotice: '© Posso Ltd',
  },
  inLanguage: 'en-GB',
  articleSection: 'EPOS Systems',
  keywords: 'EPOS menu sync, self-order kiosk, digital signage, kitchen display system, online ordering, Just Eat, Deliveroo, Uber Eats, AI phone ordering',
  about: [
    { '@type': 'Thing', name: 'Menu management' },
    { '@type': 'SoftwareApplication', name: 'Posso One', applicationCategory: 'BusinessApplication', operatingSystem: 'Android, Windows' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'Just Eat' },
    { '@type': 'Organization', name: 'Deliveroo' },
    { '@type': 'Organization', name: 'Uber Eats' },
  ],
};

const channels = [
  { icon: Monitor, name: 'Till (EPOS)', href: '/pos', what: 'The master copy. Every product, price, modifier, category and sold-out flag lives here.' },
  { icon: Layers, name: 'Self-order kiosks', href: '/self-order-kiosks', what: 'Read the same menu with images and upsell prompts. Sold-out items disappear from the screen.' },
  { icon: Tv, name: 'Digital signage', href: '/digital-signage', what: 'Menu boards and promo screens managed centrally. Change a price from the office, not with a ladder.' },
  { icon: ChefHat, name: 'Kitchen display (KDS)', href: '/kitchen-display-system', what: 'Orders from every channel land on one board, routed to stations by menu category.' },
  { icon: Globe, name: 'Online ordering site and app', href: '/online-ordering', what: 'Your own commission-free website and app. Injected straight into the till and KDS.' },
  { icon: Truck, name: 'Just Eat, Deliveroo, Uber Eats', href: '/delivery-integrations', what: 'Items, prices and availability aligned with the marketplaces. Orders arrive on the till, not on three tablets.' },
  { icon: PhoneCall, name: 'AI phone ordering', href: '/ai-phone-ordering', what: 'The AI is trained on the live menu, so it never sells something the kitchen ran out of an hour ago.' },
];

const checks = [
  { title: 'Is the till the single source of truth?', body: 'If the kiosk, the website and the signage each keep their own copy of the menu, you do not have sync, you have four menus and a to-do list. Ask which system is the master and whether the others can only read from it.' },
  { title: 'Do sold-out flags travel in real time?', body: 'Marking the chicken wings as 86 on the till at 7pm should pull them off the kiosk, the website, the marketplaces and the AI phone line within seconds. Ask to see it done in the demo.' },
  { title: 'Are modifiers shared, not rebuilt?', body: 'Half-and-half pizzas, spice levels, "no onions", extra sauce. If modifiers have to be recreated per channel, a new special becomes an afternoon of data entry.' },
  { title: 'Which marketplaces are integrated, and how?', body: 'Ask specifically whether Just Eat, Deliveroo and Uber Eats orders appear on the till automatically, or whether a person is the integration. Then ask whether menu changes push out the same way.' },
  { title: 'Can the signage show the menu, not just a slideshow?', body: 'Some "digital signage" is a media player looping images. A menu board needs to be updated centrally and quickly, ideally from the same place you manage prices.' },
  { title: 'What happens when the broadband drops?', body: 'The till and kitchen should carry on taking and cooking orders offline and re-sync when the connection returns. A cloud-only setup is a single point of failure on a Friday night.' },
];

export default function SyncEposMenuBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BlogBreadcrumb slug={SLUG} title="Sync Your EPOS Menu With Kiosks and Digital Signage" />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <RefreshCw className="w-3 h-3 mr-2" />
              MENU MANAGEMENT
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              How Can I Sync My EPOS Menu With Kiosks and Digital Signage?
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl">
              You can, but only if the till holds the one true copy of the menu and everything else reads from it. Here is how that works in Posso One across kiosks, signage, kitchen screens, your website, the delivery marketplaces and the AI phone line, and what to check before you buy any of it.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-sm text-slate-500">
              <span>
                By <Link href="/about/paul-robinson" className="text-slate-300 hover:text-primary transition-colors">Paul Robinson</Link>, Managing Director, Posso Ltd
              </span>
              <span className="hidden sm:inline">|</span>
              <time dateTime={PUBLISHED}>5 September 2026</time>
              <span className="hidden sm:inline">|</span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        {/* Short answer */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-primary/30 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Short answer</p>
              <p className="text-slate-200 text-lg leading-relaxed">
                To sync an EPOS menu with kiosks and digital signage, run them from one system where the till is the master menu and every other screen reads from it over the cloud. In Posso One, a product, price, modifier or sold-out flag is edited once on the till and reflected on self-order kiosks, digital signage menu boards, kitchen display screens, your own online ordering website and app, Just Eat, Deliveroo and Uber Eats, and the AI phone ordering line. If your current setup needs the same change typed into more than one place, the systems are not synced, they are just switched on at the same time.
              </p>
            </div>
          </div>
        </section>

        {/* Hero image with full metadata */}
        <section className="pb-6">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <figure className="rounded-2xl overflow-hidden border border-slate-700/50 glass-card">
              <Image
                src="/images/posso_free_epos_signage.png"
                alt={HERO_ALT}
                title="One Posso One menu on the till, the kiosk and the signage"
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full h-auto object-cover"
              />
              <figcaption className="px-5 py-3 text-sm text-slate-400">
                The till, the self-order kiosk and the menu board showing the same Posso One menu. Change the price of the chicken box once and all three update.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Article body */}
        <article className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white !mt-0">Why do takeaway menus fall out of sync in the first place?</h2>
              <p>
                Because most takeaways build their technology one purchase at a time. The till came first. A kiosk was added when the queue got long. The signage came from a screen supplier. The website was built by a web designer. Just Eat, Deliveroo and Uber Eats each arrived with their own tablet and their own menu editor. Every one of those is a separate copy of the menu, and every price change has to be made in every copy.
              </p>
              <p>
                The result is familiar to anyone who has run a counter on a Friday: the board says £8.50, the kiosk says £8.00, the website still lists a special you dropped in June, and a Deliveroo customer has just ordered the lamb that ran out at half seven. Staff spend the quiet hours re-typing menus and the busy hours apologising for them.
              </p>
              <p>
                A menu sync fixes this by making one system the <strong className="text-white">single source of truth</strong> and turning every other screen into a reader. That is the whole idea. Everything else in this article is detail about how well a given supplier does it.
              </p>

              <h2 className="text-3xl font-bold text-white">How does menu sync work in Posso One?</h2>
              <p>
                Posso One is a single cloud platform. The <Link href="/pos" className="text-primary hover:underline">till</Link> holds the master menu: products, categories, prices, images, modifiers, portion sizes, opening hours and delivery settings. When you edit any of those on the till or in the cloud dashboard, the change is pushed to every connected screen and channel.
              </p>
              <p>
                In practice it works like this. You mark the chicken wings as sold out on the till. Within seconds the wings vanish from the <Link href="/self-order-kiosks" className="text-primary hover:underline">self-order kiosk</Link> menu, drop off your <Link href="/online-ordering" className="text-primary hover:underline">online ordering website and app</Link>, are marked unavailable on the connected marketplaces, and the <Link href="/ai-phone-ordering" className="text-primary hover:underline">AI phone line</Link> stops offering them because it reads the same live menu. When a fresh delivery arrives you switch them back on once, and every channel sells them again.
              </p>
              <p>
                Orders come back the other way through the same pipe. A kiosk order, a website order, a Just Eat order and a phone order all land on the same till and the same <Link href="/kitchen-display-system" className="text-primary hover:underline">kitchen display</Link>, routed to the fryer, grill or cold station by menu category. Nobody re-keys anything, and the kitchen sees one queue rather than four.
              </p>
            </div>
          </div>
        </article>

        {/* Channel grid */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-4">Which channels read from the synced menu?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-3xl">
              Seven screens and channels, one menu. Each card links to the product page if you want the detail.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {channels.map((c) => (
                <Link key={c.name} href={c.href} className="glass-card rounded-xl p-6 border border-slate-700/50 hover:border-primary/50 transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{c.name}</h3>
                  <p className="text-slate-400 text-sm mt-2">{c.what}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Body part two */}
        <article className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white !mt-0">How do self-order kiosks stay in sync with the till?</h2>
              <p>
                A Posso kiosk is not a separate product with its own menu. It is another screen on the same Posso One system, so it shows the same categories, the same modifiers and the same prices as the till, plus the images and upsell prompts you have set for kiosk use. Add a new meal deal on the till and it appears on the kiosk with no second edit. Sold-out items are removed rather than greyed out, so customers are never offered something they cannot have.
              </p>
              <p>
                The one thing worth doing separately is the kiosk presentation. A photo sells a line that plain text does not, and the upsell prompt for the dip should fire at the moment the chicken is added. Those settings live in the same menu record, so they are configured once as well. Our post on <Link href="/blog/how-to-launch-a-new-menu-item-takeaway" className="text-primary hover:underline">launching a new menu item</Link> covers why the kiosk is the strongest channel for a new line.
              </p>

              <h2 className="text-3xl font-bold text-white">Can digital signage menu boards pull prices from the EPOS?</h2>
              <p>
                Yes, if the signage is managed from the same place as the menu. The mistake to avoid is buying a screen that is really a media player: it loops a slideshow of images that somebody has to redesign every time a price moves. That is why so many menu boards still show last year&apos;s prices with a sticker over them.
              </p>
              <p>
                Posso&apos;s <Link href="/digital-signage" className="text-primary hover:underline">digital signage</Link> is managed centrally alongside the till, so menu boards, promotional screens and order-status displays are updated from the office rather than with a ladder and a memory stick. For a multi-site operator that matters more: a price change across five shops is one job, not five visits. If you run a chain, the <Link href="/franchise" className="text-primary hover:underline">franchise page</Link> covers global menu sync across a whole estate.
              </p>

              <h2 className="text-3xl font-bold text-white">How do Just Eat, Deliveroo and Uber Eats fit in?</h2>
              <p>
                The marketplaces are where sync usually breaks, because each one has its own menu editor and its own tablet. Posso&apos;s <Link href="/delivery-integrations" className="text-primary hover:underline">delivery integrations</Link> connect the three to the till so that orders arrive on the same screen as everything else, and menu items, prices and availability are kept aligned between the till and the platforms. Mark an item sold out once and it reflects across the connected channels without logging into each portal.
              </p>
              <p>
                Two practical notes. First, keep the marketplace menu a deliberate subset if you want to: it is common to hold back a bundle or a loyalty reward for your own commission-free channel so that direct ordering is the better deal. Second, watch the pricing. Many operators price marketplace items higher to absorb commission, and a good sync lets you set that per channel rather than by hand.
              </p>

              <h2 className="text-3xl font-bold text-white">What about phone orders?</h2>
              <p>
                The phone is the channel most takeaways forget when they think about menu sync, and it is the one where a stale menu costs the most goodwill. Posso&apos;s <Link href="/ai-phone-ordering" className="text-primary hover:underline">AI phone ordering</Link> is trained on the live Posso One menu, so prices, portions, modifiers and out-of-stock items stay current automatically. It takes the full order for collection or delivery, confirms the total and ready time, and sends it straight to the till and kitchen display. Caller ID matches returning customers to your records, so &quot;same as last time?&quot; works over the phone as well as at the counter.
              </p>

              <h2 className="text-3xl font-bold text-white">How do you keep the kitchen in step?</h2>
              <p>
                Sync is not only about what customers see. The kitchen display reads the same menu, which is what lets it route items to the right station by category and show, across every open ticket, how many portions of chips are outstanding. When you add a new item to the till you decide which station cooks it at the same time. That is the difference between a new line slotting into service and a new line slowing every other order on a Saturday night.
              </p>
            </div>
          </div>
        </article>

        {/* Buyer checks */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4">What should I check before buying a synced menu system?</h2>
            <p className="text-slate-300 text-lg mb-10">
              Six questions for any supplier, Posso included. Ask to see each one done live in the demo rather than described.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {checks.map((c) => (
                <div key={c.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-slate-400">{c.body}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-lg mt-10">
              For a broader comparison of what to look for, our <Link href="/best-restaurant-epos-system-uk" className="text-primary hover:underline">guide to the best restaurant EPOS systems in the UK</Link> and the <Link href="/replace-old-epos-system" className="text-primary hover:underline">guide to replacing an old EPOS system</Link> both cover menu management in more depth.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">One menu. Every screen. Every channel.</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Posso One runs the till, kiosks, signage, kitchen screens, online ordering, the marketplaces and the AI phone line from a single menu. Setup is free, and we build your menu before you go live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 text-lg px-8 py-3 font-medium">
                Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+448081753956" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors">
                <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
              </a>
            </div>
          </div>
        </section>

        <FAQSection title="EPOS Menu Sync — Frequently Asked Questions" faqs={[
          { question: 'Can I sync my EPOS menu with self-order kiosks?', answer: 'Yes, provided the kiosk and the till run on the same platform. Posso self-order kiosks read the Posso One menu directly, so products, prices, modifiers, images and sold-out flags are edited once on the till and appear on the kiosk automatically.' },
          { question: 'Can digital signage menu boards update from my till?', answer: 'They can when the signage is managed centrally alongside the EPOS rather than as a standalone media player. Posso digital signage is managed from the cloud, so menu boards and promotional screens are changed from the office without touching each screen.' },
          { question: 'Do Just Eat, Deliveroo and Uber Eats menus sync with the POS?', answer: 'With Posso delivery integrations, items, prices and availability are kept aligned between the Posso POS and the connected marketplaces, and orders from all three arrive on the till and kitchen display automatically instead of on separate tablets.' },
          { question: 'Does AI phone ordering use the same menu as the till?', answer: 'Yes. Posso AI phone ordering is trained on the live Posso One menu, including prices, portions, modifiers and out-of-stock items, so it never offers a caller something the kitchen has run out of. Orders go straight to the till and kitchen display.' },
          { question: 'What happens to menu sync if the internet goes down?', answer: 'Posso One is built offline-first. The till and kitchen keep taking and cooking orders locally and re-sync with the cloud when the connection returns. Online, marketplace and phone orders resume as soon as the line is back.' },
          { question: 'How long does it take to set up a synced menu?', answer: 'Posso builds your menu and configures your equipment before you go live, and setup is free. Most single-site takeaways are live within a day or two of the hardware arriving; the AI phone line typically goes live within a day or two as well.' },
        ]} />

        {/* Author box */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8 text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">About the author</p>
              <p>
                <Link href="/about/paul-robinson" className="text-white font-semibold hover:text-primary transition-colors">Paul Robinson</Link> is Managing Director of{' '}
                <Link href="/about" className="text-primary hover:underline">Posso Ltd</Link>, a Leicester-based UK technology company supplying ePOS systems, self-order kiosks, digital signage, online ordering, kitchen display systems, AI phone ordering and card payments to takeaways, QSRs, restaurants and schools.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
