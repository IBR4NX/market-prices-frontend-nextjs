import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/help",
  description: "مركز المساعدة في Markets Yemen.",
  title: "المساعدة",
});

export default function Page() {
  return <ClientPage />;
}
