import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/auction-fusion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/auction-fusion/' : '',
};

export default nextConfig;
