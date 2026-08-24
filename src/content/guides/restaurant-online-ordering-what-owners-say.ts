import type { Guide } from "@/lib/guides";

/**
 * Community-research page (SERP-gap batch 2, August 2026). Distinctive source
 * mix: two of the ranking threads are DEVELOPERS being hired to build
 * ordering systems for restaurants (r/webdev), one is self-hosters, one is
 * owners, one is customers. Every theme grounded in a linked thread.
 *
 * Verified house numbers used: customer pays 60p service fee on own-channel
 * ordering, business pays only card processing (posso-vs-epos-now table);
 * £45/month marketplace integration; 30p own-driver delivery; software from
 * £25 + VAT/month.
 */

export const restaurantOnlineOrderingWhatOwnersSay: Guide = {
  slug: "restaurant-online-ordering-what-owners-say",
  title: "Online Ordering: What Owners Say",
  metaDescription:
    "Restaurant online ordering as owners, their hired developers and customers actually discuss it — reliability, Shopify, build-vs-buy, commission. Sources linked.",
  eyebrow: "Community research",
  h1: "Restaurant online ordering: what owners and their developers say",
  h1Split: ["Restaurant online ordering:", "what owners and their developers say"],
  standfirst:
    "The threads Google ranks for online ordering are an odd mix — owners asking for something reliable, web developers being hired to build one from scratch, self-hosters weighing it up, and customers explaining when they give up mid-order. Read together, they map the whole decision. All linked at the bottom.",
  highlights: [
    "Owner, developer and customer threads read together, sources linked",
    "The build-versus-buy question, answered by people who tried both",
    "Commission-light own-channel ordering when you want our version",
  ],
  breadcrumb: "Online Ordering — Owners' View",
  quickAnswer:
    "The word owners use first is not cheap — it is reliable. Customers in the threads say online ordering beats phoning “when they work”, and abandon it when it does not. The recurring wrong turns: bending a generic e-commerce platform like Shopify around food, and hiring a developer to build ordering from scratch without costing menus, payments and the 7pm Friday support call. The working answer: hospitality-specific ordering on your own site to escape aggregator commission, judged on what happens at peak, not in the demo.",
  sections: [
    {
      kind: "prose",
      kicker: "How this page was made",
      heading: "Where this comes from",
      paragraphs: [
        "Six threads, three sides of the counter. An owner asking for a reliable, cost-effective ordering system — where the first suggestion was Shopify. A customer thread on what ordering from local restaurants is actually like. Two r/webdev threads where developers are being hired to build ordering for restaurants — one opens with a freelancer holding 'a hot lead'. A self-hosted thread testing whether owners would run their own. And the AskUK thread about app-ordering fatigue that also shaped our kiosk page. All linked below; last reviewed 24 August 2026.",
        "Worth noticing before the themes: when the top results for an ordering-system query are developers discussing how to build one, that is the market telling you owners feel overcharged by what is on the shelf — mostly by aggregator commission. The threads are the story of people trying to escape it in different directions.",
      ],
    },
    {
      kind: "features",
      kicker: "The themes",
      heading: "What the threads keep coming back to",
      intro:
        "Owners, developers and customers disagree about plenty — not about these four.",
      items: [
        {
          title: "Reliability is the entire request",
          body: "The owner thread asks for a reliable system before it asks the price, and the customer thread explains why: ordering online beats phoning — “when they work”. A failed basket does not degrade gracefully; the customer either phones anyway, doubling your work, or orders from the competitor whose site did not fall over. Judge any ordering system — ours included — at Friday-night load: menu edits appearing instantly, payments completing, orders confirmed to the kitchen, and a clear failure message when something does break.",
        },
        {
          title: "Shopify keeps being suggested, and keeps being wrong",
          body: "In the owner thread, the first recommendation is Shopify — a fine platform for selling jumpers, and the wrong shape for food. Generic e-commerce has no concept of prep times, collection slots, priced modifiers three deep, delivery zones, or a kitchen that needs the order thirty seconds after payment. Owners who go this way end up hand-stitching plugins into something fragile that still cannot tell the kitchen anything. The threads' correction is simple: buy ordering built for hospitality, or do not bother.",
        },
        {
          title: "Hiring a developer to build it costs more than it looks",
          body: "Two threads are developers being asked to build restaurant ordering — one notes the enterprise answer, Olo, exists precisely because this is hard; the self-hosted thread asks the fatal question directly: what are the hurdles for a non-technical owner running their own? The hidden bill is everything after launch: card processing and its compliance, menu changes at 5pm, printer integration, and who answers when orders stop arriving mid-service. A build makes sense with a developer on staff and unusual needs. For everyone else, the threads' own arithmetic says buy.",
        },
        {
          title: "The commission escape only works if the experience is better",
          body: "The unspoken goal in every owner thread is getting orders off the aggregators, whose commission runs up to 35% before marketing add-ons. But the customer threads add the condition: people already have the Just Eat app working; they will only switch to your site if it is at least as fast and never embarrassing. That means your own channel has to be promoted — on the bag, at the till, with a first-order incentive — and flawless. Half-hearted own-channel ordering converts nobody and quietly expires.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "The commission maths, plainly",
      paragraphs: [
        "The number that drives every thread: aggregator commission of up to 35% per order, plus marketing add-ons, on the platforms' terms. Against that, the enterprise build route (the Olo tier the webdev thread mentions) is priced for chains, and the DIY route prices its true cost in developer hours and Friday-night support rather than pounds.",
        "Posso's own-channel numbers, stated plainly: branded online ordering on your own site and app where the customer pays a 60p service fee and you pay only the card processing — no percentage commission to us on your own orders. Marketplace integration for the orders that still come via Just Eat, Deliveroo and Uber Eats is £45 a month, only if you use it. Deliveries through your own drivers are 30p each. The platform behind it runs from £25 + VAT a month with the system from £499 + VAT. On a takeaway doing meaningful weekly aggregator volume, shifting even a third of those orders to your own channel typically covers the entire system cost — run the arithmetic on your own commission statement, which is exactly the calculation the threads never quite finish.",
      ],
    },
    {
      kind: "prose",
      kicker: "Our stake",
      heading: "Where Posso fits — and where it doesn't",
      paragraphs: [
        "We sell what the owner thread is asking for: hospitality-specific ordering that is part of the till rather than bolted on — menus and modifiers shared with the counter, orders landing in the same kitchen queue as everything else, collection slots and delivery zones understood natively, and the customer data staying in your CMS with 2,000 marketing emails a month included for the promotion problem above. The 60p-service-fee model exists precisely so the commission escape is real rather than swapped for a different percentage.",
        "Where we are not the answer, in the threads' spirit: if you have a developer on staff and genuinely unusual requirements, building on your own stack is legitimate — the self-hosted thread's checklist of hurdles is your specification. If you are dine-in only with no collection or delivery demand, ordering software solves a problem you do not have; a booking system might. And outside the UK, the Olo-tier and local platforms the developer threads discuss will fit your market better than we can.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/smallbusiness — What is a reliable online ordering system? (2025)",
          href: "https://www.reddit.com/r/smallbusiness/comments/1mhkwbz/what_is_reliable_online_ordering_system",
        },
        {
          label: "r/restaurant — Online ordering for a local take-in/take-out (2025)",
          href: "https://www.reddit.com/r/restaurant/comments/1ldwsuw/online_ordering_system_for_a_local_takeintakeout",
        },
        {
          label: "r/webdev — Best online ordering system for restaurants? (2023)",
          href: "https://www.reddit.com/r/webdev/comments/13ikjl9/best_online_ordering_system_for_restaurants",
        },
        {
          label: "r/webdev — Restaurant online ordering (2023)",
          href: "https://www.reddit.com/r/webdev/comments/17feh6w/restaurant_online_ordering",
        },
        {
          label: "r/selfhosted — Would self-hosted restaurant ordering appeal? (2026)",
          href: "https://www.reddit.com/r/selfhosted/comments/1lte3av/would_a_selfhosted_online_ordering_system_for",
        },
        {
          label: "r/AskUK — Do you actually like ordering food by app? (2024)",
          href: "https://www.reddit.com/r/AskUK/comments/1dumt45/do_you_actually_like_using_an_app_to_order_food",
        },
      ],
    },
    {
      kind: "links",
      heading: "Online ordering solutions",
      items: [
        { label: "Online ordering", href: "/online-ordering" },
        { label: "Food ordering system", href: "/food-ordering-system" },
        { label: "Restaurant ordering app", href: "/restaurant-ordering-app" },
        { label: "Delivery integrations", href: "/delivery-integrations" },
        { label: "Takeaway EPOS — owners' view", href: "/takeaway-epos-what-owners-say" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "Restaurant online ordering — what people actually ask",
  faqs: [
    {
      q: "What is the most reliable online ordering system for a small restaurant?",
      a: "The threads' criteria are the right ones: orders must reach the kitchen automatically (not an email inbox), the menu must update everywhere instantly, and payment failures must be rare and clearly signalled. Systems built into the till clear that bar structurally, because ordering, menu and kitchen are one system — which is how Posso's works. Whatever you evaluate, test it at Friday volume with a modifier-heavy order, not with the vendor's sample menu.",
    },
    {
      q: "Can I just use Shopify or a website builder for food ordering?",
      a: "You can, and the owner thread shows how often it is suggested — but food breaks generic e-commerce quickly: no prep times or collection slots, modifiers as clumsy product variants, no kitchen printing, no delivery zones. The result is a checkout that technically takes food orders and a kitchen that finds out about them by email. Hospitality-specific ordering exists because restaurants and retail are different shapes of transaction.",
    },
    {
      q: "Should I pay a developer to build my own ordering system?",
      a: "The developer threads themselves supply the caution: the enterprise version of this (Olo) exists because it is genuinely hard, and the self-hosted thread's question — what are the hurdles for a non-technical owner? — is the answer in disguise. Payments compliance, menu tooling, printer integration and out-of-hours support are the real cost. Build if you employ a developer and have needs nothing off the shelf meets; otherwise the arithmetic favours buying.",
    },
    {
      q: "How do I move customers off Just Eat and Deliveroo to my own site?",
      a: "The customer threads set the condition: your channel must be at least as smooth as the app they already trust. Then it is promotion mechanics — a first-order discount funded by the commission you are not paying, the URL on every bag and receipt, staff mentioning it at the counter, and your CMS emailing regulars (2,000 marketing emails a month are included with Posso). Shifting a third of aggregator volume is a realistic first-year target, and at up to 35% commission it is a large number.",
    },
    {
      q: "What does online ordering cost with Posso?",
      a: "Branded ordering on your own site and app: the customer pays a 60p service fee and you pay only card processing — no percentage commission to us on your own orders. Marketplace integration is £45 a month only if you use it; own-driver deliveries are 30p each; the platform runs from £25 + VAT a month on a £499 + VAT system. Compare that with one month of your aggregator commission statement — that comparison is the whole business case.",
    },
    {
      q: "Do customers actually want to order online rather than phone?",
      a: "Yes, with a condition the customer thread states plainly: online ordering beats phoning when it works. Menus are browsable, modifiers are explicit, and there is no queue on hold — but a single failed basket sends the customer back to the phone or to a competitor. Reliability is not a feature of ordering systems; it is the product. Build the habit with regulars and the phone quietens within months, which most takeaways experience as hiring half a staff member.",
    },
  ],
};
