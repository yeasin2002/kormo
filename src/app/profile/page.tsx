import { Sparkles } from 'lucide-react';

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

export default function ProfilePage() {
  return (
    <div>
      <div className="bg-background text-foreground min-h-screen">
        {/* Header */}
        <ProfileNav />

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <div className="mx-auto max-w-7xl">
            <ProfileHeader />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-1">
                <ProfileDetails />
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

        {/* Floating Achievement */}
        <div className="fixed right-6 bottom-6 hidden rotate-3 transform rounded-lg border-2 border-black bg-yellow-400 px-4 py-2 text-black shadow-lg transition-transform duration-300 hover:rotate-0 lg:block">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold">Profile 85% Complete!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
