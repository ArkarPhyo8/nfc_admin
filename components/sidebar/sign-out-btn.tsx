"use client";
import { LogOut } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { signOutAction } from "@/actions/auth/signOutAction";
import { useState } from "react";
import LoadingUI from "@/reusable/LoadingUI";

export function NavUser() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={async () => {
              try {
                setIsLoading(true);
                await signOutAction();
              } finally {
                setIsLoading(false);
              }
            }}
            tooltip={"Log out"}
            className="cursor-pointer"
          >
            {isLoading ? (
              <>
                <LoadingUI />
                Log outing...
              </>
            ) : (
              <>
                <LogOut />
                Log out
              </>
            )}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
