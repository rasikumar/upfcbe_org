import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/Sidebar/NavMain";
import { NavProjects } from "@/components/Sidebar/NavProjects";
import { NavUser } from "@/components/Sidebar/NavUser";
import { TeamSwitcher } from "@/components/Sidebar/TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { BiNews } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";

import { jwtDecode } from "jwt-decode";

export function AppSidebar({ ...props }) {
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null; // Ensure token exists before decoding

  const data = {
    user: {
      name: decodedToken?.name || "Guest",
      email: decodedToken?.email || "guest@example.com",
      avatar: decodedToken?.name || "G",
    },
    projects: [
      {
        id: 0,
        name: "News",
        url: "news",
        icon: BiNews,
      },
      {
        id: 1,
        name: "Events",
        url: "events",
        icon: Map,
      },
      {
        id: 2,
        name: "Donations",
        url: "donations",
        icon: FaDonate,
      },
      {
        id: 3,
        name: "Leads",
        url: "leads",
        icon: PieChart,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
