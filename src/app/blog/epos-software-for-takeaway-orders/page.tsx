import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    LayoutDashboard,
    Monitor,
    Database,
    Users,
    Zap,
    ShoppingCart,
    Layers,
    ArrowRight
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Streamline Your Orders with Specialised EPOS Software | Posso',
    description: 'Generic POS fails where specialized takeaway software succeeds. Discover how Posso aggregates orders, manages delivery zones, and builds your customer database.',
    keywords: 'epos software for takeaway, takeaway management system, order aggregation, restaurant crm uk',
    alternates: {
        canonical: '/blog/epos-software-for-takeaway-orders',
    },
};

export default function TakeawayOrdersBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
                {/* Hero Section */}
                <section className="relative py-24 px-4">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 blur-[120px] rounded-full -z-10" />
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <Badge className="bg-primary/20 text-primary border-primary/20 px-4 py-1">OPERATIONAL EXCELLENCE</Badge>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                                    Specialised <span className="gradient-text">EPOS Software</span> for Modern Takeaways
                                </h1>
                                <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                                    Generic Point of Sale software fails when it comes to the specific needs of a takeaway. Our dedicated system acts as your mission control, aggregating every order into one clear view.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                                    <Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-xl shadow-primary/20" asChild>
                                        <Link href="https://www.posso.co.uk">Exlpore the Software</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-white/10" asChild>
                                        <Link href="/contact">Request a Demo</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 hidden md:block">
                                <div className="relative p-2 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl">
                                    <div className="bg-slate-950 rounded-[1.8rem] overflow-hidden p-6 aspect-square flex flex-col justify-center gap-4">
                                        <Monitor className="w-16 h-16 text-primary mx-auto mb-4" />
                                        <div className="h-4 w-3/4 bg-slate-800 rounded mx-auto" />
                                        <div className="h-4 w-1/2 bg-slate-800 rounded mx-auto" />
                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                            <div className="h-10 bg-primary/10 rounded-xl" />
                                            <div className="h-10 bg-primary/10 rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Chaos Section */}
                <section className="py-24 bg-slate-900/50 relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 text-white">Turn Chaos into Harmony</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Traditional software doesn&apos;t understand delivery radiuses, driver assignment, or the &quot;Just Eat&quot; integration chaos. Posso does.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Layers className="w-10 h-10 text-primary" />,
                                    title: "Order Aggregation",
                                    desc: "Aggregate orders from phones, your website, and delivery apps onto a single, clear Kitchen Display Screen."
                                },
                                {
                                    icon: <Database className="w-10 h-10 text-primary" />,
                                    title: "CRM & Database",
                                    desc: "Capture customer details automatically. Turn that one-time Friday order into a loyal regular."
                                },
                                {
                                    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
                                    title: "Inventory Sync",
                                    desc: "Sell out of an item? Mark it as &quot;out of stock&quot; once and it updates across all ordering channels instantly."
                                }
                            ].map((card, i) => (
                                <div key={i} className="glass-card p-10 rounded-3xl border-white/5 hover:border-primary/50 transition-all group">
                                    <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Ownership Section */}
                <section className="py-32">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg max-w-none text-center">
                            <h2 className="text-4xl font-bold text-white mb-8">Own Your Customer Data</h2>
                            <p className="text-slate-300 text-xl leading-relaxed mb-12">
                                Instead of giving all your customer data to third-party apps, <Link href="https://www.posso.co.uk" className="text-primary font-bold hover:underline font-bold">Posso&apos;s</Link> software captures every detail so you can market to them directly later. Launch direct SMS campaigns and email bursts directly from your dashboard.
                            </p>
                            <div className="flex flex-col items-center gap-8 py-12 px-8 rounded-[3rem] bg-gradient-to-br from-slate-900 to-primary/10 border border-white/5">
                                <Users className="w-20 h-20 text-primary animate-bounce-slow" />
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white m-0">The Marketing Engine</h3>
                                    <p className="text-slate-400">Our software automatically tags customers based on buying habits. Loyal regular? Send a &apos;Thank You&apos; voucher. Haven&apos;t seen them in 2 weeks? Send a &apos;We Miss You&apos; deal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Internal Links */}
                <section className="py-20 border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h3 className="text-2xl font-bold mb-8 text-center">Related Solutions for UK Takeaways</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/blog/epos-systems-for-takeaways" className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-lg">Hybrid EPOS Systems</h4>
                                    <p className="text-sm text-slate-500">Why offline capability is essential.</p>
                                </div>
                                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link href="/blog/pos-for-pizza-restaurant-best-system-for-pizza-shops" className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-lg">Pizza Delivery POS</h4>
                                    <p className="text-sm text-slate-500">Specialised logic for pizza shops.</p>
                                </div>
                                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final Button */}
                <div className="py-32 text-center">
                    <Button size="lg" className="rounded-full h-20 px-16 text-2xl" asChild>
                        <Link href="https://www.posso.co.uk">Start Streamlining with Posso</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
