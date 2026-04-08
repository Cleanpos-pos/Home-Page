'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  Check,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Truck,
  Cloud,
  Headphones,
  Clock,
  ShoppingCart,
  PartyPopper,
  BarChart3,
  Printer,
  Users,
  MessageSquare,
} from 'lucide-react';
import { submitGeneralEnquiry } from '@/app/actions';
import { cleanPhone, isValidPhone } from '@/lib/phone-validation';

const leadSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  businessName: z.string().min(2, 'Business name is required.'),
  phone: z.string().min(10, 'A valid phone number is required.').refine((val) => isValidPhone(cleanPhone(val)), {
    message: 'Please enter a UK, European, USA, or Canadian phone number.',
  }),
  email: z.string().email('A valid email is required.'),
});
type LeadFormValues = z.infer<typeof leadSchema>;

const platforms = [
  {
    name: 'Just Eat',
    color: 'from-orange-500 to-orange-600',
    description:
      'Receive Just Eat orders directly into your Posso POS. No more switching between tablets — orders appear on your till and kitchen display instantly.',
    features: [
      'Auto-accept orders into your POS',
      'Menu sync between Just Eat and your till',
      'Real-time order status updates',
      'Automatic kitchen ticket printing',
      'Revenue reporting across all channels',
    ],
  },
  {
    name: 'Uber Eats',
    color: 'from-green-500 to-green-600',
    description:
      'Uber Eats orders flow straight into your kitchen. No extra tablets, no missed orders, no re-keying — just seamless integration with your Posso ePOS.',
    features: [
      'Direct POS integration — no tablet needed',
      'Automatic order confirmation',
      'Prep time management',
      'Unified reporting with in-store sales',
      'Menu management from one place',
    ],
  },
  {
    name: 'Deliveroo',
    color: 'from-teal-500 to-teal-600',
    description:
      'Deliveroo orders land directly on your Posso till and kitchen display. Manage everything from one screen — dine-in, takeaway, and delivery.',
    features: [
      'Orders straight to your POS and KDS',
      'No double-handling or re-keying',
      'Automatic receipt and kitchen printing',
      'Consolidated sales reporting',
      'Real-time availability sync',
    ],
  },
];

const additionalIntegrations = [
  {
    icon: Cloud,
    title: 'Cloud Phone Integration',
    description:
      'Our cloud phone system integrates directly with your POS. When a customer calls, their details and order history pop up instantly. Caller ID, saved addresses, and previous orders — all at your fingertips. Speed up phone orders and reduce errors.',
    features: [
      'Caller ID with customer lookup',
      'Previous order history on screen',
      'Saved delivery addresses',
      'Click-to-call from order history',
      'Call logging and analytics',
    ],
  },
  {
    icon: Truck,
    title: 'Delivery Driver App',
    description:
      'Give your drivers a dedicated app to manage deliveries. Assign orders, track routes, and get proof of delivery — all connected to your Posso POS in real-time via Shipday integration.',
    features: [
      'Driver assignment from POS',
      'Real-time GPS tracking',
      'Route optimisation',
      'Delivery status updates to customers',
      'Proof of delivery',
      'Driver performance analytics',
    ],
  },
];

const benefits = [
  { icon: Monitor, title: 'One Screen for Everything', description: 'Dine-in, takeaway, Just Eat, Uber Eats, Deliveroo — all on one till.' },
  { icon: Printer, title: 'Auto Kitchen Printing', description: 'Every delivery order prints in your kitchen automatically. No re-keying.' },
  { icon: BarChart3, title: 'Unified Reporting', description: 'See all sales across every channel in one dashboard.' },
  { icon: Clock, title: 'Faster Service', description: 'No tablet switching. Orders go straight to your kitchen display.' },
  { icon: Users, title: 'Less Staff Pressure', description: 'Automate order entry so staff can focus on food and customers.' },
  { icon: ShoppingCart, title: 'Never Miss an Order', description: 'Auto-accept means no expired orders and no lost revenue.' },
];

