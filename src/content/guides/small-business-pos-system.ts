import type { Guide } from "@/lib/guides";
import { gbp, posso, possoPrices } from "@/lib/possoFacts";

/**
 * /small-business-pos-system — gap page (October 2026), buyer's-guide template.
 * Single-site focus: the starter package, finance and how to work out payback.
 *
 * The payback section uses a clearly labelled illustration with round numbers
 * the reader replaces with their own — it is a method, not a claim about what
 * any business will earn. Posso figures come from src/lib/possoFacts.ts.
 *
 * Overlaps /cash-register-small-business (different head term: "cash
 * register"). Linked rather than merged for now — see the cannibalisation
 * table in docs/pos-cluster-audit-2026-10.md.
 */

// Illustration inputs — kept here so the arithmetic on the page always matches.
const EXAMPLE_EXTRA_ORDERS_PER_WEEK = 10;
const EXAMPLE_GROSS_PROFIT_PER_ORDER = 5;
const weeklyGain = EXAMPLE_EXTRA_ORDERS_PER_WEEK * EXAMPLE_GROSS_PROFIT_PER_ORDER;
const monthlyGain = Math.round((weeklyGain * 52) / 12);
const monthlyNet = monthlyGain - possoPrices.softwareMonthly;
const paybackMonths = Math.ceil(possoPrices.pos / monthlyNet);

