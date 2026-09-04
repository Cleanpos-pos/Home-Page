import type { Guide } from "@/lib/guides";

/**
 * AEO / AI-Overview explainer for the "self order kiosks" query cluster
 * (Aug 2026). The broad head is held by Square + kiosk-explainer listicles;
 * this page targets the DECOMPOSED sub-questions AI Overviews pull from —
 * definition, how they work, benefits (as a clean extractable list), UK cost,
 * types, ROI, downsides — each answered in a self-contained, quotable passage.
 *
 * Deliberately concise and extraction-first, NOT keyword bulk. The quickAnswer
 * renders as the "Short answer" card. Complements (does not duplicate) the
 * /self-order-kiosks product page (transactional) and
 * /are-self-order-kiosks-worth-it community guide (evaluative).
 *
 * Honesty: the 15–30% average-order-value figure is the commonly reported
 * operator range (also on Posso's product pages) — framed as "operators
 * report", never as a Posso-measured guarantee.
 */

export const selfOrderKiosksGuide: Guide = {
  slug: "self-order-kiosks-guide",
  title: "Self-Order Kiosks Guide",
  metaDescription:
    "What a self-order kiosk is, how it works, the benefits, what it costs in the UK, and whether it's worth it — a plain, complete guide for restaurants and takeaways.",
  eyebrow: "Complete guide",
  h1: "Self-order kiosks: the complete UK guide",
  h1Split: ["Self-order kiosks:", "the complete UK guide"],
  standfirst:
    "What they are, how they work, what they cost, and where they genuinely pay off — the plain-English answer for UK restaurants and takeaways, without the sales gloss.",
  highlights: [
    "The definition, the benefits and the real UK cost in one place",
    "Where kiosks pay off — and where they don't",
    "Posso self-order kiosks from £699 + VAT",
  ],
  breadcrumb: "Self-Order Kiosks Guide",
  quickAnswer:
    "A self-order kiosk is a freestanding or countertop touchscreen that lets customers browse the menu, customise their order, and pay for it themselves without staff. In UK restaurants and takeaways they cut queues at peak, lift average order value — operators commonly report a 15–30% uplift because the screen prompts every extra consistently — and free staff to work the kitchen. UK kiosks start from around £699 + VAT outright; the main rule is to run them alongside a staffed till, never instead of one. Posso self-order kiosks start at £699 + VAT and share the same menu, kitchen screen and card processing as the main till.",
  sections: [
    {
      kind: "prose",
      heading: "What is a self-order kiosk?",
      paragraphs: [
        "A self-order kiosk is a touchscreen terminal — freestanding, countertop or wall-mounted — that lets a customer browse the menu, build and customise their order, and pay, all without a member of staff taking it. The order then drops straight to the kitchen. You'll see them most in fast food, takeaways, quick-service restaurants, cafés and food courts.",
        "It's the same idea as ordering at a McDonald's screen: the customer does the ordering, the kiosk handles the upsell and the payment, and staff move from taking orders to making them. A kiosk is not the same as a delivery app or a QR code at the table — it's a physical, in-store ordering point that replaces or runs alongside the counter till.",
      ],
    },
    {
      kind: "features",
      heading: "How a self-order kiosk works",
      intro: "Five steps, the same on every well-built system:",
      items: [
        {
          title: "1. Browse the menu",
          body: "The customer taps through your menu on a large touchscreen — categories, photos, prices, dietary and allergen information — at their own pace, with no queue pressure.",
        },
        {
          title: "2. Customise the order",
          body: "They add, remove and swap options — sizes, toppings, meal deals, sides — with every priced modifier shown on screen. Nothing is missed or mis-heard, so the order is accurate.",
        },
        {
          title: "3. Get prompted to add more",
          body: "The kiosk suggests the meal upgrade, the side, the dessert — every time, to every customer. Consistent prompting is where the higher average spend comes from.",
        },
        {
          title: "4. Pay at the screen",
          body: "The customer pays by contactless, chip and PIN, Apple Pay or Google Pay on the built-in card reader, and takes a printed or digital receipt with an order number.",
        },
        {
          title: "5. Order lands in the kitchen",
          body: "The order goes straight to your kitchen display screen or printer — exactly like a counter order — and is called when ready. No re-keying, no lost tickets.",
        },
      ],
    },
    {
      kind: "features",
      heading: "The benefits of self-order kiosks",
      intro:
        "The reasons UK operators install them, in order of how often they pay for the kiosk on their own.",
      items: [
        {
          title: "Higher average order value",
          body: "The single biggest driver. A screen offers every upsize, side and dessert to every customer, without tiring on the tenth order of the rush. Operators commonly report a 15–30% lift in average order value once kiosks are in — the number that usually pays for the hardware fastest.",
        },
        {
          title: "Shorter queues at peak",
          body: "Several kiosks take orders in parallel while one member of staff would take them one at a time. At a lunchtime or post-pub rush, that's the difference between capturing the queue and watching it walk out.",
        },
        {
          title: "Fewer wrong orders",
          body: "The customer builds the order themselves and sees it on screen before paying, so there's no mis-heard order across a noisy counter. Fewer remakes, fewer refunds, less waste.",
        },
        {
          title: "Staff redeployed to the kitchen",
          body: "With the ordering handled by screens, staff move from the till to making and expediting food — where the bottleneck usually is. You serve more covers with the same team, not fewer people.",
        },
        {
          title: "Consistent, judgement-free customisation",
          body: "Customers take their time and choose exactly what they want — dietary needs, allergens, no-onions — without feeling they're holding up a queue. Dessert and bubble-tea counters see this especially: the sugar and topping choices happen on screen, not in a slow back-and-forth.",
        },
        {
          title: "Multilingual and accessible ordering",
          body: "A kiosk can present the menu in several languages and at a readable size, which helps in tourist areas and with customers who'd rather not order aloud.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "How much do self-order kiosks cost in the UK?",
      paragraphs: [
        "UK self-order kiosks are typically bought outright, from around £699 + VAT for a countertop unit up to £2,000 or more for a large freestanding floor kiosk with a built-in printer and card reader. Some suppliers instead bundle the kiosk into a monthly software subscription — cheaper to start, more over three years, so compare the total cost, not the headline.",
        "On top of the hardware there's the software it runs (usually the same licence as your till) and card processing on the payments taken at the screen. Posso self-order kiosks start at £699 + VAT and run the same menu, kitchen routing and card processing as your main Posso till, so adding one is configuration rather than a second system — and the software fee is the same £25 + VAT a month whether the order comes from the counter or the kiosk. Finance is available from around £24.92 a week.",
      ],
    },
    {
      kind: "table",
      heading: "Types of self-order kiosk",
      intro: "Four formats cover almost every UK setup.",
      caption: "General UK guidance. Last reviewed 25 August 2026.",
      columns: ["Type", "Best for", "Notes"],
      firstColIsHeader: true,
      rows: [
        [
          "Freestanding floor kiosk",
          "Fast food and busy QSRs with floor space",
          "The full McDonald's-style unit — biggest screen, highest throughput",
        ],
        [
          "Countertop kiosk",
          "Cafés, takeaways and smaller footprints",
          "Sits on the counter; the lowest-cost way in, from ~£699 + VAT",
        ],
        [
          "Wall-mounted kiosk",
          "Narrow units and queue-line ordering",
          "Saves floor space; good for tight takeaway frontages",
        ],
        [
          "Outdoor kiosk",
          "Drive-thru, beer gardens, stadiums, markets",
          "IP-rated, sunlight-readable screens; often 4G rather than fixed Wi-Fi",
        ],
      ],
    },
    {
      kind: "prose",
      heading: "Do self-order kiosks actually increase sales?",
      paragraphs: [
        "Yes, and the mechanism is well understood rather than magic: a screen prompts every add-on, upsize and dessert to every customer, every time, which a busy staff member does not. That consistent prompting is why operators commonly report a 15–30% rise in average order value after installing kiosks, and why the hardware often pays for itself within months in a high-volume site.",
        "The honest caveat: the uplift is real where there's volume and a queue. A low-traffic counter that clears in a couple of minutes won't see it — the kiosk becomes furniture. The rule is to trial one kiosk beside your staffed till for a month and read your own average-order-value figures rather than trusting any supplier's number, ours included. For the full operator-and-customer view on that question, see are self-order kiosks worth it.",
      ],
    },
    {
      kind: "prose",
      kicker: "The honest bit",
      heading: "The downsides — and how to avoid them",
      paragraphs: [
        "Kiosks have real limits, and the systems that work plan around them. Never run kiosk-only: some customers dislike screens and some genuinely cannot use them, so a staffed lane must stay open whenever you're open — it's both good service and an accessibility requirement. Placement matters more than people expect: a kiosk by the entrance with staff who offer it gets used, one tucked in a corner is ignored. And a kiosk is a second lane, not a way to cut staff — the ones that fail are the ones bought to remove people rather than to move them to the kitchen.",
        "Get those right and the objections mostly disappear, because the kiosk is a choice for the customers who want it, not something imposed on the ones who don't.",
      ],
    },
    {
      kind: "prose",
      kicker: "Where Posso fits",
      heading: "Self-order kiosks with Posso",
      paragraphs: [
        "Posso is a UK hospitality technology company with 500+ UK businesses on the system, supported from Leicester. Our self-order kiosks start at £699 + VAT and run the same menu, priced modifiers, kitchen display and card processing as your main Posso till — so prices and items stay in sync everywhere, orders route straight to the kitchen, and adding a kiosk is configuration, not a separate system. Freestanding, countertop and outdoor (IP65, 4G) formats are available, with contactless, Apple Pay and Google Pay built in, UK phone support Monday to Friday 9am–9:30pm, and finance from around £24.92 a week.",
        "The sensible way to buy is a single kiosk beside your staffed till for a busy month, judged on your own numbers. If it earns its place, add more; if your counter is quiet, we'll tell you a kiosk won't help yet — the same honest answer this guide gives.",
      ],
    },
    {
      kind: "links",
      heading: "More on self-order kiosks",
      items: [
        { label: "Self-order kiosks (product & pricing)", href: "/self-order-kiosks" },
        { label: "Are self-order kiosks worth it?", href: "/are-self-order-kiosks-worth-it" },
        { label: "Self-order kiosks for fast food", href: "/self-order-kiosk-fast-food" },
        { label: "Kitchen display system", href: "/kitchen-display-system" },
        { label: "Dessert & bubble tea POS", href: "/pos-for-dessert-shop" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "Self-order kiosks — frequently asked questions",
  faqs: [
    {
      q: "What is a self-order kiosk?",
      a: "A self-order kiosk is a touchscreen terminal — freestanding, countertop or wall-mounted — that lets customers browse the menu, customise their order and pay themselves, without a staff member taking it. The order goes straight to the kitchen. They're used in fast food, takeaways, quick-service restaurants and cafés to cut queues, raise average spend and free staff for the kitchen.",
    },
    {
      q: "How much does a self-order kiosk cost in the UK?",
      a: "UK kiosks are usually bought outright, from around £699 + VAT for a countertop unit to £2,000 or more for a large freestanding floor kiosk. Some suppliers bundle the kiosk into a monthly subscription instead — cheaper up front, more over three years. On top there's the software licence and card processing. Posso kiosks start at £699 + VAT and share the same software fee (£25 + VAT a month) and card processing as your till.",
    },
    {
      q: "Do self-order kiosks increase sales?",
      a: "Generally yes, in high-volume sites. A kiosk offers every upsize, side and dessert to every customer without tiring, and operators commonly report a 15–30% rise in average order value after installing them. The uplift depends on having genuine footfall and queues — a quiet counter won't see it. Trial one kiosk beside your till for a month and read your own numbers.",
    },
    {
      q: "Are self-order kiosks difficult for older or disabled customers?",
      a: "They can be, which is exactly why a kiosk should never be the only way to order. Keep a staffed lane open whenever you're open, and have staff offer help at the kiosk. Good kiosks also support larger text and multiple languages. Run as one lane among several, kiosks add a fast option for those who want it without shutting anyone out.",
    },
    {
      q: "What's the difference between a self-order kiosk and an ordering app?",
      a: "A self-order kiosk is a physical in-store screen for customers ordering on the premises; an ordering app or website is for ordering remotely, before they arrive or for delivery. They solve different problems and work well together — the kiosk handles the in-store queue, the app handles ahead-of-time and delivery orders, and with Posso both feed the same kitchen.",
    },
    {
      q: "Can a self-order kiosk connect to my till and kitchen?",
      a: "It should. A Posso kiosk runs the same central menu as your till, so a price or item change updates everywhere at once, and every kiosk order routes straight to your kitchen display screen or printer exactly like a counter order — no double entry, no mismatched menus. Card payments taken at the kiosk settle through the same processing as the rest of your system.",
    },
  ],
};
