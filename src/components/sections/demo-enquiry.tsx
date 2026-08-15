import { GeneralEnquiryForm } from '@/components/general-enquiry-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';

/**
 * Demo CTA that submits the site's main enquiry form directly on the page.
 *
 * Use this instead of <Contact />, which opens a Calendly booking iframe in a
 * dialog. Same `id="contact"` anchor, so existing "Get a Free Demo" buttons that
 * link to #contact keep working.
 */
export function DemoEnquiry({
  heading = 'Get Your Free ePOS Demo Today',
  intro = 'Tell us about your business and a member of the team will get back to you with a personalised demo, a quote, and answers to anything you want to check before you buy.',
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 md:px-6" aria-label="Enquire about a free ePOS demo">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300">
            {intro}
          </p>
          <p className="mt-4 text-slate-400">
            Prefer to talk?{' '}
            <a href="tel:+448081753956" className="text-primary hover:underline inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> 0808 175 3956
            </a>
          </p>
        </div>

        <Card className="mt-12 glass-card overflow-hidden">
          <CardHeader>
            <CardTitle className="text-slate-50">Enquiry Form</CardTitle>
            <CardDescription>Select the products you&apos;re interested in and provide your details.</CardDescription>
          </CardHeader>
          <CardContent>
            <GeneralEnquiryForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
