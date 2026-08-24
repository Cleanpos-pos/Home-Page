import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button';
import {
    Coffee,
    Monitor,
    Printer,
    Smartphone,
    Zap,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    BarChart3,
    Users,
    Clock,
    CreditCard,
    Star,
    Utensils,
    Receipt,
    Wifi,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';

export const metadata: Metadata = {
    title: 'Coffee Shop & Cafe ePOS Systems UK | Posso',
    description: 'Complete coffee shop and cafe ePOS systems from Posso. 15" touchscreen, kitchen display, online ordering and card payments. Low monthly fee, no long contracts.',
    alternates: {
        canonical: '/coffee-shop-cafe-epos-systems',
    },
    keywords: [
        'coffee shop ePOS system',
        'cafe ePOS system UK',
        'coffee shop POS system',
        'cafe till system',
        'coffee shop point of sale',
        'ePOS for cafes',
        'coffee shop technology',
        'cafe ordering system',
    ],
    openGraph: {
        title: 'Coffee Shop & Cafe ePOS Systems | Posso',
        description: 'Complete ePOS hardware and software for coffee shops and cafes. Touchscreen, printer, cash drawer, kitchen display and online ordering included.',
        url: 'https://www.posso.co.uk/coffee-shop-cafe-epos-systems',
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Posso Coffee Shop & Cafe ePOS System",
    "description": "Complete ePOS system for coffee shops and cafes. Includes 15-inch touchscreen, customer display, thermal printer, cash drawer, kitchen display and affordable monthly software licence.",
    "brand": { "@type": "Organization", "name": "Posso Ltd" },
    "category": "ePOS Systems",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": "Posso Ltd" }
    },
};

const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.posso.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "ePOS Systems", "item": "https://www.posso.co.uk/pos" },
        { "@type": "ListItem", "position": 3, "name": "Coffee Shop & Cafe ePOS", "item": "https://www.posso.co.uk/coffee-shop-cafe-epos-systems" }
    ]
};

const hardwareSpecs = [
    { label: "Touchscreen", value: '15" TFT LCD (1024×768)' },
    { label: "Customer Display", value: '15" LED advertising screen' },
    { label: "Processor Storage", value: "64GB SSD + 4GB DDR4 RAM" },
    { label: "Receipt Printer", value: "80mm thermal printer" },
    { label: "Cash Drawer", value: "Standard UK cash drawer" },
    { label: "Connectivity", value: "6× USB, HDMI, VGA, COM, LAN, PS/2" },
    { label: "Network", value: "RJ45 Gigabit LAN" },
    { label: "Audio", value: "Line out" },
];

const softwareFeatures = [
    { title: "Customisable Screen Layouts", desc: "Design your till screens to match your menu. Hot drinks, cold drinks, food, seasonal specials — arrange everything exactly how your team needs it.", icon: Monitor },
    { title: "Kitchen Printing & Display", desc: "Send food orders straight to the kitchen via printer or screen. Barista and food prep stations get separate, colour-coded tickets automatically.", icon: Printer },
    { title: "Table Tracking", desc: "Track open tables, view orders by table number and split or transfer bills with a tap. Perfect for cafes with dine-in service.", icon: Utensils },
    { title: "Staff Security & Control", desc: "Individual staff logins, permission levels, void tracking and training clerk mode. Know exactly who did what and when.", icon: ShieldCheck },
    { title: "Happy Hour Auto-Pricing", desc: "Set automatic price changes for happy hour, lunch deals or evening specials. The system switches pricing on schedule — no manual intervention.", icon: Clock },
    { title: "Online Order Management", desc: "Accept orders from your own branded website and app. Orders flow into your ePOS alongside walk-in sales. low commission rates.", icon: Wifi },
    { title: "Split Bills & Partial Payments", desc: "Split by item, by amount or by seat. Accept partial card and cash payments on the same transaction.", icon: CreditCard },
    { title: "Multi-Buy Discounts", desc: "Set up buy-one-get-one, loyalty stamps, percentage discounts and combo deals. Applied automatically at the till.", icon: Receipt },
    { title: "Delivery & Driver Management", desc: "Manage your own delivery fleet with driver assignment, postcode lookup and countdown timers. Caller ID integration available.", icon: Smartphone },
    { title: "Comprehensive Reporting", desc: "X Report, Z Report, daily summaries, product reports, staff performance and more. Export to CSV or view on your phone.", icon: BarChart3 },
    { title: "Tablet Ordering (Optional)", desc: "Let customers or staff order from tablets around your venue. Wi-Fi connected, synced with your main ePOS in real time.", icon: Smartphone },
    { title: "Refunds, Voids & No-Sale", desc: "Full audit trail for refunds, voids and no-sale drawer openings. Manager approval can be required for sensitive operations.", icon: Users },
];

