import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center md:px-6">
      <div className="relative max-w-4xl">
        <div className="absolute -top-20 -left-20 h-40 w-40 animate-pulse-slow rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 animate-pulse-slow rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-72 w-72 animate-spin-slow rounded-full bg-gradient-to-br from-primary/10 to-accent/10" />
        
        <h1 className="text-5xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl gradient-text">
          The Future of Fast Food Ordering
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Posso Ltd specializes in state-of-the-art restaurant ePOS systems and self-order kiosks, empowering fast food and takeaway restaurants to boost efficiency and enhance the customer experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">
              Get a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-slate-700 bg-transparent text-slate-50 hover:bg-slate-800 hover:text-slate-50" asChild>
             <a href="#services">View Products</a>
          </Button>
        </div>
      </div>
      <div className="relative mt-20 w-full max-w-2xl animate-float">
        <div className="absolute inset-0 h-full w-full scale-105 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="glass-panel p-4 rounded-xl shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 rounded-t-lg">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <p className="text-sm text-slate-400 font-code">/services/order-service.ts</p>
          </div>
          <div className="p-4 bg-slate-850/50 text-left font-code text-sm text-slate-300 rounded-b-lg overflow-x-auto">
            <pre><code>
<span className="text-cyan-400">export class </span><span className="text-indigo-400">OrderService </span><span>&#123;</span>
  <span className="text-slate-500">// Streamline your restaurant's workflow.</span>
  <span className="text-purple-400">async </span><span className="text-cyan-400">placeOrder</span><span>(</span><span className="text-orange-400">items</span>: <span className="text-green-400">OrderItem</span>[]<span>): </span><span className="text-green-400">Promise&lt;Order&gt;</span><span> &#123;</span>
    <span className="text-purple-400">const </span><span className="text-orange-400">newOrder</span> = <span className="text-purple-400">await</span> <span className="text-cyan-400">this.api.create</span>(items);
    <span className="text-purple-400">return </span><span className="text-orange-400">newOrder</span>;
  <span>&#125;</span>
<span>&#125;</span>
            </code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
