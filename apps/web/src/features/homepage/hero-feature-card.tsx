import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'div'> {
  title: string;
  description: string;
  Icon: React.ElementType;
}

export const HeroFeatureCard = ({ title, description, Icon, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'bg-card border-border rounded-xl border-2 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-center space-x-3">
        <div className="bg-foreground text-background rounded-lg p-2">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold"> {title} </h3>
      </div>
      <p className="text-muted-foreground text-left">{description}</p>
    </div>
  );
};
