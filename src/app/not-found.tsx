'use client';

import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hourglass, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center text-center pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <Hourglass className="mx-auto h-16 w-16 text-primary animate-spin-slow" />
            <h1 className="mt-8 text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
              404 - Page Not Found
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Sorry, we couldn't find the page you were looking for. It might have been moved or deleted.
            </p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go to Homepage
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
