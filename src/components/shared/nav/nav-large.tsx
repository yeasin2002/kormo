import { Github } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../../retroui/Button";
import { ThemeToggle } from "../theme-toggle";
import { menuListForTools } from "./menu.data";
import { NavItems } from "./nav-items";

export const NavLarge = () => {
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

      <div className="hidden lg:flex items-center space-x-3">
        <Link
          target="_blank"
          href="https://github.com/yeasin2002/tech-job-bd"
          className={buttonVariants({
            variant: "default",
            size: "sm",
            className: "flex items-center space-x-2 py-2",
          })}
        >
          <Github className="w-4 h-4" />
          <span>Star on GitHub</span>
        </Link>
        <ThemeToggle />
      </div>
    </>
  );
};
