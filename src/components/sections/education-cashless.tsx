import Link from 'next/link';
import { GraduationCap, ShieldCheck, FileCheck, Clock, ArrowRight, CalendarClock } from 'lucide-react';

const points = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: 'Dignity by design',
    description: 'Free-meal entitlements are spent like any other balance — the till shows no difference, so no student is singled out.',
  },
  {
    icon: <FileCheck className="h-6 w-6 text-primary" />,
    title: 'Audit-ready records',
    description: 'Learner-level reporting links every funded meal to attendance and reconciles spend against the £2.61 meal rate.',
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Three-second service',
    description: 'Smart card, PIN, QR, biometrics, contactless and mobile wallets keep a busy lunch break moving.',
  },
];

export function EducationCashless() {
  return (
    <section className="py-20 bg-slate-950/50" aria-label="Cashless catering for colleges and universities">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary/90 mb-5">
            <CalendarClock className="h-3.5 w-3.5" />
            READY FOR THE SEPTEMBER 2026 FREE SCHOOL MEALS EXPANSION
          </div>
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
            Cashless Catering for Colleges &amp; Universities
          </h2>
          <p className="mx-auto mt-4 max-w-[750px] text-lg text-slate-300 md:text-xl">
            From September 2026 every further education and sixth-form student on Universal Credit becomes entitled to a free meal. Posso delivers fast, anonymous, fully auditable cashless catering — with bespoke software built around the campus systems you already run.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {points.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="shrink-0 mt-1">{p.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-slate-50 mb-2">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <Link
            href="/cashless-catering-colleges-universities"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 text-lg px-8 py-3 font-medium"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            Explore Cashless Catering for Education
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-slate-400 text-sm">
            Related:{' '}
            <Link href="/cashless-catering-colleges-universities" className="text-primary/90 hover:text-primary underline underline-offset-4">
              FSM 2026 expansion
            </Link>
            {' · '}
            <Link href="/self-order-kiosks" className="text-primary/90 hover:text-primary underline underline-offset-4">
              self-service kiosks
            </Link>
            {' · '}
            <Link href="/bespoke-epos-software" className="text-primary/90 hover:text-primary underline underline-offset-4">
              bespoke software
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
