import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Monitor, Cloud, CalendarClock, Palette, Wifi, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Signage Systems',
  description:
    'Digital Signage Systems for menu boards, promotional displays, and content management — cloud-controlled, scheduled content, and real-time updates for hospitality and retail.',
  keywords: [
    'digital signage systems',
    'digital menu boards',
    'digital signage uk',
    'restaurant digital signage',
    'digital display systems',
    'cloud digital signage',
    'digital signage software',
    'menu board display',
    'digital signage for restaurants',
    'digital signage content management',
  ],
  alternates: {
    canonical: '/digital-signage-systems',
  },
  openGraph: {
    title: 'Digital Signage Systems | Posso UK',
    description:
      'Digital Signage Systems — menu boards, promo displays, cloud-controlled content management, and scheduled updates for hospitality.',
    url: 'https://posso.co.uk/digital-signage-systems',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Digital Signage System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, Android',
    description:
      'Digital signage system with cloud-controlled menu boards, promotional displays, content scheduling, real-time updates, and multi-location management for hospitality and retail.',
    url: 'https://posso.co.uk/digital-signage-systems',
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
      reviewCount: '154',
      bestRating: '5',
    },
    featureList: [
      'Cloud-controlled digital menu boards',
      'Promotional display management',
      'Content scheduling and automation',
      'Real-time price and availability updates',
      'Multi-location management',
      'Custom branded templates',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Digital Signage Systems', item: 'https://posso.co.uk/digital-signage-systems' },
    ],
  },
];

const features = [
  { icon: Monitor, title: 'Digital Menu Boards', description: 'Replace printed menus with vibrant digital displays. Show your full menu with item names, descriptions, prices, and photos. Update prices, add new items, or mark dishes as sold out in real time from any device. A lunch menu that switches automatically to the dinner menu at 5pm. Seasonal specials that appear on the board the moment you publish them.' },
  { icon: Palette, title: 'Promotional Displays', description: 'Create eye-catching promotional content for your screens. Highlight daily specials, happy hour deals, new menu items, or upcoming events. Use your brand colours, logos, and fonts for a professional look. Rotate between multiple promotions on a single screen — the lunch deal at noon, the cocktail offer at 6pm, live music announcement at 8pm. All scheduled in advance.' },
  { icon: Cloud, title: 'Cloud Content Management', description: 'Manage all your digital signage from a web-based dashboard. Log in from any computer, tablet, or phone. Upload images, edit text, adjust layouts, and publish changes that appear on your screens within seconds. No need to be on-site — update your Edinburgh menu board from your London office. One platform, unlimited screens, instant updates.' },
  { icon: CalendarClock, title: 'Content Scheduling', description: 'Schedule content to appear and disappear automatically. Set the breakfast menu to display from 7am to 11am, lunch from 11am to 3pm, and dinner from 5pm to close. Schedule a promotional video to run every Friday evening. Set seasonal menus weeks in advance — your Christmas menu appears on December 1st and disappears on January 2nd without manual intervention.' },
  { icon: Wifi, title: 'Real-Time Updates', description: 'When a dish sells out, mark it as unavailable and the menu board updates instantly. When you change a price, it reflects on screen within seconds. POS integration means the menu board can automatically grey out items that are out of stock. Customers see an accurate, up-to-date menu at all times — reducing order disappointment and kitchen disruption.' },
  { icon: LayoutGrid, title: 'Multi-Location Management', description: 'Control digital signage across all your locations from one dashboard. Push the same menu update to 20 sites simultaneously, or customise content per location. Compare which promotions perform best at which sites. A chain restaurant can standardise branding while allowing local specials. Central control with local flexibility.' },
];

const benefits = [
  { title: 'Eliminate Printing Costs', description: 'A restaurant that reprints menus monthly spends £2,000-5,000 per year on printing. Seasonal changes, price updates, new items — every change means a reprint. Digital signage eliminates printing entirely. Changes are free, instant, and unlimited. The system pays for itself within the first year through printing savings alone.' },
  { title: 'Increase Sales With Visual Upselling', description: 'A photo of a dessert on a digital display sells more desserts than text on a printed menu. Research shows digital menu boards increase sales of featured items by 15-30%. Highlight your highest-margin items, promote add-ons, and rotate specials throughout the day. Visual merchandising drives impulse purchases that printed menus cannot match.' },
  { title: 'Never Show an Unavailable Item', description: 'Nothing frustrates a customer more than ordering something that is sold out. POS-integrated digital signage automatically updates availability. When the last portion of fish pie sells, the menu board reflects it immediately. Customers only see what they can actually order. Fewer disappointments, fewer complaints, smoother service.' },
  { title: 'Save Staff Time on Menu Changes', description: 'Switching from lunch to dinner service used to mean replacing printed menus, changing blackboard specials, and updating window displays. With digital signage, the transition is automatic. The dinner menu appears at the scheduled time. Staff focus on service, not signage. Over a year, automated scheduling saves hundreds of hours of manual menu management.' },
];

