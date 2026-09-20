import type { Guide } from "@/lib/guides";

/**
 * Community-research page (SERP-gap batch, August 2026). The highest-scoring
 * SERP gap in the whole scan ("epos system monthly fee" + forum/reddit
 * modifiers). Every figure is from a linked thread, in its original currency,
 * or is Posso's own published number.
 *
 * CONSISTENCY RULE (user, 2026-08-24): Posso's software fee is from
 * £25 + VAT a month — print it as "from £25 + VAT a month" and keep every
 * pricing mention consistent with the corrected /epos-pricing-uk.
 */

export const eposSystemMonthlyFee: Guide = {
  slug: "epos-system-monthly-fee",
  title: "EPOS Monthly Fees",
  metaDescription:
    "What operators report actually paying for EPOS each month — real figures from owner threads, the fee traps they warn about, and Posso's own costs stated plainly.",
  eyebrow: "Community research",
  h1: "EPOS monthly fees: what operators actually pay",
  h1Split: ["EPOS monthly fees:", "what operators actually pay"],
  standfirst:
    "Vendor pages print 'from' prices. Owner forums print invoices. We read the threads where operators compare what they actually pay each month — including the complaints — and put the figures in one place, with every thread linked at the bottom.",
  highlights: [
    "Real monthly figures from owner threads, sources linked",
    "The fee traps owners warn each other about",
    "Posso's own costs stated the same way we ask others to",
  ],
  breadcrumb: "EPOS Monthly Fees",
  quickAnswer:
    "In the owner threads, US operators report roughly $120+ per station per month for mainstream cloud POS, with small venues on $40–50 tiers and one owner paying $483 a month for two terminals and an iPad — a figure the thread agreed was too high. The same threads note UK and European pricing runs meaningfully lower. The traps owners flag are not the headline fee: they are inactivity charges, cancellation friction, per-station multipliers and card-rate lock-in. Compare systems on total monthly cost at your volume — software, integrations and card fees together. For UK calibration: Posso's software fee is from £25 + VAT a month, stated before you sign.",
  sections: [
    {
      kind: "prose",
      kicker: "How this page was made",
      heading: "Where this comes from",
      paragraphs: [
        "These figures come from the threads where operators answer each other's what-do-you-pay questions: the POS-costs threads on r/restaurateur and r/restaurantowners, the UK EPOS advice threads on r/POS and r/smallbusinessuk, and the complaint threads — including a thirty-comment account of one UK provider's fees and cancellation process. All linked at the bottom; last reviewed 24 August 2026.",
        "Two honesty flags before the numbers. First, the thread literally titled 'How much are you paying monthly for POS in UK?' was started by someone building a POS product and researching prices — even the peer-to-peer threads have vendors in them, which is exactly why this page links its sources. Second, there is a whole thread asking whether one provider's glowing review-site scores are even real. Owners have learned to distrust polished review pages; the unpolished threads, with their visible axes to grind, are where the real invoices surface.",
      ],
    },
    {
      kind: "features",
      kicker: "The themes",
      heading: "What operators report — and what stings them",
      intro:
        "Four patterns repeat across every costs thread, whatever the country.",
      items: [
        {
          title: "The US baseline is brutal; the UK runs lower",
          body: "The r/restaurateur costs thread lays out the American market: full installs at $7–8,000, mainstream cloud POS at $120-plus per station per month, smaller venues on $40–50 tiers. In r/restaurantowners, one operator pays $483 a month for two terminals and a tableside iPad — “This seems ridiculously high!!” is their own verdict, and the thread agrees. The same discussions note UK and European pricing runs meaningfully lower. The transferable lesson is the shape: it is never one fee — it is a per-station multiplier, and it compounds as you grow.",
        },
        {
          title: "The fees that hurt are the ones off the price list",
          body: "The angriest thread in the set is about a UK provider: owners describe being charged for services they say they never activated, and finding cancellation financially difficult. Whatever the full story, the pattern owners warn about is consistent across threads — inactivity fees, add-ons that auto-bill, support tiers that appear on the first invoice, and exit costs discovered only at exit. Before signing anything, the threads' advice is to ask for every possible line item in writing, and to read the cancellation clause before the feature list.",
        },
        {
          title: "Card processing is the fee that outgrows the software fee",
          body: "One UK owner in the threads is offered striking card rates — 0.6% on debit, 0.8% on credit — and then discovers the catch: those terminals integrate with no EPOS they can use. That is the trade in miniature. At any real volume, card fees dwarf software fees, so providers bundle attractive-looking rates with lock-in, or attractive software with mediocre rates. Price the two together, on your actual card turnover, and treat any rate you cannot take with you as part of the system's exit cost.",
        },
        {
          title: "The £30,000 till era is gone — the lock-in survived it",
          body: "For perspective, one thread veteran recalls paying $33,000 for five terminals in 2001, plus a support contract of $2,500 a year. Hardware prices collapsed since; the instinct to lock customers in did not. Owners in the UK threads gravitate toward systems that leave them in control — one shortlists a lesser-known till precisely because it does not dictate the card processor, and another warns against being locked into whatever processor the till vendor picked. Ownership of your hardware, your data and your card relationship is worth a modest monthly fee; captivity is not.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "The figures in one place — including ours",
      paragraphs: [
        "From the threads, in their original currencies: $120+ per station per month for mainstream US cloud POS; $40–50 a month for small-venue tiers; $483 a month for a two-terminal-plus-iPad setup one owner considered excessive; $7–8,000 for full multi-station installs; $15–20 a month claimed for bare-bones back-office tools; a 2001 benchmark of $33,000 for five terminals plus $2,500 a year in support; and in the UK, a card-rate offer of 0.6% debit and 0.8% credit that failed on integration. None of these are our prices — they are what owners report, which is the number vendor pages never show you.",
        "Posso's own costs, stated the way we ask every vendor to state theirs: the system is £499 + VAT up front — terminal, kitchen printer, cash drawer, receipt printer, menu build, training and a 2-year warranty — or finance from £24.92 a week. Yes, there is a monthly software fee, and here is the number: from £25 + VAT a month, covering the core system, updates and cloud features, with your exact figure confirmed on your quote before you sign. The other fixed charge is £45 a month for Just Eat, Deliveroo and Uber Eats integration, only if you use it, plus 30p per delivery through your own drivers. Card processing runs through Posso Pay and is quoted on your card turnover — the same rate in store and online. Ask us for the total monthly figure at your volume and we will put it in writing; that is the comparison the threads teach you to demand.",
      ],
    },
    {
      kind: "table",
      heading: "The fee structures the threads describe",
      intro:
        "Four pricing models cover almost every system owners discuss. Each hides its cost somewhere different.",
      caption:
        "Figures as reported in the linked threads, in original currencies. Last checked 24 August 2026.",
      columns: ["Model", "What owners report", "Where the cost hides"],
      firstColIsHeader: true,
      rows: [
        [
          "Flat-rate reader (Square, SumUp, Zettle)",
          "Free or cheap to start, no monthly fee, loved by stalls and startups; owners report the percentage stings as card volume grows.",
          "In the card rate — and in fund holds and account freezes owners describe when 'real money' starts flowing.",
        ],
        [
          "Subscription cloud POS",
          "$120+ per station per month in the US; $40–50 small-venue tiers; the $483/month two-terminal example the thread called excessive. UK pricing reported lower.",
          "In the per-station multiplier and the add-on modules — the quoted tier is rarely the running tier.",
        ],
        [
          "'Free' or hardware-only POS",
          "No software fee on paper; owners report paying through processing rates they cannot shop around, plus fees for services they say they never switched on.",
          "In the card rate, the lock-in, and the exit clause. The thirty-comment complaint thread is about this model.",
        ],
        [
          "Buy the hardware, modest monthly software fee",
          "The structure UK owners in the threads keep circling back to: own the kit, pay a predictable software fee, keep control of the card relationship.",
          "In whether the 'modest' fee is actually confirmed in writing. This is Posso's model — from £25 + VAT a month, on the quote before you sign.",
        ],
      ],
    },
    {
      kind: "prose",
      kicker: "Our stake",
      heading: "Where Posso fits — and where it doesn't",
      paragraphs: [
        "We built this page because the thread consensus is our argument: own your hardware (£499 + VAT, yours), pay a predictable monthly software fee you saw in writing before signing, and keep your card processing quoted on your real turnover rather than locked to a rate you never chose. If a competitor puts a sharper total in writing at your volume, take it to us — pricing conversations with real numbers on the table are the ones we win most often.",
        "Where we are not the answer, in the threads' own spirit: a market stall or one-person operation taking a few hundred pounds a week should use a flat-rate reader and pay no monthly fee at all — the threads are right, and we say the same on our other pages. If you want zero ongoing costs forever, that genuinely exists only with an old-style outright purchase and no support behind it; the threads' 2001 veteran can tell you how that pricing ends. And if you are outside the UK, our numbers are not your numbers — read your local threads the way we read these.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/POS — How much are you paying monthly for POS in the UK? (2026)",
          href: "https://www.reddit.com/r/POS/comments/1lzhxy4/how_much_are_you_paying_monthly_for_pos_in_uk",
        },
        {
          label: "r/restaurateur — POS system costs (2021)",
          href: "https://www.reddit.com/r/restaurateur/comments/lex90b/pos_system_costs",
        },
        {
          label: "r/restaurantowners — What are your POS monthly fees? (2024)",
          href: "https://www.reddit.com/r/restaurantowners/comments/1g9vkrq/what_are_you_pos_monthly_fees",
        },
        {
          label: "r/POS — 'Epos Now is one of the worst companies I have come across' (2024)",
          href: "https://www.reddit.com/r/POS/comments/1fx7ec6/epos_now_is_one_of_the_worst_companies_i_have",
        },
        {
          label: "r/POS — Please help! Looking for the right EPOS (UK) (2025)",
          href: "https://www.reddit.com/r/POS/comments/1ixyxlr/please_help_looking_for_the_right_epos",
        },
        {
          label: "r/POS — UK-based POS using my own hardware (2025)",
          href: "https://www.reddit.com/r/POS/comments/1jwmecf/advice_and_suggestions_uk_based_pos_using_my_own",
        },
        {
          label: "r/smallbusinessuk — POS for a brick-and-mortar shop (2024)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1dnedha/pos_system_for_a_brick_and_mortar_shop",
        },
        {
          label: "r/letworldtalk — 'Epos Now reviews look fake… are they even real?' (2026)",
          href: "https://www.reddit.com/r/letworldtalk/comments/1p8wffc/epos_now_reviews_look_fake_are_they_even_real",
        },
      ],
    },
    {
      kind: "links",
      heading: "Pricing pages worth comparing",
      items: [
        { label: "EPOS pricing — the full price list", href: "/epos-pricing-uk" },
        { label: "Buy an EPOS system outright", href: "/buy-epos-system-uk" },
        { label: "Cheap EPOS software — honest limits", href: "/cheap-epos-software" },
        { label: "Epos Now alternative", href: "/epos-now-alternative" },
        { label: "Card machines", href: "/credit-card-machines" },
        { label: "Finance from £24.92/week", href: "/finance" },
      ],
    },
  ],
  faqHeading: "EPOS monthly fees — what people actually ask",
  faqs: [
    {
      q: "What is a normal monthly fee for an EPOS system in the UK?",
      a: "The owner threads put mainstream US cloud POS at $120+ per station per month with small venues on $40–50 tiers, and note UK pricing runs lower. In the UK the honest answer is that the software fee is only part of the monthly figure — integrations, card processing and add-ons decide the real total. Get every provider, us included, to state the all-in monthly cost at your volume in writing; that single discipline catches most of the traps the threads describe.",
    },
    {
      q: "Does Posso charge a monthly software fee?",
      a: "Yes — from £25 + VAT a month, covering the core system, software updates and cloud features, with your exact figure confirmed on your quote. The hardware is bought outright from £499 + VAT, marketplace integration is £45 a month only if used, own-driver deliveries are 30p each, and card processing is quoted on your turnover. We would rather state that plainly than be the provider whose fees you discover on the first invoice — that provider has a thirty-comment thread about them, linked above.",
    },
    {
      q: "What hidden fees should I check for before signing?",
      a: "The threads' collective checklist: inactivity or non-usage fees, services that bill whether or not you activated them, per-station charges that multiply the headline price, support tiers that turn out to be mandatory, card-rate lock-in to the vendor's chosen processor, and — the one owners discover last — cancellation and exit costs. Ask for every possible charge as a written line item, and read the cancellation clause before you compare features.",
    },
    {
      q: "Is a 'free' POS system really free?",
      a: "The threads say what our cheap-EPOS page says: no. Free-tier systems earn through card processing you cannot shop around, paid add-ons for essentials, and in the worst reports, fees for services owners say they never switched on. For a very small operation a flat-rate reader genuinely is the cheapest route — the threads and we agree there. For a busy counter, 'free' is usually the most expensive structure on a 3-year total.",
    },
    {
      q: "Why do American threads quote such high monthly fees?",
      a: "Different market: US cloud POS pricing clusters far higher per station, and the threads themselves note UK and European pricing is meaningfully lower. So read the $483-a-month complaints as a warning about structure rather than a UK forecast — the per-station multiplier, the add-on creep and the processing lock-in transfer across the Atlantic even though the dollar figures do not.",
    },
    {
      q: "Should I pay monthly or buy my EPOS outright?",
      a: "The structure UK owners in the threads keep arriving at is the split: buy the hardware outright so it is yours, pay a modest monthly fee for the software that has to keep evolving, and never accept card-rate captivity as part of the deal. That is the model we run — £499 + VAT for the kit, software from £25 + VAT a month, processing quoted on turnover. Pure rental means paying forever; pure purchase with no support behind it is how the 2001 veteran in the thread ended up telling war stories.",
    },
  ],
};
