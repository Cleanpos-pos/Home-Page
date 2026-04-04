import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, MonitorPlay, Smartphone, ShoppingCart, Ticket, DownloadCloud, Tv2, Globe, Lock, Search, Megaphone, MapPin } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'ePOS Systems',
    description: 'Powerful, intuitive point-of-sale systems built for fast-paced restaurants, takeaways, and cafes. Real-time reporting, stock management, and multi-site control.',
    href: '/pos'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'Self-Order Kiosks',
    description: 'Reduce queues by up to 70% and increase average order value by 30% with sleek, user-friendly self-order kiosks for restaurants and retail.',
    href: '/kiosks'
  },
  {
    icon: <Ticket className="h-8 w-8 text-accent" />,
    title: 'Ticketing & Venue Management',
    description: 'All-in-one ticketing platform for theme parks, entertainment venues, and events. Sell tickets, manage memberships, and streamline entry.',
    href: '/ticketing'
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-accent" />,
    title: 'Digital Menu Boards & Signage',
    description: 'Captivate customers with dynamic digital menu boards and promotional displays. Update content remotely across all locations.',
    href: '/digital-signage'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-accent" />,
    title: 'Card Payment Machines',
    description: 'Fast, secure contactless and chip-and-pin card machines from Clover, Teya, and Dojo. Competitive rates with next-day settlement.',
    href: '/credit-card-machines'
  },
  {
    icon: <Lock className="h-8 w-8 text-accent" />,
    title: 'Smart Lockers',
    description: 'Secure, automated locker solutions for leisure venues, events, and public spaces. Cashless payment integration included.',
    href: '/ticketing'
  },
  {
    icon: <Tv2 className="h-8 w-8 text-accent" />,
    title: 'Kitchen Display Systems (KDS)',
    description: 'Replace paper tickets with digital kitchen display screens. Streamline order flow, reduce errors, and speed up preparation times.',
    href: '#'
  },
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: 'Online Ordering & Mobile Apps',
    description: 'Low-commission online ordering websites and branded mobile apps. Accept orders directly at a fraction of third-party marketplace fees.',
    href: '/online-ordering'
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'Google SEO & Marketing',
    description: 'Dominate local search results and drive foot traffic with our restaurant-focused SEO, Google Ads, and content marketing strategies.',
    href: '/contact'
  },
  {
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: 'Social Media Marketing',
    description: 'Build your restaurant brand and engage your community through professional social media management on Instagram, TikTok, and Facebook.',
    href: '/contact'
  },
  {
    icon: <MapPin className="h-8 w-8 text-accent" />,
    title: 'Google Business Profile',
    description: 'Get found on Google Maps and local search. Expert profile optimisation to drive more calls, direction requests, and walk-in customers.',
    href: '/contact'
  },
  {
    icon: <DownloadCloud className="h-8 w-8 text-accent" />,
    title: '24/7 UK-Based Support',
    description: 'Dedicated UK support team for remote and on-site assistance. Average response time under 15 minutes for critical issues.',
    href: 'https://download.anydesk.com/AnyDesk.exe?_ga=2.228450974.22024143.1581947022-1619378576.1575561389'
  },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-20 md:px-6" aria-label="Posso products and services">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
          ePOS Products & Restaurant Technology Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-[750px] text-lg text-slate-300 md:text-xl">
          Everything your restaurant, takeaway, or venue needs in one integrated platform &mdash; from point-of-sale and self-service kiosks to online ordering and marketing.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          return (
            <Link href={service.href} key={service.title} className="group">
              <Card className="glass-card h-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 border-slate-800 hover:border-primary/50 flex flex-col">
                <div className="relative h-32 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 border-b border-white/5">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                  <div className="relative z-10 p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary scale-[1.5]">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-50">
                    <h3>{service.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
