import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { api } from "@/lib/api";
import { createSeo } from "@/lib/seo";
import ProductDetails from "./clint";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  quantity: number | string;
  unit: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;

  category: {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    is_active?: boolean;
  };

  current_prices: {
    id: string;
    slug?: string;
    product_id?: string;
    city_id?: string;
    price: number | string;
    updated_at: string;
    updated_by?: string | null;
    city: {
      id?: string;
      name: string;
      slug: string;
    };
  }[];

  price_history: {
    id: string;
    product_id?: string;
    city_id?: string;
    price: number | string;
    source_submission_id?: string | null;
    approved_by?: string;
    created_at: string;
    city: {
      id?: string;
      name: string;
      slug: string;
    };
    approved_by_user?: {
      id?: string;
      name: string;
    } | null;
  }[];
}

const gtProduct = cache(async (slug: string): Promise<Product | null> => {
  try {
    const response = await api.get("/products-search", {
      params: { slug },
    });

    const data = response.data;
    const result = data?.product ?? data?.data ?? data;

    const product = Array.isArray(result)
      ? result[0]
      : Array.isArray(result?.rows)
        ? result.rows[0]
        : result;

    if (!product?.id) return null;

    return product as Product;
  } catch {
    return null;
  }
});
const getProduct = cache(async (slug: string): Promise<Product | null> => {
  try {
    console.log("Requested product slug:", slug);

    const response = await api.get("/products-search", {
      params: { slug },
    });

    console.log("API response:", response.data);

    const data = response.data;
    const result = data?.product ?? data?.data ?? data;

    const product = Array.isArray(result)
      ? result[0]
      : Array.isArray(result?.rows)
        ? result.rows[0]
        : result;

    console.log("Extracted product:", product);

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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return createSeo({
      canonicalPath: `/${slug}`,
      title: "المنتج غير موجود | أسعار اليمن",
      description: "لم يتم العثور على المنتج المطلوب في منصة أسعار اليمن.",
      type: "website",
      noindex: true,
    });
  }

  const cities = [
    ...new Set(
      product.current_prices
        ?.map((item) => item.city?.name)
        .filter(Boolean) ?? [],
    ),
  ];

  const description =
    product.description?.trim() ||
    `تعرف على أسعار ${product.name} في اليمن حسب المدينة. تابع الأسعار الحالية وتغيراتها في ${cities.length ? cities.join("، ") : "المدن اليمنية"}، وقارن الأسعار لمعرفة أحدث المعلومات المتاحة.`;

  return createSeo({
    canonicalPath: `/${product.slug}`,
    title: `سعر ${product.name} في اليمن اليوم | أسعار اليمن`,
    description: description.slice(0, 300),
    type: "website",
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  return <ProductDetails product={product} />;
}