/** biome-ignore-all lint/performance/noImgElement: <> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FeatureCard } from "@/features/homepage-v2/feature-card";

export const Hero = () => {
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
		<>
			<div className="flex w-full max-w-[937px] flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:w-[937px] lg:gap-6">
				<div className="flex flex-col items-center justify-center gap-4 self-stretch rounded-[3px] sm:gap-5 md:gap-6 lg:gap-8">
					<div className="flex w-full max-w-[748.71px] flex-col justify-center px-2 text-center font-normal font-serif text-[#37322F] text-[24px] xs:text-[28px] leading-[1.1] sm:px-4 sm:text-[36px] sm:leading-[1.15] md:px-0 md:text-[52px] md:leading-[1.2] lg:w-[748.71px] lg:text-[80px] lg:leading-24">
						Making job searching
						<br />
						less frustrating.!
					</div>
					<div className="flex w-full max-w-3xl flex-col justify-center px-2 text-center font-medium font-sans text-[rgba(55,50,47,0.80)] text-sm leading-[1.4] sm:px-4 sm:text-lg sm:leading-[1.45] md:px-0 md:text-xl md:leading-[1.5] lg:w-3xl lg:text-lg lg:leading-7">
						A platform that helps you find the best job for you. A place where
						you can find companies that match your skills and interests. A place
						where you can find opportunities. A place where you can grow your
						skills and get hired.
					</div>
				</div>
			</div>

			<div className="relative z-10 mt-6 flex w-full max-w-[497px] flex-col items-center justify-center gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:gap-10 lg:mt-12 lg:w-[497px] lg:gap-12">
				<div className="flex items-center justify-start gap-4 backdrop-blur-[8.25px]">
					<Link
						href="/register"
						className="relative flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#37322F] px-6 py-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] sm:h-11 sm:px-8 sm:py-[6px] md:h-12 md:px-10 lg:px-12"
					>
						<div className="absolute top-[-0.5px] left-0 h-[41px] w-20 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply sm:w-24 md:w-28 lg:w-44 " />
						<span className="text-white">Start for free</span>
					</Link>
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

			<div className="flex items-start justify-center self-stretch border-[#E0DEDB] border-t border-b">
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
								className="h-3 origin-top-left rotate-[-45deg] self-stretch outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
