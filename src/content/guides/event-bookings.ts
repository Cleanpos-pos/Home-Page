import type { Guide } from "@/lib/guides";

/**
 * Feature/integration guide for Posso One event pages + deposits via Posso Pay
 * (Sept 2026). AEO-first, matching the house guide template: a self-contained
 * quickAnswer ("Short answer" card), question-shaped headings, an extractable
 * benefits list, a step-by-step booking table, and an FAQ block (FAQPage schema
 * via <FAQSection>).
 *
 * Honesty: Posso Pay is described as Posso's own online merchant payment service
 * with NO rate stated (house rule). Deposit/cancellation/refund terms are framed
 * as the operator's to set. No invented specifics beyond the source copy.
 */

export const eventBookingsGuide: Guide = {
  slug: "event-bookings",
  title: "Event Bookings & Deposits",
  metaDescription:
    "Create an online event page for any occasion, promote it with one link, and take deposits online with Posso Pay — a simpler way for UK restaurants, pubs, cafés and venues to fill events and cut no-shows.",
  eyebrow: "Events & bookings",
  h1: "Take event bookings and deposits with Posso One",
  h1Split: ["Take event bookings", "and deposits"],
  standfirst:
    "Create a page for any event, share one booking link, and let customers reserve their place and pay a deposit online through Posso Pay — fewer no-shows, less phone admin, and more filled tables on quieter dates.",
  highlights: [
    "A dedicated online page for any event — booked and paid on any device",
    "Take deposits online with Posso Pay to cut no-shows",
    "Runs through the same Posso One platform as your till",
  ],
  breadcrumb: "Event Bookings",
  quickAnswer:
    "Yes — with Posso One you can create a dedicated online page for almost any event, share one booking link, and take a deposit online through Posso Pay, Posso's own online merchant payment service. Restaurants, pubs, cafés, hotels and entertainment venues use it for tasting evenings, bottomless brunches, Christmas parties, live music, comedy and quiz nights, seasonal celebrations and private dining. Customers book and pay whenever it suits them — even when you're closed — which reduces no-shows, saves staff from taking bookings by phone, and gives you confirmed numbers to plan around. Your deposit, cancellation and refund terms are shown during booking so customers agree to them before they pay.",
  sections: [
    {
      kind: "prose",
      heading: "What is Posso One event booking?",
      paragraphs: [
        "Hospitality businesses used to need separate systems to advertise an event, take the booking and collect a deposit. With Posso One, restaurants, pubs, cafés, hotels and entertainment venues can create a dedicated online event page where customers view the details, reserve a place and pay a deposit online through Posso Pay — all in one journey.",
        "Almost any ticketed or bookable occasion can run this way: tasting-menu evenings, Sunday lunches and bottomless brunches, Christmas and New Year parties, Valentine's, Mother's and Father's Day meals, Bonfire Night and Halloween events, live music, comedy and quiz nights, wine or cocktail tastings, private dining, children's parties, charity nights and workshops. Each event gets its own page showing the name, date, time, location, description, menu, price and booking requirements — so instead of asking customers to phone during opening hours or message on social media, you share one direct booking link.",
      ],
    },
    {
      kind: "features",
      heading: "What Posso event bookings do for your venue",
      intro: "Six things a page-and-deposit flow changes for a hospitality operator.",
      items: [
        {
          title: "Fewer no-shows and late cancellations",
          body: "No-shows hit fixed-capacity events hardest — a missed seat at a tasting evening or ticketed night is far harder to refill than an empty table at normal service. Taking a deposit strengthens the customer's commitment to turn up and gives you a clear booking record.",
        },
        {
          title: "Less time on the phone",
          body: "Phone bookings interrupt service: a staff member explains the event, checks availability, writes down details and arranges payment — and notes on paper get lost or duplicated. Online pages let customers enter their own details and pay, so staff look after the room instead.",
        },
        {
          title: "Sells around the clock",
          body: "The page works when you're closed. Someone who sees a late-night social post can book there and then, rather than having to remember to call the next day — which matters most when you're promoting through social media or paid ads.",
        },
        {
          title: "Easier for customers",
          body: "Customers increasingly expect to book and pay online without a phone call. A Posso event page lets them book whenever it suits them, on phone, tablet or computer, removing the friction that quietly loses enquiries.",
        },
        {
          title: "Connected to your POS",
          body: "Many venues use one system for tills, another for bookings and a third for deposits. Posso One brings event booking closer to the platform you already run day to day, with Posso Pay collecting the deposits — less admin and one customer journey.",
        },
        {
          title: "Better event planning",
          body: "Knowing how many have booked helps you plan staffing, table layouts, food and drink quantities, entertainment and opening hours. For set-menu events that means preparing with confidence and less waste; for big nights like Bonfire Night or Christmas, confirmed numbers drive better operational calls.",
        },
      ],
    },
    {
      kind: "table",
      heading: "How a customer books an event",
      intro: "Six steps, from a shared link to a recorded booking.",
      caption: "The booking flow customers see. Last reviewed 13 September 2026.",
      columns: ["Step", "What happens"],
      firstColIsHeader: true,
      rows: [
        ["1. Open the page", "The customer opens your event page from a link, QR code or social post"],
        ["2. Review the event", "They see the name, date, time, location, description, menu and price"],
        ["3. Choose an option", "They pick the booking option and party size that suit them"],
        ["4. Enter details", "They add their contact and booking details"],
        ["5. Pay the deposit", "They pay the required deposit online through Posso Pay"],
        ["6. Booking recorded", "The booking and deposit are recorded for the venue"],
      ],
    },
    {
      kind: "prose",
      kicker: "The opportunity",
      heading: "Fill quieter dates and create new revenue",
      paragraphs: [
        "The feature isn't only a tidier way to run existing events — it makes new ones practical. A restaurant could add a monthly tasting night, a pub could run ticketed music evenings, a café could offer afternoon-tea sittings or seasonal workshops. Because booking and deposits are handled online, launching and managing an event is far less work than juggling phone calls and spreadsheets.",
        "Events give a venue a way to attract new customers, lift revenue on quieter days, encourage advance spending, build a local following, showcase premium menus, generate content for social media, bring past customers back and test new food or entertainment concepts. Promote the page link through your website, Facebook, Instagram, TikTok, Google Business Profile, email, WhatsApp, QR codes, posters and digital menu screens — a direct path from advert to event page to deposit captures bookings while interest is highest.",
      ],
    },
    {
      kind: "callout",
      variant: "note",
      title: "Set your terms before you take a deposit",
      body: "Show your deposit, cancellation and refund terms clearly during booking, so customers agree to them before they pay. Posso One handles the event page and Posso Pay handles the deposit; the terms, refund policy and how you run the event remain yours to set for your business.",
    },
    {
      kind: "prose",
      kicker: "Independent or multi-site",
      heading: "One connected platform for more of your business",
      paragraphs: [
        "The event-booking feature suits independent venues and hospitality groups alike. Each venue can create events for its own audience — location-specific Christmas parties, regional tastings, themed nights — while the wider business keeps one consistent booking and payment process across sites.",
        "Posso One is more than a till. It can bring together point of sale, online ordering, self-order kiosks, table ordering, kitchen management, customer engagement, payments and now event bookings — so create the page, share the link, take the deposit through Posso Pay, and keep more of the operation inside one connected platform. Contact the Posso team to enable event pages and Posso Pay for your venue.",
      ],
    },
    {
      kind: "links",
      heading: "Related Posso pages",
      items: [
        { label: "Ticketing & events", href: "/ticketing" },
        { label: "TableMaestro table booking", href: "/tablemaestro" },
        { label: "Card machines & payments", href: "/credit-card-machines" },
        { label: "Online ordering", href: "/online-ordering" },
        { label: "Restaurant EPOS", href: "/restaurant-epos" },
        { label: "ePOS system & features", href: "/pos" },
      ],
    },
  ],
  faqHeading: "Event bookings on Posso One — frequently asked questions",
  faqs: [
    {
      q: "Can Posso take event bookings and deposits?",
      a: "Yes. With Posso One you can create a dedicated online page for an event, share one booking link, and take a deposit online through Posso Pay, Posso's own online merchant payment service. Customers view the event, reserve a place and pay their deposit in a single online journey, and the booking is recorded for the venue.",
    },
    {
      q: "How do event deposits work with Posso Pay?",
      a: "During booking, the customer pays the required deposit online through Posso Pay as part of the same journey — no chasing payment by phone afterwards. Collecting a deposit strengthens the customer's commitment to attend and gives you a clear booking record. You set the deposit amount and your cancellation and refund terms, which are shown before the customer pays.",
    },
    {
      q: "What kinds of events can I run?",
      a: "Almost any ticketed or bookable occasion — tasting-menu evenings, Sunday lunches, bottomless brunches, Christmas and New Year parties, Valentine's and Mother's Day meals, Bonfire Night and Halloween events, live music, comedy and quiz nights, wine or cocktail tastings, private dining, children's parties, charity nights and workshops. Each event has its own page with the details customers need to book.",
    },
    {
      q: "Does taking a deposit reduce no-shows?",
      a: "It helps. No-shows hit fixed-capacity events hardest, where a missed seat is difficult to refill at short notice. A deposit significantly strengthens the customer's commitment to attend and protects some of the value of the reservation. Display your deposit, cancellation and refund terms clearly during booking so customers understand the conditions before paying.",
    },
    {
      q: "Do customers have to phone to book?",
      a: "No. You share one booking link — through your website, social media, Google Business Profile, email, WhatsApp, QR codes, posters or digital menu screens — and customers book and pay on their phone, tablet or computer whenever it suits them, even when the venue is closed. That removes friction and captures bookings while interest is highest.",
    },
    {
      q: "Does event booking work for multiple venues?",
      a: "Yes. It suits independent venues and multi-site groups. Each venue can create events for its own audience — location-specific parties, regional tastings, themed nights — while the wider business keeps a consistent booking and payment process across locations.",
    },
    {
      q: "How do I set up event pages and deposits?",
      a: "Contact the Posso team to enable online event pages and Posso Pay for your business. You create the event page, share the link, and let customers book and pay their deposit online. If you're considering a new POS, Posso One provides a connected platform for restaurants, takeaways, cafés, pubs and venues with event bookings built in.",
    },
  ],
};
