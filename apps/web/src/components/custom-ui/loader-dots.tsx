"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"div">;

export const LoaderDots = ({ className }: Props) => (
	<div className={cn("relative flex items-center", className)}>
		<motion.span
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY }}
			className="absolute left-2 size-3.5 rounded-full bg-current"
		/>
		<motion.span
			initial={{ x: 0 }}
			animate={{ x: 24 }}
			transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY }}
			className="absolute left-2 size-3.5 rounded-full bg-current"
		/>
		<motion.span
			initial={{ x: 0 }}
			animate={{ x: 24 }}
			transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY }}
			className="absolute left-8 size-3.5 rounded-full bg-current"
		/>
		<motion.span
			initial={{ scale: 1 }}
			animate={{ scale: 0 }}
			transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY }}
			className="absolute left-14 size-3.5 rounded-full bg-current"
		/>
	</div>
);
