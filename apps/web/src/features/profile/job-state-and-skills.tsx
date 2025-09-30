import {
	Award,
	Briefcase,
	Calendar,
	Eye,
	FileText,
	Heart,
	Plus,
} from "lucide-react";
import { Badge } from "@/components/retroui";
import { Button } from "@/components/ui/button";

// Mock user data
const userData = {
	name: "Sarah Johnson",
	email: "sarah.johnson@email.com",
	phone: "+1 (555) 123-4567",
	location: "San Francisco, CA",
	title: "Senior Frontend Developer",
	joinDate: "January 2024",
	avatar: "/placeholder.svg?height=120&width=120",
	bio: "Passionate frontend developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and creating exceptional user experiences.",
	skills: [
		"React",
		"TypeScript",
		"Next.js",
		"Tailwind CSS",
		"Node.js",
		"GraphQL",
		"AWS",
		"Figma",
	],
	experience: "5+ years",
	hourlyRate: "$85",
	availability: "Available",
	profileCompletion: 85,
};

const stats = {
	jobsApplied: 24,
	interviews: 8,
	offers: 3,
	coverLettersGenerated: 15,
	profileViews: 142,
	savedJobs: 12,
};

export const JobStateAndSkills = () => {
	return (
		<>
			<div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
				<div className="rounded-xl border-2 border-border bg-blue-100 p-4 shadow-md dark:bg-blue-900/20">
					<div className="mb-2 flex items-center justify-between">
						<Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
						<span className="font-black text-2xl">{stats.jobsApplied}</span>
					</div>
					<p className="font-bold text-sm">Jobs Applied</p>
				</div>
				<div className="rounded-xl border-2 border-border bg-green-100 p-4 shadow-md dark:bg-green-900/20">
					<div className="mb-2 flex items-center justify-between">
						<Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
						<span className="font-black text-2xl">{stats.interviews}</span>
					</div>
					<p className="font-bold text-sm">Interviews</p>
				</div>
				<div className="rounded-xl border-2 border-border bg-yellow-100 p-4 shadow-md dark:bg-yellow-900/20">
					<div className="mb-2 flex items-center justify-between">
						<Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
						<span className="font-black text-2xl">{stats.offers}</span>
					</div>
					<p className="font-bold text-sm">Job Offers</p>
				</div>
				<div className="rounded-xl border-2 border-border bg-purple-100 p-4 shadow-md dark:bg-purple-900/20">
					<div className="mb-2 flex items-center justify-between">
						<FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
						<span className="font-black text-2xl">
							{stats.coverLettersGenerated}
						</span>
					</div>
					<p className="font-bold text-sm">Cover Letters</p>
				</div>
				<div className="rounded-xl border-2 border-border bg-orange-100 p-4 shadow-md dark:bg-orange-900/20">
					<div className="mb-2 flex items-center justify-between">
						<Eye className="h-6 w-6 text-orange-600 dark:text-orange-400" />
						<span className="font-black text-2xl">{stats.profileViews}</span>
					</div>
					<p className="font-bold text-sm">Profile Views</p>
				</div>
				<div className="rounded-xl border-2 border-border bg-pink-100 p-4 shadow-md dark:bg-pink-900/20">
					<div className="mb-2 flex items-center justify-between">
						<Heart className="h-6 w-6 text-pink-600 dark:text-pink-400" />
						<span className="font-black text-2xl">{stats.savedJobs}</span>
					</div>
					<p className="font-bold text-sm">Saved Jobs</p>
				</div>
			</div>

			{/* Skills Section */}
			<div className="rounded-2xl border-2 border-border bg-card p-6 shadow-lg">
				<div className="mb-4 flex items-center justify-between">
					<h3 className="font-bold text-xl">Skills & Technologies</h3>
					<Button variant="ghost" size="sm">
						<Plus className="mr-1 h-4 w-4" />
						Add Skill
					</Button>
				</div>
				<div className="flex flex-wrap gap-2">
					{userData.skills.map((skill, index) => (
						<Badge
							key={index}
							className="border border-purple-200 bg-purple-100 px-3 py-1 font-medium text-purple-800 text-sm"
						>
							{skill}
						</Badge>
					))}
				</div>
			</div>
		</>
	);
};
