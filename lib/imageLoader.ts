'use client';

import type { ImageLoaderProps } from 'next/image';

// Pexels resizes on its own CDN (the original srcset used ?w=640/1024/1600/2200),
// so remote photos are requested at the exact width next/image picks instead of
// being re-processed by the Next.js optimiser. Local files are served as-is.
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  if (src.startsWith('https://images.pexels.com/')) {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}`;
  }
  return `${src}?w=${width}`;
}
