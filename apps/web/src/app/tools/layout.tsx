import type React from "react";
import { Nav } from "@/components/shared/nav";

const ToolsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="mt-20">
			<Nav />
			{children}
		</main>
	);
};

export default ToolsLayout;
