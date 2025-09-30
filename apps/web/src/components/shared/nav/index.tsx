import Link from "next/link";
import { Logo } from "../logo";
import { MobileNav } from "./mobile-nav";
import { NavLarge } from "./nav-large";

export const NavBar = () => {
	return (
		<nav className="container relative z-10 mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
			<Link href="/" className="flex items-center space-x-2">
				<Logo />
			</Link>

			<NavLarge />
			<MobileNav />
		</nav>
	);
};
