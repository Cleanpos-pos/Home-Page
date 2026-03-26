import Link from 'next/link';
import {
  UtensilsCrossed,
  Popcorn,
  Ticket,
  ShoppingBag,
  Waves,
  Scissors,
} from 'lucide-react';

const industries = [
  {
    icon: <UtensilsCrossed className="h-6 w-6" />,
    title: 'Restaurants & Takeaways',
    description: 'ePOS, kiosks, online ordering, and kitchen display systems for fast food, QSR, Indian takeaways, pizza shops, cafes, and bubble tea outlets.',
    href: '/pos',
  },
  {
    icon: <Popcorn className="h-6 w-6" />,
    title: 'Entertainment Venues',
    description: 'Ticketing, wristband scanning, and POS for trampoline parks, family entertainment centres, soft play, bowling alleys, and escape rooms.',
    href: '/ticketing',
  },
  {
    icon: <Ticket className="h-6 w-6" />,
    title: 'Theme Parks & Attractions',
    description: 'End-to-end visitor management for amusement parks, water parks, zoos, aquariums, museums, and ice rinks across the UK.',
    href: '/solutions/amusement-parks',
  },
  {
    icon: <Waves className="h-6 w-6" />,
    title: 'Leisure & Wellness',
    description: 'Booking, membership, and POS solutions for spas, wellness centres, wake parks, rock climbing gyms, and ski resorts.',
    href: '/solutions/spas-wellness-centers',
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: 'Retail & Franchise',
    description: 'Multi-site POS, self-service kiosks, digital signage, and centralised reporting for retail chains and franchise operations.',
    href: '/solutions/franchise-pos-systems',
  },
  {
    icon: <Scissors className="h-6 w-6" />,
    title: 'Specialist Services',
    description: 'Tailored ePOS solutions for dry cleaning, laundry services, and other specialist retail and service businesses.',
    href: '/solutions/dry-cleaning-pos-system',
  },
];

export function IndustryServed() {
  return (
    <section id="industries" className="container mx-auto px-4 py-20 md:px-6" aria-label="Industries served by Posso">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
          ePOS Solutions for Every Industry
        </h2>
        <p className="mx-auto mt-4 max-w-[750px] text-lg text-slate-300 md:text-xl">
          Whether you run a single takeaway or a nationwide chain of entertainment venues, Posso has a proven solution tailored to your industry.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.title}
            href={industry.href}
            className="group flex gap-4 p-6 rounded-2xl border border-slate-800 hover:border-primary/50 bg-slate-900/30 hover:bg-slate-900/50 transition-all"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              {industry.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-50 mb-1 group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{industry.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
