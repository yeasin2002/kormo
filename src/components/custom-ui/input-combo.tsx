import { Input } from "@/components/retroui";
import { cn } from "@/lib/utils";
import { AlertCircleIcon, LucideIcon } from "lucide-react";
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
  wrapperClassName?: string;
}

// const first = (second) => { third }
export const InputCombo = ({
  id,
  type = "text",
  placeholder,
  label,
  icon: Icon,
  error,
  registration,
  className = "",
  wrapperClassName = "",
}: InputComboProps) => {
  return (
    <div className={cn(wrapperClassName)}>
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
          {...registration}
          className={cn(
            Icon ? "!pl-10" : "!pl-4",
            "bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400",
            error && "border-red-500",
            className
          )}
        />
      </div>

      {error && (
        <div
          className="text-destructive flex items-center gap-1 text-xs mt-2"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};

InputCombo.displayName = "InputCombo";
