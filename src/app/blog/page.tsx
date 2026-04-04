import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  CreditCard,
  Bot,
  Ticket,
  Zap,
  Snowflake,
  Pizza,
  Coffee,
  Wifi,
  Rocket,
  ShieldAlert,
  Utensils,
  LayoutDashboard,
  PiggyBank,
  Users,
  WifiOff,
  Brain
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posso Blog | Insights on Restaurant & Hospitality Tech',
  description: 'Explore the latest trends, tips, and insights on ePOS systems, self-order kiosks, online ordering, and restaurant management technology from the experts at Posso.',
  alternates: {
    canonical: '/blog',
  },
};

const blogPosts = [
  {
    title: "POS & Self-Order Kiosk Solutions",
    description: "Transform your business with POSSO's cutting-edge POS systems, EPOS solutions, and self-order kiosks. AI-powered technology for the modern hospitality industry.",
    href: "/blog/pos-and-self-order-kiosk-solutions",
    icon: <Rocket className="w-12 h-12 text-primary" />,
  },
  {
    title: "The Irrational Restaurant: Why Your Customers Are Lying to You",
    description: "A behavioural economics approach to modern POS systems, self-service kiosks, and hospitality technology. Discover how Posso Ltd solves psychological pain points.",
    href: "/blog/the-irrational-restaurant",
    icon: <Brain className="w-12 h-12 text-primary" />,
    featured: true,
  },
  {
    title: 'The Truth About Free EPOS Software in the UK',
    description: 'Is free EPOS software really free? Discover the hidden costs of "free" UK EPOS systems and why Posso is the transparent choice.',
    href: '/blog/free-epos-software-uk-truth',
    icon: <ShieldAlert className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Why Every Server Needs a Portable Card Machine',
    description: 'Boost restaurant efficiency with portable card machines. Learn how pay-at-table technology can save time and increase turnaround.',
    href: '/blog/portable-card-machine-hospitality',
    icon: <Smartphone className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Meet Posso: Next-Gen Tech for UK Hospitality',
    description: 'Explore our complete hospitality ecosystem, from self-service kiosks to low-commission ordering apps.',
    href: '/blog/posso-future-hospitality-tech',
    icon: <Rocket className="w-12 h-12 text-primary" />,
  },
  {
    title: 'The Perfect EPOS System for Your Indian Takeaway',
    description: 'Simplify complex menus and speed up delivery with Posso\'s EPOS system for Indian takeaways. Featuring Caller ID and advanced modifiers.',
    href: '/blog/epos-system-for-indian-takeaway',
    icon: <Utensils className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Streamline Your Orders with Specialised EPOS Software for Takeaway',
    description: 'Generic POS fails where specialized takeaway software succeeds. Discover how Posso aggregates orders and manages delivery zones.',
    href: '/blog/epos-software-for-takeaway-orders',
    icon: <LayoutDashboard className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Stop Paying Commissions: A Better EPOS System for Takeaway',
    description: 'Tired of 30% commission? Posso provides a better EPOS system for takeaways with low-commission online ordering.',
    href: '/blog/epos-system-for-takeaway-commission-free',
    icon: <PiggyBank className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Speed Up Your Coffee Line with a Smart Cafe POS System',
    description: 'Master the morning rush with Posso\'s high-speed cafe POS system. Features one-tap ordering and automated upselling.',
    href: '/blog/cafe-pos-system-efficiency',
    icon: <Coffee className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Table Management Made Easy with Restaurant EPOS',
    description: 'Master your dining room with Posso\'s Restaurant EPOS. Featuring TableMaestro visual floor plans and course firing.',
    href: '/blog/restaurant-epos-table-management',
    icon: <Users className="w-12 h-12 text-primary" />,
  },
  {
    title: 'What is the Best POS System for Pizza Delivery?',
    description: 'Pizza delivery requires specialized features like half-and-half modifiers and integrated mapping. See why Posso leads the way.',
    href: '/blog/best-pos-system-for-pizza-delivery',
    icon: <Pizza className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Why "Hybrid" EPOS Systems for Takeaways Are Essential',
    description: 'Don\'t let a bad internet connection ruin your Friday night. Discover why Posso\'s hybrid EPOS systems are essential.',
    href: '/blog/hybrid-epos-systems-for-takeaways',
    icon: <WifiOff className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Why Posso? The Operating System for High-Volume Amusement Parks',
    description: 'Discover how we optimise guest flow and season pass ecosystems for 2026. High-speed turnstile integration and ride-side smart storage.',
    href: '/blog/why-posso-amusement-park-efficiency-2026',
    icon: <Ticket className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Why Posso? Engineering the Frictionless Trampoline Park',
    description: 'Revolutionise your trampoline park management with integrated digital waivers, RFID wristbands, and automated session timing.',
    href: '/blog/why-posso-trampoline-park-tech-stack',
    icon: <Zap className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Why Posso? The Bespoke Solution for Modern Ice Rinks',
    description: 'Optimise your ice rink or winter festival with Posso. Manage skate hire, session access, and secure storage in one unified system.',
    href: '/blog/why-posso-ice-rink-management-software',
    icon: <Snowflake className="w-12 h-12 text-primary" />,
  },
  {
    title: 'POSSO POS Systems for Restaurants & Takeaways – Fast, Modern & Low-Commission Ordering',
    description: 'Discover POSSO POS - the UK modern EPOS system for restaurants & takeaways. Faster service, menu control, split payments and real reporting.',
    href: '/blog/pos-systems-for-restaurants-and-takeaways',
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
  },
  {
    title: 'POSSO Self-Order Kiosks – Reduce Queues & Increase Order Value in Minutes',
    description: 'Learn how POSSO Self-Order Kiosks boost sales, cut queue time and reduce staff pressure. Perfect for UK takeaways and fast-food restaurants.',
    href: '/blog/self-order-kiosks',
    icon: <Smartphone className="w-12 h-12 text-primary" />,
  },
  {
    title: 'POSSO Online Ordering & Mobile Apps – Low-Commission Food Ordering System',
    description: 'Launch your own online ordering website or mobile app with POSSO. Keep significantly more of your profit with low commission.',
    href: '/blog/online-ordering-and-mobile-apps',
    icon: <Globe className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Best Card Machine for Small Business UK – Teya vs SumUp vs Dojo',
    description: 'Compare the best card payment machines for UK small businesses. We review Teya, SumUp, and Dojo to help you find the lowest fees and fastest payouts.',
    href: '/blog/best-card-machine-for-small-business',
    icon: <CreditCard className="w-12 h-12 text-primary" />,
  },
  {
    title: 'The UK Self-Service Revolution: Trends, Benefits & The Future of Kiosks',
    description: 'A deep dive into the rise of self-service kiosks in the UK, from QSRs to healthcare, and what it means for your business.',
    href: '/blog/self-service-revolution',
    icon: <Bot className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Top Benefits of a Mobile POS Device for Restaurants',
    description: 'Discover how mobile POS devices can revolutionise your restaurant, from faster service and tableside ordering to improved staff efficiency and sales.',
    href: '/blog/benefits-of-a-mobile-pos-device-for-restaurants',
    icon: <Wifi className="w-12 h-12 text-primary" />,
  },
  {
    title: 'The Best Food Delivery App is the One You Own',
    description: 'Tired of high commissions? Discover why owning your online presence with a branded app is the best food delivery solution for UK takeaways.',
    href: '/blog/best-food-delivery-app-uk',
    icon: <Globe className="w-12 h-12 text-primary" />,
  },
  {
    title: 'The Best ePOS System for a Pizza Restaurant or Takeaway',
    description: 'Find the best ePOS system for your pizza shop. Our guide covers essential features like custom toppings, delivery management, and online ordering.',
    href: '/blog/pos-for-pizza-restaurant-best-system-for-pizza-shops',
    icon: <Pizza className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Choosing the Best ePOS System for Your Coffee Shop or Cafe',
    description: 'Looking for an ePOS for your cafe? Our guide covers essential features like loyalty schemes, speedy payments, and multi-location management for UK coffee shops.',
    href: '/blog/cafe-coffee-shop-epos-systems-uk',
    icon: <Coffee className="w-12 h-12 text-primary" />,
  },
  {
    title: 'What Is an EPOS System? Transform Your Business in 2026',
    description: 'Discover how EPOS systems transform businesses in 2026. Learn about the best POS systems for retail, restaurants, and takeaways.',
    href: '/blog/what-is-epos-system',
    icon: <LayoutDashboard className="w-12 h-12 text-primary" />,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
              The Posso Blog
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Insights, tips, and updates on the latest in restaurant and hospitality technology.
            </p>
          </div>

          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Featured Story
              </h2>
              <Link href={featuredPost.href} className="group block">
                <Card className="glass-card overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="bg-slate-900/50 flex items-center justify-center p-12 order-2 md:order-1">
                      <div className="transform group-hover:scale-110 transition-transform duration-500">
                        {featuredPost.icon}
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                      <div className="mb-4">
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Sticky Post</span>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-50 mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-slate-400 text-lg mb-8 line-clamp-3">
                        {featuredPost.description}
                      </p>
                      <div className="text-primary flex items-center gap-2 font-bold text-lg">
                        Read Featured Article <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          <h2 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
            <span className="w-2 h-8 bg-slate-700 rounded-full"></span>
            Latest Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link href={post.href} key={post.title} className="block group">
                <Card className="glass-card h-full flex flex-col hover:border-primary/30 transition-all duration-300">
                  <div className="relative w-full h-48 flex items-center justify-center rounded-t-lg bg-slate-900/50">
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                      {post.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-50 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="flex-grow line-clamp-3 text-slate-400">{post.description}</CardDescription>
                    <div className="mt-6 text-primary flex items-center gap-2 font-semibold">
                      Read Article <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
