"use client";

import { Edit, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/retroui";

export const ProfileHeader = () => {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className="mb-8 flex flex-col items-start justify-between lg:flex-row lg:items-center">
			<div>
				<h1 className="mb-2 font-black text-4xl">
					Welcome back, <span className="text-purple-500">Sarah!</span>
				</h1>
				<p className="text-lg text-muted-foreground">
					Manage your profile and track your job search progress
				</p>
			</div>
			<div className="mt-4 flex space-x-3 lg:mt-0">
				<Button
					variant="outline"
					className="flex items-center space-x-2 border-2 border-border hover:bg-muted"
				>
					<Settings className="h-4 w-4" />
					<span>Settings</span>
				</Button>
				<Button
					onClick={() => setIsEditing(!isEditing)}
					className="flex items-center space-x-2 border-2 border-black bg-purple-500 text-white hover:bg-purple-600"
				>
					<Edit className="h-4 w-4" />
					<span>{isEditing ? "Save" : "Edit Profile"}</span>
				</Button>
			</div>
		</div>
	);
};
