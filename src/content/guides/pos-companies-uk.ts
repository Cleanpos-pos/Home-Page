import type { Guide } from "@/lib/guides";
import { posso } from "@/lib/possoFacts";

/**
 * /pos-companies-uk — intent: CHOOSING A PROVIDER (commercial investigation).
 *
 * Rewritten October 2026 from a page that repeated /pos-systems and
 * /buy-epos-system-uk almost line for line. It now does one job: help someone
 * who has decided they need a POS system choose who to buy it from. House rule
 * (docs/seo.md §1): Posso is absent from the first two sections.
 *
 * Removed from the old page because they could not be substantiated: "thousands
 * of UK businesses choose Posso" (we say 500+), "free installation", and
 * generic market figures with no source (£29 becoming £150 a month, £200–£500
 * installation charges, £20–£50 update fees).
 */
export const posCompaniesUk: Guide = {
  slug: "pos-companies-uk",
  title: "How to Choose a POS Company in the UK",
  metaDescription:
    "How to choose between UK POS companies: contract terms, card-rate tie-ins, real monthly cost, support hours, offline running and data export — the checks to make before you sign.",
  eyebrow: "Choosing a provider",
  h1: "How to choose a POS company in the UK",
  h1Split: ["How to choose", "a POS company in the UK"],
  standfirst:
    "Most UK POS companies sell a capable till. Where they differ is the contract, the card processing, the monthly bill and who answers the phone on a Saturday night. These are the checks that separate them.",
  highlights: [
    "Six checks to make with any provider",
    "The questions to get answered in writing",
    "How the main types of POS company differ",
  ],
  breadcrumb: "Choosing a POS Company",
  quickAnswer:
    "Choose a UK POS company on six things: whether the till keeps trading offline, whether card processing is tied to the software, the full monthly cost including integrations and per-order fees, support hours against your trading hours, contract length and exit terms, and whether your customer data leaves with you. Get each answer in writing before you sign — from every provider, including us.",
  sections: [
    {
      kind: "features",
      heading: "What should I check before choosing a POS company?",
      intro:
        "Check the contract, the card processing terms, the real monthly cost, the support hours, offline running and data export. Each is easy to get in writing before you sign and expensive to discover afterwards.",
      items: [
        {
          title: "The contract term matters more than the headline price",
          body: "Ask for the minimum term, the notice period, whether it auto-renews and the exact cost of leaving in month 13. A low monthly figure on a long term with an early-termination fee can cost more than a higher figure you can walk away from.",
        },
        {
          title: "Card processing should not be a condition of the software",
          body: "Some EPOS deals only work with one card acquirer, at a rate you did not negotiate. Ask whether you can use another provider, and what happens to the rate after any introductory period ends.",
        },
        {
          title: "The real monthly cost includes every add-on",
          body: "Add up software, support, online ordering, delivery-platform integration, kitchen screens, extra terminals and any per-order fees. Write down the monthly total for everything you need to open on Monday, not the base subscription.",
        },
        {
          title: "Support hours have to cover your trading hours",
          body: "A till fault at 8pm on a Friday is a different problem from one at 10am on a Tuesday. Ask when phone support is staffed, whether it is phone or ticket, and where the team is based.",
        },
        {
          title: "The till has to keep trading without the internet",
          body: "Ask what happens to order-taking, cash payments and kitchen printing when the broadband drops. A cloud-only till stops; an offline-first one keeps going and syncs when the connection returns.",
        },
        {
          title: "Your customer data should leave with you",
          body: "Ask how you export your customer list, menu and sales reports, in what format, and whether there is a charge. If the answer is vague, assume leaving will be hard.",
        },
      ],
    },
    {
      kind: "table",
      heading: "Which type of POS company suits which business?",
      intro:
        "There are three broad kinds of POS company in the UK, and the right one depends on how much of your trade is table service, takeaway and delivery. None is better in general — they are built for different businesses.",
      columns: ["Type of provider", "Usually suits", "Check carefully"],
      firstColIsHeader: true,
      rows: [
        [
          "Payment-led (POS app bundled with a card reader)",
          "Market stalls, pop-ups and simple counters where taking a card is the main job",
          "How hospitality features such as kitchen routing, table plans and delivery are handled as you grow",
        ],
        [
          "Generalist POS platform (retail and hospitality)",
          "Mixed retail-and-food businesses, or retail with deep stock control",
          "Which hospitality features are included and which are monthly add-ons",
        ],
        [
          "Hospitality specialist",
          "Restaurants, takeaways, cafés and pubs running several order channels",
          "Whether it covers retail needs you have, and the contract and card terms",
        ],
      ],
    },
    {
      kind: "prose",
      heading: "Which questions should I ask every POS company before signing?",
      paragraphs: [
        "Ask the same eight questions of every provider and compare the written answers side by side. The provider that is vague on any of them is telling you something.",
        "1. What is the total monthly cost for everything I need, including support, integrations and per-order fees? 2. What is the minimum term, the notice period and the early-termination fee? 3. Am I required to use your card processing, and at what rate after any introductory period? 4. When is phone support staffed, and what happens at 8pm on a Saturday? 5. What keeps working when the internet drops? 6. Who builds my menu, and is that chargeable? 7. How do I export my customer data and reports if I leave? 8. Who owns the hardware at the end of the contract?",
        "If you are replacing an existing system, add a ninth: what transfers from my old till, and what does not? Our [guide to replacing an old EPOS system](/replace-old-epos-system) covers that in detail.",
      ],
    },
    {
      kind: "prose",
      heading: "How does Posso answer those questions?",
      paragraphs: [
        `Posso is a UK hospitality EPOS company based in Leicester, with ${posso.businessCount} UK businesses on the system. Prices are published: a POS system starts at ${posso.posPrice} + VAT, software is from ${posso.softwareMonthly} + VAT a month, and every add-on is listed on our [EPOS pricing page](/epos-pricing-uk).`,
        `Card processing runs through Posso Pay from ${posso.possoPayRate}, quoted on your card turnover, and Teya and Dojo terminals are also supported where you already have a contract. The system is offline-first, so the till, kitchen screens and printers keep working when the broadband drops.`,
        `UK support runs ${posso.supportHours}. ${posso.setupStatement} Hardware is bought outright and carries a ${posso.warrantyYearsWord}-year warranty.`,
        // TODO: PAUL — add the contract terms (minimum term, notice, exit fee) here once confirmed; see possoContract in src/lib/possoFacts.ts.
        "Your customer database can be brought across from your old system. Historic sales data does not transfer, so export your old reports before you switch. For the full picture of what the system does, start with our [EPOS system](/pos) overview.",
      ],
    },
    {
      kind: "links",
      heading: "Comparing specific providers?",
      items: [
        { label: "Epos Now alternative", href: "/epos-now-alternative" },
        { label: "Posso vs Epos Now", href: "/posso-vs-epos-now" },
        { label: "Square POS alternative", href: "/square-pos-alternative" },
        { label: "SumUp POS alternative", href: "/sumup-pos-alternative" },
        { label: "Lightspeed alternative", href: "/lightspeed-alternative" },
        { label: "Zettle alternative", href: "/zettle-alternative" },
        { label: "Toast POS alternative", href: "/toast-pos-alternative" },
        { label: "POS system packages & quotes", href: "/pos-systems" },
        { label: "Buying vs leasing an EPOS", href: "/buy-epos-system-uk" },
      ],
    },
  ],
  faqHeading: "Choosing a POS company — frequently asked questions",
  faqs: [
    {
      q: "What should I look for in a POS company?",
      a: "Look at the contract terms, whether card processing is tied to the software, the full monthly cost, support hours, offline running and data export. The till itself is rarely the difference; the commercial terms around it usually are.",
    },
    {
      q: "Are POS contracts negotiable?",
      a: "Often, yes — especially the minimum term, the card rate and setup charges. Ask for the terms in writing, compare at least two providers, and ask each what happens at renewal.",
    },
    {
      q: "Should my POS company also handle my card payments?",
      a: "It can make reconciliation easier, because the amount pushes from the till to the terminal and the two always agree. The thing to avoid is being required to use one processor at a rate you cannot renegotiate.",
    },
    {
      q: "Does it matter if a POS company is UK-based?",
      a: "It matters most for support. A UK team works your hours and knows UK requirements such as VAT reporting and the main UK delivery platforms. Ask where support is based and when it is staffed.",
    },
    {
      q: "What happens to my data if I switch POS company?",
      a: "It depends on the provider. Customer lists and menus can usually be moved; historic sales data often cannot. Export your reports before the old system is switched off and keep them for year-end.",
    },
    {
      q: "How much do UK POS companies charge?",
      a: `It varies by provider, package and contract length, so compare the total over the contract rather than the headline. For reference, a Posso POS system starts at ${posso.posPrice} + VAT with software from ${posso.softwareMonthly} + VAT a month.`,
    },
  ],
};
