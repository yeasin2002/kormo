import { Sparkles, Zap } from 'lucide-react';
import React from 'react';

export const DecorativeElements = () => {
  return (
    <>
      <div className="text-foreground absolute top-40 left-10 opacity-20">
        <Sparkles className="h-16 w-16" />
      </div>
      <div className="absolute right-10 bottom-40 text-yellow-500 opacity-30">
        <Sparkles className="h-12 w-12" />
      </div>
      <div className="absolute top-1/3 right-20 text-purple-500 opacity-20">
        <Zap className="h-20 w-20" />
      </div>
    </>
  );
};
