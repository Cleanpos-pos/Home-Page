'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, MonitorCheck, Phone, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { IframeDialog } from '../iframe-dialog';


export function Hero() {

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
            <div className="absolute inset-0 grid-bg opacity-40" />

            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                    <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                        <Zap className="w-3 h-3 mr-2" />
                        NEXT-GEN RESTAURANT TECH
                    </Badge>
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                        ePOS Systems & <br />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Self-Order Kiosks</span>
                    </h1>
                    <p className="max-w-md text-lg text-slate-400">
                        Posso Ltd is a pioneering company specialising in state-of-the-art restaurant ePOS systems and self-order kiosks. Our mission is to empower fast food and takeaway restaurants with innovative technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                            <Link href="/contact">
                                Make an enquiry <ArrowRight className="ml-2 h-5 w-5" />
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
                    <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '20s' }}>
                        <div className="absolute w-[400px] h-[400px] border-2 border-dashed border-primary/20 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-dashed border-primary/10 rounded-full" />
                    </div>
                    <div className="relative w-48 h-48 bg-slate-900/80 rounded-2xl shadow-2xl shadow-primary/20 flex items-center justify-center backdrop-blur-md border border-primary/20">
                        <MonitorCheck className="w-20 h-20 text-primary" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>

                    <div className="absolute top-1/4 left-10 animate-float" style={{ animationDelay: '0s' }}>
                        <div className="w-16 h-16 bg-slate-800/60 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
                            <Cog className="w-8 h-8 text-accent animate-spin-slow" />
                        </div>
                    </div>

                    <div className="absolute bottom-1/4 right-10 animate-float" style={{ animationDelay: '2s' }}>
                        <div className="w-16 h-16 bg-slate-800/60 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="m12 19-7-7 7-7" /><path d="m19 19-7-7 7-7" /></svg>
                        </div>
                    </div>

                    <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
                </div>
            </div>
        </section>
    );
}
