'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { Badge } from '../ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CardMachineEnquiryForm } from '../card-machine-enquiry-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useState } from 'react';
import Link from 'next/link';

export function CreditCardMachinesHero() {
  const teyaImage = PlaceHolderImages.find(p => p.id === 'teya-terminal');
  const dojoImage = PlaceHolderImages.find(p => p.id === 'dojo-go');
  const cloverImage = PlaceHolderImages.find(p => p.id === 'clover-flex');
  const [open, setOpen] = useState(false);


  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
                    <Zap className="w-3 h-3 mr-2" />
                    SEAMLESS PAYMENT SOLUTIONS
                </Badge>
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    Integrated Credit Card <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Machines</span>
                </h1>
                <p className="max-w-xl text-lg text-slate-400">
                   We supply and integrate industry-leading payment solutions from Teya, Dojo, and Clover. Faster, more secure, and fully integrated with your Posso EPOS system.
                </p>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                            Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                            <DialogTitle>Card Machine Enquiry</DialogTitle>
                        </DialogHeader>
                        <CardMachineEnquiryForm onFormSubmit={() => setOpen(false)} />
                    </DialogContent>
                </Dialog>

            </div>

            <div className="relative flex items-center justify-center h-[500px]">
                <div className="relative w-full h-full flex items-center justify-center">
                    {cloverImage && (
                        <div className="absolute animate-float z-20" style={{ animationDelay: '0s'}}>
                            <img
                                src={cloverImage.imageUrl}
                                alt={cloverImage.description}
                                width={250}
                                height={250}
                                className="object-contain glass-card p-2 rounded-lg"
                            />
                        </div>
                    )}
                     {teyaImage && (
                        <div className="absolute animate-float z-10 top-10 left-10" style={{ animationDelay: '1s'}}>
                            <img
                                src={teyaImage.imageUrl}
                                alt={teyaImage.description}
                                width={200}
                                height={200}
                                className="object-contain glass-card p-2 rounded-lg"
                            />
                        </div>
                    )}
                     {dojoImage && (
                        <div className="absolute animate-float bottom-10 right-10" style={{ animationDelay: '2s'}}>
                            <img
                                src={dojoImage.imageUrl}
                                alt={dojoImage.description}
                                width={200}
                                height={200}
                                className="object-contain glass-card p-2 rounded-lg"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}
