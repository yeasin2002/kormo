import { Sparkles } from "lucide-react";
import React from "react";

export const FloatingToast = () => {
	return (
		<div className="fixed right-6 bottom-6 hidden rotate-3 transform rounded-lg border-2 border-black bg-yellow-400 px-4 py-2 text-black shadow-lg transition-transform duration-300 hover:rotate-0 lg:block">
			<div className="flex items-center space-x-2">
				<Sparkles className="h-4 w-4" />
				<span className="font-bold text-sm">Profile 85% Complete!</span>
			</div>
		</div>
	);
};
