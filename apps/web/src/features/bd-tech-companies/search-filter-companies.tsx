'use client';

import { SearchInput } from '@/components/custom-ui/search-input';
import { Button, buttonVariants } from '@/components/ui/button';
import { companiesTech } from '@/data/companies-tech';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';
import { MultiSelect } from './multi-select';

interface Props {
  techValue: string[];
  setTechValue: Dispatch<SetStateAction<string[]>>;

  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;

  children?: React.ReactNode;
}

export function SearchFilterCompanies({
  techValue,
  setTechValue,
  searchValue,
  setSearchValue,
}: Props) {
  const onTechChange = (currentValue: string) => {
    setTechValue((pre) =>
      pre.includes(currentValue) ? pre.filter((v) => v !== currentValue) : [...pre, currentValue],
    );
  };
  return (
    <div className="bg-card border-border container mx-auto mb-10 rounded-2xl border-2 p-6 shadow-lg">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row">
        <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <MultiSelect
          label="Technologies"
          value={techValue}
          onToggleItem={onTechChange}
          allOptions={companiesTech}
        />

        {/* <Select>
          <SelectTrigger className="bg-background hover:bg-background w-[180px] py-6">
            <SelectValue placeholder="Team Size" className="!text-black" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="light">0-10</SelectItem>
            <SelectItem value="dark">10-50</SelectItem>
            <SelectItem value="system">50+</SelectItem>
          </SelectContent>
        </Select> */}
      </div>

      <div className="space-y-6">
        <div>
          {techValue?.length > 0 && (
            <h3 className="text-foreground text-lg font-bold">Technologies</h3>
          )}
          <div className="flex flex-wrap gap-2">
            {techValue.map((tech) => (
              <span
                key={tech}
                onClick={() => onTechChange(tech)}
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
            onClick={() => {
              setTechValue([]);
              setSearchValue('');
            }}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
