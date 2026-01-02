'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GeneralEnquiryForm } from './general-enquiry-form';
import { Sparkles } from 'lucide-react';

interface SolutionEnquiryModalProps {
  defaultSolutionId?: string;
  trigger?: React.ReactNode;
}

export function SolutionEnquiryModal({ defaultSolutionId, trigger }: SolutionEnquiryModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
            <Sparkles className="mr-2 h-5 w-5" />
            Enquire Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Solutions Enquiry</DialogTitle>
        </DialogHeader>
        <GeneralEnquiryForm />
      </DialogContent>
    </Dialog>
  );
}
