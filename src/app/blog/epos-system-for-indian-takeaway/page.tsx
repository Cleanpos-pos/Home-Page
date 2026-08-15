import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    PhoneCall,
    ChefHat,
    Truck,
    Zap,
    ListChecks,
    Utensils,
    Clock,
    ArrowRight
} from 'lucide-react';
import type { Metadata } from 'next';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';

export const metadata: Metadata = {
    title: 'The Perfect EPOS System for Your Indian Takeaway | Posso',
    description: 'Simplify complex menus and speed up delivery with Posso\'s EPOS system for Indian takeaways. Featuring Caller ID, advanced modifiers, and driver tracking.',
    keywords: 'epos system for indian takeaway, indian restaurant software, caller id for takeaway, delivery management system',
    alternates: {
        canonical: '/blog/epos-system-for-indian-takeaway',
    },
};

export default function IndianTakeawayBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
        <BlogBreadcrumb slug="epos-system-for-indian-takeaway" title={"Spice Up Your Efficiency with The Perfect Indian EPOS"} />

                {/* Hero Section */}
                <section className="relative py-20 px-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)] -z-10" />
                    <div className="container mx-auto max-w-5xl text-center">
                        <Badge variant="outline" className="text-orange-500 border-orange-500/50 mb-6 px-4 py-1 uppercase tracking-widest text-xs font-bold bg-orange-500/5">
                            Specialised Solutions
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                            Spice Up Your Efficiency with <br />
                            <span className="text-orange-500">The Perfect Indian EPOS</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Indian takeaways handle complex menus. With endless variations—from &quot;mild&quot; to &quot;extra hot,&quot; specific allergies, and custom sides—you need an EPOS system that handles customisation instantly without confusing the kitchen.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-10 h-14" asChild>
                                <Link href="/best-epos-system-for-indian-takeaway-by-posso-ltd-uk">View Specialised System</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Core Features Grid */}
                <section className="py-20 bg-slate-900/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 space-y-4 hover:border-orange-500/30 transition-all">
                                <div className="bg-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                                    <PhoneCall className="text-orange-500 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold">Caller ID Integration</h3>
                                <p className="text-slate-400">Recognise loyal customers the second the phone rings. See their last order and re-order it in one tap. Reduce call times by 40%.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 space-y-4 hover:border-orange-500/30 transition-all">
                                <div className="bg-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                                    <ListChecks className="text-orange-500 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold">Complex Modifiers</h3>
                                <p className="text-slate-400">Easily add &quot;no coriander,&quot; &quot;extra sauce,&quot; or &quot;swap for naan&quot; without slowing down the order process or confusing the chef.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 space-y-4 hover:border-orange-500/30 transition-all">
                                <div className="bg-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                                    <Truck className="text-orange-500 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold">Driver Management</h3>
                                <p className="text-slate-400">Assign orders to drivers and track deliveries ensuring that Chicken Tikka Masala arrives piping hot to the customer.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Deep Dive */}
                <section className="py-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-4xl font-bold text-white">Built for the Heat of the Kitchen</h2>
                            <p className="text-slate-300">
                                Stop using generic retail systems for your curry house. Switch to a system designed for the heat of the takeaway kitchen. <Link href="https://www.posso.co.uk" className="text-orange-500 font-bold hover:underline">Posso&apos;s</Link> EPOS system for Indian takeaways is built for speed and accuracy.
                            </p>

                            <div className="bg-gradient-to-br from-slate-900 to-orange-950/30 border border-white/5 p-10 rounded-[3rem] my-16">
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <ChefHat className="text-orange-500" />
                                    Kitchen Coordination
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Our kitchen displays can categorise items by &quot;Section&quot;. Tandoor items, curry items, and starters can all be routed to different printers or screens, ensuring your staff work in harmony during the Saturday night rush.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'Automated printing for Starters vs Mains',
                                        'Allergy alerts pinned to top of tickets',
                                        'Estimated prep time timers',
                                        'Large font for easy reading in steam'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-400">
                                            <Zap className="text-orange-500 w-4 h-4" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-slate-300">
                                Loyal customers are the lifeblood of any successful takeaway. With our integrated database, you can automatically send SMS discount codes to customers who haven&apos;t ordered in 30 days, or reward your regulars with loyalty points, all handled automatically through the EPOS.
                            </p>
                        </div>

                        {/* Result Highlights */}
                        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { val: '40%', label: 'Faster Phone Orders', icon: <PhoneCall className="w-5 h-5 text-orange-500" /> },
                                { val: '100%', label: 'Allergy Compliance', icon: <Utensils className="w-5 h-5 text-orange-500" /> },
                                { val: '25%', label: 'Profit Boost', icon: <Zap className="w-5 h-5 text-orange-500" /> },
                                { val: '15 min', label: 'Faster Delivery', icon: <Clock className="w-5 h-5 text-orange-500" /> },
                            ].map((stat, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-white/5 text-center">
                                    <div className="flex justify-center mb-3">{stat.icon}</div>
                                    <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-24 p-12 text-center rounded-[3rem] bg-orange-600 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                            <h2 className="text-4xl font-bold text-white mb-6">Take Control of Your Curry House</h2>
                            <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
                                Join the top-rated Indian takeaways in the UK using Posso technology. Get your free demo today.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 font-bold" asChild>
                                    <Link href="/contact">Book Free Demo</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 bg-transparent border-white text-white hover:bg-white/10" asChild>
                                    <Link href="https://www.posso.co.uk">Visit POSSO.UK <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
