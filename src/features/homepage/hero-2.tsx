import starIcon from "@/assets/star.svg";
import { Badge, Button } from "@/components/retroui";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export const Hero2 = () => {
  return (
    <div className=" bg-background text-foreground relative overflow-hidden container mx-auto">
      {/* Decorative Stars */}
      <div className="absolute top-20 left-20 text-foreground opacity-60">
        <Image src={starIcon} alt="Star" className="w-8 h-8" />
      </div>
      <div className="absolute top-32 left-32 text-yellow-500">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 right-32 text-yellow-500">
        <Image src={starIcon} alt="Star" className="w-8 h-8" />
      </div>
      <div className="absolute bottom-52 right-20 text-foreground opacity-60">
        <Sparkles className="w-8 h-8 text-yellow-500" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-16 lg:pt-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Promotional Badge */}
          <div className="mb-12">
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 text-sm font-medium rounded-full shadow-sm border-2 border-black">
              Under Maintenance
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold - mb-8 font-head uppercase">
            Finding Jobs
            <br />
            <span className="text-yellow-500">is easy now!</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We are a platform that helps you find the best job for you. A place
            where you can find companies that match your skills and interests. A
            place where you can find remote job opportunities. A place where you
            can grow your skills and get hired.
            {/* <span className="font-semibold text-foreground">stand out</span>. */}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-8 py-4 text-lg rounded-lg shadow-md border-2 border-black"
            >
              Get Access Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background text-foreground border-2 border-foreground hover:bg-muted font-semibold px-8 py-4 text-lg rounded-lg shadow-md"
            >
              Explore Components
            </Button>
          </div>

          {/* Feature Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border-2 border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-foreground text-background rounded-lg">
                  <Blocks className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Premium Blocks</h3>
              </div>
              <p className="text-muted-foreground text-left">
                50+ ready-to-use blocks to speed up your development.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-foreground text-background rounded-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Templates</h3>
              </div>
              <p className="text-muted-foreground text-left">
                Complete websites that you can start building from.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-foreground text-background rounded-lg">
                  <Figma className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Figma UI Kit</h3>
              </div>
              <p className="text-muted-foreground text-left">
                Creating a Neobrutalist design? Our Figma kit makes it easier.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
