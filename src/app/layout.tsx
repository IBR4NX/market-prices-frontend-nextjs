import "./globals.css";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toast";
import { DirectionProvider } from "@/components/ui/direction";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const readexPro = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_DESCRIPTION = "تابع أسعار المنتجات والسلع في اليمن حسب المدينة، مع تحديثات الأسعار وسجل تغيراتها.";

export const metadata: Metadata = {
  // 1. أساس الروابط لضمان تحويل المسارات النسبية (/favicons/...) إلى روابط كاملة يفهمها جوجل
  metadataBase: new URL(SITE_URL),

  // 2. إشارات اسم الموقع المباشرة لمحركات البحث
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} | أسعار المنتجات والسلع في اليمن اليوم`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,

  // 3. الرابط الأساسي لمنع تكرار المحتوى
  alternates: {
    canonical: "/",
  },

  // 4. Open Graph (مهم جداً لجوجل لمعرفة siteName)
  openGraph: {
    siteName: SITE_NAME,
    title: `${SITE_NAME} | أسعار الذهب والمواد الغذائية اليوم`,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "ar_YE",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  appleWebApp: {
    title: SITE_NAME,
    capable: true,
    statusBarStyle: "default",
  },
};

import { JsonLd, JsonLdWebsite } from "@/lib/seo";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", "font-sans", readexPro.variable)}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msvalidate.01" content="448736B4E174A7AD617638A63866F2BE" />
        <meta name="apple-mobile-web-app-title" content="أسعار اليمن" />
        {/* google-site-verification */}
        <meta name="google-site-verification" content="_54F1eq7-pB1O2ij3E7YReMtAiHyv-aO5wo0ZcCBCHc" />
        <meta name="google-site-verification" content="g2mr_fpoECA_KR21y4aZhdiSKGulMJrb44Ga5oQTw0M" />
        {/* <!-- Google Tag Manager --> */}
        <script src="https://www.googletagmanager.com/gtag/js?id=G-FNW104VHST" />
        {/* old */}
        <GoogleTagManager gtmId="GTM-59NDMV64" />
        {/* new أسعار اليمن */}
        <GoogleTagManager gtmId="GTM-5KK9MXXP" />
        {/* <!-- End Google Tag Manager --> */}
        {/* <link type="sitemap" content="" href="https://ibovs.vercel.app/sitemap/custom/test/feed?sender=ibovs.vercel.app" /> */}

        <JsonLd data={JsonLdWebsite} />
      </head>
      <body className={cn("min-h-full flex flex-col   ")}>
        <div id="t" className="transition-all duration-500" />
        <ThemeProvider>
          <div className="">
            <DirectionProvider direction={"rtl"}>{children}</DirectionProvider>
          </div>
        </ThemeProvider>
        <div id="e" className="transition-all duration-500" />
        <div className=" transition-all duration-500">
          <Toaster />
        </div>
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59NDMV64"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
