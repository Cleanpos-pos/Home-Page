import type { Guide } from "@/lib/guides";

/**
 * ⚠️ TWO UNVERIFIED CLAIMS ON THIS PAGE — confirm before publish:
 *  1. Driver cash reconciliation at end of shift
 *  2. Map-drawn delivery zones (vs a postcode list)
 * See the guide-pages install notes.
 */

export const deliveryManagementPos: Guide = {
  slug: "delivery-management-pos",
  title: "POS with Driver Management & Delivery Zones (UK)",
  metaDescription:
    "A POS that manages your own delivery drivers — zones, dispatch, driver app and live tracking built into the till. 30p per delivery. UK systems from £499 + VAT.",
  eyebrow: "Buyer's guide",
  h1: "POS with driver management and delivery zones",
  h1Split: ["POS with", "driver management and delivery zones"],
  standfirst:
    "Most EPOS systems integrate with Just Eat and Deliveroo. Far fewer will actually run your own drivers. If you deliver in-house, that difference decides whether you are running one system or three.",
  highlights: [
    "What own-fleet dispatch actually requires",
    "The economics of own drivers vs marketplace",
    "Driver app and dispatch at 30p per delivery",
  ],
  breadcrumb: "Delivery Management POS",
  quickAnswer:
    "Marketplace integration and delivery management are different things. Integration pulls Just Eat and Deliveroo orders onto your till, but their courier delivers. Delivery management is what you need when your drivers deliver your orders: zone mapping, driver assignment, a driver app and live tracking. Posso includes all four in the EPOS at 30p per delivery.",
  sections: [
    {
      kind: "prose",
      heading: "Marketplace integration is not delivery management",
      paragraphs: [
        "These two things get conflated constantly, and they solve different problems.",
        "Marketplace integration pulls Just Eat, Uber Eats and Deliveroo orders onto your till so nobody rekeys them from a tablet. The marketplace's own courier handles the delivery. You pay 14–35% commission.",
        "Delivery management is what you need when your drivers, in your cars, deliver your orders. Zones, fees, assignment, tracking, driver payments, and knowing where seven drivers are at 8pm on a Friday.",
        "Plenty of systems do the first and call it delivery. If you run your own fleet, ask the specific question: can I assign an order to a named driver and see where they are? The answer separates the market quickly.",
      ],
    },
    {
      kind: "features",
      heading: "What own-fleet delivery management needs",
      items: [
        {
          title: "Zone mapping with per-zone rules",
          body: "Draw your delivery area on a map and set rules per zone: delivery fee, minimum order value, and whether you deliver there at all during peak. A postcode-list approach breaks down at the edges of your area, which is exactly where the arguments happen.",
        },
        {
          title: "Driver assignment from one screen",
          body: "Every active order in one view — in prep, ready, out for delivery, delivered — with driver availability alongside. Assigning should be one action, not a phone call and a scribbled address.",
        },
        {
          title: "A driver app drivers will actually use",
          body: "The driver needs the address, the order, the payment status, and a way to mark it delivered. Anything more and it gets ignored in favour of texting the shop.",
        },
        {
          title: "Live tracking and delivery times",
          body: "Not just for the customer. Average delivery time per zone is the number that tells you whether your delivery area is too big — and whether that far corner of the map is actually profitable.",
        },
        {
          title: "One queue for every channel",
          body: "Counter, phone, your own website and marketplace orders should land in the same kitchen queue. Your kitchen should not care where an order came from; your reporting absolutely should.",
        },
        {
          title: "Cash reconciliation",
          body: "Drivers taking cash on the doorstep is still normal in UK takeaway. The system needs to track what each driver has collected and reconcile it at end of shift, or you are doing it on paper.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "The economics: own drivers vs marketplace",
      paragraphs: [
        "Worth doing the arithmetic before you scale either way.",
        "A £25 order on a marketplace at 25% commission costs you £6.25, plus card processing. The same £25 order on your own site, delivered by your own driver, costs you the driver's time and 30p in dispatch. The 60p service fee on the order is added to the customer's total, so the only fee your business pays is card processing.",
        "The marketplace is not a rip-off — it is buying you discovery and demand you would struggle to generate alone, particularly in year one. The mistake is staying marketplace-only once you have a customer base. Most established takeaways should be running both, and steadily shifting repeat customers to the direct channel where the margin is.",
        "A system that handles both from one screen is what makes that shift practical rather than theoretical.",
      ],
    },
    {
      kind: "features",
      heading: "The Posso approach",
      intro: "Delivery management is part of the Posso EPOS, not a bolt-on.",
      items: [
        {
          title: "Zone management",
          body: "Per-zone delivery fees and minimum order values, applied automatically when an order address is matched to a zone.",
        },
        {
          title: "Driver app at 30p per delivery",
          body: "No per-driver licence fee. Assignment and dispatch run from a single active-orders screen.",
        },
        {
          title: "Live order tracking",
          body: "Orders move through in prep, ready, out for delivery and delivered, with average delivery time reporting by zone and by driver.",
        },
        {
          title: "Marketplace orders alongside your own",
          body: "Just Eat, Uber Eats and Deliveroo integration is £45/month with unlimited orders, and those orders land in the same queue as everything else.",
        },
        {
          title: "Branded online ordering",
          body: "Runs on your own domain with the menu synced from the till, so a price change updates everywhere at once.",
        },
        {
          title: "One screen for the whole operation",
          body: "Counter, phone, website, marketplace orders and driver positions in one view. Scaling from 30 deliveries a night to 100 becomes a staffing problem rather than a systems problem.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Where this is not the right fit",
      paragraphs: [
        "If you deliver fewer than about ten orders a night, own-fleet dispatch is solving a problem you do not have yet — a printed ticket and a driver who knows the area works fine.",
        "And if you have no intention of ever running your own drivers, the marketplace integration on its own is the cheaper answer. Systems start at £499 + VAT including hardware, software licence, menu build and staff training.",
      ],
    },
    {
      kind: "links",
      heading: "Explore further",
      items: [
        { label: "Delivery integrations", href: "/delivery-integrations" },
        { label: "Online ordering", href: "/online-ordering" },
        { label: "EPOS for takeaways", href: "/epos-systems-for-takeaways" },
        { label: "Pizza shop POS", href: "/pos-for-pizza-shop" },
        { label: "Kitchen display systems", href: "/kitchen-display-system" },
      ],
    },
  ],
  faqHeading: "Delivery management POS — frequently asked questions",
  faqs: [
    {
      q: "Can a POS system manage my own delivery drivers?",
      a: "Some can, but far fewer than claim to. Many systems describe marketplace integration — pulling Just Eat and Deliveroo orders onto the till — as delivery, when the courier is the marketplace's. Own-fleet management means zone mapping, driver assignment, a driver app and live tracking. Posso includes all four in the EPOS at 30p per delivery.",
    },
    {
      q: "How do delivery zones work in an EPOS?",
      a: "You draw your delivery area on a map and divide it into zones, then set a delivery fee and minimum order value for each. When an order comes in, the system matches the address to a zone and applies the right rules automatically. This stops the common problem of a postcode list that works in the middle of your area but breaks at the boundaries.",
    },
    {
      q: "What does delivery management cost?",
      a: "With Posso, the driver app and dispatch are 30p per delivery, with no per-driver licence fee. Marketplace integration for Just Eat, Uber Eats and Deliveroo is £45/month with unlimited orders. The EPOS itself starts at £499 + VAT. At 500 deliveries a month, dispatch costs £150 — against roughly £3,000 in commission if those same orders ran through a marketplace at 25%.",
    },
    {
      q: "Can I run my own drivers and Just Eat at the same time?",
      a: "Yes, and most established takeaways should. Marketplace orders arrive on the same screen and in the same kitchen queue as your counter, phone and website orders. Marketplace deliveries are handled by their courier; orders from your own site are assigned to your drivers. Your reporting separates the channels so you can see what each is actually worth.",
    },
    {
      q: "How do drivers handle cash payments?",
      a: "The system tracks which orders were paid online and which are collecting cash, and records what each driver has collected so it can be reconciled at end of shift rather than on paper.",
    },
    {
      q: "Will this work if I only deliver a few orders a night?",
      a: "Probably not worth it yet. Below around ten deliveries a night, a printed ticket and a driver who knows the area is genuinely fine. Own-fleet dispatch starts earning its cost when you have multiple drivers out at once and you can no longer answer “where is that order?” from memory.",
    },
  ],
};
