import type { Guide } from "@/lib/guides";

/**
 * NOTE: every Epos Now figure below comes from independently published 2026
 * reviews (ExpertSure, Business Expert, Compare Your Business Costs), because
 * Epos Now's own pricing is quote-led. Re-verify before publish and update
 * LAST_CHECKED. Set a quarterly reminder.
 */
const LAST_CHECKED = "August 2026";

export const possoVsEposNow: Guide = {
  slug: "posso-vs-epos-now",
  title: "Posso vs Epos Now (2026): UK Takeaway & Restaurant EPOS Compared",
  metaDescription:
    "Posso vs Epos Now compared for UK hospitality — pricing, contracts, online ordering commission, kitchen display and support. Honest comparison, including where Epos Now wins.",
  eyebrow: "Comparison",
  h1: "Posso vs Epos Now",
  h1Split: ["Posso vs", "Epos Now"],
  standfirst:
    "Two UK EPOS providers, two quite different commercial models. This page compares them for hospitality — and is honest about where Epos Now is the better choice.",
  highlights: [
    "Full side-by-side on cost, contract and features",
    "Which one suits which type of business",
    "Written by Posso — read the “where Epos Now wins” section",
  ],
  breadcrumb: "Posso vs Epos Now",
  quickAnswer:
    "Choose Posso if you run a UK hospitality site and want the till, online ordering, kitchen display, kiosks and card payments from one supplier at a published price. Choose Epos Now if you run retail, or a mixed retail-and-food business, and need deep stock control, barcode purchasing and a large third-party app marketplace. Posso is narrower and more transparent; Epos Now is broader and larger.",
  sections: [
    {
      kind: "table",
      heading: "Side-by-side comparison",
      intro:
        "Epos Now figures are drawn from independently published 2026 reviews, as its pricing is partly quote-led. Verify current terms directly with them.",
      caption: `Epos Now figures last checked: ${LAST_CHECKED}. Sources: ExpertSure, Business Expert, Compare Your Business Costs.`,
      firstColIsHeader: true,
      columns: ["", "Posso", "Epos Now"],
      rows: [
        ["Built for", "Hospitality only", "Retail and hospitality"],
        [
          "Entry system price",
          "From £499 + VAT (hardware, software licence, menu setup, training)",
          "Complete POS bundle promoted from £249; hospitality bundles from £379",
        ],
        ["Software subscription", "Published — see pricing page", "Reported £25–£39/month; quote-led"],
        [
          "Support subscription",
          "Included",
          "Reported £54/month care and support subscription tied to discounted hardware",
        ],
        [
          "Online ordering",
          "Included; customer pays a 60p service fee, business pays only card processing",
          "Reported as an add-on from ~£25/month",
        ],
        ["Kitchen display", "21-inch screen £399 + VAT; covered by the standard software fee", "Reported as an add-on from ~£19/month"],
        [
          "Loyalty / marketing",
          "Built-in CMS, 2,000 marketing emails a month included",
          "Reported as an add-on from ~£15/month",
        ],
        [
          "Marketplace integrations",
          "Just Eat, Uber Eats, Deliveroo — £45/month, unlimited orders",
          "Available; costs vary by plan",
        ],
        [
          "Own delivery drivers",
          "Driver app and dispatch built in, 30p per delivery",
          "Delivery product available; own-fleet dispatch depth varies",
        ],
        ["AI phone ordering", "£1 per order, free dedicated number", "Not offered"],
        [
          "Card processing",
          "Posso Pay — Posso's own merchant service; rate quoted on your card turnover, same in store and online",
          "Flat rates reported between 1.5% and 1.7% — confirm your quoted rate",
        ],
        [
          "Contract",
          "See current terms",
          "Reported 12-month minimum on discounted hardware, auto-renewing; separate multi-year care plan with exit based on remaining payments",
        ],
        [
          "Hardware",
          "Windows 11 Pro terminals, 8GB RAM, 128GB SSD, 2-year warranty",
          "Proprietary terminals; iPad-based options available",
        ],
        [
          "Retail stock depth",
          "Basic — hospitality stock and waste tracking",
          "Strong — full retail inventory, barcode purchasing, supplier management",
        ],
        ["App marketplace", "Limited — integrations built in-house", "Large — extensive third-party ecosystem"],
        ["Scale", "500+ UK venues", "80,000+ businesses, 70+ countries"],
        [
          "Support",
          "UK phone support, Mon–Fri 9am–9:30pm",
          "UK-based; 24/7 tiers available on some plans",
        ],
      ],
    },
    {
      kind: "features",
      heading: "Where Epos Now wins",
      intro: "We would rather you buy the right system than buy ours.",
      items: [
        {
          title: "Retail and mixed businesses",
          body: "If you sell packaged goods alongside food — a deli with a shop, a farm shop with a café, a convenience store with a hot counter — Epos Now's retail stock control is genuinely deeper than ours. Barcode-driven purchase orders, supplier management and multi-supplier cost tracking are its home ground.",
        },
        {
          title: "Third-party integrations",
          body: "Epos Now has a substantially larger app marketplace. If your business depends on a specific niche integration — a particular accounting package, a booking platform, an industry tool — check whether it exists before ruling them out.",
        },
        {
          title: "Scale and longevity",
          body: "Epos Now is a much larger company with a longer track record and international operations. For some buyers that is worth real money, and it is a reasonable thing to weigh.",
        },
        {
          title: "Out-of-hours support tiers",
          body: "If you trade late seven nights a week, check both providers' support hours against your actual trading hours. Posso's phone support runs Monday to Friday, 9am to 9:30pm — evening service is covered on weekdays, but not weekends.",
        },
      ],
    },
    {
      kind: "features",
      heading: "Where Posso wins",
      items: [
        {
          title: "Total cost is knowable up front",
          body: "The add-on model is the single biggest source of surprise in EPOS billing. Where Epos Now's hospitality essentials are reported as separate monthly add-ons, Posso's are part of the system or a one-off cost.",
        },
        {
          title: "Online ordering economics",
          body: "Branded ordering runs on your own domain with the menu synced from the till, and the 60p service fee is added to the customer's order. On a direct order, the only fee the business pays is card processing. Over 500 direct orders a month, that difference compounds quickly.",
        },
        {
          title: "One vendor, one number",
          body: "Till, kiosks, kitchen display, ordering, delivery integrations and card payments all come from Posso. When something breaks, there is nobody to blame but us — which is the point.",
        },
        {
          title: "Hospitality-native features",
          body: "Split bills by person, item or amount; merge tables; course firing; multi-kitchen ticket routing; half-and-half and split-side modifiers; delivery zones and driver dispatch. Built for food service, not adapted from retail.",
        },
        {
          title: "AI phone ordering",
          body: "Missed phone orders during service are lost revenue that never appears in any report. Posso answers them for £1 per order. Epos Now does not offer an equivalent.",
        },
        {
          title: "Offline-first operation",
          body: "Orders, cash payments and receipt printing continue without an internet connection and sync when it returns.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Which should a UK takeaway choose?",
      paragraphs: [
        "For a pure takeaway — collection and delivery, no retail lines — the maths usually favours Posso, for one reason: the online ordering commission and add-on stack.",
        "Build your own comparison this way. Write down your monthly direct online order volume. Add up every monthly software line you would need from each provider to open on Monday — till, ordering, kitchen display, loyalty. Add card processing at your real monthly card takings. Multiply by 36 and add the upfront hardware.",
        "That is the number that matters. Not the headline price.",
      ],
    },
    {
      kind: "links",
      heading: "Explore further",
      items: [
        { label: "Epos Now alternative", href: "/epos-now-alternative" },
        { label: "Best restaurant EPOS UK", href: "/best-restaurant-epos-system-uk" },
        { label: "EPOS for takeaways", href: "/epos-systems-for-takeaways" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "Posso vs Epos Now — frequently asked questions",
  faqs: [
    {
      q: "Is Posso cheaper than Epos Now?",
      a: "Over three years, usually — for a hospitality business that needs online ordering and a kitchen display. The reason is structural rather than a discount: Epos Now's reported model layers those as monthly add-ons, where Posso includes ordering in the system and sells the kitchen display as a one-off £399 + VAT. For a retail business that needs neither, the comparison narrows considerably. Work out your own 36-month total including card processing before deciding.",
    },
    {
      q: "Can Posso do everything Epos Now does?",
      a: "No. Epos Now has deeper retail inventory management and a much larger third-party app marketplace. Posso is hospitality-only and builds its integrations in-house. For a restaurant or takeaway that is an advantage, because the features are native rather than bolted on. For a shop, it is a genuine limitation.",
    },
    {
      q: "Does Posso charge commission on online orders?",
      a: "Posso's branded online ordering adds a 60p service fee to the customer's order, which Posso keeps. The business pays card processing on the transaction and nothing else. This is different from marketplace commission of 14–35% and from percentage-based ordering add-ons.",
    },
    {
      q: "How do the card processing rates compare?",
      a: "Posso Pay is Posso's own merchant service, so the rate is quoted on your card turnover rather than published as one flat figure — and the same rate applies to in-store terminals and the online payment gateway. Epos Now Payments publishes flat rates reported between 1.5% and 1.7% in independent 2026 reviews. At £30,000 of monthly card takings, a half-point difference is around £150 a month, so get both providers' exact quotes on your real turnover in writing.",
    },
    {
      q: "Which is better for a multi-site restaurant group?",
      a: "Both support multi-site. Epos Now brings scale and a larger integration ecosystem; Posso brings central menu control, cloud reporting, synced user permissions and one support relationship across the estate. For groups whose sites are all hospitality, Posso's single-vendor model reduces the number of contracts you manage. For groups with mixed retail and food formats, Epos Now's breadth is likely the better fit.",
    },
    {
      q: "Can I switch from Epos Now to Posso mid-contract?",
      a: "Technically yes, but check the cost first. Request your exact settlement figure and contract end date from Epos Now in writing. If you are close to renewal it is usually cheaper to time the switch around it, and we will plan the install date around your renewal rather than push you to move early.",
    },
  ],
};
