import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POSSO Online Ordering & Apps UK – 0% Commission Food Ordering',
  description: 'Launch your own online ordering system or takeaway app with POSSO. Keep 100% of your profits and build loyal customers.',
  alternates: {
    canonical: '/blog/online-ordering-and-mobile-apps',
  },
};

const faqs = [
    {
        question: "Do POSSO apps charge commission?",
        answer: "No – all orders are 0% commission, keeping profit with your business."
    },
    {
        question: "Can customers order on desktop and mobile?",
        answer: "Yes. Your website and app work on all devices."
    },
    {
        question: "Do orders sync with the EPOS system?",
        answer: "Yes, menu prices and orders update automatically."
    },
    {
        question: "Can customers place delivery and click & collect orders?",
        answer: "Yes, both options are fully supported with smart time slots."
    },
    {
        question: "Can I send notifications to customers?",
        answer: "Yes, push alerts for offers, promotions and loyalty incentives are included."
    }
];

export default function OnlineOrderingBlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                Stop Paying Commission — Own Your Online Orders
              </h1>
              <p>
                Delivery platforms take a large slice of each sale. A £25 order becomes £18.75 after commission. Multiply that daily, weekly, yearly — it’s thousands lost.
              </p>
              <p>
                POSSO Online Ordering & Apps give you full ownership of your customers and revenue.
              </p>
              <p>You get:</p>
              <ul>
                <li>Your own ordering website</li>
                <li>Branded apps for iOS and Android</li>
                <li>0% commission permanently</li>
                <li>Direct payments & customer data</li>
              </ul>
              <p>Your customers order from you, not through a marketplace.</p>

              <h2>Built for Click & Collect and Delivery Operations</h2>
              <p>
                Whether customers dine at home, pick up in-store, or order ahead for later, POSSO handles it all.
              </p>
              <p>
                Orders flow straight to the EPOS or KDS so nothing is missed. You control delivery areas, time slots, preparation times and minimum order thresholds.
              </p>
              <p>
                The experience is designed to feel seamless and professional.
              </p>

              <h2>A Mobile App With Your Name On It</h2>
              <p>
                This isn’t a shared marketplace. It’s your shop in your customer’s pocket.
              </p>
              <p>Your app includes:</p>
              <ul>
                  <li>Branding, images and menu items</li>
                  <li>Push notifications for promotions</li>
                  <li>Loyalty functions</li>
                  <li>Reorder buttons for regulars</li>
                  <li>Card or cash payments</li>
              </ul>
              <p>Returning customers convert at a far higher rate through direct apps than through delivery sites.</p>
              
              <h2>Built with SEO in Mind From Day One</h2>
              <p>
                Unlike third-party platforms, your site can rank locally for food searches such as:
              </p>
              <p className="italic text-slate-400">
                pizza delivery Leicester, <br/>
                Chinese takeaway near me, <br/>
                best curry delivery in Manchester
              </p>
              <p>
                With proper SEO structure, menu descriptions, alt-tagged images and internal links, your Google visibility increases month by month.
              </p>

              <h2>Ready to Take Control of Your Online Orders?</h2>
              <p>
                Let POSSO launch your online ordering system and start keeping 100% of every sale.
              </p>

              <div className="not-prose mt-8 space-y-4">
                <Button asChild>
                    <Link href="/contact">Get Started with Online Ordering</Link>
                </Button>
                <div className="border-t border-slate-700 pt-6 mt-6">
                    <h4 className="font-semibold text-slate-300 mb-2">Related Reading:</h4>
                    <ul className="list-none p-0 m-0 space-y-2">
                        <li><Link href="/blog/pos-systems-for-restaurants-and-takeaways" className="text-primary hover:underline">POSSO POS Systems</Link></li>
                        <li><Link href="/blog/self-order-kiosks" className="text-primary hover:underline">POSSO Self-Order Kiosks</Link></li>
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
