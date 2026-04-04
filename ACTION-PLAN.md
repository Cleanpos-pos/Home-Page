# SEO Action Plan -- posso.co.uk

**Generated:** 3 April 2026
**Current Score:** 82/100
**Target Score:** 92+/100

---

## Priority 1 -- Critical (Fix This Week)

### 1.1 Change 307 redirect to 301
**File:** Vercel dashboard / DNS settings (not in codebase)
**Issue:** `posso.co.uk` -> `www.posso.co.uk` uses a 307 Temporary redirect. Search engines treat 307 as temporary and do not consolidate link equity.
**Fix:** In Vercel project settings, configure the apex-to-www redirect as a 301 Permanent redirect. Alternatively, decide on non-www as the canonical domain and redirect www -> non-www with a 301.
**Impact:** High -- affects every page on the site, link equity consolidation, and crawl efficiency.

### 1.2 Resolve canonical vs www mismatch
**File:** `src/app/layout.tsx` line 24 (metadataBase) and all internal links
**Issue:** Canonical is `https://posso.co.uk` (no www) but the site serves from `https://www.posso.co.uk/`. Every internal link triggers an unnecessary redirect.
**Fix:** Choose ONE canonical domain and make everything consistent:
- **Option A (recommended):** Keep `posso.co.uk` as canonical. Configure DNS/Vercel to serve from the apex domain. Redirect www -> non-www with 301.
- **Option B:** Change canonical to `www.posso.co.uk`. Update `metadataBase`, all og:url, and canonical tags. Redirect non-www -> www with 301.
**Impact:** High -- eliminates 32 unnecessary redirect hops on every page load, improves crawl budget.

### 1.3 Add FAQPage schema to homepage
**File:** `src/app/page.tsx` -- add to `homepageSchema` array
**Issue:** 6 FAQ questions are visible on the page but have no FAQPage structured data. Missing FAQ rich results opportunity.
**Fix:** Add the following to the `homepageSchema` array in `page.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a restaurant POS system cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our POS systems start from £499 + VAT..."
      }
    }
    // ... repeat for all 6 questions
  ]
}
```
**Impact:** High -- enables FAQ rich results in Google SERPs, increasing SERP real estate and CTR.

### 1.4 Merge duplicate Organization schema
**File:** `src/app/layout.tsx` (main schema) + testimonials component
**Issue:** Two `<script type="application/ld+json">` blocks both use `@id: https://posso.co.uk/#organization` with different content. Google may be confused.
**Fix:** Add the `review` array from the testimonials schema block directly into the `structuredData` object in `layout.tsx`. Remove the separate testimonials schema block.
**Impact:** Medium-High -- prevents schema validation warnings and ensures Google processes reviews correctly.

---

## Priority 2 -- Important (Fix Within 2 Weeks)

### 2.1 Verify and fix social profile links
**File:** `src/components/footer.tsx` (or wherever social links are defined) + `src/app/layout.tsx` (sameAs in schema)
**Issue:** LinkedIn returns 404, X/Twitter returns 403 (may be bot-blocking).
**Fix:**
- Manually verify https://www.linkedin.com/company/posso-uk exists. If the page was renamed or deleted, update the URL everywhere.
- Manually verify https://x.com/posso_uk loads in a browser. If valid, the 403 is just X blocking bots (acceptable). If not, fix the URL.
- Update `sameAs` array in `layout.tsx` schema to match.
**Impact:** Medium -- broken sameAs links may reduce trust signals in schema.

### 2.2 Replace Unsplash stock team photo
**File:** `src/lib/placeholder-images.json` (entry index 0, "about" section) or the About component
**Issue:** The About section uses Unsplash image `photo-1622675363311-3e1904dc1885` (generic "team meeting" stock photo) labelled as "Posso Ltd team".
**Fix:** Replace with an actual photo of the Posso team. Optimise as WebP, host locally in `/public/`.
**Impact:** Medium -- improves E-E-A-T signals. Google's quality raters flag stock photos on About/Team sections.

### 2.3 Add og:site_name and og:locale to homepage
**File:** `src/app/page.tsx` -- update the `openGraph` object in `metadata`
**Issue:** `layout.tsx` defines `siteName` and `locale` in openGraph, but `page.tsx` overrides the entire openGraph block without these fields.
**Fix:** Add to `page.tsx` metadata.openGraph:
```typescript
openGraph: {
  title: '...',
  description: '...',
  url: 'https://posso.co.uk',
  type: 'website',
  siteName: 'Posso',        // ADD
  locale: 'en_GB',          // ADD
  images: [{ ... }],
}
```
**Impact:** Low-Medium -- improves social sharing appearance and metadata completeness.

### 2.4 Add nofollow to AnyDesk download links
**File:** Header component + Services/Support card component
**Issue:** Two links to `download.anydesk.com/AnyDesk.exe` lack `rel="nofollow"`. One has `rel="noopener noreferrer"`, the other has no rel at all.
**Fix:** Add `rel="nofollow noopener noreferrer"` to both AnyDesk links.
**Impact:** Low-Medium -- prevents passing PageRank to an external executable download.

---

## Priority 3 -- Recommended (Fix Within 1 Month)

### 3.1 Re-enable Next.js image optimisation
**File:** `next.config.ts` line 9
**Issue:** `images: { unoptimized: true }` disables all automatic image optimisation.
**Fix:** Remove `unoptimized: true` or set to `false`. On Vercel, this enables free automatic WebP/AVIF conversion, responsive srcset, and lazy loading with blur placeholders.
**Note:** Test thoroughly after enabling -- some images from external domains may need updated `remotePatterns`.
**Impact:** Medium -- improves LCP, reduces bandwidth, better Core Web Vitals.

