'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { Badge } from '../ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SolutionEnquiryModal } from '../solution-enquiry-modal';

export function PosHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'pos-system-hero');

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                    <Zap className="w-3 h-3 mr-2" />
                    POWERFUL EPOS SYSTEMS
                </Badge>
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">EPOS Systems</span> <br />
                    for UK Restaurants &amp; Takeaways
                </h1>
                <p className="max-w-xl text-lg text-slate-400">
                    Posso EPOS powers restaurants, takeaways, cafes and bars across the UK — touchscreen ordering, kitchen display, table service, offline mode and integrated card payments, all in one system with UK-based support.
                </p>
                <SolutionEnquiryModal 
                    defaultSolutionId="pos" 
                    trigger={
                        <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                            Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    }
                />
            </div>

            <div className="relative flex items-center justify-center h-[500px]">
              {heroImage && (
                <img
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-full max-h-[500px] max-w-2xl glass-card p-2"
                />
              )}
            </div>
        </div>
    </section>
  );
}
