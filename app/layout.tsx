import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import * as React from "react";
import LayoutHeroUi from "./layoutHeroUi";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/Components/app-sidebar"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ManaJos",
  description: "ManaJos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <body
          className=" bg-[#0d020e] overflow-hidden"
        >
          <SidebarProvider>
          <AppSidebar />
          <LayoutHeroUi>
          <SidebarTrigger />
            {children}
          </LayoutHeroUi>
          </SidebarProvider>
        </body>
      </html>
  );
}
