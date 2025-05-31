import { fontVariables } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import { NavBar, ThemeProvider } from "@/components/shared";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={cn(`antialiased  `, fontVariables)}>
          <NavBar />
          {children}
          {/* <Footer /> */}
        </body>
      </ThemeProvider>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Tech Jobs BD",
  description: "Tech Jobs BD",
};
