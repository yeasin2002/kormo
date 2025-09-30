import { Sparkles } from "lucide-react";
import Image from "next/image";
import starIcon from "@/assets/star.svg";

export const SparklesStars = () => {
	return (
		<div>
			<div className="absolute top-20 left-20 text-foreground opacity-60">
				<Image src={starIcon} alt="Star" className="h-8 w-8" />
			</div>
			<div className="absolute top-32 left-32 text-yellow-500">
				<Sparkles className="h-6 w-6" />
			</div>
			<div className="absolute right-32 bottom-40 text-yellow-500">
				<Image src={starIcon} alt="Star" className="h-8 w-8" />
			</div>
			<div className="absolute right-20 bottom-52 text-foreground opacity-60">
				<Sparkles className="h-8 w-8 text-yellow-500" />
			</div>
		</div>
	);
};
