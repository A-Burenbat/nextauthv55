import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ['avatars.githubusercontent.com']
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
      protocol: "https",
      hostname: "*",
      },
    ]
  }
};

export default nextConfig;
