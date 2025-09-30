import Image from "next/image";
import bkashLogo from "@/assets/BKash-logo.svg";
import { Button } from "@/components/retroui";

export const FinanceCto = () => {
	return (
		<div className="py-20">
			<div className="container mx-auto px-6">
				<div className="mx-auto max-w-6xl">
					<div className="relative overflow-hidden rounded-3xl border-4 border-border bg-primary p-8 shadow-xl lg:p-12">
						<div className="relative z-10 flex items-center gap-8">
							<div className="w-2/3 space-y-6">
								<h2 className="font-bold font-head text-4xl text-black leading-tight lg:text-5xl">
									Financial Contribution
								</h2>
								<p className="text-black/80 text-lg leading-relaxed">
									This job finding platform is open source. If you find our
									services valuable, please consider making a donation to
									support our ongoing efforts. Your contributions help us
									maintain and improve the platform for everyone.
								</p>
								<Button
									size="lg"
									className="rounded-lg border-2 border-black bg-black px-8 py-4 font-semibold text-lg text-white shadow-md hover:bg-gray-800"
								>
									Know More
								</Button>
							</div>

							<div className="flex items-center justify-center">
								<Image
									src={bkashLogo}
									alt="Paper Airplane"
									className="relative z-20 h-32 w-32 lg:h-72 lg:w-40"
								/>
							</div>
						</div>

						{/* Background Pattern */}
						<div className="absolute inset-0 opacity-10">
							<div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-black" />
							<div className="absolute top-12 right-8 h-6 w-6 rounded-full bg-black" />
							<div className="absolute bottom-8 left-12 h-4 w-4 rounded-full bg-black" />
							<div className="absolute right-4 bottom-4 h-10 w-10 rounded-full bg-black" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
