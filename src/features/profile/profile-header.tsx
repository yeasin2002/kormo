'use client';

import { Button } from '@/components/retroui';
import { Edit, Settings } from 'lucide-react';
import { useState } from 'react';

export const ProfileHeader = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
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
  );
};
