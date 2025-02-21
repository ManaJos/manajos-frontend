"use client";
import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function LayoutHeroUi({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={false}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextThemesProvider>
  );
}