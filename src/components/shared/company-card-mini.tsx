import { Badge, Button } from "@/components/retroui";
import { type Company } from "@/data";
import { Code, ExternalLink, MapPin, Users } from "lucide-react";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCardMini({ company }: CompanyCardProps) {
  // Parse technologies from string if needed
  const techArray = Array.isArray(company.technologies)
    ? company.technologies
    : company.office_location.split(", ");

  // Extract location from the mixed data
  const location = company.company_name || "Location not provided";
  const totalTeamMember =
    company.no_of_software_engineers || "Team size not specified";

  // Extract website URL
  const websiteUrl =
    company.web_presence?.[0] || company.technologies?.[0] || "#";
  // const websiteDisplay = websiteUrl
  //   .replace(/\[Website\]$/, "")
  //   .replace(/^https?:\/\//, "");

  return (
    <div className="bg-card border-2 border-border rounded-xl p-4 shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-foreground line-clamp-1">
          {company.company_name}
        </h3>

        {/* <Badge className="bg-yellow-400 text-black border border-black text-xs">
          Hiring
        </Badge> */}
      </div>

      <div className="flex items-start space-x-1.5 text-muted-foreground text-xs mb-3">
        <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
        <span className="line-clamp-1">{location}</span>
      </div>

      <div className="mb-3">
        <div className="flex items-center space-x-1.5 mb-1.5">
          <Code className="w-3.5 h-3.5 text-yellow-500" />
          <span className="text-xs font-medium">Tech Stack</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {techArray.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs px-1.5 py-0.5"
            >
              {tech}
            </Badge>
          ))}
          {techArray.length > 3 && (
            <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 text-xs px-1.5 py-0.5">
              +{techArray.length - 3}
            </Badge>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
        <div className="flex items-center space-x-1.5 text-xs text-muted-foreground ">
          <Users className="w-3.5 h-3.5" />
          <span>{totalTeamMember}</span>
        </div>

        <Button
          // variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs hover:bg-muted"
        >
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1"
          >
            <span>Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </Button>
      </div>
    </div>
  );
}
