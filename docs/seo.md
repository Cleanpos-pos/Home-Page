# SEO — architecture, page template and known traps

Reference for anyone adding or changing pages on posso.co.uk. Written 15 August 2026
after the guide-layer build; numbers in **Current state** were measured on that date
and will drift — re-run the audit rather than trusting them.

---

## 1. Two layers, on purpose

The site runs two kinds of page against the same subject, and they do **not**
cannibalise each other because the search intent differs.

| | Guide layer | Product layer |
|---|---|---|
| Example | `/pos-for-pizza-shop` | `/pizza-pos-system` |
| Intent | Commercial investigation — "what should I look for" | Transactional — "I want this product" |
| Posso appears | Section 3 of 6 | H1 |
| Vendor-neutral copy | ~600 words up front | none |
| Job | Get cited by AI Overviews, capture comparison traffic | Convert |

**The mechanic that makes the guide layer work: Posso is absent from the entire
first section.** Sections 1 and 2 are genuine buying advice written for someone who
has not decided on a supplier. That is the shape AI Overviews extract, because they
need a passage that reads as an assessment rather than a claim.

Three supporting rules, all observable in the existing pages:

- **Every H3 states a principle, not a feature name.** "Pizza Builder is
  Non-Negotiable", not "Pizza Builder". The heading carries the answer.
- **Operational specificity only an operator would write.** `"14-inch, stuffed
  crust, BBQ sauce, pepperoni left, chicken right"` or `"half four to seven on a
  Friday"`. This is what makes a page look like domain knowledge rather than SEO copy.
- **Each H3 block stands alone when extracted.** Pull any one out and it still
  answers a question. That is the property that gets a passage cited.

### Current guide pages

```
/pos-for-pizza-shop            the original — treat as the reference
/pos-for-fish-and-chip-shop
/pos-for-kebab-shop
/pos-for-chinese-takeaway
/pos-for-indian-takeaway
/kitchen-display-system
```

### Typed guide pages (August 2026 batch)

Seven further pages use a different mechanism: typed content in
`src/content/guides/*.ts` rendered by `src/components/GuidePage.tsx`
(types + metadata/schema builders in `src/lib/guides.ts`). Restyling the
renderer restyles all seven at once. They follow the same house rules —
`FAQSection` emits the FAQ schema, `DemoEnquiry` on `#contact`, short
templated titles — plus a "quickAnswer" block rendered as a delimited
"Short answer" card for AI extraction, and explicit per-page Twitter
metadata.

```
/pos-for-cafe
/opening-a-takeaway-epos-checklist
/delivery-management-pos
/replace-old-epos-system
/multi-site-epos-uk
/epos-now-alternative              switching guide
/posso-vs-epos-now                 comparison — LAST_CHECKED constant in the
                                   content file renders under the table;
                                   re-verify Epos Now figures quarterly
```

Consolidation shipped with this batch: `/pizza-pos-system` and
`/pizza-shop-pos` now 308 to `/pos-for-pizza-shop`; `/self-service-epos` and
`/solutions/restaurant-self-service-kiosk` 308 to `/self-order-kiosks`. The
product layer for pizza is now `/pizza-epos`, `/pizza-pos-software`,
`/pizza-restaurant-software` and `/pizza-delivery-pos` — the §1 example above
predates this.

---

## 2. The base template

`/pizza-delivery-pos` is the house SEO template. `/pos-for-pizza-shop` uses the same
skeleton with guide-shaped section names. Copy either.

### Section order

```
<BreadcrumbNav items={[{ label: 'ePOS Systems', href: '/pos' }, { label: '…' }]} />

section  py-16              hero — badge, split-gradient H1, intro <p>,
                            3 <Check> bullets, "Get a Free Demo" + phone
section  py-20 bg-slate-900/30   H2 + sub-line + 6 icon cards, 3-col grid
section  py-20                   H2 + 4 cards, 2-col grid
section  py-20 bg-slate-900/30   H2 + prose paragraphs with <strong> highlights
section  py-12                   glass card, 4 cluster links
<FAQSection title="… — Frequently Asked Questions" faqs={[…]} />
<DemoEnquiry />                  or <Contact /> — see §4
```

