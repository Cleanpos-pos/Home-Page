'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function TableMaestroShowcase() {
    return (
        <section id="tablemaestro" className="w-full py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                        <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 py-1 px-3">
                            <Zap className="w-3 h-3 mr-2" />
                            NEW RELEASE
                        </Badge>
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Meet <span className="text-blue-500">TableMaestro</span>
                        </h2>
                        <p className="text-xl font-medium text-blue-400/90 italic">
                            Our New Online Table Booking & Promotional Engine
                        </p>
                        <p className="max-w-[600px] text-lg text-slate-400 leading-relaxed">
                            Transform how you manage your restaurant with TableMaestro. A powerful, integrated platform designed to drive more bookings and boost customer loyalty through automated promotions.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 w-full max-w-lg mt-4">
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                <CalendarDays className="w-6 h-6 text-blue-400" />
                                <div>
                                    <h4 className="font-bold text-slate-50">Smart Booking</h4>
                                    <p className="text-sm text-slate-400">Real-time table availability and instant confirmations.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                <TrendingUp className="w-6 h-6 text-indigo-400" />
                                <div>
                                    <h4 className="font-bold text-slate-50">Promotion Engine</h4>
                                    <p className="text-sm text-slate-400">Automated discount codes and marketing campaigns.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20" asChild>
                                <Link href="/contact">
                                    Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
                                <Link href="/tablemaestro">Learn More</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Main Image Container */}
                        <div className="relative z-10 rounded-2xl overflow-hidden glass-card border-blue-500/20 shadow-2xl shadow-blue-900/20 transform hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/tablemaestro_promo_engine.png"
                                alt="TableMaestro Promotional Engine Dashboard"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Accessory Image */}
                        <div className="absolute -bottom-10 -left-10 md:-left-20 z-20 w-[180px] md:w-[240px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900/80 shadow-black/50 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/tablemaestro_booking_ui.png"
                                alt="TableMaestro Mobile Booking UI"
                                width={300}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl opacity-50 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
