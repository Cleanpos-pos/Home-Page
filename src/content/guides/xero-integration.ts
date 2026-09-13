import type { Guide } from "@/lib/guides";

/**
 * Feature/integration guide for the Posso ↔ Xero accounting sync (Sept 2026).
 * AEO-first, matching the house guide template: a self-contained quickAnswer
 * ("Short answer" card), question-shaped section headings and an extractable
 * benefits list for AI Overviews, a manual-vs-synced comparison table, and an
 * FAQ block (which emits the FAQPage schema via <FAQSection>).
 *
 * Honesty: the copy deliberately keeps the source article's hedged framing —
 * "can be synchronised", "helps reduce", "does not replace professional
 * accounting advice". We do not claim real-time sync, a specific direction of
 * transfer, certification, or any integration price, because none were given.
 */

export const xeroIntegrationGuide: Guide = {
  slug: "xero-integration",
  title: "Posso Xero Integration",
  metaDescription:
    "Posso now syncs with Xero, so sales, payment methods and VAT from your EPOS can flow into your accounts instead of being typed in by hand — less admin, fewer errors, easier VAT and faster bank reconciliation for UK hospitality.",
  eyebrow: "Accounting integration",
  h1: "Posso now syncs with Xero",
  h1Split: ["Posso now syncs", "with Xero"],
  standfirst:
    "Sales, payments and VAT recorded at the till can flow into your Xero accounts instead of being re-keyed by hand — less admin, cleaner accounts and a clearer view of how the business is really doing.",
  highlights: [
    "Sales, payment methods and VAT flow into Xero — no re-keying",
    "Fewer manual-entry errors between the till and the books",
    "Mapped to the way your business actually operates",
  ],
  breadcrumb: "Xero Integration",
  quickAnswer:
    "Yes — Posso now syncs with Xero. Sales, payment methods, refunds, discounts and VAT recorded at the Posso till can be synchronised into your Xero accounts instead of being copied over by hand, using account mappings configured to the way your business works. For UK restaurants, takeaways, cafés and bars this means less manual bookkeeping, fewer data-entry errors, cleaner VAT records and faster bank reconciliation — giving owners and their accountants a more current, consistent view of the numbers. It is designed to complement professional accounting advice, not replace it.",
  sections: [
    {
      kind: "prose",
      heading: "What is the Posso–Xero integration?",
      paragraphs: [
        "Posso records the day-to-day trading activity of a hospitality business — sales, discounts, refunds, VAT and the different payment methods customers use. The Xero integration lets that relevant financial information be synchronised into the business's Xero account, rather than relying on someone to copy figures from daily till reports into the accounting software by hand.",
        "The exact information transferred and the account mappings behind it are configured to suit how each business operates. The result is a more consistent, organised flow of data between the point-of-sale system and the accounts — the same numbers, moving from front-of-house trading to back-office accounting without the manual step in the middle.",
      ],
    },
    {
      kind: "features",
      heading: "What syncing Posso with Xero does for your business",
      intro: "Six things a connected till-to-accounts flow changes day to day.",
      items: [
        {
          title: "Less manual data entry",
          body: "Without an integration, someone retrieves the till report, checks the totals and types them into Xero — every day, week or month. Synchronising Posso with Xero reduces the need to re-enter the same information, giving owners and managers time back for customers, staff and the menu.",
        },
        {
          title: "More accurate accounts",
          body: "Manual entry invites human error: a figure mistyped, put in the wrong account, or missed altogether. Even a small mistake creates a difference between the till reports, payment records and accounts that can take longer to find than the entry took to make. A direct sync helps keep those records consistent.",
        },
        {
          title: "Sales and payment methods kept organised",
          body: "Hospitality takes money through many channels — cash, debit and credit cards, online orders, self-order kiosks, QR table ordering and other integrated methods. With the right mappings, Posso data is structured in Xero so each is recorded in the appropriate place, rather than as one combined sales total.",
        },
        {
          title: "Easier VAT reporting",
          body: "VAT gets complicated when products carry different tax treatments or sales run across several channels. Synchronising correctly categorised sales data helps maintain a clearer audit trail, so the relevant sales and VAT totals are recorded consistently and are easier to review before a return.",
        },
        {
          title: "Faster bank reconciliation",
          body: "Reconciliation means matching the accounts to the money in and out of the bank. Transferring structured sales and payment data into Xero makes it easier to compare expected takings with bank deposits and payment-provider settlements — so missing settlements, refunds or discrepancies surface sooner, not months later.",
        },
        {
          title: "Better information for your accountant",
          body: "Accountants work more efficiently from complete, consistent, clearly categorised data. A connected flow into Xero means fewer bookkeeping queries, faster month-end, and more time spent discussing performance than correcting spreadsheets.",
        },
      ],
    },
    {
      kind: "table",
      heading: "Doing the books by hand vs syncing Posso to Xero",
      intro: "The same tasks, before and after the two systems are connected.",
      caption:
        "Illustrative comparison — the exact data and account mappings are configured per business. Last reviewed 13 September 2026.",
      columns: ["Task", "By hand", "With Posso syncing to Xero"],
      firstColIsHeader: true,
      rows: [
        [
          "Recording daily sales",
          "Read the till report and type the totals into Xero, repeated every day",
          "Sales are synchronised into Xero in a structured, consistent form",
        ],
        [
          "Payment methods",
          "Split cash, cards and online takings by hand to reconcile",
          "Recorded against the right accounts through your mappings",
        ],
        [
          "VAT",
          "Categorise sales for VAT manually and hope nothing is miscoded",
          "Correctly categorised sales and VAT totals carried through for review",
        ],
        [
          "Bank reconciliation",
          "Match deposits against incomplete or separately stored sales notes",
          "Structured takings to compare against bank and provider settlements",
        ],
        [
          "Errors",
          "A mistyped or missed figure creates a difference to chase later",
          "Fewer avoidable manual-entry errors between the till and the books",
        ],
        [
          "Accountant handover",
          "Send over till reports and spreadsheets to be interpreted",
          "The accountant works from cleaner, categorised source data in Xero",
        ],
      ],
    },
    {
      kind: "prose",
      kicker: "The wider picture",
      heading: "See how the business is doing sooner",
      paragraphs: [
        "Accounts should do more than record what happened months ago — they should help you decide now. When financial information reaches Xero promptly, owners get a more current view of revenue, costs, cash flow and profitability without waiting for everything to be entered by hand. Depending on your Xero setup, that supports better-informed calls on staffing, menu pricing, supplier costs, opening hours, marketing and expansion. Better data does not make the decision for you, but it gives you a stronger basis for it.",
        "The value grows with the business. A single-site takeaway can manage its figures manually, though it still eats time; a group with several restaurants, cafés or kiosks has far more sales data across locations. A consistent sync standardises the accounting process across sites, so each follows the same reporting structure and the group is easier to compare and understand. Connecting Posso and Xero also keeps a clearer path between operational sales data and accounting records, which makes internal checks, year-end reviews and accountant queries easier to follow than disconnected spreadsheets, emails and handwritten notes.",
      ],
    },
    {
      kind: "callout",
      variant: "note",
      title: "It supports your accountant — it doesn't replace them",
      body: "The integration does not replace professional accounting advice or an accountant. It gives you and your accountant cleaner, better-organised source data to work from; the bookkeeping judgement, VAT treatment and final numbers stay with you and your accountant.",
    },
    {
      kind: "prose",
      kicker: "Getting set up",
      heading: "How to connect Posso with Xero",
      paragraphs: [
        "If you already use Posso and Xero, speak to the Posso team about enabling the integration and configuring it for your business. We can help review how your sales, VAT and payment methods should be mapped, so the information entering Xero reflects the way your business actually operates.",
        "If you are considering a new POS system, Posso can provide a connected solution designed for restaurants, takeaways, cafés, bars and other hospitality businesses — point of sale, online ordering, self-order kiosks, kitchen management, table ordering and payments, with sales data flowing through to Xero. Spend less time transferring figures and more time running the business.",
      ],
    },
    {
      kind: "links",
      heading: "Related Posso pages",
      items: [
        { label: "ePOS system & features", href: "/pos" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
        { label: "Card machines & payments", href: "/credit-card-machines" },
        { label: "Restaurant EPOS", href: "/restaurant-epos" },
        { label: "Takeaway EPOS", href: "/takeaway-epos" },
        { label: "Online ordering", href: "/online-ordering" },
      ],
    },
  ],
  faqHeading: "Posso and Xero — frequently asked questions",
  faqs: [
    {
      q: "Does Posso integrate with Xero?",
      a: "Yes. Posso now supports data synchronisation with Xero, so sales, payment methods, refunds, discounts and VAT recorded at the till can flow into your Xero account instead of being copied over by hand. The exact information and account mappings are configured to suit how your business operates.",
    },
    {
      q: "What data syncs from Posso to Xero?",
      a: "The relevant financial information from your trading — sales, the different payment methods used (cash, cards, online, kiosk, QR ordering and other integrated channels), refunds, discounts and VAT — can be synchronised into Xero. With the right account mappings it is structured so each is recorded in the appropriate place, rather than as a single combined total.",
    },
    {
      q: "Does the Posso–Xero integration help with VAT?",
      a: "It helps keep VAT records cleaner. Synchronising correctly categorised sales data maintains a clearer audit trail, so the relevant sales and VAT totals are recorded consistently and are easier to review before submitting a return. It does not replace professional accounting advice — it gives your accountant better-organised source data.",
    },
    {
      q: "Does connecting Posso and Xero replace my accountant or bookkeeper?",
      a: "No. The integration is designed to complement professional accounting, not replace it. It reduces manual data entry and gives you and your accountant complete, consistent, clearly categorised information to work from — which usually means fewer bookkeeping queries and faster month-end, with the accounting judgement still handled by your accountant.",
    },
    {
      q: "Can the integration help with bank reconciliation?",
      a: "Yes. By transferring structured sales and payment data into Xero, it is easier to compare your expected takings against bank deposits and payment-provider settlements. That helps surface missing or delayed settlements, refunds, cash discrepancies and incorrect payment-method entries sooner rather than weeks or months later.",
    },
    {
      q: "Does it work across multiple locations?",
      a: "Yes. A consistent data sync helps standardise the accounting process across sites, so each restaurant, café or kiosk follows the same reporting structure. That makes locations easier to compare and gives a clearer view of the overall performance of the group, which is valuable for both independents and growing multi-site businesses.",
    },
    {
      q: "How do I turn on the Posso and Xero integration?",
      a: "Speak to the Posso team about enabling the integration and configuring it for your business. We help map your sales, VAT and payment methods so the data entering Xero reflects how you operate. If you are considering a new POS, Posso can provide a connected solution for restaurants, takeaways, cafés and bars with the Xero sync built in.",
    },
  ],
};
