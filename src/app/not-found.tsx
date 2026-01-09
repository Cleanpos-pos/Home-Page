'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hourglass, ArrowLeft, Building, ShoppingCart, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

export default function NotFound() {

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
                <div className="flex flex-col gap-2">
                  {hospitalityLinks.map(link => (
                    <Link href={link.href} key={link.href} className="text-slate-300 hover:text-primary hover:underline underline-offset-4 transition-colors">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Retail Section */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-primary">
                  <Briefcase className="w-6 h-6" />
                  Retail Solutions
                </h3>
                 <div className="flex flex-col gap-2">
                  {retailLinks.map(link => (
                    <Link href={link.href} key={link.href} className="text-slate-300 hover:text-primary hover:underline underline-offset-4 transition-colors">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Section */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-primary">
                  <Building className="w-6 h-6" />
                  Company
                </h3>
                 <div className="flex flex-col gap-2">
                  {companyLinks.map(link => (
                    <Link href={link.href} key={link.href} className="text-slate-300 hover:text-primary hover:underline underline-offset-4 transition-colors">
                      {link.title}
                    </Link>
                  ))}
                </div>
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
