import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const badgeVariants = cva("font-semibold ", {
  variants: {
    variant: {
      default: "bg-gray-200 text-gray-700",
      outline: "outline-2 outline-foreground text-foreground",
      solid: "bg-foreground text-background",
      surface: "outline-2 bg-primary text-black",
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
