
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Teya Card Machine Application Form | Posso',
  description: 'Start your application for a Teya card machine. Posso provides the best rates and seamless integration for UK businesses. Apply online today.',
  alternates: {
    canonical: '/teya-card-machine-application-form',
  },
};

export default function TeyaApplicationRedirectPage() {
  const teyaImage = PlaceHolderImages.find(p => p.id === 'teya-terminal');
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <div className="mx-auto max-w-4xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                            Teya Card Machine Application
                        </h1>
                        <p className="mt-4 text-lg text-slate-300">
                            You're in the right place to get started with a Teya card machine. We've streamlined our application process to make it faster and easier.
                        </p>
                        <p className="mt-4 text-lg text-slate-300">
                           Our new combined enquiry form allows you to compare Teya, Dojo, and Clover to ensure you get the perfect solution for your business.
                        </p>
                        <ul className="mt-6 space-y-2 text-left">
                            <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-slate-200">Get the most competitive rates</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-slate-200">Fast and simple application</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-slate-200">Full integration support</span>
                            </li>
                        </ul>
                         <Button size="lg" asChild className="mt-8">
                            <Link href="/credit-card-machines-enquiry">
                                Continue to Application Form <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="relative flex items-center justify-center">
                        {teyaImage && (
                            <Image
                                src={teyaImage.imageUrl}
                                alt={teyaImage.description}
                                width={300}
                                height={400}
                                className="object-contain"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
