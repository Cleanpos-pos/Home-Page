import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Rocket,
    Smartphone,
    CreditCard,
    Bot,
    Zap,
    ShieldCheck,
    Clock,
    BarChart3,
    Layers,
    ArrowRight
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'POS & Self-Order Kiosk Solutions | POSSO UK',
    description: 'POSSO delivers cutting-edge POS systems, EPOS solutions, and self-order kiosks for restaurants, retail, and hospitality. Transform your business with AI-powered ordering technology.',
    keywords: 'POS system, EPOS, self-order kiosk, restaurant POS, retail point of sale, digital ordering, contactless payment, hospitality technology',
    alternates: {
        canonical: '/blog/pos-and-self-order-kiosk-solutions',
    },
};

const features = [
    {
        icon: <Rocket className="w-8 h-8 text-primary" />,
        title: 'Next-Generation POS Systems',
        description: 'Cloud-based point of sale technology that scales with your business. Real-time analytics, inventory management, and seamless integration across all locations.'
    },
    {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: 'Self-Order Kiosk Excellence',
        description: 'Empower customers with intuitive self-service kiosks. Reduce wait times, increase order accuracy, and boost average transaction values by up to 30%.'
    },
    {
        icon: <CreditCard className="w-8 h-8 text-primary" />,
        title: 'Advanced EPOS Solutions',
        description: 'Complete electronic point of sale systems with contactless payments, mobile integration, and comprehensive reporting for smarter business decisions.'
    },
    {
        icon: <Bot className="w-8 h-8 text-primary" />,
        title: 'AI-Powered Intelligence',
        description: 'Leverage artificial intelligence for predictive analytics, automated inventory optimization, and personalized customer experiences.'
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: 'Lightning-Fast Performance',
        description: 'Process transactions in milliseconds with our optimized hardware and software. Never miss a sale during peak hours.'
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: 'Bank-Grade Security',
        description: 'PCI DSS compliant systems with end-to-end encryption, protecting your business and customer data at every transaction.'
    }
];

const benefits = [
    {
        title: '35% Faster Service',
        description: 'Reduce queue times and serve more customers during peak periods',
        icon: <Clock className="w-5 h-5 text-primary" />
    },
    {
        title: '99.9% Uptime',
        description: 'Reliable systems that keep your business running 24/7',
        icon: <Zap className="w-5 h-5 text-primary" />
    },
    {
        title: 'Real-Time Insights',
        description: 'Make data-driven decisions with live business intelligence',
        icon: <BarChart3 className="w-5 h-5 text-primary" />
    },
    {
        title: 'Seamless Integration',
        description: 'Connect with accounting, inventory, and CRM systems effortlessly',
        icon: <Layers className="w-5 h-5 text-primary" />
    }
];

const industries = [
    "Restaurants", "Quick Service", "Retail Stores", "Cafés & Coffee Shops",
    "Hotels & Hospitality", "Food Courts", "Entertainment Venues", "Stadiums & Arenas"
];

export default function PosSolutionsBlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">REVOLUTIONARY SOLUTIONS</Badge>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 gradient-text">
                                POS & Self-Order Kiosk Solutions
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                                The UK's Most Advanced POS Systems, EPOS Solutions & Self-Order Kiosks from POSSO
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
                                    <Link href="https://posso.co.uk">Visit POSSO.UK</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/contact">Get a Free Demo</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why POSSO Leads the POS Industry</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Cutting-edge technology designed to streamline your operations and boost your bottom line.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
                                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Section */}
                <section className="py-20 bg-gradient-to-br from-slate-900 to-primary/10">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16">Measurable Business Impact</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-white/5">
                                    <div className="flex justify-center mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                                    <p className="text-sm text-slate-400">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">Trusted Across Industries</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {industries.map((industry, idx) => (
                                <Badge key={idx} variant="secondary" className="text-lg py-2 px-6 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-colors">
                                    {industry}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-slate-950 border-y border-white/5">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Revolutionize Your Business?</h2>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                            Join thousands of businesses already using POSSO's cutting-edge POS and kiosk solutions
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button size="lg" asChild className="px-10 h-14 text-lg">
                                <Link href="/contact">Inquire Now</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="px-10 h-14 text-lg">
                                <Link href="https://posso.co.uk">Visit POSSO.UK</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Internal Linking / Footer of Content */}
                <section className="py-20 bg-slate-900/30">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-invert prose-lg mx-auto">
                            <h2 className="text-2xl font-bold mb-6">Explore More Solutions</h2>
                            <p className="text-slate-300">
                                At POSSO, we offer a comprehensive suite of tools to help your business thrive in the digital age.
                                Whether you're looking for <Link href="/blog/pos-systems-for-restaurants-and-takeaways" className="text-primary hover:underline">Commission-Free POS Systems</Link>,
                                or want to learn about the <Link href="/blog/self-order-kiosks" className="text-primary hover:underline">Benefits of Self-Order Kiosks</Link>, we have the expertise to guide you.
                            </p>
                            <p className="text-slate-300 mt-4">
                                Don't forget to check our <Link href="/blog/online-ordering-and-mobile-apps" className="text-primary hover:underline">Online Ordering & Mobile Apps</Link> to eliminate
                                third-party commissions and keep 100% of your profits.
                            </p>
                            <div className="mt-12 p-8 glass-card rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Need a bespoke solution?</h3>
                                    <p className="text-slate-400">Our team is ready to help you design the perfect tech stack.</p>
                                </div>
                                <Button asChild>
                                    <Link href="/contact" className="flex items-center gap-2">
                                        Contact Sales <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
