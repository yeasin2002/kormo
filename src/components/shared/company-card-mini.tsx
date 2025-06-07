import { Badge, Button } from '@/components/retroui';
import { type Company } from '@/data';
import { Code, ExternalLink, MapPin, Trophy, Users } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCardMini({ company }: CompanyCardProps) {
  const techArray = Array.isArray(company.technologies)
    ? company.technologies
    : company.office_location.split(', ');

  const totalTeamMember = company.no_of_software_engineers || 'Team size not specified';

  return (
    <div className="bg-card border-border flex h-full flex-col rounded-xl border-2 p-4 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-foreground line-clamp-1 text-lg font-bold">{company.company_name}</h3>

        {company.isTopChoice && (
          <Badge className="flex items-center gap-x-1 rounded-lg border border-black bg-blue-100 text-xs text-black">
            <Trophy className="size-3.5" />
            <span>Top Choice</span>
          </Badge>
        )}
      </div>

      <div className="text-muted-foreground mb-3 flex items-start space-x-1.5 text-xs">
        <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />

        <span className="line-clamp-1">{company.office_location}</span>
      </div>

      <div className="mb-3">
        <div className="mb-1.5 flex items-center space-x-1.5">
          <Code className="h-3.5 w-3.5 text-yellow-500" />
          <span className="text-xs font-medium">Tech Stack</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {techArray.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              className="border border-blue-200 bg-blue-100 px-1.5 py-0.5 text-xs text-blue-800 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tech}
            </Badge>
          ))}
          {techArray.length > 3 && (
            <Badge className="border border-gray-200 bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              +{techArray.length - 3}
            </Badge>
          )}
        </div>
      </div>

      <div className="border-border mt-auto flex items-center justify-between border-t pt-2">
        <div className="text-muted-foreground flex items-center space-x-1.5 text-xs">
          <Users className="h-3.5 w-3.5" />
          <span>{totalTeamMember}</span>
        </div>

        <Button
          // variant="ghost"
          size="sm"
          className="hover:bg-muted h-7 px-2 text-xs"
        >
          <a
            href={company.web_presence.web}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1"
          >
            <span>Website</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>
    </div>
  );
}
