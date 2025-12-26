import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POSSO Self-Order Kiosks UK – Stop Queueing & Increase Order Value',
  description: 'POSSO self-order kiosks reduce queues, increase spend and speed up service. Ideal for UK takeaways and quick-service restaurants.',
  alternates: {
    canonical: '/blog/self-order-kiosks',
  },
};

const faqs = [
  {
    question: "What does a POSSO kiosk do?",
    answer: "Customers order, customise and pay themselves, reducing queues and freeing staff."
  },
  {
    question: "Do kiosks increase order value?",
    answer: "Yes. Upsell prompts encourage add-ons and upgrades, increasing average spend."
  },
  {
    question: "Can I customise the kiosk branding?",
    answer: "Yes. Add your own logo, colours, images and layout."
  },
  {
    question: "Does the kiosk work with the kitchen system?",
    answer: "Yes. Orders route directly to the kitchen printer or KDS."
  },
  {
    question: "Are kiosks suitable for small shops?",
    answer: "Yes, both freestanding and countertop units are available."
  }
];

export default function KiosksBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                Why Modern Restaurants Are Switching to Self-Order Kiosks
              </h1>
              <p>
                Queues cost money. When the line is too long, people walk away. When the till is too busy, staff get overwhelmed. When customers feel rushed, they spend less.
              </p>
              <p>
                A POSSO Self-Order Kiosk solves all three problems overnight.
              </p>
              <p>
                Customers can browse the menu comfortably, customise their order without holding up the queue, and pay instantly by card or contactless. No waiting for a cashier. No pressure. No mistakes from misheard orders.
              </p>
              <p>The result is simple:</p>
              <ul>
                <li>Shorter queues.</li>
                <li>Higher efficiency.</li>
                <li>Better experience.</li>
                <li>More revenue.</li>
              </ul>

              <h2>A Shop That Feels Faster, Smoother and More Modern</h2>
              <p>Kiosks give customers control. They enjoy visually browsing toppings, extras and upgrades rather than speed-reading a menu board under pressure.</p>
              <p>It also frees staff to focus on food preparation, customer service and cleanliness instead of standing on the till all day.</p>
              <p>Kiosks are especially powerful during evening peaks or lunchtime rush, where speed makes or breaks customer satisfaction.</p>

              <h2>Smart Upsells Increase Average Order Value</h2>
              <p>A kiosk never forgets to suggest:</p>
              <ul>
                  <li>Chips with a burger</li>
                  <li>Upgrades to a large drink</li>
                  <li>Extra toppings or sauce pots</li>
                  <li>Desserts and add-ons</li>
              </ul>
              <p>UK restaurants using kiosks regularly see 10–30% higher order values, simply because customers respond well to visual add-ons without feeling pressured.</p>
              
              <h2>Fully Branded to Match Your Business Identity</h2>
              <p>
                Your kiosk becomes part of your shop, not a generic machine.
              </p>
              <p>Upload:</p>
              <ul>
                <li>Your logo</li>
                <li>Brand colours</li>
                <li>Menu photographs</li>
                <li>Meal deal banners</li>
                <li>Seasonal graphics</li>
              </ul>
              <p>Add digital signage screens and your entire store feels premium and modern.</p>

              <h2>Perfect for Takeaways, Fast Food, QSR, Cafés & Food Courts</h2>
              <p>Whether you have one counter or ten, kiosks reduce queue time dramatically. Many shops run multiple kiosks side-by-side for peak service hours.</p>

              <h2>Want a Kiosk in Your Store?</h2>
              <p>
                Enquire today and we’ll provide options, pricing and installation support.
              </p>

              <div className="not-prose mt-8 space-y-4">
                <Button asChild>
                    <Link href="/contact">Enquire About Kiosks</Link>
                </Button>
                <div className="border-t border-slate-700 pt-6 mt-6">
                    <h4 className="font-semibold text-slate-300 mb-2">Related Reading:</h4>
                    <ul className="list-none p-0 m-0 space-y-2">
                        <li><Link href="/blog/pos-systems-for-restaurants-and-takeaways" className="text-primary hover:underline">POSSO POS Systems</Link></li>
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
