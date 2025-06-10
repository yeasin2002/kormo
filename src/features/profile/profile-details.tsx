/* eslint-disable @next/next/no-img-element */

import { Badge } from '@/components/retroui';

import { Calendar, DollarSign, Mail, MapPin, Phone } from 'lucide-react';

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

export const ProfileDetails = () => {
  return (
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
  );
};
