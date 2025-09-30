"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface Props extends React.ComponentProps<"button"> {
	value: string[];
	onToggleItem: (currentValue: string) => void;
	allOptions: string[];
	label: string;
}

export function MultiSelect({
	value,
	onToggleItem: onToggle,
	allOptions,
	label,
}: Props) {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between py-6"
				>
					{label}

					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="z-40 w-[200px] bg-background p-0">
				<Command>
					<CommandInput placeholder="Search framework..." className="h-9" />

					<CommandList className="bg-card">
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup>
							<React.Suspense fallback={<div>Loading...</div>}>
								{allOptions.map((tech, i) => (
									<CommandItem
										key={tech + i}
										value={tech}
										onSelect={(currentValue: string) => onToggle(currentValue)}
										className="flex items-center justify-between"
									>
										<span>{tech}</span>
										{value.includes(tech) && (
											<Check className="mr-2 h-4 w-4 text-green-600" />
										)}
									</CommandItem>
								))}
							</React.Suspense>
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
