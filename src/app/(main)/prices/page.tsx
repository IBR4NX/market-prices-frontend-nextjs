import { PRICES_URL } from "@/lib/constants";
import ClientPage from "./client";

import { createSeo } from "@/lib/seo";
export const metadata = createSeo({
  ignorePath: true,
  title: "أسعار المنتجات والمواد الغذائية اليوم",
  description:
    "تابع أسعار المواد الغذائية : الأرز والدقيق والسكر والزيت والقمح في صنعاء وتعز وعدن وصنعاء. قارن أسعار المنتجات الأساسية حسب المدينة والفئة، واكتشف تحديثات الأسعار وتغيرات السوق اليمني.",
  type: "website",
});

export default function Page() {
  return <ClientPage />;
}
