import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog, Cloud, ShieldCheck, BarChart, Code, Smartphone, MonitorPlay, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'ePOS Systems',
    description: 'Powerful, intuitive, and reliable point-of-sale systems designed for the fast-paced restaurant environment.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'Self-Order Kiosks',
    description: 'Reduce queues and increase order accuracy with our sleek, user-friendly self-order kiosks.',
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-accent" />,
    title: 'Kitchen Display Systems',
    description: 'Streamline your kitchen workflow, improve communication, and reduce ticket times with our KDS solutions.',
  },
  {
    icon: <Cloud className="h-8 w-8 text-accent" />,
    title: 'Online Ordering Platforms',
    description: 'Expand your reach with a seamlessly integrated online and mobile ordering system for your customers.',
  },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Our Products</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          A complete ecosystem of tools to revolutionize your restaurant operations.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.title} className="glass-card">
            <CardHeader>
              {service.icon}
              <CardTitle className="mt-4 text-xl font-bold text-slate-50">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
