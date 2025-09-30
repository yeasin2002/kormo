import type React from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div">;

export const TextSkeleton = ({ className, ...props }: Props) => {
	return (
		<div
			role="status"
			className={cn("max-w-lg animate-pulse space-y-2.5", className)}
			{...props}
		>
			<div className="flex w-full items-center">
				<div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
				<div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
				<div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
			</div>
			<div className="flex w-full items-center">
				<div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
				<div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
				<div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
			</div>
			<div className="flex w-full max-w-[400px] items-center">
				<div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
				<div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700" />
				<div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
			</div>
			<div className="flex w-full items-center">
				<div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
				<div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
				<div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
			</div>
			<div className="flex w-full items-center">
				<div className="ms-2 h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600" />
				<div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
				<div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
			</div>
			<div className="flex w-full items-center">
				<div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
				<div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700" />
				<div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
};
