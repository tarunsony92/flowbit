import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // <-- YEH IMPORT KAREIN

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF Data Extractor",
  description: "Upload, view, and extract data from PDFs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* POORE APP KO THEME PROVIDER SE WRAP KAREIN */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}