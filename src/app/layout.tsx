import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Script from "next/script";
import { Toaster } from "@/components/ui/toast";
import { DirectionProvider } from "@/components/ui/direction";
import { ThemeProvider } from "@/components/provider/theme-provider";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msvalidate.01" content="448736B4E174A7AD617638A63866F2BE" />
        <meta
          name="google-site-verification"
          content="_54F1eq7-pB1O2ij3E7YReMtAiHyv-aO5wo0ZcCBCHc"
        />
        <meta
          name="google-site-verification"
          content="g2mr_fpoECA_KR21y4aZhdiSKGulMJrb44Ga5oQTw0M"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FNW104VHST"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-FNW104VHST');
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-59NDMV64');
          `}
        </Script>
      </head>
      <body className={cn("min-h-full flex flex-col   ")}>
        <div id="t" className="transition-all duration-500" />
        <ThemeProvider>
          <div className="bg-[linear-gradient(135deg,transparent_49%,var(--border)_5%,var(--border)_5%,transparent_51%)] bg-size-[10px_10px]">
            <DirectionProvider direction={"rtl"}>{children}</DirectionProvider>
          </div>
        </ThemeProvider>
        <div id="e" className="transition-all duration-500" />
        <div className=" transition-all duration-500">
          <Toaster />
        </div>
        <Analytics/>
    <noscript><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-59NDMV64"
        height="0"
        width="0"
        className=" none"
      ></iframe>
      </noscript>
      </body>
    </html>
  );
}
