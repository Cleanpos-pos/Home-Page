import type { Guide } from "@/lib/guides";
import { posso } from "@/lib/possoFacts";

/**
 * /buy-epos-system-uk — intent: BUYING VS LEASING (commercial investigation).
 *
 * Rewritten October 2026. The old page was a third copy of the /pos-systems
 * pitch ("Buy ePOS System UK" as the H1) and carried claims that contradicted
 * the rest of the site: "delivered, installed and staff-trained within 5
 * working days" (homepage said under 24 hours), "free installation", "own it
 * outright" with no mention of the monthly software fee, and unsourced savings
 * figures ("save over £1,600 vs leasing"). All removed or standardised on the
 * facts in src/lib/possoFacts.ts.
 */
export const buyEposSystemUk: Guide = {
  slug: "buy-epos-system-uk",
  title: "Buy or Lease an EPOS System? UK Guide",
  metaDescription: `Buying vs leasing an EPOS system in the UK: who owns the hardware, what each costs over the term and what to check in the agreement. Posso from ${posso.posPrice} + VAT or finance from ${posso.financeWeekly}/week.`,
  eyebrow: "Buying vs leasing",
  h1: "Buying vs leasing an EPOS system in the UK",
  h1Split: ["Buying vs leasing", "an EPOS system in the UK"],
  standfirst:
    "Buy outright, spread it on finance, lease it, or take it bundled into a subscription — four ways to pay for the same till, with very different totals and very different positions when the term ends.",
  highlights: [
    "The four ways to pay, side by side",
    "What to check in any lease or finance agreement",
    `Posso: buy from ${posso.posPrice} + VAT or finance from ${posso.financeWeekly} a week`,
  ],
  breadcrumb: "Buy or Lease an EPOS",
  quickAnswer: `Buying an EPOS system outright usually costs less over its life, because you pay once for hardware you keep; leasing or finance spreads the cost but adds interest or rental, and some agreements tie you to a long term. Either way the software is a separate monthly cost. With Posso, hardware is bought from ${posso.posPrice} + VAT, software is from ${posso.softwareMonthly} + VAT a month, and finance is available from ${posso.financeWeekly} a week.`,
  sections: [
    {
      kind: "features",
      heading: "What are the ways to pay for an EPOS system?",
      intro:
        "There are four: buy outright, spread the cost on finance, lease, or take the hardware bundled into a subscription. They differ in who owns the hardware during and after the term, and in what you pay in total.",
      items: [
        {
          title: "Buying outright gives you an asset",
          body: "You pay for the hardware once and own it from day one. The software is still a monthly fee, but there is no rental running alongside it, and the till is yours to keep if you change provider later.",
        },
        {
          title: "Finance spreads the cost of buying",
          body: "A finance agreement lets you pay for the hardware in instalments over a fixed term. You pay more in total than buying outright because of the finance charge. Check whether ownership passes to you during or at the end of the term.",
        },
        {
          title: "A lease is rental, not ownership",
          body: "The finance company owns the hardware and you rent it for a fixed term. At the end you may be able to keep it for a fee, rent it on, or hand it back — the agreement decides, so read that clause before you sign.",
        },
        {
          title: "Bundled hardware is paid for in the subscription",
          body: "Some providers discount or include the hardware in exchange for a minimum-term subscription. The upfront cost is low, but leaving early can mean paying off the remaining months, and the hardware may not be yours.",
        },
      ],
    },
    {
      kind: "table",
      heading: "Buying vs leasing: which costs less?",
      intro:
        "Buying outright normally costs least in total, and leasing normally costs most, because rental and finance charges sit on top of the hardware price. Leasing and finance win on cash flow, not on total cost.",
      columns: ["", "Buy outright", "Finance", "Lease", "Bundled subscription"],
      firstColIsHeader: true,
      rows: [
        ["Upfront cost", "Highest", "Low", "Low", "Lowest"],
        ["Who owns the hardware", "You, from day one", "Depends on the agreement — check", "The finance company", "Often the provider — check"],
        ["Total cost over the term", "Lowest", "Hardware plus finance charge", "Rental, usually the highest", "Depends on term and exit fees"],
        ["Commitment", "None beyond the software terms", "Fixed term", "Fixed term", "Minimum subscription term"],
        ["Usually suits", "Established sites with cash to hand", "New sites protecting cash flow", "Businesses that want fixed rental", "Short-term or trial set-ups"],
      ],
    },
    {
      kind: "prose",
      heading: "When does leasing or finance make sense?",
      paragraphs: [
        "When cash flow matters more than total cost. A new takeaway spending on fit-out, stock and deposits in the same month may be better keeping cash in the bank and spreading the till over a year or two.",
        "It makes less sense for an established site that can pay outright, because the finance charge or rental is money spent on nothing but time. If you do spread the cost, keep the term no longer than the life you expect from the hardware.",
      ],
    },
    {
      kind: "features",
      heading: "What should I check in a lease or finance agreement?",
      intro:
        "Check the total amount payable, who owns the hardware at the end, and what it costs to settle early. Those three numbers decide whether the agreement is good value.",
      items: [
        { title: "The total payable, not the weekly figure", body: "Multiply the payment by the number of payments and add any fees. Compare that with the outright price." },
        { title: "Ownership at the end of the term", body: "Does the hardware become yours, is there a final fee to keep it, or must it go back? Get it in writing." },
        { title: "Early settlement", body: "If you sell the business or change system, what does it cost to end the agreement in year one?" },
        { title: "What the agreement covers", body: "Is it hardware only, or does it also lock in the software or card processing? Keep those separate if you can." },
      ],
    },
    {
      kind: "prose",
      heading: "How do you buy or finance a Posso EPOS system?",
      paragraphs: [
        `Buy the hardware outright from ${posso.posPrice} + VAT for a single-screen POS with kitchen printer, receipt printer and cash drawer, or spread it on finance from ${posso.financeWeekly} a week over 12, 24 or 36 months, subject to status. ${posso.ownershipNote}`,
        // TODO: PAUL — confirm whether Posso finance is a lease, hire purchase or a business loan (who owns the hardware during the term), the finance provider, and whether any representative example must be shown alongside the weekly figure.
        `${posso.setupStatement} ${posso.goLiveStatement} Hardware carries a ${posso.warrantyYearsWord}-year warranty and UK support runs ${posso.supportHours}.`,
        "Every one-off and monthly cost is on the [EPOS pricing page](/epos-pricing-uk), packages are on [POS system packages and quotes](/pos-systems), and the [EPOS system](/pos) overview covers what the system does.",
      ],
    },
    {
      kind: "callout",
      variant: "note",
      title: "Tax treatment differs — ask your accountant",
      body: "Buying, financing and leasing are usually treated differently for tax, and the right choice depends on your business structure and profits. This page is not tax advice; check with your accountant before you choose.",
    },
    {
      kind: "links",
      heading: "Explore further",
      items: [
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
        { label: "EPOS monthly fees explained", href: "/epos-system-monthly-fee" },
        { label: "POS system packages", href: "/pos-systems" },
        { label: "Choosing a POS company", href: "/pos-companies-uk" },
        { label: "Finance", href: "/finance" },
      ],
    },
  ],
  faqHeading: "Buying vs leasing an EPOS — frequently asked questions",
  faqs: [
    {
      q: "Is it better to buy or lease an EPOS system?",
      a: "Buying is usually cheaper over the life of the system; leasing is usually better for cash flow. If you can pay outright without straining the business, buying normally wins on total cost.",
    },
    {
      q: "Can I lease a POS system from Posso?",
      a: `You can spread the cost. Posso offers finance from ${posso.financeWeekly} a week over 12, 24 or 36 months, subject to status, and your quote sets out the agreement and who owns the hardware during the term.`,
    },
    {
      q: "Do I own the EPOS hardware if I buy it outright?",
      a: `Yes. Hardware bought outright is yours from day one. The software is a separate monthly fee — with Posso, from ${posso.softwareMonthly} + VAT a month.`,
    },
    {
      q: "What happens at the end of an EPOS lease?",
      a: "It depends on the agreement. Some let you keep the hardware for a final fee, some roll into a further rental and some require you to return it. Check the end-of-term clause before you sign.",
    },
    {
      q: "Is an EPOS system tax deductible?",
      a: "Business equipment and software are generally allowable costs for a trading business, but how buying, financing and leasing are treated differs. Check the treatment for your business with your accountant.",
    },
    {
      q: "What do I get when I buy a Posso EPOS system?",
      a: `A single-screen touchscreen till with kitchen printer, receipt printer, cash drawer and software, from ${posso.posPrice} + VAT. ${posso.setupStatement}`,
    },
  ],
};
