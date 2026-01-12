import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
    Truck,
    MapPin,
    Smartphone,
    Zap,
    Clock,
    ShieldCheck,
    ArrowRight,
    HelpCircle,
    BarChart3,
    Users
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const targetKeyword = "Best EPOS Software for Takeaway Delivery by Posso Ltd UK";

const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": targetKeyword,
    "operatingSystem": "Web, iOS, Android, Windows",
    "applicationCategory": "Delivery Management System",
    "description": "The best EPOS software for takeaway delivery in the UK. Integrated driver tracking, 0% commission ordering, and real-time delivery management by Posso Ltd.",
    "author": {
        "@type": "Organization",
        "name": "Posso Ltd"
    },
    "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
    },
    "url": "https://posso.uk/best-epos-software-for-takeaway-delivery-by-posso-ltd-uk"
};

export const metadata: Metadata = {
    title: 'Best EPOS Software for Takeaway Delivery by Posso Ltd UK | 0% Commission',
    description: 'Streamline your delivery business with the best EPOS software for takeaway delivery by Posso Ltd UK. Integrated driver tracking and 0% commission ordering. Book a demo.',
    alternates: {
        canonical: '/best-epos-software-for-takeaway-delivery-by-posso-ltd-uk',
    },
    keywords: "Takeaway delivery software UK, driver tracking system, restaurant delivery management, 0% commission delivery app, Posso Ltd delivery features",
};

export default function TakeawayDeliveryLandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-blue-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1),transparent_50%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                            <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 py-1 px-4">
                                <Truck className="w-3 h-3 mr-2" />
                                COMPLETE DELIVERY ECOSYSTEM
                            </Badge>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent !leading-[1.1]">
                                The {targetKeyword}
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                                Take the guesswork out of delivery. From real-time driver tracking to 0% commission online ordering, Posso Ltd provides the ultimate toolkit for high-volume takeaway delivery operations.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <SolutionEnquiryModal
                                    defaultSolutionId="online-ordering"
                                    trigger={
                                        <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                                            Start Delivery Trial <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    }
                                />
                                <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 hover:bg-slate-800 transition-all">
                                    How It Works
                                </Button>
                            </div>

                            <div className="mt-12 relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                                <img
                                    src="/images/posso_takeaway_delivery_dashboard.png"
                                    alt="Posso Ltd Delivery Management Dashboard"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
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
                                    Stop Guessing, Start Delivering with Posso Ltd
                                </h2>
                                <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                                    <p>
                                        In the fast-paced UK delivery market, efficiency is the difference between profit and loss. The {targetKeyword} by Posso Ltd UK is designed to optimize every stage of the delivery journey.
                                    </p>
                                    <p>
                                        Whether you use your own drivers or a third-party fleet, our integrated software ensures orders are prepared on time, assigned correctly, and tracked until they reach the customer's doorstep.
                                    </p>
                                </div>
                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <MapPin className="w-3 h-3 text-blue-500" />
                                        </div>
                                        <span className="font-medium">Real-time GPS Driver Tracking</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <Clock className="w-3 h-3 text-blue-500" />
                                        </div>
                                        <span className="font-medium">Automated Prep-Time Calculation</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 blur-2xl bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all" />
                                <img
                                    src="/images/posso_delivery_driver_app.png"
                                    alt="Delivery driver using Posso mobile application"
                                    className="relative rounded-2xl border border-slate-800 shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for High-Volume Delivery</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            The tools you need to outscale the competition and reclaim your delivery profits.
                        </p>
                    </div>

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Smart Driver App",
                                    desc: "Assign orders to drivers in seconds. They receive optimized routes and customer details directly on their phones.",
                                    icon: Smartphone
                                },
                                {
                                    title: "0% Commission Growth",
                                    desc: "Every order through your direct channel is commission-free. Reclaim that 30% from aggregators.",
                                    icon: Zap
                                },
                                {
                                    title: "Customer Tracking Portal",
                                    desc: "Delight customers with live order tracking. Reduce 'where is my food' calls by up to 60%.",
                                    icon: MapPin
                                },
                                {
                                    title: "Intelligent Routing",
                                    desc: "Group orders geographically to save driver time and reduce fuel costs on every delivery run.",
                                    icon: ArrowRight
                                },
                                {
                                    title: "Automated Messaging",
                                    desc: "Send SMS updates for 'Order Prepared', 'Out for Delivery', and 'Near You' automatically.",
                                    icon: Users
                                },
                                {
                                    title: "Delivery Analytics",
                                    desc: "Monitor driver performance, average delivery times, and peak-hour heatmaps with ease.",
                                    icon: BarChart3
                                }
                            ].map((f, i) => (
                                <div key={i} className="group p-8 rounded-3xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                                        <f.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Experience Section */}
                <section className="py-24 bg-slate-900 overflow-hidden relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <img
                                    src="/images/posso_customer_tracking_food.png"
                                    alt="Happy customer tracking their food delivery"
                                    className="rounded-3xl border border-slate-800 shadow-2xl"
                                />
                            </div>
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight">Elevate Your Customer Experience</h2>
                                <p className="text-lg text-slate-400">
                                    Customers expect more than just food; they expect information. Posso Ltd provides a premium, branded tracking experience that rivals the multi-billion dollar aggregators.
                                </p>
                                <div className="grid gap-6">
                                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Branded Trust</h4>
                                            <p className="text-sm text-slate-500">Your logo and colors throughout the tracking journey—build brand loyalty, not portal loyalty.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Accurate ETAs</h4>
                                            <p className="text-sm text-slate-500">Real-time driver data powers precise delivery windows, managing customer expectations and increasing satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold italic tracking-tight underline decoration-blue-500 underline-offset-8">Takeaway Delivery FAQs</h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-slate-950 p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-blue-500 transition-colors py-6">
                                    Do I need dedicated drivers to use this?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    While the system is optimized for your own staff/fleet, you can also manually assign orders to any courier. The primary goal is tracking and reporting for your own business intelligence.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="bg-slate-950 p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-blue-500 transition-colors py-6">
                                    Is there a limit on how many drivers I can track?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    No. Our cloud-based dashboard is designed to scale with your business, from a single delivery bike to a fleet of fifty.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-slate-950 p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-blue-500 transition-colors py-6">
                                    How does the GPS tracking work?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    Drivers download the Posso Driver App. Once they start a delivery, their GPS location is securely transmitted to your manager dashboard and the customer's tracking link.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 relative overflow-hidden bg-slate-950">
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto space-y-10">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                                Scale Your Delivery Without the <span className="text-blue-500 underline decoration-blue-500/30">Commission Fees.</span>
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                Join 1,000+ UK takeaways that have reclaimed their profits with the best delivery EPOS software.
                            </p>
                            <div className="pt-6">
                                <SolutionEnquiryModal
                                    defaultSolutionId="online-ordering"
                                    trigger={
                                        <Button size="lg" className="h-16 px-12 text-2xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-500/40 rounded-full transition-all hover:scale-110 active:scale-95">
                                            Book Your 1-on-1 Demo
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
