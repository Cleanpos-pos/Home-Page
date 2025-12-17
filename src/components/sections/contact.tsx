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
import { Calendar, X } from 'lucide-react';

export function ContactDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] h-[80vh] p-0 flex flex-col">
        <DialogHeader className="p-4 border-b flex-row flex items-center justify-between">
          <DialogTitle>Book a Demo</DialogTitle>
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
            title="Book a Demo"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
          Ready to Upgrade?
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Let's talk about how Posso can revolutionise your restaurant. Book a
          free, no-obligation demo with our team today.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl text-center">
        <ContactDialog>
          <Button size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            Book a Demo
          </Button>
        </ContactDialog>
      </div>
    </section>
  );
}
