import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQSection({ title, faqs }: { title?: string; faqs: FAQItem[] }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-slate-900/30" aria-label="Frequently asked questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-10">
            {title || 'Frequently Asked Questions'}
          </h2>
          {/* Native details/summary keeps every answer in the server-rendered HTML
              (the client accordion omitted closed answers, so crawlers saw empty FAQs) */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group glass-card rounded-xl border border-slate-700/50 px-6"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-left text-white font-medium py-5 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-slate-400 pb-5 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
