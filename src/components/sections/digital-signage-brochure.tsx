import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DigitalSignageBrochure() {
  return (
    <section id="brochure" className="container mx-auto px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl text-center glass-card p-10 rounded-2xl">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
          Explore Our Full Range
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Download our comprehensive digital signage brochure to discover all the products and solutions we offer to bring your displays to life.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a
              href="https://posso.uk/wp-content/uploads/2023/01/Posso-Digital-Signage-Products-and-Solutions-Catalogue-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
