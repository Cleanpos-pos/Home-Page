import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POSSO Self-Order Kiosks – Reduce Queues & Increase Order Value in Minutes',
  description: 'Learn how POSSO Self-Order Kiosks boost sales, cut queue time and reduce staff pressure. Perfect for UK takeaways and fast-food restaurants.',
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
                POSSO Self-Order Kiosks – Serve More Customers with Fewer Staff
              </h1>
              <p>
                Customers dislike queues. Restaurants lose sales when the till is busy. A POSSO Self-Order Kiosk allows customers to browse the menu, customise their order, pay and receive a receipt themselves – staff-free ordering.
              </p>
              <p>
                The result? More orders per hour and higher average spend.
              </p>

              <h2>Benefits of POSSO Kiosks</h2>
              <ul>
                <li>Reduce queues during peak hours</li>
                <li>Free staff to focus on preparation and service</li>
                <li>Increase order value through visual upsells</li>
                <li>Send orders directly to the kitchen</li>
                <li>Perfect for busy takeaways and fast-food venues</li>
              </ul>

              <h2>Why Kiosks Increase Revenue</h2>
              <p>Customers spend more when not rushed by a queue. POSSO shows add-ons clearly, such as:</p>
              <ul>
                  <li>Portion upgrades</li>
                  <li>Extra toppings and sauces</li>
                  <li>Meal deals and sides</li>
                  <li>Drinks and desserts</li>
              </ul>
              <p>Restaurants regularly see 10–30% growth in average order value.</p>
              
              <h2>Fully Branded to Match Your Store</h2>
              <p>
                Upload your restaurant logo, menu photographs and brand colours. Kiosks work brilliantly alongside Digital Signage screens for dynamic menu boards.
              </p>

              <h2>Bring Self-Service Ordering into Your Business</h2>
              <p>
                Improve flow, reduce queue pressure and modernise your shop.
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
