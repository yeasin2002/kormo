import { Button } from "@/components/retroui";

export const FinanceCto = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary rounded-3xl p-8 lg:p-12 border-4 border-border shadow-xl relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Ready. Set. Send.
                </h2>
                <p className="text-lg text-black/80 leading-relaxed">
                  Kit flexes with you as you grow.{" "}
                  <span className="font-semibold text-black">
                    Manage up to 10,000 subscribers for free
                  </span>
                  , or upgrade to grow an unlimited list and access all
                  functionality.
                </p>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 text-lg rounded-lg shadow-md border-2 border-black"
                >
                  See all plans
                </Button>
              </div>

              {/* 3D Illustration */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Paper Airplane */}
                  <div className="relative z-20">
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      className="text-white drop-shadow-lg"
                      fill="currentColor"
                    >
                      <path d="M20 60L100 20L80 60L100 100L20 60Z" />
                      <path d="M20 60L80 60L100 100L20 60Z" opacity="0.7" />
                    </svg>
                  </div>

                  {/* Target Rings */}
                  <div className="absolute -top-8 -right-8 z-10">
                    <div className="w-32 h-32 rounded-full bg-orange-500 opacity-90"></div>
                    <div className="absolute top-2 left-2 w-28 h-28 rounded-full bg-orange-400 opacity-80"></div>
                    <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-orange-300 opacity-70"></div>
                  </div>
                </div>
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
