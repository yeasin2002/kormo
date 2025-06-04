import { Sparkles, Zap } from "lucide-react";
import React from "react";

export const DecorativeElements = () => {
  return (
    <>
      <div className="absolute top-40 left-10 text-foreground opacity-20">
        <Sparkles className="w-16 h-16" />
      </div>
      <div className="absolute bottom-40 right-10 text-yellow-500 opacity-30">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute top-1/3 right-20 text-purple-500 opacity-20">
        <Zap className="w-20 h-20" />
      </div>
    </>
  );
};
