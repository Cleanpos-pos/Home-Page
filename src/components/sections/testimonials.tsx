'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { AnalyzeTestimonialSentimentOutput } from '@/ai/flows/analyze-testimonial-sentiment';

type Testimonial = {
  name: string;
  role: string;
  avatarId: string;
  text: string;
  sentiment?: AnalyzeTestimonialSentimentOutput['sentiment'];
  confidence?: AnalyzeTestimonialSentimentOutput['confidence'];
};

const initialTestimonials: Testimonial[] = [
  {
    name: 'Flava25',
    role: 'Owner, Flava25',
    avatarId: 'logo-flava',
    text: "Posso's complete range of services has been a revelation for our business. From the ePOS to the online ordering system, everything works in perfect harmony.",
  },
  {
    name: 'Wingstar',
    role: 'Manager, Wingstar',
    avatarId: 'logo-wingstar',
    text: 'The kiosks and POS systems are brilliant, but the integrated online ordering has truly expanded our reach. Our takeaway orders have soared!',
  },
  {
    name: 'Love Chicken',
    role: 'Founder, Love Chicken',
    avatarId: 'logo-love-chicken',
    text: "The self-service kiosks have been a massive hit with our regulars. It's streamlined our entire ordering process, especially during the lunch rush.",
  },
  {
    name: 'Stonehenge Inn',
    role: 'Proprietor, Stonehenge Inn',
    avatarId: 'logo-stonehenge-inn',
    text: "Implementing the Posso POS and kiosk system was seamless. Our staff love how intuitive it is, and our customers appreciate the quicker service.",
  },
  {
    name: 'Milksha',
    role: 'Franchisee, Milksha',
    avatarId: 'logo-milksha',
    text: 'For a busy bubble tea shop, speed and accuracy are key. The Posso kiosks and POS have delivered on both fronts, reducing queues and errors significantly.',
  }
];

export function Testimonials() {
  const [testimonials] = useState<Testimonial[]>(initialTestimonials);
  
  return (
    <section id="testimonials" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">What Our Clients Say</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Real stories from restaurant owners we've helped empower.
        </p>
      </div>

      <Carousel opts={{ loop: true }} className="mt-12 w-full max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            const avatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="glass-card border-none">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      {avatar && (
                        <Image
                          src={avatar.imageUrl}
                          alt={testimonial.name}
                          data-ai-hint={avatar.imageHint}
                          width={120}
                          height={60}
                          className="object-contain h-16 w-32"
                        />
                      )}
                      <p className="mt-6 text-lg italic text-slate-200">&quot;{testimonial.text}&quot;</p>
                      <p className="mt-4 font-bold text-slate-50">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-[-50px]" />
        <CarouselNext className="right-[-50px]" />
      </Carousel>
    </section>
  );
}

    