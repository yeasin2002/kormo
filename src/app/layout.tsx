import { fontVariables } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import { NavBar } from "@/components/shared/nav-bar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased bg-black text-white`, fontVariables)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Tech Jobs BD",
  description: "Tech Jobs BD",
};
