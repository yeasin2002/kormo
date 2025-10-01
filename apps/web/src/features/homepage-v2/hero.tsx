/** biome-ignore-all lint/performance/noImgElement: <> */
"use client";

import { Badge } from "@/components/shared/badge";
import CTASection from "@/features/homepage-v2/cta-section";
import DocumentationSection from "@/features/homepage-v2/documentation-section";
import EffortlessIntegration from "@/features/homepage-v2/effortless-integration-updated";
import FAQSection from "@/features/homepage-v2/faq-section";
import FooterSection from "@/features/homepage-v2/footer-section";
import NumbersThatSpeak from "@/features/homepage-v2/numbers-that-speak";
import PricingSection from "@/features/homepage-v2/pricing-section";
import SmartSimpleBrilliant from "@/features/homepage-v2/smart-simple-brilliant";
import { SocialProof } from "@/features/homepage-v2/social-proof";
import TestimonialsSection from "@/features/homepage-v2/testimonials-section";
import YourWorkInSync from "@/features/homepage-v2/your-work-in-sync";
import { useEffect, useRef, useState } from "react";
import { FeatureCard } from "./feature-card";


interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...props }: Props) => {
const [activeCard, setActiveCard] = useState(0);
    const [progress, setProgress] = useState(0);
    const mountedRef = useRef(true);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            if (!mountedRef.current) return;

            setProgress((prev) => {
                if (prev >= 100) {
                    if (mountedRef.current) {
                        setActiveCard((current) => (current + 1) % 3);
                    }
                    return 0;
                }
                return prev + 2; // 2% every 100ms = 5 seconds total
            });
        }, 100);

        return () => {
            clearInterval(progressInterval);
            mountedRef.current = false;
        };
    }, []);

    useEffect(() => {
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const handleCardClick = (index: number) => {
        if (!mountedRef.current) return;
        setActiveCard(index);
        setProgress(0);
    };



	return (
		<div
			className="flex w-full flex-col items-center justify-start px-2 pt-16 pr-0 pb-8 pl-0 sm:px-4 sm:pt-20 sm:pr-0 sm:pb-12 sm:pl-0 md:px-8 md:pt-24 md:pb-16 lg:px-0 lg:pt-[216px]"
			{...props}
		>
			<div className="flex w-full max-w-[937px] flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:w-[937px] lg:gap-6">
				<div className="flex flex-col items-center justify-center gap-4 self-stretch rounded-[3px] sm:gap-5 md:gap-6 lg:gap-8">
					<div className="flex w-full max-w-[748.71px] flex-col justify-center px-2 text-center font-normal font-serif text-[#37322F] text-[24px] xs:text-[28px] leading-[1.1] sm:px-4 sm:text-[36px] sm:leading-[1.15] md:px-0 md:text-[52px] md:leading-[1.2] lg:w-[748.71px] lg:text-[80px] lg:leading-24">
						Effortless custom contract
						<br />
						billing by Brillance
					</div>
					<div className="flex w-full max-w-[506.08px] flex-col justify-center px-2 text-center font-medium font-sans text-[rgba(55,50,47,0.80)] text-sm leading-[1.4] sm:px-4 sm:text-lg sm:leading-[1.45] md:px-0 md:text-xl md:leading-[1.5] lg:w-[506.08px] lg:text-lg lg:leading-7">
						Streamline your billing process with seamless automation
						<br className="hidden sm:block" />
						for every custom contract, tailored by Brillance.
					</div>
				</div>
			</div>

			<div className="relative z-10 mt-6 flex w-full max-w-[497px] flex-col items-center justify-center gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:gap-10 lg:mt-12 lg:w-[497px] lg:gap-12">
				<div className="flex items-center justify-start gap-4 backdrop-blur-[8.25px]">
					<div className="relative flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#37322F] px-6 py-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] sm:h-11 sm:px-8 sm:py-[6px] md:h-12 md:px-10 lg:px-12">
						<div className="absolute top-[-0.5px] left-0 h-[41px] w-20 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply sm:w-24 md:w-28 lg:w-44" />
						<div className="flex flex-col justify-center font-medium font-sans text-sm text-white leading-5 sm:text-base md:text-[15px]">
							Start for free
						</div>
					</div>
				</div>
			</div>

			<div className="-translate-x-1/2 pointer-events-none absolute top-[232px] left-1/2 z-0 transform sm:top-[248px] md:top-[264px] lg:top-[320px]">
				<img
					src="/mask-group-pattern.svg"
					alt=""
					className="h-auto w-[936px] opacity-30 mix-blend-multiply sm:w-[1404px] sm:opacity-40 md:w-[2106px] md:opacity-50 lg:w-[2808px]"
					style={{
						filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
					}}
				/>
			</div>

			<div className="relative z-5 my-8 mb-0 flex w-full max-w-[960px] flex-col items-center justify-center gap-2 px-2 pt-2 pb-6 sm:my-12 sm:px-4 sm:pt-4 sm:pb-8 md:my-16 md:px-6 md:pb-10 lg:my-16 lg:w-[960px] lg:px-11 lg:pb-0">
				<div className="flex h-[200px] w-full max-w-[960px] flex-col items-start justify-start overflow-hidden rounded-[6px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] sm:h-[280px] sm:rounded-[8px] md:h-[450px] lg:h-[695.55px] lg:w-[960px] lg:rounded-[9.06px]">
					{/* Dashboard Content */}
					<div className="flex flex-1 items-start justify-start self-stretch">
						{/* Main Content */}
						<div className="flex h-full w-full items-center justify-center">
							<div className="relative h-full w-full overflow-hidden">
								{/* Product Image 1 - Plan your schedules */}
								<div
									className={`absolute inset-0 transition-all duration-500 ease-in-out ${
										activeCard === 0
											? "scale-100 opacity-100 blur-0"
											: "scale-95 opacity-0 blur-sm"
									}`}
								>
									<img
										src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dsadsadsa.jpg-xTHS4hGwCWp2H5bTj8np6DXZUyrxX7.jpeg"
										alt="Schedules Dashboard - Customer Subscription Management"
										className="h-full w-full object-cover"
									/>
								</div>

								{/* Product Image 2 - Data to insights */}
								<div
									className={`absolute inset-0 transition-all duration-500 ease-in-out ${
										activeCard === 1
											? "scale-100 opacity-100 blur-0"
											: "scale-95 opacity-0 blur-sm"
									}`}
								>
									<img
										src="/analytics-dashboard-with-charts-graphs-and-data-vi.jpg"
										alt="Analytics Dashboard"
										className="h-full w-full object-cover"
									/>
								</div>

								{/* Product Image 3 - Data visualization */}
								<div
									className={`absolute inset-0 transition-all duration-500 ease-in-out ${
										activeCard === 2
											? "scale-100 opacity-100 blur-0"
											: "scale-95 opacity-0 blur-sm"
									}`}
								>
									<img
										src="/data-visualization-dashboard-with-interactive-char.jpg"
										alt="Data Visualization Dashboard"
										className="h-full w-full object-contain" // Changed from object-cover to object-contain to preserve landscape aspect ratio
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-start justify-center self-stretch border-[#E0DEDB] border-[#E0DEDB] border-t border-b">
				<div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
					{/* Left decorative pattern */}
					<div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
						{Array.from({ length: 50 }).map((_, i) => (
							<div
								key={i}
								className="h-3 origin-top-left rotate-[-45deg] self-stretch outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
							/>
						))}
					</div>
				</div>

				<div className="flex flex-1 flex-col items-stretch justify-center gap-0 px-0 sm:px-2 md:flex-row md:px-0">
					{/* Feature Cards */}
					<FeatureCard
						title="Plan your schedules"
						description="Streamline customer subscriptions and billing with automated scheduling tools."
						isActive={activeCard === 0}
						progress={activeCard === 0 ? progress : 0}
						onClick={() => handleCardClick(0)}
					/>
					<FeatureCard
						title="Analytics & insights"
						description="Transform your business data into actionable insights with real-time analytics."
						isActive={activeCard === 1}
						progress={activeCard === 1 ? progress : 0}
						onClick={() => handleCardClick(1)}
					/>
					<FeatureCard
						title="Collaborate seamlessly"
						description="Keep your team aligned with shared dashboards and collaborative workflows."
						isActive={activeCard === 2}
						progress={activeCard === 2 ? progress : 0}
						onClick={() => handleCardClick(2)}
					/>
				</div>

				<div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
					{/* Right decorative pattern */}
					<div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
						{Array.from({ length: 50 }).map((_, i) => (
							<div
								key={i}
								className="h-3 origin-top-left rotate-[-45deg] self-stretch outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
							/>
						))}
					</div>
				</div>
			</div>

			{/* Social Proof Section */}
			<SocialProof />

			{/* Bento Grid Section */}
			<div className="flex w-full flex-col items-center justify-center border-[rgba(55,50,47,0.12)] border-b">
				{/* Header Section */}
				<div className="flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-b px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:w-[1060px] lg:max-w-[1060px] lg:px-0">
					<div className="flex w-full max-w-[616px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] shadow-none sm:gap-4 sm:px-6 sm:py-5 lg:w-[616px]">
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
									className="h-3 origin-top-left rotate-[-45deg] self-stretch outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
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
									Your data is beautifully organized so you see everything
									clearly without the clutter.
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
								<div className="absolute inset-0 flex hidden items-center justify-center opacity-20">
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
									className="h-3 origin-top-left rotate-[-45deg] self-stretch outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Documentation Section */}
			<DocumentationSection />

			{/* Testimonials Section */}
			<TestimonialsSection />

			{/* Pricing Section */}
			<PricingSection />

			{/* FAQ Section */}
			<FAQSection />

			{/* CTA Section */}
			<CTASection />

			{/* Footer Section */}
			<FooterSection />
		</div>
	);
};
