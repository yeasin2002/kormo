import { AlertCircleIcon } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "@/components/retroui";
import { Textarea } from "@/components/ui/textarea";

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
			<Label htmlFor={name} className="mb-2 block font-bold text-lg">
				{label}
			</Label>
			<Textarea
				// {...register(name)}
				{...registration}
				placeholder={placeholder}
				className={`min-h-[150px] rounded-lg border-2 border-border bg-background px-4 py-3 text-base focus:ring-2 focus:ring-purple-400 ${className}`}
				required={required}
			/>
			{errors && (
				<div
					className="mt-2 flex items-center gap-1 text-destructive text-xs"
					role="alert"
				>
					<AlertCircleIcon className="size-3 shrink-0" />
					<span>{errors}</span>
				</div>
			)}
		</div>
	);
}
