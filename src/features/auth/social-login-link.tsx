'use client';

import { Button } from '@/components/ui/button';
import { Github, Google } from 'iconoir-react';
import Link from 'next/link';
type Props = {
  isLoginPage?: boolean;
};

export const SocialLoginLink = ({ isLoginPage = false }: Props) => {
  return (
    <>
      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="border-border flex-1 border-t-2"></div>
        <span className="text-muted-foreground bg-card px-4 text-sm font-bold">OR</span>
        <div className="border-border flex-1 border-t-2"></div>
      </div>

      {/* Social Login */}
      <div className="space-y-3">
        <Button
          variant="outline"
          size="lg"
          className="bg-background text-foreground border-border hover:bg-muted flex w-full items-center justify-center space-x-2 rounded-lg border-2 py-3 font-semibold shadow-sm"
        >
          <Github className="h-5 w-5" />
          <span>Continue with GitHub</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="bg-background text-foreground border-border hover:bg-muted flex w-full items-center justify-center space-x-2 rounded-lg border-2 py-3 font-semibold shadow-sm"
        >
          <Google />
          <span>Continue with Google</span>
        </Button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground space-x-2">
          <span>{isLoginPage ? "Don't have an account?" : 'Already have an account?'}</span>
          <br className="md:hidden" />
          <Link
            href={isLoginPage ? '/register' : '/login'}
            className="font-bold text-yellow-600 transition-colors hover:text-yellow-500"
          >
            {isLoginPage ? 'Sign up for free' : 'login instead'}
          </Link>
        </p>
      </div>
    </>
  );
};
