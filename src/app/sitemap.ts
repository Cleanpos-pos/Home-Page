import { MetadataRoute } from 'next';

const URL = 'https://posso.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/pos',
    '/kiosks',
    '/ticketing',
    '/digital-signage',
    '/credit-card-machines',
    '/credit-card-machines-enquiry',
    '/franchise',
    '/online-ordering',
    '/shop-fitting',
    '/shop-signage',
    '/finance',
    '/contact',
    '/blog',
    '/blog/pos-systems-for-restaurants-and-takeaways',
    '/blog/self-order-kiosks',
    '/blog/online-ordering-and-mobile-apps',
    '/blog/best-card-machine-for-small-business',
    '/agents',
    '/privacy-policy',
    '/cookie-policy',
    '/software-terms',
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
