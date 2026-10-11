import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/prices",
  description: "ابحث في أسعار المنتجات والسلع في اليمن حسب المدينة والفئة.",
  title: "أسعار المنتجات والسلع في اليمن",
});

export default function Page() {
  return <ClientPage />;
}
