import type { Guide } from "@/lib/guides";
import { posso } from "@/lib/possoFacts";

/**
 * /retail-pos-system — gap page (October 2026), buyer's-guide template.
 *
 * SCOPE: the retail features Posso One actually supports are not confirmed.
 * Several older product pages (/shop-till-software, /grocery-store-epos,
 * /homeware-pos, /sweet-shop-pos) claim barcode scanning, stock control,
 * supplier ordering and weigh scales, while /epos-now-alternative says Posso is
 * hospitality-only and that pure retail should stay on a retail-first platform.
 * Until that is settled this page:
 *   - gives vendor-neutral buying advice on barcode scanning, stock, variants
 *     and multi-site (sections 1–3, Posso absent, per docs/seo.md §1);
 *   - claims for Posso ONLY what /pos already states: multi-site with central
 *     reporting and central or per-site pricing, discounts and promotions,
 *     refunds, X/Z reports, staff permissions, offline-first, integrated
 *     payments, the CMS, Xero sync and bag/box label printing.
 *
 * TODO: PAUL — confirm which retail features Posso One supports: barcode
 * scanning (and label printing), stock levels and low-stock alerts, product
 * variants (size/colour), purchase orders and supplier management, weigh-scale
 * integration, gift cards. Then add the confirmed ones to the "Where Posso
 * fits" section and reconcile the older retail pages listed above.
 */
