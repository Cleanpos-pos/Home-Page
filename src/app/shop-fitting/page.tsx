import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, Hammer, Paintbrush } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Shop Fitting & Design Services',
  description: 'Transform your retail or restaurant space with our professional shop fitting services. From initial design to final installation, we create functional and beautiful environments.',
  alternates: {
    canonical: '/shop-fitting',
  },
};

export default function ShopFittingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen/2 flex items-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Expert <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Shop Fitting</span> Services
                </h1>
                <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-400">
                    From concept to completion, we design and build stunning, functional spaces for restaurants and retail stores that captivate customers and streamline operations.
                </p>
                <div className="mt-8">
                    <Button size="lg">
                        Get a Fitting Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
        <section className="container mx-auto px-4 py-20 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Paintbrush className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50">Bespoke Design</h3>
                    <p className="text-slate-300">We work with you to create a unique layout and design that reflects your brand and maximises your space's potential.</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Hammer className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50">Quality Craftsmanship</h3>
                    <p className="text-slate-300">Our experienced team uses high-quality materials to build and install everything from custom counters to seating and displays.</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Store className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50">Full Project Management</h3>
                    <p className="text-slate-300">We handle the entire process, ensuring your project is completed on time, on budget, and to the highest standard.</p>
                </div>
            </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
