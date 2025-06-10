'use client';

import { Badge, Button } from '@/components/retroui';
import { useState } from 'react';

import {
  AlertCircle,
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  Edit,
  Eye,
  FileText,
  Heart,
  Mail,
  MapPin,
  Phone,
  Plus,
  Send,
  Settings,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Frontend Developer',
    joinDate: 'January 2024',
    avatar: '/placeholder.svg?height=120&width=120',
    bio: 'Passionate frontend developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and creating exceptional user experiences.',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'GraphQL',
      'AWS',
      'Figma',
    ],
    experience: '5+ years',
    hourlyRate: '$85',
    availability: 'Available',
    profileCompletion: 85,
  };

  const stats = {
    jobsApplied: 24,
    interviews: 8,
    offers: 3,
    coverLettersGenerated: 15,
    profileViews: 142,
    savedJobs: 12,
  };

  const recentActivity = [
    {
      type: 'application',
      company: 'TechCorp',
      position: 'Senior React Developer',
      date: '2 hours ago',
      status: 'pending',
    },
    {
      type: 'interview',
      company: 'StartupXYZ',
      position: 'Frontend Lead',
      date: '1 day ago',
      status: 'scheduled',
    },
    {
      type: 'cover_letter',
      company: 'InnovateLab',
      position: 'UI Developer',
      date: '3 days ago',
      status: 'generated',
    },
    {
      type: 'profile_view',
      company: 'MegaTech',
      position: 'Senior Developer',
      date: '5 days ago',
      status: 'viewed',
    },
  ];

  const savedJobs = [
    {
      company: 'Google',
      position: 'Senior Frontend Engineer',
      location: 'Mountain View, CA',
      salary: '$150k - $200k',
      posted: '2 days ago',
    },
    {
      company: 'Meta',
      position: 'React Developer',
      location: 'Menlo Park, CA',
      salary: '$140k - $180k',
      posted: '1 week ago',
    },
    {
      company: 'Netflix',
      position: 'UI Engineer',
      location: 'Los Gatos, CA',
      salary: '$160k - $210k',
      posted: '3 days ago',
    },
  ];

  return (
    <div>
      <div className="bg-background text-foreground min-h-screen">
        {/* Header */}
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

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-8 flex flex-col items-start justify-between lg:flex-row lg:items-center">
              <div>
                <h1 className="mb-2 text-4xl font-black">
                  Welcome back, <span className="text-purple-500">Sarah!</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Manage your profile and track your job search progress
                </p>
              </div>
              <div className="mt-4 flex space-x-3 lg:mt-0">
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted flex items-center space-x-2 border-2"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Button>
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 border-2 border-black bg-purple-500 text-white hover:bg-purple-600"
                >
                  <Edit className="h-4 w-4" />
                  <span>{isEditing ? 'Save' : 'Edit Profile'}</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Left Column - Profile Info */}
              <div className="space-y-6 lg:col-span-1">
                {/* Profile Card */}
                <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
                  <div className="mb-6 text-center">
                    <div className="relative inline-block">
                      <img
                        src={userData.avatar || '/placeholder.svg'}
                        alt={userData.name}
                        className="border-border mx-auto mb-4 h-24 w-24 rounded-full border-4 shadow-lg"
                      />
                      <div className="absolute -right-1 -bottom-1 h-6 w-6 rounded-full border-2 border-white bg-green-400"></div>
                    </div>
                    <h2 className="mb-1 text-2xl font-bold">{userData.name}</h2>
                    <p className="mb-2 font-semibold text-purple-600">{userData.title}</p>
                    <Badge className="border border-green-200 bg-green-100 text-green-800">
                      {userData.availability}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="text-muted-foreground h-4 w-4" />
                      <span>{userData.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone className="text-muted-foreground h-4 w-4" />
                      <span>{userData.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="text-muted-foreground h-4 w-4" />
                      <span>{userData.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="text-muted-foreground h-4 w-4" />
                      <span>Joined {userData.joinDate}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <DollarSign className="text-muted-foreground h-4 w-4" />
                      <span>{userData.hourlyRate}/hour</span>
                    </div>
                  </div>
                </div>

                {/* Profile Completion */}
                <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold">Profile Completion</h3>
                    <span className="text-2xl font-black text-purple-500">
                      {userData.profileCompletion}%
                    </span>
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

                {/* Quick Actions */}
                <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
                  <h3 className="mb-4 text-lg font-bold">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="border-border hover:bg-muted w-full justify-start border-2"
                    >
                      <Link href="/cover-letter-generator" className="flex items-center space-x-2">
                        <FileText className="h-4 w-4" />
                        <span>Generate Cover Letter</span>
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border hover:bg-muted w-full justify-start border-2"
                    >
                      <Link href="/jobs" className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>Browse Jobs</span>
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border hover:bg-muted w-full justify-start border-2"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download Resume</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column - Dashboard Content */}
              <div className="space-y-6 lg:col-span-2">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                  <div className="border-border rounded-xl border-2 bg-blue-100 p-4 shadow-md dark:bg-blue-900/20">
                    <div className="mb-2 flex items-center justify-between">
                      <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <span className="text-2xl font-black">{stats.jobsApplied}</span>
                    </div>
                    <p className="text-sm font-bold">Jobs Applied</p>
                  </div>
                  <div className="border-border rounded-xl border-2 bg-green-100 p-4 shadow-md dark:bg-green-900/20">
                    <div className="mb-2 flex items-center justify-between">
                      <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                      <span className="text-2xl font-black">{stats.interviews}</span>
                    </div>
                    <p className="text-sm font-bold">Interviews</p>
                  </div>
                  <div className="border-border rounded-xl border-2 bg-yellow-100 p-4 shadow-md dark:bg-yellow-900/20">
                    <div className="mb-2 flex items-center justify-between">
                      <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                      <span className="text-2xl font-black">{stats.offers}</span>
                    </div>
                    <p className="text-sm font-bold">Job Offers</p>
                  </div>
                  <div className="border-border rounded-xl border-2 bg-purple-100 p-4 shadow-md dark:bg-purple-900/20">
                    <div className="mb-2 flex items-center justify-between">
                      <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      <span className="text-2xl font-black">{stats.coverLettersGenerated}</span>
                    </div>
                    <p className="text-sm font-bold">Cover Letters</p>
                  </div>
                  <div className="border-border rounded-xl border-2 bg-orange-100 p-4 shadow-md dark:bg-orange-900/20">
                    <div className="mb-2 flex items-center justify-between">
                      <Eye className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      <span className="text-2xl font-black">{stats.profileViews}</span>
                    </div>
                    <p className="text-sm font-bold">Profile Views</p>
                  </div>
                  <div className="border-border rounded-xl border-2 bg-pink-100 p-4 shadow-md dark:bg-pink-900/20">
                    <div className="mb-2 flex items-center justify-between">
                      <Heart className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                      <span className="text-2xl font-black">{stats.savedJobs}</span>
                    </div>
                    <p className="text-sm font-bold">Saved Jobs</p>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Skills & Technologies</h3>
                    <Button variant="ghost" size="sm">
                      <Plus className="mr-1 h-4 w-4" />
                      Add Skill
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="border border-purple-200 bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
                  <h3 className="mb-4 text-xl font-bold">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="bg-background border-border flex items-center space-x-4 rounded-lg border p-3"
                      >
                        <div className="flex-shrink-0">
                          {activity.type === 'application' && (
                            <Send className="h-5 w-5 text-blue-500" />
                          )}
                          {activity.type === 'interview' && (
                            <Calendar className="h-5 w-5 text-green-500" />
                          )}
                          {activity.type === 'cover_letter' && (
                            <FileText className="h-5 w-5 text-purple-500" />
                          )}
                          {activity.type === 'profile_view' && (
                            <Eye className="h-5 w-5 text-orange-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {activity.type === 'application' && 'Applied to'}
                            {activity.type === 'interview' && 'Interview scheduled with'}
                            {activity.type === 'cover_letter' && 'Generated cover letter for'}
                            {activity.type === 'profile_view' && 'Profile viewed by'}{' '}
                            <span className="font-bold">{activity.company}</span>
                          </p>
                          <p className="text-muted-foreground text-sm">{activity.position}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-muted-foreground text-sm">{activity.date}</p>
                          <Badge
                            className={`text-xs ${
                              activity.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : activity.status === 'scheduled'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {activity.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Saved Jobs */}
                <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Saved Jobs</h3>
                    <Link
                      href="/jobs"
                      className="text-sm font-medium text-purple-500 hover:text-purple-600"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {savedJobs.map((job, index) => (
                      <div
                        key={index}
                        className="bg-background border-border rounded-lg border p-4 transition-shadow hover:shadow-md"
                      >
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-bold">{job.position}</h4>
                            <p className="font-medium text-purple-600">{job.company}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4 fill-current text-red-500" />
                          </Button>
                        </div>
                        <div className="text-muted-foreground mb-3 flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-3 w-3" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="border-2 border-black bg-purple-500 text-white hover:bg-purple-600"
                        >
                          Apply Now
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
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
