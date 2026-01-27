import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ShoppingBag,
    CreditCard,
    Search,
    CheckCircle2,
    Zap,
    Smartphone,
    Layers,
    MonitorSmartphone,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kiosk for Retail | Retail Kiosk Point of Sale Solutions UK',
    description: 'Elevate your retail business with POSSO’s self-service kiosk solutions. Advanced retail kiosk point of sale systems to improve customer service and operational efficiency.',
    keywords: 'kiosk for retail, kiosk point of sale, kiosks solutions, kiosks systems, retail self-service kiosk, self-checkout retail uk, retail automation kiosks',
    alternates: {
        canonical: '/solutions/kiosks-for-retail',
    },
};

export default function RetailKioskPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "POSSO Retail Kiosk System",
        "description": "Interactive self-service kiosks for retail environments. Streamline checkout, provide product information, and enhance the shopper experience.",
        "brand": {
            "@type": "Brand",
            "name": "POSSO"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://posso.uk/solutions/kiosks-for-retail",
            "priceCurrency": "GBP"
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 opacity-30" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge variant="secondary" className="mb-6 py-1 px-4">RETAIL EXCELLENCE</Badge>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 gradient-text">
                                Self-Service Kiosk <br />for Retail & Commerce
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
                                Modernise your store with robust **retail kiosk point of sale** systems. From self-checkout to interactive product lookup, POSSO provides the ultimate **kiosks solutions** for high-growth retailers.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Button size="lg" asChild className="h-14 px-8 text-lg">
                                    <Link href="/contact">Improve Your Store Efficiency</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg">
                                    <Link href="/solutions">Explore All Solutions</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: <ShoppingBag className="text-primary" />, title: "Self-Checkout", desc: "Automate the checkout process and free up staff for floor service." },
                                { icon: <Search className="text-primary" />, title: "Product Lookup", desc: "Enable customers to find stock levels and product details instantly." },
                                { icon: <CreditCard className="text-primary" />, title: "Instant Payments", desc: "Integrated card terminals for fast, secure, and PCI-compliant transactions." },
                                { icon: <Layers className="text-primary" />, title: "Digital Catalog", desc: "Display your entire inventory visually even with limited shelf space." }
                            ].map((benefit, i) => (
                                <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                                    <div className="mb-6">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industry Focus */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="aspect-video bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                    <img src="/images/retail-kiosk-preview.jpg" alt="Retail Kiosk in Store" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Specialized <span className="text-primary">Kiosk Systems</span> for Every Retailer</h2>
                                <ul className="space-y-6">
                                    {[
                                        "Fashion & Apparel Stores",
                                        "Grocers & Convenience Shops",
                                        "Electronics & Gadget Boutiques",
                                        "Home & Garden Centers",
                                        "Showrooms & Experience Centers"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-xl text-slate-300">
                                            <CheckCircle2 className="w-6 h-6 text-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 bg-slate-950">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10">Step Into the Future of Retail</h2>
                        <div className="max-w-2xl mx-auto mb-12">
                            <p className="text-slate-400 text-lg">
                                POSSO's **kiosks systems** are designed to scale with your brand. Whether you need one station or a nationwide rollout, we have the hardware and software to support your growth.
                            </p>
                        </div>
                        <Button size="lg" asChild className="h-16 px-12 text-xl shadow-xl shadow-primary/20">
                            <Link href="/contact">Schedule a Demo</Link>
                        </Button>
                    </div>
                </section>

                {/* Internal Linking Footer */}
                <section className="py-16 bg-slate-900/30 border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-lg font-bold text-white mb-6">Explore More</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/solutions/restaurant-self-service-kiosk" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Restaurant Kiosks</Link></li>
                                    <li><Link href="/solutions/franchise-pos-systems" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Franchise POS</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-6">Learn About Our Tech</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/blog/best-card-machine-for-small-business" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Card Machine Guide</Link></li>
                                    <li><Link href="/pos" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Modern ePOS Systems</Link></li>
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
