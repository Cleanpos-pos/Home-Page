import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Coffee,
    Zap,
    Monitor,
    ArrowRight,
    CheckCircle2,
    Heart,
    Layers,
    Clock
} from 'lucide-react';
import type { Metadata } from 'next';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';

export const metadata: Metadata = {
    title: 'Speed Up Your Coffee Line with a Smart Cafe POS | Posso',
    description: 'Master the morning rush with Posso\'s high-speed cafe POS system. Features one-tap ordering, automated upselling, and customer-facing displays.',
    keywords: 'cafe pos system, coffee shop epos uk, speedy till systems, barista pos software, loyalty epos for cafe',
    alternates: {
        canonical: '/blog/cafe-pos-system-efficiency',
    },
};

export default function CafePosBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
        <BlogBreadcrumb slug="cafe-pos-system-efficiency" title={"Speeding Up the Coffee Line with a Cafe POS"} />

                {/* Visual Banner */}
                <div className="relative h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="container mx-auto px-4 absolute bottom-12 left-0 right-0 z-10 text-center">
                        <Badge className="bg-primary px-6 py-1 mb-4">OPTIMISED FOR SPEED</Badge>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                            Master the <span className="gradient-text">Morning Rush</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            A clunky till system costing you seconds is costing you money. Discover the high-speed system purpose-built for baristas.
                        </p>
                    </div>
                </div>

                {/* Main Content Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold leading-tight">Every Second Counts in the Queue</h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    Morning rushes in a coffee shop are brutal. You have a line out the door, and every second counts. A clunky till system that requires five taps just to ring up a latte is costing you money.
                                </p>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    <Link href="https://www.posso.co.uk" className="text-primary font-bold hover:underline">Posso’s Cafe POS system</Link> is designed for high-speed counter service. Our interface is intuitive, meaning your baristas can focus on the coffee, not the screen.
                                </p>
                                <div className="space-y-4 pt-4">
                                    {[
                                        'Process a transaction in under 10 seconds',
                                        'Automatic modifier prompts for every drink',
                                        'Integrated loyalty cards for regulars',
                                        'Cloud reporting to track your busiest hours'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                                            <span className="text-slate-200 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button size="lg" className="rounded-full h-14 px-10 text-lg group" asChild>
                                    <Link href="/best-best-pos-system-for-coffee-shop-uk-by-posso-ltd-uk">
                                        View Cafe Solutions <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    {
                                        icon: <Zap className="text-primary w-8 h-8" />,
                                        title: "Quick Keys",
                                        desc: "One-tap ordering for your best-sellers (Latte, Cappuccino, Croissant). Minimise taps, maximise flow."
                                    },
                                    {
                                        icon: <Layers className="text-primary w-8 h-8" />,
                                        title: "Modifier Prompts",
                                        desc: "Automatic prompts for &quot;Oat Milk,&quot; &quot;Vanilla Syrup,&quot; or &quot;Decaf&quot; ensure staff never forget the upsell."
                                    },
                                    {
                                        icon: <Monitor className="text-primary w-8 h-8" />,
                                        title: "Dual Screens",
                                        desc: "A customer-facing screen confirms the order and price, reducing errors, waste, and friction."
                                    }
                                ].map((feature, idx) => (
                                    <div key={idx} className="p-8 rounded-[2rem] bg-slate-900 border border-white/5 hover:border-primary/30 transition-all group">
                                        <div className="mb-4">{feature.icon}</div>
                                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Loyalty Focus */}
                <section className="py-24 bg-primary/5 border-y border-white/5 text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Heart className="w-16 h-16 text-primary mx-auto mb-8 fill-primary/20" />
                        <h2 className="text-4xl font-bold mb-6">Built-in Loyalty for Lifelong Fans</h2>
                        <p className="text-xl text-slate-400 leading-relaxed mb-10">
                            Don&apos;t rely on paper stamps that customers lose. Our digital loyalty system is built directly into the EPOS. Recognise regulars by their name, payment card, or phone number and reward them automatically.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-slate-900/50">
                                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="font-bold">Faster service</h4>
                                <p className="text-sm text-slate-500">Reduce queues by 30% during morning peaks.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-900/50">
                                <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="font-bold">Higher Upsells</h4>
                                <p className="text-sm text-slate-500">Automated prompts increase milk alternative sales.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-900/50">
                                <Monitor className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="font-bold">Zero Friction</h4>
                                <p className="text-sm text-slate-500">Contactless payments processed in under 2 seconds.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Links */}
                <section className="py-20 container mx-auto px-4 max-w-4xl">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Coffee className="text-primary" />
                        More Insights for Cafe Owners
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/blog/cafe-coffee-shop-epos-systems-uk" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group flex justify-between items-center">
                            <span className="text-slate-200">Choosing the Best ePOS for your Cafe</span>
                            <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="/blog/best-card-machine-for-small-business" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group flex justify-between items-center">
                            <span className="text-slate-200">The Best Card Machines for Cafe Payments</span>
                            <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="/best-restaurant-epos-system-uk" className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group flex justify-between items-center">
                            <span className="text-slate-200">Best Restaurant EPOS Systems UK — 2026 Comparison</span>
                            <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="py-40 text-center">
                    <h2 className="text-5xl font-extrabold mb-10 tracking-tight">Streamline your shop today</h2>
                    <Button size="lg" className="rounded-full h-20 px-16 text-2xl bg-primary hover:bg-primary/90 text-white" asChild>
                        <Link href="https://www.posso.co.uk">Get Started at Posso.uk</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
