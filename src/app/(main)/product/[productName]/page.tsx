import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/product",
  description: "استعرض أسعار المنتج حسب المدينة.",
  title: "سعر المنتج",
});

export default function Page() {
  return <ClientPage />;
}
