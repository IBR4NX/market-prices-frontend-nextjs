import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/blog",
  description: "أحدث المقالات والأخبار من Markets Yemen.",
  title: "المدونة",
});

export default function Page() {
  return <ClientPage />;
}
