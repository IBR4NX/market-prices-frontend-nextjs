import ClientPage from "./client";
import { createSeo } from "@/lib/seo";
import type { Metadata } from "next";

export const instant = false;

type Props = {
  params: Promise<{ cityName: string; productName: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cityName, productName } = await params;
  const city = decodeURIComponent(cityName);
  const product = decodeURIComponent(productName);

  return createSeo({
    canonicalPath: `/city/${city}/product/${product}`,
    title: `سعر ${product} اليوم في ${city} | أسعار اليمن`,
    description: `كم سعر ${product} في ${city} اليوم؟ اكتشف أسعار ${product} في ${city} بالريال اليمني، وتعرّف على أحدث الأسعار المسجلة وتغيرات الأسعار لمساعدتك على متابعة السوق ومقارنة الأسعار في ${city}.`,
    type: "website",
  });
}

export default function Page() {
  return <ClientPage />;
}
