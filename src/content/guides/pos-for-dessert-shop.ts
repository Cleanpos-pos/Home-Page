import type { Guide } from "@/lib/guides";

/**
 * Community-research page (SERP-gap batch, August 2026). Every theme, number
 * and paraphrase below is grounded in the threads linked in the "Read the
 * threads themselves" section — do not add a quote or figure without a
 * working thread link to back it.
 *
 * Label printing claim verified by owner 2026-08-24: Posso prints labels for
 * bubble tea cups, and for bags/boxes in pizza shops and takeaways.
 */

export const posForDessertShop: Guide = {
  slug: "pos-for-dessert-shop",
  title: "Dessert & Bubble Tea Shop POS",
  metaDescription:
    "What dessert and bubble tea shop owners say about POS systems, synthesised from the threads Google ranks — with the numbers. Dessert EPOS from £499 + VAT.",
  eyebrow: "Community research",
  h1: "Dessert and bubble tea shop POS: what owners actually say",
  h1Split: ["Dessert and bubble tea shop POS:", "what owners actually say"],
  standfirst:
    "Ask Google about dessert shop tills and it now answers with owner threads — boba shop openings, ice cream counters doing four hundred transactions a day, bakeries weighing up card fees. We read them and pulled out what owners agree on. Every thread is linked at the bottom so you can check us.",
  highlights: [
    "Synthesised from owner discussions, with every source linked",
    "The numbers owners actually mention, including card fees on a £5 ticket",
    "Dessert-ready EPOS from £499 + VAT when you want our version",
  ],
  breadcrumb: "Dessert & Bubble Tea POS",
  quickAnswer:
    "Across the threads, dessert and bubble tea owners converge on three things. Per-transaction pence matter more than the headline percentage when your average ticket is £4–£6. Toppings, sugar and ice levels have to be priced modifiers one tap deep, or staff stop applying them. And the systems that are cheapest to start with are the ones owners complain about at volume. Whatever you buy, get the quote worked out on your real average ticket, not a £30 restaurant bill.",
  sections: [
    {
      kind: "prose",
      kicker: "How this page was made",
      heading: "Where this comes from",
      paragraphs: [
        "For most dessert POS questions, Google now ranks community threads above vendor sites — which tells you what searchers trust. So instead of writing another feature list, we read the threads it ranks: bubble tea shop openings on r/smallbusinessuk and r/bubbletea, ice cream counters and bakeries on r/smallbusiness, and the what-POS-do-you-use threads on r/restaurantowners. The full list is linked at the bottom of this page, and it was last reviewed on 24 August 2026.",
        "Be aware of what these threads are. Some replies are owners speaking from experience. A lot are salespeople — reseller pitches, referral links, and DM-me offers dressed as advice. In the main boba POS thread, four separate people asked the original poster which system they eventually chose; none of them ever got an answer. That is why this page synthesises themes rather than counting votes, and links every source so you can judge the replies yourself.",
        "One more thing before the themes: most of these threads are American. The systems they name — Toast, Clover, US Square pricing — do not all translate to a UK counter. Where the economics change on this side of the Atlantic, we say so.",
      ],
    },
    {
      kind: "features",
      kicker: "The themes",
      heading: "What owners keep raising",
      intro:
        "Four things come up across the threads regardless of whether the counter sells boba, gelato or brownies.",
      items: [
        {
          title: "Per-transaction pence hurt more than the percentage",
          body: "The sharpest thread is a gourmet ice-cream-sandwich seller working out that US Square pricing — 2.6% plus 10 cents — would cost around $240 on a 400-unit day, most of it from the fixed cents, not the percentage. The rule-of-thumb reply: past roughly $10,000 a month in card volume, a properly quoted merchant account beats any flat rate. UK flat-rate readers price as a straight percentage without the fixed pence, so the maths differs here — but the principle survives: a dessert counter lives on small tickets at high volume, and that is exactly the shape of business a generic card deal punishes.",
        },
        {
          title: "A boba counter is a production line, not a till",
          body: "A London owner who opened during Covid lists the actual kit: sealing machine, sugar dispenser, blenders, and tapioca that has to be held warm because it hardens when it cools. The till sits inside that production line. Sugar and ice adjustment on every single order is now the baseline customers expect — the boba regulars in the threads say every shop offers it — so those need to be priced, reportable modifiers one tap from the item, not a free-text note the barista sometimes remembers. And the recurring boba-specific ask is printing: a kitchen printer plus labels for sealed cups, so the right drink reaches the right customer.",
        },
        {
          title: "Hardware dies under dessert volume, and support decides what happens next",
          body: "An ice cream shop that had run keypad registers for twenty years reported wearing one out every season under heavy use, with error-prone cash-tape reconciliation on top. In another thread, a workshop of local owners comparing systems singled out one big-name brand for hidden fees and breakdowns. Seasonal operators add a contract complaint: paying a subscription through six closed months. When you compare systems, ask what the warranty actually covers, what a replacement terminal costs, who answers the phone in August, and what happens to card payments when the internet drops.",
        },
        {
          title: "The default answer is Square — and the caveats come from its own users",
          body: "Almost every thread lands on Square first: free to start, easy to use, fine hardware. The caveats come from the same people. Owners describe the rates as uncompetitive once volume grows, and a reseller in one thread — with an obvious interest, which the thread duly notes — claims both big flat-rate brands gouge on add-on fees and lock you into their rates. The honest synthesis: for a market stall or a single-person counter, a flat-rate reader genuinely is the right answer, and we tell people the same. The threads' argument is about what happens when the queue gets long.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "What owners say it actually costs",
      paragraphs: [
        "Real figures from the threads, in the currencies they were posted in. “Square seems nuts to me at 2.6% AND .10 per transaction” is the line that starts the small-tickets thread — that owner's own arithmetic put a 400-sandwich day at around $240 in card fees. The rule-of-thumb reply put the crossover where flat rate stops making sense at about $10,000 a month in card volume. In the older ice cream thread, a full single-register setup was quoted at just under $1,000 all-in; at the bottom end, a web-based till was pitched at $34 a month. None of these are UK prices — they are what owners report paying, which is the number vendor pages never print.",
        "For the UK counter: our systems start at £499 + VAT including the terminal, software licence, menu build and staff training, with a 2-year warranty and UK phone support Monday to Friday, 9am to 9:30pm. Spread on finance that is from £24.92 a week, with software from £25 + VAT a month. Self-order kiosks start at £699 + VAT. Card processing runs through Posso Pay, our own merchant service — there is deliberately no flat rate to print here, because the rate is quoted on your card turnover and average ticket, and the same rate applies in store and on your online ordering. For a £4.50 average ticket, that quote conversation is precisely the one the threads say to have.",
      ],
    },
    {
      kind: "table",
      heading: "The systems the threads name",
      intro:
        "Not our verdicts — a summary of what the linked threads say, with context worth knowing before you weigh it.",
      caption:
        "As reported in the linked threads. Company details last checked 24 August 2026.",
      columns: ["System", "What the threads say", "Worth knowing"],
      firstColIsHeader: true,
      rows: [
        [
          "Square",
          "The default recommendation for bakeries, ice cream and boba shops: free to start, easy to run. The same threads question the rates at volume and the fixed cents per transaction.",
          "The per-transaction cents complaint is about US pricing; UK flat-rate pricing is percentage-only. Strongest for tiny and seasonal operations.",
        ],
        [
          "Clover",
          "Competitive rates are possible “with the right people”, but a workshop of local owners named it the worst they had used, citing hidden fees and breakdowns.",
          "Sold through resellers, so pricing and support vary enormously by who signs you up.",
        ],
        [
          "Toast",
          "The modern US default — recommended in the newer threads for ease of use and delivery integrations.",
          "US-centric with minimal UK hospitality presence, which the threads rarely mention.",
        ],
        [
          "ShopKeep",
          "Warmly reviewed by the ice cream and small-shop owners in the older threads — easy layout, reliable, good service.",
          "Acquired by Lightspeed in 2020 and no longer sold under that name — a reminder that loved systems get bought.",
        ],
        [
          "Building your own",
          "One European bubble tea owner wrote his own back office — recipes, shifts, inventory, invoice scanning — because nothing off the shelf covered it.",
          "The gap he names is the back office around the till, not the till itself. Ask any vendor which of those jobs their reporting actually does.",
        ],
      ],
    },
    {
      kind: "prose",
      kicker: "Our stake",
      heading: "Where Posso fits — and where it doesn't",
      paragraphs: [
        "You will not find Posso in these threads. They are mostly American, and we are a UK company with 500+ UK businesses on the system — so judge us on a demo against the checklist above, not on our absence from Reddit.",
        "Where we fit the thread consensus: toppings, sugar levels and ice levels as priced modifiers one tap deep, with combo management for meal-deal-style builds. The printing ask that keeps appearing in the boba threads — a kitchen ticket plus a label for each sealed cup — is exactly how Posso runs a drinks counter: the order prints to the make station and each cup gets its own label, so the right drink reaches the right customer. Add self-order kiosks for the weekend queue, which in a dessert shop also quietly fix the sugar-level conversation, because customers dial in their own; order-ahead and delivery through your own branded ordering rather than a commission app; and your customer list held in the built-in CMS with 2,000 marketing emails a month included — dessert shops run on regulars and birthdays. Hardware carries a 2-year warranty with UK phone support, which is our answer to the registers-die-every-season thread.",
        "Where we are not the answer, in the threads' own spirit: a single-person stall or market cart should buy a flat-rate card reader and keep the £499 — the threads are right about that. A bakery that is mostly packaged retail with barcodes wants a retail-first platform, not a hospitality EPOS. And if you are reading this from the US or Canada, the Toast and Square answers in the threads will serve you better than a UK supplier can.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/smallbusinessuk — Help with a new boba tea shop (London, 2023)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1824guj/help_with_new_boba_tea_shop",
        },
        {
          label: "r/bubbletea — Planning to open a bubble tea shop (2022)",
          href: "https://www.reddit.com/r/bubbletea/comments/s90rzm/im_planning_to_open_my_own_bubble_tea_shop_and",
        },
        {
          label: "r/smallbusiness — POS for a boba tea and smoothie store (2019)",
          href: "https://www.reddit.com/r/smallbusiness/comments/d6jveb/looking_for_a_pos_system_for_a_boba_teasmoothie",
        },
        {
          label: "r/smallbusiness — Best POS for small-priced products (2024)",
          href: "https://www.reddit.com/r/smallbusiness/comments/1d7hn31/best_pos_for_small_priced_products",
        },
        {
          label: "r/smallbusiness — POS for an ice cream shop (2017)",
          href: "https://www.reddit.com/r/smallbusiness/comments/638uk0/pos_for_ice_cream_shop",
        },
        {
          label: "r/restaurateur — POS for a seasonal ice cream shop (2017)",
          href: "https://www.reddit.com/r/restaurateur/comments/6y0uvy/looking_for_pos_system_recommendation_for_ice",
        },
        {
          label: "r/smallbusiness — Best POS for a bakery (2020)",
          href: "https://www.reddit.com/r/smallbusiness/comments/jnrsja/best_pos_for_a_bakery",
        },
        {
          label: "r/ERP — Best system for a small coffee and boba shop (2025)",
          href: "https://www.reddit.com/r/ERP/comments/1ib5arw/what_is_best_system_for_small_coffeshopboba_shop",
        },
      ],
    },
    {
      kind: "links",
      heading: "Dessert shop solutions",
      items: [
        { label: "Self-order kiosks", href: "/self-order-kiosks" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
        { label: "POS for café", href: "/pos-for-cafe" },
        { label: "Sweet shop POS", href: "/sweet-shop-pos" },
        { label: "Card machines", href: "/credit-card-machines" },
        { label: "Online ordering", href: "/online-ordering" },
      ],
    },
  ],
  faqHeading: "Dessert and bubble tea POS — what people actually ask",
  faqs: [
    {
      q: "How much does a dessert shop POS cost in the UK?",
      a: "A complete Posso system starts at £499 + VAT including the touchscreen terminal, software licence, menu build and staff training, or from £24.92 a week on finance, plus software from £25 + VAT a month. Self-order kiosks start at £699 + VAT. Card processing through Posso Pay is quoted on your card turnover and average ticket rather than a flat rate — and at a £4–£6 dessert ticket, that quote matters more than the hardware price, which is exactly what owners in the threads keep discovering.",
    },
    {
      q: "Is Square enough for a bubble tea shop?",
      a: "For a market stall, a seasonal window or a single-person counter — honestly, yes, and the community threads say the same. The caveats in those threads start when volume grows: owners describe flat rates becoming uncompetitive past roughly $10,000 a month in card volume, and in the US the fixed cents per transaction stack up brutally on small tickets. A busy shop doing hundreds of £4.50 drinks a day should get a turnover-based quote and compare it with the flat rate on real numbers.",
    },
    {
      q: "What makes bubble tea POS different from café POS?",
      a: "A boba counter is a production line: sealing machine, warm-held tapioca, a toppings bar, and sugar and ice adjustments on effectively every order. The POS has to carry that — priced modifier grids one tap from the item, tickets that route to the make station, and a printed label on each sealed cup so staff know which drink is whose. Posso prints those cup labels as part of the order flow. A café till shares the modifier problem but not the production-line workflow. Both share the same economics: high volume, small tickets, so speed and card costs dominate.",
    },
    {
      q: "How should toppings, sugar levels and ice levels be set up?",
      a: "As priced, reportable modifiers one tap deep — never free-text notes. Free text costs you twice: staff apply extras inconsistently so you undercharge, and nothing shows up in reporting, so you cannot see that tapioca or cheese foam is carrying your margin. This is the same discipline as oat milk in a café, multiplied — a boba order can carry three or four modifiers at once.",
    },
    {
      q: "Do dessert shops need a self-order kiosk?",
      a: "Only if the queue is genuinely costing you customers — kiosks earn their place in high-volume counter operations, and dessert shops at weekends are exactly that. They also fit boba specifically: customers set their own sugar and ice levels on screen, which removes the slowest conversation at the counter, and consistent prompting lifts attachment on toppings. Posso kiosks start at £699 + VAT.",
    },
    {
      q: "What do owners complain about most in the threads?",
      a: "Three things. Card fees on small tickets — the per-transaction maths dominates every cost discussion. Hardware and support — registers wearing out under volume, breakdowns, and contracts that keep billing a seasonal shop through the closed months. And the threads themselves: replies full of salespeople and referral links pretending to be fellow owners, which is why every source this page uses is linked above for you to judge.",
    },
  ],
};