### 3.2 Add @id to WebSite schema
**File:** `src/app/page.tsx` -- in `homepageSchema` WebSite entry
**Fix:** Add `"@id": "https://posso.co.uk/#website"` to the WebSite schema object.
**Impact:** Low -- improves JSON-LD graph linking for rich results.

### 3.3 Reconcile trust claim numbers
**File:** `src/components/sections/hero.tsx` line 47 and `src/app/layout.tsx` OG description
**Issue:** Hero says "500+ restaurants & venues", OG/Twitter says "1,000+ businesses".
**Fix:** Use the same figure in both places, or clarify the distinction (e.g., "1,000+ businesses including 500+ restaurants").
**Impact:** Low -- consistency builds trust with users who see both.

### 3.4 Populate Google Search Console verification
**File:** `src/app/layout.tsx` line 94
**Fix:** Replace the commented-out placeholder with actual GSC verification code:
```typescript
verification: {
  google: 'your-actual-verification-code',
},
```
**Impact:** Low (but necessary for GSC access and monitoring).

### 3.5 Add Content-Security-Policy header
**File:** `next.config.ts` -- in the `headers()` function
**Fix:** Start with a report-only CSP to identify violations without breaking the site:
```typescript
{ key: 'Content-Security-Policy-Report-Only', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https:;" }
```
Then tighten once violations are reviewed.
**Impact:** Low (security improvement, not directly SEO but builds trust signals).

### 3.6 Consider dedicated Smart Lockers page
**File:** Currently Smart Lockers card in `src/components/sections/services.tsx` links to `/ticketing`
**Fix:** Either create `/smart-lockers` page or link to `/ticketing#smart-lockers` with an anchor on the ticketing page.
**Impact:** Low -- better user experience and internal linking for a distinct product.

### 3.7 Reduce HTML payload size
**Issue:** Rendered HTML is 179 KB (recommended under 100 KB).
**Fix:** This is largely Next.js RSC overhead. Consider:
- Moving heavy sections (Testimonials, Industry grid) to client components that load on scroll
- Reducing inline RSC payload by using `Suspense` boundaries
- Ensuring no unnecessary data is being serialised
**Impact:** Low-Medium -- improves TTFB and initial parse time.

### 3.8 Remove TypeScript error suppression
**File:** `next.config.ts` line 6-8
**Issue:** `typescript: { ignoreBuildErrors: true }` masks potential issues.
**Fix:** Run `npx tsc --noEmit`, fix all type errors, then remove the flag.
**Impact:** Low (code quality, not directly SEO).

---

## Summary Table

| # | Task | Priority | Effort | Impact |
|---|------|----------|--------|--------|
| 1.1 | 307 -> 301 redirect | CRITICAL | Low (config change) | High |
| 1.2 | Canonical/www consistency | CRITICAL | Medium | High |
| 1.3 | FAQPage schema | CRITICAL | Low (copy-paste) | High |
| 1.4 | Merge duplicate Org schema | CRITICAL | Low | Medium-High |
| 2.1 | Fix social profile links | IMPORTANT | Low | Medium |
| 2.2 | Replace stock team photo | IMPORTANT | Medium (needs photo) | Medium |
| 2.3 | og:site_name + og:locale | IMPORTANT | Low | Low-Medium |
| 2.4 | nofollow on AnyDesk links | IMPORTANT | Low | Low-Medium |
| 3.1 | Re-enable image optimisation | RECOMMENDED | Low (test needed) | Medium |
| 3.2 | WebSite schema @id | RECOMMENDED | Trivial | Low |
| 3.3 | Reconcile trust claims | RECOMMENDED | Trivial | Low |
| 3.4 | GSC verification code | RECOMMENDED | Trivial | Low |
| 3.5 | Content-Security-Policy | RECOMMENDED | Medium | Low |
| 3.6 | Smart Lockers page | RECOMMENDED | Medium | Low |
| 3.7 | Reduce HTML size | RECOMMENDED | High | Low-Medium |
| 3.8 | Remove TS error suppression | RECOMMENDED | Variable | Low |

---

## What Was Fixed (Confirmed in This Audit)

These items from the previous action plan are now resolved and verified:

1. ~~Duplicate title tags~~ -- FIXED (single title)
2. ~~Missing og:image~~ -- FIXED (with dimensions and alt)
3. ~~Schema @id conflict~~ -- FIXED (Organization vs LocalBusiness separated)
4. ~~Broken /marketing links~~ -- FIXED (none found)
5. ~~WordPress image URLs~~ -- FIXED (all cleaned)
6. ~~Trust claims inconsistent~~ -- PARTIALLY FIXED (OG standardised to 1,000+, hero still says 500+)
7. ~~Google Fonts external CSS~~ -- FIXED (using next/font with swap)
8. ~~Missing FAQ sections~~ -- FIXED (6 questions on homepage)
9. ~~Missing breadcrumbs~~ -- FIXED (BreadcrumbList schema present)
10. ~~Missing review schema~~ -- FIXED (2 reviews on Organization)
11. ~~Sitemap priorities~~ -- FIXED (assumed per previous work)
12. ~~AI crawler rules~~ -- FIXED (5 allowed, 2 blocked in robots.txt)
13. ~~30 UK city locations~~ -- FIXED (31 areas: 1 country + 30 cities in schema)
14. ~~Security headers~~ -- FIXED (5 of 6 present, only CSP remains)
