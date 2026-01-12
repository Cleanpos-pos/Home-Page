import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
    QrCode,
    Smartphone,
    CreditCard,
    Zap,
    UtensilsCrossed,
    Printer,
    Users,
    TrendingUp,
    ShieldCheck,
    ArrowRight,
    HelpCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const targetKeyword = "Table Ordering App UK";

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": targetKeyword,
    "serviceType": "Food Service",
    "provider": {
        "@type": "Organization",
        "name": "Posso Ltd",
        "url": "https://posso.uk"
    },
    "description": "Speed up service and boost spend per head with the best table ordering app in the UK. 0% commission, seamless EPOS integration, and custom QR codes.",
    "areaServed": "Great Britain",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Table Ordering Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "QR Code Order & Pay"
                }
            }
        ]
    }
};

export const metadata: Metadata = {
    title: 'Best Table Ordering App UK | QR Code Order & Pay | Posso Ltd',
    description: 'Speed up service and boost spend per head with the best table ordering app in the UK. 0% commission, seamless EPOS integration, and custom QR codes. Book a demo.',
    alternates: {
        canonical: '/table-ordering-app-uk',
    },
    keywords: "QR code ordering system, dine-in ordering software, contactless order and pay, restaurant table service app, Posso Ltd EPOS integration",
};

