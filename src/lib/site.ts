export const SITE_NAME = "Markets Yemen";

export const DEFAULT_SITE_URL = "https://markets-ye.vercel.app";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
).replace(/\/+$/, "");

export const DEFAULT_IMAGE =
  "/favicons/web-app-manifest-512x512.png";

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}${normalizedPath}`;
}