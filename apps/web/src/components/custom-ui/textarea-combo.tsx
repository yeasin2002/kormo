import { Label } from '@/components/retroui';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircleIcon } from 'lucide-react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaComboProps {
  label: string;

  placeholder?: string;
  required?: boolean;
  registration?: UseFormRegisterReturn;
  errors: string | undefined;
  className?: string;
}

export function TextareaCombo({
  label,
  placeholder = 'Write here...',
  required = false,
  registration,
  errors,
  className = '',
}: TextareaComboProps) {
  const name = registration?.name || 'textarea-combo';
  return (
    <div>
      <Label htmlFor={name} className="mb-2 block text-lg font-bold">
        {label}
      </Label>
      <Textarea
        // {...register(name)}
        {...registration}
        placeholder={placeholder}
        className={`bg-background border-border min-h-[150px] rounded-lg border-2 px-4 py-3 text-base focus:ring-2 focus:ring-purple-400 ${className}`}
        required={required}
      />
      {errors && (
        <div className="text-destructive mt-2 flex items-center gap-1 text-xs" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors}</span>
        </div>
      )}
    </div>
  );
}
