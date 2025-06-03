import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { AuthInput } from "./auth-input";

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
}

export const PasswordInput = ({
  id,
  label,
  placeholder,
  error,
  registration,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative ">
      <AuthInput
        id={id}
        type={showPassword ? "text" : "password"}
        label={label}
        placeholder={placeholder}
        icon={Lock}
        error={error}
        registration={registration}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-[55%] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        {showPassword ? (
          <EyeOff className="w-5 h-5" />
        ) : (
          <Eye className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};
