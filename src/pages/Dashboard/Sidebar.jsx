import { AppSidebar } from "@/components/Sidebar/AppSidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { jwtDecode } from "jwt-decode";
import { ChevronsUpDown, LogOut } from "lucide-react";
import { Outlet } from "react-router";

export default function Sidebar() {
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null; // Ensure token exists before decoding
  const data = {
    user: {
      name: decodedToken?.name || "Guest",
      email: decodedToken?.email || "guest@example.com",
      avatar: decodedToken?.name || "G",
    },
  };
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 mb-4 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-50 border bg-white">
          <div className="flex items-center justify-between w-full gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <button
              className="flex gap-2 text-sm"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
            >
              <LogOut />
            </button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
