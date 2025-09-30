import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "../retroui";

type Props = React.ComponentProps<"input">;

export const SearchInput = ({ className, ...props }: Props) => {
	return (
		<div className="relative flex-1">
			<Search className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 transform text-muted-foreground" />

			<Input
				type="text"
				placeholder="Search companies..."
				className={cn(
					"!pl-10 rounded-lg border-2 border-border bg-background px-4 text-lg focus:ring-2 focus:ring-yellow-400",
					className,
				)}
				{...props}
			/>
		</div>
	);
};
