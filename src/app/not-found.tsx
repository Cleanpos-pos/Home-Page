'use client';

import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hourglass, ArrowLeft, Home, ShoppingCart, Smartphone, Ticket, CreditCard, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const siteLinks = [
  { href: '/', title: 'Homepage', description: 'Return to the main page.', icon: <Home className="w-8 h-8 text-primary" /> },
  { href: '/pos', title: 'ePOS Systems', description: 'Explore our restaurant ePOS solutions.', icon: <ShoppingCart className="w-8 h-8 text-primary" /> },
  { href: '/kiosks', title: 'Self-Order Kiosks', description: 'Learn about our self-service kiosks.', icon: <Smartphone className="w-8 h-8 text-primary" /> },
  { href: '/ticketing', title: 'Ticketing Solutions', description: 'Discover our venue management platform.', icon: <Ticket className="w-8 h-8 text-primary" /> },
  { href: '/credit-card-machines', title: 'Card Machines', description: 'Find the right payment terminal.', icon: <CreditCard className="w-8 h-8 text-primary" /> },
  { href: '/franchise', title: 'Franchise Systems', description: 'Scale your brand with our ecosystem.', icon: <Building className="w-8 h-8 text-primary" /> },
]

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
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Perhaps you were looking for...</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {siteLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  <Card className="glass-card text-left h-full">
                    <CardHeader className="flex-row items-center gap-4">
                      {link.icon}
                      <CardTitle className="text-xl text-slate-100">{link.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
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
