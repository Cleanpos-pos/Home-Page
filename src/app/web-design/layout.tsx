import type { Metadata } from 'next';

// This route's page.tsx is a 'use client' component, so it cannot export
// metadata itself. Without this server layout the route inherited the
// homepage's title and canonical, which pointed /web-design at "/".
export const metadata: Metadata = {
  title: 'Restaurant & Takeaway Web Design UK',
  description:
    'Website design for UK restaurants and takeaways, built around your menu and online ordering so customers order from your own site rather than a marketplace.',
  alternates: {
    canonical: '/web-design',
  },
  openGraph: {
    title: 'Restaurant & Takeaway Web Design UK | Posso',
    description:
      'Website design for UK restaurants and takeaways, built around your menu and online ordering.',
    url: 'https://www.posso.co.uk/web-design',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
