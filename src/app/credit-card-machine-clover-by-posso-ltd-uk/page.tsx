import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
    CreditCard,
    Smartphone,
    Zap,
    ShieldCheck,
    ArrowRight,
    HelpCircle,
    BarChart3,
    Wifi,
    Lock,
    Package,
    CheckCircle2
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

const targetKeyword = "Best Clover Credit Card Machines by Posso Ltd UK";

const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Clover Credit Card Machines UK",
    "description": "Premium Clover Flex and Clover Mini credit card machines for UK businesses. Offering low merchant rates and seamless integration by Posso Ltd.",
    "brand": {
        "@type": "Brand",
        "name": "Clover"
    },
    "manufacturer": {
        "@type": "Organization",
        "name": "Fiserv"
    },
    "author": {
        "@type": "Organization",
        "name": "Posso Ltd"
    },
    "url": "https://posso.uk/credit-card-machine-clover-by-posso-ltd-uk"
};

export const metadata: Metadata = {
    title: 'Best Clover Credit Card Machines by Posso Ltd UK | Low Merchant Rates',
    description: 'Get the best Clover credit card machines for your UK business. Clover Flex, Clover Mini, and integrated payment solutions by Posso Ltd. Save on merchant fees today.',
    alternates: {
        canonical: '/credit-card-machine-clover-by-posso-ltd-uk',
    },
    keywords: "Clover Flex UK, Clover Mini credit card machine, Clover payment terminal, integrated card machine, Posso Ltd payments, low rate credit card machines",
};

