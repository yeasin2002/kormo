import { Badge } from '@/components/retroui';

import { Calendar, Eye, FileText, Send } from 'lucide-react';

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

export const RecentActivity = () => {
  return (
    <div className="bg-card border-border rounded-2xl border-2 p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <div
            key={index}
            className="bg-background border-border flex items-center space-x-4 rounded-lg border p-3"
          >
            <div className="flex-shrink-0">
              {activity.type === 'application' && <Send className="h-5 w-5 text-blue-500" />}
              {activity.type === 'interview' && <Calendar className="h-5 w-5 text-green-500" />}
              {activity.type === 'cover_letter' && <FileText className="h-5 w-5 text-purple-500" />}
              {activity.type === 'profile_view' && <Eye className="h-5 w-5 text-orange-500" />}
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
  );
};
