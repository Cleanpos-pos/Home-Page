'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { submitCardMachineEnquiry } from '@/app/actions';
import { PartyPopper, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Textarea } from './ui/textarea';
import { useRouter } from 'next/navigation';
import { IframeDialog } from './iframe-dialog';

const cardMachineEnquirySchema = z.object({
  machines: z.array(z.string()).min(1, { message: 'Please select at least one machine.' }),
  name: z.string().min(2, 'Name is required.'),
  company: z.string().min(2, 'Company name is required.'),
  email: z.string().email('A valid email is required.'),
  phone: z.string().min(10, 'A valid phone number is required.'),
  message: z.string().optional(),
});

type EnquiryFormValues = z.infer<typeof cardMachineEnquirySchema>;

const machineOptions = [
  { id: 'teya', label: 'Teya', imageId: 'teya-terminal' },
  { id: 'dojo', label: 'Dojo', imageId: 'dojo-go' },
  { id: 'clover', label: 'Clover', imageId: 'clover-flex' },
];

export function CardMachineEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(cardMachineEnquirySchema),
    defaultValues: {
      machines: [],
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);
    setServerError(null);
    try {
      const result = await submitCardMachineEnquiry(data);
      setIsSubmitting(false);

      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => router.push('/'), 4000);
      } else {
        setServerError(result.message);
        if (result.errors) {
          console.error('Validation errors:', result.errors);
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setServerError(`Connection Error: ${errorMessage}. Please try again or call us at 0808 175 3956.`);
    }
  };

  if (isSuccess) {
    return (
      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 min-h-[450px] flex flex-col justify-center">
        <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-50 mb-2">Thank You!</h3>
        <p className="text-slate-300">Your enquiry has been sent. We'll be in touch shortly.</p>
      </motion.div>
    );
  }

  return (
    <div className="p-1">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-100">Which card machines are you interested in?</h3>
          <Controller
            name="machines"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-3 gap-4">
                {machineOptions.map((option) => {
                  const image = PlaceHolderImages.find(p => p.id === option.imageId);
                  const isChecked = field.value?.includes(option.id);
                  return (
                    <Label
                      key={option.id}
                      htmlFor={option.id}
                      className={`cursor-pointer rounded-lg border-2 p-4 flex flex-col items-center justify-center transition-all ${isChecked ? 'border-primary bg-primary/10' : 'border-slate-700 bg-slate-800/50'}`}
                    >
                      {image ? <img src={image.imageUrl} alt={option.label} width="80" height="80" className="object-contain h-20 w-20 mb-2" /> : <div className="h-20 w-20 bg-slate-700 rounded-md mb-2" />}
                      <span className="font-semibold text-slate-100">{option.label}</span>
                      <Checkbox
                        id={option.id}
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          const newValue = checked
                            ? [...(field.value || []), option.id]
                            : (field.value || []).filter((v) => v !== option.id);
                          field.onChange(newValue);
                        }}
                        className="hidden"
                      />
                    </Label>
                  );
                })}
              </div>
            )}
          />
          {errors.machines && <p className="text-destructive text-sm mt-2">{errors.machines.message}</p>}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-100">Please enter your contact details.</h3>
          <div className="space-y-4">
            <Controller name="name" control={control} render={({ field }) => <Input placeholder="Full Name" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
            {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
            <Controller name="company" control={control} render={({ field }) => <Input placeholder="Company Name" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
            {errors.company && <p className="text-destructive text-sm">{errors.company.message}</p>}
            <Controller name="email" control={control} render={({ field }) => <Input type="email" placeholder="Email Address" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
            {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
            <Controller name="phone" control={control} render={({ field }) => <Input type="tel" placeholder="Phone Number" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
            {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-100">Anything else we should know? (Optional)</h3>
          <Controller name="message" control={control} render={({ field }) => <Textarea placeholder="Your message..." {...field} className="bg-slate-800 border-slate-700 text-white h-24" />} />
          {errors.message && <p className="text-destructive text-sm mt-2">{errors.message.message}</p>}
        </div>

        {serverError && <p className="text-destructive text-center mt-4">{serverError}</p>}

        <div className="flex justify-between items-center pt-4">
          <IframeDialog
            title="AI Voice Assistant"
            url="https://posso-ltd-ai-voice-assistant-365092986942.us-west1.run.app/"
            trigger={
              <Button type="button" variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-700 hover:border-green-800">
                <Phone className="mr-2 h-5 w-5" />
                Click to Talk Now
              </Button>
            }
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </Button>
        </div>
      </form>
    </div>
  );
}
