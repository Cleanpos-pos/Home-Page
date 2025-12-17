'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { analyzeSentimentAction } from '@/app/actions';
import type { AnalyzeTestimonialSentimentOutput } from '@/ai/flows/analyze-testimonial-sentiment';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    name: 'Jane Doe',
    role: 'CEO, Innovate Inc.',
    avatarId: 'avatar-1',
    text: 'Posso Ltd delivered beyond our wildest expectations. Their team is professional, brilliant, and an absolute pleasure to work with. Our new platform is a masterpiece of engineering.',
  },
  {
    name: 'John Smith',
    role: 'CTO, Future Forward',
    avatarId: 'avatar-2',
    text: 'The project had some challenges and timeline adjustments, but the final product was solid. The communication was okay, but could have been more proactive. Overall, a satisfactory result.',
  },
  {
    name: 'Emily White',
    role: 'Founder, StartupX',
    avatarId: 'avatar-3',
    text: "Working with Posso was a game-changer. They understood our vision from day one and executed it flawlessly. I can't recommend them enough!",
  },
];

export function Testimonials() {
  const { toast } = useToast();
  const [testimonials] = useState<Testimonial[]>(initialTestimonials);
  const [newTestimonial, setNewTestimonial] = useState('');
  const [isPending, startTransition] = useTransition();
  const [analysisResult, setAnalysisResult] = useState<AnalyzeTestimonialSentimentOutput | null>(null);

  const handleAnalyze = () => {
    startTransition(async () => {
      const result = await analyzeSentimentAction(newTestimonial);
      if ('sentiment' in result) {
        setAnalysisResult(result);
      } else {
        toast({
          title: "Analysis Error",
          description: result.error,
          variant: "destructive"
        })
        console.error(result.error);
      }
    });
  };
  
  const getSentimentBadgeVariant = (sentiment?: string): 'default' | 'secondary' | 'destructive' => {
    switch (sentiment) {
      case 'positive':
        return 'default';
      case 'neutral':
        return 'secondary';
      case 'negative':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <section id="testimonials" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">What Our Clients Say</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Real stories from partners we&apos;ve helped empower.
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
                          width={80}
                          height={80}
                          className="rounded-full"
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

      <div className="mx-auto mt-20 max-w-2xl text-center glass-card p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-slate-50">Try Our Sentiment Analyzer</h3>
        <p className="mt-2 text-slate-300">Enter a testimonial below to see our AI evaluate its sentiment in real-time.</p>
        <div className="mt-6 space-y-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="new-testimonial" className="text-slate-300">Your Testimonial</Label>
            <Textarea
              id="new-testimonial"
              value={newTestimonial}
              onChange={(e) => setNewTestimonial(e.target.value)}
              placeholder="e.g., 'The service was absolutely amazing!'"
              rows={4}
              className="bg-slate-800/50 border-slate-700 focus:ring-accent"
            />
          </div>
          <Button onClick={handleAnalyze} disabled={isPending || newTestimonial.length < 10} className="w-full sm:w-auto">
            {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
            Analyze Sentiment
          </Button>
        </div>

        {analysisResult && (
          <div className="mt-6 text-left p-4 bg-slate-900/50 rounded-lg animate-in fade-in">
            <h4 className="font-bold text-slate-100">Analysis Result:</h4>
            <div className="flex items-center gap-4 mt-2">
              <Badge variant={getSentimentBadgeVariant(analysisResult.sentiment)} className="capitalize">
                {analysisResult.sentiment}
              </Badge>
              <p className="text-sm text-slate-300">
                Confidence: <span className="font-code font-bold text-slate-50">{(analysisResult.confidence * 100).toFixed(0)}%</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
