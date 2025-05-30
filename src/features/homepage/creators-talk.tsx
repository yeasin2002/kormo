/* eslint-disable @next/next/no-img-element */

import React from "react";

export const CreatorsTalk = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex  gap-12 items-center">
        <div className="flex justify-center lg:justify-start w-full">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/87494463?v=4"
              alt="Jay Clouse - Creator coach and founder"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover border-4 border-border shadow-lg"
            />
          </div>
        </div>

        <div>
          <div className="text-6xl text-primary font-bold leading-none">“</div>
          <blockquote className="text-2xl lg:text-3xl font-bold leading-tight text-foreground">
            If {`you're`} trying to tie audience growth, revenue growth, and
            email together, Kit is the best way for you to build that flywheel
            for your creator business.
          </blockquote>

          <div className="space-y-1 pt-3">
            <div className="text-xl font-bold text-foreground">
              Md Kawsar Islam Yeasin
            </div>
            <div className="text-lg text-muted-foreground">
              Creator & Maintainer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
