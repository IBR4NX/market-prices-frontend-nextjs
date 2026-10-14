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
    title: fullTitle,
    description,

    alternates: {
      canonical,
    },

    robots: {
      index: !noindex,
      follow: !noindex,
    },

    // Icons
    icons: {
      icon: [
                {
          url: `${iconPath}/favicon.svg`,
          sizes: "any",
        },
        {
          url: `${iconPath}/favicon.svg`,
          type: "image/svg+xml",
        },
        {
          url: `${iconPath}/favicon-16x16.png`,
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: `${iconPath}/favicon-32x32.png`,
          sizes: "32x32",
          type: "image/png",
        },

      ],
      apple: [
        {
          url: `${iconPath}/apple-touch-icon.png`,
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },

    // Web App Manifest
    manifest: `${iconPath}/manifest.webmanifest`,

    // Apple Web App
    appleWebApp: {
      title: SITE_NAME,
      capable: true,
      statusBarStyle: "default",
    },

    // Open Graph
    openGraph: {
      type,
      locale: "ar_YE",
      siteName: SITE_NAME,
      title: fullTitle,
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
  };
}

function createTitle(title: string): string {
  const cleanTitle = title.trim();

  if (!cleanTitle) {
    return SITE_NAME;
  }

  const escapedSiteName = SITE_NAME.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const normalizedTitle = cleanTitle.replace(/\s*[|–—-]\s*/g, " - ").trim();

  const titleWithoutSiteName = normalizedTitle
    .replace(new RegExp(`\\s*-\\s*${escapedSiteName}$`, "i"), "")
    .trim();

  if (!titleWithoutSiteName) {
    return SITE_NAME;
  }

  return `${SITE_NAME}- ${titleWithoutSiteName}`;
}
