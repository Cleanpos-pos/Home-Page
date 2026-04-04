import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    WifiOff,
    Wifi,
    Zap,
    ShieldCheck,
    Database,
    Printer,
    Monitor,
    ArrowRight
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why "Hybrid" EPOS Systems for Takeaways Are Essential | Posso',
    description: 'Don\'t let a bad internet connection ruin your Friday night. Discover why Posso\'s hybrid EPOS systems—which work offline—are essential for UK takeaways.',
    keywords: 'epos systems for takeaways, hybrid pos system, offline pos software, reliable takeaway tech uk, cloud pos offline mode',
    alternates: {
        canonical: '/blog/hybrid-epos-systems-for-takeaways',
    },
};

export default function HybridEposBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
                {/* Hero Section */}
                <section className="relative py-24 px-4 overflow-hidden border-b border-white/5">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600/10 blur-[140px] rounded-full -z-10" />
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <Badge variant="outline" className="border-primary text-primary px-4 py-1 font-bold">RELIABILITY FIRST</Badge>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                                    The Power of <br />
                                    <span className="gradient-text">Hybrid EPOS</span>
                                </h1>
                                <p className="text-xl text-slate-400 leading-relaxed font-light">
                                    Internet connections in the UK can be unreliable. If your cloud-based POS goes down on a Friday night, can you still take orders? With Posso, the answer is always yes.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                                    <Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-xl shadow-primary/20" asChild>
                                        <Link href="https://posso.co.uk">Explore Hybrid Tech</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-white/10 hover:bg-white/5" asChild>
                                        <Link href="/contact">Get a Quote</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-primary to-blue-600">
                                    <div className="bg-slate-950 rounded-[2.9rem] p-12 space-y-8">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                                <span className="text-xs font-bold text-slate-500 uppercase">Internet Disconnected</span>
                                            </div>
                                            <ShieldCheck className="text-green-500 w-8 h-8" />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 text-white font-bold">
                                                <Zap className="text-primary" /> System Online & Local
                                            </div>
                                            <div className="flex items-center gap-4 text-white font-bold">
                                                <Printer className="text-primary" /> Kitchen Printing Enabled
                                            </div>
                                            <div className="flex items-center gap-4 text-white font-bold">
                                                <Monitor className="text-primary" /> Front of House Active
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg mx-auto">
                            <h2 className="text-4xl font-bold mb-8">What exactly is a "Hybrid" System?</h2>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                Many modern EPOS systems are &quot;Pure Cloud.&quot; This means they rely 100% on a constant internet connection to function. If your router restarts or your broadband drops, your till becomes a paperweight.
                            </p>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                At <Link href="https://posso.co.uk" className="text-primary font-extrabold hover:underline">Posso</Link>, we build EPOS systems for takeaways that are <strong>&quot;Hybrid.&quot;</strong> This means they have a local database installed on your hardware. If your internet cuts out, your local system keeps running, your printers keep printing, and your kitchen keeps cooking.
                            </p>

                            <div className="my-16 p-12 rounded-[3.5rem] bg-slate-900 border border-white/5 relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700" />
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 relative z-10">
                                    <WifiOff className="text-primary w-8 h-8" />
                                    Offline Continuity
                                </h3>
                                <p className="text-slate-400 relative z-10 text-lg leading-relaxed">
                                    When the internet is restored, the data automatically syncs back to the cloud. You don&apos;t have to do anything. Your reports will be accurate, and your stock levels will update perfectly. Don&apos;t let a bad signal ruin your busiest night of the week.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold mb-6">Why It Matters for UK Takeaways</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                                    <Zap className="text-primary shrink-0 w-6 h-6" />
                                    <div>
                                        <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-1">Peak Performance</h4>
                                        <p className="text-slate-400 text-sm">Large orders are processed locally in milliseconds, with no lag from slow web servers.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                                    <Database className="text-primary shrink-0 w-6 h-6" />
                                    <div>
                                        <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-1">Data Security</h4>
                                        <p className="text-slate-400 text-sm">Your order history is double-backed up, both on-site and in our secure UK cloud.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Related Internal Links */}
                <section className="py-24 bg-slate-900/40 border-y border-white/5">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h3 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest text-slate-500">Takeaway Tech Essentials</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/blog/epos-software-for-takeaway-orders" className="group p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-primary/50 transition-all flex justify-between items-center">
                                <div>
                                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">Specialised Takeaway Software</h4>
                                    <p className="text-sm text-slate-500">Order aggregation and driver management.</p>
                                </div>
                                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link href="/blog/epos-system-for-takeaway-commission-free" className="group p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-primary/50 transition-all flex justify-between items-center">
                                <div>
                                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">Low-Commission Systems</h4>
                                    <p className="text-sm text-slate-500">Keep significantly more of your profit on every order.</p>
                                </div>
                                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="py-40 text-center">
                    <h2 className="text-5xl font-black mb-10 tracking-tighter">NEVER STOP TAKING ORDERS</h2>
                    <Button size="lg" className="rounded-full h-20 px-16 text-2xl shadow-2xl shadow-primary/40 bg-primary hover:bg-primary/90 text-white" asChild>
                        <Link href="https://posso.co.uk">Get Your Hybrid System</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
