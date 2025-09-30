"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/retroui";

export function ThemeSwitcher() {
	const { setTheme, themes } = useTheme();

	return (
		<>
			<Button
				variant="outline"
				size="icon"
				onClick={() => setTheme(themes.includes("dark") ? "light" : "dark")}
			>
				<Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
				<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span className="sr-only">Toggle theme</span>
			</Button>
		</>
	);
}
