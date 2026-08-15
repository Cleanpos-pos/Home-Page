import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    PiggyBank,
    Smartphone,
    Printer,
    Bell,
    Zap,
    TrendingUp,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';
import type { Metadata } from 'next';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';

export const metadata: Metadata = {
    title: 'Stop Paying Commissions: A Better EPOS System for Takeaway | Posso',
    description: 'Tired of 30% commission? Posso provides a better EPOS system for takeaways with low-commission online ordering, integrated printing, and automated marketing.',
    keywords: 'epos system for takeaway, commission free ordering, takeaway pos uk, online ordering system takeaways',
    alternates: {
        canonical: '/blog/epos-system-for-takeaway-commission-free',
    },
};

export default function CommissionFreeTakeawayBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
        <BlogBreadcrumb slug="epos-system-for-takeaway-commission-free" title={"A Commission-Free EPOS System for Takeaways"} />

                {/* Hero Section */}
                <section className="relative py-24 px-4 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80')] bg-cover bg-fixed">
                    <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" />
                    <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-8">
                        <Badge className="bg-red-500/10 text-red-500 border-red-500/20 px-6 py-1 text-sm font-bold uppercase tracking-tighter shadow-lg shadow-red-500/5">
                            SAVE 30% ON COMMISSIONS
                        </Badge>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-white">
                            TAKE BACK <br />
                            <span className="text-primary italic">YOUR REVENUE</span>
                        </h1>
                        <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                            Are you tired of paying 20-30% commission on every order? The right EPOS system for takeaway should put money back in your pocket, not take it out.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-6">
                            <Button size="lg" className="rounded-full h-16 px-12 text-xl bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30" asChild>
                                <Link href="/online-ordering">Go Low-Commission</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* The Comparison Section */}
                <section className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 p-12 rounded-[3rem] bg-slate-900 border border-white/5 relative group">
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <PiggyBank className="w-40 h-40" />
                                </div>
                                <h2 className="text-4xl font-bold">Keep Significantly More Profit</h2>
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    <Link href="https://www.posso.co.uk" className="text-primary font-bold hover:underline">Posso</Link> offers a low-commission online ordering system integrated directly into your EPOS. Our fees are around 1/10th of what marketplaces charge, so you keep significantly more of every order.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-200 text-lg">
                                        <ShieldCheck className="text-primary w-6 h-6" /> Zero hidden fees per order
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-200 text-lg">
                                        <ShieldCheck className="text-primary w-6 h-6" /> Branded for your business
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-200 text-lg">
                                        <ShieldCheck className="text-primary w-6 h-6" /> Own your customer data
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-8 rounded-3xl bg-slate-800/40 border border-white/5 flex gap-6 items-start group hover:bg-slate-800/60 transition-all">
                                    <div className="bg-primary/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                        <Printer className="text-primary w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Integrated Printing</h3>
                                        <p className="text-slate-400">Online orders print automatically in the kitchen—no re-punching orders or manual entry errors.</p>
                                    </div>
                                </div>
                                <div className="p-8 rounded-3xl bg-slate-800/40 border border-white/5 flex gap-6 items-start group hover:bg-slate-800/60 transition-all">
                                    <div className="bg-primary/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                        <Bell className="text-primary w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Automated Marketing</h3>
                                        <p className="text-slate-400">Send an SMS blast to customers who haven&apos;t ordered in a while. Targeted re-engagement at your fingertips.</p>
                                    </div>
                                </div>
                                <div className="p-8 rounded-3xl bg-slate-800/40 border border-white/5 flex gap-6 items-start group hover:bg-slate-800/60 transition-all">
                                    <div className="bg-primary/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                        <Smartphone className="text-primary w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Self-Service Kiosks</h3>
                                        <p className="text-slate-400">Add a Kiosk to your waiting area to speed up walk-in orders and reduce front-of-house pressure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Marketing Focus */}
                <section className="py-24 border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <TrendingUp className="w-20 h-20 text-primary mx-auto mb-8 animate-pulse" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Take Back Control of Your Revenue</h2>
                        <p className="text-xl text-slate-400 leading-relaxed mb-12">
                            A Posso takeaway system isn&apos;t just a till; it&apos;s a growth engine. By drastically reducing commissions and moving customers to your own digital storefront, you can increase your take-home profit by thousands of pounds every single month.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="rounded-full h-14 px-10 text-lg" asChild>
                                <Link href="/best-food-delivery-app-uk">Own Your Delivery App</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-white/10" asChild>
                                <Link href="/blog/online-ordering-and-mobile-apps">Learn About Mobile Apps</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-primary relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="container mx-auto px-4 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Stop Donating Your Profits</h2>
                        <Button size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-slate-100 font-black h-16 px-12 text-xl" asChild>
                            <Link href="https://www.posso.co.uk">Start Your Low-Commission Future</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
