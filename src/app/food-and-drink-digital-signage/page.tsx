import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, ArrowRight, Tv, Clock, PoundSterling, Sun, Layers, Megaphone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food and Drink Digital Signage',
  description:
    'Food and Drink Digital Signage with dynamic menu boards for restaurants, bars, and cafes. Daypart menus, dynamic pricing, allergen display, and multi-screen control. From £499 + VAT.',
  keywords: [
    'food and drink digital signage',
    'digital menu board restaurant',
    'restaurant digital signage',
    'bar digital signage',
    'cafe digital menu',
    'digital menu display',
    'food digital signage',
    'drink menu board digital',
    'hospitality digital signage',
    'digital signage food uk',
  ],
  alternates: {
    canonical: '/food-and-drink-digital-signage',
  },
  openGraph: {
    title: 'Food and Drink Digital Signage',
    description:
      'Food and Drink Digital Signage with dynamic menu boards, daypart switching, dynamic pricing, allergen display, and multi-screen control.',
    url: 'https://www.posso.co.uk/food-and-drink-digital-signage',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Posso Food and Drink Digital Signage',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, iOS, Android',
    description:
      'Food and drink digital signage system with dynamic menu boards for restaurants, bars, and cafes. Features daypart menu switching, dynamic pricing, allergen information display, and multi-screen cloud control.',
    url: 'https://www.posso.co.uk/food-and-drink-digital-signage',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '499',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'Posso' },
    featureList: [
      'Dynamic menu boards for food and drink',
      'Automatic daypart menu switching',
      'Dynamic pricing and happy hour automation',
      'Allergen and dietary information display',
      'Multi-screen and multi-site management',
      'Promotional content scheduling',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'ePOS Systems', item: 'https://www.posso.co.uk/pos' },
      { '@type': 'ListItem', position: 3, name: 'Food and Drink Digital Signage', item: 'https://www.posso.co.uk/food-and-drink-digital-signage' },
    ],
  },
];

const features = [
  { icon: Tv, title: 'Dynamic Menu Boards', description: 'High-resolution digital menu boards display your food and drink offerings with vivid imagery, clear pricing, and organised categories. Menus update in real time — add a daily special in the morning, remove it when it sells out. Customers read the menu from the queue, decide faster, and order with fewer questions.' },
  { icon: Sun, title: 'Daypart Menu Switching', description: 'Breakfast, lunch, dinner, and late-night menus switch automatically at times you set. At 11:30am, the breakfast display transitions to the lunch menu without anyone touching it. Weekend schedules can differ from weekdays. Seasonal menus activate on preset dates. The screens always show what is currently served.' },
  { icon: PoundSterling, title: 'Dynamic Pricing & Happy Hour', description: 'Prices change on screen at scheduled times. Happy hour starts at 5pm — cocktails drop from £9.50 to £6.50 on the display and on the POS simultaneously. Weekend surcharges, early-bird discounts, and event pricing all automate. Customers see the current price, pay the current price, no discrepancies.' },
  { icon: Layers, title: 'Allergen & Dietary Display', description: 'Each menu item shows allergen icons and dietary labels directly on the digital board. Customers with allergies identify safe options from the queue without asking staff. Vegan, vegetarian, gluten-free, and nut-free indicators are clear and consistent. This meets Natasha\'s Law display requirements and builds customer confidence.' },
  { icon: Megaphone, title: 'Promotional Content Zones', description: 'Divide each screen into zones — menu on the left, promotions on the right, for example. Rotate promotional banners: a new cocktail launch, a set menu deal, a loyalty programme sign-up prompt. Schedule each banner to appear at specific times or on specific days. The menu stays static while promotions rotate.' },
  { icon: Clock, title: 'Multi-Site Cloud Control', description: 'Manage digital signage across every restaurant, bar, or cafe location from one cloud dashboard. Push a group-wide promotion to all sites in seconds. Update branding templates centrally. Each site\'s screens still reflect local menus and stock levels. Scale from one location to fifty without additional complexity.' },
];

const benefits = [
  { title: 'Increase Average Spend with Visual Menus', description: 'Customers spend more when they see appetising imagery alongside menu items. A photo of your signature burger with melting cheese drives more orders than text on a chalkboard. Digital signage with food photography lifts average transaction value — studies show increases of 15–30% compared to static menus.' },
  { title: 'Automate Happy Hour and Promotions', description: 'Manual price changes during happy hour are error-prone and time-consuming. Digital signage automates it — prices update on screen and on the POS at the scheduled time. Staff do not need to remember to change boards or update pricing. The promotion runs perfectly every time.' },
  { title: 'Reduce Perceived Wait Times', description: 'Customers waiting in a queue read the digital menu and decide what to order before they reach the counter. Engaging promotional content and rotating imagery make the wait feel shorter. Research shows digital signage in queues reduces perceived wait time by up to 35%.' },
  { title: 'Meet Allergen Display Requirements', description: 'Food businesses must display allergen information. Digital signage with allergen icons meets this requirement clearly and consistently. When a recipe changes, update the allergen tags once — it reflects across all screens instantly. No outdated paper allergen guides, no risk of displaying incorrect information.' },
];

export default function FoodAndDrinkDigitalSignagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[
          { label: 'ePOS Systems', href: '/pos' },
          { label: 'Food and Drink Digital Signage' },
        ]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                <Tv className="w-3 h-3 mr-2" />
                DIGITAL MENU BOARDS FOR HOSPITALITY
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
                <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Food and Drink{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Digital Signage
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Dynamic menu boards that switch between dayparts, automate happy hour pricing, display allergen information, and drive higher spend with vivid food imagery — for restaurants, bars, and cafes.
              </p>
              <ul className="space-y-3 text-slate-300 text-lg text-left">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Daypart menus switch automatically</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> Dynamic pricing for happy hours and promotions</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-400 shrink-0" /> POS system from £499 + VAT</li>
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
                Menu boards designed for the unique demands of restaurants, bars, and cafes.
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
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">Why Hospitality Venues Choose Digital Signage</h2>
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
                Digital Signage for Every Hospitality Setting
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  In a <strong className="text-white">fast-casual restaurant</strong>, the digital menu board is the primary ordering interface. Customers read it while queuing, choose their meal, and order confidently at the counter. High-quality food photography alongside clear pricing reduces decision time and drives upsells — "Add halloumi for £1.50" displayed next to every burger.
                </p>
                <p>
                  In a <strong className="text-white">bar or pub</strong>, digital signage handles the complexity of drink menus, rotating guest ales, and time-based pricing. Happy hour cocktail prices appear at 5pm and revert at 8pm — automatically. Guest beer boards update when a barrel is tapped or kicked. The specials board in the beer garden shows the same offers as the one behind the bar.
                </p>
                <p>
                  In a <strong className="text-white">cafe</strong>, daypart switching is essential. The all-day breakfast menu gives way to lunch wraps and salads at the right time. Seasonal drinks and daily soups are added each morning and removed when they sell out. The display does the work that previously required a staff member with a chalk pen.
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
                <Link href="/pos-signage" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">POS Signage</p>
                  <p className="text-slate-400 text-sm mt-1">POS-connected displays</p>
                </Link>
                <Link href="/restaurant-pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Restaurant POS</p>
                  <p className="text-slate-400 text-sm mt-1">Full restaurant system</p>
                </Link>
                <Link href="/bar-ordering-app" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">Bar Ordering App</p>
                  <p className="text-slate-400 text-sm mt-1">Mobile ordering for bars</p>
                </Link>
                <Link href="/pos" className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors border border-slate-700/50">
                  <p className="font-semibold text-white">ePOS Systems</p>
                  <p className="text-slate-400 text-sm mt-1">All POS solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="Food and Drink Digital Signage — FAQ" faqs={[
          { question: 'What type of screens do I need?', answer: 'We recommend commercial-grade displays rated for continuous operation — 12 to 18 hours daily. Sizes from 32 to 75 inches work well depending on viewing distance. We can supply screens or configure signage on displays you already own. Standard HDMI connectivity is all that is required.' },
          { question: 'Can menus switch automatically between breakfast, lunch, and dinner?', answer: 'Yes. You set the schedule — for example, breakfast until 11am, lunch from 11am to 5pm, dinner from 5pm onwards. The digital signage switches between menus at the scheduled times with no manual intervention. Weekend and holiday schedules can be different from weekday schedules.' },
          { question: 'How does dynamic pricing work for happy hour?', answer: 'Set a pricing rule: cocktails are £6.50 from 5pm to 7pm on weekdays, for example. The digital signage shows the reduced price during that window and reverts to the standard price afterwards. The POS applies the same pricing rule simultaneously, ensuring the price on screen matches the price charged.' },
          { question: 'Can I display allergen information on the boards?', answer: 'Yes. Each menu item can display allergen icons — gluten, nuts, dairy, shellfish, etc. — directly on the digital menu board. Dietary labels like vegan, vegetarian, and gluten-free are also supported. When you update a recipe or change an ingredient, the allergen tags update across all screens immediately.' },
          { question: 'How do I manage signage across multiple locations?', answer: 'The cloud dashboard provides centralised control over all screens at all locations. Push brand-wide templates, promotions, and pricing rules to every site. Each location can also have site-specific content — local specials, different opening hours, or location-specific stock availability. Changes take effect in seconds.' },
          { question: 'What does food and drink digital signage cost?', answer: 'The POS system with digital signage software starts from £499 + VAT. Signage content management is included in the subscription. Screen hardware is available through us or sourced independently. Setup includes template design, menu layout, daypart configuration, and training. Multi-site packages available.' },
        ]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
