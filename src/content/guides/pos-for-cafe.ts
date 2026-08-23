import type { Guide } from "@/lib/guides";

/**
 * ⚠️ THREE UNVERIFIED CLAIMS ON THIS PAGE — confirm before publish:
 *  1. Eat in / takeaway toggle switching BOTH price and VAT treatment (most important)
 *  2. Collection time slots applying to café-style collection
 *  3. Most-ordered items configurable on a single till home screen
 * See the guide-pages install notes.
 */

export const posForCafe: Guide = {
  slug: "pos-for-cafe",
  title: "POS for Café & Coffee Shop",
  metaDescription:
    "POS for Café — buyer's guide covering what to look for in a coffee shop till system. Drink modifiers, morning rush speed, loyalty and takeaway orders. From £499 + VAT.",
  eyebrow: "Buyer's guide",
  h1: "POS for café and coffee shop",
  h1Split: ["POS for", "café and coffee shop"],
  standfirst:
    "A café till has a different job from a restaurant till. Low ticket values, high transaction counts, a queue that forms in a twenty-minute window, and almost every order modified. Here is what to look for.",
  highlights: [
    "The features that matter in a café specifically",
    "What to ask before you buy",
    "Café POS systems from £499 + VAT",
  ],
  breadcrumb: "POS for Café",
  quickAnswer:
    "The most important thing in a café POS is speed at peak, measured in taps per transaction. At a £6 average spend, three extra seconds per order is the difference between the queue clearing and the queue reaching the door. After that: priced drink modifiers one tap deep, eat-in and takeaway pricing, and customer data you own.",
  sections: [
    {
      kind: "prose",
      heading: "What makes a café different",
      paragraphs: [
        "Most POS buying advice is written for restaurants and takeaways, and it does not transfer cleanly.",
        "A restaurant does 80 covers with an average spend of £30 over four hours. A café does 300 transactions with an average spend of £6, and 120 of them arrive between 8am and 9:20am. The system that handles the first well can be actively bad at the second.",
        "Three consequences follow, and they should drive your whole evaluation. Taps per order is the metric that matters — at a £6 average spend, an extra three seconds per transaction is not a rounding error. Almost every order is modified, so if modifiers are buried two screens deep, staff will stop applying them and your stock and pricing will drift. And your customers come back constantly — a café customer might visit 200 times a year, which makes repeat-visit marketing worth far more per customer than it is to a takeaway.",
      ],
    },
    {
      kind: "features",
      heading: "What to look for in a café POS",
      items: [
        {
          title: "Speed at peak, measured in taps",
          body: "Time a full transaction on the demo — flat white with oat milk, to go, plus a pastry, card payment. Count the taps. Then imagine doing it with eleven people waiting. Any system that needs a confirmation screen for a modifier will lose you money every single morning. Ask whether the most-ordered items can sit on one home screen without navigating a category tree.",
        },
        {
          title: "Drink modifiers one tap deep",
          body: "Milk alternatives, shot count, syrup, decaf, temperature, size, in or out. Each should be a single tap from the item, each should carry its own price where it costs extra, and each should print clearly for the barista. Oat milk at 40p across 60 drinks a day is over £8,000 a year — if it is a free-text note rather than a priced modifier, you are not charging for it consistently and you cannot see it in reporting.",
        },
        {
          title: "Eat in and takeaway pricing",
          body: "VAT treatment differs between eat in and takeaway, and so, often, does your price. The system needs a single toggle that changes both the price and the VAT treatment on the whole order — not two separate menus you maintain in parallel.",
        },
        {
          title: "Loyalty and repeat visits",
          body: "A café's most valuable asset is its regulars. Look for a system where customer data stays with you rather than a third party, and where you can actually market to it — offers, campaigns and rewards driven from your own customer list.",
        },
        {
          title: "Table service without restaurant complexity",
          body: "Many cafés are hybrids: order at the counter, then table numbers for food running, with table service at weekends. You want table assignment and an easy way to add to an open order, without being forced through a full restaurant floor-plan workflow you do not need on a Tuesday morning.",
        },
        {
          title: "Pre-orders and collection",
          body: "Order-ahead is where the morning queue goes when it gets too long. Customers order on their phone during the walk in and collect from a separate point. This needs a proper collection workflow with time slots, not just an online menu.",
        },
      ],
    },
    {
      kind: "features",
      heading: "Smart buying advice",
      items: [
        {
          title: "Do the demo at your actual pace",
          body: "Any supplier will demo their system slowly and it will look fine. Ask to run twenty transactions in a row at the speed you serve at. Watch for lag, for confirmation dialogs, and for whether the screen returns to the start position automatically.",
        },
        {
          title: "Do not buy restaurant features you will never use",
          body: "Course firing, split-by-seat billing and complex floor plans are excellent in a restaurant and pure friction in a café. You pay for them in money and in screen complexity.",
        },
        {
          title: "Check what happens to your customer data",
          body: "If your loyalty scheme and customer list live on a third-party platform, you are renting your own regulars. Make sure you can export the list, and that you can market to it directly.",
        },
        {
          title: "Count the total, not the headline",
          body: "Software subscription, ordering commission, loyalty add-on, card rate. At a £6 average spend the card rate matters disproportionately — a percentage-plus-pence structure hits low-value transactions harder than high-value ones, so work it out on your real average, not a £30 one.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "The Posso approach to café POS",
      paragraphs: [
        "Posso is a hospitality-only EPOS, built in the UK and supported from Leicester.",
        "For a café, the relevant parts are touchscreen ordering with full modifier and combo management, eat in / takeaway / collection order types with their own workflows, QR and app ordering for order-ahead and at-table, split bills, and integrated card payments.",
        "Customer data stays with you. The CMS is built in, with 2,000 marketing emails a month included, so your regulars are yours to market to rather than a third party's list. TableMaestro adds booking and promotional campaigns if you take reservations at weekends.",
        "Card processing runs through Posso Pay, Posso's own merchant service. Rates are quoted on your card turnover rather than fixed, and the same rate applies in store and on the online payment gateway — which matters more in a café than almost anywhere else, because low-value transactions are where badly structured card fees bite hardest. Get your quote worked out on your real average transaction, not a £30 one.",
        "Systems start at £499 + VAT, including hardware, software licence, menu build and staff training. A 2-year warranty is standard, with UK phone support.",
      ],
    },
    {
      kind: "prose",
      heading: "Where a café should look elsewhere",
      paragraphs: [
        "If you roast and sell retail bags of beans as a significant part of the business, you need proper retail stock control — barcode purchasing, supplier management, cost tracking — and a retail-first platform will serve that better than we do.",
        "And if you are a single-person operation doing thirty covers a day, a card reader and a simple app tier is a perfectly reasonable answer; a full EPOS is solving a problem you do not have.",
      ],
    },
    {
      kind: "links",
      heading: "Explore café POS solutions",
      items: [
        { label: "ePOS systems", href: "/pos" },
        { label: "Self-order kiosks", href: "/self-order-kiosks" },
        { label: "Online ordering", href: "/online-ordering" },
        { label: "TableMaestro booking", href: "/tablemaestro" },
        { label: "Card machines", href: "/credit-card-machines" },
        { label: "EPOS pricing", href: "/buy-epos-system-uk" },
      ],
    },
  ],
  faqHeading: "POS for café — frequently asked questions",
  faqs: [
    {
      q: "What is the most important feature in a café POS?",
      a: "Speed at peak, measured in taps per transaction. A café's economics are high transaction count at low ticket value, concentrated into a short morning window, so three extra seconds per order compounds into a queue that reaches the door. Time a full modified drink order on the demo and count the taps before you compare anything else.",
    },
    {
      q: "How should a café POS handle milk alternatives and extra shots?",
      a: "As priced modifiers one tap deep from the item, not as free-text notes. Free-text is faster to set up and costs you twice: staff apply it inconsistently so you undercharge, and it never appears in reporting so you cannot see what it is worth. Oat milk at 40p on 60 drinks a day is over £8,000 a year — that needs to be a priced modifier.",
    },
    {
      q: "Can a café POS handle different eat in and takeaway prices?",
      a: "It should, with a single toggle that changes the price and the VAT treatment for the whole order. Maintaining two parallel menus for eat in and takeaway is a common workaround on systems that do not support this properly, and it drifts out of sync within weeks.",
    },
    {
      q: "How much does a café till system cost in the UK?",
      a: "A complete Posso system starts at £499 + VAT, including the touchscreen terminal, software licence, menu build and staff training. Card processing runs through Posso Pay, Posso's own merchant service — rates are quoted on your card turnover and apply the same in store and online. At a low average spend, the card rate is often the larger ongoing cost, so get your quote based on your real average transaction value.",
    },
    {
      q: "Do I need a self-order kiosk in a café?",
      a: "Only if your morning queue is genuinely costing you customers. Kiosks earn their place in high-volume counter operations where people walk away rather than wait, and they typically lift average order value through consistent upselling. For a café with a queue that clears in five minutes, order-ahead through your own app usually solves more for less. Kiosks start at £699 + VAT when you are ready.",
    },
    {
      q: "Can customers order ahead and collect?",
      a: "Yes. Branded online and app ordering supports collection with time slots, so customers order on the way in and collect from a separate point rather than joining the queue. Orders arrive on the same screen and in the same kitchen queue as counter orders.",
    },
    {
      q: "Who owns my customer data?",
      a: "With Posso, you do. The CMS is built in and your customer list stays in your system, with 2,000 marketing emails a month included so you can run campaigns to your own regulars directly. This is worth checking with any provider — loyalty schemes hosted entirely on a third-party platform mean you are renting access to your own customers.",
    },
  ],
};
