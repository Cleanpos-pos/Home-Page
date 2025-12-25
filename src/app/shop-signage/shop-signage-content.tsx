'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, PenTool, Gem, Phone } from 'lucide-react';
import Link from 'next/link';
import { IframeDialog } from '@/components/iframe-dialog';

export function ShopSignageContent() {

  return (
    <>
      <section className="relative w-full min-h-screen/2 flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                  Creative & Professional <br/><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Shop Signage</span>
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-400">
                 Make a lasting first impression. We create eye-catching, durable custom signage for your shop front, interior, and promotional needs.
              </p>
              <div className="mt-8 flex gap-4 justify-center">
                  <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                      <Link href="/contact">
                          Discuss Your Signage <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <PenTool className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-50">Custom Design</h3>
                  <p className="text-slate-300">Our designers will create a unique sign that captures your brand's identity and attracts customers.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-50">Illuminated & 3D</h3>
                  <p className="text-slate-300">Stand out day and night with stunning LED illuminated signs and 3D lettering for maximum impact.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Gem className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-50">Premium Materials</h3>
                  <p className="text-slate-300">We use only high-quality, weather-resistant materials to ensure your sign looks great for years to come.</p>
              </div>
          </div>
      </section>
    </>
  );
}
