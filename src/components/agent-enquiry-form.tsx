'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AnimatePresence, motion } from 'framer-motion';
import { submitAgentEnquiry } from '@/app/actions';
import { PartyPopper, ShoppingCart, Smartphone, CreditCard, MonitorPlay } from 'lucide-react';
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
];

export function AgentEnquiryForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
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

  const nextStep = async () => {
    let isValid = false;
    if (step === 0) {
      isValid = await trigger(['name', 'email', 'phone', 'location']);
    } else if (step === 1) {
      isValid = await trigger('experience');
    } else if (step === 2) {
      isValid = await trigger('interest');
    }

    if (isValid) {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    setStep(s => s - 1);
  };

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);
    setServerError(null);
    const result = await submitAgentEnquiry(data);
    setIsSubmitting(false);

    if (result.success) {
      setStep(4);
      setTimeout(() => router.push('/'), 5000);
    } else {
        setServerError(result.message);
        if (result.errors) {
            console.error('Validation errors:', result.errors);
        }
    }
  };

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const steps = [
    // Step 0: Contact Details
    <motion.div key={0} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
        <h3 className="text-lg font-semibold mb-4 text-slate-100">Your Details</h3>
        <div className="space-y-4">
            <Controller name="name" control={control} render={({ field }) => <Input placeholder="Full Name" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
            {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
            <Controller name="email" control={control} render={({ field }) => <Input type="email" placeholder="Email Address" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
            {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
            <Controller name="phone" control={control} render={({ field }) => <Input type="tel" placeholder="Phone Number" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
            {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
            <Controller name="location" control={control} render={({ field }) => <Input placeholder="Your Location (e.g., city or postcode)" {...field} className="bg-slate-800 border-slate-700 text-white" />} />
            {errors.location && <p className="text-destructive text-sm">{errors.location.message}</p>}
        </div>
    </motion.div>,

    // Step 1: Sales Experience
    <motion.div key={1} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
        <h3 className="text-lg font-semibold mb-4 text-slate-100">Your Experience</h3>
        <p className="text-sm text-slate-400 mb-4">Tell us briefly about your sales background or why you'd be a good fit.</p>
        <Controller name="experience" control={control} render={({ field }) => <Textarea placeholder="e.g., I have 5 years experience in B2B sales..." {...field} className="bg-slate-800 border-slate-700 text-white h-48" />} />
        {errors.experience && <p className="text-destructive text-sm mt-2">{errors.experience.message}</p>}
    </motion.div>,

    // Step 2: Product Interest
    <motion.div key={2} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
        <h3 className="text-lg font-semibold mb-4 text-slate-100">What are you most interested in selling?</h3>
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
    </motion.div>,

    // Step 3: Confirmation
    <motion.div key={3} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
        <h3 className="text-lg font-semibold mb-4 text-slate-100">Please confirm your details.</h3>
        <div className="space-y-4 rounded-lg bg-slate-800/50 p-4 border border-slate-700 max-h-80 overflow-y-auto">
            <div><p className="text-slate-100"><strong>Name:</strong> {getValues('name')}</p></div>
            <div><p className="text-slate-100"><strong>Email:</strong> {getValues('email')}</p></div>
            <div><p className="text-slate-100"><strong>Phone:</strong> {getValues('phone')}</p></div>
            <div><p className="text-slate-100"><strong>Location:</strong> {getValues('location')}</p></div>
            <div>
                <p className="text-slate-100"><strong>Experience:</strong></p>
                <p className="text-slate-200 whitespace-pre-wrap text-sm">{getValues('experience')}</p>
            </div>
             <div>
                <p className="text-slate-100"><strong>Primary Interest:</strong> <span className="capitalize">{getValues('interest').join(', ')}</span></p>
            </div>
        </div>
        {serverError && <p className="text-destructive text-center mt-4">{serverError}</p>}
    </motion.div>,

    // Step 4: Success
    <motion.div key={4} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 min-h-[350px] flex flex-col justify-center">
        <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-50 mb-2">Thank You!</h3>
        <p className="text-slate-300">Your application has been submitted. We'll be in touch if your profile is a good match.</p>
    </motion.div>
  ];

  return (
    <div className="p-1">
      {step < 4 && <Progress value={progress} className="mb-6 h-2" />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            {steps[step]}
          </AnimatePresence>
        </div>

        {step < 4 && (
            <div className="flex justify-between items-center mt-8">
            <Button type="button" variant="outline" onClick={prevStep} disabled={step === 0}>
                Back
            </Button>
            
            {step < totalSteps - 1 ? (
                <Button type="button" onClick={nextStep}>
                Next
                </Button>
            ) : (
                <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
            )}
            </div>
        )}
      </form>
    </div>
  );
}
