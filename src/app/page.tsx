import {  Animationpage } from "@/components/feedback/PageAnimation";
import ClientPage from "./client";
import { createSeo, GetSEO } from "@/lib/seo";
import { motion } from "motion/react";
import { headers } from "next/headers";
import { SITE_NAME } from "@/lib/constants";
export const {metadata} = GetSEO({
  canonicalPath: "/",
  title:SITE_NAME,
  description:
    "تابع أسعار المنتجات والمشتقات النفطية في اليمن حسب المدينة. استكشف الأسعار المسجلة، وقارن بين المدن اليمنية، وتعرّف على تفاصيل المنتجات وتواريخ تحديث الأسعار.",
});

export default async function Page() {
    const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <Animationpage>
      <ClientPage />
      </Animationpage>
    </>
  );
}
