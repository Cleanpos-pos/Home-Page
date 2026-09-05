import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  ArrowRight,
  Phone,
  Clock,
  MessageSquare,
  Percent,
  Megaphone,
  BarChart3,
  ChefHat,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const SLUG = 'how-to-launch-a-new-menu-item-takeaway';
const URL = `https://www.posso.co.uk/blog/${SLUG}`;
const PUBLISHED = '2026-09-05';

export const metadata: Metadata = {
  title: "Menu Launch Lessons: McDonald's vs Burger King",
  description:
    "McDonald's and Burger King launched new nuggets on the same day with opposite strategies. The six-step menu launch process UK takeaways can copy.",
  keywords: [
    'how to launch a new menu item',
    'menu launch takeaway',
    'limited time offer takeaway',
    'LTO vs permanent menu change',
    'menu engineering UK',
    'attach rate restaurant',
    'average order value takeaway',
    'kiosk upsell prompts',
    "McDonald's vs Burger King nuggets",
    'new menu item checklist',
  ],
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: "Menu Launches That Actually Sell: McDonald's vs Burger King Nuggets | Posso UK",
    description:
      'Two chains, one launch day, opposite strategies. A six-step menu launch process for UK takeaways: LTO or permanent fix, complaint data, sauces, channels, upsells and the numbers to check.',
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['https://www.posso.co.uk/about/paul-robinson'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Menu launch lessons for UK takeaways from the McDonald\'s vs Burger King nugget launch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Menu Launch Lessons: McDonald's vs Burger King",
    description: 'The six-step menu launch process UK takeaways can copy from the nugget war.',
    images: ['/og-image.png'],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${URL}#article`,
  headline: "Menu Launches That Actually Sell: What the McDonald's vs Burger King Nugget War Teaches UK Takeaways",
  description:
    "On 1 September 2026 McDonald's ran a limited-time Spicy McNuggets offer while Burger King permanently rebuilt its nuggets from customer complaints. Both launched sauces. Here is the six-step menu launch process an independent UK takeaway can copy.",
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
  image: 'https://www.posso.co.uk/og-image.png',
  inLanguage: 'en-GB',
  articleSection: 'Menu Strategy',
  keywords: 'menu launch, limited-time offer, menu engineering, attach rate, average order value, UK takeaway',
  citation: {
    '@type': 'NewsArticle',
    headline: "Chicken nuggets land on menus at McDonald's and Burger King on the same day",
    publisher: { '@type': 'Organization', name: 'USA Today' },
    url: 'https://www.yahoo.com/lifestyle/articles/chicken-nuggets-land-menus-burger-100622336.html',
    datePublished: '2026-09-01',
  },
  about: [
    { '@type': 'Thing', name: 'Menu engineering' },
    { '@type': 'Thing', name: 'Limited-time offer' },
  ],
};

const launchChannels = [
  { channel: 'Own online ordering site and app', action: 'Featured item on the home screen, not buried in a category.' },
  { channel: 'Self-order kiosks', action: 'Front-page tile with an image. Items with photos sell better than text-only lines.' },
  { channel: 'Just Eat, Deliveroo, Uber Eats', action: 'Update the same day, with a photo.' },
  { channel: 'Customer list (SMS / push)', action: 'Message previous customers. It is the cheapest launch channel you have.' },
  { channel: 'Google Business Profile', action: 'A post and a menu update. Free, and shown when people search your name.' },
];

const launchMetrics = [
  { metric: 'Units sold per day', tells: 'Raw demand, and whether it is fading.' },
  { metric: 'Attach rate (share of orders containing the item)', tells: 'Whether it reaches customers or only enthusiasts.' },
  { metric: 'Average order value with vs without the item', tells: 'Whether the sauce and bundle strategy is working.' },
  { metric: 'Channel split (counter / kiosk / online / aggregator)', tells: 'Where to push harder.' },
  { metric: 'Repeat orders by customer', tells: 'The real test. Do people come back for it?' },
  { metric: 'Remakes and refunds on the item', tells: 'Whether the kitchen can execute it at volume.' },
];

const sixSteps = [
  { icon: Clock, title: 'Decide: LTO or permanent fix', description: 'Choose the job before the launch, and say so on the menu. A limited-time offer needs a published end date. A permanent fix needs you to tell customers you fixed it.' },
  { icon: MessageSquare, title: 'Build it from complaint data', description: 'Reviews, refund and remake reasons, and never-reordered items. Recurring words in reviews are your R&D brief.' },
  { icon: Percent, title: 'Attach a sauce, side or bundle', description: 'Dips, sides and drinks carry the highest gross margin on the menu. The hero item is the excuse to sell them.' },
  { icon: Megaphone, title: 'Launch on every channel, same day', description: 'Own site, kiosks, aggregators, customer list and Google Business Profile. With a photo, at the front, not the bottom.' },
  { icon: Zap, title: 'Set upsell prompts on kiosks and online', description: 'Offer the sauce at the moment the item is added, not at checkout. The screen never forgets on a busy Friday.' },
  { icon: BarChart3, title: 'Review at week one and week four', description: 'Units, attach rate, AOV, channel split, repeat rate and remakes. Be prepared to kill it.' },
];

export default function MenuLaunchNuggetWarBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BlogBreadcrumb slug={SLUG} title="Menu Launches That Actually Sell" />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <ChefHat className="w-3 h-3 mr-2" />
              MENU STRATEGY
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Menu Launches That Actually Sell: What the McDonald&apos;s vs Burger King Nugget War Teaches UK Takeaways
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl">
              Two of the world&apos;s biggest fast-food chains put new chicken nuggets on the menu on the same day, using opposite strategies. Strip out the marketing budget and what is left is a menu launch process that scales down to a single chicken shop.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-sm text-slate-500">
              <span>
                By <Link href="/about/paul-robinson" className="text-slate-300 hover:text-primary transition-colors">Paul Robinson</Link>, Managing Director, Posso Ltd
              </span>
              <span className="hidden sm:inline">|</span>
              <time dateTime={PUBLISHED}>5 September 2026</time>
              <span className="hidden sm:inline">|</span>
              <span>9 min read</span>
            </div>
          </div>
        </section>

        {/* Short answer card for AI extraction */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-primary/30 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">In short</p>
              <p className="text-slate-200 text-lg leading-relaxed">
                On 1 September 2026, McDonald&apos;s and Burger King launched new chicken nuggets in the US on the same day. McDonald&apos;s ran a limited-time offer (Spicy McNuggets). Burger King permanently rebuilt a product customers had called &quot;rubbery&quot; and &quot;dry&quot;. Both attached new dipping sauces. For a UK takeaway, the transferable lesson is a six-step menu launch process: choose LTO or permanent fix, build from complaint data, attach a high-margin sauce or bundle, launch on every channel the same day with a photo, set kiosk and online upsell prompts, then measure attach rate, average order value and repeat rate at week one and week four.
              </p>
              <p className="text-slate-500 text-sm mt-4">
                Source for the launch details:{' '}
                <a
                  href="https://www.yahoo.com/lifestyle/articles/chicken-nuggets-land-menus-burger-100622336.html"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline hover:text-primary transition-colors"
                >
                  USA Today via Yahoo Life, 1 September 2026
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Article body, part one */}
        <article className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white !mt-0">What happened in the McDonald&apos;s vs Burger King nugget launch?</h2>
              <p>
                Two of the world&apos;s biggest fast-food chains put new chicken nuggets on US menus on the same day, 1 September 2026, using opposite strategies:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">McDonald&apos;s</strong> brought back <strong className="text-white">Spicy McNuggets</strong> as a <strong className="text-white">limited-time offer (LTO)</strong>. The item has come and gone several times since 2020, and scarcity is doing the marketing.
                </li>
                <li>
                  <strong className="text-white">Burger King</strong> launched a <strong className="text-white">permanently reworked nugget recipe</strong>, rebuilt after customers described the previous version as &quot;rubbery&quot; and &quot;dry&quot;. Burger King&apos;s head chef said the recipe came from &quot;thousands of texts, calls, and comments&quot; and was tested with real customers, including children. The nuggets also moved from a bag to a box.
                </li>
                <li>
                  <strong className="text-white">Both chains launched new dipping sauces alongside the nuggets.</strong>
                </li>
              </ul>
              <p>
                It reads like a marketing stunt. It is actually a complete menu-launch playbook, and almost every part of it scales down to an independent chicken shop in Leicester or a pizza takeaway in Peterborough.
              </p>

              <h2 className="text-3xl font-bold text-white">What is the difference between a limited-time offer and a permanent menu change?</h2>
              <p>
                A <strong className="text-white">limited-time offer (LTO)</strong> is a menu item sold for a fixed period, typically four to six weeks, to create urgency, bring back lapsed customers and give regulars a reason to order now. Its success is measured in a short-term sales spike and customer-list engagement.
              </p>
              <p>
                A <strong className="text-white">permanent menu fix</strong> replaces or improves a core item that customers complain about. Its success is measured in repeat-order rate and review scores, not a spike.
              </p>
              <p>
                McDonald&apos;s chose the first. Burger King chose the second. Most independent takeaways only ever do one thing: add a permanent item that sits quietly at the bottom of the menu. The lesson is to decide the job before the launch:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Want a revenue bump or a reason to message your customer list? Build it as an <strong className="text-white">LTO with a published end date</strong>.</li>
                <li>Want to fix a product people complain about? <strong className="text-white">Fix it properly and tell customers you fixed it.</strong></li>
              </ul>

              <h2 className="text-3xl font-bold text-white">How should a takeaway decide what new menu item to launch?</h2>
              <p>
                Build it from complaints, not guesses. Burger King rebuilt its nuggets from customer feedback. An independent takeaway already holds the same evidence in three places:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong className="text-white">Google, Just Eat and Deliveroo reviews.</strong> Search them for product words: &quot;chips&quot;, &quot;soggy&quot;, &quot;cold&quot;, &quot;dry&quot;. Recurring words are your R&amp;D brief.
                </li>
                <li>
                  <strong className="text-white">Refund and remake reasons on your EPOS.</strong> If one item accounts for a disproportionate share of remakes, that is your Burger King nugget.
                </li>
                <li>
                  <strong className="text-white">Order-once-never-again items.</strong> Customers who ordered a dish once and never reordered it. Any EPOS with customer records can surface this.
                </li>
              </ol>
              <p>
                Fix the top complaint first. It is cheaper than a new item and moves reviews faster.
              </p>

              <h2 className="text-3xl font-bold text-white">Why did both chains launch sauces with the nuggets?</h2>
              <p>
                Because the sauce is the margin. Dips, sides and drinks carry the highest gross margin on a fast-food menu, and a new hero item is the excuse to attach them.
              </p>
              <p>On a UK takeaway menu this looks like:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>A <strong className="text-white">named launch sauce</strong> available only during the promo period.</li>
                <li>A <strong className="text-white">bundle</strong> of new item, side and drink, priced to feel like a deal while carrying a higher ticket than the item alone.</li>
                <li><strong className="text-white">Upsell prompts on self-order kiosks and online ordering</strong> that offer the sauce at the moment the item is added, not at checkout when the decision is already made.</li>
              </ul>
              <p>
                Self-order kiosks are the strongest channel for this because the prompt fires on every order. Staff forget to upsell on a busy Friday; the screen does not. Operators running kiosks commonly report higher average order values than the counter for this reason. See how{' '}
                <Link href="/self-order-kiosks" className="text-primary hover:underline">Posso&apos;s self-order kiosks</Link> handle featured items and upsell prompts.
              </p>

              <h2 className="text-3xl font-bold text-white">Does packaging matter for a menu launch?</h2>
              <p>
                Yes. Burger King moved its nuggets from a bag to a box &quot;to deliver a better experience&quot;. For delivery-led UK takeaways it matters more: a fried item that leaves the kitchen perfect and arrives limp is rated on how it arrives. Vented packaging is part of the launch cost, not an afterthought.
              </p>
            </div>
          </div>
        </article>

        {/* Launch channel checklist */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4">Where should a new menu item be launched?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Everywhere, on the same day, with a photo. A launch that exists only on the counter menu board is invisible to delivery and online customers, now the majority for many takeaways. Launch checklist:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-700/50">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-900/60 text-white text-sm uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Channel</th>
                    <th scope="col" className="px-5 py-4 font-semibold">What to do on launch day</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {launchChannels.map((row) => (
                    <tr key={row.channel}>
                      <td className="px-5 py-4 font-medium text-white align-top">{row.channel}</td>
                      <td className="px-5 py-4 align-top">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 mt-6">
              If your{' '}
              <Link href="/online-ordering" className="text-primary hover:underline">online ordering site</Link> and{' '}
              <Link href="/delivery-integrations" className="text-primary hover:underline">aggregator menus</Link> pull from the same EPOS menu, the launch is one edit rather than five. See{' '}
              <Link href="/blog/sync-epos-menu-with-kiosks-and-digital-signage" className="text-primary hover:underline">how to sync your EPOS menu with kiosks and digital signage</Link>.
            </p>
          </div>
        </section>

        {/* Measurement */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4">How do you measure whether a new menu item is working?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Measure it like a chain would. The big chains know within days whether a launch works because every order is data. An independent has the same data in its POS. Pull these six numbers at the end of week one and week four:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-700/50">
              <table className="w-full text-left text-slate-300">
                <thead className="bg-slate-900/60 text-white text-sm uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Metric</th>
                    <th scope="col" className="px-5 py-4 font-semibold">What it tells you</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {launchMetrics.map((row) => (
                    <tr key={row.metric}>
                      <td className="px-5 py-4 font-medium text-white align-top">{row.metric}</td>
                      <td className="px-5 py-4 align-top">{row.tells}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">How to read the results</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { signal: 'AOV up, units flat after a fortnight', reading: 'It is a bundle item, not a hero.' },
                { signal: 'Units high, repeat rate low', reading: 'It was novelty. Fine for an LTO; a problem if you made it permanent.' },
                { signal: 'Category up, neighbouring items down by a similar amount', reading: 'You moved money, not made it.' },
              ].map((item) => (
                <div key={item.signal} className="glass-card rounded-xl p-5 border border-slate-700/50">
                  <p className="text-white font-semibold">{item.signal}</p>
                  <p className="text-slate-400 mt-2 text-sm">{item.reading}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-lg mt-8">
              If your current till cannot report attach rate or average order value by channel, that, not the recipe, is the bottleneck. Our{' '}
              <Link href="/best-restaurant-epos-system-uk" className="text-primary hover:underline">guide to the best restaurant EPOS systems in the UK</Link> covers what to look for.
            </p>
          </div>
        </section>

        {/* Kitchen execution */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <h2 className="text-3xl font-bold text-white">Can the kitchen repeat it at peak?</h2>
              <p>
                The unglamorous reason chains take months to launch a nugget is that it has to come out identical from thousands of kitchens. For an independent, the equivalent is Friday at 7pm. A new item that needs an extra fryer basket during peak slows every other order.
              </p>
              <p>
                Test it on a quiet Tuesday, then a busy Saturday, before it goes on the menu for real. Build the prep steps into your{' '}
                <Link href="/kitchen-display-system" className="text-primary hover:underline">kitchen display screens</Link> so it is cooked the same way by whoever is on shift.
              </p>
            </div>
          </div>
        </section>

        {/* Six-step process */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-3xl font-bold gradient-text text-center mb-4">
              The six-step menu launch process for UK takeaways
            </h2>
            <p className="text-slate-400 text-center mb-10 text-lg max-w-2xl mx-auto">
              Copy the structure, not the nuggets.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sixSteps.map((step, i) => (
                <div key={step.title} className="glass-card rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-slate-500 text-sm font-semibold">Step {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-slate-400 text-sm mt-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Launch it on every channel from one menu
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Posso One runs the till, self-order kiosks, online ordering, kitchen screens and aggregator menus from a single menu, with attach rate and average order value reported by channel.
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

        {/* Related */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/self-order-kiosks" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosks</p>
                  <p className="text-slate-400 text-sm mt-1">Upsell on every order</p>
                </Link>
                <Link href="/blog/how-dominos-became-a-tech-company" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">How Domino&apos;s Became a Tech Company</p>
                  <p className="text-slate-400 text-sm mt-1">Chain lessons for independents</p>
                </Link>
                <Link href="/kitchen-display-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Kitchen Display System</p>
                  <p className="text-slate-400 text-sm mt-1">Consistent at peak</p>
                </Link>
                <Link href="/takeaway-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway EPOS</p>
                  <p className="text-slate-400 text-sm mt-1">Reporting by channel</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Menu Launches — Frequently Asked Questions" faqs={[
          { question: 'How long should a limited-time menu item run?', answer: 'Four to six weeks is typical for chains. Long enough to reach occasional customers, short enough that the "ending soon" message is honest. Set the end date before launch and print it on the menu.' },
          { question: 'Should I launch a new item on Just Eat and Deliveroo at the same time as my own app?', answer: 'Yes, but price it so your own ordering channel is the better deal, for example a bundle or loyalty reward available only direct. A launch is a chance to move aggregator customers onto your own site.' },
          { question: 'How do I know if a new menu item is cannibalising existing sales?', answer: 'Compare category sales before and after. If new chicken sales rise by £400 a week but existing chicken drops by £350, you have moved money, not made it. POS category reports show this in minutes.' },
          { question: 'Do self-order kiosks really increase average order value?', answer: 'Operators using kiosks commonly report a higher average order value than the counter, because every order gets the same upsell prompt and customers add extras more readily on a screen than to a member of staff. The size of the lift depends on how well the prompts are configured.' },
          { question: 'What is menu engineering?', answer: 'Menu engineering is the practice of using sales and margin data to decide what goes on a menu, where it sits and how it is priced. The week-one and week-four review in this article is menu engineering applied to a single launch.' },
          { question: 'What is the difference between an LTO and a permanent menu change?', answer: 'A limited-time offer (LTO) runs for a fixed period, usually four to six weeks, and is judged on a short-term sales spike and customer-list engagement. A permanent menu change replaces or fixes a core item and is judged on repeat-order rate and review scores.' },
        ]} />

        {/* Author box */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8 text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">About the author</p>
              <p>
                <Link href="/about/paul-robinson" className="text-white font-semibold hover:text-primary transition-colors">Paul Robinson</Link> is Managing Director of{' '}
                <Link href="/about" className="text-primary hover:underline">Posso Ltd</Link>, a Leicester-based UK technology company supplying ePOS systems,{' '}
                <Link href="/self-order-kiosks" className="text-primary hover:underline">self-order kiosks</Link>, online ordering, kitchen display systems and card payments to takeaways, QSRs, restaurants and schools.
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
