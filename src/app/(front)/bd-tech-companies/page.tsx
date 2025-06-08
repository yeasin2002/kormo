'use client';

import {
  OnsiteJobHero,
  SearchFilterCompanies,
  ShowCompaniesWithFiltered,
} from '@/features/bd-tech-companies';
import { useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const OnsiteJobs = () => {
  const [value, setTechValue] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <OnsiteJobHero />
      <SearchFilterCompanies
        techValue={value}
        setTechValue={setTechValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ShowCompaniesWithFiltered />

      <Pagination className="my-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default OnsiteJobs;
