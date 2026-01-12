import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Smartphone, Zap, Globe, BarChart3, ShieldCheck, HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const targetKeyword = "Best Online Ordering Software for Restaurants by Posso Ltd UK";

const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": targetKeyword,
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "Restaurant Ordering System",
    "description": "Discover the best online ordering software for restaurants by Posso Ltd UK. Boost profits with 0% commission, branded apps, and seamless EPOS integration.",
    "author": {
        "@type": "Organization",
        "name": "Posso Ltd"
    },
    "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
    },
    "url": "https://posso.uk/best-online-ordering-software-for-restaurants-by-posso-ltd-uk"
};

export const metadata: Metadata = {
    title: 'Best Online Ordering Software for Restaurants by Posso Ltd UK | 0% Commission',
    description: 'Discover the best online ordering software for restaurants by Posso Ltd UK. Boost profits with 0% commission, branded apps, and seamless EPOS integration. Book a demo today.',
    alternates: {
        canonical: '/best-online-ordering-software-for-restaurants-by-posso-ltd-uk',
    },
    keywords: "Commission-free food ordering system, restaurant EPOS integration, custom branded restaurant app, direct online ordering UK, Posso Ltd features",
};

export default function LongTailLandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-primary/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 py-1 px-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                                <Zap className="w-3 h-3 mr-2" />
                                #1 RATED FOR UK RESTAURANTS
                            </Badge>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent !leading-[1.1]">
                                The {targetKeyword}
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                                Stop paying 30% to delivery aggregators. Reclaim your profits with a commission-free, fully branded online ordering system designed specifically for UK hospitality businesses.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <SolutionEnquiryModal
                                    defaultSolutionId="online-ordering"
                                    trigger={
                                        <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                            Book Your Free Demo <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    }
                                />
                                <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 hover:bg-slate-800 transition-all">
                                    View Pricing
                                </Button>
                            </div>

                            <div className="mt-12 relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl animate-in fade-in zoom-in-95 duration-1000">
                                <img
                                    src="/images/posso_online_ordering_hero.png"
                                    alt="Posso Ltd Online Ordering Interface"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                    Why Top UK Venues Choose Posso Ltd for Online Ordering
                                </h2>
                                <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                                    <p>
                                        In the competitive UK hospitality market, relying solely on third-party aggregators like Deliveroo or Uber Eats eats into your margins. The best online ordering software for restaurants by Posso Ltd UK offers a powerful alternative: a direct channel to your customers that you own and control.
                                    </p>
                                    <p>
                                        Posso Ltd provides an all-in-one ecosystem that empowers takeaways, cafes, and QSRs (Quick Service Restaurants) to process orders for delivery, collection, and table service—all without the stinging commission fees.
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-primary">0%</span>
                                        <span className="text-sm text-slate-500">Commission</span>
                                    </div>
                                    <div className="w-px h-12 bg-slate-800" />
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-accent">100%</span>
                                        <span className="text-sm text-slate-500">Data Control</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
                                <img
                                    src="/images/posso_branded_apps_display.png"
                                    alt="Commission Free Restaurant App UK"
                                    className="relative rounded-2xl border border-slate-800 shadow-2xl glass-card"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Key Features of Posso’s Online Ordering System
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Everything you need to run a high-volume restaurant ordering operation without the technical headaches.
                        </p>
                    </div>

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "0% Commission Fees",
                                    desc: "Keep 100% of your revenue. Unlike aggregators, we don't charge you for your own success.",
                                    icon: Zap
                                },
                                {
                                    title: "Fully Branded Web & Mobile Apps",
                                    desc: "We build a stunning, mobile-responsive website and native app (iOS & Android) that reflects your brand.",
                                    icon: Smartphone
                                },
                                {
                                    title: "Seamless EPOS Integration",
                                    desc: "Orders flow directly into your kitchen printer or KDS, eliminating manual re-entry and reducing errors.",
                                    icon: Globe
                                },
                                {
                                    title: "Customer Data Ownership",
                                    desc: "Build your own marketing database. Retain customer emails and phone numbers for direct offers.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Flexible Ordering Modes",
                                    desc: "Support for Click & Collect, Delivery driver management, and QR Code Table Ordering all in one platform.",
                                    icon: ArrowRight
                                },
                                {
                                    title: "Real-time Analytics",
                                    desc: "Track every order, customer habit, and peak time with our intuitive cloud-based dashboard.",
                                    icon: BarChart3
                                }
                            ].map((f, i) => (
                                <div key={i} className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all hover:-translate-y-2">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <f.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-slate-900 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] -z-0" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Transform Your Operations with Integrated Technology
                            </h2>
                            <p className="text-xl text-slate-400">
                                Choosing the {targetKeyword} means more than just a digital menu. It is about streamlining your entire operation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-12">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center font-bold text-slate-500">01</div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Unified Management</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            Forget juggling multiple tablets. Posso Ltd connects your online orders with your physical EPOS and Self-Service Kiosks. Whether a customer orders from their sofa or a kiosk in your shop, all sales data is centralized in one cloud-based dashboard.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center font-bold text-slate-500">02</div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Automated Marketing</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            Use your direct access to customer data to run automated loyalty campaigns. Send push notifications for "Happy Hour" or email vouchers to inactive customers, driving repeat business on autopilot.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-slate-800 p-8 bg-black/40 backdrop-blur-md shadow-inner">
                                <img
                                    src="/images/posso_dashboard_analytics.png"
                                    alt="Posso Ltd Management Dashboard"
                                    className="rounded-xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">
                            Trusted by Leading UK Food Brands
                        </h2>
                        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-16">
                            From bustling London pizzerias to independent coffee shops in Leicester, Posso Ltd is the technology partner of choice for growth-focused brands. Join hundreds of satisfied operators who have switched to Posso to cut costs and improve service speed.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {[
                                {
                                    quote: "Posso changed our business. We went from paying £3k a month in commission to just a small monthly flat fee.",
                                    author: "Giuseppe M.",
                                    role: "Pizzeria Owner, London"
                                },
                                {
                                    quote: "The EPOS integration is flawless. Orders print in the kitchen automatically. No more manual entry errors.",
                                    author: "Sarah L.",
                                    role: "Coffee Shop Chain, Midlands"
                                },
                                {
                                    quote: "Our own branded app has built so much loyalty. Customers love ordering directly from us now.",
                                    author: "Ahmed K.",
                                    role: "Burger House Owner"
                                }
                            ].map((t, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
                                    <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
                                    <div>
                                        <p className="font-bold">{t.author}</p>
                                        <p className="text-slate-500 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <HelpCircle className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-slate-800">
                                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors py-6">
                                    Does Posso Ltd charge commission on orders?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400 leading-relaxed text-lg pb-6">
                                    No. Posso Ltd provides a flat-fee or subscription model, meaning you pay 0% commission on the orders you process.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-slate-800">
                                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors py-6">
                                    Can I integrate Posso with my existing Uber Eats and Deliveroo accounts?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400 leading-relaxed text-lg pb-6">
                                    Yes. Posso Ltd's system allows you to aggregate third-party orders so they print directly to your kitchen, streamlining your workflow while you build up your direct ordering channel.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-slate-800">
                                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors py-6">
                                    Is technical support included?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400 leading-relaxed text-lg pb-6">
                                    Absolutely. We offer UK-based support to ensure your online ordering system is running smoothly during your busiest hours.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -z-10" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold italic tracking-tight">
                                Ready to Switch to the <span className="text-primary italic">Best Online Ordering Software?</span>
                            </h2>
                            <p className="text-xl text-slate-400">
                                Don't let high fees hold your business back. Upgrade to Posso Ltd today and start keeping your hard-earned profits.
                            </p>
                            <div className="pt-4">
                                <SolutionEnquiryModal
                                    defaultSolutionId="online-ordering"
                                    trigger={
                                        <Button size="lg" className="h-14 px-10 text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 rounded-full transition-all hover:scale-105 active:scale-95">
                                            Get a Quote Now
                                        </Button>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
