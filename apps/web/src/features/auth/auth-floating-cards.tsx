export const EarningCards = () => {
	return (
		<div className="absolute top-4 right-7 rotate-3 transform rounded-2xl border-2 border-black bg-white p-4 shadow-lg transition-transform hover:rotate-0">
			<div className="mb-1 text-gray-600 text-xs">Money in</div>
			<div className="font-black text-2xl text-black">$45,230.50</div>
			<div className="mt-2 flex justify-between text-gray-600 text-xs">
				<div>
					<div className="font-bold">2,145</div>
					<div>Earned</div>
				</div>
				<div>
					<div className="font-bold">1,890</div>
					<div>Jobs</div>
				</div>
			</div>
		</div>
	);
};

export const JobStateCard = () => {
	return (
		<div className="-rotate-2 absolute top-20 left-7 transform rounded-2xl border-2 border-black bg-white p-4 shadow-lg transition-transform hover:rotate-0">
			<div className="mb-2 flex items-center justify-between">
				<span className="text-gray-600 text-xs">Active</span>
				<div className="h-2 w-2 rounded-full bg-green-400" />
			</div>
			<div className="font-black text-black text-xl">127 Jobs</div>
			<div className="mt-2 h-2 w-full rounded-full bg-gray-200">
				<div className="h-2 w-3/4 rounded-full bg-green-400" />
			</div>
		</div>
	);
};

export const ProfileCard = () => {
	return (
		<div className="absolute top-40 right-20 rotate-1 transform rounded-2xl border-2 border-black bg-white p-4 shadow-lg transition-transform hover:rotate-0">
			<div className="mb-3 flex items-center space-x-3">
				<div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400">
					<span className="font-bold text-black text-sm">JS</span>
				</div>
				<div>
					<div className="font-bold text-black text-sm">John Smith</div>
					<div className="text-gray-600 text-xs">john@techcorp.com</div>
				</div>
			</div>
			<div className="inline-block rounded-full bg-green-100 px-2 py-1 text-green-800 text-xs">
				Available
			</div>
			<div className="mt-3 flex justify-between text-xs">
				<div>
					<div className="font-bold text-black">$85.00</div>
					<div className="text-gray-600">Rate/hr</div>
				</div>
				<div>
					<div className="font-bold text-black">24</div>
					<div className="text-gray-600">Projects</div>
				</div>
			</div>
		</div>
	);
};

export const JobTaskCard = () => {
	return (
		<div className="absolute bottom-10 left-10 space-y-3">
			<div className="-rotate-1 transform rounded-lg border-2 border-black bg-purple-100 p-3 shadow-md">
				<div className="mb-1 text-purple-600 text-xs">🎨 Design Task</div>
				<div className="font-bold text-black text-sm">Update design system</div>
			</div>
			<div className="rotate-2 transform rounded-lg border-2 border-black bg-blue-100 p-3 shadow-md">
				<div className="mb-1 text-blue-600 text-xs">📋 Management</div>
				<div className="font-bold text-black text-sm">Assign new tasks</div>
			</div>
			<div className="-rotate-2 transform rounded-lg border-2 border-black bg-green-100 p-3 shadow-md">
				<div className="mb-1 text-green-600 text-xs">💻 Development</div>
				<div className="font-bold text-black text-sm">Build mobile app</div>
			</div>
		</div>
	);
};

export const NotificationCard = () => {
	return (
		<div className="absolute right-7 bottom-36 space-y-2">
			<div className="rounded-lg border-2 border-black bg-white p-2 text-xs shadow-md">
				<div className="flex items-center space-x-2">
					<div className="h-2 w-2 rounded-full bg-green-400" />
					<span className="font-bold">New job posted</span>
				</div>
			</div>
			<div className="rounded-lg border-2 border-black bg-white p-2 text-xs shadow-md">
				<div className="flex items-center space-x-2">
					<div className="h-2 w-2 rounded-full bg-yellow-400" />
					<span className="font-bold">Payment received</span>
				</div>
			</div>
		</div>
	);
};

export const CompanyLogos = () => {
	return (
		<div className="absolute top-60 left-20 flex space-x-2">
			<div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
				<span className="font-bold text-white text-xs">G</span>
			</div>
			<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
				<span className="font-bold text-white text-xs">M</span>
			</div>
			<div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
				<span className="font-bold text-white text-xs">N</span>
			</div>
		</div>
	);
};

export const FloatingElements = () => {
	return (
		<>
			<div className="absolute top-1/4 right-8 rotate-12 transform rounded-lg border-2 border-black bg-yellow-400 px-3 py-2 text-black shadow-lg">
				<span className="font-bold text-sm">Hiring!</span>
			</div>
			<div className="-rotate-6 absolute right-16 bottom-1/3 transform rounded-lg border-2 border-black bg-white px-3 py-2 text-black shadow-lg">
				<span className="font-bold text-sm">Remote</span>
			</div>
			<div className="absolute top-1/2 left-8 rotate-6 transform rounded-lg border-2 border-black bg-green-400 px-3 py-2 text-black shadow-lg">
				<span className="font-bold text-sm">$120/hr</span>
			</div>
		</>
	);
};

export const SecureLogin = () => {
	return (
		<div className="-rotate-3 absolute right-6 bottom-6 transform rounded-lg border-2 border-black bg-blue-400 px-4 py-2 text-black shadow-lg transition-transform duration-300 hover:rotate-0">
			<span className="font-bold text-sm">Secure Login ✨</span>
		</div>
	);
};
