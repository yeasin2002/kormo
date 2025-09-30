import { cva, type VariantProps } from "class-variance-authority";
import React, { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
	"flex cursor-pointer items-center font-head font-medium outline-hidden transition-all duration-200",
	{
		variants: {
			variant: {
				default:
					"border-2 border-black bg-primary text-black shadow-md transition hover:translate-y-1 hover:bg-primary-hover hover:shadow-none",
				secondary:
					"border-2 border-black bg-secondary text-secondary-foreground shadow-md shadow-primary transition hover:translate-y-1 hover:shadow-none",
				outline:
					"border-2 bg-transparent shadow-md transition hover:translate-y-1 hover:shadow-none",
				link: "bg-transparent hover:underline",
			},
			size: {
				sm: "px-3 py-1 text-sm shadow hover:shadow-none",
				md: "px-4 py-1.5 text-base",
				lg: "px-8 py-3 text-lg",
				icon: "p-2",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "default",
		},
	},
);

export interface IButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
	(
		{
			children,
			size = "md",
			className = "",
			variant = "default",
			...props
		}: IButtonProps,
		forwardedRef,
	) => (
		<button
			ref={forwardedRef}
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		>
			{children}
		</button>
	),
);

Button.displayName = "Button";
