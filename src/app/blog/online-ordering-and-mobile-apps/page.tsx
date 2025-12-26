import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POSSO Online Ordering & Mobile Apps – Commission-Free Food Ordering System',
  description: 'Launch your own online ordering website or mobile app with POSSO. Keep 100% of your profit with zero commission.',
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
                POSSO Online Ordering & Mobile Apps – Your Own Commission-Free Ordering System
              </h1>
              <p>
                Just Eat, Deliveroo and Uber Eats charge high fees that cut into profits. With POSSO Online Ordering & Apps, customers order directly from you with 0% commission – keeping your margin where it belongs.
              </p>

              <h2>Click & Collect and Delivery Built In</h2>
              <ul>
                <li>Orders through your own website or app</li>
                <li>Accept card or cash payments</li>
                <li>Smart time-slot and pre-order scheduling</li>
                <li>Direct integration with EPOS & KDS</li>
              </ul>
              <p>You own the customer relationship – not a marketplace.</p>

              <h2>Mobile Apps for iOS & Android with Your Branding</h2>
              <p>Customers see your brand, not a list of competitors. Push notifications bring customers back for:</p>
              <ul>
                  <li>Special offers</li>
                  <li>New menu items</li>
                  <li>Loyalty rewards</li>
                  <li>Seasonal campaigns</li>
              </ul>
              <p>Apps strengthen loyalty and increase repeat orders.</p>
              
              <h2>SEO and Google Visibility Included</h2>
              <p>
                POSSO ordering websites are fast, mobile-friendly and built for local SEO visibility, helping you rank on Google for takeaway-related searches in your area. Add schema, menus and pages for each dish for even greater ranking strength.
              </p>

              <h2>Take Back Control of Your Online Orders</h2>
              <p>
                Keep your profit instead of paying commission to delivery platforms.
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
