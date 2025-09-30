import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"div"> {
	title: string;
	description: string;
	Icon: React.ElementType;
}

export const HeroFeatureCard = ({
	title,
	description,
	Icon,
	className,
	...props
}: Props) => {
	return (
		<div
			className={cn(
				"hover:-translate-y-1 rounded-xl border-2 border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl",
				className,
			)}
			{...props}
		>
			<div className="mb-4 flex items-center space-x-3">
				<div className="rounded-lg bg-foreground p-2 text-background">
					<Icon className="h-6 w-6" />
				</div>
				<h3 className="font-bold text-xl"> {title} </h3>
			</div>
			<p className="text-left text-muted-foreground">{description}</p>
		</div>
	);
};
