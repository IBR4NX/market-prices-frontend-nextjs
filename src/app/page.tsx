import ClientPage from "./client";
import { createSeo } from "@/lib/seo";
import { JsonLd, JsonLdWebsite } from "@/lib/seo";
export const metadata = createSeo({
  canonicalPath: "/",
  title: "أسعار المنتجات والسلع في اليمن اليوم",
  description:
    "تابع أسعار المنتجات والسلع في اليمن حسب المدينة والتصنيف. استكشف الأسعار المسجلة، وقارن الأسعار بين المدن اليمنية، وتعرّف على تفاصيل المنتجات وتواريخ تحديث الأسعار.",
});

export default function Page() {
  return (
    <>
      {" "}
      <JsonLd data={JsonLdWebsite} />
      <ClientPage />
    </>
  );
}
