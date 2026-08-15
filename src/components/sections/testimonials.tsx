'use client';

import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Building, Star } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Stonehenge Inn',
    role: 'Proprietor, Stonehenge Inn',
    text: "Implementing the Posso POS and kiosk system was seamless. Our staff love how intuitive it is, and our customers appreciate the quicker service. We've seen a noticeable increase in average order value since installing the self-order kiosks.",
    rating: 5,
  },
  {
    name: 'Milksha',
    role: 'Franchisee, Milksha Bubble Tea',
    text: 'For a busy bubble tea shop, speed and accuracy are key. The Posso kiosks and POS have delivered on both fronts, reducing queues and order errors significantly. The online ordering integration has been a game-changer for our takeaway business.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
        />
      ))}
    </div>
  );
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.posso.co.uk/#organization",
  "name": "Posso Ltd",
  "review": testimonials.map((t) => ({
    "@type": "Review",
    "author": { "@type": "Organization", "name": t.name },
    "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5 },
    "reviewBody": t.text,
  })),
};

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-20 md:px-6" aria-label="Customer reviews of Posso ePOS systems">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
          What UK Restaurant Owners Say About Posso
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Real stories from restaurant and venue owners who transformed their business with Posso ePOS systems and self-order kiosks.
        </p>
      </div>

      <Carousel opts={{ loop: true }} className="mt-12 w-full max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="glass-card border-none overflow-hidden relative">
                    <CardContent className="flex flex-col items-center justify-center p-8 md:p-12 text-center min-h-[350px]">
                      <Quote className="w-10 h-10 text-primary/50 mb-6" />
                      <StarRating rating={testimonial.rating} />
                      <p className="text-xl md:text-2xl italic text-slate-100 font-light leading-relaxed mb-8 mt-4">
                        &quot;{testimonial.text}&quot;
                      </p>

                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 mb-4 relative rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                          <Building className="w-8 h-8 text-primary" />
                        </div>
                        <p className="font-bold text-slate-50 text-lg">{testimonial.name}</p>
                        <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* Sit inside the carousel until there is room beside it. The -60px
            offset put the arrows past the viewport edge below xl, which made
            the whole homepage scroll sideways. */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-2 xl:left-[-60px] border-slate-700 bg-slate-900/50 hover:bg-primary hover:text-white" />
          <CarouselNext className="right-2 xl:right-[-60px] border-slate-700 bg-slate-900/50 hover:bg-primary hover:text-white" />
        </div>
      </Carousel>
    </section>
  );
}
