import type { Guide } from "@/lib/guides";

export const openingATakeawayEposChecklist: Guide = {
  slug: "opening-a-takeaway-epos-checklist",
  title: "Opening a Takeaway in the UK: EPOS & Equipment Checklist (2026)",
  metaDescription:
    "Opening a takeaway? A week-by-week checklist of the till, printers, card machine and ordering setup you actually need — with real UK prices. Complete systems from £499 + VAT.",
  eyebrow: "Opening checklist",
  h1: "Opening a takeaway: EPOS and equipment checklist",
  h1Split: ["Opening a takeaway:", "EPOS and equipment checklist"],
  standfirst:
    "Everything you need to take orders on day one, in the order you need to sort it. Written for UK takeaways opening their first site.",
  highlights: [
    "What to buy, and what can wait",
    "Real prices, not “contact us for a quote”",
    "Complete systems from £499 + VAT",
  ],
  breadcrumb: "Opening a Takeaway: EPOS Checklist",
  quickAnswer:
    "A new UK takeaway needs a touchscreen till, a receipt printer, a kitchen printer, a cash drawer, a card machine, and a way to take online orders. That is a complete system from £499 + VAT, and it can be live in under 24 hours once the hardware arrives. The rest is timing.",
  sections: [
    {
      kind: "features",
      kicker: "6–8 weeks before opening",
      heading: "Decisions that block everything else",
      items: [
        {
          title: "Decide how customers will order",
          body: "Most new takeaways need three channels from day one: walk-in, phone, and online. The mistake to avoid is launching on Just Eat and Deliveroo only, then trying to build a direct channel later once customers are trained to use the apps. Marketplace commission runs 14–35%. Your own ordering site is where the margin is. Launch both together.",
        },
        {
          title: "Get your broadband sorted",
          body: "This is the item that most often delays an opening, because installation lead times can run six weeks or more. Order it now. Posso runs offline-first, so you can take orders, process cash and print receipts without a connection — but card payments need connectivity, so a 4G backup is worth costing in on a poor site.",
        },
        {
          title: "Register your business phone number",
          body: "If you want a memorable number on your signage and menus, sort it early. Posso's AI phone ordering includes a free dedicated number if you want a separate line for orders.",
        },
      ],
    },
    {
      kind: "features",
      kicker: "4 weeks before opening",
      heading: "The menu is the long pole",
      intro:
        "Finalising your menu properly is the single biggest time-saver in the whole process, and almost nobody does it early enough.",
      items: [
        {
          title: "Write the menu as structured data, not a design",
          body: "Every item with its price. Every size or portion option with the price for each. Every modifier — extras, sauces, spice levels, no onions — and whether each costs extra. Every meal deal and what it includes. And which kitchen station each item goes to.",
        },
        {
          title: "Kitchen stations matter more than you think",
          body: "Which station each item belongs to determines how kitchen tickets are routed. Getting it right before build day saves an evening of reconfiguration later.",
        },
        {
          title: "Send it in whatever form you have",
          body: "A spreadsheet, a PDF, a photo of a handwritten draft. We build it into the system including modifiers and pricing. That is included in setup at no cost.",
        },
        {
          title: "Order your EPOS now",
          body: "Lead time is short, but ordering now means the system arrives configured with your menu already loaded rather than blank.",
        },
        {
          title: "Sort your card processing",
          body: "Card processing is usually the largest ongoing cost in the setup — bigger than the software subscription at any meaningful volume. Posso Pay is Posso's own merchant service, with the rate quoted on your projected card turnover and applied the same to in-store terminals and the online gateway. At £20,000 a month in card takings, every 0.5 percentage points is £100 a month — so get the quote worked out on your real numbers.",
        },
      ],
    },
    {
      kind: "features",
      kicker: "2 weeks before opening",
      heading: "Get it installed and get selling before you open",
      items: [
        {
          title: "Book your install and training slot",
          body: "Setup — menu build and equipment configuration — is included. The system is plug-and-play with setup guidance. Training takes about an hour for order-taking basics; book it for a day when the people who will actually use the till are present, not just you.",
        },
        {
          title: "Get your online ordering site live",
          body: "Your ordering site should be taking orders before you open, not after. Pre-launch orders for opening day are free marketing. A branded site runs on your own domain with the menu synced from the till, and hosting is included free with Posso online ordering. A full restaurant website with online table booking is £450 if you need one built.",
        },
        {
          title: "Set up your Google Business Profile",
          body: "Free, and the single highest-return marketing action a new takeaway can take. Photos, opening hours, menu link, ordering link.",
        },
      ],
    },
    {
      kind: "features",
      kicker: "Opening week",
      heading: "Dry run everything",
      intro: "Before you open the doors, put a complete order through every channel.",
      items: [
        {
          title: "Test every order channel",
          body: "Take a counter order and process a card payment. Take a phone order with a delivery address. Place an online order from your own website. Check every one prints correctly in the kitchen.",
        },
        {
          title: "Test the awkward cases",
          body: "Process a refund. Run an end-of-day report. If any step needs a workaround, fix it now — under Friday-night pressure it will be worse.",
        },
        {
          title: "Check kitchen ticket routing",
          body: "Order a dish from each kitchen station and confirm it prints where it should.",
        },
      ],
    },
    {
      kind: "table",
      heading: "What it actually costs",
      columns: ["Item", "Price"],
      firstColIsHeader: true,
      rows: [
        [
          "Complete EPOS system — touchscreen till, kitchen printer, cash drawer, receipt printer, software",
          "From £499 + VAT",
        ],
        ["Twin-screen upgrade (customer-facing display)", "+£150"],
        ["Extra kitchen printer", "£99 each"],
        ["21-inch kitchen display screen", "£399 + VAT"],
        ["Self-order kiosk", "From £699 + VAT"],
        ["Handheld order device", "£259"],
        ["Just Eat / Uber Eats / Deliveroo integration", "£45/month, unlimited orders"],
        ["Own delivery drivers — driver app and dispatch", "30p per delivery"],
        ["AI phone ordering", "£1 per order, free number, free setup"],
        ["Branded website with online ordering", "£450 (hosting free with Posso ordering)"],
        ["Card processing — Posso Pay", "Rate quoted on your card turnover — same in store and online"],
        ["Menu build, configuration and staff training", "Included"],
        ["Warranty", "2 years"],
        ["Finance", "From £24.92 per week"],
      ],
    },
    {
      kind: "features",
      heading: "What to skip, and what not to",
      items: [
        {
          title: "Skip for now: self-order kiosks",
          body: "Brilliant for reducing queues, but wait until you know your peak footfall. They pay back fastest in high-volume counter operations.",
        },
        {
          title: "Skip for now: kitchen display screens",
          body: "A kitchen printer is fine for a small kitchen and one is included. Upgrade when ticket volume starts causing errors.",
        },
        {
          title: "Skip for now: handheld devices",
          body: "For counter-and-delivery takeaways, not needed. For any seated covers, revisit.",
        },
        {
          title: "Do not skip: a proper kitchen printer or screen",
          body: "Shouting orders through a hatch works until it doesn't.",
        },
        {
          title: "Do not skip: your own online ordering",
          body: "Every month you run marketplace-only is a month of training your customers to order somewhere that charges you 14–35%.",
        },
        {
          title: "Do not skip: the dry run",
          body: "The cost of finding a routing problem on opening night is far higher than the hour it takes to find it the week before.",
        },
      ],
    },
    {
      kind: "links",
      heading: "Explore further",
      items: [
        { label: "EPOS for takeaways", href: "/epos-systems-for-takeaways" },
        { label: "Online ordering", href: "/online-ordering" },
        { label: "Delivery management", href: "/delivery-management-pos" },
        { label: "Kitchen display systems", href: "/kitchen-display-system" },
        { label: "Finance calculator", href: "/finance" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "Opening a takeaway — frequently asked questions",
  faqs: [
    {
      q: "What till system do I need for a new takeaway?",
      a: "A takeaway till needs to handle counter, phone, collection and delivery orders from one screen, print to the kitchen, and take card payments. A complete Posso system — touchscreen till, kitchen printer, cash drawer, receipt printer and software — starts at £499 + VAT with menu build and staff training included.",
    },
    {
      q: "How much does it cost to set up a takeaway till system in the UK?",
      a: "A complete single-till setup starts at £499 + VAT. Adding a kitchen display screen (£399 + VAT), a second kitchen printer (£99) and marketplace integrations (£45/month) covers most new takeaways. Card processing is separate and ongoing — Posso Pay rates are quoted on your card turnover. Finance is available from £24.92 per week.",
    },
    {
      q: "Should I launch on Just Eat and Deliveroo or build my own ordering site?",
      a: "Both, from day one. Marketplaces bring discovery and volume you cannot generate alone in month one, but they take 14–35% of every order. Your own ordering site keeps the margin, and it only works if customers know it exists from the start. Running marketplace-only for six months trains your customers to order through the apps, and winning them back afterwards is much harder than launching both together.",
    },
    {
      q: "How long before opening should I order my EPOS?",
      a: "Four weeks is comfortable. The hardware itself has a short lead time and can be live within 24 hours of arriving, but finalising your menu — every item, size, modifier and price — takes longer than most people expect. Order once your menu is settled, and the system arrives with it already configured.",
    },
    {
      q: "Do I need a kitchen display screen or will a printer do?",
      a: "For a new single-kitchen takeaway, a kitchen printer is usually enough, and one is included in the complete system. Kitchen display screens earn their place when ticket volume starts causing errors, when you have multiple prep stations, or when orders arrive from several channels at once and the printer becomes a bottleneck. A 21-inch screen is £399 + VAT when you are ready.",
    },
    {
      q: "What happens if the internet goes down on opening night?",
      a: "Posso runs offline-first. You can take orders, process cash payments and print receipts without a connection, and everything syncs automatically once it returns. Card payments will need connectivity. If your site has unreliable broadband, a 4G backup router is worth costing into the setup.",
    },
    {
      q: "Is installation included?",
      a: "Setup — menu build and equipment configuration — is included at no cost, and the system is plug-and-play with setup guidance. Larger multi-terminal sites that need an engineer on site are quoted separately.",
    },
  ],
};
