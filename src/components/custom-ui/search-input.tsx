import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "../retroui";
type Props = React.ComponentProps<"input">;

export const SearchInput = ({ className, ...props }: Props) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />

      <Input
        type="text"
        placeholder="Search companies..."
        className={cn(
          "!pl-10 bg-background border-2 border-border rounded-lg px-4  text-lg focus:ring-2 focus:ring-yellow-400",
          className
        )}
        {...props}
      />
    </div>
  );
};
