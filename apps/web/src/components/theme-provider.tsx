    "use client"

    import * as React from "react"
    // Sab kuch "next-themes" se hi import karein
    import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

    export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
      return <NextThemesProvider {...props}>{children}</NextThemesProvider>
    }
    
