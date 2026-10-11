import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/",
  description: "Markets Yemen: منصة متابعة أسعار المنتجات والسلع في اليمن.",
  title: "الصفحة الرئيسية",
});
 
export default function Page() {
  return <ClientPage />;
}
