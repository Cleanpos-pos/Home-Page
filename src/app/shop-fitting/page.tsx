'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/sections/contact';
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, Hammer, Paintbrush, Check, Lightbulb, DraftingCompass, Handshake, Phone } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { IframeDialog } from '@/components/iframe-dialog';

const galleryImages = [
    { id: 'digital-signage-display', alt: 'Modern restaurant interior with digital signage' },
    { id: 'kiosk-hero', alt: 'Sleek self-service kiosk area' },
    { id: 'franchise-dashboard', alt: 'A well-lit and branded counter area' },
    { id: 'pos-system-hero', alt: 'A complete point-of-sale and counter setup' },
];

const services = [
    "Bespoke counters & joinery",
    "Commercial kitchens & extraction",
    "Flooring & wall finishes",
    "Ambient & feature lighting",
    "Customer seating & tables",
    "Digital menu boards & signage",
    "Full project management",
];

const processSteps = [
    {
        icon: <Lightbulb className="w-8 h-8 text-primary" />,
        title: "1. Consultation & Design",
        description: "We start by understanding your vision, brand, and operational needs to create a bespoke design and layout plan."
    },
    {
        icon: <DraftingCompass className="w-8 h-8 text-primary" />,
        title: "2. Build & Manufacture",
        description: "Our craftsmen use high-quality materials to build all custom elements, from counters to seating, in our workshop."
    },
    {
        icon: <Hammer className="w-8 h-8 text-primary" />,
        title: "3. On-Site Installation",
        description: "Our experienced team manages the entire on-site installation, coordinating all trades to ensure a smooth and efficient fit-out."
    },
    {
        icon: <Handshake className="w-8 h-8 text-primary" />,
        title: "4. Handover & Support",
        description: "We walk you through your new space to ensure every detail is perfect and provide ongoing support for your peace of mind."
    }
];

export default function ShopFittingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'shop-fitting');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Expert <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Shop Fitting</span> Services
                </h1>
                <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-400">
                    From concept to completion, we design and build stunning, functional spaces for restaurants and retail stores that captivate customers and streamline operations.
                </p>
                <div className="mt-8 flex gap-4 justify-center">
                     <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                        <Link href="/contact">
                            Get a Fitting Quote <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <IframeDialog
                        title="AI Voice Assistant"
                        url="https://posso-ltd-ai-voice-assistant-365092986942.us-west1.run.app/"
                        trigger={
                            <Button size="lg" variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-700 hover:border-green-800">
                                <Phone className="mr-2 h-5 w-5" />
                                Click to Talk Now
                            </Button>
                        }
                    />
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map(imageInfo => {
                    const image = PlaceHolderImages.find(p => p.id === imageInfo.id);
                    if (!image) return null;
                    return (
                        <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden glass-card p-1">
                            <Image 
                                src={image.imageUrl} 
                                alt={imageInfo.alt}
                                fill
                                data-ai-hint={image.imageHint}
                                className="object-cover rounded-md"
                            />
                        </div>
                    )
                })}
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">From Vision to Reality</h2>
                <p className="mt-4 text-lg text-slate-300">We offer a complete turnkey solution for restaurant and retail fit-outs. Our team manages every aspect of the project, ensuring your new space is not only beautiful but also perfectly aligned with your operational needs.</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                    {services.map(service => (
                        <div key={service} className="flex items-center gap-2 text-slate-300">
                            <Check className="h-5 w-5 text-primary" />
                            <span>{service}</span>
                        </div>
                    ))}
                </div>
            </div>
             <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        data-ai-hint={heroImage.imageHint}
                        width={800}
                        height={600}
                        className="rounded-lg object-cover"
                    />
                )}
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Our Process</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
                    A streamlined journey from initial idea to grand opening.
                </p>
            </div>
             <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map(step => (
                    <div key={step.title} className="glass-card p-6 rounded-lg text-center flex flex-col items-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-50">{step.title}</h3>
                        <p className="text-slate-400 mt-2 flex-grow">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
