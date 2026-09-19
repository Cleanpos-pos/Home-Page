/**
 * Video SEO Pages — full landing pages with an embedded self-hosted video +
 * VideoObject schema, so posso.co.uk ranks in Google Video on its own domain.
 * Merged into allSeoPages and rendered by (seo-pages)/[slug]/page.tsx.
 * Video assets: /public/videos/<slug>.mp4 + /public/videos/thumbs/<slug>.png
 */
import type { SeoPageData } from './seo-pages-data';

const DUR = { durationSec: 39, durationISO: 'PT39S', uploadDate: '2026-07-14' };
const STD_CHAPTERS = (s1: string) => [
  { name: 'Intro', start: 0 },
  { name: s1, start: 5 },
  { name: 'Kiosk features', start: 14 },
  { name: 'The numbers', start: 26 },
  { name: 'Book a demo', start: 32 },
];

export const videoPages: SeoPageData[] = [
  {
    slug: 'self-order-kiosks-for-restaurants',
    title: 'Self-Order Kiosks for Restaurants UK | Posso',
    description: 'Self-order kiosks for restaurants — more covers, shorter queues and higher spend. Watch how Posso kiosks work and book a demo.',
    h1: 'Self-Order Kiosks for Restaurants',
    subtitle: 'Serve more covers with the same team — shorter queues, fewer mistakes and higher average spend.',
    category: 'kiosk',
    targetKeyword: 'self order kiosk for restaurants',
    heroContent: 'Self-order kiosks help restaurants serve more covers with the same team. Cut queues at busy times, free staff to serve and cook, reduce order mistakes, and lift average spend with automatic upsells and meal deals — all integrated with your kitchen.',
    sections: [
      { heading: 'Why Restaurants Switch to Kiosks', content: 'At peak, every minute a customer spends queuing is a lost cover. Self-order kiosks let guests order and pay themselves, so your team focuses on food and service instead of taking orders. Orders are accurate, upsells are consistent, and throughput climbs without adding staff.' },
      { heading: 'Integrated With Your Kitchen and EPOS', content: 'Posso kiosks aren’t a bolt-on — they’re part of the same system as your tills and online ordering. Kiosk orders fire straight to the kitchen display or printer and appear alongside every other order, so you have one menu, one stock count and one source of truth for reporting.' },
    ],
    features: [
      { title: 'Cut Queues at Peak', desc: 'More covers served per hour without hiring extra staff.' },
      { title: 'Fewer Order Mistakes', desc: 'Customers confirm their own order — accuracy goes up, refunds go down.' },
      { title: 'Automatic Upsells', desc: 'Meal deals, sides and drinks suggested on every order.' },
      { title: 'Kitchen Integration', desc: 'Orders route straight to your KDS or kitchen printer.' },
      { title: 'One Unified System', desc: 'Kiosk, till and online orders on one menu and dashboard.' },
      { title: 'Card & Contactless', desc: 'Payments taken at the kiosk — chip, contactless and mobile.' },
    ],
    faqs: [
      { q: 'Do self-order kiosks work for full-service restaurants?', a: 'Yes — kiosks handle counter, collection and quick-service ordering, freeing staff for table service and reducing queues at peak.' },
      { q: 'Do kiosks integrate with the kitchen?', a: 'Yes. Posso kiosks send orders straight to the kitchen display or printer and your EPOS, keeping service fast and accurate.' },
      { q: 'Will a kiosk increase my average order value?', a: 'Guests browse at their own pace and every order carries consistent upsell prompts, so the side or the dessert is offered every time rather than only when the team has a spare moment.' },
    ],
    ctaHeading: 'Bring Kiosks to Your Restaurant',
    ctaText: 'Book a free demo of Posso self-order kiosks for restaurants — more covers, higher spend, happier guests.',
    relatedSlugs: ['self-order-kiosks-for-takeaways', 'outdoor-self-order-kiosks-ip65'],
    extraLinks: [{ href: '/self-order-kiosk-cost', label: 'Self-Order Kiosk Cost', desc: 'What a kiosk costs in the UK — itemised hardware, software and card fees, with worked configurations.' }],
    video: { ...DUR, chapters: STD_CHAPTERS('Why restaurants switch'), transcript: 'Self-order kiosks help restaurants serve more covers with the same team. Cut queues at busy times, free staff to serve and cook, reduce mistakes, and lift average spend with automatic upsells and meal deals — all integrated with your kitchen and EPOS. Book a demo at posso.co.uk.' },
  },
  {
    slug: 'self-order-kiosks-for-takeaways',
    title: 'Self-Order Kiosks for Takeaways UK | Posso',
    description: 'Self-order kiosks for takeaways — take more orders with less staff. Watch how Posso takeaway kiosks work and book a demo.',
    h1: 'Self-Order Kiosks for Takeaways',
    subtitle: 'Handle the rush without hiring — no missed orders, an upsell on every ticket, straight to the kitchen.',
    category: 'kiosk',
    targetKeyword: 'self order kiosk for takeaway',
    heroContent: 'Self-order kiosks let takeaways handle the rush without hiring more staff. No missed phone orders, an upsell on every order, and tickets that print straight to the kitchen — with card and contactless payments and live reporting.',
    sections: [
      { heading: 'Perfect for the Takeaway Rush', content: 'Friday night is when takeaways make their money — and when staff are stretched thinest. A self-order kiosk absorbs walk-in demand: customers order and pay at the screen, tickets fire to the kitchen instantly, and no order is missed because someone couldn’t get to the counter or phone.' },
      { heading: 'More Per Order, Less Labour', content: 'Every kiosk order offers sides, drinks and deals automatically, so baskets grow. At the same time, self-service lowers your labour cost per order and frees staff to prep and pack. It’s more revenue and lower cost from the same footprint.' },
    ],
    features: [
      { title: 'Handle Rushes', desc: 'Absorb peak walk-in demand without adding staff.' },
      { title: 'No Missed Orders', desc: 'Every order is captured at the screen — nothing lost at the counter.' },
      { title: 'Upsell Every Ticket', desc: 'Sides, drinks and meal deals offered on every order.' },
      { title: 'Prints to Kitchen', desc: 'Orders route straight to your kitchen printer or display.' },
      { title: 'Collection & Eat-In', desc: 'Modes for collection and dine-in from the same kiosk.' },
      { title: 'Card & Contactless', desc: 'Fast payments taken at the kiosk with live reporting.' },
    ],
    faqs: [
      { q: 'Are self-order kiosks good for takeaways?', a: 'Yes — kiosks handle peak rushes without extra staff, remove missed phone orders and upsell on every order.' },
      { q: 'Can customers pay at the kiosk?', a: 'Yes. Posso kiosks take card and contactless payments and send the order straight to the kitchen.' },
      { q: 'Does the kiosk print to the kitchen?', a: 'Yes — kiosk orders route to your kitchen printer or display automatically, alongside walk-in and online orders.' },
    ],
    ctaHeading: 'Speed Up Your Takeaway',
    ctaText: 'Book a free demo of Posso self-order kiosks for takeaways — more orders, less queue, straight to the kitchen.',
    relatedSlugs: ['self-order-kiosks-for-restaurants', 'outdoor-self-order-kiosks-ip65'],
    extraLinks: [{ href: '/self-order-kiosk-cost', label: 'Self-Order Kiosk Cost', desc: 'What a kiosk costs in the UK — itemised hardware, software and card fees, with worked configurations.' }],
    video: { ...DUR, chapters: STD_CHAPTERS('Perfect for takeaways'), transcript: 'Self-order kiosks let takeaways handle the rush without hiring more staff. No missed phone orders, an upsell on every order, and tickets that print straight to the kitchen — with card and contactless payments and live reporting. Book a demo at posso.co.uk.' },
  },
  {
    slug: 'outdoor-self-order-kiosks-ip65',
    title: 'Outdoor Self-Order Kiosks — IP65 Weatherproof | Posso',
    description: 'IP65 weatherproof outdoor self-order kiosks built for British weather. Water & dust resistant, sunlight-readable, 4G. Watch the video and book a demo.',
    h1: 'Outdoor Self-Order Kiosks (IP65 Weatherproof)',
    subtitle: 'IP65 water and dust resistant, sunlight-readable and 4G — self-order kiosks that trade anywhere outside.',
    category: 'kiosk',
    targetKeyword: 'outdoor self order kiosk',
    heroContent: 'Posso outdoor self-order kiosks are IP65 rated — water and dust resistant — with a sunlight-readable screen and a secure, tough build that works in rain, sun and cold. Perfect for stadiums, markets, festivals, food trucks and beer gardens, running on 4G with card payments built in.',
    sections: [
      { heading: 'What IP65 Means for You', content: 'IP65 is an ingress-protection rating: the “6” means fully dust-tight, and the “5” means protected against low-pressure water jets from any direction. In plain terms, a Posso outdoor kiosk shrugs off rain, spray, dust and grime — so it keeps trading through a British summer or a winter market.' },
      { heading: 'Trade Anywhere Outside', content: 'Because they run on 4G with card payments built in, outdoor kiosks don’t need fixed Wi-Fi or mains data. Drop them at a stadium concourse, a festival pitch, a beer garden or beside a food truck and start taking self-service orders in minutes.' },
    ],
    features: [
      { title: 'IP65 Rated', desc: 'Dust-tight and protected against water jets from any direction.' },
      { title: 'Sunlight-Readable', desc: 'High-brightness screen stays clear in direct sun.' },
      { title: 'All-Weather Build', desc: 'Works in rain, sun and cold with a secure, tough enclosure.' },
      { title: '4G Connectivity', desc: 'No fixed Wi-Fi needed — trade anywhere outdoors.' },
      { title: 'Card Payments Built In', desc: 'Chip, contactless and mobile payments at the kiosk.' },
      { title: 'Fast to Deploy', desc: 'Set up at events, markets and venues in minutes.' },
    ],
    faqs: [
      { q: 'What does IP65 mean for an outdoor kiosk?', a: 'IP65 means the kiosk is dust-tight and protected against low-pressure water jets from any direction — suitable for permanent outdoor use in British weather.' },
      { q: 'Where can outdoor self-order kiosks be used?', a: 'Stadiums, markets, festivals, food trucks, beer gardens and any outdoor venue — they run on 4G so no fixed Wi-Fi is needed.' },
      { q: 'Can outdoor kiosks take payments?', a: 'Yes — card, contactless and mobile payments are built in, and orders route straight to your kitchen or prep station.' },
    ],
    ctaHeading: 'Take Orders Outdoors, Whatever the Weather',
    ctaText: 'Book a free demo of Posso IP65 outdoor self-order kiosks — built for British weather.',
    relatedSlugs: ['self-order-kiosks-for-restaurants', 'self-order-kiosks-for-takeaways'],
    extraLinks: [{ href: '/self-order-kiosk-cost', label: 'Self-Order Kiosk Cost', desc: 'What a kiosk costs in the UK — itemised hardware, software and card fees, with worked configurations.' }],
    video: { ...DUR, chapters: [
      { name: 'Intro', start: 0 },
      { name: 'Made for outdoors', start: 5 },
      { name: 'Trade anywhere outside', start: 14 },
      { name: 'IP65 rated', start: 26 },
      { name: 'Book a demo', start: 32 },
    ], transcript: 'Posso outdoor self-order kiosks are IP65 rated — water and dust resistant — with a sunlight-readable screen and a tough, secure build that works in rain, sun and cold. They run on 4G with card payments built in, so you can trade at stadiums, markets, festivals, food trucks and beer gardens. Book a demo at posso.co.uk.' },
  },
];
