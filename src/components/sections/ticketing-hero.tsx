'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Ticket } from 'lucide-react';
import { Badge } from '../ui/badge';
import Link from 'next/link';

export function TicketingHero() {

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                    <Zap className="w-3 h-3 mr-2" />
                    VENUE & EVENT MANAGEMENT
                </Badge>
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Everything Your Venue <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Needs to Thrive</span>
                </h1>
                <p className="max-w-xl text-lg text-slate-400">
                    From simple online ticket sales to comprehensive membership plans and seamless on-site check-ins, our all-in-one platform helps you run things smoother.
                </p>
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                    <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>

            <div className="relative flex items-center justify-center h-[500px]">
                <div className="relative w-64 h-64 bg-slate-900/80 rounded-2xl shadow-2xl shadow-primary/20 flex items-center justify-center backdrop-blur-md border border-primary/20">
                    <Ticket className="w-32 h-32 text-primary" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                 <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
                <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            </div>
        </div>
    </section>
  );
}
