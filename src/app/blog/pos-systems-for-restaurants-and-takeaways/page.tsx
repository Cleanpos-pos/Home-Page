import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POSSO POS Systems for Restaurants & Takeaways – Fast, Modern & Commission-Free Ordering',
  description: 'Discover POSSO POS – the UK’s modern EPOS system for restaurants & takeaways. Faster service, menu control, split payments and real reporting. Book a demo today.',
  alternates: {
    canonical: '/blog/pos-systems-for-restaurants-and-takeaways',
  },
};

const faqs = [
  {
    question: "What is POSSO POS?",
    answer: "POSSO POS is a modern EPOS system built for UK restaurants, takeaways and hospitality, offering fast ordering, integrated payments, stock control and reporting."
  },
  {
    question: "Does POSSO POS work offline?",
    answer: "Yes. You can continue taking orders even without internet access."
  },
  {
    question: "Can POSSO POS handle split payments?",
    answer: "Yes. You can accept cash, card or part payments with ease."
  },
  {
    question: "Do you support integrated card terminals?",
    answer: "Yes – POSSO integrates with contactless, Chip & PIN, Apple and Google Pay."
  },
  {
    question: "Can I manage multiple shops?",
    answer: "Yes, POSSO supports multi-site management and central menu control."
  }
];

export default function PossoPosBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                POSSO POS – The Complete EPOS System for UK Restaurants & Takeaways
              </h1>
              <p>
                Running a food business today requires more than a till. You need speed, reliability, accurate reporting, integrated payments and online sales – all working together.
              </p>
              <p>
                POSSO POS is a modern EPOS solution designed for UK hospitality, helping restaurants, takeaways, cafés and multi-site brands operate more efficiently.
              </p>
              <p>
                Whether you manage one location or a chain, POSSO gives you complete control.
              </p>

              <h2>Why UK Restaurants Choose POSSO POS</h2>
              <ul>
                <li>Ultra-fast touchscreen interface</li>
                <li>Works online and offline</li>
                <li>Staff trained in minutes</li>
                <li>Split payments and tabs</li>
                <li>Menu updates in real time</li>
                <li>Full reporting dashboard</li>
              </ul>
              <p>
                POSSO is not just a till – it becomes your daily operational hub.
              </p>

              <h2>Features That Improve Service & Profitability</h2>

              <h3>Real-Time Menu Editing</h3>
              <p>Change prices, products, images or offers instantly.</p>

              <h3>Stock & Inventory Control</h3>
              <p>Track stock usage and wastage, with low-level alerts.</p>

              <h3>Integrated Card Machines</h3>
              <p>Accept contactless, Chip & PIN, Apple/Google Pay easily.</p>

              <h3>Reporting That Guides Decisions</h3>
              <p>Daily sales, staff performance and best-sellers at a glance.</p>
              
              <h2>Ideal for Takeaways, Fast Food & Multi-Branch Rollout</h2>
              <p>
                Add branches at any stage and manage menus centrally. POSSO scales with growth – from one shop to nationwide operations.
              </p>

              <h2>Ready to Upgrade Your Till System?</h2>
              <p>
                Book a live demonstration and experience POSSO in action.
              </p>

              <div className="not-prose mt-8 space-y-4">
                <Button asChild>
                    <Link href="/contact">Book a Demo</Link>
                </Button>
                <div className="border-t border-slate-700 pt-6 mt-6">
                    <h4 className="font-semibold text-slate-300 mb-2">Related Reading:</h4>
                    <ul className="list-none p-0 m-0 space-y-2">
                        <li><Link href="/blog/self-order-kiosks" className="text-primary hover:underline">POSSO Self-Order Kiosks</Link></li>
                        <li><Link href="/blog/online-ordering-and-mobile-apps" className="text-primary hover:underline">POSSO Online Ordering & Apps</Link></li>
                    </ul>
                </div>
              </div>
            </article>

            <section className="mt-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-slate-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
