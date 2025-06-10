import Link from 'next/link';

export const ProfileNav = () => {
  return (
    <header className="border-border bg-card border-b-2">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-full">
              <div className="bg-background h-4 w-4 rounded-full" />
            </div>
            <span className="text-xl font-bold">TechJobs</span>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/jobs"
              className="text-foreground font-medium transition-colors hover:text-yellow-500"
            >
              Jobs
            </Link>
            <Link
              href="/cover-letter-generator"
              className="text-foreground font-medium transition-colors hover:text-yellow-500"
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
