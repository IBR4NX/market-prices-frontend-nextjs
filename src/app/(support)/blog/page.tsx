import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/blog",
  title: "مدونة Markets Yemen | أخبار الأسعار والأسواق في اليمن",
  description:
    "تابع أحدث أخبار الأسواق في اليمن، وتعرّف على تغيرات أسعار المواد الغذائية والسلع الأساسية، وتحليلات حركة الأسعار ونصائح تساعدك على متابعة السوق اليمني.",
});



export default function Page() {
  return <ClientPage />;
}
