import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Monitor,
    MapPin,
    Truck,
    CreditCard,
    Settings,
    ShieldCheck,
    Zap,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Self-Service Kiosk UK | UK Manufacturers & Software for Kiosks',
    description: 'Looking for a self-service kiosk in the UK? POSSO is the leading provider of kiosk hardware and software solutions for restaurants, retail, and healthcare.',
    keywords: 'self service kiosk uk, self-service kiosk uk, self service kiosk manufacturers uk, self-service revolution uk, uk kiosk installations',
    alternates: {
        canonical: '/solutions/self-service-kiosk-uk',
    },
    openGraph: {
        title: 'Self-Service Kiosk UK | UK Manufacturers & Software for Kiosks',
        description: 'POSSO is a leading UK provider of self-service kiosk hardware and software for restaurants, retail and hospitality. Nationwide installation, support and finance.',
        url: 'https://posso.co.uk/solutions/self-service-kiosk-uk',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'POSSO self-service kiosk UK hardware and software for restaurants and retail',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Self-Service Kiosk UK | UK Manufacturers & Software for Kiosks',
        description: 'POSSO is a leading UK provider of self-service kiosk hardware and software for restaurants, retail and hospitality. Nationwide installation, support and finance.',
        images: ['/og-image.png'],
    },
};

