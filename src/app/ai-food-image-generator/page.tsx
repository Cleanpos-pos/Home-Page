import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { FAQSection } from '@/components/sections/faq-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Sparkles,
    Clock,
    Camera,
    Palette,
    RefreshCw,
    Share2,
    Download,
    CheckCircle2,
    ArrowRight,
    Globe,
    Smartphone,
    MonitorPlay,
    ShoppingBag,
    Megaphone,
    Store,
} from 'lucide-react';

// The generator itself lives on its own subdomain; this page is the
// posso.co.uk entry point for it, so every CTA leaves the site.
const APP_URL = 'https://images.posso.co.uk';
const SIGNUP_URL = `${APP_URL}/signup`;
const PAGE_URL = 'https://www.posso.co.uk/ai-food-image-generator';

export const metadata: Metadata = {
    title: 'Free AI Food Image Generator for UK Restaurants',
    description:
        'Create professional menu photos with the free Posso AI food image generator. 15 free images, no card required. No photographer, no subscription — images ready for Just Eat, Deliveroo, your website and EPOS.',
    keywords: [
        'AI food image generator',
        'free AI food image generator',
        'AI menu photos',
        'menu images for restaurants',
        'food photography for takeaways',
        'AI food photography UK',
        'Just Eat menu photos',
        'Deliveroo menu images',
        'restaurant menu pictures',
    ],
    alternates: {
        canonical: '/ai-food-image-generator',
    },
    openGraph: {
        title: 'Free AI Food Image Generator for UK Menus | Posso',
        description:
            'Turn any dish into a menu photo that sells. 15 free AI food images, no card required, no subscription.',
        url: PAGE_URL,
        type: 'website',
        images: [{ url: `${APP_URL}/examples/burger.png`, width: 1024, height: 1024, alt: 'AI-generated double cheeseburger and chips menu photo' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Food Image Generator for UK Menus | Posso',
        description:
            'Turn any dish into a menu photo that sells. 15 free AI food images, no card required.',
        images: [`${APP_URL}/examples/burger.png`],
    },
};

const packages = [
    { name: 'Starter', price: '19', credits: 30, perImage: 'About 63p per image', blurb: 'Perfect for bestsellers or a small menu' },
    { name: 'Full Menu', price: '49', credits: 100, perImage: '49p per image', blurb: 'Images for a complete restaurant or takeaway menu', popular: true },
    { name: 'Menu Pro', price: '79', credits: 250, perImage: 'About 32p per image', blurb: 'For large menus, variations and seasonal dishes' },
];

const pageSchema = [
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_URL}#software`,
        name: 'Food Menu Studio — AI Food Image Generator by Posso',
        alternateName: 'Posso AI Food Image Generator',
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web',
        description:
            'An AI food image generator for UK restaurants, takeaways, cafés and pubs. Describe a dish in plain English and download a professional 1024 × 1024 menu photo in minutes. 15 free images with no card required, then one-off credit packages with no subscription.',
        url: PAGE_URL,
        installUrl: SIGNUP_URL,
        image: `${APP_URL}/examples/burger.png`,
        screenshot: `${APP_URL}/examples/pizza.png`,
        offers: {
            '@type': 'AggregateOffer',
            lowPrice: '0',
            highPrice: '79',
            priceCurrency: 'GBP',
            offerCount: packages.length + 1,
            availability: 'https://schema.org/InStock',
            offers: [
                { '@type': 'Offer', name: 'Free sign-up credits (15 images)', price: '0', priceCurrency: 'GBP' },
                ...packages.map((p) => ({
                    '@type': 'Offer',
                    name: `${p.name} — ${p.credits} credits`,
                    price: p.price,
                    priceCurrency: 'GBP',
                    valueAddedTaxIncluded: false,
                })),
            ],
        },
        brand: { '@type': 'Brand', name: 'Posso' },
        publisher: { '@type': 'Organization', name: 'Posso Ltd', url: 'https://www.posso.co.uk' },
        featureList: [
            'Generate menu photos from a plain-English dish description',
            '15 free images, no card required',
            'One consistent house style across the whole menu',
            'One free regeneration per dish',
            'Generate a whole menu in a single run',
            '1024 × 1024 PNG downloads, individually or as a ZIP by category',
            'One-off credit packages — no subscription',
            'Credits never expire',
            'Commercial use on websites, delivery apps, kiosks and menu boards',
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to create menu photos with an AI food image generator',
        description: 'Three steps from menu text to a menu photo using the Posso AI food image generator.',
        totalTime: 'PT5M',
        step: [
            { '@type': 'HowToStep', position: 1, name: 'Describe your dish', text: 'Type the dish as it reads on your menu, adding the cut of meat, the sides, the sauce and how it comes to the table.' },
            { '@type': 'HowToStep', position: 2, name: 'Generate your food image', text: 'The generator returns a plated, well-lit photograph in the same house style as the rest of your menu. Each dish uses one credit.' },
            { '@type': 'HowToStep', position: 3, name: 'Download and add it to your menu', text: 'Download the 1024 × 1024 PNG and upload it to your website, EPOS screens, printed menu or delivery platform listings.' },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
            { '@type': 'ListItem', position: 2, name: 'AI Food Image Generator', item: PAGE_URL },
        ],
    },
];

const gallery = [
    { src: 'burger.png', label: 'Burgers', alt: 'AI-generated double cheeseburger with bacon and lettuce in a toasted sesame bun, served with skin-on fries' },
    { src: 'pizza.png', label: 'Pizza', alt: 'AI-generated pepperoni pizza with charred crust and fresh basil on a wooden board' },
    { src: 'kebab.png', label: 'Kebabs & Shawarma', alt: 'AI-generated mixed grill skewers with flatbread, yoghurt dip, tomato and red onion' },
    { src: 'indian.png', label: 'Indian', alt: 'AI-generated chicken tikka masala in a copper karahi with basmati rice and naan' },
    { src: 'chinese.png', label: 'Chinese', alt: 'AI-generated sweet and sour chicken with peppers and pineapple beside egg fried rice' },
    { src: 'fish-and-chips.png', label: 'Fish & Chips', alt: 'AI-generated battered fish with chunky chips, peas, tartare sauce and lemon' },
    { src: 'breakfast.png', label: 'Breakfast', alt: 'AI-generated full English breakfast with egg, sausages, bacon, beans, tomato and toast' },
    { src: 'dessert.png', label: 'Desserts', alt: 'AI-generated chocolate brownie sundae with vanilla ice cream, raspberries and mint' },
    { src: 'drinks.png', label: 'Drinks', alt: 'AI-generated mango smoothie in a tall glass with a paper straw on a marble café table' },
];

const benefits = [
    { icon: Clock, title: 'Ready in Minutes', description: 'Describe a dish, generate the image and get back to service. Nothing to schedule and nothing to wait for.' },
    { icon: Camera, title: 'No Photographer to Book', description: 'No studio hire, no food stylist and no half-day shoot squeezed around a quiet lunchtime.' },
    { icon: Palette, title: 'One Consistent Style', description: 'Every dish is lit, plated and framed the same way, so the whole menu looks considered from top to bottom.' },
    { icon: RefreshCw, title: 'Update Whenever the Menu Changes', description: 'New special, new supplier, new season — generate a fresh image the same day and swap the file over.' },
    { icon: Download, title: 'Web-Ready Downloads', description: '1024 × 1024 square PNGs, downloaded one at a time or as a ZIP sorted by menu category.' },
    { icon: Sparkles, title: 'No Design Skills Needed', description: 'If you can describe a dish to a customer at the counter, you can use it. That is the whole skill.' },
];

const channels = [
    { icon: ShoppingBag, title: 'Delivery Marketplaces', description: 'Upload against the matching item on Just Eat, Deliveroo, Uber Eats and other ordering platforms.' },
    { icon: Globe, title: 'Your Own Website', description: 'Menu pages, specials and seasonal sections, whatever your website is built with.', href: '/web-design' },
    { icon: Smartphone, title: 'Online Ordering', description: 'Commission-free click-and-collect and delivery pages, where a picture beside each item builds bigger baskets.', href: '/online-ordering' },
    { icon: Store, title: 'Self-Order Kiosks', description: 'Kiosks and tablet ordering, where customers browse by picture instead of reading a long list.', href: '/self-order-kiosks' },
    { icon: MonitorPlay, title: 'Digital Menu Boards', description: 'Screens above the counter and in the window, with every item in one consistent look.', href: '/digital-signage' },
    { icon: Megaphone, title: 'Social Media', description: 'Posts and stories for a new special or a weekend offer, without waiting for a shoot.' },
];

const faqs = [
    {
        question: 'Is the Posso AI food image generator free?',
        answer: 'Yes, you can start free. Every new account gets 15 free credits — 15 dishes, each with a free regeneration — with no card details required. After that you only pay if you want more, by buying a one-off credit package from £19 + VAT. There is no subscription and nothing renews automatically.',
    },
    {
        question: 'How does an AI food image generator work?',
        answer: 'You type the dish the way you would describe it to a customer — for example "double cheeseburger with crispy bacon, lettuce, burger sauce and seasoned fries". The generator turns that description into a plated, well-lit menu photo in a consistent house style, ready to download as a 1024 × 1024 PNG. No photography or prompt-writing knowledge is needed.',
    },
    {
        question: 'What is a credit and how much does each image cost?',
        answer: 'One credit covers one dish and includes up to 2 attempts at it: the first image plus one free regeneration. Credits cost between about 32p and 63p per dish depending on the package (Starter £19 for 30, Full Menu £49 for 100, Menu Pro £79 for 250, all + VAT). Failed generations are never charged and purchased credits do not expire.',
    },
    {
        question: 'Can I use AI food images on Just Eat, Deliveroo or Uber Eats?',
        answer: 'You can use the images wherever your menu is listed, including delivery marketplaces. Food Menu Studio is not affiliated with or endorsed by Just Eat, Deliveroo or Uber Eats, and each platform sets its own image rules on size, framing and how closely a picture must match the item — so check their guidelines before uploading.',
    },
    {
        question: 'Can I use the images commercially?',
        answer: 'Yes. The images are for use in your own business: your website, online ordering, delivery listings, printed menus, in-store screens, kiosks, social posts and local advertising. The image must fairly represent the dish you actually serve and must not imply an endorsement or award you do not have.',
    },
    {
        question: 'Do the images have to match the food I serve?',
        answer: 'Yes. Each image is a generated picture of the dish you describe, not a photograph of your plate, so describe the dish exactly as you make it — the right protein, sides and roughly the right portion. Pictures that oversell what arrives can breach UK consumer protection rules and are often removed by delivery marketplaces.',
    },
    {
        question: 'Can I create images for my whole menu at once?',
        answer: 'Yes. Add your menu items, select the ones that need pictures and generate them in one run. Each dish uses one credit, so a sixty-item menu uses sixty credits — the Full Menu package of 100 credits is sized for exactly that, with room left for dishes that change.',
    },
    {
        question: 'Does it work with the Posso EPOS system?',
        answer: 'The images are standard PNG files, so they work anywhere you can upload a picture — including Posso EPOS screens, Posso online ordering, self-order kiosks and digital menu boards. There is nothing to connect or integrate: download the image and add it to the menu item.',
    },
];

export default function AiFoodImageGeneratorPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.10),transparent_70%)]" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <BreadcrumbNav items={[{ label: 'AI Food Image Generator' }]} />
                        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
                            <div>
                                <Badge variant="outline" className="border-orange-500/50 text-orange-400 bg-orange-500/10 py-1 px-3 mb-6">
                                    <Sparkles className="w-3 h-3 mr-2" />
                                    FREE TO START — 15 IMAGES, NO CARD
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                    Free <span className="text-orange-500">AI Food Image Generator</span> for UK Restaurants &amp; Takeaways
                                </h1>
                                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                    Turn any dish into a menu photo that sells. Describe it in one sentence and download a professional image in minutes — no photographer, no studio and no subscription.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                        <a href={SIGNUP_URL}>
                                            Create 15 Food Images Free
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <a href="#examples">See Food Image Examples</a>
                                    </Button>
                                </div>
                                <p className="text-sm text-slate-500 mt-4">
                                    Made by Posso for UK restaurants, takeaways, cafés, pubs and delivery businesses.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {gallery.slice(0, 4).map((g) => (
                                    <img
                                        key={g.src}
                                        src={`${APP_URL}/examples/${g.src}`}
                                        alt={g.alt}
                                        width={512}
                                        height={512}
                                        className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl shadow-orange-500/10"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why images matter */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 font-headline tracking-tight mb-4">
                                Customers Eat With Their Eyes
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                A picture beside every dish makes a menu easier to browse and easier to order from. Customers can see the portion, the sides and how the dish arrives — and a menu photographed in one house style looks deliberate rather than a scrapbook of phone snaps. Our <strong className="text-white">AI food image generator</strong> gives every item on your menu that consistent look, without booking a shoot or learning a design tool.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {benefits.map((b) => (
                                <div key={b.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                                    <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                                        <b.icon className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-50 mb-2">{b.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{b.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 font-headline tracking-tight">
                                How to Create Menu Photos With AI
                            </h2>
                            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                                Three steps from menu text to menu photo. No brief, no shoot and no software to learn.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { step: '1', title: 'Describe Your Dish', desc: 'Type it as it reads on your menu, then add what matters — the cut of meat, the sides, the sauce and how it comes to the table.' },
                                { step: '2', title: 'Generate Your Image', desc: 'Get a plated, well-lit photo in the same house style as the rest of your menu. One credit per dish, with a free retry.' },
                                { step: '3', title: 'Download & Publish', desc: 'Save the 1024 × 1024 PNG and add it to your website, EPOS, kiosk, menu board or delivery listings.' },
                            ].map((s) => (
                                <div key={s.step} className="text-center">
                                    <div className="h-14 w-14 rounded-full bg-orange-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                                        {s.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-50 mb-1">{s.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="max-w-3xl mx-auto mt-16 grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-white/5 border border-white/10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">What you type</p>
                                <p className="text-lg text-slate-200 italic mb-4">
                                    &ldquo;Double cheeseburger with crispy bacon, lettuce, burger sauce and seasoned fries&rdquo;
                                </p>
                                <p className="text-sm text-slate-400">
                                    Plain English — no photography jargon and no prompt-writing. This is a real example image from the generator, not stock photography.
                                </p>
                            </div>
                            <img
                                src={`${APP_URL}/examples/burger.png`}
                                alt="AI food image generator example: double cheeseburger with bacon and fries generated from a one-sentence description"
                                width={512}
                                height={512}
                                loading="lazy"
                                className="w-full h-auto rounded-xl border border-white/10"
                            />
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section id="examples" className="py-24 bg-slate-900/50 scroll-mt-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 font-headline tracking-tight">
                                AI Menu Photo Examples — Nine Dishes, One House Style
                            </h2>
                            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                                Burgers, pizza, kebabs, curry, Chinese, chippy, breakfast, puddings and drinks — the menu you actually find on a British high street. Every image was generated from a written description.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {gallery.map((g) => (
                                <figure key={g.src} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                                    <img
                                        src={`${APP_URL}/examples/${g.src}`}
                                        alt={g.alt}
                                        width={512}
                                        height={512}
                                        loading="lazy"
                                        className="w-full h-auto"
                                    />
                                    <figcaption className="px-4 py-3 text-sm font-semibold text-slate-300">{g.label}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Where images go */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 font-headline tracking-tight">
                                One Image, Every Place You Sell
                            </h2>
                            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                                Each image downloads as an ordinary file, so it goes wherever your menu appears — nothing to connect and nothing to integrate.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {channels.map((c) => (
                                <div key={c.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                                        <c.icon className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                                        {c.href ? (
                                            <Link href={c.href} className="hover:text-orange-400 transition-colors">{c.title}</Link>
                                        ) : (
                                            c.title
                                        )}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">{c.description}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-slate-500 max-w-3xl mx-auto text-center mt-10">
                            Platform names are examples only. Food Menu Studio is not endorsed by, partnered with or integrated with any delivery marketplace, and every trade mark belongs to its owner. Check each platform&apos;s image requirements before uploading.
                        </p>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-24 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 font-headline tracking-tight">
                                Start Free, Then Buy Credits Only When You Need Them
                            </h2>
                            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
                                Every account starts with 15 free credits and no card. After that, one-off packages — no subscription, no monthly minimum and credits that never expire.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <div className="p-6 rounded-2xl border border-orange-500/40 bg-orange-500/5 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-50">Free</h3>
                                <p className="text-sm text-slate-400 mb-4">Try it on your own dishes</p>
                                <p className="text-4xl font-bold text-white mb-1">£0</p>
                                <p className="text-sm text-slate-400 mb-6">15 credits · no card required</p>
                                <Button className="mt-auto bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                    <a href={SIGNUP_URL}>Start Free</a>
                                </Button>
                            </div>
                            {packages.map((p) => (
                                <div key={p.name} className={`p-6 rounded-2xl border flex flex-col ${p.popular ? 'border-orange-500 bg-white/10' : 'border-white/10 bg-white/5'}`}>
                                    {p.popular && <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">Most popular</span>}
                                    <h3 className="text-xl font-bold text-slate-50">{p.name}</h3>
                                    <p className="text-sm text-slate-400 mb-4">{p.blurb}</p>
                                    <p className="text-4xl font-bold text-white mb-1">£{p.price}<span className="text-base font-normal text-slate-400"> + VAT</span></p>
                                    <p className="text-sm text-slate-400 mb-6">{p.credits} credits · {p.perImage}</p>
                                    <Button variant="outline" className="mt-auto" asChild>
                                        <a href={`${SIGNUP_URL}?package=${p.name.toLowerCase().replace(' ', '-')}`}>Choose {p.name}</a>
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <ul className="max-w-3xl mx-auto mt-12 grid sm:grid-cols-2 gap-4">
                            {[
                                'One credit = one dish, including a free regeneration',
                                'Failed generations are never charged',
                                'One-off payment — not a subscription',
                                'Credits do not expire',
                                'Downloads are always free',
                                'VAT invoice for every payment',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* AI vs photo shoot */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 font-headline tracking-tight text-center mb-10">
                            AI Food Images vs a Professional Food Photo Shoot
                        </h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-slate-200">
                                    <tr>
                                        <th className="p-4"></th>
                                        <th className="p-4">Traditional photo shoot</th>
                                        <th className="p-4 text-orange-400">Posso AI food image generator</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-400 divide-y divide-white/10">
                                    {[
                                        ['Speed', 'Days to weeks: booking, the shoot, then editing', 'Minutes, in one sitting'],
                                        ['Scheduling', 'A quiet window around service and a chef freed up', 'Nothing to arrange — any time, from your phone'],
                                        ['Updating one dish', 'Another visit, or wait for enough changes', 'Generate a replacement the same day'],
                                        ['Equipment', 'Cameras, lighting, backdrops, props, stylist', 'A web browser'],
                                        ['Consistency', 'Great within one session, hard to match a year later', 'Same house style every time'],
                                        ['Upfront cost', 'Quoted per session', '15 free images, then from £19 + VAT'],
                                    ].map(([label, shoot, ai]) => (
                                        <tr key={label}>
                                            <th className="p-4 font-semibold text-slate-200">{label}</th>
                                            <td className="p-4">{shoot}</td>
                                            <td className="p-4 text-slate-200">{ai}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-slate-400 mt-8 leading-relaxed">
                            A professional photographer is still the right choice for hero brand shots — your room, your chef, your actual plate. The AI food image generator handles the everyday job underneath: giving every item on a long menu a clear, consistent picture and keeping it current as the menu changes. Many businesses sensibly do both.
                        </p>
                    </div>
                </section>

                {/* Posso ecosystem */}
                <section className="py-20 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-slate-50 font-headline tracking-tight mb-4">
                            Better Photos, Better Menus Across Your Posso System
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed mb-8">
                            Pictures matter most where customers choose for themselves. Add your AI menu photos to your{' '}
                            <Link href="/pos" className="text-orange-400 hover:underline">Posso EPOS</Link>,{' '}
                            <Link href="/online-ordering" className="text-orange-400 hover:underline">commission-free online ordering</Link>,{' '}
                            <Link href="/self-order-kiosks" className="text-orange-400 hover:underline">self-order kiosks</Link> and{' '}
                            <Link href="/digital-signage" className="text-orange-400 hover:underline">digital menu boards</Link>{' '}
                            so every screen shows the same appetising, consistent menu.
                        </p>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                            <a href={SIGNUP_URL}>
                                <Share2 className="mr-2 h-4 w-4" />
                                Create 15 Images Free
                            </a>
                        </Button>
                        <p className="text-sm text-slate-500 mt-3">No card required. Upgrade only when you are ready.</p>
                    </div>
                </section>

                <FAQSection
                    title="AI Food Image Generator — Frequently Asked Questions"
                    faqs={faqs}
                    schemaId={`${PAGE_URL}#faq`}
                />
            </main>
            <Footer />
        </div>
    );
}
