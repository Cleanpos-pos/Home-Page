import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Business Equipment Finance Calculator',
  description: 'Estimate your monthly payments for business and equipment financing with our easy-to-use calculator. Get a quick quote for your ePOS, kiosk, or digital signage investment.',
  alternates: {
    canonical: '/finance',
  },
};

export default function FinancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                    Equipment Finance Calculator
                </h1>
                <p className="mt-4 text-lg text-slate-300">
                    See how affordable your new equipment could be. Use our finance calculator below to get an instant estimate of your monthly payments.
                </p>
            </div>

            <Card className="mt-12 glass-card overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-slate-50">Finance Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video h-[600px] w-full">
                        <iframe
                            src="https://www.kennet-leasing.co.uk/swbusiness-equipment-finance-from-kennet-equipment-leasing"
                            className="w-full h-full border-0 rounded-md"
                            title="Kennet Leasing Finance Calculator"
                        />
                    </div>
                </CardContent>
            </Card>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
