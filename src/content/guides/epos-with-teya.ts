import type { Guide } from "@/lib/guides";

/**
 * High-intent integration page (gap-analysis batch, August 2026). The
 * "teya epos system" SERP has zero strong competitors and no authority
 * answer — and Posso has a real Teya partnership (existing claims sourced
 * from the live /pdq-systems and card machine pages; the application form
 * exists at /teya-card-machine-application-form).
 *
 * Verified claims used: Teya partnership terms as published on live pages
 * (competitive rates, no long-term contracts, no hidden fees, no monthly
 * minimums); Posso Pay quoted on turnover; £499 + VAT system; £25 + VAT/mo
 * software; support Mon–Fri 9am–9:30pm.
 * ⚠️ CONFIRM before strengthening: whether a customer's EXISTING Teya
 * account/terminals can connect to Posso One, or whether Teya supply runs
 * through Posso's partnership only. Copy currently hedges ("talk to us").
 */

export const eposWithTeya: Guide = {
  slug: "epos-with-teya",
  title: "EPOS with Teya",
  metaDescription:
    "EPOS that works with Teya: Posso One integrates Teya card machines natively — amounts push from the till, totals reconcile, no retyping. From £499 + VAT.",
  eyebrow: "Integration",
  h1: "EPOS that works with Teya",
  h1Split: ["EPOS that works", "with Teya"],
  standfirst:
    "Teya's rates win a lot of UK counters — and then the till decides whether those rates come with retyping every amount by hand. Posso One integrates Teya card machines natively: the basket pushes the amount to the terminal, and the till and the Teya statement agree at close. This page is the whole answer.",
  highlights: [
    "Native Teya integration — amounts push from the basket, nothing retyped",
    "Till totals and Teya settlement reconcile at close",
    "Complete EPOS from £499 + VAT, software from £25 + VAT a month",
  ],
  breadcrumb: "EPOS with Teya",
  quickAnswer:
    "Yes — Posso One works with Teya. Card machines supplied through our Teya partnership integrate natively with the till: the amount pushes from the basket to the terminal, so nothing is typed twice, and end-of-day totals reconcile against the Teya settlement automatically. The partnership terms are the ones Teya is chosen for — competitive rates with no long-term contracts, no hidden fees and no monthly minimums. The complete EPOS is £499 + VAT with software from £25 + VAT a month.",
  sections: [
    {
      kind: "prose",
      kicker: "Why this page exists",
      heading: "The till decides your card machine",
      paragraphs: [
        "In the card machine forums, one owner sums up the constraint every buyer eventually hits: their POS is great, but it only syncs with card machines from a shortlist of providers. Another was offered genuinely sharp rates — 0.6% on debit — and had to walk away because the terminals integrated with no till they could use. Rates and integration have to be solved together, or the cheap machine costs you back in retyped amounts, mis-keyed totals and a nightly reconciliation done by hand.",
        "That is the specific problem this page answers for one pairing: if you want Teya's rates, Posso One is a till that speaks to Teya terminals natively. No middle box, no typing the total into the card machine, no explaining a 40p discrepancy at 11pm.",
      ],
    },
    {
      kind: "features",
      kicker: "What integrated means",
      heading: "What you get when the till and Teya talk",
      items: [
        {
          title: "Amounts push from the basket",
          body: "Staff ring the order; the exact total appears on the Teya terminal. Nobody types £14.85 into a card machine at speed on a Friday, which is precisely when £41.85 happens. Mis-keyed amounts are the quietest leak in counter retail — integration closes it completely.",
        },
        {
          title: "One reconciliation, not two",
          body: "End of day, the till's card total and the Teya settlement describe the same transactions, matched automatically. The half-hour of comparing a Z-report against a card machine printout — the ritual every unintegrated counter knows — stops existing. Refunds run from the till and land back through the same rails.",
        },
        {
          title: "The terms Teya is chosen for",
          body: "Card processing through our Teya partnership carries the terms that make owners pick Teya in the first place: competitive rates quoted for your business, no long-term payment contracts, no hidden fees, no monthly minimums that punish a quiet January. You stay because the rate and the service hold up — not because a contract says you must.",
        },
        {
          title: "One supplier when something misbehaves",
          body: "Till, kiosk, kitchen screen and card machine from one place means one phone number when something needs fixing — ours, Monday to Friday, 9am to 9:30pm, UK-based — and nobody blaming the other supplier. Payment problems at service time are urgent; two-vendor finger-pointing is a luxury a busy counter cannot afford.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "What it costs, plainly",
      paragraphs: [
        "The complete Posso system is £499 + VAT including the terminal, menu build and staff training, with software from £25 + VAT a month and finance from £24.92 a week. Teya card processing is quoted on your actual card turnover — deliberately not a flat rate printed here, because a £5-average counter and a £30-average restaurant should not pay the same structure. Bring your current card statement and we will put our quote next to it in writing.",
        "Already on Teya, or weighing it against your current provider? Talk to us before you change anything — we will tell you honestly how your existing setup fits, and the application for a Teya machine through Posso takes minutes. If you are comparing the wider market first, our community-research page on card machines collects what owners actually say about every major provider, warnings included.",
      ],
    },
    {
      kind: "links",
      heading: "Get started with Teya + Posso",
      items: [
        { label: "Teya card machine application", href: "/teya-card-machine-application-form" },
        { label: "Card machines", href: "/credit-card-machines" },
        { label: "Card machines — what owners say", href: "/card-machines-what-owners-say" },
        { label: "PDQ machines for small business", href: "/pdq-machine-small-business" },
        { label: "ePOS systems", href: "/pos" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "EPOS with Teya — what people ask",
  faqs: [
    {
      q: "Does Posso work with Teya card machines?",
      a: "Yes — natively. Card machines supplied through Posso's Teya partnership integrate directly with Posso One: the amount pushes from the basket to the terminal, refunds run from the till, and end-of-day totals reconcile against the Teya settlement automatically. It is a first-class integration, not a workaround.",
    },
    {
      q: "I already have a Teya account — can I keep it?",
      a: "Talk to us before changing anything. Teya supply for the integrated setup runs through our partnership, and how an existing Teya relationship fits depends on your current terminals and agreement — we will look at what you have and tell you honestly, including if the right answer is leaving something as it is. Bring your latest statement and the conversation takes ten minutes.",
    },
    {
      q: "What rates will I pay with Teya through Posso?",
      a: "Quoted on your real card turnover, with the terms Teya is known for: no long-term payment contracts, no hidden fees, no monthly minimums. We do not print a flat rate because average ticket size changes which structure wins — the honest comparison is our written quote against your current statement, which is exactly the discipline our fees guide tells you to apply to every provider.",
    },
    {
      q: "Why does EPOS integration matter if the rates are the same?",
      a: "Because the card machine is only half the cost. Unintegrated, every transaction is typed twice — the mis-key risk owners in the forums describe — and every night ends with matching a till report against a terminal printout. Integrated, amounts push automatically and reconciliation is a glance. Over a year of Friday nights, the integration is worth real money and more than a little sanity.",
    },
    {
      q: "How do I get a Teya card machine with a Posso till?",
      a: "The application form on this site takes minutes, or call 0808 175 3956 and we will handle it with your EPOS order — machine, till, menu build and training arrive as one setup. The complete system is £499 + VAT with software from £25 + VAT a month, and the card machine is configured to the till before it reaches your counter.",
    },
  ],
};
