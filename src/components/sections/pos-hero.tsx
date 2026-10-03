'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Phone } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { SolutionEnquiryModal } from '../solution-enquiry-modal';
import { posso } from '@/lib/possoFacts';

export function PosHero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="min-w-0 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                    <Zap className="w-3 h-3 mr-2" />
                    UK EPOS SYSTEMS
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">EPOS Systems</span> <br />
                    for UK Restaurants, Takeaways, Caf&eacute;s and Pubs
                </h1>
                <p className="max-w-xl text-lg text-slate-300">
                    Posso builds EPOS systems for UK hospitality &mdash; the till on the counter, the kiosk by the door,
                    the screen in the kitchen, the card machine in your hand and the ordering site your customers use,
                    all running as one system rather than five that don&rsquo;t talk to each other.
                </p>
                <p className="max-w-xl text-slate-400">
                    Everything is built and supported in the UK, from our base in Leicester. Systems are plug-and-play
                    with free setup, covering menu building and equipment configuration, and carry a {posso.warrantyYearsWord}-year warranty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <SolutionEnquiryModal
                        defaultSolutionId="pos"
                        trigger={
                            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                                Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        }
                    />
                    <Button asChild size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                        <a href={posso.phoneHref}>
                            <Phone className="mr-2 h-5 w-5" /> {posso.phone}
                        </a>
                    </Button>
                </div>
                <p className="text-sm text-slate-500">
                    Written by the Posso product team, reviewed by{' '}
                    <Link href="/about/paul-robinson" className="text-slate-400 underline underline-offset-2 hover:text-primary">
                        Paul Robinson, Managing Director
                    </Link>
                    .
                </p>
            </div>

            {/* A real Posso One screen, not stock photography (was an Unsplash image
                of a generic till). It is also the page's likely LCP element, so it
                loads eagerly with high fetch priority. */}
            <div className="min-w-0 relative flex items-center justify-center">
              <img
                src="/images/posso-epos-order-types-till.png"
                alt="Posso EPOS till order-types screen with Eat In, Takeaway and Delivery plus manager operations"
                width={1914}
                height={912}
                fetchPriority="high"
                className="rounded-lg w-full h-auto max-w-2xl glass-card p-2"
              />
            </div>
        </div>
    </section>
  );
}
