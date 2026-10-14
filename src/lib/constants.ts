export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "أسعار اليمن";
export const DEFAULT_SITE_URL = "https://markets-ye.vercel.app";
export const MAIN_URL = `http://${process.env.NEXT_PUBLIC_MAIN_URL || "localhost:3000"}`;
export const ABOUT_URL = `http://${process.env.NEXT_PUBLIC_ABOUT_URL || "about.localhost:3000"}`;
export const PRICES_URL = `http://${process.env.NEXT_PUBLIC_PRICES_URL || "prices.localhost:3000"}`;
export const BLOG_URL = `http://${process.env.NEXT_PUBLIC_BLOG_URL || "blog.localhost:3000"}`;

const BLOB_PRODUCT_URL = `https://${process.env.NEXT_PUBLIC_BLOB_PRODUCT_URL || "q3stwcmidyeiq6rt.public.blob.vercel-storage.com"}`;
const BLOB_PRODUCT_FOLDER = `${process.env.NEXT_PUBLIC_BLOB_PRODUCT_FOLDER || "product-images"}`;
const BLOB_PRODUCT_TYPE = `${process.env.NEXT_PUBLIC_BLOB_PRODUCT_TYPE || "webp"}`;

export function getProductImageBySlug(slug: string) {
  return `${BLOB_PRODUCT_URL}/${BLOB_PRODUCT_FOLDER}/${slug}.${BLOB_PRODUCT_TYPE}`;
}

export const SITE_URL = (MAIN_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
