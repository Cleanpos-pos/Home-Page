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
import { submitGeneralEnquiry } from '@/app/actions';
import { PartyPopper, ShoppingCart, Smartphone, Globe, MonitorPlay, Store, Ticket, GitBranch, Phone, CreditCard, CalendarDays } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { useRouter } from 'next/navigation';
import { IframeDialog } from './iframe-dialog';


const HangerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 7.7c0-2.3 1.5-4.2 3.3-4.2 1.8 0 3.3 1.9 3.3 4.2V9m-6.6 0H20c1.7 0 3 1.3 3 3v1c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1v-1c0-1.7 1.3-3 3-3h1.5" />
  </svg>
);

const generalEnquirySchema = z.object({
  products: z.array(z.string()).min(1, { message: 'Please select at least one product or service.' }),
  name: z.string().min(2, 'Name is required.'),
  company: z.string().min(2, 'Company name is required.'),
  email: z.string().email('A valid email is required.'),
  phone: z.string().min(10, 'A valid phone number is required.'),
  message: z.string().optional(),
});

type EnquiryFormValues = z.infer<typeof generalEnquirySchema>;

const productOptions = [
  { id: 'tablemaestro', label: 'TableMaestro', icon: <CalendarDays className="w-8 h-8 text-primary" /> },
  { id: 'credit-card-machine', label: 'Credit Card Machines', icon: <CreditCard className="w-8 h-8 text-primary" /> },
  { id: 'pos', label: 'ePOS Systems', icon: <ShoppingCart className="w-8 h-8 text-primary" /> },
  { id: 'kiosks', label: 'Self-Order Kiosks', icon: <Smartphone className="w-8 h-8 text-primary" /> },
  { id: 'online-ordering', label: 'Online Ordering', icon: <Globe className="w-8 h-8 text-primary" /> },
  { id: 'digital-signage', label: 'Digital Signage', icon: <MonitorPlay className="w-8 h-8 text-primary" /> },
  { id: 'shop-fitting', label: 'Shop Fitting', icon: <Store className="w-8 h-8 text-primary" /> },
  { id: 'ticketing-solutions', label: 'Ticketing Solutions', icon: <Ticket className="w-8 h-8 text-primary" /> },
  { id: 'franchise-systems', label: 'Franchise Systems', icon: <GitBranch className="w-8 h-8 text-primary" /> },
  { id: 'retail-kiosks', label: 'Retail Kiosks', icon: <Smartphone className="w-8 h-8 text-primary" /> },
  { id: 'retail-pos', label: 'Retail POS', icon: <ShoppingCart className="w-8 h-8 text-primary" /> },
  { id: 'dry-cleaning-pos', label: 'Dry Cleaning POS', icon: <HangerIcon className="w-8 h-8 text-primary" /> },
];

export function GeneralEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(generalEnquirySchema),
    defaultValues: {
      products: [],
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
      const result = await submitGeneralEnquiry(data);
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
      setServerError('A connection error occurred. Please try again or call us at 0113 521 1716.');
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
          <h3 className="text-lg font-semibold mb-4 text-slate-100">What are you interested in today?</h3>
          <Controller
            name="products"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {productOptions.map((option) => {
                  const isChecked = field.value?.includes(option.id);
                  return (
                    <Label
                      key={option.id}
                      htmlFor={`gen_${option.id}`}
                      className={`cursor-pointer rounded-lg border-2 p-4 flex flex-col items-center justify-center transition-all h-32 text-center ${isChecked ? 'border-primary bg-primary/10' : 'border-slate-700 bg-slate-800/50'}`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                        {option.icon}
                      </div>
                      <span className="font-semibold text-slate-100 text-sm mt-auto pt-1">{option.label}</span>
                      <Checkbox
                        id={`gen_${option.id}`}
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
          {errors.products && <p className="text-destructive text-sm mt-2">{errors.products.message}</p>}
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
