'use client';

import {
  OnsiteJobHero,
  SearchFilterCompanies,
  ShowCompaniesWithFiltered,
} from '@/features/bd-tech-companies';
import { useEffect, useState } from 'react';

import { filterCompaniesWithPagination } from '@/actions/companies-search.actions';
import { PaginatingWithFunctionality } from '@/components/shared';
import type { CompanySchema, PaginationMetaType } from '@/type';

const PAGE_SIZE = 10;

const OnsiteJobs = () => {
  const [searchValue, setSearchValue] = useState('');
  const [techValues, setTechValue] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [companies, setCompanies] = useState<CompanySchema[]>([]);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMetaType>({
    currentPage: 1,
    totalPages: 1,
    pageSize: PAGE_SIZE,
    totalItems: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const result = await filterCompaniesWithPagination({
          searchValue,
          techValue: techValues,
          page: currentPage,
          pageSize: PAGE_SIZE,
        });

        setCompanies(result.data);
        setPaginationMeta(result.metadata);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, [currentPage, searchValue, techValues]);

  return (
    <div className="pb-10">
      <OnsiteJobHero />
      <SearchFilterCompanies
        techValue={techValues}
        setTechValue={setTechValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ShowCompaniesWithFiltered companies={companies} isLoading={isLoading} />

      {paginationMeta.totalPages > 1 && (
        <PaginatingWithFunctionality
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginationMeta={paginationMeta}
        />
      )}
    </div>
  );
};

export default OnsiteJobs;
