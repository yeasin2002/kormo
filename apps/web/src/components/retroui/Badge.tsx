import { cva, type VariantProps } from "class-variance-authority";
import React, { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva("font-semibold", {
	variants: {
		variant: {
			default: "bg-gray-200 text-gray-700",
			outline: "text-foreground outline-2 outline-foreground",
			solid: "bg-foreground text-background",
			surface: "bg-primary text-black outline-2",
		},
		size: {
			sm: "px-2 py-1 text-xs",
			md: "px-2.5 py-1.5 text-sm",
			lg: "px-3 py-2 text-base",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

interface ButtonProps
	extends HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof badgeVariants> {}

export function Badge({
	children,
	size = "md",
	variant = "default",
	className = "",
	...props
}: ButtonProps) {
	return (
		<span
			className={cn(badgeVariants({ variant, size }), className)}
			{...props}
		>
			{children}
		</span>
	);
}
