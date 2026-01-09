
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hourglass, ArrowLeft, Building, ShoppingCart, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const hospitalityLinks = [
  { href: '/pos', title: 'ePOS Systems' },
  { href: '/kiosks', title: 'Self-Order Kiosks' },
  { href: '/digital-signage', title: 'Kitchen Displays' },
  { href: '/online-ordering', title: 'Online Ordering' },
  { href: '/franchise', title: 'Franchise Solutions' },
];

const retailLinks = [
  { href: '/digital-signage', title: 'Digital Signage' },
  { href: '/shop-fitting', title: 'Shop Fitting' },
  { href: '/shop-signage', title: 'Shop Signage' },
];

const companyLinks = [
  { href: '/#about', title: 'About Us' },
  { href: '/blog', title: 'Blog' },
  { href: '/contact', title: 'Contact' },
  { href: '/agents', title: 'Become an Agent' },
  { href: '/finance', title: 'Finance Calculator' },
];

// Function to shuffle an array
const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default function NotFound() {
  const [shuffledHospitality, setShuffledHospitality] = useState<typeof hospitalityLinks | null>(null);
  const [shuffledRetail, setShuffledRetail] = useState<typeof retailLinks | null>(null);
  const [shuffledCompany, setShuffledCompany] = useState<typeof companyLinks | null>(null);

  useEffect(() => {
    // This code runs only on the client, after the initial render.
    // This prevents the hydration mismatch error.
    setShuffledHospitality(shuffle([...hospitalityLinks]));
    setShuffledRetail(shuffle([...retailLinks]));
    setShuffledCompany(shuffle([...companyLinks]));
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center text-center pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <Hourglass className="mx-auto h-12 w-12 text-primary animate-spin-slow" />
            <h1 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
              Page Not Found
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Sorry, we couldn't find the page you were looking for. It might have been moved or deleted.
            </p>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-100 mb-8">Perhaps you were looking for one of these pages?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              
              {/* Hospitality Section */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-primary">
                  <ShoppingCart className="w-6 h-6" />
                  Hospitality
                </h3>
                {shuffledHospitality && (
                  <div className="flex flex-col gap-2">
                    {shuffledHospitality.map(link => (
                      <Link href={link.href} key={link.href} className="text-slate-300 hover:text-primary hover:underline underline-offset-4 transition-colors">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Retail Section */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-primary">
                  <Briefcase className="w-6 h-6" />
                  Retail Solutions
                </h3>
                 {shuffledRetail && (
                    <div className="flex flex-col gap-2">
                    {shuffledRetail.map(link => (
                        <Link href={link.href} key={link.href} className="text-slate-300 hover:text-primary hover:underline underline-offset-4 transition-colors">
                        {link.title}
                        </Link>
                    ))}
                    </div>
                 )}
              </div>

              {/* Company Section */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-primary">
                  <Building className="w-6 h-6" />
                  Company
                </h3>
                 {shuffledCompany && (
                    <div className="flex flex-col gap-2">
                    {shuffledCompany.map(link => (
                        <Link href={link.href} key={link.href} className="text-slate-300 hover:text-primary hover:underline underline-offset-4 transition-colors">
                        {link.title}
                        </Link>
                    ))}
                    </div>
                 )}
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Button asChild>
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Or Go Back to Homepage
                </Link>
            </Button>
        </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
