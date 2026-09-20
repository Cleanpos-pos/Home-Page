import type { Guide } from "@/lib/guides";

/**
 * Community-research page (SERP-gap batch, August 2026). Unusual sourcing on
 * purpose: half the linked threads are CUSTOMERS talking about kiosks
 * (r/AskUK, r/GenZ, r/kfc), not operators — because "are kiosks worth it"
 * depends on how customers behave at them. Every theme and paraphrase is
 * grounded in the linked threads; no figure or quote without a link.
 *
 * Deliberate honesty: no operator in these threads posted a measured
 * before/after uplift number, and the page says so rather than inventing one.
 */

export const areSelfOrderKiosksWorthIt: Guide = {
  slug: "are-self-order-kiosks-worth-it",
  title: "Are Self-Order Kiosks Worth It?",
  metaDescription:
    "What operators and customers actually say about self-order kiosks — the spend lift, the resistance, the accessibility question. Sources linked. Kiosks from £699 + VAT.",
  eyebrow: "Community research",
  h1: "Are self-order kiosks worth it? What operators and customers say",
  h1Split: ["Are self-order kiosks worth it?", "What operators and customers say"],
  standfirst:
    "The question gets asked constantly in owner forums, and the answers disagree — sometimes inside the same thread. So we read both sides: the operators who tried kiosks, and the customer threads about being made to use them. All of it is linked at the bottom.",
  highlights: [
    "Operator and customer threads, read together and linked",
    "The honest case against, straight from the threads",
    "Posso kiosks from £699 + VAT when the case fits",
  ],
  breadcrumb: "Are Kiosks Worth It?",
  quickAnswer:
    "It depends on your counter, and the threads show both halves. Operators who dislike kiosks report customers walking past them; even those sceptics concede kiosks make customers spend more when they are used. Customers split hard: some hate app-and-screen ordering as cold and impersonal, others prefer it precisely because it skips the small talk. The working answer from all of it: kiosks earn their place in high-volume counter operations with queues — run alongside a staffed till, never instead of one.",
  sections: [
    {
      kind: "prose",
      kicker: "How this page was made",
      heading: "Where this comes from — including your customers",
      paragraphs: [
        "Most kiosk content is written by people selling kiosks — us included, elsewhere on this site. This page is different on purpose: it synthesises the threads Google ranks when operators ask whether kiosks are worth it, and it deliberately includes the other half of the conversation — customer threads on r/AskUK, r/GenZ and even r/kfc about being on the receiving end. Whether a kiosk pays for itself is mostly a question about how your customers behave at it, so their half of the argument belongs on the table. Everything is linked at the bottom; last reviewed 24 August 2026.",
        "One flag on the operator side: the coffee-shop kiosk thread starts because a payment-processing rep pitched kiosks to the owner — a useful reminder that a lot of kiosk enthusiasm arrives with a commission attached. Read the replies with that in mind; several owners in them speak from actual floors, and they are the ones worth hearing.",
      ],
    },
    {
      kind: "features",
      kicker: "The argument",
      heading: "Both sides, as the threads put them",
      intro:
        "The disagreement is real, and it is more useful than any vendor claim — including ours.",
      items: [
        {
          title: "The concession that matters: kiosks lift spend",
          body: "The central kiosk thread contains the whole argument in miniature. One operator reports trying kiosks across all their stores and finding customers simply did not take to them. Yet in the same discussion comes the concession that decides the economics: kiosks tend to get customers to spend more than they otherwise would. A machine that prompts every extra, every upsize, every add-on, every single time — no staff member does that on hour eight of a shift. Even the kiosk-sceptics' thread grants this.",
        },
        {
          title: "The resistance is real, and it has a voice",
          body: "The customer threads are not shy. One UK diner describes ordering by app at the table as detached, cold and unwelcoming — they came out partly for the human interaction. Another thread runs on resentment at self-service ratios: a dozen machines, two staffed positions, and the feeling of doing unpaid work. A takeaway counter is not a supermarket, but the lesson transfers: customers notice when self-service feels imposed rather than offered, and some of them will walk.",
        },
        {
          title: "And so is the preference — from the other direction",
          body: "The same forums carry the opposite view with equal conviction: customers who actively prefer the kiosk because it is faster, because the order is visual and correctable, and — in their own words — because it skips small talk with a stranger. The split is partly generational but mostly situational: the regular who knows their order wants a fast lane; the first-timer with questions wants a person. The operational conclusion writes itself — offer both.",
        },
        {
          title: "Accessibility is not a footnote",
          body: "The starkest thread is a customer with very low vision asking whether kiosk-only ordering at a fast-food chain amounts to discrimination. Whatever the legal answer, the operational one is non-negotiable: a kiosk must be an option, never the only route to being served. Keep a staffed lane open whenever the shop is open, and make sure staff proactively offer it. Kiosk-only ordering does not just alienate customers — for some it is a wall.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "What the numbers do and don't show",
      paragraphs: [
        "Honesty first: no operator in these threads posts a measured before-and-after number for kiosk revenue. The uplift claims all come from vendors — including us. What the threads supply instead is the mechanism everyone concedes: consistent prompting raises attachment and order size, and queues shrink when regulars self-serve. Treat any specific percentage a vendor quotes — ours included — as a claim to test, not a fact to bank.",
        "So here is how to test it. A Posso kiosk is £699 + VAT and runs the same menu, modifiers and kitchen routing as the till, so a trial does not mean rebuilding anything. Put one beside the staffed till for a busy month, then read your own numbers: average order value at the kiosk versus the counter, attachment on the extras you care about, and queue length at peak. If the kiosk does not pay its way in your data, that is your answer — and it is a better answer than any thread or any vendor can give you.",
      ],
    },
    {
      kind: "prose",
      kicker: "Our stake",
      heading: "Where kiosks fit — and where they don't",
      paragraphs: [
        "Posso sells kiosks, so weigh our view accordingly — but it matches the threads. Kiosks fit high-volume counter service: fast food, takeaways at peak, dessert and bubble tea counters where customers dial in sugar levels and toppings themselves, food halls, and anywhere a queue visibly costs walk-ins. They run the same menu and modifier logic as the till, print to the same kitchen queue, and take card through the same processing. In a dessert shop they also quietly remove the slowest conversation at the counter — the customisation back-and-forth — because the customer does it on screen.",
        "Where they do not fit, in the threads' own spirit: table-service restaurants where the human welcome is the product — the detached-and-cold complaint is about exactly this. Low-volume counters where the queue clears in minutes; a kiosk there is furniture. And any operation tempted to run kiosk-only to cut staff: the resistance threads and the accessibility thread are both warnings about the same mistake. The kiosk is a second lane, not a replacement for the first.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/restaurant — Are self-ordering kiosks worth it? (2024)",
          href: "https://www.reddit.com/r/restaurant/comments/19dt9te/are_self_ordering_kiosks_worth_it",
        },
        {
          label: "r/coffeeshopowners — Anyone using self-order kiosks? (2025)",
          href: "https://www.reddit.com/r/coffeeshopowners/comments/1ie82n3/anyone_using_selforder_kiosks_in_their_coffee_shop",
        },
        {
          label: "r/UKPersonalFinance — Self-service kiosk for a not-for-profit snack shop (2022)",
          href: "https://www.reddit.com/r/UKPersonalFinance/comments/rv04ll/self_service_pos_kiosk_card_reader_solutions",
        },
        {
          label: "r/AskUK — Do you actually like ordering food by app? (2024)",
          href: "https://www.reddit.com/r/AskUK/comments/1dumt45/do_you_actually_like_using_an_app_to_order_food",
        },
        {
          label: "r/GenZ — What's your opinion on self-service kiosks? (2024)",
          href: "https://www.reddit.com/r/GenZ/comments/1b2tewv/what_is_your_opinion_on_selfservice_kiosks",
        },
        {
          label: "r/AskUK — Do you feel compelled to fight back against self-service? (2026)",
          href: "https://www.reddit.com/r/AskUK/comments/1r1fulf/do_any_of_you_feel_compelled_to_fight_back",
        },
        {
          label: "r/kfc — Are the self-service kiosks mandatory? (accessibility) (2026)",
          href: "https://www.reddit.com/r/kfc/comments/1rgixy3/are_the_self_service_kiosks_mandatory",
        },
      ],
    },
    {
      kind: "links",
      heading: "Kiosk solutions",
      items: [
        { label: "Self-order kiosks", href: "/self-order-kiosks" },
        { label: "Self-order kiosks — complete guide", href: "/self-order-kiosks-guide" },
        { label: "Kiosks for fast food", href: "/self-order-kiosk-fast-food" },
        { label: "Dessert & bubble tea POS", href: "/pos-for-dessert-shop" },
        { label: "Restaurant self-ordering", href: "/restaurant-self-ordering-system" },
        { label: "Kitchen display system", href: "/kitchen-display-system" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "Self-order kiosks — what people actually ask",
  faqs: [
    {
      q: "Are self-order kiosks worth it for a small takeaway or counter?",
      a: "Worth it when a queue visibly costs you customers at peak — that is the case even kiosk-sceptics in the threads concede, because kiosks absorb the regulars and prompt extras consistently. Not worth it when the queue clears in minutes or when the welcome is the product. At £699 + VAT running the same menu as your till, the rational move is a one-month trial beside the staffed lane, judged on your own average-order and queue numbers.",
    },
    {
      q: "Do customers actually use kiosks?",
      a: "The threads split honestly. One operator tried kiosks across several stores and found customers avoided them; customers in the same forums say they prefer the kiosk because it is faster and skips small talk. Usage depends on placement, on whether staff greet and steer, and on your crowd — a fast-food counter behaves differently from a neighbourhood café. The consistent finding: offered as a choice beside a staffed till, a meaningful share of customers take it.",
    },
    {
      q: "What about older customers, or customers who can't use a screen?",
      a: "This is the strongest warning in the threads: a partially sighted customer asking whether kiosk-only ordering is discrimination. The answer is operational, not technological — never run kiosk-only. Keep a staffed lane open whenever you are open, have staff offer help at the kiosk unprompted, and treat the kiosk as an extra lane for those who want it. Done that way, the accessibility objection disappears, because nobody is forced through the screen.",
    },
    {
      q: "Do kiosks really increase order value?",
      a: "The mechanism is conceded even by kiosk-sceptics in the threads: a screen prompts every extra and upsize, every time, which staff do not. What the threads do not contain is a measured before-and-after figure — those numbers all come from vendors, including us. So run the honest test: trial one kiosk for a month and compare kiosk versus counter average order value in your own reporting. If the lift is not there, you will know within weeks.",
    },
    {
      q: "How much does a self-order kiosk cost in the UK?",
      a: "Posso kiosks start at £699 + VAT, running the same menu, modifiers, kitchen routing and card processing as the main till — so adding one is configuration, not a second system. The system behind it starts at £499 + VAT with software from £25 + VAT a month. A kiosk trial therefore risks hardware money only, and the kiosk keeps working as a second till even off-peak.",
    },
    {
      q: "Should the kiosk replace a staffed till?",
      a: "No — and this is where the customer threads earn their place on this page. The resentment in the self-service threads is aimed at businesses that removed the human option, not at the machines themselves. The configuration that works, per operators and customers alike: kiosk as the fast lane, staffed till as the default, both always open. You get the spend lift from the customers who want the screen without losing the ones who came for a person.",
    },
  ],
};
