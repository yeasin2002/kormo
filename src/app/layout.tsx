import { fontVariables } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased`, fontVariables)}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Tech Jobs BD",
  description: "Tech Jobs BD",
};
