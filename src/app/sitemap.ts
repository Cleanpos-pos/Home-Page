import { MetadataRoute } from 'next';
import { allSeoPages } from '@/lib/seo-pages-data';

const URL = 'https://www.posso.co.uk';

/**
 * Escape free text destined for the video-sitemap extension.
 *
 * Next.js escapes the fields it owns (<loc>, <lastmod>, …) but passes
 * `videos[].title` / `.description` through verbatim, so a bare "&" in a page
 * H1 emits invalid XML and Search Console rejects the whole sitemap with
 * "Parsing error". Only "&" and the angle brackets are illegal in element
 * text, and "&" must be replaced first or it would re-escape the others.
 */
function xmlText(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export default function sitemap(): MetadataRoute.Sitemap {

  // Core pages — highest priority
  const coreRoutes = [
    '/',
    '/pos',
    '/pos-systems',
    '/self-order-kiosks',
    '/online-ordering',
    '/gloriafood-alternative',
    '/delivery-integrations',
    '/drink-order-app',
    '/credit-card-machines',
    '/franchise',
    '/ticketing',
    '/digital-signage',
    '/tablemaestro',
    '/dark-kitchens-quick-set-up-epos-and-website-orders-take-orders-now',
    '/pizza-pos-system',
    '/epos-system-for-indian-takeaway',
    '/epos-system-for-takeaway',
    '/restaurant-epos',
    '/best-restaurant-epos-system-uk',
    '/cafe-epos-system',
    '/restaurant-epos-systems-uk',
    '/epos-software-for-takeaway',
    '/epos-software-for-takeaway-delivery',
    '/takeaway-epos',
    '/cafe-pos',
    '/epos-systems-for-takeaways',
    '/cheap-epos-systems-for-restaurants',
    '/mobile-ordering-system',
    '/bar-epos',
    '/best-epos-system-for-takeaway',
    '/best-dark-kitchen-software-by-posso-ltd-uk',
    '/how-much-does-a-pos-system-cost-for-a-restaurant',
    '/top-5-pos-systems-for-restaurants',
    '/best-pos-system-for-pizzeria',
    '/does-dominos-use-a-pos-system',
    '/what-is-the-3-8-rule-for-pizza',
    '/restaurant-order-at-table-app',
    '/food-ordering-system',
    '/pub-pos-system',
    '/coffee-ordering-app',
    '/hotel-epos-system',
    '/self-ordering-kiosk',
    '/online-food-ordering-software',
    '/pizza-delivery-pos',
    '/tablet-epos-system',
    '/restaurant-delivery-system',
    '/portable-epos-system',
    '/cloud-epos-system',
    '/hospitality-pos-software',
    '/self-order-kiosk-fast-food',
    '/touchscreen-pos-system',
    '/free-epos-software',
    '/pub-epos-system',
    '/golf-club-pos-system',
    '/sweet-shop-pos',
    '/salon-pos-software',
    '/pos-software',
    '/coffee-pos-system',
    '/pizza-epos',
    '/pizza-shop-pos',
    '/bar-ordering-app',
    '/pos-for-pizza-shop',
    '/pos-for-fish-and-chip-shop',
    '/pos-for-kebab-shop',
    '/pos-for-chinese-takeaway',
    '/pos-for-indian-takeaway',
    '/pos-for-cafe',
    '/pos-for-dessert-shop',
    '/takeaway-epos-what-owners-say',
    '/are-self-order-kiosks-worth-it',
    '/epos-system-monthly-fee',
    '/kitchen-display-system',
    '/epos-now-alternative',
    '/posso-vs-epos-now',
    '/epos-pricing-uk',
    '/opening-a-takeaway-epos-checklist',
    '/delivery-management-pos',
    '/replace-old-epos-system',
    '/multi-site-epos-uk',
    '/restaurant-till-system',
    '/shop-till-software',
    '/takeaway-app',
    '/food-delivery-ordering',
    '/dry-cleaning-software',
    '/homeware-pos',
    '/bespoke-epos-software',
    '/cashless-catering-colleges-universities',
    '/pdq-machine-small-business',
    '/pdq-systems',
    '/order-counter-pos',
    '/custom-pos-system',
    '/mobile-pos-system-uk',
    '/self-service-epos',
    '/till-system-software',
    '/kiosk-pos',
    '/self-serve-kiosk',
    '/online-ordering-pos',
    '/delivery-pos-software',
    '/epos-booking-system',
    '/free-restaurant-pos',
    '/grocery-store-epos',
    '/restaurant-pre-order-app',
    '/nail-salon-pos',
    '/beauty-salon-pos',
    '/food-ordering-apps',
    '/mobile-ordering-apps',
    '/coffee-shop-ordering-app',
    '/digital-signage-systems',
    '/hospitality-software-uk',
    '/restaurant-ordering-app',
    '/cash-register-small-business',
    '/self-order-app',
    '/touch-screen-till-system',
    '/pizza-pos-software',
    '/pizza-restaurant-software',
    '/easy-pos-system',
    '/pos-machine-software',
    '/food-ordering-machine',
    '/tablet-food-ordering-system',
    '/online-food-ordering-portal',
    '/web-based-ordering-system-coffee-shops',
    '/online-ordering-software-coffee-shops',
    '/mobile-ordering-system-coffee-shops',
    '/online-ordering-platform-coffee-shops',
    '/mobile-ordering-platform-coffee-shops',
    '/cafe-online-ordering-system',
    '/text-ordering-system',
    '/ai-phone-ordering',
    '/pos-signage',
    '/food-and-drink-digital-signage',
    '/epos-credit-card-application',
    '/self-employed-card-machine',
    '/free-card-machine',
    '/cheap-epos-software',
    '/restaurant-self-ordering-system',
    '/hospitality-kiosks',
    '/pos-webshop',
    '/pos-companies-uk',
    '/buy-epos-system-uk',
    '/food-to-order-online',
    '/open-source-epos-software',
    '/diy-pos-system-restaurants',
    '/build-your-own-pos-system',
    '/website-pos-finance-software',
    '/epos-marketing',
    '/epos-portal',
    '/takeaway-pos',
    '/restaurant-software-free',
    '/pos-for-sweet-shop',
    '/sweet-shop-point-of-sale',
    '/diy-cash-drawer',
    '/self-serve-coffee-bar',
    '/branded-self-serve-coffee-cart',
    '/facebook-food-ordering-system',
    '/dry-cleaning-pickup-delivery-app',
    '/coffee-shop-cafe-epos-systems',
    '/table-ordering-app-uk',
    '/credit-card-machine-clover-by-posso-ltd-uk',
    '/downloads',
  ];

  // Product & solution pages — high priority
  const productRoutes = [
    '/credit-card-machines-enquiry',
    '/teya-card-machine-application-form',
    '/shop-fitting',
    '/shop-signage',
    '/web-design',
    '/finance',
    '/contact',
    '/support',
    '/solutions/trampoline-parks',
    '/solutions/family-entertainment-centers',
    '/solutions/amusement-parks',
    '/solutions/water-parks',
    '/solutions/museums',
    '/solutions/zoos-aquariums',
    '/solutions/wake-parks',
    '/solutions/rock-climbing-gyms',
    '/solutions/playcenters-softplay',
    '/solutions/roller-skating-rinks',
    '/solutions/ice-skating-rinks',
    '/solutions/ski-resorts',
    '/solutions/spas-wellness-centers',
    '/solutions/festivals-events',
    '/solutions/restaurant-self-service-kiosk',
    '/solutions/kiosks-for-retail',
    '/solutions/franchise-pos-systems',
    '/solutions/self-service-kiosk-uk',
    '/solutions/dry-cleaning-pos-system',
  ];

  // Blog posts — medium priority
  const blogRoutes = [
    '/blog',
    '/blog/pos-systems-for-restaurants-and-takeaways',
    '/blog/self-order-kiosks',
    '/blog/online-ordering-and-mobile-apps',
    '/blog/best-card-machine-for-small-business',
    '/blog/self-service-revolution',
    '/blog/why-posso-amusement-park-efficiency-2026',
    '/blog/why-posso-trampoline-park-tech-stack',
    '/blog/why-posso-ice-rink-management-software',
    '/blog/benefits-of-a-mobile-pos-device-for-restaurants',
    '/blog/best-food-delivery-app-uk',
    '/blog/pos-for-pizza-restaurant-best-system-for-pizza-shops',
    '/blog/cafe-coffee-shop-epos-systems-uk',
    '/blog/pos-and-self-order-kiosk-solutions',
    '/blog/free-epos-software-uk-truth',
    '/blog/portable-card-machine-hospitality',
    '/blog/posso-future-hospitality-tech',
    '/blog/epos-system-for-indian-takeaway',
    '/blog/epos-software-for-takeaway-orders',
    '/blog/epos-system-for-takeaway-commission-free',
    '/blog/cafe-pos-system-efficiency',
    '/blog/restaurant-epos-table-management',
    '/blog/best-pos-system-for-pizza-delivery',
    '/blog/hybrid-epos-systems-for-takeaways',
    '/blog/how-dominos-became-a-tech-company',
    '/blog/the-irrational-restaurant',
    '/blog/what-is-epos-system',
  ];

  // Misc/legacy pages — lower priority
  const miscRoutes = [
    '/agents',
    '/about/paul-robinson',
    '/privacy-policy',
    '/cookie-policy',
    '/software-terms',
    '/digital-menu-boards-uk-my-signage',
    '/contact-posso-ltd',
    '/self-order-kiosk-uk-2',
    '/self-order-kiosks-uk',
    '/book-a-call',
    '/credit-card-machine-clover-flex-uk',
    '/digital-menu-boards-4',
    '/hospitality-epos-systems-by-posso-uk-epos-systems',
    '/food-order-app-comparison-tool',
    '/android-epos-systems-from-posso',
    '/small-pos-magic-the-tiny-marvels-transforming-our-lives',
    '/dry-cleaning-epos-systems-uk',
    '/portable-card-machines',
    '/skegness-pos-systems',
    '/cobways-tell-a-friend-scheme',
    '/franchise-epos',
    '/posso-epos',
    '/best-best-online-ordering-software-by-posso-ltd-uk',
    '/best-best-pos-system-for-coffee-shop-uk-by-posso-ltd-uk',
    '/best-epos-software-for-takeaway-delivery-by-posso-ltd-uk',
    '/best-epos-system-for-indian-takeaway-by-posso-ltd-uk',
    '/best-online-ordering-software-for-restaurants-by-posso-ltd-uk',
    '/best-takeaway-epos-software-free-by-posso-ltd-uk',
  ];

  const lastModified = new Date().toISOString();

  // `-by-posso-ltd-uk` aliases are kept out of the sitemap. Most of them canonicalise
  // to a clean equivalent, so submitting them asks Google to crawl pages we have
  // already told it not to index. The routes still render — this only affects discovery.
  const isAlias = (path: string) => path.includes('-by-posso-ltd-uk');

  // Routes that now serve a permanent redirect (see next.config.ts). Submitting a
  // redirecting URL asks Google to crawl a hop rather than the destination.
  const redirecting = new Set([
    '/android-epos-systems-from-posso',
    '/book-a-call',
    '/cobways-tell-a-friend-scheme',
    '/contact-posso-ltd',
    '/credit-card-machine-clover-flex-uk',
    '/digital-menu-boards-4',
    '/digital-menu-boards-uk-my-signage',
    '/dry-cleaning-epos-systems-uk',
    '/food-order-app-comparison-tool',
    '/franchise-epos',
    '/hospitality-epos-systems-by-posso-uk-epos-systems',
    '/portable-card-machines',
    '/posso-epos',
    '/self-order-kiosk-uk-2',
    '/self-order-kiosks-uk',
    '/skegness-pos-systems',
    '/small-pos-magic-the-tiny-marvels-transforming-our-lives',
    // Cluster consolidation, August 2026: pizza product duplicates fold into the
    // /pos-for-pizza-shop guide; kiosk duplicates fold into /self-order-kiosks.
    '/pizza-pos-system',
    '/pizza-shop-pos',
    '/self-service-epos',
    '/solutions/restaurant-self-service-kiosk',
    // Programmatic alias now redirecting; not caught by isAlias (no -by-posso-ltd-uk)
    '/best-pos-software-free-download-full-version-crack-uk',
  ]);

  const isDropped = (path: string) => isAlias(path) || redirecting.has(path);

  const entries: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${URL}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    // Core pages
    ...coreRoutes.filter(r => r !== '/' && !isDropped(r)).map((route) => ({
      url: `${URL}${route}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    // Product & solution pages
    ...productRoutes.filter(r => !isDropped(r)).map((route) => ({
      url: `${URL}${route}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Blog posts
    ...blogRoutes.filter(r => !isDropped(r)).map((route) => ({
      url: `${URL}${route}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Misc/legacy pages
    ...miscRoutes.filter(r => !isDropped(r)).map((route) => ({
      url: `${URL}${route}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    // Programmatic SEO pages (video pages carry video-sitemap data)
    ...allSeoPages.filter((p) => !isDropped('/' + p.slug)).map((p) => ({
      url: `${URL}/${p.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: p.video ? 0.6 : 0.5,
      ...(p.video
        ? {
            videos: [{
              title: xmlText(p.h1),
              thumbnail_loc: `${URL}/videos/thumbs/${p.slug}.png`,
              description: xmlText(p.description),
              content_loc: `${URL}/videos/${p.slug}.mp4`,
              duration: p.video.durationSec,
              publication_date: `${p.video.uploadDate}T09:00:00+00:00`,
              family_friendly: 'yes' as const,
            }],
          }
        : {}),
    })),
  ];

  // A route can appear in more than one bucket above; emit each <loc> once.
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
