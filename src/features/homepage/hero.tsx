/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/retroui/Badge";

export function Hero() {
  return (
    <div className="  relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Announcement Badge */}
            <Badge className="bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 font-sans">
              under maintenance
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-head ">
                Finding Jobs
                <br />
                <span className="text-yellow-400"> is easy now!</span>
              </h1>

              <p className="text-lg text-gray-400 max-w-lg font-sans">
                Discover countless opportunities with leading tech companies and
                unlock your potential in the evolving job market. Explore roles
                that resonate with your skills and passions in the tech
                industry.
              </p>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Retro UI illustration with colorful geometric shapes, TV, and boombox"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
