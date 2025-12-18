import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, Users, CheckSquare, HardDrive, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Ticket className="h-8 w-8 text-accent" />,
    title: 'Ticketing Made Simple',
    description: 'Sell tickets online and at your door. Guests book instantly with Apple Pay, Google Pay, or card for any session or event.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Memberships That Work',
    description: 'Create flexible plans like monthly gym passes, family bundles, or annual memberships that renew automatically and integrate with entry.',
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-accent" />,
    title: 'Everything Runs Smoother',
    description: 'Check people in with a quick scan, take payments at the bar, rent out lockers, and monitor live activity on your dashboard. It all just works together.',
  },
  {
    icon: <HardDrive className="h-8 w-8 text-accent" />,
    title: 'Hardware That Helps',
    description: 'Let guests check themselves in at sleek kiosks, run your café with modern tills, show session times on screens, and offer secure smart lockers.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Grow with Confidence',
    description: 'See what’s working with clear insights and run promotions that drive bookings. Our system scales with you, from one site to ten.',
  },
];

export function TicketingFeatures() {
  return (
    <section id="features" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">A Smarter Way to Manage Your Venue</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          An integrated solution designed to simplify your operations and enhance guest experience.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
         <Card className="md:col-span-2 lg:col-span-1 glass-card" />
      </div>
    </section>
  );
}
