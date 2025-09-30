import { Briefcase, Download, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/retroui";

export const QuickActions = () => {
	return (
		<div className="rounded-2xl border-2 border-border bg-card p-6 shadow-lg">
			<h3 className="mb-4 font-bold text-lg">Quick Actions</h3>
			<div className="space-y-3">
				<Button
					variant="outline"
					className="w-full justify-start border-2 border-border hover:bg-muted"
				>
					<Link
						href="/cover-letter-generator"
						className="flex items-center space-x-2"
					>
						<FileText className="h-4 w-4" />
						<span>Generate Cover Letter</span>
					</Link>
				</Button>
				<Button
					variant="outline"
					className="w-full justify-start border-2 border-border hover:bg-muted"
				>
					<Link href="/jobs" className="flex items-center space-x-2">
						<Briefcase className="h-4 w-4" />
						<span>Browse Jobs</span>
					</Link>
				</Button>
				<Button
					variant="outline"
					className="w-full justify-start border-2 border-border hover:bg-muted"
				>
					<Download className="mr-2 h-4 w-4" />
					<span>Download Resume</span>
				</Button>
			</div>
		</div>
	);
};
