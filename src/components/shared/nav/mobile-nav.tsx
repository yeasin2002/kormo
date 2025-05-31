import { buttonVariants } from "@/components/retroui";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github } from "iconoir-react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";
import { menuListForResource, menuListForTools } from "./menu.data";
const menu = [
  {
    name: "Resource",
    items: menuListForResource,
  },
  {
    name: "Tools",
    items: menuListForTools,
  },
];

export const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="cursor-pointer lg:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent className="px-2">
          <SheetHeader>
            <div className="flex flex-col gap-4 justify-between h-full mt-4">
              <div>
                {menu.map((item) => (
                  <div key={item.name}>
                    <SheetTitle className="font-head">{item.name}</SheetTitle>
                    <div className="space-y-2">
                      {item.items.map((item) => (
                        <Link
                          href={{ pathname: item.href }}
                          key={item.name}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-4 h-4 bg-black rounded-full" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 mt-4">
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
                <ThemeSwitcher />
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
