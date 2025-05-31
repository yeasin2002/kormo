import bkashLogo from "@/assets/BKash-logo.svg";
import { Button } from "@/components/retroui";
import Image from "next/image";

export const FinanceCto = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary rounded-3xl p-8 lg:p-12 border-4 border-border shadow-xl relative overflow-hidden">
            <div className="flex  gap-8 items-center relative z-10">
              <div className="space-y-6 w-2/3">
                <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight font-head">
                  Financial Contribution
                </h2>
                <p className="text-lg text-black/80 leading-relaxed">
                  This job finding platform is open source. If you find our
                  services valuable, please consider making a donation to
                  support our ongoing efforts. Your contributions help us
                  maintain and improve the platform for everyone.
                </p>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 text-lg rounded-lg shadow-md border-2 border-black"
                >
                  Know More
                </Button>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  src={bkashLogo}
                  alt="Paper Airplane"
                  className="w-32 h-32 lg:w-40 lg:h-72 relative z-20"
                />
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 bg-black rounded-full"></div>
              <div className="absolute top-12 right-8 w-6 h-6 bg-black rounded-full"></div>
              <div className="absolute bottom-8 left-12 w-4 h-4 bg-black rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
