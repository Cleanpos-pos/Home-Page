import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, Lock, Rocket } from 'lucide-react';

const features = [
  {
    icon: <GitBranch className="h-8 w-8 text-accent" />,
    title: 'Update Once, Publish Everywhere.',
    description: 'Stop the "site-by-site" manual updates. Change a price, launch a seasonal special, or mark an allergen at Head Office—and watch it sync to 5, 50, or 500 locations instantly.',
  },
  {
    icon: <Lock className="h-8 w-8 text-accent" />,
    title: 'Lock Down Your Operations.',
    description: 'Give franchisees the freedom they need while protecting your brand standards. Define exactly what store managers can edit and what stays locked by HQ.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: 'New Site Setup in Minutes.',
    description: 'Opening a new branch? Clone your master configuration to new hardware instantly. Send us the hardware, and we’ll ship it to your new site pre-loaded and ready to trade.',
  },
];

export function FranchiseCentralCommand() {
  return (
    <section id="central-command" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">One Dashboard. Infinite Locations.</h2>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="glass-card">
            <CardHeader>
              {feature.icon}
              <CardTitle className="mt-4 text-xl font-bold text-slate-50">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
