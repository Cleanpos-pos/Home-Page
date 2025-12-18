import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudCog, Edit3, Film, Tv, CalendarClock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Edit3 className="h-8 w-8 text-accent" />,
    title: 'Easy Content Management',
    description: 'Our intuitive CMS allows you to update your content from anywhere, at any time. No technical skills required.',
  },
  {
    icon: <Tv className="h-8 w-8 text-accent" />,
    title: 'Multi-Screen Support',
    description: 'Manage a single screen or a whole network of displays across multiple locations with ease.',
  },
  {
    icon: <Film className="h-8 w-8 text-accent" />,
    title: 'Dynamic Content',
    description: 'Display videos, animations, image slideshows, social media feeds, and more to capture attention.',
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-accent" />,
    title: 'Advanced Scheduling',
    description: 'Schedule content to change automatically by time of day, day of the week, or for special promotions.',
  },
  {
    icon: <CloudCog className="h-8 w-8 text-accent" />,
    title: 'Cloud-Based',
    description: 'Our entire platform is cloud-based, meaning you get automatic updates and secure access from any device.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-accent" />,
    title: 'Affordable Pricing',
    description: 'Get a professional digital signage solution without the enterprise-level price tag. Perfect for small businesses.',
  },
];

export function DigitalSignageFeatures() {
  return (
    <section id="features" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Powerful Features, Simple Interface</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Everything you need to create and manage compelling digital signage.
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
      </div>
    </section>
  );
}
