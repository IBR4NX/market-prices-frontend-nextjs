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
import { ChevronDown, Dot } from "lucide-react";
import MainLink from "@/components/shared/mainLink";
import { notFound } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SITE_NAME } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <SidebarProvider dir="rtl" className="    mt-13  ">
        <Header></Header>
        <Sidebar
          dir="rtl"
          side="right"
          className=" z-20"
          collapsible="offcanvas"
        >
          <SidebarHeader>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem className="flex items-center justif">
                  <SideTrigger />
                  <span className=" pr-8 text-primary text-xl font-bold tracking-tight">
                    {SITE_NAME}
                  </span>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            {/* <NavUser user={store} /> */}
            <Separator/>
          </SidebarHeader>
          {/* <Separator orientation="horizontal" /> */}
          <SidebarContent dir="rtl" className=" text-2xl">
            <SidebarGroup dir="rtl" className="">
              {/* <SidebarGroupLabel>الكل</SidebarGroupLabel> */}
              <SidebarGroupContent></SidebarGroupContent>

              <SidebarMenu>
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      className=" text-lg px-4 "
                      render={<MainLink href={item.href} />}
                      size={"lg"}
                    >
                      {item.name}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup dir="rtl" className="">
              <SidebarGroupLabel>المدن</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {cities.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                      size={'lg'}
                        className=" text-lg px-4  "
                        render={<MainLink href={`/city/${item.href}`} />}
                      >
                        {item.name}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

          </SidebarContent>
          <SidebarFooter>{/* <SidebarOptInForm/> */}   </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <div className="  items-center justify-center    w-full h-full ">
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
];
const cities = [
  { name: "صنعاء", href: "صنعاء" },
  { name: "عدن", href: "عدن" },
  { name: "تعز", href: "تعز" },
  { name: "إب", href: "إب" },
  { name: "الحديدة", href: "الحديدة" },
  { name: "حضرموت", href: "حضرموت" },
];
