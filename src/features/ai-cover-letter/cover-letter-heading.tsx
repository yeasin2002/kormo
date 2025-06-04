import Link from "next/link";
import React from "react";

export const CoverLetterHeading = () => {
  return (
    <header className="border-b-2 border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-full" />
            </div>
            <span className="text-xl font-bold">TechJobs</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/jobs"
              className="text-foreground hover:text-yellow-500 font-medium transition-colors"
            >
              Jobs
            </Link>
            <Link
              href="/login"
              className="text-foreground hover:text-yellow-500 font-medium transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
