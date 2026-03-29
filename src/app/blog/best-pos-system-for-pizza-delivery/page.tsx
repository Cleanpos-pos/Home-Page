import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Pizza,
    Truck,
    MapPin,
    Zap,
    Layers,
    Globe,
    ArrowRight,
    Utensils
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What is the Best POS System for Pizza Delivery? | Posso',
    description: 'Pizza delivery requires specialized features like half-and-half modifiers and integrated delivery mapping. Discover why Posso is the UK leader in pizza POS.',
    keywords: 'best pos system for pizza delivery, pizza shop software, pizza toppings matrix, delivery tracking uk, takeaway pos pizza',
    alternates: {
        canonical: '/blog/best-pos-system-for-pizza-delivery',
    },
};

export default function PizzaDeliveryBlog() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            <main className="flex-1 pt-24">
                {/* Hero Section */}
                <section className="relative py-24 px-4 overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.1),transparent_50%)]" />
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-8 text-center md:text-left">
                                <Badge className="bg-red-600 text-white px-6 py-1 text-sm font-bold skew-x-[-10deg]">VOTED BEST FOR PIZZA 2026</Badge>
                                <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase leading-[0.8]">
                                    THE PIZZA <br />
                                    <span className="text-red-600">ENGINE.</span>
                                </h1>
                                <p className="text-xl text-slate-400 font-light leading-relaxed">
                                    Pizza delivery is unique. You are dealing with &quot;Half and Half&quot; toppings, deep pan vs. thin crust, and meal deals that can be a nightmare to calculate manually.
                                </p>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                    <Button size="lg" className="rounded-none h-16 px-10 text-xl bg-red-600 hover:bg-red-700 text-white font-black uppercase" asChild>
                                        <Link href="/blog/pos-for-pizza-restaurant-best-system-for-pizza-shops">View Pizza Solutions</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 relative group">
                                <div className="p-8 rounded-[4rem] bg-slate-900/80 border border-white/5 relative z-10 overflow-hidden transform group-hover:rotate-2 transition-transform duration-500">
                                    <Pizza className="w-64 h-64 text-red-600/20 absolute -right-20 -bottom-20 rotate-12" />
                                    <div className="relative z-20 space-y-4">
                                        <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/5">
                                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                                            <span className="font-bold">Half & Half Processing</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/5">
                                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                                            <span className="font-bold">Topping Matrix Logic</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/5">
                                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                                            <span className="font-bold">Postcode Driver Routing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Deep Dive */}
                <section className="py-32 bg-slate-900/50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg mx-auto">
                            <h2 className="text-4xl font-bold mb-8">Why Posso is the Best Choice for Pizza</h2>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                <Link href="https://posso.co.uk" className="text-red-600 font-bold hover:underline">Posso</Link> is arguably the best POS system for pizza delivery in the UK because we handle the complexity for you. Our <strong>&quot;Pizza Matrix&quot;</strong> modifier system makes building complex pizzas intuitive for your staff.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                                <div className="p-10 rounded-[3rem] bg-black border border-white/5 space-y-6">
                                    <MapPin className="text-red-600 w-12 h-12" />
                                    <h3 className="text-2xl font-bold m-0">Integrated Mapping</h3>
                                    <p className="text-slate-400">Set delivery charges based on distance or postcode zones automatically. Assign multiple deliveries to a single driver for the most efficient route.</p>
                                </div>
                                <div className="p-10 rounded-[3rem] bg-black border border-white/5 space-y-6">
                                    <Truck className="text-red-600 w-12 h-12" />
                                    <h3 className="text-2xl font-bold m-0">Driver App</h3>
                                    <p className="text-slate-400">Push addresses directly to your driver&apos;s phone. Track the delivery status in real-time from your main counter screen.</p>
                                </div>
                            </div>

                            <p className="text-slate-300">
                                More importantly, our system handles "Deal Logic" effortlessly. Whether it's "Buy One Get One Free" on Tuesdays or a custom "Family Deal" with specific drink choices, Posso calculates the price instantly as the items are added, ensuring your staff never make a mistake and your margins are protected.
                            </p>

                            <blockquote className="border-l-8 border-red-600 pl-8 py-4 my-12 bg-white/5 rounded-r-[2rem]">
                                <h4 className="text-2xl italic font-light text-slate-200 uppercase tracking-tighter">&quot;The Pizza Matrix modifier system is a game changer for training new staff. They can build a complex order in seconds.&quot;</h4>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Features Highlights */}
                <section className="py-32">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter">Engineered for Accuracy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { title: 'Half & Half', desc: 'Separate toppings for each side', icon: <Layers className="w-8 h-8 text-red-600 mx-auto" /> },
                                { title: 'Dough Types', desc: 'Gluten free, Thin, Deep Pan', icon: <Utensils className="w-8 h-8 text-red-600 mx-auto" /> },
                                { title: 'Postcode Logic', desc: 'Auto delivery fees by zone', icon: <MapPin className="w-8 h-8 text-red-600 mx-auto" /> },
                                { title: 'Driver Sync', icon: <Truck className="w-8 h-8 text-red-600 mx-auto" />, desc: 'Real-time delivery tracking' }
                            ].map((item, idx) => (
                                <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-900 border border-white/5 hover:bg-slate-800 transition-colors">
                                    <div className="mb-6">{item.icon}</div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Strategy */}
                <div className="py-20 container mx-auto px-4 max-w-4xl border-t border-white/5">
                    <h3 className="text-2xl font-extrabold mb-10 text-center uppercase">Boost Your Pizza Profits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/blog/best-food-delivery-app-uk" className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-red-600/50 transition-all flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Globe className="text-red-600" />
                                <span className="font-bold text-lg">Branded Delivery App</span>
                            </div>
                            <ArrowRight className="text-red-600 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link href="/blog/epos-system-for-takeaway-commission-free" className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-red-600/50 transition-all flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Zap className="text-red-600" />
                                <span className="font-bold text-lg">Commission-Free Ordering</span>
                            </div>
                            <ArrowRight className="text-red-600 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Final CTA */}
                <section className="py-40 text-center bg-gradient-to-t from-red-600/20 to-transparent">
                    <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-[0.1em] uppercase italic">Deliver Excellence.</h2>
                    <Button size="lg" className="rounded-none h-20 px-16 text-2xl bg-red-600 hover:bg-red-700 text-white font-black uppercase skew-x-[-12deg]" asChild>
                        <Link href="https://posso.co.uk">Start with Posso Now</Link>
                    </Button>
                </section>
            </main>
            <Footer />
        </div>
    );
}
