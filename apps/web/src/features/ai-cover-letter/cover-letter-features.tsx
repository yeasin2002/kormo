import { AlertCircle, CheckCircle, Zap } from 'lucide-react';
import React from 'react';

export const CoverLetterFeatures = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="border-border rounded-xl border-2 bg-yellow-100 p-4 shadow-md dark:bg-yellow-900/20">
        <div className="mb-2 flex items-center space-x-2">
          <Zap className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
          <span className="font-bold">AI-Powered</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Our AI analyzes your resume and the job description to create a tailored cover letter.
        </p>
      </div>
      <div className="border-border rounded-xl border-2 bg-purple-100 p-4 shadow-md dark:bg-purple-900/20">
        <div className="mb-2 flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <span className="font-bold">Customizable</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Choose from 20 different tones to match the company culture and your personality.
        </p>
      </div>
      <div className="border-border rounded-xl border-2 bg-blue-100 p-4 shadow-md dark:bg-blue-900/20">
        <div className="mb-2 flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span className="font-bold">Professional</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Get a professionally written cover letter that highlights your relevant skills and
          experience.
        </p>
      </div>
    </div>
  );
};
