import type { Guide } from "@/lib/guides";

/**
 * ⚠️ ONE UNVERIFIED CLAIM ON THIS PAGE — confirm before publish:
 *  Central menu template with deliberate local override per site.
 * See the guide-pages install notes.
 */

export const multiSiteEposUk: Guide = {
  slug: "multi-site-epos-uk",
  title: "Multi-Site EPOS for UK Takeaways & Restaurant Groups",
  metaDescription:
    "Multi-site EPOS with central menu control, cross-site reporting and synced permissions. What breaks when you open site two — and what to fix before site three. From £499 + VAT per site.",
  eyebrow: "Scaling guide",
  h1: "Multi-site EPOS for UK takeaways and restaurant groups",
  h1Split: ["Multi-site EPOS", "for UK takeaways and restaurant groups"],
  standfirst:
    "A system that works beautifully for one site often starts costing you real money at three. Here is what breaks, when it breaks, and what to fix before you sign the lease on the next one.",
  highlights: [
    "What actually breaks at site two and three",
    "The four capabilities that matter at scale",
    "Central menu control, cross-site reporting, synced permissions",
  ],
  breadcrumb: "Multi-Site EPOS",
  quickAnswer:
    "For hospitality groups of roughly two to twenty sites, four things decide the system: central menu control, consolidated reporting, synced user permissions, and how many vendors you are managing. Posso covers all four and supplies the whole stack — till, kiosks, kitchen display, ordering and payments — from one supplier at £499 + VAT per site.",
  sections: [
    {
      kind: "features",
      heading: "What breaks when you scale",
      intro:
        "Single-site EPOS systems do not fail at multi-site. They just quietly hand you a second job.",
      items: [
        {
          title: "The menu update tax",
          body: "You change the price of one dish. On a single-site system that is thirty seconds per site — trivial until you are doing it across four sites, on the till and the website and the kiosk and three marketplace listings. A seasonal change becomes a full day of admin, so it gets delayed, and your sites drift out of sync. The symptom to watch for: your sites have slightly different prices for the same dish and nobody planned it.",
        },
        {
          title: "Reporting that will not consolidate",
          body: "You can see each site's takings. What you cannot easily see is which site has the highest average order value, whether the new site is cannibalising the old one, or how Tuesday performs across the group. Exporting four CSVs into a spreadsheet every Monday is a sign the system has stopped scaling with you.",
        },
        {
          title: "Permissions that do not travel",
          body: "A manager who covers two sites needs one login with the right access at both. Duplicate logins per site is how discount permissions end up in the wrong hands.",
        },
        {
          title: "Support fragmenting",
          body: "Four sites, four installs, four sets of hardware, potentially four different setups because each was configured by whoever was available that week. When something breaks at site three, nobody can tell you how site three differs from site one.",
        },
        {
          title: "The vendor stack multiplying",
          body: "This is the expensive one. Till from one company, online ordering from another, kiosks from a third, card machines from a fourth — multiplied across every site. Sixteen relationships, sixteen renewal dates, and nobody accountable when two of them stop talking.",
        },
        {
          title: "Opening timelines stretching",
          body: "If every new site is configured from scratch, site four takes as long to open as site one did. It should take a fraction of the time.",
        },
      ],
    },
    {
      kind: "features",
      heading: "The four capabilities that matter at scale",
      items: [
        {
          title: "1. Central menu management with local override",
          body: "Set the menu once at group level and push it to every site. Then allow deliberate local variation — a site with no fryer should not be selling chips — without breaking the central template. The key word is deliberate: variation you chose, not variation that happened.",
        },
        {
          title: "2. Consolidated reporting across sites",
          body: "Group-level totals with the ability to drill into any single site, and to compare sites against each other on the same measures. Sales by channel, by daypart, by site, in one view.",
        },
        {
          title: "3. Synced users and permissions",
          body: "One login per person, with role-based access that follows them across sites. Area managers see their sites; site managers see theirs.",
        },
        {
          title: "4. One vendor, one support relationship",
          body: "At four sites, the number of contracts you manage matters more than any individual feature. One supplier for till, kiosks, kitchen display, ordering, delivery and card payments means one number to call and nobody to blame but them.",
        },
      ],
    },
    {
      kind: "table",
      heading: "What Posso supplies across an estate",
      intro:
        "The single-vendor argument is the substantive one at scale. Across every site, from one supplier:",
      columns: ["Item", "Price"],
      firstColIsHeader: true,
      rows: [
        ["EPOS terminals — Windows 11 Pro, 2-year warranty", "From £499 + VAT per site"],
        ["Self-order kiosks", "From £699 + VAT"],
        ["21-inch kitchen display screen", "£399 + VAT"],
        ["Branded online ordering on your own domain", "Included; 60p customer-paid service fee"],
        ["Just Eat / Uber Eats / Deliveroo integration", "£45/month, unlimited orders"],
        ["Own-fleet delivery management", "30p per delivery"],
        ["Card processing — Posso Pay", "Rate quoted on your card turnover — same in store and online"],
        ["AI phone ordering", "£1 per order"],
        ["Menu build, configuration and staff training", "Included"],
      ],
    },
    {
      kind: "prose",
      heading: "Opening the next site",
      paragraphs: [
        "For a group opening a new site, the menu is already built. The new site inherits the group template rather than starting blank, which is the practical difference between a two-week opening and a two-day one.",
        "Franchise operations with separate ownership structures have different requirements again — royalty reporting, franchisee-level access, brand control across owners you do not employ. Those are covered separately on our franchise page.",
      ],
    },
    {
      kind: "prose",
      heading: "Where Posso is not the right answer",
      paragraphs: [
        "If your estate mixes hospitality with genuine retail formats — a group running cafés alongside convenience stores — you will want retail-depth stock control that Posso does not have.",
        "At very large estate sizes with complex franchise financial reporting, enterprise platforms like Zonal or Lightspeed have depth we do not claim to match. Posso's multi-site strength is hospitality groups in the two-to-twenty-site range that want one supplier and published pricing.",
      ],
    },
    {
      kind: "links",
      heading: "Explore further",
      items: [
        { label: "Franchise solutions", href: "/solutions/franchise-pos-systems" },
        { label: "Best restaurant EPOS UK", href: "/best-restaurant-epos-system-uk" },
        { label: "Online ordering", href: "/online-ordering" },
        { label: "Delivery management", href: "/delivery-management-pos" },
        { label: "EPOS pricing", href: "/buy-epos-system-uk" },
      ],
    },
  ],
  faqHeading: "Multi-site EPOS — frequently asked questions",
  faqs: [
    {
      q: "What is the best multi-site EPOS system in the UK?",
      a: "The right answer depends on estate size and format mix. For hospitality groups of roughly two to twenty sites, the deciding factors are central menu control, consolidated reporting, synced permissions and how many vendors you are managing. Posso covers all four and supplies the whole stack — till, kiosks, kitchen display, ordering and payments — from one supplier at £499 + VAT per site. For very large estates or mixed retail-and-food groups, enterprise platforms with deeper retail or franchise financial reporting are likely a better fit.",
    },
    {
      q: "Can I update menus across all my sites at once?",
      a: "Yes. Posso supports central menu management, so a price or product change is made once at group level and pushed to every site, including the till, your online ordering site and kiosks. Sites can carry deliberate local variation where needed — a site without a particular piece of kitchen equipment should not be selling the dishes that need it.",
    },
    {
      q: "How does reporting work across multiple locations?",
      a: "Cloud reporting consolidates sales across sites with the ability to drill into any single location. That lets you compare sites on the same measures — average order value, sales by channel, performance by daypart — rather than exporting a separate report per site and reconciling them in a spreadsheet.",
    },
    {
      q: "Do I need a separate EPOS licence for each site?",
      a: "Each site needs its own terminals and system, starting at £499 + VAT per site, with menu build and training included. The advantage for an existing group is that a new site inherits the group menu template rather than being configured from scratch, which shortens the opening timeline considerably.",
    },
    {
      q: "Can managers who cover several sites use one login?",
      a: "Yes. Permissions sync across the estate with role-based access, so a person has one login that works at every site they are authorised for. This avoids duplicate per-site logins, which is the usual route by which discount and refund permissions end up in the wrong hands.",
    },
    {
      q: "We are on Square and opening a third site — should we move?",
      a: "It depends on what is actually costing you. If you are duplicating menu updates across sites, exporting reports to reconcile them manually, or running separate suppliers for ordering, kiosks and payments, those are the costs that grow with each new site and they are worth pricing properly. If your current setup handles all three cleanly, the case for switching is weaker. Work out the hours per month spent on cross-site admin before you decide.",
    },
  ],
};