Six H2s, ten article H3s (6 features + 4 benefits). Body copy ~1,300–1,500 words.

### Metadata

```ts
export const metadata: Metadata = {
  title: 'POS for Kebab Shops',        // SHORT — layout appends "| Posso"
  description: '…',                     // aim ≤160 chars
  keywords: [ /* ~10 terms */ ],
  alternates: { canonical: '/pos-for-kebab-shop' },
  openGraph: {
    title: 'POS for Kebab Shops | Posso UK',
    description: '…',
    url: 'https://www.posso.co.uk/pos-for-kebab-shop',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '…' }],
  },
};
```

Robots are inherited from the root layout and already correct
(`index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`).
Do not redeclare them.

### Schema

`SoftwareApplication` + `BreadcrumbList` in a `pageSchema` array, rendered via a
single `<script type="application/ld+json">`. `FAQPage` is emitted automatically by
`<FAQSection>` — do not hand-write it.

Reference the sitewide Organization by id rather than duplicating it:

```ts
publisher: { '@id': 'https://www.posso.co.uk/#organization' },
```

### After adding a page

1. Add the slug to `coreRoutes` in `src/app/sitemap.ts`.
2. Add a card to `eposVerticals` in `src/app/pos/page.tsx`.
3. Add a link in `src/components/footer.tsx` under **Buyer's Guides**.
4. Add at least one *contextual, in-prose* link from a topically adjacent page.
   These are worth more than nav links — see §5.
5. `npx next build`, then `node tools/seo-audit/compare-to-pizza.mjs`.

---

## 3. Traps — read before debugging

Each of these cost real time. All are live in this codebase.

### The sitemap will not escape your text

Next escapes the fields it owns (`<loc>`, `<lastmod>`…) but passes
`videos[].title` and `.description` through **verbatim**. One raw `&` in a video
page's `h1` makes the whole file invalid and Search Console rejects it with
"Parsing error", stopping at the first occurrence.

`xmlText()` in `src/app/sitemap.ts` handles it. Any new free-text sitemap field
needs the same treatment.

### A page-level `openGraph` replaces the layout's entirely

It does **not** merge. Declaring `openGraph` without `images` means the page ships
with *no* `og:image` at all, silently. This affected 161 pages before it was caught.
Always include `images`.

### Client-side redirects are not redirects

Several pages were `router.replace()` inside a `useEffect`. To a crawler that is a
200 with an empty body — Google must render the page to discover the hop, almost no
equity passes, and the stub is indexable meanwhile. Redirects belong in
`next.config.ts`, which emits a real 308 and takes precedence over the file-system
route (so the old directory can stay).

### `body { overflow-x: hidden }` hides horizontal scroll without fixing it

The scrollbar disappears but the page still moves. `document.scrollWidth` also
under-reports once an ancestor clips. Test by actually trying to scroll:

```js
window.scrollTo(500, 0); const moved = window.scrollX; window.scrollTo(0, 0);
```

### The header nav needs ~1130px

logo 112 + dropdowns 441 + company links 311 + TableMaestro 147 + gaps. It is on
`xl:` for that reason. **Do not lower it to `lg:` without re-measuring** — 1024px
still overflows and every page scrolls sideways. The mobile sheet carries the same
links plus the company links and the CTA, so nothing is lost below `xl`.

### Some pages use `@graph`

`/best-restaurant-epos-system-uk` nests its schema in an `@graph` array. Any tool
that reads schema must flatten it or it will report false negatives.

### Titles are templated

The root layout applies `%s | Posso`. Page titles must be **short** — a title of
`X | Buyer's Guide` renders as `X | Buyer's Guide | Posso`.

---

## 4. Enquiry CTA

`<Contact />` opens a **Calendly booking iframe** in a dialog. `<DemoEnquiry />`
(`src/components/sections/demo-enquiry.tsx`) renders the site's real
`GeneralEnquiryForm` inline instead, on the same `id="contact"` anchor so existing
"Get a Free Demo" buttons keep working.

