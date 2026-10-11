import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/city",
  description: "استعرض أسعار المنتجات في المدينة المختارة.",
  title: "أسعار المنتجات حسب المدينة",
});

export default function Page() {
  return <ClientPage />;
}
