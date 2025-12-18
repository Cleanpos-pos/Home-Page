import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tv, Car, Code, FileSpreadsheet } from 'lucide-react';

const QuickBooksIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
    </svg>
);


const integrations = [
  {
    icon: <Tv className="h-8 w-8 text-accent" />,
    title: 'Kitchen Display Systems (KDS)',
    description: 'Sync orders from Kiosks, Apps, and Delivery platforms to a single screen.',
  },
  {
    icon: <Car className="h-8 w-8 text-accent" />,
    title: 'Driver Management',
    description: 'Dedicated driver apps for self-delivery franchises.',
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Headless API',
    description: 'Build your own custom branded app on top of our robust backend.',
  },
  {
    icon: <QuickBooksIcon className="h-8 w-8 text-accent" />,
    title: 'QuickBooks',
    description: 'Automatically sync your daily sales data with QuickBooks for effortless accounting.',
  },
  {
    icon: <FileSpreadsheet className="h-8 w-8 text-accent" />,
    title: 'XLS Downloads',
    description: 'Export your sales, inventory, and customer data to XLS for custom reporting and analysis.',
  },
];

export function FranchiseIntegration() {
  return (
    <section id="integration" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Built to Play Nice.</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300 md:text-xl">
          Your franchise ecosystem is complex. Posso fits right in. We integrate seamlessly with major delivery aggregators (UberEats, Deliveroo, JustEat), accounting software (QuickBooks), and staff management tools.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item) => (
          <Card key={item.title} className="glass-card text-center items-center">
            <CardHeader className="items-center">
              {item.icon}
              <CardTitle className="mt-4 text-xl font-bold text-slate-50">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
