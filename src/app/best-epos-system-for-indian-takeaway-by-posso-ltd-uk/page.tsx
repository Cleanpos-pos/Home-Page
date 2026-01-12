import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2,
    ArrowRight,
    Smartphone,
    Zap,
    PhoneCall,
    MapPin,
    Printer,
    MonitorPlay,
    BarChart3,
    ShieldCheck,
    HelpCircle,
    Clock3
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

const targetKeyword = "Best EPOS System for Indian Takeaway by Posso Ltd UK";

const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": targetKeyword,
    "operatingSystem": "Windows, Android, iOS, Web",
    "applicationCategory": "Restaurant Management System",
    "description": "Grow your Indian takeaway with the best EPOS system by Posso Ltd UK. Integrated online ordering, caller ID, postcode delivery management, and 0% commission.",
    "author": {
        "@type": "Organization",
        "name": "Posso Ltd"
    },
    "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
    },
    "url": "https://posso.uk/best-epos-system-for-indian-takeaway-by-posso-ltd-uk"
};

export const metadata: Metadata = {
    title: 'Best EPOS System for Indian Takeaway by Posso Ltd UK | 0% Commission',
    description: 'Grow your Indian takeaway with the best EPOS system by Posso Ltd UK. Integrated online ordering, caller ID, postcode delivery management, and 0% commission. Book a demo.',
    alternates: {
        canonical: '/best-epos-system-for-indian-takeaway-by-posso-ltd-uk',
    },
    keywords: "Indian takeaway EPOS UK, takeaway management software, kitchen display system for curries, postcode delivery management, Posso Ltd Indian takeaway, Indian restaurant EPOS",
};

