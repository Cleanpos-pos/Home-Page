import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, MonitorPlay, Smartphone, ShoppingCart, Ticket, DownloadCloud, AppWindow, ScreenShare, Tv2, Globe, Lock, Search, Megaphone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    id: 'pos-system-hero',
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'ePOS Systems',
    description: 'Powerful, intuitive, and reliable point-of-sale systems designed for the fast-paced restaurant environment.',
    href: '/pos'
  },
  {
    id: 'kiosk-hero',
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'Self-Order Kiosks',
    description: 'Reduce queues and increase order accuracy with our sleek, user-friendly self-order kiosks.',
    href: '/kiosks'
  },
  {
    id: 'ticketing-hero',
    icon: <Ticket className="h-8 w-8 text-accent" />,
    title: 'Ticketing',
    description: 'All-in-one platform for venues and events. Sell tickets, manage memberships, and streamline check-ins.',
    href: '/ticketing'
  },
  {
    id: 'digital-signage-display',
    icon: <MonitorPlay className="h-8 w-8 text-accent" />,
    title: 'Digital Signage',
    description: 'Captivate your audience with stunning, easy-to-manage digital displays for menus and promotions.',
    href: '/digital-signage'
  },
  {
    id: 'clover-flex',
    icon: <CreditCard className="h-8 w-8 text-accent" />,
    title: 'Card Machines',
    description: 'Fast, secure, and reliable payment terminals from industry leaders like Clover, Teya, and Dojo.',
    href: '/credit-card-machines'
  },
  {
    id: 'digital-lockers',
    icon: <Lock className="h-8 w-8 text-accent" />,
    title: 'Smart Lockers',
    description: 'Secure, automated locker solutions for venues, events, and public spaces.',
    href: '/ticketing'
  },
  {
    id: 'kiosk-hero', // Reusing placeholder for now
    icon: <Tv2 className="h-8 w-8 text-accent" />,
    title: 'Kitchen Display Screens',
    description: 'Streamline your kitchen workflow with our robust and easy-to-read display systems.',
    href: '#'
  },
  {
    id: 'online-ordering-hero',
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: 'Online-Ordering & Apps',
    description: 'Reach more customers with a branded online ordering website and mobile app.',
    href: '/online-ordering'
  },
  {
    id: 'marketing',
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'Google SEO & Marketing',
    description: 'Dominate search results and drive high-quality traffic to your business with our expert SEO strategies.',
    href: '/marketing'
  },
  {
    id: 'marketing',
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: 'Social Media Marketing',
    description: 'Build your brand and engage with your community through professional social media management.',
    href: '/marketing'
  },
  {
    id: 'marketing',
    icon: <MapPin className="h-8 w-8 text-accent" />,
    title: 'Google Business Profile Marketing',
    description: 'Boost your local presence and get found on Google Maps with expert profile management and optimization.',
    href: '/marketing'
  },
  {
    id: 'team-photo',
    icon: <DownloadCloud className="h-8 w-8 text-accent" />,
    title: 'Support',
    description: 'Get remote assistance from our dedicated support team to resolve any issues quickly.',
    href: 'https://download.anydesk.com/AnyDesk.exe?_ga=2.228450974.22024143.1581947022-1619378576.1575561389'
  },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Our Products</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          A complete ecosystem of tools to revolutionise your restaurant operations.
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
                    {/* Cloned icon with larger size */}
                    {service.icon && (
                      <div className="text-primary scale-[1.5]">
                        {service.icon}
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-50">{service.title}</CardTitle>
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
