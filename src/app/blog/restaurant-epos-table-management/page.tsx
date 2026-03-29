import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    LayoutDashboard,
    UtensilsCrossed,
    ChefHat,
    Clock,
    Users,
    Receipt,
    Zap,
    ArrowRight
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Table Management Made Easy with Restaurant EPOS | Posso',
    description: 'Master your dining room with Posso\'s Restaurant EPOS. Featuring TableMaestro visual floor plans, course firing, and instant bill splitting.',
    keywords: 'restaurant epos, table management system, restaurant floor plan, split bills restaurant, hospitality pos',
    alternates: {
        canonical: '/blog/restaurant-epos-table-management',
    },
};

export default function RestaurantTableManagementBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24 text-slate-50">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80')] bg-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl space-y-8">
                            <Badge className="bg-primary/20 text-primary border-primary/20 px-6 py-1 text-sm font-bold uppercase tracking-widest">Premium Service</Badge>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                                ELEVATE YOUR <br />
                                <span className="text-primary italic text-6xl md:text-8xl">GUEST FLOW</span>
                            </h1>
                            <p className="text-2xl text-slate-300 font-light leading-relaxed">
                                Managing a sit-down restaurant requires a different set of tools than a fast-food joint. Seamlessly coordinate courses, tables, and reservations with our advanced EPOS solutions.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg" className="rounded-full h-16 px-12 text-xl" asChild>
                                    <Link href="/tablemaestro">Meet TableMaestro</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full h-16 px-12 text-xl border-white/10" asChild>
                                    <Link href="https://posso.co.uk">Visit POSSO.UK</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Modules Grid */}
                <section className="py-32">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">The Orchestration of Excellence</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Posso&apos;s Restaurant EPOS solutions include <strong>&quot;TableMaestro&quot;</strong>—our powerful booking and table management engine.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <LayoutDashboard className="w-10 h-10 text-primary" />,
                                    title: "Visual Floor Plan",
                                    desc: "See exactly which tables are occupied, waiting for food, or ready for the bill in real-time."
                                },
                                {
                                    icon: <ChefHat className="w-10 h-10 text-primary" />,
                                    title: "Kitchen Coordination",
                                    desc: "Send starters and mains to the kitchen separately (fire-on-command) to time the service perfectly."
                                },
                                {
                                    icon: <Receipt className="w-10 h-10 text-primary" />,
                                    title: "Split Bills & Tabs",
                                    desc: "Handle the dreaded &quot;can we pay separately?&quot; request in seconds with intuitive line-item splitting."
                                }
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-12 rounded-[3rem] border-white/5 bg-slate-900/40 hover:bg-slate-900 transition-all flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="p-4 bg-slate-800 w-fit rounded-2xl">{item.icon}</div>
                                        <h3 className="text-3xl font-bold leading-tight">{item.title}</h3>
                                        <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="mt-8">
                                        <Link href="/contact" className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                                            Learn more <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content Deep Dive */}
                <section className="py-32 bg-slate-900/50 border-y border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg mx-auto">
                            <p className="text-xl text-slate-300 leading-relaxed mb-12">
                                At <Link href="https://posso.co.uk" className="text-primary font-bold hover:underline">Posso</Link>, we understand that the guest experience begins long before the food arrives. Our TableMaestro engine synchronises your online bookings with your floor staff, ensuring no double-bookings and optimal table turnaround.
                            </p>

                            <h3 className="text-4xl font-bold mt-16 mb-8 text-white">Coordinate the Kitchen, Elevate the Plate</h3>
                            <p className="text-slate-400 leading-relaxed mb-12">
                                Managing courses is a breeze with our &quot;hold and fire&quot; logic. Waitstaff can input the entire order at once, then simply tap &apos;Fire Mains&apos; when the customers are ready, notifying the kitchen instantly. This reduces noise, confusion, and error.
                            </p>

                            <div className="p-12 rounded-[3rem] bg-gradient-to-br from-primary/10 to-blue-600/10 border border-primary/20 flex flex-col items-center text-center space-y-8">
                                <Clock className="w-20 h-20 text-primary" />
                                <div className="space-y-4">
                                    <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">Faster Service, Better Reviews</h4>
                                    <p className="text-slate-400 max-w-md mx-auto">By streamlining the payment and course timing processes, our clients see an average 15% increase in table turnover on busy nights.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Links for SEO */}
                <section className="py-20 container mx-auto px-4 max-w-5xl">
                    <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-slate-500">Related Hospitality Tech</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/blog/benefits-of-a-mobile-pos-device-for-restaurants" className="group p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-primary/50 transition-all flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-xl group-hover:text-primary transition-colors">Mobile POS Benefits</h4>
                                <p className="text-sm text-slate-500">How handhelds change the game for servers.</p>
                            </div>
                            <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link href="/blog/pos-systems-for-restaurants-and-takeaways" className="group p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-primary/50 transition-all flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-xl group-hover:text-primary transition-colors">Complete Restaurant POS</h4>
                                <p className="text-sm text-slate-500">The full feature set for hospitality.</p>
                            </div>
                            <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-40 text-center">
                    <h2 className="text-5xl md:text-7xl font-black mb-12">TRANSFORM YOUR DINING ROOM</h2>
                    <div className="flex justify-center gap-6">
                        <Button size="lg" className="rounded-full h-16 px-12 text-xl shadow-2xl shadow-primary/30" asChild>
                            <Link href="https://posso.co.uk">Discover Posso.uk</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
