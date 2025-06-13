"use client";
import * as React from "react";
import {
  Ban,
  CreditCard,
  LayoutDashboard,
  LineChart,
  ScrollText,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMenus } from "./nav-menus";
import { NavUser } from "./sign-out-btn";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "User Management",
      url: "/user_management",
      icon: Users,
    },
    {
      title: "Cards Management",
      url: "/card_management",
      icon: CreditCard,
    },
    {
      title: "Sales Management",
      url: "/sale_management",
      icon: LineChart,
    },

    {
      title: "Lost Cards Information",
      url: "/lost_card",
      icon: Ban,
    },
    {
      title: "Reader Logs",
      url: "/reader_logs",
      icon: ScrollText,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              tooltip={"Admin Panel"}
            >
              <div className="grid flex-1 text-left text-base leading-tight">
                <span className="truncate font-semibold">Admin Panel</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMenus items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
