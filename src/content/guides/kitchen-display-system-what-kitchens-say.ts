import type { Guide } from "@/lib/guides";

/**
 * Community-research page (SERP-gap batch 2, August 2026). Sources: the five
 * KDS threads Google ranks for "kitchen display system uk" peer queries —
 * notably r/Chefit at #1, so the chef's view leads. Every theme is grounded
 * in a linked thread; no figure or quote without a link.
 *
 * KDS pricing per posso-vs-epos-now (corrected 2026-08-24): 21-inch screen
 * £399 + VAT, covered by the standard software fee (from £25 + VAT/month).
 */

export const kitchenDisplaySystemWhatKitchensSay: Guide = {
  slug: "kitchen-display-system-what-kitchens-say",
  title: "What Kitchens Say About KDS",
  metaDescription:
    "Kitchen display systems as chefs, owners and their IT people actually discuss them — what KDS is for, what goes wrong, what it costs. Every source linked.",
  eyebrow: "Community research",
  h1: "Kitchen display systems: what chefs and owners actually say",
  h1Split: ["Kitchen display systems:", "what chefs and owners actually say"],
  standfirst:
    "Search KDS questions and the first result is often chefs talking to chefs — then owners, then the IT person a restaurant roped in, then developers trying to build one. Four different jobs, one screen. We read all four conversations; the threads are linked at the bottom.",
  highlights: [
    "The chef's view, the owner's view and the IT view — sources linked",
    "What owners say goes wrong with kitchen screens",
    "Posso KDS: 21-inch screen £399 + VAT, covered by the standard software fee",
  ],
  breadcrumb: "KDS — What Kitchens Say",
  quickAnswer:
    "Strip the vendor language and the threads define a KDS by its job: orders from every channel appearing in the kitchen in real time, prep tracked, and a way for cooks to tell front of house that table twelve's food is ready — the exact need one owner posts in plain words. Chefs discussing it run real volume, one to two hundred covers a service. The honest caveats: a KDS only earns its screen when orders arrive from more channels than a printer can sequence, and the managers' threads ask about failure modes for good reason — judge any system on what happens when the internet blips mid-service.",
  sections: [
    {
      kind: "prose",
      kicker: "How this page was made",
      heading: "Where this comes from",
      paragraphs: [
        "Five threads, four perspectives. A chef on r/Chefit planning a KDS for a kitchen serving one to two hundred lunches. An owner on r/restaurantowners describing the need in one sentence. A restaurant's IT contact on r/it dealing with a commercial KDS in place of printed chits. A manager thread collecting what actually goes wrong with the common systems. And a self-hoster trying to build an open-source one — which tells you something about how commercial KDS pricing lands with small operators. All linked at the bottom; last reviewed 24 August 2026.",
        "The usual filter applies: KDS threads attract vendor replies, and the managers' what-goes-wrong thread exists precisely because glossy demos skip the failure modes. We synthesise what the participants themselves say and link everything so you can check the register of each reply yourself.",
      ],
    },
    {
      kind: "features",
      kicker: "The themes",
      heading: "What the kitchen conversations keep saying",
      intro: "Four voices, surprisingly consistent about what matters.",
      items: [
        {
          title: "The need is coordination, not a gadget",
          body: "The owner thread states the requirement better than any brochure: a simple way for cooks to tell the service team that a table's food is ready to be picked up. That is the whole job — orders in, readiness out, nothing retyped and nothing shouted. If a demo cannot show that loop working at pace, everything else on the spec sheet is decoration. Screens do not make kitchens faster; closing the loop between kitchen and floor does.",
        },
        {
          title: "Chefs adopt screens when volume forces the issue",
          body: "The chef planning a KDS runs 100–200 lunch covers and up to 150 at dinner — the scale where paper tickets stop being sequenceable and prep timing starts deciding reviews. That is the honest adoption threshold the threads imply. A kitchen doing thirty covers with one channel of orders will not feel the benefit; a kitchen juggling counter, phone, own-site and aggregator orders at once feels it the first Friday.",
        },
        {
          title: "Ask the managers' question: what goes wrong?",
          body: "One thread simply asks operators which problems they have hit with the common KDS products — the single best question in the whole topic. Put it to any vendor, us included: what happens to tickets when the connection drops mid-service, how does the screen survive heat and grease above the pass, what does a cook with wet hands actually touch, and how fast can you fall back to paper if the hardware fails on a Saturday. The systems worth buying have practised answers; the rest change the subject.",
        },
        {
          title: "When people try to build their own, pricing is the tell",
          body: "There is a whole thread of self-hosters hunting for an open-source KDS — real-time orders, prep timers, station views. When operators would rather run their own server than pay for a screen, the market's per-screen pricing has drifted from what the hardware is. It is a fair complaint, and our answer to it is structural: the screen is a one-off £399 + VAT, and the software behind it is the same standard fee that runs the till — not a separate per-month, per-screen toll.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "What a kitchen screen actually costs",
      paragraphs: [
        "The market pattern owners describe is a monthly add-on per screen — Epos Now's KDS, for example, is reported by users at around £19 a month on top of the software plan, which is £228 a year for one screen before you have bought anything. The self-hosted thread is the reaction to exactly that structure.",
        "Posso prices it the other way: the 21-inch kitchen screen is £399 + VAT once, and it runs under the same standard software fee as the rest of the system — from £25 + VAT a month for the platform, not per screen. Orders from the counter, phone, your own online ordering and the £45-a-month marketplace integration all land on the same display in the same queue, which is the coordination loop the owner thread asked for. If you already run our till, adding the screen is hardware plus configuration, not a new subscription.",
      ],
    },
    {
      kind: "prose",
      kicker: "Our stake",
      heading: "Where a KDS fits — and where a printer is honestly fine",
      paragraphs: [
        "The threads' adoption logic is ours too. A KDS earns its place when orders arrive from several channels at once, when prep timing is a service-quality problem, and when the kitchen-to-floor handoff is where mistakes happen — takeaways juggling aggregator orders, counters at weekend volume, kitchens past roughly a hundred covers a service.",
        "And where it does not: a small kitchen three metres from the till, one order channel, food that goes straight from pan to counter — a kitchen printer does that job for a fraction of the cost, and we will tell you so on a demo. Likewise, if you have the technical appetite of the self-hosted thread and unusual requirements, building your own is a real path; the checklist above — offline behaviour, heat, wet hands, paper fallback — is what it has to survive. For everyone else, the screen should be boring, integrated and included in the fee you already pay.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/Chefit — KDS for a 100–200 cover kitchen (2025)",
          href: "https://www.reddit.com/r/Chefit/comments/1lhm9p9/kds_kitchen_display_system",
        },
        {
          label: "r/restaurantowners — a simple kitchen-to-floor system (2023)",
          href: "https://www.reddit.com/r/restaurantowners/comments/160x1zi/kitchen_display_system",
        },
        {
          label: "r/Restaurant_Managers — what goes wrong with common KDS? (2024)",
          href: "https://www.reddit.com/r/Restaurant_Managers/comments/1fv0bcy/kitchen_display_system",
        },
        {
          label: "r/it — supporting a commercial KDS in a restaurant (2024)",
          href: "https://www.reddit.com/r/it/comments/1c2fy3z/kitchen_display_system",
        },
        {
          label: "r/selfhosted — building an open-source KDS (2026)",
          href: "https://www.reddit.com/r/selfhosted/comments/1tuycxu/looking_for_an_opensource_kitchen_display_system",
        },
      ],
    },
    {
      kind: "links",
      heading: "Kitchen solutions",
      items: [
        { label: "Kitchen display system", href: "/kitchen-display-system" },
        { label: "Restaurant EPOS", href: "/restaurant-epos" },
        { label: "Takeaway EPOS — owners' view", href: "/takeaway-epos-what-owners-say" },
        { label: "Delivery integrations", href: "/delivery-integrations" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
        { label: "EPOS monthly fees", href: "/epos-system-monthly-fee" },
      ],
    },
  ],
  faqHeading: "Kitchen display systems — what kitchens actually ask",
  faqs: [
    {
      q: "Is a KDS worth it for a small restaurant or takeaway?",
      a: "Use the threads' own threshold: multiple order channels arriving at once, prep timing affecting service, and mistakes happening in the kitchen-to-floor handoff. Tick two of three and a screen earns its £399 + VAT quickly — a takeaway with aggregator orders usually ticks all three. One channel and a short pass, and a kitchen printer is honestly fine; we will say so on the demo.",
    },
    {
      q: "KDS or kitchen printer — which should I start with?",
      a: "Printer first if your orders come from one place and your kitchen can see the counter. Screen when sequencing becomes the problem: several channels, timed prep, or front of house asking 'is table twelve ready?' more than once a service. With Posso the two are not either/or — printed tickets and the display run from the same order flow, so you can add the screen when volume forces the issue, as the chef thread's kitchen did.",
    },
    {
      q: "How much does a kitchen display system cost in the UK?",
      a: "The market pattern is a monthly per-screen add-on — around £19 a month is reported for Epos Now's — which compounds forever. Posso's 21-inch screen is £399 + VAT one-off and runs under the standard software fee (from £25 + VAT a month for the platform), not a separate per-screen subscription. On a three-year view the one-off screen is the cheaper structure by some distance.",
    },
    {
      q: "What goes wrong with kitchen display systems?",
      a: "The managers' thread asks exactly this, and the answers to press any vendor on are: behaviour when the internet drops mid-service, screen survival above a hot greasy pass, whether a cook with wet or gloved hands can actually operate it, and the paper fallback when hardware fails on a Saturday night. A KDS that cannot answer those four is a liability with a nice interface.",
    },
    {
      q: "Do Just Eat and Deliveroo orders show on the kitchen screen?",
      a: "On Posso, yes — that is half the point. With the £45-a-month marketplace integration, aggregator orders land in the same kitchen queue as counter, phone and your own online orders, sequenced together instead of shouted from a tablet. The wall-of-tablets problem that dominates the takeaway threads is, in the kitchen, precisely what a KDS exists to end.",
    },
    {
      q: "Will kitchen staff actually use it?",
      a: "The chef thread is the reassuring datapoint: the push for a KDS often comes from the kitchen once volume makes paper unmanageable. Adoption fails when the screen is imposed without the loop being useful — cooks need the ready-notification to actually reach front of house, or the screen is just a TV showing tickets. Set that loop up on day one and the kitchen keeps the screen; skip it and they will quietly go back to shouting.",
    },
  ],
};
