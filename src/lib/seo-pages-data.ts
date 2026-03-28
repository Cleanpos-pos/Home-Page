/**
 * SEO Pages Data — Programmatic landing pages for posso.uk
 * Each entry generates a full Next.js page at /[slug]/
 *
 * Categories: epos, kiosk, ordering, pos, coffee, pizza, takeaway,
 * dry-cleaning, salon, digital-signage, card-machine, hospitality, pub, hotel, sweet-shop, misc
 */

export interface SeoPageData {
  slug: string;
  title: string; // max 60 chars
  description: string; // max 160 chars
  h1: string;
  subtitle: string;
  category: string;
  targetKeyword: string;
  heroContent: string;
  sections: {
    heading: string;
    content: string;
  }[];
  features: {
    title: string;
    desc: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  ctaHeading: string;
  ctaText: string;
  relatedSlugs: string[];
}

export const seoPages: SeoPageData[] = [
  {
    slug: "best-dark-kitchen-restaurant-by-posso-ltd-uk",
    title: "Best Dark Kitchen ePOS System UK | Posso",
    description: "Run a dark kitchen? Posso's ePOS handles multi-brand ordering, delivery integration and kitchen display. Built for ghost kitchens across the UK.",
    h1: "Best Dark Kitchen Restaurant ePOS System UK",
    subtitle: "Multi-brand ordering, delivery aggregation and kitchen management for ghost kitchens and virtual restaurants.",
    category: "epos",
    targetKeyword: "dark kitchen ePOS system",
    heroContent: "Dark kitchens are transforming UK food delivery. But running multiple brands from one kitchen requires specialist technology. Posso's ePOS system is purpose-built for dark kitchen operations — handling multi-brand menus, aggregating orders from Deliveroo, Uber Eats and Just Eat into one screen, and routing tickets to the right station automatically.",
    sections: [
      { heading: "Why Dark Kitchens Need Specialist ePOS", content: "A standard restaurant till can't handle the complexity of a dark kitchen. You're running 3, 5 or even 10 virtual brands from one location, each with its own menu, pricing and delivery partner. Posso's dark kitchen ePOS consolidates all orders — whether from your own website, third-party apps or walk-in collections — into a single, colour-coded dashboard. No more juggling tablets." },
      { heading: "Multi-Brand Menu Management", content: "Create and manage unlimited virtual brands from one system. Each brand gets its own online ordering page, its own menu structure and its own analytics — but all orders flow into one unified kitchen workflow. Update prices, toggle items on or off and launch new brands in minutes, not weeks." },
      { heading: "Kitchen Display & Routing", content: "Our Kitchen Display System (KDS) routes each order to the correct prep station based on brand and item type. Colour-coded tickets, countdown timers and audio alerts keep your team moving at peak speed. No printed tickets piling up, no confusion about which brand an order belongs to." },
    ],
    features: [
      { title: "Multi-Brand Support", desc: "Run unlimited virtual brands from one kitchen with separate menus and online ordering pages." },
      { title: "Aggregator Integration", desc: "Deliveroo, Uber Eats, Just Eat orders all on one screen. No more tablet farm." },
      { title: "Kitchen Display System", desc: "Colour-coded orders routed to the right station with countdown timers." },
      { title: "Low Commission Rates Online Orders", desc: "Build your own direct ordering channel and keep more of your revenue with low rates." },
      { title: "Real-Time Analytics", desc: "Track each brand's performance, peak hours and bestselling items independently." },
      { title: "Delivery Driver Management", desc: "Assign and track your own drivers or integrate with third-party fleets." },
    ],
    faqs: [
      { q: "Can Posso handle multiple brands from one kitchen?", a: "Yes. Posso supports unlimited virtual brands per location, each with its own menu, pricing and online ordering page. All orders consolidate into one kitchen workflow." },
      { q: "Does it integrate with Deliveroo and Uber Eats?", a: "Absolutely. We aggregate orders from all major UK delivery platforms into a single screen, eliminating the need for multiple tablets." },
      { q: "What hardware do I need?", a: "You can run Posso on any Android tablet, Windows PC or our dedicated ePOS terminals. We also supply kitchen display screens and receipt printers." },
    ],
    ctaHeading: "Ready to Scale Your Dark Kitchen?",
    ctaText: "Get a free demo of Posso's dark kitchen ePOS system. Multi-brand, multi-platform, zero commission on direct orders.",
    relatedSlugs: ["best-food-ordering-system-by-posso-ltd-uk", "best-online-food-ordering-software-by-posso-ltd-uk", "best-delivery-pos-software-by-posso-ltd-uk"],
  },
  {
    slug: "best-food-on-the-table-app-by-posso-ltd-uk",
    title: "Best Table Ordering App for Restaurants UK | Posso",
    description: "Let customers order from their table via QR code. Posso's table ordering app integrates with your ePOS. No app download needed.",
    h1: "Best Food on the Table App for UK Restaurants",
    subtitle: "QR code table ordering that sends orders straight to your kitchen. No app download, no waiting for staff.",
    category: "ordering",
    targetKeyword: "table ordering app",
    heroContent: "Table ordering has become essential for UK restaurants. Posso's table ordering app lets your customers scan a QR code, browse your menu and order directly from their phone — with orders firing straight to your kitchen display or printer. No app download needed, no waiting for staff, no mistakes.",
    sections: [
      { heading: "How Table Ordering Works", content: "Place a branded QR code on each table. Customers scan it with their phone camera, see your full menu with images and descriptions, add items to their order and pay — all from their device. The order prints in your kitchen instantly. It's faster than traditional service, reduces errors and frees your staff to focus on hospitality, not order-taking." },
      { heading: "Boost Average Spend by 25%", content: "Restaurants using Posso's table ordering see an average 25% increase in order value. Why? When customers browse a visual menu at their own pace, they add more items. Upsell prompts, combo suggestions and 'frequently ordered together' nudges do the rest. Your menu becomes your best salesperson." },
      { heading: "Seamless ePOS Integration", content: "Unlike standalone QR ordering apps, Posso's table ordering is fully integrated with your ePOS system. Table orders, walk-in orders and online orders all appear on the same dashboard. One system, one menu, one source of truth for stock and reporting." },
    ],
    features: [
      { title: "QR Code Ordering", desc: "Customers scan, browse and order from their phone. No app download required." },
      { title: "ePOS Integration", desc: "Orders go straight to your kitchen display or printer alongside walk-in and online orders." },
      { title: "Visual Menu Builder", desc: "Upload photos, write descriptions, set modifiers and allergen info in minutes." },
      { title: "Pay at Table", desc: "Accept card payments via the same QR flow. Split bills, tip and pay — all contactless." },
      { title: "Upsell Engine", desc: "Automated prompts suggest sides, drinks and desserts to boost average order value." },
      { title: "Multi-Language", desc: "Serve international customers with menus in English, Spanish, French, Arabic and more." },
    ],
    faqs: [
      { q: "Do customers need to download an app?", a: "No. The entire ordering experience runs in the phone's browser via QR code scan. Works on any smartphone." },
      { q: "Can I customise the menu design?", a: "Yes. You can upload your branding, choose colours, add images and organise categories however you like." },
      { q: "Does it work with my existing till?", a: "Posso's table ordering integrates directly with our ePOS. If you're using a different system, ask us about integration options." },
    ],
    ctaHeading: "Let Your Customers Order From Their Table",
    ctaText: "Get a free demo of Posso's QR code table ordering system. Increase order value, reduce wait times and free your staff.",
    relatedSlugs: ["best-table-service-app-by-posso-ltd-uk", "best-self-ordering-system-by-posso-ltd-uk", "best-restaurant-order-taking-system-by-posso-ltd-uk"],
  },
  {
    slug: "best-pos-software-by-posso-ltd-uk",
    title: "Best POS Software for Restaurants UK | Posso",
    description: "Posso provides the best POS software for UK restaurants, takeaways and cafes. Cloud-based, easy to use, from £0 upfront. Book a free demo.",
    h1: "Best POS Software for Restaurants UK",
    subtitle: "Cloud-based point of sale software with online ordering, kitchen display and analytics. Built for UK hospitality.",
    category: "pos",
    targetKeyword: "best POS software UK",
    heroContent: "Choosing the right POS software can make or break your restaurant. Posso's cloud-based POS software is built specifically for UK hospitality — restaurants, takeaways, cafes, pubs and dark kitchens. It handles everything from taking orders and processing payments to managing online delivery and generating sales reports, all from one intuitive interface.",
    sections: [
      { heading: "Why Posso Is the Best POS Software for UK Restaurants", content: "Most POS systems were designed for retail and then adapted for food. Posso was built from the ground up for hospitality. That means purpose-built features like table management, kitchen display routing, driver dispatch, QR ordering, and multi-brand support — not bolted-on afterthoughts. And because it's cloud-based, you can manage your business from anywhere." },
      { heading: "All-in-One Platform", content: "Posso replaces your ePOS, online ordering system, kitchen display, delivery management and analytics tools — all in one subscription. No more paying for 5 different systems that don't talk to each other. Every order, every payment, every customer interaction flows through one dashboard." },
      { heading: "Hardware Flexibility", content: "Run Posso on Android tablets, Windows PCs, or our dedicated touchscreen terminals. We supply everything you need — screens, printers, cash drawers, card readers — or you can bring your own devices. Setup takes less than a day." },
    ],
    features: [
      { title: "Cloud-Based", desc: "Access your data from anywhere. Real-time sync across all devices and locations." },
      { title: "Online Ordering Built-In", desc: "Accept orders from your own website with low commission rates. Delivery and collection supported." },
      { title: "Kitchen Display System", desc: "Replace paper tickets with a screen-based workflow. Faster, cleaner, more accurate." },
      { title: "Multi-Location", desc: "Manage multiple restaurants from one master dashboard. Compare performance across sites." },
      { title: "Integrated Payments", desc: "Accept card, contactless and mobile payments with Posso's built-in payment processing." },
      { title: "Real-Time Reporting", desc: "Sales, labour, stock and customer analytics updated live. Export to CSV or view on mobile." },
    ],
    faqs: [
      { q: "How much does Posso POS software cost?", a: "Plans are flexible based on your needs. Contact us for a personalised quote. There's no upfront hardware cost on most plans." },
      { q: "Can I use my existing hardware?", a: "Yes. Posso runs on Android tablets and Windows PCs. We can also supply a full hardware kit if needed." },
      { q: "Is there a contract?", a: "We offer flexible terms. No long lock-in contracts required." },
      { q: "Do you provide training?", a: "Yes. Every installation includes on-site or remote training for your team, plus 24/7 support." },
    ],
    ctaHeading: "Ready for the Best POS Software in the UK?",
    ctaText: "Book a free demo and see why hundreds of UK restaurants trust Posso for their point of sale.",
    relatedSlugs: ["best-free-pos-system-by-posso-ltd-uk", "best-touch-screen-pos-software-by-posso-ltd-uk", "best-cloud-epos-software-by-posso-ltd-uk"],
  },
  {
    slug: "best-epos-now-ordering-app-by-posso-ltd-uk",
    title: "Best ePOS Ordering App UK | Posso Alternative",
    description: "Looking for the best ePOS ordering app? Posso offers low commission rates, branded apps and full ePOS integration. Better than ePOS Now.",
    h1: "Best ePOS Ordering App UK",
    subtitle: "Commission-free online ordering with full ePOS integration. A smarter alternative to ePOS Now's ordering add-on.",
    category: "epos",
    targetKeyword: "ePOS ordering app",
    heroContent: "If you're searching for the best ePOS ordering app for your restaurant, you've probably looked at ePOS Now. But there's a better option. Posso's ordering app is built natively into our ePOS system — not bolted on as an expensive add-on. You get low commission rates on all direct orders, a fully branded customer-facing app, and seamless kitchen integration from day one.",
    sections: [
      { heading: "Why Restaurants Switch from ePOS Now to Posso", content: "ePOS Now charges extra for online ordering, charges per transaction, and locks you into long contracts. Posso includes online ordering as standard in every plan. Your customers order through your own branded website or app, orders fire straight to your kitchen, and you keep more of your revenue with our low rates. No per-order fees, no hidden charges." },
      { heading: "Built-In, Not Bolted On", content: "With Posso, online ordering isn't a third-party integration — it's part of the core system. That means your online menu stays in sync with your till automatically. Change a price, add a new dish or mark something as sold out, and it updates everywhere instantly. No manual syncing, no duplicate menus to maintain." },
    ],
    features: [
      { title: "Low Commission Rates", desc: "Low commission rates on online orders. No hidden per-order fees." },
      { title: "Branded Ordering App", desc: "Your logo, your colours, your domain. Customers order from you, not a marketplace." },
      { title: "Auto Menu Sync", desc: "Change your till menu and your online menu updates instantly. One source of truth." },
      { title: "Kitchen Integration", desc: "Online orders print alongside walk-in orders. No separate tablets needed." },
      { title: "Delivery Management", desc: "Assign drivers, track deliveries and manage dispatch from one screen." },
      { title: "Customer Database", desc: "Build your own marketing list. Send promotions directly to your customers." },
    ],
    faqs: [
      { q: "Is Posso better than ePOS Now for ordering?", a: "For online ordering specifically, yes. Posso includes ordering as standard with low commission rates, while ePOS Now charges extra for their ordering add-on." },
      { q: "Can I switch from ePOS Now to Posso?", a: "Yes. We handle the full migration — menu setup, hardware configuration and staff training. Most restaurants are live within 48 hours." },
      { q: "Do I need new hardware?", a: "Not necessarily. Posso runs on Android tablets and Windows PCs. We can assess your existing kit." },
    ],
    ctaHeading: "Switch to a Better ePOS Ordering App",
    ctaText: "Get a free demo and see how Posso gives you more features for less money than ePOS Now.",
    relatedSlugs: ["best-epos-now-contact-uk-by-posso-ltd-uk", "best-epos-now-booking-system-by-posso-ltd-uk", "best-epos-now-handheld-by-posso-ltd-uk"],
  },
  {
    slug: "best-facebook-food-ordering-system-by-posso-ltd-uk",
    title: "Best Facebook Food Ordering System UK | Posso",
    description: "Accept food orders directly from your Facebook page. Posso's social ordering system integrates with your ePOS. low commission rates.",
    h1: "Best Facebook Food Ordering System UK",
    subtitle: "Turn your Facebook page into a direct ordering channel. Orders go straight to your kitchen — no commission.",
    category: "ordering",
    targetKeyword: "Facebook food ordering system",
    heroContent: "Your customers are already on Facebook. Why send them to a third-party app to order? Posso's Facebook food ordering system lets customers browse your menu and place orders without leaving Facebook — with orders flowing directly into your ePOS and kitchen. Zero commission, zero friction.",
    sections: [
      { heading: "Social Commerce for Restaurants", content: "Facebook has over 44 million UK users. Many of them follow local restaurants. Posso lets you embed an 'Order Now' button directly on your Facebook page that opens your full branded menu. Customers can order for delivery or collection without ever leaving the platform. It's the fastest path from social media engagement to revenue." },
      { heading: "How It Works", content: "We add a direct ordering link to your Facebook page. When a customer clicks it, they see your branded menu with photos, descriptions and real-time availability. They place their order, pay online, and the ticket prints in your kitchen — just like any other order. No extra tablets, no manual entry." },
    ],
    features: [
      { title: "Facebook Integration", desc: "Order Now button on your Facebook page linked to your branded menu." },
      { title: "Low Commission Rates", desc: "Facebook orders are direct orders with low commission rates — far less than aggregator platforms." },
      { title: "ePOS Integration", desc: "Facebook orders print alongside walk-in and delivery app orders." },
      { title: "Instagram Ready", desc: "Same ordering link works on Instagram bio and stories." },
      { title: "Menu Sync", desc: "One menu across Facebook, your website and your till. Change once, update everywhere." },
      { title: "Customer Data", desc: "Capture customer details for remarketing and loyalty campaigns." },
    ],
    faqs: [
      { q: "Do I need a Facebook Business page?", a: "Yes. You need a Facebook Business page to add the Order Now button. We can help set this up if you don't have one." },
      { q: "Can customers pay through Facebook?", a: "Customers are redirected to your branded ordering page for payment. It opens seamlessly within the Facebook app." },
      { q: "Does it work with Instagram too?", a: "Yes. The same ordering link can be added to your Instagram bio and shared in stories." },
    ],
    ctaHeading: "Turn Social Followers into Paying Customers",
    ctaText: "Get a free demo and start accepting food orders directly from Facebook and Instagram.",
    relatedSlugs: ["best-food-ordering-system-by-posso-ltd-uk", "best-cafe-online-ordering-system-by-posso-ltd-uk", "best-food-ordering-apps-by-posso-ltd-uk"],
  },
];

// Generate remaining pages programmatically from URL slugs
// This maps each slug to an auto-generated SEO page config
const remainingSlugs = [
  "best-website-pos-finance-software-by-posso-ltd-uk",
  "best-pos-software-free-download-full-version-crack-uk",
  "best-free-epos-software-by-posso-ltd-uk",
  "best-build-your-own-pos-system-by-posso-ltd-uk",
  "best-spot-dry-cleaning-software-by-posso-ltd-uk",
  "best-branded-self-serve-coffee-cart-by-posso-ltd-uk",
  "best-epos-portal-by-posso-ltd-uk",
  "best-epos-video-by-posso-ltd-uk",
  "best-food-ordering-system-by-posso-ltd-uk",
  "best-pub-pos-by-posso-ltd-uk",
  "best-software-for-cleaners-by-posso-ltd-uk",
  "best-coffee-ordering-app-by-posso-ltd-uk",
  "best-top-table-app-by-posso-ltd-uk",
  "best-eposnow-online-ordering-by-posso-ltd-uk",
  "best-golf-club-pos-systems-by-posso-ltd-uk",
  "best-epos-marketing-by-posso-ltd-uk",
  "best-food-delivery-order-by-posso-ltd-uk",
  "best-open-source-epos-software-by-posso-ltd-uk",
  "best-diy-pos-system-restaurants-by-posso-ltd-uk",
  "best-dry-cleaning-software-by-posso-ltd-uk",
  "best-epos-credit-card-application-by-posso-ltd-uk",
  "best-homeware-pos-by-posso-ltd-uk",
  "best-sweet-shop-pos-by-posso-ltd-uk",
  "best-pizza-shop-point-of-sale-by-posso-ltd-uk",
  "best-epos-bournemouth-by-posso-ltd-uk",
  "best-salon-point-of-sale-software-by-posso-ltd-uk",
  "best-buy-epos-system-uk-by-posso-ltd-uk",
  "best-food-to-order-online-by-posso-ltd-uk",
  "best-pos-software-for-sweet-shop-by-posso-ltd-uk",
  "best-hospitality-kiosks-by-posso-ltd-uk",
  "best-text-ordering-system-by-posso-ltd-uk",
  "best-bespoke-epos-software-by-posso-ltd-uk",
  "best-epos-nottingham-by-posso-ltd-uk",
  "best-online-food-ordering-software-by-posso-ltd-uk",
  "best-pizza-shop-pos-software-by-posso-ltd-uk",
  "best-pdq-systems-by-posso-ltd-uk",
  "best-best-epos-system-review-uk-by-posso-ltd-uk",
  "best-order-counter-pos-system-by-posso-ltd-uk",
  "best-vat-on-dry-cleaning-by-posso-ltd-uk",
  "best-epos-now-contact-uk-by-posso-ltd-uk",
  "best-restaurant-epos-uk-by-posso-ltd-uk",
  "best-free-pos-system-by-posso-ltd-uk",
  "best-demo-restaurant-sunderland-by-posso-ltd-uk",
  "best-self-ordering-system-by-posso-ltd-uk",
  "best-pos-signage-by-posso-ltd-uk",
  "best-sweet-shop-pos-system-by-posso-ltd-uk",
  "best-restaurant-software-free-download-full-version-by-posso-ltd-uk",
  "best-hotel-epos-systems-by-posso-ltd-uk",
  "best-pos-companies-uk-by-posso-ltd-uk",
  "best-pos-webshop-by-posso-ltd-uk",
  "best-touch-screen-pos-software-by-posso-ltd-uk",
  "best-pizza-epos-by-posso-ltd-uk",
  "best-coffee-pos-by-posso-ltd-uk",
  "best-cheap-pos-system-by-posso-ltd-uk",
  "best-pdq-machine-for-small-businesses-by-posso-ltd-uk",
  "best-cheap-epos-system-by-posso-ltd-uk",
  "best-best-pizza-pos-by-posso-ltd-uk",
  "best-pos-for-sweet-shop-by-posso-ltd-uk",
  "best-shop-till-software-by-posso-ltd-uk",
  "best-app-for-takeaways-by-posso-ltd-uk",
  "best-food-and-drink-digital-signage-by-posso-ltd-uk",
  "best-takeaway-epos-software-free-by-posso-ltd-uk",
  "best-web-based-ordering-system-for-coffee-shops-by-posso-ltd-uk",
  "best-uk-kiosk-by-posso-ltd-uk",
  "best-mobile-ordering-app-for-coffee-shops-by-posso-ltd-uk",
  "best-cafe-online-ordering-system-by-posso-ltd-uk",
  "best-restaurant-epos-london-by-posso-ltd-uk",
  "best-sweet-shop-point-of-sale-software-by-posso-ltd-uk",
  "best-epos-system-for-indian-takeaway-by-posso-ltd-uk",
  "best-self-employed-card-machine-by-posso-ltd-uk",
  "best-self-ordering-kiosks-by-posso-ltd-uk",
  "best-epos-london-by-posso-ltd-uk",
  "best-restaurant-delivery-system-by-posso-ltd-uk",
  "best-salon-software-free-download-full-version-by-posso-ltd-uk",
  "best-epos-now-booking-system-by-posso-ltd-uk",
  "best-bespoke-pos-by-posso-ltd-uk",
  "best-best-food-delivery-app-uk-by-posso-ltd-uk",
  "best-bar-ordering-app-by-posso-ltd-uk",
  "best-pos-system-for-pizza-shop-by-posso-ltd-uk",
  "best-tablet-epos-system-uk-by-posso-ltd-uk",
  "best-pos-system-for-takeaway-by-posso-ltd-uk",
  "best-best-cash-register-for-small-business-uk-by-posso-ltd-uk",
  "best-pdq-machines-uk-by-posso-ltd-uk",
  "best-restaurant-order-taking-system-by-posso-ltd-uk",
  "best-touch-screen-epos-system-by-posso-ltd-uk",
  "best-easy-pos-system-by-posso-ltd-uk",
  "best-portable-epos-systems-by-posso-ltd-uk",
  "best-custom-pos-system-by-posso-ltd-uk",
  "best-pizza-pos-software-by-posso-ltd-uk",
  "best-online-ordering-pos-by-posso-ltd-uk",
  "best-coffee-pos-system-by-posso-ltd-uk",
  "best-delivery-pos-software-by-posso-ltd-uk",
  "best-epos-booking-system-by-posso-ltd-uk",
  "best-free-restaurant-pos-by-posso-ltd-uk",
  "best-best-epos-system-for-small-grocery-store-by-posso-ltd-uk",
  "best-till-system-software-by-posso-ltd-uk",
  "best-self-service-epos-by-posso-ltd-uk",
  "best-mobile-pos-system-uk-by-posso-ltd-uk",
  "best-cloud-epos-software-by-posso-ltd-uk",
  "best-self-order-app-by-posso-ltd-uk",
  "best-pos-for-pizza-shop-by-posso-ltd-uk",
  "best-free-epos-software-uk-by-posso-ltd-uk",
  "best-online-ordering-software-for-coffee-shops-by-posso-ltd-uk",
  "best-mobile-ordering-system-for-coffee-shops-by-posso-ltd-uk",
  "best-self-serve-kiosk-by-posso-ltd-uk",
  "best-pos-kiosks-by-posso-ltd-uk",
  "best-cloud-based-epos-systems-uk-by-posso-ltd-uk",
  "best-tablet-food-ordering-system-by-posso-ltd-uk",
  "best-online-food-ordering-portal-by-posso-ltd-uk",
  "best-self-serve-coffee-bar-stands-by-posso-ltd-uk",
  "best-pub-epos-system-by-posso-ltd-uk",
  "best-pizza-delivery-pos-by-posso-ltd-uk",
  "best-digital-signage-sheffield-by-posso-ltd-uk",
  "best-online-ordering-platform-for-coffee-shops-by-posso-ltd-uk",
  "best-digital-signage-newcastle-by-posso-ltd-uk",
  "best-digital-signage-systems-by-posso-ltd-uk",
  "best-coffee-shop-ordering-app-by-posso-ltd-uk",
  "best-epos-now-handheld-by-posso-ltd-uk",
  "best-pdq-machines-by-posso-ltd-uk",
  "best-hospitality-pos-software-by-posso-ltd-uk",
  "best-mobile-ordering-platform-for-coffee-shops-by-posso-ltd-uk",
  "best-food-ordering-apps-by-posso-ltd-uk",
  "best-windows-10-coa-by-posso-ltd-uk",
  "best-pub-epos-by-posso-ltd-uk",
  "best-kiosk-uk-by-posso-ltd-uk",
  "best-pos-leicester-by-posso-ltd-uk",
  "best-cheap-epos-software-by-posso-ltd-uk",
  "best-nail-salon-pos-by-posso-ltd-uk",
  "best-touchscreen-pos-system-by-posso-ltd-uk",
  "best-self-order-kiosk-fast-food-by-posso-ltd-uk",
  "best-restaurant-self-ordering-system-by-posso-ltd-uk",
  "best-cheap-epos-by-posso-ltd-uk",
  "best-nail-salon-pos-software-by-posso-ltd-uk",
  "best-epos-touchscreen-by-posso-ltd-uk",
  "best-kiosk-pos-by-posso-ltd-uk",
  "best-epos-software-free-by-posso-ltd-uk",
  "best-beauty-salon-software-point-of-sale-by-posso-ltd-uk",
  "best-free-card-machine-by-posso-ltd-uk",
  "best-pizza-restaurant-software-by-posso-ltd-uk",
  "best-tablet-epos-system-by-posso-ltd-uk",
  "best-pos-hospitality-systems-by-posso-ltd-uk",
  "best-table-service-app-by-posso-ltd-uk",
  "best-mobile-ordering-apps-by-posso-ltd-uk",
  "best-best-free-epos-software-by-posso-ltd-uk",
  "best-pos-machine-software-by-posso-ltd-uk",
  "best-restaurant-pre-order-app-by-posso-ltd-uk",
  "best-digital-signage-edinburgh-by-posso-ltd-uk",
  "best-pizza-pos-system-by-posso-ltd-uk",
  "best-epos-systems-for-takeaways-by-posso-ltd-uk",
  "best-touch-screen-till-system-by-posso-ltd-uk",
  "best-restaurant-till-by-posso-ltd-uk",
  "best-hospitality-software-uk-by-posso-ltd-uk",
  "best-diy-cash-drawer-by-posso-ltd-uk",
  "best-takeaway-pos-by-posso-ltd-uk",
  "best-best-pos-system-for-pizza-shop-by-posso-ltd-uk",
  "best-best-pos-for-pizza-delivery-by-posso-ltd-uk",
  "best-food-ordering-machine-by-posso-ltd-uk",
  "best-epos-system-restaurant-by-posso-ltd-uk",
  "best-restaurant-ordering-app-free-uk-by-posso-ltd-uk",
  "best-best-pizza-pos-system-2020-by-posso-ltd-uk",
];

function slugToTitle(slug: string): string {
  return slug
    .replace(/-by-posso-ltd-uk$/, '')
    .replace(/^best-best-/, 'best-')
    .replace(/^best-/, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function slugToCategory(slug: string): string {
  if (slug.includes('pizza')) return 'Pizza POS';
  if (slug.includes('coffee') || slug.includes('cafe')) return 'Coffee Shop';
  if (slug.includes('takeaway') || slug.includes('delivery')) return 'Takeaway & Delivery';
  if (slug.includes('kiosk') || slug.includes('self-order') || slug.includes('self-serve')) return 'Self-Order Kiosks';
  if (slug.includes('digital-signage')) return 'Digital Signage';
  if (slug.includes('card-machine') || slug.includes('pdq')) return 'Card Machines';
  if (slug.includes('dry-clean') || slug.includes('cleaner')) return 'Dry Cleaning';
  if (slug.includes('salon') || slug.includes('beauty') || slug.includes('nail')) return 'Salon & Beauty';
  if (slug.includes('pub') || slug.includes('bar')) return 'Pubs & Bars';
  if (slug.includes('hotel')) return 'Hotels';
  if (slug.includes('sweet-shop') || slug.includes('homeware')) return 'Retail';
  if (slug.includes('restaurant') || slug.includes('hospitality')) return 'Restaurant ePOS';
  if (slug.includes('ordering') || slug.includes('order')) return 'Online Ordering';
  if (slug.includes('epos') || slug.includes('pos') || slug.includes('till')) return 'ePOS Systems';
  return 'Business Solutions';
}

function generateAutoPage(slug: string): SeoPageData {
  const cleanTitle = slugToTitle(slug);
  const category = slugToCategory(slug);
  const titleTag = `Best ${cleanTitle} UK | Posso`.substring(0, 60);
  const desc = `Posso provides the best ${cleanTitle.toLowerCase()} for UK businesses. Cloud-based, easy to use, with full support. Book a free demo today.`.substring(0, 160);

  return {
    slug,
    title: titleTag,
    description: desc,
    h1: `Best ${cleanTitle} in the UK`,
    subtitle: `Posso's ${cleanTitle.toLowerCase()} solution is designed for UK hospitality and retail businesses. Affordable, powerful and fully supported.`,
    category,
    targetKeyword: cleanTitle.toLowerCase(),
    heroContent: `Looking for the best ${cleanTitle.toLowerCase()}? Posso Ltd provides industry-leading technology for UK restaurants, takeaways, cafes and retail businesses. Our solutions are cloud-based, easy to deploy and backed by UK-based support. Whether you're a single-site operator or a multi-location chain, we have the right solution for your business.`,
    sections: [
      {
        heading: `Why Choose Posso for ${cleanTitle}`,
        content: `Posso has been trusted by hundreds of UK businesses for ${cleanTitle.toLowerCase()} solutions. We combine cutting-edge technology with hands-on support, ensuring your system works perfectly from day one. Our platform is built specifically for UK hospitality and retail — not adapted from generic software. That means features designed around how your business actually works.`
      },
      {
        heading: "All-in-One Platform",
        content: "Stop paying for multiple systems that don't talk to each other. Posso brings your ePOS, online ordering, kitchen display, payment processing and analytics into one unified platform. One login, one dashboard, one support team. Manage your entire operation from a single screen."
      },
      {
        heading: "UK-Based Support",
        content: "When something goes wrong during a Friday night rush, you need someone who picks up the phone. Posso's UK-based support team is available when you need them. We also provide on-site installation, staff training and ongoing account management to keep your business running smoothly."
      },
    ],
    features: [
      { title: "Cloud-Based System", desc: "Access your data from anywhere. Real-time sync across all devices and locations." },
      { title: "Low Commission Rates Ordering", desc: "Accept online orders through your own branded website. Keep 100% of revenue." },
      { title: "Easy Setup", desc: "Go live in less than a day. We handle installation, configuration and training." },
      { title: "Integrated Payments", desc: "Accept card, contactless and mobile payments with built-in processing." },
      { title: "Real-Time Analytics", desc: "Sales, stock and customer reports updated live. Export to CSV or view on mobile." },
      { title: "Multi-Location Ready", desc: "Manage multiple sites from one dashboard. Compare performance across locations." },
    ],
    faqs: [
      { q: `How much does Posso's ${cleanTitle.toLowerCase()} cost?`, a: "Pricing is flexible based on your business size and requirements. Contact us for a personalised quote. Most plans include hardware with no upfront cost." },
      { q: "Do you provide training and support?", a: "Yes. Every installation includes on-site or remote training. Our UK-based support team is available during business hours and beyond for urgent issues." },
      { q: "Can I try before I commit?", a: "Absolutely. We offer free demos so you can see the system in action before making a decision. Book yours today." },
    ],
    ctaHeading: `Ready for the Best ${cleanTitle}?`,
    ctaText: `Book a free demo and see why UK businesses choose Posso for ${cleanTitle.toLowerCase()}.`,
    relatedSlugs: [],
  };
}

// Combine hand-crafted pages with auto-generated ones
export const allSeoPages: SeoPageData[] = [
  ...seoPages,
  ...remainingSlugs.map(generateAutoPage),
];

// Lookup helper
export function getPageBySlug(slug: string): SeoPageData | undefined {
  return allSeoPages.find(p => p.slug === slug);
}

// Get all slugs for static generation
export function getAllSlugs(): string[] {
  return allSeoPages.map(p => p.slug);
}
