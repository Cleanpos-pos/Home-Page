import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Pizza, Smartphone, Globe, ShoppingCart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best POS for Pizza Restaurant & Shops in the UK | Posso',
  description: 'Find the best ePOS system for your pizza shop. Our guide covers essential features like custom toppings, delivery management, and online ordering.',
  alternates: {
    canonical: '/blog/pos-for-pizza-restaurant-best-system-for-pizza-shops',
  },
};

const features = [
    {
        icon: <Pizza className="h-6 w-6 text-primary" />,
        title: "Complex Order Customisation",
        description: "Easily handle 'half-and-half' orders, extra toppings, and special dietary requests without confusing your kitchen staff."
    },
    {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: "Integrated Online Ordering",
        description: "Take commission-free orders from your own website. All online orders print directly in your kitchen, just like an in-store order."
    },
    {
        icon: <ShoppingCart className="h-6 w-6 text-primary" />,
        title: "Caller ID & Postcode Lookup",
        description: "Speed up phone orders with automatic customer recognition and fast address lookup, reducing errors and saving time."
    },
    {
        icon: <Smartphone className="h-6 w-6 text-primary" />,
        title: "Delivery Driver Management",
        description: "Assign orders to drivers, track deliveries, and manage cash reconciliation efficiently all from within the POS system."
    }
];

export default function PizzaPosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                The Best ePOS System for a Pizza Restaurant or Takeaway
              </h1>
              <p>
                Running a pizza shop is more complex than most restaurants. You're dealing with countless topping combinations, half-and-half requests, meal deals, and the logistical challenges of delivery. A generic, off-the-shelf POS system simply can't keep up.
              </p>
              <p>
                To run a successful pizza business, you need an ePOS system specifically designed for the job. It needs to be fast, flexible, and fully integrated with your ordering and delivery operations.
              </p>

              <h2>Essential Features for a Pizza POS System</h2>
              <div className="not-prose mt-8 grid md:grid-cols-2 gap-8">
                {features.map(feature => (
                    <div key={feature.title} className="glass-card p-6 rounded-lg">
                        <div className="flex items-center gap-4 mb-4">
                            {feature.icon}
                            <h3 className="text-xl font-bold text-slate-100 m-0">{feature.title}</h3>
                        </div>
                        <p className="text-slate-300 m-0">{feature.description}</p>
                    </div>
                ))}
              </div>

              <h2 className="mt-12">Why a Specialised System Matters</h2>
              <p>
                Using a standard retail POS for a pizza shop is like trying to fit a square peg in a round hole. You'll spend more time fighting the system with workarounds than you will serving customers. A specialised pizza POS understands your workflow. It makes complex orders simple, integrates your phone and online channels, and gives you the tools to manage your deliveries efficiently.
              </p>
              
              <h2>The Posso Solution for Pizza Shops</h2>
              <p>
                Posso ePOS is built with the specific needs of UK pizza takeaways and restaurants in mind. Our system includes all the essential features mentioned above, plus powerful reporting, stock management, and marketing tools to help you grow your business.
              </p>
              
              <div className="not-prose mt-8 space-y-4">
                <Button size="lg" asChild>
                    <Link href="/pos">
                        Explore Our Pizza POS Features <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                 <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                        Book a Demo
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
