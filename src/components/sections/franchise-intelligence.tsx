import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Trophy, Archive, BadgePercent } from 'lucide-react';

const solutions = [
    {
        icon: <Trophy className="h-6 w-6 text-accent" />,
        title: "Compare Performance",
        description: "View a live leaderboard of your top-performing sites. Compare sales data between regions, cities, or individual stores side-by-side."
    },
    {
        icon: <Archive className="h-6 w-6 text-accent" />,
        title: "Stock & Wastage",
        description: "Identify high-wastage sites instantly. Track ingredient usage across the group to negotiate better bulk rates with suppliers."
    },
    {
        icon: <BadgePercent className="h-6 w-6 text-accent" />,
        title: "Franchise Royalties",
        description: "Automate your royalty calculations based on accurate, real-time gross sales data that can't be manipulated."
    }
]

export function FranchiseIntelligence() {
    const dashboardImage = PlaceHolderImages.find(p => p.id === 'franchise-dashboard');
  return (
    <section id="intelligence" className="container mx-auto px-4 py-20 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Real-Time Intelligence for Your Entire Estate.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <p className='text-xl text-slate-400 border-l-4 border-primary pl-4 italic'>Forget waiting for end-of-month spreadsheets from individual franchisees.</p>
                <div className='space-y-8'>
                {solutions.map((solution) => (
                    <div key={solution.title} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            {solution.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-50">{solution.title}</h3>
                            <p className="text-slate-300 mt-1">{solution.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
             <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                {dashboardImage && (
                    <Image
                    src={dashboardImage.imageUrl}
                    alt={dashboardImage.description}
                    data-ai-hint={dashboardImage.imageHint}
                    width={800}
                    height={600}
                    className="rounded-lg object-cover"
                    />
                )}
            </div>
        </div>
    </section>
  );
}
