import { Button } from '@/components/retroui';

import { Briefcase, Download, FileText } from 'lucide-react';
import Link from 'next/link';

export const QuickActions = () => {
  return (
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
  );
};