The six guide pages use `DemoEnquiry`. The rest of the site still uses `Contact`.

---

## 5. Internal linking

Contextual in-prose links outrank boilerplate nav links. A link inside a sentence
about takeaway types tells Google what the target is about; a footer link repeated
on 400 pages does not.

So: **both**, but never rely on nav alone. Every guide page has a footer link plus
4–6 contextual links from adjacent pages.

The header was deliberately left alone. Nav dropdowns serve people already on the
site looking for a product; guide pages serve search arrivals who do not know Posso
yet. `/pos` already carries every guide card and is one click from the header.

---

## 6. Tooling

```bash
npx next build                                # required first — these read built HTML
node tools/seo-audit/audit.mjs                # sitewide compliance + risk report
node tools/seo-audit/compare-to-pizza.mjs     # guide pages vs the reference, element by element
```

`audit.mjs` writes `tools/seo-audit/seo-audit.json` (gitignored) with a row per page,
for ad-hoc queries.

Two one-off scripts are kept for reference and are idempotent:
`add-blog-breadcrumbs.mjs`, `add-page-breadcrumbs.mjs`, `conform-to-base-template.mjs`.

---

## 7. Current state — measured 15 Aug 2026

Across **210 live indexable pages** (excludes 17 redirect stubs, 169 `-by-posso-ltd-uk`
aliases, and Next internals):

| | |
|---|---|
| Self-referencing canonical | 100% |
| Exactly one `<h1>` | 100% |
| `BreadcrumbList` schema | 100% |
| `og:image` | 99% |
| `FAQPage` schema | 80% |

Sitemap: **211 URLs**, no aliases, no duplicates, no redirecting URLs, valid XML.

### Known outstanding

- **`aggregateRating` on 128 of 210 live pages.** Hardcoded ratings (4.7–4.9,
  counts 76–178) with **no visible reviews on any page**. Google requires review
  markup to reflect reviews shown on the page; this pattern is what manual actions
  are issued for. The counts are not tied to real data — including the five added
  to the new guide pages to match the house template. Decide: real figures, one
  consistent value, or remove.
- **24 blog posts have no `FAQPage`.** Needs FAQ copy per post, not a mechanical fix.
- **150 meta descriptions over 160 chars, 71 titles over 60.** Truncated in SERPs.
- **Pricing copy contradicts itself.** The guide pages say *setup free, on-site
  installation quoted separately, 60p service fee, Posso Pay*. `/pizza-pos-system`
  and `/pos-for-pizza-shop` say *free setup + training + low commission + Teya*.
  Both are indexed.
- **OG images are generic.** Every guide page uses `/og-image.png`; bespoke
  1200×630 cards are still to be produced.
- **32 self-canonicalising aliases**, 8 of them city pages
  (`/best-epos-london-by-posso-ltd-uk` etc.). Out of the sitemap but still live and
  serving duplicate content. Each needs a 301 or a corrected canonical.

---

## 8. What shipped, 15 Aug 2026

`f878b1d` … `eca0f15` on `main`.

- Five new guide pages + the `DemoEnquiry` component.
- Guide layer linked from `/pos`, `/takeaway-epos`, `/pizza-pos-system`,
  `/delivery-integrations`, `/ai-phone-ordering`,
  `/epos-system-for-indian-takeaway`, and the footer.
  `/pos-for-pizza-shop` went from **0 inbound internal links to 6**.
- Sitemap 394 → 211: dropped 171 alias entries, 2 duplicates and 17 redirecting
  URLs; added a dedupe guard.
- 17 client-side redirect stubs → real 308s.
- Breadcrumbs added to 41 pages (25 blog posts, 15 top-level, via
  `BlogBreadcrumb` / `PageBreadcrumb`, which emit trail and schema together).
- `og:image` 59% → 99% via one fix to the programmatic SEO template.
- Video sitemap XML escaping — cleared the Search Console parsing error.
- Header nav moved to `xl:` and carousel arrows repositioned, fixing sitewide
  horizontal scroll at 768–1279px.
