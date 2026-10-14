import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.100.102'],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching:false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  /* image from storage vercel */
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "q3stwcmidyeiq6rt.public.blob.vercel-storage.com",
      pathname: "/product-images/**",
    },
  ],
},
};

export default nextConfig;
