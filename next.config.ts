import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**',
      },
    ],domains: ["media.istockphoto.com"],
  },
  devIndicators: {
    buildActivity: false,
    devIdicator: false,
  },
}

const nextConfig: NextConfig = {
  
};

export default nextConfig;
