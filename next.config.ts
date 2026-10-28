import type { NextConfig } from "next";

// The Base44 preview proxy serves the dev server through
// https://3000-<public host suffix>. Next.js gates dev assets and HMR on the
// request origin, so allow that origin while in the preview sandbox only.
const previewOrigins =
  process.env.BASE44_PREVIEW_MODE === '1' && process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? [`3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`]
    : [];

const nextConfig: NextConfig = {
  allowedDevOrigins: previewOrigins,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'video.bunnycdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.b-cdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'share.zytronium.dev',
      },
      {
        protocol: 'https',
        hostname: 'bfbgxztphnbtrlplityh.supabase.co',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
