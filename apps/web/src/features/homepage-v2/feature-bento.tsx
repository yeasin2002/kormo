import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BentoGridIcon } from "@/components/icons";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/ui";

const featureList = [
	{
		name: "AI Cover Letter Generator",
		description:
			"Generate a professional, high-quality cover letter for your job application with just a few clicks. Our AI-powered tool will analyze your resume and the job description to create a tailored cover letter that highlights your relevant skills and experience.",
		href: "",
	},
	{
		name: "Image to Text extractor",
		description:
			"Extract text from images quickly and easily. Perfect for resumes, invoices, receipts, and any other documents. Our Image to Text extractor uses AI to accurately extract text from images, saving you time and effort.",
		href: "",
	},
	{
		name: "README Generator",
		description:
			"Generate a high-quality README for your project with just a few clicks. Our README generator uses AI to create a professional, easy-to-read README that includes all the necessary information about your project, such as how to use it, how to contribute, and how to report issues.",
		href: "",
	},
];

export const FeatureBento = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center border-[rgba(55,50,47,0.12)] border-b">
			{/* Header Section */}
			<div className="flex items-center justify-center gap-6 self-stretch border-[rgba(55,50,47,0.12)] border-b px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:w-[1060px] lg:max-w-[1060px] lg:px-0">
				<div className="flex w-full max-w-[616px] flex-col items-center justify-start gap-3 overflow-hidden rounded-lg px-4 py-4  sm:gap-4 sm:px-6 sm:py-5 lg:w-[616px]">
					<Badge icon={<BentoGridIcon />} text="Bento grid" />
					<div className="flex w-full max-w-[598.06px] flex-col justify-center text-center font-sans font-semibold text-[#49423D] text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl md:leading-[60px] lg:w-[598.06px] lg:text-5xl">
						Available Tools For You
					</div>
					<div className="self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
						Choose the tools that best fit your needs and start using them right
						away.
					</div>
				</div>
			</div>

			{/* Bento Grid Content */}
			<div className="flex items-start justify-center self-stretch">
				<div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
					{/* Left decorative pattern */}
					<div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
						{Array.from({ length: 200 }).map(() => (
							<div
								key={crypto.randomUUID()}
								className="h-3 origin-top-left rotate-[-45deg] self-stretch outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
							/>
						))}
					</div>
				</div>

				<div className="grid flex-1 grid-cols-1 gap-0 border-[rgba(55,50,47,0.12)] border-r border-l md:grid-cols-2">
					{featureList.map((items) => {
						return (
							<div
								key={items.name}
								className="flex flex-col items-start justify-start gap-4 border-[rgba(55,50,47,0.12)] border-r-0 border-b p-4 sm:gap-6 sm:p-6 md:border-r md:p-8 lg:p-12"
							>
								<div className="flex flex-col gap-2">
									<h3 className="font-sans font-semibold text-[#37322F] text-lg leading-tight sm:text-xl">
										{items.name}
									</h3>
									<p className="font-normal font-sans text-[#605A57] text-sm leading-relaxed ">
										{items.description}
									</p>
								</div>
								<Link href={items.href}>
									<Button className=" rounded-full" type="button">
										<span>Try this </span>
										<Link href={items.href}>
											<ArrowRight />
										</Link>
									</Button>
								</Link>
								<div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent" />
							</div>
						);
					})}
				</div>

				<div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12">
					{/* Right decorative pattern */}
					<div className="absolute top-[-120px] left-[-40px] flex w-[120px] flex-col items-start justify-start sm:left-[-50px] sm:w-[140px] md:left-[-58px] md:w-[162px]">
						{Array.from({ length: 200 }).map(() => (
							<div
								key={crypto.randomUUID()}
								className="h-3 origin-top-left rotate-[-45deg] self-stretch outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px] sm:h-4"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
