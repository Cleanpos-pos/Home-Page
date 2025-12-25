import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CardMachineEnquiryForm } from '@/components/card-machine-enquiry-form';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Card Machine Enquiry',
  description: 'Start your enquiry for Teya, Dojo, or Clover card machines. Select the products you\'re interested in and provide your details.',
  alternates: {
    canonical: '/credit-card-machines-enquiry',
  },
};

export default function CardMachineEnquiryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                        Card Machine Enquiry
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Let's find the perfect payment solution for your business.
                    </p>
                </div>

                <Card className="mt-12 glass-card overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-slate-50">Enquiry Form</CardTitle>
                        <CardDescription>Select the machines you're interested in and provide your details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <CardMachineEnquiryForm />
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
