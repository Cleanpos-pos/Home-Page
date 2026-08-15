import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Smartphone,
    Wifi,
    Zap,
    Users,
    ArrowRight,
    CreditCard,
    Signal,
    Timer
} from 'lucide-react';
import type { Metadata } from 'next';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';

export const metadata: Metadata = {
    title: 'Why Every Server Needs a Portable Card Machine | Posso',
    description: 'Boost restaurant efficiency with portable card machines. Learn how pay-at-table technology and 4G backup can save time and increase table turnaround.',
    keywords: 'portable card machine, restaurant payments, pay at table, handheld pos uk, mobile payment terminal',
    alternates: {
        canonical: '/blog/portable-card-machine-hospitality',
    },
};

export default function PortableCardMachineBlog() {
    const features = [
        {
            icon: <Smartphone className="w-8 h-8 text-primary" />,
            title: "Pay-at-Table",
            description: "Split bills instantly without staff walking back and forth to a fixed till."
        },
        {
            icon: <Signal className="w-8 h-8 text-primary" />,
            title: "WiFi & 4G Backup",
            description: "Never miss a sale. Seamless switching ensures you're always online."
        },
        {
            icon: <Timer className="w-8 h-8 text-primary" />,
            title: "Faster Turnaround",
            description: "Save 5–10 minutes per table, allowing more guests during peak hours."
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
        <BlogBreadcrumb slug="portable-card-machine-hospitality" title={"Why Every Server Needs a Portable Card Machine"} />

                {/* Hero Section */}
                <section className="relative py-20 px-4 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
                    <div className="container mx-auto max-w-5xl relative">
                        <div className="text-center space-y-6">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-6 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
                                Service Excellence
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                                Why Every Server Needs a <br />
                                <span className="gradient-text">Portable Card Machine</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                In a busy restaurant, speed is everything. If your staff have to walk back to a fixed till to process a bill, you are losing valuable time—and potentially turning tables slower.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-8">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-10 text-lg shadow-lg shadow-primary/20" asChild>
                                    <Link href="/portable-card-machines">View Portable Models</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 rounded-full h-14 px-10 text-lg" asChild>
                                    <Link href="https://www.posso.co.uk">Visit POSSO.UK</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="py-20 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((f, i) => (
                                <div key={i} className="glass-card p-10 rounded-[2rem] border-white/5 hover:border-primary/30 transition-all duration-500 group">
                                    <div className="mb-6 bg-slate-800/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-lg">{f.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Deep Dive Content */}
                <section className="py-20 border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-4xl font-bold text-white mb-8">Modern Payments, No Luxury Required</h2>
                            <p className="text-slate-300 text-xl leading-relaxed mb-10">
                                A modern portable card machine is no longer a luxury; it’s a necessity. At <Link href="https://www.posso.co.uk" className="text-primary font-bold hover:underline">Posso</Link>, we integrate with the UK’s leading payment providers—like <strong>Dojo, Teya, and Clover</strong>—to offer lightweight, robust card terminals that work right at the table.
                            </p>

                            <div className="my-16 relative rounded-3xl overflow-hidden aspect-video group">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                                <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <CreditCard className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="absolute bottom-10 left-10 z-20">
                                    <p className="text-2xl font-bold text-white">Seamless Tableside Integration</p>
                                    <p className="text-slate-300">Fast, secure, and built for hospitality.</p>
                                </div>
                            </div>

                            <p className="text-slate-300">
                                Stop making your customers wait. Upgrade to a portable solution that keeps your service moving as fast as your kitchen. When a server can handle the entire payment flow in one visit to the table, they have more time to focus on what matters: the guest experience.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-12 mb-6">The Posso Advantage</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="bg-primary/20 p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                                        <Zap className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Instant Sync</h4>
                                        <p className="text-slate-400">Payments are instantly updated in your EPOS system, eliminating manual re-entry and human error.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-primary/20 p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                                        <Users className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Better Tips</h4>
                                        <p className="text-slate-400">Interactive gratuity prompts on modern terminals are proven to increase average staff tips by up to 20%.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="mt-20 p-12 rounded-[2.5rem] bg-slate-900 border border-white/5 relative overflow-hidden text-center">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
                            <h2 className="text-3xl font-bold mb-6">Ready to upgrade your payment game?</h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                                Join the hundreds of UK restaurants speeding up their service with Posso's integrated payment solutions.
                            </p>
                            <Button size="lg" className="rounded-full px-12 h-14 text-lg" asChild>
                                <Link href="/credit-card-machines-enquiry">Request a Demo <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
