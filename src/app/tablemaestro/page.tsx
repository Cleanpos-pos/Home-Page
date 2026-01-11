import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TableMaestroShowcase } from '@/components/sections/table-maestro';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Zap, CalendarDays, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'TableMaestro | Online Table Booking & Promotion Engine',
    description: 'Manage your restaurant bookings and grow your business with TableMaestro. Integrated online reservations, customer management, and automated promotional tools.',
    alternates: {
        canonical: '/tablemaestro',
    },
};

const features = [
    {
        title: "Real-time Bookings",
        description: "Instant table confirmations for your customers, 24/7. No more missed calls or double bookings.",
        icon: <CalendarDays className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Promotion Engine",
        description: "Create and track discount codes, special offers, and holiday promotions to drive mid-week traffic.",
        icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Customer Database",
        description: "Build a rich list of your diners. Understand their preferences and keep them coming back with marketing.",
        icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Growth Analytics",
        description: "See exactly how many bookings you're getting and which promotions are driving the most revenue.",
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />
    }
];

export default function TableMaestroPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <Header />
            <main className="flex-1">
                {/* Detail Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)]" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 py-1 px-3 mb-6">
                                <Zap className="w-3 h-3 mr-2" />
                                ADVANCED BOOKING SOLUTION
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Master Your Floor with <span className="text-blue-500">TableMaestro</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                The all-in-one reservation and marketing suite designed specifically for ambitious restaurants looking to scale their operations and increase customer lifetime value.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                            {features.map((feature, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-50 mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Main Visual */}
                        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden glass-card border-blue-500/20 shadow-2xl shadow-blue-500/10">
                            <Image
                                src="/tablemaestro_promo_engine.png"
                                alt="TableMaestro Dashboard"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8 font-headline tracking-tight">
                                    Why Choose TableMaestro <br />
                                    <span className="text-blue-500">For Your Restaurant?</span>
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        "Zero commissions on bookings - keep all your profit.",
                                        "Fully branded booking widget that fits your website.",
                                        "Automated email reminders to reduce no-shows.",
                                        "Powerful promotion engine to fill empty tables during quiet hours.",
                                        "Mobile-optimized for your customers and your staff.",
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                            </div>
                                            <p className="text-slate-300 text-lg">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                                    <Image
                                        src="/tablemaestro_booking_ui.png"
                                        alt="TableMaestro Mobile UI"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
    );
}