export const retailPosSystem: Guide = {
  slug: "retail-pos-system",
  title: "Retail POS System UK: Buyer's Guide",
  metaDescription:
    "Retail POS system buyer's guide for UK shops: barcode scanning, stock control, product variants and multi-site — what to check, what to ask, and where a hospitality-first EPOS fits.",
  eyebrow: "Buyer's guide",
  h1: "Retail POS system: the UK buyer's guide",
  h1Split: ["Retail POS system:", "the UK buyer's guide"],
  standfirst:
    "A shop till lives or dies on product data — thousands of lines, sizes and colours, stock that has to match the shelf. Here is what to look for in a retail POS, what to ask, and when a hospitality-first system is and is not the right fit.",
  highlights: [
    "Barcode, stock, variants and multi-site explained",
    "The questions to ask any retail POS supplier",
    "Honest about where Posso fits — and where it does not",
  ],
  breadcrumb: "Retail POS System",
  quickAnswer:
    "A retail POS system should scan barcodes quickly, keep stock levels accurate as you sell, handle product variants such as size and colour without duplicating items, and report across every site you run. For a shop that also serves food and drink, a hospitality EPOS can cover both; for pure retail with deep stock and supplier management, a retail-first platform is usually the better fit.",
  sections: [
    {
      kind: "features",
      heading: "What does a retail POS system need to do?",
      intro:
        "It needs to find products fast, keep stock accurate, handle variants cleanly and report across sites. Everything else — loyalty, promotions, integrations — is built on those four.",
      items: [
        {
          title: "Barcode scanning has to be instant at the counter",
          body: "A scan should add the right product and price in one beep, including items with supplier barcodes you did not print yourself. Ask what happens when a barcode is not recognised: can staff add it on the spot, or does the queue wait for a manager?",
        },
        {
          title: "Stock should move when the sale does",
          body: "Every sale, refund and delivery in should adjust stock without a separate step. Ask whether stock is tracked per site, whether low-stock alerts exist, and how a stock take is entered and reconciled.",
        },
        {
          title: "Variants should be one product, not twenty",
          body: "A shirt in five sizes and four colours is one product with twenty variants, each with its own barcode and stock count. A system that makes you create twenty separate products turns every price change into an afternoon.",
        },
        {
          title: "Multi-site means one catalogue and separate stock",
          body: "With more than one shop, you want one central catalogue and price list, stock held per site, and reporting that shows each site and the group. Ask whether transfers between sites are recorded.",
        },
        {
          title: "Refunds and exchanges need an audit trail",
          body: "Retail sees far more returns than hospitality. Refunds should link to the original sale, put stock back where appropriate and be restricted by staff role.",
        },
        {
          title: "The till has to work when the internet does not",
          body: "A cloud-only till that stops on a Saturday afternoon costs real sales. Ask what still works offline: scanning, cash, card and receipts.",
        },
      ],
    },
    {
      kind: "table",
      heading: "What should I ask a retail POS supplier?",
      intro:
        "Ask each supplier the same questions and compare the written answers. The vague answers are the ones to chase.",
      columns: ["Area", "Ask the supplier"],
      firstColIsHeader: true,
      rows: [
        ["Barcodes", "Can staff add an unknown barcode at the till? Can it print shelf-edge and product labels?"],
        ["Stock", "Is stock tracked per site? Are there low-stock alerts? How is a stock take entered?"],
        ["Variants", "Are sizes and colours variants of one product, each with its own barcode and stock?"],
        ["Purchasing", "Can it raise purchase orders and receive deliveries against them?"],
        ["Multi-site", "One catalogue, per-site stock, transfers between shops, group reporting?"],
        ["Offline", "What still works with no internet — scanning, cash, card, receipts?"],
        ["Costs", "Total monthly cost for everything you need, contract term and card processing terms?"],
      ],
    },
    {
      kind: "prose",
      heading: "Is a hospitality EPOS right for a retail shop?",
      paragraphs: [
        "It can be, if food or drink is a real part of the business. A deli, bakery, farm shop or sweet shop that sells across a counter, takes some orders ahead and serves hot drinks is often better served by a hospitality EPOS that also sells shelf items than by a retail system that cannot run a kitchen ticket.",
        "If you are a pure retailer — clothing, hardware, pharmacy or a convenience store with thousands of lines, supplier ordering and deep stock control — a retail-first platform is usually the better fit, and we would rather say so here than sell you the wrong system.",
      ],
    },
    {
      kind: "prose",
      heading: "Where does Posso fit for retail?",
      paragraphs: [
        `Posso is a hospitality-first [EPOS system](/pos) that suits food-led retail counters. What it does for every business: multi-site operation with each location's data kept separate and central reporting across the group; menus and prices managed centrally or set per site; discounts, promotions and coupons; full and partial refunds; X and Z reports; role-based staff access with shift and cash management; and offline-first running, so the till keeps trading when the broadband drops.`,
        `Card payments are integrated through Posso Pay from ${posso.possoPayRate}, quoted on your turnover. Customer data captured at the till goes into the built-in CMS with 2,000 marketing emails a month included, sales, payments and VAT can sync to Xero, and bag and box labels can be printed for packed orders.`,
        `A POS system starts at ${posso.posPrice} + VAT with software from ${posso.softwareMonthly} + VAT a month; ${posso.setupStatement.charAt(0).toLowerCase()}${posso.setupStatement.slice(1)} Every cost is on the [EPOS pricing page](/epos-pricing-uk). Tell us your product count and how you track stock today, and we will tell you honestly whether Posso is the right fit.`,
      ],
    },
    {
      kind: "links",
      heading: "Explore further",
      items: [
        { label: "EPOS system overview", href: "/pos" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
        { label: "Small business POS", href: "/small-business-pos-system" },
        { label: "Multi-site EPOS", href: "/multi-site-epos-uk" },
        { label: "Sweet shop POS", href: "/pos-for-sweet-shop" },
        { label: "POS for bakery", href: "/pos-for-bakery" },
        { label: "Choosing a POS company", href: "/pos-companies-uk" },
      ],
    },
  ],
  faqHeading: "Retail POS systems — frequently asked questions",
  faqs: [
    {
      q: "What is a retail POS system?",
      a: "It is the till and software a shop uses to sell, take payment and keep stock and sales records. Unlike a hospitality EPOS, it is built around product data — barcodes, variants, stock levels and purchasing — rather than kitchen tickets and tables.",
    },
    {
      q: "Do I need barcode scanning?",
      a: "If you sell packaged goods or more than a few dozen lines, yes. Scanning is faster and more accurate than finding items on a touchscreen, and it keeps stock counts right because every sale is recorded against the exact product.",
    },
    {
      q: "Can one POS system run several shops?",
      a: "A multi-site POS should give you one catalogue and price list, stock held per shop and reporting by site and for the group. Ask whether stock transfers between shops are recorded, not just sales.",
    },
    {
      q: "Is Posso suitable for a retail shop?",
      a: "It suits food-led retail — delis, bakeries, sweet shops and counters that also serve food and drink. For pure retail with deep stock control and supplier management, a retail-first platform is usually the better fit, and we will say so if that is you.",
    },
    {
      q: "How much does a retail POS system cost in the UK?",
      a: `It depends on the number of tills, the features you need and the contract, so compare the total monthly cost over the term. For reference, a Posso POS system starts at ${posso.posPrice} + VAT with software from ${posso.softwareMonthly} + VAT a month.`,
    },
    {
      q: "Does a retail POS need to work offline?",
      a: "Yes. A shop cannot stop selling when the broadband drops. Ask which functions keep working offline — scanning, cash, card and receipts — and how sales sync once the connection returns.",
    },
  ],
};
