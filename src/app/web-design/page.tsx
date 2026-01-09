'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/sections/contact';
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, Hammer, Paintbrush, Check, Lightbulb, DraftingCompass, Handshake, Phone } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const services = [
    "Mobile-first responsive design",
    "Online ordering integration",
    "High-quality menu presentation",
    "Fast loading speeds",
    "Search Engine Optimised (SEO)",
    "Easy content management"
];

export default function WebDesignPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'web-design');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Restaurant & Takeaway <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Web Design</span>
                </h1>
                <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-400">
                    Your website is your digital front door. We build beautiful, high-performance websites for restaurants and takeaways that turn visitors into loyal customers.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                     <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                        <Link href="/contact">
                            Get a Website Quote <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">A Website That Works as Hard as You Do</h2>
                <p className="mt-4 text-lg text-slate-300">In the competitive food industry, a slow, outdated, or hard-to-use website means lost orders. We design websites specifically for hospitality businesses, focusing on what matters most: attracting customers, showcasing your menu, and driving online orders.</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                    {services.map(service => (
                        <div key={service} className="flex items-center gap-2 text-slate-300">
                            <Check className="h-5 w-5 text-primary" />
                            <span>{service}</span>
                        </div>
                    ))}
                </div>
            </div>
             <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        data-ai-hint={heroImage.imageHint}
                        width={800}
                        height={600}
                        className="rounded-lg object-cover"
                    />
                )}
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Integrated with Your Operations</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
                    Our websites aren't just standalone pages; they are a core part of your business ecosystem, designed to work seamlessly with your Posso ePOS and online ordering systems.
                </p>
            </div>
             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-slate-50">Who This Is For</h3>
                    <p className="text-slate-400 mt-2">This service is ideal for takeaways, quick-service restaurants, cafes, and any hospitality business that wants to own their online presence and stop paying high commission fees to third-party apps.</p>
                </div>
                 <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-slate-50">Why Choose Posso?</h3>
                    <p className="text-slate-400 mt-2">We don't just build websites; we build hospitality solutions. We understand the need for speed, reliability, and seamless integration between your online presence and your in-store operations. Your success is our success.</p>
                </div>
            </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
