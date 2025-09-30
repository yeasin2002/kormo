import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/retroui";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"div"> {
	title: string;
	description: string;
	link?: string;
}

export const ToolsCardItem = ({
	title,
	description,
	link,
	className,
	...props
}: Props) => {
	return (
		<div
			className={cn(
				"group flex flex-col justify-between gap-y-4 rounded-lg border border-gray-700 bg-card p-6 text-foreground shadow-lg transition-all duration-300",
				className,
			)}
			{...props}
		>
			<div>
				<h3 className="font-head font-normal text-xl"> {title} </h3>
				<p className="font-sans text-muted-foreground">{description}</p>
			</div>

			<div>
				{link ? (
					<Link
						href={link}
						target="_blank"
						className={cn(
							buttonVariants({
								size: "sm",
								className:
									"inline-flex h-7 items-center space-x-1 px-2 font-sans text-xs",
							}),
						)}
					>
						<span>try this</span>
						<ExternalLink className="h-3 w-3" />
					</Link>
				) : (
					<Button
						size={"sm"}
						className="inline-flex h-7 items-center space-x-1 px-2 font-sans text-xs"
					>
						work in progress
					</Button>
				)}
			</div>
		</div>
	);
};
