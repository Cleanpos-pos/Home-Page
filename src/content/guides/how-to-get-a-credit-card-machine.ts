import type { Guide } from "@/lib/guides";

/**
 * How-to guide targeting the "how to get a credit card machine for small
 * business" GSC query cluster (impressions already landing, Aug 2026).
 * SERP is held by vendor product pages + "10 best" listicles; none actually
 * answers the literal question step by step — that's the featured-snippet /
 * AI-Overview gap this page takes. Promotes Posso Pay (own merchant service,
 * quoted on turnover — NEVER a flat rate) and the Teya partnership.
 */

export const howToGetACreditCardMachine: Guide = {
  slug: "how-to-get-a-credit-card-machine",
  title: "How to Get a Credit Card Machine",
  metaDescription:
    "How to get a credit card machine for your small business in the UK: what you need, how to apply, how long it takes, and what it costs. Card machines from Posso.",
  eyebrow: "Buyer's guide",
  h1: "How to get a credit card machine for your small business",
  h1Split: ["How to get a credit card machine", "for your small business"],
  standfirst:
    "It's more straightforward than most guides make it sound — and cheaper than the headline rates suggest, if you know which questions to ask. Here's exactly how to get a card machine in the UK, what you need, how long it takes, and how to avoid the fees that catch small businesses out.",
  highlights: [
    "The steps, the paperwork and the realistic timescale",
    "Flat-rate vs quoted rates — and which is cheaper for you",
    "Card machines from Posso, quoted on your real turnover",
  ],
  breadcrumb: "How to Get a Card Machine",
  quickAnswer:
    "To get a credit card machine for a UK small business: (1) decide how you'll take payment — countertop, portable or fully mobile; (2) have a business bank account and ID ready; (3) choose your pricing — a flat rate is simplest for low volume, a quoted merchant rate is cheaper once card takings are steady; (4) pick a machine that integrates with your till if you have one; (5) apply, pass a quick check, and you can usually be taking cards within days. A pay-as-you-go reader can arrive in 48 hours; an integrated machine on a quoted rate takes a little longer but costs less at volume.",
  sections: [
    {
      kind: "prose",
      kicker: "The short version",
      heading: "What you actually need to get a card machine",
      paragraphs: [
        "Getting a card machine is not the hurdle it once was. For a small UK business you need three things: a way to take the payment (a physical terminal or a reader), somewhere for the money to land (a business bank account — most providers require one, though a few accept a personal account for sole traders), and to pass a light identity and anti-fraud check. That's it. You do not need a long trading history, and a brand-new business can be set up.",
        "The real decision isn't whether you can get one — it's which one, on what pricing, and whether it talks to the rest of your setup. Get those three right and the machine pays for itself; get them wrong and you overpay on every transaction for years. The steps below walk through each in order.",
      ],
    },
    {
      kind: "features",
      kicker: "Step by step",
      heading: "How to get a card machine, in five steps",
      intro:
        "Work through these in order — the earlier decisions shape the later ones.",
      items: [
        {
          title: "Step 1 — Decide how you'll take the payment",
          body: "Countertop for a fixed till point; portable (Wi-Fi or Bluetooth) to take payment at the table or across the shop; fully mobile (4G/SIM) for markets, deliveries and events. A takeaway counter wants countertop plus a portable for drivers; a market trader wants a single mobile reader. Choose the format before the provider — it narrows the field fast.",
        },
        {
          title: "Step 2 — Get your paperwork ready",
          body: "You'll typically need: a business bank account, photo ID for the owner or directors, and basic business details (address, trading name, estimated card turnover). Sole traders can often use a personal account with some providers. Having your rough monthly card takings to hand matters — it's the number that decides your rate, so estimate it honestly rather than low.",
        },
        {
          title: "Step 3 — Choose flat-rate or a quoted merchant rate",
          body: "This is the decision that costs or saves you the most. A flat rate (one advertised percentage, no monthly fee) is simplest and right for low or irregular takings. A quoted merchant rate — priced on your actual card turnover — beats any flat rate once takings are steady, because flat rates bake in a margin to cover everyone. If you take more than roughly a few thousand pounds a month on cards, get a turnover-based quote before you sign anything.",
        },
        {
          title: "Step 4 — Check it works with your till",
          body: "A standalone reader means someone keys the amount into the card machine by hand for every sale — a mis-key waiting to happen, and a nightly reconciliation done by eye. A machine that integrates with your EPOS pushes the amount from the till automatically and reconciles itself. If you run a till (or plan to), an integrated machine is worth more than a slightly lower headline rate on a reader that doesn't talk to anything.",
        },
        {
          title: "Step 5 — Apply and get set up",
          body: "Application is short — details, ID, a quick anti-money-laundering and credit check. A pay-as-you-go reader can be in your hand within about 48 hours. An integrated machine on a quoted rate takes a little longer to underwrite and configure, but arrives set up to your till and menu. Either way, most small businesses are taking cards within days, not weeks.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "What a card machine actually costs",
      paragraphs: [
        "There are three cost lines, and providers hide the pain in different ones. Hardware: a simple reader can be under £50, a full terminal more; some providers give the hardware free and recover it in the rate. The transaction rate: flat rates cluster around the 1.5–1.75% mark for advertised readers, but a quoted merchant rate on real turnover is usually lower. And the fees that catch people out: monthly minimums, PCI-compliance charges, statement fees, and early-exit penalties — the lines that turn an advertised rate into a bigger real one.",
        "The honest rule: compare the total monthly cost at your real volume, not the headline percentage. Take your last card statement to two or three providers and ask each for the all-in figure in writing. Posso card processing runs through Posso Pay — from 1% + 10p, quoted on your card turnover, because a market stall and a busy restaurant should not pay the same structure — and the same rate applies in store and on your online ordering. Bring your current statement and we'll put our number next to it.",
      ],
    },
    {
      kind: "prose",
      kicker: "How to choose",
      heading: "The question the comparison sites skip: does it fit your business?",
      paragraphs: [
        "Most \"best card machine\" lists rank readers on headline rate alone. That's the wrong lens for anyone running a counter or a kitchen. The card machine is one part of taking an order — and the friction is in the gaps between the parts: retyping totals, matching a till report to a card printout at 11pm, a busy caller ID with no link to the payment. A card machine chosen in isolation solves one small thing and leaves the rest.",
        "So the sharper question is: what does the machine connect to? For a hospitality or retail business, a card machine that integrates with your EPOS — amounts pushed from the basket, refunds run from the till, one reconciliation at close — is worth more over a year than a fractionally lower rate on a standalone reader. If you want a card machine with integrated ordering, table booking or a kitchen screen behind it, you're not buying a reader any more; you're buying a system, and the card machine should be part of it.",
      ],
    },
    {
      kind: "table",
      heading: "Your two routes to a card machine",
      intro:
        "Both are legitimate — the right one depends on your volume and whether you run a till.",
      caption: "General guidance for UK small businesses. Last reviewed 25 August 2026.",
      columns: ["", "Standalone reader", "Integrated card machine (Posso)"],
      firstColIsHeader: true,
      rows: [
        [
          "Best for",
          "Market stalls, sole traders, low or irregular card takings",
          "Counters, takeaways, restaurants and shops running a till",
        ],
        [
          "Pricing",
          "One advertised flat rate, no monthly fee",
          "Posso Pay — from 1% + 10p, quoted on your real card turnover, same in store and online",
        ],
        [
          "Setup speed",
          "Around 48 hours",
          "A few days — arrives configured to your till and menu",
        ],
        [
          "Reconciliation",
          "Type each amount by hand; match reports at close",
          "Amount pushes from the till; totals reconcile automatically",
        ],
        [
          "Grows with you",
          "It's a reader — that's all it does",
          "Add EPOS, kitchen screens, online ordering, AI phone — one supplier",
        ],
      ],
    },
    {
      kind: "prose",
      kicker: "Where Posso fits",
      heading: "Getting a card machine from Posso — Posso Pay and Teya",
      paragraphs: [
        "Posso is a UK hospitality and retail technology company with 500+ UK businesses on the system, supported from Leicester. When you get a card machine from us, you have two integrated routes. Posso Pay is our own merchant service: card processing from 1% + 10p, quoted on your actual turnover, the same rate in store and on your online ordering, with the terminal integrated natively into the till so amounts push from the basket and nothing is retyped. Or, if you already have — or want — Teya's rates, our Teya partnership integrates Teya card machines directly with Posso One: the terms Teya is chosen for (competitive rates, no long-term contracts, no hidden fees, no monthly minimums), with the till link that ends the retyping.",
        "Either way, the machine is part of a system rather than a lonely reader: it settles alongside your EPOS, kiosks and online ordering through one relationship, with a human on the phone Monday to Friday, 9am to 9:30pm. Getting started is a short application and, for a card machine with a Posso till, the complete system is £499 + VAT with software from £25 + VAT a month.",
      ],
    },
    {
      kind: "prose",
      heading: "When a simple reader is the right answer",
      paragraphs: [
        "In the spirit of an honest guide: if you're a sole trader, a market stall or a business taking a few hundred pounds a week on cards, a flat-rate reader from SumUp, Square or Zettle is genuinely the right first machine — no monthly fee, nothing to integrate, set up in a day. We'd tell you the same on a call. The integrated route earns its place when card takings are steady, when you run a till, or when a mis-keyed total or a held payout would actually hurt. Get the reader now; come back when the queue is daily.",
      ],
    },
    {
      kind: "links",
      heading: "Related card payment guides",
      items: [
        { label: "Card machines", href: "/credit-card-machines" },
        { label: "EPOS that works with Teya", href: "/epos-with-teya" },
        { label: "Card machines — what owners say", href: "/card-machines-what-owners-say" },
        { label: "PDQ machines for small business", href: "/pdq-machine-small-business" },
        { label: "Card machines for the self-employed", href: "/self-employed-card-machine" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "How to get a credit card machine — frequently asked questions",
  faqs: [
    {
      q: "How do I get a credit card machine for a small business in the UK?",
      a: "Decide the format (countertop, portable or mobile), have a business bank account and photo ID ready, choose between a flat rate and a turnover-based quote, check whether it needs to work with your till, then apply. The application is short — details, ID and a quick anti-fraud and credit check. A pay-as-you-go reader can arrive in about 48 hours; an integrated machine on a quoted rate takes a few days and comes set up to your till.",
    },
    {
      q: "Do I need a business bank account to get a card machine?",
      a: "For most providers, yes — the money settles into a business account. Some providers accept a personal account for sole traders, but a business account is cleaner for bookkeeping and is required once you take any real volume. If you're setting up a new business, open the account first; it's the one thing that can hold up an application.",
    },
    {
      q: "Can I get a card machine for a brand-new business or with bad credit?",
      a: "Usually yes. You don't need a long trading history, and new businesses are set up all the time. Providers run a light credit and anti-money-laundering check rather than the kind of assessment a loan needs — it's about confirming who you are and that the business is legitimate. If one provider declines, another may not; it's worth asking rather than assuming.",
    },
    {
      q: "How much does a card machine cost?",
      a: "Three lines: hardware (from under £50 for a simple reader, sometimes free and recovered in the rate), the transaction rate (flat rates around 1.5–1.75% for advertised readers; a quoted merchant rate on real turnover is usually lower), and the fees that hide the real cost — monthly minimums, PCI charges, exit penalties. Compare the all-in monthly cost at your real volume, not the headline percentage. Posso Pay is from 1% + 10p, quoted on your card turnover, so bring your statement for a like-for-like figure.",
    },
    {
      q: "How long does it take to get a card machine?",
      a: "A pay-as-you-go reader can be in your hand within roughly 48 hours. An integrated card machine on a quoted merchant rate takes a little longer — a few days — because it's underwritten to your turnover and configured to your till and menu before it ships. Either way, most small businesses are taking cards within days, not weeks.",
    },
    {
      q: "Can I get a card machine that works with my till or booking system?",
      a: "Yes — and for a counter or restaurant it's the better buy. An integrated card machine pushes the amount from your EPOS so nothing is retyped, runs refunds from the till, and reconciles automatically. With Posso you can go further: card payments, EPOS, kitchen screens, online ordering, AI phone ordering and table booking through TableMaestro all from one supplier, so the card machine is part of the system rather than a standalone reader.",
    },
  ],
};
