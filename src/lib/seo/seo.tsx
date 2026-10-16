import type { Metadata } from "next";
import { MAIN_URL, SITE_NAME, absoluteUrl } from "@/lib/constants";
export { absoluteUrl };

const iconPath = "/favicons";
export interface SeoProps {
  canonicalPath?: string;
  ignorePath?:boolean;
  ignoreImgAbsoluteUrl?:boolean;
  description: string;
  image?: string;
  noindex?: boolean;
  title: string;
  type?: "website" | "article";
}
interface p{
  metadata:Metadata
}
export function GetSEO({...props}: SeoProps): p {
  return{metadata:createSeo({...props})}
}

export function createSeo({
  canonicalPath = "/",
  ignorePath=false,
  description,
  image = "/favicons/og-image.png",
  ignoreImgAbsoluteUrl=false,
  noindex = false,
  title,
  type = "website",
  
}: SeoProps): Metadata {
  const fullTitle = createTitle(title);
  const canonical = ignorePath?canonicalPath: absoluteUrl(canonicalPath);

  const imageUrl =ignoreImgAbsoluteUrl?image: absoluteUrl(image);
  console.log(canonical)
  return {
    // SEO
    metadataBase: new URL(MAIN_URL),
    title,
    description,
    alternates: {
      canonical,
      languages:{ar:MAIN_URL},
    },

    robots: {
      index: !noindex,
      follow: !noindex,
    },

    // Open Graph
    openGraph: {
      type,
      locale: "ar",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    applicationName: SITE_NAME,
    other: {
      "theme-color": "#0F172A",
    },
  }
}

function createTitle(title: string): string {
  const cleanTitle = title.trim();

  if (!cleanTitle) {
    return SITE_NAME;
  }

  const escapedSiteName = SITE_NAME.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const normalizedTitle = cleanTitle.replace(/\s*[|–—-]\s*/g, " | ").trim();

  const titleWithoutSiteName = normalizedTitle
    .replace(new RegExp(`\\s*-\\s*${escapedSiteName}$`, "i"), "")
    .trim();

  if (!titleWithoutSiteName) {
    return SITE_NAME;
  }

  return `${titleWithoutSiteName} | ${SITE_NAME}`;
}
