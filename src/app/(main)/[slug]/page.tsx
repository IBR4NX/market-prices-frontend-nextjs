import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { api } from "@/lib/api";
import { createSeo } from "@/lib/seo";
import ProductDetails from "@/components/products/product-details";
import { Product } from "@/components/products/types";
import { getProductImageBySlug } from "@/lib/constants";
import { formatNumber, formatPrice } from "@/components/prices/format";
import { ProductDetailsSkeleton } from "./loading";
import { getQueryString } from "@/lib/query";

// تم حذف export const instant لأنها غير معتمدة في Next.js وتسبب مشاكل بناء

export function decodeSlug(value: string): string {
  try {
    return getQueryString(decodeURIComponent(value)) ?? "";
  } catch {
    return value;
  }
}

export const getProduct = cache(async (slug: string): Promise<Product | null> => {
  try {
    const response = await api.get("/products-search", {
      params: { slug },
    });

    const data = response.data;
    const result = data?.product ?? data?.data ?? data;

    const product = Array.isArray(result) ? result[0] : Array.isArray(result?.rows) ? result.rows[0] : result;

    if (!product?.id) return null;

    return product as Product;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
});

export type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeSlug(slug);
  const product = await getProduct(decodedSlug);

  if (!product) {
    return createSeo({
      canonicalPath: `/${slug}`,
      title: "المنتج غير موجود | أسعار اليمن",
      description: "لم يتم العثور على المنتج المطلوب في منصة أسعار اليمن.",
      type: "article",
      noindex: true,
    });
  }

  const productName = product.name.trim();
  const productQuantity =
    product.quantity != null && product.unit ? `${formatNumber(product.quantity)} ${product.unit}` : "";

  const prices = (product.current_prices ?? [])
    .filter((item) => item.city?.name && item.price != null)
    .sort((a, b) => a.city!.name.localeCompare(b.city!.name, "ar"));

  const priceDetails = prices.map((item) => {
    const cityName = item.city!.name;
    return `${cityName}: ${formatPrice(item.price)}`;
  });

  const description = [
    `أحدث الأسعار`,
    productName,
    productQuantity,
    product.description,
    priceDetails.length ? `اختلاف الأسعار: ${priceDetails.join("، ")}.` : "لا تتوفر حاليًا أسعار مسجلة لهذا المنتج.",
  ]
    .filter(Boolean)
    .join(" ");

  // إصلاح خطأ العنوان المنتهي بكلمة "في" بدون تكملة، واستخدام slug في الـ canonicalPath
  const title = productQuantity ? ` ${productName} ${productQuantity}` : `سعر ${productName} اليوم في اليمن`;

  return createSeo({
    canonicalPath: `/${product.slug || product.name}`,
    image: getProductImageBySlug(product.slug),
    ignoreImgAbsoluteUrl: true,
    title,
    description,
    type: "website",
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeSlug(slug);
  const product = await getProduct(decodedSlug);

  if (!product) return <ProductDetailsSkeleton />;

  const productImageUrl = getProductImageBySlug(product.slug);

  const validPrices = (product.current_prices ?? []).filter((item) => item.price != null && item.city?.name);

  const numericPrices = validPrices.map((item) => Number(item.price)).filter((p) => !isNaN(p));

  const lowPrice = numericPrices.length ? Math.min(...numericPrices) : undefined;
  const highPrice = numericPrices.length ? Math.max(...numericPrices) : undefined;

  const cityOffers = validPrices.map((item) => ({
    "@type": "Offer",
    price: Number(item.price),
    priceCurrency: "YER",
    availability: "https://schema.org/InStock",
    areaServed: {
      "@type": "City",
      name: item.city!.name,
    },
    priceValidUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: productImageUrl ? [productImageUrl] : undefined,
    description: product.description || `أحدث أسعار ${product.name} في أسواق اليمن.`,
    sku: product.slug?.toString(),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "YER",
      lowPrice: lowPrice,
      highPrice: highPrice,
      offerCount: validPrices.length,
      priceValidUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      availability: validPrices.length > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      // تضمين العروض الخاصة بكل مدينة كقائمة فرعية داخل AggregateOffer
      offers: cityOffers.length > 0 ? cityOffers : undefined,
    },
  };

  return (
    <>
      {/* حقن بيانات JSON-LD لتحسين محركات البحث */}
      <script id="product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetails product={product} />
    </>
  );
}
