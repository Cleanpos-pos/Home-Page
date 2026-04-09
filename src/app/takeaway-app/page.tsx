import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Smartphone, Truck, Bell, Heart, ShoppingBag, Clock } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Takeaway App',
  description:
    'Takeaway App — branded takeaway ordering app with delivery and collection, push notifications, customer loyalty, and low commission. Built for takeaways. From £499 + VAT.',
  keywords: [
    'takeaway app',
    'takeaway ordering app',
    'branded takeaway app',
    'takeaway delivery app',
    'takeaway app uk',
    'food takeaway app',
    'takeaway order app',
    'own takeaway app',
    'white label takeaway app',
    'takeaway collection app',
  ],
  alternates: {
    canonical: '/takeaway-app',
  },
  openGraph: {
    title: 'Takeaway App | Posso UK',
    description:
      'Branded Takeaway App with delivery/collection, push notifications, customer loyalty, and low commission. Built for takeaways.',
    url: 'https://posso.co.uk/takeaway-app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Takeaway App',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Branded takeaway ordering app with delivery and collection options, push notifications for promotions, customer loyalty programme, and low commission compared to third-party platforms.',
    url: 'https://posso.co.uk/takeaway-app',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '203',
      bestRating: '5',
    },
    featureList: [
      'Branded ordering app with your logo and colours',
      'Delivery and collection ordering',
      'Push notifications for promotions and updates',
      'Customer loyalty programme with rewards',
      'Low commission compared to delivery platforms',
      'Real-time order tracking for customers',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Takeaway App', item: 'https://posso.co.uk/takeaway-app' },
    ],
  },
];

const features = [
  { icon: Smartphone, title: 'Your Branded App', description: 'A takeaway ordering app with your name, logo, colours, and menu. Customers download it from the App Store or Google Play and it looks like your app — not a third-party platform. Your brand stays front and centre. Every order builds your relationship with the customer, not someone else\'s. The app links directly to your POS.' },
  { icon: Truck, title: 'Delivery & Collection', description: 'Customers choose between delivery and collection at checkout. For delivery, they enter their postcode and the app checks your delivery zones automatically. For collection, they select a time slot. Orders flow directly to your POS and kitchen display — no manual re-entry, no separate device. Delivery fees apply per zone.' },
  { icon: Bell, title: 'Push Notifications', description: 'Send push notifications to customers who have your app installed. Announce new menu items, limited-time offers, or quiet-period discounts. "20% off all orders before 5pm today" — the notification goes to thousands of local customers instantly. Unlike SMS, push notifications are free to send. A powerful tool for driving orders during slow periods.' },
  { icon: Heart, title: 'Customer Loyalty Programme', description: 'Reward repeat customers automatically. Every qualifying order earns points or stamps towards a free meal, discount, or reward. Customers track their progress in the app. You see who your most loyal customers are, how often they order, and what they buy. Loyalty programmes increase order frequency and reduce the number of customers who drift to competitors.' },
  { icon: ShoppingBag, title: 'Low Commission', description: 'Third-party delivery platforms charge 25–35% commission on every order. Your branded app charges low commission — significantly less per order. On 200 orders a month, the savings are substantial. Include a flyer with every delivery: "Order direct on our app and save." Over time, shift your customer base from expensive platforms to your own app.' },
  { icon: Clock, title: 'Real-Time Order Tracking', description: 'Customers see the status of their order in real time: received, being prepared, ready for collection, or out for delivery. No phoning the shop to ask how long. No uncertainty. The status updates automatically as the order moves through your kitchen workflow. Delivery customers see an estimated arrival time that updates based on driver progress.' },
];

const benefits = [
  { title: 'Own Your Customer Relationships', description: 'On Just Eat or Uber Eats, the customer belongs to the platform. On your app, the customer belongs to you. You have their order history, their contact details, and the ability to reach them with push notifications. When you want to launch a new menu or run a promotion, you communicate directly — no paying a platform for access to your own customers.' },
  { title: 'Dramatically Reduce Commission', description: 'A takeaway doing 200 orders a month at £20 average on a 30% commission platform pays £1,200 a month in commission. Move those orders to your branded app at low commission and the savings are transformational. That is money back in your pocket every single month. The app pays for itself almost immediately.' },
  { title: 'Drive Orders During Quiet Periods', description: 'Push notifications let you fill quiet periods with targeted promotions. Tuesday evening looking slow? Send "Free garlic bread with every order tonight" to 3,000 app users at 4pm. The notification is free to send and can drive dozens of extra orders. No advertising cost, no commission to a platform — just direct communication with your customers.' },
  { title: 'Build Long-Term Customer Loyalty', description: 'The loyalty programme gives customers a reason to choose your takeaway over the competitor down the road. Every order earns them progress towards a reward. The app makes reordering their favourites effortless — two taps and their usual is on its way. Convenience plus rewards equals repeat customers.' },
];

