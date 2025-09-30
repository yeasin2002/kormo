import { Code, ExternalLink, MapPin, Users } from "lucide-react";
import { Badge, Button } from "@/components/retroui";

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
		<div className="group hover:-translate-y-1 rounded-lg border border-gray-700 bg-[#FED1AC] p-6 font-sans text-[#1E1E1E] shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900">
			{/* Company Header */}
			<div className="mb-6">
				<h3 className="mb-2 font-bold font-head text-xl transition-colors">
					{company["CompanyName"]}
				</h3>

				<div className="flex items-start space-x-2 text-sm">
					<MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
					<span className="line-clamp-2">{company["OfficeLocation"]}</span>
				</div>
			</div>

			{/* Technologies */}
			<div className="mb-6">
				<div className="mb-3 flex items-center space-x-2">
					<Code className="h-4 w-4 text-yellow-400" />
					<span className="font-medium text-sm">Technologies</span>
				</div>

				<div className="flex flex-wrap gap-2">
					{company.Technologies.map((tech, index) => (
						<Badge
							key={index}
							className="border-gray-600 bg-gray-800 text-gray-100 text-xs hover:bg-gray-700"
						>
							{tech}
						</Badge>
					))}
				</div>
			</div>

			{/* Team Size */}
			<div className="mb-6">
				<div className="flex items-center space-x-2 text-sm">
					<Users className="h-4 w-4 text-yellow-400" />
					<span className="font-medium">Engineers:</span>
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
						className="group/btn w-full border-gray-600 bg-transparent transition-all duration-200 hover:border-yellow-400 hover:bg-gray-800 hover:text-white"
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
							<ExternalLink className="h-3 w-3 transition-colors group-hover/btn:text-yellow-400" />
						</a>
					</Button>
				))}
			</div>
		</div>
	);
}
