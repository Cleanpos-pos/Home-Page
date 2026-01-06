import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { SolutionEnquiryModal } from '@/components/solution-enquiry-modal';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Box, ShieldCheck, Snowflake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Posso? The Bespoke Solution for Modern Ice Rinks',
  description: 'Optimise your ice rink or winter festival with Posso. Manage skate hire, session access, and secure coat storage in one unified system designed for high-volume operational efficiency.',
  alternates: {
    canonical: '/blog/why-posso-ice-rink-management-software',
  },
};

export default function IceRinkBlog() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter gradient-text mb-6">
              Why Posso? The Bespoke Solution for Modern Ice Rinks
            </h1>
            <p className="text-xl text-slate-400">
               Engineering the flow for high-traffic winter venues.
            </p>
          </header>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-lg text-slate-300">
            <p>
              Whether you are running a permanent Olympic-sized facility or a high-traffic pop-up for the festive season, inventory and lobby management are your primary bottlenecks.
            </p>
            
            <p>
              Posso addresses the specific pain points of the skating vertical. We don&apos;t just sell tickets; we manage the hardware and the flow that keeps the ice busy and the lobby clear.
            </p>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <Box className="text-primary h-8 w-8" /> 1. Skate & Gear Hire: Integrated Inventory Control
              </h2>
              <p>
                Rental delays are the number one cause of missed session starts. We fix the workflow.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>Skate and safety gear rentals are processed directly at the <Link href="/kiosks" className="text-accent underline hover:text-primary transition-colors">ticketing point</Link>—online or at the kiosk. The data is pushed instantly to the rental counter.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>Staff know exactly what size is needed before the guest even reaches the counter. It reduces queue dwell time and ensures you have real-time visibility on inventory availability, preventing overbooking of specific sizes.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <BarChart3 className="text-primary h-8 w-8" /> 2. Session Management: Granular Access Control
              </h2>
              <p>
                Public skates, figure skating lessons, and private corporate events often happen in the same day.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>A flexible access control matrix that allows you to segment users by time, zone, and ticket type seamlessly.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>You can run a public session while simultaneously checking in a private party, with zero cross-contamination of access rights. It’s total control over your facility&apos;s utilisation.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <ShieldCheck className="text-primary h-8 w-8" /> 3. Secure Storage: De-cluttering the Lobby
              </h2>
              <p>
                Winter skating means winter coats, bags, and boots. If you don&apos;t manage them, they manage you.
              </p>
              <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-semibold text-primary mb-2">The Tech:</p>
                <p>We integrate <Link href="/ticketing" className="text-accent underline hover:text-primary transition-colors">smart lockers</Link> designed specifically for high-volume storage, keeping the lobby clear of trip hazards and clutter.</p>
                <p className="font-semibold text-accent mt-4 mb-2">The Win:</p>
                <p>A premium guest experience that feels organised and safe. By automating storage, you free up floor space for higher-yield activities—like retail or F&B—rather than using your lobby as a cloakroom.</p>
              </div>
            </section>
          </div>

          <footer className="mt-20 p-10 glass-card rounded-2xl text-center border-primary/30">
            <h3 className="text-3xl font-bold gradient-text mb-4">Optimise your rink operations today</h3>
            <p className="text-slate-300 mb-8 text-lg">
                Join the leading venues using Posso to deliver seamless winter event experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <SolutionEnquiryModal defaultSolutionId="ticketing-solutions" />
                <Button variant="outline" asChild size="lg">
                    <Link href="/ticketing">
                        Explore Ticketing & Storage <ArrowRight className="ml-2 h-5 w-5" />
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
