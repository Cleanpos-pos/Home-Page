import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const teamImage = PlaceHolderImages.find(p => p.id === 'team-photo');

  return (
    <section id="about" className="container mx-auto px-4 py-20 md:px-6">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="relative rounded-2xl overflow-hidden glass-card p-2">
            {teamImage && (
                <Image
                src={teamImage.imageUrl}
                alt={teamImage.description}
                data-ai-hint={teamImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg object-cover"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">About Posso</h2>
          <p className="text-lg text-slate-300">
            Posso Ltd is a pioneering company specialising in state-of-the-art restaurant ePOS systems and self-order kiosks. Our mission is to empower fast food and takeaway restaurants with innovative technology that simplifies operations, boosts efficiency, and enhances the customer experience.
          </p>
          <p className="text-lg text-slate-300">
            We are a collective of passionate engineers, designers, and strategists dedicated to solving the unique challenges of the restaurant industry with elegant and effective technology.
          </p>
        </div>
      </div>
    </section>
  );
}
