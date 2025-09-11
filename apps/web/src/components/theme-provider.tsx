"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"       // 👈 Tailwind ke liye zaroori
      defaultTheme="system"   // 👈 Default theme (light/dark/system)
      enableSystem            // 👈 System theme support
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
