import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function FranchiseSocialProof() {
    const testimonialAvatar = PlaceHolderImages.find(p => p.id === 'avatar-4');

    return (
        <section id="social-proof" className="container mx-auto px-4 py-20 md:px-6">
            <div className="text-center">
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Powering The Next Generation of Franchises.</h2>
            </div>
            <div className="mt-12 max-w-3xl mx-auto glass-card rounded-xl p-8 text-center">
                <p className="text-2xl italic text-slate-200">"Before Posso, updating our menu across 12 sites took three days of emails and phone calls. Now, it takes 30 seconds from my laptop."</p>
                <div className="flex items-center justify-center gap-4 mt-6">
                    {testimonialAvatar && (
                        <Image
                            src={testimonialAvatar.imageUrl}
                            alt="Operations Director"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    )}
                    <div>
                        <p className="font-bold text-slate-50">Alex Chen</p>
                        <p className="text-sm text-slate-400">Operations Director at Grill & Co.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
