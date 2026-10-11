import type { Metadata } from "next";
import {
  SITE_NAME,
  absoluteUrl,
  DEFAULT_IMAGE,
} from "@/lib/site";
export {absoluteUrl};
interface SeoProps {
  canonicalPath?: string;
  description: string;
  image?: string;
  noindex?: boolean;
  title: string;
  type?: "website" | "article";
}

export function createSeo({
  canonicalPath = "/",
  description,
  image = DEFAULT_IMAGE,
  noindex = false,
  title,
  type = "website",
}: SeoProps): Metadata {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  const canonical = absoluteUrl(canonicalPath);
  const imageUrl = absoluteUrl(image);

  return {
    // SEO
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
          url: "/favicons/favicon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          url: "/favicons/favicon.svg",
          type: "image/svg+xml",
        },
        {
          url: "/favicons/favicon.ico",
          rel: "shortcut icon",
        },
      ],
      apple: [
        {
          url: "/favicons/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
    },

    // Apple Web App
    appleWebApp: {
      title: "Ibovs",
    },

    // Web App Manifest
    manifest: "/favicons/site.webmanifest",

    // Open Graph
    openGraph: {
      type,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonical,
      images: [
        {
          url: imageUrl,
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
  };
}

