const service = [
  ` Smart Recommendations`,
  `Advanced Automations`,
  `Custom Tags`,
  `Audience Segments`,
  `Newsletter Templates`,
];

export const SiteStatistics = () => {
  return (
    <div className="container mx-auto pb-28">
      <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-2 lg:h-[500px] lg:grid-cols-4">
        {/* What's Included Card - Large */}
        <div className="bg-card border-border rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 hover:shadow-xl lg:col-span-2 lg:row-span-2">
          <h3 className="text-foreground mb-8 text-3xl font-bold">{`What's`} in our toolkit?</h3>
          <div className="space-y-4">
            {service.map((item, index) => (
              <div className="flex items-center space-x-3" key={index}>
                <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="bg-card border-border flex flex-col justify-center rounded-2xl border-2 p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl lg:col-span-2">
          <div className="text-foreground mb-4 text-5xl font-bold lg:text-6xl">200,000+</div>
          <p className="text-muted-foreground text-lg">
            subscribers scaling their one-person business
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-card border-border flex flex-col justify-center rounded-2xl border-2 p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="text-foreground mb-4 text-4xl font-bold lg:text-5xl">6 years</div>
          <p className="text-muted-foreground text-sm">
            helping solopreneurs define and find their own freedom
          </p>
        </div>

        {/* Revenue Sources Card */}
        <div className="bg-card border-border rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <h3 className="text-foreground mb-6 text-2xl font-bold">Revenue sources</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                <span className="text-foreground">Courses</span>
              </div>
              <span className="text-foreground font-bold">70%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                <span className="text-foreground">Subscriptions</span>
              </div>
              <span className="text-foreground font-bold">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 rounded-full bg-green-500"></div>
                <span className="text-foreground">Sponsorships</span>
              </div>
              <span className="text-foreground font-bold">10%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 rounded-full bg-orange-500"></div>
                <span className="text-foreground">Coaching</span>
              </div>
              <span className="text-foreground font-bold">5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
