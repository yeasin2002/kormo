import { Github } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../retroui/Button";
import { ThemeToggle } from "./theme-toggle";

const menuList = [
  {
    name: "Onsite Jobs 🇧🇩",
    href: "/onsite-jobs",
  },
  {
    name: "Remote Jobs",
    href: "#",
  },
  {
    name: "Freelancing",
    href: "#",
  },
];

export const NavBar = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8 container mx-auto">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div>
        <span className="text-xl font-bold font-head">Tech Jobs</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {menuList.map((item, index) => (
          <Link
            key={index}
            href={{
              pathname: item.href,
            }}
            className=" transition-colors font-sans"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-3">
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
    </nav>
  );
};
