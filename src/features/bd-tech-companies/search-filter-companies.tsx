"use client";

import { SearchInput } from "@/components/custom-ui/search-input";
import { Button, buttonVariants } from "@/components/ui/button";
import { companiesTech } from "@/data/companies-tech";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";
import { MultiSelect } from "./multi-select";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchFilterCompanies() {
  const [value, setValue] = useState<string[]>([]);
  const onTeamToggle = (currentValue: string) => {
    setValue((pre) =>
      pre.includes(currentValue)
        ? pre.filter((v) => v !== currentValue)
        : [...pre, currentValue]
    );
  };

  return (
    <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg container mx-auto mb-10">
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <SearchInput />
        <MultiSelect
          label="Technologies"
          value={value}
          onToggleItem={onTeamToggle}
          allOptions={companiesTech}
        />

        <Select>
          <SelectTrigger className="w-[180px] py-6 bg-background hover:bg-background">
            <SelectValue placeholder="Team Size" className="!text-black" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="light">0-10</SelectItem>
            <SelectItem value="dark">10-50</SelectItem>
            <SelectItem value="system">50+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className=" space-y-6">
        <div>
          {value.length > 0 && (
            <h3 className="text-lg font-bold text-foreground">Technologies</h3>
          )}
          <div className="flex flex-wrap gap-2">
            {value.map((tech) => (
              <span
                key={tech}
                onClick={() => onTeamToggle(tech)}
                className={cn(
                  buttonVariants(),
                  `rounded-lg border-2 font-medium transition-all cursor-pointer`
                )}
              >
                <span>{tech}</span>
                <X className="w-3 h-3 ml-1 " />
              </span>
            ))}
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
