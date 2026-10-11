import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/city",
  description: "استعرض سعر المنتج في المدينة المختارة.",
  title: "سعر المنتج في المدينة",
});

export default function Page() {
  return <ClientPage />;
}
