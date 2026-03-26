import { TrendingUp, Clock, Shield, Headphones, Banknote, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Increase Revenue by 30%',
    description: 'Self-order kiosks drive higher average order values through smart upselling prompts and visual menus that encourage add-ons.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Serve Customers 3x Faster',
    description: 'Eliminate bottlenecks with parallel ordering. Customers order at kiosks while staff focus on preparation and service.',
  },
  {
    icon: <Banknote className="h-8 w-8 text-primary" />,
    title: 'Cut Labour Costs by 25%',
    description: 'Automate order-taking and payment processing. Redeploy staff to higher-value tasks that improve customer experience.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Real-Time Business Analytics',
    description: 'Track sales, inventory, and staff performance across all locations from a single dashboard. Make data-driven decisions instantly.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'PCI-Compliant & Secure',
    description: 'All payment processing meets the latest PCI DSS standards. End-to-end encryption protects every transaction.',
  },
  {
    icon: <Headphones className="h-8 w-8 text-primary" />,
    title: 'UK-Based Support Team',
    description: 'Speak to real people in the UK. Our dedicated support team resolves issues remotely or on-site, typically within 15 minutes.',
  },
];

export function WhyPosso() {
  return (
    <section id="why-posso" className="py-20 bg-slate-950/50" aria-label="Why choose Posso ePOS systems">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
            Why UK Restaurants Choose Posso
          </h2>
          <p className="mx-auto mt-4 max-w-[750px] text-lg text-slate-300 md:text-xl">
            From independent takeaways to multi-site franchises, Posso helps hospitality businesses across the UK reduce costs, increase order values, and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="shrink-0 mt-1">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-slate-50 mb-2">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Posso ePOS systems are used by restaurants, takeaways, cafes, bubble tea shops, pizza delivery outlets, fast food chains, and entertainment venues throughout England, Scotland, Wales, and Northern Ireland.
          </p>
        </div>
      </div>
    </section>
  );
}
