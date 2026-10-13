"use client";
import { useState, useEffect, ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import SideTrigger from "@/components/layout/toggles/side-trigger";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MainLink from "@/components/shared/mainLink";
import { SITE_NAME } from "@/lib/constants";
export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SidebarProvider className="h-scree   mt-13 overflow-hidden ">
        <div className="fixed top-0 backdrop-blur-[6px] flex justify-between items-center p-2  left-0 right-0 z-50">
          <Button
            onClick={() => window.history.back()}
            type="button"
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-transparent"
          >
            <ArrowRight className=" size-6" />
          </Button>
          <MainLink href="/" className="text-lg font-semibold tracking-tight">
            {SITE_NAME}
          </MainLink>
        </div>
        <div className="  items-center justify-center none   w-full h-full overflow-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400/20 scrollbar-track-gray-400/10">
          {children}
        </div>
      </SidebarProvider>
      <Footer />
    </>
  );
}

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "الأسعار", href: "/prices" },
  { name: "اتصل بنا", href: "/contact" },
  { name: "من نحن", href: "/about" },
  { name: "إدارة المنصة", href: "/dashboard" },
  { name: "المساعدة", href: "/help" },
];
