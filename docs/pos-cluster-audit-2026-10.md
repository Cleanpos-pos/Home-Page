# POS/EPOS cluster audit and fixes — October 2026

Goal: make `/pos` the page that ranks, and gets cited in Google AI Overviews, for
"POS system" and "EPOS system" queries. This file records what changed, why,
and every open item that needs a decision from Paul (search for **TODO: PAUL**
in the code; each one is also listed at the end of this file).

Checked 3 October 2026. Build: `npx next build` passes. Typecheck: `npx tsc --noEmit`
passes with 0 errors. Lint: the repo has no ESLint set up (`npm run lint` opens
Next's interactive "configure ESLint" prompt), so lint did not run.

---

## 1. Single source of truth — `src/lib/possoFacts.ts`

Every Posso price and fact now comes from one file. Pages import `posso` and
interpolate; schema reads numbers from `possoPrices`.

| Fact | Value | Key |
|---|---|---|
| POS system | £499 + VAT | `posso.posPrice` |
| Self-order kiosk (indoor) | £699 + VAT | `posso.kioskPrice` |
| Restaurant Full Service package | £899 + VAT | `posso.fullServicePrice` |
| Fast Food Growth package | £1,250 + VAT | `posso.fastFoodGrowthPrice` |
| 21-inch kitchen display | £399 + VAT | `posso.kdsPrice` |
| Extra printer | £99 | `posso.printerPrice` |
| Handheld waiter pad | £259 | `posso.waiterPadPrice` |
| Twin-screen upgrade | £150 | `posso.twinScreenPrice` |
| Software | from £25 + VAT/month | `posso.softwareMonthly` |
| Finance | from £24.92/week | `posso.financeWeekly` |
| Delivery-platform integration | £45/month | `posso.deliveryIntegrationMonthly` |
| AI phone ordering | £1/order | `posso.aiPhonePerOrder` |
| Driver app | 30p/delivery | `posso.driverAppPerDelivery` |
| Posso Pay | from 1% + 10p | `posso.possoPayRate` |
| Warranty | 2 years | `posso.warrantyYears` / `warrantyYearsWord` |
| Support | Mon–Fri 9am–9:30pm | `posso.supportHours` / `supportTime` |
| Businesses | 500+ | `posso.businessCount` |
| Phone | 0808 175 3956 | `posso.phone` / `phoneHref` / `phoneSchema` |

Standard sentences: `posso.setupStatement`, `posso.goLiveStatement` (prints
"…most sites go live within X" once `GO_LIVE_WITHIN` is set; until then it
stops at "plug-and-play"), `posso.ownershipNote`.

**Replacement:** an AST-aware codemod (TypeScript compiler API, so strings,
template literals, JSX text and JSX attributes are each rewritten in the right
syntax) replaced **1,563 hardcoded occurrences across 193 files** (plus a handful fixed by hand): £499 ×561,
phone ×200, `tel:` link ×169, £699 ×163, warranty ×114, £24.92 ×100, £25/month
×59, £399 (KDS) ×37, £45 ×26, 1% + 10p ×24, support hours ×24, 500+ ×22, 30p ×21,
£99 (printer) ×15, £150 (twin screen) ×9, £1/order ×7, schema phone ×6, £259 ×4,
£899 ×1, £1,250 ×1. Ambiguous figures were only replaced with matching context
(e.g. £399 only near "kitchen/screen/KDS", never near "kiosk"), and the skipped
matches were reviewed by hand. Totals derived from these facts on
`/kitchen-display-system-cost` and `/self-order-kiosk-cost` (£898, £1,198 …) are
now computed from `possoPrices`. The only remaining literal copies are in code
comments.

## 2. Contradictions resolved

| # | Contradiction | Where | Fix |
|---|---|---|---|
| 1 | **Setup time.** Homepage "first install to first order in under 24 hours"; `/buy-epos-system-uk` "delivered, installed and staff-trained within 5 working days" and "within one week"; elsewhere "within 48 hours", "same day", "under a day", "installs in under 2 hours". | About 50 claims across 26 pages and guides | All replaced with `posso.goLiveStatement`: "Systems are preconfigured and shipped plug-and-play" — the "most sites go live within X" clause appears automatically once X is confirmed (**TODO**). Online-ordering-only and AI-phone go-live times were left as they are (different products). |
| 2 | **Installation.** "Free installation" / "free on-site installation" / "installation included" vs `/pos` "on-site installation for larger sites is priced on application". | Homepage About section, `/pos-companies-uk`, `/buy-epos-system-uk`, `/pos-systems`, `/how-much-does-a-pos-system-cost-for-a-restaurant`, `/custom-pos-system`, `/bespoke-epos-software`, `/diy-pos-system-restaurants`, `/build-your-own-pos-system`, `/open-source-epos-software`, `/self-serve-coffee-bar`, `/diy-cash-drawer`, `/website-pos-finance-software`, `/best-restaurant-epos-system-uk`, 4 takeaway guides, `/kitchen-display-system` | Standardised to "Setup (menu build + configuration) is free; on-site installation for larger sites is priced on application." |
| 3 | **"Own it outright"** with no mention of the monthly software fee; `/how-much-…` said buying gives "ownership with no ongoing payments". | `/buy-epos-system-uk`, `/pos-companies-uk`, `/how-much-…`, `/epos-pricing-uk`, `/epos-now-alternative`, `/replace-old-epos-system` | Every instance now adds that software is from £25 + VAT/month (`posso.ownershipNote`). Two guides also implied the software licence was inside the £499 — clarified. |
| 4 | **"No lock-in contracts"** — unconfirmed. | 15 claims on 11 pages (software and card-processing) | Kept for now, each flagged **TODO: PAUL** to confirm the actual terms. `possoContract` in `possoFacts.ts` holds the answer once known. |
| 5 | **Finance term.** "£24.92/week on a 5-year plan" vs "12, 24 or 36 months". | `/how-much-…` | Standardised to 12, 24 or 36 months, subject to status (as on `/epos-pricing-uk`). The "tax relief at 19% corporation tax" figure was removed; it now says to check with an accountant. |
| 6 | **Business count.** "Thousands of UK businesses choose Posso", "over 500 businesses". | `/pos-companies-uk`, homepage About | Now `posso.businessCount` (500+). |
| 7 | **Support hours.** Homepage LocalBusiness schema said 09:00–17:30. | Homepage schema | The duplicate LocalBusiness node was removed; the one Organization node carries support hours 09:00–21:30. |
| 8 | **Online ordering price.** `/pos-systems` "From £350 or FREE with Teya" vs `/pos` and `/epos-pricing-uk` "branded website £450, hosting free". | `/pos-systems` | Card removed from `/pos-systems` (now packages only). **TODO** to confirm. |
| 9 | **Unsubstantiated ranking / urgency.** "UK's #1 restaurant POS provider", "Free setup (limited time)", "Limited Time Offer". | `/pos-systems` (Ads landing page) | Removed (CAP code 3.7 / false urgency). Setup is free as standard. |
| 10 | **Kitchen ticket languages.** `/epos-system-for-indian-takeaway` claimed tickets in Hindi, Urdu, Bengali, Punjabi and Gujarati; `/pos` lists five UI languages (English, Spanish, French, Italian, Simplified Chinese). | Indian product page (now redirected); "Caller ID & multi-language" card text on `/takeaway-epos` and `/epos-system-for-takeaway` | Not carried into the surviving guide; card text changed. **TODO** to confirm. |
| 11 | **Historic data on switching.** `/free-epos-software` "we can import your historical data too" vs `/pos` "historic sales data does not transfer". | `/free-epos-software` | Aligned with `/pos`. |
| 12 | **Retail capability.** `/shop-till-software`, `/grocery-store-epos`, `/homeware-pos`, `/sweet-shop-pos` claim barcode scanning, stock control, supplier ordering and scales; `/epos-now-alternative` says Posso is hospitality-only. | Retail pages | Not changed on those pages; the new `/retail-pos-system` claims only what `/pos` confirms. **TODO** to confirm retail features. |

## 3. Titles, meta and structured data

- **Emoji removed** from every `<title>`, `og:title` and `twitter:title` (🚀 ⭐ 💰 🍕 on 8 pages, including the root layout).
- **Inherited homepage titles.** The root layout set `og:title`/`twitter:title`, so **363 pages** shipped the homepage's 🚀 `twitter:title` and **62** its `og:title`. The layout no longer sets them; every page now carries its own or none.
- **Root canonical removed.** The layout's sitewide canonical pointed any page that forgot its own at the homepage. The homepage now sets `/` itself; every live page has a self-referencing canonical (verified on the built HTML).
- **Generic meta keywords** removed from the root layout and homepage. Page-specific keyword lists on other pages were left alone (Google ignores them; no harm).
- **`/pos` title:** `EPOS System UK: Restaurants & Takeaways | From £499 | Posso` (59 chars). The requested wording ("…UK for Restaurants…") is 62, so "for" became a colon.
- **`/pos` schema:** Product + AggregateOffer (lowPrice 499, GBP, from `possoPrices`); FAQPage generated from the same array as the visible FAQs (17 = 17, verified); BreadcrumbList; WebPage `author` → Organization and `reviewedBy` → Person Paul Robinson (`/about/paul-robinson#person`), matching the visible byline.
- **Organization on the homepage only.** The layout's Organization block (on every page) and the homepage's duplicate LocalBusiness were merged into one node on the homepage. 51 nested Posso Organization objects on inner pages (author/publisher/creator/seller/provider) became `{ "@id": "…/#organization" }` references; `/pos-systems` also had a full LocalBusiness block claiming the `#organization` id — removed.
- **Homepage JSON-LD was not in the HTML.** It was injected with `next/script` after hydration, so crawlers reading the server HTML never saw it. Now a plain `<script>`.
- **Competitor pages:** BreadcrumbList + FAQPage only. No Review, Product or Rating about competitors.
- **Ratings:** no page ships `aggregateRating`. The homepage testimonials emit two Review nodes that match the two reviews visible on the page.

## 4. Redirect map

All redirects are permanent (`permanent: true` → HTTP 308, which Google treats as a 301). They now live in `src/lib/redirects.ts`, which `next.config.ts` serves and `src/app/sitemap.ts` reads, so a redirected URL can no longer reappear in the sitemap.

| From | To | Status |
|---|---|---|
| `/pizza-epos` | `/pos-for-pizza-shop` | **New** — unique content merged first |
| `/epos-system-for-indian-takeaway` | `/pos-for-indian-takeaway` | **New** — unique content merged first |
| `/best-pizza-epos-by-posso-ltd-uk` | `/pos-for-pizza-shop` | Flattened (was → `/pizza-epos`) |
| `/best-epos-system-for-indian-takeaway-by-posso-ltd-uk` | `/pos-for-indian-takeaway` | Flattened (was → `/epos-system-for-indian-takeaway`) |
| `/cafe-epos-system` | `/pos-for-cafe` | Already live since Sept 2026 — no change |
| `/best-order-counter-pos-system-by-posso-ltd-uk` | `/order-counter-pos` | Already live — no change |
| `/best-best-pos-system-for-coffee-shop-uk-by-posso-ltd-uk` | `/pos-for-cafe` | **Live** — approved by Paul (Oct 2026) |
| `/best-epos-software-for-takeaway-delivery-by-posso-ltd-uk` | `/epos-software-for-takeaway-delivery` | **Live** — approved by Paul (Oct 2026) |
| `/best-best-online-ordering-software-by-posso-ltd-uk` | `/online-ordering` | **Live** — approved by Paul (Oct 2026); replaces the old temporary 307 |
| `/credit-card-machine-clover-by-posso-ltd-uk` | `/credit-card-machines` | **Live** — approved by Paul (Oct 2026) |

Also: one exact duplicate rule (`/best-self-order-kiosk-fast-food-by-posso-ltd-uk`) removed; redirect chains: 0. Internal links that pointed at redirected URLs (`/pizza-epos` ×11, `/epos-system-for-indian-takeaway` ×6, `/kiosks` ×4, `/self-service-epos`, `/restaurant-self-ordering-system`, two blog-index entries) now point at the final URL; the built site has **0 internal links to a redirecting URL**.

### Duplicate pairs — decisions

- **`/cafe-epos-system` → `/pos-for-cafe`**: already done in September.
- **`/pizza-epos` → `/pos-for-pizza-shop`**: merged. Same intent ("pizza POS"); the guide is the stronger AEO page. Carried over: the size-based price matrix (topping price per size), the same builder on till and website, half-and-half priced per side, map-drawn zones with per-zone fee/minimum, out-of-area postcodes declined, radius by time of day. Two FAQs added.
- **`/epos-system-for-indian-takeaway` → `/pos-for-indian-takeaway`**: merged. Carried over: caller-ID one-tap reorder with delivery notes, out-of-area postcodes declined, auto-applied meal deals (two FAQs). Not carried over: the unverified multi-language ticket claim and the unsourced call-time figures ("3 minutes to under 90 seconds").

### `/pos-systems`, `/pos-companies-uk`, `/buy-epos-system-uk` — differentiated, not merged

| URL | Intent now | Title | H1 |
|---|---|---|---|
| `/pos-systems` | Packages & quotes (transactional; Ads landing page — form kept above the fold) | POS System Packages & Prices UK | POS System Packages & Quotes |
| `/pos-companies-uk` | Choosing a provider (vendor-neutral guide; Posso absent from the first two sections) | How to Choose a POS Company in the UK | How to choose a POS company in the UK |
| `/buy-epos-system-uk` | Buying vs leasing | Buy or Lease an EPOS System? UK Guide | Buying vs leasing an EPOS system in the UK |

## 5. New URLs

| URL | Indexing | Notes |
|---|---|---|
| `/retail-pos-system` | index | Buyer's guide scoped to confirmed features (see TODO) |
| `/small-business-pos-system` | index | Single site, starter package, finance, payback method |
| `/square-pos-alternative` | index (published Oct 2026) | Confirmed by Paul; competitor cells link to the source instead of quoting figures |
| `/sumup-pos-alternative` | index (published Oct 2026) | 〃 |
| `/lightspeed-alternative` | index (published Oct 2026) | 〃 |
| `/zettle-alternative` | index (published Oct 2026) | 〃 |
| `/toast-pos-alternative` | index (published Oct 2026) | 〃 |

**Competitor pages — published October 2026.** The competitors' own sites
(squareup.com, sumup.com, lightspeedhq.co.uk, zettle.com, toasttab.com) were
blocked by the build environment's network policy, so no competitor price or
feature figure is stated: competitor cells read "See Square's UK pricing" with
the official link. Paul confirmed the pages (including the "who X is better
for" wording) for publication, so `verified: true` and `lastChecked: "October
2026"` are set in `src/content/guides/competitors.ts`; the pages are indexable
and in the sitemap. Figures can still be added to `facts` later; set `verified`
back to `false` to pull a page out of the index if it goes stale.

## 6. `/pos` changes

- Hero: Unsplash stock image → `/images/posso-epos-order-types-till.png` (real Posso One screen), loaded with high fetch priority.
- New H2s, each opening with a direct answer: **What hardware does a POS system need?** (checklist table — terminal, card reader, printers, cash drawer, KDS, customer display, router, plus waiter pad and kiosk — required vs optional, Posso prices from `possoFacts`); **Is there such a thing as a free POS system?**; **Hidden fees to check on any POS quote** (links `/epos-system-monthly-fee` and `/epos-pricing-uk`); **Compliance: VAT, Making Tax Digital and PCI DSS**; **Compare Posso with other POS systems**.
- New FAQs: best POS for a small UK business; can I lease a POS system; how long are POS contracts; is a POS system tax deductible (general, "check with your accountant" — **TODO** wording). Warranty and go-live FAQs now read from `possoFacts`.
- Venue grid: duplicate Indian takeaway card removed (`/epos-system-for-indian-takeaway` alongside `/pos-for-indian-takeaway`); redirected `/pizza-epos` card folded into the pizza guide card; added Retail POS, Small Business POS, POS Packages & Quotes, Buy or Lease.
- Existing copy otherwise untouched.

## 7. Internal linking

- `<EposClusterLinks />` (an in-prose sentence linking **"EPOS system" → `/pos`** and **"EPOS pricing page" → `/epos-pricing-uk`**) added to 72 vertical page files and to `GuidePage`, which covers every typed guide. The built site was re-audited: every page in the table below links up to both.
- Footer: Buyer's Guides gains Retail POS, Small Business POS, Choosing a POS Company, Buy or Lease; new "Compare" list with all six competitor pages.
- Header: Hospitality gains POS Packages & Quotes, Small Business POS, and Compare POS Systems (→ `/pos#compare-pos-systems`, rather than five more dropdown rows); Retail gains Retail POS System.
- Sitemap: 216 URLs; 0 redirecting; 0 duplicates; new indexable pages included.
- Typed guides now support inline links in strings: `[anchor](/path)`.

## 8. Cannibalisation table

Every live page targeting a POS/EPOS head term, plus the redirected pair pages and the new pages. Title/H1 show the current value with the previous one in italics where it changed; word counts are main-content words from the built HTML (before → after). **(done)** = changed in this PR; **(TODO)** = recommendation awaiting approval — nothing was redirected without it.

| URL | Title | H1 | Primary intent | Words (before → after) | Recommended action |
|---|---|---|---|---|---|
| `/pos` | EPOS System UK: Restaurants & Takeaways \| From £499 \| Posso *(was: EPOS System for Restaurants & Takeaways UK \| Posso)* | EPOS Systems for UK Restaurants, Takeaways, Cafés and Pubs | Head term "EPOS/POS system" — definition + commercial (pillar) | 3631 → 5007 | Keep as pillar (done: new H2s, FAQs, schema, Compare section) |
| `/pos-systems` | POS System Packages & Prices UK \| Posso *(was: ⭐ POS Systems for Restaurants & Takeaways UK \| From £499 + VAT \| Posso)* | POS System Packages & Quotes *(was: POS Systems for Restaurants & Takeaways UK)* | Packages & quotes (transactional; Ads landing page) | 695 → 840 | Keep — re-targeted to packages/quotes, new title/H1 (done) |
| `/pos-companies-uk` | How to Choose a POS Company in the UK \| Posso *(was: POS Companies UK \| Posso)* | How to choose a POS company in the UK *(was: POS Companies UK)* | Choosing a provider (commercial investigation) | 1123 → 1388 | Keep — rewritten as provider-choosing guide, new title/H1 (done) |
| `/buy-epos-system-uk` | Buy or Lease an EPOS System? UK Guide \| Posso *(was: Buy ePOS System UK \| Posso)* | Buying vs leasing an EPOS system in the UK *(was: Buy ePOS System UK)* | Buying vs leasing (commercial investigation) | 1074 → 1344 | Keep — rewritten as buy-vs-lease guide, new title/H1 (done) |
| `/epos-pricing-uk` | EPOS Pricing UK \| Posso | EPOS Pricing UK | Price list ("EPOS pricing UK") | 1118 → 1132 | Keep — the price hub every page links to |
| `/epos-system-monthly-fee` | EPOS Monthly Fees \| Posso | EPOS monthly fees: what operators actually pay | Monthly fees (informational) | 2186 → 2222 | Keep |
| `/how-much-does-a-pos-system-cost-for-a-restaurant` | How Much Does a POS System Cost for a Restaurant? (2026 UK Guide) \| Posso *(was: 💰 How Much Does a POS System Cost for a Restaurant? (2026 UK Guide) \| Posso)* | How Much Does a POS System Cost for a Restaurant? | Cost question (informational) | 920 → 987 | Keep for now; overlaps /epos-pricing-uk — review in GSC (TODO) |
| `/pizza-epos` | Pizza ePOS \| Posso | Pizza ePOS | Pizza POS (product page) | 1120 | 301 → /pos-for-pizza-shop, unique content merged (done) |
| `/epos-system-for-indian-takeaway` | ePOS System for Indian Takeaway \| Posso | ePOS System for Indian Takeaway | Indian takeaway POS (product page) | 772 | 301 → /pos-for-indian-takeaway, unique content merged (done) |
| `/cafe-epos-system` | Cafe ePOS System \| Coffee Shop POS with Loyalty & Modifiers \| Posso | Cafe ePOS System | Café POS (product page) | 764 | Already 301 → /pos-for-cafe (Sept 2026); nothing to do |
| `/pos-for-pizza-shop` | POS for Pizza Shop \| Posso | POS for Pizza Shop | Pizza POS buyer's guide | 1258 → 1523 | Keep — pizza survivor |
| `/pos-for-indian-takeaway` | Indian Takeaway EPOS & Till System — from £499 \| Posso | POS for Indian Takeaways | Indian takeaway POS buyer's guide | 2000 → 2083 | Keep — Indian survivor |
| `/pos-for-cafe` | Café & Coffee Shop POS System UK \| Posso | Café POS system: the UK coffee shop buyer's guide | Café POS buyer's guide | 1998 → 2034 | Keep — café survivor |
| `/pos-for-fish-and-chip-shop` | Fish & Chip Shop EPOS & Till System — from £499 \| Posso | POS for Fish and Chip Shops | Chip shop POS buyer's guide | 1963 → 2000 | Keep |
| `/pos-for-kebab-shop` | POS for Kebab Shops \| Posso | POS for Kebab Shops | Kebab shop POS buyer's guide | 1886 → 1923 | Keep |
| `/pos-for-chinese-takeaway` | Chinese Takeaway EPOS & Till System — from £499 \| Posso | POS for Chinese Takeaways | Chinese takeaway POS buyer's guide | 1922 → 1959 | Keep |
| `/pos-for-bakery` | POS for Bakery \| Posso | POS for bakery and cake shop | Bakery POS buyer's guide | 2088 → 2122 | Keep |
| `/pos-for-dessert-shop` | Dessert & Bubble Tea Shop POS \| Posso | Dessert and bubble tea shop POS: what owners actually say | Dessert / bubble tea POS guide | 2356 → 2390 | Keep |
| `/pos-for-sweet-shop` | POS for Sweet Shop \| Posso | POS for Sweet Shop | Sweet shop POS | 1240 → 1276 | Merge with /sweet-shop-pos and /sweet-shop-point-of-sale — same intent (TODO) |
| `/sweet-shop-pos` | Sweet Shop POS System \| Posso | Sweet Shop POS System | Sweet shop POS | 1069 → 1105 | Merge candidate (TODO) — see /pos-for-sweet-shop |
| `/sweet-shop-point-of-sale` | Sweet Shop Point of Sale \| Posso | Sweet Shop Point of Sale | Sweet shop POS | 1313 | Merge candidate (TODO) — see /pos-for-sweet-shop |
| `/restaurant-epos` | Restaurant ePOS System \| Table Management & Dine-In Features \| Posso | Restaurant ePOS System | Restaurant EPOS (product) | 895 → 931 | Keep as restaurant hub |
| `/restaurant-till-system` | Restaurant Till System \| Posso | Restaurant Till System | Restaurant till (product) | 1196 → 1232 | Merge into /restaurant-epos — same intent (TODO) |
| `/best-restaurant-epos-system-uk` | Best Restaurant EPOS Systems UK (2026): Guide + Comparison \| Posso | The Best Restaurant EPOS Systems in the UK | Best restaurant EPOS (comparison) | 1163 → 1216 | Keep |
| `/top-5-pos-systems-for-restaurants` | Top 5 POS Systems for Restaurants UK (2026 Comparison) \| Posso *(was: ⭐ Top 5 POS Systems for Restaurants UK (2026 Comparison) \| Posso)* | Top 5 POS Systems for Restaurants (2026) | Best restaurant POS (comparison listicle) | 963 → 993 | Merge into /best-restaurant-epos-system-uk; also contains unsourced competitor claims (TODO) |
| `/cheap-epos-systems-for-restaurants` | Affordable ePOS Systems for Restaurants \| From £499 + VAT \| Posso | Affordable ePOS Systems for Restaurants | Cheap/affordable EPOS | 809 → 848 | Merge with /cheap-epos-software (TODO) |
| `/cheap-epos-software` | Cheap ePOS Software \| Posso | Cheap ePOS Software | Cheap EPOS | 1187 → 1224 | Merge candidate (TODO) |
| `/free-epos-software` | Free ePOS Software \| Posso | Free ePOS Software | Free EPOS | 1073 → 1118 | Keep as "free" hub; fold /free-restaurant-pos, /restaurant-software-free, /blog/free-epos-software-uk-truth into it (TODO) |
| `/free-restaurant-pos` | Free Restaurant POS \| Posso | Free Restaurant POS | Free restaurant POS | 1199 → 1236 | Merge into /free-epos-software (TODO) |
| `/open-source-epos-software` | Open Source ePOS Software \| Posso | Open Source ePOS Software | Open-source EPOS | 1216 → 1257 | Keep (distinct modifier) |
| `/takeaway-epos` | Takeaway ePOS \| Fast Order Processing & Online Ordering \| Posso | Takeaway ePOS | Takeaway EPOS (product) | 948 → 984 | Keep as takeaway hub |
| `/takeaway-pos` | Takeaway POS \| Posso | Takeaway POS | Takeaway POS (product) | 1245 → 1281 | Merge into /takeaway-epos (TODO) — 6 pages share this intent |
| `/epos-system-for-takeaway` | ePOS System for Takeaway \| Fast Order Entry & Delivery Management \| Posso | ePOS System for Takeaway | Takeaway EPOS (product) | 744 → 770 | Merge into /takeaway-epos (TODO) |
| `/epos-systems-for-takeaways` | ePOS Systems for Takeaways \| Complete Hardware & Software Bundle \| Posso | ePOS Systems for Takeaways | Takeaway EPOS bundle (product) | 910 → 934 | Merge into /takeaway-epos (TODO) |
| `/epos-software-for-takeaway` | ePOS Software for Takeaway \| Cloud-Based Takeaway Management \| Posso | ePOS Software for Takeaway | Takeaway EPOS software (product) | 757 → 793 | Merge into /takeaway-epos (TODO) |
| `/epos-software-for-takeaway-delivery` | ePOS Software for Takeaway Delivery \| Driver App & Zone Management \| Posso | ePOS Software for Takeaway Delivery | Takeaway delivery EPOS | 839 → 875 | Merge into /delivery-management-pos (TODO) |
| `/best-epos-system-for-takeaway` | Best ePOS System for Takeaway \| What to Look For in 2026 \| Posso | Best ePOS System for Takeaway | Best takeaway EPOS (comparison) | 1153 → 1188 | Keep |
| `/pizza-pos-software` | Pizza POS Software \| Posso | Pizza POS Software | Pizza POS software (product) | 1100 → 1136 | Merge into /pos-for-pizza-shop (TODO) |
| `/pizza-restaurant-software` | Pizza Restaurant Software \| Posso | Pizza Restaurant Software | Pizza restaurant software (product) | 1154 | Merge into /pos-for-pizza-shop (TODO) |
| `/pizza-delivery-pos` | Pizza Delivery POS \| Posso | Pizza Delivery POS | Pizza delivery POS | 1057 → 1093 | Keep (delivery intent) |
| `/best-pos-system-for-pizzeria` | Best POS System for a Pizzeria (2026 UK Guide) \| Posso | What Is the Best POS System for a Pizzeria? | Best pizzeria POS (question) | 1227 → 1263 | Keep |
| `/pub-pos-system` | Pub POS System \| Posso | Pub POS System | Pub POS | 1028 → 1064 | Merge with /pub-epos-system — identical intent (TODO) |
| `/pub-epos-system` | Pub ePOS System \| Posso | Pub ePOS System | Pub EPOS | 1111 → 1147 | Merge candidate (TODO) |
| `/bar-epos` | Bar ePOS System \| Tab Management, Speed Ordering & Split Bills \| Posso | Bar ePOS System | Bar EPOS | 1063 → 1099 | Keep |
| `/hotel-epos-system` | Hotel ePOS System \| Posso | Hotel ePOS System | Hotel EPOS | 964 → 1000 | Keep |
| `/golf-club-pos-system` | Golf Club POS System \| Posso | Golf Club POS System | Golf club POS | 1030 → 1066 | Keep |
| `/food-truck-epos-system` | Food Truck EPOS System UK — Tills & Kiosks for Trailers & Mobile Catering \| Posso | Food truck & trailer EPOS | Food truck EPOS guide | 1305 → 1341 | Keep |
| `/salon-pos-software` | Salon POS Software \| Posso | Salon POS Software | Salon POS | 1004 → 1040 | Keep as salon hub |
| `/beauty-salon-pos` | Beauty Salon POS \| Posso | Beauty Salon POS | Beauty salon POS | 1220 → 1256 | Consider merging into /salon-pos-software (TODO) |
| `/nail-salon-pos` | Nail Salon POS \| Posso | Nail Salon POS | Nail salon POS | 1228 → 1264 | Consider merging into /salon-pos-software (TODO) |
| `/grocery-store-epos` | Grocery Store ePOS \| Posso | Grocery Store ePOS | Grocery EPOS (retail) | 1238 → 1274 | Keep; retail claims (barcode, scales, supplier ordering) unconfirmed (TODO) |
| `/homeware-pos` | Homeware POS \| Posso | Homeware POS | Homeware POS (retail) | 1109 → 1145 | Keep; retail claims unconfirmed (TODO) |
| `/shop-till-software` | Shop Till Software \| Posso | Shop Till Software | Shop till (retail) | 1135 → 1171 | Fold into /retail-pos-system once retail features confirmed (TODO) |
| `/pos-software` | POS Software \| Posso | POS Software | POS software (modifier) | 1058 → 1094 | Merge /pos-machine-software and /till-system-software into it (TODO) |
| `/pos-machine-software` | POS Machine Software \| Posso | POS Machine Software | POS machine software | 1072 → 1108 | Merge into /pos-software (TODO) |
| `/till-system-software` | Till System Software \| Posso | Till System Software | Till system software | 1123 → 1156 | Merge into /pos-software (TODO) |
| `/touchscreen-pos-system` | Touchscreen POS System \| Posso | Touchscreen POS System | Touchscreen POS | 1056 → 1092 | Merge with /touch-screen-till-system — same intent (TODO) |
| `/touch-screen-till-system` | Touch Screen Till System \| Posso | Touch Screen Till System | Touch screen till | 1313 → 1350 | Merge candidate (TODO) |
| `/tablet-epos-system` | Tablet ePOS System \| Posso | Tablet ePOS System | Tablet EPOS | 1092 → 1128 | Keep |
| `/portable-epos-system` | Portable ePOS System \| Posso | Portable ePOS System | Portable EPOS | 1070 → 1106 | Merge with /mobile-pos-system-uk (TODO) |
| `/mobile-pos-system-uk` | Mobile POS System UK \| Posso | Mobile POS System UK | Mobile POS | 1222 → 1258 | Merge candidate (TODO) |
| `/cloud-epos-system` | Cloud ePOS System \| Posso | Cloud ePOS System | Cloud EPOS | 1039 → 1075 | Keep (distinct modifier) |
| `/easy-pos-system` | Easy POS System \| Posso | Easy POS System | Easy POS | 1150 → 1180 | Keep (low priority) |
| `/custom-pos-system` | Custom POS System \| Posso | Custom POS System | Custom POS | 1136 → 1187 | Merge with /bespoke-epos-software (TODO) |
| `/bespoke-epos-software` | Bespoke ePOS Software \| Posso | Bespoke ePOS Software | Bespoke EPOS | 1095 → 1143 | Merge candidate (TODO) |
| `/build-your-own-pos-system` | Build Your Own POS System \| Posso | Build Your Own POS System | Build your own POS | 1148 → 1192 | Merge with /diy-pos-system-restaurants (TODO) |
| `/diy-pos-system-restaurants` | DIY POS System for Restaurants \| Posso | DIY POS System for Restaurants | DIY POS | 1159 → 1183 | Merge candidate (TODO) |
| `/hospitality-pos-software` | Hospitality POS Software \| Posso | Hospitality POS Software | Hospitality POS software | 935 → 971 | Keep; overlaps /pos — differentiate or merge (TODO) |
| `/order-counter-pos` | Order Counter POS System \| Posso | Order Counter POS System | Order counter POS | 1151 → 1187 | Keep (target of the best-order-counter alias 301) |
| `/kiosk-pos` | Kiosk POS \| Posso | Kiosk POS | Kiosk POS | 1184 → 1220 | Keep; overlaps /self-order-kiosks (TODO) |
| `/online-ordering-pos` | Online Ordering POS \| Posso | Online Ordering POS | Online ordering POS | 1133 → 1169 | Keep |
| `/delivery-pos-software` | Delivery POS Software \| Posso | Delivery POS Software | Delivery POS | 1128 → 1164 | Merge into /delivery-management-pos (TODO) |
| `/delivery-management-pos` | POS with Driver Management & Delivery Zones (UK) \| Posso | POS with driver management and delivery zones | Delivery management guide | 1393 → 1429 | Keep as delivery hub |
| `/epos-booking-system` | ePOS Booking System \| Posso | ePOS Booking System | EPOS with bookings | 1213 → 1249 | Keep |
| `/epos-marketing` | ePOS Marketing \| Posso | ePOS Marketing | EPOS marketing | 1121 → 1157 | Keep |
| `/epos-credit-card-application` | ePOS Credit Card Application \| Posso | ePOS Credit Card Application | Card machine application | 1108 → 1144 | Keep; "no lock-in" claim flagged (TODO) |
| `/epos-portal` | ePOS Portal \| Posso | ePOS Portal | EPOS portal | 1150 → 1186 | Low value — consider noindex or merge into /cloud-epos-system (TODO) |
| `/website-pos-finance-software` | Website POS Finance Software \| Posso | Website POS Finance Software | Website + POS + finance | 1089 → 1137 | Low value — consider merge (TODO) |
| `/pos-webshop` | POS Webshop \| Posso | POS Webshop | POS webshop | 1062 → 1098 | Keep (not POS-system intent) |
| `/pos-signage` | POS Signage \| Posso | POS Signage | POS signage | 1158 → 1194 | Keep (signage intent) |
| `/dark-kitchens-quick-set-up-epos-and-website-orders-take-orders-now` | Dark Kitchen ePOS & Online Ordering \| Quick Setup \| Posso *(was: 🚀 Dark Kitchen ePOS & Online Ordering \| Quick Setup \| Posso)* | Dark Kitchen ePOS & Website Orders | Dark kitchen EPOS | 870 → 896 | Overlaps /best-dark-kitchen-software-uk — merge (TODO) |
| `/multi-site-epos-uk` | Multi-Site EPOS for UK Takeaways & Restaurant Groups \| Posso | Multi-site EPOS for UK takeaways and restaurant groups | Multi-site EPOS guide | 1420 → 1456 | Keep |
| `/replace-old-epos-system` | Replacing an Old EPOS System: Migration Guide for UK Hospitality \| Posso | Replacing an old EPOS system | Switching guide | 1460 → 1495 | Keep |
| `/opening-a-takeaway-epos-checklist` | Opening a Takeaway in the UK: EPOS & Equipment Checklist (2026) \| Posso | Opening a takeaway: EPOS and equipment checklist | New takeaway checklist | 1628 → 1653 | Keep |
| `/epos-with-teya` | EPOS with Teya \| Posso | EPOS that works with Teya | EPOS + Teya | 1196 → 1230 | Keep |
| `/epos-now-alternative` | Epos Now Alternative for UK Takeaways & Restaurants (2026) \| Posso | Epos Now alternative for UK takeaways and restaurants | Competitor alternative | 1705 → 1731 | Keep |
| `/posso-vs-epos-now` | Posso vs Epos Now (2026): UK Takeaway & Restaurant EPOS Compared \| Posso | Posso vs Epos Now | Competitor comparison | 1470 → 1504 | Keep |
| `/takeaway-epos-what-owners-say` | What Takeaway Owners Say About EPOS \| Posso | Takeaway EPOS: what owners actually say | Owner opinions (informational) | 2087 → 2123 | Keep |
| `/best-pos-system-reddit` | Best POS Systems According to Reddit Users \| UK Guide 2026 \| Posso | What Reddit Users Really Say About POS Systems | Reddit opinions (informational) | 2186 → 2222 | Keep; competitor claims to source (TODO) |
| `/does-dominos-use-a-pos-system` | Does Domino's Use a POS System? (Pulse Explained) \| Posso | Does Domino's Use a POS System? | Question (informational) | 1233 → 1269 | Keep |
| `/solutions/dry-cleaning-pos-system` | Dry Cleaning POS System \| CleanPos Laundry & Dry Cleaning Software UK \| Posso | Modern Dry Cleaning POS Solutions | Dry cleaning POS | 641 → 677 | Keep (different vertical) |
| `/solutions/franchise-pos-systems` | Franchise POS System \| Multi-Unit Franchise ePOS Software UK \| Posso | Multi-Unit Franchise POS Systems | Franchise POS | 531 → 567 | Overlaps /franchise — merge (TODO) |
| `/blog/what-is-epos-system` | What Is an EPOS System? Transform Your Business in 2026 \| Posso | What Is an EPOS System, and How Does It Transform Your Business in 2026? | "What is an EPOS system" (definition) | 1021 | Cannibalises /pos definitional section — fold into /pos and 301 (TODO) |
| `/blog/pos-systems-for-restaurants-and-takeaways` | POSSO POS Systems UK – Fast Restaurant EPOS with Menu Control & Reporting \| Posso | A Modern EPOS System Built for Real UK Hospitality | POS systems (head term, thin post) | 437 | Cannibalises /pos — 301 → /pos (TODO) |
| `/blog/free-epos-software-uk-truth` | The Truth About Free EPOS Software in the UK \| Posso | Free EPOS Software UK: Is it Really Free? | Free EPOS (thin post) | 358 | Fold into /free-epos-software (TODO) |
| `/blog/cafe-pos-system-efficiency` | Speed Up Your Coffee Line with a Smart Cafe POS \| Posso | Master the Morning Rush | Café POS (thin post) | 276 | Fold into /pos-for-cafe (TODO) |
| `/blog/epos-system-for-indian-takeaway` | The Perfect EPOS System for Your Indian Takeaway \| Posso | Spice Up Your Efficiency with The Perfect Indian EPOS | Indian takeaway EPOS (thin post) | 306 | Fold into /pos-for-indian-takeaway (TODO) |
| `/blog/pos-for-pizza-restaurant-best-system-for-pizza-shops` | Best POS for Pizza Restaurant & Shops in the UK \| Posso | The Best ePOS System for a Pizza Restaurant or Takeaway | Pizza POS (thin post) | 305 | Fold into /pos-for-pizza-shop (TODO) |
| `/blog/best-pos-system-for-pizza-delivery` | What is the Best POS System for Pizza Delivery? \| Posso | THE PIZZA ENGINE. | Pizza delivery POS (thin post) | 259 | Fold into /pizza-delivery-pos (TODO) |
| `/blog/epos-software-for-takeaway-orders` | Streamline Your Orders with Specialised EPOS Software \| Posso | Specialised EPOS Software for Modern Takeaways | Takeaway EPOS (thin post) | 224 | Fold into /takeaway-epos (TODO) |
| `/blog/epos-system-for-takeaway-commission-free` | Stop Paying Commissions: A Better EPOS System for Takeaway \| Posso | TAKE BACK YOUR REVENUE | Takeaway EPOS (thin post) | 204 | Fold into /takeaway-epos (TODO) |
| `/blog/hybrid-epos-systems-for-takeaways` | Why "Hybrid" EPOS Systems for Takeaways Are Essential \| Posso | The Power of Hybrid EPOS | Takeaway EPOS (thin post) | 258 | Fold into /takeaway-epos (TODO) |
| `/blog/restaurant-epos-table-management` | Table Management Made Easy with Restaurant EPOS \| Posso | ELEVATE YOUR GUEST FLOW | Restaurant table management (thin post) | 262 | Fold into /restaurant-epos (TODO) |
| `/blog/benefits-of-a-mobile-pos-device-for-restaurants` | Benefits of a Mobile POS Device for Restaurants \| Posso | The Top Benefits of a Mobile POS Device for Restaurants | Mobile POS (thin post) | 366 | Fold into /mobile-pos-system-uk (TODO) |
| `/blog/sync-epos-menu-with-kiosks-and-digital-signage` | Sync Your EPOS Menu With Kiosks and Digital Signage \| Posso | How Can I Sync My EPOS Menu With Kiosks and Digital Signage? | Menu sync (informational) | 2188 → 2178 | Keep |
| `/retail-pos-system` | Retail POS System UK: Buyer's Guide \| Posso | Retail POS system: the UK buyer's guide | Retail POS (new) | 1328 | New page (done) |
| `/small-business-pos-system` | Small Business POS System UK \| Posso | POS system for a small business: what you need and what it costs | Small business POS (new) | 1350 | New page (done) |
| `/square-pos-alternative` | Square POS Alternative for UK Hospitality \| Posso | Square POS alternative for UK restaurants and takeaways | Competitor alternative (new) | 1178 | New page — noindex until competitor facts verified (done) |
| `/sumup-pos-alternative` | SumUp POS Alternative for UK Hospitality \| Posso | SumUp POS alternative for UK restaurants and takeaways | Competitor alternative (new) | 1164 | New page — noindex until verified (done) |
| `/lightspeed-alternative` | Lightspeed Alternative for UK Hospitality \| Posso | Lightspeed alternative for UK restaurants and takeaways | Competitor alternative (new) | 1152 | New page — noindex until verified (done) |
| `/zettle-alternative` | Zettle Alternative for UK Hospitality \| Posso | Zettle alternative for UK restaurants and takeaways | Competitor alternative (new) | 1176 | New page — noindex until verified (done) |
| `/toast-pos-alternative` | Toast POS Alternative for UK Hospitality \| Posso | Toast POS alternative for UK restaurants and takeaways | Competitor alternative (new) | 1166 | New page — noindex until verified (done) |
| `/cash-register-small-business` | Cash Register for Small Business \| Posso | Cash Register for Small Business | Cash register for small business | 1403 | Keep; linked from /small-business-pos-system — review overlap in GSC (TODO) |

## 9. `-by-posso-ltd-uk` programmatic aliases — full inventory

None deleted. All 173 now 308 to a real page (the last 4 were approved and switched on in October 2026).

| Alias URL | Status | Target |
|---|---|---|
| `/best-app-for-takeaways-by-posso-ltd-uk` | Already 308 (live) | `/takeaway-app` |
| `/best-bar-ordering-app-by-posso-ltd-uk` | Already 308 (live) | `/bar-ordering-app` |
| `/best-beauty-salon-software-point-of-sale-by-posso-ltd-uk` | Already 308 (live) | `/beauty-salon-pos` |
| `/best-bespoke-epos-software-by-posso-ltd-uk` | Already 308 (live) | `/bespoke-epos-software` |
| `/best-bespoke-pos-by-posso-ltd-uk` | Already 308 (live) | `/bespoke-epos-software` |
| `/best-best-cash-register-for-small-business-uk-by-posso-ltd-uk` | Already 308 (live) | `/cash-register-small-business` |
| `/best-best-epos-system-for-small-grocery-store-by-posso-ltd-uk` | Already 308 (live) | `/grocery-store-epos` |
| `/best-best-epos-system-review-uk-by-posso-ltd-uk` | Already 308 (live) | `/best-restaurant-epos-system-uk` |
| `/best-best-food-delivery-app-uk-by-posso-ltd-uk` | Already 308 (live) | `/blog/best-food-delivery-app-uk` |
| `/best-best-free-epos-software-by-posso-ltd-uk` | Already 308 (live) | `/free-restaurant-pos` |
| `/best-best-online-ordering-software-by-posso-ltd-uk` | 308 (approved Oct 2026) | `/online-ordering` |
| `/best-best-pizza-pos-by-posso-ltd-uk` | Already 308 (live) | `/pizza-pos-software` |
| `/best-best-pizza-pos-system-2020-by-posso-ltd-uk` | Already 308 (live) | `/pizza-pos-software` |
| `/best-best-pos-for-pizza-delivery-by-posso-ltd-uk` | Already 308 (live) | `/pizza-delivery-pos` |
| `/best-best-pos-system-for-coffee-shop-uk-by-posso-ltd-uk` | 308 (approved Oct 2026) | `/pos-for-cafe` |
| `/best-best-pos-system-for-pizza-shop-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-pizza-shop` |
| `/best-branded-self-serve-coffee-cart-by-posso-ltd-uk` | Already 308 (live) | `/branded-self-serve-coffee-cart` |
| `/best-build-your-own-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/build-your-own-pos-system` |
| `/best-buy-epos-system-uk-by-posso-ltd-uk` | Already 308 (live) | `/buy-epos-system-uk` |
| `/best-cafe-online-ordering-system-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-cheap-epos-by-posso-ltd-uk` | Already 308 (live) | `/cheap-epos-software` |
| `/best-cheap-epos-software-by-posso-ltd-uk` | Already 308 (live) | `/cheap-epos-software` |
| `/best-cheap-epos-system-by-posso-ltd-uk` | Already 308 (live) | `/cheap-epos-software` |
| `/best-cheap-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/cheap-epos-software` |
| `/best-cloud-based-epos-systems-uk-by-posso-ltd-uk` | Already 308 (live) | `/cloud-epos-system` |
| `/best-cloud-epos-software-by-posso-ltd-uk` | Already 308 (live) | `/cloud-epos-system` |
| `/best-coffee-ordering-app-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-coffee-pos-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-cafe` |
| `/best-coffee-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-cafe` |
| `/best-coffee-shop-ordering-app-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-custom-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/custom-pos-system` |
| `/best-dark-kitchen-restaurant-by-posso-ltd-uk` | Already 308 (live) | `/best-dark-kitchen-software-uk` |
| `/best-dark-kitchen-software-by-posso-ltd-uk` | Already 308 (live) | `/best-dark-kitchen-software-uk` |
| `/best-delivery-pos-software-by-posso-ltd-uk` | Already 308 (live) | `/delivery-pos-software` |
| `/best-demo-restaurant-sunderland-by-posso-ltd-uk` | Already 308 (live) | `/pos` |
| `/best-digital-signage-edinburgh-by-posso-ltd-uk` | Already 308 (live) | `/digital-signage` |
| `/best-digital-signage-newcastle-by-posso-ltd-uk` | Already 308 (live) | `/digital-signage` |
| `/best-digital-signage-sheffield-by-posso-ltd-uk` | Already 308 (live) | `/digital-signage` |
| `/best-digital-signage-systems-by-posso-ltd-uk` | Already 308 (live) | `/digital-signage-systems` |
| `/best-diy-cash-drawer-by-posso-ltd-uk` | Already 308 (live) | `/diy-cash-drawer` |
| `/best-diy-pos-system-restaurants-by-posso-ltd-uk` | Already 308 (live) | `/diy-pos-system-restaurants` |
| `/best-dry-cleaning-software-by-posso-ltd-uk` | Already 308 (live) | `/dry-cleaning-software` |
| `/best-easy-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/easy-pos-system` |
| `/best-epos-booking-system-by-posso-ltd-uk` | Already 308 (live) | `/epos-booking-system` |
| `/best-epos-bournemouth-by-posso-ltd-uk` | Already 308 (live) | `/pos` |
| `/best-epos-credit-card-application-by-posso-ltd-uk` | Already 308 (live) | `/epos-credit-card-application` |
| `/best-epos-london-by-posso-ltd-uk` | Already 308 (live) | `/pos` |
| `/best-epos-marketing-by-posso-ltd-uk` | Already 308 (live) | `/epos-marketing` |
| `/best-epos-nottingham-by-posso-ltd-uk` | Already 308 (live) | `/pos` |
| `/best-epos-now-booking-system-by-posso-ltd-uk` | Already 308 (live) | `/epos-booking-system` |
| `/best-epos-now-contact-uk-by-posso-ltd-uk` | Already 308 (live) | `/epos-now-alternative` |
| `/best-epos-now-handheld-by-posso-ltd-uk` | Already 308 (live) | `/epos-now-alternative` |
| `/best-epos-now-ordering-app-by-posso-ltd-uk` | Already 308 (live) | `/epos-now-alternative` |
| `/best-epos-portal-by-posso-ltd-uk` | Already 308 (live) | `/epos-portal` |
| `/best-epos-software-for-takeaway-delivery-by-posso-ltd-uk` | 308 (approved Oct 2026) | `/epos-software-for-takeaway-delivery` |
| `/best-epos-software-free-by-posso-ltd-uk` | Already 308 (live) | `/free-restaurant-pos` |
| `/best-epos-system-for-indian-takeaway-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-indian-takeaway` |
| `/best-epos-system-restaurant-by-posso-ltd-uk` | Already 308 (live) | `/best-restaurant-epos-system-uk` |
| `/best-epos-systems-for-takeaways-by-posso-ltd-uk` | Already 308 (live) | `/epos-systems-for-takeaways` |
| `/best-epos-touchscreen-by-posso-ltd-uk` | Already 308 (live) | `/touch-screen-till-system` |
| `/best-epos-video-by-posso-ltd-uk` | Already 308 (live) | `/pos` |
| `/best-eposnow-online-ordering-by-posso-ltd-uk` | Already 308 (live) | `/epos-now-alternative` |
| `/best-facebook-food-ordering-system-by-posso-ltd-uk` | Already 308 (live) | `/facebook-food-ordering-system` |
| `/best-food-and-drink-digital-signage-by-posso-ltd-uk` | Already 308 (live) | `/food-and-drink-digital-signage` |
| `/best-food-delivery-order-by-posso-ltd-uk` | Already 308 (live) | `/food-delivery-ordering` |
| `/best-food-on-the-table-app-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-order-at-table-app` |
| `/best-food-online-ordering-by-posso-ltd-uk` | Already 308 (live) | `/online-ordering` |
| `/best-food-ordering-apps-by-posso-ltd-uk` | Already 308 (live) | `/food-ordering-apps` |
| `/best-food-ordering-machine-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks` |
| `/best-food-ordering-system-by-posso-ltd-uk` | Already 308 (live) | `/food-ordering-system` |
| `/best-food-to-order-online-by-posso-ltd-uk` | Already 308 (live) | `/food-to-order-online` |
| `/best-free-card-machine-by-posso-ltd-uk` | Already 308 (live) | `/free-card-machine` |
| `/best-free-epos-software-by-posso-ltd-uk` | Already 308 (live) | `/free-epos-software` |
| `/best-free-epos-software-uk-by-posso-ltd-uk` | Already 308 (live) | `/free-epos-software` |
| `/best-free-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/free-restaurant-pos` |
| `/best-free-restaurant-pos-by-posso-ltd-uk` | Already 308 (live) | `/free-restaurant-pos` |
| `/best-golf-club-pos-systems-by-posso-ltd-uk` | Already 308 (live) | `/golf-club-pos-system` |
| `/best-homeware-pos-by-posso-ltd-uk` | Already 308 (live) | `/homeware-pos` |
| `/best-hospitality-kiosks-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks` |
| `/best-hospitality-pos-software-by-posso-ltd-uk` | Already 308 (live) | `/hospitality-pos-software` |
| `/best-hospitality-software-uk-by-posso-ltd-uk` | Already 308 (live) | `/hospitality-software-uk` |
| `/best-hotel-epos-systems-by-posso-ltd-uk` | Already 308 (live) | `/hotel-epos-system` |
| `/best-kiosk-pos-by-posso-ltd-uk` | Already 308 (live) | `/kiosk-pos` |
| `/best-kiosk-uk-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks` |
| `/best-mobile-ordering-app-for-coffee-shops-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-mobile-ordering-apps-by-posso-ltd-uk` | Already 308 (live) | `/mobile-ordering-apps` |
| `/best-mobile-ordering-platform-for-coffee-shops-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-mobile-ordering-system-for-coffee-shops-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-mobile-pos-system-uk-by-posso-ltd-uk` | Already 308 (live) | `/mobile-pos-system-uk` |
| `/best-nail-salon-pos-by-posso-ltd-uk` | Already 308 (live) | `/nail-salon-pos` |
| `/best-nail-salon-pos-software-by-posso-ltd-uk` | Already 308 (live) | `/nail-salon-pos` |
| `/best-online-food-ordering-portal-by-posso-ltd-uk` | Already 308 (live) | `/online-food-ordering-portal` |
| `/best-online-food-ordering-software-by-posso-ltd-uk` | Already 308 (live) | `/online-food-ordering-software` |
| `/best-online-ordering-platform-for-coffee-shops-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-online-ordering-pos-by-posso-ltd-uk` | Already 308 (live) | `/online-ordering-pos` |
| `/best-online-ordering-software-for-coffee-shops-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-online-ordering-software-for-restaurants-by-posso-ltd-uk` | Already 308 (live) | `/online-ordering` |
| `/best-open-source-epos-software-by-posso-ltd-uk` | Already 308 (live) | `/open-source-epos-software` |
| `/best-order-counter-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/order-counter-pos` |
| `/best-pdq-machine-for-small-businesses-by-posso-ltd-uk` | Already 308 (live) | `/pdq-machine-small-business` |
| `/best-pdq-machines-by-posso-ltd-uk` | Already 308 (live) | `/pdq-systems` |
| `/best-pdq-machines-uk-by-posso-ltd-uk` | Already 308 (live) | `/pdq-systems` |
| `/best-pdq-systems-by-posso-ltd-uk` | Already 308 (live) | `/pdq-systems` |
| `/best-pizza-delivery-pos-by-posso-ltd-uk` | Already 308 (live) | `/pizza-delivery-pos` |
| `/best-pizza-epos-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-pizza-shop` |
| `/best-pizza-pos-software-by-posso-ltd-uk` | Already 308 (live) | `/pizza-pos-software` |
| `/best-pizza-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/pizza-pos-software` |
| `/best-pizza-restaurant-software-by-posso-ltd-uk` | Already 308 (live) | `/pizza-restaurant-software` |
| `/best-pizza-shop-point-of-sale-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-pizza-shop` |
| `/best-pizza-shop-pos-software-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-pizza-shop` |
| `/best-portable-epos-systems-by-posso-ltd-uk` | Already 308 (live) | `/portable-epos-system` |
| `/best-pos-companies-uk-by-posso-ltd-uk` | Already 308 (live) | `/pos-companies-uk` |
| `/best-pos-for-pizza-shop-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-pizza-shop` |
| `/best-pos-for-sweet-shop-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-sweet-shop` |
| `/best-pos-hospitality-systems-by-posso-ltd-uk` | Already 308 (live) | `/hospitality-software-uk` |
| `/best-pos-kiosks-by-posso-ltd-uk` | Already 308 (live) | `/kiosk-pos` |
| `/best-pos-leicester-by-posso-ltd-uk` | Already 308 (live) | `/pos` |
| `/best-pos-machine-software-by-posso-ltd-uk` | Already 308 (live) | `/pos-machine-software` |
| `/best-pos-signage-by-posso-ltd-uk` | Already 308 (live) | `/pos-signage` |
| `/best-pos-software-by-posso-ltd-uk` | Already 308 (live) | `/pos-software` |
| `/best-pos-software-for-sweet-shop-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-sweet-shop` |
| `/best-pos-system-for-pizza-shop-by-posso-ltd-uk` | Already 308 (live) | `/pos-for-pizza-shop` |
| `/best-pos-system-for-takeaway-by-posso-ltd-uk` | Already 308 (live) | `/best-epos-system-for-takeaway` |
| `/best-pos-webshop-by-posso-ltd-uk` | Already 308 (live) | `/pos-webshop` |
| `/best-pub-epos-by-posso-ltd-uk` | Already 308 (live) | `/pub-epos-system` |
| `/best-pub-epos-system-by-posso-ltd-uk` | Already 308 (live) | `/pub-epos-system` |
| `/best-pub-pos-by-posso-ltd-uk` | Already 308 (live) | `/pub-pos-system` |
| `/best-restaurant-delivery-system-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-delivery-system` |
| `/best-restaurant-epos-london-by-posso-ltd-uk` | Already 308 (live) | `/best-restaurant-epos-system-uk` |
| `/best-restaurant-epos-uk-by-posso-ltd-uk` | Already 308 (live) | `/best-restaurant-epos-system-uk` |
| `/best-restaurant-order-at-table-app-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-order-at-table-app` |
| `/best-restaurant-order-taking-system-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-ordering-app` |
| `/best-restaurant-ordering-app-free-uk-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-ordering-app` |
| `/best-restaurant-pre-order-app-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-pre-order-app` |
| `/best-restaurant-self-ordering-system-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks-for-restaurants` |
| `/best-restaurant-software-free-download-full-version-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-software-free` |
| `/best-restaurant-till-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-till-system` |
| `/best-salon-point-of-sale-software-by-posso-ltd-uk` | Already 308 (live) | `/salon-pos-software` |
| `/best-salon-software-free-download-full-version-by-posso-ltd-uk` | Already 308 (live) | `/salon-pos-software` |
| `/best-self-employed-card-machine-by-posso-ltd-uk` | Already 308 (live) | `/self-employed-card-machine` |
| `/best-self-order-app-by-posso-ltd-uk` | Already 308 (live) | `/self-order-app` |
| `/best-self-order-kiosk-fast-food-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosk-fast-food` |
| `/best-self-ordering-kiosks-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks` |
| `/best-self-ordering-system-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks` |
| `/best-self-serve-coffee-bar-stands-by-posso-ltd-uk` | Already 308 (live) | `/self-serve-coffee-bar` |
| `/best-self-serve-kiosk-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks` |
| `/best-self-service-epos-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks` |
| `/best-shop-till-software-by-posso-ltd-uk` | Already 308 (live) | `/shop-till-software` |
| `/best-software-for-cleaners-by-posso-ltd-uk` | Already 308 (live) | `/dry-cleaning-software` |
| `/best-spot-dry-cleaning-software-by-posso-ltd-uk` | Already 308 (live) | `/dry-cleaning-software` |
| `/best-sweet-shop-point-of-sale-software-by-posso-ltd-uk` | Already 308 (live) | `/sweet-shop-point-of-sale` |
| `/best-sweet-shop-pos-by-posso-ltd-uk` | Already 308 (live) | `/sweet-shop-pos` |
| `/best-sweet-shop-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/sweet-shop-pos` |
| `/best-table-service-app-by-posso-ltd-uk` | Already 308 (live) | `/restaurant-order-at-table-app` |
| `/best-tablet-epos-system-by-posso-ltd-uk` | Already 308 (live) | `/tablet-epos-system` |
| `/best-tablet-epos-system-uk-by-posso-ltd-uk` | Already 308 (live) | `/tablet-epos-system` |
| `/best-tablet-food-ordering-system-by-posso-ltd-uk` | Already 308 (live) | `/tablet-food-ordering-system` |
| `/best-takeaway-epos-software-free-by-posso-ltd-uk` | Already 308 (live) | `/free-epos-software` |
| `/best-takeaway-pos-by-posso-ltd-uk` | Already 308 (live) | `/takeaway-pos` |
| `/best-takeaway-software-uk-by-posso-ltd-uk` | Already 308 (live) | `/epos-software-for-takeaway` |
| `/best-text-ordering-system-by-posso-ltd-uk` | Already 308 (live) | `/text-ordering-system` |
| `/best-till-system-software-by-posso-ltd-uk` | Already 308 (live) | `/till-system-software` |
| `/best-top-table-app-by-posso-ltd-uk` | Already 308 (live) | `/tablemaestro` |
| `/best-touch-screen-epos-system-by-posso-ltd-uk` | Already 308 (live) | `/touch-screen-till-system` |
| `/best-touch-screen-pos-software-by-posso-ltd-uk` | Already 308 (live) | `/touchscreen-pos-system` |
| `/best-touch-screen-till-system-by-posso-ltd-uk` | Already 308 (live) | `/touch-screen-till-system` |
| `/best-touchscreen-pos-system-by-posso-ltd-uk` | Already 308 (live) | `/touchscreen-pos-system` |
| `/best-uk-kiosk-by-posso-ltd-uk` | Already 308 (live) | `/self-order-kiosks` |
| `/best-vat-on-dry-cleaning-by-posso-ltd-uk` | Already 308 (live) | `/dry-cleaning-software` |
| `/best-web-based-ordering-system-for-coffee-shops-by-posso-ltd-uk` | Already 308 (live) | `/coffee-shop-ordering-app` |
| `/best-website-pos-finance-software-by-posso-ltd-uk` | Already 308 (live) | `/website-pos-finance-software` |
| `/best-windows-10-coa-by-posso-ltd-uk` | Already 308 (live) | `/pos` |
| `/credit-card-machine-clover-by-posso-ltd-uk` | 308 (approved Oct 2026) | `/credit-card-machines` |

## 10. TODO list for Paul, grouped by page

Every item below is also a `TODO: PAUL` comment at the line it affects.

### Sitewide — `src/lib/possoFacts.ts`
- [ ] **Go-live time X.** Confirm "most sites go live within X". Set `GO_LIVE_WITHIN` and every go-live sentence on the site updates (about 50 places).
- [ ] **Contract terms.** Minimum term, notice period, early-termination fee, auto-renewal. Fill `possoContract`; then confirm or remove each "no lock-in" claim below.

### "No lock-in / no contract" claims — keep or remove once terms are confirmed
- [ ] `/self-order-kiosk-cost` (2 places), `/kitchen-display-system-cost`, `/free-restaurant-pos`, `/hospitality-software-uk`, `/best-restaurant-epos-system-uk` ("No punitive contracts") — **software** contract.
- [ ] `/epos-credit-card-application` (2), `/pdq-systems` (2), `/pdq-machine-small-business` (3), `/self-employed-card-machine` (about 10 mentions incl. title and meta) — **card-processing** contract.

### `/pos`
- [ ] Card terminal hardware price or rental for Posso Pay, if there is one (hardware checklist, "Card reader" row).
- [ ] Posso Connect 4G/WiFi router price, if it should be listed (hardware checklist, "Router" row).
- [ ] Which accounting integrations besides Xero (QuickBooks? Sage? FreeAgent?) — Compliance section.
- [ ] Posso Pay's PCI DSS position (provider certification; does card data ever touch the till?) before any stronger claim.
- [ ] FAQ "How long are POS contracts?" — add Posso's own term once confirmed.
- [ ] FAQ "Is a POS system tax deductible?" — confirm wording with your accountant (kept general for now).

### `/pos-systems`
- [ ] Contents of the **Restaurant Full Service (£899)** and **Fast Food Growth (£1,250)** packages — the cards currently say "exact contents itemised on your quote".
- [ ] Confirm the form's "we'll call you back within 2 hours" / "Response within 2 hours" is a service level you can meet.
- [ ] Online ordering price: the old card said "From £350 or FREE with Teya"; `/pos` and `/epos-pricing-uk` say "branded website £450, hosting free". Which is current?

### `/buy-epos-system-uk`
- [ ] Is Posso finance a lease, hire purchase or a business loan (who owns the hardware during the term)? Who is the finance provider? Does a representative example need to sit next to "from £24.92 a week"?

### `/pos-companies-uk`
- [ ] Add Posso's contract terms to the "How does Posso answer those questions?" section once confirmed.

### `/retail-pos-system`
- [ ] Which retail features Posso One supports: barcode scanning and label printing, stock levels and low-stock alerts, product variants (size/colour), purchase orders and supplier management, weigh-scale integration, gift cards. Add the confirmed ones; then reconcile `/shop-till-software`, `/grocery-store-epos`, `/homeware-pos` and `/sweet-shop-pos`, which already claim several of them.

### Competitor pages — `src/content/guides/competitors.ts`
- [x] Published October 2026 (verified by Paul): `/square-pos-alternative`, `/sumup-pos-alternative`, `/lightspeed-alternative`, `/zettle-alternative`, `/toast-pos-alternative`.
- [ ] Optional: add competitor figures to `facts` from the official UK pages in `sources` (the table currently links to them instead of quoting prices). Update `lastChecked` when you do.
- [ ] Contract row in the comparison table — replace "Set out on your quote" once Posso's terms are confirmed.

### Redirects awaiting approval — done
- [x] The four remaining `-by-posso-ltd-uk` routes now 308 to `/pos-for-cafe`, `/epos-software-for-takeaway-delivery`, `/online-ordering` and `/credit-card-machines` (approved October 2026).

### Consolidation candidates (from the cannibalisation table — nothing done, approval needed)
- [ ] Takeaway: fold `/takeaway-pos`, `/epos-system-for-takeaway`, `/epos-systems-for-takeaways`, `/epos-software-for-takeaway` into `/takeaway-epos`; `/epos-software-for-takeaway-delivery` and `/delivery-pos-software` into `/delivery-management-pos`.
- [ ] Pizza: fold `/pizza-pos-software`, `/pizza-restaurant-software` into `/pos-for-pizza-shop`.
- [ ] Pub: merge `/pub-pos-system` and `/pub-epos-system`.
- [ ] Sweet shop: merge `/sweet-shop-pos`, `/sweet-shop-point-of-sale`, `/pos-for-sweet-shop`.
- [ ] Restaurant: fold `/restaurant-till-system` into `/restaurant-epos`; `/top-5-pos-systems-for-restaurants` into `/best-restaurant-epos-system-uk`.
- [ ] Modifiers: `/pos-machine-software` + `/till-system-software` → `/pos-software`; `/touch-screen-till-system` ↔ `/touchscreen-pos-system`; `/custom-pos-system` ↔ `/bespoke-epos-software`; `/build-your-own-pos-system` ↔ `/diy-pos-system-restaurants`; `/portable-epos-system` ↔ `/mobile-pos-system-uk`; cheap and free variants.
- [ ] Thin blog posts that compete with pillar/guides: `/blog/what-is-epos-system` and `/blog/pos-systems-for-restaurants-and-takeaways` → `/pos`; plus the café, pizza, Indian, takeaway and free-EPOS posts listed in the table.

### Claims to confirm or source (found during the audit, not changed)
- [ ] Indian takeaway kitchen tickets in Hindi, Urdu, Bengali, Punjabi, Gujarati — claim dropped with the redirect; `/pos` lists English, Spanish, French, Italian and Simplified Chinese. Confirm before re-adding anywhere.
- [ ] `/self-order-kiosk-cost` "Posso Fast Lane" kiosk £399 + VAT with £199 + VAT order tablet — not in the facts list. Is it current? If so, add it to `possoFacts`.
- [ ] Homepage FAQs: "increase average order value by 20–30%" and "average response times under 15 minutes" — unsourced.
- [ ] `/best-epos-system-for-takeaway`: "most competitors offer 12 months [warranty]" — unsourced competitor claim.
- [ ] `/top-5-pos-systems-for-restaurants`, `/best-pos-system-reddit`, `/epos-now-alternative`, `/posso-vs-epos-now`: competitor figures cite third-party reviews, not the competitors' own sites, and have no source links on the page. Re-verify against the competitors' own UK sites under the same rule as the new pages.
- [ ] `/pos-for-pizza-shop` "Caller ID saves 1–2 minutes … over 2 hours of staff time" — unsourced.

## 11. Files changed

217 modified + 15 new files. Most of the modified files are the mechanical
fact-import change (codemod) plus the `<EposClusterLinks />` up-link.

**New**
- `src/lib/possoFacts.ts`, `src/lib/redirects.ts`, `src/components/epos-cluster-links.tsx`
- `src/content/guides/competitors.ts`, `pos-companies-uk.ts`, `buy-epos-system-uk.ts`, `retail-pos-system.ts`, `small-business-pos-system.ts`
- `src/app/{square-pos-alternative,sumup-pos-alternative,lightspeed-alternative,zettle-alternative,toast-pos-alternative,retail-pos-system,small-business-pos-system}/page.tsx`
- `docs/pos-cluster-audit-2026-10.md` (this file)

**Substantive edits**
- `next.config.ts` (redirects moved to `src/lib/redirects.ts`), `src/app/sitemap.ts` (reads redirects + competitor verification)
- `src/app/layout.tsx` (no generic keywords, canonical, og/twitter title or Organization), `src/app/page.tsx` (Organization, canonical, twitter, server-rendered JSON-LD)
- `src/app/pos/page.tsx`, `src/components/sections/pos-hero.tsx`
- `src/app/pos-systems/page.tsx`, `src/app/pos-systems/pos-systems-landing.tsx`, `src/app/pos-companies-uk/page.tsx`, `src/app/buy-epos-system-uk/page.tsx`
- `src/app/pos-for-pizza-shop/page.tsx`, `src/app/pos-for-indian-takeaway/page.tsx` (merged content)
- `src/components/GuidePage.tsx`, `src/lib/guides.ts` (inline links, schema mode, noindex, up-link)
- `src/components/header.tsx`, `src/components/footer.tsx`, `src/components/sections/about.tsx`
- Contradiction fixes in ~30 page files and 4 typed guides (sections 2–3)
- `docs/seo.md` §9 (new conventions)

**Mechanical** — `posso.*` imports, Organization `@id` references, redirected-link repointing and the up-link component in the remaining files (`git diff --stat` for the full list).
