
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // This allows the Next.js dev server to accept requests from the
    // Firebase Studio preview URLs.
    allowedDevOrigins: [
      '*.cloudworkstations.dev',
      '*.firebase.studio',
    ],
  },
  images: {
    remotePatterns: [
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
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'posso.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.posso.uk',
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
    ],
  },
};

export default nextConfig;
