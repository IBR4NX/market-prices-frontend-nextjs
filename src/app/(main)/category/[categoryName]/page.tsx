import ClientPage from "./client";
import { createSeo } from "@/lib/seo";
import type { Metadata } from "next";
export const instant = false;
type Props = {
  params: Promise<{ categoryName: string }>;
};
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { categoryName } = await params;
  const category = decodeURIComponent(categoryName);

  return createSeo({
    canonicalPath: `/category/${category}`,
    title: `أسعار ${category} في اليمن اليوم | أسعار اليمن`,
    description: `تابع أسعار ${category} في اليمن، وتعرّف على أسعار المنتجات والسلع المدرجة ضمن هذا التصنيف، مع أحدث الأسعار المسجلة وتغيراتها حسب المدن اليمنية. قارن أسعار ${category} واكتشف تكاليف المنتجات في السوق اليمني عبر منصة أسعار اليمن.`,
    type: "website",
  });
}

export default function Page() {
  return <ClientPage />;
}
