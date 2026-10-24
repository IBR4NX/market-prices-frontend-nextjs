import { query } from "@/lib/db";
import { createCachedQuery } from "@/lib/cache";
export interface PageRecord {
  id: string; // UUID
  name: string | null;
  slug: string;
  title: string;
  description: string | null;
  content: string;
  query: string | null;
  note: string | null;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  created_at: Date;
  updated_at: Date;
}

export const PAGES_CACHE_TAG = "pages";

/**
 * جلب صفحة واحدة عبر الـ Slug مع تفعيل الكاش
 */
export const getCachedPageBySlug = createCachedQuery(
  async (slug: string): Promise<PageRecord | null> => {
    const rows = await query<PageRecord>(
      `SELECT id, name, slug, title, description, content, query, note, meta_title, meta_description, is_published, created_at, updated_at
       FROM pages
       WHERE slug = $1 AND is_published = true
       LIMIT 1`,
      [slug],
    );
    return rows[0] ?? null;
  },
  {
    keys: ["page-by-slug"],
    tags: [PAGES_CACHE_TAG],
    revalidate: 3600,
  },
);

/**
 * جلب كل الـ Slugs المنشورة لتوليد الصفحات مسبقاً (Static Params)
 */
export async function getAllPublishedSlugs(): Promise<{ slug: string }[]> {
  return await query<{ slug: string }>(`SELECT slug FROM pages WHERE is_published = true`);
}
