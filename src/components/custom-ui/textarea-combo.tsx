import { Label } from "@/components/retroui";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircleIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

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
  placeholder = "Write here...",
  required = false,
  registration,
  errors,
  className = "",
}: TextareaComboProps) {
  const name = registration?.name || "textarea-combo";
  return (
    <div>
      <Label htmlFor={name} className="text-lg font-bold mb-2 block">
        {label}
      </Label>
      <Textarea
        // {...register(name)}
        {...registration}
        placeholder={placeholder}
        className={`bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-purple-400 min-h-[150px] ${className}`}
        required={required}
      />
      {errors && (
        <div
          className="text-destructive flex items-center gap-1 text-xs mt-2"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors}</span>
        </div>
      )}
    </div>
  );
}
