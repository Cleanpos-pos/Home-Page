import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wifi, Zap, Users, CreditCard } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benefits of a Mobile POS Device for Restaurants | Posso',
  description: 'Discover how mobile POS devices can revolutionise your restaurant, from faster service and tableside ordering to improved staff efficiency and sales.',
  alternates: {
    canonical: '/blog/benefits-of-a-mobile-pos-device-for-restaurants',
  },
};

const benefits = [
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: "Faster Turnaround Times",
        description: "Staff can take orders and payments directly at the table, reducing queues at the main till and getting orders to the kitchen instantly."
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Improved Customer Experience",
        description: "Tableside ordering feels more personal and efficient. Customers can split bills, add last-minute items, and pay without leaving their seats."
    },
    {
        icon: <CreditCard className="h-6 w-6 text-primary" />,
        title: "Increased Sales",
        description: "With a smoother ordering process, staff have more time to engage with customers and suggest upsells, boosting average order value."
    },
    {
        icon: <Wifi className="h-6 w-6 text-primary" />,
        title: "Flexibility and Mobility",
        description: "A mobile POS isn't tied to a counter. It's perfect for outdoor seating areas, pop-up events, or queue-busting during peak hours."
    }
];

export default function MobilePosBenefitsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                The Top Benefits of a Mobile POS Device for Restaurants
              </h1>
              <p>
                In the fast-paced restaurant industry, efficiency is everything. Traditional, stationary POS systems can create bottlenecks at the counter, slow down service, and frustrate both staff and customers. A mobile POS (mPOS) device, like a handheld terminal or tablet, takes the power of your till and puts it directly into your staff's hands.
              </p>
              <p>
                This simple change can have a massive impact on your operations, improving speed, accuracy, and overall profitability. Let's explore the key benefits of adopting mobile POS technology in your restaurant.
              </p>

              <h2>Why Mobile POS is a Game-Changer</h2>
              <div className="not-prose mt-8 grid md:grid-cols-2 gap-8">
                {benefits.map(benefit => (
                    <div key={benefit.title} className="glass-card p-6 rounded-lg">
                        <div className="flex items-center gap-4 mb-4">
                            {benefit.icon}
                            <h3 className="text-xl font-bold text-slate-100 m-0">{benefit.title}</h3>
                        </div>
                        <p className="text-slate-300 m-0">{benefit.description}</p>
                    </div>
                ))}
              </div>

              <h2 className="mt-12">Seamless Integration with Your Main System</h2>
              <p>
                Modern mobile POS devices aren't standalone gadgets; they are an extension of your central ePOS system. This means all orders, payments, and stock changes are synced in real-time. There's no need for manual reconciliation or end-of-day data entry. It provides a single source of truth for your sales data, making reporting and management simpler than ever.
              </p>
              
              <h2>Is a Mobile POS Right for Your Business?</h2>
              <p>
                If you run a business with table service, an outdoor seating area, or experience long queues during peak times, a mobile POS is an invaluable tool. It's ideal for:
              </p>
              <ul>
                <li>Full-service restaurants and bistros</li>
                <li>Cafes and coffee shops with outdoor patios</li>
                <li>Pubs and bars with table service</li>
                <li>Food trucks and pop-up event stalls</li>
              </ul>

              <h2 className="mt-8">Upgrade Your Restaurant with Posso</h2>
              <p>
                Posso offers powerful, integrated mobile POS solutions that work seamlessly with our core ePOS systems. Empower your staff, delight your customers, and grow your revenue.
              </p>

              <div className="not-prose mt-8 space-y-4">
                <Button size="lg" asChild>
                    <Link href="/pos">
                        Explore Our ePOS Systems <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                 <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                        Get a Quote
                    </Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
