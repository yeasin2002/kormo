import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../retroui';
import { Input } from '../retroui/Input';

export const Newsletter = () => {
  return (
    <div className="relative mb-16 overflow-hidden rounded-2xl border-4 border-black bg-yellow-400 p-8 shadow-xl lg:p-12">
      <div className="relative z-10 text-center">
        <h3 className="mb-4 text-3xl font-bold text-black lg:text-4xl">
          Stay in the <span className="underline">loop</span>
        </h3>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-black/80">
          Get the latest updates, design tips, and exclusive templates delivered straight to your
          inbox.
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border-2 border-black bg-white px-4 py-3 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-black"
          />
          <Button className="flex items-center space-x-2 rounded-lg border-2 border-black bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800">
            <span>Subscribe</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 text-black/20">
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="absolute bottom-4 left-4 text-black/20">
        <Sparkles className="h-6 w-6" />
      </div>
    </div>
  );
};
