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
            Posso was founded on a simple principle: technology should be an enabler, not a barrier. We are a collective of passionate engineers, designers, and strategists dedicated to solving complex problems with elegant and effective code. Our mission is to partner with visionaries and build the digital tools that will shape tomorrow.
          </p>
          <p className="text-lg text-slate-300">
            We value craftsmanship, collaboration, and relentless curiosity. By fostering a culture of continuous learning and transparent communication, we ensure that our team and our clients are always aligned and moving towards a shared goal: making great ideas possible.
          </p>
        </div>
      </div>
    </section>
  );
}
