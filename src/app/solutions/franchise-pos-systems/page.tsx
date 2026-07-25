import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Building2,
    BarChart4,
    Network,
    Settings2,
    Users2,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Globe
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Franchise POS System | Multi-Unit Franchise ePOS Software UK',
    description: 'Scale your brand with POSSO’s franchise POS system. Centralized management, multi-unit reporting, and secure franchise ePOS solutions for hospitality and retail.',
    keywords: 'franchise epos, franchise pos system, franchise pos, multi-unit pos, central epos management, franchise management software',
    alternates: {
        canonical: '/solutions/franchise-pos-systems',
    },
    openGraph: {
        title: 'Franchise POS System UK | Multi-Site EPOS & Franchise Management Software',
        description: 'Franchise POS system for multi-site operators: central menu and price control, per-site and group reporting, royalty and fee tracking, brand consistency, stock control, and fast onboarding of new sites.',
        url: 'https://www.posso.co.uk/solutions/franchise-pos-systems',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Franchise POS system UK with central menu control, multi-site EPOS reporting, and royalty tracking for franchise networks',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Franchise POS System UK | Multi-Site EPOS & Franchise Management Software',
        description: 'Central menu and price control, per-site and group reporting, royalty tracking, brand consistency, and stock control for franchise networks.',
        images: ['/og-image.png'],
    },
};

export default function FranchisePosPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "POSSO Franchise ePOS",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android, Windows",
            "description": "Enterprise-grade POS system built for franchises. Centralized menu control, real-time multi-unit analytics, and role-based access for franchise owners and managers.",
            "brand": {
                "@type": "Brand",
                "name": "POSSO"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.posso.co.uk" },
                { "@type": "ListItem", "position": 2, "name": "Franchise POS Systems", "item": "https://www.posso.co.uk/solutions/franchise-pos-systems" }
            ]
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="flex-1 pt-20">
                <BreadcrumbNav items={[{ label: 'Franchise POS Systems' }]} />

                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge variant="outline" className="mb-6 border-primary/50 text-primary uppercase tracking-widest px-4 py-1">Enterprise Ready</Badge>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 gradient-text">
                                Multi-Unit <br />Franchise POS Systems
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Take control of your entire brand with our unified **franchise epos** software. Global menu management, real-time inventory sync, and enterprise-grade reporting for **franchise pos** environments.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Button size="lg" asChild className="h-14 px-8 text-lg font-bold">
                                    <Link href="/contact">Request Enterprise Demo</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg border-white/20">
                                    <Link href="/agents">Agent Program</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Multi-Unit Capabilities */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for Scalable Growth</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Manage 10 stores or 1,000 with the same ease and precision.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Network className="w-10 h-10 text-primary" />,
                                    title: "Centralized Management",
                                    desc: "Push menu updates, pricing changes, and promotions to all locations or specific regions with a single click."
                                },
                                {
                                    icon: <BarChart4 className="w-10 h-10 text-primary" />,
                                    title: "Unified Reporting",
                                    desc: "Compare performance across all franchise units. Identify top performers and optimize underperforming locations in real-time."
                                },
                                {
                                    icon: <Users2 className="w-10 h-10 text-primary" />,
                                    title: "Franchisee Portals",
                                    desc: "Provide individual owners with secure, restricted access to their specific store data and local settings."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="glass-card p-10 rounded-3xl border border-white/5 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
                                    <div className="mb-6 bg-primary/10 p-5 rounded-2xl group-hover:scale-110 transition-transform">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features List */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">Advanced Tools for <span className="text-primary text-glow">Franchise ePOS</span> Control</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Global Menu Sync", desc: "Update your entire franchise network in seconds." },
                                        { title: "Supply Chain Integration", desc: "Connect with distributors for automated replenishment." },
                                        { title: "Regional Pricing Control", desc: "Adjust pricing based on local cost of living and competition." },
                                        { title: "Royalty Calculation Tools", desc: "Automate royalty tracking and billing for franchisees." },
                                        { title: "Brand Consistency", desc: "Ensure every kiosk and terminal reflects your brand identity." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5">
                                            <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                                <p className="text-slate-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="glass-card p-8 rounded-3xl border border-white/10 relative z-10">
                                    <img src="/images/franchise-dashboard-mockup.jpg" alt="Franchise Management Dashboard" className="rounded-2xl" />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-24 bg-slate-950 border-t border-white/5">
                    <div className="container mx-auto px-4 text-center">
                        <Globe className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Brand?</h2>
                        <div className="max-w-3xl mx-auto mb-12">
                            <p className="text-xl text-slate-300">
                                Join the growing list of brands using POSSO's **franchise pos system** to dominate their markets. Our enterprise team is ready to build your custom migration plan.
                            </p>
                        </div>
                        <Button size="lg" className="h-16 px-12 text-xl shadow-xl shadow-primary/20" asChild>
                            <Link href="/contact">Speak to Enterprise Team</Link>
                        </Button>
                    </div>
                </section>

                {/* Internal Linking Footer */}
                <section className="py-16 bg-slate-900/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
                            <div>
                                <h4 className="text-lg font-bold text-white mb-6">Vertical Solutions</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/solutions/restaurant-self-service-kiosk" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 underline-offset-4 decoration-primary/30 underline"><ArrowRight className="w-4 h-4" /> Multi-Unit Kiosks</Link></li>
                                    <li><Link href="/online-ordering" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 underline-offset-4 decoration-primary/30 underline"><ArrowRight className="w-4 h-4" /> Branded App Ecosystem</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-6">Expert Advice</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/blog/pos-and-self-order-kiosk-solutions" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 underline-offset-4 decoration-primary/30 underline"><ArrowRight className="w-4 h-4" /> POS Strategy 2026</Link></li>
                                    <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 underline-offset-4 decoration-primary/30 underline"><ArrowRight className="w-4 h-4" /> Contact Support</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQSection title="Franchise POS Systems — Frequently Asked Questions" faqs={[
                    { question: 'What is a franchise POS system?', answer: 'A franchise POS system is a multi-site EPOS platform designed to run a network of locations under one brand. As well as everyday till functions at each site, it gives head office central control over the menu and pricing, group-wide and per-site reporting, royalty and fee tracking, and consistent branding — so the whole estate runs to the same standard.' },
                    { question: 'How does central menu and price control work across sites?', answer: 'Head office maintains a master menu and price list and pushes updates to every location, a region, or a single site with one action. You can run national pricing while still allowing approved local variations, and roll out new products or promotions across the network instantly.' },
                    { question: 'Can I see reporting per site and for the whole group?', answer: 'Yes. The franchise management software gives you consolidated group reporting alongside drill-down per-site reports. Compare sales, average transaction value, and product performance across locations, identify top and underperforming sites, and export the data you need for board and franchisee reviews.' },
                    { question: 'Does it handle royalties and franchise fees?', answer: 'Yes. The system can automate royalty and management-fee calculations based on each site’s sales, so franchisee billing is accurate and transparent. This removes manual spreadsheets and reduces disputes between head office and franchisees.' },
                    { question: 'How quickly can new franchise sites be onboarded?', answer: 'New sites inherit your master menu, pricing, branding, and configuration, so onboarding is fast. We handle hardware setup, data import, and staff training, and a new site can typically be live and trading on the network within a short, planned go-live window.' },
                    { question: 'Does the franchise EPOS include stock control and brand consistency tools?', answer: 'Yes. You get stock control with supplier integration and automated replenishment, plus brand-consistency controls that keep every terminal, kiosk, and receipt aligned to your brand identity across the entire multi-site estate.' },
                ]} />
            </main>
            <Footer />
        </div>
    );
}
