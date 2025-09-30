import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputCombo } from "./input-combo";

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
		<div className="relative">
			<InputCombo
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
				className="absolute top-[55%] right-4 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
			>
				{showPassword ? (
					<EyeOff className="h-5 w-5" />
				) : (
					<Eye className="h-5 w-5" />
				)}
			</button>
		</div>
	);
};
