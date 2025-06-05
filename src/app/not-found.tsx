'use client';

import { Button, buttonVariants } from '@/components/retroui';
import { NavBar } from '@/components/shared';
import { cn } from '@/lib/utils';

import { AlertTriangle, ArrowLeft, Home, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden">
      <NavBar />
      {/* Decorative Stars */}
      <div>
        <div className="text-foreground absolute top-20 left-20 opacity-40">
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute top-32 left-32 text-yellow-500">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="absolute right-32 bottom-40 text-yellow-500">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="text-foreground absolute right-20 bottom-52 opacity-40">
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute top-1/2 left-10 text-red-400 opacity-30">
          <AlertTriangle className="h-10 w-10" />
        </div>
        <div className="absolute top-1/3 right-16 text-blue-400 opacity-30">
          <AlertTriangle className="h-8 w-8" />
        </div>
      </div>

      {/* Main 404 Content */}
      <div className="container mx-auto px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
          <div className="relative mb-12">
            <div className="text-foreground text-[12rem] leading-none font-black opacity-20 select-none md:text-[16rem] lg:text-[20rem]">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="-rotate-3 transform rounded-2xl border-4 border-black bg-yellow-400 px-8 py-4 text-black shadow-xl transition-transform duration-300 hover:rotate-0">
                <span className="text-2xl font-bold md:text-3xl">Oops!</span>
              </div>
            </div>
          </div>

          <div className="mb-12 space-y-6">
            <h1 className="font-head text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Page Not <span className="text-yellow-500">Found!</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl font-sans text-lg leading-relaxed md:text-xl">
              Looks like this page decided to take a vacation! {`Don't`} worry, even the best
              websites have pages that wander off sometimes.
              {`Let's`} get you back on track.
            </p>
          </div>

          <div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => router.back()}
              className={
                'flex items-center gap-x-2 rounded-lg border-2 border-black bg-yellow-400 px-8 py-4 text-lg font-semibold text-black shadow-md hover:bg-yellow-500'
              }
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back </span>
            </Button>

            <Link
              href={'/'}
              className={cn(
                buttonVariants(),
                'bg-background text-foreground border-foreground hover:bg-muted flex items-center gap-x-2 rounded-lg border-2 px-8 py-4 text-lg font-semibold shadow-md',
              )}
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* <div className="flex items-center justify-center space-x-4">
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
          </div> */}
        </div>
      </div>

      {/* Fun Error Code */}
      <div className="fixed bottom-6 left-6 rotate-3 transform rounded-lg border-2 border-black bg-red-400 px-4 py-2 text-black shadow-lg transition-transform duration-300 hover:rotate-0">
        <span className="text-sm font-bold">Error Code: LOST_IN_SPACE</span>
      </div>
    </div>
  );
}
