import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { TableMaestroShowcase } from '@/components/sections/table-maestro';
import { Contact } from '@/components/sections/contact';
import { FAQSection } from '@/components/sections/faq-section';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Zap, CalendarDays, TrendingUp, Users, CheckCircle2, ShieldCheck, ListChecks, LayoutGrid, Globe, BarChart3 } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Table Booking App for Restaurants UK | TableMaestro by Posso',
    description: 'TableMaestro is the best table booking app for UK restaurants. Online reservations, waitlist management, promotion engine and analytics. From £5/week.',
    keywords: [
        'table booking app',
        'restaurant booking system UK',
        'table reservation app',
        'online table booking software',
        'restaurant reservation system',
        'table management app',
        'waitlist management software',
        'restaurant booking platform UK',
    ],
    alternates: {
        canonical: '/tablemaestro',
    },
    openGraph: {
        title: 'Table Booking App for Restaurants | TableMaestro by Posso',
        description: 'Online reservations, waitlist management and growth analytics for UK restaurants. Start from £5/week.',
        images: ['/tablemaestro_promo_engine.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Table Booking App for Restaurants | TableMaestro by Posso',
        description: 'Online reservations, waitlist management and growth analytics for UK restaurants. Start from £5/week.',
        images: ['/tablemaestro_promo_engine.png'],
    },
};

const pageSchema = [
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'TableMaestro',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        description:
            'TableMaestro is a restaurant table booking and reservation system by Posso. Take online reservations, manage table availability and covers, reduce no-shows with deposits, run promotions, and integrate bookings with your Posso EPOS.',
        url: 'https://www.posso.co.uk/tablemaestro',
        image: 'https://www.posso.co.uk/tablemaestro_booking_ui.png',
        screenshot: 'https://www.posso.co.uk/tablemaestro_promo_engine.png',
        offers: {
            '@type': 'AggregateOffer',
            lowPrice: '5',
            priceCurrency: 'GBP',
            availability: 'https://schema.org/InStock',
        },
        brand: {
            '@type': 'Brand',
            name: 'Posso',
        },
        featureList: [
            'Online table booking and reservations',
            'Real-time table availability and confirmations',
            'Deposit collection to reduce no-shows',
            'Table and covers management',
            'Waitlist management',
            'Customer database and marketing',
            'Promotion engine for quiet periods',
            'Growth analytics and reporting',
            'Branded booking widget',
            'Integrates with Posso EPOS',
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        contentUrl: 'https://www.posso.co.uk/tablemaestro_booking_ui.png',
        url: 'https://www.posso.co.uk/tablemaestro',
        name: 'TableMaestro Booking System Interface - Restaurant Reservation App',
        description:
            'TableMaestro restaurant table booking and reservation system by Posso, showing the online booking interface for managing tables, covers, and reservations.',
        width: 1200,
        height: 800,
        encodingFormat: 'image/png',
        creator: {
            '@type': 'Organization',
            name: 'Posso Ltd',
        },
        copyrightHolder: {
            '@type': 'Organization',
            name: 'Posso Ltd',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
            { '@type': 'ListItem', position: 2, name: 'TableMaestro Booking', item: 'https://www.posso.co.uk/tablemaestro' },
        ],
    },
];

const features = [
    {
        title: "Real-time Bookings",
        description: "Instant table confirmations for your customers, 24/7. No more missed calls or double bookings.",
        icon: <CalendarDays className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Promotion Engine",
        description: "Create and track discount codes, special offers, and holiday promotions to drive mid-week traffic.",
        icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Customer Database",
        description: "Build a rich list of your diners. Understand their preferences and keep them coming back with marketing.",
        icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Growth Analytics",
        description: "See exactly how many bookings you're getting and which promotions are driving the most revenue.",
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />
    }
];

const bookingFeatures = [
    { icon: CalendarDays, title: 'Online Reservations 24/7', description: 'Take online reservations around the clock through your branded booking widget. Customers book in real time and get instant confirmation — even when your phone line is busy or your doors are closed.' },
    { icon: ShieldCheck, title: 'Reduce No-Shows With Deposits', description: 'Collect a deposit or hold a card at the point of booking for large parties or peak slots. Combined with automated reminders, deposits dramatically reduce no-shows and protect your covers.' },
    { icon: ListChecks, title: 'Waitlist Management', description: 'Run a digital restaurant waitlist to fill last-minute cancellations and seat walk-ins fairly. Notify guests by SMS when their table is ready and keep your floor turning on busy nights.' },
    { icon: LayoutGrid, title: 'Table & Covers Management', description: 'Set your floor plan, table sizes and total capacity, and the table reservation system manages availability automatically so you never overbook. Maximise covers without the spreadsheets.' },
    { icon: Globe, title: 'Commission-Free Bookings', description: 'A fully branded booking widget that embeds into your own website, with zero commission on every cover. Unlike third-party portals, every commission-free booking keeps 100% of your revenue.' },
    { icon: BarChart3, title: 'Customer Database & Analytics', description: 'Every reservation builds a rich customer database you own. Track booking trends, covers and revenue with growth analytics, then target diners with marketing to bring them back.' },
];