export default function KioskUkPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Self-Service Kiosk Solutions",
            "provider": {
                "@type": "LocalBusiness",
                "name": "POSSO LTD",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "UK"
                }
            },
            "areaServed": "United Kingdom",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Kiosk Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Kiosk Hardware Installation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Kiosk Software Development"
                        }
                    }
                ]
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://posso.co.uk" },
                { "@type": "ListItem", "position": 2, "name": "Self-Service Kiosks UK", "item": "https://posso.co.uk/solutions/self-service-kiosk-uk" }
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
                <BreadcrumbNav items={[{ label: 'Self-Service Kiosks UK' }]} />
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex justify-center mb-6">
                                <Badge variant="secondary" className="flex items-center gap-2 px-4 py-1.5 text-sm font-bold bg-primary/10 text-primary border-primary/20">
                                    <MapPin className="w-4 h-4" /> SERVING THE ENTIRE UNITED KINGDOM
                                </Badge>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 gradient-text leading-tight">
                                Self-Service Kiosk <br /><span className="text-white">Solutions in the UK</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
                                POSSO is the UK's premier provider of **self-service kiosk uk** terminals and software. We deliver robust, reliable, and aesthetically stunning kiosks to businesses nationwide.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" asChild className="h-14 px-10 text-lg">
                                    <Link href="/contact">Book Your UK Site Survey</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="h-14 px-10 text-lg">
                                    <Link href="/self-order-kiosks">Browse Terminals</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UK Specific Benefits */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: <Truck className="w-12 h-12 text-primary" />,
                                    title: "Fast UK Distribution",
                                    desc: "In-stock hardware ready for immediate dispatch and installation across England, Scotland, Wales, and NI."
                                },
                                {
                                    icon: <Settings className="w-12 h-12 text-primary" />,
                                    title: "On-Site UK Support",
                                    desc: "Our nationwide team of engineers provides rapid on-site maintenance and support whenever you need it."
                                },
                                {
                                    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
                                    title: "FCA & PCI Compliant",
                                    desc: "All our payment solutions meet stringent UK financial regulations for your peace of mind."
                                }
                            ].map((card, i) => (
                                <div key={i} className="glass-card p-10 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                                    <div className="mb-8">{card.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* National Success Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Leading the <span className="text-primary underline decoration-primary/40 underline-offset-8">UK Self-Service Revolution</span></h2>
                                <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                                    From the bustling streets of London to local high streets across the country, POSSO's **self-service kiosk uk** installations are changing how British consumers interact with their favorite brands.
                                </p>
                                <ul className="space-y-4 mb-12">
                                    {[
                                        "Bespoke hardware branding available",
                                        "Zero-latency software optimized for UK networks",
                                        "Integration with local accounting & CRM systems",
                                        "24/7 UK-based phone and remote support"
                                    ].map((li, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild size="lg" className="h-16 px-8 text-lg font-bold">
                                    <Link href="/contact" className="flex items-center gap-2">Talk to a UK Expert <ArrowRight className="w-5 h-5" /></Link>
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="glass-card overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                                    <img src="/images/uk-kiosk-installation.jpg" alt="Self-Service Kiosks in a UK Store" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="py-24 relative overflow-hidden bg-slate-950 border-y border-white/5">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Modernise?</h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-slate-400 mb-12">
                                Don't let legacy systems hold your business back. Embrace the efficiency of **self-service kiosk uk** technology today with POSSO.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Button size="lg" asChild className="h-16 px-12 text-xl shadow-xl shadow-primary/20">
                                    <Link href="/book-a-call text-white bg-primary">Book a Discovery Call</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="h-16 px-12 text-xl border-white/20">
                                    <Link href="/solutions">View More Industries</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQSection
                    title="Self-Service Kiosks UK — Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is a self-service kiosk?",
                            answer: "A self-service kiosk is a touchscreen terminal that lets customers browse, order or check out and pay for themselves without staff assistance. POSSO supplies self-service kiosk hardware and software across the UK for restaurants, takeaways, retail and hospitality venues.",
                        },
                        {
                            question: "Are POSSO self-service kiosks made and supported in the UK?",
                            answer: "Yes. We supply, configure and install self-service kiosks throughout the UK and back them with a nationwide team of engineers offering on-site maintenance plus 24/7 UK-based phone and remote support, so help is always close at hand.",
                        },
                        {
                            question: "How do self-service kiosks benefit my business?",
                            answer: "Self-service kiosks shorten queues, speed up service and lift average order value through built-in upselling prompts. They also reduce order errors and let your team focus on preparation and customer care rather than manning the till during peak periods.",
                        },
                        {
                            question: "Do your kiosks integrate with my existing POS and kitchen systems?",
                            answer: "Our self-service kiosks send orders directly to your POS and kitchen display system, keeping menus, pricing and stock in sync in real time. They also integrate with common UK accounting and CRM tools so your reporting stays in one place.",
                        },
                        {
                            question: "Are the kiosks PCI compliant and secure for payments?",
                            answer: "All POSSO kiosk payment solutions are PCI compliant and meet UK financial regulations. Each kiosk includes an integrated card terminal supporting contactless, chip & PIN, Apple Pay and Google Pay for fast, secure transactions.",
                        },
                        {
                            question: "Can I buy kiosks outright or is finance available?",
                            answer: "You can purchase kiosks outright or spread the cost with flexible finance options. We arrange a UK site survey, handle installation and provide staff training so your kiosks are live and earning quickly.",
                        },
                    ]}
                />

                {/* SEO Cross-Links Section */}
                <section className="py-20 bg-slate-900/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-8 text-center">
                            <Link href="/solutions/restaurant-self-service-kiosk" className="text-slate-500 hover:text-primary transition-colors hover:underline underline-offset-4">Restaurant Kiosks</Link>
                            <Link href="/solutions/kiosks-for-retail" className="text-slate-500 hover:text-primary transition-colors hover:underline underline-offset-4">Retail Kiosk Systems</Link>
                            <Link href="/solutions/franchise-pos-systems" className="text-slate-500 hover:text-primary transition-colors hover:underline underline-offset-4">Franchise ePOS Solutions</Link>
                            <Link href="/blog/self-service-revolution" className="text-slate-500 hover:text-primary transition-colors hover:underline underline-offset-4">UK Kiosk Trends</Link>
                            <Link href="/contact" className="text-slate-500 hover:text-primary transition-colors hover:underline underline-offset-4">Contact POSSO UK</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
