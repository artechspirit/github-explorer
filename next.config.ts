import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
};

export default withAnalyzer(nextConfig);
