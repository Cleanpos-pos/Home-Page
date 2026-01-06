import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckSquare, Clock, Smartphone, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Posso? Engineering the Frictionless Trampoline Park',
  description: 'Revolutionise your trampoline park management. Posso integrates digital waivers, RFID wristbands, and automated session timing into one snappy, secure platform.',
  alternates: {
    canonical: '/blog/why-posso-trampoline-park-tech-stack',
  },
};

export default function TrampolineParkBlog() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter gradient-text mb-6">
              Why Posso? Engineering the Frictionless Trampoline Park
            </h1>
            <p className="text-xl text-slate-400">
               In the Active Entertainment sector, time is quite literally money.
            </p>
          </header>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-lg text-slate-300">
            <p>
              In the Active Entertainment sector, time is quite literally money. Every minute a jumper spends at a check-in desk is a minute of lost utilisation and revenue.
            </p>
            
            <p>
              Posso is designed to automate the boring stuff so you can focus on the floor. We replace disjointed software patches with a unified command centre for compliance and access. Here is the operational edge we deliver to trampoline parks.
            </p>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <CheckSquare className="text-primary h-8 w-8" /> 1. Digital Waivers & Ticketing: Compliance on Autopilot
              </h2>
              <p>
                The clipboard is dead. The queue at the waiver station should be too.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>We link <Link href="/online-ordering" className="text-accent underline hover:text-primary transition-colors">online bookings</Link> directly to digital waivers via a unified database ID.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>Check-in is reduced to seconds. By the time the guest arrives, we already know they have paid and signed. We verify, they jump. It streamlines liability management while dramatically increasing front-of-house throughput.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <Smartphone className="text-primary h-8 w-8" /> 2. Wristband Integration: The Single-Credential Standard
              </h2>
              <p>
                Stop juggling paper tickets, locker keys, and wristbands. In 2026, one credential rules them all.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>A single RFID wristband serves as the master key. It validates entry at the turnstile and unlocks secure personal <Link href="/ticketing" className="text-accent underline hover:text-primary transition-colors">smart lockers</Link> for shoes and phones.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>Enhanced security and reduced hardware costs. Guests feel secure knowing their valuables are locked via the same band on their wrist, and your staff spend less time managing lost keys.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <Clock className="text-primary h-8 w-8" /> 3. Timed Sessions: Automated Capacity Management
              </h2>
              <p>
                Managing overlapping jump sessions manually is a recipe for revenue leakage. We automate the clock.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>Posso’s logic engine syncs jump-time limits with locker rental durations.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>When a session ends, the wristband access expires. This ensures precise capacity management and allows you to cycle sessions with military precision, maximising your hourly yield per square metre.</p>
              </div>
            </section>
          </div>

          <footer className="mt-20 p-10 glass-card rounded-2xl text-center border-primary/30">
            <h3 className="text-3xl font-bold gradient-text mb-4">Ready to automate your park?</h3>
            <p className="text-slate-300 mb-8 text-lg">
                Discover how our integrated technology can boost your venue&apos;s efficiency and guest satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <SolutionEnquiryModal defaultSolutionId="ticketing-solutions" />
                <Button variant="outline" asChild size="lg">
                    <Link href="/ticketing">
                        Explore Venue Solutions <ArrowRight className="ml-2 h-5 w-5" />
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
