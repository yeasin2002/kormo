"use client";

import defaultNotFoundImg from "@/assets/avatar-not-found.png";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { buttonVariants } from "../../retroui/Button";
import { menuListForTools } from "./menu.data";
import { NavItems } from "./nav-items";

import { Avatar } from "@/components/retroui";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";

export const NavLarge = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <>
      <div className="space-x-5 hidden lg:block">
        <Link
          href="/bd-tech-companies"
          className="font-bold font-sans outline-none focus:outline-none cursor-pointer group"
        >
          Tech Companies 🇧🇩
        </Link>
        <NavItems name="Tools" items={menuListForTools} />
      </div>

      <div className="hidden lg:flex items-center ">
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto p-0 hover:bg-transparent cursor-pointer outline-none focus:outline-none ring-0 ring-offset-0 ring-transparent"
              >
                <Avatar className="size-10">
                  <AvatarImage
                    src={session.user?.image || defaultNotFoundImg.src}
                    alt="Profile image"
                    className="object-cover"
                  />
                  <AvatarFallback>{session.user?.name}</AvatarFallback>
                </Avatar>
                <ChevronDownIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                <User className="size-4" />
                <span>Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  authClient.signOut();
                  router.push("/");
                }}
              >
                <LogOut className="size-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            href={"/login"}
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "flex items-center py-2",
            })}
          >
            <span>Login</span>
          </Link>
        )}
      </div>
    </>
  );
};
