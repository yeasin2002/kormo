export const SiteStatistics = () => {
  return (
    <div className="max-w-7xl mx-auto container pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[500px]">
        {/* What's Included Card - Large */}
        <div className="lg:col-span-2 lg:row-span-2 bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            {`What's`} in our toolkit?
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="text-lg text-foreground">
                Smart Recommendations
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="text-lg text-foreground">
                Advanced Automations
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="text-lg text-foreground">Custom Tags</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="text-lg text-foreground">Audience Segments</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="text-lg text-foreground">
                Newsletter Templates
              </span>
            </div>
          </div>
        </div>

        {/* Subscribers Card */}
        <div className="lg:col-span-2 bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-center text-center">
          <div className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            200,000+
          </div>
          <p className="text-lg text-muted-foreground">
            subscribers scaling their one-person business
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-center text-center">
          <div className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            6 years
          </div>
          <p className="text-sm text-muted-foreground">
            helping solopreneurs define and find their own freedom
          </p>
        </div>

        {/* Revenue Sources Card */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Revenue sources
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-foreground">Courses</span>
              </div>
              <span className="font-bold text-foreground">70%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-foreground">Subscriptions</span>
              </div>
              <span className="font-bold text-foreground">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-foreground">Sponsorships</span>
              </div>
              <span className="font-bold text-foreground">10%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
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
