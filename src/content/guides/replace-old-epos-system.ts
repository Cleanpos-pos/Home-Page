import type { Guide } from "@/lib/guides";

export const replaceOldEposSystem: Guide = {
  slug: "replace-old-epos-system",
  title: "Replacing an Old EPOS System: Migration Guide for UK Hospitality",
  metaDescription:
    "Replacing an ageing till system? What transfers, what you lose, how to check your contract, and how to switch without closing for a day. UK EPOS from £499 + VAT.",
  eyebrow: "Migration guide",
  h1: "Replacing an old EPOS system",
  h1Split: ["Replacing an", "old EPOS system"],
  standfirst:
    "Most operators know their till needs replacing long before they do anything about it. The delay is almost never about features — it is about the fear of losing data, retraining staff, and something going wrong mid-service.",
  highlights: [
    "How to tell it is actually time",
    "What transfers and what does not",
    "Switching without closing for a day",
  ],
  breadcrumb: "Replacing an Old EPOS System",
  quickAnswer:
    "Replace your till when it costs you money, not when it annoys you. Your forward-looking data — menu, modifiers, prices, customer list — transfers to a new system. Your backward-looking data does not, so export your sales history before closing the old account. Migration typically takes one to two weeks, and the old system stays live until you are ready.",
  sections: [
    {
      kind: "features",
      heading: "Signs it is time",
      intro: "Not every ageing till needs replacing. These are the signals that genuinely cost money.",
      items: [
        {
          title: "The hardware is failing intermittently",
          body: "A till that freezes once a fortnight during service is not a minor irritation — it is lost orders and queue abandonment at exactly the wrong moment.",
        },
        {
          title: "You are running parallel systems",
          body: "A tablet for Deliveroo, another for Just Eat, a separate laptop for the website, a paper book for bookings. Every parallel system is rekeying, and rekeying is where errors come from.",
        },
        {
          title: "Your provider has stopped developing it",
          body: "If the last meaningful update was years ago, you are on a product in maintenance mode. That usually shows up first as missing integrations.",
        },
        {
          title: "Support has degraded to email only",
          body: "Ask yourself what happens if it fails at 8pm on a Saturday.",
        },
        {
          title: "It runs an unsupported operating system",
          body: "This is a security and PCI-compliance problem, not just an inconvenience.",
        },
        {
          title: "You cannot get your own data out",
          body: "If you cannot export sales history, you do not really own your reporting.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "note",
      title: "Signs it is not time",
      body: "If your current system works, your provider still supports it, and your only complaint is that it looks dated — keep it. A working till your staff know is worth more than a prettier one they do not. Replace it when it costs you money, not when it annoys you.",
    },
    {
      kind: "features",
      heading: "Before you talk to any supplier",
      intro: "Three things to do first. All three protect you regardless of who you end up buying from.",
      items: [
        {
          title: "1. Find out exactly where your contract stands",
          body: "Request in writing from your current provider: your contract end date, the notice period, whether it auto-renews, and the exact settlement figure if you leave today. If you are four months from renewal, waiting may save more than any discount a new supplier will offer. Note that EPOS software subscriptions and card terminal contracts are usually separate agreements with different terms — check both.",
        },
        {
          title: "2. Export your data",
          body: "Before you close any account, export your sales history, customer list, product and menu data, and any financial reports your accountant needs for the current tax year. Historical transaction data generally stays with the old provider, and once the account closes, retrieving it ranges from difficult to impossible.",
        },
        {
          title: "3. Write down what is actually broken",
          body: "Be specific. “It's slow” is not a requirement; “it takes four taps to add a modifier and my staff skip it at peak” is. Take that list to every demo and make each supplier show you those exact workflows.",
        },
      ],
    },
    {
      kind: "table",
      heading: "What transfers and what does not",
      columns: ["", "Transfers?"],
      firstColIsHeader: true,
      rows: [
        ["Menu, products, categories, prices", "Yes — rebuilt in the new system"],
        ["Modifiers and combos", "Yes — rebuilt"],
        ["Customer list (names, addresses, phones)", "Usually — if you can export it"],
        ["Staff logins and permissions", "Set up fresh"],
        ["Historical sales transactions", "No — export reports before closing the account"],
        ["Loyalty balances and vouchers", "Depends on the old system — ask early"],
        ["Card terminals", "Usually tied to your acquirer contract, not the till"],
        ["Old hardware", "Usually tied to the old provider's software"],
      ],
    },
    {
      kind: "callout",
      variant: "note",
      body: "The honest summary: your forward-looking data transfers, your backward-looking data does not. Export your history, and accept that it will live in a spreadsheet rather than the new system.",
    },
    {
      kind: "features",
      heading: "How the switch actually works",
      items: [
        {
          title: "1. Menu review",
          body: "Send whatever you have — an export, a spreadsheet, a PDF, a photo of the printed menu. We build it, including modifiers, sizes and pricing.",
        },
        {
          title: "2. Configuration before shipping",
          body: "Terminals arrive with your menu already loaded and kitchen routing set, not blank.",
        },
        {
          title: "3. You pick the install date",
          body: "Typically a quieter weekday, or between lunch and evening service. Not a Friday.",
        },
        {
          title: "4. Your old system stays live",
          body: "Nobody switches off a working till on faith. Run both until you are confident.",
        },
        {
          title: "5. Staff training",
          body: "About an hour for order-taking basics, booked for when the people who use the till are actually there.",
        },
        {
          title: "6. First live order",
          body: "Typically under 24 hours from hardware arriving. Setup — menu build and configuration — is included at no cost.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "What you are replacing it with",
      paragraphs: [
        "Posso is a UK hospitality-only EPOS built in Leicester. Terminals run Windows 11 Pro with 8GB RAM and a 128GB SSD, and carry a 2-year warranty.",
        "The parallel systems collapse into one: counter, phone, your own website, Just Eat, Uber Eats and Deliveroo orders all arrive on one screen and in one kitchen queue.",
        "It works when the internet does not. Offline-first means orders, cash payments and receipts continue without a connection and sync when it returns — often the single biggest upgrade from an older cloud-only system.",
        "Pricing is published: from £499 + VAT including hardware, software licence, menu setup and training, with finance from £24.92 per week and UK phone support.",
      ],
    },
    {
      kind: "links",
      heading: "Explore further",
      items: [
        { label: "Epos Now alternative", href: "/epos-now-alternative" },
        { label: "Best restaurant EPOS UK", href: "/best-restaurant-epos-system-uk" },
        { label: "EPOS for takeaways", href: "/epos-systems-for-takeaways" },
        { label: "EPOS pricing", href: "/buy-epos-system-uk" },
        { label: "Finance calculator", href: "/finance" },
      ],
    },
  ],
  faqHeading: "Replacing an EPOS system — frequently asked questions",
  faqs: [
    {
      q: "Will I lose my sales data if I replace my EPOS system?",
      a: "Historical transaction data stays with your current provider, so export your sales reports, customer list and financial reports before you close the account — most systems allow a CSV export. Your menu, products, prices and modifiers are rebuilt in the new system. Plan on your history living in a spreadsheet rather than migrating across.",
    },
    {
      q: "How do I know when to replace a till system?",
      a: "Replace it when it costs you money rather than when it annoys you. The genuine signals are intermittent hardware failures during service, running parallel tablets for delivery apps, a provider who has stopped developing the product, support degraded to email only, or an unsupported operating system. If it works and it is supported, a dated interface alone is not a reason.",
    },
    {
      q: "Can I switch EPOS provider mid-contract?",
      a: "Technically yes, but get your exact settlement figure in writing first. EPOS software subscriptions and card terminal contracts are usually separate agreements with different terms, so check both. If you are close to renewal, timing the switch around it is often cheaper than any discount a new supplier will offer.",
    },
    {
      q: "How long does an EPOS migration take?",
      a: "From hardware arriving to your first live order is typically under 24 hours, because the menu build and configuration happen before shipping. The realistic overall window is one to two weeks, most of which is menu review and choosing an install slot. Keep your old system running alongside until you are confident.",
    },
    {
      q: "Do I have to close the shop to switch EPOS systems?",
      a: "No. Installs are normally scheduled for a quieter weekday or between lunch and evening service, and the old system stays live until you are ready to stop using it.",
    },
    {
      q: "Can I keep my existing card machines?",
      a: "Usually not, because card terminals are generally tied to your acquirer contract rather than your till. Check the terminal contract separately from the EPOS contract — they often have different end dates. If you are reviewing processing at the same time, Posso Pay — Posso's own merchant service — quotes rates on your card turnover, with the same rate in store and online.",
    },
    {
      q: "Will my staff need retraining?",
      a: "Some, but less than you expect. Order-taking basics take about an hour. Train the people who actually use the till rather than just the owner, and schedule it for a day when they are in.",
    },
  ],
};
