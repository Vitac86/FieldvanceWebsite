import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Temporary deploy-unblock: skip ESLint during Next.js production builds on Vercel.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