export default function TakeawayAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Takeaway App' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Smartphone className="w-3 h-3 mr-2" />
                BRANDED TAKEAWAY ORDERING APP
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Takeaway{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  App
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Your own branded takeaway app with delivery and collection, push notifications, customer loyalty, and low commission — stop paying 35% to delivery platforms.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Your brand, your app, your customers</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Push notifications drive orders during quiet times</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Takeaway POS from £499 + VAT with low commission</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Takeaway App Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Everything you need to take your takeaway online — on your terms, not a platform&apos;s.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Takeaways Choose Posso</h2>
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
                The Shift from Platforms to Your Own App
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Delivery platforms like Just Eat and Uber Eats are useful for <strong className="text-white">discovery</strong> — new customers find you there. But once someone has ordered from you, they should reorder through <strong className="text-white">your app</strong>. The cost difference is enormous: 30% commission versus low commission on every single order.
                </p>
                <p>
                  The strategy is simple: <strong className="text-white">keep using delivery platforms for new customers, but shift repeat orders to your branded app</strong>. Include a flyer with every delivery: "Download our app for exclusive offers and faster ordering." Offer a first-order discount. Make the app experience better than the platform experience.
                </p>
                <p>
                  Over 6–12 months, the shift is dramatic. Takeaways using Posso typically see <strong className="text-white">40–60% of orders move to their direct app</strong> within the first year. Every shifted order means more profit. The app pays for itself within weeks and then continues saving money every month.
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
                <Link href="/online-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Online Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Branded ordering website</p>
                </Link>
                <Link href="/delivery-integrations" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Integration</p>
                  <p className="text-slate-400 text-sm mt-1">Just Eat, Uber Eats</p>
                </Link>
                <Link href="/takeaway-epos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Takeaway ePOS</p>
                  <p className="text-slate-400 text-sm mt-1">Full takeaway system</p>
                </Link>
                <Link href="/food-delivery-ordering" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Delivery Ordering</p>
                  <p className="text-slate-400 text-sm mt-1">Delivery management</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Takeaway App — Frequently Asked Questions" faqs={[
          { question: 'Is the app branded with my takeaway name?', answer: 'Yes. The app uses your business name, logo, colours, and menu. It appears in the App Store and Google Play under your brand. Customers see your name when they open it — not a third-party platform. The entire experience is branded to your takeaway, building your identity and customer loyalty.' },
          { question: 'How does it compare to Just Eat commission?', answer: 'Just Eat, Uber Eats, and Deliveroo charge 25–35% commission per order. Your branded app through Posso charges low commission — a fraction of what platforms charge. On a £20 order, you save £5–7 per order. Multiply that across hundreds of orders per month and the savings are transformational for your bottom line.' },
          { question: 'Can I send push notifications to customers?', answer: 'Yes. Send push notifications to all customers who have installed your app. Announce new dishes, limited-time offers, or quiet-period discounts. Push notifications are free to send and reach customers instantly. They are one of the most effective tools for driving orders during slow periods.' },
          { question: 'How does the loyalty programme work?', answer: 'Customers earn points or stamps with every qualifying order. After reaching the threshold (e.g., 10 orders), they receive a reward — free item, percentage discount, or money off. Progress is tracked automatically in the app. You configure the rules: which orders qualify, what the reward is, and how many orders are needed.' },
          { question: 'Does the app integrate with my POS?', answer: 'Yes. Orders placed through the app arrive directly on your POS and kitchen display. No manual re-entry, no separate tablet. The order includes all details: items, modifiers, delivery or collection, customer address, and payment confirmation. It works exactly like a phone order — except it is already paid and accurately recorded.' },
          { question: 'How much does the takeaway app cost?', answer: 'The branded takeaway app is included with the Posso POS system from £499 + VAT. Low commission on app orders. The app is published to the App Store and Google Play under your brand. Finance from £24.92 per week. Free setup, menu configuration, and ongoing support with a 2-year warranty.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
