"use client";

import {
	JobStateAndSkills,
	ProfileCompletion,
	ProfileDetails,
	ProfileHeader,
	ProfileNav,
	QuickActions,
	RecentActivity,
	SavedJobs,
} from "@/features/profile";
import { authClient } from "@/lib/auth-client";

const User = {
    id: "Yeasin", 
    createdAt: new Date(), 
    updatedAt: new Date(), 
    email: "mdzZ7@example.com", 
    emailVerified: true, 
    name: "Yeasin", 
    image: ""
}


export default async function ProfilePage() {
	const session = await authClient.getSession();
	if (!session) return null;
	return (
		<div>
			<div className="min-h-screen bg-background text-foreground">
				<ProfileNav />

				{/* Main Content */}
				<main className="container mx-auto px-6 py-8">
					<div className="mx-auto max-w-7xl">
						<ProfileHeader />

						<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
							<div className="space-y-6 lg:col-span-1">

					<ProfileDetails user={User } />
								<ProfileCompletion />
								<QuickActions />
							</div>

							{/* Right Column - Dashboard Content */}
							<div className="space-y-6 lg:col-span-2">
								<JobStateAndSkills />
								<RecentActivity />
								<SavedJobs />
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
