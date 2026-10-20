import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { api } from "@/lib/api";
import { CatalogEntity } from "@/components/catalog/adminTypes";
import { number } from "motion/react";
const lastModified = new Date();
export type SitemapUrl = {
  url: string;
  lastmod?: string | Date | null;
  priority: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cities = await api.get("/cities");

  const urls: SitemapUrl[] = cities.data.data.map((city: CatalogEntity) => ({
    url: `/city/${city.name}`,
    lastmod: city.updated_at,
    priority: "1.0",
  }));
  return CreateXml(urls);
}

function CreateXml(items: SitemapUrl[]) {
  return items.map((item) => {
    return {
      url: `${SITE_URL}${item.url}`,
      lastModified: item.lastmod ?? undefined,
      changeFrequency: "daily" as const,
      priority: number.parse(item.priority),
    };
  });
}
