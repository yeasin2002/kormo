import { buttonVariants } from '@/components/retroui';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Github } from 'iconoir-react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { ThemeSwitcher } from '../theme-switcher';
import { menuListForResource, menuListForTools } from './menu.data';

const menu = [
  { name: 'Resource', items: menuListForResource },
  { name: 'Tools', items: menuListForTools },
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
            <div className="mt-4 flex h-full flex-col justify-between gap-4">
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
                          <div className="h-4 w-4 rounded-full bg-black" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center space-x-3">
                <Link
                  target="_blank"
                  href="https://github.com/yeasin2002/tech-job-bd"
                  className={buttonVariants({
                    variant: 'default',
                    size: 'sm',
                    className: 'flex items-center space-x-2 py-2',
                  })}
                >
                  <Github className="h-4 w-4" />
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
