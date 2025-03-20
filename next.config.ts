import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "ojidfdenb7y83wtm.public.blob.vercel-storage.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Skips ESLint during builds
  },
};

export default nextConfig;
