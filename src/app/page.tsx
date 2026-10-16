import {  Animationpage } from "@/components/feedback/PageAnimation";
import ClientPage from "./client";
import { createSeo } from "@/lib/seo";
import { JsonLd, JsonLdWebsite } from "@/lib/seo";
import { motion } from "motion/react";
export const metadata = createSeo({
  canonicalPath: "/",
  title: "أسعار المواد الغذائية في اليمن اليوم",
  description:
    "تابع أسعار المنتجات والمشتقات النفطية في اليمن حسب المدينة. استكشف الأسعار المسجلة، وقارن بين المدن اليمنية، وتعرّف على تفاصيل المنتجات وتواريخ تحديث الأسعار.",
});

export default function Page() {
  return (
    <>
      <Animationpage>
      <JsonLd data={JsonLdWebsite} />
      <ClientPage />
      </Animationpage>
    </>
  );
}
