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
  Shield,
  Users,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Star,
  Headphones,
  Clock,
  TrendingUp,
  UserCheck,
  ShoppingCart,
  PartyPopper,
  MessageSquare,
} from 'lucide-react';
import { ContactDialog } from '@/components/sections/contact';
import { submitGeneralEnquiry } from '@/app/actions';

/* ─── Form Schema ─── */
const leadSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  businessName: z.string().min(2, 'Business name is required.'),
  phone: z.string().min(10, 'A valid phone number is required.'),
  email: z.string().email('A valid email is required.'),
});
type LeadFormValues = z.infer<typeof leadSchema>;

/* ─── Data ─── */
const trustStats = [
  { icon: Users, value: '1,000+', label: 'Installs Nationwide' },
  { icon: Shield, value: '2 Year', label: 'Warranty Included' },
  { icon: Headphones, value: 'UK Based', label: 'Support Team' },
];

const products = [
  {
    title: 'POS System',
    price: 'From £499 + VAT',
    icon: Monitor,
    image: '/images/posso_dashboard_analytics.png',
    features: ['Touchscreen till', 'Integrated card payments', 'Reporting & stock management'],
  },
  {
    title: 'Self-Order Kiosk',
    price: 'From £699 + VAT',
    icon: Smartphone,
    image: '/images/posso_coffee_shop_hero.png',
    features: ['21" touchscreen display', 'Payment integration built-in', 'Boost average order value 20–30%'],
  },
  {
    title: 'Online Ordering',
    price: 'From £350 or FREE with Teya',
    icon: Globe,
    image: '/images/posso_online_ordering_hero.png',
    features: ['Your own website + ordering', 'Delivery & collection', 'No commission fees'],
  },
];

const benefits = [
  { icon: Zap, title: 'Faster Service', description: 'Speed up order processing and reduce wait times for happier customers.' },
  { icon: Check, title: 'Fewer Errors', description: 'Digital orders go straight to the kitchen — no miscommunication.' },
  { icon: TrendingUp, title: 'More Upsells', description: 'Smart prompts on kiosks increase average order value by 20–30%.' },
  { icon: UserCheck, title: 'Better Experience', description: 'Self-service options give customers control and speed they expect.' },
];

const steps = [
  { number: '1', title: 'We Install', description: 'Professional on-site installation anywhere in the UK.' },
  { number: '2', title: 'Menu Setup', description: 'We configure your full menu, prices, and modifiers.' },
  { number: '3', title: 'Start Taking Orders', description: 'Go live same day with training and ongoing support.' },
];

