import type { Guide } from "@/lib/guides";

/**
 * Community-research page (SERP-gap batch 2, August 2026). The most UK-heavy
 * thread set of the series — mostly r/smallbusinessuk — including three
 * separate Zettle/PayPal warning threads and a Dojo sales rep pitching inside
 * a recommendations thread. Every theme grounded in a linked thread; one
 * verbatim quote (the 0.9% Zettle line), everything else paraphrased.
 *
 * House claims used: Posso card machines via the Teya partnership; Posso Pay
 * quoted on card turnover, same rate in store and online; never state a flat
 * rate for Posso Pay.
 */

export const cardMachinesWhatOwnersSay: Guide = {
  slug: "card-machines-what-owners-say",
  title: "Card Machines: What Owners Say",
  metaDescription:
    "Card machines as UK small business owners actually discuss them — reader recommendations, the Zettle/PayPal warnings, fund holds, and when to graduate to quoted rates.",
  eyebrow: "Community research",
  h1: "Card machines: what small business owners actually say",
  h1Split: ["Card machines:", "what small business owners actually say"],
  standfirst:
    "The card machine threads are the liveliest in UK small-business forums — a barber's town losing trade to cash-only, a potter picking a reader for her first market, three separate warnings about one provider, and a sales rep openly pitching mid-thread. We read them all; every one is linked at the bottom.",
  highlights: [
    "UK owner threads, including the warnings — all sources linked",
    "The reader-versus-quoted-rates decision, as owners describe it",
    "Integrated payments through Posso Pay when you outgrow the reader",
  ],
  breadcrumb: "Card Machines — Owners' View",
  quickAnswer:
    "For a stall, a barber's chair or a first market, the threads' consensus is a flat-rate reader — SumUp and Square are named as the main contenders, with no monthly fee and nothing to cancel. The warnings cluster around two things: platform risk (three threads warn against PayPal/Zettle, and a Square thread describes how risky held funds feel once real money flows) and rate creep — one owner calls their 0.9% flat fee poor value at volume. The graduation point: when card turnover is steady, quoted merchant rates beat any flat rate, and the machine must integrate with your till.",
  sections: [
    {
      kind: "prose",
      kicker: "How this page was made",
      heading: "Where this comes from",
      paragraphs: [
        "Almost all of these threads are r/smallbusinessuk: what-card-machine-is-best, a new ceramicist choosing her first reader, the barber whose town is losing customers to cash-only, food traders comparing machines, and two switching threads from owners shopping their rates around. Alongside them: three PayPal/Zettle warning threads and the Square fund-hold thread from r/smallbusiness. All linked at the bottom; last reviewed 24 August 2026.",
        "One reply deserves special mention as a health warning for the whole genre: in a thread asking for processor recommendations, a commenter introduces herself as a Dojo consultant offering bespoke rates. To her credit she is open about it — much of the sales activity in these threads is not. It is the clearest possible reminder that card-machine advice online is saturated with people paid to give it, which is why every thread here is linked for you to read with the register in view.",
      ],
    },
    {
      kind: "features",
      kicker: "The themes",
      heading: "What UK owners keep telling each other",
      intro:
        "Four consistent messages, from the market stall to the multi-terminal counter.",
      items: [
        {
          title: "Start with a flat-rate reader — the threads are unanimous",
          body: "For the potter heading to her first market, the barber finally taking card, the food trader starting from home: the answer every thread converges on is a flat-rate reader, with SumUp and Square named as the main contenders and Zettle and myPOS as alternatives. The logic is sound — no monthly fee, no contract, nothing to cancel if the venture stalls, and the percentage only bites when money actually moves. We sell card machines and we agree: at low, irregular volume, a reader is the right first machine.",
        },
        {
          title: "The Zettle/PayPal warnings are loud enough to be a theme",
          body: "Three separate threads warn about the same provider family. One is titled, in full, 'Under no circumstance get PayPal POS' — its author was drawn in by low fees and a decent product, then hit trouble after registering the business account. Another describes inventory and sales records scrambling. A third is simply titled 'very much NOT recommended'. The pattern owners describe is not the hardware — it is being one small account inside a very large platform when something goes wrong, with support to match.",
        },
        {
          title: "Held funds are the risk nobody prices in",
          body: "The Square warning thread makes the general point better than any of the specific ones: the writer found the platform convenient to start, then describes how risky it became to rely on once real money was involved. Flat-rate platforms run automated risk systems, and a sudden spike in takings — a good festival weekend, a viral day — can look like fraud and freeze a payout. For pocket-money volume that is an annoyance; when the frozen fortnight is your stock money, it is existential. This, more than the percentage, is the argument for graduating to a proper merchant relationship.",
        },
        {
          title: "At volume, the rate is negotiable — and integration is the tiebreak",
          body: "The switching threads show owners doing it right: quoting their turnover around and watching providers beat each other — one reports a bank-backed offer that comfortably undercut their old processor; another found the widely advertised names quoting higher than expected once the conversation got specific. And one owner names the constraint that decides everything: a till that only syncs with certain machines. “they have a 0.9% flat fee which is pretty crap”, writes an owner locked to one of them — the rate and the integration have to be solved together, or the cheap machine retypes every transaction into your till by hand.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "What the threads put on the table",
      paragraphs: [
        "Real figures and reports from the linked threads: a 0.9% flat fee described by its own holder as poor value; headline reader rates dismissed as beatable — one reply lists Zettle, SumUp and Dojo as all able to beat the rates the poster had been offered; a bank-backed quote reported as comfortably beating an established processor; Dojo described in one thread as popular with no contracts and in another as quoting higher than rivals with pushy follow-up — conflicting reports, both linked, decide for yourself. In Ireland, an owner warns the aggressive newcomer pricing comes with monthly fees to watch. The meta-lesson: nobody in these threads regrets getting three quotes; several regret getting one.",
        "Posso's own position, stated plainly: our card machines run through our Teya partnership, and processing runs through Posso Pay, quoted on your actual card turnover — deliberately no flat rate to print, because a £4.50-average dessert counter and a £30-average restaurant should not pay the same structure. The same rate applies in store and on your online ordering, and the machines integrate natively with the till — amounts push from the basket, so nothing is retyped and card-machine totals reconcile themselves. Bring us the best quote from your rate-shopping and we will tell you honestly whether we beat it at your volume; that conversation, per the threads, is the one that saves the most money.",
      ],
    },
    {
      kind: "prose",
      kicker: "Our stake",
      heading: "Where Posso fits — and where the reader keeps winning",
      paragraphs: [
        "We fit at the graduation point the threads describe: steady card turnover, a till that the machine must talk to, and takings large enough that held funds would hurt. Integrated payments through Posso Pay mean the machine, the till, the kiosk and your online ordering all settle through one relationship with a human on the phone Monday to Friday, 9am to 9:30pm — which is the specific thing the platform-risk threads found missing when it mattered.",
        "And where we are not the answer, one more time, because the threads are right: the potter at her first market, the barber taking twenty cards a week, the food trader testing a concept — buy a flat-rate reader, pay no monthly fee, and come back when the queue is steady. The honest boundary is volume and integration: below it the reader wins, above it the quoted rate and the native till link win, and any vendor who tells you otherwise in a forum thread is probably named Gemma and works for one of them.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/smallbusinessuk — What card machine is the best? (2026)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1ll55iz/what_card_machine_is_the_best",
        },
        {
          label: "r/smallbusinessuk — Best card reader for a just-started business (2026)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1ohk8qq/best_card_reader_for_just_started_business",
        },
        {
          label: "r/smallbusinessuk — Cheapest card machine for a barber? (2026)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1rznfd0/cheapest_card_machine_for_a_barber",
        },
        {
          label: "r/smallbusinessuk — Food traders: what card machine? (2026)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1qjylbj/food_traders_what_card_machine_are_you_using",
        },
        {
          label: "r/smallbusiness — Best cheapest portable card provider, UK (2023)",
          href: "https://www.reddit.com/r/smallbusiness/comments/14fxns2/best_cheapest_portable_card_payment_provider_uk",
        },
        {
          label: "r/smallbusinessuk — Any card machines with a good experience? (2026)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1p2be1g/any_card_machines_people_have_had_a_good",
        },
        {
          label: "r/smallbusinessuk — Recommendations for a new card machine provider (2026)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1tcfu7k/looking_for_recommendations_on_a_new_card_machine",
        },
        {
          label: "r/paypal — 'Under no circumstance get PayPal POS' (2026)",
          href: "https://www.reddit.com/r/paypal/comments/1ntk0id/under_no_circumstance_get_paypal_pos",
        },
        {
          label: "r/smallbusiness — 'SMALL BUSINESS DONT USE SQUARE' (fund holds) (2026)",
          href: "https://www.reddit.com/r/smallbusiness/comments/1poh1h6/small_business_dont_use_square",
        },
      ],
    },
    {
      kind: "links",
      heading: "Card payment solutions",
      items: [
        { label: "Card machines", href: "/credit-card-machines" },
        { label: "Free card machine", href: "/free-card-machine" },
        { label: "PDQ machines for small business", href: "/pdq-machine-small-business" },
        { label: "Card machines for the self-employed", href: "/self-employed-card-machine" },
        { label: "EPOS monthly fees — owners' view", href: "/epos-system-monthly-fee" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "Card machines — what owners actually ask",
  faqs: [
    {
      q: "What is the best card machine for a small business in the UK?",
      a: "The threads answer by volume, and it is the right frame. Irregular or low takings: a flat-rate reader — SumUp and Square are the names the threads call the main contenders — with no monthly fee and nothing to cancel. Steady takings with a till: a machine that integrates with the till on a rate quoted for your turnover, because at volume the quoted rate beats any flat percentage and the integration ends retyping. The wrong answer at either end is the other end's right answer.",
    },
    {
      q: "Is Zettle / PayPal POS safe to use?",
      a: "Three separate threads warn against it — one titled 'Under no circumstance get PayPal POS', one describing scrambled sales records, one simply 'NOT recommended'. Plenty of businesses use it without incident, and the hardware itself is decent; what the warnings describe is being a small account inside a huge platform when something goes wrong. Read the threads (linked above) and weigh whether that support experience is acceptable for the money your business handles.",
    },
    {
      q: "Why do card providers hold or freeze funds?",
      a: "Automated risk systems. A spike in takings, a change in pattern, a burst of refunds — anything unusual can trigger a hold while a machine, and eventually a human, reviews it. The Square warning thread describes exactly how that feels once real money is involved. Flat-rate platforms hold more readily because they onboard without knowing your business; a quoted merchant relationship, where a provider has assessed your turnover upfront, holds less and answers the phone faster when it does.",
    },
    {
      q: "When should I switch from a card reader to an integrated machine?",
      a: "Watch for three signals from the threads: the monthly card bill is large enough that a rate conversation would save real money; someone retypes every card amount into the till (the '0.9% and my POS only syncs with three providers' problem); or a held payout would genuinely hurt. Any one is the cue to get quotes. Posso machines integrate natively with the till and Posso Pay quotes on your turnover — bring your current statement and we will do the comparison in the open.",
    },
    {
      q: "What rates should I expect to pay?",
      a: "The threads' honest answer: it depends on volume, and everything is more negotiable than the website suggests. One owner calls their 0.9% flat fee poor value; another lists three providers able to beat a quoted rate; a third found a bank-backed offer undercutting an established name. Rather than a universal number, use the threads' method — take your real monthly card turnover to three providers, us included, and compare total monthly cost. Posso Pay is quoted on turnover with the same rate in store and online.",
    },
    {
      q: "Do card machine recommendations in forums come from real owners?",
      a: "Some do — and some come from people like the Dojo consultant who introduced herself mid-thread offering bespoke rates. She was upfront; much of the industry's forum presence is not. Treat named-provider praise in comment sections as unverified, weight the negative experience reports more heavily (nobody is paid to complain), and read the threads yourself — which is why every one this page uses is linked above.",
    },
  ],
};
