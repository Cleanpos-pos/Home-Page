import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Cpu,
    Globe,
    MessageSquare,
    Smartphone,
    Sparkles,
    Zap,
    TrendingUp,
    ShieldCheck
} from 'lucide-react';
import type { Metadata } from 'next';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';

export const metadata: Metadata = {
    title: 'Meet Posso: The Future of Hospitality Tech | Posso',
    description: 'Posso is more than just an EPOS provider. Explore our complete hospitality ecosystem, from self-service kiosks to low-commission ordering apps.',
    keywords: 'posso, hospitality tech uk, restaurant ecosystem, epos software, ordering apps for restaurants',
    alternates: {
        canonical: '/blog/posso-future-hospitality-tech',
    },
};

export default function MeetPossoBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
        <BlogBreadcrumb slug="posso-future-hospitality-tech" title={"The Future of Hospitality Tech"} />

                {/* Visual Header */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Badge variant="outline" className="text-primary border-primary mb-6 backdrop-blur-md px-4 py-1">THE NEXT GENERATION</Badge>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                            FUTURE OF <br />
                            <span className="gradient-text">HOSPITALITY</span>
                        </h1>
                        <p className="text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-snug">
                            Meet Posso: A complete ecosystem designed to empower UK food businesses and reclaim their profits.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-32">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                    Not Just a Till.<br />
                                    <span className="text-primary">A Mission Control.</span>
                                </h2>
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    The hospitality industry is evolving, and <Link href="https://www.posso.co.uk" className="text-primary font-bold hover:underline">Posso</Link> is leading the charge. We aren&apos;t just another software company; we are a dedicated tech partner for the modern UK food business.
                                </p>
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    From self-service kiosks that slash queues to &quot;hybrid&quot; systems that keep working when the internet crashes, Posso was built by engineers who understand the chaos of a Friday night shift.
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <Button size="lg" className="rounded-full px-8 h-14 bg-white text-black hover:bg-slate-200" asChild>
                                        <Link href="/contact">Book a Strategy Session</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl h-64 flex flex-col justify-end">
                                        <Zap className="text-primary w-10 h-10 mb-4" />
                                        <h3 className="font-bold text-xl">Hybrid Core</h3>
                                        <p className="text-slate-500 text-sm">Offline-first technology.</p>
                                    </div>
                                    <div className="bg-primary p-8 rounded-3xl h-80 flex flex-col justify-end text-white">
                                        <Sparkles className="w-10 h-10 mb-4" />
                                        <h3 className="font-bold text-xl text-white">Branded Apps</h3>
                                        <p className="text-white/80 text-sm">Your brand, your customers.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-12">
                                    <div className="bg-blue-600 p-8 rounded-3xl h-80 flex flex-col justify-end text-white">
                                        <TrendingUp className="w-10 h-10 mb-4" />
                                        <h3 className="font-bold text-xl text-white">Low Commission</h3>
                                        <p className="text-white/80 text-sm">Keep significantly more profit.</p>
                                    </div>
                                    <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl h-64 flex flex-col justify-end">
                                        <MessageSquare className="text-primary w-10 h-10 mb-4" />
                                        <h3 className="font-bold text-xl">Direct Marketing</h3>
                                        <p className="text-slate-500 text-sm">SMS & Email tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Features */}
                <section className="py-32 bg-slate-900/40 border-y border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg mx-auto">
                            <h2 className="text-3xl font-bold mb-8">Breaking Free from Delivery Giants</h2>
                            <p className="text-slate-300">
                                We help you break free from high-commission delivery platforms with your own branded ordering apps and give you the tools to market directly to your customers via SMS and email. Don&apos;t just survive; thrive with Posso.
                            </p>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] my-12">
                                <h3 className="text-2xl font-bold flex items-center gap-3">
                                    <Cpu className="text-primary" />
                                    The Infrastructure for 2026
                                </h3>
                                <p className="text-slate-400 mt-4 leading-relaxed">
                                    Our hardware isn&apos;t just stylish; it&apos;s industrial-grade. Built to withstand spills, heat, and the constant usage of a high-volume venue. Whether you need a simple iPad-based setup or a full multi-kiosk kiosk installation, Posso scales with you.
                                </p>
                            </div>

                            <p className="text-slate-300">
                                Our mission is simple: <strong>Empower takeaways and restaurants to reclaim their profits.</strong> Every feature we build is designed to either save you time, reduce your costs, or increase your average order value.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ecosystem Links */}
                <section className="py-32 bg-black">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-16">The complete hospitality ecosystem</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Self-Order Kiosks', href: '/solutions/self-order-kiosks' },
                                { label: 'Online Ordering', href: '/online-ordering' },
                                { label: 'Card Payment Machines', href: '/credit-card-machines' },
                                { label: 'Kitchen Display Systems', href: '/solutions/kitchen-display-screens' }
                            ].map((item, idx) => (
                                <Link key={idx} href={item.href} className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-primary/10 hover:border-primary/50 transition-all group">
                                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{item.label}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-40 bg-gradient-to-t from-primary/20 to-transparent">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready for the Future?</h2>
                        <Button size="lg" className="rounded-full h-16 px-12 text-xl bg-primary hover:bg-primary/90 text-white" asChild>
                            <Link href="https://www.posso.co.uk">Start Your Journey at Posso.uk</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
