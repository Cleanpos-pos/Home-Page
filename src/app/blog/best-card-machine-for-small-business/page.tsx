import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Best Card Machine for Small Business UK – Why We Recommend Teya in 2025',
  description: 'Compare the best card payment machines like SumUp, Dojo, and Teya. Find the right PDQ machine with low fees for your UK small business.',
  alternates: {
    canonical: '/blog/best-card-machine-for-small-business',
  },
};

const searchData = [
    { term: "Card card machine", searches: "12,100 searches/month" },
    { term: "Sum up machine", searches: "8,100" },
    { term: "Dojo card machine", searches: "4,400" },
    { term: "Card payment machine/Card reader", searches: "3,600" },
    { term: "PDQ machine", searches: "1,900" },
    { term: "Card machine for business", searches: "1,600" },
];

const teyaBenefits = [
    "Fast payouts",
    "Perfect for any business",
    "Low fees & transparent pricing",
    "Simple setup",
    "Modern interface + receipts"
];

const teyaUseCases = [
    { type: "Barbers & Salons", reason: "Quick payments + tips" },
    { type: "Food Vans & Markets", reason: "4G/WiFi mobility" },
    { type: "Takeaways & Restaurants", reason: "Fast processing + receipts" },
    { type: "Retail Shops", reason: "Modern POS integration" },
];

export default function BestCardMachineBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                Best Card Machine for Small Business UK – Why We Recommend Teya in 2025
              </h1>
              <p>
                The card machine market is exploding in the UK, with thousands searching every month for terms like card card machine, sum up machine, dojo card machine, PDQ machine and more. Choosing the right payment device can save you £100s per year in fees, increase sales, and make day-to-day operations much smoother.
              </p>
              <p>
                Below we compare the most popular options like SumUp, Dojo, Square, Zettle & PDQ, and explain why many businesses are now switching to Teya for better pricing and features.
              </p>

              <h2>What Businesses Search for Most in the UK</h2>
              <p>According to search volume:</p>
              <ul>
                {searchData.map(item => (
                  <li key={item.term}><strong>{item.term}</strong> – {item.searches}</li>
                ))}
              </ul>
              <p>This demand shows one clear trend — business owners want a modern, low-fee, easy-to-use card machine.</p>

              <h2>Why Teya Is Becoming a Top Choice</h2>
                <ol>
                    {teyaBenefits.map((benefit, index) => (
                        <li key={index}>
                            <strong>{benefit.split('–')[0]}</strong>
                            {benefit.includes('–') && `– ${benefit.split('–')[1]}`}
                        </li>
                    ))}
                </ol>
                <ol>
                    <li><strong>Fast payouts</strong><br/>No waiting days — get payments quicker.</li>
                    <li><strong>Perfect for any business</strong><br/>Barbers, takeaways, salons, food vans, retail shops.</li>
                    <li><strong>Low fees & transparent pricing</strong><br/>More savings over time compared to high-fee terminals.</li>
                    <li><strong>Simple setup</strong><br/>No technical stress — plug in, connect, start taking payments.</li>
                    <li><strong>Modern interface + receipts</strong><br/>More professional experience for your customers.</li>
                </ol>

              <h2>Who Should Choose Teya?</h2>
                <div className="not-prose overflow-hidden rounded-lg border border-slate-700">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-slate-100">Business Type</TableHead>
                                <TableHead className="text-slate-100">Why Teya Works</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teyaUseCases.map(useCase => (
                                <TableRow key={useCase.type}>
                                    <TableCell className="font-medium text-slate-200">{useCase.type}</TableCell>
                                    <TableCell className="text-slate-300">{useCase.reason}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>


              <h2 className="mt-8">Get the Best Quote on a Teya Card Machine</h2>
              <p>
                We negotiate the best pricing for UK businesses. Whether you’re upgrading from SumUp/Dojo or getting your first machine, we’ll help you compare and secure the best deal.
              </p>

              <div className="not-prose mt-8 space-y-4">
                <Button size="lg" asChild>
                    <Link href="/credit-card-machines">
                        Compare Card Machines <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <a href="https://wa.me/447867597844" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-5 w-5" />
                        Message on WhatsApp
                    </a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
