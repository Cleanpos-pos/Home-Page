import type { Metadata } from 'next';

// This route's page.tsx is a 'use client' component, so it cannot export
// metadata itself. Without this server layout the route inherited the
// homepage's title and canonical, which pointed /shop-fitting at "/".
export const metadata: Metadata = {
  title: 'Shop Fitting Services for Restaurants & Takeaways',
  description:
    'Shop fitting for UK restaurants, takeaways and cafes — counter layout, kitchen flow, signage and the cabling your EPOS, kitchen screens and kiosks need on day one.',
  alternates: {
    canonical: '/shop-fitting',
  },
  openGraph: {
    title: 'Shop Fitting Services for Restaurants & Takeaways | Posso',
    description:
      'Shop fitting for UK restaurants, takeaways and cafes, planned around your counter, kitchen flow and EPOS cabling.',
    url: 'https://www.posso.co.uk/shop-fitting',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ShopFittingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
