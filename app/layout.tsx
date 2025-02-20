import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import * as React from "react";
import LayoutHeroUi from "./layoutHeroUi";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "@/app/components/app-sidebar";

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
      <body className="overflow-x-hidden m-0 p-0">
        <SidebarProvider>
          <LayoutHeroUi>
            <AppSidebar />
            {children}
          </LayoutHeroUi>
        </SidebarProvider>
      </body>
    </html>
  );
}
