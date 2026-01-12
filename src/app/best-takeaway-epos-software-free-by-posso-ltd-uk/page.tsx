import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
    Gift,
    Zap,
    CheckCircle2,
    ChevronRight,
    Star,
    ShieldCheck,
    Users,
    Smartphone,
    Sparkles,
    Search,
    ArrowRight
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

const targetKeyword = "Best Takeaway EPOS Software Free by Posso Ltd UK";

const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": targetKeyword,
    "operatingSystem": "Android, iOS, Web, Windows",
    "applicationCategory": "Restaurant Management System",
    "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
    },
    "description": "Start your takeaway business with the best free EPOS software by Posso Ltd UK. Full featured, 0% commission ordering, and easy setup - for £0/month.",
    "author": {
        "@type": "Organization",
        "name": "Posso Ltd"
    },
    "url": "https://posso.uk/best-takeaway-epos-software-free-by-posso-ltd-uk"
};

export const metadata: Metadata = {
    title: 'Best Takeaway EPOS Software Free by Posso Ltd UK | £0 Per Month',
    description: 'Launch your takeaway today with the best free EPOS software by Posso Ltd UK. Full features, zero monthly cost, and 0% commission ordering. Join for free.',
    alternates: {
        canonical: '/best-takeaway-epos-software-free-by-posso-ltd-uk',
    },
    keywords: "Free takeaway EPOS UK, £0 EPOS software, best free restaurant POS, Posso Ltd free software, commission-free ordering free epos",
};

