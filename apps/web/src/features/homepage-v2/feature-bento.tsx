/** biome-ignore-all lint/performance/noImgElement: <> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { Badge } from "@/components/shared/badge";
import EffortlessIntegration from "./effortless-integration";
import NumbersThatSpeak from "./numbers-that-speak";
import SmartSimpleBrilliant from "./smart-simple-brilliant";
import YourWorkInSync from "./your-work-in-sync";

export const FeatureBento = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center border-[rgba(55,50,47,0.12)] border-b">
			{/* Header Section */}
			<div className="flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-b px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:w-[1060px] lg:max-w-[1060px] lg:px-0">
				<div className="flex w-full max-w-[616px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] sm:gap-4 sm:px-6 sm:py-5 lg:w-[616px]">
					<Badge
						icon={
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Star</title>
								<rect
									x="1"
									y="1"
									width="4"
									height="4"
									stroke="#37322F"
									strokeWidth="1"
									fill="none"
								/>
								<rect
									x="7"
									y="1"
									width="4"
									height="4"
									stroke="#37322F"
									strokeWidth="1"
									fill="none"
								/>
								<rect
									x="1"
									y="7"
									width="4"
									height="4"
									stroke="#37322F"
									strokeWidth="1"
									fill="none"
								/>
								<rect
									x="7"
									y="7"
									width="4"
									height="4"
									stroke="#37322F"
									strokeWidth="1"
									fill="none"
								/>
							</svg>
						}
						text="Bento grid"
					/>
					<div className="flex w-full max-w-[598.06px] flex-col justify-center text-center font-sans font-semibold text-[#49423D] text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl md:leading-[60px] lg:w-[598.06px] lg:text-5xl">
						Built for absolute clarity and focused work
					</div>
					<div className="self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
						Stay focused with tools that organize, connect
						<br />
						and turn information into confident decisions.
					</div>
				</div>
			</div>

			{/* Bento Grid Content */}
			<div className="flex items-start justify-center self-stretch">
				<div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
					{/* Left decorative pattern */}
					<div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
						{Array.from({ length: 200 }).map((_, i) => (
							<div
								key={i}
								className="h-3 origin-top-left rotate-[-45deg] self-stretch outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
							/>
						))}
					</div>
				</div>

				<div className="grid flex-1 grid-cols-1 gap-0 border-[rgba(55,50,47,0.12)] border-r border-l md:grid-cols-2">
					{/* Top Left - Smart. Simple. Brilliant. */}
					<div className="flex flex-col items-start justify-start gap-4 border-[rgba(55,50,47,0.12)] border-r-0 border-b p-4 sm:gap-6 sm:p-6 md:border-r md:p-8 lg:p-12">
						<div className="flex flex-col gap-2">
							<h3 className="font-sans font-semibold text-[#37322F] text-lg leading-tight sm:text-xl">
								Smart. Simple. Brilliant.
							</h3>
							<p className="font-normal font-sans text-[#605A57] text-sm leading-relaxed md:text-base">
								Your data is beautifully organized so you see everything clearly
								without the clutter.
							</p>
						</div>
						<div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg sm:h-[250px] md:h-[300px]">
							<SmartSimpleBrilliant
								width="100%"
								height="100%"
								theme="light"
								className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
							/>
						</div>
					</div>

					{/* Top Right - Your work, in sync */}
					<div className="flex flex-col items-start justify-start gap-4 border-[rgba(55,50,47,0.12)] border-b p-4 sm:gap-6 sm:p-6 md:p-8 lg:p-12">
						<div className="flex flex-col gap-2">
							<h3 className="font-sans font-semibold text-[#37322F] text-lg leading-tight sm:text-xl">
								Your work, in sync
							</h3>
							<p className="font-normal font-sans text-[#605A57] text-sm leading-relaxed md:text-base">
								Every update flows instantly across your team and keeps
								collaboration effortless and fast.
							</p>
						</div>
						<div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg text-right sm:h-[250px] md:h-[300px]">
							<YourWorkInSync
								width="400"
								height="250"
								theme="light"
								className="scale-60 sm:scale-75 md:scale-90"
							/>
						</div>
					</div>

					{/* Bottom Left - Effortless integration */}
					<div className="flex flex-col items-start justify-start gap-4 border-[rgba(55,50,47,0.12)] border-r-0 bg-transparent p-4 sm:gap-6 sm:p-6 md:border-r md:p-8 lg:p-12">
						<div className="flex flex-col gap-2">
							<h3 className="font-sans font-semibold text-[#37322F] text-lg leading-tight sm:text-xl">
								Effortless integration
							</h3>
							<p className="font-normal font-sans text-[#605A57] text-sm leading-relaxed md:text-base">
								All your favorite tools connect in one place and work together
								seamlessly by design.
							</p>
						</div>
						<div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-transparent sm:h-[250px] md:h-[300px]">
							<div className="flex h-full w-full items-center justify-center bg-transparent">
								<EffortlessIntegration
									width={400}
									height={250}
									className="max-h-full max-w-full"
								/>
							</div>
							{/* Gradient mask for soft bottom edge */}
							<div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent" />
						</div>
					</div>

					{/* Bottom Right - Numbers that speak */}
					<div className="flex flex-col items-start justify-start gap-4 p-4 sm:gap-6 sm:p-6 md:p-8 lg:p-12">
						<div className="flex flex-col gap-2">
							<h3 className="font-sans font-semibold text-[#37322F] text-lg leading-tight sm:text-xl">
								Numbers that speak
							</h3>
							<p className="font-normal font-sans text-[#605A57] text-sm leading-relaxed md:text-base">
								Track growth with precision and turn raw data into confident
								decisions you can trust.
							</p>
						</div>
						<div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg sm:h-[250px] md:h-[300px]">
							<div className="absolute inset-0 flex items-center justify-center">
								<NumbersThatSpeak
									width="100%"
									height="100%"
									theme="light"
									className="h-full w-full object-contain"
								/>
							</div>
							{/* Gradient mask for soft bottom edge */}
							<div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent" />
							{/* Fallback content if component doesn't render */}
							<div className="absolute inset-0 flex items-center justify-center opacity-20">
								<div className="flex flex-col items-center gap-2 p-4">
									<div className="h-full w-3/4 rounded-full bg-green-500" />
								</div>
								<div className="text-green-600 text-sm">Growth Rate</div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
					{/* Right decorative pattern */}
					<div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
						{Array.from({ length: 200 }).map((_, i) => (
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
