"use client";

import Image from "next/image";
import Link from "next/link";
import premiumIcon from "@/assets/premium-icon.png";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
	name: string;
	items: {
		name: string;
		href: string;
		isPro?: boolean;
	}[];
}

export function NavItems({ items, name }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					className="group cursor-pointer font-bold font-sans outline-none focus:outline-none"
					type="button"
				>
					{name}
					<span className="block h-[0.20rem] w-0 bg-primary transition-all group-hover:w-full" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{items.map((item) => (
					<DropdownMenuItem
						key={item.href + item.name}
						className="cursor-pointer"
					>
						<Link href={{ pathname: item.href }}>{item.name}</Link>

						{item.isPro && (
							<Image
								src={premiumIcon}
								alt="Premium"
								width={20}
								height={20}
								className="ml-2"
							/>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
