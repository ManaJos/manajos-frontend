"use client"
import * as React from "react";
import {HeroUIProvider} from "@heroui/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";


export default function LayoutHeroUi({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <HeroUIProvider>
           
            {children}

        </HeroUIProvider>
    );
  }