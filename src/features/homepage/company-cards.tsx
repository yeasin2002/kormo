import { Badge, Button } from "@/components/retroui";
import { Code, ExternalLink, MapPin, Users } from "lucide-react";

interface Company {
  CompanyName: string;
  OfficeLocation: string;
  Technologies: string[];
  WebPresence: string[];
  teamMembers: string;
}

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Company Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
          {company["CompanyName"]}
        </h3>

        <div className="flex items-start space-x-2 text-gray-400 text-sm">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span className="line-clamp-2">{company["OfficeLocation"]}</span>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Code className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-gray-300">
            Technologies
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {company.Technologies.map((tech, index) => (
            <Badge
              key={index}
              className="bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Team Size */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Users className="w-4 h-4 text-yellow-400" />
          <span className="font-medium text-gray-300">Engineers:</span>
          <span>{company["teamMembers"]}</span>
        </div>
      </div>

      {/* WebPresence */}
      <div className="space-y-2">
        {company["WebPresence"].map((url, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-yellow-400 transition-all duration-200 group/btn"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <span className="truncate">
                {url.replace(/^https?:\/\//, "")}
              </span>
              <ExternalLink className="w-3 h-3 group-hover/btn:text-yellow-400 transition-colors" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
