import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../retroui";
import { Input } from "../retroui/Input";

export const Newsletter = () => {
  return (
    <div className="bg-yellow-400 rounded-2xl p-8 lg:p-12 border-4 border-black shadow-xl mb-16 relative overflow-hidden">
      <div className="relative z-10 text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          Stay in the <span className="underline">loop</span>
        </h3>
        <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
          Get the latest updates, design tips, and exclusive templates delivered
          straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white border-2 border-black rounded-lg px-4 py-3 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-black"
          />
          <Button className="bg-black text-white hover:bg-gray-800 border-2 border-black rounded-lg px-6 py-3 font-semibold flex items-center space-x-2">
            <span>Subscribe</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 text-black/20">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-4 left-4 text-black/20">
        <Sparkles className="w-6 h-6" />
      </div>
    </div>
  );
};
