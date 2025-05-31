import { Github } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../../retroui/Button";
import { ThemeToggle } from "../theme-toggle";
import { menuListForResource, menuListForTools } from "./menu.data";
import { NavItems } from "./nav-items";

export const NavLarge = () => {
  return (
    <>
      <div className="space-x-3 hidden lg:block">
        <NavItems name="Resource" items={menuListForResource} />
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
