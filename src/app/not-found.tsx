"use client";

import { Button, buttonVariants } from "@/components/retroui";
import { cn } from "@/lib/utils";

import { Home } from "iconoir-react";
import { AlertTriangle, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className=" relative overflow-hidden">
      {/* Decorative Stars */}
      <div>
        <div className="absolute top-20 left-20 text-foreground opacity-40">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-32 left-32 text-yellow-500">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-40 right-32 text-yellow-500">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-52 right-20 text-foreground opacity-40">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 left-10 text-red-400 opacity-30">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <div className="absolute top-1/3 right-16 text-blue-400 opacity-30">
          <AlertTriangle className="w-8 h-8" />
        </div>
      </div>

      {/* Main 404 Content */}
      <div className="container mx-auto px-6 py-16 lg:py-24 ">
        <div className="text-center max-w-4xl mx-auto items-center justify-center flex  flex-col">
          <div className="mb-12 relative">
            <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none text-foreground opacity-20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-yellow-400 text-black px-8 py-4 rounded-2xl border-4 border-black shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-bold">Oops!</span>
              </div>
            </div>
          </div>

          <div className="mb-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-head">
              Page ot <span className="text-yellow-500">Found!</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans">
              Looks like this page decided to take a vacation! {`Don't`} worry,
              even the best websites have pages that wander off sometimes.
              {`Let's`} get you back on track.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={() => router.back()}
              className={cn(
                "flex items-center space-x-2",
                `bg-background text-foreground border-2 border-foreground hover:bg-muted font-semibold rounded-lg shadow-sm`
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back </span>
            </Button>

            <Link
              href="/"
              className={cn(
                buttonVariants(),
                "flex items-center space-x-2",
                `bg-background text-foreground border-2 border-foreground hover:bg-muted font-semibold rounded-lg shadow-sm`
              )}
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Fun Error Code */}
      <div className="fixed bottom-6 left-6 bg-red-400 text-black px-4 py-2 rounded-lg border-2 border-black shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <span className="text-sm font-bold">Error Code: LOST_IN_SPACE</span>
      </div>
    </div>
  );
}
