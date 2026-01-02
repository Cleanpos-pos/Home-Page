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
    '/blog/self-service-revolution',
    '/agents',
    '/privacy-policy',
    '/cookie-policy',
    '/software-terms',
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
    '/solutions/festivals-events'
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
