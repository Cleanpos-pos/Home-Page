import type { Guide } from "@/lib/guides";
import { posso } from "@/lib/possoFacts";

/**
 * Competitor alternative pages — /square-pos-alternative, /sumup-pos-alternative,
 * /lightspeed-alternative, /zettle-alternative, /toast-pos-alternative.
 *
 * Structure copied from /epos-now-alternative and /posso-vs-epos-now: comparison
 * table, who the competitor is better for, who Posso is better for, switching
 * steps, six FAQs and the enquiry CTA.
 *
 * COMPARATIVE ADVERTISING (CAP code 3.33–3.44). Competitor facts may only come
 * from the competitor's own public UK site, with the date checked and a source
 * link. When these pages were built (3 October 2026) the competitors' sites
 * could not be reached from the build environment, so NO competitor price or
 * feature is stated: every competitor cell falls back to a neutral "check their
 * pricing" pointer, `lastChecked` is null, and `verified` is false.
 *
 * While `verified` is false the page is noindex,follow and left out of the
 * sitemap (src/app/sitemap.ts reads `competitorPageVerified`). To publish one:
 *   1. Read the competitor's own UK pricing/feature pages listed in `sources`.
 *   2. Fill `facts` with figures exactly as shown there (say "+ VAT" or "inc VAT"
 *      as they do), and the positioning lines in `betterFor`.
 *   3. Set `lastChecked` to the month and year, and `verified: true`.
 * No Review, Product or AggregateRating schema about a competitor — these pages
 * emit BreadcrumbList (+ FAQPage from FAQSection) only.
 */

type RowKey =
  | "builtFor"
  | "entryHardware"
  | "software"
  | "cardProcessing"
  | "kitchenDisplay"
  | "onlineOrdering"
  | "deliveryPlatforms"
  | "offline"
  | "contract"
  | "support";

interface Competitor {
  slug: string;
  /** Display name as the competitor styles it */
  name: string;
  /** Short name for headings, e.g. "Square" */
  short: string;
  /** Name as searched, for the title and H1, e.g. "Square POS" */
  searchName: string;
  /** Official UK pages to verify against (found 3 Oct 2026, not yet read) */
  sources: { label: string; url: string }[];
  /** Verified competitor facts, verbatim from `sources`. Empty until checked. */
  facts: Partial<Record<RowKey, string>>;
  /** e.g. "October 2026" — set when `facts` are checked */
  lastChecked: string | null;
  verified: boolean;
  /** Honest "who they are better for" lines — verify each against `sources`. */
  betterFor: string[];
  metaDescription: string;
}

const ROWS: { key: RowKey; label: string; posso: string; kind: "price" | "feature" }[] = [
  { key: "builtFor", label: "Built for", posso: "UK hospitality — restaurants, takeaways, cafés, pubs and multi-site groups", kind: "feature" },
  { key: "entryHardware", label: "Entry system price", posso: `From ${posso.posPrice} + VAT (single-screen POS, kitchen printer, receipt printer, cash drawer)`, kind: "price" },
  { key: "software", label: "Software", posso: `From ${posso.softwareMonthly} + VAT a month`, kind: "price" },
  { key: "cardProcessing", label: "Card processing", posso: `Posso Pay from ${posso.possoPayRate}, quoted on turnover; Teya and Dojo also supported`, kind: "price" },
  { key: "kitchenDisplay", label: "Kitchen display", posso: `21-inch screen ${posso.kdsPrice} + VAT, one-off`, kind: "price" },
  { key: "onlineOrdering", label: "Online ordering on your own site", posso: "Included; the customer pays a 60p service fee per order", kind: "feature" },
  { key: "deliveryPlatforms", label: "Just Eat, Uber Eats, Deliveroo", posso: `${posso.deliveryIntegrationMonthly}/month, unlimited orders`, kind: "price" },
  { key: "offline", label: "Keeps trading offline", posso: "Yes — offline-first, syncs when the connection returns", kind: "feature" },
  // TODO: PAUL — replace with the confirmed contract terms (see possoContract in src/lib/possoFacts.ts).
  { key: "contract", label: "Contract terms", posso: "Set out on your quote", kind: "feature" },
  { key: "support", label: "UK support hours", posso: posso.supportHours, kind: "feature" },
];

