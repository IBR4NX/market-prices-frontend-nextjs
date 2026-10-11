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
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupAction,
  SidebarMenuAction,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import SideTrigger from "@/components/layout/toggles/side-trigger";
import { Dot } from "lucide-react";
import MainLink from "@/components/shared/mainLink";
export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SidebarProvider dir="rtl" className="h-screen    mt-13  ">
        <Header></Header>
        <Sidebar
          dir="rtl"
          side="right"
          className=" z-20 "
          collapsible="offcanvas"
        >
          <SidebarHeader>
						    <SidebarGroup >


			<SidebarMenu>
				<SidebarMenuItem className="flex items-center justif">

            <SideTrigger />
            <span className="text-lg font-semibold tracking-tight">أسعار</span>
				</SidebarMenuItem>
			</SidebarMenu>
							</SidebarGroup>
            {/* <NavUser user={store} /> */}
          </SidebarHeader>
          {/* <Separator orientation="horizontal" /> */}
          <SidebarContent dir="rtl" >

            <SidebarGroup dir="rtl" className="">
              <SidebarGroupLabel>الكل</SidebarGroupLabel>
              <SidebarGroupContent></SidebarGroupContent>
            </SidebarGroup>

            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <MainLink href={item.href}>
                    <SidebarMenuButton>{item.name}</SidebarMenuButton>
                  </MainLink>
                  <SidebarMenuAction className="mr-2">
                    <Dot /> <span className="sr-only">ت</span>
                  </SidebarMenuAction>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

          </SidebarContent>
          <SidebarFooter>{/* <SidebarOptInForm/> */}</SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <div className="  bg-muted/50 items-center justify-center none   w-full h-full ">
          {children}
          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
}

const navigation: { name: string; href: `/${string}` }[] = [
  { name: "الرئيسية", href: "/" },
  { name: "الأسعار", href: "/prices" },
  { name: "اتصل بنا", href: "/contact" },
  { name: "من نحن", href: "/about" },
  { name: "إدارة المنصة", href: "/dashboard" },
  { name: "المساعدة", href: "/help" },
];
