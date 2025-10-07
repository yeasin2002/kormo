/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import Image from "next/image";
import { Badge } from "@/components/shared/badge";

export const SocialProof = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center border-[rgba(55,50,47,0.12)] border-b">
			<div className="flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-b px-4 py-8 sm:px-6 sm:py-12 md:px-24 md:py-16">
				<div className="flex w-full max-w-[586px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4  sm:gap-4 sm:px-6 sm:py-5">
					<Badge
						icon={
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Star</title>
								<rect
									x="1"
									y="3"
									width="4"
									height="6"
									stroke="#37322F"
									strokeWidth="1"
									fill="none"
								/>
								<rect
									x="7"
									y="1"
									width="4"
									height="8"
									stroke="#37322F"
									strokeWidth="1"
									fill="none"
								/>
								<rect x="2" y="4" width="1" height="1" fill="#37322F" />
								<rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
								<rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
								<rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
								<rect x="8" y="2" width="1" height="1" fill="#37322F" />
								<rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
								<rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
								<rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
								<rect x="8" y="5" width="1" height="1" fill="#37322F" />
								<rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
							</svg>
						}
						text="Social Proof"
					/>
					<div className="flex w-full max-w-[472.55px] flex-col justify-center text-center font-sans font-semibold text-[#49423D] text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl md:leading-[60px] lg:text-5xl">
						Confidence backed by results
					</div>
					<div className="self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
						Our customers achieve more each day
						<br className="hidden sm:block" />
						because their tools are simple, powerful, and clear.
					</div>
				</div>
			</div>

			{/* Logo Grid */}
			<div className="flex items-start justify-center self-stretch border-[rgba(55,50,47,0.12)] border-t border-b-0">
				<div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
					{/* Left decorative pattern */}
					<div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
						{Array.from({ length: 50 }).map((_, i) => (
							<div
								key={i}
								className="h-3 origin-top-left rotate-[-45deg] self-stretch outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
							/>
						))}
					</div>
				</div>

				<div className="grid flex-1 grid-cols-2 gap-0 border-[rgba(55,50,47,0.12)] border-r border-l sm:grid-cols-4 md:grid-cols-4">
					{/* Logo Grid - Responsive grid */}
					{Array.from({ length: 8 }).map((_, index) => {
						const isMobileFirstColumn = index % 2 === 0;
						const isDesktopFirstColumn = index % 4 === 0;
						const isDesktopLastColumn = index % 4 === 3;
						const isDesktopTopRow = index < 4;
						const isDesktopBottomRow = index >= 4;

						return (
							<div
								key={index}
								className={`flex h-24 xs:h-28 items-center justify-center gap-1 xs:gap-2 border-[rgba(227,226,225,0.5)] border-b sm:h-32 sm:gap-3 md:h-36 lg:h-40 ${index < 6 ? "sm:border-b-[0.5px]" : "sm:border-b"}
                            ${index >= 6 ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}sm:border-r-[0.5px] sm:border-l-0 ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
                            ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""}border-[#E3E2E1]`}
							>
								<div className="relative h-6 xs:h-7 w-6 xs:w-7 overflow-hidden rounded-full shadow-[0px_-4px_8px_rgba(255,255,255,0.64)_inset] sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10">
									<Image
										src="/horizon-icon.svg"
										alt="Horizon"
										className="h-full w-full object-contain"
										width={24}
										height={24}
									/>
								</div>
								<div className="flex flex-col justify-center text-center font-medium font-sans text-[#37322F] text-sm xs:text-base leading-tight sm:text-lg md:text-xl md:leading-9 lg:text-2xl">
									Acute
								</div>
							</div>
						);
					})}
				</div>

				<div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
					{/* Right decorative pattern */}
					<div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
						{Array.from({ length: 50 }).map((_, i) => (
							<div
								key={i}
								className="h-3 origin-top-left rotate-[-45deg] self-stretch outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
