"use client";

import { useState } from "react";
import {
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/app/components/nav-main";
import { cn } from "@/lib/utils";
import { TeamSwitcher } from "@/app/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/app/components/ui/sidebar";
import ThemeSwitcher from "@/app/components/themeSwitcher";

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
        { title: "About us", url: "/" },
        { title: "Most played games", url: "#" },
        { title: "Best-selling game", url: "#" },
        { title: "Game review", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [{ title: "General", url: "#" }],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={cn(
        "fixed top-0 left-0 h-full bg-gray-100 dark:bg-[#161616] text-gray-900 dark:text-white transition-all duration-300 ease-in-out shadow-lg overflow-hidden",
        isOpen ? "w-64" : "w-12"
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
        <SidebarFooter className="flex justify-center py-4 overflow-hidden">
          <ThemeSwitcher />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </div>
  );
}
