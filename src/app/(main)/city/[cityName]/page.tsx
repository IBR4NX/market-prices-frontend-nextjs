import ClientPage from "./client";
import { createSeo } from "@/lib/seo";
import type { Metadata } from "next";

export const instant = false;

type Props = {
  params: Promise<{ cityName: string,productName: string }>;
};
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { cityName,productName } = await params;
  const city = decodeURIComponent(cityName);

  return createSeo({
    canonicalPath: `/city/${city}`,
    title: `أسعار المنتجات والسلع في ${city} اليوم | أسعار اليمن`,
    description:
      `تعرف على أسعار المنتجات والسلع في ${city}، اليمن. اكتشف أسعار المواد الغذائية ومواد البناء والوقود والإلكترونيات، وقارن الأسعار المسجلة وتابع تغيراتها لمعرفة أحدث أسعار السلع في ${city}.`,
    type: "website",
  });
}



export default function Page() {
  return <ClientPage />;
}
