'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Zap } from 'lucide-react';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { IframeDialog } from '../iframe-dialog';

export function FranchiseHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'franchise-hero');

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                    <Zap className="w-3 h-3 mr-2" />
                    ENTERPRISE EPOS ECOSYSTEM
                </Badge>
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Scale Your Brand, Not Your <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Workload.</span>
                </h1>
                <p className="max-w-xl text-lg text-slate-400">
                   The enterprise ePOS ecosystem built for modern food franchises. Centralise control, standardise operations, and visualize data across your entire estate from a single dashboard.
                </p>
                 <div className="flex gap-4">
                    <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                        <Link href="/contact">
                            Book a Franchise Demo <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <IframeDialog
                        title="AI Voice Assistant"
                        url="https://posso-ltd-ai-voice-assistant-365092986942.us-west1.run.app/"
                        trigger={
                            <Button size="lg" variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-700 hover:border-green-800">
                                <Phone className="mr-2 h-5 w-5" />
                                Click to Talk Now
                            </Button>
                        }
                    />
                </div>
            </div>

            <div className="relative flex items-center justify-center h-[500px]">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
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
