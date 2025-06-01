import { Badge, Input } from "@/components/retroui";
import { Button } from "@/components/ui/button";
import { Filter, Search, X } from "lucide-react";

export function SearchFilterCompanies() {
  const technologies = [
    "JavaScript",
    "React",
    "WordPress",
    "Golang",
    "JAVA",
    "Swift",
    "Flutter",
    "NextJs",
    "DevOps",
    "Python",
    "Django",
    "PostgreSQL",
    "Node.js",
    "Vue.js",
    "MongoDB",
    "AWS",
  ];

  return (
    <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg container mx-auto mb-10">
      {/* Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search companies..."
            className="pl-10 bg-background border-2 border-border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <Button
          variant="outline"
          className="bg-background text-foreground border-2 border-border hover:bg-muted font-semibold px-6 py-3 rounded-lg shadow-sm flex items-center space-x-2"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
          <Badge className="bg-yellow-400 text-black ml-2">3</Badge>
        </Button>
      </div>

      {/* Filter Panel */}
      <div className="border-t-2 border-border pt-6 space-y-6">
        {/* Technologies Filter */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">Technologies</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Button
                key={tech}
                variant={index < 3 ? "default" : "outline"}
                size="sm"
                className={`rounded-lg border-2 font-medium transition-all ${
                  index < 3
                    ? "bg-yellow-400 text-black border-black hover:bg-yellow-500"
                    : "bg-background text-foreground border-border hover:bg-muted"
                }`}
              >
                {tech}
                {index < 3 && <X className="w-3 h-3 ml-1" />}
              </Button>
            ))}
          </div>
        </div>

        {/* Team Size Range */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4">
            Team Size Range
          </h3>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="Min"
                className="bg-background border-2 border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <span className="text-muted-foreground font-medium">to</span>
            <div className="flex-1">
              <Input
                type="number"
                placeholder="Max"
                className="bg-background border-2 border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
        </div>

        {/* Clear All Filters */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="bg-background text-foreground border-2 border-border hover:bg-muted font-semibold px-6 py-2 rounded-lg shadow-sm"
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