export default function TableMaestroPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
            <Header />
            <main className="flex-1">
                <BreadcrumbNav items={[{ label: 'TableMaestro Booking' }]} />

                {/* Detail Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)]" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 py-1 px-3 mb-6">
                                <Zap className="w-3 h-3 mr-2" />
                                ADVANCED BOOKING SOLUTION
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Master Your Floor with <span className="text-blue-500">TableMaestro</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                The all-in-one reservation and marketing suite designed specifically for ambitious restaurants looking to scale their operations and increase customer lifetime value.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                            {features.map((feature, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-50 mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Main Visual */}
                        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden glass-card border-blue-500/20 shadow-2xl shadow-blue-500/10">
                            <Image
                                src="/tablemaestro_promo_engine.png"
                                alt="TableMaestro Dashboard"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8 font-headline tracking-tight">
                                    Why Choose TableMaestro <br />
                                    <span className="text-blue-500">For Your Restaurant?</span>
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        "Zero commissions on bookings - keep all your profit.",
                                        "Fully branded booking widget that fits your website.",
                                        "Automated email reminders to reduce no-shows.",
                                        "Powerful promotion engine to fill empty tables during quiet hours.",
                                        "Mobile-optimized for your customers and your staff.",
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                            </div>
                                            <p className="text-slate-300 text-lg">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                                    <Image
                                        src="/tablemaestro_booking_ui.png"
                                        alt="TableMaestro Mobile UI"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Restaurants Choose TableMaestro */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                            <div className="relative">
                                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                                    <img
                                        src="/tablemaestro_booking_ui.png"
                                        alt="TableMaestro restaurant booking system UK showing the online reservations interface for managing tables, covers and customer bookings"
                                        width={600}
                                        height={800}
                                        loading="lazy"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 font-headline tracking-tight">
                                    Why Restaurants Choose TableMaestro for Online Bookings
                                </h2>
                                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                                    <p>
                                        Most restaurants still lose covers to missed calls, double bookings and pricey third-party portals. TableMaestro is a <strong className="text-white">table booking app</strong> built for UK hospitality — a complete <strong className="text-white">restaurant booking system UK</strong> operators trust to take <strong className="text-white">online reservations</strong> 24/7 without lifting the phone.
                                    </p>
                                    <p>
                                        Because it is a true <strong className="text-white">table reservation system</strong>, TableMaestro manages your floor plan, table sizes and covers automatically, so you never overbook a busy service. Built-in deposits and automated reminders help you <strong className="text-white">reduce no-shows</strong>, while the digital <strong className="text-white">restaurant waitlist</strong> fills cancellations and seats walk-ins the moment a table frees up.
                                    </p>
                                    <p>
                                        Best of all, every reservation comes through your own branded widget with <strong className="text-white">commission-free bookings</strong> — no per-cover fees skimmed by a marketplace. Combined with full <strong className="text-white">covers management</strong>, a customer database and growth analytics, TableMaestro turns every booking into repeat revenue you actually keep.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 font-headline tracking-tight">
                                Everything You Need to Take Online Reservations
                            </h2>
                            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                                A complete table reservation system for UK restaurants — from commission-free bookings and deposits to waitlist and covers management.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {bookingFeatures.map((f) => (
                                <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                                        <f.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-50 mb-2">{f.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{f.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How Online Table Booking Works */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 font-headline tracking-tight">
                                How Online Table Booking Works
                            </h2>
                            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                                Going live with online reservations takes minutes — here is how diners book a table and how you stay in control.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                { step: '1', title: 'Customer Picks a Time', desc: 'Diners choose date, time and party size in your branded booking widget and see live table availability.' },
                                { step: '2', title: 'Confirm With a Deposit', desc: 'Take an optional deposit or card hold to reduce no-shows, then send instant confirmation automatically.' },
                                { step: '3', title: 'Manage Covers & Waitlist', desc: 'The table reservation system updates your floor plan, balances covers and runs a waitlist for cancellations.' },
                                { step: '4', title: 'Grow With Analytics', desc: 'Every commission-free booking feeds your customer database and growth analytics for repeat marketing.' },
                            ].map((s) => (
                                <div key={s.step} className="text-center">
                                    <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                                        {s.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-50 mb-1">{s.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <FAQSection title="TableMaestro — Frequently Asked Questions" faqs={[
                    { question: 'What is TableMaestro and how does the table booking system work?', answer: 'TableMaestro is a restaurant table booking and reservation system by Posso. Customers reserve a table through your branded online booking widget, choose their date, time and party size, and receive instant confirmation. You manage all reservations, table availability and covers from one dashboard — 24/7, with no missed calls or double bookings.' },
                    { question: 'Can customers make online reservations directly from my website?', answer: 'Yes. TableMaestro gives you a fully branded online booking widget that embeds into your own website and works on mobile and desktop. Customers book in real time, see live table availability, and get instant confirmation — there are zero commissions on bookings, so you keep all your profit.' },
                    { question: 'How does TableMaestro help reduce no-shows?', answer: 'TableMaestro reduces no-shows with deposit collection and automated email reminders. You can require a deposit or card on file at the point of booking for larger parties or peak times, and automated reminders are sent before the reservation — cutting no-shows and protecting your covers and revenue.' },
                    { question: 'Can I manage tables, covers and capacity?', answer: 'Yes. TableMaestro includes full table and covers management. Set your floor plan, table sizes and total capacity, and the system automatically manages availability so you never overbook. You can also run a waitlist to fill cancellations and maximise covers on busy nights.' },
                    { question: 'Does TableMaestro integrate with the Posso EPOS system?', answer: 'TableMaestro integrates directly with your Posso EPOS, so reservations, customer data and sales sit together in one place. This gives you a single customer database, joined-up analytics, and the ability to run targeted promotions that fill empty tables during quiet hours.' },
                    { question: 'How much does TableMaestro cost?', answer: 'TableMaestro starts from £5 per week. There are no commissions on bookings — you keep 100% of your revenue. Book a free demo and we will set up your booking widget, import your tables and covers, and have you taking online reservations quickly.' },
                ]} />

                <Contact />
            </main>
            <Footer />
        </div>
    );
}
