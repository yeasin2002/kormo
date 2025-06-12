import {
  JobStateAndSkills,
  ProfileCompletion,
  ProfileDetails,
  ProfileHeader,
  ProfileNav,
  QuickActions,
  RecentActivity,
  SavedJobs,
} from '@/features/profile';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return null;
  return (
    <div>
      <div className="bg-background text-foreground min-h-screen">
        <ProfileNav />

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <div className="mx-auto max-w-7xl">
            <ProfileHeader />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-1">
                <ProfileDetails user={session.user} />
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
