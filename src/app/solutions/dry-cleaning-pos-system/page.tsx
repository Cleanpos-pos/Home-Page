import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ShoppingBag,
    Clock,
    Smartphone,
    Bell,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Truck,
    Shield
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Dry Cleaning POS System | CleanPos Laundry & Dry Cleaning Software UK',
    description: 'Transform your dry cleaning business with CleanPos. Automated garment tracking, SMS notifications, and secure payment integration for modern laundry services.',
    keywords: 'dry cleaning pos, laundry software, dry cleaning epos, garment tracking software, dry cleaning management system, CleanPos',
    alternates: {
        canonical: '/solutions/dry-cleaning-pos-system',
    },
    openGraph: {
        title: 'Dry Cleaning POS System UK | Laundry EPOS & Garment Tracking',
        description: 'Dry cleaning and laundry POS/EPOS with ticket and garment tracking, SMS ready-for-collection alerts, pickup and delivery, customer accounts, card payments, and multi-branch control.',
        url: 'https://posso.co.uk/solutions/dry-cleaning-pos-system',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Dry cleaning POS system UK with garment tracking, SMS collection alerts, and pickup and delivery management for laundry businesses',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dry Cleaning POS System UK | Laundry EPOS & Garment Tracking',
        description: 'Garment tracking, SMS ready-for-collection alerts, pickup and delivery, card payments, and multi-branch control for dry cleaners and laundries.',
        images: ['/og-image.png'],
    },
};

