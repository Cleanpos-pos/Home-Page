'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Contact } from './sections/contact';

type SolutionsLandingPageProps = {
  headline: string;
  subheadline: string;
  benefits: string[];
  ctaText: string;
};

export function SolutionsLandingPage({ headline, subheadline, benefits, ctaText }: SolutionsLandingPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  {headline}
              </h1>
              <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-300">
                  {subheadline}
              </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20 -mt-24 relative z-10">
            <div className="mx-auto max-w-4xl glass-card p-8 md:p-12 rounded-2xl">
                <h2 className="text-3xl font-bold text-slate-100 mb-6">Why Posso?</h2>
                <div className="grid md:grid-cols-1 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <Check className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-50">{benefit.split(':')[0]}</h3>
                                <p className="text-slate-300">{benefit.split(': ')[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Button size="lg">
                        {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
