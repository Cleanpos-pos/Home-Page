import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, MonitorPlay, Smartphone, ShoppingCart, Ticket, DownloadCloud, AppWindow, ScreenShare, Tv2, Globe } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'ePOS Systems',
    description: 'Powerful, intuitive, and reliable point-of-sale systems designed for the fast-paced restaurant environment.',
    href: '/pos'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'Self-Order Kiosks',
    description: 'Reduce queues and increase order accuracy with our sleek, user-friendly self-order kiosks.',
    href: '/kiosks'
  },
  {
    icon: <Ticket className="h-8 w-8 text-accent" />,
    title: 'Ticketing',
    description: 'All-in-one platform for venues and events. Sell tickets, manage memberships, and streamline check-ins.',
    href: '/ticketing'
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-accent" />,
    title: 'Digital Signage',
    description: 'Captivate your audience with stunning, easy-to-manage digital displays for menus and promotions.',
    href: '/digital-signage'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-accent" />,
    title: 'Card Machines',
    description: 'Fast, secure, and reliable payment terminals from industry leaders like Clover, Teya, and Dojo.',
    href: '/credit-card-machines'
  },
  {
    icon: <Tv2 className="h-8 w-8 text-accent" />,
    title: 'Kitchen Display Screens',
    description: 'Streamline your kitchen workflow with our robust and easy-to-read display systems.',
    href: '#'
  },
  {
    icon: <ScreenShare className="h-8 w-8 text-accent" />,
    title: 'Customer Screens',
    description: 'Engage customers at the point of sale with order details and promotional content.',
    href: '#'
  },
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: 'Online-Ordering & Apps',
    description: 'Reach more customers with a branded online ordering website and mobile app.',
    href: '/online-ordering'
  },
  {
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
        {services.map((service) => (
          <Link href={service.href} key={service.title}>
            <Card className="glass-card h-full">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4 text-xl font-bold text-slate-50">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
