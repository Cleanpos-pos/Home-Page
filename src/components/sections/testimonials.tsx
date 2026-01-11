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
import type { AnalyzeTestimonialSentimentOutput } from '@/ai/flows/analyze-testimonial-sentiment';
import { Quote, Building } from 'lucide-react';

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
    name: 'Stonehenge Inn',
    role: 'Proprietor, Stonehenge Inn',
    avatarId: 'logo-stonehenge-inn',
    text: "Implementing the Posso POS and kiosk system was seamless. Our staff love how intuitive it is, and our customers appreciate the quicker service.",
    sentiment: 'positive',
    confidence: 0.98
  },
  {
    name: 'Milksha',
    role: 'Franchisee, Milksha',
    avatarId: 'logo-milksha',
    text: 'For a busy bubble tea shop, speed and accuracy are key. The Posso kiosks and POS have delivered on both fronts, reducing queues and errors significantly.',
    sentiment: 'positive',
    confidence: 0.95
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
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="glass-card border-none overflow-hidden relative">
                    <div className="absolute top-4 right-4">
                      {testimonial.sentiment === 'positive' && (
                        <span className="bg-green-500/20 text-green-400 text-[10px] uppercase tracking-wider font-bold py-1 px-2 rounded-full border border-green-500/30">
                          Verified Positive
                        </span>
                      )}
                    </div>
                    <CardContent className="flex flex-col items-center justify-center p-8 md:p-12 text-center min-h-[350px]">
                      <Quote className="w-10 h-10 text-primary/50 mb-6" />
                      <p className="text-xl md:text-2xl italic text-slate-100 font-light leading-relaxed mb-8">
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
        <div className="hidden md:block">
          <CarouselPrevious className="left-[-60px] border-slate-700 bg-slate-900/50 hover:bg-primary hover:text-white" />
          <CarouselNext className="right-[-60px] border-slate-700 bg-slate-900/50 hover:bg-primary hover:text-white" />
        </div>
      </Carousel>
    </section>
  );
}
