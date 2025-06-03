import starIcon from "@/assets/star.svg";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export const SparklesStars = () => {
  return (
    <div>
      <div className="absolute top-20 left-20 text-foreground opacity-60">
        <Image src={starIcon} alt="Star" className="w-8 h-8" />
      </div>
      <div className="absolute top-32 left-32 text-yellow-500">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 right-32 text-yellow-500">
        <Image src={starIcon} alt="Star" className="w-8 h-8" />
      </div>
      <div className="absolute bottom-52 right-20 text-foreground opacity-60">
        <Sparkles className="w-8 h-8 text-yellow-500" />
      </div>
    </div>
  );
};
