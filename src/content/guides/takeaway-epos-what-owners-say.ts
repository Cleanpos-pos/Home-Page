import type { Guide } from "@/lib/guides";

/**
 * Community-research page (SERP-gap batch, August 2026). Every theme, number
 * and paraphrase is grounded in the threads linked in "Read the threads
 * themselves" — sourced from Google's indexed snippets of those threads plus
 * mirror archives. Do not add a quote or figure without a working thread link.
 *
 * Verified Posso claims used here: bag/box label printing (user, 2026-08-24),
 * £45/month marketplace integration + 30p/delivery (epos-pricing-uk),
 * monthly software fee exists — figure only on quote (user, 2026-08-24).
 */

export const takeawayEposWhatOwnersSay: Guide = {
  slug: "takeaway-epos-what-owners-say",
  title: "What Takeaway Owners Say About EPOS",
  metaDescription:
    "Takeaway EPOS advice synthesised from owner threads — aggregator tablets, kitchen printing, the systems named and what they cost. Every source linked.",
  eyebrow: "Community research",
  h1: "Takeaway EPOS: what owners actually say",
  h1Split: ["Takeaway EPOS:", "what owners actually say"],
  standfirst:
    "Pizza shops, chippies and takeaways ask the same till questions in the same owner forums — and Google now ranks those threads above most vendor pages. We read them: the 2024 UK takeaway thread, the pizza tech-stack discussions, the chippy modernisation story. Every thread is linked at the bottom.",
  highlights: [
    "Synthesised from owner threads, with every source linked",
    "The aggregator problem, in owners' own words",
    "Takeaway-ready EPOS from £499 + VAT when you want our version",
  ],
  breadcrumb: "Takeaway EPOS — Owners' View",
  quickAnswer:
    "Takeaway owners in the threads converge on one problem above all: delivery platform orders arriving on a wall of separate tablets instead of inside the till. After that they want kitchen printing that keeps up on a Friday night, and they name the same trade-off repeatedly — the established systems are good but expensive, the cheap ones cut corners somewhere. The honest UK answer: integrate the aggregators into one screen, count the total monthly cost including commissions, and judge any system on a Friday-night demo, not a Tuesday-morning one.",
  sections: [
    {
      kind: "prose",
      kicker: "How this page was made",
      heading: "Where this comes from",
      paragraphs: [
        "We read the owner threads Google actually ranks for UK takeaway EPOS queries: the r/smallbusinessuk takeaway thread from 2024 — which its author also cross-posted to r/smallbusiness, presumably because good answers are scarce — the pizza POS discussions on r/restaurateur and r/restaurant, and the fish and chip shop threads, including one that is really a story about a family business modernising. All of them are linked at the bottom of this page, and the set was last reviewed on 24 August 2026.",
        "The usual health warning applies: takeaway POS threads attract vendor replies dressed as peer advice, and some recommendations come from resellers. We synthesise the themes, flag the commercial interests where they are visible, and link everything so you can judge the replies yourself.",
        "And a note on geography: the pizza-specific threads are mostly American — the systems praised there do not all exist in the UK. Where that changes the advice, we say so.",
      ],
    },
    {
      kind: "features",
      kicker: "The themes",
      heading: "What takeaway owners keep raising",
      intro:
        "Four themes recur whether the counter sells pizza, fish and chips or kebabs.",
      items: [
        {
          title: "The wall of tablets is the problem everyone starts with",
          body: "The 2024 UK takeaway thread opens with the need in plain terms: a system that takes Just Eat and Deliveroo orders properly. That is the modern takeaway's defining headache — one tablet per platform, each with its own alerts, each order retyped into the till, each mistake happening in the gap between them. Owners do not ask for more features; they ask for the platforms in one place, printing to the same kitchen queue as the phone and counter orders.",
        },
        {
          title: "The till is judged by what happens in the kitchen",
          body: "The most concrete recommendation in the takeaway threads is for a UK system praised specifically because the till links cleanly to a kitchen screen. That is the right instinct: a takeaway till is a dispatch system. If orders from every channel — counter, phone, own website, aggregators — do not land in one kitchen queue in the order they are needed, the till has failed regardless of what else it does. Bag and box labelling belongs in the same test: on a busy night, the label is how the right food gets into the right bag.",
        },
        {
          title: "Established-but-expensive versus cheap-but-thin",
          body: "One startup owner puts the dilemma in a sentence: leaning towards the established names because they are established — 'however also pretty expensive'. The US pizza threads sharpen it: the pizza-specialist system praised as the best one owner had seen in twenty years across five shops is also described, in the same breath, as not cheap. The threads' implicit advice is sound: pay for the workflow features you will use nightly — delivery management, driver handling, order timing — and refuse to pay for restaurant features you never will.",
        },
        {
          title: "The cash-only chippy era is ending, reluctantly",
          body: "Two UK threads frame it perfectly. In one, a customer asks why fish and chip shops famously do not take card. In the other, an owner's adult child asks where to start dragging a shop run the same way for decades into modern operations — the father in his sixties, the processes in his head. The answer the thread converges on is incremental: card acceptance and a basic till first, reporting and stock later. Nobody in these threads regrets modernising; several regret how late they started.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "What the costs actually look like",
      paragraphs: [
        "The threads are blunter about costs than any vendor page. The pizza-specialist verdict — “not cheap but the best I've seen in 20+ years” — is the honest shape of the trade-off at the top end. At the other end, owners warn that cheap generic tills cost you back in retyped aggregator orders and kitchen chaos. And around all of it sits the number owners resent most: marketplace commission, which UK operators typically put at 14% to 35% of every order that arrives through Just Eat, Deliveroo or Uber Eats before marketing add-ons.",
        "For the UK counter, our own numbers, stated the same way we ask other vendors to state theirs: a complete Posso system is £499 + VAT including the terminal, kitchen printer, menu build and staff training, with finance from £24.92 a week. Software runs from £25 + VAT a month. Marketplace integration — Just Eat, Deliveroo and Uber Eats orders arriving inside the till and printing straight to the kitchen — is £45 a month, only if you use it. Deliveries through your own drivers cost 30p each. Bag and box label printing is included in the order flow, which for a takeaway is not a luxury: it is how order 47 stops going home with order 48's curry.",
      ],
    },
    {
      kind: "table",
      heading: "The systems the threads name",
      intro:
        "A summary of what the linked threads say — not our verdicts — with the context a UK buyer needs.",
      caption:
        "As reported in the linked threads. Company details last checked 24 August 2026.",
      columns: ["System", "What the threads say", "Worth knowing"],
      firstColIsHeader: true,
      rows: [
        [
          "ICRTouch",
          "Named in the UK takeaway thread as genuinely good for a till-plus-kitchen-screen setup; a startup owner shortlists it as established but pretty expensive.",
          "UK-based and sold through resellers, so quotes and support vary by dealer.",
        ],
        [
          "Foodtec / PizzaDirector",
          "The pizza-specialist pick in the US threads: one owner calls it the best in twenty-plus years and five shops, with an amazing delivery interface — and not cheap.",
          "US-focused; the lesson for UK buyers is the shape, not the brand: pizza delivery workflow is worth paying for.",
        ],
        [
          "TouchBistro",
          "One pizza operator's stack: TouchBistro for the till, Xero for the accounts, online ordering bolted on.",
          "Canadian system with limited UK hospitality presence.",
        ],
        [
          "Lightspeed",
          "Shortlisted alongside ICRTouch by the takeaway startup as established — and expensive.",
          "Restaurant-first; takeaway delivery workflow is not its centre of gravity.",
        ],
        [
          "A wall of aggregator tablets",
          "The default 'system' most takeaways actually run: one tablet per platform, orders retyped into the till. The 2024 UK thread exists because owners want out of it.",
          "The escape route is integration — orders from every platform landing in one screen and one kitchen queue.",
        ],
      ],
    },
    {
      kind: "prose",
      kicker: "Our stake",
      heading: "Where Posso fits — and where it doesn't",
      paragraphs: [
        "Posso is a UK hospitality EPOS with 500+ UK businesses on the system, and the takeaway workflow is our home ground: aggregator integration that puts Just Eat, Deliveroo and Uber Eats orders on the same screen and kitchen queue as everything else, caller ID for phone orders, your own commission-light online ordering to shift regulars off the platforms, kitchen displays, and printed labels for bags and boxes. That list maps one-to-one onto what the threads ask for, which is why we built this page around them.",
        "Where we are not the answer, in the threads' own spirit: if you are in the US, the pizza-specialist systems praised in those threads serve you better than any UK supplier. If you are a cash-only chippy doing steady trade with a queue out the door and no delivery ambitions, a card machine and a basic till may genuinely be all the modernisation you need this year — start there, not with a full system. And if most of your revenue is dine-in, you want our restaurant configuration, not the takeaway one; they are different jobs.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/smallbusinessuk — Best POS for a takeaway shop, as of 2024 (UK)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1ahf9oo/best_pos_system_for_a_takeaway_shop_as_of_2024",
        },
        {
          label: "r/POS — Best POS system for a takeaway shop",
          href: "https://www.reddit.com/r/POS/comments/1ahezop/best_pos_system_for_takeaway_shop",
        },
        {
          label: "r/restaurant — Best POS for a small pizza shop (2023)",
          href: "https://www.reddit.com/r/restaurant/comments/1231dbv/best_pos_system_for_small_pizza_shop_and",
        },
        {
          label: "r/restaurateur — Pizza POS recommendations (2023)",
          href: "https://www.reddit.com/r/restaurateur/comments/1380hwg/any_recommendations_for_pizza_pos_systems_i_have",
        },
        {
          label: "r/restaurateur — Pizza businesses: what tech stack? (2024)",
          href: "https://www.reddit.com/r/restaurateur/comments/1bna6un/pizza_businesses_what_tech_stack_is_everyone",
        },
        {
          label: "r/smallbusinessuk — Managing my father's fish and chip shop (2025)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1klqwab/where_do_i_start_managing_my_fathers_fish_and",
        },
        {
          label: "r/smallbusiness — EPOS for a takeaway and home delivery startup (2018)",
          href: "https://www.reddit.com/r/smallbusiness/comments/9vavez/looking_for_epos_system_for_takeawayhome_delivery",
        },
        {
          label: "r/AskUK — Why don't fish and chip shops take card? (2021)",
          href: "https://www.reddit.com/r/AskUK/comments/l42xig/why_dont_fish_and_chip_shops_take_card",
        },
      ],
    },
    {
      kind: "links",
      heading: "Takeaway solutions",
      items: [
        { label: "POS for pizza shops", href: "/pos-for-pizza-shop" },
        { label: "POS for fish and chip shops", href: "/pos-for-fish-and-chip-shop" },
        { label: "Takeaway EPOS", href: "/takeaway-epos" },
        { label: "Delivery integrations", href: "/delivery-integrations" },
        { label: "Kitchen display system", href: "/kitchen-display-system" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "Takeaway EPOS — what owners actually ask",
  faqs: [
    {
      q: "What is the best EPOS for a takeaway in the UK?",
      a: "The threads agree on the shape before any brand: aggregator orders integrated into one screen, kitchen printing that holds up on a Friday night, and delivery workflow — labels, driver handling, order timing — built in rather than bolted on. UK owners name ICRTouch and Lightspeed as established but expensive; Posso's takeaway configuration covers the same checklist from £499 + VAT with marketplace integration at £45 a month. Judge any of them on a demo run at Friday speed.",
    },
    {
      q: "How do Just Eat, Deliveroo and Uber Eats integrations actually work?",
      a: "Instead of one tablet per platform, platform orders arrive inside the EPOS: they appear on the same screen as counter and phone orders, print to the same kitchen queue, and menu changes push from one place. With Posso the integration is £45 a month, and only if you use it. What integration does not change is the commission the platforms charge on each order — the only fix for that is shifting regulars to your own ordering channel.",
    },
    {
      q: "Do fish and chip shops still get away with cash-only?",
      a: "Less every year — there is a whole AskUK thread of customers asking why chippies don't take card, which is another way of saying lost orders. The chippy modernisation thread's advice is the right order of operations: card acceptance and a solid till first, then reporting, stock and online ordering once the basics are running. You do not need to do everything in one leap, but the first step is overdue in most cash-only shops.",
    },
    {
      q: "What should a pizza shop look for specifically?",
      a: "The US threads' favourite pizza system earned its praise for the delivery interface — order timing, driver management, the pizza-builder workflow of halves and toppings priced correctly. That is the checklist that transfers to the UK even though the brand does not: half-and-half builds one tap deep, caller ID for phone regulars, delivery zones and timing, and labels on the boxes. Our pizza-specific guidance is on the pizza shop POS page.",
    },
    {
      q: "What does a takeaway EPOS cost in the UK?",
      a: "Posso's numbers, stated plainly: £499 + VAT for the complete system including kitchen printer, menu build and training; software from £25 + VAT a month; £45 a month for marketplace integration if you use it; 30p per delivery through your own drivers; finance from £24.92 a week. The threads' costing advice is right: compare total monthly cost at your real order volume — commissions included — not the hardware sticker price.",
    },
    {
      q: "What do owners warn about most in these threads?",
      a: "Three things. Retyping aggregator orders — the error rate between tablet and till is where refunds and one-star reviews come from. Underestimating the kitchen side — a till that cannot sequence a Friday night is a decoration. And vendor replies in the threads themselves — several recommendations come from people selling the thing they recommend, which is why every thread this page uses is linked above for you to read with that in mind.",
    },
  ],
};
