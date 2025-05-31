import { fontVariables } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import { NavBar } from "@/components/shared";
import "./globals.css";
import { RootWrapper } from "./root-wrapper";

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
  title: "Tech Jobs BD",
  description: "Tech Jobs BD",
};