export default function CloverCardsLandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-stone-950 text-stone-50 selection:bg-emerald-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center gap-10 max-w-4xl mx-auto">
                            <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10 py-1 px-4">
                                <CreditCard className="w-3 h-3 mr-2" />
                                AUTHORIZED CLOVER SOLUTIONS PARTNER
                            </Badge>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-stone-400 bg-clip-text text-transparent !leading-[1.1]">
                                The {targetKeyword}
                            </h1>

                            <p className="text-lg md:text-xl text-stone-400 max-w-2xl leading-relaxed">
                                Experience the power of Clover Flex and Clover Mini. More than just a card machine—it's a complete toolkit to accept payments, track sales, and grow your business.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <SolutionEnquiryModal
                                    defaultSolutionId="credit-card-machines"
                                    trigger={
                                        <Button size="lg" className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95">
                                            Get a Personalised Quote <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    }
                                />
                                <Button size="lg" variant="outline" className="h-12 px-8 border-stone-700 bg-stone-900/50 backdrop-blur-sm text-stone-100 hover:bg-stone-800 transition-all">
                                    Compare Models
                                </Button>
                            </div>

                            <div className="mt-16 relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl group">
                                <img
                                    src="/images/posso_clover_flex_hospitality.png"
                                    alt="Clover Flex being used for a restaurant payment"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 uppercase tracking-widest">
                                    <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-emerald-400" /> End-to-End Encryption</div>
                                    <div className="flex items-center gap-2"><Wifi className="w-4 h-4 text-emerald-400" /> 4G & Wi-Fi Enabled</div>
                                    <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-emerald-400" /> Android Powered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Hardware Section */}
                <section className="py-24 bg-stone-900/40">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-24 items-center">
                            <div className="space-y-8">
                                <Badge className="bg-emerald-500 text-white">THE ALL-IN-ONE SOLUTION</Badge>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Clover Mini: Small but Mighty</h2>
                                <p className="text-lg text-stone-400 leading-relaxed">
                                    Don't let the compact size fool you. Clover Mini is powerful enough to manage your entire business, from inventory and staff management to advanced reporting—all from a single countertop device.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Built-in printer and scanner",
                                        "Accepts chip, swipe, and contactless",
                                        "Full-size screen for customer engagement",
                                        "Seamlessly syncs with Clover Flex"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <SolutionEnquiryModal
                                        defaultSolutionId="credit-card-machines"
                                        trigger={
                                            <Button variant="link" className="text-emerald-400 p-0 text-lg hover:text-emerald-300 font-bold group">
                                                Explore Clover Mini Features <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 blur-3xl bg-emerald-500/10 rounded-full" />
                                <img
                                    src="/images/posso_clover_mini_retail.png"
                                    alt="Clover Mini on a retail counter"
                                    className="relative rounded-3xl border border-stone-800 shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-24 items-center">
                            <div className="order-2 md:order-1 relative">
                                <img
                                    src="/images/posso_clover_integration_epos.png"
                                    alt="Clover and Posso EPOS integration"
                                    className="rounded-3xl border border-stone-800 shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 p-6 bg-emerald-600 rounded-3xl shadow-2xl max-w-xs border border-white/20">
                                    <p className="text-sm font-bold text-white italic">"Payments used to be our bottleneck. Now, with Clover and Posso, it's the smoothest part of our service."</p>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Seamless Posso Integration</h2>
                                <p className="text-lg text-stone-400 leading-relaxed">
                                    Tired of manual entry errors? Our Clover solutions integrate directly with your Posso EPOS software. Push values to the card machine automatically and reconcile your end-of-day reports in seconds.
                                </p>
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
                                        <Zap className="w-8 h-8 text-emerald-500 mb-3" />
                                        <h4 className="font-bold mb-1">Fast Checkout</h4>
                                        <p className="text-sm text-stone-500">Zero lag between EPOS and Card Machine.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
                                        <BarChart3 className="w-8 h-8 text-emerald-500 mb-3" />
                                        <h4 className="font-bold mb-1">Unified Data</h4>
                                        <p className="text-sm text-stone-500">All payment data in one dashboard.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="py-24 bg-stone-900/60 relative overflow-hidden">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
                            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                                <Lock className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Enterprise-Grade Security</h2>
                            <p className="text-xl text-stone-400 max-w-3xl leading-relaxed">
                                Every Clover transaction is protected by end-to-end encryption and data tokenisation. We meet the highest PCI compliance standards so you and your customers can trade with total confidence.
                            </p>
                            <img
                                src="/images/posso_clover_payment_security.png"
                                alt="Fintech security visualization for Clover cards"
                                className="w-full max-w-2xl rounded-[3rem] shadow-2xl border border-emerald-500/20"
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl font-sans">
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tighter">Everything You Need to Know</h2>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-stone-900 p-2 rounded-2xl border border-stone-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-emerald-500 transition-colors py-6">
                                    What is the difference between Clover Flex and Clover Mini?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-stone-400 leading-relaxed text-lg pb-6">
                                    Clover Flex is handheld and designed for mobility (perfect for table service or queues), while Clover Mini is a stationary powerhouse designed for your main counter with a larger screen for staff and customers.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="bg-stone-900 p-2 rounded-2xl border border-stone-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-emerald-500 transition-colors py-6">
                                    How much are the merchant rates?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-stone-400 leading-relaxed text-lg pb-6">
                                    At Posso Ltd, we offer bespoke pricing. Because we understand the UK hospitality and retail sectors, we can often match or beat your current processing rates while providing better hardware.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-stone-900 p-2 rounded-2xl border border-stone-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-emerald-500 transition-colors py-6">
                                    Is setup difficult?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-stone-400 leading-relaxed text-lg pb-6">
                                    Not at all. Your Clover devices arrive pre-configured. Just connect to Wi-Fi, login, and you're ready to take payments. Our team provides remote support for the initial setup.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-emerald-600">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                                Ready for Smarter, <br /> Faster Payments?
                            </h2>
                            <div className="pt-4 flex flex-col items-center gap-8">
                                <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed">
                                    Upgrade to Clover and Posso Ltd today. Join the community of UK businesses driving growth through better technology.
                                </p>
                                <SolutionEnquiryModal
                                    defaultSolutionId="credit-card-machines"
                                    trigger={
                                        <Button size="lg" className="h-16 px-12 text-2xl font-bold bg-stone-950 text-white hover:bg-black rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95">
                                            Get Your Free Clover Quote
                                        </Button>
                                    }
                                />
                                <div className="flex gap-8 text-white/60 font-medium pt-4">
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> No Hidden Fees</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> UK Based Support</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Next-Day Deposits</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
