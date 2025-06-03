"use client";

import { Button } from "@/components/ui/button";
import { Github, Google } from "iconoir-react";
import Link from "next/link";
type Props = {
  isLoginPage?: boolean;
};

export const SocialLoginLink = ({ isLoginPage = false }: Props) => {
  return (
    <>
      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="flex-1 border-t-2 border-border"></div>
        <span className="px-4 text-sm font-bold text-muted-foreground bg-card">
          OR
        </span>
        <div className="flex-1 border-t-2 border-border"></div>
      </div>

      {/* Social Login */}
      <div className="space-y-3">
        <Button
          variant="outline"
          size="lg"
          className="w-full bg-background text-foreground border-2 border-border hover:bg-muted font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center space-x-2"
        >
          <Github className="w-5 h-5" />
          <span>Continue with GitHub</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full bg-background text-foreground border-2 border-border hover:bg-muted font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center space-x-2"
        >
          <Google />
          <span>Continue with Google</span>
        </Button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground space-x-2">
          <span>
            {isLoginPage
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>
          <Link
            href={isLoginPage ? "/register" : "/login"}
            className="text-yellow-600 hover:text-yellow-500 font-bold transition-colors"
          >
            {isLoginPage ? "Sign up for free" : "login instead"}
          </Link>
        </p>
      </div>
    </>
  );
};
