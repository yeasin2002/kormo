import { Input } from "@/components/retroui";
import { LucideIcon } from "lucide-react";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputComboProps {
  id: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  label?: string;
  icon?: LucideIcon;
  error?: FieldError;
  registration?: UseFormRegisterReturn;
  className?: string;
}

export const InputCombo = React.forwardRef<HTMLInputElement, InputComboProps>(
  (
    {
      id,
      type = "text",
      placeholder,
      label,
      icon: Icon,
      error,
      registration,
      className = "",
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-bold text-foreground mb-2"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          )}
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            ref={ref}
            {...registration}
            className={`${
              Icon ? "pl-10" : "pl-4"
            } bg-background border-2 border-border 
              rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-yellow-400 
              focus:border-yellow-400 ${
                error ? "border-red-500" : ""
              } ${className}`}
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    );
  }
);

InputCombo.displayName = "InputCombo";
