import { AlertCircle, CheckCircle, Zap } from "lucide-react";
import React from "react";

export const CoverLetterFeatures = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-yellow-100 dark:bg-yellow-900/20 border-2 border-border rounded-xl p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
          <span className="font-bold">AI-Powered</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Our AI analyzes your resume and the job description to create a
          tailored cover letter.
        </p>
      </div>
      <div className="bg-purple-100 dark:bg-purple-900/20 border-2 border-border rounded-xl p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span className="font-bold">Customizable</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Choose from 20 different tones to match the company culture and your
          personality.
        </p>
      </div>
      <div className="bg-blue-100 dark:bg-blue-900/20 border-2 border-border rounded-xl p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="font-bold">Professional</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Get a professionally written cover letter that highlights your
          relevant skills and experience.
        </p>
      </div>
    </div>
  );
};
