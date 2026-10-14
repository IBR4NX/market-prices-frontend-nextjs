import { PRICES_URL } from "@/lib/constants";
import ClientPage from "./client";

import { createSeo } from "@/lib/seo";
export const metadata = createSeo({
  canonicalPath: PRICES_URL,
  ignorePath:true,
  title:
    "أسعار المنتجات والسلع في اليمن اليوم | صنعاء وتعز وبقية المدن",
  description:
    "تعرف على أسعار المنتجات والسلع في اليمن اليوم، وتابع أسعار المواد الغذائية مثل الأرز والدقيق والسكر والزيت والقمح في صنعاء وتعز وعدن وبقية المدن اليمنية. قارن أسعار المنتجات الأساسية حسب المدينة والفئة، واكتشف تحديثات الأسعار وتغيرات السوق اليمني.",
  type: "website",
});



export default function Page() {
  return <ClientPage />;
}
