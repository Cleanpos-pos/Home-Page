import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Share2, ShoppingBag, Link2, BarChart3, Bell, Smartphone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facebook Food Ordering System',
  description:
    'Facebook Food Ordering System — accept food orders via Facebook and social media, link to your online ordering page, track social commerce sales, and grow orders at low commission. From £499 + VAT.',
  keywords: [
    'facebook food ordering system',
    'facebook food ordering',
    'social media food ordering',
    'facebook restaurant ordering',
    'order food through facebook',
    'social commerce food',
    'facebook ordering system',
    'instagram food ordering',
    'social media ordering system',
    'facebook food ordering uk',
  ],
  alternates: {
    canonical: '/facebook-food-ordering-system',
  },
  openGraph: {
    title: 'Facebook Food Ordering System | Posso UK',
    description:
      'Facebook Food Ordering System — accept orders via social media, link to online ordering, and track social commerce at low commission.',
    url: 'https://posso.co.uk/facebook-food-ordering-system',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Facebook Food Ordering System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Facebook food ordering system that links your social media pages to your online ordering platform, tracks social commerce sales, processes orders at low commission, and integrates with your POS.',
    url: 'https://posso.co.uk/facebook-food-ordering-system',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '176',
      bestRating: '5',
    },
    featureList: [
      'Order Now button on Facebook and Instagram',
      'Direct link to branded online ordering page',
      'Social commerce sales tracking and attribution',
      'Low commission on all social media orders',
      'POS integration with automatic order receipt',
      'Social media promotional tools and scheduling',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Facebook Food Ordering System', item: 'https://posso.co.uk/facebook-food-ordering-system' },
    ],
  },
];

const features = [
  { icon: Share2, title: 'Order Now Button on Facebook', description: 'Add an "Order Now" button to your Facebook business page that links directly to your branded online ordering page. A customer browsing your Facebook page sees your latest food photos, reads reviews, and taps Order Now without leaving the social media experience. They land on your ordering page — not a third-party marketplace — and you keep the customer relationship.' },
  { icon: Link2, title: 'Direct Ordering Link', description: 'Your branded ordering URL is shareable across Facebook, Instagram, WhatsApp, Twitter, and any social channel. Post a photo of tonight\'s special with a direct link to order it. Share the link in stories, reels, comments, and DMs. Every link click leads to your ordering page at low commission — no third-party platform taking 30% of the order value.' },
  { icon: ShoppingBag, title: 'Social Commerce Integration', description: 'Instagram posts and stories include a "Tap to Order" link in bio or swipe-up. Facebook posts embed the ordering link. WhatsApp Business messages include the menu URL. Every social touchpoint becomes an ordering opportunity. The customer journey from seeing a food photo to placing an order takes less than 60 seconds.' },
  { icon: BarChart3, title: 'Social Sales Tracking', description: 'Track which social media channels drive the most orders. See how many orders came from Facebook versus Instagram versus WhatsApp. Measure the conversion rate of social media posts to actual orders. Identify which types of content — food photos, offers, videos — generate the most revenue. Attribution data tells you exactly where your social media effort is paying off.' },
  { icon: Bell, title: 'POS Integration', description: 'Orders placed through your social media links arrive on the POS automatically. They print in the kitchen alongside walk-in and phone orders. One workflow for all order sources. The POS does not care whether the customer found you on Facebook, Instagram, or Google — the order appears the same way and processes through the same kitchen workflow.' },
  { icon: Smartphone, title: 'Social Promotional Tools', description: 'Create promotional posts with built-in ordering links. A Friday fish and chips special with a link to order. A new menu launch with a limited-time discount code. A loyalty offer for customers who order through social media. Schedule posts in advance from the dashboard. Every promotion is trackable — see how many orders each post generated.' },
];

const benefits = [
  { title: 'Convert Social Followers into Customers', description: 'Your Facebook and Instagram followers already like your food. They see your photos, read your updates, and watch your stories. But without a direct ordering link, they have to search for your phone number or visit a third-party app. A one-tap Order Now button removes every barrier between scrolling and ordering. Conversion increases dramatically.' },
  { title: 'Avoid Third-Party Platform Fees', description: 'Third-party food ordering platforms charge 25-35% commission on every order. When a customer finds you on Facebook and orders through a third-party platform, you pay twice — once in social media effort and again in platform commission. Your own branded ordering page charges low commission. On 50 social media orders per week at £25 average, the savings exceed £400 weekly.' },
  { title: 'Own Your Customer Data', description: 'When customers order through your branded page, you capture their email, phone number, and order history. That data powers future marketing — email offers, SMS campaigns, loyalty programmes. When customers order through a third-party platform, the platform owns the data. Your social media investment should build your customer database, not someone else\'s.' },
  { title: 'Amplify Your Social Media ROI', description: 'Every food photo, every story, every reel becomes a revenue opportunity when paired with a direct ordering link. Measure the actual revenue generated by your social media content. A well-photographed burger that generates 200 orders at £12 each produces £2,400 in trackable revenue. Justify your social media time investment with hard numbers.' },
];

