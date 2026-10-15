import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { api } from "@/lib/api";
import { createSeo } from "@/lib/seo";
import ProductDetails from "@/components/products/product-details";
import {Product} from "@/components/products/product-details";
import { getProductImageBySlug } from "@/lib/constants";
export const instant = false;
export function decodeSlug(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}


const getProduct = cache(async (slug: string): Promise<Product | null> => {
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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(decodeSlug(slug));

  if (!product) {
    return createSeo({
      canonicalPath: `/${slug}`,
      title: "المنتج غير موجود | أسعار اليمن",
      description: "لم يتم العثور على المنتج المطلوب في منصة أسعار اليمن.",
      type: "website",
      noindex: true,
    });
  }
  const productName = product.name.trim();
  const productQuantity = product.quantity != null && product.unit ? `${Number(product.quantity)} ${product.unit}` : "";

  const prices = (product.current_prices ?? [])
    .filter((item) => item.city?.name && item.price != null)
    .sort((a, b) => a.city!.name.localeCompare(b.city!.name, "ar"));

  const priceDetails = prices.map((item) => {
    const cityName = item.city!.name;
    const price = Number(item.price).toLocaleString("en-US");

    return `${cityName}: ${price} ريال`;
  });

  const description = [
    `احدث الأسعار`,
    productName,
    productQuantity,
    product.description,
    priceDetails.length ? `إختلاف الأسعار: ${priceDetails.join("، ")}.` : "لا تتوفر حاليًا أسعار مسجلة لهذا المنتج.",
  ]
    .filter(Boolean)
    .join(" ");

  const title = productQuantity ? `سعر ${productName} ${productQuantity} اليوم ` : `سعر ${productName} اليوم في`;

  return createSeo({
    canonicalPath: `/${product.name}`,
    image: getProductImageBySlug(product.slug),
    ignoreImgAbsoluteUrl: true,
    title,
    description,
    type: "website",
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(decodeSlug(slug));
  if (!product) notFound();

  return <ProductDetails product={product} />;
}
