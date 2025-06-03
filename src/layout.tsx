import { fontVariables } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import { NavBar } from "@/components/shared";
import { RootWrapper } from "./app/root-wrapper";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased  `, fontVariables)}>
        <RootWrapper>
          <NavBar />
          {children}
          {/* <Footer /> */}
        </RootWrapper>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Kormo Setu",
  description: "Find all tech companies in Bangladesh",
};
