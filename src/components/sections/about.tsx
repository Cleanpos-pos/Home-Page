import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function About() {
  const teamImage = PlaceHolderImages.find(p => p.id === 'team-photo');

  return (
    <section id="about" className="container mx-auto px-4 py-20 md:px-6" aria-label="About Posso Ltd">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="relative rounded-2xl overflow-hidden glass-card p-2">
            {teamImage && (
                <Image
                src={teamImage.imageUrl}
                alt="Posso Ltd team - UK-based ePOS and self-order kiosk specialists"
                data-ai-hint={teamImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg object-cover"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
            About Posso &mdash; UK ePOS Specialists
          </h2>
          <p className="text-lg text-slate-300">
            Posso Ltd is a UK-based technology company specialising in <strong className="text-slate-100">restaurant ePOS systems</strong>, <strong className="text-slate-100">self-order kiosks</strong>, and integrated hospitality solutions. Founded to empower independent restaurants, takeaway chains, and leisure venues with enterprise-grade technology at affordable prices.
          </p>
          <p className="text-lg text-slate-300">
            Our team of engineers, designers, and hospitality specialists has helped <strong className="text-slate-100">over 500 businesses</strong> across the UK streamline operations, reduce labour costs, and increase revenue. From single-site takeaways to multi-location franchises, we deliver tailored solutions that scale with your business.
          </p>
          <p className="text-lg text-slate-300">
            Every Posso system includes free installation, staff training, and ongoing UK-based support. We believe great technology should be accessible to every hospitality business, regardless of size.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Get in touch &rarr;
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center text-slate-400 hover:text-primary hover:underline font-medium"
            >
              Read our blog &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