export default function IndianTakeawayLandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#0f0a0a] text-slate-50 selection:bg-orange-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.1),transparent_50%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <Badge variant="outline" className="border-orange-500/50 text-orange-500 bg-orange-500/10 py-1 px-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                                <Zap className="w-3 h-3 mr-2" />
                                DEDICATED TO UK INDIAN HOSPITALITY
                            </Badge>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent !leading-[1.1]">
                                The {targetKeyword}
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                Take full control of your Indian takeaway. Manage phone orders, online deliveries, and walk-ins with a system built for speed, accuracy, and 0% commission.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <SolutionEnquiryModal
                                    defaultSolutionId="pos"
                                    trigger={
                                        <Button size="lg" className="h-12 px-8 bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-900/20 transition-all hover:scale-105 active:scale-95">
                                            Book Your Free Demo <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    }
                                />
                                <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 hover:bg-slate-800 transition-all">
                                    See Features
                                </Button>
                            </div>

                            <div className="mt-16 relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                                <img
                                    src="/images/posso_indian_takeaway_hero.png"
                                    alt="Modern Indian takeaway interior with Posso EPOS system"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a0a] via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                    <div className="text-left bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-md">
                                        <p className="text-orange-500 font-bold mb-2">INTEGRATED EVERYTHING</p>
                                        <p className="text-sm text-slate-300 italic">"The Posso system handles our busy Friday nights perfectly. We've saved thousands in commission fees."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-24 bg-slate-900/20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                    Designed for the Unique Vibe of Indian Takeaways
                                </h2>
                                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                    <p>
                                        Indian takeaways operate at a different speed. Between managing phone orders, delivery drivers, and complex menu modifiers, you need an EPOS that can keep up.
                                    </p>
                                    <p>
                                        The {targetKeyword} by Posso Ltd is not just a till; it's a complete management hub. From **Caller ID** that recognizes customers instantly to **automated postcode delivery mapping**, we've built every feature with Indian takeaway owners in mind.
                                    </p>
                                </div>
                                <div className="flex gap-4 p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10">
                                    <Clock3 className="w-6 h-6 text-orange-500 shrink-0" />
                                    <div>
                                        <p className="font-bold">Fast-Track Your Service</p>
                                        <p className="text-sm text-slate-400">Reduce average order time by 45% during peak periods.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-1 blur-3xl bg-orange-500/10 rounded-full" />
                                <img
                                    src="/images/posso_caller_id_delivery.png"
                                    alt="Caller ID and delivery management features"
                                    className="relative rounded-3xl border border-slate-800 shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Takeaway Management Re-imagined</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Built-in features that specifically enhance Indian takeaway operations.
                        </p>
                    </div>

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Caller ID & Order History",
                                    desc: "Identify regular customers instantly. View their last 5 orders and 'Re-order' in a single tap.",
                                    icon: PhoneCall
                                },
                                {
                                    title: "Postcode Delivery Management",
                                    desc: "Automated delivery fees based on distance. Assign drivers and track delivery status in real-time.",
                                    icon: MapPin
                                },
                                {
                                    title: "Kitchen Display (KDS)",
                                    desc: "Modern digital tickets for the kitchen. Filter by category (Tandoor, Curries, Sides) for maximum efficiency.",
                                    icon: MonitorPlay
                                },
                                {
                                    title: "0% Commission Online Ordering",
                                    desc: "Launch your own branded web shop. Stop paying 30% to Just Eat and keep 100% of your profits.",
                                    icon: Zap
                                },
                                {
                                    title: "Complex Menu Management",
                                    desc: "Easily handle 'Meal Deals', 'Set Dinners', and complex modifiers (Medium, Hot, Extra Spice).",
                                    icon: BarChart3
                                },
                                {
                                    title: "Multi-Location Support",
                                    desc: "Manage multiple takeaways from a single dashboard. Centralized menu and stock control.",
                                    icon: ShieldCheck
                                }
                            ].map((f, i) => (
                                <div key={i} className="group p-8 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all hover:-translate-y-2">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                                        <f.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-gradient-to-b from-transparent to-[#1a0f0f]">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="order-2 md:order-1">
                                <img
                                    src="/images/posso_kitchen_display_indian.png"
                                    alt="Kitchen Display System (KDS) for Indian dishes"
                                    className="rounded-3xl border border-slate-800 shadow-2xl"
                                />
                            </div>
                            <div className="order-1 md:order-2 space-y-12">
                                <div className="max-w-2xl">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Revolutionary Kitchen Efficiency</h2>
                                    <p className="text-lg text-slate-400 leading-relaxed">
                                        Say goodbye to lost paper tickets and misread handwriting. Our KDS streamlines the cooking process, ensuring every Tikka Masala and Korma is prepared perfectly.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                                            <Printer className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Automated Ticket Sorting</h4>
                                            <p className="text-slate-400">Automatically splits orders between the grill, pans, and packing stations.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                                            <BarChart3 className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Real-time Performance Reports</h4>
                                            <p className="text-slate-400">Track preparation times and identify bottlenecks during your busiest shifts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mobile App Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Badge className="bg-orange-500 text-white">MOBILE ORDERING</Badge>
                                <h2 className="text-3xl md:text-5xl font-bold">Your Direct Digital Front Door</h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    Launching the {targetKeyword} includes a custom-branded web shop and mobile app. Your customers order directly from you, and the data stays with YOU.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "0% Commission on every order",
                                        "Automatic Customer Loyalty points",
                                        "Push notifications for weekly specials",
                                        "Seamless integration with your EPOS"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative group">
                                <img
                                    src="/images/posso_indian_mobile_ordering.png"
                                    alt="Custom Indian takeaway mobile ordering app interface"
                                    className="rounded-3xl border border-slate-800 shadow-2xl scale-105 group-hover:rotate-1 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="flex items-center justify-center gap-3 mb-12">
                            <HelpCircle className="w-10 h-10 text-orange-500" />
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-[#0f0a0a] p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-orange-500 transition-colors py-6">
                                    Is the Indian takeaway menu difficult to set up?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    Not at all. We handle the initial menu upload for you. Our system is designed to handle complex Indian menus with multiple spice levels, meal deals, and modifiers.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="bg-[#0f0a0a] p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-orange-500 transition-colors py-6">
                                    How does the Caller ID work?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    Our system integrates with standard phone lines. When a customer calls, their details and previous orders pop up on the screen instantly, allowing you to greet them by name and take orders in seconds.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-[#0f0a0a] p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-orange-500 transition-colors py-6">
                                    Can I manage my own delivery drivers?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    Yes. The system includes a dedicated driver management module. You can assign orders to specific drivers, track estimated times, and calculate delivery earnings automatically.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="bg-[#0f0a0a] p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-orange-500 transition-colors py-6">
                                    Does Posso charge commission on online orders?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    No. We believe you should keep your hard-earned profits. We offer a flat-fee subscription model with 0% commission on orders processed through your branded website or app.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 relative overflow-hidden bg-orange-600">
                    <div className="absolute inset-0 bg-black/10 -z-10" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto space-y-10">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
                                Take Your Indian Takeaway to the <span className="underline decoration-black/30 underline-offset-8">Next Level.</span>
                            </h2>
                            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                                Ready to reclaim your profits and streamline your service? Join the UK's most successful takeaway owners.
                            </p>
                            <div className="pt-6">
                                <SolutionEnquiryModal
                                    defaultSolutionId="pos"
                                    trigger={
                                        <Button size="lg" className="h-16 px-12 text-2xl font-bold bg-white text-orange-600 hover:bg-orange-50 shadow-2xl transition-all hover:scale-110 active:scale-95 rounded-full">
                                            Get Your Free Quote Now
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