const optionalAddOns = [
    "Barcode reader",
    "Caller ID device for phone orders",
    "Kitchen display screen",
    "Additional kitchen printer",
    "Webcam",
    "Membership / loyalty card reader",
    "Tablet ordering for tables",
    "Website ordering integration",
    "Credit card terminal integration",
    "Remote support package",
];

export default function CoffeeShopEposPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 selection:bg-primary/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Header />

            <main className="flex-1">
                {/* Breadcrumb */}
                <div className="pt-20 bg-slate-950">
                    <BreadcrumbNav
                        items={[
                            { label: 'ePOS Systems', href: '/pos' },
                            { label: 'Coffee Shop & Café EPOS' },
                        ]}
                    />
                </div>

                {/* Hero */}
                <section className="relative pt-12 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 py-1 px-4">
                                <Coffee className="w-3 h-3 mr-2" />
                                COMPLETE ePOS SOLUTION
                            </Badge>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent !leading-[1.1]">
                                Coffee Shop & Cafe<br />
                                <span className="text-primary">ePOS Systems</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                                Everything your coffee shop or cafe needs in one box. 15&quot; touchscreen, customer display, thermal printer, cash drawer and affordable monthly software licence &mdash; plus online ordering, kitchen display and card payments.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <SolutionEnquiryModal
                                    defaultSolutionId="epos"
                                    trigger={
                                        <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                            Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    }
                                />
                                <Link href="tel:08081753956">
                                    <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 hover:bg-slate-800 transition-all">
                                        Call 0808 175 3956
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust Signals */}
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <span>4.8/5 from 142 reviews</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    <span>Low monthly software fee</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    <span>Free menu programming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                    Built for Coffee Shops,<br />
                                    <span className="text-primary">Not Adapted from Retail</span>
                                </h2>
                                <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                                    <p>
                                        Most ePOS systems were designed for retail shops and then awkwardly adapted for hospitality. Posso&apos;s cafe ePOS was built from the ground up for the way coffee shops and cafes actually work &mdash; fast-paced counter service, dine-in table tracking, kitchen printing and high-volume drink customisation.
                                    </p>
                                    <p>
                                        The system handles everything from a single espresso to a complex catering order. Customisable screen layouts mean your baristas tap through orders in seconds, not minutes. And because it&apos;s all-in-one, you&apos;re not paying for five separate systems that don&apos;t talk to each other.
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-8">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-primary">500+</span>
                                        <span className="text-sm text-slate-500">UK Businesses</span>
                                    </div>
                                    <div className="w-px h-12 bg-slate-800" />
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-emerald-400">Low</span>
                                        <span className="text-sm text-slate-500">Commission Rates</span>
                                    </div>
                                    <div className="w-px h-12 bg-slate-800" />
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-amber-400">£</span>
                                        <span className="text-sm text-slate-500">Low Monthly Fee</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
                                <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 space-y-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Coffee className="w-5 h-5 text-primary" />
                                        What&apos;s in the Box
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            '15" all-in-one touchscreen ePOS terminal',
                                            '15" customer-facing advertising display',
                                            '80mm thermal receipt printer',
                                            'Standard UK cash drawer',
                                            '64GB SSD + 4GB DDR4 RAM',
                                            'Free menu programming',
                                            'Affordable monthly software licence',
                                            'On-site or remote training',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Software Features Grid */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Software Features
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Every feature your coffee shop needs to run faster, sell more and stay in control &mdash; all included as standard.
                        </p>
                    </div>

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {softwareFeatures.map((f, i) => (
                                <div key={i} className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform">
                                        <f.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hardware Specs */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Hardware Specifications
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {hardwareSpecs.map((spec, i) => (
                                <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-slate-900 border border-slate-800">
                                    <span className="text-slate-400 font-medium">{spec.label}</span>
                                    <span className="text-white font-bold text-right">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Optional Add-Ons */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Optional Add-Ons</h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Expand your system as your business grows. Every add-on integrates seamlessly with your core ePOS.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {optionalAddOns.map((addon, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-primary/20 transition-colors">
                                    <Zap className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-slate-300">{addon}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who It's For */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            Perfect for Every Type of Cafe
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Independent Coffee Shops", desc: "Counter service, takeaway cups, loyalty stamps. Quick, intuitive and affordable." },
                                { title: "Brunch & Lunch Cafes", desc: "Table service, kitchen printing, split bills and happy hour pricing built in." },
                                { title: "Multi-Site Chains", desc: "Central menu management, cross-location reporting and unified stock control." },
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <FAQSection
                    title="Coffee Shop & Café EPOS — Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What's included in the coffee shop & café EPOS package?",
                            answer:
                                'The complete package includes a 15" touchscreen terminal, a 15" customer advertising display, an 80mm thermal printer, a UK cash drawer, 64GB SSD with 4GB RAM, free menu programming, and an affordable monthly software licence. Optional add-ons like a kitchen display, card reader, and barcode scanner are available so you can build the exact setup your café needs.',
                        },
                        {
                            question: 'Can my café run a loyalty scheme and multi-buy offers?',
                            answer:
                                'Yes. Posso EPOS has loyalty stamps, points, membership cards, percentage discounts, and buy-one-get-one and combo deals built in. Offers apply automatically at the till, so baristas never have to remember to add them — perfect for rewarding regulars and increasing repeat visits.',
                        },
                        {
                            question: 'Is it fast enough for quick-serve, high-volume coffee service?',
                            answer:
                                'Absolutely. The till screens are fully customisable so your team taps through hot drinks, cold drinks, food, and seasonal specials in seconds. Drink customisation, modifiers, and happy-hour auto-pricing are all one tap, keeping queues moving even at peak times.',
                        },
                        {
                            question: 'Can I take online and app orders through the same system?',
                            answer:
                                'Yes. Posso online ordering integrates directly with your café EPOS, so orders from your own branded website and app print alongside walk-in orders at low commission. You can also accept orders via Facebook and Instagram, all flowing into one screen.',
                        },
                        {
                            question: 'Can I integrate card payments with my café EPOS?',
                            answer:
                                'Yes. We integrate with leading UK card payment providers, including contactless, chip & PIN, Apple Pay, and Google Pay. Transactions sync automatically with your EPOS for accurate, fast end-of-day reporting and reconciliation.',
                        },
                        {
                            question: 'Can I track stock for beans, milk, and other ingredients?',
                            answer:
                                'Yes. Posso EPOS includes stock management so you can monitor coffee beans, milk, syrups, cups, and food items, set reorder levels, and see what is selling. Combined with detailed reporting, it helps you cut waste and keep your most popular items in stock.',
                        },
                        {
                            question: 'How much does a coffee shop EPOS system cost?',
                            answer:
                                'Posso café EPOS runs on a low, predictable monthly software fee that covers the core system, updates, and cloud features like online ordering. Simple menus are programmed free of charge, and finance options are available on hardware — call 0808 175 3956 for a tailored quote.',
                        },
                    ]}
                />

                {/* Related Solutions */}
                <section className="py-16 bg-slate-900/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-8 text-center">Related Solutions</h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <Link href="/self-order-kiosks-uk" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/30 transition-colors block group">
                                <h3 className="font-bold text-white group-hover:text-primary mb-2">Self-Order Kiosks</h3>
                                <p className="text-slate-500 text-sm">Let customers order and pay at a touchscreen kiosk. Reduce queues and boost order value.</p>
                            </Link>
                            <Link href="/online-ordering" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/30 transition-colors block group">
                                <h3 className="font-bold text-white group-hover:text-primary mb-2">Online Ordering</h3>
                                <p className="text-slate-500 text-sm">Your own branded ordering website and app. low commission rates on every order.</p>
                            </Link>
                            <Link href="/digital-signage" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/30 transition-colors block group">
                                <h3 className="font-bold text-white group-hover:text-primary mb-2">Digital Menu Boards</h3>
                                <p className="text-slate-500 text-sm">Display your menu, promotions and brand content on stunning digital screens.</p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -z-10" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">
                                Ready to Upgrade Your <span className="text-primary">Coffee Shop?</span>
                            </h2>
                            <p className="text-xl text-slate-400">
                                Complete hardware, low monthly software fee, free menu setup and UK-based support. Get your cafe running on Posso&apos;s ePOS system today.
                            </p>
                            <div className="pt-4 flex flex-wrap justify-center gap-4">
                                <SolutionEnquiryModal
                                    defaultSolutionId="epos"
                                    trigger={
                                        <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 rounded-full transition-all hover:scale-105 active:scale-95">
                                            Get a Free Quote
                                        </Button>
                                    }
                                />
                                <Link href="tel:08081753956">
                                    <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-slate-700 hover:bg-slate-800 text-white">
                                        Call 0808 175 3956
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
