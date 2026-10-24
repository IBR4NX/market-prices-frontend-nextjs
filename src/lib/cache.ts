import { unstable_cache } from "next/cache";
import { cache } from "react";

interface CacheOptions {
  /** مفاتيح الكاش لتمييز البيانات */
  keys: string[];
  /** وسوم الكاش لاستخدامها عند التحديث عبر revalidateTag */
  tags: string[];
  /** مدة بقاء الكاش بالثواني (الافتراضي: ساعة واحدة = 3600) */
  revalidate?: number | false;
}

/**
 * دالة موحدة لتغليف أي استعلام قاعدة بيانات بنظام Caching مزدوج:
 * 1. React cache: يمنع تكرار الاستعلام داخل نفس الـ Request (بين generateMetadata و Page)
 * 2. Next.js Data Cache: يحفظ النتيجة عبر الطلبات المختلفة
 */
export function createCachedQuery<TArgs extends unknown[], TResult>(
  queryFn: (...args: TArgs) => Promise<TResult>,
  options: CacheOptions,
) {
  return cache(
    unstable_cache(queryFn, options.keys, {
      tags: options.tags,
      revalidate: options.revalidate ?? 3600,
    }),
  );
}