export default function DigitalSignageSystemsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'Solutions', href: '/pos' },
          { label: 'Digital Signage Systems' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Monitor className="w-3 h-3 mr-2" />
                CLOUD-CONTROLLED DISPLAYS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Digital Signage{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Systems
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Menu boards, promotional displays, and content management — cloud-controlled, automatically scheduled, and updated in real time from anywhere.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Digital menu boards with real-time updates</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Scheduled content — breakfast to dinner automatic</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS integration from £499 + VAT</li>
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Digital Signage Features</h2>
              <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                Professional-grade digital signage with the simplicity of a smartphone — manage your screens from anywhere.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Businesses Switch to Digital Signage</h2>
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
                From a Single Screen to a Multi-Site Network
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A single restaurant installs a <strong className="text-white">43-inch digital menu board</strong> behind the counter. The breakfast menu shows from opening until 11am, then seamlessly transitions to lunch. Sold-out items disappear in real time. Daily specials are updated from the owner's phone in 30 seconds. That one screen replaces printed menus, blackboard specials, and paper promotions.
                </p>
                <p>
                  A restaurant group with 15 locations manages all screens from <strong className="text-white">one cloud dashboard</strong>. A new seasonal menu launches across every site simultaneously. Local managers can add location-specific specials while head office controls the core branding. Weekly promotional content is scheduled in advance — the marketing team sets it up on Monday, and it runs automatically all week.
                </p>
                <p>
                  In retail, digital signage drives <strong className="text-white">impulse purchases and brand awareness</strong>. A window-facing display catches passing foot traffic with rotating offers. A screen at the point of sale promotes add-ons and upsells. Content changes are free and instant — no more waiting for the printer, no more out-of-date posters on the wall.
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
                <Link href="/self-ordering-kiosk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Self-Order Kiosk</p>
                  <p className="text-slate-400 text-sm mt-1">Kiosks from £699 + VAT</p>
                </Link>
                <Link href="/touch-screen-till-system" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Touch Screen Till</p>
                  <p className="text-slate-400 text-sm mt-1">15" capacitive display</p>
                </Link>
                <Link href="/hospitality-software-uk" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Hospitality Software</p>
                  <p className="text-slate-400 text-sm mt-1">Full UK hospitality tech</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">POS from £499 + VAT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Digital Signage Systems — Frequently Asked Questions" faqs={[
          { question: 'What hardware do I need for digital signage?', answer: 'A commercial-grade display screen (typically 32" to 55"), a small media player that connects to the screen, and a Wi-Fi or ethernet connection. We supply complete packages including the screen, media player, mounting bracket, and all cabling. The cloud software runs on the media player and receives content updates over the internet.' },
          { question: 'Can I manage digital signage remotely?', answer: 'Yes. The cloud-based dashboard is accessible from any web browser. Update content, change schedules, and monitor screen status from your phone, tablet, or computer — wherever you are. Changes publish to screens within seconds. You never need to be on-site to update your digital signage.' },
          { question: 'How does content scheduling work?', answer: 'Set time-based rules for when content appears. Breakfast menu from 7am to 11am, lunch from 11am to 3pm, dinner from 5pm onwards. Schedule promotional content for specific days — happy hour on Fridays, weekend brunch offers on Saturdays. Set start and end dates for seasonal content. Everything runs automatically once configured.' },
          { question: 'Can digital signage integrate with my POS?', answer: 'Yes. POS integration allows your digital menu boards to reflect real-time availability. When an item sells out on the POS, the menu board automatically marks it as unavailable. Price changes made in the POS can sync to the display. This ensures customers always see an accurate, up-to-date menu.' },
          { question: 'Is digital signage suitable for multi-site businesses?', answer: 'Absolutely. Manage signage across all locations from one dashboard. Push updates to every screen simultaneously or customise per site. Compare content performance across locations. A restaurant chain, retail group, or hotel chain can maintain brand consistency while allowing local customisation — all from a single platform.' },
          { question: 'How much does a digital signage system cost?', answer: 'Digital signage integrates with POS systems from £499 + VAT. Complete hardware packages including commercial-grade displays are available. The cloud management platform is included. Multi-screen and multi-site packages offer volume pricing. Contact us for a quote tailored to your number of screens and locations.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