export default function FreeTakeawayEposLandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#050505] text-slate-50 selection:bg-purple-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />

            <main className="flex-1">
                {/* Free Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),transparent_50%)]" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center gap-10 max-w-5xl mx-auto">
                            <div className="animate-in fade-in slide-in-from-top-6 duration-1000">
                                <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10 py-2 px-6 text-sm font-bold tracking-widest uppercase">
                                    <Gift className="w-4 h-4 mr-2" />
                                    No Contracts. No Hidden Fees. £0 per month.
                                </Badge>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white">
                                The {targetKeyword}
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium">
                                Yes, it's actually free. No trials, no catch. Launch your takeaway with a professional EPOS and commission-free ordering system for **£0 a month**.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <SolutionEnquiryModal
                                    defaultSolutionId="pos"
                                    trigger={
                                        <Button size="lg" className="h-14 px-10 text-xl bg-white text-black hover:bg-slate-200 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95 font-black uppercase tracking-tighter">
                                            Join Free Today <Sparkles className="ml-2 h-5 w-5 fill-current" />
                                        </Button>
                                    }
                                />
                                <div className="flex items-center gap-4 text-slate-400 font-bold">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Star key={i} className="w-5 h-5 fill-purple-500 text-purple-500" />
                                        ))}
                                    </div>
                                    <span>Rating 4.9/5 by 2k+ owners</span>
                                </div>
                            </div>

                            <div className="mt-16 relative w-full max-w-3xl mx-auto group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                                <img
                                    src="/images/posso_free_epos_signage.png"
                                    alt="Free takeaway EPOS software interface on a modern tablet"
                                    className="relative rounded-3xl border border-slate-800 shadow-2xl scale-100 group-hover:scale-[1.02] transition-transform duration-700"
                                />
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600 rounded-full flex flex-col items-center justify-center border-4 border-[#050505] rotate-12 shadow-2xl">
                                    <span className="text-sm font-bold leading-tight">ONLY</span>
                                    <span className="text-2xl font-black leading-tight">£0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-3xl md:text-6xl font-black">Everything You Need, <br /> For Zero Monthly Costs.</h2>
                            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Unlike "Lite" versions of other software, our free plan includes the core essentials to run a profitable business.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Full EPOS Access",
                                    desc: "Process sales, manage staff, and print receipts without limitations.",
                                    icon: Zap
                                },
                                {
                                    title: "Online Ordering",
                                    desc: "Your own web shop for collections and deliveries at 0% commission.",
                                    icon: Smartphone
                                },
                                {
                                    title: "Menu Sync",
                                    desc: "Update prices and items on the till and website simultaneously with one click.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Secure Data",
                                    desc: "Enterprise-grade security and daily cloud backups for your peace of mind.",
                                    icon: ChevronRight
                                }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-[2rem] border border-slate-800 bg-black hover:border-purple-500/50 transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Value Comparison */}
                <section className="py-24 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Finally, Software <br /> That's On Your Side.</h2>
                                <p className="text-lg text-slate-400">Aggregators charge you 30% per order. Other EPOS companies charge you £60+ per month. We charge you **nothing** for the software and commission.</p>

                                <ul className="space-y-4 font-bold">
                                    <li className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                        <span>No Monthly Rent</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                        <span>0% Order Commission</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                        <span>Keep 100% of Your Tips</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                        <span>Free 24/7 Digital Support</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-10 rounded-[3rem] bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 shadow-2xl relative">
                                <div className="relative z-10 space-y-8">
                                    <div className="flex justify-between items-center text-sm font-black uppercase tracking-widest text-purple-400">
                                        <span>Comparison</span>
                                        <span>Yearly Savings</span>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-lg font-bold">
                                                <span>Typical EPOS Cost</span>
                                                <span>£1,200+</span>
                                            </div>
                                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="w-full h-full bg-red-500" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-lg font-bold text-emerald-400">
                                                <span>Posso Free EPOS</span>
                                                <span>£0</span>
                                            </div>
                                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="w-0 h-full bg-emerald-500" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/10 text-center">
                                        <p className="text-3xl font-black">Save £1,000+ <br /> <span className="text-lg text-purple-400 font-bold uppercase italic">per year, per shop</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support Section */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-12">
                            <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 mb-4 animation-pulse">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black">Free Doesn't Mean On Your Own</h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-medium">
                                Our community and digital help center are open 24/7. Plus, we offer onboarding guides that make it easy to set up your menu and hardware in under 30 minutes.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-8">
                                {[
                                    { label: "Onboarding", icon: Search },
                                    { label: "Community", icon: Users },
                                    { label: "Updates", icon: Zap },
                                    { label: "Guides", icon: HelpCircle },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 underline decoration-purple-500/50 underline-offset-[20px]">Common Questions</h2>

                        <Accordion type="single" collapsible className="w-full gap-4 flex flex-col">
                            {[
                                {
                                    q: "Is it really free, or is there a catch?",
                                    a: "There is no catch. The core EPOS and online ordering software are completely free forever. We only earn if you choose to use our premium payment integration or buy hardware from us, which is entirely optional."
                                },
                                {
                                    q: "Can I use any hardware with the free software?",
                                    a: "Yes! Our free web-based software works on most modern iPads, Android tablets, and PC till systems. You are not locked into our hardware."
                                },
                                {
                                    q: "What if my takeaway grows and I need more features?",
                                    a: "That's exactly why we offer it for free! When you grow, you might want to upgrade to our 'Pro' tier for advanced multi-unit reporting, but the free version has everything you need to build those first £100k+ in sales."
                                }
                            ].map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="bg-slate-900/50 p-4 rounded-3xl border border-slate-800">
                                    <AccordionTrigger className="px-6 text-left text-xl font-black hover:text-purple-400 transition-all no-underline">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-4 font-medium italic">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final Heavyweight CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <div className="max-w-5xl mx-auto space-y-12">
                            <h2 className="text-5xl md:text-9xl font-black tracking-tighter text-white">
                                STOP PAYING. <br /> <span className="text-purple-500">START SELLING.</span>
                            </h2>
                            <div className="flex flex-col items-center gap-8">
                                <p className="text-2xl text-slate-400 max-w-2xl mx-auto italic font-medium leading-relaxed">
                                    Join the thousands of smart UK owners who have stopped paying monthly fees for software that should be free.
                                </p>
                                <SolutionEnquiryModal
                                    defaultSolutionId="pos"
                                    trigger={
                                        <Button size="lg" className="h-20 px-16 text-3xl font-black bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_100px_rgba(168,85,247,0.3)] rounded-full transition-all hover:scale-110 active:scale-95 group">
                                            GET STARTED FREE
                                            <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                                        </Button>
                                    }
                                />
                                <p className="text-sm font-black text-slate-600 uppercase tracking-[0.4em]">Zero Risk. Zero Commitment. Zero Charges.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
