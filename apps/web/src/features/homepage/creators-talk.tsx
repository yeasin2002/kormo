/* eslint-disable @next/next/no-img-element */

import React from 'react';

export const CreatorsTalk = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center gap-12">
        <div className="flex w-full justify-center lg:justify-start">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/87494463?v=4"
              alt="Jay Clouse - Creator coach and founder"
              className="border-border h-64 w-64 rounded-2xl border-4 object-cover shadow-lg lg:h-80 lg:w-80"
            />
          </div>
        </div>

        <div>
          <div className="text-primary text-6xl leading-none font-bold">“</div>
          <blockquote className="text-foreground text-2xl leading-tight font-bold lg:text-3xl">
            If {`you're`} trying to tie audience growth, revenue growth, and email together, Kit is
            the best way for you to build that flywheel for your creator business.
          </blockquote>

          <div className="space-y-1 pt-3">
            <div className="text-foreground text-xl font-bold">Md Kawsar Islam Yeasin</div>
            <div className="text-muted-foreground text-lg">Creator & Maintainer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
