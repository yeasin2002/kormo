'use client';

import defaultNotFoundImg from '@/assets/avatar-not-found.png';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { buttonVariants } from '../../retroui/Button';
import { menuListForTools } from './menu.data';
import { NavItems } from './nav-items';

import { Avatar } from '@/components/retroui';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon, Github, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const NavLarge = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  return (
    <>
      <div className="hidden space-x-5 lg:block">
        <Link
          href="/bd-tech-companies"
          className="group cursor-pointer font-sans font-bold outline-none focus:outline-none"
        >
          Tech Companies 🇧🇩
        </Link>
        <NavItems name="Tools" items={menuListForTools} />
      </div>

      <div className="hidden items-center gap-x-2 lg:flex">
        {isPending ? null : session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto cursor-pointer p-0 ring-0 ring-transparent ring-offset-0 outline-none hover:bg-transparent focus:outline-none"
              >
                <Avatar className="size-10">
                  <AvatarImage
                    src={session.user?.image || defaultNotFoundImg.src}
                    alt="Profile image"
                    className="object-cover"
                  />
                  <AvatarFallback>{session.user?.name}</AvatarFallback>
                </Avatar>
                <ChevronDownIcon size={16} className="opacity-60" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push('/profile')} className="cursor-pointer">
                <User className="size-4" />
                <span>Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  authClient.signOut();
                  router.push('/');
                }}
              >
                <LogOut className="size-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link
              href={'https://github.com/yeasin2002/kormo-setu'}
              target="_blank"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
                className: 'flex items-center gap-x-2 py-2',
              })}
            >
              <Github className="size-4" />
              <span>Star on Github</span>
            </Link>

            <Link
              href={'/login'}
              className={buttonVariants({
                variant: 'default',
                size: 'sm',
                className: 'flex items-center py-2',
              })}
            >
              <span>Login</span>
            </Link>
          </>
        )}
      </div>
    </>
  );
};
