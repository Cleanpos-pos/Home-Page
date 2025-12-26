import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POSSO POS Systems UK – Fast Restaurant EPOS with Menu Control & Reporting',
  description: 'Discover POSSO POS, the UK EPOS for restaurants & takeaways. Faster service, real-time menu edits, split payments, stock & reporting. Book a demo today.',
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
                A Modern EPOS System Built for Real UK Hospitality
              </h1>
              <p>
                Most restaurant owners know the feeling — printers jamming during a rush, handwritten orders causing mistakes, or staff struggling with outdated tills. Customers expect fast service, easy payments and accurate orders, and businesses need technology that keeps up.
              </p>
              <p>
                This is where POSSO POS changes the game.
              </p>
              <p>
                Built in the UK for British restaurants, takeaways, cafés and multi-site brands, POSSO replaces old tills with a powerful touchscreen EPOS that manages sales, payments, stock, customers and reporting in one seamless platform.
              </p>
              <p>
                It’s more than a till — it’s the engine of your business.
              </p>

              <h2>Designed for Speed, Accuracy and Easy Staff Training</h2>
              <p>
                Restaurants move quickly. Your system must as well.
              </p>
              <p>
                POSSO uses a clean, modern interface where even new staff understand the layout within minutes. No complex menus. No slow screens. No hidden functions.
              </p>
              <p>You get:</p>
              <ul>
                <li>A lightning-fast till interface</li>
                <li>Touchscreen layout built for hospitality</li>
                <li>Offline mode so you never stop taking orders</li>
                <li>Multiple payment options (including split payments)</li>
                <li>Real-time menu changes with instant updates</li>
              </ul>
              <p>
                Whether you serve 50 customers a day or 500, POSSO keeps up effortlessly.
              </p>

              <h2>Control Stock, Sales & Staff – Without Spreadsheets</h2>
              <p>Running costs are rising. Stock control is essential.</p>
              <p>POSSO automatically tracks stock usage, waste, purchase orders and ingredient deductions where configured. Alerts notify you before items run out, preventing lost sales and last-minute supply runs.</p>
              <p>Meanwhile, reporting dashboards show which products sell best, which staff handle the most orders, and what times are busiest.</p>
              <p>These insights help you:</p>
              <ul>
                <li>Reduce waste</li>
                <li>Increase profitable items</li>
                <li>Plan ahead more effectively</li>
                <li>Grow based on real numbers, not guesswork</li>
              </ul>
              

              <h2>Card Machines that Integrate Properly — Not Just Sit Beside the Till</h2>
              <p>POSSO works with integrated terminals so staff don’t need to type amounts manually. One tap sends the payment total to the device instantly.</p>
              <p>It is smoother for staff and cleaner for accounting.</p>
              <p>No double entries. No errors. No confusion.</p>
              <p>Turnaround time drops significantly — especially in fast takeaways during busy evenings.</p>

              <h2>Built for Growth — From One Shop to a National Chain</h2>
              <p>Whether you run a family-owned takeaway or ten busy restaurants, POSSO supports growth with multi-site menu control, cloud reporting and synced user permissions.</p>
              <p>Open more locations without rebuilding systems — simply roll out POSSO across sites.</p>

              <h2>Ready to Upgrade Your Till System?</h2>
              <p>
                Book a live demo and experience POSSO POS first-hand.
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
