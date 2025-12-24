'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Clapperboard, MonitorPlay, Zap } from 'lucide-react';
import { Badge } from '../ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function DigitalSignageHero() {
  const signageImage = PlaceHolderImages.find(p => p.id === 'digital-signage-display');

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                    <Zap className="w-3 h-3 mr-2" />
                    DYNAMIC DIGITAL SIGNAGE
                </Badge>
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Captivate Your Audience with <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stunning Visuals</span>
                </h1>
                <p className="max-w-xl text-lg text-slate-400">
                    Transform your space and engage your customers with our powerful and easy-to-use digital signage solutions. From menu boards to promotional displays, Posso has you covered.
                </p>
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                    <Link href="/contact">
                        Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>

            <div className="relative flex items-center justify-center h-[500px]">
              {signageImage && (
                <img
                  src={signageImage.imageUrl}
                  alt={signageImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-full max-h-[500px] max-w-2xl glass-card p-2"
                />
              )}
               <div className="absolute top-1/4 -left-10 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="w-16 h-16 bg-slate-800/60 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
                        <MonitorPlay className="w-8 h-8 text-accent" />
                    </div>
                </div>

                <div className="absolute bottom-1/4 -right-10 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="w-16 h-16 bg-slate-800/60 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
                       <Clapperboard className="w-8 h-8 text-accent" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
