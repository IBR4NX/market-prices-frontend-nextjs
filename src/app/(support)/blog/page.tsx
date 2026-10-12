import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/blog",
  title: "أخبار الأسواق وتغيرات الأسعار في اليمن",
  description:
    "تابع أخبار الأسواق اليمنية وتغيرات أسعار المواد الغذائية والسلع الأساسية، واكتشف تحليلات حركة الأسعار ومستجدات السوق التي تساعدك على فهم اتجاهات الأسعار في اليمن.",
});





export default function Page() {
  return <ClientPage />;
}
