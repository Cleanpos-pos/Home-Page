import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Smartphone, Wallet, Clock, Tag, Phone, ShieldCheck } from 'lucide-react';

const cloverFeatures = [
    {
        icon: <Wallet className="h-8 w-8 text-accent" />,
        title: 'Accept Any Payment',
        description: 'Let customers pay how they want. Swipe, dip, tap, Apple Pay, Google Pay, and more. Now twice as fast.',
    },
    {
        icon: <Smartphone className="h-8 w-8 text-accent" />,
        title: '100% Mobile',
        description: 'A full-fledged POS, terminal, and business management system all in the palm of your hand.',
    },
    {
        icon: <Clock className="h-8 w-8 text-accent" />,
        title: 'Get Your Money Fast',
        description: 'With Rapid Deposit, you can get your money in minutes, not days.',
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-accent" />,
        title: 'Run a Tight Ship',
        description: 'Protect your business with end-to-end encryption, data tokenization, and fingerprint logins.',
    },
];

export function CreditCardMachinesContent() {
    const cloverImage = PlaceHolderImages.find(p => p.id === 'clover-flex');
    const teyaImage = PlaceHolderImages.find(p => p.id === 'teya-terminal');
    const dojoImage = PlaceHolderImages.find(p => p.id === 'dojo-go');

  return (
    <section id="content" className="container mx-auto px-4 py-20 md:px-6 space-y-24">
        {/* Clover Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Clover Flex</h2>
                <p className="text-lg text-slate-300">
                    The Clover Flex is more than just a credit card machine; it's a full-featured POS, terminal, and business management system that fits in your hand. Integrate it with your Posso EPOS for a seamless payment experience or use it as a standalone device.
                </p>
                <div className="relative glass-card p-6 rounded-lg border-primary/50">
                    <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full px-4 py-2 text-lg font-bold shadow-lg transform -rotate-12">
                        <Tag className="inline-block mr-2"/>
                        % discounts
                    </div>
                    <p className="text-center text-xl font-semibold text-slate-200">with Posso EPOS Solutions</p>
                </div>
                 <Button size="lg" asChild>
                    <a href="tel:08081753956">
                        <Phone className="mr-2 h-5 w-5" />
                        Call 0808 175 3956
                    </a>
                </Button>
            </div>
             <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                {cloverImage && (
                    <img
                        src={cloverImage.imageUrl}
                        alt={cloverImage.description}
                        width={600}
                        height={600}
                        className="rounded-lg object-contain w-full h-full"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {cloverFeatures.map((feature) => (
            <Card key={feature.title} className="glass-card">
                <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4 text-xl font-bold text-slate-50">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-slate-300">{feature.description}</p>
                </CardContent>
            </Card>
            ))}
      </div>

      {/* Other Providers */}
      <div className="text-center pt-20">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl gradient-text">We Also Supply Teya & Dojo</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
            Flexible payment solutions to fit any business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Teya */}
        <Card className="glass-card p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
                {teyaImage && (
                    <img
                        src={teyaImage.imageUrl}
                        alt={teyaImage.description}
                        width={150}
                        height={150}
                        className="rounded-lg object-contain"
                    />
                )}
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-50">Teya</h3>
                <p className="text-slate-300 mt-2">Get all the tools you need to accept payments and manage your business. Teya provides seamless card payments and powerful business management software.</p>
            </div>
        </Card>

        {/* Dojo */}
        <Card className="glass-card p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
                {dojoImage && (
                    <img
                        src={dojoImage.imageUrl}
                        alt={dojoImage.description}
                        width={150}
                        height={150}
                        className="rounded-lg object-contain"
                    />
                )}
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-50">Dojo</h3>
                <p className="text-slate-300 mt-2">Dojo offers reliable, fast, and secure card machines perfect for any business environment. Take payments tableside, at the counter, or on the go.</p>
            </div>
        </Card>
      </div>

    </section>
  );
}
