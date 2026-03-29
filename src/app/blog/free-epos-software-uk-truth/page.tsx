import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ShieldAlert,
    CheckCircle2,
    ArrowRight,
    Coins,
    Zap,
    BarChart3,
    LayoutDashboard,
    HelpCircle
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Truth About Free EPOS Software in the UK | Posso',
    description: 'Is free EPOS software really free? Discover the hidden costs of "free" UK EPOS systems and why a transparent, low-cost model from Posso is better for your business.',
    keywords: 'free epos software uk, affordable epos systems, hidden epos fees, restaurant software uk, takeaway epso',
    alternates: {
        canonical: '/blog/free-epos-software-uk-truth',
    },
};

export default function FreeEposBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
                {/* Hero Section */}
                <section className="relative py-20 px-4 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 blur-[100px] rounded-full -z-10" />

                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center space-y-6">
                            <Badge variant="outline" className="px-4 py-1 text-primary border-primary animate-fade-in">
                                INDUSTRY INSIGHTS
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight gradient-text">
                                Free EPOS Software UK: <br className="hidden md:block" />
                                <span className="text-white">Is it Really Free?</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                Running a hospitality business in the UK is expensive enough without monthly software license fees eating into your margins. Many providers claim to offer &quot;free&quot; software, but hidden transaction fees often sting you later.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-full" asChild>
                                    <Link href="https://posso.co.uk">Explore Posso Solutions</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-14 px-8 text-lg rounded-full" asChild>
                                    <Link href="/contact">Get a Quote</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="py-20 bg-slate-900/40 backdrop-blur-sm border-y border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <div className="glass-card p-8 rounded-3xl border-primary/20 bg-primary/5 mb-12">
                                <h2 className="text-3xl font-bold text-white mt-0 flex items-center gap-3">
                                    <ShieldAlert className="text-primary w-8 h-8" />
                                    The &quot;Zero Cost&quot; Illusion
                                </h2>
                                <p className="text-slate-300">
                                    In the UK market, the term &quot;Free EPOS&quot; is often used as a marketing hook. While the software download might be free, the service providers usually recoup their costs through significantly higher transaction processing fees or mandatory expensive hardware bundles.
                                </p>
                            </div>

                            <p className="text-slate-300">
                                At <Link href="https://posso.co.uk" className="text-primary font-bold hover:underline">Posso</Link>, we believe in transparency. Our approach to EPOS software is designed to help startups and small businesses get off the ground with minimal overheads. We offer powerful, cloud-based EPOS solutions where the software value is packed into an affordable hardware bundle or a low, sustainable flat-rate model.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-12 mb-6">Why pay for bloated software you don't use?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                <div className="space-y-4 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                    <Zap className="text-primary w-10 h-10" />
                                    <h4 className="text-xl font-bold text-white">Essentials Only</h4>
                                    <p className="text-slate-400">Our UK-based system covers the core needs: inventory management, sales tracking, and kitchen printing—without the corporate bloat.</p>
                                </div>
                                <div className="space-y-4 p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                                    <Coins className="text-primary w-10 h-10" />
                                    <h4 className="text-xl font-bold text-white">Healthy Cash Flow</h4>
                                    <p className="text-slate-400">Avoid the heavy monthly licensing costs of big corporate competitors. Keep your capital for growth, not software rent.</p>
                                </div>
                            </div>

                            <p className="text-slate-300">
                                Whether you are running a pop-up food stall or a high-street café, getting a system that keeps your cash flow healthy is vital. Many &quot;free&quot; options will lock you into a single payment provider with rates that double the industry standard.
                            </p>

                            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-slate-200 bg-white/5 rounded-r-xl">
                                &quot;The most expensive software is the one that claims to be free but takes 3% of every transaction you process.&quot;
                            </blockquote>

                            <h3 className="text-2xl font-bold text-white mt-12 mb-6">What to Look For in an Affordable EPOS</h3>
                            <ul className="space-y-4 list-none p-0">
                                {[
                                    'Transparent transaction rates (integrated with companies like Dojo or Teya)',
                                    'Offline mode capability (essential for busy UK peaks)',
                                    'Specific features for your niche (takeaway drivers, table management)',
                                    'Local UK support (don\'t get stuck waiting for a US-based help desk)'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-primary to-blue-600 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                                    <BarChart3 className="w-48 h-48" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 relative z-10">Stop Overpaying Today</h3>
                                <p className="text-white/90 mb-8 relative z-10 text-lg">
                                    Ready for a system that actually supports your growth? Contact us for a transparent breakdown of our budget-friendly hardware and software bundles.
                                </p>
                                <div className="flex flex-wrap gap-4 relative z-10">
                                    <Button size="lg" variant="secondary" asChild className="rounded-full px-8">
                                        <Link href="/finance">Check Budget Solutions</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10">
                                        <Link href="/contact-posso-ltd">Speak to an Expert</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Internal Links */}
                <section className="py-20 container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                            <LayoutDashboard className="text-primary w-6 h-6" />
                            Explore More From Posso
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/blog/best-card-machine-for-small-business" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all flex items-center justify-between group">
                                <span className="text-slate-300">Best Card Machines for UK Small Business</span>
                                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <Link href="/blog/pos-systems-for-restaurants-and-takeaways" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all flex items-center justify-between group">
                                <span className="text-slate-300">Modern POS for Restaurants</span>
                                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
