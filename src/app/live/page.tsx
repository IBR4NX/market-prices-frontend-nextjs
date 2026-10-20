import type { Metadata } from "next";
import YouTubeLivePlayer from "./YouTubeLivePlayer";

export const metadata: Metadata = {
  title: "البث المباشر لأسعار المنتجات اليمنية | أسعار اليمن",
  description:
    "تابع البث المباشر لأسعار المنتجات والسلع في اليمن عبر موقع أسعار اليمن.",
};

const videoStructuredData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "البث المباشر لأسعار المنتجات اليمنية",
  description:
    "بث مباشر لمتابعة أسعار المنتجات والسلع في اليمن عبر موقع أسعار اليمن.",
  thumbnailUrl: [
    "https://i.ytimg.com/vi/AJVRnupOwmg/maxresdefault.jpg",
    "https://i.ytimg.com/vi/AJVRnupOwmg/hqdefault.jpg",
  ],
  uploadDate: "2026-10-17T20:00:00+03:00",
  embedUrl: "https://www.youtube.com/embed/AJVRnupOwmg",
  publication: {
    "@type": "BroadcastEvent",
    isLiveBroadcast: true,
    startDate: "2026-10-17T20:00:00+03:00",
    endDate: "2026-10-18T00:00:00+03:00",
  },
};

export default function LivePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">
        البث المباشر لأسعار المنتجات اليمنية
      </h1>

      <p>
        تابع البث المباشر لمتابعة أسعار المنتجات والسلع في اليمن.
      </p>

      <YouTubeLivePlayer videoId="AJVRnupOwmg" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
    </main>
  );
}

