import { Metadata } from "next";
import { createSeo } from "@/lib/seo";
import GoldPricesClient from "./GoldPricesClient";

type Props = {
  // دعم Next.js 14 و Next.js 15+ معاً
  searchParams: Promise<{ city?: string }> | { city?: string };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(searchParams);
  const isAden = resolvedParams?.city === "aden";
  const cityName = isAden ? "عدن" : "صنعاء";

  return createSeo({
    canonicalPath: "/gold-prices",
    title: `أسعار الذهب في ${cityName} اليوم | تحديث مباشر`,
    description: `تطبيق أسعار الذهب اليوم في محلات الصاغة في ${cityName} (بيع وشراء) بالعملة ${
      isAden ? "الجديدة" : "القديمة"
    }، تشمل عيار 24، 21، 18، الجنيه الذهب والسبائك مع حاسبة المصنعية.`,
    type: "website",
  });
}

export default async function GoldPricesPage({ searchParams }: Props) {
  const resolvedParams = await Promise.resolve(searchParams);
  const initialCity = resolvedParams?.city === "aden" ? "aden" : "sanaa";

  return <GoldPricesClient initialCity={initialCity} />;
}
