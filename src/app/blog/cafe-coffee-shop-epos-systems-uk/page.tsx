import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Clock, Users, BarChart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best ePOS System for UK Coffee Shops & Cafes | Posso',
  description: 'Looking for an ePOS for your cafe? Our guide covers essential features like loyalty schemes, speedy payments, and multi-location management for UK coffee shops.',
  alternates: {
    canonical: '/blog/cafe-coffee-shop-epos-systems-uk',
  },
};

const features = [
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Speed and Efficiency",
        description: "Process orders in seconds. A fast, intuitive interface means less time training staff and more time serving customers during the morning rush."
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Integrated Loyalty Programs",
        description: "Reward your regulars automatically. Set up digital loyalty cards to track visits and offer rewards, encouraging repeat business without the hassle of paper cards."
    },
    {
        icon: <Coffee className="h-6 w-6 text-primary" />,
        title: "Easy Menu Management",
        description: "Add a new seasonal latte or update pastry prices in seconds. Changes sync instantly across all your tills and even your online menu."
    },
    {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "Multi-Site Reporting",
        description: "If you run multiple locations, you need a single view of your business. Track sales, stock, and staff performance across all your cafes from one central dashboard."
    }
];

export default function CafePosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                Choosing the Best ePOS System for Your Coffee Shop or Cafe
              </h1>
              <p>
                In a busy coffee shop, speed, reliability, and customer loyalty are the pillars of success. Your ePOS system shouldn't be a cumbersome till; it should be the hub of your operation, helping you serve customers faster, manage your stock efficiently, and turn first-time visitors into regulars.
              </p>
              <p>
                Whether you're opening your first cafe or looking to upgrade a multi-site operation, choosing the right POS technology is a critical business decision. Let's look at the features that matter most for a UK coffee shop.
              </p>

              <h2>Must-Have Features for a Cafe POS System</h2>
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

              <h2 className="mt-12">More Than Just a Till</h2>
              <p>
                A modern cafe ePOS connects every part of your business. It integrates with your card machine for faster payments, links to your stock system to track milk and coffee bean levels, and can even power your online ordering for click-and-collect customers. This level of integration saves time, reduces errors, and gives you a clear, real-time view of your business performance.
              </p>
              
              <h2>Power Your Cafe with Posso</h2>
              <p>
                Posso ePOS is designed for the demands of the modern UK cafe. Our system is fast, easy to use, and packed with features like integrated loyalty, multi-site management, and in-depth reporting to help you run your business smarter.
              </p>
              
              <div className="not-prose mt-8 space-y-4">
                <Button size="lg" asChild>
                    <Link href="/pos">
                        Explore Cafe & Coffee Shop POS <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                 <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                        Get a Personalised Quote
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
