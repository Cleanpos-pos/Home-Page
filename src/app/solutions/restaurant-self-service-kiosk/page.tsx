import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Monitor,
    ShoppingCart,
    Clock,
    ShieldCheck,
    Zap,
    LayoutDashboard,
    Smartphone,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Restaurant Self-Service Kiosk | Self Ordering System for Restaurants UK',
    description: 'Revolutionize your dining experience with POSSO’s restaurant self-service kiosks. Increase order value by 30%, reduce queues, and streamline your restaurant kiosk system.',
    keywords: 'restaurant self service kiosk, self ordering kiosk restaurant, restaurant kiosk, restaurant kiosk systems, kiosk system for restaurants, self order kiosks restaurants, restaurant kiosk ordering, restaurant ordering kiosk, self ordering kiosk system for restaurants, self-service kiosks for food, self service ordering machine, self service kiosk restaurant, kiosks for restaurants, order kiosks, restaurant kiosks, self-order kiosk software, kiosks in restaurants, self-ordering kiosk system, kiosk machine for restaurants, food ordering kiosk system, self-ordering kiosk restaurant, food order kiosk, kiosk ordering system for restaurants, self ordering kiosk software for restaurants, ordering kiosk system, quick service restaurant kiosk, restaurant self service ordering kiosk, self serve kiosks for restaurants, kiosk in restaurants, self order kiosks, self service kiosk manufacturers uk, self serve kiosk, restaurant order kiosk, self ordering system for restaurants, self service food kiosk, restaurant self ordering kiosk, self ordering kiosk for restaurants, ordering kiosk',
    alternates: {
        canonical: '/solutions/restaurant-self-service-kiosk',
    },
};

export default function RestaurantKioskPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "POSSO Restaurant Self-Service Kiosk",
        "description": "Premium self-ordering kiosk system for restaurants, takeaways, and quick-service venues. Boost revenue and efficiency with AI-powered ordering.",
        "brand": {
            "@type": "Brand",
            "name": "POSSO"
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "GBP",
            "url": "https://posso.co.uk/solutions/restaurant-self-service-kiosk"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "128"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a restaurant self-service kiosk?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A restaurant self-service kiosk is a digital ordering station that allows customers to browse the menu, customize their order, and pay independently without needing a cashier."
                }
            },
            {
                "@type": "Question",
                "name": "Do self-ordering kiosks increase restaurant sales?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, on average, restaurants using POSSO kiosks see a 20-30% increase in average order value through automated upselling and cross-selling prompts."
                }
            }
        ]
    };

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-40" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge variant="outline" className="mb-6 border-primary/50 text-primary py-1 px-4">THE FUTURE OF DINING</Badge>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 gradient-text">
                                Restaurant Self-Service Kiosk <br />& Ordering Systems
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Empower your customers with the UK's most advanced **self-ordering kiosk software**. Reduce wait times, eliminate order errors, and boost your average transaction value.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                    <Link href="/contact">Get a Quote Today</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="px-8 h-14 text-lg border-white/20 hover:bg-white/5 transition-all">
                                    <Link href="/kiosks">View Hardware Options</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Benefits */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose a POSSO Kiosk System for Your Restaurant?</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our self-service food ordering kiosks are designed by hospitality experts for maximum impact.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <ShoppingCart className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Increased Order Value</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    Visual menus and intelligent upselling prompts encourage customers to add toppings, drinks, and sides, increasing average spend by up to 30%.
                                </p>
                            </div>

                            <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Clock className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Reduced Queue Times</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    A **self-service food kiosk** processes orders 40% faster than a traditional till, keeping your lobby clear and your customers happy.
                                </p>
                            </div>

                            <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Zero Order Errors</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    By letting the customer select their own items and modifiers, you eliminate transcription errors and improve order accuracy to 99.9%.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature List Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Advanced Features for Modern <span className="text-primary">Kiosk Ordering</span></h2>
                                <div className="space-y-6">
                                    {[
                                        "Intuitive Visual Menu Builder",
                                        "Real-time Inventory & Stock Sync",
                                        "Seamless Kitchen Display System (KDS) Integration",
                                        "Comprehensive Sales Analytics & Reporting",
                                        "Multi-language Support for Global Operations",
                                        "Secure Contactless & Card Payment Processing",
                                        "Branded Interface to Match Your Restaurant Layout"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                            <p className="text-lg text-slate-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12">
                                    <Button size="lg" asChild className="group">
                                        <Link href="/contact">
                                            Request a Custom Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl absolute -inset-10 opacity-30 animate-pulse" />
                                <div className="relative glass-card p-4 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                                    <img src="/images/restaurant-kiosk-ui-mockup.jpg" alt="Restaurant Self-Ordering Kiosk Interface" className="rounded-2xl w-full h-auto opacity-90" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Keywords Cloud for SEO (Natural Integration) */}
                <section className="py-24 bg-slate-900/30 border-y border-white/5">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-12 opacity-80 uppercase tracking-widest">Solutions for Every Venue Type</h2>
                        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                            {[
                                "Self Ordering Kiosk Restaurant", "Fast Food Ordering Kiosk", "Self Service Ordering Machine",
                                "Restaurant Kiosk Systems", "Quick Service Restaurant Kiosk", "Food Order Kiosk",
                                "Kiosk Ordering System for Restaurants", "Self-Ordering Kiosk System", "Kiosk for Retail",
                                "Self Order Kiosks Restaurants", "Self-Service Kiosks for Food", "Kiosks in Restaurants",
                                "Self Service Food Kiosk", "Restaurant Ordering Kiosk", "Automated Ordering Kiosks"
                            ].map((kw, i) => (
                                <span key={i} className="px-5 py-2 bg-slate-800 rounded-full text-sm font-medium text-slate-400 border border-white/5 hover:border-primary/30 hover:text-primary transition-all cursor-default">
                                    {kw}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Install Your <br /><span className="text-primary underline underline-offset-8 decoration-4">Restaurant Order Kiosk?</span></h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Contact POSSO today for a free consultation and see how our kiosk point of sale solutions can transform your business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Button size="lg" className="h-16 px-10 text-xl font-bold shadow-2xl shadow-primary/40" asChild>
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold" asChild>
                                <Link href="tel:+440000000000">Call Us Directly</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Internal Linking Footer */}
                <section className="py-16 bg-slate-950">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
                            <div>
                                <h4 className="text-lg font-bold text-white mb-6 underline decoration-primary decoration-2 underline-offset-4">Industry Insights</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/blog/self-order-kiosks" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Why Modern Restaurants Switch</Link></li>
                                    <li><Link href="/blog/self-service-revolution" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> The UK Self-Service Revolution</Link></li>
                                    <li><Link href="/blog/pos-and-self-order-kiosk-solutions" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Comprehensive POS Solutions</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-6 underline decoration-primary decoration-2 underline-offset-4">Related Solutions</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/solutions/franchise-pos-systems" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Franchise POS Systems</Link></li>
                                    <li><Link href="/solutions/kiosks-for-retail" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Retail Kiosk Solutions</Link></li>
                                    <li><Link href="/pos" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Leading ePOS Systems</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
