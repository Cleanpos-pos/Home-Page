import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
    Coffee,
    Smartphone,
    Zap,
    CheckCircle2,
    ArrowRight,
    MonitorPlay,
    BarChart3,
    ShieldCheck,
    HelpCircle,
    Users,
    UtensilsCrossed
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

const targetKeyword = "Best POS System for Coffee Shop UK by Posso Ltd UK";

const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": targetKeyword,
    "operatingSystem": "Android, iOS, Web, Windows",
    "applicationCategory": "Cafe Management System",
    "description": "Streamline your cafe with the best POS system for coffee shops in the UK by Posso Ltd. Integrated digital loyalty, KDS for baristas, and smart inventory management.",
    "author": {
        "@type": "Organization",
        "name": "Posso Ltd"
    },
    "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
    },
    "url": "https://posso.uk/best-best-pos-system-for-coffee-shop-uk-by-posso-ltd-uk"
};

export const metadata: Metadata = {
    title: 'Best POS System for Coffee Shop UK by Posso Ltd UK | Digital Loyalty',
    description: 'Boost your cafe efficiency with the best POS system for coffee shops in the UK. Integrated digital loyalty, KDS, and 0% commission ordering by Posso Ltd. Book a demo.',
    alternates: {
        canonical: '/best-best-pos-system-for-coffee-shop-uk-by-posso-ltd-uk',
    },
    keywords: "Coffee shop POS UK, cafe management software, barista kitchen display system, digital coffee loyalty card, Posso Ltd cafe features, best till for coffee shop",
};

