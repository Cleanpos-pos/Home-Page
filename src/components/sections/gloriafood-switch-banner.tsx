import { AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function GloriaFoodSwitchBanner() {
  return (
    <section aria-label="GloriaFood shutdown — switch to Posso" className="relative w-full py-10 border-y border-amber-500/20 bg-gradient-to-r from-amber-950/40 via-slate-900/60 to-amber-950/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-start gap-4 text-center lg:text-left">
            <div className="hidden sm:flex h-12 w-12 shrink-0 rounded-full bg-amber-500/10 items-center justify-center border border-amber-500/30">
              <AlertTriangle className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Using GloriaFood? It shuts down on <span className="text-amber-400">30 April 2027</span>.
              </h2>
              <p className="text-slate-300 mt-1">
                Oracle is closing GloriaFood for good. Posso moves your menu and customers across free — and upgrades you to a branded website, app, ePOS, and delivery integrations.
              </p>
            </div>
          </div>
          <Link
            href="/gloriafood-alternative"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 px-6 py-3 font-medium"
          >
            See the GloriaFood Alternative <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
