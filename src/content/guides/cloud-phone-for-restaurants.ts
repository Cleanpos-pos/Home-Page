import type { Guide } from "@/lib/guides";

/**
 * High-intent offer page in the guide format (August 2026). Product facts are
 * from the Jola Phone platform sheet (hosted Broadsoft system Posso supplies);
 * thread references from a live SERP check 2026-08-24 — all linked in "Read
 * the threads". PSTN switch-off date (end of January 2027) corroborated by
 * the linked r/UKBroadband thread.
 *
 * VERIFIED by owner 2026-08-24: unlimited internet + 2-line cloud phone at
 * £55 + VAT/month, INCLUDING the desk handset and inclusive UK calls.
 * Also owner-confirmed 2026-08-24: three-year agreement; standard lead time
 * five days. Support hours stated are Posso's (Mon–Fri 9am–9:30pm), NOT the
 * platform's wholesale 24/7 line.
 */

export const cloudPhoneForRestaurants: Guide = {
  slug: "cloud-phone-for-restaurants",
  title: "Cloud Phones for Restaurants",
  metaDescription:
    "Cloud phone for restaurants: two lines so the order line is never engaged. Unlimited internet, handset and UK calls included, £55 + VAT a month.",
  eyebrow: "Phones & broadband",
  h1: "Cloud phones for restaurants: two lines, one bill, no engaged tone",
  h1Split: ["Cloud phones for restaurants:", "two lines, one bill, no engaged tone"],
  standfirst:
    "A restaurant phone has one job: taking orders. When it's engaged on a Friday night, the order goes to a competitor — and from the end of January 2027, the analogue line it runs on stops working anyway. Here is the cloud version, priced plainly, with what owners in the forums say about making the switch.",
  highlights: [
    "Unlimited internet + two-line cloud phone, £55 + VAT — UK calls and handset included",
    "Keep your number — ported, and it moves premises with you",
    "Live in around five days, with an app on any phone — no wall box",
  ],
  breadcrumb: "Cloud Phones",
  quickAnswer:
    "For a restaurant or takeaway, the answer is a hosted cloud phone with two lines on your existing number, so a second caller rings through instead of hitting an engaged tone — plus unlimited business internet on the same bill, £55 + VAT a month from Posso, with the desk handset and UK calls included. Standard lead time is five days, on a three-year agreement — stated upfront, because the term is the clause to check with any supplier. Your current number ports across and stays yours even if you move premises. The deadline making this urgent is real: the UK analogue phone network switches off at the end of January 2027, and traditional landlines stop working with it.",
  sections: [
    {
      kind: "prose",
      kicker: "The problem",
      heading: "A restaurant phone is an order machine — and it's usually engaged",
      paragraphs: [
        "One restaurant owner in the forum threads puts it exactly: the phone exists to receive call-in orders — ninety-eight per cent of its use. Another explains keeping two numbers because customers would rather order by phone than on the website. That is the reality of a hospitality phone line: it is a sales channel, and every minute it rings engaged, someone with a menu open is dialling the next shop on the list. You never see the orders you lose this way, which is why the single analogue line survives in so many shops that would never tolerate a card machine being down.",
        "There is now also a deadline. The UK's analogue phone network — the PSTN — switches off at the end of January 2027, and as the forum threads on it spell out, analogue landlines simply stop working then. Every restaurant still on a traditional line has to move to a digital phone service; the only question is whether you move early on your own terms or late on someone else's. The threads also show what owners do in the meantime: bolt on app-based second numbers, run orders through personal mobiles, or rig up two handsets on a free service — and then complain about missed messages. There is a cleaner shape for this.",
      ],
    },
    {
      kind: "features",
      kicker: "What changes",
      heading: "What a cloud phone changes on a Friday night",
      intro:
        "The system is a hosted business phone platform — no box on the wall, no analogue lines — with the features that matter mapped to how a takeaway actually runs.",
      items: [
        {
          title: "Two lines, one number — the engaged tone disappears",
          body: "This is the headline job. With two lines on your number, a second caller rings through while the first order is being taken — to a second handset, or to the app on a mobile in the kitchen. Hunt groups and call waiting are built into the platform, so the order line behaves like a business, not a house phone. One owner in the threads was holding this together with two handsets on a free service that was being discontinued; this is that setup done properly.",
        },
        {
          title: "Keep the number your customers have memorised",
          body: "Your existing number ports onto the platform and stays yours — including if you move premises, even to a different town. Regulars, old menus, Google listings and a decade of fridge magnets keep working. You can also add numbers from any UK area code if you want a local presence somewhere new. An owner in the second-line thread describes exactly this: ported the number, plugged in two phones, done.",
        },
        {
          title: "Answer anywhere — the counter, the kitchen, the school run",
          body: "The system lives in an app as well as in desk handsets, so the same number rings on the counter phone and a mobile simultaneously, and a call in progress can move between them without hanging up. Closed on Monday but happy to take Tuesday's big order? Answer from wherever you are. One voicemail box covers everything, so there is no personal-mobile-versus-shop-phone confusion of the kind the threads are full of.",
        },
        {
          title: "The hold music can sell for you",
          body: "Music and messages on hold are built in — which for a takeaway means the thirty seconds a customer waits can say 'order online at your-site and skip the queue' instead of playing silence. An auto attendant can split bookings from orders before a human picks up. Small features, but they run every night without being reminded.",
        },
        {
          title: "Nothing on the wall, nothing to outgrow",
          body: "There is no phone system box on the premises and no capital outlay — handsets plug in wherever there is internet, and if you move, you unplug them and plug them in at the new place. Extensions are monthly: add one for a busy December, remove it in January. The platform runs on multiple data centres with automatic failover, which is more resilience than any single analogue line ever had.",
        },
        {
          title: "Room to grow when you do",
          body: "Call queues, call recording, and connectors into other software are bolt-ons you can switch on per extension when a second site or a busier phone demands them — and not pay for before then. The threads' multi-line restaurant setups with eight incoming lines are the same platform philosophy at bigger scale; you are buying the bottom rung of a ladder, not a dead end.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "The numbers",
      heading: "One bill: £55 + VAT a month",
      paragraphs: [
        "The Posso bundle is unlimited business broadband plus the two-line cloud phone for £55 + VAT a month, on one bill from one supplier — and the price includes the desk handset and inclusive UK calls, so the number you see is the number you pay. The whole thing is still itemised line by line on your written quote, the same discipline we tell you to demand for EPOS. There is no phone system to buy up front, the standard lead time is five days from order, and it is a three-year agreement — we put the term in the same sentence as the price because our own fees guide tells you to read the term before the feature list.",
        "For comparison, the threads show what the alternatives really cost: separate broadband and line rentals on two bills; app-based second numbers at around a tenner a month that one owner describes missing messages on; and the free routes that get discontinued under you — the two-line thread exists because a free service was being shut off. Cheap DIY VoIP providers also genuinely work — owners in the UK threads have run one happily for twenty years — and if you enjoy being your own telecoms engineer, that is a fair route. The bundle is for everyone who would rather it just worked, from the people who already look after the till.",
      ],
    },
    {
      kind: "prose",
      kicker: "Our stake",
      heading: "Where this fits — and where it doesn't",
      paragraphs: [
        "The reason to take phones and internet from your EPOS supplier is integration and one throat to choke: the same connection runs the till, the card machine, the kitchen screen and the phones; caller ID can pop the customer up on the Posso till as the phone rings; and AI phone ordering can catch the calls you miss or take orders after hours on the same number. When something misbehaves at 6pm on Friday, you call one number — ours, Monday to Friday 9am to 9:30pm — and nobody can blame the other supplier.",
        "Where this is not the answer, in the threads' own spirit: a one-person business working from home is well served by an app-based second number at a few pounds a month — the threads recommend several and they are right for that job. A multi-site group with a booking centre needs a proper unified-communications project, not a bundle. And if you already have fibre you love on contract, we can usually run the phones over it — ask, rather than paying twice.",
      ],
    },
    {
      kind: "links",
      heading: "Read the threads themselves",
      items: [
        {
          label: "r/3CX — Restaurant phone recs: '98% of use is call-in orders' (2021)",
          href: "https://www.reddit.com/r/3CX/comments/qjqjmo/restaurant_phone_recs/",
        },
        {
          label: "r/restaurantowners — Best VoIP to run 2 traditional phones (2025)",
          href: "https://www.reddit.com/r/restaurantowners/comments/1lwyfyu/best_voip_phone_system/",
        },
        {
          label: "r/restaurateur — Advice on adding a 2nd landline phone (2025)",
          href: "https://www.reddit.com/r/restaurateur/comments/1ju4l1a/advice_on_adding_a_2nd_landline_phone/",
        },
        {
          label: "r/smallbusinessuk — What business VoIP do you use? (2026)",
          href: "https://www.reddit.com/r/smallbusinessuk/comments/1rx7xja/what_business_voip_do_you_use/",
        },
        {
          label: "r/sweatystartup — Second-line apps, and the messages they miss (2024)",
          href: "https://www.reddit.com/r/sweatystartup/comments/1fv8p1z/best_option_for_a_business_phone_numbersecond_line/",
        },
        {
          label: "r/UKBroadband — The PSTN switch-off in 2027, explained (2026)",
          href: "https://www.reddit.com/r/UKBroadband/comments/1tie58b/the_pstn_switch_off_in_2027_digital_voice_and/",
        },
        {
          label: "r/restaurateur — A full-service restaurant's 8-line VoIP setup (2021)",
          href: "https://www.reddit.com/r/restaurateur/comments/o073ba/what_is_a_good_phone_system_to_use_for_a_full/",
        },
      ],
    },
    {
      kind: "links",
      heading: "Connect the rest of the counter",
      items: [
        { label: "AI phone ordering", href: "/ai-phone-ordering" },
        { label: "ePOS systems", href: "/pos" },
        { label: "Online ordering", href: "/online-ordering" },
        { label: "Card machines", href: "/credit-card-machines" },
        { label: "Takeaway EPOS — owners' view", href: "/takeaway-epos-what-owners-say" },
        { label: "EPOS pricing", href: "/epos-pricing-uk" },
      ],
    },
  ],
  faqHeading: "Cloud phones for restaurants — what people actually ask",
  faqs: [
    {
      q: "How much does a restaurant cloud phone system cost?",
      a: "The Posso bundle is £55 + VAT a month for unlimited business broadband plus a two-line cloud phone system, including the desk handset and inclusive UK calls — one bill, nothing to buy up front, itemised on your written quote. It is a three-year agreement, stated upfront because that is exactly the clause we tell you to check with any supplier. Extensions beyond the two lines are monthly, so a second site or a December rush is an add, not a new system.",
    },
    {
      q: "Can I keep my existing phone number?",
      a: "Yes — your number ports onto the platform and it is yours from then on, including if you move premises, even to a different town or city. That matters more for a takeaway than almost any business: the number is on years of menus, fridge magnets and Google listings. You can also add numbers in any UK area code if you want a local presence somewhere you deliver.",
    },
    {
      q: "How fast can it go live?",
      a: "The standard lead time is five days from order. There is no engineer visit for the phones and no box to install — handsets plug into your internet and the app works on any phone — with your existing number following once the port completes. If you already have usable internet, the phones do not have to wait for the broadband side of the bundle to be installed.",
    },
    {
      q: "What is the PSTN switch-off and does it affect my restaurant?",
      a: "The UK's analogue phone network is being retired: at the end of January 2027 traditional analogue landlines stop working, full stop. If your order line is still a classic BT-style landline, you will have to move it to a digital service before then regardless of who you buy from. Moving early means you choose the timing and keep your number calmly; leaving it late means doing it in a rush alongside everyone else who did the same.",
    },
    {
      q: "Why not just use a mobile or a second-number app?",
      a: "For a one-person business, honestly — do: the threads recommend app numbers at a few pounds a month and they are right for that job. A restaurant outgrows them quickly: one owner in the linked threads pays for a second-line app and reports missed messages, and a missed message on an order line is a lost order. Two real lines on one ported number, ringing on handsets and mobiles together, is the version of that idea built for a counter at 7pm.",
    },
    {
      q: "Does it work with the Posso till and AI phone ordering?",
      a: "Yes — that is the point of buying it from your EPOS supplier. Caller ID can bring the customer up on the till as the phone rings, and AI phone ordering can answer overflow calls or take orders after hours on the same number, feeding them into the same kitchen queue as everything else. One connection, one supplier, one support number: Mon–Fri, 9am–9:30pm, UK-based.",
    },
  ],
};
