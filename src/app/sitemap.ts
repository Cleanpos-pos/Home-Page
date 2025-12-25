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
    '/privacy-policy',
    '/cookie-policy',
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
