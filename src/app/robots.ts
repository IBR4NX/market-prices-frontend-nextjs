import { MAIN_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "https";
//   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://markets-ye.vercel.app";
  const baseUrl = host ? `${protocol}://${host}` : MAIN_URL;

  return {
    rules: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: [
      `${baseUrl}/ibovsmap.xml`,
      `${baseUrl}/sitemap/custom/products.xml?sender=${host ?? "markets-ye.vercel.app"}`,
    ],
  };
}
