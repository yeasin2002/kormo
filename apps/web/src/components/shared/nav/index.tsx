"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { productListMenu } from "./menu.data";

export const Nav = () => {
	return (
		<div className="absolute top-0 left-0 z-20 flex h-12 w-full items-center justify-center px-6 sm:h-14 sm:px-8 md:h-16 md:px-12 lg:h-[84px] lg:px-0">
			<div className="absolute top-6 left-0 h-0 w-full border-[rgba(55,50,47,0.12)] border-t shadow-[0px_1px_0px_white] sm:top-7 md:top-8 lg:top-[42px]" />

			<div className="relative z-30 flex h-10 w-full max-w-[calc(100%-32px)] items-center justify-between rounded-[50px] bg-[#F7F5F3] px-3 py-1.5 pr-2 shadow-[0px_0px_0px_2px_white] backdrop-blur-sm sm:h-11 sm:max-w-[calc(100%-48px)] sm:px-4 sm:py-2 sm:pr-3 md:h-12 md:max-w-[calc(100%-64px)] md:px-4 lg:w-[700px] lg:max-w-[700px]">
				<div className="flex items-center justify-center">
					<div className="flex items-center justify-start">
						<Link
							href="/"
							className="font-medium font-serif text-[#2F3037] text-sm leading-5 sm:text-base md:text-lg lg:text-xl"
						>
							Kormo
						</Link>
					</div>
					<div className="flex flex-row items-start justify-start gap-2 pl-3 sm:flex sm:gap-3 sm:pl-4 md:gap-4 md:pl-5 lg:gap-4 lg:pl-5">
						<NavigationMenu viewport={false}>
							<NavigationMenuList className="gap-2 sm:gap-3 md:gap-4 lg:gap-4">
								<NavigationMenuItem>
									<NavigationMenuTrigger className="h-auto bg-transparent p-0 font-medium font-sans text-[rgba(49,45,43,0.80)] text-xs leading-[14px] hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent md:text-[13px]">
										Products
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[300px] gap-2">
											{productListMenu.map((item) => {
												return (
													<NavigationMenuLink asChild key={item.name}>
														<Link
															href={item.href}
															className="block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
														>
															<div className="font-medium text-sm leading-none">
																{item.name}
															</div>
															<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
																{item?.description}
															</p>
														</Link>
													</NavigationMenuLink>
												);
											})}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem asChild>
									<Link
										href={"/bd-tech-companies"}
										className="h-auto bg-transparent p-0 font-medium font-sans text-[rgba(49,45,43,0.80)] text-xs leading-[14px] hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent md:text-[13px]"
									>
										BD Tech Companies
									</Link>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<Link
										href="/pricing"
										className="h-auto bg-transparent p-0 font-medium font-sans text-[rgba(49,45,43,0.80)] text-xs leading-[14px] hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent md:text-[13px]"
									>
										Pricing
									</Link>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
				<div className="flex h-6 items-start justify-start gap-2 sm:h-7 sm:gap-3 md:h-8">
					<Link
						href="/login"
						className="flex items-center justify-center rounded-full bg-white px-2 py-1 font-medium font-sans text-[#37322F] text-xs leading-5 shadow-[0px_1px_2px_rgba(55,50,47,0.12)] sm:px-3 sm:py-[6px] md:px-[14px] md:text-[13px]"
					>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
};
