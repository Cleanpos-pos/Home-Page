import type { Guide } from "@/lib/guides";

/**
 * Guide-layer page (gap-analysis batch, August 2026). Double-verified demand:
 * "best epos for bakery uk reddit" scored P1 (9) in the SERP scan, and the
 * plain "epos for bakery uk" SERP has zero strong competitors. Thread
 * references are from the harvested corpus (r/smallbusiness bakery thread,
 * r/restaurant cafe-bakery stack thread) — linked on the page.
 *
 * Verified Posso claims used: £499 + VAT incl. menu build/training; software
 * from £25 + VAT/month; kiosks £699 + VAT; bag/box label printing; CMS with
 * 2,000 emails/month; Posso Pay quoted on turnover; support Mon–Fri 9–9:30.
 * ⚠️ NOT claimed (confirm before adding): cake-order deposits/balance-due
 * mechanics, Natasha's Law ingredient-label printing, wholesale account
 * invoicing. VAT handling is framed as buyer advice, not a Posso mechanic,
 * consistent with the cafe guide's pending-claims list.
 */

export const posForBakery: Guide = {
  slug: "pos-for-bakery",
  title: "POS for Bakery",
  metaDescription:
    "POS for bakery — buyer's guide to bakery till systems. Morning rush speed, hot and cold VAT, cake orders, Natasha's Law and what owners say. From £499 + VAT.",
  eyebrow: "Buyer's guide",
  h1: "POS for bakery and cake shop",
  h1Split: ["POS for", "bakery and cake shop"],
  standfirst:
    "A bakery till serves three businesses at once: a café-speed counter at 8am, made-to-order cakes with collection dates, and — for many — wholesale trays going out the back door. Most POS systems are built for exactly one of those. Here is what to look for, and what bakery owners say in the forums.",
  highlights: [
    "The features that matter in a bakery specifically",
    "Hot, cold, eat-in: the VAT trap explained",
    "Bakery POS systems from £499 + VAT",
  ],
  breadcrumb: "POS for Bakery",
  quickAnswer:
    "A bakery POS has to do three jobs: clear a morning queue at café speed with priced options one tap deep, get hot/cold and eat-in/takeaway VAT right at the till rather than in a spreadsheet at year end, and carry made-to-order cakes as proper orders with collection details instead of notes on a pad. Owners in the forums default to Square for the counter and then bolt on separate tools for production — the gap to close is the till and the order book living in one system. Complete systems from £499 + VAT with software from £25 + VAT a month.",
  sections: [
    {
      kind: "prose",
      heading: "What makes a bakery different",
      paragraphs: [
        "Bakery buying advice usually borrows from cafés — fair for the morning rush, wrong for everything else. The counter side genuinely is café economics: high transaction counts at low ticket values, concentrated into a window before 10am, with a queue that clears or costs you regulars. Taps per transaction matter, and anything that needs a second screen for a bag of rolls will bleed minutes all morning.",
        "But two things make the bakery till its own problem. The first is VAT: baked goods are the most VAT-awkward products in UK retail. A cold takeaway sausage roll is zero-rated; the same roll hot is standard-rated; eat it at a table and it is standard-rated either way — the rules the pasty-tax row was fought over. If the till does not capture hot/cold and eat-in/takeaway at the point of sale, your VAT return is being reconstructed from guesswork, and an inspection becomes an expensive conversation.",
        "The second is that a bakery sells things that do not exist yet. Celebration cakes, weekend pre-orders, a tray of pastries for Saturday's party — orders taken today for collection Thursday, often with money down. On most tills these live on a paper pad by the phone, which is how double-booked Saturdays and forgotten inscriptions happen. And behind all of it sits production: owners in the software-stack threads end up running separate tools for recipes, batch planning and wholesale, because the till knows nothing about tomorrow's bake.",
      ],
    },
    {
      kind: "features",
      heading: "What to look for in a bakery POS",
      items: [
        {
          title: "Morning-rush speed, measured in taps",
          body: "Time a real transaction on the demo: two coffees, three pastries — one heated — a loaf, card payment. Count the taps and imagine the queue behind it. The most-ordered twenty items should sit on one home screen, with heated/cold and eat-in/takeaway one tap each, not buried in menus. A bakery counter at 8:30 is no place for a category tree.",
        },
        {
          title: "VAT captured at the till, not reconstructed later",
          body: "Demand that hot versus cold and eat-in versus takeaway change the VAT treatment on the order automatically, and that reporting splits it cleanly for your accountant. This is the single most bakery-specific requirement on the list — plenty of tills 'support VAT rates' in general and still cannot tell a warm pasty from a cold one. Make the vendor show you the pasty case specifically.",
        },
        {
          title: "Cake orders as orders, not notes",
          body: "Made-to-order items need a proper order record: collection date and time, customer contact, the inscription spelled correctly, and what has been paid so far. Whatever system you choose, ask to see the full life of a celebration-cake order on screen — taken, amended, collected — and where the kitchen sees what to bake for Thursday. If the answer involves a paper diary, the till has failed the bakery test.",
        },
        {
          title: "Allergen information where staff can see it",
          body: "Since Natasha's Law, anything packed before sale needs full ingredient and allergen labelling, and counter staff get asked about allergens a dozen times a day. The system should hold allergen data per product so an answer is a glance, not a shout to the kitchen — and if you pre-pack, ask any vendor exactly how labelling will work in practice. Getting this wrong is not an operational nuisance; it is the one genuinely dangerous mistake a bakery counter can make.",
        },
        {
          title: "Sellout and waste, tracked from 5am",
          body: "Bakery stock is unlike shop stock: it is made fresh, sells out by lunch or becomes waste by close. Look for reporting that shows what sold out early and what got binned, by day of week — that is the report that tunes tomorrow's bake, and over a year it is worth more than any single feature. If the reporting cannot answer 'how many white loaves do we waste on Tuesdays', it is retail reporting wearing an apron.",
        },
        {
          title: "Room for the counter to grow",
          body: "Pre-orders through your own online ordering with collection slots move the Saturday-morning queue onto phones. A kiosk suits high-volume counters at weekends. Loyalty matters more than average — bakery customers can visit daily. None of these should require replacing the till later; they should be switches on the system you buy now.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The threads",
      heading: "What bakery owners say in the forums",
      paragraphs: [
        "The main bakery POS thread on r/smallbusiness lands where small-counter threads usually land: Square, recommended for price and ease — one commenter's comparison found it cheaper than Toast, Clover and TouchBistro, and a developer praised how easily it wires into an online store. The same thread carries a warning worth keeping: the delivery marketplaces 'bring you no profit', in one owner's blunt words. For a market-stall bakery or a tiny counter, that Square consensus is honest advice and we would not argue with it.",
        "The more interesting thread is the café-bakery software stack discussion on r/restaurant, where the answer to 'what should I run?' turns out to be a shopping list: one tool for the till, Xero for the books, a bakery production tool for recipes and batch planning, maybe another for wholesale. That is the real state of bakery software — the till is only ever one piece, and the owners gluing four systems together are telling you where the friction lives. Choose the till that carries the most of that list natively for your kind of bakery, and links cleanly to the rest. Both threads are linked below; note they are American, so the VAT point above appears in neither — UK bakeries carry that extra requirement on top.",
      ],
    },
    {
      kind: "prose",
      heading: "The Posso approach to bakery POS",
      paragraphs: [
        "Posso is a UK hospitality EPOS, supported from Leicester, with 500+ UK businesses on the system. For a bakery counter, the relevant parts are touchscreen ordering with priced options one tap deep and the most-sold items on the home screen; eat-in, takeaway and collection order types; label printing for bags and boxes so the right order leaves with the right customer; and your customer list in the built-in CMS with 2,000 marketing emails a month — which for a bakery means birthday and Christmas-order campaigns to people who already buy from you.",
        "Pre-orders run through your own branded online ordering with collection slots, so the Saturday queue can order on Thursday night. Self-order kiosks start at £699 + VAT when the weekend counter justifies one. Card processing runs through Posso Pay, quoted on your turnover — at a bakery's average ticket, that quote matters more than any hardware price, so bring your real numbers.",
        "Systems start at £499 + VAT including the terminal, menu build and staff training, with software from £25 + VAT a month, a 2-year warranty and UK phone support Monday to Friday, 9am to 9:30pm. On the bakery-specific workflows — how your cake orders, VAT setup and any labelling should run — bring your messiest real week to the demo and make us show you, item by item. That is the standard we tell you to hold every vendor to, so it would be strange to exempt ourselves.",
      ],
    },
    {
      kind: "prose",
      heading: "Where a bakery should look elsewhere",
      paragraphs: [
        "If production is the core of your business — recipe costing, batch scheduling, ingredient purchasing across a wholesale book — you need a bakery production system alongside any till, and the stack thread's owners are right to run dedicated tools for it. A till that claims to be your production planner is overreaching.",
        "If you are a farmers-market stall with a cash box and a card reader, stay with the reader — the Square consensus in the bakery thread is correct at that scale, and a full EPOS is solving problems you do not have yet. Come back when the queue is daily.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/smallbusiness — Best POS for a bakery (2020)",
          href: "https://www.reddit.com/r/smallbusiness/comments/jnrsja/best_pos_for_a_bakery",
        },
        {
          label: "r/restaurant — Café-bakery software stack advice (2025)",
          href: "https://www.reddit.com/r/restaurant/comments/1jk8d9w/cafe_bakery_software_stack_advise",
        },
      ],
    },
    {
      kind: "links",
      heading: "Explore bakery POS solutions",
      items: [
        { label: "POS for café", href: "/pos-for-cafe" },
        { label: "Dessert & bubble tea POS", href: "/pos-for-dessert-shop" },
        { label: "Self-order kiosks", href: "/self-order-kiosks" },
        { label: "Online ordering", href: "/online-ordering" },
        { label: "Card machines", href: "/credit-card-machines" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "POS for bakery — frequently asked questions",
  faqs: [
    {
      q: "How much does a bakery POS system cost in the UK?",
      a: "A complete Posso system is £499 + VAT including the touchscreen terminal, menu build and staff training, with software from £25 + VAT a month and finance from £24.92 a week. Self-order kiosks start at £699 + VAT. At a bakery's low average ticket, card processing is usually the bigger ongoing number — Posso Pay quotes on your real turnover, so compare providers on your actual takings, not a £30 example basket.",
    },
    {
      q: "How should a bakery till handle VAT on hot and cold food?",
      a: "At the point of sale, automatically. Cold takeaway baked goods are generally zero-rated; hot items and anything eaten in are standard-rated — the distinctions the pasty-tax row made famous. The till should capture hot/cold and eat-in/takeaway as one-tap choices that change the VAT treatment on the order, and reporting should hand your accountant a clean split. If a vendor cannot demo the warm-pasty case convincingly, that is your answer.",
    },
    {
      q: "Can a POS manage celebration cake orders and collections?",
      a: "It should — as real orders with collection date and time, customer contact, the inscription, and payment status, visible to whoever is baking Thursday's list, not as notes in a diary. Ask any vendor, us included, to walk the full life of a cake order on screen at the demo: taken, amended, paid, collected. The paper-pad workflow is where double-booked Saturdays come from.",
    },
    {
      q: "What does Natasha's Law mean for my bakery till?",
      a: "Anything packed before the customer orders it — prepacked for direct sale — must carry a full ingredient list with allergens emphasised. Day to day it also means staff get allergen questions constantly, so the till should hold allergen information per product where a glance answers the question. If you pre-pack sandwiches, rolls or boxed cakes, make labelling workflow a named item on your vendor checklist and ask exactly how it runs in practice.",
    },
    {
      q: "Is Square good enough for a bakery?",
      a: "The bakery threads say yes for small and simple counters, and we agree at that scale — it is cheap to start and easy to run, which is why it is the default answer. The bakery-specific gaps appear as you grow: UK hot/cold VAT handling at the till, cake orders as proper records, sellout-and-waste reporting, and the production side the stack thread's owners bolt on separately. When those start costing you mornings, that is the moment to compare a hospitality EPOS on your real week.",
    },
    {
      q: "Do bakeries need a kiosk or online pre-orders?",
      a: "Pre-orders first: collection slots through your own online ordering move the Saturday queue onto Thursday-night phones, which suits how bakery customers actually plan. A kiosk earns its £699 + VAT only when a high-volume counter queues daily — same rule as cafés. Loyalty is the sleeper feature for bakeries: customers who can visit daily are exactly who the built-in CMS and its 2,000 monthly emails are for.",
    },
  ],
};
