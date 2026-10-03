import type { Redirect } from 'next/dist/lib/load-custom-routes';

/**
 * Every permanent redirect on the site, in one place.
 *
 * next.config.ts serves these; src/app/sitemap.ts reads the same list so a
 * redirected URL can never be submitted in the sitemap again (the old
 * hand-maintained `redirecting` set had drifted out of step with this list).
 *
 * `permanent: true` emits a 308, which Google treats exactly like a 301.
 */
export const siteRedirects: Redirect[] = [
  // Canonical host: force non-www → www so link equity consolidates on one host
  {
    source: '/:path*',
    has: [{ type: 'host', value: 'posso.co.uk' }],
    destination: 'https://www.posso.co.uk/:path*',
    permanent: true,
  },
  { source: '/home', destination: '/', permanent: true },
  { source: '/kiosks', destination: '/self-order-kiosks', permanent: true },

  // SEO consolidation (2026-09-06, per GSC audit): the coffee-shop
  // online/mobile ordering cluster was 8 near-duplicate pages all stuck
  // ~position 46, splitting authority. Consolidated into the single
  // /coffee-shop-ordering-app survivor. The duplicate restaurant-EPOS
  // product page folds into /restaurant-epos (the "best" compare page is
  // kept — different intent). Old directories stay; the redirect wins.
  { source: '/coffee-ordering-app', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/online-ordering-software-coffee-shops', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/online-ordering-platform-coffee-shops', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/mobile-ordering-system-coffee-shops', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/mobile-ordering-platform-coffee-shops', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/web-based-ordering-system-coffee-shops', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/cafe-online-ordering-system', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/restaurant-epos-systems-uk', destination: '/restaurant-epos', permanent: true },

  // Café/coffee-shop consolidation, round 2 (2026-09-27). Round 1 (09-11)
  // folded four café product pages into /coffee-shop-cafe-epos-systems and
  // kept /pos-for-cafe as a separate guide — but live google.co.uk SERPs
  // then showed NEITHER page in the top 30 for any café query: two weak
  // pages splitting one intent. Everything café now folds into the single
  // /pos-for-cafe page (the AEO-structured one); redirects are flattened
  // so nothing chains.
  { source: '/coffee-shop-cafe-epos-systems', destination: '/pos-for-cafe', permanent: true },
  { source: '/cafe-epos-system', destination: '/pos-for-cafe', permanent: true },
  { source: '/cafe-pos', destination: '/pos-for-cafe', permanent: true },
  { source: '/coffee-pos-system', destination: '/pos-for-cafe', permanent: true },
  // Thin ~400-word post titled "Best ePOS System for UK Coffee Shops & Cafes"
  // — same intent as the guide, which covers all of it in more depth.
  { source: '/blog/cafe-coffee-shop-epos-systems-uk', destination: '/pos-for-cafe', permanent: true },

  // Old-domain equity capture. posso.uk 301s path-for-path onto this site,
  // so an old URL with no equivalent here lands on a 404 and its ranking is
  // thrown away. /best-pos-for-small-retail still ranks #6 on google.co.uk
  // for "coffee shop pos system uk" (checked 2026-09-27) — route it into
  // the café page instead of the 404.
  { source: '/best-pos-for-small-retail', destination: '/pos-for-cafe', permanent: true },
  { source: '/online-ordering-gets-social', destination: '/online-ordering', permanent: true },
  { source: '/best-food-online-ordering-by-posso-ltd-uk', destination: '/online-ordering', permanent: true },

  // These 17 used to be client-side `router.replace()` stubs. A JS redirect is not
  // a 301: Google has to render the page to find it, little equity passes, and the
  // empty stub is indexable in the meantime. Served as real redirects instead.
  // (Targets are the ones the stubs already declared; /kiosks hops are flattened
  // to /self-order-kiosks so these do not become two-hop chains.)
  { source: '/android-epos-systems-from-posso', destination: '/pos', permanent: true },
  { source: '/book-a-call', destination: '/contact', permanent: true },
  { source: '/cobways-tell-a-friend-scheme', destination: '/', permanent: true },
  { source: '/contact-posso-ltd', destination: '/contact', permanent: true },
  { source: '/credit-card-machine-clover-flex-uk', destination: '/credit-card-machines', permanent: true },
  { source: '/digital-menu-boards-4', destination: '/digital-signage', permanent: true },
  { source: '/digital-menu-boards-uk-my-signage', destination: '/digital-signage', permanent: true },
  { source: '/dry-cleaning-epos-systems-uk', destination: '/solutions/dry-cleaning-pos-system', permanent: true },
  { source: '/food-order-app-comparison-tool', destination: '/online-ordering', permanent: true },
  { source: '/franchise-epos', destination: '/franchise', permanent: true },
  { source: '/hospitality-epos-systems-by-posso-uk-epos-systems', destination: '/pos', permanent: true },
  { source: '/portable-card-machines', destination: '/credit-card-machines', permanent: true },
  { source: '/posso-epos', destination: '/pos', permanent: true },
  { source: '/self-order-kiosk-uk-2', destination: '/self-order-kiosks', permanent: true },
  { source: '/self-order-kiosks-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/skegness-pos-systems', destination: '/pos', permanent: true },
  { source: '/small-pos-magic-the-tiny-marvels-transforming-our-lives', destination: '/pos', permanent: true },

  // Cluster consolidation (guide-layer build, August 2026): the pizza product
  // duplicates fold into the /pos-for-pizza-shop guide and the kiosk
  // duplicates fold into /self-order-kiosks, so each cluster stops splitting
  // authority across near-identical pages. Old directories stay in place —
  // these redirects take precedence over the file-system routes.
  { source: '/pizza-pos-system', destination: '/pos-for-pizza-shop', permanent: true },
  { source: '/pizza-shop-pos', destination: '/pos-for-pizza-shop', permanent: true },
  { source: '/solutions/restaurant-self-service-kiosk', destination: '/self-order-kiosks', permanent: true },
  { source: '/self-service-epos', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-epos-now-ordering-app-by-posso-ltd-uk', destination: '/epos-now-alternative', permanent: true },
  { source: '/best-online-ordering-software-for-restaurants-by-posso-ltd-uk', destination: '/online-ordering', permanent: true },

  // The last 26 self-canonicalising aliases (August 2026 batch 2). These were
  // still served by the programmatic (seo-pages)/[slug] route with canonicals
  // pointing at themselves, so they competed with the clean pages. Each now
  // 308s to its closest live equivalent; city queries fold into the pillar.
  { source: '/best-dark-kitchen-restaurant-by-posso-ltd-uk', destination: '/best-dark-kitchen-software-uk', permanent: true },
  { source: '/best-pos-software-free-download-full-version-crack-uk', destination: '/free-epos-software', permanent: true },
  { source: '/best-epos-video-by-posso-ltd-uk', destination: '/pos', permanent: true },
  { source: '/best-software-for-cleaners-by-posso-ltd-uk', destination: '/dry-cleaning-software', permanent: true },
  { source: '/best-top-table-app-by-posso-ltd-uk', destination: '/tablemaestro', permanent: true },
  { source: '/best-eposnow-online-ordering-by-posso-ltd-uk', destination: '/epos-now-alternative', permanent: true },
  { source: '/best-epos-bournemouth-by-posso-ltd-uk', destination: '/pos', permanent: true },
  { source: '/best-epos-nottingham-by-posso-ltd-uk', destination: '/pos', permanent: true },
  { source: '/best-best-epos-system-review-uk-by-posso-ltd-uk', destination: '/best-restaurant-epos-system-uk', permanent: true },
  { source: '/best-vat-on-dry-cleaning-by-posso-ltd-uk', destination: '/dry-cleaning-software', permanent: true },
  { source: '/best-epos-now-contact-uk-by-posso-ltd-uk', destination: '/epos-now-alternative', permanent: true },
  { source: '/best-demo-restaurant-sunderland-by-posso-ltd-uk', destination: '/pos', permanent: true },
  { source: '/best-takeaway-epos-software-free-by-posso-ltd-uk', destination: '/free-epos-software', permanent: true },
  { source: '/best-restaurant-epos-london-by-posso-ltd-uk', destination: '/best-restaurant-epos-system-uk', permanent: true },
  { source: '/best-epos-london-by-posso-ltd-uk', destination: '/pos', permanent: true },
  { source: '/best-salon-software-free-download-full-version-by-posso-ltd-uk', destination: '/salon-pos-software', permanent: true },
  { source: '/best-best-food-delivery-app-uk-by-posso-ltd-uk', destination: '/blog/best-food-delivery-app-uk', permanent: true },
  { source: '/best-pos-system-for-takeaway-by-posso-ltd-uk', destination: '/best-epos-system-for-takeaway', permanent: true },
  { source: '/best-digital-signage-sheffield-by-posso-ltd-uk', destination: '/digital-signage', permanent: true },
  { source: '/best-digital-signage-newcastle-by-posso-ltd-uk', destination: '/digital-signage', permanent: true },
  { source: '/best-epos-now-handheld-by-posso-ltd-uk', destination: '/epos-now-alternative', permanent: true },
  { source: '/best-windows-10-coa-by-posso-ltd-uk', destination: '/pos', permanent: true },
  { source: '/best-pos-leicester-by-posso-ltd-uk', destination: '/pos', permanent: true },
  { source: '/best-digital-signage-edinburgh-by-posso-ltd-uk', destination: '/digital-signage', permanent: true },
  { source: '/best-epos-systems-for-takeaways-by-posso-ltd-uk', destination: '/epos-systems-for-takeaways', permanent: true },
  { source: '/best-epos-system-restaurant-by-posso-ltd-uk', destination: '/best-restaurant-epos-system-uk', permanent: true },

  { source: '/best-food-on-the-table-app-by-posso-ltd-uk', destination: '/restaurant-order-at-table-app', permanent: true },
  { source: '/best-restaurant-order-at-table-app-by-posso-ltd-uk', destination: '/restaurant-order-at-table-app', permanent: true },
  { source: '/best-food-ordering-system-by-posso-ltd-uk', destination: '/food-ordering-system', permanent: true },
  { source: '/best-pub-pos-by-posso-ltd-uk', destination: '/pub-pos-system', permanent: true },
  { source: '/best-coffee-ordering-app-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-hotel-epos-systems-by-posso-ltd-uk', destination: '/hotel-epos-system', permanent: true },
  { source: '/best-self-ordering-kiosks-by-posso-ltd-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-online-food-ordering-software-by-posso-ltd-uk', destination: '/online-food-ordering-software', permanent: true },
  { source: '/best-pizza-delivery-pos-by-posso-ltd-uk', destination: '/pizza-delivery-pos', permanent: true },
  { source: '/best-tablet-epos-system-by-posso-ltd-uk', destination: '/tablet-epos-system', permanent: true },
  { source: '/best-tablet-epos-system-uk-by-posso-ltd-uk', destination: '/tablet-epos-system', permanent: true },
  { source: '/best-restaurant-delivery-system-by-posso-ltd-uk', destination: '/restaurant-delivery-system', permanent: true },
  { source: '/best-portable-epos-systems-by-posso-ltd-uk', destination: '/portable-epos-system', permanent: true },
  { source: '/best-cloud-epos-software-by-posso-ltd-uk', destination: '/cloud-epos-system', permanent: true },
  { source: '/best-cloud-based-epos-systems-uk-by-posso-ltd-uk', destination: '/cloud-epos-system', permanent: true },
  { source: '/best-hospitality-pos-software-by-posso-ltd-uk', destination: '/hospitality-pos-software', permanent: true },
  { source: '/best-self-order-kiosk-fast-food-by-posso-ltd-uk', destination: '/self-order-kiosk-fast-food', permanent: true },
  { source: '/best-touchscreen-pos-system-by-posso-ltd-uk', destination: '/touchscreen-pos-system', permanent: true },
  { source: '/best-touch-screen-pos-software-by-posso-ltd-uk', destination: '/touchscreen-pos-system', permanent: true },
  { source: '/best-free-epos-software-by-posso-ltd-uk', destination: '/free-epos-software', permanent: true },
  { source: '/best-free-epos-software-uk-by-posso-ltd-uk', destination: '/free-epos-software', permanent: true },
  { source: '/best-pub-epos-system-by-posso-ltd-uk', destination: '/pub-epos-system', permanent: true },
  { source: '/best-pub-epos-by-posso-ltd-uk', destination: '/pub-epos-system', permanent: true },
  { source: '/best-golf-club-pos-systems-by-posso-ltd-uk', destination: '/golf-club-pos-system', permanent: true },
  { source: '/best-sweet-shop-pos-by-posso-ltd-uk', destination: '/sweet-shop-pos', permanent: true },
  { source: '/best-sweet-shop-pos-system-by-posso-ltd-uk', destination: '/sweet-shop-pos', permanent: true },
  { source: '/best-salon-point-of-sale-software-by-posso-ltd-uk', destination: '/salon-pos-software', permanent: true },
  { source: '/best-table-service-app-by-posso-ltd-uk', destination: '/restaurant-order-at-table-app', permanent: true },
  { source: '/best-self-ordering-system-by-posso-ltd-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-pos-software-by-posso-ltd-uk', destination: '/pos-software', permanent: true },
  { source: '/best-coffee-pos-by-posso-ltd-uk', destination: '/pos-for-cafe', permanent: true },
  { source: '/best-coffee-pos-system-by-posso-ltd-uk', destination: '/pos-for-cafe', permanent: true },
  // Flattened to the guide (was /pizza-epos, which now redirects there)
  { source: '/best-pizza-epos-by-posso-ltd-uk', destination: '/pos-for-pizza-shop', permanent: true },
  // Flattened to the guide (was /pizza-shop-pos, which now redirects there)
  { source: '/best-pizza-shop-pos-software-by-posso-ltd-uk', destination: '/pos-for-pizza-shop', permanent: true },
  { source: '/best-pizza-shop-point-of-sale-by-posso-ltd-uk', destination: '/pos-for-pizza-shop', permanent: true },
  { source: '/best-bar-ordering-app-by-posso-ltd-uk', destination: '/bar-ordering-app', permanent: true },
  { source: '/best-pos-for-pizza-shop-by-posso-ltd-uk', destination: '/pos-for-pizza-shop', permanent: true },
  { source: '/best-pos-system-for-pizza-shop-by-posso-ltd-uk', destination: '/pos-for-pizza-shop', permanent: true },
  { source: '/best-restaurant-till-by-posso-ltd-uk', destination: '/restaurant-till-system', permanent: true },
  { source: '/best-shop-till-software-by-posso-ltd-uk', destination: '/shop-till-software', permanent: true },
  { source: '/best-app-for-takeaways-by-posso-ltd-uk', destination: '/takeaway-app', permanent: true },
  { source: '/best-food-delivery-order-by-posso-ltd-uk', destination: '/food-delivery-ordering', permanent: true },
  { source: '/best-dry-cleaning-software-by-posso-ltd-uk', destination: '/dry-cleaning-software', permanent: true },
  { source: '/best-spot-dry-cleaning-software-by-posso-ltd-uk', destination: '/dry-cleaning-software', permanent: true },
  { source: '/best-homeware-pos-by-posso-ltd-uk', destination: '/homeware-pos', permanent: true },
  { source: '/best-bespoke-epos-software-by-posso-ltd-uk', destination: '/bespoke-epos-software', permanent: true },
  { source: '/best-bespoke-pos-by-posso-ltd-uk', destination: '/bespoke-epos-software', permanent: true },
  { source: '/best-pdq-machine-for-small-businesses-by-posso-ltd-uk', destination: '/pdq-machine-small-business', permanent: true },
  { source: '/best-pdq-machines-by-posso-ltd-uk', destination: '/pdq-systems', permanent: true },
  { source: '/best-pdq-machines-uk-by-posso-ltd-uk', destination: '/pdq-systems', permanent: true },
  { source: '/best-pdq-systems-by-posso-ltd-uk', destination: '/pdq-systems', permanent: true },
  { source: '/best-order-counter-pos-system-by-posso-ltd-uk', destination: '/order-counter-pos', permanent: true },
  { source: '/best-custom-pos-system-by-posso-ltd-uk', destination: '/custom-pos-system', permanent: true },
  { source: '/best-mobile-pos-system-uk-by-posso-ltd-uk', destination: '/mobile-pos-system-uk', permanent: true },
  // Flattened (was /self-service-epos, which now redirects to /self-order-kiosks).
  // The duplicate /best-restaurant-self-ordering-system-by-posso-ltd-uk entry that
  // pointed here was removed — the later rule sending it to
  // /restaurant-self-ordering-system now takes effect instead of being shadowed.
  { source: '/best-self-service-epos-by-posso-ltd-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-till-system-software-by-posso-ltd-uk', destination: '/till-system-software', permanent: true },
  { source: '/best-touch-screen-till-system-by-posso-ltd-uk', destination: '/touch-screen-till-system', permanent: true },
  { source: '/best-touch-screen-epos-system-by-posso-ltd-uk', destination: '/touch-screen-till-system', permanent: true },
  { source: '/best-epos-touchscreen-by-posso-ltd-uk', destination: '/touch-screen-till-system', permanent: true },
  { source: '/best-kiosk-pos-by-posso-ltd-uk', destination: '/kiosk-pos', permanent: true },
  { source: '/best-pos-kiosks-by-posso-ltd-uk', destination: '/kiosk-pos', permanent: true },
  { source: '/best-self-serve-kiosk-by-posso-ltd-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-uk-kiosk-by-posso-ltd-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-kiosk-uk-by-posso-ltd-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-online-ordering-pos-by-posso-ltd-uk', destination: '/online-ordering-pos', permanent: true },
  { source: '/best-delivery-pos-software-by-posso-ltd-uk', destination: '/delivery-pos-software', permanent: true },
  { source: '/best-epos-booking-system-by-posso-ltd-uk', destination: '/epos-booking-system', permanent: true },
  { source: '/best-epos-now-booking-system-by-posso-ltd-uk', destination: '/epos-booking-system', permanent: true },
  { source: '/best-free-restaurant-pos-by-posso-ltd-uk', destination: '/free-restaurant-pos', permanent: true },
  { source: '/best-free-pos-system-by-posso-ltd-uk', destination: '/free-restaurant-pos', permanent: true },
  { source: '/best-epos-software-free-by-posso-ltd-uk', destination: '/free-restaurant-pos', permanent: true },
  { source: '/best-best-free-epos-software-by-posso-ltd-uk', destination: '/free-restaurant-pos', permanent: true },
  { source: '/best-best-epos-system-for-small-grocery-store-by-posso-ltd-uk', destination: '/grocery-store-epos', permanent: true },
  { source: '/best-restaurant-pre-order-app-by-posso-ltd-uk', destination: '/restaurant-pre-order-app', permanent: true },
  { source: '/best-nail-salon-pos-by-posso-ltd-uk', destination: '/nail-salon-pos', permanent: true },
  { source: '/best-nail-salon-pos-software-by-posso-ltd-uk', destination: '/nail-salon-pos', permanent: true },
  { source: '/best-beauty-salon-software-point-of-sale-by-posso-ltd-uk', destination: '/beauty-salon-pos', permanent: true },
  { source: '/best-food-ordering-apps-by-posso-ltd-uk', destination: '/food-ordering-apps', permanent: true },
  { source: '/best-mobile-ordering-apps-by-posso-ltd-uk', destination: '/mobile-ordering-apps', permanent: true },
  { source: '/best-coffee-shop-ordering-app-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-mobile-ordering-app-for-coffee-shops-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-digital-signage-systems-by-posso-ltd-uk', destination: '/digital-signage-systems', permanent: true },
  { source: '/best-hospitality-software-uk-by-posso-ltd-uk', destination: '/hospitality-software-uk', permanent: true },
  { source: '/best-pos-hospitality-systems-by-posso-ltd-uk', destination: '/hospitality-software-uk', permanent: true },
  { source: '/best-restaurant-ordering-app-free-uk-by-posso-ltd-uk', destination: '/restaurant-ordering-app', permanent: true },
  { source: '/best-restaurant-order-taking-system-by-posso-ltd-uk', destination: '/restaurant-ordering-app', permanent: true },
  { source: '/best-best-cash-register-for-small-business-uk-by-posso-ltd-uk', destination: '/cash-register-small-business', permanent: true },
  { source: '/best-self-order-app-by-posso-ltd-uk', destination: '/self-order-app', permanent: true },
  { source: '/best-pizza-pos-software-by-posso-ltd-uk', destination: '/pizza-pos-software', permanent: true },
  { source: '/best-pizza-pos-system-by-posso-ltd-uk', destination: '/pizza-pos-software', permanent: true },
  { source: '/best-best-pizza-pos-by-posso-ltd-uk', destination: '/pizza-pos-software', permanent: true },
  { source: '/best-best-pizza-pos-system-2020-by-posso-ltd-uk', destination: '/pizza-pos-software', permanent: true },
  { source: '/best-pizza-restaurant-software-by-posso-ltd-uk', destination: '/pizza-restaurant-software', permanent: true },
  { source: '/best-easy-pos-system-by-posso-ltd-uk', destination: '/easy-pos-system', permanent: true },
  { source: '/best-pos-machine-software-by-posso-ltd-uk', destination: '/pos-machine-software', permanent: true },
  { source: '/best-food-ordering-machine-by-posso-ltd-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-tablet-food-ordering-system-by-posso-ltd-uk', destination: '/tablet-food-ordering-system', permanent: true },
  { source: '/best-online-food-ordering-portal-by-posso-ltd-uk', destination: '/online-food-ordering-portal', permanent: true },
  { source: '/best-web-based-ordering-system-for-coffee-shops-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-online-ordering-software-for-coffee-shops-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-mobile-ordering-system-for-coffee-shops-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-online-ordering-platform-for-coffee-shops-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-mobile-ordering-platform-for-coffee-shops-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-cafe-online-ordering-system-by-posso-ltd-uk', destination: '/coffee-shop-ordering-app', permanent: true },
  { source: '/best-text-ordering-system-by-posso-ltd-uk', destination: '/text-ordering-system', permanent: true },
  { source: '/best-pos-signage-by-posso-ltd-uk', destination: '/pos-signage', permanent: true },
  { source: '/best-food-and-drink-digital-signage-by-posso-ltd-uk', destination: '/food-and-drink-digital-signage', permanent: true },
  { source: '/best-epos-credit-card-application-by-posso-ltd-uk', destination: '/epos-credit-card-application', permanent: true },
  { source: '/best-self-employed-card-machine-by-posso-ltd-uk', destination: '/self-employed-card-machine', permanent: true },
  { source: '/best-free-card-machine-by-posso-ltd-uk', destination: '/free-card-machine', permanent: true },
  { source: '/best-cheap-epos-software-by-posso-ltd-uk', destination: '/cheap-epos-software', permanent: true },
  { source: '/best-cheap-epos-by-posso-ltd-uk', destination: '/cheap-epos-software', permanent: true },
  { source: '/best-cheap-pos-system-by-posso-ltd-uk', destination: '/cheap-epos-software', permanent: true },
  { source: '/best-cheap-epos-system-by-posso-ltd-uk', destination: '/cheap-epos-software', permanent: true },
  { source: '/best-best-pos-for-pizza-delivery-by-posso-ltd-uk', destination: '/pizza-delivery-pos', permanent: true },
  { source: '/best-best-pos-system-for-pizza-shop-by-posso-ltd-uk', destination: '/pos-for-pizza-shop', permanent: true },
  { source: '/best-restaurant-self-ordering-system-by-posso-ltd-uk', destination: '/self-order-kiosks-for-restaurants', permanent: true },
  { source: '/best-hospitality-kiosks-by-posso-ltd-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/best-pos-webshop-by-posso-ltd-uk', destination: '/pos-webshop', permanent: true },
  { source: '/best-pos-companies-uk-by-posso-ltd-uk', destination: '/pos-companies-uk', permanent: true },
  { source: '/best-buy-epos-system-uk-by-posso-ltd-uk', destination: '/buy-epos-system-uk', permanent: true },
  { source: '/best-food-to-order-online-by-posso-ltd-uk', destination: '/food-to-order-online', permanent: true },
  { source: '/best-open-source-epos-software-by-posso-ltd-uk', destination: '/open-source-epos-software', permanent: true },
  { source: '/best-diy-pos-system-restaurants-by-posso-ltd-uk', destination: '/diy-pos-system-restaurants', permanent: true },
  { source: '/best-build-your-own-pos-system-by-posso-ltd-uk', destination: '/build-your-own-pos-system', permanent: true },
  { source: '/best-website-pos-finance-software-by-posso-ltd-uk', destination: '/website-pos-finance-software', permanent: true },
  { source: '/best-epos-marketing-by-posso-ltd-uk', destination: '/epos-marketing', permanent: true },
  { source: '/best-epos-portal-by-posso-ltd-uk', destination: '/epos-portal', permanent: true },
  { source: '/best-takeaway-pos-by-posso-ltd-uk', destination: '/takeaway-pos', permanent: true },
  { source: '/best-restaurant-software-free-download-full-version-by-posso-ltd-uk', destination: '/restaurant-software-free', permanent: true },
  { source: '/best-pos-for-sweet-shop-by-posso-ltd-uk', destination: '/pos-for-sweet-shop', permanent: true },
  { source: '/best-pos-software-for-sweet-shop-by-posso-ltd-uk', destination: '/pos-for-sweet-shop', permanent: true },
  { source: '/best-sweet-shop-point-of-sale-software-by-posso-ltd-uk', destination: '/sweet-shop-point-of-sale', permanent: true },
  { source: '/best-diy-cash-drawer-by-posso-ltd-uk', destination: '/diy-cash-drawer', permanent: true },
  { source: '/best-self-serve-coffee-bar-stands-by-posso-ltd-uk', destination: '/self-serve-coffee-bar', permanent: true },
  { source: '/best-branded-self-serve-coffee-cart-by-posso-ltd-uk', destination: '/branded-self-serve-coffee-cart', permanent: true },
  { source: '/best-facebook-food-ordering-system-by-posso-ltd-uk', destination: '/facebook-food-ordering-system', permanent: true },
  { source: '/best-takeaway-software-uk-by-posso-ltd-uk', destination: '/epos-software-for-takeaway', permanent: true },
  { source: '/best-restaurant-epos-uk-by-posso-ltd-uk', destination: '/best-restaurant-epos-system-uk', permanent: true },
  // Self-canonicalising alias served duplicate content against the clean URL
  { source: '/best-epos-system-for-indian-takeaway-by-posso-ltd-uk', destination: '/pos-for-indian-takeaway', permanent: true },
  { source: '/epos-system-for-takeaways', destination: '/epos-systems-for-takeaways', permanent: true },
  { source: '/restaurant-epos-system-3', destination: '/pos', permanent: true },
  // Kiosk cluster consolidation, September 2026. Duplicate kiosk intents fold into
  // /self-order-kiosks; the unattended/card-only angle from /self-serve-kiosk was
  // moved onto that page first so the content is not lost with the URL.
  { source: '/self-ordering-kiosk', destination: '/self-order-kiosks', permanent: true },
  { source: '/self-serve-kiosk', destination: '/self-order-kiosks', permanent: true },
  { source: '/food-ordering-machine', destination: '/self-order-kiosks', permanent: true },
  { source: '/hospitality-kiosks', destination: '/self-order-kiosks', permanent: true },
  { source: '/solutions/self-service-kiosk-uk', destination: '/self-order-kiosks', permanent: true },
  { source: '/restaurant-self-ordering-system', destination: '/self-order-kiosks-for-restaurants', permanent: true },
  { source: '/do-self-order-kiosks-increase-sales', destination: '/blog/benefits-of-self-ordering-kiosks-for-restaurants', permanent: true },
  { source: '/blog/self-order-kiosks', destination: '/self-order-kiosks-guide', permanent: true },
  { source: '/blog/pos-and-self-order-kiosk-solutions', destination: '/self-order-kiosks', permanent: true },
  { source: '/outdoor-self-order-kiosks-food-truck-epos', destination: '/outdoor-self-order-kiosks-ip65', permanent: true },
  { source: '/best-dark-kitchen-software-by-posso-ltd-uk', destination: '/best-dark-kitchen-software-uk', permanent: true },

  // POS/EPOS cluster consolidation (October 2026). Each pair split one intent
  // across a product page and a buyer's guide; the guide survives because it is
  // the AEO-structured page, and the product page's unique detail (pizza
  // size-pricing matrix and time-of-day zones; Indian caller-ID reorder and
  // auto-applied meal deals) was merged into it first. /cafe-epos-system was
  // already folded into /pos-for-cafe in September.
  { source: '/pizza-epos', destination: '/pos-for-pizza-shop', permanent: true },
  { source: '/epos-system-for-indian-takeaway', destination: '/pos-for-indian-takeaway', permanent: true },

  // The last four `-by-posso-ltd-uk` routes that still rendered (each
  // self-canonicalised and competed with a clean page). Approved by Paul,
  // October 2026. The best-best-online-ordering stub used a server redirect()
  // — a temporary 307 to another alias; this permanent rule now wins over it.
  { source: '/best-best-pos-system-for-coffee-shop-uk-by-posso-ltd-uk', destination: '/pos-for-cafe', permanent: true },
  { source: '/best-epos-software-for-takeaway-delivery-by-posso-ltd-uk', destination: '/epos-software-for-takeaway-delivery', permanent: true },
  { source: '/best-best-online-ordering-software-by-posso-ltd-uk', destination: '/online-ordering', permanent: true },
  { source: '/credit-card-machine-clover-by-posso-ltd-uk', destination: '/credit-card-machines', permanent: true },
];

/** Paths that redirect (source side only, host-conditional rules excluded). */
export const redirectedPaths: Set<string> = new Set(
  siteRedirects.filter((r) => !r.has && !r.source.includes(':')).map((r) => r.source),
);
