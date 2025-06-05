import { Badge, Button } from '@/components/retroui';
import { SparklesStars } from '@/components/shared';

export const Hero2 = () => {
  return (
    <div className="bg-background text-foreground relative container mx-auto overflow-hidden">
      {/* Decorative Stars */}
      <SparklesStars />
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-16 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Promotional Badge */}
          <div className="mb-12">
            <Badge className="rounded-full border-2 border-black bg-yellow-400 px-6 py-2 text-sm font-medium text-black shadow-sm hover:bg-yellow-500">
              Under Maintenance
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="- font-head mb-8 text-4xl font-bold uppercase md:text-5xl lg:text-6xl xl:text-7xl">
            Finding Jobs
            <br />
            <span className="text-yellow-500">is easy now!</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-lg leading-relaxed md:text-xl">
            We are a platform that helps you find the best job for you. A place where you can find
            companies that match your skills and interests. A place where you can find remote job
            opportunities. A place where you can grow your skills and get hired.
            {/* <span className="font-semibold text-foreground">stand out</span>. */}
          </p>

          {/* CTA Buttons */}
          <div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-lg border-2 border-black bg-yellow-400 px-8 py-4 text-lg font-semibold text-black shadow-md hover:bg-yellow-500"
            >
              Get Access Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background text-foreground border-foreground hover:bg-muted rounded-lg border-2 px-8 py-4 text-lg font-semibold shadow-md"
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
