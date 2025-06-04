import { NavBar } from "@/components/shared";
import React from "react";

const ToolsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default ToolsLayout;
