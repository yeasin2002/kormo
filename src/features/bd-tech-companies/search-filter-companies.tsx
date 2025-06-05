'use client';

import { SearchInput } from '@/components/custom-ui/search-input';
import { Button, buttonVariants } from '@/components/ui/button';
import { companiesTech } from '@/data/companies-tech';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useState } from 'react';
import { MultiSelect } from './multi-select';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SearchFilterCompanies() {
  const [value, setValue] = useState<string[]>([]);
  const onTeamToggle = (currentValue: string) => {
    setValue((pre) =>
      pre.includes(currentValue) ? pre.filter((v) => v !== currentValue) : [...pre, currentValue],
    );
  };

  return (
    <div className="bg-card border-border container mx-auto mb-10 rounded-2xl border-2 p-6 shadow-lg">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row">
        <SearchInput />
        <MultiSelect
          label="Technologies"
          value={value}
          onToggleItem={onTeamToggle}
          allOptions={companiesTech}
        />

        <Select>
          <SelectTrigger className="bg-background hover:bg-background w-[180px] py-6">
            <SelectValue placeholder="Team Size" className="!text-black" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="light">0-10</SelectItem>
            <SelectItem value="dark">10-50</SelectItem>
            <SelectItem value="system">50+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        <div>
          {value.length > 0 && <h3 className="text-foreground text-lg font-bold">Technologies</h3>}
          <div className="flex flex-wrap gap-2">
            {value.map((tech) => (
              <span
                key={tech}
                onClick={() => onTeamToggle(tech)}
                className={cn(
                  buttonVariants(),
                  `cursor-pointer rounded-lg border-2 font-medium transition-all`,
                )}
              >
                <span>{tech}</span>
                <X className="ml-1 h-3 w-3" />
              </span>
            ))}
          </div>
        </div>

        {/* Clear All Filters */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="bg-background text-foreground border-border hover:bg-muted rounded-lg border-2 px-6 py-2 font-semibold shadow-sm"
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
