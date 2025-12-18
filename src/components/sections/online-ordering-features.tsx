import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, Users, Percent, AreaChart } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: 'Your Own Website',
    description: 'Get a beautiful, modern, and mobile-friendly website designed to convert visitors into paying customers. 100% commission-free.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'Branded Mobile App',
    description: "Launch your own app on the Apple App Store and Google Play Store, putting your brand directly in your customers' pockets.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'FoodBooking Marketplace',
    description: "Get listed on the FoodBooking app, a powerful local marketplace that drives new customers to your restaurant from a 10km radius.",
  },
    {
    icon: <Percent className="h-8 w-8 text-accent" />,
    title: 'Zero Commission',
    description: "Unlike major aggregators, we charge a flat monthly fee. That means you keep 100% of your online revenue, not just a fraction of it.",
  },
  {
    icon: <AreaChart className="h-8 w-8 text-accent" />,
    title: 'Proven Sales Channel',
    description: "Our partners see up to 11% of their total sales generated through the FoodBooking marketplace alone, providing a significant revenue boost.",
  },
];

export function OnlineOrderingFeatures() {
    const foodBookingImage = PlaceHolderImages.find(p => p.id === 'food-booking-app');
  return (
    <section id="features" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">Multiple Channels. One Powerful System.</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300 md:text-xl">
          We don't just give you a website. We give you a complete digital storefront to capture orders from every corner of the internet.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
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
         <Card className="glass-card p-2 flex items-center justify-center">
            {foodBookingImage && (
                <Image
                    src={foodBookingImage.imageUrl}
                    alt={foodBookingImage.description}
                    data-ai-hint={foodBookingImage.imageHint}
                    width={400}
                    height={300}
                    className="object-contain w-full h-full rounded-md"
                />
            )}
         </Card>
      </div>
    </section>
  );
}
