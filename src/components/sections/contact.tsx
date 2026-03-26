'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Calendar, Phone, X } from 'lucide-react';

export function ContactDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] h-[80vh] p-0 flex flex-col">
        <DialogHeader className="p-4 border-b flex-row flex items-center justify-between">
          <DialogTitle>Book a call back</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex-1">
          <iframe
            src="https://calendly.com/delivrr/15min"
            className="w-full h-full border-0"
            title="Book a free consultation with Posso"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 md:px-6" aria-label="Contact Posso for a free ePOS demo">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
          Get Your Free ePOS Demo Today
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          See how Posso can transform your restaurant or venue. Book a free, no-obligation consultation with our team and get a personalised demo of our ePOS systems, self-order kiosks, and more.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl text-center flex flex-col sm:flex-row gap-4 justify-center">
        <ContactDialog>
          <Button size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            Book a Free Consultation
          </Button>
        </ContactDialog>
        <Button size="lg" variant="outline" asChild>
          <a href="tel:+448081753956">
            <Phone className="mr-2 h-5 w-5" />
            Call 0808 175 3956
          </a>
        </Button>
      </div>

      <p className="text-center text-sm text-slate-500 mt-6 max-w-lg mx-auto">
        Free call &mdash; available Monday to Friday, 9am&ndash;5:30pm. Or email us anytime at{' '}
        <a href="mailto:info@posso.uk" className="text-primary hover:underline">info@posso.uk</a>
      </p>
    </section>
  );
}
