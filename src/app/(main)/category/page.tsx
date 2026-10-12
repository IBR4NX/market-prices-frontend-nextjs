import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/category",
  description: "استعرض تصنيفات المنتجات في Markets Yemen.",
  title: "التصنيفات",
});

export default function Page() {
  return <ClientPage />;
}
