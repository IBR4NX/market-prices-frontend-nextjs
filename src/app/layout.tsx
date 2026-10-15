import "./globals.css";
import type { Metadata, Viewport } from "next";
import {Readex_Pro } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toast";
import { DirectionProvider } from "@/components/ui/direction";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const readexPro = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-sans", // اسم المتغير الذي سنربطه في ملف CSS
  display: "swap", // يضمن ظهور النص فوراً وعدم بقاء الشاشة بيضاء
});


export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

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
      className={cn("h-full", "antialiased", "font-sans",readexPro.variable)}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msvalidate.01" content="448736B4E174A7AD617638A63866F2BE" />

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
        <Analytics />
        <SpeedInsights/>
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
