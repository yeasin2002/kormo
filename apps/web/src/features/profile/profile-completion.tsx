import { AlertCircle, CheckCircle } from 'lucide-react';

const userData = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  title: 'Senior Frontend Developer',
  joinDate: 'January 2024',
  avatar: '/placeholder.svg?height=120&width=120',
  bio: 'Passionate frontend developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and creating exceptional user experiences.',
  skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL', 'AWS', 'Figma'],
  experience: '5+ years',
  hourlyRate: '$85',
  availability: 'Available',
  profileCompletion: 85,
};

export const ProfileCompletion = () => {
  return (
    <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold">Profile Completion</h3>
        <span className="text-2xl font-black text-purple-500">{userData.profileCompletion}%</span>
      </div>
      <div className="mb-4 h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-purple-500 transition-all duration-300"
          style={{ width: `${userData.profileCompletion}%` }}
        ></div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Basic information completed</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Skills and experience added</span>
        </div>
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-4 w-4 text-yellow-500" />
          <span>Add portfolio projects</span>
        </div>
      </div>
    </div>
  );
};
