import {  Animationpage } from "@/components/feedback/PageAnimation";
import ClientPage from "./client";
import { createSeo, GetSEO } from "@/lib/seo";
import { motion } from "motion/react";
import { ArticleJsonLd } from "next-seo";
import { headers } from "next/headers";
export const {metadata} = GetSEO({
  canonicalPath: "/",
  title: "أسعار المواد الغذائية في اليمن اليوم",
  description:
    "تابع أسعار المنتجات والمشتقات النفطية في اليمن حسب المدينة. استكشف الأسعار المسجلة، وقارن بين المدن اليمنية، وتعرّف على تفاصيل المنتجات وتواريخ تحديث الأسعار.",
});

export default async function Page() {
    const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
          <ArticleJsonLd
        headline="Getting Started with Next SEO"
        datePublished="2024-01-01T08:00:00+00:00"
        author="John Doe"
        image="https://example.com/article-image.jpg"
        description="Learn how to improve your Next.js SEO"
              nonce={nonce}

      />

      <Animationpage>
      <ClientPage />
      </Animationpage>
    </>
  );
}