export default function FacebookFoodOrderingSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Facebook Food Ordering System' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Share2 className="w-3 h-3 mr-2" />
                SOCIAL MEDIA FOOD ORDERING
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Facebook Food{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ordering System
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Turn your Facebook and Instagram followers into paying customers — direct ordering links, social commerce tracking, POS integration, and low commission on every order.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Order Now button on Facebook and Instagram</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Low commission — no 30% platform fees</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS with social ordering from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Social Media Ordering Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything you need to turn social media engagement into food orders.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Social Commerce Matters for Food Businesses</h2>
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
                From Likes to Orders
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Your restaurant&apos;s Facebook page has <strong className="text-white">hundreds or thousands of followers</strong> who see your food posts every week. Without a direct ordering link, those likes and comments are just vanity metrics. Add an Order Now button and every engagement becomes a potential order. The distance between seeing your food and buying your food shrinks to one tap.
                </p>
                <p>
                  <strong className="text-white">Instagram is a visual menu</strong>. Every photo of a dish is an advertisement. Every reel of kitchen preparation builds appetite. When that appetite converts to hunger, the customer needs a frictionless path to ordering. A link in bio, a story swipe, or a DM with your ordering URL completes the journey before the customer considers a competitor.
                </p>
                <p>
                  The <strong className="text-white">low commission model</strong> means social media orders are significantly more profitable than third-party platform orders. If you currently pay 30% commission to a delivery platform, switching those customers to your own ordering page saves you 20-25% per order. Invest that saving back into your social media content — better photos, more posts, more reach — and create a virtuous cycle of growth.
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
                <Link href="/food-delivery-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Food Delivery Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery order system</p>
                </Link>
                <Link href="/takeaway-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway POS</p>
                  <p className="text-slate-400 text-sm mt-1">POS for takeaways</p>
                </Link>
                <Link href="/takeaway-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway App</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering app</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Facebook Food Ordering System — Frequently Asked Questions" faqs={[
          { question: 'How do I add an Order Now button to my Facebook page?', answer: 'We set up your branded online ordering page and provide the direct URL. You add this URL to the "Order Now" call-to-action button on your Facebook business page — it takes 2 minutes in your page settings. When customers tap the button, they land on your branded ordering page where they can browse the menu, customise their order, and pay online. The order arrives on your POS automatically.' },
          { question: 'Does it work with Instagram?', answer: 'Yes. Add your ordering link to your Instagram bio, include it in story swipe-ups (or link stickers), and share it in DMs. Instagram does not support direct embedded ordering, but the link-based approach works seamlessly. Customers tap the link, land on your ordering page, and place their order. All social orders are tracked with source attribution in your dashboard.' },
          { question: 'What commission do you charge on social media orders?', answer: 'Posso charges low commission on online orders — significantly less than the 25-35% charged by third-party delivery platforms. The exact rate depends on your plan. For a restaurant processing 200 social media orders per month at £20 average, the commission savings compared to a third-party platform can exceed £800 per month.' },
          { question: 'Can I track which social posts generate orders?', answer: 'Yes. The dashboard shows order volume and revenue attributed to social media channels. Use unique tracking links for specific campaigns or posts to see exactly which content drives the most orders. Over time, the data shows which types of posts — food photos, offers, videos, stories — convert best for your business.' },
          { question: 'Do social media orders appear on the POS?', answer: 'Yes. Orders placed through your branded ordering page — whether the customer arrived from Facebook, Instagram, WhatsApp, or any other source — appear on the POS automatically. They print in the kitchen alongside walk-in and phone orders. There is no separate tablet or screen for online orders. One workflow handles all channels.' },
          { question: 'How much does the Facebook ordering system cost?', answer: 'The online ordering system that powers Facebook and social media orders is included with the Posso POS from £499 + VAT. Low commission applies to online orders. The branded ordering page, social media link setup, and POS integration are included. Finance from £24.92 per week. Free setup and staff training included with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
