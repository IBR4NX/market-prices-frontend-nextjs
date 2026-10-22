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
  const isSanaa = resolvedParams?.city === "sanaa";
  const cityName = isAden ? "عدن" : isSanaa ? "صنعاء" : "(صنعاء - عدن)";
  const p = `?city=${isAden ? "aden" : isSanaa ? "sanaa" : ""}`;

  return createSeo({
    canonicalPath: `/gold${p.endsWith("=") ? "" : p}`,
    title: `أسعار الذهب في ${cityName} اليوم | تحديث مباشر`,
    description: ` أسعار الذهب اليوم في ${cityName} (بيع وشراء) بالعملة ${
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
