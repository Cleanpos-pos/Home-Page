import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, ShieldCheck, Ticket, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Posso? The Operating System for High-Volume Amusement Parks',
  description: 'Unlock the future of amusement park operations with Posso. From high-speed turnstile integration to ride-side smart storage, discover how we optimise guest flow and season pass ecosystems for 2026.',
  alternates: {
    canonical: '/blog/why-posso-amusement-park-efficiency-2026',
  },
};

export default function AmusementParkBlog() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter gradient-text mb-6">
              Why Posso? The Operating System for High-Volume Amusement Parks
            </h1>
            <p className="text-xl text-slate-400">
              In 2026, the guest tolerance for friction is zero.
            </p>
          </header>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-lg text-slate-300">
            <p>
              In 2026, the guest tolerance for friction is zero. If your tech stack isn’t actively removing barriers between the guest and the experience, it is becoming a liability.
            </p>
            
            <p>
              At Posso, we don’t just &quot;handle tickets&quot;; we engineer the entire operational flow. We are moving beyond legacy admission systems to a fully synchronised venue ecosystem. Here is why Posso is the strategic upgrade for amusement parks aiming for market leadership this year.
            </p>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <Ticket className="text-primary h-8 w-8" /> 1. Scalable Entry: Eliminating the Gate Bottleneck
              </h2>
              <p>
                The &quot;gate&quot; is no longer a physical barrier; it’s a data checkpoint. Legacy systems create queues; Posso creates flow.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>We utilise high-frequency scanning protocols compatible with next-gen turnstile hardware.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>We process throughput at the speed of the guest’s stride. Whether you are managing 5,000 or 50,000 daily visitors, our architecture scales instantly to eliminate peak-hour ingress congestion. It is contactless, rapid, and robust.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <ShieldCheck className="text-primary h-8 w-8" /> 2. Ride-Side Storage: The &apos;Last-Meter&apos; Solution
              </h2>
              <p>
                Loose articles are a safety hazard, but traditional locker banks are a logistical nightmare. Posso brings storage to the point of need.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>We deploy short-term, RFID-enabled <Link href="/ticketing" className="text-accent underline hover:text-primary transition-colors">smart lockers</Link> directly at ride entrances. These units sync seamlessly with the guest’s primary park ticket or wristband.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>No more cross-park treks to retrieve phones. Guests secure their belongings seconds before boarding and retrieve them immediately after. It’s a seamless GX (Guest Experience) win that keeps ride dispatch times efficient.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <Users className="text-primary h-8 w-8" /> 3. Season Pass Integration: Recognising Value Instantly
              </h2>
              <p>
                Your members are your recurring revenue engine. Treat them like VIPs, automatically.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>Our identity management layer recognises membership tiers instantly at any touchpoint—be it the gate, a <Link href="/kiosks" className="text-accent underline hover:text-primary transition-colors">retail kiosk</Link>, or a locker rental station.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>Frictionless perk delivery. A Gold Member shouldn&apos;t have to ask for their discount; the system should apply their 20% locker rental reduction automatically. This creates a &quot;sticky&quot; ecosystem where renewal becomes the default choice.</p>
              </div>
            </section>
          </div>

          <footer className="mt-20 p-10 glass-card rounded-2xl text-center border-primary/30">
            <h3 className="text-3xl font-bold gradient-text mb-4">Ready to engineer your park&apos;s efficiency?</h3>
            <p className="text-slate-300 mb-8 text-lg">
                Let&apos;s talk about how Posso can transform your venue management for the 2026 season.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <SolutionEnquiryModal defaultSolutionId="ticketing-solutions" />
                <Button variant="outline" asChild size="lg">
                    <Link href="/ticketing">
                        Explore Ticketing Solutions <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
