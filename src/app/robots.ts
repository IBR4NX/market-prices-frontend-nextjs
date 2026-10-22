import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();

  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "https";
  const baseUrl = host ? `${protocol}://${host}` : "prices.ibovs.com";

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap/custom/products.xml?sender=${host ?? "prices.ibovs.com"}&is=name`,
      `${baseUrl}/sitemap/custom/test/feed?sender=${host ?? "prices.ibovs.com"}`,
    ],
  };
}