export function DeliveryIntegrationsLanding() {
  const formRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Zap className="w-3 h-3 mr-2" />
              ALL DELIVERY PLATFORMS IN ONE POS
            </Badge>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
              <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                Just Eat, Uber Eats &amp; Deliveroo{' '}
              </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                POS Integration
              </span>
            </h1>

            <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
              Manage every delivery order from one screen. No extra tablets, no re-keying, no missed orders. Plus cloud phone and driver app integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50 text-lg px-8"
              >
                Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <a href="tel:+448081753956">
                  <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
                </a>
              </Button>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap gap-3 justify-center mt-10">
              {platforms.map((p) => (
                <Badge key={p.name} className={`bg-gradient-to-r ${p.color} text-white text-base py-2 px-5`}>
                  {p.name}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── PLATFORM SECTIONS ───────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              One POS. Every Delivery Platform.
            </h2>
            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
              Stop juggling tablets. Posso brings all your delivery orders into one system.
            </p>
          </div>

          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <Badge className={`bg-gradient-to-r ${platform.color} text-white text-lg py-2 px-5 mb-4`}>
                  {platform.name}
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {platform.name} + Posso POS
                </h3>
                <p className="text-slate-300 text-lg mb-6">{platform.description}</p>
                <ul className="space-y-3">
                  {platform.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button onClick={scrollToForm} className="mt-6" variant="outline">
                  Enquire About {platform.name} Integration <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className={`glass-card rounded-2xl p-8 text-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${platform.color} mb-6`}>
                  <Globe className="h-16 w-16 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">{platform.name}</h4>
                <p className="text-slate-400 mt-2">Fully integrated with Posso POS</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────── CLOUD PHONE & DRIVER APP ───────── */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Cloud Phone &amp; Delivery Driver App
            </h2>
            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
              Go beyond marketplace integration — connect your phone system and your drivers too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {additionalIntegrations.map((integration, i) => (
              <motion.div
                key={integration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="glass-card border-slate-700/50 h-full">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <integration.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{integration.title}</h3>
                    <p className="text-slate-300 text-lg mb-6">{integration.description}</p>
                    <ul className="space-y-2">
                      {integration.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-slate-400">
                          <Check className="h-4 w-4 text-green-400 mt-1 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BENEFITS ───────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Why Integrate Your Delivery Platforms?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                  <p className="text-slate-400 mt-1">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── LEAD FORM ───────── */}
      <section className="py-20 bg-slate-900/30" id="lead-form" ref={formRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <DeliveryLeadForm />
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Ready to Consolidate Your Delivery Orders?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Join restaurants already saving hours every week with Posso delivery integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 text-lg px-8"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <a href="tel:+448081753956">
                <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── STICKY MOBILE BAR ───────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 transition-transform duration-300 ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex gap-3 p-3">
          <Button asChild className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold">
            <a href="tel:+448081753956">
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </a>
          </Button>
          <Button onClick={scrollToForm} className="flex-1 bg-gradient-to-r from-primary to-accent text-white font-semibold">
            <MessageSquare className="mr-2 h-5 w-5" /> Enquire
          </Button>
        </div>
      </div>
    </>
  );
}

/* ─── Lead Capture Form ─── */
function DeliveryLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: '', businessName: '', phone: '', email: '' },
  });

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);
    setServerError(null);
    try {
      const result = await submitGeneralEnquiry({
        name: data.name,
        company: data.businessName,
        email: data.email,
        phone: data.phone,
        products: ['online-ordering'],
        message: 'Delivery integrations enquiry — Just Eat, Uber Eats, Deliveroo, Cloud Phone, Driver App',
      });
      setIsSubmitting(false);
      if (result.success) {
        setIsSuccess(true);
      } else {
        setServerError(result.message);
      }
    } catch {
      setIsSubmitting(false);
      setServerError('Connection error. Please try again or call us at 0808 175 3956.');
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl border border-primary/30 p-10 text-center"
      >
        <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-slate-300">We&apos;ll be in touch within 2 hours to discuss your delivery integration.</p>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-2xl border border-primary/30 p-8 md:p-10 shadow-lg shadow-primary/5">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Get Your Delivery Integration Quote</h2>
        <p className="text-slate-400 mt-2">
          Tell us about your business and we&apos;ll show you how Posso connects your delivery platforms.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Controller name="name" control={control} render={({ field }) => <Input placeholder="Your Name" {...field} className="bg-slate-800 border-slate-700 text-white h-12 text-base" />} />
          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Controller name="businessName" control={control} render={({ field }) => <Input placeholder="Business Name" {...field} className="bg-slate-800 border-slate-700 text-white h-12 text-base" />} />
          {errors.businessName && <p className="text-destructive text-sm mt-1">{errors.businessName.message}</p>}
        </div>
        <div>
          <Controller name="phone" control={control} render={({ field }) => <Input type="tel" placeholder="Phone Number" {...field} className="bg-slate-800 border-slate-700 text-white h-12 text-base" />} />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Controller name="email" control={control} render={({ field }) => <Input type="email" placeholder="Email Address" {...field} className="bg-slate-800 border-slate-700 text-white h-12 text-base" />} />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>

        {serverError && <p className="text-destructive text-center text-sm">{serverError}</p>}

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-accent text-white text-lg h-14 font-semibold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
        >
          {isSubmitting ? 'Submitting...' : 'Get My Integration Quote'}
          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>
      </form>

      <div className="text-center mt-6">
        <a href="tel:+448081753956" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-lg transition-colors">
          <Phone className="h-5 w-5" /> Or call now: 0808 175 3956
        </a>
      </div>
    </div>
  );
}
