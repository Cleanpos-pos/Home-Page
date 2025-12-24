
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GeneralEnquiryForm } from '@/components/general-enquiry-form';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Posso team. Whether you have a question about our products, need a quote, or want to discuss a project, we are here to help.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                        Make an Enquiry
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        We'd love to hear from you. Fill out the form below and a member of our team will get in touch shortly.
                    </p>
                </div>

                <Card className="mt-12 glass-card overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-slate-50">Enquiry Form</CardTitle>
                        <CardDescription>Select the products you're interested in and provide your details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <GeneralEnquiryForm onFormSubmit={() => {}} />
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
