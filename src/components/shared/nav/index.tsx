import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { NavLarge } from "./nav-large";



export const NavBar = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8 container mx-auto">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div>
        <span className="text-xl font-bold font-head">Tech Jobs</span>
      </Link>

      <NavLarge />
      <MobileNav />
    </nav>
  );
};
