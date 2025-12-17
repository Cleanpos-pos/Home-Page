'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const initialState: FormState = { message: '' };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  
  useEffect(() => {
    if (state.message) {
      if (state.issues || state.fields) {
        // Inline errors are shown, a toast is not necessary for field errors.
      } else {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);
  
  return (
    <section id="contact" className="container mx-auto px-4 py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Get in Touch</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Have a project in mind or just want to say hello? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-300">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" className="bg-slate-800/50 border-slate-700 focus:ring-accent" />
              {state?.fields?.name && <p className="text-sm text-destructive mt-1">{state.fields.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" className="bg-slate-800/50 border-slate-700 focus:ring-accent" />
              {state?.fields?.email && <p className="text-sm text-destructive mt-1">{state.fields.email}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-300">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your idea..." rows={5} className="bg-slate-800/50 border-slate-700 focus:ring-accent" />
            {state?.fields?.message && <p className="text-sm text-destructive mt-1">{state.fields.message}</p>}
          </div>
          <SubmitButton />
          {state.message && (state.issues || state.fields) && <p className="text-sm text-destructive mt-2 text-center">{state.message}</p>}
        </form>
      </div>
    </section>
  );
}