/* ─── Component ─── */
export function PosSystemsLanding() {
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
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3">
              <Zap className="w-3 h-3 mr-2" />
              UK&apos;S #1 RESTAURANT POS PROVIDER
            </Badge>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl !leading-tight">
              <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                POS Systems for Restaurants &amp; Takeaways{' '}
              </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">UK</span>
            </h1>

            <p className="text-xl font-semibold text-white">
              Complete EPOS, Self-Order Kiosks &amp; Online Ordering{' '}
              <span className="text-primary">from £499 + VAT</span>
            </p>

            <ul className="space-y-3 text-slate-300 text-lg">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0" /> Increase order value by 20–30%
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0" /> Reduce queues with self-service kiosks
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0" /> Full UK setup, training &amp; support
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50 text-lg px-8"
              >
                Get a Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToForm} className="text-lg px-8">
                Request a Quote
              </Button>
            </div>

            <a
              href="tel:+448081753956"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-lg mt-2 transition-colors"
            >
              <Phone className="h-5 w-5" /> Call Free: 0808 175 3956
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <img
              src="/images/posso_epos_integration.png"
              alt="Posso POS system for restaurants and takeaways UK"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full max-h-[500px] max-w-2xl glass-card p-2"
            />
          </motion.div>
        </div>
      </section>

      {/* ───────── TRUST BAR ───────── */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-slate-400 mb-8 text-lg">
            Trusted by UK restaurants, takeaways &amp; retail businesses
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center glass-card p-6 rounded-xl">
                <stat.icon className="h-8 w-8 text-primary mb-3" />
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-slate-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PRODUCTS ───────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Everything You Need to Run Your Business</h2>
            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
              Simple, powerful solutions — choose one or bundle them all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="glass-card border-slate-700/50 h-full flex flex-col overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.title} by Posso`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <product.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    </div>
                    <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/30">{product.price}</Badge>
                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-slate-300">
                          <Check className="h-4 w-4 text-green-400 mt-1 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" onClick={scrollToForm}>
                      Get Info <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BENEFITS ───────── */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Increase Revenue. Reduce Staff Pressure. Speed Up Service.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

      {/* ───────── HOW IT WORKS ───────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Up &amp; Running in 3 Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── LEAD FORM ───────── */}
      <section className="py-20 bg-slate-900/30" id="lead-form" ref={formRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* ───────── URGENCY BANNER ───────── */}
      <section className="py-8 bg-gradient-to-r from-primary/20 to-accent/20 border-y border-primary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-white font-semibold text-lg">
                Free setup &amp; training included{' '}
                <span className="text-primary">(limited time)</span>
              </span>
            </div>
            <Button onClick={scrollToForm} className="bg-gradient-to-r from-primary to-accent text-white">
              Claim Your Free Setup <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Ready to Upgrade Your POS System?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Join 1,000+ UK businesses already using Posso to increase revenue and speed up service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactDialog>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50 text-lg px-8"
              >
                Get Demo Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ContactDialog>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <a href="tel:+448081753956">
                <Phone className="mr-2 h-5 w-5" />
                Call 0808 175 3956
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
            <MessageSquare className="mr-2 h-5 w-5" /> Get Quote
          </Button>
        </div>
      </div>
    </>
  );
}

/* ─── Lead Capture Form ─── */
function LeadCaptureForm() {
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
        products: ['pos'],
        message: 'AdWords landing page enquiry — POS Systems',
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
        <p className="text-slate-300">We&apos;ve received your enquiry and will call you back within 2 hours.</p>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-2xl border border-primary/30 p-8 md:p-10 shadow-lg shadow-primary/5">
      <div className="text-center mb-8">
        <Badge className="bg-red-500/10 text-red-400 border-red-500/30 mb-4">
          <Clock className="w-3 h-3 mr-1" /> Limited Time Offer
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Get Your Free POS Setup Quote</h2>
        <p className="text-slate-400 mt-2">
          Free setup &amp; training included — no obligation, no pressure.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input placeholder="Your Name" {...field} className="bg-slate-800 border-slate-700 text-white h-12 text-base" />
            )}
          />
          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Controller
            name="businessName"
            control={control}
            render={({ field }) => (
              <Input placeholder="Business Name" {...field} className="bg-slate-800 border-slate-700 text-white h-12 text-base" />
            )}
          />
          {errors.businessName && <p className="text-destructive text-sm mt-1">{errors.businessName.message}</p>}
        </div>
        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input type="tel" placeholder="Phone Number" {...field} className="bg-slate-800 border-slate-700 text-white h-12 text-base" />
            )}
          />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input type="email" placeholder="Email Address" {...field} className="bg-slate-800 border-slate-700 text-white h-12 text-base" />
            )}
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>

        {serverError && <p className="text-destructive text-center text-sm">{serverError}</p>}

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-accent text-white text-lg h-14 font-semibold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
        >
          {isSubmitting ? 'Submitting...' : 'Get My POS Setup'}
          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-slate-500">
        <span className="flex items-center gap-1"><Check className="h-3 w-3" /> No obligation</span>
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Response within 2 hours</span>
        <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> Free call back</span>
      </div>

      <div className="text-center mt-6">
        <a
          href="tel:+448081753956"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-lg transition-colors"
        >
          <Phone className="h-5 w-5" /> Or call now: 0808 175 3956
        </a>
      </div>
    </div>
  );
}
