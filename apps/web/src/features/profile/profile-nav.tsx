import Link from "next/link";

export const ProfileNav = () => {
	return (
		<header className="border-border border-b-2 bg-card">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3">
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
							<div className="h-4 w-4 rounded-full bg-background" />
						</div>
						<span className="font-bold text-xl">TechJobs</span>
					</Link>

					{/* Navigation */}
					<div className="hidden items-center space-x-8 md:flex">
						<Link
							href="/jobs"
							className="font-medium text-foreground transition-colors hover:text-yellow-500"
						>
							Jobs
						</Link>
						<Link
							href="/cover-letter-generator"
							className="font-medium text-foreground transition-colors hover:text-yellow-500"
						>
							Cover Letter
						</Link>
						{/* <ThemeToggle /> */}
					</div>
				</div>
			</div>
		</header>
	);
};
