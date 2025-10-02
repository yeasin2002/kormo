"use client";

import { Nav } from "@/components/shared";
import {
	CompanyLogos,
	EarningCards,
	FloatingElements,
	JobStateCard,
	JobTaskCard,
	NotificationCard,
	ProfileCard,
	SecureLogin,
} from "@/features/auth/auth-floating-cards";

export default function LoginPage({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative flex min-h-screen flex-col justify-center overflow-x-hidden bg-background text-foreground">
			<Nav />
			<div>{children}</div>

			<div className="hidden overflow-y-hidden lg:block">
				<EarningCards />
				<JobStateCard />
				<ProfileCard />
				<JobTaskCard />
				<NotificationCard />
				<CompanyLogos />
				<FloatingElements />
				<SecureLogin />
			</div>
		</div>
	);
}

{
	/* Decorative Elements */
}
// <div className="absolute top-10 left-10 text-black/20">
//   <Sparkles className="w-16 h-16" />
// </div>
// <div className="absolute top-32 right-20 text-black/20">
//   <Sparkles className="w-12 h-12" />
// </div>
// <div className="absolute bottom-20 left-16 text-black/20">
//   <Sparkles className="w-20 h-20" />
// </div>
