import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Matches the original folder-per-page URLs (/about/, /services/pooja-units/) and the sitemap.
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
    // Same widths the original srcset offered.
    deviceSizes: [640, 1024, 1600, 2200],
    imageSizes: [80, 160, 320],
  },
};

export default nextConfig;