export default function TableOrderingLandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-accent/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-8 text-left max-w-2xl">
                                <Badge variant="outline" className="w-fit border-accent/50 text-accent bg-accent/10 py-1 px-4">
                                    <QrCode className="w-3 h-3 mr-2" />
                                    CONTACTLESS QR ORDERING
                                </Badge>

                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent !leading-[1.1]">
                                    The Best {targetKeyword} for Fast, Contactless Service
                                </h1>

                                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                                    Turn tables faster and increase average order value with a seamless QR code "Order & Pay" system. No apps to download—just scan, order, and pay.
                                </p>

                                <div className="flex flex-wrap items-center gap-4">
                                    <SolutionEnquiryModal
                                        defaultSolutionId="table-ordering"
                                        trigger={
                                            <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-slate-950 font-bold shadow-xl shadow-accent/20 transition-all hover:scale-105 active:scale-95">
                                                Get Free QR Code Demo <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        }
                                    />
                                    <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 hover:bg-slate-800 transition-all">
                                        See It In Action
                                    </Button>
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-slate-500">Trusted by 500+ UK Hospitality Venues</p>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative h-[600px] rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                                    <img
                                        src="/images/posso_qr_scan_hero.png"
                                        alt="Smartphone scanning a QR code on a restaurant table"
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-accent" />
                                            </div>
                                            <p className="font-bold text-lg">Instant Menu Loading</p>
                                        </div>
                                        <p className="text-sm text-slate-300">No apps, no registration. Just instant access to your menu via scan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <img
                                    src="/images/posso_table_ordering_menu.png"
                                    alt="Posso Ltd Table Ordering App UK Interface"
                                    className="rounded-3xl border border-slate-800 shadow-2xl scale-95 hover:scale-100 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                    Why UK Hospitality is Switching to QR Table Ordering
                                </h2>
                                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                    <p>
                                        Staff shortages and rising costs are squeezing UK hospitality businesses. The Posso Ltd {targetKeyword} solves this by acting as a digital waiter that never calls in sick.
                                    </p>
                                    <p>
                                        By allowing customers to order and pay from their phones, you free up your front-of-house staff to focus on hospitality rather than admin. Whether you run a busy pub, a high-volume restaurant, or a hotel bar, our system ensures no customer is ever left waiting to order.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-2">
                                        <p className="text-4xl font-bold text-accent">+20%</p>
                                        <p className="text-sm text-slate-500 font-medium">Average Order Value</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-4xl font-bold text-primary">-15m</p>
                                        <p className="text-sm text-slate-500 font-medium">Faster Table Turns</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Powerful Features for Dine-In Success
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Built specifically for the unique demands of the UK dining landscape.
                        </p>
                    </div>

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Instant QR Code Access",
                                    desc: "Customers scan a QR code on their table to view the menu. No app download required, reducing friction.",
                                    icon: QrCode
                                },
                                {
                                    title: "Split Bill Functionality",
                                    desc: "Solves the payment headache for groups. Guests pay for their own items or split evenly in seconds.",
                                    icon: Users
                                },
                                {
                                    title: "Smart Upselling",
                                    desc: "Automatically suggests sides, drinks, and modifiers, boosting your spend per head by up to 20%.",
                                    icon: TrendingUp
                                },
                                {
                                    title: "Direct-to-Kitchen Printing",
                                    desc: "Orders flow straight to your bar or kitchen printers via our seamless ",
                                    link: { text: "EPOS integration", href: "/pos" },
                                    suffix: ".",
                                    icon: Printer
                                },
                                {
                                    title: "Table Number Recognition",
                                    desc: "Every order is automatically tagged with the correct table number, ensuring runners know exactly where to go.",
                                    icon: UtensilsCrossed
                                },
                                {
                                    title: "Contactless Payments",
                                    desc: "Built-in support for Apple Pay, Google Pay, and all major credit cards for a smooth checkout.",
                                    icon: CreditCard
                                }
                            ].map((f, i) => (
                                <div key={i} className="group p-8 rounded-3xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent group-hover:rotate-12 transition-transform">
                                        <f.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {f.desc}
                                        {f.link && (
                                            <Link href={f.link.href} className="text-accent hover:underline font-medium">
                                                {f.link.text}
                                            </Link>
                                        )}
                                        {f.suffix}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-slate-900 relative border-y border-slate-800">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Increase Revenue, Decrease Workload</h2>
                            <p className="text-lg text-slate-400">
                                Implementing the right table ordering app in the UK transforms your floor operations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                            <div className="bg-slate-950/50 p-10 rounded-3xl border border-slate-800 flex flex-col gap-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-primary/20 text-primary">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold">Turn Tables Faster</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Customers don't have to wait for a bill to be printed and brought to them. They pay instantly via Apple Pay or Google Pay when they are ready. This can save 10-15 minutes per table, allowing you to serve more guests during peak hours.
                                </p>
                                <img
                                    src="/images/posso_split_bill_payment.png"
                                    alt="Split bill payment interface on smartphone"
                                    className="mt-6 rounded-2xl shadow-xl"
                                />
                            </div>

                            <div className="bg-slate-950/50 p-10 rounded-3xl border border-slate-800 flex flex-col gap-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-accent/20 text-accent">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold">Solve Staffing Issues</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    With customers handling the transactional part of dining (ordering and paying), your staff can cover more tables with less stress. You can run a smooth service even on days when you are short-staffed.
                                </p>
                                <img
                                    src="/images/posso_kitchen_printer_table_order.png"
                                    alt="Kitchen printer outputting table order"
                                    className="mt-6 rounded-2xl shadow-xl h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="glass-card border border-accent/20 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] -z-0" />

                            <div className="relative z-10 text-center max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Posso Ltd Beats Generic Ordering Apps</h2>
                                <p className="text-xl text-slate-300 mb-12 italic leading-relaxed">
                                    Many "Order & Pay" apps charge a transaction fee on top of card processing, or they force customers to create an account with their platform.
                                </p>

                                <div className="grid md:grid-cols-3 gap-12 text-left">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-accent font-bold">
                                            <ShieldCheck className="w-5 h-5" />
                                            <span>0% Commission</span>
                                        </div>
                                        <p className="text-slate-400">You keep the profit. No hidden fees or per-order charges from us.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-accent font-bold">
                                            <UtensilsCrossed className="w-5 h-5" />
                                            <span>Your Brand, Not Ours</span>
                                        </div>
                                        <p className="text-slate-400">The digital menu looks and feels like your restaurant, with custom styling and logos.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-accent font-bold">
                                            <Users className="w-5 h-5" />
                                            <span>Data Ownership</span>
                                        </div>
                                        <p className="text-slate-400">Capture customer emails for your own marketing, not a third-party aggregator.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="flex items-center justify-center gap-3 mb-12">
                            <HelpCircle className="w-10 h-10 text-accent" />
                            <h2 className="text-3xl md:text-5xl font-bold italic tracking-tight underline decoration-accent/40 underline-offset-8">Frequently Asked Questions</h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-slate-950 p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-accent transition-colors py-6">
                                    Do customers need to download an app to order?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    No. Posso Ltd uses web-based technology. Customers simply scan the QR code with their standard phone camera, and the menu opens instantly in their browser.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="bg-slate-950 p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-accent transition-colors py-6">
                                    Can I use this for outdoor seating?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    Yes! It is perfect for beer gardens and outdoor terraces where Wi-Fi might be patchy for staff tablets but fine for customer 4G/5G. It saves staff from running back and forth.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-slate-950 p-2 rounded-2xl border border-slate-800">
                                <AccordionTrigger className="px-6 text-left text-lg font-bold hover:text-accent transition-colors py-6">
                                    Does it integrate with my existing card machine?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 text-slate-400 leading-relaxed text-lg pb-6">
                                    Our system handles payments digitally via the phone (using Stripe/payments integration). This means you need fewer physical card terminals, saving you money on rental fees.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 relative overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-accent/5 -z-10" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto space-y-10">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                                Modernise Your Service Today with the <span className="text-accent">Ultimate Table Ordering App.</span>
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Join the revolution of smart UK venues. Serve faster, earn more, and keep your staff happy with Posso Ltd.
                            </p>
                            <div className="pt-6">
                                <SolutionEnquiryModal
                                    defaultSolutionId="table-ordering"
                                    trigger={
                                        <Button size="lg" className="h-16 px-12 text-2xl font-bold bg-accent hover:bg-accent/90 text-slate-950 shadow-2xl shadow-accent/40 rounded-full transition-all hover:rotate-2 hover:scale-110 active:scale-95">
                                            Book a 15-Minute Demo
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
