"use client"

import type * as React from "react"
import { useState } from "react";

import {
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/app/components/nav-main"
import { cn } from "@/lib/utils";
import { TeamSwitcher } from "@/app/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/app/components/ui/sidebar"
import { url } from "inspector";

// This is sample data.
const data = {
  teams: [
    {
      name: "ManaJos",
      logo: GalleryVerticalEnd,
      plan: "Society",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "About us",
          url: "/",
        },
        {
          title: "Most played games",
          url: "#",
        },
        {
            title: "Best-selling game",
            url: "#",
        },
        {
          title: "Game review",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onMouseEnter={toggleSidebar}
        onMouseLeave={toggleSidebar}
        className={cn(
          "fixed top-0 left-0 h-full bg-[#18181B] text-white transition-all overflow-hidden duration-300 ease-in-out transform",
          isOpen ? "w-64" : "w-10"
        )}
        style={{ zIndex: 1000 }}
      >
        <Sidebar collapsible="icon" {...props}>
          <SidebarHeader>
            <TeamSwitcher teams={data.teams} />
          </SidebarHeader>
          <SidebarContent>
            <NavMain items={data.navMain} />
          </SidebarContent>
          <SidebarFooter>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          style={{ zIndex: 999 }}
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
