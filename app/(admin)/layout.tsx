import SidebarPage from "@/components/sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <SidebarPage>{children}</SidebarPage>;
};

export default AdminLayout;
