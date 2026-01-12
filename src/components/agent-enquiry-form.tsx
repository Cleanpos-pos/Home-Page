'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { AnimatePresence, motion } from 'framer-motion';
import { submitAgentEnquiry } from '@/app/actions';
import { PartyPopper, ShoppingCart, Smartphone, CreditCard, MonitorPlay, Search, Megaphone, MapPin } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { useRouter } from 'next/navigation';

const agentEnquirySchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('A valid email is required.'),
  phone: z.string().min(10, 'A valid phone number is required.'),
  location: z.string().min(2, 'Location is required.'),
  experience: z.string().min(20, 'Please provide some detail on your sales background.'),
  interest: z.array(z.string()).min(1, { message: 'Please select at least one product.' }),
});

type EnquiryFormValues = z.infer<typeof agentEnquirySchema>;

const interestOptions = [
  { id: 'pos-systems', label: 'ePOS Systems', icon: <ShoppingCart className="w-6 h-6 text-primary" /> },
  { id: 'card-machines', label: 'Card Machines', icon: <CreditCard className="w-6 h-6 text-primary" /> },
  { id: 'kiosks', label: 'Self-Order Kiosks', icon: <Smartphone className="w-6 h-6 text-primary" /> },
  { id: 'digital-signage', label: 'Digital Signage', icon: <MonitorPlay className="w-6 h-6 text-primary" /> },
  { id: 'seo-marketing', label: 'SEO & Marketing', icon: <Search className="w-6 h-6 text-primary" /> },
  { id: 'social-media', label: 'Social Media', icon: <Megaphone className="w-6 h-6 text-primary" /> },
  { id: 'google-business', label: 'Google Business', icon: <MapPin className="w-6 h-6 text-primary" /> },
];

export function AgentEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(agentEnquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      interest: [],
    },
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);
    setServerError(null);
    const result = await submitAgentEnquiry(data);
    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      if ('whatsappMessage' in result && result.whatsappMessage) {
        const whatsappUrl = `https://wa.me/447867597844?text=${result.whatsappMessage as string}`;
        window.open(whatsappUrl, '_blank');
      }
      setTimeout(() => router.push('/'), 5000);
    } else {
      setServerError(result.message);
      if (result.errors) {
        console.error('Validation errors:', result.errors);
      }
    }
  };

  if (isSuccess) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 min-h-[450px] flex flex-col justify-center">
        <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-50 mb-2">Thank You!</h3>
        <p className="text-slate-300">Your application has been submitted. We'll be in touch if your profile is a good match.</p>
      </motion.div>
    );
  }

  return (
    <div className="p-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-100">Your Details</h3>
          <Controller name="name" control={control} render={({ field }) => <Input placeholder="Full Name" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
          {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
          <Controller name="email" control={control} render={({ field }) => <Input type="email" placeholder="Email Address" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
          {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
          <Controller name="phone" control={control} render={({ field }) => <Input type="tel" placeholder="Phone Number" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
          {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
          <Controller name="location" control={control} render={({ field }) => <Input placeholder="Your Location (e.g., city or postcode)" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
          {errors.location && <p className="text-destructive text-sm">{errors.location.message}</p>}

          <h3 className="text-lg font-semibold text-slate-100 pt-4">Your Experience</h3>
          <Controller name="experience" control={control} render={({ field }) => <Textarea placeholder="e.g., I have 5 years experience in B2B sales..." {...field} className="bg-slate-800 border-slate-700 text-white h-24" />} />
          {errors.experience && <p className="text-destructive text-sm">{errors.experience.message}</p>}

          <h3 className="text-lg font-semibold text-slate-100 pt-4">What are you most interested in selling?</h3>
          <Controller
            name="interest"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-2 gap-4">
                {interestOptions.map((option) => {
                  const isChecked = field.value?.includes(option.id);
                  return (
                    <Label
                      key={option.id}
                      htmlFor={`agent_${option.id}`}
                      className={`cursor-pointer rounded-lg border-2 p-4 flex flex-col items-center justify-center transition-all h-32 text-center ${isChecked ? 'border-primary bg-primary/10' : 'border-slate-700 bg-slate-800/50'}`}
                    >
                      {option.icon}
                      <span className="font-semibold text-slate-100 text-sm mt-2">{option.label}</span>
                      <Checkbox
                        id={`agent_${option.id}`}
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
          {errors.interest && <p className="text-destructive text-sm mt-2">{errors.interest.message}</p>}

          {serverError && <p className="text-destructive text-center mt-4">{serverError}</p>}
        </div>

        <div className="flex justify-end items-center mt-8">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </div>
  );
}
