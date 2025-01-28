import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
    devIdicator: false,
  },
}

const nextConfig: NextConfig = {
  
};

export default nextConfig;