export function competitorGuide(c: Competitor): Guide {
  const pricingSource = c.sources[0];
  const fallback = (kind: "price" | "feature") =>
    kind === "price"
      ? `See [${c.short}'s UK pricing](${pricingSource.url})`
      : `Check with ${c.short}`;

  return {
    slug: c.slug,
    title: `${c.searchName} Alternative for UK Hospitality`,
    metaDescription: c.metaDescription,
    eyebrow: "Alternative",
    h1: `${c.searchName} alternative for UK restaurants and takeaways`,
    h1Split: [`${c.searchName} alternative`, "for UK restaurants and takeaways"],
    standfirst: `${c.name} suits plenty of businesses. If yours is a UK restaurant or takeaway that has outgrown it — or you are choosing for the first time — this is a fair look at where each fits, and what switching involves.`,
    highlights: [
      `${c.short} and Posso side by side`,
      `Who ${c.short} suits better, and who Posso suits better`,
      `UK hospitality EPOS from ${posso.posPrice} + VAT`,
    ],
    breadcrumb: `${c.short} Alternative`,
    schema: "faq-breadcrumb",
    noindex: !c.verified,
    quickAnswer: `Posso is an alternative to ${c.name} for UK hospitality operators who want the till, kitchen display, online ordering, delivery-platform orders and card payments in one offline-first system with published prices. ${c.name} may suit you better if your business needs fit its own strengths, set out below. Posso starts at ${posso.posPrice} + VAT with software from ${posso.softwareMonthly} + VAT a month.`,
    sections: [
      {
        kind: "table",
        heading: `How does Posso compare with ${c.name}?`,
        intro: `Both take orders and payments; the differences are in what is included, how it is priced and what it is built for. Posso figures are our published prices; ${c.short} details are from ${c.short}'s own UK website — check them there, as prices change.`,
        caption: `Prices checked: ${c.lastChecked ?? "pending"}. Source: ${c.sources
          .map((s) => `[${s.label}](${s.url})`)
          .join(", ")}. Posso prices: [EPOS pricing](/epos-pricing-uk).`,
        firstColIsHeader: true,
        columns: ["", "Posso", c.short],
        rows: ROWS.map((r) => [r.label, r.posso, c.facts[r.key] ?? fallback(r.kind)]),
      },
      {
        kind: "prose",
        heading: `Who is ${c.name} better for?`,
        paragraphs: c.betterFor,
      },
      {
        kind: "prose",
        heading: "Who is Posso better for?",
        paragraphs: [
          `Posso is built for UK hospitality sites that take orders from several places at once — counter, phone, table, kiosk, your own website and the delivery platforms — and need them in one kitchen queue. If that is your trade, it is the gap Posso fills: Just Eat, Uber Eats and Deliveroo orders arrive on the same screen at ${posso.deliveryIntegrationMonthly}/month, missed calls can be answered by AI phone ordering at ${posso.aiPhonePerOrder} per order, and your own drivers run on the driver app at ${posso.driverAppPerDelivery} per delivery.`,
          `It is offline-first, so the till, kitchen screens and printers keep working when the broadband drops. Prices are published on the [EPOS pricing page](/epos-pricing-uk), UK support runs ${posso.supportHours}, and hardware carries a ${posso.warrantyYearsWord}-year warranty. For the full picture of the system, see our [EPOS system](/pos) overview.`,
        ],
      },
      {
        kind: "features",
        heading: `How do I switch from ${c.short} to Posso?`,
        intro: `Switching takes a menu, a date and a few hours of training; the [guide to replacing an old EPOS system](/replace-old-epos-system) covers every step in detail. The short version:`,
        items: [
          { title: "1. Check your current terms", body: `Note any minimum term, notice period or hardware agreement with ${c.short}, and time the switch around it.` },
          { title: "2. Export what you can", body: "Download your sales reports and customer list before anything is switched off. Historic sales data does not transfer; your customer database can be brought across." },
          { title: "3. Send us your menu", body: "A PDF, a photo or an export. We build it, with modifiers and prices, as part of free setup." },
          { title: "4. We configure before shipping", body: posso.goLiveStatement },
          { title: "5. Train the team", body: "Staff training is included. Book it for a day when the people who use the till are in." },
          { title: "6. Run both until you are confident", body: "Nobody switches off a working till on faith. Keep the old system available for the first service." },
        ],
      },
      {
        kind: "links",
        heading: "Compare other providers",
        items: [
          { label: "Square POS alternative", href: "/square-pos-alternative" },
          { label: "SumUp POS alternative", href: "/sumup-pos-alternative" },
          { label: "Lightspeed alternative", href: "/lightspeed-alternative" },
          { label: "Zettle alternative", href: "/zettle-alternative" },
          { label: "Toast POS alternative", href: "/toast-pos-alternative" },
          { label: "Epos Now alternative", href: "/epos-now-alternative" },
          { label: "Choosing a POS company", href: "/pos-companies-uk" },
        ].filter((l) => l.href !== `/${c.slug}`),
      },
    ],
    faqHeading: `${c.short} alternative — frequently asked questions`,
    faqs: [
      {
        q: `Is Posso a good alternative to ${c.name} for a restaurant or takeaway?`,
        a: `It is if you need several order channels in one kitchen queue — counter, phone, kiosk, your own website and the delivery platforms — and want the system to keep trading offline. If your needs match ${c.short}'s strengths instead, staying may be the better choice.`,
      },
      {
        q: `Can I keep my ${c.short} card reader with Posso?`,
        a: "Not as an integrated terminal. Posso integrates card payments through Posso Pay, and Teya and Dojo terminals are also supported, so the amount pushes from the till to the terminal automatically.",
      },
      {
        q: `Will my menu transfer from ${c.short}?`,
        a: "Yes — we rebuild it for you as part of free setup, including modifiers and prices. Your customer database can be brought across too; historic sales data does not transfer, so export your old reports first.",
      },
      {
        q: `How much does Posso cost compared with ${c.short}?`,
        a: `Posso starts at ${posso.posPrice} + VAT for a POS system, with software from ${posso.softwareMonthly} + VAT a month and card processing from ${posso.possoPayRate} quoted on your turnover. Check ${c.short}'s current prices on its own UK website and compare the total monthly cost for everything you need.`,
      },
      {
        q: "Does Posso work without the internet?",
        a: "Yes. Posso is offline-first: orders, cash payments and kitchen printing keep working when the connection drops, and everything syncs when it returns.",
      },
      {
        q: `How long does it take to switch from ${c.short} to Posso?`,
        a: `${posso.goLiveStatement} Allow time beforehand to check your current terms with ${c.short} and to agree your menu.`,
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/* The five competitors. Sources are the official UK pages found by   */
/* search on 3 Oct 2026; none could be opened from the build network,  */
/* so `facts` is empty and every page is unverified.                   */
/* ------------------------------------------------------------------ */

export const square: Competitor = {
  slug: "square-pos-alternative",
  name: "Square",
  short: "Square",
  searchName: "Square POS",
  sources: [
    { label: "Square UK POS pricing", url: "https://squareup.com/gb/en/point-of-sale/pricing" },
    { label: "Square for Restaurants pricing", url: "https://squareup.com/gb/en/point-of-sale/restaurants/pricing" },
    { label: "Square UK fees", url: "https://squareup.com/gb/en/legal/general/fees" },
  ],
  // TODO: PAUL — fill from the Square UK pages above: software plans and monthly prices, in-person/online card rates, reader/terminal/register prices, KDS availability and price, contract terms. Then set lastChecked and verified.
  facts: {},
  lastChecked: null,
  verified: false,
  betterFor: [
    // TODO: PAUL — verify each statement against Square's own UK site before setting verified: true.
    "Square is built around taking payments, with a point-of-sale app that a small business can start on quickly. If you are a market stall, a pop-up, a mobile trader or a shop where taking a card is the main job, a payment-led system like Square can be the simpler choice.",
    "It also covers retail as well as food, so a business that sells both may prefer one system that does each reasonably. Check Square's own UK pages for which features sit in which plan.",
  ],
  metaDescription: `Looking for a Square POS alternative for a UK restaurant or takeaway? Posso compared with Square: what is included, how it is priced and who each suits. From ${posso.posPrice} + VAT.`,
};

export const sumup: Competitor = {
  slug: "sumup-pos-alternative",
  name: "SumUp",
  short: "SumUp",
  searchName: "SumUp POS",
  sources: [
    { label: "SumUp UK pricing", url: "https://www.sumup.com/en-gb/pricing/" },
    { label: "SumUp POS Pro pricing", url: "https://www.sumup.com/en-gb/point-of-sale-overview/pos-pro/pricing/" },
  ],
  // TODO: PAUL — fill from the SumUp UK pages above: reader prices (Solo, Solo Lite, Terminal), transaction rates with and without any subscription, POS Lite/POS Pro monthly prices, contract terms. Then set lastChecked and verified.
  facts: {},
  lastChecked: null,
  verified: false,
  betterFor: [
    // TODO: PAUL — verify each statement against SumUp's own UK site before setting verified: true.
    "SumUp is best known for compact card readers aimed at sole traders and small businesses. If your card takings are modest and irregular, and you mainly need to accept a payment rather than run a kitchen, a reader-first provider like SumUp may be all you need.",
    "It also offers point-of-sale software, so a small counter business can start simple and add a till later. Check SumUp's own UK pages for what each plan includes.",
  ],
  metaDescription: `SumUp POS alternative for UK restaurants and takeaways: Posso compared with SumUp on what is included, pricing and who each suits. Hospitality EPOS from ${posso.posPrice} + VAT.`,
};

export const lightspeed: Competitor = {
  slug: "lightspeed-alternative",
  name: "Lightspeed",
  short: "Lightspeed",
  searchName: "Lightspeed",
  sources: [
    { label: "Lightspeed Restaurant UK pricing", url: "https://www.lightspeedhq.co.uk/pos/restaurant/pricing/" },
  ],
  // TODO: PAUL — fill from Lightspeed's UK restaurant (and retail, if relevant) pricing pages: plan names and monthly prices (search snippets disagreed, so read the live page), what each plan includes (KDS, online ordering), card processing, hardware, contract terms. Then set lastChecked and verified.
  facts: {},
  lastChecked: null,
  verified: false,
  betterFor: [
    // TODO: PAUL — verify each statement against Lightspeed's own UK site before setting verified: true.
    "Lightspeed sells separate point-of-sale products for restaurants and for retail, and positions itself towards established and multi-location businesses. If you run retail alongside hospitality and need retail stock tools, or operate across several countries, Lightspeed's breadth may suit you better.",
    "Groups already using Lightspeed's wider ecosystem of integrations may also find staying simpler than switching. Check Lightspeed's own UK pages for what each plan includes.",
  ],
  metaDescription: `Lightspeed alternative for UK restaurants and takeaways: Posso compared with Lightspeed on what is included, pricing and who each suits. Hospitality EPOS from ${posso.posPrice} + VAT.`,
};

export const zettle: Competitor = {
  slug: "zettle-alternative",
  name: "Zettle by PayPal",
  short: "Zettle",
  searchName: "Zettle",
  sources: [
    { label: "Zettle UK pricing", url: "https://www.zettle.com/gb/pricing" },
    { label: "Zettle card reader", url: "https://www.zettle.com/gb/payments/card-reader" },
  ],
  // TODO: PAUL — fill from Zettle's UK pages above: reader and terminal prices (note any first-time-buyer offer and its end date), transaction rate, POS app pricing, contract terms. Confirm the current product name (the site may now say "PayPal Point of Sale"). Then set lastChecked and verified.
  facts: {},
  lastChecked: null,
  verified: false,
  betterFor: [
    // TODO: PAUL — verify each statement against Zettle's own UK site before setting verified: true.
    "Zettle is PayPal's point-of-sale product: a card reader and a POS app that run on a phone or tablet. If you already take payments online through PayPal and want in-person payments in the same place, or you run a small shop or stall, Zettle can be the simpler fit.",
    "It suits businesses where the till is mainly for taking payment rather than running a kitchen. Check Zettle's own UK pages for current hardware and pricing.",
  ],
  metaDescription: `Zettle alternative for UK restaurants and takeaways: Posso compared with Zettle by PayPal on what is included, pricing and who each suits. Hospitality EPOS from ${posso.posPrice} + VAT.`,
};

export const toast: Competitor = {
  slug: "toast-pos-alternative",
  name: "Toast",
  short: "Toast",
  searchName: "Toast POS",
  sources: [
    { label: "Toast UK pricing", url: "https://pos.toasttab.com/uk/pricing" },
    { label: "Toast UK payments", url: "https://pos.toasttab.com/uk/products/payments" },
  ],
  // TODO: PAUL — fill from Toast's UK pages above: plan names and monthly prices, whether pricing is quote-only, what each plan includes (KDS, handhelds, online ordering), payment processing terms, contract length, UK availability wording. Then set lastChecked and verified.
  facts: {},
  lastChecked: null,
  verified: false,
  betterFor: [
    // TODO: PAUL — verify each statement against Toast's own UK site before setting verified: true.
    "Toast is a restaurant-specific platform that began in the US and now sells in the UK. If you want a restaurant system with its own hardware range and a wide set of add-on products from one company, and its UK plans fit your budget, Toast is a credible choice.",
    "Operators with sites in both the US and the UK may also value running one platform across both. Check Toast's own UK pages for current plans and pricing.",
  ],
  metaDescription: `Toast POS alternative for UK restaurants and takeaways: Posso compared with Toast on what is included, pricing and who each suits. Hospitality EPOS from ${posso.posPrice} + VAT.`,
};

export const competitors = [square, sumup, lightspeed, zettle, toast];

/** slug → verified. The sitemap leaves unverified competitor pages out. */
export const competitorPageVerified: Record<string, boolean> = Object.fromEntries(
  competitors.map((c) => [`/${c.slug}`, c.verified]),
);

export const squareGuide = competitorGuide(square);
export const sumupGuide = competitorGuide(sumup);
export const lightspeedGuide = competitorGuide(lightspeed);
export const zettleGuide = competitorGuide(zettle);
export const toastGuide = competitorGuide(toast);
