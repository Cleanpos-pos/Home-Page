import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ShopFitOut() {
  const fitOutImage = PlaceHolderImages.find(p => p.id === 'digital-signage-display');

  return (
    <section id="fit-out" className="container mx-auto px-4 py-20 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">More Than Just Signs: Complete Fit-Outs</h2>
          <p className="text-lg text-slate-300">
            Your sign is just the beginning. We provide complete shop fitting solutions to bring your entire brand vision to life. From bespoke counters and flooring to ambient lighting and customer seating, we handle every detail of your interior.
          </p>
          <ul className="space-y-2 text-slate-300 list-disc list-inside">
            <li>Custom Counters & Cabinetry</li>
            <li>Flooring & Wall Finishes</li>
            <li>Ambient & Feature Lighting</li>
            <li>Customer Seating & Tables</li>
            <li>Full Project Management</li>
          </ul>
           <Button size="lg" asChild>
                <Link href="/shop-fitting">
                    Explore Shop Fitting <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
        <div className="relative rounded-2xl overflow-hidden glass-card p-2">
            {fitOutImage && (
                <Image
                src={fitOutImage.imageUrl}
                alt={fitOutImage.description}
                data-ai-hint={fitOutImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg object-cover"
                />
            )}
        </div>
      </div>
    </section>
  );
}
