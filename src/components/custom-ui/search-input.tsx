import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '../retroui';
type Props = React.ComponentProps<'input'>;

export const SearchInput = ({ className, ...props }: Props) => {
  return (
    <div className="relative flex-1">
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform" />

      <Input
        type="text"
        placeholder="Search companies..."
        className={cn(
          'bg-background border-border rounded-lg border-2 px-4 !pl-10 text-lg focus:ring-2 focus:ring-yellow-400',
          className,
        )}
        {...props}
      />
    </div>
  );
};
