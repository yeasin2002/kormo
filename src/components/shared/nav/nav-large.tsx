import Link from "next/link";
import { buttonVariants } from "../../retroui/Button";
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

      <div className="hidden lg:flex items-center ">
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
        {/* <ThemeToggle /> */}
      </div>
    </>
  );
};
