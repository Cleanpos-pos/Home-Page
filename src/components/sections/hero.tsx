'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, MonitorCheck, Phone, Zap, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { IframeDialog } from '../iframe-dialog';


export function Hero() {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
            aria-label="Posso ePOS systems and self-order kiosks for UK restaurants"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/restaurant-interior-posso.jpg"
                    alt="Modern restaurant interior using Posso ePOS system and self-order kiosks in the UK"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-slate-950" />
            </div>
            <div className="absolute inset-0 grid-bg opacity-30 z-0" />

            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                    <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                        <Zap className="w-3 h-3 mr-2" />
                        UK&apos;S LEADING RESTAURANT TECHNOLOGY
                    </Badge>
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                        Restaurant ePOS Systems &{' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Self-Order Kiosks</span>
                    </h1>
                    <p className="max-w-lg text-lg text-slate-400 leading-relaxed">
                        Posso provides <strong className="text-slate-200">all-in-one ePOS systems</strong>, <strong className="text-slate-200">self-order kiosks</strong>, online ordering, and digital signage for <strong className="text-slate-200">restaurants, takeaways, and hospitality venues</strong> across the United Kingdom. Reduce costs, speed up service, and boost revenue from day one.
                    </p>

                    <ul className="flex flex-col gap-2 text-sm text-slate-300" aria-label="Key benefits of Posso ePOS">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                            <span>Trusted by <strong className="text-slate-100">500+ restaurants &amp; venues</strong> across the UK</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                            <span>Average <strong className="text-slate-100">30% increase in order value</strong> with self-order kiosks</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                            <span>Free setup, training, and <strong className="text-slate-100">UK-based support</strong></span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                            <Link href="/contact">
                                Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <IframeDialog
                            title="AI Voice Assistant"
                            url="https://posso-ltd-ai-voice-assistant-365092986942.us-west1.run.app/"
                            trigger={
                                <Button size="lg" variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-700 hover:border-green-800">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Talk to Us Now
                                </Button>
                            }
                        />
                    </div>

                    <p className="text-xs text-slate-500 mt-2">
                        Or call free: <a href="tel:+448081753956" className="text-primary hover:underline font-medium">0808 175 3956</a> &mdash; Mon&ndash;Fri 9am&ndash;9:30pm
                    </p>
                </div>

                <div className="relative flex items-center justify-center h-[500px]" aria-hidden="true">
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