export default function DryCleaningPosPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "CleanPos Dry Cleaning ePOS",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android, Windows",
            "description": "Comprehensive ePOS system designed for dry cleaners and laundry businesses. Featuring garment tracking, automated customer alerts, and integrated payments.",
            "brand": {
                "@type": "Brand",
                "name": "CleanPos"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://posso.co.uk" },
                { "@type": "ListItem", "position": 2, "name": "Dry Cleaning POS", "item": "https://posso.co.uk/solutions/dry-cleaning-pos-system" }
            ]
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-white selection:bg-primary/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* PayPal SDK */}
            <Script
                src="https://www.paypal.com/sdk/js?client-id=ba_s&components=hosted-buttons&disable-funding=venmo"
                strategy="afterInteractive"
            />

            <Header />

            <main className="flex-1">
                <BreadcrumbNav items={[{ label: 'Dry Cleaning POS' }]} />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 text-center lg:text-left">
                                <Badge variant="outline" className="mb-6 border-primary/50 text-primary uppercase tracking-widest px-4 py-1 animate-fade-in">
                                    Revolutionizing Dry Cleaning
                                </Badge>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                                    Modern <span className="text-glow text-primary">Dry Cleaning</span> <br />
                                    POS Solutions
                                </h1>
                                <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                                    CleanPos provides the most advanced garment tracking and management system for dry cleaners. Streamline your workflow, delight customers with automated alerts, and grow your brand.
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <Button size="lg" asChild className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                                        <Link href="/contact">Get Started for Free</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 transition-all">
                                        View Demo Video
                                    </Button>
                                </div>
                            </div>

                            <div className="flex-1 relative">
                                <div className="glass-card p-4 rounded-[2.5rem] border border-white/10 shadow-2xl relative z-10 bg-slate-900/40 backdrop-blur-xl">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-800">
                                        <img
                                            src="/images/cleanpos-mockup.png"
                                            alt="CleanPos Dry Cleaning Dashboard"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Floating Stats */}
                                    <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border border-white/10 bg-slate-900/80 animate-bounce-subtle">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-green-500/20 p-3 rounded-full">
                                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-400">Garments Ready</div>
                                                <div className="text-xl font-bold">1,284 Today</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-20" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section with PayPal Buy Box */}
                <section className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto glass-card p-12 rounded-[3rem] border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Upgrade to CleanPos Pro</h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                                Unlock full multi-location support, automated SMS marketing, and priority support. Get the license that fits your business needs.
                            </p>

                            <div className="flex flex-col items-center justify-center gap-8 py-8">
                                <div className="p-8 bg-white/5 rounded-2xl border border-white/10 w-full max-w-md">
                                    <h3 className="text-xl font-bold mb-4">One-Time License Fee</h3>
                                    <div className="text-4xl font-bold text-primary mb-6">£199.00</div>
                                    <ul className="text-left space-y-3 mb-8 text-slate-300">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Full Garment Tracking</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Automated Notifications</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Detailed Analytics</li>
                                    </ul>

                                    {/* PayPal Container */}
                                    <div className="min-h-[150px] flex items-center justify-center bg-slate-950/30 rounded-xl p-4">
                                        <div id="paypal-container-W24E2YM2M474C"></div>
                                        <Script id="paypal-script" strategy="lazyOnload">
                                            {`
                        const renderPaypal = () => {
                          if (window.paypal && window.paypal.HostedButtons) {
                            window.paypal.HostedButtons({
                              hostedButtonId: "W24E2YM2M474C",
                            }).render("#paypal-container-W24E2YM2M474C");
                          } else {
                            setTimeout(renderPaypal, 500);
                          }
                        };
                        renderPaypal();
                      `}
                                        </Script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Efficiency</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">CleanPos handles the complexity so you can focus on providing the best service.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <ShoppingBag className="w-8 h-8 text-primary" />,
                                    title: "Smart Garment Tagging",
                                    desc: "Instantly tag items with heat-resistant barcodes or NFC tags. Never lose track of a garment again."
                                },
                                {
                                    icon: <Bell className="w-8 h-8 text-primary" />,
                                    title: "Automated Alerts",
                                    desc: "Send automatic SMS or Email notifications as soon as an order is ready for collection."
                                },
                                {
                                    icon: <Clock className="w-8 h-8 text-primary" />,
                                    title: "Priority Management",
                                    desc: "Manage express orders and deadlines with ease. Color-coded status updates keep you on schedule."
                                },
                                {
                                    icon: <Truck className="w-8 h-8 text-primary" />,
                                    title: "Delivery Driver App",
                                    desc: "Dedicated app for pickup and delivery services. Optimized routes and digital signatures."
                                },
                                {
                                    icon: <BarChart3 className="w-8 h-8 text-primary" />,
                                    title: "Business Intelligence",
                                    desc: "Comprehensive reports on revenue, top services, and staff performance available from anywhere."
                                },
                                {
                                    icon: <Shield className="w-8 h-8 text-primary" />,
                                    title: "Secure & Compliant",
                                    desc: "Fully PCI-DSS compliant payment processing and GDPR ready data management."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/40 transition-all group hover:-translate-y-2">
                                    <div className="mb-6 bg-white/5 p-4 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Clean Up Your Workflow?</h2>
                        <div className="max-w-2xl mx-auto mb-10">
                            <p className="text-xl text-slate-300">
                                Join hundreds of dry cleaners across the UK who have transformed their businesses with CleanPos. Start your 14-day free trial today.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button size="lg" className="h-16 px-12 text-xl bg-white text-slate-950 hover:bg-slate-200" asChild>
                                <Link href="/contact">Book a Free Demo</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-12 text-xl border-white/20 hover:bg-white/5" asChild>
                                <Link href="/contact">Contact Sales</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <FAQSection title="Dry Cleaning POS — Frequently Asked Questions" faqs={[
                    { question: 'What is a dry cleaning POS system and how is it different from a standard till?', answer: 'A dry cleaning POS system (also called a laundry EPOS) is built around garment tracking rather than simple product sales. Instead of just ringing up an item, it creates a ticket for each order, tags individual garments, tracks them through cleaning and pressing, and tells you exactly which items are ready for collection. You also get customer accounts, automated SMS alerts, card payments, and reporting — all tailored to dry cleaners and laundries.' },
                    { question: 'How does garment tracking work?', answer: 'Each garment is tagged with a barcode or heat-resistant NFC tag when it is booked in. Staff scan items at each stage — booked in, cleaned, pressed, and ready — so the system always knows the status and location of every garment. This eliminates lost items and lets you find any order in seconds.' },
                    { question: 'Can the system send SMS when an order is ready for collection?', answer: 'Yes. As soon as an order is marked ready, the system can automatically send a ready-for-collection SMS or email to the customer. This reduces phone calls, speeds up collections, and improves customer satisfaction without any manual effort from your staff.' },
                    { question: 'Does it support pickup and delivery rounds?', answer: 'Yes. The dry cleaning POS supports pickup and delivery with a driver app, optimised routes, and digital signatures on collection or drop-off. Orders booked in on a round flow straight into garment tracking just like counter orders.' },
                    { question: 'Can I manage multiple branches from one system?', answer: 'Yes. The laundry EPOS is multi-branch ready. You can manage several shops or processing sites under one account, transfer garments between locations, share customer accounts across branches, and view consolidated reporting for the whole business.' },
                    { question: 'How do customers pay, and are card payments included?', answer: 'Customers can pay by card, contactless, Apple Pay, Google Pay, or cash, and balances can be held against customer accounts for regulars and trade clients. Card payments are integrated directly into the POS with PCI-DSS compliant processing.' },
                ]} />
            </main>

            <Footer />
        </div>
    );
}
