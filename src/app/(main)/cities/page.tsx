import ClientPage from "../city/[cityName]/client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/cities",
  description: "استعرض أسعار المنتجات حسب المدينة.",
  title: "أسعار المدن",
});

export default function Page() {
  return <ClientPage />;
}
