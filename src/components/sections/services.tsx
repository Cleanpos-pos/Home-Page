import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog, Cloud, ShieldCheck, BarChart, Code } from 'lucide-react';

const services = [
  {
    icon: <Cog className="h-8 w-8 text-accent" />,
    title: 'Custom Software Engineering',
    description: 'Bespoke solutions crafted to your exact specifications, from complex back-end systems to intuitive user interfaces.',
  },
  {
    icon: <Cloud className="h-8 w-8 text-accent" />,
    title: 'Cloud Architecture & DevOps',
    description: 'Scalable, resilient, and secure cloud infrastructure. We automate your deployments and streamline your operations.',
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'AI & Machine Learning',
    description: 'Integrate intelligent features into your products. We build models that learn, predict, and unlock new value from your data.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Digital Transformation',
    description: 'Modernize your legacy systems and processes. We guide your transition to a digital-first, agile, and data-driven organization.',
  },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Our Expertise</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          We provide a comprehensive suite of services to build and scale your digital ambitions.
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
