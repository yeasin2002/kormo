/** biome-ignore-all lint/performance/noImgElement: <> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { Nav } from "@/components/shared";
import CTASection from "@/features/homepage-v2/cta-section";
import DocumentationSection from "@/features/homepage-v2/documentation-section";
import FAQSection from "@/features/homepage-v2/faq-section";
import { FeatureBento } from "@/features/homepage-v2/feature-bento";

import FooterSection from "@/features/homepage-v2/footer-section";
import { Hero } from "@/features/homepage-v2/hero";
import PricingSection from "@/features/homepage-v2/pricing-section";
import { SocialProof } from "@/features/homepage-v2/social-proof";
import TestimonialsSection from "@/features/homepage-v2/testimonials-section";

export default function LandingPage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-[#F7F5F3]">
			<div className="relative flex w-full flex-col items-center justify-start">
				{/* Main container with proper margins */}
				<div className="relative flex min-h-screen w-full max-w-none flex-col items-start justify-start px-4 sm:px-6 md:px-8 lg:w-[1060px] lg:max-w-[1060px] lg:px-0">
					{/* Left vertical line */}
					<div className="absolute top-0 left-4 z-0 h-full w-[1px] bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] sm:left-6 md:left-8 lg:left-0" />

					{/* Right vertical line */}
					<div className="absolute top-0 right-4 z-0 h-full w-[1px] bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] sm:right-6 md:right-8 lg:right-0" />

					<div className="relative z-10 flex flex-col items-center justify-center gap-4 self-stretch overflow-hidden border-[rgba(55,50,47,0.06)] border-b pt-[9px] sm:gap-6 md:gap-8 lg:gap-[66px]">
						<Nav />

						<div className="flex w-full flex-col items-center justify-start px-2 pt-16 pr-0 pb-8 pl-0 sm:px-4 sm:pt-20 sm:pr-0 sm:pb-12 sm:pl-0 md:px-8 md:pt-24 md:pb-16 lg:px-0 lg:pt-[216px]">
							<Hero />
							<SocialProof />
							<FeatureBento />
							<DocumentationSection />
							<TestimonialsSection />
							<PricingSection />
							<FAQSection />
							<CTASection />
							<FooterSection />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// FeatureCard component definition inline to fix import error
