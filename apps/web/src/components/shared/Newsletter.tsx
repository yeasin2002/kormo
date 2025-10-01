import { ArrowRight } from "lucide-react";
import { Button, Text } from "../retroui";
import { Input } from "../retroui/Input";

export const Newsletter = () => {
	return (
		<div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-end">
			<Text
				as={"h2"}
				className="mb-4 font-bold text-3xl text-black lg:text-4xl"
			>
				Stay in the <span className="underline">loop</span>
			</Text>
			<p className="mb-8 max-w-2xl font-sans text-black/80 text-lg">
				Get the latest updates, design tips, and exclusive templates delivered
				straight to your inbox.
			</p>
			<div className="flex max-w-md flex-col gap-4 sm:flex-row">
				<Input
					type="email"
					placeholder="Enter your email"
					className="flex-1 rounded-lg border-2 border-black bg-white px-4 py-3 text-black focus:ring-2 focus:ring-black"
				/>
				<Button className="flex items-center space-x-2 rounded-lg border-2 border-black bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800">
					<span>Subscribe</span>
					<ArrowRight className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
};
