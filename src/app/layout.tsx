import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toast";
import { DirectionProvider } from "@/components/ui/direction";
import { ThemeProvider } from "@/components/provider/theme-provider";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
    
      </head>
      <body className={cn("min-h-full flex flex-col  ")}>
        <div id="t" className="transition-all duration-500" />
        <ThemeProvider>
          <DirectionProvider direction={"rtl"}>{children}</DirectionProvider>
        </ThemeProvider>
        <div id="e" className="transition-all duration-500" />
        <div className=" transition-all duration-500">
          <Toaster />
        </div>
      </body>
    </html>
  );
}
