import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Percent, Users, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Food Delivery App UK: Own Your Orders | Posso',
  description: 'Tired of high commissions? Discover why owning your online presence with a branded app is the best food delivery solution for UK takeaways.',
  alternates: {
    canonical: '/blog/best-food-delivery-app-uk',
  },
};

export default function BestFoodAppPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                The "Best" Food Delivery App is the One You Own
              </h1>
              <p>
                Every year, UK takeaways and restaurants lose thousands of pounds in commission fees to third-party delivery giants. While these platforms offer visibility, they come at a steep price, often taking up to 30% of every order. This eats directly into your profits and, worse, puts a barrier between you and your most loyal customers.
              </p>
              <p>
                The truth is, the best food delivery app for your business isn't another marketplace. It's your own branded website and mobile app.
              </p>

              <h2>Why Owning Your Platform is the Winning Strategy</h2>
              
              <div className="not-prose grid md:grid-cols-3 gap-8 my-12">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Percent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 m-0">Keep 100% of Your Profit</h3>
                    <p className="text-slate-300 mt-2">Stop paying commission. With your own system, every penny from every order goes directly into your pocket.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 m-0">Own Your Customer Data</h3>
                    <p className="text-slate-300 mt-2">Build a direct relationship with your customers. Understand their ordering habits and send them targeted promotions to encourage repeat business.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 m-0">Build Your Brand, Not Theirs</h3>
                    <p className="text-slate-300 mt-2">When customers order from you, they remember your brand, not the delivery platform. This builds long-term loyalty and brand recognition.</p>
                </div>
              </div>


              <h2>Don't Disappear from Marketplaces Entirely</h2>
              <p>
                Having your own platform doesn't mean you have to leave platforms like Just Eat or Uber Eats. The smartest strategy is a hybrid one:
              </p>
              <ul>
                <li><strong>Use Marketplaces for Discovery:</strong> Treat third-party apps as a marketing tool to attract new customers who haven't heard of you.</li>
                <li><strong>Convert Them to Your Platform:</strong> Include a flyer in every marketplace order that offers a discount (e.g., "10% off your first order") for ordering directly from your website or app next time.</li>
              </ul>
              <p>
                This approach gives you the best of both worlds: you acquire new customers through the big platforms and then convert them into profitable, long-term customers on your own commission-free system.
              </p>

              <h2 className="mt-8">Launch Your Own Ordering System with Posso</h2>
              <p>
                Posso provides everything you need to take control of your online orders. We build you a professional ordering website and branded mobile apps for iOS and Android, all for a flat, predictable monthly fee. No commission, no hidden charges.
              </p>

              <div className="not-prose mt-8 space-y-4">
                <Button size="lg" asChild>
                    <Link href="/online-ordering">
                        Discover Our Online Ordering Solutions <ArrowRight className="ml-2 h-5 w-5" />
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
