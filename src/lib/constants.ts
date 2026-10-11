export const SITE_NAME = "Markets Yemen";

export const DEFAULT_SITE_URL = "https://markets-ye.vercel.app";
export const MAIN_URL = `http://${process.env.NEXT_PUBLIC_MAIN_URL || "localhost:3000"}`;
export const ABOUT_URL = `http://${process.env.NEXT_PUBLIC_ABOUT_URL || "about.localhost:3000"}`;
export const PRICES_URL = `http://${process.env.NEXT_PUBLIC_PRICES_URL || "prices.localhost:3000"}`;
export const BLOG_URL = `http://${process.env.NEXT_PUBLIC_BLOG_URL || "blog.localhost:3000"}`;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
).replace(/\/+$/, "");

export const DEFAULT_IMAGE = "/favicons/web-app-manifest-512x512.png";

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}${normalizedPath}`;
}
