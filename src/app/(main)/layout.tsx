'use client';
import { useState, useEffect, ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
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
  SidebarGroupLabel
} from "@/components/ui/sidebar"
import  Link  from 'next/link';
import Footer from '@/components/layout/Footer';
import SideTrigger from '@/components/layout/toggles/side-trigger';
export default function Layout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	
	return (
		<>
		<SidebarProvider className="h-screen    mt-13  ">
			
			<Header>

			</Header>
				<Sidebar dir="rtl" side="right" className=' z-20 '  collapsible="offcanvas" >
				  <SidebarHeader>
					<SideTrigger />
					<span className="text-lg font-semibold tracking-tight">IBOVS</span>
					{/* <NavUser user={store} /> */}
				  </SidebarHeader>
					{/* <Separator orientation="horizontal" /> */}
				  <SidebarContent>
					<SidebarMenu>
					{navigation.map((item) => (
						 <SidebarMenuItem key={item.name}>
								<Link href={item.href}>
							<SidebarMenuButton >
									{item.name}
							</SidebarMenuButton>
								</Link>
						</SidebarMenuItem>
					))
					}
					</SidebarMenu>
				  </SidebarContent>
				  <SidebarFooter>
					{/* <SidebarOptInForm/> */}
				  </SidebarFooter>
				  <SidebarRail />
				</Sidebar>
			<div
			className="  bg-muted/50 items-center justify-center none   w-full h-full ">
			{children}
		<Footer />
			</div>
		</SidebarProvider>
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