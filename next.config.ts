
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.posso.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'allguardweb.on-forge.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sp-ao.shortpixel.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uk.clover.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/best-food-on-the-table-app-by-posso-ltd-uk', destination: '/restaurant-order-at-table-app', permanent: true },
      { source: '/best-restaurant-order-at-table-app-by-posso-ltd-uk', destination: '/restaurant-order-at-table-app', permanent: true },
      { source: '/best-food-ordering-system-by-posso-ltd-uk', destination: '/food-ordering-system', permanent: true },
      { source: '/best-pub-pos-by-posso-ltd-uk', destination: '/pub-pos-system', permanent: true },
      { source: '/best-coffee-ordering-app-by-posso-ltd-uk', destination: '/coffee-ordering-app', permanent: true },
      { source: '/best-hotel-epos-systems-by-posso-ltd-uk', destination: '/hotel-epos-system', permanent: true },
      { source: '/best-self-ordering-kiosks-by-posso-ltd-uk', destination: '/self-ordering-kiosk', permanent: true },
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
      { source: '/best-self-ordering-system-by-posso-ltd-uk', destination: '/self-ordering-kiosk', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
};

export default nextConfig;
