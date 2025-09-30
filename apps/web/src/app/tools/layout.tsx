import type React from "react";
import { NavBar } from "@/components/shared";

const ToolsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
};

export default ToolsLayout;
