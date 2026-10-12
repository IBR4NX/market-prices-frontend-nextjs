import ClientPage from "./client";
import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/help",
title: "مركز المساعدة",
  description:
    "اعثر على إجابات للأسئلة الشائعة حول استخدام المنصة، والبحث عن أسعار المنتجات والسلع، ومتابعة الأسعار حسب المدينة والتصنيف، والإبلاغ عن الأسعار أو الاستفسار عن الخدمات المتاحة.",
});



export default function Page() {
  return <ClientPage />;
}
