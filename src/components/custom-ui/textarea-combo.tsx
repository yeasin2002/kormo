import { Label } from "@/components/retroui";
import { Textarea } from "@/components/ui/textarea";
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
      {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
    </div>
  );
}
