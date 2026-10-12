import type { Metadata } from "next";
import { createSeo } from "@/lib/seo";

interface GeneratePageMetadataOptions {
  path?:string;
  title: (path: string) => string;
  description: (path: string) => string;
  type?: "website" | "article";
  noindex?: boolean;
}

export function generatePageMetadata({
  path,
  title,
  description,
  type = "website",
  noindex = false,
}: GeneratePageMetadataOptions): Metadata {
  const canonicalPath = path??("").trim();

  if (!canonicalPath) {
    return createSeo({
      canonicalPath: "/",
      title: "الصفحة غير موجودة | أسعار اليمن",
      description:
        "لم يتم العثور على البيانات المطلوبة في منصة أسعار اليمن.",
      type,
      noindex: true,
    });
  }

  return createSeo({
    canonicalPath,
    title: title(canonicalPath),
    description: description(canonicalPath),
    type,
    noindex,
  });
}

