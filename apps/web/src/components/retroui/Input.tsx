import type React from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const Input: React.FC<InputProps> = ({
	type = "text",
	placeholder = "Enter text",
	className = "",
	...props
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`w-full border-2 px-4 py-2 shadow-md transition focus:shadow-xs focus:outline-hidden ${
				props["aria-invalid"]
					? "border-red-500 text-red-500 shadow-red-600 shadow-xs"
					: ""
			} ${className}`}
			{...props}
		/>
	);
};
