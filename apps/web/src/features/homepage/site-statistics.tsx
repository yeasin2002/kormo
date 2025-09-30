const service = [
	" Smart Recommendations",
	"Advanced Automations",
	"Custom Tags",
	"Audience Segments",
	"Newsletter Templates",
];

export const SiteStatistics = () => {
	return (
		<div className="container mx-auto pb-28">
			<div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-2 lg:h-[500px] lg:grid-cols-4">
				{/* What's Included Card - Large */}
				<div className="rounded-2xl border-2 border-border bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-xl lg:col-span-2 lg:row-span-2">
					<h3 className="mb-8 font-bold text-3xl text-foreground">
						{`What's`} in our toolkit?
					</h3>
					<div className="space-y-4">
						{service.map((item, index) => (
							<div className="flex items-center space-x-3" key={index}>
								<div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
									<svg
										className="h-4 w-4 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<span className="text-foreground text-lg">{item}</span>
							</div>
						))}
					</div>
				</div>

				{/* Subscribers Card */}
				<div className="flex flex-col justify-center rounded-2xl border-2 border-border bg-card p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl lg:col-span-2">
					<div className="mb-4 font-bold text-5xl text-foreground lg:text-6xl">
						200,000+
					</div>
					<p className="text-lg text-muted-foreground">
						subscribers scaling their one-person business
					</p>
				</div>

				{/* Experience Card */}
				<div className="flex flex-col justify-center rounded-2xl border-2 border-border bg-card p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
					<div className="mb-4 font-bold text-4xl text-foreground lg:text-5xl">
						6 years
					</div>
					<p className="text-muted-foreground text-sm">
						helping solopreneurs define and find their own freedom
					</p>
				</div>

				{/* Revenue Sources Card */}
				<div className="rounded-2xl border-2 border-border bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
					<h3 className="mb-6 font-bold text-2xl text-foreground">
						Revenue sources
					</h3>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-3">
								<div className="h-4 w-4 rounded-full bg-purple-500" />
								<span className="text-foreground">Courses</span>
							</div>
							<span className="font-bold text-foreground">70%</span>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-3">
								<div className="h-4 w-4 rounded-full bg-blue-500" />
								<span className="text-foreground">Subscriptions</span>
							</div>
							<span className="font-bold text-foreground">15%</span>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-3">
								<div className="h-4 w-4 rounded-full bg-green-500" />
								<span className="text-foreground">Sponsorships</span>
							</div>
							<span className="font-bold text-foreground">10%</span>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-3">
								<div className="h-4 w-4 rounded-full bg-orange-500" />
								<span className="text-foreground">Coaching</span>
							</div>
							<span className="font-bold text-foreground">5%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