export default function CoffeeShopLandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#0c0a09] text-stone-50 selection:bg-amber-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,66,18,0.1),transparent_50%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center gap-10 max-w-4xl mx-auto">
                            <Badge variant="outline" className="border-amber-600/50 text-amber-500 bg-amber-500/10 py-1.5 px-5 text-sm font-semibold tracking-wide">
                                <Coffee className="w-4 h-4 mr-2" />
                                POWERING THE UK'S INDEPENDENT CAFES
                            </Badge>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-b from-white to-stone-500 bg-clip-text text-transparent !leading-[1.1]">
                                The {targetKeyword}
                            </h1>

                            <p className="text-xl md:text-2xl text-stone-400 max-w-2xl leading-relaxed font-medium">
                                Speed up your morning rush with a POS system built for baristas. Integrated loyalty, smart modifiers, and real-time inventory—all with **0% commission**.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <SolutionEnquiryModal
                                    defaultSolutionId="pos"
                                    trigger={
                                        <Button size="lg" className="h-14 px-10 text-lg bg-amber-700 hover:bg-amber-800 text-white shadow-2xl shadow-amber-900/30 transition-all hover:scale-105 active:scale-95 font-bold">
                                            Book Your Cafe Demo <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    }
                                />
                                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-stone-800 bg-stone-900/50 backdrop-blur-sm text-stone-100 hover:bg-stone-800 transition-all font-semibold">
                                    View Hardware
                                </Button>
                            </div>

                            <div className="mt-16 relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-stone-800 shadow-2xl group">
                                <img
                                    src="/images/posso_coffee_shop_hero.png"
                                    alt="Modern UK coffee shop with Posso EPOS terminal"
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-70" />
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                    <div className="bg-black/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 max-w-md hidden md:block">
                                        <p className="text-amber-500 font-black mb-3 uppercase tracking-widest text-sm">Case Study</p>
                                        <p className="text-stone-200 text-lg font-medium italic">"Posso transformed our morning workflow. We now serve 20% more customers during the peak hour rush."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cafe Specific Intro */}
                <section className="py-24 bg-stone-900/20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                                    Built for the <span className="text-amber-600">Morning Rush</span>
                                </h2>
                                <div className="space-y-6 text-stone-400 text-lg leading-relaxed font-medium">
                                    <p>
                                        Coffee shops face unique challenges. You need to handle complex modifiers (Oat, Soya, Extra Shot, Decaf) in seconds while maintaining a conversation with your regular customers.
                                    </p>
                                    <p>
                                        The {targetKeyword} by Posso Ltd is stripped of bloat and optimized for touch-speed. Our **Integrated Digital Loyalty** means no more lost paper cards, and your baristas get clear instructions on a dedicated **Coffee KDS**.
                                    </p>
                                </div>
                                <div className="flex gap-6 p-8 rounded-3xl bg-amber-600/5 border border-amber-600/10">
                                    <Zap className="w-10 h-10 text-amber-600 shrink-0" />
                                    <div>
                                        <p className="font-bold text-xl">Lightning Fast Checkout</p>
                                        <p className="text-stone-400">Complete complex orders 30% faster than standard retail POS systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 blur-3xl bg-amber-600/10 rounded-full" />
                                <img
                                    src="/images/posso_coffee_kds_barista.png"
                                    alt="Barista using Coffee KDS system"
                                    className="relative rounded-[2.5rem] border border-stone-800 shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features Grid */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Everything Your Cafe Needs</h2>
                        <p className="text-stone-500 text-xl max-w-2xl mx-auto font-medium italic">
                            Features designed specifically for the UK's specialty coffee scene.
                        </p>
                    </div>

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Smart Milk Modifiers",
                                    desc: "Instantly adjust prices and stock for dairy alternatives and syrup shots.",
                                    icon: UtensilsCrossed
                                },
                                {
                                    title: "Digital Loyalty Portal",
                                    desc: "Automatically track customer visits and offer '10th coffee free' rewards via smartphone.",
                                    icon: Smartphone
                                },
                                {
                                    title: "Barista KDS",
                                    desc: "Clear, digital drink tickets that split by station (Grinder, Milk, Food).",
                                    icon: MonitorPlay
                                },
                                {
                                    title: "Precision Inventory",
                                    desc: "Track coffee beans by the gram. Get low-stock alerts for milk and disposables.",
                                    icon: BarChart3
                                },
                                {
                                    title: "Staff Performance",
                                    desc: "Identify your fastest baristas and track upsell performance on pastries and cakes.",
                                    icon: Users
                                },
                                {
                                    title: "Cloud Reporting",
                                    desc: "Access your cafe's sales, labor costs, and profit margins from anywhere, on any device.",
                                    icon: ShieldCheck
                                }
                            ].map((f, i) => (
                                <div key={i} className="group p-10 rounded-[2.5rem] border border-stone-800 bg-stone-900/30 hover:bg-stone-900/60 transition-all hover:-translate-y-2">
                                    <div className="w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center mb-8 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                                        <f.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                                    <p className="text-stone-400 leading-relaxed font-medium">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visual Detail Sections */}
                <section className="py-24 bg-gradient-to-b from-transparent to-stone-900/40">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-24 items-center">
                            <div className="order-2 md:order-1">
                                <img
                                    src="/images/posso_coffee_inventory_beans.png"
                                    alt="Coffee shop inventory management system"
                                    className="rounded-[2.5rem] border border-stone-800 shadow-2xl"
                                />
                            </div>
                            <div className="order-1 md:order-2 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black">Profitability Down to <br /><span className="text-amber-600 font-serif italic text-6xl">The Last Bean</span></h2>
                                <p className="text-xl text-stone-400 leading-relaxed">
                                    Our smart inventory system takes the pain out of stocktakes. Automatically track consumption of beans, milk, and cups, and place supplier orders with a single tap before you run out.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Automated COGS (Cost of Goods Sold) tracking",
                                        "Ingredient-level waste management",
                                        "Easy 'Recipe' management for specialty drinks"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                            <span className="font-bold text-stone-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Loyalty Section */}
                <section className="py-24 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-stone-900 border border-stone-800 rounded-[3rem] p-12 md:p-20 flex flex-col md:grid md:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <Badge className="bg-amber-700 text-white font-black px-4 py-1">ENGAGEMENT BOOST</Badge>
                                <h2 className="text-4xl md:text-6xl font-black leading-[0.9]">Turn Your Visitors into <span className="text-amber-500 italic">Die-Hard Fans</span></h2>
                                <p className="text-xl text-stone-400 leading-relaxed font-medium">
                                    Launched as part of the {targetKeyword}, our digital loyalty program increases visit frequency by an average of 35%. Your branded cafe app lives on your customer's home screen.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                    {[
                                        "Digital Stamp Cards",
                                        "Personalized Offers",
                                        "Push Notifications",
                                        "Direct Web Ordering"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-10 bg-amber-600 rounded-full" />
                                            <span className="font-black uppercase tracking-tighter text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative group perspective-1000">
                                <img
                                    src="/images/posso_coffee_digital_loyalty.png"
                                    alt="Digital coffee loyalty card interface"
                                    className="rounded-[2.5rem] border border-stone-800 shadow-2xl transition-all duration-700 group-hover:rotate-y-12"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-stone-900/30">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="flex flex-col items-center text-center gap-4 mb-16">
                            <HelpCircle className="w-12 h-12 text-amber-600" />
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Cafe POS Expert Answers</h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-[#0c0a09] p-4 rounded-3xl border border-stone-800">
                                <AccordionTrigger className="px-6 text-left text-xl font-bold hover:text-amber-500 transition-colors py-6">
                                    Can baristas manage the POS during the morning rush?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-stone-400 leading-relaxed text-lg pb-6 font-medium italic">
                                    Yes. The interface is designed for high-speed use with larger touch targets and a simplified layout. Most baristas are fully trained and comfortable using it in under 15 minutes.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="bg-[#0c0a09] p-4 rounded-3xl border border-stone-800">
                                <AccordionTrigger className="px-6 text-left text-xl font-bold hover:text-amber-500 transition-colors py-6">
                                    Does the loyalty system require a physical card?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-stone-400 leading-relaxed text-lg pb-6 font-medium italic">
                                    No. It's 100% digital. Customers simply scan a QR code at the till to collect stamps or redeem rewards, keeping their wallet light and your data organized.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-[#0c0a09] p-4 rounded-3xl border border-stone-800">
                                <AccordionTrigger className="px-6 text-left text-xl font-bold hover:text-amber-500 transition-colors py-6">
                                    How does the inventory track different milk types?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-stone-400 leading-relaxed text-lg pb-6 font-medium italic">
                                    When a barista selects 'Oat' or 'Almond' as a modifier, the system automatically adjusts the stock level for that specific ingredient, giving you an accurate picture of your dairy/non-dairy usage.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Final Impact CTA */}
                <section className="py-32 relative overflow-hidden bg-amber-900">
                    <div className="absolute inset-0 bg-black/20 -z-10" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <h2 className="text-5xl md:text-9xl font-black tracking-tighter text-white uppercase leading-[0.8]">
                                SCALE YOUR <br /> <span className="text-amber-400">CAFE EMPIRE.</span>
                            </h2>
                            <p className="text-2xl text-amber-100 max-w-2xl mx-auto font-medium italic">
                                From a single specialty cart to a nationwide chain, the best cafe POS system by Posso Ltd grows with you.
                            </p>
                            <div className="pt-8">
                                <SolutionEnquiryModal
                                    defaultSolutionId="pos"
                                    trigger={
                                        <Button size="lg" className="h-20 px-16 text-3xl font-black bg-white text-amber-900 hover:bg-stone-50 shadow-[0_0_100px_rgba(251,191,36,0.3)] transition-all hover:scale-110 active:scale-95 rounded-full uppercase tracking-tighter">
                                            Speak to a Cafe Expert
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