export const smallBusinessPosSystem: Guide = {
  slug: "small-business-pos-system",
  title: "Small Business POS System UK",
  metaDescription: `POS system for a small UK business: what a single site needs, what the starter package costs (from ${posso.posPrice} + VAT), finance from ${posso.financeWeekly}/week, and how to work out payback.`,
  eyebrow: "Buyer's guide",
  h1: "POS system for a small business: what you need and what it costs",
  h1Split: ["POS system for a small business:", "what you need and what it costs"],
  standfirst:
    "One site, a handful of staff and every pound watched. A small business needs a till that is quick to learn, keeps trading when the internet drops and costs a known amount each month — not an enterprise system with features you will never switch on.",
  highlights: [
    `Starter POS from ${posso.posPrice} + VAT`,
    `Finance from ${posso.financeWeekly} a week`,
    "A simple way to work out payback",
  ],
  breadcrumb: "Small Business POS",
  quickAnswer: `A small business POS system needs a touchscreen till, integrated card payments, a receipt printer, a cash drawer and clear daily reports, and it should keep working offline. A Posso starter system costs from ${posso.posPrice} + VAT with software from ${posso.softwareMonthly} + VAT a month, or finance from ${posso.financeWeekly} a week, and setup (menu build + configuration) is free.`,
  sections: [
    {
      kind: "features",
      heading: "What does a small business actually need from a POS system?",
      intro:
        "A single site needs speed at the counter, accurate takings and simple reporting — not enterprise features. Start from these six and add only what your trade needs.",
      items: [
        {
          title: "Staff should learn it in one shift",
          body: "Small teams change often and train on the job. If a new starter cannot take an order confidently by the end of their first shift, the system will cost you in mistakes.",
        },
        {
          title: "Card payments should be integrated, not separate",
          body: "When the till sends the amount to the card terminal, nobody keys the wrong figure and the end-of-day totals agree. A standalone card machine is fine to start, but it is a daily reconciliation job.",
        },
        {
          title: "Daily reports should take a minute",
          body: "An X report during the day and a Z report at close, showing takings by payment type, refunds and discounts. If the numbers take longer to find than to count the drawer, the system is too complicated.",
        },
        {
          title: "It has to keep trading offline",
          body: "A small business cannot afford to turn customers away because the broadband dropped. Check that orders, cash and receipts keep working without the internet.",
        },
        {
          title: "The monthly cost should be known in advance",
          body: "Software, support and any integrations should be on one quote. A low headline that grows with add-ons is the commonest surprise for small businesses.",
        },
        {
          title: "Room to grow without starting again",
          body: "A second till, a kitchen screen or online ordering should bolt on to the same system later, at a price you know now.",
        },
      ],
    },
    {
      kind: "table",
      heading: "What does a starter POS package cost?",
      intro: `A Posso starter system is ${posso.posPrice} + VAT for a single-screen till with kitchen printer, receipt printer and cash drawer, plus software from ${posso.softwareMonthly} + VAT a month. These are the costs a single site usually sees.`,
      caption: "Prices from the Posso EPOS pricing page. Card processing is quoted on your turnover.",
      columns: ["Item", "Cost"],
      firstColIsHeader: true,
      rows: [
        ["Starter POS system (till, kitchen printer, receipt printer, cash drawer)", `From ${posso.posPrice} + VAT`],
        ["Software", `From ${posso.softwareMonthly} + VAT a month`],
        ["Setup (menu build + configuration)", "Free"],
        ["Card processing (Posso Pay)", `From ${posso.possoPayRate}, quoted on your turnover`],
        ["Twin-screen upgrade (customer-facing display)", posso.twinScreenPrice],
        ["Extra printer", `${posso.printerPrice} each`],
        ["Finance, if you spread the hardware cost", `From ${posso.financeWeekly} a week, subject to status`],
        ["Hardware warranty", `${posso.warrantyYears} years, included`],
      ],
    },
    {
      kind: "prose",
      heading: "Should a small business buy outright or use finance?",
      paragraphs: [
        "Buy outright if you can do so without straining cash flow, because it costs less in total. Use finance if keeping cash in the bank matters more in your first months — a new business paying for fit-out, stock and deposits at the same time often does better spreading the till.",
        `With Posso, finance is available from ${posso.financeWeekly} a week over 12, 24 or 36 months, subject to status. ${posso.ownershipNote} The full comparison of buying, financing and leasing is in our [buy or lease guide](/buy-epos-system-uk).`,
      ],
    },
    {
      kind: "prose",
      heading: "How do I work out the payback on a POS system?",
      paragraphs: [
        "Divide the upfront cost by the extra gross profit the system earns or saves each month, after its own monthly fee. The result is the number of months it takes to pay for itself.",
        `For illustration only — replace these with your own numbers. Suppose faster service and fewer missed or mis-keyed orders add ${EXAMPLE_EXTRA_ORDERS_PER_WEEK} orders a week at ${gbp(EXAMPLE_GROSS_PROFIT_PER_ORDER)} gross profit each. That is ${gbp(weeklyGain)} a week, or about ${gbp(monthlyGain)} a month. Take off ${posso.softwareMonthly} for software and ${gbp(monthlyNet)} a month is left to pay back a ${posso.posPrice} system — roughly ${paybackMonths} months.`,
        "The inputs that move the answer most are gross profit per order (not sale price) and how many orders you genuinely gain or stop losing. Be conservative: if the system only pays back on optimistic numbers, buy a smaller setup.",
      ],
    },
    {
      kind: "prose",
      heading: "What does Posso include for a single site?",
      paragraphs: [
        `Posso is a UK [EPOS system](/pos) built for hospitality and used by ${posso.businessCount} UK businesses. A single site gets the same system as a group: touchscreen ordering with modifiers, X and Z reports, discounts and refunds, staff permissions and shift cash management, offline-first running, and integrated card payments through Posso Pay, with Teya and Dojo also supported.`,
        `${posso.setupStatement} ${posso.goLiveStatement} UK support runs ${posso.supportHours}, and every cost is on the [EPOS pricing page](/epos-pricing-uk).`,
      ],
    },
    {
      kind: "links",
      heading: "Explore further",
      items: [
        { label: "EPOS system overview", href: "/pos" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
        { label: "POS system packages", href: "/pos-systems" },
        { label: "Buy or lease an EPOS", href: "/buy-epos-system-uk" },
        { label: "Cash register for small business", href: "/cash-register-small-business" },
        { label: "Retail POS system", href: "/retail-pos-system" },
        { label: "Opening a takeaway checklist", href: "/opening-a-takeaway-epos-checklist" },
      ],
    },
  ],
  faqHeading: "Small business POS systems — frequently asked questions",
  faqs: [
    {
      q: "What is the best POS system for a small business in the UK?",
      a: "The best one is the system that fits your trade, is quick for staff to learn, keeps working offline and has a monthly cost you know in advance. For a payment-only stall a simple card reader may be enough; for a food business taking orders from several channels, a hospitality EPOS is usually the better fit.",
    },
    {
      q: "How much does a POS system cost for a small business?",
      a: `A Posso starter system costs from ${posso.posPrice} + VAT, with software from ${posso.softwareMonthly} + VAT a month and card processing from ${posso.possoPayRate} quoted on your turnover. Finance is available from ${posso.financeWeekly} a week, subject to status.`,
    },
    {
      q: "Can I spread the cost of a POS system?",
      a: `Yes. Posso offers finance from ${posso.financeWeekly} a week over 12, 24 or 36 months, subject to status. Buying outright costs less in total if your cash flow allows it.`,
    },
    {
      q: "Do I need a POS system or just a card machine?",
      a: "If you mainly take card payments for simple sales, a card machine may be enough to start. Once you need stock or menu control, staff accounts, daily reports or kitchen orders, a POS system pays for the extra cost in time saved.",
    },
    {
      q: "How long does a POS system take to pay for itself?",
      a: "Divide the upfront cost by the extra monthly gross profit it earns or saves, after its own monthly fee. Use conservative numbers; the worked example on this page shows the method.",
    },
    {
      q: "Is a POS system tax deductible for a small business?",
      a: "Business equipment and software are generally allowable costs, but the treatment depends on your business structure and how you pay. Check with your accountant.",
    },
  ],
};
