import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Globe, ShoppingCart, Smartphone, CreditCard } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posso Blog | Insights on Restaurant & Hospitality Tech',
  description: 'Explore the latest trends, tips, and insights on ePOS systems, self-order kiosks, online ordering, and restaurant management technology from the experts at Posso.',
  alternates: {
    canonical: '/blog',
  },
};

const blogPosts = [
  {
    title: 'POSSO POS Systems for Restaurants & Takeaways – Fast, Modern & Commission-Free Ordering',
    description: 'Discover POSSO POS – the UK’s modern EPOS system for restaurants & takeaways. Faster service, menu control, split payments and real reporting.',
    href: '/blog/pos-systems-for-restaurants-and-takeaways',
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
  },
  {
    title: 'POSSO Self-Order Kiosks – Reduce Queues & Increase Order Value in Minutes',
    description: 'Learn how POSSO Self-Order Kiosks boost sales, cut queue time and reduce staff pressure. Perfect for UK takeaways and fast-food restaurants.',
    href: '/blog/self-order-kiosks',
    icon: <Smartphone className="w-12 h-12 text-primary" />,
  },
  {
    title: 'POSSO Online Ordering & Mobile Apps – Commission-Free Food Ordering System',
    description: 'Launch your own online ordering website or mobile app with POSSO. Keep 100% of your profit with zero commission.',
    href: '/blog/online-ordering-and-mobile-apps',
    icon: <Globe className="w-12 h-12 text-primary" />,
  },
   {
    title: 'Best Card Machine for Small Business UK – Teya vs SumUp vs Dojo',
    description: 'Compare the best card payment machines for UK small businesses. We review Teya, SumUp, and Dojo to help you find the lowest fees and fastest payouts.',
    href: '/blog/best-card-machine-for-small-business',
    icon: <CreditCard className="w-12 h-12 text-primary" />,
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
              The Posso Blog
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Insights, tips, and updates on the latest in restaurant and hospitality technology.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
                <Link href={post.href} key={post.title} className="block group">
                  <Card className="glass-card h-full flex flex-col">
                     <div className="relative w-full h-48 flex items-center justify-center rounded-t-lg bg-slate-900/50">
                        {post.icon}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-50 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <CardDescription className="flex-grow">{post.description}</CardDescription>
                      <div className="mt-4 text-primary flex items-center gap-2 font-semibold">
                        Read More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
