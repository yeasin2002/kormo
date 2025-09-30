'use client';

import { buttonVariants } from '@/components/retroui';
import {
  CompanyLogos,
  EarningCards,
  FloatingElements,
  JobStateCard,
  JobTaskCard,
  NotificationCard,
  ProfileCard,
  SecureLogin,
} from '@/features/auth/auth-floating-cards';
import { cn } from '@/lib/utils';
import { Home } from 'iconoir-react';
import Link from 'next/link';

export default function LoginPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-foreground bg-background relative flex min-h-screen flex-col justify-center overflow-x-hidden">
      <div>{children}</div>

      <Link
        href={'/'}
        className={cn(
          buttonVariants(),
          'bg-background text-foreground border-foreground hover:bg-muted flex items-center gap-x-2 border-2 text-lg font-semibold shadow-md',
          `absolute top-2 left-4 rounded-full`,
        )}
      >
        <Home className="h-4 w-4" />
        <span>Go to Home</span>
      </Link>

      <div className="hidden overflow-y-hidden lg:block">
        <EarningCards />
        <JobStateCard />
        <ProfileCard />
        <JobTaskCard />
        <NotificationCard />
        <CompanyLogos />
        <FloatingElements />
        <SecureLogin />
      </div>
    </div>
  );
}

{
  /* Decorative Elements */
}
// <div className="absolute top-10 left-10 text-black/20">
//   <Sparkles className="w-16 h-16" />
// </div>
// <div className="absolute top-32 right-20 text-black/20">
//   <Sparkles className="w-12 h-12" />
// </div>
// <div className="absolute bottom-20 left-16 text-black/20">
//   <Sparkles className="w-20 h-20" />
// </div>
