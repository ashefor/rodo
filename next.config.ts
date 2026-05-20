import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allowlist for Instagram CDN posters/thumbnails. The IG Graph API
    // returns media_url + thumbnail_url from these hosts.
    remotePatterns: [
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
      { protocol: "https", hostname: "scontent.xx.fbcdn.net" },
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
};

export default nextConfig;
