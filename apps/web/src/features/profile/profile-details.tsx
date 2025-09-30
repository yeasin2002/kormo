import type { User } from "better-auth";
import { Calendar, DollarSign, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import imgNotFound from "@/assets/avatar-not-found.png";
import { Badge } from "@/components/retroui";

const userData = {
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

export const ProfileDetails = async ({ user }: { user: User }) => {
	return (
		<div className="rounded-2xl border-2 border-border bg-card p-6 shadow-lg">
			<div className="mb-6 text-center">
				<div className="relative inline-block">
					<Image
						src={user.image || imgNotFound}
						alt={user.name || "Profile"}
						className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-border shadow-lg"
						width={200}
						height={200}
					/>
					<div className="-right-1 -bottom-1 absolute h-6 w-6 rounded-full border-2 border-white bg-green-400" />
				</div>
				<h2 className="mb-1 font-bold text-2xl">{user.name}</h2>
				<p className="mb-2 font-semibold text-purple-600">{userData.title}</p>
				<Badge className="border border-green-200 bg-green-100 text-green-800">
					{userData.availability}
				</Badge>
			</div>

			<div className="space-y-3">
				<div className="flex items-center space-x-3 text-sm">
					<Mail className="h-4 w-4 text-muted-foreground" />
					<span>{user.email}</span>
				</div>
				<div className="flex items-center space-x-3 text-sm">
					<Phone className="h-4 w-4 text-muted-foreground" />
					<span>{userData.phone}</span>
				</div>
				<div className="flex items-center space-x-3 text-sm">
					<MapPin className="h-4 w-4 text-muted-foreground" />
					<span>{userData.location}</span>
				</div>
				<div className="flex items-center space-x-3 text-sm">
					<Calendar className="h-4 w-4 text-muted-foreground" />
					<span>Joined {userData.joinDate}</span>
				</div>
				<div className="flex items-center space-x-3 text-sm">
					<DollarSign className="h-4 w-4 text-muted-foreground" />
					<span>{userData.hourlyRate}/hour</span>
				</div>
			</div>
		</div>
	);
};
